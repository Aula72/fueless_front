define(["exports","preact/jsx-runtime","css!./PRIVATE_Message.css","preact/hooks","./UNSAFE_Flex","./utils/PRIVATE_timer","./utils/UNSAFE_classNames","./MessageCloseButton-fc804358","./classNames-2ba58777","./MessageDetail-c1e0cdc2","./MessageFormattingUtils-95f48c88","./MessageStartIcon-665f54bc","./MessageSummary-4bfdff83","./MessageTimestamp-7b2ca246","./MessageUtils-e1daf68f","./Flex-f922bd14","./MessagesManager-815876b7","./Message.types-97d3e7a4","./tslib.es6-d9d2f5d6","./utils/UNSAFE_interpolations/dimensions","./utils/UNSAFE_arrayUtils","./utils/UNSAFE_size","./_curry1-9cbf463f","./utils/UNSAFE_mergeInterpolations","./_curry3-2cf14b96","./_curry2-37583590","./_has-b679fc56","./utils/UNSAFE_interpolations/boxalignment","./keys-ac292f2b","./utils/UNSAFE_interpolations/flexbox","./flexbox-f0221a64","./utils/UNSAFE_interpolations/flexitem","./flexitem-4580af77","./UNSAFE_Button","./Button-dc28bc46","./UNSAFE_BaseButton","./BaseButton-f6b56c16","./hooks/UNSAFE_usePress","./hooks/UNSAFE_useHover","./hooks/UNSAFE_useToggle","./hooks/UNSAFE_useActive","preact/compat","./utils/PRIVATE_clientHints","./clientHints-4aaefa1c","./hooks/UNSAFE_useTabbableMode","preact","./utils/UNSAFE_mergeProps","./index-16862ac7","./index-cf988fc7","./UNSAFE_Icon","./Icon-4325e74f","./hooks/UNSAFE_useTooltip","./hooks/UNSAFE_useId","./UNSAFE_Floating","./Floating-f23a546d","./index-b6f31c6c","./hooks/UNSAFE_useUser","./UNSAFE_Environment","./UNSAFE_Layer","./utils/PRIVATE_floatingUtils","./utils/PRIVATE_refUtils","./hooks/UNSAFE_useOutsideClick","./hooks/UNSAFE_useFocus","./hooks/UNSAFE_useTouch","./hooks/UNSAFE_useAnimation","./useAnimation-c8511df4","./hooks/UNSAFE_useTheme","./utils/UNSAFE_getLocale","./utils/UNSAFE_stringUtils","./stringUtils-1ad4f59d","./utils/UNSAFE_logger","./utils/UNSAFE_soundUtils","./PRIVATE_TransitionGroup","./hooks/UNSAFE_useMessagesContext"],function(e,s,t,a,n,o,i,r,l,c,u,d,g,m,f,b,_,S,E,F,p,A,U,N,v,x,y,M,h,j,k,T,I,B,C,R,V,O,P,w,D,H,z,L,W,q,G,K,J,Q,X,Y,Z,$,ee,se,te,ae,ne,oe,ie,re,le,ce,ue,de,ge,me,fe,be,_e,Se,Ee,Fe){"use strict";const pe="ve4j8v",Ae="awd03f";function Ue({item:e,renderer:t}){const a=l.classNames([pe,Ae]);return s.jsx("div",Object.assign({class:a,role:"presentation"},{children:t(e)}))}const Ne={base:"_1rqvxfy",banner:"_1yvearb",inline:void 0,toast:"jk7m72"};function ve({children:e,variant:t="banner"}){const a=l.classNames([Ne.base,Ne[t]]);return s.jsx("div",Object.assign({role:"presentation",class:a},{children:e}))}function xe(e){return u.isValidValueForProp(e,"severity")&&"none"!==e}const ye={base:{banner:"_1itf3tj",toast:"_1vhr4sz"},section:"_1lo64k8",content:{base:"_7d0pvw",banner:"kpwjgy",toast:"_1m2npx3"}};e.MessageCloseButton=r.MessageCloseButton,e.MessageDetail=c.MessageDetail,e.formatTimestamp=u.formatTimestamp,e.isValidValueForProp=u.isValidValueForProp,e.MessageStartIcon=d.MessageStartIcon,e.MessageSummary=g.MessageSummary,e.MessageTimestamp=m.MessageTimestamp,e.getRenderer=f.getRenderer,e.getRendererWithoutIndex=f.getRendererWithoutIndex,e.isSeverityIconNeeded=f.isSeverityIconNeeded,e.playSound=f.playSound,e.severityBasedStyleClass=f.severityBasedStyleClass,e.throwError=f.throwError,e.MessagesManager=_.MessagesManager,e.severities=S.severities,e.Message=function({closeButtonRenderer:e,detailRenderer:t,iconRenderer:n,index:i=-1,item:_,onClose:S,messageRef:E=(()=>{}),variant:F="pageBanner",translations:p}){const{closeAffordance:A="on",severity:U="error",sound:N,summary:v,timestamp:x}=_.data,{autoTimeout:y="off"}=_.data,M=function(e){return"pageBanner"===e||"sectionBanner"===e?"banner":"toast"}(F),h=a.useCallback(()=>{null==S||S(_)},[_,S]),j=a.useCallback(e=>{"Escape"===e.key&&"on"===A&&(null==S||S(_))},[A,_,S]),k="toast"===M&&"off"!==y,T=a.useRef(),I="on"===y?5e3:"number"==typeof y?y:5e3,B=a.useCallback(()=>{T.current||(T.current=new o.Timer(h,I))},[h,I]),C=a.useCallback(()=>{T.current&&(T.current.clear(),T.current=void 0)},[]),R=a.useCallback(()=>{var e;null===(e=T.current)||void 0===e||e.pause()},[]),V=a.useCallback(()=>{var e;null===(e=T.current)||void 0===e||e.resume()},[]);a.useEffect(()=>(u.isValidValueForProp(N)&&f.playSound(N),k&&B(),()=>{C()}),[]);const O=l.classNames([ye.base[M],"toast"!==F&&f.severityBasedStyleClass(U,M),"sectionBanner"===F&&ye.section]),P=l.classNames([ye.content.base,ye.content[M]]);return s.jsx("div",Object.assign({ref:E,class:O,role:"alert","aria-atomic":"true",tabIndex:0,onKeyUp:j,onfocusin:R,onfocusout:V},{children:s.jsxs("div",Object.assign({class:P},{children:[n?s.jsx(Ue,{item:Object.assign(Object.assign({},_),{index:i}),renderer:n}):xe(U)?s.jsx(d.MessageStartIcon,{severity:U,variant:M,translations:p}):null,s.jsxs(b.Flex,Object.assign({direction:"column",flex:"1",gap:"--oj-c-PRIVATE-DO-NOT-USE-core-spacing-2x"},{children:[s.jsxs(ve,Object.assign({variant:M},{children:[s.jsx(g.MessageSummary,{variant:M,text:v}),u.isValidValueForProp(x,"timestamp")&&"toast"!==F&&s.jsx(m.MessageTimestamp,{variant:M,value:x})]})),s.jsx(c.MessageDetail,{variant:M,item:Object.assign(Object.assign({},_),{index:i}),renderer:t})]})),"on"===A&&s.jsx(r.MessageCloseButton,{buttonRenderer:e,title:null==p?void 0:p.close,variant:M,onAction:h})]}))}))},Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=PRIVATE_Message.js.map
