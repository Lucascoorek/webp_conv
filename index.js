const imagemin = require('imagemin');
const imageminWebp = require('imagemin-webp');

(async () => {
  const img = await imagemin(['storages/**/*.png'], {
    destination: 'build/storages',
    plugins: [
      imageminWebp({lossless: true})
    ]
  });

  console.log('Images optimized');
  console.log(img)
})();