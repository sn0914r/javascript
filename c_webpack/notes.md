## Webpack
1. Webpack is a `module bundler` that allows us to bundle all the files in our website—like `JavaScript`, `CSS`, `images`, `fonts`, etc.—into small number of files (like one or two), so that the browser can load them faster
2. For example, if we have 10 JavaScript files, 5 CSS files, and 3 image files, without Webpack, the browser must load each of these files separately, which takes more time.
3. With Webpack:
    1. It combines all Javascript files into a single file
    2. It removes unused code (`tree-shaking`)
    3. It optimizes the code
    4. It converts modren javascript to older versions using the plugins like `Babel`, to make it understandable for older browsers like `Opera`, etc
### Webpack Set up
#### step 1: Initialize the project
```JS
npm init -y
```
#### step 2: Install webpack and Webpack CLI 
```JS
npm install --save-dev webpack webpack-cli
```
#### step 3: Create the Folder structure
```JS
my-app/
├── dist/
│   └── index.html
├── src/
│   └── index.js
├── package.json
```
index.html inside `dist/`:
```HTML
<!DOCTYPE html>
<html>
  <head>
    <title>Webpack Setup</title>
  </head>
  <body>
    <script src="main.js"></script>
  </body>
</html>
```
## Webpack Configuration
#### step 4: Create `webpack.config.js` in the root
```JS
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'development',
};
```
Here;
1. `entry`: The starting point for Webpack to start reading the files and build the `dependency graph`.
2. `output`: 
    1. `filename`: name of the final bundled file
    2. `path`: the path where the bundled file will be placed
    ```JS
    path: path.resolve(__dirname, "folderName")
    ```
3. `mode`:  Set to 'development' for easier debugging or 'production' for optimization

#### step 5: Add the following build script in the `package.json` file
```JS
"scripts": {
  "build": "webpack"
}
```

#### step 6: Run webpack
```JS
npx webpack
```
or
```JS
npm run build
```

## Loaders
1. By default, Webpack only undertands Javascript, not:
    1. CSS files
    2. Images (PNG, JPG)
    3. Fonts, etc
    4. SCSS, etc
2. The Loaders are like translators that tell Webpack how to handle these type of files.
3. Some examples for loaders:
    1. `css-loader`- helps webpack to understand `.css` files
    2. `style-loader` - it injects CSS into the `<style>` tag of HTML file.
    3. `file-loader`- handles images, fonts, etc
    4. `babel-loader` - transpiles modren javascript into older versions.
### using the CSS loaders
1. we need to install `style-loader` and `css-loader` using the following command.
```JS
npm install --save-dev style-loader css-loader
```
2. update the `webpack.config.js` with `module.rules` setion and DONE
```JS
module:{
    rules:{
        test: /\.css$/ // all files that end with .css
        use: ['style-loader', 'css-loader'], // apply these loaders
    }
}
```
### using babel loader
1. install the packages using the following command
```JS
npm install --save-dev babel-loader @babel/core @babel/present-env
```
Here:
1. `babel-loader`: Lets Webpack use Babel
2. `@bable/core`: the Babel compiler
3. `@babel/present-env`: tells Babel which JS features to convert based on browser support
2. create a new file `.babelrc` (`babel config file`) and add the following code:
```JS
{
  "presets": ["@babel/preset-env"]
}
```
or just add the following in package.json
```Js
"babel": {
    "presets": ["@babel/preset-env"]
  }
```
### multimedia
1. paste the following code inside the config file for bundling multimedia
```JS
{
    test: /\.(png|jpe?g|gif|svg|mp3|mp4|webm|ogg|wav)$/i,
    type: 'asset/resource'
}
```
2. if the media is not injected via JS or the the media is inside the html file, then for bundling we need to use the `html-loader` loader.
    1. install the loader `npm install --save-dev html-loader`
    2. add this in the config file:
    ```Js
    test:/\.html$/,
    use: 'html-loader'
    ```
    3. import the html file in our JS file
    ```JS
    import '../dist/index.html'; // This tells Webpack to process your HTML file, handle the image, and include it in the final build.
    ```