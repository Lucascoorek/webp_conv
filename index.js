const imagemin = require("imagemin-dir");
const imageminWebp = require("imagemin-webp");
const tar = require("tar");
const fs = require("fs");

const inputPath = "storage";
const outputPath = `${inputPath}-compressed`;
const imageExtensions = "jpg,jpeg,png";

(async () => {
  const files = await imagemin([`${inputPath}/**/*.{${imageExtensions}}`], {
    destination: outputPath,
    plugins: [imageminWebp()],
  });

  const tarFinish = tar
    .c(
      {
        gzip: true, // this will perform the compression too
      },
      [outputPath]
    )
    .pipe(fs.createWriteStream(`${outputPath}.tgz`));
  tarFinish.on("finish", () => {
    fs.rmdir(outputPath, { recursive: true }, (err) => {
      if (err) throw err;
      console.log("finish");
    });
  });
})();
