const { defineConfig } = require('@vue/cli-service')
const path = require('path')
module.exports = defineConfig({
  transpileDependencies: [
    'vuetify',
  ],
  outputDir: path.resolve(__dirname, '../server/public'),
  lintOnSave:false,
 // configuration du server
  devServer: {
    proxy:{
      '/api':{
        target: 'http://localhost:5000/'              //'https://personal-track-app.herokuapp.com'
      }
    }
  }
  
})
