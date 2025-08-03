# SVG to PNG

This Node.js script converts `.svg` files in the `input/` directory to multiple `.png` files at specified sizes using the [`sharp`](https://github.com/lovell/sharp) image processing library.

## Features

- Converts SVG images to PNG format.
- Outputs PNGs in multiple sizes: 16x16, 32x32, 48x48, and 128x128.
- Organises converted files into an `output/` folder.

## Project Structure

```
svg-2-png/
├── input/       # Place your .svg files here
├── output/      # Generated .png files will be saved here
└── index.js     # The script
```

## Requirements

- Node.js
- npm (Node Package Manager)

## Setup & Usage

1. Clone the repository
```
git clone https://github.com/atif-c/svg-2-png.git
cd your-repo-name
```

2. Ensure Node.js is installed (version 14 or higher)

3. Install dependencies

```
npm install
```

4. Create the required folders

Make sure the `input/` and `output/` directories exist in the project root:

```bash
mkdir input output
```

3. Add your `.svg` files to the `input/` folder.

6. Run the script

```
node index.js
```

7. Check the `output/` folder for your resized PNGs.

## Customisation

To change output sizes, modify the `sizes` array in `index.js`:

`const sizes = [16, 32, 48, 128];` <--- MOdify output sizes here
