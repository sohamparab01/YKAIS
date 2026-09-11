import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const dir = path.resolve('public/assets/facilities');
const files = fs.readdirSync(dir).filter((f) => f.match(/\.(jpe?g|png)$/i));

console.log(`Found ${files.length} facility images to optimize in ${dir}...\n`);

let totalOriginal = 0;
let totalWebp = 0;

for (const f of files) {
  const inputPath = path.join(dir, f);
  const baseName = f.replace(/\.(jpe?g|png)$/i, '');
  const outputPath = path.join(dir, `${baseName}.webp`);
  const statOrig = fs.statSync(inputPath);
  totalOriginal += statOrig.size;

  const img = sharp(inputPath);
  const meta = await img.metadata();

  let transform = sharp(inputPath);
  if (meta.width > 1920 || meta.height > 1920) {
    transform = transform.resize({
      width: meta.width > meta.height ? 1920 : undefined,
      height: meta.height >= meta.width ? 1920 : undefined,
      withoutEnlargement: true,
      fit: 'inside',
    });
  }

  await transform.webp({ quality: 82, effort: 6 }).toFile(outputPath);

  const statWebp = fs.statSync(outputPath);
  totalWebp += statWebp.size;

  const outMeta = await sharp(outputPath).metadata();
  console.log(
    `${baseName}.webp: ${meta.width}x${meta.height} -> ${outMeta.width}x${outMeta.height} | ` +
      `Orig: ${(statOrig.size / 1024).toFixed(1)} KB -> WebP: ${(statWebp.size / 1024).toFixed(1)} KB ` +
      `(${(((statOrig.size - statWebp.size) / statOrig.size) * 100).toFixed(1)}% reduction)`
  );
}

console.log('\n=======================================');
console.log(`Total Original: ${(totalOriginal / 1024).toFixed(1)} KB (${(totalOriginal / (1024 * 1024)).toFixed(2)} MB)`);
console.log(`Total WebP:     ${(totalWebp / 1024).toFixed(1)} KB (${(totalWebp / (1024 * 1024)).toFixed(2)} MB)`);
console.log(`Total Savings:  ${(((totalOriginal - totalWebp) / totalOriginal) * 100).toFixed(1)}%`);
console.log('=======================================\n');
