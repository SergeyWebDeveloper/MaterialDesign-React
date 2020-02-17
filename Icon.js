module.exports=function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=2)}([function(e,t){e.exports=require("prop-types")},function(e,t){e.exports=require("react")},function(e,t,r){"use strict";r.r(t);var n=r(1),o=r(0),l=function(){return(l=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},i=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r},a=0,s=n.forwardRef((function(e,t){var r=e.title,o=void 0===r?null:r,s=e.description,c=void 0===s?null:s,u=e.size,p=void 0===u?null:u,f=e.color,d=void 0===f?"currentColor":f,y=e.horizontal,v=void 0===y?null:y,b=e.vertical,m=void 0===b?null:b,h=e.rotate,g=void 0===h?null:h,O=e.spin,w=void 0===O?null:O,j=e.style,z=void 0===j?{}:j,E=e.children,P=i(e,["title","description","size","color","horizontal","vertical","rotate","spin","style","children"]);a++;var S,x=null!==w&&w,_=n.Children.map(E,(function(e){var t=e;!0!==x&&(x=!0===(null===w?t.props.spin:w));var r=t.props.size;"number"==typeof p&&"number"==typeof t.props.size&&(r=t.props.size/p);var o={size:r,color:null===d?t.props.color:d,horizontal:null===v?t.props.horizontal:v,vertical:null===m?t.props.vertical:m,rotate:null===g?t.props.rotate:g,spin:null===w?t.props.spin:w,inStack:!0};return n.cloneElement(t,o)}));null!==p&&(z.width="string"==typeof p?p:1.5*p+"rem");var k,T="stack_labelledby_"+a,q="stack_describedby_"+a;if(o)S=c?T+" "+q:T;else if(k="presentation",c)throw new Error("title attribute required when description is set");return n.createElement("svg",l({ref:t,viewBox:"0 0 24 24",style:z,role:k,"aria-labelledby":S},P),o&&n.createElement("title",{id:T},o),c&&n.createElement("desc",{id:q},c),x&&n.createElement("style",null,"@keyframes spin { to { transform: rotate(360deg) } }","@keyframes spin-inverse { to { transform: rotate(-360deg) } }"),_)}));s.displayName="Stack",s.propTypes={size:o.oneOfType([o.number,o.string]),color:o.string,horizontal:o.bool,vertical:o.bool,rotate:o.number,spin:o.oneOfType([o.bool,o.number]),children:o.oneOfType([o.arrayOf(o.node),o.node]).isRequired,className:o.string,style:o.object},s.defaultProps={size:null,color:null,horizontal:null,vertical:null,rotate:null,spin:null};var c=s;r.d(t,"Icon",(function(){return d})),r.d(t,"Stack",(function(){return c}));var u=function(){return(u=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},p=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r},f=0,d=n.forwardRef((function(e,t){var r=e.path,o=e.title,l=void 0===o?null:o,i=e.description,a=void 0===i?null:i,s=e.size,c=void 0===s?null:s,d=e.color,y=void 0===d?"currentColor":d,v=e.horizontal,b=void 0!==v&&v,m=e.vertical,h=void 0!==m&&m,g=e.rotate,O=void 0===g?0:g,w=e.spin,j=void 0!==w&&w,z=e.style,E=void 0===z?{}:z,P=e.inStack,S=void 0!==P&&P,x=p(e,["path","title","description","size","color","horizontal","vertical","rotate","spin","style","inStack"]);f++;var _={},k=[];null!==c&&(S?k.push("scale("+c+")"):(E.width="string"==typeof c?c:1.5*c+"rem",E.height=E.width)),b&&k.push("scaleX(-1)"),h&&k.push("scaleY(-1)"),0!==O&&k.push("rotate("+O+"deg)"),null!==y&&(_.fill=y);var T=n.createElement("path",u({d:r,style:_},S?x:{})),q=T;k.length>0&&(E.transform=k.join(" "),E.transformOrigin="center",S&&(q=n.createElement("g",{style:E},T,n.createElement("rect",{width:"24",height:"24",fill:"transparent"}))));var M,I=q,N=!0===j||"number"!=typeof j?2:j,R=!S&&(b||h);if(N<0&&(R=!R),j&&(I=n.createElement("g",{style:{animation:"spin"+(R?"-inverse":"")+" linear "+Math.abs(N)+"s infinite",transformOrigin:"center"}},q,!(b||h||0!==O)&&n.createElement("rect",{width:"24",height:"24",fill:"transparent"}))),S)return I;var C,B="icon_labelledby_"+f,X="icon_describedby_"+f;if(l)M=a?B+" "+X:B;else if(C="presentation",a)throw new Error("title attribute required when description is set");return n.createElement("svg",u({ref:t,viewBox:"0 0 24 24",style:E,role:C,"aria-labelledby":M},x),l&&n.createElement("title",{id:B},l),a&&n.createElement("desc",{id:X},a),!S&&j&&(R?n.createElement("style",null,"@keyframes spin-inverse { to { transform: rotate(-360deg) } }"):n.createElement("style",null,"@keyframes spin { to { transform: rotate(360deg) } }")),I)}));d.displayName="Icon",d.propTypes={path:o.string.isRequired,size:o.oneOfType([o.number,o.string]),color:o.string,horizontal:o.bool,vertical:o.bool,rotate:o.number,spin:o.oneOfType([o.bool,o.number]),style:o.object,inStack:o.bool,className:o.string},d.defaultProps={size:null,color:null,horizontal:!1,vertical:!1,rotate:0,spin:!1};t.default=d}]);
//# sourceMappingURL=Icon.js.map