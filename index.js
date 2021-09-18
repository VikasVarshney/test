const fs= require('fs');

fs.readFile("index.js","utf8",gotfile); // gotfile is callback function after reading the file 
//fs.readFile("index.js","utf8",(err,data)=>{ console.log(data);});

function gotfile(error,data){
	if(error){ console.log(error);}
	else{ console.log(data);}
}
console.log("File read done");


var content=" This is a test file";
fs.writeFile("myfile.txt",content,"utf8",filewritedone);
function filewritedone(error){
	if(error){ console.log(error);}
	else{ console.log("File write done");}
}

