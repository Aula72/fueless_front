define(["exports","preact/jsx-runtime","css!./UNSAFE_Selector.css","./utils/UNSAFE_classNames","./utils/UNSAFE_keys","./hooks/PRIVATE_useSelection","./hooks/UNSAFE_useTabbableMode","./index-16862ac7","./UNSAFE_Flex","./hooks/UNSAFE_useTranslationBundle","./classNames-2ba58777","./index-cf988fc7","./Flex-f922bd14","preact/hooks","./utils/UNSAFE_arrayUtils","preact","./UNSAFE_Icon","./Icon-4325e74f","./tslib.es6-d9d2f5d6","./hooks/UNSAFE_useTooltip","./hooks/UNSAFE_useId","./UNSAFE_Floating","./Floating-f23a546d","preact/compat","./index-b6f31c6c","./hooks/UNSAFE_useUser","./UNSAFE_Environment","./UNSAFE_Layer","./utils/PRIVATE_floatingUtils","./utils/PRIVATE_refUtils","./hooks/UNSAFE_useOutsideClick","./hooks/UNSAFE_useHover","./hooks/UNSAFE_useToggle","./hooks/UNSAFE_useFocus","./hooks/UNSAFE_useTouch","./utils/UNSAFE_mergeProps","./hooks/UNSAFE_useAnimation","./useAnimation-c8511df4","./hooks/UNSAFE_useTheme","./utils/UNSAFE_interpolations/dimensions","./utils/UNSAFE_size","./_curry1-9cbf463f","./utils/UNSAFE_mergeInterpolations","./_curry3-2cf14b96","./_curry2-37583590","./_has-b679fc56","./utils/UNSAFE_interpolations/boxalignment","./keys-ac292f2b","./utils/UNSAFE_interpolations/flexbox","./flexbox-f0221a64","./utils/UNSAFE_interpolations/flexitem","./flexitem-4580af77"],function(e,s,o,c,i,t,l,n,a,r,u,_,d,b,h,F,k,A,S,f,E,U,x,N,g,p,m,j,y,T,v,C,I,O,P,w,L,z,K,M,R,V,B,q,H,D,G,J,Q,W,X,Y){"use strict";const Z="fkwve2",$="_1vsgzop",ee="_1f3mchq",se="_12xw1vd",oe="_1xizd2l";function ce(e){const{isTabbable:o}=l.useTabbableMode(),c=u.classNames([ee,e.checked?oe:se]),i=r.useTranslationBundle("@oracle/oraclejet-preact"),t=e.checked?i.selector_selected():i.selector_unselected();return s.jsx("div",Object.assign({class:c,tabIndex:o?0:-1,type:"checkbox",checked:e.checked,"aria-label":e.accessibleLabel||t,onClick:e.onClick},{children:e.checked?s.jsx(_.SvgCheckboxOn,{}):s.jsx(_.SvgCheckboxOff,{})}))}const ie=e=>{e.stopPropagation()};e.Selector=function({accessibleLabel:e,rowKey:o,selectedKeys:c,onChange:l}){const{selectionProps:n}=t.useSelection(()=>o,c,"multiple",!1,"toggle",l);return s.jsx("div",Object.assign({class:$},(e=>{const s=e.onClick;return s?(e.onClick=e=>{s(e),ie(e)},e):{onClick:ie}})(n),{children:s.jsx("div",Object.assign({class:Z},{children:s.jsx(d.Flex,Object.assign({align:"center",justify:"center",width:"11x",height:"11x"},{children:s.jsx(ce,{checked:i.containsKey(c,o),accessibleLabel:e})}))}))}))},Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=UNSAFE_Selector.js.map