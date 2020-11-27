(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{224:function(module,exports,__webpack_require__){"use strict";__webpack_require__(11),__webpack_require__(18),__webpack_require__(22),__webpack_require__(14),__webpack_require__(57),__webpack_require__(32),__webpack_require__(24),__webpack_require__(74),__webpack_require__(64),__webpack_require__(45),__webpack_require__(26),__webpack_require__(61),__webpack_require__(99),__webpack_require__(55),__webpack_require__(65),__webpack_require__(10),__webpack_require__(66),__webpack_require__(25),__webpack_require__(15),__webpack_require__(117),__webpack_require__(19),Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0,__webpack_require__(11),__webpack_require__(18),__webpack_require__(22),__webpack_require__(14),__webpack_require__(57),__webpack_require__(32),__webpack_require__(24),__webpack_require__(74),__webpack_require__(64),__webpack_require__(45),__webpack_require__(26),__webpack_require__(61),__webpack_require__(55),__webpack_require__(65),__webpack_require__(10),__webpack_require__(66),__webpack_require__(25),__webpack_require__(15),__webpack_require__(19);var _jsxRuntime=__webpack_require__(75),_react=function _interopRequireWildcard(obj){if(obj&&obj.__esModule)return obj;if(null===obj||"object"!==_typeof(obj)&&"function"!=typeof obj)return{default:obj};var cache=_getRequireWildcardCache();if(cache&&cache.has(obj))return cache.get(obj);var newObj={},hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj)if(Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;desc&&(desc.get||desc.set)?Object.defineProperty(newObj,key,desc):newObj[key]=obj[key]}newObj.default=obj,cache&&cache.set(obj,newObj);return newObj}(__webpack_require__(2)),_styledComponents=_interopRequireDefault(__webpack_require__(154)),_delimitedTextInputServiceFactory=_interopRequireDefault(__webpack_require__(780));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function _getRequireWildcardCache(){if("function"!=typeof WeakMap)return null;var cache=new WeakMap;return _getRequireWildcardCache=function _getRequireWildcardCache(){return cache},cache}function _typeof(obj){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(obj){return typeof obj}:function _typeof(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj})(obj)}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}function _setPrototypeOf(o,p){return(_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){return o.__proto__=p,o})(o,p)}function _createSuper(Derived){var hasNativeReflectConstruct=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var result,Super=_getPrototypeOf(Derived);if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else result=Super.apply(this,arguments);return _possibleConstructorReturn(this,result)}}function _possibleConstructorReturn(self,call){return!call||"object"!==_typeof(call)&&"function"!=typeof call?function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}(self):call}function _getPrototypeOf(o){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)})(o)}function _templateObject2(){var data=_taggedTemplateLiteral(["\n  border: none;\n  min-width: 20px;\n  outline: none;\n  margin: 0;\n  padding: 0;\n  text-align: center;\n"]);return _templateObject2=function _templateObject2(){return data},data}function _templateObject(){var data=_taggedTemplateLiteral(["\n  border: solid 1px grey;\n  display: inline-block;\n"]);return _templateObject=function _templateObject(){return data},data}function _taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}var Container=_styledComponents.default.div(_templateObject()),Input=_styledComponents.default.input(_templateObject2()),DelimitedTextInput=function(_Component){!function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),superClass&&_setPrototypeOf(subClass,superClass)}(DelimitedTextInput,_Component);var _super=_createSuper(DelimitedTextInput);function DelimitedTextInput(props){var _this;if(function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,DelimitedTextInput),_this=_super.call(this,props),"function"!=typeof props.onUpdate)throw new Error("DelimitedTextInput requires onUpdate(service, delta) function");return _this.service=(0,_delimitedTextInputServiceFactory.default)("-",(function(service){_this.setState({items:service.getItems(),delimiter:service.getDelimiter()})})),_this.state={items:[],delimiter:"-"},_this}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Constructor}(DelimitedTextInput,[{key:"componentDidMount",value:function componentDidMount(){this.props.onUpdate(this.service,"initialise")}},{key:"handleChange",value:function handleChange(value,idx){this.service.setItem(value,idx),this.props.onUpdate(this.service,"change")}},{key:"renderItem",value:function renderItem(item,idx){var _this2=this;return(0,_jsxRuntime.jsxs)(_jsxRuntime.Fragment,{children:[0===idx?"":this.renderDelimiter(),(0,_jsxRuntime.jsx)(Input,{className:"delimitedTextInput__input",value:item.value,style:{width:"".concat(item.width,"px")},onChange:function onChange(e){return _this2.handleChange(e.target.value,idx)}})]})}},{key:"renderDelimiter",value:function renderDelimiter(){return(0,_jsxRuntime.jsx)("span",{className:"delimitedTextInput__delimiter",children:this.state.delimiter})}},{key:"render",value:function render(){return(0,_jsxRuntime.jsx)(Container,{className:"delimitedTextInput__container",children:this.state.items.map(this.renderItem.bind(this))})}}]),DelimitedTextInput}(_react.Component);exports.default=DelimitedTextInput,DelimitedTextInput.__docgenInfo={description:"",methods:[{name:"handleChange",docblock:null,modifiers:[],params:[{name:"value",type:null},{name:"idx",type:null}],returns:null},{name:"renderItem",docblock:null,modifiers:[],params:[{name:"item",type:null},{name:"idx",type:null}],returns:null},{name:"renderDelimiter",docblock:null,modifiers:[],params:[],returns:null}],displayName:"DelimitedTextInput"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src\\delimitedTextInput\\DelimitedTextInput.jsx"]={name:"DelimitedTextInput",docgenInfo:DelimitedTextInput.__docgenInfo,path:"src\\delimitedTextInput\\DelimitedTextInput.jsx"})},354:function(module,exports,__webpack_require__){__webpack_require__(355),__webpack_require__(576),__webpack_require__(577),module.exports=__webpack_require__(761)},423:function(module,exports){},577:function(module,exports,__webpack_require__){"use strict";__webpack_require__(92)},761:function(module,exports,__webpack_require__){"use strict";__webpack_require__(11),__webpack_require__(84),__webpack_require__(28),__webpack_require__(45),__webpack_require__(26),__webpack_require__(99),__webpack_require__(347),__webpack_require__(40),__webpack_require__(29),__webpack_require__(11),__webpack_require__(84),__webpack_require__(28),__webpack_require__(45),__webpack_require__(26),__webpack_require__(99),__webpack_require__(347),__webpack_require__(40),__webpack_require__(29);var _clientApi=__webpack_require__(109),_clientLogger=__webpack_require__(73),_configFilename=__webpack_require__(762);function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}(_configFilename.args||_configFilename.argTypes)&&_clientLogger.logger.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify({args:_configFilename.args,argTypes:_configFilename.argTypes})),_configFilename.decorators&&_configFilename.decorators.forEach((function(decorator){return(0,_clientApi.addDecorator)(decorator,!1)})),_configFilename.loaders&&_configFilename.loaders.forEach((function(loader){return(0,_clientApi.addLoader)(loader,!1)})),(_configFilename.parameters||_configFilename.globals||_configFilename.globalTypes)&&(0,_clientApi.addParameters)(_objectSpread(_objectSpread({},_configFilename.parameters),{},{globals:_configFilename.globals,globalTypes:_configFilename.globalTypes}),!1),_configFilename.argTypesEnhancers&&_configFilename.argTypesEnhancers.forEach((function(enhancer){return(0,_clientApi.addArgTypesEnhancer)(enhancer)}))},762:function(module,exports,__webpack_require__){"use strict";(function(module){__webpack_require__(28),__webpack_require__(14),__webpack_require__(10),__webpack_require__(29),__webpack_require__(19),__webpack_require__(28),__webpack_require__(14),__webpack_require__(10),__webpack_require__(29),__webpack_require__(19);var _react=__webpack_require__(92),req=__webpack_require__(763);(0,_react.configure)((function loadStories(){req.keys().forEach((function(filename){return req(filename)}))}),module)}).call(this,__webpack_require__(59)(module))},763:function(module,exports,__webpack_require__){var map={"./creditCardNumberInput.stories.js":764,"./dateTextInput.stories.js":781,"./delimitedTextInput.stories.js":783,"./test.stories.js":784};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=763},764:function(module,exports,__webpack_require__){"use strict";(function(module){var _jsxRuntime=__webpack_require__(75),_react2=(_interopRequireDefault(__webpack_require__(2)),__webpack_require__(92)),_addonActions=__webpack_require__(153),_CreditCardNumberInput=_interopRequireDefault(__webpack_require__(776));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}(0,_react2.storiesOf)("CreditCardNumberInput",module).add("empty",(function(){return(0,_jsxRuntime.jsx)(_CreditCardNumberInput.default,{onUpdate:(0,_addonActions.action)("CC number updated")})})).add("preset",(function(){return(0,_jsxRuntime.jsx)(_CreditCardNumberInput.default,{onUpdate:(0,_addonActions.action)("CC number updated"),value:"0123456789101112"})}))}).call(this,__webpack_require__(59)(module))},776:function(module,exports,__webpack_require__){"use strict";__webpack_require__(11),__webpack_require__(18),__webpack_require__(22),__webpack_require__(35),__webpack_require__(14),__webpack_require__(218),__webpack_require__(57),__webpack_require__(118),__webpack_require__(24),__webpack_require__(74),__webpack_require__(64),__webpack_require__(26),__webpack_require__(99),__webpack_require__(55),__webpack_require__(65),__webpack_require__(10),__webpack_require__(66),__webpack_require__(56),__webpack_require__(25),__webpack_require__(15),__webpack_require__(213),__webpack_require__(117),__webpack_require__(19),Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0,__webpack_require__(11),__webpack_require__(18),__webpack_require__(22),__webpack_require__(35),__webpack_require__(14),__webpack_require__(218),__webpack_require__(57),__webpack_require__(118),__webpack_require__(24),__webpack_require__(74),__webpack_require__(64),__webpack_require__(26),__webpack_require__(55),__webpack_require__(65),__webpack_require__(10),__webpack_require__(66),__webpack_require__(56),__webpack_require__(25),__webpack_require__(15),__webpack_require__(213),__webpack_require__(19);var _jsxRuntime=__webpack_require__(75),_react=function _interopRequireWildcard(obj){if(obj&&obj.__esModule)return obj;if(null===obj||"object"!==_typeof(obj)&&"function"!=typeof obj)return{default:obj};var cache=_getRequireWildcardCache();if(cache&&cache.has(obj))return cache.get(obj);var newObj={},hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj)if(Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;desc&&(desc.get||desc.set)?Object.defineProperty(newObj,key,desc):newObj[key]=obj[key]}newObj.default=obj,cache&&cache.set(obj,newObj);return newObj}(__webpack_require__(2)),_DelimitedTextInput=(_interopRequireDefault(__webpack_require__(154)),__webpack_require__(222),__webpack_require__(223),_interopRequireDefault(__webpack_require__(224)));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function _getRequireWildcardCache(){if("function"!=typeof WeakMap)return null;var cache=new WeakMap;return _getRequireWildcardCache=function _getRequireWildcardCache(){return cache},cache}function _typeof(obj){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(obj){return typeof obj}:function _typeof(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj})(obj)}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}function _setPrototypeOf(o,p){return(_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){return o.__proto__=p,o})(o,p)}function _createSuper(Derived){var hasNativeReflectConstruct=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var result,Super=_getPrototypeOf(Derived);if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else result=Super.apply(this,arguments);return _possibleConstructorReturn(this,result)}}function _possibleConstructorReturn(self,call){return!call||"object"!==_typeof(call)&&"function"!=typeof call?function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}(self):call}function _getPrototypeOf(o){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)})(o)}var DateTextInput=function(_Component){!function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),superClass&&_setPrototypeOf(subClass,superClass)}(DateTextInput,_Component);var _super=_createSuper(DateTextInput);function DateTextInput(props){var _this;if(function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,DateTextInput),_this=_super.call(this,props),"function"!=typeof props.onUpdate)throw new Error("DateTextInput requires onUpdate(date) function");if(props.value&&"string"!=typeof props.value)throw new Error('Invalid "date" parameter. Must be a Date object.');return _this.state={value:props.value},_this}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Constructor}(DateTextInput,[{key:"handleUpdate",value:function handleUpdate(service,delta){if("initialise"===delta)!function initialise(service,creditCardNumberString){service.setDelimitations(4).setDelimiter("-").setItemWidth(32),creditCardNumberString&&creditCardNumberString.split("").reduce((function(quadrant,digit,idx){if(quadrant.push(digit),(idx+1)%4==0){var quadrantIDX=Math.floor(idx/4);service.setItem(quadrant.join(""),quadrantIDX),quadrant=[]}return quadrant}),[])}(service,this.props.value);else{var value=function getCreditcardNumberStringFromService(service){return Array.from({length:service.getItems().length}).map((function(junk,idx){return service.getItems()[idx].value})).join("")}(service);this.props.onUpdate(value),this.setState({value:value})}}},{key:"render",value:function render(){return(0,_jsxRuntime.jsx)(_DelimitedTextInput.default,{onUpdate:this.handleUpdate.bind(this)})}}]),DateTextInput}(_react.Component);exports.default=DateTextInput,DateTextInput.__docgenInfo={description:"",methods:[{name:"handleUpdate",docblock:null,modifiers:[],params:[{name:"service",type:null},{name:"delta",type:null}],returns:null}],displayName:"DateTextInput"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src\\creditCardNumberInput\\CreditCardNumberInput.jsx"]={name:"DateTextInput",docgenInfo:DateTextInput.__docgenInfo,path:"src\\creditCardNumberInput\\CreditCardNumberInput.jsx"})},780:function(module,exports,__webpack_require__){"use strict";function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}__webpack_require__(28),__webpack_require__(35),__webpack_require__(26),__webpack_require__(15),__webpack_require__(29),Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0,__webpack_require__(28),__webpack_require__(35),__webpack_require__(26),__webpack_require__(15),__webpack_require__(29);var Service=function(){function Service(delimiter,setState){!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,Service),this._setState=setState,this.setDelimiter(delimiter),this._items=[]}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Constructor}(Service,[{key:"getDelimiter",value:function getDelimiter(){return this._delimiter}},{key:"getItems",value:function getItems(){return this._items}},{key:"setDelimiter",value:function setDelimiter(delimiter){return this._delimiter=delimiter,this._setState(this),this}},{key:"setDelimitations",value:function setDelimitations(delimitations){var _this=this;return Array.from({length:delimitations}).forEach((function(junk,idx){return _this._items.push({width:24,idx:idx})})),this._setState(this),this}},{key:"setItemWidth",value:function setItemWidth(width,idx){return void 0===idx?this._items.forEach((function(item){return item.width=width})):idx<this._items.length?this._items[idx].width=width:(this.setDelimitations(idx+1),this.setItemWidth(width,idx)),this._setState(this),this}},{key:"setItem",value:function setItem(value,idx){return void 0===idx?this._items.push({width:24,idx:this._items.length+1,value:value}):idx<this._items.length?this._items[idx].value=value:(this.setDelimitations(idx+1),this.setItem(value,idx)),this._setState(this),this}}]),Service}(),_default=function instantiate(delimiter,setState){return new Service(delimiter,setState)};exports.default=_default},781:function(module,exports,__webpack_require__){"use strict";(function(module){var _jsxRuntime=__webpack_require__(75),_react2=(_interopRequireDefault(__webpack_require__(2)),__webpack_require__(92)),_addonActions=__webpack_require__(153),_DateTextInput=_interopRequireDefault(__webpack_require__(782));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}(0,_react2.storiesOf)("DateTextInput",module).add("Default format",(function(){return(0,_jsxRuntime.jsx)(_DateTextInput.default,{onUpdate:(0,_addonActions.action)("Date updated")})})).add("DMY format",(function(){return(0,_jsxRuntime.jsx)(_DateTextInput.default,{format:"DMY",onUpdate:(0,_addonActions.action)("Date updated")})})).add("MDY format",(function(){return(0,_jsxRuntime.jsx)(_DateTextInput.default,{format:"MDY",onUpdate:(0,_addonActions.action)("Date updated")})})).add("ISO format",(function(){return(0,_jsxRuntime.jsx)(_DateTextInput.default,{format:"ISO",onUpdate:(0,_addonActions.action)("Date updated")})}))}).call(this,__webpack_require__(59)(module))},782:function(module,exports,__webpack_require__){"use strict";__webpack_require__(11),__webpack_require__(18),__webpack_require__(22),__webpack_require__(72),__webpack_require__(14),__webpack_require__(24),__webpack_require__(74),__webpack_require__(64),__webpack_require__(26),__webpack_require__(99),__webpack_require__(55),__webpack_require__(65),__webpack_require__(10),__webpack_require__(66),__webpack_require__(25),__webpack_require__(15),__webpack_require__(117),__webpack_require__(19),Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0,__webpack_require__(11),__webpack_require__(18),__webpack_require__(22),__webpack_require__(72),__webpack_require__(14),__webpack_require__(24),__webpack_require__(74),__webpack_require__(64),__webpack_require__(26),__webpack_require__(55),__webpack_require__(65),__webpack_require__(10),__webpack_require__(66),__webpack_require__(25),__webpack_require__(15),__webpack_require__(19);var _jsxRuntime=__webpack_require__(75),_react=function _interopRequireWildcard(obj){if(obj&&obj.__esModule)return obj;if(null===obj||"object"!==_typeof(obj)&&"function"!=typeof obj)return{default:obj};var cache=_getRequireWildcardCache();if(cache&&cache.has(obj))return cache.get(obj);var newObj={},hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj)if(Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;desc&&(desc.get||desc.set)?Object.defineProperty(newObj,key,desc):newObj[key]=obj[key]}newObj.default=obj,cache&&cache.set(obj,newObj);return newObj}(__webpack_require__(2)),_DelimitedTextInput=(_interopRequireDefault(__webpack_require__(154)),__webpack_require__(222),__webpack_require__(223),_interopRequireDefault(__webpack_require__(224)));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function _getRequireWildcardCache(){if("function"!=typeof WeakMap)return null;var cache=new WeakMap;return _getRequireWildcardCache=function _getRequireWildcardCache(){return cache},cache}function _typeof(obj){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(obj){return typeof obj}:function _typeof(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj})(obj)}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}function _setPrototypeOf(o,p){return(_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){return o.__proto__=p,o})(o,p)}function _createSuper(Derived){var hasNativeReflectConstruct=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var result,Super=_getPrototypeOf(Derived);if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else result=Super.apply(this,arguments);return _possibleConstructorReturn(this,result)}}function _possibleConstructorReturn(self,call){return!call||"object"!==_typeof(call)&&"function"!=typeof call?function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}(self):call}function _getPrototypeOf(o){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)})(o)}function getFormatIDX(format){var idx={month:1,year:2};switch(format){case"DMY":idx.day=0;break;case"MDY":idx.day=1,idx.month=0;break;case"ISO":idx.year=0,idx.day=2}return idx}function getDateFromService(service,format){var idx=getFormatIDX(format),items=service.getItems();return function getDate(day,month,year){var date=new Date(year,month-1,day);return date.getDate()===day&&date.getMonth()===month-1&&date.getFullYear()===1*year?date:void 0}(items[idx.day].value,items[idx.month].value,items[idx.year].value)}var DateTextInput=function(_Component){!function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),superClass&&_setPrototypeOf(subClass,superClass)}(DateTextInput,_Component);var _super=_createSuper(DateTextInput);function DateTextInput(props){var _this;if(function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,DateTextInput),(_this=_super.call(this,props)).format="DMY","function"!=typeof props.onUpdate)throw new Error("DateTextInput requires onUpdate(date) function");if(props.format){if("string"!=typeof props.format&&-1===["DMY","MDY","ISO"].indexOf(props.format))throw new Error('Invalid format. Must be one of "DMY", "MDY" and "ISO".');_this.format=props.format}if(props.date&&("object"===_typeof(props.date)||"object"===_typeof(props.date)&&props.date.constructor!==Date))throw new Error('Invalid "date" parameter. Must be a Date object.');return _this.state={date:props.date},_this}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Constructor}(DateTextInput,[{key:"handleUpdate",value:function handleUpdate(service,delta){if("initialise"===delta)!function initialise(service,format,date){var idx=getFormatIDX(format);service.setDelimitations(3).setDelimiter("/").setItemWidth(16).setItemWidth(32,idx.year),date&&service.setItem(date.getDate(),idx.day).setItem(date.getMonth()+1,idx.month).setItem(date.getFullYear(),idx.year)}(service,this.format,this.props.date);else{var date=getDateFromService(service,this.format);this.props.onUpdate(date),this.setState({date:date})}}},{key:"render",value:function render(){return(0,_jsxRuntime.jsx)(_DelimitedTextInput.default,{onUpdate:this.handleUpdate.bind(this)})}}]),DateTextInput}(_react.Component);exports.default=DateTextInput,DateTextInput.__docgenInfo={description:"",methods:[{name:"handleUpdate",docblock:null,modifiers:[],params:[{name:"service",type:null},{name:"delta",type:null}],returns:null}],displayName:"DateTextInput"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src\\dateTextInput\\DateTextInput.jsx"]={name:"DateTextInput",docgenInfo:DateTextInput.__docgenInfo,path:"src\\dateTextInput\\DateTextInput.jsx"})},783:function(module,exports,__webpack_require__){"use strict";(function(module){var _jsxRuntime=__webpack_require__(75),_react2=(_interopRequireDefault(__webpack_require__(2)),__webpack_require__(92)),_DelimitedTextInput=(__webpack_require__(153),_interopRequireDefault(__webpack_require__(224)));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function onUpdate(service,delta){"initialise"===delta&&service.setDelimiter("/").setItem(28).setItem(12).setItem(1985).setItemWidth(16).setItemWidth(32,2)}(0,_react2.storiesOf)("DelimitedTextInput",module).add("in date DD/MM/YYYY format",(function(){return(0,_jsxRuntime.jsx)(_DelimitedTextInput.default,{onUpdate:onUpdate})}))}).call(this,__webpack_require__(59)(module))},784:function(module,exports,__webpack_require__){"use strict";(function(module){var _jsxRuntime=__webpack_require__(75),_react2=(_interopRequireDefault(__webpack_require__(2)),__webpack_require__(92)),_TestReactComponent=(__webpack_require__(153),_interopRequireDefault(__webpack_require__(785)));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}(0,_react2.storiesOf)("TestReactComponent",module).add("default",(function(){return(0,_jsxRuntime.jsx)(_TestReactComponent.default,{})}))}).call(this,__webpack_require__(59)(module))},785:function(module,exports,__webpack_require__){"use strict";__webpack_require__(11),__webpack_require__(18),__webpack_require__(22),__webpack_require__(14),__webpack_require__(24),__webpack_require__(64),__webpack_require__(26),__webpack_require__(99),__webpack_require__(55),__webpack_require__(65),__webpack_require__(10),__webpack_require__(66),__webpack_require__(25),__webpack_require__(15),__webpack_require__(117),__webpack_require__(19),Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0,__webpack_require__(11),__webpack_require__(18),__webpack_require__(22),__webpack_require__(14),__webpack_require__(24),__webpack_require__(64),__webpack_require__(26),__webpack_require__(55),__webpack_require__(65),__webpack_require__(10),__webpack_require__(66),__webpack_require__(25),__webpack_require__(15),__webpack_require__(19);var _jsxRuntime=__webpack_require__(75),_react=function _interopRequireWildcard(obj){if(obj&&obj.__esModule)return obj;if(null===obj||"object"!==_typeof(obj)&&"function"!=typeof obj)return{default:obj};var cache=_getRequireWildcardCache();if(cache&&cache.has(obj))return cache.get(obj);var newObj={},hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj)if(Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;desc&&(desc.get||desc.set)?Object.defineProperty(newObj,key,desc):newObj[key]=obj[key]}newObj.default=obj,cache&&cache.set(obj,newObj);return newObj}(__webpack_require__(2));(function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}})(__webpack_require__(154)),__webpack_require__(222),__webpack_require__(223);function _getRequireWildcardCache(){if("function"!=typeof WeakMap)return null;var cache=new WeakMap;return _getRequireWildcardCache=function _getRequireWildcardCache(){return cache},cache}function _typeof(obj){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(obj){return typeof obj}:function _typeof(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj})(obj)}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}function _setPrototypeOf(o,p){return(_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){return o.__proto__=p,o})(o,p)}function _createSuper(Derived){var hasNativeReflectConstruct=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var result,Super=_getPrototypeOf(Derived);if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else result=Super.apply(this,arguments);return _possibleConstructorReturn(this,result)}}function _possibleConstructorReturn(self,call){return!call||"object"!==_typeof(call)&&"function"!=typeof call?function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}(self):call}function _getPrototypeOf(o){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)})(o)}var TestReactComponent=function(_Component){!function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),superClass&&_setPrototypeOf(subClass,superClass)}(TestReactComponent,_Component);var _super=_createSuper(TestReactComponent);function TestReactComponent(){return _classCallCheck(this,TestReactComponent),_super.apply(this,arguments)}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Constructor}(TestReactComponent,[{key:"render",value:function render(){return(0,_jsxRuntime.jsx)(_jsxRuntime.Fragment,{children:"Test React Component is... operational!"})}}]),TestReactComponent}(_react.Component);exports.default=TestReactComponent,TestReactComponent.__docgenInfo={description:"",methods:[],displayName:"TestReactComponent"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src\\testComponentGroup\\TestReactComponent.jsx"]={name:"TestReactComponent",docgenInfo:TestReactComponent.__docgenInfo,path:"src\\testComponentGroup\\TestReactComponent.jsx"})}},[[354,1,2]]]);
//# sourceMappingURL=main.bcf49854b4be215c709a.bundle.js.map