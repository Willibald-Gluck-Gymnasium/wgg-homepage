# WGG Homepage

![Tests](https://github.com/Willibald-Gluck-Gymnasium/wgg-homepage/workflows/Tests/badge.svg)

## How to add images to articles

1. Put your image into `resources/img`

2. Register your image in `resources/js/images.js`

```js
const images = {
    [...]
    name_of_your_image: require('@img/image.jpg?pipeline=article'),
    name_of_your_other_image: require('@img/otherimage.jpg?pipeline=article')
}
```

This is what you write into the `require()` function:

```js
require('path/to/your/image.jpg?pipeline=version_you_want')
```

`@img` = `resources/img`

There are many possible pipelines you can feed your image through. Each pipeline will resize the image diffrently, and maybe add filters. You can see and add filters in `webpack.mix.json`. 

3. Insert the image using the v-image component in `resources/content/articles`

```yml
---
title: Titel deines Artikels
link: link-zum-artikel
thumbnail: name_of_your_thumbnail
thumbnail_slide: name_of_your_slide_image
published_on: 02.11.2021 00:12
---
<h2>Beispiel Überschrift</h2>
<v-image name="name_of_your_image" alt="Kurze Beschreibung des Bildes" />
<v-image name="name_of_your_other_image" alt="Ganz kurzer Satz" />
[...]
```

Done. 

## How to add thumbnail images

1. Register your image in `resources/js/images.js`

```js
const images = {
    [...]
    name_of_your_thumbnail: require('@img/article-thumbnail.jpg?pipeline=thumbnail'),
    name_of_your_slide_image: require('@img/article-thumbnail.jpg?pipeline=slide')
}
```

2. Add it to your article file in `resources/content/articles`

```yml
---
title: Titel deines Artikels
link: link-zum-artikel
thumbnail: name_of_your_thumbnail # here
thumbnail_slide: name_of_your_slide_image # and here
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


