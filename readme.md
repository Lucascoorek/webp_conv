# Convert images to webp format

## Installation

You nedd [Node.js](https://nodejs.org/) v10+ to run. Node comes with npm. You can also use [Yarn](https://yarnpkg.com/) instead of npm.

Install the dependencies and start the server.

```sh
$ git clone git@github.com:Lucascoorek/webp_conv.git
$ cd webp_conv
$ npm install
```

Add folder to project's root dir with images you want to convert. Set inputPath const to match folder name. Conversion will preserve folder structure and convert only files you define with imageExtensions const. Files with other extensions will be ommited.

```javascript
const inputPath = "inputFolderName";
const imageExtensions = "jpg,jpeg,png";
```

Convert and commpress folder by running:

```sh
$ node index.js
```

You'll find compressd version of your folder in project's root dir.
