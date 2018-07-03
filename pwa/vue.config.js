module.exports = {
  pwa: {
    name: 'pwa example',
    themeColor: '#4DBA87',
    msTileColor: '#000000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',

    // configure the workbox plugin
    //workboxPluginMode: 'InjectManifest',
    workboxPluginMode: 'GenerateSW',
    workboxOptions: {
      // swSrc is required in InjectManifest mode.
      //swSrc: './src/sw.js',
      // ...other Workbox options...
      runtimeCaching:[{
        urlPattern: /^http:\/\/localhost:3000\/api/,//new RegExp('^http://localhost:3000/api'),
        handler: 'networkFirst'
        //cacheFirst, fastest, cacheOnly, networkOnly
        //https://developers.google.com/web/tools/workbox/reference-docs/latest/workbox.strategies#methods
      }]
    }
  }
}