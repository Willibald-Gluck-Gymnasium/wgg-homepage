<template>
  <div class="footer">
    <div class="content">
      <div id="address">
        <div class="title">Willibald Gluck Gymnasium</div>
        Woffenbacher Straße 33
        <br>
        92381 Neumarkt
        <br>
        Tel.: 09181 472-0
      </div>
      <div id="copyright">
        <div class="title">Copyright and Licenses</div>
        2020 by Alexander Horner and Jan Bayer. All rights reserved.
        <br>
        Powered by <a class="link" href="https://vuejs.org/">Vue.js</a> and <a class="link" href="https://laravel.com/">Laravel</a>
        <br>
        <a class="link" href="https://github.com/Willibald-Gluck-Gymnasium/wgg-homepage/blob/development/LICENSE">MIT License</a>
      </div>
      <div id="links">
        <div class="title">Links</div>
        <a class="link" href="impressum">Impressum</a>
        <br>
        <a class="link" href="datenschutz">Datenschutz</a>
      </div>
    </div>
    <div class="content">
      <!-- <div id="partners">
        <div class="title">Partner</div>
        <a href="https://mintzukunftschaffen.de">
          <img :src="require('@img/color1-footer.jpeg')" alt="MINT">
          <span>mintzukunftschaffen</span>
        </a>
        <a href="https://www.mint-ec.de/">
          <img :src="require('@img/color2-footer.jpeg')" alt="MINT-EC">
          <span>MINT-EC</span>
        </a>
        <a href="https://www.schule-ohne-rassismus.org/">
          <img :src="require('@img/color3-footer.jpeg')" alt="SORSMC">
          <span>Schule ohne Rassismus</span>
        </a>
        <a href="https://www.jugend-debattiert.de/">
          <img :src="require('@img/color4-footer.jpeg')" alt="JD">
          <span>Jugend Debattiert</span>
        </a>
        <a href="https://www.mintregion-neumarkt.de/">
          <img :src="require('@img/color5-footer.jpeg')" alt="Mint Neumarkt">
          <span>MINT Region Neumarkt</span>
        </a>
        <a href="https://www.n-ergie.de/">
          <img :src="require('@img/color6-footer.jpeg')" alt="N-Ergie">
          <span>N-ERGIE</span>
        </a>
        <a href="http://wp.feedbackschule.de/">
          <img :src="require('@img/color7-footer.jpeg')" alt="FbSch">
          <span>FeedbackSchule</span>
        </a>
        <a href="http://www.umwelterziehung.de/projekte/umweltschule/index.html">
          <img :src="require('@img/color8-footer.jpeg')" alt="Umwelt">
          <span>Umweltschule</span>
        </a>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.footer {
    // height: var(--sz-footer-height);
    position: relative;
    z-index: 100;
    color: white;
    width: 100%;
    background: black;
    display: block;
    box-shadow: 0 7px 20px 5px rgba(0,0,0,0.3);
    padding-bottom: 20px;
    // margin-top: 15px;
    .content {
      // position: absolute;
	    max-width: calc(var(--sz-content-width) + 50px);
      position: relative;
      padding: 0px 25px;
      padding-top: 20px;
      margin: 0 auto;
      display: flex;
      // flex-wrap: wrap;
      div {
        // box-shadow: inset 24px 0px 15px -12px  white;
        flex: 1 1 auto;
        // width: calc(50% - 30px);
        padding: 15px;
        .title {
          margin-bottom: 1em;
          position: relative;
          display: block;
          padding: 0;
          font-weight: 900;
          border: none;
          box-shadow: none;
          font-family: var(--fnt-title);
          font-size: 25px;
          &:before {
            content: '';
            display: block;
            position: absolute;
            bottom: -.5em;
            left: 0;
            width: 3em;
            height: .1em;
            background: var(--clr-wgg-orange);
          }
        }
        // &:nth-child(1) {
        //   padding-left: 0;
        // }
      }
      #partners {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        .title {
          width: 100%;
        }
        a {
          display: flex;
          height: 50px;
          flex-direction: row;
          align-items: center;
          color: inherit;
          flex: 1 1 auto;
          min-width: 20%;
          text-align: center;
          text-decoration: none;
          background: rgb(41, 41, 41);
          margin-right: 10px;
          margin-top: 10px;
          transition-duration: .1s;
          img {
            transition-duration: .3s;
            position: relative;
            height: 100%;
            object-fit: contain;
            filter: grayscale(1);
          }
          span {
            padding: 0 15px;
            display: block;
            // vertical-align: center;
          }
          &:hover {
            background: rgb(60,60,60);
            img {
              filter: none;
            }
          }
          @at-root .touchevents .footer .content #partners a {
            &:hover { 
              background: rgb(41,41,41);
            }
            img {
              filter: none;
            }
          }
        }
      }
    }
}

@media only screen and (max-width: 700px) {
  .footer{
    height: auto !important;
    .content {
      display: flex;
      position: relative;
      transform: none;
      top: 0; left: 0;
      flex-direction: column;
      div {
        width: 100%;
        border: none !important;
      }
    }
  }
}

@media only screen and (max-width: 460px) {
  .footer{
    .content {
      #partners {
        a {
          width: 100%;
          span {
            margin-left: auto;
          }
        }
      }
    }
  }
}

@media print {
  .footer {
    box-shadow: none;
    margin-top: 30px;
    border-top: 1px solid black;
    #links {
      display: none;
    }
  }
}
</style>