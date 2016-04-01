# JS实现的打字机效果
## ES6代码，没用babel

代码简洁，性能恐怖，使用方式如下：
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>测试效果</title>
    <style media="screen">
      .writer::after {
        content: "|";
        animation: flicker .8s ease infinite;

        animation-direction: reverse;
      }
      @keyframes flicker {
        from {
          opacity: 1;
        }
        to {
          opacity: 0;
        }
      }
    </style>
  </head>
  <body>
    <span class="writer" id="typing"></span>
    <script src="../lib/index.js" charset="utf-8"></script>
    <script type="text/javascript">
      var writer = new TypeWriter({
        container: document.querySelector('#typing'),
        strs: ['hello', 'world', '23333333333'],
        delay: 200
      });
    </script>
  </body>
</html>

});
```

[在线地址](http://sandbox.runjs.cn/show/idnp4w0p)
