define(["exports","preact/hooks"],function(e,u){"use strict";e.useFocusWithin=function({isDisabled:e,onBlurWithin:n,onFocusWithin:s}={}){const[t,r]=u.useState(!1),o=u.useRef(!1),c=u.useCallback(e=>{o.current||(null==s||s(e),r(!0),o.current=!0)},[s]),i=u.useCallback(e=>{!o.current||null!=e.relatedTarget&&e.currentTarget.contains(e.relatedTarget)||(null==n||n(e),r(!1),o.current=!1)},[n]);return e?{isFocused:!1,focusProps:{}}:{isFocused:t,focusProps:{onfocusin:c,onfocusout:i}}}});
//# sourceMappingURL=useFocusWithin-8f27a1c8.js.map