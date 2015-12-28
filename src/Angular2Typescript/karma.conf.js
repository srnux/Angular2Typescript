module.exports = function (config) {
    config.set({
        browsers: ['Chrome'],
        frameworks: ['jasmine'],
        files: [
          //'wwwroot/lib/**/*.js',
          //'wwwroot/app/**/*.js',
          //'wwwroot/app/**/*.spec.js'
          'wwwroot/app/hello.spec.js'
        ]
    });
};