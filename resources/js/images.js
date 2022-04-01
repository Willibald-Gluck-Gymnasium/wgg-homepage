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

    wirtschaft_neues_aus_wr_thumbnail: require('@img/unterricht_wirtschaft_neues_aus_wr_1.png?pipeline=thumbnail'),
    wirtschaft_neues_aus_wr_slide_image: require('@img/unterricht_wirtschaft_neues_aus_wr_1.png?pipeline=slide'),
    wirtschaft_neues_aus_wr_1: require('@img/unterricht_wirtschaft_neues_aus_wr_1.png?pipeline=article'),
    wirtschaft_neues_aus_wr_2: require('@img/unterricht_wirtschaft_neues_aus_wr_2.png?pipeline=article'),
    wirtschaft_neues_aus_wr_3: require('@img/unterricht_wirtschaft_neues_aus_wr_3.png?pipeline=article'),
    wirtschaft_neues_aus_wr_4: require('@img/unterricht_wirtschaft_neues_aus_wr_4.png?pipeline=article'),
    
    wirtschaft_naturkosmetikspende: require('@img/unterricht_wirtschaft_naturkosmetikspende.jpg?pipeline=article'),

    Dull_WR_Gründung_Schülergenossenschaft_Bild_Logo: require('@img/04Dull_WR_Gründung-Schülergenossenschaft_Bild_Logo.jpg?pipeline=article'),
    Dull_WR_Gründung_Schülergenossenschaft_Bild2: require('@img/04Dull_WR_Gründung-Schülergenossenschaft_Bild2.JPG?pipeline=article'),
    Dull_WR_Gründung_Schülergenossenschaft_Bild: require('@img/04Dull_WR_Gründung-Schülergenossenschaft_Bild.JPG?pipeline=article'),

    mathe_17_wb: require('@img/mathe_17_wb.jpg?pipeline=article'),

    gemeinschaft_direktorat_00_schiffer: require('@img/gemeinschaft_direktorat_00_schiffer.jpg?pipeline=article'),
    gemeinschaft_direktorat_00_kroiss: require('@img/gemeinschaft_direktorat_00_kroiss.jpg?pipeline=article'),
    gemeinschaft_direktorat_00_Holler: require('@img/gemeinschaft_direktorat_00_Holler.jpg?pipeline=article'),
    gemeinschaft_direktorat_00_sachs: require('@img/gemeinschaft_direktorat_00_sachs.jpg?pipeline=article'),
    gemeinschaft_direktorat_00_wagenhofer: require('@img/gemeinschaft_direktorat_00_wagenhofer.jpg?pipeline=article'),

    mathe_fachprofil_Kompetenzstrukturmodell: require('@img/mathe_fachprofil_Kompetenzstrukturmodell.jpg?pipeline=article'),
    mathe_fachprofil_slide: require('@img/mathe_fachprofil_Kompetenzstrukturmodell.jpg?pipeline=slide'),
    mathe_fachprofil_thumbnail: require('@img/mathe_fachprofil_Kompetenzstrukturmodell.jpg?pipeline=thumbnail')
}

export default images