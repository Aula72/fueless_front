define(["exports","css!./boxalignment.css","../../keys-ac292f2b","../UNSAFE_size","../UNSAFE_arrayUtils","../../_curry1-9cbf463f","../../_has-b679fc56"],function(e,i,n,t,s,r,a){"use strict";const _={baseline:"_13y7ue7",center:"_1nh6jok",end:"dgmzz6",start:"jj21qk",inherit:"_18ky2hq",initial:"_1ngzgz6",stretch:"_19rhno2"},o={center:"_9xw3xw",end:"_16yvr1l",start:"n760gm",inherit:"_1kmm41i",initial:"_1ruvgn8",around:"_17ieami",between:"_12hxamq",evenly:"_19usfyw"},c={align:({align:e})=>void 0===e?{}:{class:_[e]},justify:({justify:e})=>void 0===e?{}:{class:o[e]},gap:({gap:e})=>{if(void 0===e)return{};{const[i,n=i]=s.coerceArray(e);return{gap:`${t.sizeToCSS(i)} ${t.sizeToCSS(n)}`}}}},l=n.keys_1(_),u=n.keys_1(o);e.aligns=l,e.boxAlignmentInterpolations=c,e.justifies=u,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=boxalignment.js.map