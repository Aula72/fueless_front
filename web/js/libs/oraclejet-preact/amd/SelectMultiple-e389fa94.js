define(["exports","preact/jsx-runtime","preact","preact/compat","./hooks/UNSAFE_useFocusableTextField","./hooks/UNSAFE_useFormContext","./hooks/UNSAFE_useFormFieldContext","./hooks/UNSAFE_useLoadingIndicatorTimer","./hooks/UNSAFE_useTextField","./UNSAFE_Flex","./UNSAFE_Label","./UNSAFE_LiveRegion","./UNSAFE_TextField","./UNSAFE_UserAssistance","./PRIVATE_SelectCommon","./tslib.es6-d9d2f5d6",'module',"./UNSAFE_Chip","./hooks/UNSAFE_useTranslationBundle","./Chip-d51425d5","preact/hooks","./utils/UNSAFE_mergeProps","./ReadonlyTextFieldInput-a0801f52","./TextFieldInput-f9e605d9","./Flex-f922bd14"],function(e,n,s,o,t,i,l,a,r,d,u,c,p,v,f,h,b,F,m,x,g,y,S,w,D){"use strict";function E(e){var{accessibleLabel:s,count:o=0,onKeyDown:t,onKeyUp:i,onMouseDown:l}=e,a=h.__rest(e,["accessibleLabel","count","onKeyDown","onKeyUp","onMouseDown"]);const r=m.useTranslationBundle("@oracle/oraclejet-preact"),d=r.selectMultiple_showSelectedValues(),u=s?`${s}. `:"",c=r.selectMultiple_countPlus({COUNT:"99"}),p=o>99?`${c}`:`${o}`,v=`${u}${r.selectMultiple_valuesSelected({VALUE_COUNT:`${o}`})} ${d}`;return n.jsx("div",Object.assign({class:"_1iu3oqv",onKeyDown:t,onKeyUp:i,onMouseDown:l},{children:n.jsx(x.Chip,Object.assign({accessibleLabel:v},a,{children:p}))}))}function R(e,n){const s=m.useTranslationBundle("@oracle/oraclejet-preact").plural_separator(),o=g.useMemo(()=>{if(void 0===n)return"";const o=function(e,n){const s=n?[...null==n?void 0:n.values()]:[],o=n=>f.renderItemText(n,e),t=s.map(o);return new Set(t)}(e,n),t=function(e,n){return Array.from(e.values()).join(n)}(o,s);return t},[n,e]);return o}function A({data:e,inputRef:n,isDisabled:s,isFocused:o,isReadonly:t,onCommit:i,onFilter:l,onLoadRange:a,valueItems:r}){const[d,u]=g.useState(!1),c=null==r?void 0:r.length,p=void 0!==c&&c>0||d,v=function({isDropdownSelectedOnlyView:e,valueItems:n}){return{data:g.useMemo(()=>{var s;return e&&n&&0!==n.length?{offset:0,totalSize:null!==(s=null==n?void 0:n.length)&&void 0!==s?s:0,sizePrecision:"exact",data:n.map(e=>{var n;return{data:e.data,metadata:null!==(n=e.metadata)&&void 0!==n?n:{key:e.key}}})}:void 0},[e]),onLoadRange:void 0}}({isDropdownSelectedOnlyView:d,valueItems:r}),h=d?v.data:e,b=d?v.onLoadRange:a,{currentRow:F,dropdownRef:m,handleDropdownArrowClick:x,handleDropdownAutoDismiss:S,handleInput:w,handleMainFieldKeyDown:D,handleMainFieldKeyUp:E,handleUpDownArrowKeys:R,isDropdownOpen:A,isFocused:j,isUserFiltering:C,mainFieldRef:T,onCurrentKeyChange:K,onMouseDown:L,searchText:U,selectedKeys:O,setCurrentRow:k,setDropdownOpen:_,setSelectedKeys:P,userInput:I}=f.useSelectCommon({data:h,inputRef:n,isFocused:o,onFilter:l}),M=g.useCallback(()=>{var e,n;null===(n=null===(e=m.current)||void 0===e?void 0:e.parentElement)||void 0===n||n.removeChild(m.current)},[]),N=g.useCallback(e=>{var s,o;if(A&&"keydown"===(null==e?void 0:e.type)){const t=e;if(t.code===f.KEYS.TAB)t.shiftKey||!p?null===(s=n.current)||void 0===s||s.focus():null===(o=V.current)||void 0===o||o.focus(),M()}},[p,A]),B=g.useCallback(e=>{if(!f.isControlOrFunctionKey(e)&&e.code===f.KEYS.TAB)A&&(e.shiftKey||!p&&!e.shiftKey)&&(M(),_(!1)),p&&!e.shiftKey&&e.stopPropagation()},[p,A]);g.useEffect(()=>{const e=null==r?void 0:r.reduce((e,n)=>(e.add(n.key),e),new Set);P(e)},[r]);const V=g.useRef(null);g.useEffect(()=>{V.current=p&&T.current?T.current.querySelector('[role="switch"]'):null},[p,s,t]);const z=g.useCallback(e=>{switch(e.code){case f.KEYS.TAB:A&&!e.shiftKey&&(M(),_(!1)),e.shiftKey&&e.stopPropagation();break;case f.KEYS.UP:case f.KEYS.DOWN:e.preventDefault();break;case f.KEYS.ESC:A&&(_(!1),e.preventDefault(),e.stopPropagation());break;case f.KEYS.ENTER:e.stopPropagation()}},[A]),$=g.useCallback(e=>{switch(e.code){case f.KEYS.UP:case f.KEYS.DOWN:R(e)}},[R]),Y=g.useCallback(e=>{var s;e.preventDefault(),null===(s=n.current)||void 0===s||s.focus()},[]),q=g.useCallback(e=>{var n;A||_(!0);const s=null!==(n=e.value)&&void 0!==n&&n;s!==d&&u(s)},[A,d]);g.useEffect(()=>{!A&&d&&u(!1)},[A,d]);const H=g.useCallback(e=>{var n;const s=new Set(null===(n=e.value.keys)||void 0===n?void 0:n.values());P(s),null==i||i({value:s,previousValue:O})},[i,O]),W=g.useMemo(()=>y.mergeProps({onAutoDismiss:S},{onAutoDismiss:N}),[S,N]),Z=g.useMemo(()=>y.mergeProps({onInput:w,onKeyDown:D,onKeyUp:E},{onKeyDown:B}),[D,w,E,B]);return g.useEffect(()=>{A&&k({rowKey:void 0})},[A]),{collectionProps:{currentKey:F.rowKey,onCurrentKeyChange:K,onSelectionChange:H,selectedKeys:O},data:h,dropdownArrowEventHandlers:{onClick:x},dropdownEventHandlers:W,dropdownRef:m,hasSelectedValuesCount:p,inputEventHandlers:Z,inputRef:n,isDropdownOpen:A,isDropdownSelectedOnlyView:d,isFocused:j,isUserFiltering:C,mainFieldRef:T,mouseProps:s||t?{}:{onMouseDown:L},onLoadRange:b,searchText:U,selectedValuesCountProps:{onKeyDown:z,onKeyUp:$,onMouseDown:Y,onToggle:q},userInput:I}}const j=o.forwardRef(({ariaDescribedBy:e,assistiveText:o,data:d,helpSourceLink:h,helpSourceText:b,isDisabled:F,isLoading:x,isReadonly:g,isRequired:y,isRequiredShown:j,itemText:C,label:T,labelEdge:K,labelStartWidth:L,messages:U,onCommit:O,onFilter:k,onLoadRange:_,placeholder:P,textAlign:I,userAssistanceDensity:M,valueItems:N,variant:B="default",virtualKeyboard:V},z)=>{const{isDisabled:$,isReadonly:Y,labelEdge:q,labelStartWidth:H,textAlign:W,userAssistanceDensity:Z}=i.useFormContext(),G=null!=F?F:$,J=null!=g?g:Y,Q=null!=K?K:q,X=null!=L?L:H,ee=null!=I?I:W,ne=null!=M?M:Z,{enabledElementRef:se,focusProps:oe,isFocused:te,readonlyElementRef:ie}=t.useFocusableTextField({isDisabled:G,isReadonly:J,ref:z}),{collectionProps:le,data:ae,dropdownArrowEventHandlers:re,dropdownEventHandlers:de,dropdownRef:ue,hasSelectedValuesCount:ce,inputEventHandlers:pe,isDropdownOpen:ve,isDropdownSelectedOnlyView:fe,isFocused:he,isUserFiltering:be,mainFieldRef:Fe,mouseProps:me,onLoadRange:xe,searchText:ge,selectedValuesCountProps:ye,userInput:Se}=A({data:d,inputRef:se,isDisabled:G,isFocused:te,isReadonly:J,onCommit:O,onFilter:k,onLoadRange:_,valueItems:N}),we=a.useLoadingIndicatorTimer(null!=x&&x),{baseId:De,formFieldContext:Ee,inputProps:Re,labelProps:Ae,textFieldProps:je,userAssistanceProps:Ce}=r.useTextField({ariaDescribedBy:e,isDisabled:G,isFocused:he,isLoading:we,isReadonly:J,labelEdge:Q,messages:U,styleVariant:B,value:void 0!==N&&N.length>0||void 0}),Te=`${De}-dropdown`,Ke=R(C,N),Le="none"!==Q?n.jsx(u.Label,Object.assign({},Ae,{children:T})):void 0,Ue={label:"none"!==Q?Le:void 0,labelEdge:"none"!==Q?Q:void 0,labelStartWidth:"none"!==Q?X:void 0},Oe="none"===Q?T:void 0,ke=G||J?"efficient"!==ne?void 0:n.jsx(v.InlineUserAssistance,Object.assign({userAssistanceDensity:ne},Ce)):n.jsx(v.InlineUserAssistance,Object.assign({assistiveText:o,fieldLabel:T,helpSourceLink:h,helpSourceText:b,messages:U,isRequiredShown:j,userAssistanceDensity:ne},Ce)),_e=m.useTranslationBundle("@oracle/oraclejet-preact");if(J)return n.jsx(l.FormFieldContext.Provider,Object.assign({value:Ee},{children:n.jsx(p.ReadonlyTextField,Object.assign({role:"presentation",inlineUserAssistance:ke,onBlur:oe.onfocusout,onFocus:oe.onfocusin},Ue,{children:n.jsx(S.ReadonlyTextFieldInput,{ariaDescribedBy:e,ariaLabel:Oe,ariaLabelledBy:Ae.id,as:"div",elementRef:ie,hasInsideLabel:void 0!==T&&"inside"===Q,textAlign:ee,value:Ke})}))}));const Pe=null!=ae&&!f.isBeforeDataFetch(ae),Ie=void 0!==Le&&"inside"===Q,Me=ve&&Pe?0===(null==ae?void 0:ae.totalSize)?_e.select_noMatchesFound():1===(null==ae?void 0:ae.totalSize)?_e.select_oneMatchFound():"exact"===(null==ae?void 0:ae.sizePrecision)?_e.select_sizeMatchesFound({TOTAL_SIZE:`${null==ae?void 0:ae.totalSize}`}):_e.select_sizeOrMoreMatchesFound({TOTAL_SIZE:`${null==ae?void 0:ae.totalSize}`}):"",Ne=n.jsxs(s.Fragment,{children:[n.jsx(w.TextFieldInput,Object.assign({ariaAutoComplete:"list",ariaControls:Te,ariaExpanded:ve,ariaLabel:Oe,autoComplete:"off",hasInsideLabel:Ie,inputRef:se,isRequired:y},pe,{placeholder:P,role:"combobox",spellcheck:!1,textAlign:ee,type:f.isMobile()?"auto"===V?"search":V:void 0,value:be?Se:Ke},Re)),n.jsx(c.LiveRegion,{children:Me})]}),Be=n.jsx(f.DropdownArrow,Object.assign({isDisabled:G,size:Ie?"md":"sm"},re)),Ve=null==N?void 0:N.length,ze=we?void 0:ce?n.jsxs(D.Flex,Object.assign({align:"center",justify:"center",gap:[0,"1x"]},{children:[n.jsx(E,Object.assign({accessibleLabel:T,count:Ve,isDisabled:G,isSelected:fe},ye)),Be]})):Be,$e=!ve||G||J||!o&&!h||"efficient"!==ne&&"reflow"!==ne?void 0:n.jsx(f.DropdownUserAssistance,{assistiveText:o,fieldLabel:T,helpSourceLink:h,helpSourceText:b,userAssistanceDensity:ne}),Ye=Pe&&0===(null==ae?void 0:ae.totalSize),qe=Ye?n.jsx(f.EmptyResults,{}):n.jsx(f.DefaultList,Object.assign({},le,{accessibleSummary:null!=T?T:"",data:ae,itemText:C,onLoadRange:xe,searchText:fe?void 0:be?ge:void 0,selectionMode:"multiple"}));return n.jsxs(s.Fragment,{children:[n.jsx(l.FormFieldContext.Provider,Object.assign({value:Ee},{children:n.jsx(p.TextField,Object.assign({endContent:ze,inlineUserAssistance:ke,mainContent:Ne,mainFieldRef:Fe,onBlur:null==oe?void 0:oe.onfocusout,onFocus:null==oe?void 0:oe.onfocusin},je,Ue,me))})),n.jsxs(f.Dropdown,Object.assign({dropdownRef:ue,id:Te,isOpen:ve&&void 0!==ae&&(null===ae||ae.totalSize>0||f.isBeforeDataFetch(ae)||Ye),anchorRef:Fe},de,{children:[n.jsx(f.DropdownList,Object.assign({hasBottomGap:void 0===$e,isLoading:null===ae},{children:qe})),$e]}))]})});e.SelectMultiple=j});
//# sourceMappingURL=SelectMultiple-e389fa94.js.map
