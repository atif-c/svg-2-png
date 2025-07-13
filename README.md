# SVG to PNG Resizer with Sharp

This Node.js script converts `.svg` files in the `input/` directory to multiple `.png` files at specified sizes using the [`sharp`](https://github.com/lovell/sharp) image processing library.

## Features

- Converts SVG images to PNG format.
- Outputs PNGs in multiple sizes: 16x16, 32x32, 48x48, and 128x128.
- Organises converted files into an `output/` folder.

## Folder Structure

```
project-root/
├── input/       # Place your .svg files here
├── output/      # Generated .png files will be saved here
├── index.js     # The script
└── README.md    # This file
```

## Requirements

- Node.js (v14 or higher recommended)
- npm (Node Package Manager)

## Setup & Usage

1. Install Dependencies

```
npm install
```

2. Add your `.svg` files to the `input/` folder.

3. Run the script

```
node index.js
```

4. Check the `output/` folder for your resized PNGs.

## Customization

To change output sizes, modify the `sizes` array in `index.js`:

```
const sizes = [16, 32, 48, 128]; // Add or remove sizes here
```
