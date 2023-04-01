define(["exports","preact/jsx-runtime","preact","preact/compat","./utils/UNSAFE_classNames",'module',"./utils/PRIVATE_tabbableUtils","./classNames-2ba58777"],function(e,t,n,r,s,c,u,o){"use strict";const a="_1ki1nm9",l=r.forwardRef(({onFocus:e},n)=>t.jsx("div",{class:a,onFocus:e,ref:n,tabIndex:0})),i=e=>{e&&u.isTabbableElement(e)&&setTimeout(()=>{u.focusOn(e)},0)},f=(e,t)=>{if(0===e.length)return!1;const n=null!=t?t:u.getActiveElement(e[0]);return e.some(e=>e===n||(null==e?void 0:e.contains(n)))},d="aw4xxh";e.FocusTrap=({autoFocusRef:e,children:s,isDisabled:c=!1,restoreFocusRef:a})=>{const m=r.useRef(null),p=r.useRef(null),b=r.useRef(null),x=r.useRef(null),F=o.classNames([d]),g=r.useCallback(e=>{const t=m.current;!c&&t&&e&&(e&&f([t,p.current,b.current],e)?x.current=e:x.current?u.focusOn(x.current):u.focusWithin(t))},[c]);return r.useEffect(()=>{const t=m.current;if(!t||c)return;const n=u.getActiveElement(t);e&&e.current?u.focusOn(e.current):g(n);const r=a;return()=>{!1!==r&&i((null==r?void 0:r.current)||n)}},[e,g,c,a]),t.jsxs(n.Fragment,{children:[!c&&t.jsx(l,{onFocus:e=>{!c&&m.current&&(u.focusOnEnd(m.current),e.stopPropagation(),e.preventDefault())},ref:p}),t.jsx("div",Object.assign({onFocus:e=>{x.current=e.target},ref:m,class:F},{children:s})),!c&&t.jsx(l,{onFocus:e=>{!c&&m.current&&(u.focusOnStart(m.current),e.stopPropagation(),e.preventDefault())},ref:b})]})}});
//# sourceMappingURL=FocusTrap-38127371.js.map