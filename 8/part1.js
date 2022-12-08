const { parseLines} = require('../parseInput')

const lines = parseLines('./input.txt')

const dict = {}

for (let i = 0; i < lines.length; i++) {
    const line = lines[i]
    for (let j = 0; j < line.length; j++) {
        dict[`${i}-${j}`] = parseInt(line[j])
    }
}

const results = {}
for (let i = 0; i < lines.length; i++) {
    const line = lines[i]
    for (let j = 0; j < line.length; j++) {
        const char = dict[`${i}-${j}`]
        let lVisible = true;
        let rVisible = true;
        let tVisible = true
        let bVisible = true
        for (let k = 0; k < j; k++) {
            if (dict[`${i}-${k}`] >= char) {
                lVisible = false

            }
        }

        for (let k = j + 1; k < line.length; k++) {

            if (dict[`${i}-${k}`] >= char) {
                rVisible = false
            }
        }
        

        for (let k = 0; k < i; k++) {
            if (dict[`${k}-${j}`] >= char) {
                tVisible = false
            }
        }

        for (let k = i + 1; k < lines.length; k++) {
            if (dict[`${k}-${j}`] >= char) {
                bVisible = false
            }
        }

        results[`${i}-${j}`] = lVisible || rVisible || tVisible || bVisible
    }
}


console.log(Object.values(results).filter(x => Boolean(x)).length)