/**
 * Here you require every image you need, and can then use it anywhere you want.
 */

const images = {}


images.testimg1_thumbnail = require(`@img/color1.jpg?pipeline=thumbnail`)
images.testimg1_slider = require("@img/color1.jpg?pipeline=slider")



export default images