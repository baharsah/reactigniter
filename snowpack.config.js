

module.exports =  {
    mount: {
      "./app/Views/src": "/"
    },
    buildOptions : { out : "public" , clean : false }  , 
    plugins: [
      [
        "@snowpack/plugin-postcss"
      ]
    ]
  }