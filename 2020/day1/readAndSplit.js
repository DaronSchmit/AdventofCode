const fs = require('fs');


readAndSplit = (filename) =>{
  try {
    const data = fs.readFileSync(filename, 'utf8').split("\n");
    return data;
    
  } catch (err) {
    console.error(err)
  }
}

module.exports.readAndSplit = readAndSplit();