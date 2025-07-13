const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const sizes = [16, 32, 48, 128];
const inputDir = path.join(__dirname, 'input');
const outputDir = path.join(__dirname, 'output');

fs.readdirSync(inputDir).forEach((file) => {
    if (!file.endsWith('.svg')) return;

    const inputPath = path.join(inputDir, file);
    const baseName = path.parse(file).name;

    sizes.forEach((size) => {
        const outputPath = path.join(outputDir, `${baseName}-${size}.png`);

        sharp(inputPath)
            .resize(size, size)
            .png()
            .toFile(outputPath)
            .then(() => console.log(`✓ ${outputPath}`))
            .catch((err) => console.error(`✗ Error: ${file} -> ${size}`, err));
    });
});
