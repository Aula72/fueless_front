define(["exports","./utils/UNSAFE_logger","./utils/UNSAFE_soundUtils","./MessageFormattingUtils-95f48c88"],function(e,t,n,o){"use strict";const i=(e,n="common")=>t.Logger.warn(`JET Message(${n}): ${e}`);function r(e,t="common"){throw new Error(`JET Message(${t}) - ${e}`)}function s(e,t,n,o){if(!t||!n)return;const i="function"==typeof t?t(e):t;return null!=i?(i in n||r(`${i} is not a valid template name for the message with key=${e.key}`,o),n[i]):void 0}e.getRenderer=s,e.getRendererWithoutIndex=function(e,t,n,o){const i=s(e,t,n,o);return"function"==typeof i?e=>{const t=Object.assign({},e);return"index"in t&&delete t.index,i.call(null,t)}:i},e.isSeverityIconNeeded=function(e){return o.isValidValueForProp(e,"severity")&&"none"!==e},e.playSound=async function(e){if("none"!==e)if("default"!==e)try{await n.playAudioFromURL(e)}catch(t){i(`Failed to play the audio from the url ${e}. ${t}.`)}else try{n.playDefaultNotificationSound()}catch(e){i(`Failed to play the default sound. ${e}.`)}},e.severityBasedStyleClass=function(e,t){return o.isValidValueForProp(e,"severity")&&"none"!==e?`oj-c-message${t}-${e}`:""},e.throwError=r});
//# sourceMappingURL=MessageUtils-e1daf68f.js.map
