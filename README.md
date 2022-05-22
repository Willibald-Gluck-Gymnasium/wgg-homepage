# WGG Homepage

![Tests](https://github.com/Willibald-Gluck-Gymnasium/wgg-homepage/workflows/Tests/badge.svg)

# Writing articles

This is a quick overview, for a more detailed breakdown on how to write an article, refer to [WRITING.md](/WRITING.md).

## How to add new tags to articles

### 1. Add tag to allowed list of tags in `test/Feature/ArticleTagTest.php`

Add your new tag to the array `$allowedTags` at the top of the class:

```php
class ArticleTagTest extends TestCase
{
    // All tags used in articles must be included in this list, else the test will fail
    private $allowedTags = [
        [...]
        'Neuigkeiten',
        'Englisch',
        'Dein neuer Tag' // <- Hier
    ];
```

### 2. Done. You can now use the tag for every article

```yml
---
title: Geogebra - eine freie Geometriesoftware
link: Geogebra-eine-freie-Geometriesoftware
tags: [Mathematik, Unterricht, Dein neuer Tag]
thumbnail: geogebra
---
[...]
```

## How to add thumbnail images

### 1. Put your image into `resources/img`

Make sure no other file has the same filename, even if the extension is different. (`picture.jpg` and `picture.png` can not both exist) 

### 2. Add it to your article file in `resources/content/articles`

The name of the image is your file name (without extension).

```yml
---
title: Titel deines Artikels
link: link-zum-artikel
thumbnail: name_of_your_thumbnail # here
published_on: 02.11.2021 00:12
---
<h2>Beispiel Überschrift</h2>
[...]
```

### Done. 

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

Make sure no other file has the same filename, even if the extension is different. (`picture.jpg` and `picture.png` can not both exist) 

### 2. Insert the image using the v-image component in `resources/content/articles`

The name of the image is your file name (without extension). You should put the v-image inside of a figure so that they are formatted correctly:

```html
---
title: Titel deines Artikels
link: link-zum-artikel
thumbnail: name_of_your_thumbnail
published_on: 02.11.2021 00:12
---
<h2>Beispiel Überschrift</h2>
<figure>
    <v-image name="name_of_your_image" alt="Kurze Beschreibung des Bildes" />
</figure>
<figure class="float-right">
    <v-image name="name_of_your_other_image" alt="Beschreibung" />
</figure>
[...]
```

The figures can also have classes to float to the right or left and have text wrap around them. These classes are just `float-right` and `float-left`.

### Done. 

# Development

This is a quick overview, for more detailed information refer to [DEVELOPMENT.md](/DEVELOPING.md).

## Using custom components in articles

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

# Live Deployment

### **Attention**: Live deployment is currently unavilable. ([More information here](https://github.com/Willibald-Gluck-Gymnasium/wgg-homepage/issues/3#issuecomment-1120217411))

View the [current version of the development branch](https://current-dev-version-rqm5kgi.alexanderhorner.com) and other deployments like pull requests in the environments section or under [deployments](https://github.com/Willibald-Gluck-Gymnasium/wgg-homepage/deployments).

<img src="https://i.postimg.cc/FH8HjyBZ/Screenshot-2021-11-13-at-16-32-51.png" alt="Environment Section" width="350"/>
