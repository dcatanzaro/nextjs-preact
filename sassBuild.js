const sass = require('node-sass');
const fs = require('fs');
const mkdirp = require('mkdirp');

const dirOutput = './static/css';

if (!fs.existsSync(dirOutput)){
    mkdirp(dirOutput);
}

sass.render({
    file: './styles/index.scss',
    outputStyle: 'compressed'
}, function(error, result) {
    if (!error) {
        fs.writeFile(dirOutput + '/style.min.css', result.css, function(err) {
            if (!err) {
                console.log("CSS Build");
            }
        });
    }
});