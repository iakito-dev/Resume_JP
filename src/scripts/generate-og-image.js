import sharp from 'sharp';
import { writeFileSync } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const width = 1200;
const height = 630;
const backgroundColor = '#0a0a0a';
const textColor = '#e5e5e5';

// SVGテンプレート
const svg = `
<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
  <rect width="${width}" height="${height}" fill="${backgroundColor}"/>
  <text x="${width / 2}" y="${height / 2 - 40}"
        font-family="system-ui, -apple-system, sans-serif"
        font-size="64"
        font-weight="bold"
        fill="${textColor}"
        text-anchor="middle">
    伊藤 彬人 | AKITO ITO
  </text>
  <text x="${width / 2}" y="${height / 2 + 40}"
        font-family="system-ui, -apple-system, sans-serif"
        font-size="28"
        fill="${textColor}"
        opacity="0.8"
        text-anchor="middle">
    Software Engineer / ex-Cloud Support Engineer (Database Profile)
  </text>
</svg>
`;

async function generateOGImage() {
  try {
    const outputPath = join(__dirname, '../../public/og-image.png');

    const image = await sharp(Buffer.from(svg))
      .png()
      .toFile(outputPath);

    console.log('✅ OGP画像を生成しました:', outputPath);
  } catch (error) {
    console.error('❌ OGP画像の生成に失敗しました:', error);
    process.exit(1);
  }
}

generateOGImage();

