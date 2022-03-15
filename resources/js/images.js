/**
 * Here you require every image you need, and can then use it anywhere you want.
 */

const images = {
    testimg1_thumbnail: require(`@img/color3.jpg?pipeline=thumbnail`),
    testimg1_slide: require("@img/color3.jpg?pipeline=slide"),

    testimg2_article: require("@img/color9.jpg?pipeline=article"),

    construction_sign_thumbnail: require("@img/construction-sign.jpg?pipeline=thumbnail"),
    construction_sign_slide: require("@img/construction-sign.jpg?pipeline=slide"),

    schulbeginn_article: require("@img/schulbeginn.jpg?pipeline=article"),

    geogebra_thumbnail: require("@img/geogebra.png?pipeline=thumbnail"),
    geogebra_slide: require("@img/geogebra.png?pipeline=slide"),

    masks_thumbnail: require("@img/masks.png?pipeline=thumbnail"),
    masks_slide: require("@img/masks.png?pipeline=slide"),
    masks_article: require("@img/masks.png?pipeline=article"),

    schuelergenossenschaft_gruendung_slide: require("@img/schuelergenossenschaft.jpg?pipeline=slide"),
    schuelergenossenschaft_gruendung_thumbnail: require("@img/schuelergenossenschaft.jpg?pipeline=thumbnail"),
    schuelergenossenschaft_gruendung_1: require("@img/schuelergenossenschaft.jpg?pipeline=article"),
}

export default images