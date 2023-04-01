define(["exports","preact/jsx-runtime","preact/hooks","./hooks/UNSAFE_useId","preact","css!./UNSAFE_Collapsible.css","./utils/UNSAFE_classNames","./UNSAFE_Flex","./UNSAFE_Divider","./index-16862ac7","./index-cf988fc7","./hooks/UNSAFE_usePress","./classNames-2ba58777","./Flex-f922bd14","./Divider-9f2d3a19","./hooks/UNSAFE_useAnimation","./useAnimation-c8511df4","./tslib.es6-d9d2f5d6","./utils/UNSAFE_interpolations/dimensions","./utils/UNSAFE_arrayUtils","./utils/UNSAFE_size","./_curry1-9cbf463f","./utils/UNSAFE_mergeInterpolations","./_curry3-2cf14b96","./_curry2-37583590","./_has-b679fc56","./utils/UNSAFE_interpolations/boxalignment","./keys-ac292f2b","./utils/UNSAFE_interpolations/flexbox","./flexbox-f0221a64","./utils/UNSAFE_interpolations/flexitem","./flexitem-4580af77","./UNSAFE_Icon","./Icon-4325e74f","./hooks/UNSAFE_useTooltip","./UNSAFE_Floating","./Floating-f23a546d","preact/compat","./index-b6f31c6c","./hooks/UNSAFE_useUser","./UNSAFE_Environment","./UNSAFE_Layer","./utils/PRIVATE_floatingUtils","./utils/PRIVATE_refUtils","./hooks/UNSAFE_useOutsideClick","./hooks/UNSAFE_useHover","./hooks/UNSAFE_useToggle","./hooks/UNSAFE_useFocus","./hooks/UNSAFE_useTouch","./utils/UNSAFE_mergeProps","./hooks/UNSAFE_useTheme"],function(e,s,n,i,t,o,a,l,r,d,c,u,x,g,h,m,p,E,_,b,f,F,N,A,S,j,U,v,k,I,O,P,H,y,T,C,D,z,R,w,$,V,L,M,Y,q,B,G,J,K,Q){"use strict";const W=({isExpanded:e,iconPosition:n})=>{const i="start"===n&&e?c.SvgIcoChevronDown:d.CollapseIcon,t="end"===n&&e?c.SvgIcoChevronUp:c.SvgIcoChevronDown,o="start"===n?i:t;return s.jsx(o,{size:"6x"})},X="jrxr8m",Z="_1gbjg6i",ee="_1j9ln69",se="_1mzuknb",ne="_1hemueg",ie="_1wemas9",te="_1k1c0s3",oe=({children:e,id:i,contentId:o,isDisabled:a,isExpanded:l,iconPosition:r,variant:d="basic",toggleHandler:c})=>{const m=x.classNames([X,"horizontal-rule"===d&&se,l&&"horizontal-rule"!==d&&Z,a&&ee]),p=x.classNames([ne,"end"===r&&te,"start"===r&&ie]),E=n.useCallback(e=>{c(e.target)},[c]),{pressProps:_}=u.usePress(E,{isDisabled:a,isRepeat:!1});return s.jsxs(s.Fragment,{children:[s.jsx("div",Object.assign({role:"button","aria-controls":o,"aria-expanded":l,id:i,tabIndex:0,className:m},_,{children:s.jsx(g.Flex,Object.assign({align:"center",justify:"start"===r?"start":"between"},{children:s.jsxs(t.Fragment,{children:["end"===r&&s.jsx("div",Object.assign({className:p},{children:e})),s.jsx(W,{iconPosition:r,isExpanded:l}),"start"===r&&s.jsx("div",Object.assign({className:p},{children:e}))]})}))})),"horizontal-rule"===d&&s.jsx(h.Divider,{})]})},ae=({children:e,id:i,isExpanded:t,onTransitionEnd:o})=>{const[a,l]=n.useState(t?"expanding":"unmounted"),r=n.useRef({overflowY:"hidden",maxHeight:t?"none":"0"});n.useEffect(()=>{("unmounted"!==a||t)&&l(t?"expanding":"collapsing")},[t,a]);const{nodeRef:d}=p.useAnimation(a,{animationStates:le,onAnimationEnd:({animationState:e})=>{"collapsing"===e&&l("unmounted"),null==o||o()}});return s.jsx("div",Object.assign({className:"_1paozd3",ref:d,id:i,tabIndex:-1,style:r.current,"aria-hidden":!t||void 0},{children:"unmounted"!==a&&e}))},le={expanding:e=>({to:{maxHeight:`${e.scrollHeight}px`},options:{duration:400},end:{maxHeight:"none"}}),collapsing:e=>Object.assign(Object.assign({},"none"===e.style.maxHeight&&{from:{maxHeight:`${e.scrollHeight}px`}}),{to:{maxHeight:"0"},options:{duration:400}})};e.Collapsible=({id:e,header:t,children:o,isDisabled:a=!1,isExpanded:l=!1,iconPosition:r="start",variant:d="basic",onToggle:c,onTransitionEnd:u})=>{const x=n.useRef(null),g=i.useId(),h=`oj-collapsible-header-${g}`,m=`oj-collapsible-content-${g}`,p=n.useCallback(e=>{a||null==c||c({value:!l,target:e})},[a,c,l]),E=n.useCallback(()=>{null==u||u({value:l})},[u,l]);return s.jsxs("div",Object.assign({id:e,ref:x},{children:[s.jsx(oe,Object.assign({id:h,contentId:m,toggleHandler:p,isDisabled:a,isExpanded:l,iconPosition:r,variant:d},{children:t})),s.jsx(ae,Object.assign({id:m,isExpanded:l,onTransitionEnd:E},{children:o}))]}))},Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=UNSAFE_Collapsible.js.map