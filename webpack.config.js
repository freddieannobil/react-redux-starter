/**
 * Created by fredd on 04/06/2017.
 */
module.exports = {
    entry: ['babel-polyfill','./src/index.js'],
    output: {
        path: "../assets/js/",
        filename: "bundle.js"
    },
    devServer:{
        inline: true,
        contentBase: '.',
        port: 3000

    },
    module:{
        loaders:[
            {
                test: /\.js$/,
                loader: 'babel',
                query:{
                    cacheDirectory:true,
                    presets:['es2015', 'react', 'stage-1']
                }
            },
            {
                test: /\.json$/,
                loader: 'json'
            }
        ]
    }

};