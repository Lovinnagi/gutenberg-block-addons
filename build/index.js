/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/edit.js":
/*!*********************!*\
  !*** ./src/edit.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _author_data_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./author-data.json */ "./src/author-data.json");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);





 // Import the author data

const Edit = props => {
  const {
    attributes,
    setAttributes
  } = props;
  const {
    selectedAuthor
  } = attributes;
  const authorOptions = _author_data_json__WEBPACK_IMPORTED_MODULE_4__.map(author => ({
    label: author.name,
    value: author.value
  }));
  const selectedAuthorData = _author_data_json__WEBPACK_IMPORTED_MODULE_4__.find(author => author.value === selectedAuthor);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.InspectorControls, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Author Settings", "gutenberg-block-addons"),
        initialOpen: true,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Select Author", "gutenberg-block-addons"),
          value: selectedAuthor,
          options: authorOptions.map(({
            label,
            value
          }) => ({
            label,
            value
          })),
          onChange: value => setAttributes({
            selectedAuthor: value
          })
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
      ...(0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps)(),
      children: selectedAuthorData ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "authorbox-main",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("p", {
          className: "verified",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 24 24",
              width: "18",
              height: "18",
              fill: "none",
              "aria-hidden": "true",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("circle", {
                cx: "12",
                cy: "12",
                r: "10",
                fill: "#ffffff"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("path", {
                fill: "#329d92",
                d: "M10 15.5l-3.5-3.5L6 13.5 10 17.5l8-8-1.5-1.5z"
              })]
            })
          }), "Expert Reviewed"]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "author-flex",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            className: "author-data",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
              className: "img-box",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("img", {
                src: selectedAuthorData.image,
                alt: selectedAuthorData.name
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              className: "adata",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
                className: "writtenby",
                children: "Written by"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h3", {
                className: "atitle",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("a", {
                  href: selectedAuthorData.profileLink,
                  children: selectedAuthorData.name
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
                className: "designation",
                children: selectedAuthorData.designation
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            className: "author-extra",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
              className: "extraimg",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("svg", {
                width: "59",
                height: "49",
                viewBox: "0 0 59 49",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("g", {
                  "clip-path": "url(#clip0_523:608)",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M51.3048 20.6313L31.9425 46.4208H24.4931L5.13086 20.6313H13.6012L28.3102 42.2429L43.486 20.6313H51.3048Z",
                    fill: "#CCCCCC"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M38.4449 4.17816C34.8742 8.35606 32.1473 8.68358 32.1473 8.68358L31.9524 15.278C37.2111 17.238 40.7844 13.0601 40.7844 13.0601C43.9653 15.149 47.4078 11.1001 47.4078 11.1001C49.4856 12.2735 51.3044 10.0556 51.3044 10.0556C55.3318 12.0156 58.4485 8.68358 58.4485 8.68358C41.4334 4.50569 42.0183 0.000267833 38.4449 4.17816ZM26.627 15.345L26.432 8.74806C26.432 8.74806 23.7693 8.42311 20.1319 4.24522C16.5611 0.0673205 17.1459 4.57016 0.130859 8.74806C0.130859 8.74806 3.2476 12.0801 7.27242 10.1201C7.27242 10.1201 9.02703 12.405 11.1716 11.1645C11.1716 11.1645 14.6115 15.2135 17.7949 13.189C17.7949 13.1245 21.3657 17.238 26.627 15.3424V15.345ZM29.8746 39.827L30.0028 38.259C29.5488 38.13 29.0947 38.063 28.6407 37.934L28.7689 40.5465C29.0947 40.2834 29.4846 40.023 29.872 39.827H29.8746Z",
                    fill: "#9C9C9C"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M30.9101 7.57437C31.6073 7.27203 32.2009 6.77032 32.6168 6.13159C33.0327 5.49287 33.2528 4.74532 33.2495 3.98189C33.2495 1.764 31.4949 0 29.2888 0C28.2392 0.00339619 27.2335 0.423925 26.491 1.16987C25.7486 1.91581 25.3296 2.92664 25.3256 3.98189C25.3256 5.54989 26.3004 6.92189 27.665 7.57437L28.2499 26.313C28.8989 26.117 29.612 25.9855 30.3277 25.8539L30.456 20.8921V20.6961C30.456 20.5671 30.5227 20.5001 30.5227 20.3711L30.9126 7.57437H30.9101ZM30.0687 34.6043L30.1969 30.4264C29.6787 30.4909 29.158 30.6198 28.704 30.6843C28.5757 30.6843 28.509 30.7514 28.3782 30.7514L28.5064 34.1478C29.0272 34.2768 29.5479 34.4728 30.0687 34.6043V34.6043ZM22.2088 28.5309C22.2755 28.4664 22.3371 28.4664 22.3371 28.4019H22.4038C22.5987 28.2059 22.7937 28.0744 22.7937 28.0744C23.1836 27.8139 23.5094 27.6824 23.8326 27.5535C23.9609 27.4864 24.0917 27.4864 24.2225 27.4219C24.5483 27.293 24.8074 27.2259 25.069 27.1615C25.1973 27.0944 25.3256 27.0944 25.4564 27.0299C25.9771 26.901 26.4953 26.7695 26.9494 26.6379C26.6928 26.5735 26.4953 26.5735 26.2362 26.509L24.2867 26.117C23.9634 26.0499 23.7044 25.9855 23.3786 25.921L22.9245 25.7895L22.5987 25.6605C21.7548 25.333 21.3007 24.8765 21.1699 24.4175C21.0417 23.961 21.1699 23.4375 21.3649 23.1125C21.8189 22.3956 22.3397 22.1996 22.3397 22.1996C22.7296 22.785 23.3144 23.1125 23.9634 23.1125C24.5483 23.1125 25.0665 22.8521 25.4564 22.3956C25.8463 21.9365 27.016 21.3485 27.016 20.6961C27.016 20.1081 25.913 19.5871 25.5872 19.1951C25.4366 18.9129 25.211 18.6782 24.9357 18.517C24.6604 18.3559 24.3461 18.2746 24.0276 18.2822C23.7416 18.2837 23.4594 18.3488 23.2013 18.4728C22.9433 18.5967 22.7156 18.7764 22.5346 18.9991H22.2755C21.8189 19.0636 21.3649 19.1281 20.9108 19.3911C20.9108 19.3911 20.585 19.5201 20.1951 19.9146C19.7411 20.2396 19.2204 20.8276 18.7663 21.7405C18.3123 22.6561 18.0532 23.961 18.5098 25.3975C18.7663 26.117 19.2229 26.7695 19.8078 27.2904C19.936 27.4194 20.131 27.5535 20.2618 27.6824C20.3901 27.8114 20.585 27.8784 20.78 27.9429C21.1058 28.1389 21.4957 28.2704 21.8189 28.4019C21.9497 28.4664 22.0806 28.4664 22.2088 28.5309V28.5309Z",
                    fill: "#9C9C9C"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M38.4441 19.9142C38.0542 19.5222 37.731 19.4552 37.731 19.3907C37.2769 19.1302 36.7562 19.0632 36.3663 18.9987H36.1072C35.9262 18.776 35.6985 18.5963 35.4404 18.4724C35.1824 18.3484 34.9002 18.2833 34.6142 18.2817C33.9652 18.2817 33.3136 18.6737 32.9237 19.1947C32.6672 19.5867 31.4949 20.1076 31.4949 20.6956C31.4949 21.3481 32.7288 22.0032 33.0546 22.3952C33.2355 22.6178 33.4632 22.7975 33.7213 22.9215C33.9794 23.0454 34.2615 23.1105 34.5475 23.1121C35.1991 23.1121 35.7814 22.7201 36.1713 22.1992C36.1713 22.1992 36.692 22.3952 37.1461 23.1121C37.341 23.5041 37.4719 23.9632 37.341 24.4171C37.2128 24.8761 36.8203 25.3326 35.9122 25.6575L35.5864 25.7891L35.1324 25.918C34.8092 25.9851 34.5475 26.0495 34.2243 26.1166L32.2747 26.506C31.9515 26.5731 31.6899 26.6375 31.3666 26.702C31.1076 26.7691 30.8459 26.7691 30.651 26.8335H30.5868C29.9378 26.9625 29.353 27.094 28.704 27.2255C28.4949 27.2996 28.2763 27.343 28.055 27.3545C27.2751 27.5531 26.5594 27.682 25.7822 27.9425C25.3923 28.074 25.0023 28.1385 24.6124 28.3345C24.1584 28.5305 23.7659 28.662 23.3144 28.9225C23.0528 29.0514 22.4679 29.5105 22.1447 29.9669C21.7981 30.425 21.5746 30.9649 21.4957 31.5349C21.3007 32.7109 21.8189 33.7528 22.4705 34.5368C23.1223 35.3094 24.0144 35.8382 25.0023 36.0378L27.3393 36.6284C27.4675 36.6284 27.5342 36.6928 27.665 36.6928C28.8348 36.9533 29.9378 37.2138 31.0409 37.4768L31.8207 37.6728C31.8848 37.6728 32.2106 37.8018 32.2747 37.8688C32.3414 37.9333 32.4697 37.9978 32.5364 38.0623C32.6646 38.1938 32.7929 38.3898 32.7929 38.5858C32.8596 38.9778 32.5364 39.4987 32.1465 39.7618C31.5616 40.0867 31.0434 40.4143 30.456 40.7418C29.8737 41.0667 29.353 41.3943 28.8348 41.7218L28.4449 41.9797H28.3782L28.314 42.0467L28.2499 42.1112H27.9241C27.7959 42.2402 27.7292 42.2402 27.5983 42.3717C27.4701 42.5032 27.406 42.6347 27.2751 42.8307C27.1518 42.9584 27.0626 43.1155 27.016 43.2872C26.9429 43.4292 26.8984 43.5843 26.8852 43.7437C26.8852 44.0712 26.8211 44.3962 26.8852 44.6566C27.0135 45.5077 27.5342 46.0931 28.055 46.4877C28.2499 46.6166 28.4449 46.7456 28.704 46.8126C29.353 47.0731 29.807 47.2691 30.0686 47.4651C30.2836 47.5883 30.4797 47.742 30.651 47.9216C30.7176 47.9886 30.8459 47.9886 30.9126 47.9886C30.9767 47.9886 31.0409 47.9886 31.1076 47.9216C31.2358 47.7926 31.1717 47.5296 30.9767 47.3336C30.9767 47.3336 30.8485 47.1376 30.5227 46.9442C30.456 46.9442 30.456 46.8771 30.3944 46.8771C30.0686 46.6166 29.612 46.4206 29.0272 46.0931C28.509 45.8352 27.86 45.3117 27.7959 44.5277V44.1357C27.86 43.4832 28.4449 42.9597 29.2888 42.5032C29.807 42.2427 30.2636 41.9152 30.8459 41.6522C30.8459 41.6522 30.9126 41.6522 30.9126 41.5903C31.1691 41.4587 31.4949 41.2627 31.7566 41.1312C32.0798 40.9352 32.3414 40.8733 32.7313 40.6103C33.4445 40.1538 34.0935 39.3698 34.0293 38.2583C34.0073 37.7127 33.7745 37.1974 33.3803 36.8218C33.1907 36.6333 32.9703 36.4789 32.7288 36.3653C32.4723 36.2364 32.4056 36.1693 32.1465 36.1048C31.7566 35.9759 31.3 35.9088 30.9126 35.7773C29.8737 35.4524 28.7681 35.1248 27.665 34.7973C27.5983 34.7973 27.5983 34.7973 27.5368 34.7328C26.8185 34.5368 26.1054 34.2764 25.3923 34.1474C24.9382 34.0159 24.7433 33.9514 24.5457 33.7554C24.2892 33.6239 24.0917 33.3634 23.8967 33.1674C23.7216 32.9621 23.5908 32.7224 23.5126 32.4636C23.4345 32.2048 23.4106 31.9325 23.4427 31.6639C23.4999 31.444 23.612 31.2425 23.7685 31.0785C23.8326 31.0114 23.8967 30.8825 24.0276 30.8825C24.1469 30.7799 24.2778 30.6916 24.4175 30.6194C24.6124 30.4905 25.0023 30.4234 25.264 30.2945C25.5872 30.1655 25.9771 30.0985 26.3003 30.034C27.016 29.838 27.7933 29.7065 28.5064 29.5749C29.9378 29.3171 31.3666 29.1185 32.7288 28.9225C33.4445 28.7935 34.0935 28.7265 34.7425 28.662C35.0683 28.5975 35.3915 28.5331 35.7173 28.5331L36.1713 28.466C36.433 28.4015 36.5612 28.3371 36.7562 28.3371C37.1461 28.2055 37.4719 28.1385 37.7951 27.878C37.99 27.8135 38.1209 27.682 38.3158 27.6175C38.4441 27.4886 38.639 27.3571 38.7699 27.2255C39.4189 26.702 39.8088 26.0495 40.0679 25.3326C40.4598 24.1264 40.3668 22.8138 39.8088 21.6756C39.4875 20.9952 39.0217 20.3939 38.4441 19.9142V19.9142Z",
                    fill: "#9C9C9C"
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("defs", {
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("clipPath", {
                    id: "clip0_523:608",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("rect", {
                      width: "59",
                      height: "49",
                      fill: "white"
                    })
                  })
                })]
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              className: "extra-content",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
                children: "The information is current and up-to-date in accordance with the latest veterinarian research."
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("a", {
                href: "#",
                children: "Learn more"
              })]
            })]
          })]
        })]
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h4", {
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("No Author Selected", "gutenberg-block-addons")
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Please select an author from the settings panel.", "gutenberg-block-addons")
        })]
      })
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Edit);

/***/ }),

/***/ "./src/save.js":
/*!*********************!*\
  !*** ./src/save.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ save)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _author_data_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./author-data.json */ "./src/author-data.json");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



function save({
  attributes
}) {
  const {
    selectedAuthor
  } = attributes;
  if (!selectedAuthor) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      ..._wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps.save(),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h4", {
        children: __("No Author Selected", "gutenberg-block-addons")
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
        children: __("Please select an author from the settings panel.", "gutenberg-block-addons")
      })]
    });
  }
  const selectedAuthorData = _author_data_json__WEBPACK_IMPORTED_MODULE_1__.find(author => author.value === selectedAuthor);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    ..._wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps.save(),
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "authorbox-main",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("p", {
        className: "verified",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            width: "18",
            height: "18",
            fill: "none",
            "aria-hidden": "true",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("circle", {
              cx: "12",
              cy: "12",
              r: "10",
              fill: "#ffffff"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("path", {
              fill: "#329d92",
              d: "M10 15.5l-3.5-3.5L6 13.5 10 17.5l8-8-1.5-1.5z"
            })]
          })
        }), "Expert Reviewed"]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "author-flex",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: "author-data",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            className: "img-box",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img", {
              src: selectedAuthorData.image,
              alt: selectedAuthorData.name
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "adata",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
              className: "writtenby",
              children: "Written by"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h3", {
              className: "atitle",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
                href: selectedAuthorData.profileLink,
                children: selectedAuthorData.name
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
              className: "designation",
              children: selectedAuthorData.designation
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: "author-extra",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            className: "extraimg",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("svg", {
              width: "59",
              height: "49",
              viewBox: "0 0 59 49",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("g", {
                "clip-path": "url(#clip0_523:608)",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("path", {
                  "fill-rule": "evenodd",
                  "clip-rule": "evenodd",
                  d: "M51.3048 20.6313L31.9425 46.4208H24.4931L5.13086 20.6313H13.6012L28.3102 42.2429L43.486 20.6313H51.3048Z",
                  fill: "#CCCCCC"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("path", {
                  "fill-rule": "evenodd",
                  "clip-rule": "evenodd",
                  d: "M38.4449 4.17816C34.8742 8.35606 32.1473 8.68358 32.1473 8.68358L31.9524 15.278C37.2111 17.238 40.7844 13.0601 40.7844 13.0601C43.9653 15.149 47.4078 11.1001 47.4078 11.1001C49.4856 12.2735 51.3044 10.0556 51.3044 10.0556C55.3318 12.0156 58.4485 8.68358 58.4485 8.68358C41.4334 4.50569 42.0183 0.000267833 38.4449 4.17816ZM26.627 15.345L26.432 8.74806C26.432 8.74806 23.7693 8.42311 20.1319 4.24522C16.5611 0.0673205 17.1459 4.57016 0.130859 8.74806C0.130859 8.74806 3.2476 12.0801 7.27242 10.1201C7.27242 10.1201 9.02703 12.405 11.1716 11.1645C11.1716 11.1645 14.6115 15.2135 17.7949 13.189C17.7949 13.1245 21.3657 17.238 26.627 15.3424V15.345ZM29.8746 39.827L30.0028 38.259C29.5488 38.13 29.0947 38.063 28.6407 37.934L28.7689 40.5465C29.0947 40.2834 29.4846 40.023 29.872 39.827H29.8746Z",
                  fill: "#9C9C9C"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("path", {
                  "fill-rule": "evenodd",
                  "clip-rule": "evenodd",
                  d: "M30.9101 7.57437C31.6073 7.27203 32.2009 6.77032 32.6168 6.13159C33.0327 5.49287 33.2528 4.74532 33.2495 3.98189C33.2495 1.764 31.4949 0 29.2888 0C28.2392 0.00339619 27.2335 0.423925 26.491 1.16987C25.7486 1.91581 25.3296 2.92664 25.3256 3.98189C25.3256 5.54989 26.3004 6.92189 27.665 7.57437L28.2499 26.313C28.8989 26.117 29.612 25.9855 30.3277 25.8539L30.456 20.8921V20.6961C30.456 20.5671 30.5227 20.5001 30.5227 20.3711L30.9126 7.57437H30.9101ZM30.0687 34.6043L30.1969 30.4264C29.6787 30.4909 29.158 30.6198 28.704 30.6843C28.5757 30.6843 28.509 30.7514 28.3782 30.7514L28.5064 34.1478C29.0272 34.2768 29.5479 34.4728 30.0687 34.6043V34.6043ZM22.2088 28.5309C22.2755 28.4664 22.3371 28.4664 22.3371 28.4019H22.4038C22.5987 28.2059 22.7937 28.0744 22.7937 28.0744C23.1836 27.8139 23.5094 27.6824 23.8326 27.5535C23.9609 27.4864 24.0917 27.4864 24.2225 27.4219C24.5483 27.293 24.8074 27.2259 25.069 27.1615C25.1973 27.0944 25.3256 27.0944 25.4564 27.0299C25.9771 26.901 26.4953 26.7695 26.9494 26.6379C26.6928 26.5735 26.4953 26.5735 26.2362 26.509L24.2867 26.117C23.9634 26.0499 23.7044 25.9855 23.3786 25.921L22.9245 25.7895L22.5987 25.6605C21.7548 25.333 21.3007 24.8765 21.1699 24.4175C21.0417 23.961 21.1699 23.4375 21.3649 23.1125C21.8189 22.3956 22.3397 22.1996 22.3397 22.1996C22.7296 22.785 23.3144 23.1125 23.9634 23.1125C24.5483 23.1125 25.0665 22.8521 25.4564 22.3956C25.8463 21.9365 27.016 21.3485 27.016 20.6961C27.016 20.1081 25.913 19.5871 25.5872 19.1951C25.4366 18.9129 25.211 18.6782 24.9357 18.517C24.6604 18.3559 24.3461 18.2746 24.0276 18.2822C23.7416 18.2837 23.4594 18.3488 23.2013 18.4728C22.9433 18.5967 22.7156 18.7764 22.5346 18.9991H22.2755C21.8189 19.0636 21.3649 19.1281 20.9108 19.3911C20.9108 19.3911 20.585 19.5201 20.1951 19.9146C19.7411 20.2396 19.2204 20.8276 18.7663 21.7405C18.3123 22.6561 18.0532 23.961 18.5098 25.3975C18.7663 26.117 19.2229 26.7695 19.8078 27.2904C19.936 27.4194 20.131 27.5535 20.2618 27.6824C20.3901 27.8114 20.585 27.8784 20.78 27.9429C21.1058 28.1389 21.4957 28.2704 21.8189 28.4019C21.9497 28.4664 22.0806 28.4664 22.2088 28.5309V28.5309Z",
                  fill: "#9C9C9C"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("path", {
                  "fill-rule": "evenodd",
                  "clip-rule": "evenodd",
                  d: "M38.4441 19.9142C38.0542 19.5222 37.731 19.4552 37.731 19.3907C37.2769 19.1302 36.7562 19.0632 36.3663 18.9987H36.1072C35.9262 18.776 35.6985 18.5963 35.4404 18.4724C35.1824 18.3484 34.9002 18.2833 34.6142 18.2817C33.9652 18.2817 33.3136 18.6737 32.9237 19.1947C32.6672 19.5867 31.4949 20.1076 31.4949 20.6956C31.4949 21.3481 32.7288 22.0032 33.0546 22.3952C33.2355 22.6178 33.4632 22.7975 33.7213 22.9215C33.9794 23.0454 34.2615 23.1105 34.5475 23.1121C35.1991 23.1121 35.7814 22.7201 36.1713 22.1992C36.1713 22.1992 36.692 22.3952 37.1461 23.1121C37.341 23.5041 37.4719 23.9632 37.341 24.4171C37.2128 24.8761 36.8203 25.3326 35.9122 25.6575L35.5864 25.7891L35.1324 25.918C34.8092 25.9851 34.5475 26.0495 34.2243 26.1166L32.2747 26.506C31.9515 26.5731 31.6899 26.6375 31.3666 26.702C31.1076 26.7691 30.8459 26.7691 30.651 26.8335H30.5868C29.9378 26.9625 29.353 27.094 28.704 27.2255C28.4949 27.2996 28.2763 27.343 28.055 27.3545C27.2751 27.5531 26.5594 27.682 25.7822 27.9425C25.3923 28.074 25.0023 28.1385 24.6124 28.3345C24.1584 28.5305 23.7659 28.662 23.3144 28.9225C23.0528 29.0514 22.4679 29.5105 22.1447 29.9669C21.7981 30.425 21.5746 30.9649 21.4957 31.5349C21.3007 32.7109 21.8189 33.7528 22.4705 34.5368C23.1223 35.3094 24.0144 35.8382 25.0023 36.0378L27.3393 36.6284C27.4675 36.6284 27.5342 36.6928 27.665 36.6928C28.8348 36.9533 29.9378 37.2138 31.0409 37.4768L31.8207 37.6728C31.8848 37.6728 32.2106 37.8018 32.2747 37.8688C32.3414 37.9333 32.4697 37.9978 32.5364 38.0623C32.6646 38.1938 32.7929 38.3898 32.7929 38.5858C32.8596 38.9778 32.5364 39.4987 32.1465 39.7618C31.5616 40.0867 31.0434 40.4143 30.456 40.7418C29.8737 41.0667 29.353 41.3943 28.8348 41.7218L28.4449 41.9797H28.3782L28.314 42.0467L28.2499 42.1112H27.9241C27.7959 42.2402 27.7292 42.2402 27.5983 42.3717C27.4701 42.5032 27.406 42.6347 27.2751 42.8307C27.1518 42.9584 27.0626 43.1155 27.016 43.2872C26.9429 43.4292 26.8984 43.5843 26.8852 43.7437C26.8852 44.0712 26.8211 44.3962 26.8852 44.6566C27.0135 45.5077 27.5342 46.0931 28.055 46.4877C28.2499 46.6166 28.4449 46.7456 28.704 46.8126C29.353 47.0731 29.807 47.2691 30.0686 47.4651C30.2836 47.5883 30.4797 47.742 30.651 47.9216C30.7176 47.9886 30.8459 47.9886 30.9126 47.9886C30.9767 47.9886 31.0409 47.9886 31.1076 47.9216C31.2358 47.7926 31.1717 47.5296 30.9767 47.3336C30.9767 47.3336 30.8485 47.1376 30.5227 46.9442C30.456 46.9442 30.456 46.8771 30.3944 46.8771C30.0686 46.6166 29.612 46.4206 29.0272 46.0931C28.509 45.8352 27.86 45.3117 27.7959 44.5277V44.1357C27.86 43.4832 28.4449 42.9597 29.2888 42.5032C29.807 42.2427 30.2636 41.9152 30.8459 41.6522C30.8459 41.6522 30.9126 41.6522 30.9126 41.5903C31.1691 41.4587 31.4949 41.2627 31.7566 41.1312C32.0798 40.9352 32.3414 40.8733 32.7313 40.6103C33.4445 40.1538 34.0935 39.3698 34.0293 38.2583C34.0073 37.7127 33.7745 37.1974 33.3803 36.8218C33.1907 36.6333 32.9703 36.4789 32.7288 36.3653C32.4723 36.2364 32.4056 36.1693 32.1465 36.1048C31.7566 35.9759 31.3 35.9088 30.9126 35.7773C29.8737 35.4524 28.7681 35.1248 27.665 34.7973C27.5983 34.7973 27.5983 34.7973 27.5368 34.7328C26.8185 34.5368 26.1054 34.2764 25.3923 34.1474C24.9382 34.0159 24.7433 33.9514 24.5457 33.7554C24.2892 33.6239 24.0917 33.3634 23.8967 33.1674C23.7216 32.9621 23.5908 32.7224 23.5126 32.4636C23.4345 32.2048 23.4106 31.9325 23.4427 31.6639C23.4999 31.444 23.612 31.2425 23.7685 31.0785C23.8326 31.0114 23.8967 30.8825 24.0276 30.8825C24.1469 30.7799 24.2778 30.6916 24.4175 30.6194C24.6124 30.4905 25.0023 30.4234 25.264 30.2945C25.5872 30.1655 25.9771 30.0985 26.3003 30.034C27.016 29.838 27.7933 29.7065 28.5064 29.5749C29.9378 29.3171 31.3666 29.1185 32.7288 28.9225C33.4445 28.7935 34.0935 28.7265 34.7425 28.662C35.0683 28.5975 35.3915 28.5331 35.7173 28.5331L36.1713 28.466C36.433 28.4015 36.5612 28.3371 36.7562 28.3371C37.1461 28.2055 37.4719 28.1385 37.7951 27.878C37.99 27.8135 38.1209 27.682 38.3158 27.6175C38.4441 27.4886 38.639 27.3571 38.7699 27.2255C39.4189 26.702 39.8088 26.0495 40.0679 25.3326C40.4598 24.1264 40.3668 22.8138 39.8088 21.6756C39.4875 20.9952 39.0217 20.3939 38.4441 19.9142V19.9142Z",
                  fill: "#9C9C9C"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("defs", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("clipPath", {
                  id: "clip0_523:608",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("rect", {
                    width: "59",
                    height: "49",
                    fill: "white"
                  })
                })
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "extra-content",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
              children: "The information is current and up-to-date in accordance with the latest veterinarian research."
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
              href: "#",
              children: "Learn more"
            })]
          })]
        })]
      })]
    })
  });
}

/***/ }),

/***/ "./src/assets/css/index.css":
/*!**********************************!*\
  !*** ./src/assets/css/index.css ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "react/jsx-runtime":
/*!**********************************!*\
  !*** external "ReactJSXRuntime" ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["ReactJSXRuntime"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/hooks":
/*!*******************************!*\
  !*** external ["wp","hooks"] ***!
  \*******************************/
/***/ ((module) => {

module.exports = window["wp"]["hooks"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "./src/author-data.json":
/*!******************************!*\
  !*** ./src/author-data.json ***!
  \******************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('[{"value":"0","name":"Tamsin De La Harpe","designation":"DVM","image":"https://blog-pawsafe.b-cdn.net/wp-content/uploads/cropped-author-tamsin-96x96.jpg","profileLink":"https://example.com/author1-profile"},{"value":"1","name":"Lorem Author","designation":"Veterinary Expert","image":"https://w7.pngwing.com/pngs/205/731/png-transparent-default-avatar-thumbnail.png","profileLink":"https://example.com/author2-profile"},{"value":"2","name":"Lorem Author 1","designation":"Veterinary Expert","image":"https://w7.pngwing.com/pngs/205/731/png-transparent-default-avatar-thumbnail.png","profileLink":"https://example.com/author3-profile"}]');

/***/ }),

/***/ "./src/block.json":
/*!************************!*\
  !*** ./src/block.json ***!
  \************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"create-block/author-box","version":"0.1.0","title":"Author Box","category":"custom-addons","description":"Display Author data","example":{},"attributes":{"selectedAuthor":{"type":"string","default":"0"}},"supports":{"color":{"background":false,"text":true},"html":false,"typography":{"fontSize":true}},"textdomain":"gutenberg-block-addons","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./index.css","render":"file:./render.php"}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_css_index_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/css/index.css */ "./src/assets/css/index.css");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit */ "./src/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./save */ "./src/save.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./block.json */ "./src/block.json");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);
/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */





/**
 * Internal dependencies
 */




const userIcon = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  "aria-hidden": "true",
  focusable: "false",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("path", {
    d: "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-3.31 0-6 2.69-6 6v2h12v-2c0-3.31-2.69-6-6-6z"
  })
});
wp.domReady(() => {
  const customCategoryExists = wp.blocks.getCategories().some(category => category.slug === "custom-addons");
  if (!customCategoryExists) {
    wp.blocks.setCategories([...wp.blocks.getCategories(), {
      slug: "custom-addons",
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Gutenberg Block Addons", "gutenberg-block-addons")
    }]);
  }
});
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_6__.name, {
  icon: userIcon,
  category: "custom-addons",
  edit: _edit__WEBPACK_IMPORTED_MODULE_4__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_5__["default"]
});
})();

/******/ })()
;
//# sourceMappingURL=index.js.map