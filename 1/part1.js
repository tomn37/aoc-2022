const { parseLines} = require('../parseInput')

const lines = parseLines('./input.txt')

let mostCalories = 0
let runningCount = 0
for (const line of lines) {

    if (line != '') {
        runningCount += Number.parseInt(line)
    } else {
        if (runningCount > mostCalories) {
            mostCalories = runningCount
        }
        runningCount = 0
    }

}

console.log('most calories', mostCalories)