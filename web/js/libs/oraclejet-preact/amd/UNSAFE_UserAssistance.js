define(["exports","preact/jsx-runtime","css!./UNSAFE_UserAssistance.css","./InlineHelpSource-0da64d0a","./utils/UNSAFE_classNames","./hooks/UNSAFE_useTranslationBundle","./classNames-2ba58777","./UNSAFE_ComponentMessage","./hooks/UNSAFE_useFormContext","./hooks/UNSAFE_useFormFieldContext","./ComponentMessageContainer-d309a605","./hooks/UNSAFE_useTabbableMode","preact","preact/hooks","./UNSAFE_Environment","./UNSAFE_Layer","preact/compat","./ComponentMessage-08ded24e","./PRIVATE_Message","./UNSAFE_Flex","./Flex-f922bd14","./tslib.es6-d9d2f5d6","./utils/UNSAFE_interpolations/dimensions","./utils/UNSAFE_arrayUtils","./utils/UNSAFE_size","./_curry1-9cbf463f","./utils/UNSAFE_mergeInterpolations","./_curry3-2cf14b96","./_curry2-37583590","./_has-b679fc56","./utils/UNSAFE_interpolations/boxalignment","./keys-ac292f2b","./utils/UNSAFE_interpolations/flexbox","./flexbox-f0221a64","./utils/UNSAFE_interpolations/flexitem","./flexitem-4580af77","./utils/PRIVATE_timer","./MessageCloseButton-fc804358","./UNSAFE_Button","./Button-dc28bc46","./UNSAFE_BaseButton","./BaseButton-f6b56c16","./hooks/UNSAFE_usePress","./hooks/UNSAFE_useHover","./hooks/UNSAFE_useToggle","./hooks/UNSAFE_useActive","./utils/PRIVATE_clientHints","./clientHints-4aaefa1c","./utils/UNSAFE_mergeProps","./index-16862ac7","./index-cf988fc7","./UNSAFE_Icon","./Icon-4325e74f","./hooks/UNSAFE_useTooltip","./hooks/UNSAFE_useId","./UNSAFE_Floating","./Floating-f23a546d","./index-b6f31c6c","./hooks/UNSAFE_useUser","./utils/PRIVATE_floatingUtils","./utils/PRIVATE_refUtils","./hooks/UNSAFE_useOutsideClick","./hooks/UNSAFE_useFocus","./hooks/UNSAFE_useTouch","./hooks/UNSAFE_useAnimation","./useAnimation-c8511df4","./hooks/UNSAFE_useTheme","./MessageDetail-c1e0cdc2","./MessageFormattingUtils-95f48c88","./utils/UNSAFE_getLocale","./utils/UNSAFE_stringUtils","./stringUtils-1ad4f59d","./Message.types-97d3e7a4","./MessageStartIcon-665f54bc","./MessageSummary-4bfdff83","./MessageTimestamp-7b2ca246","./MessageUtils-e1daf68f","./utils/UNSAFE_logger","./utils/UNSAFE_soundUtils","./MessagesManager-815876b7","./PRIVATE_TransitionGroup","./hooks/UNSAFE_useMessagesContext","./UNSAFE_HiddenAccessible","./HiddenAccessible-3afe5d7e"],function(e,s,t,i,n,o,a,l,c,r,u,d,_,A,F,U,f,S,E,N,g,h,m,x,p,b,k,T,j,I,M,C,v,y,H,B,P,R,L,O,V,w,q,z,D,G,J,K,Q,W,X,Y,Z,$,ee,se,te,ie,ne,oe,ae,le,ce,re,ue,de,_e,Ae,Fe,Ue,fe,Se,Ee,Ne,ge,he,me,xe,pe,be,ke,Te,je,Ie){"use strict";function Me({assistiveText:e,sourceLink:t,sourceText:n}){return s.jsxs("div",{children:[e&&t?s.jsx("span",Object.assign({class:"_1mbgh5t"},{children:e})):e,t&&s.jsx(i.InlineHelpSource,Object.assign({source:t},{children:n}))]})}const Ce={start:"fpoe0j",end:"u5cj8l"};function ve({align:e="end",hasHelp:t=!1,hasMessages:i=!1}){const n=a.classNames([Ce[e],(t||i)&&"c56yas"]),l=o.useTranslationBundle("@oracle/oraclejet-preact").userAssistance_required();return s.jsx("div",Object.assign({class:n},{children:l}))}const ye={reflow:"_1w5mzoo",efficient:"_1tgv96c"};function He({variant:e="reflow",children:t,id:i}){const n=a.classNames(["_1oz20i0",ye[e]]);return s.jsx("div",Object.assign({class:n,id:i},{children:t}))}e.InlineHelpSource=i.InlineHelpSource,e.InlineHelp=Me,e.InlineRequired=ve,e.InlineUserAssistance=function({assistiveText:e,fieldLabel:t,helpSourceLink:i,helpSourceText:n,id:o,isRequiredShown:a,messages:l=[],userAssistanceDensity:d}){const{isReadonly:_}=c.useFormContext(),A="efficient"===d&&!1===_,{isFocused:F}=r.useFormFieldContext(),U=l.length>0?s.jsx(u.ComponentMessageContainer,{fieldLabel:t,messages:l}):(e||i)&&F?s.jsx(Me,{assistiveText:e,sourceLink:i,sourceText:n}):a?s.jsx(ve,{}):null;return U||A?s.jsx(He,Object.assign({id:o,variant:d},{children:U})):null},e.InlineUserAssistanceContainer=He,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=UNSAFE_UserAssistance.js.map