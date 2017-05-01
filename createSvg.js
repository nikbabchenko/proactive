/**
 * Takes svg's from folder (svgsPath) and outputs json file to outputPath and creates file with
 * name outputFileName
 */

const fs = require('fs');
const svgsPath = './icons/';
const outputPath = './src/assets/icons/';
const outputFileName ='svg.json';

try {
    fs.readdir(svgsPath, function (err, files) {
        const result = {};
        files
        .filter( function(elm) {
            return elm.match(/.*\.(svg)/ig);
        })
        .forEach(function (file) {
            const path =  svgsPath + file;
            result[file] = fs.readFileSync(path, 'utf8');
        });

        fs.writeFile(outputPath + outputFileName, JSON.stringify(result), 'utf8', function () {
            console.log('writing...done');
        });
    });
}
catch(err){
    if (err) throw err;
}


