(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[510],{1505:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/error",function(){return n(3709)}])},8418:function(e,t,n){"use strict";function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,o=!1,a=void 0;try{for(var i,l=e[Symbol.iterator]();!(r=(i=l.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(c){o=!0,a=c}finally{try{r||null==l.return||l.return()}finally{if(o)throw a}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}t.default=void 0;var o,a=(o=n(7294))&&o.__esModule?o:{default:o},i=n(6273),l=n(387),c=n(7190);var s={};function u(e,t,n,r){if(e&&i.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;s[t+"%"+n+(o?"%"+o:"")]=!0}}var f=function(e){var t,n=!1!==e.prefetch,o=l.useRouter(),f=a.default.useMemo((function(){var t=r(i.resolveHref(o,e.href,!0),2),n=t[0],a=t[1];return{href:n,as:e.as?i.resolveHref(o,e.as):a||n}}),[o,e.href,e.as]),p=f.href,d=f.as,h=e.children,m=e.replace,g=e.shallow,v=e.scroll,y=e.locale;"string"===typeof h&&(h=a.default.createElement("a",null,h));var x=(t=a.default.Children.only(h))&&"object"===typeof t&&t.ref,b=r(c.useIntersection({rootMargin:"200px"}),2),w=b[0],j=b[1],Z=a.default.useCallback((function(e){w(e),x&&("function"===typeof x?x(e):"object"===typeof x&&(x.current=e))}),[x,w]);a.default.useEffect((function(){var e=j&&n&&i.isLocalURL(p),t="undefined"!==typeof y?y:o&&o.locale,r=s[p+"%"+d+(t?"%"+t:"")];e&&!r&&u(o,p,d,{locale:t})}),[d,p,j,y,n,o]);var k={ref:Z,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,a,l,c){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&i.isLocalURL(n))&&(e.preventDefault(),null==l&&r.indexOf("#")>=0&&(l=!1),t[o?"replace":"push"](n,r,{shallow:a,locale:c,scroll:l}))}(e,o,p,d,m,g,v,y)},onMouseEnter:function(e){i.isLocalURL(p)&&(t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),u(o,p,d,{priority:!0}))}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var L="undefined"!==typeof y?y:o&&o.locale,_=o&&o.isLocaleDomain&&i.getDomainLocale(d,L,o&&o.locales,o&&o.domainLocales);k.href=_||i.addBasePath(i.addLocale(d,L,o&&o.defaultLocale))}return a.default.cloneElement(t,k)};t.default=f},2794:function(e,t,n){"use strict";var r=n(5893),o=n(7074),a=n(1953),i=(0,o.ZP)(a.Z)((function(e){return{height:"100vh","& .content-center":{display:"flex",minHeight:"100vh",alignItems:"center",justifyContent:"center",padding:e.theme.spacing(5)},"& .content-right":{display:"flex",minHeight:"100vh",overflowX:"hidden",position:"relative"}}}));t.Z=function(e){var t=e.children;return(0,r.jsx)(i,{className:"layout-wrapper",children:(0,r.jsx)(a.Z,{className:"app-content",sx:{minHeight:"100vh",overflowX:"hidden",position:"relative"},children:t})})}},9622:function(e,t,n){"use strict";n.r(t);var r=n(5893),o=n(1664),a=n(5084),i=n(7074),l=n(9630),c=n(1953),s=n(2794),u=n(3350);function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var p,d=(0,i.ZP)(c.Z)((function(e){return f({},e.theme.breakpoints.down("md"),{width:"90vw"})})),h=(0,i.ZP)("img")((function(e){var t=e.theme;return f(p={marginBottom:t.spacing(10)},t.breakpoints.down("lg"),{height:450,marginTop:t.spacing(10)}),f(p,t.breakpoints.down("md"),{height:400}),f(p,t.breakpoints.up("lg"),{marginTop:t.spacing(13)}),p})),m=(0,i.ZP)("img")((function(e){return f({left:0,bottom:"5rem",position:"absolute"},e.theme.breakpoints.down("lg"),{bottom:0})})),g=function(){return(0,r.jsxs)(c.Z,{className:"content-center",children:[(0,r.jsxs)(c.Z,{sx:{p:5,display:"flex",flexDirection:"column",alignItems:"center",textAlign:"center"},children:[(0,r.jsxs)(d,{children:[(0,r.jsx)(l.Z,{variant:"h1",children:"404"}),(0,r.jsx)(l.Z,{variant:"h5",sx:{mb:1,fontSize:"1.5rem !important"},children:"Page Not Found \u26a0\ufe0f"}),(0,r.jsx)(l.Z,{variant:"body2",children:"We couldn\u2032t find the page you are looking for."})]}),(0,r.jsx)(h,{height:"487",alt:"error-illustration",src:"/images/pages/404.png"}),(0,r.jsx)(o.default,{passHref:!0,href:"/",children:(0,r.jsx)(a.Z,{component:"a",variant:"contained",sx:{px:5.5},children:"Back to Home"})})]}),(0,r.jsx)(u.Z,{image:(0,r.jsx)(m,{alt:"tree",src:"/images/pages/tree.png"})})]})};g.getLayout=function(e){return(0,r.jsx)(s.Z,{children:e})},t.default=g},3709:function(e,t,n){"use strict";n.r(t);var r=n(5893),o=n(2794),a=n(9622),i=function(){return(0,r.jsx)(a.default,{})};i.getLayout=function(e){return(0,r.jsx)(o.Z,{children:e})},t.default=i},3350:function(e,t,n){"use strict";var r=n(5893),o=n(7294),a=n(1225),i=n(7074),l=n(2097);var c=(0,i.ZP)("img")((function(){return{bottom:0,zIndex:-1,width:"100%",position:"absolute"}})),s=(0,i.ZP)("img")((function(e){var t,n,r,o=e.theme;return t={left:"2.25rem",bottom:"4.25rem",position:"absolute"},n=o.breakpoints.down("lg"),r={left:0,bottom:0},n in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r,t}));t.Z=function(e){var t=e.image,n=(0,l.Z)();return(0,a.Z)(n.breakpoints.down("md"))?null:(0,r.jsxs)(o.Fragment,{children:[t||(0,r.jsx)(s,{alt:"tree",src:"/images/pages/tree-2.png"}),(0,r.jsx)(c,{alt:"mask",src:"/images/pages/misc-mask-".concat(n.palette.mode,".png")})]})}},1664:function(e,t,n){e.exports=n(8418)}},function(e){e.O(0,[774,888,179],(function(){return t=1505,e(e.s=t);var t}));var t=e.O();_N_E=t}]);