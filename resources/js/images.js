/**
 * Here you require every image you need, and can then use it anywhere you want.
 */

const images = {
    testimg1_thumbnail: require(`@img/color1.jpg?pipeline=thumbnail`),
    testimg1_slide: require("@img/color1.jpg?pipeline=slide")
}

export default images