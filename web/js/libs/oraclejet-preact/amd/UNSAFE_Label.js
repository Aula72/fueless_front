define(["exports","./tslib.es6-d9d2f5d6","preact/jsx-runtime","./hooks/UNSAFE_useFormFieldContext","./utils/UNSAFE_classNames","css!./UNSAFE_Label.css","./hooks/UNSAFE_useFormContext","./classNames-2ba58777","preact","preact/hooks"],function(e,s,a,n,i,d,o,r,l,t){"use strict";const c={base:"cx2le4",startBase:"_8g0i7h",topBase:"_1qea10i",insideBase:"bkjbn7",insideReadonlyInEnabledForm:"_1y562h",insideReadonlyNotInEnabledForm:"x3m8dg",insideNonReadonly:"s6omgl",insideNonReadonlyHasValue:"_194slpv",insideDisabled:"_98bf7y",insideFocused:"_1ee91c",insideError:"nxgyma",insideWarning:"_1einnx3",noWrap:"_1t39xdx"},u=e=>{var{hasValue:n,readonly:i,disabled:d,isFocused:l,variant:t="inside"}=e,u=s.__rest(e,["hasValue","readonly","disabled","isFocused","variant"]);const{isFormLayout:b,isReadonly:F,labelWrapping:m}=o.useFormContext(),y="inside"===t||"insideError"===t||"insideWarning"===t?r.classNames([c.base,c.insideBase,i&&(b&&!F?c.insideReadonlyInEnabledForm:c.insideReadonlyNotInEnabledForm),!i&&c.insideNonReadonly,!i&&(n||l)&&c.insideNonReadonlyHasValue,!i&&l&&c.insideFocused,d&&c.insideDisabled,!d&&!i&&("insideError"===t||"insideWarning"===t)&&c[t]]):"start"===t?r.classNames([c.base,c.startBase,"truncate"===m&&c.noWrap]):"top"===t?r.classNames([c.base,c.topBase,"truncate"===m&&c.noWrap]):void 0;return a.jsx("label",Object.assign({},u,{class:y}))};e.Label=e=>{var{forId:i}=e,d=s.__rest(e,["forId"]);const{hasValue:o,isDisabled:r,isFocused:l,isReadonly:t}=n.useFormFieldContext();return a.jsx(u,Object.assign({for:i,hasValue:o,disabled:r,isFocused:l,readonly:t},d))},Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=UNSAFE_Label.js.map
