(this["webpackJsonpreact-calculator"]=this["webpackJsonpreact-calculator"]||[]).push([[0],{10:function(module,__webpack_exports__,__webpack_require__){"use strict";var C_Users_chris_dev_react_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(7),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(1),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),_Calculator_styles__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(11),_Display__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(15),_Buttons__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(16),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(0),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__),initialTotal="",initialCurrent="0",Calculator=function Calculator(){var _useState=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(initialTotal),_useState2=Object(C_Users_chris_dev_react_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState,2),total=_useState2[0],setTotal=_useState2[1],_useState3=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(initialCurrent),_useState4=Object(C_Users_chris_dev_react_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState3,2),current=_useState4[0],setCurrent=_useState4[1],handleClearClick=function(){setTotal(initialTotal),setCurrent(initialCurrent)},handleNumberClick=function(e){if("0"===current){if("0"===e.target.value)return;setCurrent(e.target.value)}else if(current.length>=14)setTotal(""),setCurrent("TOO LONG");else{if("TOO LONG"===current)return;setCurrent("".concat(current).concat(e.target.value))}},handleDecimalClick=function(){current.includes(".")||setCurrent("".concat(current,"."))},handleOperatorClick=function handleOperatorClick(e){if(/[+\-*/]$/.test(current))return"-"===e.target.value&&/[^-]$/.test(current)?void setCurrent("".concat(current).concat(e.target.value)):void setCurrent(e.target.value);if(""===total)return setTotal(current),void setCurrent(e.target.value);var result=Math.round(1e14*eval("".concat(total).concat(current)))/1e14;if(result>=99999999999999)setTotal(""),setCurrent("TOO LONG");else if(result.toString().length>14){var nonDigitCount=(result.toString().match(/[^\d]/g)||[]).length,trailingZerosCount=-Math.floor(Math.log10(result))>0?-Math.floor(Math.log10(result)):0,precise=Number.parseFloat(result).toPrecision(14-nonDigitCount-trailingZerosCount);setTotal(precise),setCurrent(e.target.value)}else setTotal(result.toString()),setCurrent(e.target.value)},handleEqualsClick=function handleEqualsClick(){if(!/[+\-*/]$/.test(current)&&""!==total){var result=Math.round(1e14*eval("".concat(total).concat(current)))/1e14;if(result>=99999999999999)setTotal(""),setCurrent("TOO LONG");else if(result.toString().length>14){var nonDigitCount=(result.toString().match(/[^\d]/g)||[]).length,trailingZerosCount=-Math.floor(Math.log10(result))>0?-Math.floor(Math.log10(result)):0,precise=Number.parseFloat(result).toPrecision(14-nonDigitCount-trailingZerosCount);setTotal(""),setCurrent(precise)}else setTotal(""),setCurrent(result.toString())}};return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_Calculator_styles__WEBPACK_IMPORTED_MODULE_2__.a,{children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Display__WEBPACK_IMPORTED_MODULE_3__.a,{total:total,current:current}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Buttons__WEBPACK_IMPORTED_MODULE_4__.a,{onClearClick:handleClearClick,onNumberClick:handleNumberClick,onDecimalClick:handleDecimalClick,onOperatorClick:handleOperatorClick,onEqualsClick:handleEqualsClick})]})};__webpack_exports__.a=Calculator},11:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r,a=n(2),i=n(3).b.div(r||(r=Object(a.a)(["\n  width: var(--width);\n  padding: 10px;\n  border-radius: 4px;\n  background-color: #ed7966;\n  box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2),\n    0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12);\n"])))},15:function(e,t,n){"use strict";n(1);var r,a,i,l=n(2),c=n(3),o=c.b.div(r||(r=Object(l.a)(["\n  width: 100%;\n  height: 116px;\n  padding: 16px 7px;\n  text-align: right;\n  background-color: var(--defaultColor);\n  color: #fafafa;\n  border-radius: 1.5px;\n"]))),_=c.b.h2(a||(a=Object(l.a)(["\n  width: 100%;\n  margin: 0;\n  font-family: 'Digital-7 Mono', 'Roboto', sans-serif;\n  font-weight: normal; font-style: normal;\n  font-size: 32px;\n"]))),u=c.b.h1(i||(i=Object(l.a)(["\n  width: 100%;\n  margin-top: 10px;\n  font-family: 'Digital-7 Mono', 'Roboto', sans-serif;\n  font-weight: normal; font-style: normal;\n  font-size: 44px;\n"]))),s=n(0);t.a=function(e){var t=e.total,n=e.current;return Object(s.jsxs)(o,{children:[Object(s.jsx)(_,{children:t}),Object(s.jsx)(u,{id:"display",children:n})]})}},16:function(e,t,n){"use strict";n(1);var r,a=n(2),i=n(3).b.div(r||(r=Object(a.a)(['\n  width: 100%;\n  height: 320px;\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  grid-template-rows: repeat(5, 1fr);\n  grid-template-areas:\n    "clear clear divide multiply"\n    "seven eight nine subtract"\n    "four five six add"\n    "one two three equals"\n    "zero zero decimal equals";\n\n  button {\n    width: auto;\n    height: 100%;\n    font-size: 28px;\n  }\n\n  #clear {\n    grid-area: clear;\n  }\n\n  #divide {\n    grid-area: divide;\n  }\n\n  #multiply {\n    grid-area: multiply;\n  }\n\n  #seven {\n    grid-area: seven;\n  }\n\n  #eight {\n    grid-area: eight;\n  }\n\n  #nine {\n    grid-area: nine;\n  }\n\n  #subtract {\n    grid-area: subtract;\n  }\n\n  #four {\n    grid-area: four;\n  }\n\n  #five {\n    grid-area: five;\n  }\n\n  #six {\n    grid-area: six;\n  }\n\n  #add {\n    grid-area: add;\n  }\n\n  #one {\n    grid-area: one;\n  }\n\n  #two {\n    grid-area: two;\n  }\n\n  #three {\n    grid-area: three;\n  }\n\n  #equals {\n    grid-area: equals;\n  }\n\n  #zero {\n    grid-area: zero;\n  }\n\n  #decimal {\n    grid-area: decimal;\n  }\n']))),l=n(0);t.a=function(e){var t=e.onClearClick,n=e.onOperatorClick,r=e.onNumberClick,a=e.onEqualsClick,c=e.onDecimalClick;return Object(l.jsxs)(i,{children:[Object(l.jsx)("button",{id:"clear",value:"AC",onClick:t,children:"AC"}),Object(l.jsx)("button",{id:"divide",value:"/",onClick:n,children:"/"}),Object(l.jsx)("button",{id:"multiply",value:"*",onClick:n,children:"x"}),Object(l.jsx)("button",{id:"seven",value:"7",onClick:r,children:"7"}),Object(l.jsx)("button",{id:"eight",value:"8",onClick:r,children:"8"}),Object(l.jsx)("button",{id:"nine",value:"9",onClick:r,children:"9"}),Object(l.jsx)("button",{id:"subtract",value:"-",onClick:n,children:"-"}),Object(l.jsx)("button",{id:"four",value:"4",onClick:r,children:"4"}),Object(l.jsx)("button",{id:"five",value:"5",onClick:r,children:"5"}),Object(l.jsx)("button",{id:"six",value:"6",onClick:r,children:"6"}),Object(l.jsx)("button",{id:"add",value:"+",onClick:n,children:"+"}),Object(l.jsx)("button",{id:"one",value:"1",onClick:r,children:"1"}),Object(l.jsx)("button",{id:"two",value:"2",onClick:r,children:"2"}),Object(l.jsx)("button",{id:"three",value:"3",onClick:r,children:"3"}),Object(l.jsx)("button",{id:"equals",value:"=",onClick:a,children:"="}),Object(l.jsx)("button",{id:"zero",value:"0",onClick:r,children:"0"}),Object(l.jsx)("button",{id:"decimal",value:".",onClick:c,children:"."})]})}},26:function(e,t,n){"use strict";n.r(t);var r,a,i=n(1),l=n.n(i),c=n(9),o=n.n(c),_=n(10),u=n(2),s=n(3),d=s.b.div(r||(r=Object(u.a)(['\n  display: flex;\n  margin-top: 6px;\n  width: 320px;\n  justify-content: space-around;\n  align-items: center;\n\n  a {\n    text-decoration: none;\n\n    img {\n      width: 34px;\n    }\n\n    span {\n      font-family: "Gloria Hallelujah", cursive;\n      font-style: italic;\n      color: #fafafa;\n      font-size: 24px;\n    }\n  }\n']))),b=n(0),h=function(){return Object(b.jsxs)(d,{children:[Object(b.jsx)("a",{href:"https://github.com/cscolley/",children:Object(b.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NDkxMSwgMjAxMy8xMC8yOS0xMTo0NzoxNiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MzlFQkFERkU4NkJCMTFFM0FBNTJFRTMzNTJEMUJDNDYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MzlFQkFERkQ4NkJCMTFFM0FBNTJFRTMzNTJEMUJDNDYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkU1MTc4QTJFOTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkU1MTc4QTJGOTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+Kk5lQwAABYxJREFUeNrkm29oVXUYx3+7bM3V1FnbqlltrtXWtYRa1nqxooY5E7EhKWGuaTDBagol9SIMDCKICASj+cISw/DPi16ZBakrUBnoC7nNoTMWy6I1c+LmVq6t78N9jpyu555znt855+536IHPi939/jzP95zznN+/kzc1NaUitirwJJgPasF94DZQDG7hMqNgBFwEZ5kU+AH0R+lcXgQCJMBT4EXwLKgM2N7P4FvwJegCk6YKUA5eB23grogu2C/gc7AN/GGKABTsZtAOZqjc2DjYAT5kUfSNBNCkAGwGo1PTZ6PsQ4FuHLp3QD3YDR5QZtgZsAac1ElYokcGbATHDApesS/kUwf7GEkOKAK7wAvKbNsPXgZjYQowG3wNnlDxsONgCbgchgAU/GHwiIqXUT5o8hLBKwfcDA7FMHgrUR/iGLQEoGTyBWhQ8bUGjiFPR4A3QIuKv7VwLKIcQMnue5Dv0fjT/IwtAM3g+RyMBmkU+BXf3qc5Rx3xqDPBE7LjfkaCheCcj1HYKYe6JeBt8GcEo75L3HaJQ7+nfNQ/x7H9p67TFX4L1Pi4EocdfhsGH4BPwVbwqu0xGwI/8vT2N/77Gv+vAJSCO3n6PJ//Vjz72w62cPtORnfAwx7+1nBsW93ugGow7vOKtPkYa9eDl0Clxji9kuvW+yjb5tPncY7xet3MhjoFt2RzgIlU2DQL/O6017W/Be4BawXJqMCgTH+ToOxajvWG1+AmYVBlBglQKrxwmzIFoB9XCzt91CABpL6sti62JcBiXtKS2GMGCSD1pZxjvi7AKmED9PraYJAAG2yvVL+2yi7AImHl90C3QQJ03/B+97ZF1lCYVlN6BBV/BffykNQkoyF4H5grqJOkO6BR2NF2A4O35gifCOs0JjTW9vYaPPPbJ11LJAFqBRVoDf68wQLQI3BBUL424XPiY1lvDOb/ZwRla0iAOYIKv8dAgEFB2VtJgJmCChMxEEAyHigmAQoFFWbFQIDZgrKF0p2hmTEQQOQjCTAmKD8vBgJUCcqOkQBXBBXosEORwcEXKdmBjCskwICgQr5h0+BMW6i8V7LtNkAC9As7WWqwAM8Jy/cnhBMhspVKvq2eC0uwbxLrSWhMa+dpdJQLW6mRpLtpOlyuMcL7CTwErhoSPG2ApjQEuD3BQ0fp0ZJqlT6pZYpt0wieYh60nuWDGp2+At4xIPgt7IvU0jHzBkFdgD27HWDGNGyGFHHfulaXuTN0IkBjZ8EykJeDwKmPFtAXwN8TTltjrVkKfwcawXJW3G3v8DTYCKoiCLwGvAl6QthpbnU6J5jP2f1uh1Wgxbbxwv0qvT/vtZRGA6wuzs50+Pkb8JdgQtPMq1VJld7bnxtSzhjgJD5hzwEW611OZK6xlSvzeYbAsl3Cx4PK7ozodOl6t93hfJByqbzOVnYh+MdHhxfBLI1bnuoMhRx8imPMKgDR5LG/nrSVfddHpx8HeO4/ClmApsw+snXsdk7gYMat+r5Hp0sDCLAkxOA7nfrI1nGxx2tmQUb5x8FuzgvD4Dw4wNm2MIAA1SEF38cx+RaAeBCMZGlwb44GOyUhBD/CsTj24TatpddXq3L+RIVmXnE4QzjJMaSylvBxFdqzKHsVrDD8Dmj36sOvIx0unewHDRENg4MI0BH2FyP0RcZOlzW3Ib7VLvPqDK0z1PEq7bDmLVwCLgnr0AhvnUp/0eJp0k9m6HO4fUp2nGZODgUY5PzUJVlHkxg1TEfnjxqY8I6yb12SSjqLm7T9/Ax4TaW/+JxuIx862KcL4toBk1QFT1omXZLRHQHaL3Npl/r8jH3QjiGsbJ3kGd/fDo6WBWi31KG9a9xXMgzfw35tVfCR9l52dk8Ibe7htnq57YowfY7i4+lYWUL9z+1fAQYACqstE4NCc18AAAAASUVORK5CYII=",alt:"GitHub icon"})}),Object(b.jsx)("a",{href:"https://www.chriscolley.com.au",children:Object(b.jsx)("span",{children:"chriscolley.com.au"})})]})},C=Object(s.a)(a||(a=Object(u.a)(["\n  :root {\n    --width: 320px;\n    --defaultColor: rgba(0, 0, 0, 0.87);\n  }\n\n  * {\n    box-sizing: border-box;\n    font-family: 'Roboto', sans-serif;\n    color: var(---defaultColor);\n  }\n\n  body {\n    margin: 0;\n    padding: 0;\n    height: 100vh;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background-color: #303179;\n  }\n"])));var g=function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(C,{}),Object(b.jsx)(_.a,{}),Object(b.jsx)(h,{})]})},O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,27)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,i=t.getLCP,l=t.getTTFB;n(e),r(e),a(e),i(e),l(e)}))};o.a.render(Object(b.jsx)(l.a.StrictMode,{children:Object(b.jsx)(g,{})}),document.getElementById("root")),O()}},[[26,1,2]]]);
//# sourceMappingURL=main.2ff40d7f.chunk.js.map