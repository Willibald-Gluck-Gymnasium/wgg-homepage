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

<<<<<<< Updated upstream
    cae_information_thumbnail: require("@img/cae_information_thumbnail_slide.png?pipeline=thumbnail"),
    cae_information_slide: require(`@img/cae_information_thumbnail_slide.png?pipeline=slide`),
    cae_information_banner: require(`@img/cae_information_banner.png?pipeline=article`),

    spanisch_thumbnail: require("@img/spanisch_thumbnail_slide.jpg?pipeline=thumbnail"),
    spanisch_slide: require(`@img/spanisch_thumbnail_slide.jpg?pipeline=slide`),

    big_challenge_thumbnail: require("@img/big_challenge_thumbnail_slide.jpg?pipeline=thumbnail"),
    big_challenge_slide: require(`@img/big_challenge_thumbnail_slide.jpg?pipeline=slide`),
    big_challenge_banner: require(`@img/big_challenge_banner.png?pipeline=article`),

    sport_thumbnail: require('@img/badminton.png?pipeline=thumbnail'),
    sport_pedalo: require('@img/pedalo.jpg?pipeline=article'),
    sport_kastenlauf: require('@img/kastenlauf.jpg?pipeline=article'),
    sport_huerdenlauf2: require('@img/huerdenlauf2.jpg?pipeline=article'),
    sport_sackhupfen: require('@img/sackhupfen.jpg?pipeline=article'),
    sport_huerdenlauf1: require('@img/huerdenlauf1.jpg?pipeline=article'),
    sport_bauchball: require('@img/bauchball.jpg?pipeline=article'),
    sport_bechern: require('@img/bechern.jpg?pipeline=article'),

    sport_tischtennis_thumbnail: require('@img/spiel.jpg?pipeline=article'),
    sport_gruppenbild: require('@img/gruppenbild.jpg?pipeline=article'),

    sport_psem_kraftraum: require('@img/plakate.png?pipeline=article'),

    sport_lehrertt_thumbnail: require('@img/18_lehrertt_1.jpg?pipeline=article'),
    sport_lehrertt_2: require('@img/18_lehrertt_2.jpg?pipeline=article'),

    sport_fussball_1: require('@img/18_fussball_01.jpg?pipeline=thumbnail'),

    kunst_thumbnail: require('@img/kunst_thumbnail.jpg?pipeline=thumbnail'),
    kunst_ausstattung_thumbnail: require('@img/malkasten.jpg?pipeline=thumbnail'),
    glasworkshop_selfie: require('@img/glasworkshop1.jpg?pipeline=article'),
    glasworkshop_bild: require('@img/glasworkshop2.jpg?pipeline=article'),

    physik_psem_neues_gluck: require('@img/physik_psem_neues_gluck.jpg?pipeline=article'),
=======
    physik_psem_neues_gluck: require('@img/physik_psem_neues_gluck.jpg?pipline=article'),
>>>>>>> Stashed changes

    physik_fa_ss_ralf_fa_sofi_thumb: require('@img/physik_fa_ss_ralf_fa_sofi.jpg?pipeline=thumbnail'),
    physik_fa_ss_ralf_fa_sofi: require('@img/physik_fa_ss_ralf_fa_sofi.jpg?pipeline=article'),
    physik_fa_ss_ralf_fa_2dspek: require('@img/physik_fa_ss_ralf_fa_2dspek.jpg?pipeline=article'),
    physik_fa_ss_ralf_fa_1dspek: require('@img/physik_fa_ss_ralf_fa_1dspek.png?pipeline=article'),
    physik_fa_ss_ralf_fa_sol: require('@img/physik_fa_ss_ralf_fa_sol.png?pipeline=article'),
<<<<<<< Updated upstream
    physik_fa_ss_ralf_fa_selfabs: require('@img/physik_fa_ss_ralf_fa_selfabs.png?pipeline=article'),

    physik_grav_schueler1: require('@img/physik_grav_schueler1.jpg?pipeline=article'),
    physik_grav_schueler2: require('@img/physik_grav_schueler2.jpg?pipeline=article'),
    physik_grav_lf1: require('@img/physik_grav_lf1.png?pipeline=article'),
    physik_grav_drehwaage: require('@img/physik_grav_drehwaage.jpg?pipeline=article'),
    physik_grav_aproksch: require('@img/physik_grav_aproksch.jpg?pipeline=article'),
    physik_grav_lf2: require('@img/physik_grav_lf2.png?pipeline=article'),
    physik_grav_lf3: require('@img/physik_grav_lf3.png?pipeline=article'),
    physik_grav_lf4: require('@img/physik_grav_lf4.png?pipeline=article'),
    physik_grav_lf5: require('@img/physik_grav_lf5.png?pipeline=article'),
    physik_grav_lf6: require('@img/physik_grav_lf6.png?pipeline=article'),
    physik_grav_lf7: require('@img/physik_grav_lf7.png?pipeline=article'),
    physik_grav_auslenkung: require('@img/physik_grav_auslenkung.jpg?pipeline=article'),
    physik_grav_lf9: require('@img/physik_grav_lf9.png?pipeline=article'),
    physik_grav_lf10: require('@img/physik_grav_lf10.png?pipeline=article'),
    physik_grav_lf11: require('@img/physik_grav_lf11.png?pipeline=article'),
    physik_grav_lf12: require('@img/physik_grav_lf12.png?pipeline=article')

=======
    physik_fa_ss_ralf_fa_selfabs: require('@img/physik_fa_ss_ralf_fa_selfabs.png?pipeline=article')
>>>>>>> Stashed changes
}

export default images