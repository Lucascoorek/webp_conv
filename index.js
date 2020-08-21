const imagemin = require("imagemin-dir");
const imageminWebp = require("imagemin-webp");
const rimraf = require("rimraf");
var mergedirs = require('merge-dirs').default;

const path = process.argv[2]
const folderName = path.split("/");

mergedirs(path, folderName[folderName.length-1]);

const inputPath = folderName[folderName.length-1];
const outputPath = `${inputPath}-compressed`;
const imageExtensions = "jpg,jpeg,png";

(async () => {
  await imagemin([`${inputPath}/**/*.{${imageExtensions}}`], {
    destination: outputPath,
    plugins: [imageminWebp()],
  });

  mergedirs(inputPath, outputPath);
  folderName[folderName.length-1] = outputPath
  const createPath = folderName.join("/");  
  mergedirs(outputPath, createPath);

  rimraf(inputPath, function () {
    rimraf(outputPath, function(){
      console.log("done...");
    })
  });


})();
