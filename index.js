const imagemin = require("imagemin-dir");
const imageminWebp = require("imagemin-webp");
const imageminMozjpeg = require("imagemin-mozjpeg");
const imageminPngquant = require("imagemin-pngquant");
const rimraf = require("rimraf");
var mergedirs = require("merge-dirs").default;

const path = process.argv[2];
const folderName = path.split("/");

mergedirs(path, folderName[folderName.length - 1]);

const inputPath = folderName[folderName.length - 1];
const outputPath = `${inputPath}-compressed`;
const outputPathTwo = `${inputPath}-compressed-two`;
const imageExtensions = "jpg,jpeg,png";

imagemin([`${inputPath}/**/*.{${imageExtensions}}`], {
  destination: outputPath,
  plugins: [imageminWebp()],
})
  .then(() => {
    return imagemin([`${inputPath}/**/*.{${imageExtensions}}`], {
      destination: outputPathTwo,
      plugins: [imageminMozjpeg(), imageminPngquant()],
    });
  })
  .then(() => {
    mergedirs(outputPathTwo, outputPath);
    mergedirs(inputPath, outputPath);
    folderName[folderName.length - 1] = outputPath;
    const createPath = folderName.join("/");
    mergedirs(outputPath, createPath);

    rimraf(inputPath, function () {
      rimraf(outputPath, function () {
        rimraf(outputPathTwo, function () {
          console.log("done...");
        });
      });
    });
  });
