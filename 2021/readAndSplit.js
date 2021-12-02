const fs = require('fs');


readAndSplit = (filename) =>{
  try {
    const data = fs.readFileSync(filename, 'utf8').split("\n").map(each => each.trim());
    return data;
    
  } catch (err) {
    console.error(err)
  }
}

readAndSplit('input.txt')

module.exports.readAndSplit = readAndSplit;