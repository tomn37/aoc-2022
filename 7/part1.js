const { parseLines} = require('../parseInput')

const lines = parseLines('./input.txt')


let path = ''
const dirs = []
const files = {}
for (const line of lines) {
    const parsedLine = parseLine(line)
    if (parsedLine.type === 'dir') {
        dirs.push([path + '/' + parsedLine.name])
    } 

    if (parsedLine.type === 'file') {
        files[path + '/' + parsedLine.name] = parseInt(parsedLine.value)
    }

    if (parsedLine.type === 'ls') {
        continue
    }

    if (parsedLine.type === 'cd') {
        if (parsedLine.value === '/') {
            continue
        } 
        if (parsedLine.value === '..') {
            path = path.split('/').slice(0, -1).join('/')
        } else {

            path = path +=`/${parsedLine.value}`
        }
    }

}

const dirSize = {}
const fileKeys = Object.keys(files)
for (let dir of dirs) {
    dirSize[dir] = fileKeys.filter(fileKey => fileKey.includes(dir)).reduce((accum, next) => accum += files[next] ,0)
    if (dirSize[dir] > 100000) {
        delete dirSize[dir]
    }
}

console.log(dirSize)

console.log(Object.values(dirSize).reduce((accum, next)=> accum += next, 0))


function parseLine(line) {
    const [part1,part2,part3] = line.split(' ')
    if (part1 === '$') {
        if (part2 === 'cd') {
            return {type: 'cd', value: part3}
        } else {
            return {type: 'ls'}
        }
    } else {
        if (part1 === 'dir') {
            return {type: 'dir', name: part2}
        } else {
            return {type: 'file', name: part2, value: part1}
        }
    }
}