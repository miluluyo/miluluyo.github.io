(window.webpackJsonp=window.webpackJsonp||[]).push([[187],{564:function(t,s,a){"use strict";a.r(s);var e=a(33),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"transition过渡-动画"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#transition过渡-动画"}},[t._v("#")]),t._v(" transition过渡&动画")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://cn.vuejs.org/v2/guide/transitions.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("API"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用"}},[t._v("#")]),t._v(" 使用")]),t._v(" "),a("p",[t._v("需要设置动画的元素或组件要在外边包裹一个"),a("code",[t._v("<transition>")]),t._v("标签，设置自定义的"),a("code",[t._v("name")]),t._v("，vue会根据元素的切换（进入/离开）过程添加相应的css类名，你可以"),a("strong",[t._v("自由地使用css类名来设置css过渡&动画")]),t._v("。\n")]),t._v(" "),a("h2",{attrs:{id:"过渡的类名"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#过渡的类名"}},[t._v("#")]),t._v(" 过渡的类名")]),t._v(" "),a("p",[t._v("在进入/离开的过渡中，会有 6 个 class 切换。")]),t._v(" "),a("p",[a("strong",[t._v("各类名的生命周期")])]),t._v(" "),a("ul",[a("li",[a("p",[t._v("进入")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("v-enter")]),t._v(" 只存在于第一帧")]),t._v(" "),a("li",[a("code",[t._v("v-enter-active")]),t._v(" 第一帧到最后一帧，结束后移除")]),t._v(" "),a("li",[a("code",[t._v("v-enter-to")]),t._v(" 第二帧到最后一帧，结束后移除")])])]),t._v(" "),a("li",[a("p",[t._v("离开")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("v-leave")]),t._v(" 只存在于第一帧")]),t._v(" "),a("li",[a("code",[t._v("v-leave-active")]),t._v(" 第一帧到最后一帧，结束后移除")]),t._v(" "),a("li",[a("code",[t._v("v-leave-to")]),t._v(" 第二帧到最后一帧，结束后移除")])])])]),t._v(" "),a("p",[t._v("如果你使用一个没有"),a("code",[t._v("name")]),t._v("的"),a("code",[t._v("<transition>")]),t._v(" ，则 "),a("code",[t._v("v-")]),t._v(" 是这些类名的默认前缀。如果你使用了"),a("code",[t._v('name="fade"')]),t._v("，那么 "),a("code",[t._v("v-")]),t._v(" 前缀会替换为 "),a("code",[t._v("fade-")]),t._v("。")]),t._v(" "),a("h2",{attrs:{id:"css过渡-demo"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#css过渡-demo"}},[t._v("#")]),t._v(" css过渡 demo")]),t._v(" "),a("p",{staticClass:"codepen",staticStyle:{height:"265px","box-sizing":"border-box",display:"flex","align-items":"center","justify-content":"center",border:"2px solid",margin:"1em 0",padding:"1em"},attrs:{"data-height":"265","data-theme-id":"light","data-default-tab":"css,result","data-user":"xugaoyi","data-slug-hash":"jOPqxvm","data-pen-title":"vue的过渡动画"}},[a("span",[t._v("See the Pen "),a("a",{attrs:{href:"https://codepen.io/xugaoyi/pen/jOPqxvm"}},[t._v("\n  vue的过渡动画")]),t._v(" by xugaoyi ("),a("a",{attrs:{href:"https://codepen.io/xugaoyi"}},[t._v("@xugaoyi")]),t._v(")\n  on "),a("a",{attrs:{href:"https://codepen.io"}},[t._v("CodePen")]),t._v(".")])]),t._v(" "),a("script",{attrs:{async:"",src:"https://static.codepen.io/assets/embed/ei.js"}}),t._v(" "),a("h2",{attrs:{id:"css动画-demo"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#css动画-demo"}},[t._v("#")]),t._v(" css动画 demo")]),t._v(" "),a("p",{staticClass:"codepen",staticStyle:{height:"265px","box-sizing":"border-box",display:"flex","align-items":"center","justify-content":"center",border:"2px solid",margin:"1em 0",padding:"1em"},attrs:{"data-height":"265","data-theme-id":"light","data-default-tab":"css,result","data-user":"xugaoyi","data-slug-hash":"qBdZyRR","data-pen-title":"vue的动画"}},[a("span",[t._v("See the Pen "),a("a",{attrs:{href:"https://codepen.io/xugaoyi/pen/qBdZyRR"}},[t._v("\n  vue的动画")]),t._v(" by xugaoyi ("),a("a",{attrs:{href:"https://codepen.io/xugaoyi"}},[t._v("@xugaoyi")]),t._v(")\n  on "),a("a",{attrs:{href:"https://codepen.io"}},[t._v("CodePen")]),t._v(".")])]),t._v(" "),a("script",{attrs:{async:"",src:"https://static.codepen.io/assets/embed/ei.js"}}),t._v(" "),a("h3",{attrs:{id:"组件中使用的示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#组件中使用的示例"}},[t._v("#")]),t._v(" 组件中使用的示例")]),t._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("transition")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("slide"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n         "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("add-song"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n             ...\n        "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("transition")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("    \n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br")])]),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[t._v(" .add-song\n    &.slide-enter-active"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" &.slide-leave-active\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("transition")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" all 0.3s\n    &.slide-enter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" &.slide-leave-to\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("transform")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("translate3d")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("100%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])])])}),[],!1,null,null,null);s.default=n.exports}}]);