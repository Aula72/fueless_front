var __rest=this&&this.__rest||function(e,r){var t={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&r.indexOf(o)<0&&(t[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(o=Object.getOwnPropertySymbols(e);a<o.length;a++)r.indexOf(o[a])<0&&Object.prototype.propertyIsEnumerable.call(e,o[a])&&(t[o[a]]=e[o[a]])}return t},__importDefault=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};define("oj-c/progress-bar/progress-bar",["require","exports","preact/jsx-runtime","@oracle/oraclejet-preact/translationBundle","@oracle/oraclejet-preact/UNSAFE_ProgressBar","ojs/ojvcomponent","css!oj-c/progress-bar/progress-bar-styles.css"],(function(require,e,r,t,o,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.ProgressBar=void 0,t=__importDefault(t),e.ProgressBar=(0,a.registerCustomElement)("oj-c-progress-bar",(e=>{var{max:t=100,value:s=0,edge:n="none"}=e,l=__rest(e,["max","value","edge"]);return(0,r.jsx)(a.Root,{children:(0,r.jsx)(o.ProgressBar,{value:-1===s?"indeterminate":s,max:t,edge:n,accessibleLabel:l["aria-valuetext"]})})}),"ProgressBar",{properties:{max:{type:"number"},value:{type:"number"},edge:{type:"string",enumValues:["none","top"]}},extension:{_OBSERVED_GLOBAL_PROPS:["aria-valuetext"]}},{max:100,value:0,edge:"none"},{"@oracle/oraclejet-preact":t.default})}));
//# sourceMappingURL=progress-bar.js.map