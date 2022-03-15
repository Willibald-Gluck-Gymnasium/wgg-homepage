# WGG Homepage

![Tests](https://github.com/Willibald-Gluck-Gymnasium/wgg-homepage/workflows/Tests/badge.svg)

## How to link to other pages, articles, or websites

### Other websites:

Simply link to them as you would normally:

```html
<a href="https://www.google.com">Link to Google</a>
```

### To another page or article on this site: 
```html
<inertia-link href="/example-article">Another Article</inertia-link>
```

There are a few options you can pass to `inertia-link`, learn more about them [here in the inertia documentation](https://inertiajs.com/links).

## How to add images to articles

### 1. Put your image into `resources/img`

### 2. Register your image in `resources/js/images.js`

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

### Whats `?pipeline=version_you_want`?

There are many possible pipelines you can feed your image through. Each pipeline will resize the image diffrently, and maybe add filters. You can see all  pipelines (and add your own) in `webpack.mix.json`. 

### 3. Insert the image using the v-image component in `resources/content/articles`

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

### Done. 

## How to add thumbnail images

### 1. Put your image into `resources/img`

### 2. Register your image in `resources/js/images.js`

```js
const images = {
    [...]
    name_of_your_thumbnail: require('@img/article-thumbnail.jpg?pipeline=thumbnail'),
    name_of_your_slide_image: require('@img/article-thumbnail.jpg?pipeline=slide')
}
```

### 3. Add it to your article file in `resources/content/articles`

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

### Done. 


## How to use custom components inside articles

In Vue, every component has to be registered before you can use them. You can register your component globally, or inside your parent component (more efficient). 

All articles share the same component, so you have to register your components there. Open `resources/js/Pages/Article.vue`, go to the setup function, to the `onMounted()` lifecycle hook. Here the vue function `createApp()` is called to render the Article code from the database. Here you register your components. They are registered like global components.

```js
onMounted(() => {
    createApp(ArticleComponent)
        .component("youtube", Youtube)
        .component("v-image", Image)
        .component("inertia-link", Link)
        .mount(articlecontent.value)
})
```

## Live Deployment

View the [current version of the development branch](https://current-dev-version-rqm5kgi.alexanderhorner.com) and other deployments like pull requests in the environments section or under [deployments](https://github.com/Willibald-Gluck-Gymnasium/wgg-homepage/deployments).

<img src="https://i.postimg.cc/FH8HjyBZ/Screenshot-2021-11-13-at-16-32-51.png" alt="Environment Section" width="350"/>

![homescreen](https://github.com/Erdragh/Erdragh.github.io/raw/master/img/home.png)


