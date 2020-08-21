# Convert images to webp format

## Installation

You nedd [Node.js](https://nodejs.org/) v10+ to run. Node comes with npm. You can also use [Yarn](https://yarnpkg.com/) instead of npm.

Install the dependencies and start the server.

```sh
$ git clone git@github.com:Lucascoorek/webp_conv.git
$ cd webp_conv
$ npm install
```

Conversion will preserve folder structure and convert only files you define with imageExtensions const. All files, also with other extensions will be copied to new compressed version of the folder.

```javascript
const imageExtensions = "jpg,jpeg,png";
```

Convert folder by running:

```sh
$ node index.js pathToYourFolder
```

You'll find compressed version of your folder in the same directory as the original folder.
