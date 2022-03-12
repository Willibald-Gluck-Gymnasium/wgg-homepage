# WGG Homepage

![Tests](https://github.com/Willibald-Gluck-Gymnasium/wgg-homepage/workflows/Tests/badge.svg)

## How to add thumbnail images

1. Register your image in `resources/js/images.js`

```js
const images = {
    [...]
    testimg1_thumbnail: require(`@img/color1.jpg?pipeline=thumbnail`),
    testimg1_slider: require("@img/color1.jpg?pipeline=slider")
}
```

2. Add it to your article file in `resources/content/articles`

```yml
---
title: Titel deines Artikels
link: link-zum-artikel
thumbnail: name_of_your_image # here
thumbnail_slider: name_of_your_image_sideshow # and here
published_on: 02.11.2021 00:12
---
<h2>Beispiel Überschrift</h2>
[...]
```

Done. 


## Live Deployment

View the [current version of the development branch](https://current-dev-version-rqm5kgi.alexanderhorner.com) and other deployments like pull requests in the environments section or under [deployments](https://github.com/Willibald-Gluck-Gymnasium/wgg-homepage/deployments).

<img src="https://i.postimg.cc/FH8HjyBZ/Screenshot-2021-11-13-at-16-32-51.png" alt="Environment Section" width="350"/>

![homescreen](https://github.com/Erdragh/Erdragh.github.io/raw/master/img/home.png)


