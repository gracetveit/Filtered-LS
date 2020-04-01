'use strict'
const fs = require('fs');
const path = require('path');

const filteredLS = function(dir, ext) {
    /*
        Reads a directory. If there is an error, it returns undefined and logs
        the error to STDOUT. Otherwise, it passes an array of filenames in the
        given directory and checks if each has the same extenion as the argument
        given. If so, it prints the filename to STDOUT.
    */
    fs.readdir(dir, (err, data) => {
        if (err) {console.log(err); return undefined}
        for (let i of data) {
            if (path.extname(i) === '.' + ext) {
                console.log(i);
            }
        }
    })
}

filteredLS(process.argv[2], process.argv[3]);