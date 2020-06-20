module.exports = {
    entry : './src/app.js',
    module: 
    { rules: [
        {
          exclude: /(node_modules)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        }
      ]
    }
}