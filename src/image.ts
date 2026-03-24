import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

import { logger } from './logger.js';

const MAX_DIMENSION = 1024;

/**
 * Download a Telegram photo, resize it, and save to the group workspace.
 * Returns the container-relative path for the agent to read, or null on failure.
 */
export async function downloadAndResizeTelegramPhoto(
  botToken: string,
  fileId: string,
  groupDir: string,
  messageId: string,
): Promise<string | null> {
  try {
    // Get file path from Telegram API
    const metaRes = await fetch(
      `https://api.telegram.org/bot${botToken}/getFile?file_id=${fileId}`,
    );
    const meta = (await metaRes.json()) as {
      ok: boolean;
      result?: { file_path: string };
    };
    if (!meta.ok || !meta.result?.file_path) {
      logger.warn({ fileId }, 'Image - failed to get file path from Telegram');
      return null;
    }

    // Download the file
    const downloadUrl = `https://api.telegram.org/file/bot${botToken}/${meta.result.file_path}`;
    const imgRes = await fetch(downloadUrl);
    if (!imgRes.ok) {
      logger.warn({ fileId, status: imgRes.status }, 'Image - download failed');
      return null;
    }
    const buffer = Buffer.from(await imgRes.arrayBuffer());

    // Resize and save
    const imagesDir = path.join(groupDir, 'images');
    fs.mkdirSync(imagesDir, { recursive: true });

    const outputPath = path.join(imagesDir, `${messageId}.jpg`);
    await sharp(buffer)
      .resize(MAX_DIMENSION, MAX_DIMENSION, { fit: 'inside' })
      .jpeg({ quality: 85 })
      .toFile(outputPath);

    logger.info({ messageId, outputPath }, 'Image - processed');
    return `/workspace/group/images/${messageId}.jpg`;
  } catch (err) {
    logger.error({ err, messageId }, 'Image - processing failed');
    return null;
  }
}
