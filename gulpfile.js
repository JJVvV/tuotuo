/**
 * Created by AlexLiu on 2015/6/1.
 */

var gulp = require('gulp'),
    webpack = require('gulp-webpack');
var WebpackDevServer = require("webpack-dev-server");
var config = require('./webpack.config');


gulp.task("webpack-dev-server", function(callback) {
    // Start a webpack-dev-server
    var compiler = webpack(config);

    new WebpackDevServer(compiler, {
        // server and middleware options
    }).listen(3030, "localhost", function(err) {
            //if(err) throw new gutil.PluginError("webpack-dev-server", err);
            // Server listening
            //gutil.log("[webpack-dev-server]", "http://localhost:3030/webpack-dev-server/index.html");

            // keep the server alive or continue?
            // callback();
            console.log('localhost:3030');
        });
});

gulp.task('default',function(){
    gulp.run('webpack-dev-server');
});