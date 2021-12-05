const {performance} = require('perf_hooks');
const start = performance.now();

const read = require("../readAndSplit.js");
const input = read.readAndSplit(__dirname + '\\input.txt')

const sum = (previousValue, currentValue) => previousValue + currentValue;
const numbers = input[0].split(',').map(number => parseInt(number))
let rawBoards = input.slice(1)
let boards = [];
let cleanedBoards = []

for (let i = 0; i < rawBoards.length-5; i += 6){
    boards.push([rawBoards[i+1], rawBoards[i+2], rawBoards[i+3], rawBoards[i+4], rawBoards[i+5]])
}

for(let i = 0; i < boards.length; i++) {
    cleanedBoards.push(boards[i].map(element => element.split(' ').filter(element => element !== '')))
}

cleanedBoards = cleanedBoards.map(board => board.map(row => row.map(element => ({ value: parseInt(element), marked: 'o' }))))

const displayBoard = (board, key) => {
    const display = board.map(row => row.map(element => element[key]));
    console.log(display)
}

const checkBoard = board => {
    return checkRows(board) + checkColumns(board)
}

const checkRows = board => {
    let winnerVal = 0;
    board.forEach(row => {
        winnerVal += isWinner(row);
    });
    return winnerVal
}

const checkColumns = board => {
    let winnerVal = 0;
    for (let i = 0; i < board[0].length; i++) {
        let column = board.map(row => row[i])
        winnerVal += isWinner(column)
    }
    return winnerVal
}

const isWinner = row => {
    const marked = row.map(element => element.marked)
    const values = row.map(element => element.value)
    return marked.includes('o') ? 0 : values.reduce((prev, next) => prev + next)
}

const uncheckedBoardSum = board => {
    let sum = 0;
    board.forEach(row => {
        row.forEach(element => {
            sum += element.marked === 'o' ? element.value : 0
        })
    });
    return sum;
}

const part1 = () => {
    let winner = false;
    for(let i = 0; i < numbers.length; i++ ) {
        let number = numbers[i]
        for(let j = 0; j < cleanedBoards.length; j++ ) {
            let board = cleanedBoards[j];
            for(let k = 0; k < board.length; k++ ) {
                let row = board[k];
                for(let l = 0; l < row.length; l++) {
                    let element = row[l];
                    if (element.value === number) { 
                        element.marked = 'x' 
                    }
                }
            }
            if ( checkBoard(board) !== 0) {
                // displayBoard(board, 'value')
                return(uncheckedBoardSum(board)*number)
            }
        }
    }
}

const part2 = () => {
    let lastBoard = null;
    let lastNumber = null;
    for(let i = 0; i < numbers.length; i++ ) {
        let number = numbers[i]
        for(let j = 0; j < cleanedBoards.length; j++ ) {
            let board = cleanedBoards[j];
            if(board.winner) { continue }
            for(let k = 0; k < board.length; k++ ) {
                let row = board[k];
                for(let l = 0; l < row.length; l++) {
                    let element = row[l];
                    if (element.value === number) { 
                        element.marked = 'x' 
                    }
                }
            }
            if ( checkBoard(board) !== 0) {
                board.winner = true;
                lastNumber = number;
                lastBoard = board;
            } 
        }
    }
    return(uncheckedBoardSum(lastBoard)*lastNumber)
}

const sampleBoard = [
    [{value: 14, marked: 'x'}, { value: 21, marked: 'x'}, { value: 17, marked: 'x'}, { value: 24, marked: 'x'}, { value: 4, marked: 'x'}],
    [{value: 10, marked: 'o'}, { value: 16, marked: 'o'}, { value: 15, marked: 'o'},  { value: 9, marked: 'x'}, { value: 19, marked: 'o'}],
    [{value: 18, marked: 'o'}, { value: 8, marked: 'o'}, { value: 23, marked: 'x'}, { value: 26, marked: 'o'}, { value: 20, marked: 'o'}],
    [{value: 22, marked: 'o'}, { value: 11, marked: 'x'}, { value: 13, marked: 'o'}, { value: 6, marked: 'o'}, { value: 5, marked: 'x'}],
    [{value: 2, marked: 'x'}, { value: 0, marked: 'x'}, { value: 12, marked: 'o'}, { value: 3, marked: 'o'}, { value: 7, marked: 'x'}]
]

// const check1 = performance.now();

// console.log('part1', part1())
// console.log(`Execution time: ${check1 - start} ms`);

part2()
const end = performance.now();
console.log(`Execution time: ${end - start} ms`);
