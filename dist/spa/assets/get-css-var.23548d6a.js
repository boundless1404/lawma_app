function r(e,t=document.body){if(typeof e!="string")throw new TypeError("Expected a string as propName");if(!(t instanceof Element))throw new TypeError("Expected a DOM element");return getComputedStyle(t).getPropertyValue(`--q-${e}`).trim()||null}export{r as g};