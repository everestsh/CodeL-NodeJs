var fs = require('fs');

// way 1
// var readMe = fs.readFileSync('readMe.txt', 'utf8');
// fs.writeFileSync('writeMe.txt', readMe)
// way 2
fs.readFile('readMe.txt', 'utf8', function(err, data){
    // console.log(data);  
    if (err) throw err;
    fs.writeFile('writeFile.txt', data, function(err){
        if(err) throw err;
        console.log('Files has been written.');
    });
});
console.log('test');
