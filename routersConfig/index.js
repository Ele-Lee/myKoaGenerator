    
const fs = require('fs')

const PATH = __dirname
const fileList = fs.readdirSync(PATH)
const configObj = {}
fileList.map(file => {
    if(filterFile(file)) return
    configObj[getName(file)] = require(`${PATH}/${file}`)
})
module.exports = configObj


function filterFile (filename) {
    const pattern = /i|Index.js$/
    return pattern.test(filename)
}

function getName (name) {
    return name.substring(0, name.lastIndexOf('.'))
}