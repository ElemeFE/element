<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="//at.alicdn.com/t/font_1473762766_7074292.css">
    <title>Element</title>
  </head>
  <body>
    <div id="app"></div><% if (process.env.NODE_ENV === 'production') { %>
    <script src="//cdn.jsdelivr.net/vue/2.0.3/vue.min.js"></script>
    <script src="//cdn.jsdelivr.net/vue.router/2.0.1/vue-router.min.js"></script><% } %>
  </body>
  <% if (process.env.NODE_ENV === 'production') { %><script>
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

    ga('create', 'UA-84335471-1', 'auto');
    ga('send', 'pageview');
  </script><% } %>
</html>
