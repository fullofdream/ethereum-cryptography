"use strict";(self.webpackChunkethereum_cryptography=self.webpackChunkethereum_cryptography||[]).push([[1423,3047],{40595:e=>{function a(e){!function(e){function a(e,a){return"___"+e.toUpperCase()+a+"___"}Object.defineProperties(e.languages["markup-templating"]={},{buildPlaceholders:{value:function(t,n,r,l){if(t.language===n){var o=t.tokenStack=[];t.code=t.code.replace(r,(function(e){if("function"===typeof l&&!l(e))return e;for(var r,i=o.length;-1!==t.code.indexOf(r=a(n,i));)++i;return o[i]=e,r})),t.grammar=e.languages.markup}}},tokenizePlaceholders:{value:function(t,n){if(t.language===n&&t.tokenStack){t.grammar=e.languages[n];var r=0,l=Object.keys(t.tokenStack);!function o(i){for(var s=0;s<i.length&&!(r>=l.length);s++){var p=i[s];if("string"===typeof p||p.content&&"string"===typeof p.content){var u=l[r],c=t.tokenStack[u],g="string"===typeof p?p:p.content,d=a(n,u),m=g.indexOf(d);if(m>-1){++r;var f=g.substring(0,m),k=new e.Token(n,e.tokenize(c,t.grammar),"language-"+n,c),b=g.substring(m+d.length),h=[];f&&h.push.apply(h,o([f])),h.push(k),b&&h.push.apply(h,o([b])),"string"===typeof p?i.splice.apply(i,[s,1].concat(h)):p.content=h}}else p.content&&o(p.content)}return i}(t.tokens)}}}})}(e)}e.exports=a,a.displayName="markupTemplating",a.aliases=[]},68768:(e,a,t)=>{var n=t(40595);function r(e){e.register(n),function(e){var a=/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,t=/\b\d+(?:\.\d+)?(?:[eE][+-]?\d+)?\b|\b0x[\dA-F]+\b/;e.languages.soy={comment:[/\/\*[\s\S]*?\*\//,{pattern:/(\s)\/\/.*/,lookbehind:!0,greedy:!0}],"command-arg":{pattern:/(\{+\/?\s*(?:alias|call|delcall|delpackage|deltemplate|namespace|template)\s+)\.?[\w.]+/,lookbehind:!0,alias:"string",inside:{punctuation:/\./}},parameter:{pattern:/(\{+\/?\s*@?param\??\s+)\.?[\w.]+/,lookbehind:!0,alias:"variable"},keyword:[{pattern:/(\{+\/?[^\S\r\n]*)(?:\\[nrt]|alias|call|case|css|default|delcall|delpackage|deltemplate|else(?:if)?|fallbackmsg|for(?:each)?|if(?:empty)?|lb|let|literal|msg|namespace|nil|@?param\??|rb|sp|switch|template|xid)/,lookbehind:!0},/\b(?:any|as|attributes|bool|css|float|html|in|int|js|list|map|null|number|string|uri)\b/],delimiter:{pattern:/^\{+\/?|\/?\}+$/,alias:"punctuation"},property:/\w+(?==)/,variable:{pattern:/\$[^\W\d]\w*(?:\??(?:\.\w+|\[[^\]]+\]))*/,inside:{string:{pattern:a,greedy:!0},number:t,punctuation:/[\[\].?]/}},string:{pattern:a,greedy:!0},function:[/\w+(?=\()/,{pattern:/(\|[^\S\r\n]*)\w+/,lookbehind:!0}],boolean:/\b(?:false|true)\b/,number:t,operator:/\?:?|<=?|>=?|==?|!=|[+*/%-]|\b(?:and|not|or)\b/,punctuation:/[{}()\[\]|.,:]/},e.hooks.add("before-tokenize",(function(a){var t=!1;e.languages["markup-templating"].buildPlaceholders(a,"soy",/\{\{.+?\}\}|\{.+?\}|\s\/\/.*|\/\*[\s\S]*?\*\//g,(function(e){return"{/literal}"===e&&(t=!1),!t&&("{literal}"===e&&(t=!0),!0)}))})),e.hooks.add("after-tokenize",(function(a){e.languages["markup-templating"].tokenizePlaceholders(a,"soy")}))}(e)}e.exports=r,r.displayName="soy",r.aliases=[]}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_soy.5ff0811f.chunk.js.map