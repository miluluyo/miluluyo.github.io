(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{470:function(t,s,a){"use strict";a.r(s);var n=a(16),r=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"_1-json"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-json","aria-hidden":"true"}},[t._v("#")]),t._v(" 1. JSON")]),t._v(" "),a("ul",[a("li",[t._v("JSON 指的是 JavaScript 对象标记法（JavaScript Object Notation）")]),t._v(" "),a("li",[t._v("JSON 是一种轻量级的数据交换格式")]),t._v(" "),a("li",[t._v("JSON 具有自我描述性且易于理解")]),t._v(" "),a("li",[t._v("JSON 独立于语言*")])]),t._v(" "),a("p",[t._v("JSON 是存储和传输数据的格式。")]),t._v(" "),a("p",[t._v("JSON 经常在数据从服务器发送到网页时使用")]),t._v(" "),a("p",[a("strong",[t._v("交换数据")])]),t._v(" "),a("p",[t._v("当数据在浏览器与服务器之间进行交换时，这些数据只能是文本。")]),t._v(" "),a("p",[t._v("JSON 属于文本，并且我们能够把任何 JavaScript 对象转换为 JSON，然后将 JSON 发送到服务器。")]),t._v(" "),a("p",[t._v("我们也能把从服务器接收到的任何 JSON 转换为 JavaScript 对象。")]),t._v(" "),a("p",[t._v("以这样的方式，我们能够把数据作为 JavaScript 对象来处理，无需复杂的解析和转译。")]),t._v(" "),a("h3",{attrs:{id:"json-parse"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#json-parse","aria-hidden":"true"}},[t._v("#")]),t._v(" JSON.parse()")]),t._v(" "),a("p",[t._v("JSON 格式写的字符串转换为原生 JavaScript 对象")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("JSON")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("parse")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  \n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("h3",{attrs:{id:"json-stringify"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#json-stringify","aria-hidden":"true"}},[t._v("#")]),t._v(" JSON.stringify()")]),t._v(" "),a("p",[t._v("JSON.stringify() 把 JavaScript 对象转换为字符串。")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" obj "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"麋鹿鲁哟"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" age"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("22")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("JSON")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("stringify")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  \n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("h2",{attrs:{id:"_2-jsonp"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-jsonp","aria-hidden":"true"}},[t._v("#")]),t._v(" 2. JSONP")]),t._v(" "),a("p",[t._v("JSONP 是一种无需考虑跨域问题即可传送 JSON 数据的方法。")]),t._v(" "),a("p",[t._v("JSONP 不使用 XMLHttpRequest 对象。")]),t._v(" "),a("p",[t._v("JSONP 使用 "),a("code",[t._v("<script>")]),t._v(" 标签取而代之。")]),t._v(" "),a("p",[a("strong",[t._v("简介")]),t._v("\nJSONP 指的是 JSON with Padding。")]),t._v(" "),a("p",[t._v("从另一个域请求文件会引起问题，由于跨域政策。")]),t._v(" "),a("p",[t._v("从另一个域请求外部脚本没有这个问题。")]),t._v(" "),a("p",[t._v("JSONP 利用了这个优势，并使用 script 标签替代 XMLHttpRequest 对象。")]),t._v(" "),a("p",[t._v("就是利用script标签绕过同源策略，获得一个类似这样的数据，jsonpcallback是页面存在的回调方法，参数就是想得到的json。")]),t._v(" "),a("blockquote",[a("p",[t._v("它只支持GET请求而不支持POST等其它类型的HTTP请求；它只支持跨域HTTP请求这种情况，不能解决不同域的两个页面之间如何进行JavaScript调用的问题")])])])},[],!1,null,null,null);s.default=r.exports}}]);