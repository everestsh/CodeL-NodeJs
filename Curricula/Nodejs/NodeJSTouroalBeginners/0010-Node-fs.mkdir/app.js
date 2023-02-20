var fs = require('fs');
// way 1 create file 
// fs.mkdir('stuff', function(){
//     fs.readFile('readMe.txt', 'utf8', function(err, data){
//         if (err) throw err;
//         fs.writeFile('./stuff/writeMe.txt', data, function(err) {
//             if (err) throw err;
//             console.log('File has been written.');
//             fs.watchFile('./stuff/writeMe.txt', function(curr, prev) {
//                 console.log('File was modified');
//             });
//         });
//     });
// });

// way 2 removed.
var fs = require('fs');
fs.unlink('./stuff/writeMe.txt', function(){
    fs.rmdir('stuff', function(err){
        if(err) throw err;
        console.log('Directory has been removed.')
    });
});

