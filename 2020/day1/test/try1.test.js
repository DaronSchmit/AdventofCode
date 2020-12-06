//get equations info from try1.js
const try1 = require("../try1.js");
const read = require(".//readAndSplit.js");

//pull info from txt file split into array
describe("input crunching"), () => {
  it("Should pull info from a txt file and into an array", () => {
    const testArray = [12, 21, 987, 1999];
    const pulledFromFile = pullAndSplit("test.txt");
    
    expect(pulledFromFile).toEqual(testArray);
  });
}

//check two entries to see if they add to 2020, true if yes, false if no
  it("Returns true if the sum is 2020, false if not", () => {
    expect(sumEquals(1999, 21, 2020)).toEqual(true);
    expect(sumEquals(12, 987, 2020)).toEqual(false);
  });

//iterate through an array, checking each entry against entries after it. Logs each comparison
  // it("Iterates through an array, checking with each entry after it", () => {
  //   const mock = jest.spyOn(console, "log");
  //   const message1 = "Comparing index[0]: 12 to index[1]: 21";
  //   const message2 = "Comparing index[0]: 12 to index[2]: 987";
  //   const message3 = "Comparing index[0]: 12 to index[3]: 1999";
  //   const message4 = "Comparing index[1]: 21 to index[2]: 987";
  //   const message5 = "Comparing index[1]: 21 to index[3]: 1999";
  //   const message6 = "Comparing index[2]: 987 to index[3]: 1999";
  //   expect()
  // });

//get the product of the two