##React

#技术点

React就是写组件

JUST THE UI        --V in MVC

VIRTUAL DOM        --虚拟DOM

DATA FLOW          --单项数据流

JSX                --JSX语法

Babel              --解析JSX https://babeljs.io

#参考文档

- [React's official site 官方网站](http://facebook.github.io/react)
- [React's official examples 官方](https://github.com/facebook/react)
- [论坛](http://react-china.org)
- [React (Virtual) DOM Terminology 虚拟dome术语](http://facebook.github.io/react/docs/glossary.html), by Sebastian Markbåge
- [The React Quick Start Guide 快速启动指南](http://www.jackcallister.com/2015/01/05/the-react-quick-start-guide.html), by Jack Callister
- [Learning React.js: Getting Started and Concepts 开始和概念](https://scotch.io/tutorials/learning-react-getting-started-and-concepts), by Ken Wheeler
- [Getting started with React 开始react](http://ryanclark.me/getting-started-with-react/), by Ryan Clark
- [React JS Tutorial and Guide to the Gotchas 教程和陷阱](https://zapier.com/engineering/react-js-tutorial-guide-gotchas/), by Justin Deal
- [React Primer](https://github.com/BinaryMuse/react-primer), by Binary Muse
- [jQuery versus React.js thinking](http://blog.zigomir.com/react.js/jquery/2015/01/11/jquery-versus-react-thinking.html), by zigomir

#概要
JSX-----用XML的语法写JS文件，解析时还是将JSX解析成js语句执行，我们只要会写JSX，不用关心如何解析
DOM diff算法，狗屁算法，说是快，把DOM更改后变化的部分重新渲染，而不是渲染整个组件（虚拟dom的概念）
props和state----组件的属性和状态，属性是只读的，状态是可以通过事件和钩子函数更改的
生命周期和钩子函数----在组件实例化，存在期和销毁期，分别给出不同的钩子函数，用来在某个时间点操作组件

实例化
- getDefaultProps默认属性
- getInitialState初始化状态
- componentWillMount组件即将安装
- render渲染DOM
- componentDidMount组件安装完成

存在期
- componentWillReceiveProps即将接受新属性
- shouldComponentUpdate基本用不到
- componentWillUpdate组件即将更新（属性和状态的更新都会触发这个钩子函数）
- componentDidUpdate组件更新完成（不要在will和did钩子函数中更改组件状态，会触发循环调用更新钩子函数，造成死循环）
- render重新渲染DOM

销毁
- componentWillUnmount销毁前，给你个机会把垃圾清理掉

