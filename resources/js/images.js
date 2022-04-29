/**
 * Here you require every image you need, and can then use it anywhere you want.
 */

const images = {
    testimg1_thumbnail: require(`@img/color3.jpg?pipeline=thumbnail`),
    testimg1_slide: require("@img/color3.jpg?pipeline=slide"),

    missing_thumbnail: require(`@img/missing-thumbnail.png?pipeline=thumbnail`),
    missing_thumbnail_slide: require("@img/missing-thumbnail.png?pipeline=slide"),

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
    corona_virus_close_up_thumbnail: require('@img/corona-virus-close-up.jpg?pipeline=thumbnail'),
    corona_virus_close_up_slide: require('@img/corona-virus-close-up.jpg?pipeline=slide'),

    people_in_arms_thumbnail: require('@img/people-in-arms.jpg?pipeline=thumbnail'),
    people_in_arms_slide: require('@img/people-in-arms.jpg?pipeline=slide'),

    route_zum_wgg_thumbnail: require('@img/route-zum-wgg.png?pipeline=thumbnail'),
    route_zum_wgg_slide: require('@img/route-zum-wgg.png?pipeline=slide'),

    website_schülergenossenschaft_thumbnail: require('@img/website-schülergenossenschaft.png?pipeline=thumbnail'),
    website_schülergenossenschaft_slide: require('@img/website-schülergenossenschaft.png?pipeline=slide'),

    law_scale_thumbnail: require('@img/law-scale.jpg?pipeline=thumbnail'),
    law_scale_slide: require('@img/law-scale.jpg?pipeline=slide'),

    information_booth_thumbnail: require('@img/information-booth.jpg?pipeline=thumbnail'),
    information_booth_slide: require('@img/information-booth.jpg?pipeline=slide'),

    calculator_thumbnail: require('@img/calculator.jpg?pipeline=thumbnail'),
    calculator_slide: require('@img/calculator.jpg?pipeline=thumbnail'),

    infoportal_login_thumbnail: require('@img/infoportal-login.png?pipeline=thumbnail'),
    infoportal_login_slide: require('@img/infoportal-login.png?pipeline=slide'),

    cae_information_thumbnail: require("@img/cae_information_thumbnail_slide.png?pipeline=thumbnail"),
    cae_information_slide: require(`@img/cae_information_thumbnail_slide.png?pipeline=slide`),
    cae_information_banner: require(`@img/cae_information_banner.png?pipeline=article`),

    spanisch_thumbnail: require("@img/spanisch_thumbnail_slide.jpg?pipeline=thumbnail"),
    spanisch_slide: require(`@img/spanisch_thumbnail_slide.jpg?pipeline=slide`),

    big_challenge_thumbnail: require("@img/big_challenge_thumbnail_slide.jpg?pipeline=thumbnail"),
    big_challenge_slide: require(`@img/big_challenge_thumbnail_slide.jpg?pipeline=slide`),
    big_challenge_banner: require(`@img/big_challenge_banner.png?pipeline=article`),
}

export default images