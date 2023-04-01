define(["exports","preact/jsx-runtime","preact/hooks","css!./PRIVATE_SelectCommon.css","./UNSAFE_HighlightText","./PRIVATE_List","./UNSAFE_Flex","./UNSAFE_Skeleton","./utils/UNSAFE_logger","./Flex-f922bd14","./HighlightText-691a0697","./List-7b05e54e","./Skeleton-212f1c06","./UNSAFE_Floating","./UNSAFE_Layer","./utils/UNSAFE_arrayUtils","./Floating-f23a546d","./hooks/UNSAFE_usePress","./index-16862ac7","./utils/UNSAFE_classNames","./classNames-2ba58777","./index-cf988fc7","./hooks/UNSAFE_useFormFieldContext","./UNSAFE_UserAssistance","./hooks/UNSAFE_useTranslationBundle","./utils/PRIVATE_clientHints","./clientHints-4aaefa1c","./utils/UNSAFE_mergeProps","./utils/UNSAFE_keys","./LoadMoreCollection-c0a38d55","./PRIVATE_Collection","./Collection-8a961897","preact","./hooks/UNSAFE_useViewportIntersect","./PRIVATE_VirtualizedCollection","./VirtualizedCollection-54fac538","./hooks/UNSAFE_useTabbableMode","./UNSAFE_FocusTrap","./FocusTrap-38127371","preact/compat","./utils/PRIVATE_tabbableUtils","./_curry1-9cbf463f","./_curry2-37583590","./_curry3-2cf14b96","./hooks/UNSAFE_useId","./hooks/PRIVATE_useSelection","./hooks/PRIVATE_useCurrentKey","./hooks/PRIVATE_useCollectionFocusRing","./hooks/PRIVATE_useTabbableModeSet","./hooks/PRIVATE_useItemAction","./utils/PRIVATE_collectionUtils","./tslib.es6-d9d2f5d6","./utils/UNSAFE_interpolations/dimensions","./utils/UNSAFE_size","./utils/UNSAFE_mergeInterpolations","./_has-b679fc56","./utils/UNSAFE_interpolations/borders","./utils/UNSAFE_interpolations/boxalignment","./keys-ac292f2b","./utils/UNSAFE_interpolations/flexbox","./flexbox-f0221a64","./utils/UNSAFE_interpolations/flexitem","./flexitem-4580af77","./UNSAFE_Selector","./UNSAFE_Icon","./Icon-4325e74f","./hooks/UNSAFE_useTooltip","./hooks/UNSAFE_useHover","./hooks/UNSAFE_useToggle","./hooks/UNSAFE_useFocus","./hooks/UNSAFE_useTouch","./hooks/UNSAFE_useAnimation","./useAnimation-c8511df4","./index-b6f31c6c","./hooks/UNSAFE_useUser","./UNSAFE_Environment","./utils/PRIVATE_floatingUtils","./utils/PRIVATE_refUtils","./hooks/UNSAFE_useOutsideClick","./hooks/UNSAFE_useTheme","./InlineHelpSource-0da64d0a","./UNSAFE_ComponentMessage","./ComponentMessage-08ded24e","./PRIVATE_Message","./utils/PRIVATE_timer","./MessageCloseButton-fc804358","./UNSAFE_Button","./Button-dc28bc46","./UNSAFE_BaseButton","./BaseButton-f6b56c16","./hooks/UNSAFE_useActive","./MessageDetail-c1e0cdc2","./MessageFormattingUtils-95f48c88","./utils/UNSAFE_getLocale","./utils/UNSAFE_stringUtils","./stringUtils-1ad4f59d","./Message.types-97d3e7a4","./MessageStartIcon-665f54bc","./MessageSummary-4bfdff83","./MessageTimestamp-7b2ca246","./MessageUtils-e1daf68f","./utils/UNSAFE_soundUtils","./MessagesManager-815876b7","./PRIVATE_TransitionGroup","./hooks/UNSAFE_useMessagesContext","./UNSAFE_HiddenAccessible","./HiddenAccessible-3afe5d7e","./ComponentMessageContainer-d309a605","./hooks/UNSAFE_useFormContext"],function(e,t,s,n,o,i,a,l,r,c,u,d,f,A,E,h,_,F,S,g,b,m,p,v,T,U,C,N,x,k,y,w,I,R,D,P,j,L,M,O,K,H,V,B,G,z,W,q,Y,$,J,Q,X,Z,ee,te,se,ne,oe,ie,ae,le,re,ce,ue,de,fe,Ae,Ee,he,_e,Fe,Se,ge,be,me,pe,ve,Te,Ue,Ce,Ne,xe,ke,ye,we,Ie,Re,De,Pe,je,Le,Me,Oe,Ke,He,Ve,Be,Ge,ze,We,qe,Ye,$e,Je,Qe,Xe,Ze,et){"use strict";function tt(e,t){var s;if("string"!=typeof t)return t(e);if(null===(s=e.data)||void 0===s?void 0:s.hasOwnProperty(t)){const s=e.data[t];return String(s)}r.Logger.error("SelectMultiple: itemText specifies field that does not exist: "+t)}const st=()=>{};const nt=t.jsx(d.SkeletonContainer,Object.assign({minimumCount:3},{children:()=>t.jsx(c.Flex,Object.assign({height:"12x",align:"center"},{children:t.jsx(f.Skeleton,{height:"4x"})}))})),ot={TAB:"Tab",ENTER:"Enter",ESC:"Escape",SPACE:"Space",LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",DOWN:"ArrowDown",SHIFT_LEFT:"ShiftLeft",SHIFT_RIGHT:"ShiftRight",CTRL_LEFT:"ControlLeft",CTRL_RIGHT:"ControlRight",ALT_LEFT:"AltLeft",ALT_RIGHT:"AltRight",PAGE_UP:"PageUp",PAGE_DOWN:"PageDown",HOME:"Home",END:"End",BACKSPACE:"Backspace",DELETE:"Delete"},it=e=>{switch(e.code){case ot.SHIFT_LEFT:case ot.SHIFT_RIGHT:case ot.CTRL_LEFT:case ot.CTRL_RIGHT:case ot.ALT_LEFT:case ot.ALT_RIGHT:return!0;default:return e.metaKey||e.ctrlKey}},at=e=>/\bF([1-9]|1[0-2])\b/i.test(e.code),lt=e=>it(e)||at(e),rt=e=>0===e.button&&!e.ctrlKey,ct=e=>{e.currentTarget===e.target&&e.preventDefault()},ut=e=>{var t;return null!==(t=null==e?void 0:e.ownerDocument)&&void 0!==t?t:document},dt=({isDisabled:e=!1,ref:t,handler:n})=>{s.useEffect(()=>{const s=h.coerceArray(t);if(!n||e||s.length>0&&s.findIndex(e=>null===e.current)>-1)return;const o=e=>{((e,t)=>{const s=e.target;if(s&&!ut(s).contains(s))return!1;return t.every(e=>{var t;return!(null===(t=e.current)||void 0===t?void 0:t.contains(s))})})(e,s)&&(null==n||n(e))},i=s[0],a=ut(i.current);return a?(a.addEventListener("mousedown",o,!0),()=>{a.removeEventListener("mousedown",o,!0)}):void 0},[e,n,t])},ft="_1h6s0tr";const At="_6na5s8",Et="_14d4hoz",ht="_1bon4kf",_t="_182zphd",Ft="_1ebbyy6",St=()=>{};const gt="sg0nn0",bt="nunjge",mt="_1q1r4vf",pt="_14b21f1";e.DefaultList=function({accessibleSummary:e,currentItemVariant:n,currentKey:o,data:i,itemText:a,onCurrentKeyChange:l,onItemAction:r,onLoadRange:f=st,onSelectionChange:A,searchText:E,selectedKeys:h,selectionMode:_}){const F=s.useCallback(e=>{const s=tt({data:e.data,key:e.metadata.key,metadata:e.metadata},a);return t.jsxs(c.Flex,{children:[e.selector&&e.selector(),t.jsx("div",Object.assign({class:"_1u0j52"},{children:t.jsx(u.HighlightText,Object.assign({matchText:E},{children:s}))}))]})},[a,E]),S=s.useMemo(()=>({all:!1,keys:null!=h?h:new Set}),[h]);return t.jsx(d.List,Object.assign({accessibleSummary:e,allowTabbableMode:!1,currentItemVariant:n,currentKey:o,data:null!=i?i:null,loadingIndicator:nt,onCurrentKeyChange:l,onItemAction:r,onLoadRange:f,onSelectionChange:A,role:"listbox",selectedKeys:S,selectionMode:_},{children:e=>F(e)}))},e.Dropdown=function({anchorRef:e,children:n,dropdownRef:o,id:i,isOpen:a,onAutoDismiss:l}){var r;const c=s.useCallback(e=>{null==l||l(e)},[l]),u=s.useCallback(e=>{if(!e.defaultPrevented&&!lt(e))switch(e.code){case ot.ESC:case ot.TAB:c(e)}},[c]);dt({isDisabled:!a,ref:[e,o],handler:c});const d={minWidth:`${null===(r=e.current)||void 0===r?void 0:r.offsetWidth}px`};return a?t.jsx(E.Layer,Object.assign({logicalParentRef:e},{children:t.jsx(_.Floating,Object.assign({anchorRef:e,ref:o,placement:"bottom-start",offsetValue:{mainAxis:4,crossAxis:0}},{children:t.jsx("div",Object.assign({class:ft,id:i,style:d,onKeyDown:u,onMouseDown:ct},{children:n}))}))})):null},e.DropdownArrow=function({isDisabled:e=!1,onClick:n,size:o="md"}){const i=s.useCallback(e=>{e.preventDefault()},[]),{pressProps:a}=F.usePress(null!=n?n:St,{isDisabled:e}),l=b.classNames([At,"sm"===o?ht:Et,e?Ft:_t]);return t.jsx("span",Object.assign({"aria-hidden":"true",class:l,tabIndex:-1,onMouseDown:i},a,{children:t.jsx(m.SvgIcoCaretDown,{})}))},e.DropdownList=function({children:e,hasBottomGap:s=!0,isLoading:n=!1}){const o=b.classNames([gt,bt,s&&mt,n&&pt]);return t.jsx("div",Object.assign({class:o,onMouseDown:ct},{children:e}))},e.DropdownUserAssistance=function(e){const n=s.useCallback(e=>{var t;"A"!==(null===(t=e.target)||void 0===t?void 0:t.tagName)&&e.preventDefault()},[]);return t.jsx(p.FormFieldContext.Provider,Object.assign({value:{isFocused:!0}},{children:t.jsx("div",Object.assign({class:"_1o7b9oa",onMouseDown:n},{children:t.jsx(v.InlineUserAssistance,Object.assign({},e))}))}))},e.EmptyResults=function(){const e=T.useTranslationBundle("@oracle/oraclejet-preact");return t.jsx("div",Object.assign({class:"_8dyt60",onMouseDown:ct},{children:e.select_noMatchesFound()}))},e.KEYS=ot,e.isBeforeDataFetch=function(e){return"atLeast"===e.sizePrecision&&0===e.totalSize},e.isControlKey=it,e.isControlOrFunctionKey=lt,e.isFunctionKey=at,e.isMobile=function(){const e=C.getClientHints().deviceType;return"phone"===e||"tablet"===e},e.isSimpleClick=rt,e.preventDefaultForCurrentTarget=ct,e.renderItemText=tt,e.useSelectCommon=function({data:e,inputRef:t,isFocused:n,onFilter:o}){const i=s.useRef(null),a=s.useRef(null),[l,r]=s.useState(!1),[c,u]=s.useState({rowKey:void 0}),[d,f]=s.useState(),[A,E]=s.useState(!1),[h,_]=s.useState(),[F,S]=s.useState(),g=s.useCallback(e=>{!e.defaultPrevented&&rt(e)&&(l||r(!0),setTimeout(function(){var e;null===(e=t.current)||void 0===e||e.focus()},0))},[l]),b=s.useCallback(()=>{var e;r(!l),null===(e=t.current)||void 0===e||e.focus()},[l]),m=s.useCallback(e=>{var s,n,o;if(l)switch(r(!1),null==e?void 0:e.type){case"keydown":if(e.code===ot.ESC)null===(s=t.current)||void 0===s||s.focus();break;case"mousedown":(null===(n=a.current)||void 0===n?void 0:n.contains(document.activeElement))&&(null===(o=t.current)||void 0===o||o.focus())}},[l]),p=s.useCallback(t=>{var s,n,o,i;if(l){const t=null===(s=a.current)||void 0===s?void 0:s.querySelector('[tabindex="0"]');null==t||t.focus(),void 0!==e&&void 0===c.rowKey&&u({rowKey:null===(i=null===(o=null===(n=null==e?void 0:e.data)||void 0===n?void 0:n[0])||void 0===o?void 0:o.metadata)||void 0===i?void 0:i.key})}else r(!0);t.preventDefault()},[c,e,l]),v=s.useCallback(e=>{if(!lt(e))switch(e.code){case ot.PAGE_UP:case ot.PAGE_DOWN:return void e.preventDefault();case ot.UP:case ot.DOWN:e.preventDefault();break;case ot.ESC:l&&(r(!1),e.preventDefault(),e.stopPropagation())}},[l]),T=s.useCallback(e=>{if(!lt(e))switch(e.code){case ot.UP:case ot.DOWN:p(e)}},[p]),U=s.useCallback(e=>{var t;l||r(!0),E(!0),_(e.value);const s=null===(t=e.value)||void 0===t?void 0:t.trim();S(s),null==o||o({searchText:s})},[l,o]),C=s.useCallback(e=>{u({rowKey:e.value})},[]),N=s.useCallback(()=>{E(!1),_(""),S("")},[]);return s.useEffect(()=>{l||n||!A||N()},[l,n,A]),s.useEffect(()=>{l&&!A&&(null==o||o({searchText:void 0}))},[l,A,o]),{currentRow:c,dropdownRef:a,handleDropdownArrowClick:b,handleDropdownAutoDismiss:m,handleInput:U,handleMainFieldKeyDown:v,handleMainFieldKeyUp:T,handleUpDownArrowKeys:p,isDropdownOpen:l,isFocused:n||l,isUserFiltering:A,mainFieldRef:i,onCurrentKeyChange:C,onMouseDown:g,searchText:F,selectedKeys:d,setCurrentRow:u,setDropdownOpen:r,setSelectedKeys:f,stopFiltering:N,userInput:h}},Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=PRIVATE_SelectCommon.js.map
