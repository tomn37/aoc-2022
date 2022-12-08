const { parseLines} = require('../parseInput')

const lines = parseLines('./input.txt')
const _ = require('lodash')
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
    
        let scoreleft = 0
        let scoreright = 0
        let scoretop = 0
        let scorebottom = 0
        for (let k = j - 1; k >= 0; k--) {

            if (dict[`${i}-${k}`] < char) {
            scoreleft++
            } else {
                scoreleft++
                break;
            }
        }
        
        for (let k = j + 1; k < line.length; k++) {

            if (dict[`${i}-${k}`] < char) {
                scoreright++
            } else {
                scoreright++
                break
            }
        }
        

        for (let k = i - 1; k >= 0 ; k--) {
            
            if (dict[`${k}-${j}`] < char) {
                scoretop++
            } else {   
                scoretop++
                break
            }
        }


        for (let k = i + 1; k < lines.length; k++) {
      
            if (dict[`${k}-${j}`] < char) {
                scorebottom++
            } else {
                scorebottom++
                break
            }
        }

        results[`${i}-${j}`] = scoreleft * scoreright * scorebottom * scoretop
    }
}


console.log(_.max(Object.values(results)))