const fs = require("fs")

const files = fs.readdirSync("@img/")

const images = []

// images.push(require('@img/color1.jpg?pipeline=article'))

files.forEach(file => {
    images.push(require('@img/' + file + '?pipeline=article'))
});

