_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[6],{"0TdX":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.assertNodeList=i,t.setElement=function(e){var t=e;if("string"===typeof t&&s.canUseDOM){var n=document.querySelectorAll(t);i(n,t),t="length"in n?n[0]:n}return l=t||l},t.validateElement=u,t.hide=function(e){u(e)&&(e||l).setAttribute("aria-hidden","true")},t.show=function(e){u(e)&&(e||l).removeAttribute("aria-hidden")},t.documentNotReadyOrSSRTesting=function(){l=null},t.resetForTesting=function(){l=null};var o,r=n("FIWN"),a=(o=r)&&o.__esModule?o:{default:o},s=n("s4Wf");var l=null;function i(e,t){if(!e||!e.length)throw new Error("react-modal: No elements were found for selector "+t+".")}function u(e){return!(!e&&!l)||((0,a.default)(!1,["react-modal: App element is not defined.","Please use `Modal.setAppElement(el)` or set `appElement={el}`.","This is needed so screen readers don't see main content","when modal is opened. It is not recommended, but you can opt-out","by setting `ariaHideApp={false}`."].join(" ")),!1)}},"3gDE":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=(0,a.default)(e);if(!n.length)return void t.preventDefault();var o=void 0,r=t.shiftKey,s=n[0],l=n[n.length-1];if(e===document.activeElement){if(!r)return;o=l}l!==document.activeElement||r||(o=s);s===document.activeElement&&r&&(o=l);if(o)return t.preventDefault(),void o.focus();var i=/(\bChrome\b|\bSafari\b)\//.exec(navigator.userAgent);if(null==i||"Chrome"==i[1]||null!=/\biPod\b|\biPad\b/g.exec(navigator.userAgent))return;var u=n.indexOf(document.activeElement);u>-1&&(u+=r?-1:1);if("undefined"===typeof(o=n[u]))return t.preventDefault(),void(o=r?l:s).focus();t.preventDefault(),o.focus()};var o,r=n("XrU5"),a=(o=r)&&o.__esModule?o:{default:o};e.exports=t.default},"3tiF":function(e,t){var n=Object.prototype.hasOwnProperty;e.exports=function e(t,o){var r=[];for(var a in t)if(n.call(t,a)){var s,l=t[a],i=encodeURIComponent(a);s="object"===typeof l?e(l,o?o+"["+i+"]":i):(o?o+"["+i+"]":i)+"="+encodeURIComponent(l),r.push(s)}return r.join("&")}},"4xQx":function(e,t,n){e.exports={background:"index-styles_background__28_Iy",content:"index-styles_content__wKtby"}},"50Xg":function(e,t,n){e.exports={post:"styles_post__18qEK"}},"5X3g":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=new function e(){var t=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.register=function(e){-1===t.openInstances.indexOf(e)&&(t.openInstances.push(e),t.emit("register"))},this.deregister=function(e){var n=t.openInstances.indexOf(e);-1!==n&&(t.openInstances.splice(n,1),t.emit("deregister"))},this.subscribe=function(e){t.subscribers.push(e)},this.emit=function(e){t.subscribers.forEach((function(n){return n(e,t.openInstances.slice())}))},this.openInstances=[],this.subscribers=[]};t.default=o,e.exports=t.default},"5dyF":function(e,t,n){e.exports=n("9CGT")},"7cEM":function(e,t,n){e.exports={postCard:"SquaredLink_postCard__2jSSU"}},"9CGT":function(e,t,n){"use strict";var o=n("nxTg"),r=n("vdEC");t.__esModule=!0,t.default=void 0;var a,s=r(n("mXGw")),l=n("a4i1"),i=n("bBV7"),u=new Map,c=window.IntersectionObserver,f={};var d=function(e,t){var n=a||(c?a=new c((function(e){e.forEach((function(e){if(u.has(e.target)){var t=u.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(a.unobserve(e.target),u.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0);return n?(n.observe(e),u.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}u.delete(e)}):function(){}};function p(e,t,n,o){(0,l.isLocalURL)(t)&&(e.prefetch(t,n,o).catch((function(e){0})),f[t+"%"+n]=!0)}var h=function(e){var t=!1!==e.prefetch,n=s.default.useState(),r=o(n,2),a=r[0],u=r[1],h=(0,i.useRouter)(),m=h&&h.pathname||"/",v=s.default.useMemo((function(){var t=(0,l.resolveHref)(m,e.href);return{href:t,as:e.as?(0,l.resolveHref)(m,e.as):t}}),[m,e.href,e.as]),y=v.href,b=v.as;s.default.useEffect((function(){if(t&&c&&a&&a.tagName&&(0,l.isLocalURL)(y)&&!f[y+"%"+b])return d(a,(function(){p(h,y,b)}))}),[t,a,y,b,h]);var O=e.children,g=e.replace,C=e.shallow,w=e.scroll;"string"===typeof O&&(O=s.default.createElement("a",null,O));var _=s.Children.only(O),E={ref:function(e){e&&u(e),_&&"object"===typeof _&&_.ref&&("function"===typeof _.ref?_.ref(e):"object"===typeof _.ref&&(_.ref.current=e))},onClick:function(e){_.props&&"function"===typeof _.props.onClick&&_.props.onClick(e),e.defaultPrevented||function(e,t,n,o,r,a,s){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,l.isLocalURL)(n))&&(e.preventDefault(),null==s&&(s=o.indexOf("#")<0),t[r?"replace":"push"](n,o,{shallow:a}).then((function(e){e&&s&&(window.scrollTo(0,0),document.body.focus())})))}(e,h,y,b,g,C,w)}};return t&&(E.onMouseEnter=function(e){(0,l.isLocalURL)(y)&&(_.props&&"function"===typeof _.props.onMouseEnter&&_.props.onMouseEnter(e),p(h,y,b,{priority:!0}))}),(e.passHref||"a"===_.type&&!("href"in _.props))&&(E.href=(0,l.addBasePath)(b)),s.default.cloneElement(_,E)};t.default=h},"9OMS":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,r=n("fVVT"),a=(o=r)&&o.__esModule?o:{default:o};t.default=a.default,e.exports=t.default},FIWN:function(e,t,n){"use strict";var o=function(){};e.exports=o},"K/xo":function(e,t,n){var o;!function(){"use strict";var r=!("undefined"===typeof window||!window.document||!window.document.createElement),a={canUseDOM:r,canUseWorkers:"undefined"!==typeof Worker,canUseEventListeners:r&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:r&&!!window.screen};void 0===(o=function(){return a}.call(t,n,t,e))||(e.exports=o)}()},NGR8:function(e,t,n){"use strict";function o(){var e=this.constructor.getDerivedStateFromProps(this.props,this.state);null!==e&&void 0!==e&&this.setState(e)}function r(e){this.setState(function(t){var n=this.constructor.getDerivedStateFromProps(e,t);return null!==n&&void 0!==n?n:null}.bind(this))}function a(e,t){try{var n=this.props,o=this.state;this.props=e,this.state=t,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(n,o)}finally{this.props=n,this.state=o}}function s(e){var t=e.prototype;if(!t||!t.isReactComponent)throw new Error("Can only polyfill class components");if("function"!==typeof e.getDerivedStateFromProps&&"function"!==typeof t.getSnapshotBeforeUpdate)return e;var n=null,s=null,l=null;if("function"===typeof t.componentWillMount?n="componentWillMount":"function"===typeof t.UNSAFE_componentWillMount&&(n="UNSAFE_componentWillMount"),"function"===typeof t.componentWillReceiveProps?s="componentWillReceiveProps":"function"===typeof t.UNSAFE_componentWillReceiveProps&&(s="UNSAFE_componentWillReceiveProps"),"function"===typeof t.componentWillUpdate?l="componentWillUpdate":"function"===typeof t.UNSAFE_componentWillUpdate&&(l="UNSAFE_componentWillUpdate"),null!==n||null!==s||null!==l){var i=e.displayName||e.name,u="function"===typeof e.getDerivedStateFromProps?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";throw Error("Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n"+i+" uses "+u+" but also contains the following legacy lifecycles:"+(null!==n?"\n  "+n:"")+(null!==s?"\n  "+s:"")+(null!==l?"\n  "+l:"")+"\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://fb.me/react-async-component-lifecycle-hooks")}if("function"===typeof e.getDerivedStateFromProps&&(t.componentWillMount=o,t.componentWillReceiveProps=r),"function"===typeof t.getSnapshotBeforeUpdate){if("function"!==typeof t.componentDidUpdate)throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");t.componentWillUpdate=a;var c=t.componentDidUpdate;t.componentDidUpdate=function(e,t,n){var o=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:n;c.call(this,e,t,o)}}return e}n.r(t),n.d(t,"polyfill",(function(){return s})),o.__suppressDeprecationWarning=!0,r.__suppressDeprecationWarning=!0,a.__suppressDeprecationWarning=!0},RNiq:function(e,t,n){"use strict";n.r(t),n.d(t,"backgroundColors",(function(){return g}));var o=n("mXGw"),r=n.n(o),a=n("4xQx"),s=n.n(a),l=n("bBV7"),i=n("9OMS"),u=n.n(i),c=n("tQ5z"),f=n("pU8/");function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function p(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],o=!0,r=!1,a=void 0;try{for(var s,l=e[Symbol.iterator]();!(o=(s=l.next()).done)&&(n.push(s.value),!t||n.length!==t);o=!0);}catch(i){r=!0,a=i}finally{try{o||null==l.return||l.return()}finally{if(r)throw a}}return n}}(e,t)||function(e,t){if(e){if("string"===typeof e)return d(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?d(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var h=n("sPhG"),m=n("eKn8"),v=r.a.createElement,y=function(){return v(h.a,null,Object.entries(g).map((function(e,t){var n=p(e,2),o=n[0],r=n[1];return v(m.a,{key:t,href:"/?state=".concat(o),style:{backgroundColor:r}},"Initial State: ",o)})))},b=n("oXiK"),O=r.a.createElement,g={1:"#9b55b7",2:"#e77e22",3:"#2c97dd"};u.a.setAppElement("#__next");t.default=function(){var e=Object(l.useRouter)(),t=e.query.state,n=Object(b.a)().returnHref;return O("div",{className:s.a.background,style:{backgroundColor:g[t]}},O("div",{className:s.a.content},O(u.a,{isOpen:!!e.query.postId,onRequestClose:function(){return e.push(n)},contentLabel:"Post modal",style:{overlay:{backgroundColor:"rgba(255, 255, 255, 0.3)"}}},O(c.a,{id:e.query.postId,pathname:e.pathname,pageState:t,showPostGrid:!0})),O("h2",null,"Set initial page state:"),O(y,null),O("h2",null,"...then start contextual navigation!"),O(f.a,null)))}},TqC3:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])},W7aI:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),s=n("mXGw"),l=v(s),i=v(n("W0B4")),u=m(n("p1yM")),c=v(n("3gDE")),f=m(n("0TdX")),d=m(n("pHF5")),p=v(n("s4Wf")),h=v(n("5X3g"));function m(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function v(e){return e&&e.__esModule?e:{default:e}}n("gcLO");var y={overlay:"ReactModal__Overlay",content:"ReactModal__Content"},b=0,O=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.setOverlayRef=function(e){n.overlay=e,n.props.overlayRef&&n.props.overlayRef(e)},n.setContentRef=function(e){n.content=e,n.props.contentRef&&n.props.contentRef(e)},n.afterClose=function(){var e=n.props,t=e.appElement,o=e.ariaHideApp,r=e.htmlOpenClassName,a=e.bodyOpenClassName;a&&d.remove(document.body,a),r&&d.remove(document.getElementsByTagName("html")[0],r),o&&b>0&&0===(b-=1)&&f.show(t),n.props.shouldFocusAfterRender&&(n.props.shouldReturnFocusAfterClose?(u.returnFocus(),u.teardownScopedFocus()):u.popWithoutFocus()),n.props.onAfterClose&&n.props.onAfterClose(),h.default.deregister(n)},n.open=function(){n.beforeOpen(),n.state.afterOpen&&n.state.beforeClose?(clearTimeout(n.closeTimer),n.setState({beforeClose:!1})):(n.props.shouldFocusAfterRender&&(u.setupScopedFocus(n.node),u.markForFocusLater()),n.setState({isOpen:!0},(function(){n.setState({afterOpen:!0}),n.props.isOpen&&n.props.onAfterOpen&&n.props.onAfterOpen({overlayEl:n.overlay,contentEl:n.content})})))},n.close=function(){n.props.closeTimeoutMS>0?n.closeWithTimeout():n.closeWithoutTimeout()},n.focusContent=function(){return n.content&&!n.contentHasFocus()&&n.content.focus()},n.closeWithTimeout=function(){var e=Date.now()+n.props.closeTimeoutMS;n.setState({beforeClose:!0,closesAt:e},(function(){n.closeTimer=setTimeout(n.closeWithoutTimeout,n.state.closesAt-Date.now())}))},n.closeWithoutTimeout=function(){n.setState({beforeClose:!1,isOpen:!1,afterOpen:!1,closesAt:null},n.afterClose)},n.handleKeyDown=function(e){9===e.keyCode&&(0,c.default)(n.content,e),n.props.shouldCloseOnEsc&&27===e.keyCode&&(e.stopPropagation(),n.requestClose(e))},n.handleOverlayOnClick=function(e){null===n.shouldClose&&(n.shouldClose=!0),n.shouldClose&&n.props.shouldCloseOnOverlayClick&&(n.ownerHandlesClose()?n.requestClose(e):n.focusContent()),n.shouldClose=null},n.handleContentOnMouseUp=function(){n.shouldClose=!1},n.handleOverlayOnMouseDown=function(e){n.props.shouldCloseOnOverlayClick||e.target!=n.overlay||e.preventDefault()},n.handleContentOnClick=function(){n.shouldClose=!1},n.handleContentOnMouseDown=function(){n.shouldClose=!1},n.requestClose=function(e){return n.ownerHandlesClose()&&n.props.onRequestClose(e)},n.ownerHandlesClose=function(){return n.props.onRequestClose},n.shouldBeClosed=function(){return!n.state.isOpen&&!n.state.beforeClose},n.contentHasFocus=function(){return document.activeElement===n.content||n.content.contains(document.activeElement)},n.buildClassName=function(e,t){var o="object"===("undefined"===typeof t?"undefined":r(t))?t:{base:y[e],afterOpen:y[e]+"--after-open",beforeClose:y[e]+"--before-close"},a=o.base;return n.state.afterOpen&&(a=a+" "+o.afterOpen),n.state.beforeClose&&(a=a+" "+o.beforeClose),"string"===typeof t&&t?a+" "+t:a},n.attributesFromObject=function(e,t){return Object.keys(t).reduce((function(n,o){return n[e+"-"+o]=t[o],n}),{})},n.state={afterOpen:!1,beforeClose:!1},n.shouldClose=null,n.moveFromContentToOverlay=null,n}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,[{key:"componentDidMount",value:function(){this.props.isOpen&&this.open()}},{key:"componentDidUpdate",value:function(e,t){this.props.isOpen&&!e.isOpen?this.open():!this.props.isOpen&&e.isOpen&&this.close(),this.props.shouldFocusAfterRender&&this.state.isOpen&&!t.isOpen&&this.focusContent()}},{key:"componentWillUnmount",value:function(){this.state.isOpen&&this.afterClose(),clearTimeout(this.closeTimer)}},{key:"beforeOpen",value:function(){var e=this.props,t=e.appElement,n=e.ariaHideApp,o=e.htmlOpenClassName,r=e.bodyOpenClassName;r&&d.add(document.body,r),o&&d.add(document.getElementsByTagName("html")[0],o),n&&(b+=1,f.hide(t)),h.default.register(this)}},{key:"render",value:function(){var e=this.props,t=e.id,n=e.className,r=e.overlayClassName,a=e.defaultStyles,s=n?{}:a.content,i=r?{}:a.overlay;return this.shouldBeClosed()?null:l.default.createElement("div",{ref:this.setOverlayRef,className:this.buildClassName("overlay",r),style:o({},i,this.props.style.overlay),onClick:this.handleOverlayOnClick,onMouseDown:this.handleOverlayOnMouseDown},l.default.createElement("div",o({id:t,ref:this.setContentRef,style:o({},s,this.props.style.content),className:this.buildClassName("content",n),tabIndex:"-1",onKeyDown:this.handleKeyDown,onMouseDown:this.handleContentOnMouseDown,onMouseUp:this.handleContentOnMouseUp,onClick:this.handleContentOnClick,role:this.props.role,"aria-label":this.props.contentLabel},this.attributesFromObject("aria",this.props.aria||{}),this.attributesFromObject("data",this.props.data||{}),{"data-testid":this.props.testId}),this.props.children))}}]),t}(s.Component);O.defaultProps={style:{overlay:{},content:{}},defaultStyles:{}},O.propTypes={isOpen:i.default.bool.isRequired,defaultStyles:i.default.shape({content:i.default.object,overlay:i.default.object}),style:i.default.shape({content:i.default.object,overlay:i.default.object}),className:i.default.oneOfType([i.default.string,i.default.object]),overlayClassName:i.default.oneOfType([i.default.string,i.default.object]),bodyOpenClassName:i.default.string,htmlOpenClassName:i.default.string,ariaHideApp:i.default.bool,appElement:i.default.instanceOf(p.default),onAfterOpen:i.default.func,onAfterClose:i.default.func,onRequestClose:i.default.func,closeTimeoutMS:i.default.number,shouldFocusAfterRender:i.default.bool,shouldCloseOnOverlayClick:i.default.bool,shouldReturnFocusAfterClose:i.default.bool,role:i.default.string,contentLabel:i.default.string,aria:i.default.object,data:i.default.object,children:i.default.node,shouldCloseOnEsc:i.default.bool,overlayRef:i.default.func,contentRef:i.default.func,id:i.default.string,testId:i.default.string},t.default=O,e.exports=t.default},XrU5:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return[].slice.call(e.querySelectorAll("*"),0).filter(s)};var o=/input|select|textarea|button|object/;function r(e){var t=e.offsetWidth<=0&&e.offsetHeight<=0;if(t&&!e.innerHTML)return!0;var n=window.getComputedStyle(e);return t?"visible"!==n.getPropertyValue("overflow")||e.scrollWidth<=0&&e.scrollHeight<=0:"none"==n.getPropertyValue("display")}function a(e,t){var n=e.nodeName.toLowerCase();return(o.test(n)&&!e.disabled||"a"===n&&e.href||t)&&function(e){for(var t=e;t&&t!==document.body;){if(r(t))return!1;t=t.parentNode}return!0}(e)}function s(e){var t=e.getAttribute("tabindex");null===t&&(t=void 0);var n=isNaN(t);return(n||t>=0)&&a(e,!n)}e.exports=t.default},Zn9i:function(e,t,n){e.exports={wrapper:"Grid_wrapper__1UyI_",grid:"Grid_grid__2B4Nx",grid__small:"Grid_grid__small__1Ofez"}},eKn8:function(e,t,n){"use strict";function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function r(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}n.d(t,"a",(function(){return d}));var a=n("mXGw"),s=n.n(a),l=n("5dyF"),i=n.n(l),u=n("7cEM"),c=n.n(u),f=s.a.createElement;function d(e){e.small;var t=e.href,n=e.as,a=e.scroll,s=e.shallow,l=r(e,["small","href","as","scroll","shallow"]);return console.log(l),f(i.a,{href:t,as:n,scroll:a,shallow:s},f("a",o({className:c.a.postCard},l)))}},fVVT:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.bodyOpenClassName=t.portalClassName=void 0;var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a=n("mXGw"),s=h(a),l=h(n("xARA")),i=h(n("W0B4")),u=h(n("W7aI")),c=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n("0TdX")),f=n("s4Wf"),d=h(f),p=n("NGR8");function h(e){return e&&e.__esModule?e:{default:e}}function m(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function v(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var y=t.portalClassName="ReactModalPortal",b=t.bodyOpenClassName="ReactModal__Body--open",O=void 0!==l.default.createPortal,g=function(){return O?l.default.createPortal:l.default.unstable_renderSubtreeIntoContainer};function C(e){return e()}var w=function(e){function t(){var e,n,r;m(this,t);for(var a=arguments.length,i=Array(a),c=0;c<a;c++)i[c]=arguments[c];return n=r=v(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),r.removePortal=function(){!O&&l.default.unmountComponentAtNode(r.node);var e=C(r.props.parentSelector);e?e.removeChild(r.node):console.warn('React-Modal: "parentSelector" prop did not returned any DOM element. Make sure that the parent element is unmounted to avoid any memory leaks.')},r.portalRef=function(e){r.portal=e},r.renderPortal=function(e){var n=g()(r,s.default.createElement(u.default,o({defaultStyles:t.defaultStyles},e)),r.node);r.portalRef(n)},v(r,n)}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidMount",value:function(){f.canUseDOM&&(O||(this.node=document.createElement("div")),this.node.className=this.props.portalClassName,C(this.props.parentSelector).appendChild(this.node),!O&&this.renderPortal(this.props))}},{key:"getSnapshotBeforeUpdate",value:function(e){return{prevParent:C(e.parentSelector),nextParent:C(this.props.parentSelector)}}},{key:"componentDidUpdate",value:function(e,t,n){if(f.canUseDOM){var o=this.props,r=o.isOpen,a=o.portalClassName;e.portalClassName!==a&&(this.node.className=a);var s=n.prevParent,l=n.nextParent;l!==s&&(s.removeChild(this.node),l.appendChild(this.node)),(e.isOpen||r)&&!O&&this.renderPortal(this.props)}}},{key:"componentWillUnmount",value:function(){if(f.canUseDOM&&this.node&&this.portal){var e=this.portal.state,t=Date.now(),n=e.isOpen&&this.props.closeTimeoutMS&&(e.closesAt||t+this.props.closeTimeoutMS);n?(e.beforeClose||this.portal.closeWithTimeout(),setTimeout(this.removePortal,n-t)):this.removePortal()}}},{key:"render",value:function(){return f.canUseDOM&&O?(!this.node&&O&&(this.node=document.createElement("div")),g()(s.default.createElement(u.default,o({ref:this.portalRef,defaultStyles:t.defaultStyles},this.props)),this.node)):null}}],[{key:"setAppElement",value:function(e){c.setElement(e)}}]),t}(a.Component);w.propTypes={isOpen:i.default.bool.isRequired,style:i.default.shape({content:i.default.object,overlay:i.default.object}),portalClassName:i.default.string,bodyOpenClassName:i.default.string,htmlOpenClassName:i.default.string,className:i.default.oneOfType([i.default.string,i.default.shape({base:i.default.string.isRequired,afterOpen:i.default.string.isRequired,beforeClose:i.default.string.isRequired})]),overlayClassName:i.default.oneOfType([i.default.string,i.default.shape({base:i.default.string.isRequired,afterOpen:i.default.string.isRequired,beforeClose:i.default.string.isRequired})]),appElement:i.default.instanceOf(d.default),onAfterOpen:i.default.func,onRequestClose:i.default.func,closeTimeoutMS:i.default.number,ariaHideApp:i.default.bool,shouldFocusAfterRender:i.default.bool,shouldCloseOnOverlayClick:i.default.bool,shouldReturnFocusAfterClose:i.default.bool,parentSelector:i.default.func,aria:i.default.object,data:i.default.object,role:i.default.string,contentLabel:i.default.string,shouldCloseOnEsc:i.default.bool,overlayRef:i.default.func,contentRef:i.default.func},w.defaultProps={isOpen:!1,portalClassName:y,bodyOpenClassName:b,role:"dialog",ariaHideApp:!0,closeTimeoutMS:0,shouldFocusAfterRender:!0,shouldCloseOnEsc:!0,shouldCloseOnOverlayClick:!0,shouldReturnFocusAfterClose:!0,parentSelector:function(){return document.body}},w.defaultStyles={overlay:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(255, 255, 255, 0.75)"},content:{position:"absolute",top:"40px",left:"40px",right:"40px",bottom:"40px",border:"1px solid #ccc",background:"#fff",overflow:"auto",WebkitOverflowScrolling:"touch",borderRadius:"4px",outline:"none",padding:"20px"}},(0,p.polyfill)(w),t.default=w},gcLO:function(e,t,n){"use strict";var o,r=n("5X3g"),a=(o=r)&&o.__esModule?o:{default:o};var s=void 0,l=void 0,i=[];function u(){0!==i.length&&i[i.length-1].focusContent()}a.default.subscribe((function(e,t){s&&l||((s=document.createElement("div")).setAttribute("data-react-modal-body-trap",""),s.style.position="absolute",s.style.opacity="0",s.setAttribute("tabindex","0"),s.addEventListener("focus",u),(l=s.cloneNode()).addEventListener("focus",u)),(i=t).length>0?(document.body.firstChild!==s&&document.body.insertBefore(s,document.body.firstChild),document.body.lastChild!==l&&document.body.appendChild(l)):(s.parentElement&&s.parentElement.removeChild(s),l.parentElement&&l.parentElement.removeChild(l))}))},oXiK:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var o=n("mXGw"),r=n("bBV7"),a=n("3tiF"),s=n.n(a);function l(){var e=Object(r.useRouter)(),t=e.query._UCR_return_href,n=Object.assign({},e.query);delete n._UCR_return_href;var a=null!==t&&void 0!==t?t:e.asPath,l=JSON.stringify(n),i=Object(o.useCallback)((function(t){return e.pathname+"?"+s()(Object.assign({},e.query,t,(r=a,(o="_UCR_return_href")in(n={})?Object.defineProperty(n,o,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[o]=r,n)));var n,o,r}),[l,a]);return{returnHref:a,makeContextualHref:i}}},p1yM:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.handleBlur=u,t.handleFocus=c,t.markForFocusLater=function(){s.push(document.activeElement)},t.returnFocus=function(){var e=null;try{return void(0!==s.length&&(e=s.pop()).focus())}catch(t){console.warn(["You tried to return focus to",e,"but it is not in the DOM anymore"].join(" "))}},t.popWithoutFocus=function(){s.length>0&&s.pop()},t.setupScopedFocus=function(e){l=e,window.addEventListener?(window.addEventListener("blur",u,!1),document.addEventListener("focus",c,!0)):(window.attachEvent("onBlur",u),document.attachEvent("onFocus",c))},t.teardownScopedFocus=function(){l=null,window.addEventListener?(window.removeEventListener("blur",u),document.removeEventListener("focus",c)):(window.detachEvent("onBlur",u),document.detachEvent("onFocus",c))};var o,r=n("XrU5"),a=(o=r)&&o.__esModule?o:{default:o};var s=[],l=null,i=!1;function u(){i=!0}function c(){if(i){if(i=!1,!l)return;setTimeout((function(){l.contains(document.activeElement)||((0,a.default)(l)[0]||l).focus()}),0)}}},pHF5:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.dumpClassLists=function(){0};var o={},r={};t.add=function(e,t){return n=e.classList,a="html"==e.nodeName.toLowerCase()?o:r,void t.split(" ").forEach((function(e){!function(e,t){e[t]||(e[t]=0),e[t]+=1}(a,e),n.add(e)}));var n,a},t.remove=function(e,t){return n=e.classList,a="html"==e.nodeName.toLowerCase()?o:r,void t.split(" ").forEach((function(e){!function(e,t){e[t]&&(e[t]-=1)}(a,e),0===a[e]&&n.remove(e)}));var n,a}},"pU8/":function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var o=n("mXGw"),r=n.n(o),a=n("sPhG"),s=n("eKn8"),l=n("oXiK"),i=r.a.createElement,u=[1,2,3,4,5,6,7,8,9];function c(e){var t=e.small,n=Object(l.a)().makeContextualHref;return i(a.a,{small:t},u.map((function(e,t){return i(s.a,{key:t,href:n({postId:e}),as:"/post/".concat(e)},e)})))}},s4Wf:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.canUseDOM=void 0;var o,r=n("K/xo");var a=((o=r)&&o.__esModule?o:{default:o}).default,s=a.canUseDOM?window.HTMLElement:{};t.canUseDOM=a.canUseDOM;t.default=s},sPhG:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var o=n("mXGw"),r=n.n(o),a=n("Zn9i"),s=n.n(a),l=r.a.createElement;function i(e){var t=e.small,n=e.children;return l("div",{className:s.a.wrapper},l("div",{className:[s.a.grid,t?s.a.grid__small:null].join(" ")},n))}},tQ5z:function(e,t,n){"use strict";var o=n("mXGw"),r=n.n(o),a=n("50Xg"),s=n.n(a),l=n("pU8/"),i=r.a.createElement;t.a=function(e){var t=e.id,n=e.pathname,o=e.pageState,a=e.showPostGrid;return i("div",{className:s.a.post},i("h2",null,"I am the post ",t),i("h3",null,"my pathname is: ",n),o&&i("h3",null,"Initial page state is preserved and is: ",o),a&&i(r.a.Fragment,null,i("p",null,"Go to another post staying in contextual navigation:"),i(l.a,{small:!0})))}}},[["TqC3",0,2,1]]]);