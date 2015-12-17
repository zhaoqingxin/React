#关于编译
-此文件夹下的js文件里面的jsx，不是通过browser.js来编译的，而是通过bable-cil来编译的
-所以首先要安装一系列的NPM包
- $ npm install --save react react-dom babelify babel-preset-react    学习过nodejs很容易理解，安装一些npm包这里面的react和react-dom和用browser安装react都可以在html中引用使用，用npm安装是基于后端的node模块，方便在nodejs中用require来引用
- $ browserify -t [ babelify --presets [ react ] ] main.js -o bundle.js     这个我也没明白干什么用

- npm install --global babel-cli    安装这个babel-cli是为了解析JSX用的
- babel --presets react src --watch --out-dir build    把写好的js文件用这个命令解析，就可以和HTML页面中调用browser.js解析jsx达到同样的效果了。这里面用路径替换src，如在DOM1中用node-demo/demo1.js替换src，自动创建了build文件夹，并自动生成了新的demo1.js，页面直接引用生成的JS，无需再引用browser.js解析。--watch指令，作用是监视原js文件，当原JS文件修改后，会自动更新build下的JS文件，无需手动再次编译，超级智能！！！--out-dir build是输出路径，可以自己改写
