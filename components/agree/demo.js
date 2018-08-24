webpackJsonp([4],{1481:function(n,a,s){n.exports={basic:s(1498),disabled:s(1499)}},1498:function(n,a,s){n.exports={content:[],meta:{order:0,title:{"zh-CN":"\u9009\u4e2d","en-US":"checked"},filename:"components/agree/demo/basic.md",id:"components-agree-demo-basic"},highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Agree <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'modo-mobile\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  state <span class="token operator">=</span> <span class="token punctuation">{</span>\n    value<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  onChange <span class="token operator">=</span> value <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'agree checked\'</span><span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      value<span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Agree</span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onChange<span class="token punctuation">}</span></span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>agree-demo<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>value<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n        \u672c\u4eba\u627f\u8bfa\u6295\u4fdd\u4eba\u5df2\u5145\u5206\u4e86\u89e3\u672c\u4fdd\u9669\u4ea7\u54c1\uff0c\u5e76\u4fdd\u8bc1\u6295\u4fdd\u4fe1\u606f\u7684\u771f\u5b9e\u6027\uff0c\u7406\u89e3\u5e76\u540c\u610f\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span><span class="token punctuation">></span></span>\u300a\u6295\u4fdd\u987b\u77e5\u300b<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span><span class="token punctuation">,</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span><span class="token punctuation">></span></span>\u300a\u4fdd\u9669\u6761\u6b3e\u300b<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Agree</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>App</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){var n=s(0),a=(s(10),function(){function n(n,a){for(var s=0;s<a.length;s++){var t=a[s];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}return function(a,s,t){return s&&n(a.prototype,s),t&&n(a,t),a}}()),t=s(550);function p(n,a){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!=typeof a&&"function"!=typeof a?n:a}var e=function(s){function e(){var n,a,s;!function(n,a){if(!(n instanceof a))throw new TypeError("Cannot call a class as a function")}(this,e);for(var t=arguments.length,o=Array(t),c=0;c<t;c++)o[c]=arguments[c];return a=s=p(this,(n=e.__proto__||Object.getPrototypeOf(e)).call.apply(n,[this].concat(o))),s.state={value:!0},s.onChange=function(n){console.log("agree checked",n),s.setState({value:n})},p(s,a)}return function(n,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);n.prototype=Object.create(a&&a.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(n,a):n.__proto__=a)}(e,n.Component),a(e,[{key:"render",value:function(){return n.createElement(t.Agree,{onChange:this.onChange,className:"agree-demo",value:this.state.value},"\u672c\u4eba\u627f\u8bfa\u6295\u4fdd\u4eba\u5df2\u5145\u5206\u4e86\u89e3\u672c\u4fdd\u9669\u4ea7\u54c1\uff0c\u5e76\u4fdd\u8bc1\u6295\u4fdd\u4fe1\u606f\u7684\u771f\u5b9e\u6027\uff0c\u7406\u89e3\u5e76\u540c\u610f",n.createElement("a",null,"\u300a\u6295\u4fdd\u987b\u77e5\u300b"),", ",n.createElement("a",null,"\u300a\u4fdd\u9669\u6761\u6b3e\u300b"))}}]),e}();return n.createElement(e,null)},style:".agree-demo {\n  margin: 12px;\n}",highlightedStyle:'<span class="token selector"><span class="token class">.agree-demo</span> </span><span class="token punctuation">{</span>\n  <span class="token property">margin</span><span class="token punctuation">:</span> <span class="token number">12</span>px<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>'}},1499:function(n,a,s){n.exports={content:[],meta:{order:0,title:{"zh-CN":"\u4e0d\u53ef\u7528\u72b6\u6001","en-US":"disabled"},filename:"components/agree/demo/disabled.md",id:"components-agree-demo-disabled"},highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Agree <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'modo-mobile\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  onChange <span class="token operator">=</span> value <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'agree checked\'</span><span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Agree</span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onChange<span class="token punctuation">}</span></span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token boolean">true</span><span class="token punctuation">}</span></span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>agree-demo<span class="token punctuation">"</span></span> <span class="token attr-name">disabled</span><span class="token punctuation">></span></span>\n          \u672c\u4eba\u627f\u8bfa\u6295\u4fdd\u4eba\u5df2\u5145\u5206\u4e86\u89e3\u672c\u4fdd\u9669\u4ea7\u54c1\uff0c\u5e76\u4fdd\u8bc1\u6295\u4fdd\u4fe1\u606f\u7684\u771f\u5b9e\u6027\uff0c\u7406\u89e3\u5e76\u540c\u610f\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span><span class="token punctuation">></span></span>\u300a\u6295\u4fdd\u987b\u77e5\u300b<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span><span class="token punctuation">,</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span><span class="token punctuation">></span></span>\u300a\u4fdd\u9669\u6761\u6b3e\u300b<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Agree</span><span class="token punctuation">></span></span>\n\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Agree</span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onChange<span class="token punctuation">}</span></span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>agree-demo<span class="token punctuation">"</span></span> <span class="token attr-name">disabled</span><span class="token punctuation">></span></span>\n          \u672c\u4eba\u627f\u8bfa\u6295\u4fdd\u4eba\u5df2\u5145\u5206\u4e86\u89e3\u672c\u4fdd\u9669\u4ea7\u54c1\uff0c\u5e76\u4fdd\u8bc1\u6295\u4fdd\u4fe1\u606f\u7684\u771f\u5b9e\u6027\uff0c\u7406\u89e3\u5e76\u540c\u610f\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span><span class="token punctuation">></span></span>\u300a\u6295\u4fdd\u987b\u77e5\u300b<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span><span class="token punctuation">,</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span><span class="token punctuation">></span></span>\u300a\u4fdd\u9669\u6761\u6b3e\u300b<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Agree</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>App</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){var n=s(0),a=(s(10),function(){function n(n,a){for(var s=0;s<a.length;s++){var t=a[s];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}return function(a,s,t){return s&&n(a.prototype,s),t&&n(a,t),a}}()),t=s(550);function p(n,a){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!=typeof a&&"function"!=typeof a?n:a}var e=function(s){function e(){var n,a,s;!function(n,a){if(!(n instanceof a))throw new TypeError("Cannot call a class as a function")}(this,e);for(var t=arguments.length,o=Array(t),c=0;c<t;c++)o[c]=arguments[c];return a=s=p(this,(n=e.__proto__||Object.getPrototypeOf(e)).call.apply(n,[this].concat(o))),s.onChange=function(n){console.log("agree checked",n)},p(s,a)}return function(n,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);n.prototype=Object.create(a&&a.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(n,a):n.__proto__=a)}(e,n.Component),a(e,[{key:"render",value:function(){return n.createElement("div",null,n.createElement(t.Agree,{onChange:this.onChange,value:!0,className:"agree-demo",disabled:!0},"\u672c\u4eba\u627f\u8bfa\u6295\u4fdd\u4eba\u5df2\u5145\u5206\u4e86\u89e3\u672c\u4fdd\u9669\u4ea7\u54c1\uff0c\u5e76\u4fdd\u8bc1\u6295\u4fdd\u4fe1\u606f\u7684\u771f\u5b9e\u6027\uff0c\u7406\u89e3\u5e76\u540c\u610f",n.createElement("a",null,"\u300a\u6295\u4fdd\u987b\u77e5\u300b"),", ",n.createElement("a",null,"\u300a\u4fdd\u9669\u6761\u6b3e\u300b")),n.createElement(t.Agree,{onChange:this.onChange,className:"agree-demo",disabled:!0},"\u672c\u4eba\u627f\u8bfa\u6295\u4fdd\u4eba\u5df2\u5145\u5206\u4e86\u89e3\u672c\u4fdd\u9669\u4ea7\u54c1\uff0c\u5e76\u4fdd\u8bc1\u6295\u4fdd\u4fe1\u606f\u7684\u771f\u5b9e\u6027\uff0c\u7406\u89e3\u5e76\u540c\u610f",n.createElement("a",null,"\u300a\u6295\u4fdd\u987b\u77e5\u300b"),", ",n.createElement("a",null,"\u300a\u4fdd\u9669\u6761\u6b3e\u300b")))}}]),e}();return n.createElement(e,null)},style:".agree-demo {\n  margin: 12px;\n}",highlightedStyle:'<span class="token selector"><span class="token class">.agree-demo</span> </span><span class="token punctuation">{</span>\n  <span class="token property">margin</span><span class="token punctuation">:</span> <span class="token number">12</span>px<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>'}}});