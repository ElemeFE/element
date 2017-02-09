<style scoped>
  .actor {
    min-height: 65px;

    &:after {
      content: '';
      width: 6px;
      height: 50px;
      vertical-align: -8px;
      margin-left: 5px;
      background-color: #fff;
      display: inline-block;
      animation: blink 400ms infinite alternate;
    }
  }
  .banner {
    position: relative;
    height: 420px;
    color: #fff;
    margin-bottom: 130px;

    .container {
      position: relative;
    }

    img {
      position: absolute;
      top: 15px;
      right: -10px;
    }
  }
  .banner-sky {
    position: absolute;
    top: -150px;
    bottom: -15px;
    width: 100%;
    margin-top: -140px;
    transform: skewY(-5deg);
    transform-origin: center;
    background-image: linear-gradient(180deg, #0d1a44 13%, #3c4f91 56%, #5fc1e4 100%);
  }
  img.banner-stars {
    top: -10px;
    left: 50%;
    transform: translateX(-50%);
  }
  .banner-desc {
    padding-top: 110px;
    padding-left: 30px;
    font-size: <%= theatreSize >px;
    position: relative;
    z-index: 10;

    h2 {
      font-size: <%= titleSize >px;
      margin: 0;
      color: #fff;
    }

    p {
      font-size: 14px;
      opacity: .8;
      width: 420px;
      line-height: <%= paraHeight >;
      padding-left: 3px;
    }
  }
  .cards {
    margin: 0 auto 110px;
    width: 1140px;

    .container {
      @utils-clearfix;
      padding: 0;
      margin: 0 -11px;
      width: auto;
    }

    li {
      width: 33.33333%;
      padding: 0 19px;
      box-sizing: border-box;
      float: left;
      list-style: none;
    }

    img {
      width: 160px;
      height: 120px;
    }
  }
  .card {
    height: 430px;
    width: 100%;
    background:#ffffff;
    border:1px solid #eaeefb;
    border-radius:5px;
    box-sizing: border-box;
    text-align: center;
    position: relative;
    transition: all .3s ease-in-out;
    bottom: 0;

    img {
      margin: 66px auto 60px;
    }
    h3 {
      margin: 0;
      font-size: 18px;
      color: #1f2f3d;
      font-weight: normal;
    }
    p {
      font-size: 14px;
      color: #99a9bf;
      padding: 0 25px;
      line-height: <%= paraHeight >;
    }
    a {
      height: 53px;
      line-height: 52px;
      font-size: 14px;
      color: #20a0ff;
      text-align: center;
      border: 0;
      border-top: 1px solid #eaeefb;
      padding: 0;
      cursor: pointer;
      width: 100%;
      position: absolute;
      bottom: 0;
      left: 0;
      background-color: #fff;
      border-radius: 0 0 5px 5px;
      transition: all .3s;
      text-decoration: none;
      display: block;

      &:hover {
        color: #fff;
        background: #20a0ff;
      }
    }
    &:hover {
      bottom: 6px;
      box-shadow: 0px 6px 18px 0px rgba(232,237,250,0.50);
    }
  }
  @keyframes blink {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  @media (max-width: 1140px) {
    .cards {
      width: 100%;
      .container {
        width: 100%;
      }
    }
    .banner .container {
      width: 100%;
      box-sizing: border-box;
    }
    .banner img {
      right: 0;
    }
  }

  @media (max-width: 1000px) {
    .banner .container {
      img {
        display: none;
      }
    }
  }

  @media (max-width: 768px) {
    .cards {
      li {
        width: 80%;
        margin: 0 auto 20px;
        float: none;
      }
      .card {
        height: auto;
        padding-bottom: 54px;
      }
    }
    .banner-stars {
      display: none;
    }
    .banner-desc {
      #line2 {
        display: none;
      }
      h2 {
        font-size: 32px;
      }
      p {
        width: auto;
      }
    }
  }
</style>
<template>
  <div>
    <div class="banner">
      <div class="banner-sky"></div>
      <img class="banner-stars" src="~examples/assets/images/stars.png" alt="Element">
      <div class="container">
        <div class="banner-desc">
          <h2><%= 1 ></h2>
          <div id="line2" class="actor"></div>
          <p><%= 2 ></p>
        </div>
        <img src="~examples/assets/images/banner-bg.svg" alt="Element">
      </div>
    </div>
    <div class="cards">
      <ul class="container">
        <li>
          <div class="card">
            <img src="~examples/assets/images/guide.png" alt="">
            <h3><%= 3 ></h3>
            <p><%= 4 ></p>
            <router-link
              active-class="active"
              to="/<%= lang >/guide/design"
              exact><%= 5 >
            </router-link>
          </div>
        </li>
        <li>
          <div class="card">
            <img src="~examples/assets/images/component.png" alt="">
            <h3><%= 6 ></h3>
            <p><%= 7 ></p>
            <router-link
              active-class="active"
              to="/<%= lang >/component/layout"
              exact><%= 5 >
            </router-link>
          </div>
        </li>
        <li>
          <div class="card">
            <img src="~examples/assets/images/resource.png" alt="">
            <h3><%= 8 ></h3>
            <p><%= 9 ></p>
            <router-link
              active-class="active"
              to="/<%= lang >/resource"
              exact><%= 5 >
            </router-link>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  import theaterJS from 'theaterjs';

  export default {
    mounted() {
      function typing(theater) {
        theater
          <%= typingFunc >
          .addScene((done) => {
            typing(theater);
            done();
          });
      }
      var theater = theaterJS(<%= theatreParam >);
      theater
        .on('type:start, erase:start', function() {
          theater.getCurrentActor().$element.classList.add('typing');
        })
        .on('type:end, erase:end', function() {
          theater.getCurrentActor().$element.classList.remove('typing');
        });
      theater
        <%= typingInvoke >
        .addScene((done) => {
          typing(theater);
          done();
        });
    }
  };
</script>
