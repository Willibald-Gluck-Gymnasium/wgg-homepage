# How to write an article

- [1. What do I need?](#1-what-do-i-need)
- [2. The basics](#2-the-basics)
    - [2.0 Before writing](#20-before-writing)
    - [2.1 The article file](#21-the-article-file)
    - [2.2 The header](#22-the-header)
        - [2.2.1 Adding new tags for your articles](#221-adding-new-tags-for-your-articles)
        - [2.2.2 Adding thumbnail images](#222-adding-thumbnail-images)
    - [2.3 The actual content](#23-the-actual-content)
        - [2.3.1 Paragraphs](#231-paragraphs)
        - [2.3.2 **Bold**, *Italic* and underlined](#232-bold-italic-and-underlined)
        - [2.3.3 Links](#233-links)
        - [2.3.4 Lists](#234-lists)
        - [2.3.5 Images](#235-images)
- [3. Advanced content](#3-advanced-content)
    - [3.1 YouTube videos](#31-youtube-videos)
    - [3.2 Input forms (WIP)](#32-input-forms-wip)
    - [3.3 More to come!](#33-more-to-come)

---

## 1. What do I need?

These are a must:

- The images you want to put into the article **and** the pictues you want to have as a *thumbmail*
- Some content
- The tags for which the article is intended
- A fitting title
- a unique link, which will be the part after *domain*/

These are optional:

- The name of the author
- A timestamp when the article was written

---

## 2. The basics

**DISCLAIMER**: You can compare what is written in `example.html` with what is shown in the browser to compare. Most examples in this document are taken - in one way or another - from `example.html`

**DISCLAIMER 2**: These are the the basics on how to write an article. For more specialized info on how to add specific parts to an article, refer to [3. Advanced Content](#3-advanced-content).

### 2.0 Before writing

For developing you should have your website hosted. 

On Windows and Linux you will always have to host the website with a command. You can execute this directly form a VSCode terminal:
```
php artisan serve
```
You will be able to access the site by going to [localhost:8000](localhost:8000) or with another port instead of 8000, depending on what the command outputs or what other port you chose.

For macOS, if you followed [CONTRIBUTING.md](/CONTRIBUTING.md), you shouldn't have to run a command to host the website, as valet should already be doing that. To access the website in your browser go to [wgg.test](wgg.test).

You should also always have a watcher running in the background to recognize changes so that they can be displayed on the website. This command has to be run on all systems, so Windows, Linux **and** macOS:
```
npm run watch
```
This command should also be run from a VSCode terminal.

### 2.1 The article file

The first thing to do is create the `.html` file for the article. The file should be located in `/resources/content/articles/` and the filename should be the link to the article. Take a look at `/resources/content/articles/corona-sicherheit.html` as an example.

The article `.html` file has two important parts:

1. The header
2. The actual content

### 2.2 The header

First, let's take a look at what should be in the header. The following is the example from before, `corona-sicherheit`:

```yml
---
title: Geogebra - eine freie Geometriesoftware
link: Geogebra-eine-freie-Geometriesoftware
tags: [Mathematik, Unterricht]
thumbnail: geogebra
author: Jan Bayer
published_on: '01.11.2020 13:00'
---
```

The header is opened by three dashes `---` and closed by the same. Do not forget these, as they are important for distinguishing an article from other content. Now let's take a look at the parts of this header:

- `title`: The title of the article. You should put quotes around them, other than that you should be able to use all kinds of symbols, such as `ü` or `*`. The only two symbols that need special treatments are the quotes `'` themself and the backslash `\`, which need to be written as `\'` and `\\` respectively.
- `link`: This is the link a user visits when opening an article, more specifically the part after the domain, as in `wgg-neumarkt.de/[...]`. This should be the same as the filename of the article.
- `author` (optional): This is an optional part of the header, if you know who the author of an article is you can decide to show that on the article by using this part in your header
- `tags`: A list of tags the article is to be categorized under. In this example, GeoGebra is part of Mathematik and Unterricht and can be searched for with either or both of these tags
- `thumbnail`: The name of the image you registered for the thumbnail. This will be used for both, the thumbnail on boxes and if the article gets featured in the slide. If you do not yet know what that means, be patient, as it will be explained [later](#222-adding-thumbnail-images).
- `published_on` (optional): The timestamp of when an article was written. This will be used by the webpage to display how long ago an article was written

#### 2.2.1 Adding new tags for your articles

1. Add tag to allowed list of tags in `test/Feature/ArticleTagTest.php`
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

2. Done. You can now use the tag for every article

    ```yml
    ---
    title: Geogebra - eine freie Geometriesoftware
    link: Geogebra-eine-freie-Geometriesoftware
    tags: [Mathematik, Unterricht, Dein neuer Tag]
    thumbnail: geogebra
    ---
    [...]
    ```

#### 2.2.2 Adding thumbnail images

1. Put your image into `resources/img`

    Make sure no other file has the same filename, even if the extension is different. (`picture.jpg` and `picture.png` can not both exist) 

2. Add it to your article file in `resources/content/articles`

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

3. Done. 

### 2.3 The actual content

To write actual content for the article you have to use HTML below the header. The following is by no means a comprehensive guide to html, but it should be all you need for writing articles on this website.

Any kind of text should be inside a tag (If you do not know what a tag is, basically this: `<...></...>`. Most often the paragraph `<p></p>` tag should be enough and should be used like this:

#### 2.3.1 Paragraphs

```html
<p>Hello this is a paragraph</p>
```

Putting multiple paragraphs beneath each other will automatically space them (As paragraphs should be), so you can just write one after the other and do not need `<br>`:

```html
<p>Paragraph 1, this is some filler text</p>
<p>Paragraph 2, this is some more filler</p>
```

#### 2.3.2 **Bold**, *Italic* and underlined

To make text **bold**, use the `<b>...</b>` tag, to make text *italic*, use the `<i>...</i>` tag and to make text <u>underlined</u>, use the `<u>...</u>` tag. For example to make a paragraph that says "**Hello there!** This *exquisite* establishment is <u>everything</u> you would want!", you would write:

```html
<p><b>Hello there!</b> This <i>exquisite</i> establishment is <u>everything</u> you would want!</p>
```

#### 2.3.3 Links

Other websites: Simply link to them as you would normally:

```html
<a href="https://www.google.com">Link to Google</a>
```

To another page or article on this site:

```html
<inertia-link href="/example-article">Another Article</inertia-link>
```

There are a few options you can pass to `inertia-link`, learn more about them [here in the inertia documentation](https://inertiajs.com/links). As links are inline objects (e.g. they are basically just text) you should put them in paragraphs, as the text formatting happens with the paragraph and not in the links themself.

#### 2.3.4 Lists

To use lists you can use their basic HTML tags: `<ul>...</ul>` for an unordered list (e.g. dots and dashes) or `<ol>...</ol>` for an ordered list and `<li>...</li>` for a list element. However, since lists are block elements (e.g. an actual box and not just text) you should **not** put them in paragraphs, the same applies to the list elements. The following is the basic layout for an unordered list:

```html
<ul>
    <li>Erster Punkt auf der Liste</li>
    <li>Zweiter Punkt auf dieser ungeordneten Liste</li>
</ul>
```

Which would look something like this:

- Erster Punkt auf der Liste
- Zweiter Punkt auf dieser ungeordneten Liste

This is an ordered list:

```html
<ol>
    <li>Erster Punkt auf der Liste</li>
    <li>Zweiter Punkt auf dieser geordneten Liste</li>
</ol>
```

Which would look like this:

1. Erster Punkt auf der Liste
2. Zweiter Punkt auf dieser geordneten Liste

You can also put a list in a list:

```html
<ol>
    <li>Erster Punkt auf der Liste</li>
    <li>
        Zweiter Punkt auf der Liste
        <ul>
            <li>Punkt auf einer Unterliste</li>
            <li>Zweiter Punkt auf einer Unterliste</li>
        </ul>
    </li>
</ol>
```

1. Erster Punkt auf der Liste
2. Zweiter Punkt auf der Liste
    - Punkt auf einer Unterliste
    - Zweiter Punkt auf einer Unterliste

#### 2.3.5 Images

1. Put your image into `resources/img`

    Make sure no other file has the same filename, even if the extension is different. (`picture.jpg` and `picture.png` can not both exist) 

2. Insert the image using the v-image component in `resources/content/articles`

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

3. Done. 

### 2.3.6 After writing

To confirm whether your article is syntactically correct, run the command:

```
npm run articletest
```

This will run a test on your articles to see if there are any syntax errors.

## 3. Advanced content

This section will show you how to use more advanced features in your content. These are features that are more specialized for specific tasks.

### 3.1 YouTube videos

If you want to embed a YouTube video, you may know about the feature in YouTube's share menu. We do not use that, as we want a data protection screen before you watch a video. This does not mean that including a YouTube video in your article will be any harder, as we have made a custom component you can readily use in your articles. Using it is almost as simple as copy-pasting a YouTube URL, but not entirely. A sample use of the `youtube` component looks like this, take note that it also isn't inside a paragraph and should be on its own:

```html
<youtube watch="B727cMaMW0M"></youtube>
```

The part in the watch argument is the string that is behind the ?watch= URL parameter in a YouTube URL.

You can also float the youtube video to the left or right, just like you would a figure used for an image:

```html
<youtube watch="B727cMaMW0M" class="float-left"></youtube>
```

### 3.2 Input forms (WIP)

**WARNING**: Forms are work in progress, as such, the following information is subject to change.

If you already know what a form is, this custom component is basically just a wrapper around one with styling and some changes for it to work with InertiaJS. If you don't know what a form is and how it works, you shouldn't be looking at this, rather you should read up on what a form is in HTML and what it does and then decide if you need to use one. However, you can't just write everything you would want to in this wrapper, as it has a specific layout and structure you need to follow in order for it to work flawlessly. The following is an example on a form, the way it should be implemented with the custom component (This example was taken from the `example.html` file), also not inside of a paragraph:

```html
<vue-form autocomplete="off">
    <section>
        <div class="field">
            <label for="name">Name</label>
            <input type="text" name="name" id="name">
        </div>
    </section>
    <section>
        <div class="field" class="fill">
            <label for="fill">Sich streckendes Feld</label>
            <input type="tel" name="fill" id="fill">
        </div>
        <div class="field">
            <label for="file">Datei:</label>
            <input type="file" name="file" id="file">
        </div>
    </section>
    <section>
        <div class="field">
            <label for="email">E-Mail</label>
            <input type="email" name="email" id="email">
        </div>
        <div class="field">
            <label for="color">Farbe</label>
            <input type="color" name="color" id="color">
        </div>
        <div class="field">
            <label for="date">Datum</label>
            <input type="datetime-local" name="date" id="date">
        </div>
        <div class="field">
            <label for="month">Monat</label>
            <input type="month" name="month" id="month">
        </div>
        <div class="field" class="fill">
            <label for="range">Slider</label>
            <input type="range" name="range" id="range">
        </div>
    </section>
    <section>
        <div class="field">
            <label for="pw">Password</label>
            <input type="password" name="pw" id="pw">
        </div>
        <div class="field" class="fill">
            <label for="url">URL</label>
            <input type="url" name="url" id="url">
        </div>
        <div class="field">
            <label for="radio">Radio</label>
            <input type="radio" name="radio" id="radio">
        </div>
        <div class="field">
            <label for="check">Check</label>
            <input type="checkbox" name="check" id="check">
        </div>
        <div class="field">
            <input type="reset" value="Reset">
        </div>
        <div class="field">
            <input type="button" value="Button">
        </div>
        <div class="field">
            <input type="submit" value="Submit">
        </div>
        <div class="field">
            <button>Test</button>
        </div>
    </section>
    <section>
        <div class="field" class="fill">
            <label for="ta">Text Area</label>
            <textarea name="ta" id="ta" rows="5"></textarea>
        </div>
    </section>
</vue-form>
```
Now let's explain the different parts:

- `vue-form`: This is the custom component, which can accept any of the parameters of a normal form as well as the parameters provided by InertiaJS for forms. Everything concerning forms in articles should be done with this wrapper around it. The `autocomplete=off` part is used to hide the (most often) ugly browser autocomplete prompts, which is optional and depends on the usecase of the form.
- `section`: A section is a horizontal group of inputs. For each "line" of the form you should make a new `<section>...</section>` and put the specific inputs in there.
- `div class="field"`: This is the wrapper for each input. This means that for each input you will need this element around it in order for the form to look and function properly. The class parameter can also include `fill`, as in `<div class="field fill">...</div>`, which will extend the specific field/input as far horizontally as possible.
- `input type="..."`: This is the most important part of a form. The `input` tag is what you interact with on the actual page and it can have different types, as shown in the example. This ranges from a color, so `type="color"` to a password, so `type="password"`. This element should have an id associated with it if you want to use it later in order to label the specific inputs. The id should be unique in the form.
- `button`: The name says it all, you could also use `input type="button"`. If you want a button to submit the user input there is a specific input type for it: `input type="submit"`.
- `textarea`: basically the same as `input type="text"`, however it can be scaled vertically by using the `rows` attribute and (optionally) horizontally with the `columns` attribute.
- `label for="month"`: This is the text that appears above an input, the argument passed through `for` should be the id of the input that follows, which is why every input should have one. An input doesn't need a label, but it is better to provide it, because it could be unclear what the input field you provide is for.

### 3.3 More to come!

We have more advanced features planned, but not yet released as they are very very WIP. Stay tuned!
