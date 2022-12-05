const { parseLines} = require('../parseInput')

const lines = parseLines('./input.txt')
const numStacks = 9;

const allStacks = []

for (let i = 0; i < numStacks; i++) {
    allStacks.push([])
}

const getStackIndex = (stackNumber) => {
    return stackNumber * 4 + 1
}

let finished = false;
let linesIndex = -1;
while (!finished) {

    linesIndex++
    const line = lines[linesIndex]
    for (let i = 0; i < allStacks.length; i++) {
        const stackIndex = getStackIndex(i)
        line[stackIndex] !== ' ' && allStacks[i].push(line[stackIndex])
    }

    finished =  lines[linesIndex + 1][1] ===     '1'
}

const rearrangementStart = linesIndex + 3

for (let line of lines.slice(rearrangementStart)) {
    const words = line.split(' ')
    const numberToMove = parseInt(words[1])
    const startStack = parseInt(words[3]) 
    const endStack = parseInt(words[5]) 
    const ss = allStacks[startStack -1 ]
    const es = allStacks[endStack-1]
    const elementsToMove = ss.splice(0, numberToMove)
    es.unshift(...elementsToMove)
}


console.log(allStacks.map(x => x[0]))