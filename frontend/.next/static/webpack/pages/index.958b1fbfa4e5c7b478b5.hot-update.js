"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/user/LoginModal.tsx":
/*!****************************************!*\
  !*** ./components/user/LoginModal.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_multicampus_Desktop_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @heroicons/react/solid */ "./node_modules/@heroicons/react/solid/esm/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\multicampus\\Desktop\\\uC790\uC728\uD504\uB85C\uC81D\uD2B8\\frontend\\components\\user\\LoginModal.tsx",
    _s = $RefreshSig$();







function LoginModal(_ref) {
  _s();

  (0,C_Users_multicampus_Desktop_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__.default)(_ref);

  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)(); // 로그인

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),
      loginid = _useState[0],
      setloginid = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),
      loginpw = _useState2[0],
      setloginpw = _useState2[1];

  function login() {
    axios__WEBPACK_IMPORTED_MODULE_3___default().post("/api/v4/users/login", {
      login_id: loginid,
      password: loginpw
    }).then(function (res) {
      console.log(res); // 로그인이 되면 정보에 따라서 return창을 다르게 해줘야할텐데 backend에 저장되는걸로 자동으로

      router.push("/ManageMain");
    });
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
    className: "min-h-full flex items-center justify-center pb-10 px-4 sm:px-6 lg:px-8",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
      className: "max-w-md w-full space-y-8",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
        className: "rounded-md shadow-sm -space-y-px",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("input", {
            id: "MM-ID",
            name: "id",
            type: "email",
            required: true,
            className: "appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm",
            placeholder: "MatterMost ID",
            onChange: function onChange(e) {
              return setloginid(e.target.value);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("input", {
            id: "password",
            name: "password",
            type: "password",
            autoComplete: "current-password",
            required: true,
            className: "appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm",
            placeholder: "Password",
            onChange: function onChange(e) {
              return setloginpw(e.target.value);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("button", {
          type: "submit",
          className: "group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500",
          onClick: login,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("span", {
            className: "absolute left-0 inset-y-0 flex items-center pl-3",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_2__.LockClosedIcon, {
              className: "h-5 w-5 text-blue-500 group-hover:text-blue-400",
              "aria-hidden": "true"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 61,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 13
          }, this), "Login"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 5
  }, this);
}

_s(LoginModal, "mVqKFCAXRWD5kVL7TPjCUrn6XJw=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter];
});

_c = LoginModal;
/* harmony default export */ __webpack_exports__["default"] = (LoginModal);

var _c;

$RefreshReg$(_c, "LoginModal");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_multicampus_Desktop_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_user_LoginModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/user/LoginModal */ "./components/user/LoginModal.tsx");
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @headlessui/react */ "./node_modules/@headlessui/react/dist/index.esm.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\multicampus\\Desktop\\\uC790\uC728\uD504\uB85C\uC81D\uD2B8\\frontend\\pages\\index.tsx",
    _s = $RefreshSig$();







function Main(_ref) {
  _s();

  (0,C_Users_multicampus_Desktop_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__.default)(_ref);

  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
  var cancelButtonRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      click = _useState[0],
      setclick = _useState[1]; // 로그인 모달


  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      showLoginModal = _useState2[0],
      setLoginModal = _useState2[1]; // 로그인 상태 체크


  setTimeout(function () {
    setclick(true);
  }, 3000); // +ssafy 클릭했을때 실행

  function enter() {
    // 로그인돼있는지 확인 토큰으로
    // 로그인 되어 있으면
    // 토큰에 담긴 유저 타입에 따라 메인페이지로 이동
    // router.push('/StudentMain')
    // router.push(`/ManageMain`)
    // 안돼있으면 로그인 모달 띄우기
    setLoginModal(true);
  } //


  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
      className: "animation01 overflow-hidden",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
        className: "rhombus_small",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
          className: "rhombus",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
            className: "border_box",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("span", {
              className: "line line01"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 37,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("span", {
              className: "line line02"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 38,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("span", {
              className: "line line03"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 39,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("span", {
              className: "line line04"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 40,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("span", {
              className: "circle circle01"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 41,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("span", {
              className: "circle circle02"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 42,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("span", {
              className: "circle circle03"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 43,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("span", {
              className: "circle circle04"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 44,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("span", {
              className: "animation_line animation_line01"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 45,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("span", {
              className: "animation_line_wrapper animation_line02_wrapper",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("span", {
                className: "animation_line animation_line02"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 47,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 46,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("span", {
              className: "animation_line animation_line03"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 49,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("span", {
              className: "animation_line_wrapper animation_line04_wrapper",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("span", {
                className: "animation_line animation_line04"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 51,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 50,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("span", {
              className: "animation_line animation_line05"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 53,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("span", {
              className: "animation_line_wrapper animation_line06_wrapper",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("span", {
                className: "animation_line animation_line06"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 55,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 54,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("span", {
              className: "animation_line animation_line07"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 57,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("span", {
              className: "animation_line_wrapper animation_line08_wrapper",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("span", {
                className: "animation_line animation_line08"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 59,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 58,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
            className: "wave",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
              className: "wave_wrapper",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                className: "wave_box"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 64,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 63,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_headlessui_react__WEBPACK_IMPORTED_MODULE_5__.Transition.Root, {
      show: showLoginModal,
      as: react__WEBPACK_IMPORTED_MODULE_1__.Fragment,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_headlessui_react__WEBPACK_IMPORTED_MODULE_5__.Dialog, {
        as: "div",
        className: "fixed z-10 inset-0 overflow-y-auto",
        initialFocus: cancelButtonRef,
        onClose: setLoginModal,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
          className: "flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_headlessui_react__WEBPACK_IMPORTED_MODULE_5__.Transition.Child, {
            as: react__WEBPACK_IMPORTED_MODULE_1__.Fragment,
            enter: "ease-out duration-300",
            enterFrom: "opacity-0",
            enterTo: "opacity-100",
            leave: "ease-in duration-200",
            leaveFrom: "opacity-100",
            leaveTo: "opacity-0",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_headlessui_react__WEBPACK_IMPORTED_MODULE_5__.Dialog.Overlay, {
              className: "fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 87,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("span", {
            className: "hidden sm:inline-block sm:align-middle sm:h-screen",
            "aria-hidden": "true",
            children: "\u200B"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 91,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_headlessui_react__WEBPACK_IMPORTED_MODULE_5__.Transition.Child, {
            as: react__WEBPACK_IMPORTED_MODULE_1__.Fragment,
            enter: "ease-out duration-300",
            enterFrom: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
            enterTo: "opacity-100 translate-y-0 sm:scale-100",
            leave: "ease-in duration-200",
            leaveFrom: "opacity-100 translate-y-0 sm:scale-100",
            leaveTo: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
              className: "inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                className: "bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("button", {
                  type: "button",
                  className: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm",
                  onClick: function onClick() {
                    return setLoginModal(false);
                  },
                  ref: cancelButtonRef,
                  children: "X"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 108,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 107,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                className: "bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components_user_LoginModal__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 118,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 117,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 106,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 97,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
      className: "animation02",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
        className: "name",
        children: click ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("p", {
          onClick: enter,
          children: "+ SSAFY"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 127,
          columnNumber: 20
        }, this) : null
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 5
  }, this);
}

_s(Main, "YwSFydLcupDbOoj0fn2Gb/AcNZA=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter];
});

_c = Main;
/* harmony default export */ __webpack_exports__["default"] = (Main);

var _c;

$RefreshReg$(_c, "Main");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOTU4YjFmYmZhNGU1YzdiNDc4YjUuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBOzs7QUFJQSxTQUFTSyxVQUFULE9BQTZDO0FBQUE7O0FBQUE7O0FBQzNDLE1BQU1DLE1BQU0sR0FBR0Ysc0RBQVMsRUFBeEIsQ0FEMkMsQ0FFM0M7O0FBQ0Esa0JBQThCSCwrQ0FBUSxDQUFTLEVBQVQsQ0FBdEM7QUFBQSxNQUFPTSxPQUFQO0FBQUEsTUFBZ0JDLFVBQWhCOztBQUNBLG1CQUE4QlAsK0NBQVEsQ0FBUyxFQUFULENBQXRDO0FBQUEsTUFBT1EsT0FBUDtBQUFBLE1BQWdCQyxVQUFoQjs7QUFDQSxXQUFTQyxLQUFULEdBQWlCO0FBQ2ZSLElBQUFBLGlEQUFBLENBQ1EscUJBRFIsRUFDK0I7QUFDM0JVLE1BQUFBLFFBQVEsRUFBRU4sT0FEaUI7QUFFM0JPLE1BQUFBLFFBQVEsRUFBRUw7QUFGaUIsS0FEL0IsRUFLR00sSUFMSCxDQUtRLFVBQUNDLEdBQUQsRUFBUztBQUNiQyxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsR0FBWixFQURhLENBRWI7O0FBQ0FWLE1BQUFBLE1BQU0sQ0FBQ2EsSUFBUCxDQUFZLGFBQVo7QUFDRCxLQVRIO0FBVUQ7O0FBQ0Qsc0JBQ0U7QUFBSyxhQUFTLEVBQUMsd0VBQWY7QUFBQSwyQkFDRTtBQUFLLGVBQVMsRUFBQywyQkFBZjtBQUFBLDhCQUNFO0FBQUssaUJBQVMsRUFBQyxrQ0FBZjtBQUFBLGdDQUNFO0FBQUEsaUNBQ0U7QUFDRSxjQUFFLEVBQUMsT0FETDtBQUVFLGdCQUFJLEVBQUMsSUFGUDtBQUdFLGdCQUFJLEVBQUMsT0FIUDtBQUlFLG9CQUFRLE1BSlY7QUFLRSxxQkFBUyxFQUFDLHdOQUxaO0FBTUUsdUJBQVcsRUFBQyxlQU5kO0FBT0Usb0JBQVEsRUFBRSxrQkFBQ0MsQ0FBRDtBQUFBLHFCQUFPWixVQUFVLENBQUNZLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQWpCO0FBQUE7QUFQWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQVlFO0FBQUEsaUNBQ0U7QUFDRSxjQUFFLEVBQUMsVUFETDtBQUVFLGdCQUFJLEVBQUMsVUFGUDtBQUdFLGdCQUFJLEVBQUMsVUFIUDtBQUlFLHdCQUFZLEVBQUMsa0JBSmY7QUFLRSxvQkFBUSxNQUxWO0FBTUUscUJBQVMsRUFBQyx3TkFOWjtBQU9FLHVCQUFXLEVBQUMsVUFQZDtBQVFFLG9CQUFRLEVBQUUsa0JBQUNGLENBQUQ7QUFBQSxxQkFBT1YsVUFBVSxDQUFDVSxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUFqQjtBQUFBO0FBUlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBWkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUEwQkU7QUFBQSwrQkFDRTtBQUNFLGNBQUksRUFBQyxRQURQO0FBRUUsbUJBQVMsRUFBQywrTkFGWjtBQUdFLGlCQUFPLEVBQUVYLEtBSFg7QUFBQSxrQ0FLRTtBQUFNLHFCQUFTLEVBQUMsa0RBQWhCO0FBQUEsbUNBQ0UsOERBQUMsa0VBQUQ7QUFDRSx1QkFBUyxFQUFDLGlEQURaO0FBRUUsNkJBQVk7QUFGZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBMUJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQThDRDs7R0EvRFFOO1VBQ1FEOzs7S0FEUkM7QUFpRVQsK0RBQWVBLFVBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFLQSxTQUFTc0IsSUFBVCxPQUF1QztBQUFBOztBQUFBOztBQUNyQyxNQUFNckIsTUFBTSxHQUFHRixzREFBUyxFQUF4QjtBQUVBLE1BQU13QixlQUFlLEdBQUdKLDZDQUFNLENBQUMsSUFBRCxDQUE5Qjs7QUFDQSxrQkFBMEJ2QiwrQ0FBUSxDQUFVLEtBQVYsQ0FBbEM7QUFBQSxNQUFPNEIsS0FBUDtBQUFBLE1BQWNDLFFBQWQsZ0JBSnFDLENBS3JDOzs7QUFDQSxtQkFBd0M3QiwrQ0FBUSxDQUFDLEtBQUQsQ0FBaEQ7QUFBQSxNQUFPOEIsY0FBUDtBQUFBLE1BQXVCQyxhQUF2QixpQkFOcUMsQ0FPckM7OztBQUNBQyxFQUFBQSxVQUFVLENBQUMsWUFBTTtBQUNmSCxJQUFBQSxRQUFRLENBQUMsSUFBRCxDQUFSO0FBQ0QsR0FGUyxFQUVQLElBRk8sQ0FBVixDQVJxQyxDQVdyQzs7QUFDQSxXQUFTSSxLQUFULEdBQWlCO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0FGLElBQUFBLGFBQWEsQ0FBQyxJQUFELENBQWI7QUFDRCxHQXBCb0MsQ0FxQnJDOzs7QUFDQSxzQkFDRTtBQUFBLDRCQUNFO0FBQUssZUFBUyxFQUFDLDZCQUFmO0FBQUEsNkJBQ0U7QUFBSyxpQkFBUyxFQUFDLGVBQWY7QUFBQSwrQkFDRTtBQUFLLG1CQUFTLEVBQUMsU0FBZjtBQUFBLGtDQUNFO0FBQUsscUJBQVMsRUFBQyxZQUFmO0FBQUEsb0NBQ0U7QUFBTSx1QkFBUyxFQUFDO0FBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREYsZUFFRTtBQUFNLHVCQUFTLEVBQUM7QUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFGRixlQUdFO0FBQU0sdUJBQVMsRUFBQztBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUhGLGVBSUU7QUFBTSx1QkFBUyxFQUFDO0FBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBSkYsZUFLRTtBQUFNLHVCQUFTLEVBQUM7QUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFMRixlQU1FO0FBQU0sdUJBQVMsRUFBQztBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQU5GLGVBT0U7QUFBTSx1QkFBUyxFQUFDO0FBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBUEYsZUFRRTtBQUFNLHVCQUFTLEVBQUM7QUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFSRixlQVNFO0FBQU0sdUJBQVMsRUFBQztBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQVRGLGVBVUU7QUFBTSx1QkFBUyxFQUFDLGlEQUFoQjtBQUFBLHFDQUNFO0FBQU0seUJBQVMsRUFBQztBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFWRixlQWFFO0FBQU0sdUJBQVMsRUFBQztBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQWJGLGVBY0U7QUFBTSx1QkFBUyxFQUFDLGlEQUFoQjtBQUFBLHFDQUNFO0FBQU0seUJBQVMsRUFBQztBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFkRixlQWlCRTtBQUFNLHVCQUFTLEVBQUM7QUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFqQkYsZUFrQkU7QUFBTSx1QkFBUyxFQUFDLGlEQUFoQjtBQUFBLHFDQUNFO0FBQU0seUJBQVMsRUFBQztBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFsQkYsZUFxQkU7QUFBTSx1QkFBUyxFQUFDO0FBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBckJGLGVBc0JFO0FBQU0sdUJBQVMsRUFBQyxpREFBaEI7QUFBQSxxQ0FDRTtBQUFNLHlCQUFTLEVBQUM7QUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBdEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixlQTJCRTtBQUFLLHFCQUFTLEVBQUMsTUFBZjtBQUFBLG1DQUNFO0FBQUssdUJBQVMsRUFBQyxjQUFmO0FBQUEscUNBQ0U7QUFBSyx5QkFBUyxFQUFDO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQTNCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBc0NFLDhEQUFDLDhEQUFEO0FBQWlCLFVBQUksRUFBRUQsY0FBdkI7QUFBdUMsUUFBRSxFQUFFUiwyQ0FBM0M7QUFBQSw2QkFDRSw4REFBQyxxREFBRDtBQUNFLFVBQUUsRUFBQyxLQURMO0FBRUUsaUJBQVMsRUFBQyxvQ0FGWjtBQUdFLG9CQUFZLEVBQUVLLGVBSGhCO0FBSUUsZUFBTyxFQUFFSSxhQUpYO0FBQUEsK0JBTUU7QUFBSyxtQkFBUyxFQUFDLHdGQUFmO0FBQUEsa0NBQ0UsOERBQUMsK0RBQUQ7QUFDRSxjQUFFLEVBQUVULDJDQUROO0FBRUUsaUJBQUssRUFBQyx1QkFGUjtBQUdFLHFCQUFTLEVBQUMsV0FIWjtBQUlFLG1CQUFPLEVBQUMsYUFKVjtBQUtFLGlCQUFLLEVBQUMsc0JBTFI7QUFNRSxxQkFBUyxFQUFDLGFBTlo7QUFPRSxtQkFBTyxFQUFDLFdBUFY7QUFBQSxtQ0FTRSw4REFBQyw2REFBRDtBQUFnQix1QkFBUyxFQUFDO0FBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFURjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLGVBY0U7QUFDRSxxQkFBUyxFQUFDLG9EQURaO0FBRUUsMkJBQVksTUFGZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFkRixlQW9CRSw4REFBQywrREFBRDtBQUNFLGNBQUUsRUFBRUEsMkNBRE47QUFFRSxpQkFBSyxFQUFDLHVCQUZSO0FBR0UscUJBQVMsRUFBQyxzREFIWjtBQUlFLG1CQUFPLEVBQUMsd0NBSlY7QUFLRSxpQkFBSyxFQUFDLHNCQUxSO0FBTUUscUJBQVMsRUFBQyx3Q0FOWjtBQU9FLG1CQUFPLEVBQUMsc0RBUFY7QUFBQSxtQ0FTRTtBQUFLLHVCQUFTLEVBQUMsMEpBQWY7QUFBQSxzQ0FDRTtBQUFLLHlCQUFTLEVBQUMsMERBQWY7QUFBQSx1Q0FDRTtBQUNFLHNCQUFJLEVBQUMsUUFEUDtBQUVFLDJCQUFTLEVBQUMsMlFBRlo7QUFHRSx5QkFBTyxFQUFFO0FBQUEsMkJBQU1TLGFBQWEsQ0FBQyxLQUFELENBQW5CO0FBQUEsbUJBSFg7QUFJRSxxQkFBRyxFQUFFSixlQUpQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFERixlQVdFO0FBQUsseUJBQVMsRUFBQyx3Q0FBZjtBQUFBLHVDQUNFLDhEQUFDLGdFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQVhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVRGO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBcEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBdENGLGVBNkZFO0FBQUssZUFBUyxFQUFDLGFBQWY7QUFBQSw2QkFDRTtBQUFLLGlCQUFTLEVBQUMsTUFBZjtBQUFBLGtCQUNHQyxLQUFLLGdCQUFHO0FBQUcsaUJBQU8sRUFBRUssS0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFBSCxHQUFvQztBQUQ1QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQTdGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXFHRDs7R0EzSFFQO1VBQ1F2Qjs7O0tBRFJ1QjtBQTZIVCwrREFBZUEsSUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3VzZXIvTG9naW5Nb2RhbC50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUmVhY3RFbGVtZW50LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBMb2NrQ2xvc2VkSWNvbiB9IGZyb20gXCJAaGVyb2ljb25zL3JlYWN0L3NvbGlkXCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuaW50ZXJmYWNlIFByb3BzIHt9XHJcblxyXG5mdW5jdGlvbiBMb2dpbk1vZGFsKHt9OiBQcm9wcyk6IFJlYWN0RWxlbWVudCB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgLy8g66Gc6re47J24XHJcbiAgY29uc3QgW2xvZ2luaWQsIHNldGxvZ2luaWRdID0gdXNlU3RhdGU8c3RyaW5nPihcIlwiKTtcclxuICBjb25zdCBbbG9naW5wdywgc2V0bG9naW5wd10gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiXCIpO1xyXG4gIGZ1bmN0aW9uIGxvZ2luKCkge1xyXG4gICAgYXhpb3NcclxuICAgICAgLnBvc3QoXCIvYXBpL3Y0L3VzZXJzL2xvZ2luXCIsIHtcclxuICAgICAgICBsb2dpbl9pZDogbG9naW5pZCxcclxuICAgICAgICBwYXNzd29yZDogbG9naW5wdyxcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAgICAgLy8g66Gc6re47J247J20IOuQmOuptCDsoJXrs7Tsl5Ag65Sw65287IScIHJldHVybuywveydhCDri6TrpbTqsowg7ZW07KSY7JW87ZWg7YWQ642wIGJhY2tlbmTsl5Ag7KCA7J6l65CY64qU6rG466GcIOyekOuPmeycvOuhnFxyXG4gICAgICAgIHJvdXRlci5wdXNoKFwiL01hbmFnZU1haW5cIik7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtaW4taC1mdWxsIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHBiLTEwIHB4LTQgc206cHgtNiBsZzpweC04XCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctbWQgdy1mdWxsIHNwYWNlLXktOFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm91bmRlZC1tZCBzaGFkb3ctc20gLXNwYWNlLXktcHhcIj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIGlkPVwiTU0tSURcIlxyXG4gICAgICAgICAgICAgIG5hbWU9XCJpZFwiXHJcbiAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFwcGVhcmFuY2Utbm9uZSByb3VuZGVkLW5vbmUgcmVsYXRpdmUgYmxvY2sgdy1mdWxsIHB4LTMgcHktMiBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHBsYWNlaG9sZGVyLWdyYXktNTAwIHRleHQtZ3JheS05MDAgcm91bmRlZC10LW1kIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLWJsdWUtNTAwIGZvY3VzOmJvcmRlci1ibHVlLTUwMCBmb2N1czp6LTEwIHNtOnRleHQtc21cIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTWF0dGVyTW9zdCBJRFwiXHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRsb2dpbmlkKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIGlkPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJjdXJyZW50LXBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFwcGVhcmFuY2Utbm9uZSByb3VuZGVkLW5vbmUgcmVsYXRpdmUgYmxvY2sgdy1mdWxsIHB4LTMgcHktMiBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHBsYWNlaG9sZGVyLWdyYXktNTAwIHRleHQtZ3JheS05MDAgcm91bmRlZC1iLW1kIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLWJsdWUtNTAwIGZvY3VzOmJvcmRlci1ibHVlLTUwMCBmb2N1czp6LTEwIHNtOnRleHQtc21cIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0bG9naW5wdyhlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImdyb3VwIHJlbGF0aXZlIHctZnVsbCBmbGV4IGp1c3RpZnktY2VudGVyIHB5LTIgcHgtNCBib3JkZXIgYm9yZGVyLXRyYW5zcGFyZW50IHRleHQtc20gZm9udC1tZWRpdW0gcm91bmRlZC1tZCB0ZXh0LXdoaXRlIGJnLWJsdWUtNjAwIGhvdmVyOmJnLWJsdWUtNzAwIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1vZmZzZXQtMiBmb2N1czpyaW5nLWJsdWUtNTAwXCJcclxuICAgICAgICAgICAgb25DbGljaz17bG9naW59XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFic29sdXRlIGxlZnQtMCBpbnNldC15LTAgZmxleCBpdGVtcy1jZW50ZXIgcGwtM1wiPlxyXG4gICAgICAgICAgICAgIDxMb2NrQ2xvc2VkSWNvblxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC01IHctNSB0ZXh0LWJsdWUtNTAwIGdyb3VwLWhvdmVyOnRleHQtYmx1ZS00MDBcIlxyXG4gICAgICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIExvZ2luXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2dpbk1vZGFsO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgUmVhY3RFbGVtZW50LCB1c2VTdGF0ZSwgRnJhZ21lbnQsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IExvZ2luTW9kYWwgZnJvbSBcIi4uL2NvbXBvbmVudHMvdXNlci9Mb2dpbk1vZGFsXCI7XHJcbmltcG9ydCB7IERpYWxvZywgVHJhbnNpdGlvbiB9IGZyb20gXCJAaGVhZGxlc3N1aS9yZWFjdFwiO1xyXG5pbXBvcnQgeyBFeGNsYW1hdGlvbkljb24gfSBmcm9tIFwiQGhlcm9pY29ucy9yZWFjdC9vdXRsaW5lXCI7XHJcblxyXG5pbnRlcmZhY2UgUHJvcHMge31cclxuXHJcbmZ1bmN0aW9uIE1haW4oe306IFByb3BzKTogUmVhY3RFbGVtZW50IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgY29uc3QgY2FuY2VsQnV0dG9uUmVmID0gdXNlUmVmKG51bGwpO1xyXG4gIGNvbnN0IFtjbGljaywgc2V0Y2xpY2tdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG4gIC8vIOuhnOq3uOyduCDrqqjri6xcclxuICBjb25zdCBbc2hvd0xvZ2luTW9kYWwsIHNldExvZ2luTW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIC8vIOuhnOq3uOyduCDsg4Htg5wg7LK07YGsXHJcbiAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICBzZXRjbGljayh0cnVlKTtcclxuICB9LCAzMDAwKTtcclxuICAvLyArc3NhZnkg7YG066at7ZaI7J2E65WMIOyLpO2WiVxyXG4gIGZ1bmN0aW9uIGVudGVyKCkge1xyXG4gICAgLy8g66Gc6re47J2464+87J6I64qU7KeAIO2ZleyduCDthqDtgbDsnLzroZxcclxuICAgIC8vIOuhnOq3uOyduCDrkJjslrQg7J6I7Jy866m0XHJcbiAgICAvLyDthqDtgbDsl5Ag64u06ri0IOycoOyggCDtg4DsnoXsl5Ag65Sw6528IOuplOyduO2OmOydtOyngOuhnCDsnbTrj5lcclxuICAgIC8vIHJvdXRlci5wdXNoKCcvU3R1ZGVudE1haW4nKVxyXG4gICAgLy8gcm91dGVyLnB1c2goYC9NYW5hZ2VNYWluYClcclxuICAgIC8vIOyViOuPvOyeiOycvOuptCDroZzqt7jsnbgg66qo64usIOudhOyasOq4sFxyXG4gICAgc2V0TG9naW5Nb2RhbCh0cnVlKTtcclxuICB9XHJcbiAgLy9cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbmltYXRpb24wMSBvdmVyZmxvdy1oaWRkZW5cIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJob21idXNfc21hbGxcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmhvbWJ1c1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlcl9ib3hcIj5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsaW5lIGxpbmUwMVwiIC8+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibGluZSBsaW5lMDJcIiAvPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxpbmUgbGluZTAzXCIgLz5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsaW5lIGxpbmUwNFwiIC8+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY2lyY2xlIGNpcmNsZTAxXCIgLz5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjaXJjbGUgY2lyY2xlMDJcIiAvPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNpcmNsZSBjaXJjbGUwM1wiIC8+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY2lyY2xlIGNpcmNsZTA0XCIgLz5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhbmltYXRpb25fbGluZSBhbmltYXRpb25fbGluZTAxXCIgLz5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhbmltYXRpb25fbGluZV93cmFwcGVyIGFuaW1hdGlvbl9saW5lMDJfd3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYW5pbWF0aW9uX2xpbmUgYW5pbWF0aW9uX2xpbmUwMlwiIC8+XHJcbiAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFuaW1hdGlvbl9saW5lIGFuaW1hdGlvbl9saW5lMDNcIiAvPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFuaW1hdGlvbl9saW5lX3dyYXBwZXIgYW5pbWF0aW9uX2xpbmUwNF93cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhbmltYXRpb25fbGluZSBhbmltYXRpb25fbGluZTA0XCIgLz5cclxuICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYW5pbWF0aW9uX2xpbmUgYW5pbWF0aW9uX2xpbmUwNVwiIC8+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYW5pbWF0aW9uX2xpbmVfd3JhcHBlciBhbmltYXRpb25fbGluZTA2X3dyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFuaW1hdGlvbl9saW5lIGFuaW1hdGlvbl9saW5lMDZcIiAvPlxyXG4gICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhbmltYXRpb25fbGluZSBhbmltYXRpb25fbGluZTA3XCIgLz5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhbmltYXRpb25fbGluZV93cmFwcGVyIGFuaW1hdGlvbl9saW5lMDhfd3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYW5pbWF0aW9uX2xpbmUgYW5pbWF0aW9uX2xpbmUwOFwiIC8+XHJcbiAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3YXZlXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3YXZlX3dyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2F2ZV9ib3hcIiAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPFRyYW5zaXRpb24uUm9vdCBzaG93PXtzaG93TG9naW5Nb2RhbH0gYXM9e0ZyYWdtZW50fT5cclxuICAgICAgICA8RGlhbG9nXHJcbiAgICAgICAgICBhcz1cImRpdlwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJmaXhlZCB6LTEwIGluc2V0LTAgb3ZlcmZsb3cteS1hdXRvXCJcclxuICAgICAgICAgIGluaXRpYWxGb2N1cz17Y2FuY2VsQnV0dG9uUmVmfVxyXG4gICAgICAgICAgb25DbG9zZT17c2V0TG9naW5Nb2RhbH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtZW5kIGp1c3RpZnktY2VudGVyIG1pbi1oLXNjcmVlbiBwdC00IHB4LTQgcGItMjAgdGV4dC1jZW50ZXIgc206YmxvY2sgc206cC0wXCI+XHJcbiAgICAgICAgICAgIDxUcmFuc2l0aW9uLkNoaWxkXHJcbiAgICAgICAgICAgICAgYXM9e0ZyYWdtZW50fVxyXG4gICAgICAgICAgICAgIGVudGVyPVwiZWFzZS1vdXQgZHVyYXRpb24tMzAwXCJcclxuICAgICAgICAgICAgICBlbnRlckZyb209XCJvcGFjaXR5LTBcIlxyXG4gICAgICAgICAgICAgIGVudGVyVG89XCJvcGFjaXR5LTEwMFwiXHJcbiAgICAgICAgICAgICAgbGVhdmU9XCJlYXNlLWluIGR1cmF0aW9uLTIwMFwiXHJcbiAgICAgICAgICAgICAgbGVhdmVGcm9tPVwib3BhY2l0eS0xMDBcIlxyXG4gICAgICAgICAgICAgIGxlYXZlVG89XCJvcGFjaXR5LTBcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPERpYWxvZy5PdmVybGF5IGNsYXNzTmFtZT1cImZpeGVkIGluc2V0LTAgYmctZ3JheS01MDAgYmctb3BhY2l0eS03NSB0cmFuc2l0aW9uLW9wYWNpdHlcIiAvPlxyXG4gICAgICAgICAgICA8L1RyYW5zaXRpb24uQ2hpbGQ+XHJcblxyXG4gICAgICAgICAgICB7LyogVGhpcyBlbGVtZW50IGlzIHRvIHRyaWNrIHRoZSBicm93c2VyIGludG8gY2VudGVyaW5nIHRoZSBtb2RhbCBjb250ZW50cy4gKi99XHJcbiAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaGlkZGVuIHNtOmlubGluZS1ibG9jayBzbTphbGlnbi1taWRkbGUgc206aC1zY3JlZW5cIlxyXG4gICAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAmIzgyMDM7XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgPFRyYW5zaXRpb24uQ2hpbGRcclxuICAgICAgICAgICAgICBhcz17RnJhZ21lbnR9XHJcbiAgICAgICAgICAgICAgZW50ZXI9XCJlYXNlLW91dCBkdXJhdGlvbi0zMDBcIlxyXG4gICAgICAgICAgICAgIGVudGVyRnJvbT1cIm9wYWNpdHktMCB0cmFuc2xhdGUteS00IHNtOnRyYW5zbGF0ZS15LTAgc206c2NhbGUtOTVcIlxyXG4gICAgICAgICAgICAgIGVudGVyVG89XCJvcGFjaXR5LTEwMCB0cmFuc2xhdGUteS0wIHNtOnNjYWxlLTEwMFwiXHJcbiAgICAgICAgICAgICAgbGVhdmU9XCJlYXNlLWluIGR1cmF0aW9uLTIwMFwiXHJcbiAgICAgICAgICAgICAgbGVhdmVGcm9tPVwib3BhY2l0eS0xMDAgdHJhbnNsYXRlLXktMCBzbTpzY2FsZS0xMDBcIlxyXG4gICAgICAgICAgICAgIGxlYXZlVG89XCJvcGFjaXR5LTAgdHJhbnNsYXRlLXktNCBzbTp0cmFuc2xhdGUteS0wIHNtOnNjYWxlLTk1XCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrIGFsaWduLWJvdHRvbSBiZy13aGl0ZSByb3VuZGVkLWxnIHRleHQtbGVmdCBvdmVyZmxvdy1oaWRkZW4gc2hhZG93LXhsIHRyYW5zZm9ybSB0cmFuc2l0aW9uLWFsbCBzbTpteS04IHNtOmFsaWduLW1pZGRsZSBzbTptYXgtdy1sZyBzbTp3LWZ1bGxcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctZ3JheS01MCBweC00IHB5LTMgc206cHgtNiBzbTpmbGV4IHNtOmZsZXgtcm93LXJldmVyc2VcIj5cclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTMgdy1mdWxsIGlubGluZS1mbGV4IGp1c3RpZnktY2VudGVyIHJvdW5kZWQtbWQgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCBzaGFkb3ctc20gcHgtNCBweS0yIGJnLXdoaXRlIHRleHQtYmFzZSBmb250LW1lZGl1bSB0ZXh0LWdyYXktNzAwIGhvdmVyOmJnLWdyYXktNTAgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLW9mZnNldC0yIGZvY3VzOnJpbmctaW5kaWdvLTUwMCBzbTptdC0wIHNtOm1sLTMgc206dy1hdXRvIHNtOnRleHQtc21cIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldExvZ2luTW9kYWwoZmFsc2UpfVxyXG4gICAgICAgICAgICAgICAgICAgIHJlZj17Y2FuY2VsQnV0dG9uUmVmfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgWFxyXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSBweC00IHB0LTUgcGItNCBzbTpwLTYgc206cGItNFwiPlxyXG4gICAgICAgICAgICAgICAgICA8TG9naW5Nb2RhbCAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvVHJhbnNpdGlvbi5DaGlsZD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvRGlhbG9nPlxyXG4gICAgICA8L1RyYW5zaXRpb24uUm9vdD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbmltYXRpb24wMlwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmFtZVwiPlxyXG4gICAgICAgICAge2NsaWNrID8gPHAgb25DbGljaz17ZW50ZXJ9PisgU1NBRlk8L3A+IDogbnVsbH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYWluO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkxvY2tDbG9zZWRJY29uIiwiYXhpb3MiLCJ1c2VSb3V0ZXIiLCJMb2dpbk1vZGFsIiwicm91dGVyIiwibG9naW5pZCIsInNldGxvZ2luaWQiLCJsb2dpbnB3Iiwic2V0bG9naW5wdyIsImxvZ2luIiwicG9zdCIsImxvZ2luX2lkIiwicGFzc3dvcmQiLCJ0aGVuIiwicmVzIiwiY29uc29sZSIsImxvZyIsInB1c2giLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJGcmFnbWVudCIsInVzZVJlZiIsIkRpYWxvZyIsIlRyYW5zaXRpb24iLCJNYWluIiwiY2FuY2VsQnV0dG9uUmVmIiwiY2xpY2siLCJzZXRjbGljayIsInNob3dMb2dpbk1vZGFsIiwic2V0TG9naW5Nb2RhbCIsInNldFRpbWVvdXQiLCJlbnRlciJdLCJzb3VyY2VSb290IjoiIn0=