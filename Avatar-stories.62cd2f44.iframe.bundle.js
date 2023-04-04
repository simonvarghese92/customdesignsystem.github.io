"use strict";(self.webpackChunkcustom_design_system=self.webpackChunkcustom_design_system||[]).push([[387],{"./src/shared/animation.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Ui:function(){return easing},w5:function(){return glow}});var _templateObject,_templateObject2,_templateObject3,_templateObject4,_templateObject5,_templateObject6,_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_styles__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/shared/styles.js"),easing={rubber:"cubic-bezier(0.175, 0.885, 0.335, 1.05)"},glow=((0,styled_components__WEBPACK_IMPORTED_MODULE_1__.F4)(_templateObject||(_templateObject=(0,_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__.Z)(["\n\tfrom {\n\t\ttransform: rotate(0deg);\n\t}\n\tto {\n\t\ttransform: rotate(360deg);\n\t}\n"]))),(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.F4)(_templateObject2||(_templateObject2=(0,_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__.Z)(["\n  0%, 100% { opacity: 1; }\n  50% { opacity: .4; }\n"]))));(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.F4)(_templateObject3||(_templateObject3=(0,_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__.Z)(["\n  0% { transform: translateY(1px); }\n  25% { transform: translateY(0px); }\n  50% { transform: translateY(-3px); }\n  100% { transform: translateY(1px); }\n"]))),(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.F4)(_templateObject4||(_templateObject4=(0,_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__.Z)(["\n  0%, 100% { transform:translate3d(0,0,0); }\n  12.5%, 62.5% { transform:translate3d(-4px,0,0); }\n  37.5%, 87.5% {  transform: translate3d(4px,0,0);  }\n"]))),(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.F4)(_templateObject5||(_templateObject5=(0,_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__.Z)(["\n  0% { transform:rotate(-3deg) }\n  1.68421% { transform:rotate(3deg) }\n  2.10526% { transform:rotate(6deg) }\n  3.78947% { transform:rotate(-6deg) }\n  4.21053% { transform:rotate(-6deg) }\n  5.89474% { transform:rotate(6deg) }\n  6.31579% { transform:rotate(6deg) }\n  8% { transform:rotate(-6deg) }\n  8.42105% { transform:rotate(-6deg) }\n  10.10526% { transform:rotate(6deg) }\n  10.52632% { transform:rotate(6deg) }\n  12.21053% { transform:rotate(-6deg) }\n  12.63158% { transform:rotate(-6deg) }\n  14.31579% { transform:rotate(6deg) }\n  15.78947% { transform:rotate(0deg) }\n  100% { transform:rotate(0deg) }\n"]))),(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.iv)(_templateObject6||(_templateObject6=(0,_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__.Z)(["\n  animation: "," 1.5s ease-in-out infinite;\n  background: ",";\n  color: transparent;\n  cursor: progress;\n"])),glow,_styles__WEBPACK_IMPORTED_MODULE_0__.$_.mediumlight)},"./src/Avatar.stories.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Initials:function(){return Initials},Large:function(){return Large},Loading:function(){return Loading},Sizes:function(){return Sizes},Standard:function(){return Standard},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return Avatar_stories}});var _templateObject,_templateObject2,_templateObject3,_templateObject4,_templateObject5,_templateObject6,_templateObject7,_templateObject8,_templateObject9,objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),objectWithoutProperties=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js")),taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),styles=__webpack_require__("./src/shared/styles.js"),animation=__webpack_require__("./src/shared/animation.js"),Icon=__webpack_require__("./src/Icon.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["loading","rounded","username","src","size"],sizes_large=40,sizes_medium=28,sizes_small=20,sizes_tiny=16,Image=styled_components_browser_esm.ZP.div(_templateObject||(_templateObject=(0,taggedTemplateLiteral.Z)(["\n  background: ",";\n  border-radius: ",";\n  display: inline-block;\n  vertical-align: top;\n  overflow: hidden;\n  text-transform: uppercase;\n\n  height: ","px;\n  width: ","px;\n  line-height: ","px;\n\n  ","\n\n  ","\n\n  ","\n\n  ","\n\n  img {\n    width: 100%;\n    height: auto;\n    display: block;\n  }\n\n  svg {\n    position: relative;\n    bottom: -2px;\n    height: 100%;\n    width: 100%;\n    vertical-align: top;\n  }\n\n  path {\n    fill: ",";\n    animation: "," 1.5s ease-in-out infinite;\n  }\n"])),(function(props){return props.loading?styles.$_.light:"transparent"}),(function(props){return props.rounded?"50%":""}),sizes_medium,sizes_medium,sizes_medium,(function(props){return"tiny"===props.size&&(0,styled_components_browser_esm.iv)(_templateObject2||(_templateObject2=(0,taggedTemplateLiteral.Z)(["\n      height: ","px;\n      width: ","px;\n      line-height: ","px;\n    "])),sizes_tiny,sizes_tiny,sizes_tiny)}),(function(props){return"small"===props.size&&(0,styled_components_browser_esm.iv)(_templateObject3||(_templateObject3=(0,taggedTemplateLiteral.Z)(["\n      height: ","px;\n      width: ","px;\n      line-height: ","px;\n    "])),sizes_small,sizes_small,sizes_small)}),(function(props){return"large"===props.size&&(0,styled_components_browser_esm.iv)(_templateObject4||(_templateObject4=(0,taggedTemplateLiteral.Z)(["\n      height: ","px;\n      width: ","px;\n      line-height: ","px;\n    "])),sizes_large,sizes_large,sizes_large)}),(function(props){return!props.src&&(0,styled_components_browser_esm.iv)(_templateObject5||(_templateObject5=(0,taggedTemplateLiteral.Z)(["\n      background: ",";\n    "])),!props.loading&&"#37D5D3")}),styles.$_.medium,animation.w5),Initial=styled_components_browser_esm.ZP.div(_templateObject6||(_templateObject6=(0,taggedTemplateLiteral.Z)(["\n  color: ",";\n  text-align: center;\n\n  font-size: ","px;\n  line-height: ","px;\n\n  ","\n\n  ","\n\n  ","\n"])),styles.$_.lightest,styles.cp.size.s2,sizes_medium,(function(props){return"tiny"===props.size&&(0,styled_components_browser_esm.iv)(_templateObject7||(_templateObject7=(0,taggedTemplateLiteral.Z)(["\n    font-size: ","px;\n    line-height: ","px;\n  "])),styles.cp.size.s1-2,sizes_tiny)}),(function(props){return"small"===props.size&&(0,styled_components_browser_esm.iv)(_templateObject8||(_templateObject8=(0,taggedTemplateLiteral.Z)(["\n    font-size: ","px;\n    line-height: ","px;\n  "])),styles.cp.size.s1,sizes_small)}),(function(props){return"large"===props.size&&(0,styled_components_browser_esm.iv)(_templateObject9||(_templateObject9=(0,taggedTemplateLiteral.Z)(["\n    font-size: ","px;\n    line-height: ","px;\n  "])),styles.cp.size.s3,sizes_large)}));function Avatar(_ref){var loading=_ref.loading,rounded=_ref.rounded,username=_ref.username,src=_ref.src,size=_ref.size,props=(0,objectWithoutProperties.Z)(_ref,_excluded),avatarFigure=(0,jsx_runtime.jsx)(Icon.J,{icon:"useralt"}),a11yProps={};return loading?(a11yProps["aria-busy"]=!0,a11yProps["aria-label"]="Loading avatar ..."):src?avatarFigure=(0,jsx_runtime.jsx)("img",{src:src,alt:username}):(a11yProps["aria-label"]=username,avatarFigure=(0,jsx_runtime.jsx)(Initial,{size:size,"aria-hidden":"true",children:username.substring(0,1)})),(0,jsx_runtime.jsx)(Image,(0,objectSpread2.Z)((0,objectSpread2.Z)((0,objectSpread2.Z)({size:size,rounded:rounded,loading:loading,src:src},a11yProps),props),{},{children:avatarFigure}))}Avatar.displayName="Avatar",Avatar.defaultProps={loading:!1,rounded:!0,username:"loading",src:null,size:"medium"},Avatar.__docgenInfo={description:"",methods:[],displayName:"Avatar",props:{loading:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},rounded:{defaultValue:{value:"true",computed:!1},description:"",type:{name:"bool"},required:!1},username:{defaultValue:{value:"'loading'",computed:!1},description:"",type:{name:"string"},required:!1},src:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"string"},required:!1},size:{defaultValue:{value:"'medium'",computed:!1},description:"",type:{name:"enum",value:[{value:'"large"',computed:!1},{value:'"medium"',computed:!1},{value:'"small"',computed:!1},{value:'"tiny"',computed:!1}]},required:!1}}};var Avatar_stories={title:"Design System/Avatar",component:Avatar},Standard=function Standard(args){return(0,jsx_runtime.jsx)(Avatar,(0,objectSpread2.Z)({},args))};Standard.displayName="Standard",Standard.args={size:"large",username:"Tom Coleman",src:"https://avatars2.githubusercontent.com/u/132554"},Standard.argTypes={rounded:{type:"boolean"}};var Sizes=function Sizes(args){return(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)(Avatar,(0,objectSpread2.Z)((0,objectSpread2.Z)({},args),{},{size:"large"})),(0,jsx_runtime.jsx)(Avatar,(0,objectSpread2.Z)((0,objectSpread2.Z)({},args),{},{size:"medium"})),(0,jsx_runtime.jsx)(Avatar,(0,objectSpread2.Z)((0,objectSpread2.Z)({},args),{},{size:"small"})),(0,jsx_runtime.jsx)(Avatar,(0,objectSpread2.Z)((0,objectSpread2.Z)({},args),{},{size:"tiny"}))]})};Sizes.displayName="Sizes",Sizes.args={username:"Tom Coleman",src:"https://avatars2.githubusercontent.com/u/132554"};var Initials=function Initials(args){return(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)(Avatar,{username:"Tom Coleman"}),(0,jsx_runtime.jsx)(Avatar,{username:"Dominic Nguyen"}),(0,jsx_runtime.jsx)(Avatar,{username:"Kyle Suss"}),(0,jsx_runtime.jsx)(Avatar,{username:"Michael Shilman"})]})};Initials.displayName="Initials";var Loading=function Loading(args){return(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)(Avatar,(0,objectSpread2.Z)((0,objectSpread2.Z)({},args),{},{size:"large"})),(0,jsx_runtime.jsx)(Avatar,(0,objectSpread2.Z)((0,objectSpread2.Z)({},args),{},{size:"medium"})),(0,jsx_runtime.jsx)(Avatar,(0,objectSpread2.Z)((0,objectSpread2.Z)({},args),{},{size:"small"})),(0,jsx_runtime.jsx)(Avatar,(0,objectSpread2.Z)((0,objectSpread2.Z)({},args),{},{size:"tiny"}))]})};Loading.displayName="Loading",Loading.args={loading:!0};var Large=function Large(args){return(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)(Avatar,{loading:!0,size:"large"}),(0,jsx_runtime.jsx)(Avatar,{size:"large",username:"Tom Coleman"}),(0,jsx_runtime.jsx)(Avatar,{size:"large",username:"Tom Coleman",src:"https://avatars2.githubusercontent.com/u/132554"})]})};Large.displayName="Large";var __namedExportsOrder=["Standard","Sizes","Initials","Loading","Large"];Standard.__docgenInfo={description:"",methods:[],displayName:"Standard"},Sizes.__docgenInfo={description:"",methods:[],displayName:"Sizes"},Initials.__docgenInfo={description:"",methods:[],displayName:"Initials"},Loading.__docgenInfo={description:"",methods:[],displayName:"Loading"},Large.__docgenInfo={description:"",methods:[],displayName:"Large"},Standard.parameters={...Standard.parameters,docs:{...Standard.parameters?.docs,source:{originalSource:"function Standard(args) {\n  return /*#__PURE__*/_jsx(Avatar, _objectSpread({}, args));\n}",...Standard.parameters?.docs?.source}}},Sizes.parameters={...Sizes.parameters,docs:{...Sizes.parameters?.docs,source:{originalSource:'function Sizes(args) {\n  return /*#__PURE__*/_jsxs("div", {\n    children: [/*#__PURE__*/_jsx(Avatar, _objectSpread(_objectSpread({}, args), {}, {\n      size: "large"\n    })), /*#__PURE__*/_jsx(Avatar, _objectSpread(_objectSpread({}, args), {}, {\n      size: "medium"\n    })), /*#__PURE__*/_jsx(Avatar, _objectSpread(_objectSpread({}, args), {}, {\n      size: "small"\n    })), /*#__PURE__*/_jsx(Avatar, _objectSpread(_objectSpread({}, args), {}, {\n      size: "tiny"\n    }))]\n  });\n}',...Sizes.parameters?.docs?.source}}},Initials.parameters={...Initials.parameters,docs:{...Initials.parameters?.docs,source:{originalSource:'function Initials(args) {\n  return /*#__PURE__*/_jsxs("div", {\n    children: [/*#__PURE__*/_jsx(Avatar, {\n      username: "Tom Coleman"\n    }), /*#__PURE__*/_jsx(Avatar, {\n      username: "Dominic Nguyen"\n    }), /*#__PURE__*/_jsx(Avatar, {\n      username: "Kyle Suss"\n    }), /*#__PURE__*/_jsx(Avatar, {\n      username: "Michael Shilman"\n    })]\n  });\n}',...Initials.parameters?.docs?.source}}},Loading.parameters={...Loading.parameters,docs:{...Loading.parameters?.docs,source:{originalSource:'function Loading(args) {\n  return /*#__PURE__*/_jsxs("div", {\n    children: [/*#__PURE__*/_jsx(Avatar, _objectSpread(_objectSpread({}, args), {}, {\n      size: "large"\n    })), /*#__PURE__*/_jsx(Avatar, _objectSpread(_objectSpread({}, args), {}, {\n      size: "medium"\n    })), /*#__PURE__*/_jsx(Avatar, _objectSpread(_objectSpread({}, args), {}, {\n      size: "small"\n    })), /*#__PURE__*/_jsx(Avatar, _objectSpread(_objectSpread({}, args), {}, {\n      size: "tiny"\n    }))]\n  });\n}',...Loading.parameters?.docs?.source}}},Large.parameters={...Large.parameters,docs:{...Large.parameters?.docs,source:{originalSource:'function Large(args) {\n  return /*#__PURE__*/_jsxs("div", {\n    children: [/*#__PURE__*/_jsx(Avatar, {\n      loading: true,\n      size: "large"\n    }), /*#__PURE__*/_jsx(Avatar, {\n      size: "large",\n      username: "Tom Coleman"\n    }), /*#__PURE__*/_jsx(Avatar, {\n      size: "large",\n      username: "Tom Coleman",\n      src: "https://avatars2.githubusercontent.com/u/132554"\n    })]\n  });\n}',...Large.parameters?.docs?.source}}}}}]);