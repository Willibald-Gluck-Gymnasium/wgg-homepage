---
title: 'Beispiel Artikel'
link: Beispiel-Artikel
tags: [dev-only]
author: 'Max Mustermann'
thumbnail: construction-sign.jpg
published_on: '02.11.2020 00:12'
---
<h2>Beispiel Überschrift</h2>
<p>Dies ist ein Beispiel-Artikel für die Leute die nach uns an dieser Website arbeiten werden und Artikel einfügen werden. Im Verlauf dieses "Artikels" werden Begriffe wie "wie hier" oder "wie folgt" o.ä. verwendet. Diese sollen darauf hinweisen in den Quellcode dieses Artikels zu schauen.</p>
<p>Jeder Text sollte wie hier in einem Paragraph eingefügt werden.</p>
<p>Für Überschriften sollten die Tags <code>h2</code> bis <code>h6</code> benutzt werden:</p>
<h3>Große Überschrift</h3>
<h4>Unter der Großen Überschrift</h4>
<h5>Kleine Überschrift</h5>
<h6>Unter der kleinen Überschrift</h6>
<p>Für Links außerhalb der Schulwebsite können ganz normale html links verwendet werden: <a href="https://github.com/Willibald-Gluck-Gymnasium/wgg-homepage">Dieser Link führt zum GitHub repository von unserer Website</a>, für Verlinkungen innerhalb der webseite sollte <code>inertia-link</code> verwendet werden: <inertia-link href="/">Zur Startseite</inertia-link></p>
<p>Jedes Bild sollte wie folgt eingefügt werden:</p>
<figure>
    <v-image name="masks"></v-image>
    <figcaption>An diese Stelle (siehe Quellcode) sollte eine potentielle Bildunterschrift geschrieben werden</figcaption>
</figure>

<p>Ist es gewünscht, dass ein Bild seitlich (links oder rechts) floated, so kann dies mit den jeweiligen css Klassen <code>float-right</code> und <code>float-left</code> umgesetzt werden, dabei werden die nachfolgenden Paragraphen um die Bilder wrappen:</p>

<figure class="float-right">
    <v-image name="color1" alt="Testbild float-right" />
    <figcaption>Test</figcaption>
</figure>
<p>
    Dieser Paragraph sollte sich um das Bild wrappen. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum fugiat numquam incidunt assumenda temporibus, rerum soluta aliquam, culpa accusamus mollitia recusandae facere maxime rem? Eius quod voluptate quo? Provident quibusdam nemo a facere dolore fugiat eos cum quisquam similique beatae veritatis veniam sit velit, est cumque earum ipsa ducimus nam aspernatur sequi laborum distinctio odit! Quidem dolores eius recusandae natus illo officia, explicabo voluptatum ea sequi, consequuntur velit nemo, nisi laudantium aspernatur excepturi in! Possimus assumenda, at tempora error deleniti porro molestias aliquam rem ut dignissimos non, ullam libero quas modi illo architecto aspernatur enim molestiae. Excepturi sequi expedita facilis. Repellat, harum! Omnis maxime quam nisi molestias quae! Nulla delectus id amet dolorem distinctio voluptate, tempora soluta eaque, quisquam dolor ex est vero nemo. Consequuntur ratione illum ipsum obcaecati eius suscipit ipsam possimus repellat necessitatibus nihil omnis perspiciatis molestiae exercitationem odit similique, at sapiente, excepturi a! Deleniti, nulla. Vero odit porro exercitationem a quia similique, quaerat necessitatibus aut ipsum quam facilis quod! Accusamus a, voluptates beatae illum ex quas nesciunt officiis! Exercitationem iste voluptate dolorum eum officiis assumenda excepturi expedita numquam harum similique maxime, facere in sint reprehenderit vero nisi dolores velit eveniet repellat? Quam alias incidunt maiores voluptatem numquam?
</p>
<figure class="float-left">
    <v-image name="schulbeginn" alt="Testbild float-left" />
</figure>
<p>
    Dieser zweite Paragraph sollte sich auch um ein Bild wrappen. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat culpa eum deserunt. Pariatur ea similique, doloremque nostrum libero non blanditiis distinctio asperiores dolore temporibus, voluptas ipsa! Itaque, dolorem est! Quo totam accusantium corrupti est harum, quaerat tempora.
</p>
<p class="afterfloat">Hier ein Beispiel für die Klasse <code>afterfloat</code>, welche einen Paragraphen oder eine Liste erst nach einem floating Image erscheinen lässt.</p>
<p>Sollte der Wunsch bestehen etwas aufzulisten, so gibt es die geordneten und ungeordneten Listen:</p>
<p>Hier ein Beispiel für eine ungeordnete Liste:</p>
<ul>
    <li>Ein Punkt</li>
    <li>Noch ein Punkt</li>
    <li>Ein Punkt mit viel Text. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga laborum unde quam reiciendis quibusdam necessitatibus dolorem eaque quae ut eius, adipisci tempora cum asperiores ex non harum molestiae minima excepturi?</li>
</ul>
<p>Hier ein Beispiel für eine geordnete Liste:</p>
<ol>
    <li>Erster Punkt</li>
    <li>Zweiter Punkt</li>
    <li>Dritter Punkt, der sehr lang ist Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium nobis iure voluptatum alias voluptatibus, sapiente vel ut eaque dignissimos odio necessitatibus provident veritatis tempora quam vitae consequuntur minus earum iste!</li>
</ol>
<ol>
    <li>Erster Punkt</li>
    <li>Zweiter Punkt
        <ul>
            <li>Erstens</li>
            <li>Zweitens</li>
        </ul>
    </li>
</ol>
<p>Außerdem ist es möglich, YouTube Videos einzubinden:</p>
<youtube watch="B727cMaMW0M"></youtube>
<p>Diese Videos können auch floaten: </p>
<youtube class="float-left" watch="Y9lywb0R-BQ"></youtube>
<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa magni modi dolore ipsum nesciunt sequi consequatur aliquam rem. Voluptatum cum consequatur id officiis maiores, quod commodi ad quas, necessitatibus, earum suscipit harum aut repellendus velit odit aspernatur. Velit in consequuntur consectetur sint optio ullam blanditiis voluptatem placeat vitae, provident necessitatibus pariatur cupiditate rerum accusantium rem ratione error doloribus cumque et quia laudantium? Eveniet consequatur nihil hic quibusdam. At tenetur adipisci sapiente voluptatibus. Laborum blanditiis, facere eos exercitationem neque repellendus commodi perspiciatis temporibus pariatur mollitia ratione nihil repellat molestiae, doloremque incidunt error. Facere aperiam unde praesentium excepturi culpa consequatur rerum nam vel, fugit dicta blanditiis aut mollitia necessitatibus totam! Quaerat corporis rerum accusamus natus provident ad laborum atque, optio maiores dolor facere doloribus cum voluptatem amet ducimus ab mollitia est tempora, inventore eos id doloremque repudiandae impedit veniam? Placeat quam harum blanditiis aliquid voluptatem sed. Repudiandae, autem accusantium? Sequi, repellat reiciendis, placeat quod veritatis iste harum temporibus natus rem autem delectus fugiat minus, maiores nihil sint saepe enim distinctio omnis ullam aut? Illum illo aliquam, fuga quas cupiditate recusandae. Minus magni veniam dignissimos explicabo quod ex inventore id provident fugit, sit suscipit, quidem sequi voluptatibus mollitia adipisci omnis labore ducimus nihil.</p>
<youtube class="float-right" watch="8I2aG6aWxfc"></youtube>
<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat vel praesentium ipsum quos, repudiandae reiciendis! Earum quod assumenda in ipsa fugiat a expedita magnam, nam temporibus at tempora nesciunt repellat. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis recusandae illo dolores! Quae soluta neque facilis quasi, tempore non suscipit consectetur! Dolores quisquam molestiae atque velit. Quisquam tenetur dolore accusamus?</p>
<p class="afterfloat">Zudem können allgemein sehr simpel forms genutzt werden werden, wie folgt:</p>
<vue-form autocomplete="off">
    <section>
        <div class="field">
            <label for="name">Name</label>
            <input type="text" name="name" id="name">
        </div>
    </section>
    <section>
        <div class="field fill">
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
        <div class="field fill">
            <label for="range">Slider</label>
            <input type="range" name="range" id="range">
        </div>
    </section>
    <section>
        <div class="field">
            <label for="pw">Password</label>
            <input type="password" name="pw" id="pw">
        </div>
        <div class="field fill">
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
        <div class="field fill">
            <label for="ta">Text Area</label>
            <textarea name="ta" id="ta" rows="5"></textarea>
        </div>
    </section>
</vue-form>

<dropdown heading="Test">
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur vero numquam velit quas voluptatum totam accusantium assumenda consequatur. Molestiae repellendus laboriosam cumque non, explicabo ab esse blanditiis sunt aliquid eius magnam ratione unde accusamus, quis iusto nesciunt minima quasi quidem sit natus commodi ut ipsa! Laborum saepe sunt minima! Maxime, et sint. Est odit obcaecati fuga? Vel ad fugiat corrupti! Eaque vel sequi in maxime consequuntur quas, soluta reprehenderit inventore provident facere perferendis mollitia voluptate molestias laboriosam corrupti ducimus ab facilis, quis, atque asperiores iusto voluptas? Sit velit maiores delectus accusantium et blanditiis facilis quos ut. Earum deleniti ad pariatur!</p>
    <youtube watch="B727cMaMW0M"></youtube>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo reiciendis dolorem cupiditate! Cupiditate quos assumenda repellendus fugit. Perspiciatis, quae rem.</p>
    <youtube class="float-left" watch="B727cMaMW0M"></youtube>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum facere quo cumque eius aperiam officia unde temporibus! Nostrum corporis eius ab quaerat soluta quibusdam, nam excepturi pariatur culpa dicta magnam dolores non quia error a in fugiat aut dolorem beatae laudantium expedita doloremque reprehenderit voluptatem! Sint, tempore! Error autem sint corrupti ratione? Libero esse nemo dolor sed corrupti? Obcaecati eius reiciendis voluptate accusamus tempore! Dolorum laudantium error delectus dolores, vitae minus, eaque corrupti, numquam magni officia alias voluptates voluptatem at! Fugiat fugit, dolore debitis hic quo suscipit vel labore non modi quos ipsam omnis nam nisi consectetur cum! Minus, incidunt!</p>
    <v-image name="color3"></v-image>
</dropdown>