var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
  get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
}) : x)(function(x) {
  if (typeof require !== "undefined") return require.apply(this, arguments);
  throw Error('Dynamic require of "' + x + '" is not supported');
});
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var __commonJS = (cb, mod) => function __require2() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// node_modules/@swc/helpers/cjs/_interop_require_default.cjs
var require_interop_require_default = __commonJS({
  "node_modules/@swc/helpers/cjs/_interop_require_default.cjs"(exports) {
    "use strict";
    function _interop_require_default(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    exports._ = _interop_require_default;
  }
});

// node_modules/next/dist/shared/lib/utils/warn-once.js
var require_warn_once = __commonJS({
  "node_modules/next/dist/shared/lib/utils/warn-once.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "warnOnce", {
      enumerable: true,
      get: function() {
        return warnOnce;
      }
    });
    var warnOnce = (_) => {
    };
    if (process.env.NODE_ENV !== "production") {
      const warnings = /* @__PURE__ */ new Set();
      warnOnce = (msg) => {
        if (!warnings.has(msg)) {
          console.warn(msg);
        }
        warnings.add(msg);
      };
    }
  }
});

// node_modules/next/dist/shared/lib/image-blur-svg.js
var require_image_blur_svg = __commonJS({
  "node_modules/next/dist/shared/lib/image-blur-svg.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "getImageBlurSvg", {
      enumerable: true,
      get: function() {
        return getImageBlurSvg;
      }
    });
    function getImageBlurSvg(param) {
      let { widthInt, heightInt, blurWidth, blurHeight, blurDataURL, objectFit } = param;
      const std = 20;
      const svgWidth = blurWidth ? blurWidth * 40 : widthInt;
      const svgHeight = blurHeight ? blurHeight * 40 : heightInt;
      const viewBox = svgWidth && svgHeight ? "viewBox='0 0 " + svgWidth + " " + svgHeight + "'" : "";
      const preserveAspectRatio = viewBox ? "none" : objectFit === "contain" ? "xMidYMid" : objectFit === "cover" ? "xMidYMid slice" : "none";
      return "%3Csvg xmlns='http://www.w3.org/2000/svg' " + viewBox + "%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='" + std + "'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='" + std + "'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='" + preserveAspectRatio + "' style='filter: url(%23b);' href='" + blurDataURL + "'/%3E%3C/svg%3E";
    }
  }
});

// node_modules/next/dist/shared/lib/image-config.js
var require_image_config = __commonJS({
  "node_modules/next/dist/shared/lib/image-config.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all) Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
    }
    _export(exports, {
      VALID_LOADERS: function() {
        return VALID_LOADERS;
      },
      imageConfigDefault: function() {
        return imageConfigDefault;
      }
    });
    var VALID_LOADERS = [
      "default",
      "imgix",
      "cloudinary",
      "akamai",
      "custom"
    ];
    var imageConfigDefault = {
      deviceSizes: [
        640,
        750,
        828,
        1080,
        1200,
        1920,
        2048,
        3840
      ],
      imageSizes: [
        16,
        32,
        48,
        64,
        96,
        128,
        256,
        384
      ],
      path: "/_next/image",
      loader: "default",
      loaderFile: "",
      domains: [],
      disableStaticImages: false,
      minimumCacheTTL: 60,
      formats: [
        "image/webp"
      ],
      dangerouslyAllowSVG: false,
      contentSecurityPolicy: "script-src 'none'; frame-src 'none'; sandbox;",
      contentDispositionType: "attachment",
      localPatterns: void 0,
      remotePatterns: [],
      qualities: void 0,
      unoptimized: false
    };
  }
});

// node_modules/next/dist/shared/lib/get-img-props.js
var require_get_img_props = __commonJS({
  "node_modules/next/dist/shared/lib/get-img-props.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "getImgProps", {
      enumerable: true,
      get: function() {
        return getImgProps;
      }
    });
    var _warnonce = require_warn_once();
    var _imageblursvg = require_image_blur_svg();
    var _imageconfig = require_image_config();
    var VALID_LOADING_VALUES = [
      "lazy",
      "eager",
      void 0
    ];
    var INVALID_BACKGROUND_SIZE_VALUES = [
      "-moz-initial",
      "fill",
      "none",
      "scale-down",
      void 0
    ];
    function isStaticRequire(src) {
      return src.default !== void 0;
    }
    function isStaticImageData(src) {
      return src.src !== void 0;
    }
    function isStaticImport(src) {
      return !!src && typeof src === "object" && (isStaticRequire(src) || isStaticImageData(src));
    }
    var allImgs = /* @__PURE__ */ new Map();
    var perfObserver;
    function getInt(x) {
      if (typeof x === "undefined") {
        return x;
      }
      if (typeof x === "number") {
        return Number.isFinite(x) ? x : NaN;
      }
      if (typeof x === "string" && /^[0-9]+$/.test(x)) {
        return parseInt(x, 10);
      }
      return NaN;
    }
    function getWidths(param, width, sizes) {
      let { deviceSizes, allSizes } = param;
      if (sizes) {
        const viewportWidthRe = /(^|\s)(1?\d?\d)vw/g;
        const percentSizes = [];
        for (let match; match = viewportWidthRe.exec(sizes); match) {
          percentSizes.push(parseInt(match[2]));
        }
        if (percentSizes.length) {
          const smallestRatio = Math.min(...percentSizes) * 0.01;
          return {
            widths: allSizes.filter((s) => s >= deviceSizes[0] * smallestRatio),
            kind: "w"
          };
        }
        return {
          widths: allSizes,
          kind: "w"
        };
      }
      if (typeof width !== "number") {
        return {
          widths: deviceSizes,
          kind: "w"
        };
      }
      const widths = [
        ...new Set(
          // > This means that most OLED screens that say they are 3x resolution,
          // > are actually 3x in the green color, but only 1.5x in the red and
          // > blue colors. Showing a 3x resolution image in the app vs a 2x
          // > resolution image will be visually the same, though the 3x image
          // > takes significantly more data. Even true 3x resolution screens are
          // > wasteful as the human eye cannot see that level of detail without
          // > something like a magnifying glass.
          // https://blog.twitter.com/engineering/en_us/topics/infrastructure/2019/capping-image-fidelity-on-ultra-high-resolution-devices.html
          [
            width,
            width * 2
            /*, width * 3*/
          ].map((w) => allSizes.find((p) => p >= w) || allSizes[allSizes.length - 1])
        )
      ];
      return {
        widths,
        kind: "x"
      };
    }
    function generateImgAttrs(param) {
      let { config, src, unoptimized, width, quality, sizes, loader } = param;
      if (unoptimized) {
        return {
          src,
          srcSet: void 0,
          sizes: void 0
        };
      }
      const { widths, kind } = getWidths(config, width, sizes);
      const last = widths.length - 1;
      return {
        sizes: !sizes && kind === "w" ? "100vw" : sizes,
        srcSet: widths.map((w, i) => loader({
          config,
          src,
          quality,
          width: w
        }) + " " + (kind === "w" ? w : i + 1) + kind).join(", "),
        // It's intended to keep `src` the last attribute because React updates
        // attributes in order. If we keep `src` the first one, Safari will
        // immediately start to fetch `src`, before `sizes` and `srcSet` are even
        // updated by React. That causes multiple unnecessary requests if `srcSet`
        // and `sizes` are defined.
        // This bug cannot be reproduced in Chrome or Firefox.
        src: loader({
          config,
          src,
          quality,
          width: widths[last]
        })
      };
    }
    function getImgProps(param, _state) {
      let _a = param, { src, sizes, unoptimized = false, priority = false, loading, className, quality, width, height, fill = false, style, overrideSrc, onLoad, onLoadingComplete, placeholder = "empty", blurDataURL, fetchPriority, decoding = "async", layout, objectFit, objectPosition, lazyBoundary, lazyRoot } = _a, rest = __objRest(_a, ["src", "sizes", "unoptimized", "priority", "loading", "className", "quality", "width", "height", "fill", "style", "overrideSrc", "onLoad", "onLoadingComplete", "placeholder", "blurDataURL", "fetchPriority", "decoding", "layout", "objectFit", "objectPosition", "lazyBoundary", "lazyRoot"]);
      const { imgConf, showAltText, blurComplete, defaultLoader } = _state;
      let config;
      let c = imgConf || _imageconfig.imageConfigDefault;
      if ("allSizes" in c) {
        config = c;
      } else {
        var _c_qualities;
        const allSizes = [
          ...c.deviceSizes,
          ...c.imageSizes
        ].sort((a, b) => a - b);
        const deviceSizes = c.deviceSizes.sort((a, b) => a - b);
        const qualities = (_c_qualities = c.qualities) == null ? void 0 : _c_qualities.sort((a, b) => a - b);
        config = __spreadProps(__spreadValues({}, c), {
          allSizes,
          deviceSizes,
          qualities
        });
      }
      if (typeof defaultLoader === "undefined") {
        throw Object.defineProperty(new Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config"), "__NEXT_ERROR_CODE", {
          value: "E163",
          enumerable: false,
          configurable: true
        });
      }
      let loader = rest.loader || defaultLoader;
      delete rest.loader;
      delete rest.srcSet;
      const isDefaultLoader = "__next_img_default" in loader;
      if (isDefaultLoader) {
        if (config.loader === "custom") {
          throw Object.defineProperty(new Error('Image with src "' + src + '" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader'), "__NEXT_ERROR_CODE", {
            value: "E252",
            enumerable: false,
            configurable: true
          });
        }
      } else {
        const customImageLoader = loader;
        loader = (obj) => {
          const _a2 = obj, { config: _ } = _a2, opts = __objRest(_a2, ["config"]);
          return customImageLoader(opts);
        };
      }
      if (layout) {
        if (layout === "fill") {
          fill = true;
        }
        const layoutToStyle = {
          intrinsic: {
            maxWidth: "100%",
            height: "auto"
          },
          responsive: {
            width: "100%",
            height: "auto"
          }
        };
        const layoutToSizes = {
          responsive: "100vw",
          fill: "100vw"
        };
        const layoutStyle = layoutToStyle[layout];
        if (layoutStyle) {
          style = __spreadValues(__spreadValues({}, style), layoutStyle);
        }
        const layoutSizes = layoutToSizes[layout];
        if (layoutSizes && !sizes) {
          sizes = layoutSizes;
        }
      }
      let staticSrc = "";
      let widthInt = getInt(width);
      let heightInt = getInt(height);
      let blurWidth;
      let blurHeight;
      if (isStaticImport(src)) {
        const staticImageData = isStaticRequire(src) ? src.default : src;
        if (!staticImageData.src) {
          throw Object.defineProperty(new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received " + JSON.stringify(staticImageData)), "__NEXT_ERROR_CODE", {
            value: "E460",
            enumerable: false,
            configurable: true
          });
        }
        if (!staticImageData.height || !staticImageData.width) {
          throw Object.defineProperty(new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received " + JSON.stringify(staticImageData)), "__NEXT_ERROR_CODE", {
            value: "E48",
            enumerable: false,
            configurable: true
          });
        }
        blurWidth = staticImageData.blurWidth;
        blurHeight = staticImageData.blurHeight;
        blurDataURL = blurDataURL || staticImageData.blurDataURL;
        staticSrc = staticImageData.src;
        if (!fill) {
          if (!widthInt && !heightInt) {
            widthInt = staticImageData.width;
            heightInt = staticImageData.height;
          } else if (widthInt && !heightInt) {
            const ratio = widthInt / staticImageData.width;
            heightInt = Math.round(staticImageData.height * ratio);
          } else if (!widthInt && heightInt) {
            const ratio = heightInt / staticImageData.height;
            widthInt = Math.round(staticImageData.width * ratio);
          }
        }
      }
      src = typeof src === "string" ? src : staticSrc;
      let isLazy = !priority && (loading === "lazy" || typeof loading === "undefined");
      if (!src || src.startsWith("data:") || src.startsWith("blob:")) {
        unoptimized = true;
        isLazy = false;
      }
      if (config.unoptimized) {
        unoptimized = true;
      }
      if (isDefaultLoader && !config.dangerouslyAllowSVG && src.split("?", 1)[0].endsWith(".svg")) {
        unoptimized = true;
      }
      const qualityInt = getInt(quality);
      if (process.env.NODE_ENV !== "production") {
        if (config.output === "export" && isDefaultLoader && !unoptimized) {
          throw Object.defineProperty(new Error("Image Optimization using the default loader is not compatible with `{ output: 'export' }`.\n  Possible solutions:\n    - Remove `{ output: 'export' }` and run \"next start\" to run server mode including the Image Optimization API.\n    - Configure `{ images: { unoptimized: true } }` in `next.config.js` to disable the Image Optimization API.\n  Read more: https://nextjs.org/docs/messages/export-image-api"), "__NEXT_ERROR_CODE", {
            value: "E500",
            enumerable: false,
            configurable: true
          });
        }
        if (!src) {
          unoptimized = true;
        } else {
          if (fill) {
            if (width) {
              throw Object.defineProperty(new Error('Image with src "' + src + '" has both "width" and "fill" properties. Only one should be used.'), "__NEXT_ERROR_CODE", {
                value: "E96",
                enumerable: false,
                configurable: true
              });
            }
            if (height) {
              throw Object.defineProperty(new Error('Image with src "' + src + '" has both "height" and "fill" properties. Only one should be used.'), "__NEXT_ERROR_CODE", {
                value: "E115",
                enumerable: false,
                configurable: true
              });
            }
            if ((style == null ? void 0 : style.position) && style.position !== "absolute") {
              throw Object.defineProperty(new Error('Image with src "' + src + '" has both "fill" and "style.position" properties. Images with "fill" always use position absolute - it cannot be modified.'), "__NEXT_ERROR_CODE", {
                value: "E216",
                enumerable: false,
                configurable: true
              });
            }
            if ((style == null ? void 0 : style.width) && style.width !== "100%") {
              throw Object.defineProperty(new Error('Image with src "' + src + '" has both "fill" and "style.width" properties. Images with "fill" always use width 100% - it cannot be modified.'), "__NEXT_ERROR_CODE", {
                value: "E73",
                enumerable: false,
                configurable: true
              });
            }
            if ((style == null ? void 0 : style.height) && style.height !== "100%") {
              throw Object.defineProperty(new Error('Image with src "' + src + '" has both "fill" and "style.height" properties. Images with "fill" always use height 100% - it cannot be modified.'), "__NEXT_ERROR_CODE", {
                value: "E404",
                enumerable: false,
                configurable: true
              });
            }
          } else {
            if (typeof widthInt === "undefined") {
              throw Object.defineProperty(new Error('Image with src "' + src + '" is missing required "width" property.'), "__NEXT_ERROR_CODE", {
                value: "E451",
                enumerable: false,
                configurable: true
              });
            } else if (isNaN(widthInt)) {
              throw Object.defineProperty(new Error('Image with src "' + src + '" has invalid "width" property. Expected a numeric value in pixels but received "' + width + '".'), "__NEXT_ERROR_CODE", {
                value: "E66",
                enumerable: false,
                configurable: true
              });
            }
            if (typeof heightInt === "undefined") {
              throw Object.defineProperty(new Error('Image with src "' + src + '" is missing required "height" property.'), "__NEXT_ERROR_CODE", {
                value: "E397",
                enumerable: false,
                configurable: true
              });
            } else if (isNaN(heightInt)) {
              throw Object.defineProperty(new Error('Image with src "' + src + '" has invalid "height" property. Expected a numeric value in pixels but received "' + height + '".'), "__NEXT_ERROR_CODE", {
                value: "E444",
                enumerable: false,
                configurable: true
              });
            }
            if (/^[\x00-\x20]/.test(src)) {
              throw Object.defineProperty(new Error('Image with src "' + src + '" cannot start with a space or control character. Use src.trimStart() to remove it or encodeURIComponent(src) to keep it.'), "__NEXT_ERROR_CODE", {
                value: "E176",
                enumerable: false,
                configurable: true
              });
            }
            if (/[\x00-\x20]$/.test(src)) {
              throw Object.defineProperty(new Error('Image with src "' + src + '" cannot end with a space or control character. Use src.trimEnd() to remove it or encodeURIComponent(src) to keep it.'), "__NEXT_ERROR_CODE", {
                value: "E21",
                enumerable: false,
                configurable: true
              });
            }
          }
        }
        if (!VALID_LOADING_VALUES.includes(loading)) {
          throw Object.defineProperty(new Error('Image with src "' + src + '" has invalid "loading" property. Provided "' + loading + '" should be one of ' + VALID_LOADING_VALUES.map(String).join(",") + "."), "__NEXT_ERROR_CODE", {
            value: "E357",
            enumerable: false,
            configurable: true
          });
        }
        if (priority && loading === "lazy") {
          throw Object.defineProperty(new Error('Image with src "' + src + `" has both "priority" and "loading='lazy'" properties. Only one should be used.`), "__NEXT_ERROR_CODE", {
            value: "E218",
            enumerable: false,
            configurable: true
          });
        }
        if (placeholder !== "empty" && placeholder !== "blur" && !placeholder.startsWith("data:image/")) {
          throw Object.defineProperty(new Error('Image with src "' + src + '" has invalid "placeholder" property "' + placeholder + '".'), "__NEXT_ERROR_CODE", {
            value: "E431",
            enumerable: false,
            configurable: true
          });
        }
        if (placeholder !== "empty") {
          if (widthInt && heightInt && widthInt * heightInt < 1600) {
            (0, _warnonce.warnOnce)('Image with src "' + src + '" is smaller than 40x40. Consider removing the "placeholder" property to improve performance.');
          }
        }
        if (placeholder === "blur" && !blurDataURL) {
          const VALID_BLUR_EXT = [
            "jpeg",
            "png",
            "webp",
            "avif"
          ];
          throw Object.defineProperty(new Error('Image with src "' + src + `" has "placeholder='blur'" property but is missing the "blurDataURL" property.
        Possible solutions:
          - Add a "blurDataURL" property, the contents should be a small Data URL to represent the image
          - Change the "src" property to a static import with one of the supported file types: ` + VALID_BLUR_EXT.join(",") + ' (animated images not supported)\n          - Remove the "placeholder" property, effectively no blur effect\n        Read more: https://nextjs.org/docs/messages/placeholder-blur-data-url'), "__NEXT_ERROR_CODE", {
            value: "E371",
            enumerable: false,
            configurable: true
          });
        }
        if ("ref" in rest) {
          (0, _warnonce.warnOnce)('Image with src "' + src + '" is using unsupported "ref" property. Consider using the "onLoad" property instead.');
        }
        if (!unoptimized && !isDefaultLoader) {
          const urlStr = loader({
            config,
            src,
            width: widthInt || 400,
            quality: qualityInt || 75
          });
          let url;
          try {
            url = new URL(urlStr);
          } catch (err) {
          }
          if (urlStr === src || url && url.pathname === src && !url.search) {
            (0, _warnonce.warnOnce)('Image with src "' + src + '" has a "loader" property that does not implement width. Please implement it or use the "unoptimized" property instead.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader-width');
          }
        }
        if (onLoadingComplete) {
          (0, _warnonce.warnOnce)('Image with src "' + src + '" is using deprecated "onLoadingComplete" property. Please use the "onLoad" property instead.');
        }
        for (const [legacyKey, legacyValue] of Object.entries({
          layout,
          objectFit,
          objectPosition,
          lazyBoundary,
          lazyRoot
        })) {
          if (legacyValue) {
            (0, _warnonce.warnOnce)('Image with src "' + src + '" has legacy prop "' + legacyKey + '". Did you forget to run the codemod?\nRead more: https://nextjs.org/docs/messages/next-image-upgrade-to-13');
          }
        }
        if (typeof window !== "undefined" && !perfObserver && window.PerformanceObserver) {
          perfObserver = new PerformanceObserver((entryList) => {
            for (const entry of entryList.getEntries()) {
              var _entry_element;
              const imgSrc = (entry == null ? void 0 : (_entry_element = entry.element) == null ? void 0 : _entry_element.src) || "";
              const lcpImage = allImgs.get(imgSrc);
              if (lcpImage && !lcpImage.priority && lcpImage.placeholder === "empty" && !lcpImage.src.startsWith("data:") && !lcpImage.src.startsWith("blob:")) {
                (0, _warnonce.warnOnce)('Image with src "' + lcpImage.src + '" was detected as the Largest Contentful Paint (LCP). Please add the "priority" property if this image is above the fold.\nRead more: https://nextjs.org/docs/api-reference/next/image#priority');
              }
            }
          });
          try {
            perfObserver.observe({
              type: "largest-contentful-paint",
              buffered: true
            });
          } catch (err) {
            console.error(err);
          }
        }
      }
      const imgStyle = Object.assign(fill ? {
        position: "absolute",
        height: "100%",
        width: "100%",
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        objectFit,
        objectPosition
      } : {}, showAltText ? {} : {
        color: "transparent"
      }, style);
      const backgroundImage = !blurComplete && placeholder !== "empty" ? placeholder === "blur" ? 'url("data:image/svg+xml;charset=utf-8,' + (0, _imageblursvg.getImageBlurSvg)({
        widthInt,
        heightInt,
        blurWidth,
        blurHeight,
        blurDataURL: blurDataURL || "",
        objectFit: imgStyle.objectFit
      }) + '")' : 'url("' + placeholder + '")' : null;
      const backgroundSize = !INVALID_BACKGROUND_SIZE_VALUES.includes(imgStyle.objectFit) ? imgStyle.objectFit : imgStyle.objectFit === "fill" ? "100% 100%" : "cover";
      let placeholderStyle = backgroundImage ? {
        backgroundSize,
        backgroundPosition: imgStyle.objectPosition || "50% 50%",
        backgroundRepeat: "no-repeat",
        backgroundImage
      } : {};
      if (process.env.NODE_ENV === "development") {
        if (placeholderStyle.backgroundImage && placeholder === "blur" && (blurDataURL == null ? void 0 : blurDataURL.startsWith("/"))) {
          placeholderStyle.backgroundImage = 'url("' + blurDataURL + '")';
        }
      }
      const imgAttributes = generateImgAttrs({
        config,
        src,
        unoptimized,
        width: widthInt,
        quality: qualityInt,
        sizes,
        loader
      });
      if (process.env.NODE_ENV !== "production") {
        if (typeof window !== "undefined") {
          let fullUrl;
          try {
            fullUrl = new URL(imgAttributes.src);
          } catch (e) {
            fullUrl = new URL(imgAttributes.src, window.location.href);
          }
          allImgs.set(fullUrl.href, {
            src,
            priority,
            placeholder
          });
        }
      }
      const props = __spreadProps(__spreadValues({}, rest), {
        loading: isLazy ? "lazy" : loading,
        fetchPriority,
        width: widthInt,
        height: heightInt,
        decoding,
        className,
        style: __spreadValues(__spreadValues({}, imgStyle), placeholderStyle),
        sizes: imgAttributes.sizes,
        srcSet: imgAttributes.srcSet,
        src: overrideSrc || imgAttributes.src
      });
      const meta = {
        unoptimized,
        priority,
        placeholder,
        fill
      };
      return {
        props,
        meta
      };
    }
  }
});

// node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs
var require_interop_require_wildcard = __commonJS({
  "node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs"(exports) {
    "use strict";
    function _getRequireWildcardCache(nodeInterop) {
      if (typeof WeakMap !== "function") return null;
      var cacheBabelInterop = /* @__PURE__ */ new WeakMap();
      var cacheNodeInterop = /* @__PURE__ */ new WeakMap();
      return (_getRequireWildcardCache = function(nodeInterop2) {
        return nodeInterop2 ? cacheNodeInterop : cacheBabelInterop;
      })(nodeInterop);
    }
    function _interop_require_wildcard(obj, nodeInterop) {
      if (!nodeInterop && obj && obj.__esModule) return obj;
      if (obj === null || typeof obj !== "object" && typeof obj !== "function") return { default: obj };
      var cache = _getRequireWildcardCache(nodeInterop);
      if (cache && cache.has(obj)) return cache.get(obj);
      var newObj = { __proto__: null };
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var key in obj) {
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
          if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
          else newObj[key] = obj[key];
        }
      }
      newObj.default = obj;
      if (cache) cache.set(obj, newObj);
      return newObj;
    }
    exports._ = _interop_require_wildcard;
  }
});

// node_modules/next/dist/shared/lib/side-effect.js
var require_side_effect = __commonJS({
  "node_modules/next/dist/shared/lib/side-effect.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "default", {
      enumerable: true,
      get: function() {
        return SideEffect;
      }
    });
    var _react = __require("react");
    var isServer = typeof window === "undefined";
    var useClientOnlyLayoutEffect = isServer ? () => {
    } : _react.useLayoutEffect;
    var useClientOnlyEffect = isServer ? () => {
    } : _react.useEffect;
    function SideEffect(props) {
      const { headManager, reduceComponentsToState } = props;
      function emitChange() {
        if (headManager && headManager.mountedInstances) {
          const headElements = _react.Children.toArray(Array.from(headManager.mountedInstances).filter(Boolean));
          headManager.updateHead(reduceComponentsToState(headElements, props));
        }
      }
      if (isServer) {
        var _headManager_mountedInstances;
        headManager == null ? void 0 : (_headManager_mountedInstances = headManager.mountedInstances) == null ? void 0 : _headManager_mountedInstances.add(props.children);
        emitChange();
      }
      useClientOnlyLayoutEffect(() => {
        var _headManager_mountedInstances2;
        headManager == null ? void 0 : (_headManager_mountedInstances2 = headManager.mountedInstances) == null ? void 0 : _headManager_mountedInstances2.add(props.children);
        return () => {
          var _headManager_mountedInstances3;
          headManager == null ? void 0 : (_headManager_mountedInstances3 = headManager.mountedInstances) == null ? void 0 : _headManager_mountedInstances3.delete(props.children);
        };
      });
      useClientOnlyLayoutEffect(() => {
        if (headManager) {
          headManager._pendingUpdate = emitChange;
        }
        return () => {
          if (headManager) {
            headManager._pendingUpdate = emitChange;
          }
        };
      });
      useClientOnlyEffect(() => {
        if (headManager && headManager._pendingUpdate) {
          headManager._pendingUpdate();
          headManager._pendingUpdate = null;
        }
        return () => {
          if (headManager && headManager._pendingUpdate) {
            headManager._pendingUpdate();
            headManager._pendingUpdate = null;
          }
        };
      });
      return null;
    }
  }
});

// node_modules/next/dist/shared/lib/amp-context.shared-runtime.js
var require_amp_context_shared_runtime = __commonJS({
  "node_modules/next/dist/shared/lib/amp-context.shared-runtime.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "AmpStateContext", {
      enumerable: true,
      get: function() {
        return AmpStateContext;
      }
    });
    var _interop_require_default = require_interop_require_default();
    var _react = /* @__PURE__ */ _interop_require_default._(__require("react"));
    var AmpStateContext = _react.default.createContext({});
    if (process.env.NODE_ENV !== "production") {
      AmpStateContext.displayName = "AmpStateContext";
    }
  }
});

// node_modules/next/dist/shared/lib/head-manager-context.shared-runtime.js
var require_head_manager_context_shared_runtime = __commonJS({
  "node_modules/next/dist/shared/lib/head-manager-context.shared-runtime.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "HeadManagerContext", {
      enumerable: true,
      get: function() {
        return HeadManagerContext;
      }
    });
    var _interop_require_default = require_interop_require_default();
    var _react = /* @__PURE__ */ _interop_require_default._(__require("react"));
    var HeadManagerContext = _react.default.createContext({});
    if (process.env.NODE_ENV !== "production") {
      HeadManagerContext.displayName = "HeadManagerContext";
    }
  }
});

// node_modules/next/dist/shared/lib/amp-mode.js
var require_amp_mode = __commonJS({
  "node_modules/next/dist/shared/lib/amp-mode.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "isInAmpMode", {
      enumerable: true,
      get: function() {
        return isInAmpMode;
      }
    });
    function isInAmpMode(param) {
      let { ampFirst = false, hybrid = false, hasQuery = false } = param === void 0 ? {} : param;
      return ampFirst || hybrid && hasQuery;
    }
  }
});

// node_modules/next/dist/shared/lib/head.js
var require_head = __commonJS({
  "node_modules/next/dist/shared/lib/head.js"(exports, module) {
    "use strict";
    "use client";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all) Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
    }
    _export(exports, {
      default: function() {
        return _default;
      },
      defaultHead: function() {
        return defaultHead;
      }
    });
    var _interop_require_default = require_interop_require_default();
    var _interop_require_wildcard = require_interop_require_wildcard();
    var _jsxruntime = __require("react/jsx-runtime");
    var _react = /* @__PURE__ */ _interop_require_wildcard._(__require("react"));
    var _sideeffect = /* @__PURE__ */ _interop_require_default._(require_side_effect());
    var _ampcontextsharedruntime = require_amp_context_shared_runtime();
    var _headmanagercontextsharedruntime = require_head_manager_context_shared_runtime();
    var _ampmode = require_amp_mode();
    var _warnonce = require_warn_once();
    function defaultHead(inAmpMode) {
      if (inAmpMode === void 0) inAmpMode = false;
      const head = [
        /* @__PURE__ */ (0, _jsxruntime.jsx)("meta", {
          charSet: "utf-8"
        }, "charset")
      ];
      if (!inAmpMode) {
        head.push(/* @__PURE__ */ (0, _jsxruntime.jsx)("meta", {
          name: "viewport",
          content: "width=device-width"
        }, "viewport"));
      }
      return head;
    }
    function onlyReactElement(list, child) {
      if (typeof child === "string" || typeof child === "number") {
        return list;
      }
      if (child.type === _react.default.Fragment) {
        return list.concat(
          // @ts-expect-error @types/react does not remove fragments but this could also return ReactPortal[]
          _react.default.Children.toArray(child.props.children).reduce(
            // @ts-expect-error @types/react does not remove fragments but this could also return ReactPortal[]
            (fragmentList, fragmentChild) => {
              if (typeof fragmentChild === "string" || typeof fragmentChild === "number") {
                return fragmentList;
              }
              return fragmentList.concat(fragmentChild);
            },
            []
          )
        );
      }
      return list.concat(child);
    }
    var METATYPES = [
      "name",
      "httpEquiv",
      "charSet",
      "itemProp"
    ];
    function unique() {
      const keys = /* @__PURE__ */ new Set();
      const tags = /* @__PURE__ */ new Set();
      const metaTypes = /* @__PURE__ */ new Set();
      const metaCategories = {};
      return (h) => {
        let isUnique = true;
        let hasKey = false;
        if (h.key && typeof h.key !== "number" && h.key.indexOf("$") > 0) {
          hasKey = true;
          const key = h.key.slice(h.key.indexOf("$") + 1);
          if (keys.has(key)) {
            isUnique = false;
          } else {
            keys.add(key);
          }
        }
        switch (h.type) {
          case "title":
          case "base":
            if (tags.has(h.type)) {
              isUnique = false;
            } else {
              tags.add(h.type);
            }
            break;
          case "meta":
            for (let i = 0, len = METATYPES.length; i < len; i++) {
              const metatype = METATYPES[i];
              if (!h.props.hasOwnProperty(metatype)) continue;
              if (metatype === "charSet") {
                if (metaTypes.has(metatype)) {
                  isUnique = false;
                } else {
                  metaTypes.add(metatype);
                }
              } else {
                const category = h.props[metatype];
                const categories = metaCategories[metatype] || /* @__PURE__ */ new Set();
                if ((metatype !== "name" || !hasKey) && categories.has(category)) {
                  isUnique = false;
                } else {
                  categories.add(category);
                  metaCategories[metatype] = categories;
                }
              }
            }
            break;
        }
        return isUnique;
      };
    }
    function reduceComponents(headChildrenElements, props) {
      const { inAmpMode } = props;
      return headChildrenElements.reduce(onlyReactElement, []).reverse().concat(defaultHead(inAmpMode).reverse()).filter(unique()).reverse().map((c, i) => {
        const key = c.key || i;
        if (process.env.NODE_ENV !== "development" && process.env.__NEXT_OPTIMIZE_FONTS && !inAmpMode) {
          if (c.type === "link" && c.props["href"] && // TODO(prateekbh@): Replace this with const from `constants` when the tree shaking works.
          [
            "https://fonts.googleapis.com/css",
            "https://use.typekit.net/"
          ].some((url) => c.props["href"].startsWith(url))) {
            const newProps = __spreadValues({}, c.props || {});
            newProps["data-href"] = newProps["href"];
            newProps["href"] = void 0;
            newProps["data-optimized-fonts"] = true;
            return /* @__PURE__ */ _react.default.cloneElement(c, newProps);
          }
        }
        if (process.env.NODE_ENV === "development") {
          if (c.type === "script" && c.props["type"] !== "application/ld+json") {
            const srcMessage = c.props["src"] ? '<script> tag with src="' + c.props["src"] + '"' : "inline <script>";
            (0, _warnonce.warnOnce)("Do not add <script> tags using next/head (see " + srcMessage + "). Use next/script instead. \nSee more info here: https://nextjs.org/docs/messages/no-script-tags-in-head-component");
          } else if (c.type === "link" && c.props["rel"] === "stylesheet") {
            (0, _warnonce.warnOnce)('Do not add stylesheets using next/head (see <link rel="stylesheet"> tag with href="' + c.props["href"] + '"). Use Document instead. \nSee more info here: https://nextjs.org/docs/messages/no-stylesheets-in-head-component');
          }
        }
        return /* @__PURE__ */ _react.default.cloneElement(c, {
          key
        });
      });
    }
    function Head(param) {
      let { children } = param;
      const ampState = (0, _react.useContext)(_ampcontextsharedruntime.AmpStateContext);
      const headManager = (0, _react.useContext)(_headmanagercontextsharedruntime.HeadManagerContext);
      return /* @__PURE__ */ (0, _jsxruntime.jsx)(_sideeffect.default, {
        reduceComponentsToState: reduceComponents,
        headManager,
        inAmpMode: (0, _ampmode.isInAmpMode)(ampState),
        children
      });
    }
    var _default = Head;
    if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
      Object.defineProperty(exports.default, "__esModule", { value: true });
      Object.assign(exports.default, exports);
      module.exports = exports.default;
    }
  }
});

// node_modules/next/dist/shared/lib/image-config-context.shared-runtime.js
var require_image_config_context_shared_runtime = __commonJS({
  "node_modules/next/dist/shared/lib/image-config-context.shared-runtime.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "ImageConfigContext", {
      enumerable: true,
      get: function() {
        return ImageConfigContext;
      }
    });
    var _interop_require_default = require_interop_require_default();
    var _react = /* @__PURE__ */ _interop_require_default._(__require("react"));
    var _imageconfig = require_image_config();
    var ImageConfigContext = _react.default.createContext(_imageconfig.imageConfigDefault);
    if (process.env.NODE_ENV !== "production") {
      ImageConfigContext.displayName = "ImageConfigContext";
    }
  }
});

// node_modules/next/dist/shared/lib/router-context.shared-runtime.js
var require_router_context_shared_runtime = __commonJS({
  "node_modules/next/dist/shared/lib/router-context.shared-runtime.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "RouterContext", {
      enumerable: true,
      get: function() {
        return RouterContext;
      }
    });
    var _interop_require_default = require_interop_require_default();
    var _react = /* @__PURE__ */ _interop_require_default._(__require("react"));
    var RouterContext = _react.default.createContext(null);
    if (process.env.NODE_ENV !== "production") {
      RouterContext.displayName = "RouterContext";
    }
  }
});

// node_modules/next/dist/compiled/picomatch/index.js
var require_picomatch = __commonJS({
  "node_modules/next/dist/compiled/picomatch/index.js"(exports, module) {
    "use strict";
    (() => {
      "use strict";
      var t = { 170: (t2, e2, u2) => {
        const n = u2(510);
        const isWindows = () => {
          if (typeof navigator !== "undefined" && navigator.platform) {
            const t3 = navigator.platform.toLowerCase();
            return t3 === "win32" || t3 === "windows";
          }
          if (typeof process !== "undefined" && process.platform) {
            return process.platform === "win32";
          }
          return false;
        };
        function picomatch(t3, e3, u3 = false) {
          if (e3 && (e3.windows === null || e3.windows === void 0)) {
            e3 = __spreadProps(__spreadValues({}, e3), { windows: isWindows() });
          }
          return n(t3, e3, u3);
        }
        Object.assign(picomatch, n);
        t2.exports = picomatch;
      }, 154: (t2) => {
        const e2 = "\\\\/";
        const u2 = `[^${e2}]`;
        const n = "\\.";
        const o = "\\+";
        const s = "\\?";
        const r = "\\/";
        const a = "(?=.)";
        const i = "[^/]";
        const c = `(?:${r}|$)`;
        const p = `(?:^|${r})`;
        const l = `${n}{1,2}${c}`;
        const f = `(?!${n})`;
        const A = `(?!${p}${l})`;
        const _ = `(?!${n}{0,1}${c})`;
        const R = `(?!${l})`;
        const E = `[^.${r}]`;
        const h = `${i}*?`;
        const g = "/";
        const b = { DOT_LITERAL: n, PLUS_LITERAL: o, QMARK_LITERAL: s, SLASH_LITERAL: r, ONE_CHAR: a, QMARK: i, END_ANCHOR: c, DOTS_SLASH: l, NO_DOT: f, NO_DOTS: A, NO_DOT_SLASH: _, NO_DOTS_SLASH: R, QMARK_NO_DOT: E, STAR: h, START_ANCHOR: p, SEP: g };
        const C = __spreadProps(__spreadValues({}, b), { SLASH_LITERAL: `[${e2}]`, QMARK: u2, STAR: `${u2}*?`, DOTS_SLASH: `${n}{1,2}(?:[${e2}]|$)`, NO_DOT: `(?!${n})`, NO_DOTS: `(?!(?:^|[${e2}])${n}{1,2}(?:[${e2}]|$))`, NO_DOT_SLASH: `(?!${n}{0,1}(?:[${e2}]|$))`, NO_DOTS_SLASH: `(?!${n}{1,2}(?:[${e2}]|$))`, QMARK_NO_DOT: `[^.${e2}]`, START_ANCHOR: `(?:^|[${e2}])`, END_ANCHOR: `(?:[${e2}]|$)`, SEP: "\\" });
        const y = { alnum: "a-zA-Z0-9", alpha: "a-zA-Z", ascii: "\\x00-\\x7F", blank: " \\t", cntrl: "\\x00-\\x1F\\x7F", digit: "0-9", graph: "\\x21-\\x7E", lower: "a-z", print: "\\x20-\\x7E ", punct: "\\-!\"#$%&'()\\*+,./:;<=>?@[\\]^_`{|}~", space: " \\t\\r\\n\\v\\f", upper: "A-Z", word: "A-Za-z0-9_", xdigit: "A-Fa-f0-9" };
        t2.exports = { MAX_LENGTH: 1024 * 64, POSIX_REGEX_SOURCE: y, REGEX_BACKSLASH: /\\(?![*+?^${}(|)[\]])/g, REGEX_NON_SPECIAL_CHARS: /^[^@![\].,$*+?^{}()|\\/]+/, REGEX_SPECIAL_CHARS: /[-*+?.^${}(|)[\]]/, REGEX_SPECIAL_CHARS_BACKREF: /(\\?)((\W)(\3*))/g, REGEX_SPECIAL_CHARS_GLOBAL: /([-*+?.^${}(|)[\]])/g, REGEX_REMOVE_BACKSLASH: /(?:\[.*?[^\\]\]|\\(?=.))/g, REPLACEMENTS: { "***": "*", "**/**": "**", "**/**/**": "**" }, CHAR_0: 48, CHAR_9: 57, CHAR_UPPERCASE_A: 65, CHAR_LOWERCASE_A: 97, CHAR_UPPERCASE_Z: 90, CHAR_LOWERCASE_Z: 122, CHAR_LEFT_PARENTHESES: 40, CHAR_RIGHT_PARENTHESES: 41, CHAR_ASTERISK: 42, CHAR_AMPERSAND: 38, CHAR_AT: 64, CHAR_BACKWARD_SLASH: 92, CHAR_CARRIAGE_RETURN: 13, CHAR_CIRCUMFLEX_ACCENT: 94, CHAR_COLON: 58, CHAR_COMMA: 44, CHAR_DOT: 46, CHAR_DOUBLE_QUOTE: 34, CHAR_EQUAL: 61, CHAR_EXCLAMATION_MARK: 33, CHAR_FORM_FEED: 12, CHAR_FORWARD_SLASH: 47, CHAR_GRAVE_ACCENT: 96, CHAR_HASH: 35, CHAR_HYPHEN_MINUS: 45, CHAR_LEFT_ANGLE_BRACKET: 60, CHAR_LEFT_CURLY_BRACE: 123, CHAR_LEFT_SQUARE_BRACKET: 91, CHAR_LINE_FEED: 10, CHAR_NO_BREAK_SPACE: 160, CHAR_PERCENT: 37, CHAR_PLUS: 43, CHAR_QUESTION_MARK: 63, CHAR_RIGHT_ANGLE_BRACKET: 62, CHAR_RIGHT_CURLY_BRACE: 125, CHAR_RIGHT_SQUARE_BRACKET: 93, CHAR_SEMICOLON: 59, CHAR_SINGLE_QUOTE: 39, CHAR_SPACE: 32, CHAR_TAB: 9, CHAR_UNDERSCORE: 95, CHAR_VERTICAL_LINE: 124, CHAR_ZERO_WIDTH_NOBREAK_SPACE: 65279, extglobChars(t3) {
          return { "!": { type: "negate", open: "(?:(?!(?:", close: `))${t3.STAR})` }, "?": { type: "qmark", open: "(?:", close: ")?" }, "+": { type: "plus", open: "(?:", close: ")+" }, "*": { type: "star", open: "(?:", close: ")*" }, "@": { type: "at", open: "(?:", close: ")" } };
        }, globChars(t3) {
          return t3 === true ? C : b;
        } };
      }, 697: (t2, e2, u2) => {
        const n = u2(154);
        const o = u2(96);
        const { MAX_LENGTH: s, POSIX_REGEX_SOURCE: r, REGEX_NON_SPECIAL_CHARS: a, REGEX_SPECIAL_CHARS_BACKREF: i, REPLACEMENTS: c } = n;
        const expandRange = (t3, e3) => {
          if (typeof e3.expandRange === "function") {
            return e3.expandRange(...t3, e3);
          }
          t3.sort();
          const u3 = `[${t3.join("-")}]`;
          try {
            new RegExp(u3);
          } catch (e4) {
            return t3.map((t4) => o.escapeRegex(t4)).join("..");
          }
          return u3;
        };
        const syntaxError = (t3, e3) => `Missing ${t3}: "${e3}" - use "\\\\${e3}" to match literal characters`;
        const parse = (t3, e3) => {
          if (typeof t3 !== "string") {
            throw new TypeError("Expected a string");
          }
          t3 = c[t3] || t3;
          const u3 = __spreadValues({}, e3);
          const p = typeof u3.maxLength === "number" ? Math.min(s, u3.maxLength) : s;
          let l = t3.length;
          if (l > p) {
            throw new SyntaxError(`Input length: ${l}, exceeds maximum allowed length: ${p}`);
          }
          const f = { type: "bos", value: "", output: u3.prepend || "" };
          const A = [f];
          const _ = u3.capture ? "" : "?:";
          const R = n.globChars(u3.windows);
          const E = n.extglobChars(R);
          const { DOT_LITERAL: h, PLUS_LITERAL: g, SLASH_LITERAL: b, ONE_CHAR: C, DOTS_SLASH: y, NO_DOT: $, NO_DOT_SLASH: x, NO_DOTS_SLASH: S, QMARK: H, QMARK_NO_DOT: v, STAR: d, START_ANCHOR: L } = R;
          const globstar = (t4) => `(${_}(?:(?!${L}${t4.dot ? y : h}).)*?)`;
          const T = u3.dot ? "" : $;
          const O = u3.dot ? H : v;
          let k = u3.bash === true ? globstar(u3) : d;
          if (u3.capture) {
            k = `(${k})`;
          }
          if (typeof u3.noext === "boolean") {
            u3.noextglob = u3.noext;
          }
          const m = { input: t3, index: -1, start: 0, dot: u3.dot === true, consumed: "", output: "", prefix: "", backtrack: false, negated: false, brackets: 0, braces: 0, parens: 0, quotes: 0, globstar: false, tokens: A };
          t3 = o.removePrefix(t3, m);
          l = t3.length;
          const w = [];
          const N = [];
          const I = [];
          let B = f;
          let G;
          const eos = () => m.index === l - 1;
          const D = m.peek = (e4 = 1) => t3[m.index + e4];
          const M = m.advance = () => t3[++m.index] || "";
          const remaining = () => t3.slice(m.index + 1);
          const consume = (t4 = "", e4 = 0) => {
            m.consumed += t4;
            m.index += e4;
          };
          const append = (t4) => {
            m.output += t4.output != null ? t4.output : t4.value;
            consume(t4.value);
          };
          const negate = () => {
            let t4 = 1;
            while (D() === "!" && (D(2) !== "(" || D(3) === "?")) {
              M();
              m.start++;
              t4++;
            }
            if (t4 % 2 === 0) {
              return false;
            }
            m.negated = true;
            m.start++;
            return true;
          };
          const increment = (t4) => {
            m[t4]++;
            I.push(t4);
          };
          const decrement = (t4) => {
            m[t4]--;
            I.pop();
          };
          const push = (t4) => {
            if (B.type === "globstar") {
              const e4 = m.braces > 0 && (t4.type === "comma" || t4.type === "brace");
              const u4 = t4.extglob === true || w.length && (t4.type === "pipe" || t4.type === "paren");
              if (t4.type !== "slash" && t4.type !== "paren" && !e4 && !u4) {
                m.output = m.output.slice(0, -B.output.length);
                B.type = "star";
                B.value = "*";
                B.output = k;
                m.output += B.output;
              }
            }
            if (w.length && t4.type !== "paren") {
              w[w.length - 1].inner += t4.value;
            }
            if (t4.value || t4.output) append(t4);
            if (B && B.type === "text" && t4.type === "text") {
              B.output = (B.output || B.value) + t4.value;
              B.value += t4.value;
              return;
            }
            t4.prev = B;
            A.push(t4);
            B = t4;
          };
          const extglobOpen = (t4, e4) => {
            const n2 = __spreadProps(__spreadValues({}, E[e4]), { conditions: 1, inner: "" });
            n2.prev = B;
            n2.parens = m.parens;
            n2.output = m.output;
            const o2 = (u3.capture ? "(" : "") + n2.open;
            increment("parens");
            push({ type: t4, value: e4, output: m.output ? "" : C });
            push({ type: "paren", extglob: true, value: M(), output: o2 });
            w.push(n2);
          };
          const extglobClose = (t4) => {
            let n2 = t4.close + (u3.capture ? ")" : "");
            let o2;
            if (t4.type === "negate") {
              let s2 = k;
              if (t4.inner && t4.inner.length > 1 && t4.inner.includes("/")) {
                s2 = globstar(u3);
              }
              if (s2 !== k || eos() || /^\)+$/.test(remaining())) {
                n2 = t4.close = `)$))${s2}`;
              }
              if (t4.inner.includes("*") && (o2 = remaining()) && /^\.[^\\/.]+$/.test(o2)) {
                const u4 = parse(o2, __spreadProps(__spreadValues({}, e3), { fastpaths: false })).output;
                n2 = t4.close = `)${u4})${s2})`;
              }
              if (t4.prev.type === "bos") {
                m.negatedExtglob = true;
              }
            }
            push({ type: "paren", extglob: true, value: G, output: n2 });
            decrement("parens");
          };
          if (u3.fastpaths !== false && !/(^[*!]|[/()[\]{}"])/.test(t3)) {
            let n2 = false;
            let s2 = t3.replace(i, (t4, e4, u4, o2, s3, r2) => {
              if (o2 === "\\") {
                n2 = true;
                return t4;
              }
              if (o2 === "?") {
                if (e4) {
                  return e4 + o2 + (s3 ? H.repeat(s3.length) : "");
                }
                if (r2 === 0) {
                  return O + (s3 ? H.repeat(s3.length) : "");
                }
                return H.repeat(u4.length);
              }
              if (o2 === ".") {
                return h.repeat(u4.length);
              }
              if (o2 === "*") {
                if (e4) {
                  return e4 + o2 + (s3 ? k : "");
                }
                return k;
              }
              return e4 ? t4 : `\\${t4}`;
            });
            if (n2 === true) {
              if (u3.unescape === true) {
                s2 = s2.replace(/\\/g, "");
              } else {
                s2 = s2.replace(/\\+/g, (t4) => t4.length % 2 === 0 ? "\\\\" : t4 ? "\\" : "");
              }
            }
            if (s2 === t3 && u3.contains === true) {
              m.output = t3;
              return m;
            }
            m.output = o.wrapOutput(s2, m, e3);
            return m;
          }
          while (!eos()) {
            G = M();
            if (G === "\0") {
              continue;
            }
            if (G === "\\") {
              const t4 = D();
              if (t4 === "/" && u3.bash !== true) {
                continue;
              }
              if (t4 === "." || t4 === ";") {
                continue;
              }
              if (!t4) {
                G += "\\";
                push({ type: "text", value: G });
                continue;
              }
              const e5 = /^\\+/.exec(remaining());
              let n3 = 0;
              if (e5 && e5[0].length > 2) {
                n3 = e5[0].length;
                m.index += n3;
                if (n3 % 2 !== 0) {
                  G += "\\";
                }
              }
              if (u3.unescape === true) {
                G = M();
              } else {
                G += M();
              }
              if (m.brackets === 0) {
                push({ type: "text", value: G });
                continue;
              }
            }
            if (m.brackets > 0 && (G !== "]" || B.value === "[" || B.value === "[^")) {
              if (u3.posix !== false && G === ":") {
                const t4 = B.value.slice(1);
                if (t4.includes("[")) {
                  B.posix = true;
                  if (t4.includes(":")) {
                    const t5 = B.value.lastIndexOf("[");
                    const e5 = B.value.slice(0, t5);
                    const u4 = B.value.slice(t5 + 2);
                    const n3 = r[u4];
                    if (n3) {
                      B.value = e5 + n3;
                      m.backtrack = true;
                      M();
                      if (!f.output && A.indexOf(B) === 1) {
                        f.output = C;
                      }
                      continue;
                    }
                  }
                }
              }
              if (G === "[" && D() !== ":" || G === "-" && D() === "]") {
                G = `\\${G}`;
              }
              if (G === "]" && (B.value === "[" || B.value === "[^")) {
                G = `\\${G}`;
              }
              if (u3.posix === true && G === "!" && B.value === "[") {
                G = "^";
              }
              B.value += G;
              append({ value: G });
              continue;
            }
            if (m.quotes === 1 && G !== '"') {
              G = o.escapeRegex(G);
              B.value += G;
              append({ value: G });
              continue;
            }
            if (G === '"') {
              m.quotes = m.quotes === 1 ? 0 : 1;
              if (u3.keepQuotes === true) {
                push({ type: "text", value: G });
              }
              continue;
            }
            if (G === "(") {
              increment("parens");
              push({ type: "paren", value: G });
              continue;
            }
            if (G === ")") {
              if (m.parens === 0 && u3.strictBrackets === true) {
                throw new SyntaxError(syntaxError("opening", "("));
              }
              const t4 = w[w.length - 1];
              if (t4 && m.parens === t4.parens + 1) {
                extglobClose(w.pop());
                continue;
              }
              push({ type: "paren", value: G, output: m.parens ? ")" : "\\)" });
              decrement("parens");
              continue;
            }
            if (G === "[") {
              if (u3.nobracket === true || !remaining().includes("]")) {
                if (u3.nobracket !== true && u3.strictBrackets === true) {
                  throw new SyntaxError(syntaxError("closing", "]"));
                }
                G = `\\${G}`;
              } else {
                increment("brackets");
              }
              push({ type: "bracket", value: G });
              continue;
            }
            if (G === "]") {
              if (u3.nobracket === true || B && B.type === "bracket" && B.value.length === 1) {
                push({ type: "text", value: G, output: `\\${G}` });
                continue;
              }
              if (m.brackets === 0) {
                if (u3.strictBrackets === true) {
                  throw new SyntaxError(syntaxError("opening", "["));
                }
                push({ type: "text", value: G, output: `\\${G}` });
                continue;
              }
              decrement("brackets");
              const t4 = B.value.slice(1);
              if (B.posix !== true && t4[0] === "^" && !t4.includes("/")) {
                G = `/${G}`;
              }
              B.value += G;
              append({ value: G });
              if (u3.literalBrackets === false || o.hasRegexChars(t4)) {
                continue;
              }
              const e5 = o.escapeRegex(B.value);
              m.output = m.output.slice(0, -B.value.length);
              if (u3.literalBrackets === true) {
                m.output += e5;
                B.value = e5;
                continue;
              }
              B.value = `(${_}${e5}|${B.value})`;
              m.output += B.value;
              continue;
            }
            if (G === "{" && u3.nobrace !== true) {
              increment("braces");
              const t4 = { type: "brace", value: G, output: "(", outputIndex: m.output.length, tokensIndex: m.tokens.length };
              N.push(t4);
              push(t4);
              continue;
            }
            if (G === "}") {
              const t4 = N[N.length - 1];
              if (u3.nobrace === true || !t4) {
                push({ type: "text", value: G, output: G });
                continue;
              }
              let e5 = ")";
              if (t4.dots === true) {
                const t5 = A.slice();
                const n3 = [];
                for (let e6 = t5.length - 1; e6 >= 0; e6--) {
                  A.pop();
                  if (t5[e6].type === "brace") {
                    break;
                  }
                  if (t5[e6].type !== "dots") {
                    n3.unshift(t5[e6].value);
                  }
                }
                e5 = expandRange(n3, u3);
                m.backtrack = true;
              }
              if (t4.comma !== true && t4.dots !== true) {
                const u4 = m.output.slice(0, t4.outputIndex);
                const n3 = m.tokens.slice(t4.tokensIndex);
                t4.value = t4.output = "\\{";
                G = e5 = "\\}";
                m.output = u4;
                for (const t5 of n3) {
                  m.output += t5.output || t5.value;
                }
              }
              push({ type: "brace", value: G, output: e5 });
              decrement("braces");
              N.pop();
              continue;
            }
            if (G === "|") {
              if (w.length > 0) {
                w[w.length - 1].conditions++;
              }
              push({ type: "text", value: G });
              continue;
            }
            if (G === ",") {
              let t4 = G;
              const e5 = N[N.length - 1];
              if (e5 && I[I.length - 1] === "braces") {
                e5.comma = true;
                t4 = "|";
              }
              push({ type: "comma", value: G, output: t4 });
              continue;
            }
            if (G === "/") {
              if (B.type === "dot" && m.index === m.start + 1) {
                m.start = m.index + 1;
                m.consumed = "";
                m.output = "";
                A.pop();
                B = f;
                continue;
              }
              push({ type: "slash", value: G, output: b });
              continue;
            }
            if (G === ".") {
              if (m.braces > 0 && B.type === "dot") {
                if (B.value === ".") B.output = h;
                const t4 = N[N.length - 1];
                B.type = "dots";
                B.output += G;
                B.value += G;
                t4.dots = true;
                continue;
              }
              if (m.braces + m.parens === 0 && B.type !== "bos" && B.type !== "slash") {
                push({ type: "text", value: G, output: h });
                continue;
              }
              push({ type: "dot", value: G, output: h });
              continue;
            }
            if (G === "?") {
              const t4 = B && B.value === "(";
              if (!t4 && u3.noextglob !== true && D() === "(" && D(2) !== "?") {
                extglobOpen("qmark", G);
                continue;
              }
              if (B && B.type === "paren") {
                const t5 = D();
                let e5 = G;
                if (B.value === "(" && !/[!=<:]/.test(t5) || t5 === "<" && !/<([!=]|\w+>)/.test(remaining())) {
                  e5 = `\\${G}`;
                }
                push({ type: "text", value: G, output: e5 });
                continue;
              }
              if (u3.dot !== true && (B.type === "slash" || B.type === "bos")) {
                push({ type: "qmark", value: G, output: v });
                continue;
              }
              push({ type: "qmark", value: G, output: H });
              continue;
            }
            if (G === "!") {
              if (u3.noextglob !== true && D() === "(") {
                if (D(2) !== "?" || !/[!=<:]/.test(D(3))) {
                  extglobOpen("negate", G);
                  continue;
                }
              }
              if (u3.nonegate !== true && m.index === 0) {
                negate();
                continue;
              }
            }
            if (G === "+") {
              if (u3.noextglob !== true && D() === "(" && D(2) !== "?") {
                extglobOpen("plus", G);
                continue;
              }
              if (B && B.value === "(" || u3.regex === false) {
                push({ type: "plus", value: G, output: g });
                continue;
              }
              if (B && (B.type === "bracket" || B.type === "paren" || B.type === "brace") || m.parens > 0) {
                push({ type: "plus", value: G });
                continue;
              }
              push({ type: "plus", value: g });
              continue;
            }
            if (G === "@") {
              if (u3.noextglob !== true && D() === "(" && D(2) !== "?") {
                push({ type: "at", extglob: true, value: G, output: "" });
                continue;
              }
              push({ type: "text", value: G });
              continue;
            }
            if (G !== "*") {
              if (G === "$" || G === "^") {
                G = `\\${G}`;
              }
              const t4 = a.exec(remaining());
              if (t4) {
                G += t4[0];
                m.index += t4[0].length;
              }
              push({ type: "text", value: G });
              continue;
            }
            if (B && (B.type === "globstar" || B.star === true)) {
              B.type = "star";
              B.star = true;
              B.value += G;
              B.output = k;
              m.backtrack = true;
              m.globstar = true;
              consume(G);
              continue;
            }
            let e4 = remaining();
            if (u3.noextglob !== true && /^\([^?]/.test(e4)) {
              extglobOpen("star", G);
              continue;
            }
            if (B.type === "star") {
              if (u3.noglobstar === true) {
                consume(G);
                continue;
              }
              const n3 = B.prev;
              const o2 = n3.prev;
              const s2 = n3.type === "slash" || n3.type === "bos";
              const r2 = o2 && (o2.type === "star" || o2.type === "globstar");
              if (u3.bash === true && (!s2 || e4[0] && e4[0] !== "/")) {
                push({ type: "star", value: G, output: "" });
                continue;
              }
              const a2 = m.braces > 0 && (n3.type === "comma" || n3.type === "brace");
              const i2 = w.length && (n3.type === "pipe" || n3.type === "paren");
              if (!s2 && n3.type !== "paren" && !a2 && !i2) {
                push({ type: "star", value: G, output: "" });
                continue;
              }
              while (e4.slice(0, 3) === "/**") {
                const u4 = t3[m.index + 4];
                if (u4 && u4 !== "/") {
                  break;
                }
                e4 = e4.slice(3);
                consume("/**", 3);
              }
              if (n3.type === "bos" && eos()) {
                B.type = "globstar";
                B.value += G;
                B.output = globstar(u3);
                m.output = B.output;
                m.globstar = true;
                consume(G);
                continue;
              }
              if (n3.type === "slash" && n3.prev.type !== "bos" && !r2 && eos()) {
                m.output = m.output.slice(0, -(n3.output + B.output).length);
                n3.output = `(?:${n3.output}`;
                B.type = "globstar";
                B.output = globstar(u3) + (u3.strictSlashes ? ")" : "|$)");
                B.value += G;
                m.globstar = true;
                m.output += n3.output + B.output;
                consume(G);
                continue;
              }
              if (n3.type === "slash" && n3.prev.type !== "bos" && e4[0] === "/") {
                const t4 = e4[1] !== void 0 ? "|$" : "";
                m.output = m.output.slice(0, -(n3.output + B.output).length);
                n3.output = `(?:${n3.output}`;
                B.type = "globstar";
                B.output = `${globstar(u3)}${b}|${b}${t4})`;
                B.value += G;
                m.output += n3.output + B.output;
                m.globstar = true;
                consume(G + M());
                push({ type: "slash", value: "/", output: "" });
                continue;
              }
              if (n3.type === "bos" && e4[0] === "/") {
                B.type = "globstar";
                B.value += G;
                B.output = `(?:^|${b}|${globstar(u3)}${b})`;
                m.output = B.output;
                m.globstar = true;
                consume(G + M());
                push({ type: "slash", value: "/", output: "" });
                continue;
              }
              m.output = m.output.slice(0, -B.output.length);
              B.type = "globstar";
              B.output = globstar(u3);
              B.value += G;
              m.output += B.output;
              m.globstar = true;
              consume(G);
              continue;
            }
            const n2 = { type: "star", value: G, output: k };
            if (u3.bash === true) {
              n2.output = ".*?";
              if (B.type === "bos" || B.type === "slash") {
                n2.output = T + n2.output;
              }
              push(n2);
              continue;
            }
            if (B && (B.type === "bracket" || B.type === "paren") && u3.regex === true) {
              n2.output = G;
              push(n2);
              continue;
            }
            if (m.index === m.start || B.type === "slash" || B.type === "dot") {
              if (B.type === "dot") {
                m.output += x;
                B.output += x;
              } else if (u3.dot === true) {
                m.output += S;
                B.output += S;
              } else {
                m.output += T;
                B.output += T;
              }
              if (D() !== "*") {
                m.output += C;
                B.output += C;
              }
            }
            push(n2);
          }
          while (m.brackets > 0) {
            if (u3.strictBrackets === true) throw new SyntaxError(syntaxError("closing", "]"));
            m.output = o.escapeLast(m.output, "[");
            decrement("brackets");
          }
          while (m.parens > 0) {
            if (u3.strictBrackets === true) throw new SyntaxError(syntaxError("closing", ")"));
            m.output = o.escapeLast(m.output, "(");
            decrement("parens");
          }
          while (m.braces > 0) {
            if (u3.strictBrackets === true) throw new SyntaxError(syntaxError("closing", "}"));
            m.output = o.escapeLast(m.output, "{");
            decrement("braces");
          }
          if (u3.strictSlashes !== true && (B.type === "star" || B.type === "bracket")) {
            push({ type: "maybe_slash", value: "", output: `${b}?` });
          }
          if (m.backtrack === true) {
            m.output = "";
            for (const t4 of m.tokens) {
              m.output += t4.output != null ? t4.output : t4.value;
              if (t4.suffix) {
                m.output += t4.suffix;
              }
            }
          }
          return m;
        };
        parse.fastpaths = (t3, e3) => {
          const u3 = __spreadValues({}, e3);
          const r2 = typeof u3.maxLength === "number" ? Math.min(s, u3.maxLength) : s;
          const a2 = t3.length;
          if (a2 > r2) {
            throw new SyntaxError(`Input length: ${a2}, exceeds maximum allowed length: ${r2}`);
          }
          t3 = c[t3] || t3;
          const { DOT_LITERAL: i2, SLASH_LITERAL: p, ONE_CHAR: l, DOTS_SLASH: f, NO_DOT: A, NO_DOTS: _, NO_DOTS_SLASH: R, STAR: E, START_ANCHOR: h } = n.globChars(u3.windows);
          const g = u3.dot ? _ : A;
          const b = u3.dot ? R : A;
          const C = u3.capture ? "" : "?:";
          const y = { negated: false, prefix: "" };
          let $ = u3.bash === true ? ".*?" : E;
          if (u3.capture) {
            $ = `(${$})`;
          }
          const globstar = (t4) => {
            if (t4.noglobstar === true) return $;
            return `(${C}(?:(?!${h}${t4.dot ? f : i2}).)*?)`;
          };
          const create = (t4) => {
            switch (t4) {
              case "*":
                return `${g}${l}${$}`;
              case ".*":
                return `${i2}${l}${$}`;
              case "*.*":
                return `${g}${$}${i2}${l}${$}`;
              case "*/*":
                return `${g}${$}${p}${l}${b}${$}`;
              case "**":
                return g + globstar(u3);
              case "**/*":
                return `(?:${g}${globstar(u3)}${p})?${b}${l}${$}`;
              case "**/*.*":
                return `(?:${g}${globstar(u3)}${p})?${b}${$}${i2}${l}${$}`;
              case "**/.*":
                return `(?:${g}${globstar(u3)}${p})?${i2}${l}${$}`;
              default: {
                const e4 = /^(.*?)\.(\w+)$/.exec(t4);
                if (!e4) return;
                const u4 = create(e4[1]);
                if (!u4) return;
                return u4 + i2 + e4[2];
              }
            }
          };
          const x = o.removePrefix(t3, y);
          let S = create(x);
          if (S && u3.strictSlashes !== true) {
            S += `${p}?`;
          }
          return S;
        };
        t2.exports = parse;
      }, 510: (t2, e2, u2) => {
        const n = u2(716);
        const o = u2(697);
        const s = u2(96);
        const r = u2(154);
        const isObject = (t3) => t3 && typeof t3 === "object" && !Array.isArray(t3);
        const picomatch = (t3, e3, u3 = false) => {
          if (Array.isArray(t3)) {
            const n3 = t3.map((t4) => picomatch(t4, e3, u3));
            const arrayMatcher = (t4) => {
              for (const e4 of n3) {
                const u4 = e4(t4);
                if (u4) return u4;
              }
              return false;
            };
            return arrayMatcher;
          }
          const n2 = isObject(t3) && t3.tokens && t3.input;
          if (t3 === "" || typeof t3 !== "string" && !n2) {
            throw new TypeError("Expected pattern to be a non-empty string");
          }
          const o2 = e3 || {};
          const s2 = o2.windows;
          const r2 = n2 ? picomatch.compileRe(t3, e3) : picomatch.makeRe(t3, e3, false, true);
          const a = r2.state;
          delete r2.state;
          let isIgnored = () => false;
          if (o2.ignore) {
            const t4 = __spreadProps(__spreadValues({}, e3), { ignore: null, onMatch: null, onResult: null });
            isIgnored = picomatch(o2.ignore, t4, u3);
          }
          const matcher = (u4, n3 = false) => {
            const { isMatch: i, match: c, output: p } = picomatch.test(u4, r2, e3, { glob: t3, posix: s2 });
            const l = { glob: t3, state: a, regex: r2, posix: s2, input: u4, output: p, match: c, isMatch: i };
            if (typeof o2.onResult === "function") {
              o2.onResult(l);
            }
            if (i === false) {
              l.isMatch = false;
              return n3 ? l : false;
            }
            if (isIgnored(u4)) {
              if (typeof o2.onIgnore === "function") {
                o2.onIgnore(l);
              }
              l.isMatch = false;
              return n3 ? l : false;
            }
            if (typeof o2.onMatch === "function") {
              o2.onMatch(l);
            }
            return n3 ? l : true;
          };
          if (u3) {
            matcher.state = a;
          }
          return matcher;
        };
        picomatch.test = (t3, e3, u3, { glob: n2, posix: o2 } = {}) => {
          if (typeof t3 !== "string") {
            throw new TypeError("Expected input to be a string");
          }
          if (t3 === "") {
            return { isMatch: false, output: "" };
          }
          const r2 = u3 || {};
          const a = r2.format || (o2 ? s.toPosixSlashes : null);
          let i = t3 === n2;
          let c = i && a ? a(t3) : t3;
          if (i === false) {
            c = a ? a(t3) : t3;
            i = c === n2;
          }
          if (i === false || r2.capture === true) {
            if (r2.matchBase === true || r2.basename === true) {
              i = picomatch.matchBase(t3, e3, u3, o2);
            } else {
              i = e3.exec(c);
            }
          }
          return { isMatch: Boolean(i), match: i, output: c };
        };
        picomatch.matchBase = (t3, e3, u3) => {
          const n2 = e3 instanceof RegExp ? e3 : picomatch.makeRe(e3, u3);
          return n2.test(s.basename(t3));
        };
        picomatch.isMatch = (t3, e3, u3) => picomatch(e3, u3)(t3);
        picomatch.parse = (t3, e3) => {
          if (Array.isArray(t3)) return t3.map((t4) => picomatch.parse(t4, e3));
          return o(t3, __spreadProps(__spreadValues({}, e3), { fastpaths: false }));
        };
        picomatch.scan = (t3, e3) => n(t3, e3);
        picomatch.compileRe = (t3, e3, u3 = false, n2 = false) => {
          if (u3 === true) {
            return t3.output;
          }
          const o2 = e3 || {};
          const s2 = o2.contains ? "" : "^";
          const r2 = o2.contains ? "" : "$";
          let a = `${s2}(?:${t3.output})${r2}`;
          if (t3 && t3.negated === true) {
            a = `^(?!${a}).*$`;
          }
          const i = picomatch.toRegex(a, e3);
          if (n2 === true) {
            i.state = t3;
          }
          return i;
        };
        picomatch.makeRe = (t3, e3 = {}, u3 = false, n2 = false) => {
          if (!t3 || typeof t3 !== "string") {
            throw new TypeError("Expected a non-empty string");
          }
          let s2 = { negated: false, fastpaths: true };
          if (e3.fastpaths !== false && (t3[0] === "." || t3[0] === "*")) {
            s2.output = o.fastpaths(t3, e3);
          }
          if (!s2.output) {
            s2 = o(t3, e3);
          }
          return picomatch.compileRe(s2, e3, u3, n2);
        };
        picomatch.toRegex = (t3, e3) => {
          try {
            const u3 = e3 || {};
            return new RegExp(t3, u3.flags || (u3.nocase ? "i" : ""));
          } catch (t4) {
            if (e3 && e3.debug === true) throw t4;
            return /$^/;
          }
        };
        picomatch.constants = r;
        t2.exports = picomatch;
      }, 716: (t2, e2, u2) => {
        const n = u2(96);
        const { CHAR_ASTERISK: o, CHAR_AT: s, CHAR_BACKWARD_SLASH: r, CHAR_COMMA: a, CHAR_DOT: i, CHAR_EXCLAMATION_MARK: c, CHAR_FORWARD_SLASH: p, CHAR_LEFT_CURLY_BRACE: l, CHAR_LEFT_PARENTHESES: f, CHAR_LEFT_SQUARE_BRACKET: A, CHAR_PLUS: _, CHAR_QUESTION_MARK: R, CHAR_RIGHT_CURLY_BRACE: E, CHAR_RIGHT_PARENTHESES: h, CHAR_RIGHT_SQUARE_BRACKET: g } = u2(154);
        const isPathSeparator = (t3) => t3 === p || t3 === r;
        const depth = (t3) => {
          if (t3.isPrefix !== true) {
            t3.depth = t3.isGlobstar ? Infinity : 1;
          }
        };
        const scan = (t3, e3) => {
          const u3 = e3 || {};
          const b = t3.length - 1;
          const C = u3.parts === true || u3.scanToEnd === true;
          const y = [];
          const $ = [];
          const x = [];
          let S = t3;
          let H = -1;
          let v = 0;
          let d = 0;
          let L = false;
          let T = false;
          let O = false;
          let k = false;
          let m = false;
          let w = false;
          let N = false;
          let I = false;
          let B = false;
          let G = false;
          let D = 0;
          let M;
          let P;
          let K = { value: "", depth: 0, isGlob: false };
          const eos = () => H >= b;
          const peek = () => S.charCodeAt(H + 1);
          const advance = () => {
            M = P;
            return S.charCodeAt(++H);
          };
          while (H < b) {
            P = advance();
            let t4;
            if (P === r) {
              N = K.backslashes = true;
              P = advance();
              if (P === l) {
                w = true;
              }
              continue;
            }
            if (w === true || P === l) {
              D++;
              while (eos() !== true && (P = advance())) {
                if (P === r) {
                  N = K.backslashes = true;
                  advance();
                  continue;
                }
                if (P === l) {
                  D++;
                  continue;
                }
                if (w !== true && P === i && (P = advance()) === i) {
                  L = K.isBrace = true;
                  O = K.isGlob = true;
                  G = true;
                  if (C === true) {
                    continue;
                  }
                  break;
                }
                if (w !== true && P === a) {
                  L = K.isBrace = true;
                  O = K.isGlob = true;
                  G = true;
                  if (C === true) {
                    continue;
                  }
                  break;
                }
                if (P === E) {
                  D--;
                  if (D === 0) {
                    w = false;
                    L = K.isBrace = true;
                    G = true;
                    break;
                  }
                }
              }
              if (C === true) {
                continue;
              }
              break;
            }
            if (P === p) {
              y.push(H);
              $.push(K);
              K = { value: "", depth: 0, isGlob: false };
              if (G === true) continue;
              if (M === i && H === v + 1) {
                v += 2;
                continue;
              }
              d = H + 1;
              continue;
            }
            if (u3.noext !== true) {
              const t5 = P === _ || P === s || P === o || P === R || P === c;
              if (t5 === true && peek() === f) {
                O = K.isGlob = true;
                k = K.isExtglob = true;
                G = true;
                if (P === c && H === v) {
                  B = true;
                }
                if (C === true) {
                  while (eos() !== true && (P = advance())) {
                    if (P === r) {
                      N = K.backslashes = true;
                      P = advance();
                      continue;
                    }
                    if (P === h) {
                      O = K.isGlob = true;
                      G = true;
                      break;
                    }
                  }
                  continue;
                }
                break;
              }
            }
            if (P === o) {
              if (M === o) m = K.isGlobstar = true;
              O = K.isGlob = true;
              G = true;
              if (C === true) {
                continue;
              }
              break;
            }
            if (P === R) {
              O = K.isGlob = true;
              G = true;
              if (C === true) {
                continue;
              }
              break;
            }
            if (P === A) {
              while (eos() !== true && (t4 = advance())) {
                if (t4 === r) {
                  N = K.backslashes = true;
                  advance();
                  continue;
                }
                if (t4 === g) {
                  T = K.isBracket = true;
                  O = K.isGlob = true;
                  G = true;
                  break;
                }
              }
              if (C === true) {
                continue;
              }
              break;
            }
            if (u3.nonegate !== true && P === c && H === v) {
              I = K.negated = true;
              v++;
              continue;
            }
            if (u3.noparen !== true && P === f) {
              O = K.isGlob = true;
              if (C === true) {
                while (eos() !== true && (P = advance())) {
                  if (P === f) {
                    N = K.backslashes = true;
                    P = advance();
                    continue;
                  }
                  if (P === h) {
                    G = true;
                    break;
                  }
                }
                continue;
              }
              break;
            }
            if (O === true) {
              G = true;
              if (C === true) {
                continue;
              }
              break;
            }
          }
          if (u3.noext === true) {
            k = false;
            O = false;
          }
          let U = S;
          let X = "";
          let F = "";
          if (v > 0) {
            X = S.slice(0, v);
            S = S.slice(v);
            d -= v;
          }
          if (U && O === true && d > 0) {
            U = S.slice(0, d);
            F = S.slice(d);
          } else if (O === true) {
            U = "";
            F = S;
          } else {
            U = S;
          }
          if (U && U !== "" && U !== "/" && U !== S) {
            if (isPathSeparator(U.charCodeAt(U.length - 1))) {
              U = U.slice(0, -1);
            }
          }
          if (u3.unescape === true) {
            if (F) F = n.removeBackslashes(F);
            if (U && N === true) {
              U = n.removeBackslashes(U);
            }
          }
          const Q = { prefix: X, input: t3, start: v, base: U, glob: F, isBrace: L, isBracket: T, isGlob: O, isExtglob: k, isGlobstar: m, negated: I, negatedExtglob: B };
          if (u3.tokens === true) {
            Q.maxDepth = 0;
            if (!isPathSeparator(P)) {
              $.push(K);
            }
            Q.tokens = $;
          }
          if (u3.parts === true || u3.tokens === true) {
            let e4;
            for (let n2 = 0; n2 < y.length; n2++) {
              const o2 = e4 ? e4 + 1 : v;
              const s2 = y[n2];
              const r2 = t3.slice(o2, s2);
              if (u3.tokens) {
                if (n2 === 0 && v !== 0) {
                  $[n2].isPrefix = true;
                  $[n2].value = X;
                } else {
                  $[n2].value = r2;
                }
                depth($[n2]);
                Q.maxDepth += $[n2].depth;
              }
              if (n2 !== 0 || r2 !== "") {
                x.push(r2);
              }
              e4 = s2;
            }
            if (e4 && e4 + 1 < t3.length) {
              const n2 = t3.slice(e4 + 1);
              x.push(n2);
              if (u3.tokens) {
                $[$.length - 1].value = n2;
                depth($[$.length - 1]);
                Q.maxDepth += $[$.length - 1].depth;
              }
            }
            Q.slashes = y;
            Q.parts = x;
          }
          return Q;
        };
        t2.exports = scan;
      }, 96: (t2, e2, u2) => {
        const { REGEX_BACKSLASH: n, REGEX_REMOVE_BACKSLASH: o, REGEX_SPECIAL_CHARS: s, REGEX_SPECIAL_CHARS_GLOBAL: r } = u2(154);
        e2.isObject = (t3) => t3 !== null && typeof t3 === "object" && !Array.isArray(t3);
        e2.hasRegexChars = (t3) => s.test(t3);
        e2.isRegexChar = (t3) => t3.length === 1 && e2.hasRegexChars(t3);
        e2.escapeRegex = (t3) => t3.replace(r, "\\$1");
        e2.toPosixSlashes = (t3) => t3.replace(n, "/");
        e2.removeBackslashes = (t3) => t3.replace(o, (t4) => t4 === "\\" ? "" : t4);
        e2.escapeLast = (t3, u3, n2) => {
          const o2 = t3.lastIndexOf(u3, n2);
          if (o2 === -1) return t3;
          if (t3[o2 - 1] === "\\") return e2.escapeLast(t3, u3, o2 - 1);
          return `${t3.slice(0, o2)}\\${t3.slice(o2)}`;
        };
        e2.removePrefix = (t3, e3 = {}) => {
          let u3 = t3;
          if (u3.startsWith("./")) {
            u3 = u3.slice(2);
            e3.prefix = "./";
          }
          return u3;
        };
        e2.wrapOutput = (t3, e3 = {}, u3 = {}) => {
          const n2 = u3.contains ? "" : "^";
          const o2 = u3.contains ? "" : "$";
          let s2 = `${n2}(?:${t3})${o2}`;
          if (e3.negated === true) {
            s2 = `(?:^(?!${s2}).*$)`;
          }
          return s2;
        };
        e2.basename = (t3, { windows: e3 } = {}) => {
          const u3 = t3.split(e3 ? /[\\/]/ : "/");
          const n2 = u3[u3.length - 1];
          if (n2 === "") {
            return u3[u3.length - 2];
          }
          return n2;
        };
      } };
      var e = {};
      function __nccwpck_require__(u2) {
        var n = e[u2];
        if (n !== void 0) {
          return n.exports;
        }
        var o = e[u2] = { exports: {} };
        var s = true;
        try {
          t[u2](o, o.exports, __nccwpck_require__);
          s = false;
        } finally {
          if (s) delete e[u2];
        }
        return o.exports;
      }
      if (typeof __nccwpck_require__ !== "undefined") __nccwpck_require__.ab = __dirname + "/";
      var u = __nccwpck_require__(170);
      module.exports = u;
    })();
  }
});

// node_modules/next/dist/shared/lib/match-local-pattern.js
var require_match_local_pattern = __commonJS({
  "node_modules/next/dist/shared/lib/match-local-pattern.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all) Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
    }
    _export(exports, {
      hasLocalMatch: function() {
        return hasLocalMatch;
      },
      matchLocalPattern: function() {
        return matchLocalPattern;
      }
    });
    var _picomatch = require_picomatch();
    function matchLocalPattern(pattern, url) {
      if (pattern.search !== void 0) {
        if (pattern.search !== url.search) {
          return false;
        }
      }
      var _pattern_pathname;
      if (!(0, _picomatch.makeRe)((_pattern_pathname = pattern.pathname) != null ? _pattern_pathname : "**", {
        dot: true
      }).test(url.pathname)) {
        return false;
      }
      return true;
    }
    function hasLocalMatch(localPatterns, urlPathAndQuery) {
      if (!localPatterns) {
        return true;
      }
      const url = new URL(urlPathAndQuery, "http://n");
      return localPatterns.some((p) => matchLocalPattern(p, url));
    }
  }
});

// node_modules/next/dist/shared/lib/match-remote-pattern.js
var require_match_remote_pattern = __commonJS({
  "node_modules/next/dist/shared/lib/match-remote-pattern.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all) Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
    }
    _export(exports, {
      hasRemoteMatch: function() {
        return hasRemoteMatch;
      },
      matchRemotePattern: function() {
        return matchRemotePattern;
      }
    });
    var _picomatch = require_picomatch();
    function matchRemotePattern(pattern, url) {
      if (pattern.protocol !== void 0) {
        if (pattern.protocol.replace(/:$/, "") !== url.protocol.replace(/:$/, "")) {
          return false;
        }
      }
      if (pattern.port !== void 0) {
        if (pattern.port !== url.port) {
          return false;
        }
      }
      if (pattern.hostname === void 0) {
        throw Object.defineProperty(new Error("Pattern should define hostname but found\n" + JSON.stringify(pattern)), "__NEXT_ERROR_CODE", {
          value: "E410",
          enumerable: false,
          configurable: true
        });
      } else {
        if (!(0, _picomatch.makeRe)(pattern.hostname).test(url.hostname)) {
          return false;
        }
      }
      if (pattern.search !== void 0) {
        if (pattern.search !== url.search) {
          return false;
        }
      }
      var _pattern_pathname;
      if (!(0, _picomatch.makeRe)((_pattern_pathname = pattern.pathname) != null ? _pattern_pathname : "**", {
        dot: true
      }).test(url.pathname)) {
        return false;
      }
      return true;
    }
    function hasRemoteMatch(domains, remotePatterns, url) {
      return domains.some((domain) => url.hostname === domain) || remotePatterns.some((p) => matchRemotePattern(p, url));
    }
  }
});

// node_modules/next/dist/shared/lib/image-loader.js
var require_image_loader = __commonJS({
  "node_modules/next/dist/shared/lib/image-loader.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "default", {
      enumerable: true,
      get: function() {
        return _default;
      }
    });
    var DEFAULT_Q = 75;
    function defaultLoader(param) {
      let { config, src, width, quality } = param;
      var _config_qualities;
      if (process.env.NODE_ENV !== "production") {
        const missingValues = [];
        if (!src) missingValues.push("src");
        if (!width) missingValues.push("width");
        if (missingValues.length > 0) {
          throw Object.defineProperty(new Error("Next Image Optimization requires " + missingValues.join(", ") + " to be provided. Make sure you pass them as props to the `next/image` component. Received: " + JSON.stringify({
            src,
            width,
            quality
          })), "__NEXT_ERROR_CODE", {
            value: "E188",
            enumerable: false,
            configurable: true
          });
        }
        if (src.startsWith("//")) {
          throw Object.defineProperty(new Error('Failed to parse src "' + src + '" on `next/image`, protocol-relative URL (//) must be changed to an absolute URL (http:// or https://)'), "__NEXT_ERROR_CODE", {
            value: "E360",
            enumerable: false,
            configurable: true
          });
        }
        if (src.startsWith("/") && config.localPatterns) {
          if (process.env.NODE_ENV !== "test" && // micromatch isn't compatible with edge runtime
          process.env.NEXT_RUNTIME !== "edge") {
            const { hasLocalMatch } = require_match_local_pattern();
            if (!hasLocalMatch(config.localPatterns, src)) {
              throw Object.defineProperty(new Error("Invalid src prop (" + src + ") on `next/image` does not match `images.localPatterns` configured in your `next.config.js`\nSee more info: https://nextjs.org/docs/messages/next-image-unconfigured-localpatterns"), "__NEXT_ERROR_CODE", {
                value: "E426",
                enumerable: false,
                configurable: true
              });
            }
          }
        }
        if (!src.startsWith("/") && (config.domains || config.remotePatterns)) {
          let parsedSrc;
          try {
            parsedSrc = new URL(src);
          } catch (err) {
            console.error(err);
            throw Object.defineProperty(new Error('Failed to parse src "' + src + '" on `next/image`, if using relative image it must start with a leading slash "/" or be an absolute URL (http:// or https://)'), "__NEXT_ERROR_CODE", {
              value: "E63",
              enumerable: false,
              configurable: true
            });
          }
          if (process.env.NODE_ENV !== "test" && // micromatch isn't compatible with edge runtime
          process.env.NEXT_RUNTIME !== "edge") {
            const { hasRemoteMatch } = require_match_remote_pattern();
            if (!hasRemoteMatch(config.domains, config.remotePatterns, parsedSrc)) {
              throw Object.defineProperty(new Error("Invalid src prop (" + src + ') on `next/image`, hostname "' + parsedSrc.hostname + '" is not configured under images in your `next.config.js`\nSee more info: https://nextjs.org/docs/messages/next-image-unconfigured-host'), "__NEXT_ERROR_CODE", {
                value: "E231",
                enumerable: false,
                configurable: true
              });
            }
          }
        }
        if (quality && config.qualities && !config.qualities.includes(quality)) {
          throw Object.defineProperty(new Error("Invalid quality prop (" + quality + ") on `next/image` does not match `images.qualities` configured in your `next.config.js`\nSee more info: https://nextjs.org/docs/messages/next-image-unconfigured-qualities"), "__NEXT_ERROR_CODE", {
            value: "E623",
            enumerable: false,
            configurable: true
          });
        }
      }
      const q = quality || ((_config_qualities = config.qualities) == null ? void 0 : _config_qualities.reduce((prev, cur) => Math.abs(cur - DEFAULT_Q) < Math.abs(prev - DEFAULT_Q) ? cur : prev)) || DEFAULT_Q;
      return config.path + "?url=" + encodeURIComponent(src) + "&w=" + width + "&q=" + q + (src.startsWith("/_next/static/media/") && process.env.NEXT_DEPLOYMENT_ID ? "&dpl=" + process.env.NEXT_DEPLOYMENT_ID : "");
    }
    defaultLoader.__next_img_default = true;
    var _default = defaultLoader;
  }
});

// node_modules/next/dist/client/use-merged-ref.js
var require_use_merged_ref = __commonJS({
  "node_modules/next/dist/client/use-merged-ref.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "useMergedRef", {
      enumerable: true,
      get: function() {
        return useMergedRef;
      }
    });
    var _react = __require("react");
    function useMergedRef(refA, refB) {
      const cleanupA = (0, _react.useRef)(null);
      const cleanupB = (0, _react.useRef)(null);
      return (0, _react.useCallback)((current) => {
        if (current === null) {
          const cleanupFnA = cleanupA.current;
          if (cleanupFnA) {
            cleanupA.current = null;
            cleanupFnA();
          }
          const cleanupFnB = cleanupB.current;
          if (cleanupFnB) {
            cleanupB.current = null;
            cleanupFnB();
          }
        } else {
          if (refA) {
            cleanupA.current = applyRef(refA, current);
          }
          if (refB) {
            cleanupB.current = applyRef(refB, current);
          }
        }
      }, [
        refA,
        refB
      ]);
    }
    function applyRef(refA, current) {
      if (typeof refA === "function") {
        const cleanup = refA(current);
        if (typeof cleanup === "function") {
          return cleanup;
        } else {
          return () => refA(null);
        }
      } else {
        refA.current = current;
        return () => {
          refA.current = null;
        };
      }
    }
    if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
      Object.defineProperty(exports.default, "__esModule", { value: true });
      Object.assign(exports.default, exports);
      module.exports = exports.default;
    }
  }
});

// node_modules/next/dist/client/image-component.js
var require_image_component = __commonJS({
  "node_modules/next/dist/client/image-component.js"(exports, module) {
    "use strict";
    "use client";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "Image", {
      enumerable: true,
      get: function() {
        return Image2;
      }
    });
    var _interop_require_default = require_interop_require_default();
    var _interop_require_wildcard = require_interop_require_wildcard();
    var _jsxruntime = __require("react/jsx-runtime");
    var _react = /* @__PURE__ */ _interop_require_wildcard._(__require("react"));
    var _reactdom = /* @__PURE__ */ _interop_require_default._(__require("react-dom"));
    var _head = /* @__PURE__ */ _interop_require_default._(require_head());
    var _getimgprops = require_get_img_props();
    var _imageconfig = require_image_config();
    var _imageconfigcontextsharedruntime = require_image_config_context_shared_runtime();
    var _warnonce = require_warn_once();
    var _routercontextsharedruntime = require_router_context_shared_runtime();
    var _imageloader = /* @__PURE__ */ _interop_require_default._(require_image_loader());
    var _usemergedref = require_use_merged_ref();
    var configEnv = process.env.__NEXT_IMAGE_OPTS;
    if (typeof window === "undefined") {
      ;
      globalThis.__NEXT_IMAGE_IMPORTED = true;
    }
    function handleLoading(img, placeholder, onLoadRef, onLoadingCompleteRef, setBlurComplete, unoptimized, sizesInput) {
      const src = img == null ? void 0 : img.src;
      if (!img || img["data-loaded-src"] === src) {
        return;
      }
      img["data-loaded-src"] = src;
      const p = "decode" in img ? img.decode() : Promise.resolve();
      p.catch(() => {
      }).then(() => {
        if (!img.parentElement || !img.isConnected) {
          return;
        }
        if (placeholder !== "empty") {
          setBlurComplete(true);
        }
        if (onLoadRef == null ? void 0 : onLoadRef.current) {
          const event = new Event("load");
          Object.defineProperty(event, "target", {
            writable: false,
            value: img
          });
          let prevented = false;
          let stopped = false;
          onLoadRef.current(__spreadProps(__spreadValues({}, event), {
            nativeEvent: event,
            currentTarget: img,
            target: img,
            isDefaultPrevented: () => prevented,
            isPropagationStopped: () => stopped,
            persist: () => {
            },
            preventDefault: () => {
              prevented = true;
              event.preventDefault();
            },
            stopPropagation: () => {
              stopped = true;
              event.stopPropagation();
            }
          }));
        }
        if (onLoadingCompleteRef == null ? void 0 : onLoadingCompleteRef.current) {
          onLoadingCompleteRef.current(img);
        }
        if (process.env.NODE_ENV !== "production") {
          const origSrc = new URL(src, "http://n").searchParams.get("url") || src;
          if (img.getAttribute("data-nimg") === "fill") {
            if (!unoptimized && (!sizesInput || sizesInput === "100vw")) {
              let widthViewportRatio = img.getBoundingClientRect().width / window.innerWidth;
              if (widthViewportRatio < 0.6) {
                if (sizesInput === "100vw") {
                  (0, _warnonce.warnOnce)('Image with src "' + origSrc + '" has "fill" prop and "sizes" prop of "100vw", but image is not rendered at full viewport width. Please adjust "sizes" to improve page performance. Read more: https://nextjs.org/docs/api-reference/next/image#sizes');
                } else {
                  (0, _warnonce.warnOnce)('Image with src "' + origSrc + '" has "fill" but is missing "sizes" prop. Please add it to improve page performance. Read more: https://nextjs.org/docs/api-reference/next/image#sizes');
                }
              }
            }
            if (img.parentElement) {
              const { position } = window.getComputedStyle(img.parentElement);
              const valid = [
                "absolute",
                "fixed",
                "relative"
              ];
              if (!valid.includes(position)) {
                (0, _warnonce.warnOnce)('Image with src "' + origSrc + '" has "fill" and parent element with invalid "position". Provided "' + position + '" should be one of ' + valid.map(String).join(",") + ".");
              }
            }
            if (img.height === 0) {
              (0, _warnonce.warnOnce)('Image with src "' + origSrc + '" has "fill" and a height value of 0. This is likely because the parent element of the image has not been styled to have a set height.');
            }
          }
          const heightModified = img.height.toString() !== img.getAttribute("height");
          const widthModified = img.width.toString() !== img.getAttribute("width");
          if (heightModified && !widthModified || !heightModified && widthModified) {
            (0, _warnonce.warnOnce)('Image with src "' + origSrc + `" has either width or height modified, but not the other. If you use CSS to change the size of your image, also include the styles 'width: "auto"' or 'height: "auto"' to maintain the aspect ratio.`);
          }
        }
      });
    }
    function getDynamicProps(fetchPriority) {
      if (Boolean(_react.use)) {
        return {
          fetchPriority
        };
      }
      return {
        fetchpriority: fetchPriority
      };
    }
    var ImageElement = /* @__PURE__ */ (0, _react.forwardRef)((param, forwardedRef) => {
      let _a = param, { src, srcSet, sizes, height, width, decoding, className, style, fetchPriority, placeholder, loading, unoptimized, fill, onLoadRef, onLoadingCompleteRef, setBlurComplete, setShowAltText, sizesInput, onLoad, onError } = _a, rest = __objRest(_a, ["src", "srcSet", "sizes", "height", "width", "decoding", "className", "style", "fetchPriority", "placeholder", "loading", "unoptimized", "fill", "onLoadRef", "onLoadingCompleteRef", "setBlurComplete", "setShowAltText", "sizesInput", "onLoad", "onError"]);
      const ownRef = (0, _react.useCallback)((img) => {
        if (!img) {
          return;
        }
        if (onError) {
          img.src = img.src;
        }
        if (process.env.NODE_ENV !== "production") {
          if (!src) {
            console.error('Image is missing required "src" property:', img);
          }
          if (img.getAttribute("alt") === null) {
            console.error('Image is missing required "alt" property. Please add Alternative Text to describe the image for screen readers and search engines.');
          }
        }
        if (img.complete) {
          handleLoading(img, placeholder, onLoadRef, onLoadingCompleteRef, setBlurComplete, unoptimized, sizesInput);
        }
      }, [
        src,
        placeholder,
        onLoadRef,
        onLoadingCompleteRef,
        setBlurComplete,
        onError,
        unoptimized,
        sizesInput
      ]);
      const ref = (0, _usemergedref.useMergedRef)(forwardedRef, ownRef);
      return /* @__PURE__ */ (0, _jsxruntime.jsx)("img", __spreadProps(__spreadValues(__spreadValues({}, rest), getDynamicProps(fetchPriority)), {
        // It's intended to keep `loading` before `src` because React updates
        // props in order which causes Safari/Firefox to not lazy load properly.
        // See https://github.com/facebook/react/issues/25883
        loading,
        width,
        height,
        decoding,
        "data-nimg": fill ? "fill" : "1",
        className,
        style,
        // It's intended to keep `src` the last attribute because React updates
        // attributes in order. If we keep `src` the first one, Safari will
        // immediately start to fetch `src`, before `sizes` and `srcSet` are even
        // updated by React. That causes multiple unnecessary requests if `srcSet`
        // and `sizes` are defined.
        // This bug cannot be reproduced in Chrome or Firefox.
        sizes,
        srcSet,
        src,
        ref,
        onLoad: (event) => {
          const img = event.currentTarget;
          handleLoading(img, placeholder, onLoadRef, onLoadingCompleteRef, setBlurComplete, unoptimized, sizesInput);
        },
        onError: (event) => {
          setShowAltText(true);
          if (placeholder !== "empty") {
            setBlurComplete(true);
          }
          if (onError) {
            onError(event);
          }
        }
      }));
    });
    function ImagePreload(param) {
      let { isAppRouter, imgAttributes } = param;
      const opts = __spreadValues({
        as: "image",
        imageSrcSet: imgAttributes.srcSet,
        imageSizes: imgAttributes.sizes,
        crossOrigin: imgAttributes.crossOrigin,
        referrerPolicy: imgAttributes.referrerPolicy
      }, getDynamicProps(imgAttributes.fetchPriority));
      if (isAppRouter && _reactdom.default.preload) {
        _reactdom.default.preload(
          imgAttributes.src,
          // @ts-expect-error TODO: upgrade to `@types/react-dom@18.3.x`
          opts
        );
        return null;
      }
      return /* @__PURE__ */ (0, _jsxruntime.jsx)(_head.default, {
        children: /* @__PURE__ */ (0, _jsxruntime.jsx)("link", __spreadValues({
          rel: "preload",
          // Note how we omit the `href` attribute, as it would only be relevant
          // for browsers that do not support `imagesrcset`, and in those cases
          // it would cause the incorrect image to be preloaded.
          //
          // https://html.spec.whatwg.org/multipage/semantics.html#attr-link-imagesrcset
          href: imgAttributes.srcSet ? void 0 : imgAttributes.src
        }, opts), "__nimg-" + imgAttributes.src + imgAttributes.srcSet + imgAttributes.sizes)
      });
    }
    var Image2 = /* @__PURE__ */ (0, _react.forwardRef)((props, forwardedRef) => {
      const pagesRouter = (0, _react.useContext)(_routercontextsharedruntime.RouterContext);
      const isAppRouter = !pagesRouter;
      const configContext = (0, _react.useContext)(_imageconfigcontextsharedruntime.ImageConfigContext);
      const config = (0, _react.useMemo)(() => {
        var _c_qualities;
        const c = configEnv || configContext || _imageconfig.imageConfigDefault;
        const allSizes = [
          ...c.deviceSizes,
          ...c.imageSizes
        ].sort((a, b) => a - b);
        const deviceSizes = c.deviceSizes.sort((a, b) => a - b);
        const qualities = (_c_qualities = c.qualities) == null ? void 0 : _c_qualities.sort((a, b) => a - b);
        return __spreadProps(__spreadValues({}, c), {
          allSizes,
          deviceSizes,
          qualities
        });
      }, [
        configContext
      ]);
      const { onLoad, onLoadingComplete } = props;
      const onLoadRef = (0, _react.useRef)(onLoad);
      (0, _react.useEffect)(() => {
        onLoadRef.current = onLoad;
      }, [
        onLoad
      ]);
      const onLoadingCompleteRef = (0, _react.useRef)(onLoadingComplete);
      (0, _react.useEffect)(() => {
        onLoadingCompleteRef.current = onLoadingComplete;
      }, [
        onLoadingComplete
      ]);
      const [blurComplete, setBlurComplete] = (0, _react.useState)(false);
      const [showAltText, setShowAltText] = (0, _react.useState)(false);
      const { props: imgAttributes, meta: imgMeta } = (0, _getimgprops.getImgProps)(props, {
        defaultLoader: _imageloader.default,
        imgConf: config,
        blurComplete,
        showAltText
      });
      return /* @__PURE__ */ (0, _jsxruntime.jsxs)(_jsxruntime.Fragment, {
        children: [
          /* @__PURE__ */ (0, _jsxruntime.jsx)(ImageElement, __spreadProps(__spreadValues({}, imgAttributes), {
            unoptimized: imgMeta.unoptimized,
            placeholder: imgMeta.placeholder,
            fill: imgMeta.fill,
            onLoadRef,
            onLoadingCompleteRef,
            setBlurComplete,
            setShowAltText,
            sizesInput: props.sizes,
            ref: forwardedRef
          })),
          imgMeta.priority ? /* @__PURE__ */ (0, _jsxruntime.jsx)(ImagePreload, {
            isAppRouter,
            imgAttributes
          }) : null
        ]
      });
    });
    if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
      Object.defineProperty(exports.default, "__esModule", { value: true });
      Object.assign(exports.default, exports);
      module.exports = exports.default;
    }
  }
});

// node_modules/next/dist/shared/lib/image-external.js
var require_image_external = __commonJS({
  "node_modules/next/dist/shared/lib/image-external.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all) Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
    }
    _export(exports, {
      default: function() {
        return _default;
      },
      getImageProps: function() {
        return getImageProps;
      }
    });
    var _interop_require_default = require_interop_require_default();
    var _getimgprops = require_get_img_props();
    var _imagecomponent = require_image_component();
    var _imageloader = /* @__PURE__ */ _interop_require_default._(require_image_loader());
    function getImageProps(imgProps) {
      const { props } = (0, _getimgprops.getImgProps)(imgProps, {
        defaultLoader: _imageloader.default,
        // This is replaced by webpack define plugin
        imgConf: process.env.__NEXT_IMAGE_OPTS
      });
      for (const [key, value] of Object.entries(props)) {
        if (value === void 0) {
          delete props[key];
        }
      }
      return {
        props
      };
    }
    var _default = _imagecomponent.Image;
  }
});

// node_modules/next/image.js
var require_image = __commonJS({
  "node_modules/next/image.js"(exports, module) {
    "use strict";
    module.exports = require_image_external();
  }
});

// src/components/Input/Input.tsx
import React, { useState, useEffect, useRef } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";
var Input = (_a) => {
  var _b = _a, {
    leftIcon: LeftIcon,
    rightIcon: RightIcon,
    label,
    error,
    searchable = false,
    options = [],
    maxLength,
    showCharacterCount = false,
    type = "text",
    theme,
    mask,
    validation,
    wrapperClassName = "",
    labelClassName = "",
    inputContainerClassName = "",
    inputClassName = "",
    iconContainerClassName = "",
    iconClassName = "",
    errorClassName = "",
    optionsContainerClassName = "",
    optionClassName = "",
    characterCountClassName = "",
    value,
    defaultValue
  } = _b, props = __objRest(_b, [
    "leftIcon",
    "rightIcon",
    "label",
    "error",
    "searchable",
    "options",
    "maxLength",
    "showCharacterCount",
    "type",
    "theme",
    "mask",
    "validation",
    "wrapperClassName",
    "labelClassName",
    "inputContainerClassName",
    "inputClassName",
    "iconContainerClassName",
    "iconClassName",
    "errorClassName",
    "optionsContainerClassName",
    "optionClassName",
    "characterCountClassName",
    "value",
    "defaultValue"
  ]);
  const [isFocused, setIsFocused] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const [filteredOptions, setFilteredOptions] = useState([]);
  const [showPassword, setShowPassword] = useState(false);
  const [validationError, setValidationError] = useState("");
  const [inputValue, setInputValue] = useState(value || defaultValue || "");
  const inputRef = useRef(null);
  const optionsRef = useRef(null);
  const maskPatterns = {
    phone: {
      pattern: "(###) ###-####",
      placeholder: "_"
    },
    date: {
      pattern: "##/##/####",
      placeholder: "_"
    },
    "credit-card": {
      pattern: "#### #### #### ####",
      placeholder: "_"
    },
    ssn: {
      pattern: "###-##-####",
      placeholder: "_"
    },
    zip: {
      pattern: "#####-####",
      placeholder: "_"
    },
    currency: {
      pattern: "$#,##0.00",
      placeholder: "_"
    }
  };
  const unapplyMask = (maskedValue, maskType) => {
    if (!maskType) return maskedValue;
    if (maskType === "currency") {
      return maskedValue.replace(/[$,]/g, "");
    }
    return maskedValue.replace(/\D/g, "");
  };
  const applyMask = (value2, maskType, customPattern) => {
    if (!maskType) return value2;
    const maskConfig = maskType === "custom" ? {
      pattern: customPattern || "",
      placeholder: (mask == null ? void 0 : mask.placeholder) || "_"
    } : maskPatterns[maskType];
    if (!(maskConfig == null ? void 0 : maskConfig.pattern)) return value2;
    if (maskType === "currency") {
      const numericValue = value2.replace(/[$,]/g, "");
      if (!numericValue) return "";
      const amount = parseFloat(numericValue) / 100;
      return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      }).format(amount);
    }
    let result = "";
    let valueIndex = 0;
    const digitsOnly = value2.replace(/\D/g, "");
    for (let i = 0; i < maskConfig.pattern.length; i++) {
      if (valueIndex >= digitsOnly.length) {
        if (maskConfig.pattern[i] === "#") {
          result += maskConfig.placeholder;
        } else {
          result += maskConfig.pattern[i];
        }
      } else if (maskConfig.pattern[i] === "#") {
        result += digitsOnly[valueIndex];
        valueIndex++;
      } else {
        result += maskConfig.pattern[i];
      }
    }
    return result;
  };
  useEffect(() => {
    if (searchable) {
      setFilteredOptions(options);
    }
  }, [options, searchable]);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (optionsRef.current && !optionsRef.current.contains(event.target) && inputRef.current && !inputRef.current.contains(event.target)) {
        setShowOptions(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  useEffect(() => {
    if (value !== void 0) {
      setInputValue(value);
    }
  }, [value]);
  const handleChange = (e) => {
    let newValue = e.target.value;
    if (mask) {
      const isBackspace = e.nativeEvent instanceof InputEvent && e.nativeEvent.inputType === "deleteContentBackward";
      if (isBackspace) {
        const unmaskedValue = unapplyMask(String(inputValue), mask.type);
        newValue = applyMask(
          unmaskedValue.slice(0, -1),
          mask.type,
          mask.pattern
        );
      } else {
        const unmaskedValue = unapplyMask(newValue, mask.type);
        newValue = applyMask(unmaskedValue, mask.type, mask.pattern);
      }
    }
    setInputValue(newValue);
    if (searchable) {
      const filtered = options.filter(
        (option) => option.toLowerCase().includes(newValue.toLowerCase())
      );
      setFilteredOptions(filtered);
      setShowOptions(true);
    }
    if ((validation == null ? void 0 : validation.pattern) && !validation.pattern.test(newValue)) {
      setValidationError(validation.message || "Invalid input");
    } else {
      setValidationError("");
    }
    if (props.onChange) {
      const event = __spreadProps(__spreadValues({}, e), {
        target: __spreadProps(__spreadValues({}, e.target), {
          value: newValue
        })
      });
      props.onChange(event);
    }
  };
  const handleFocus = (e) => {
    var _a2;
    setIsFocused(true);
    if (searchable) {
      setShowOptions(true);
      setFilteredOptions(options);
    }
    (_a2 = props.onFocus) == null ? void 0 : _a2.call(props, e);
  };
  const handleBlur = (e) => {
    var _a2;
    setIsFocused(false);
    setTimeout(() => {
      setShowOptions(false);
    }, 200);
    (_a2 = props.onBlur) == null ? void 0 : _a2.call(props, e);
  };
  const handleOptionClick = (option) => {
    let newValue = option;
    if (mask) {
      newValue = applyMask(option, mask.type, mask.pattern);
    }
    setInputValue(newValue);
    const syntheticEvent = {
      target: {
        value: newValue,
        name: props.name,
        type: "text"
      },
      currentTarget: {
        value: newValue,
        name: props.name,
        type: "text"
      },
      preventDefault: () => {
      },
      stopPropagation: () => {
      }
    };
    if (props.onChange) {
      props.onChange(syntheticEvent);
    }
    setShowOptions(false);
  };
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const displayError = error || validationError;
  const isPassword = type === "password";
  const currentLength = String(inputValue).length;
  const getThemeClasses = () => {
    if (theme) {
      return {
        label: theme === "dark" ? "text-white" : "text-gray-900",
        input: theme === "dark" ? "text-white" : "text-gray-900",
        border: theme === "dark" ? "border-gray-600" : "border-gray-300",
        icon: theme === "dark" ? "text-gray-400" : "text-gray-500",
        options: theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-gray-900",
        optionHover: theme === "dark" ? "hover:bg-gray-700" : "hover:bg-gray-100",
        characterCount: theme === "dark" ? "text-gray-400" : "text-gray-500"
      };
    }
    return {
      label: "text-gray-900 dark:text-white",
      input: "text-gray-900 dark:text-white",
      border: "border-gray-300 dark:border-gray-600",
      icon: "text-gray-500 dark:text-gray-400",
      options: "bg-white dark:bg-gray-800 text-gray-900 dark:text-white",
      optionHover: "hover:bg-gray-100 dark:hover:bg-gray-700",
      characterCount: "text-gray-500 dark:text-gray-400"
    };
  };
  const themeClasses = getThemeClasses();
  return /* @__PURE__ */ React.createElement("div", { className: `relative flex flex-col gap-1 ${wrapperClassName}` }, label && /* @__PURE__ */ React.createElement(
    "label",
    {
      className: `text-sm font-medium ${themeClasses.label} ${labelClassName}`
    },
    label
  ), /* @__PURE__ */ React.createElement(
    "div",
    {
      className: `relative flex items-center border rounded-md ${isFocused ? "ring-2 ring-blue-500 border-blue-500" : themeClasses.border} ${displayError ? "border-red-500" : ""} ${inputContainerClassName}`
    },
    LeftIcon && /* @__PURE__ */ React.createElement(
      "div",
      {
        className: `flex items-center px-3 ${themeClasses.icon} ${iconContainerClassName}`
      },
      /* @__PURE__ */ React.createElement(LeftIcon, { className: `w-5 h-5 ${iconClassName}` })
    ),
    /* @__PURE__ */ React.createElement(
      "input",
      __spreadProps(__spreadValues({}, props), {
        ref: inputRef,
        type: isPassword ? showPassword ? "text" : "password" : type,
        className: `w-full px-3 py-2 bg-transparent outline-none ${themeClasses.input} ${inputClassName}`,
        onFocus: handleFocus,
        onBlur: handleBlur,
        onChange: handleChange,
        maxLength,
        value: inputValue,
        placeholder: mask ? applyMask("", mask.type, mask.pattern) : props.placeholder
      })
    ),
    isPassword && /* @__PURE__ */ React.createElement(
      "button",
      {
        type: "button",
        onClick: togglePasswordVisibility,
        className: `flex items-center px-3 ${themeClasses.icon} ${iconContainerClassName}`
      },
      showPassword ? /* @__PURE__ */ React.createElement(BsEyeSlash, { className: `w-5 h-5 ${iconClassName}` }) : /* @__PURE__ */ React.createElement(BsEye, { className: `w-5 h-5 ${iconClassName}` })
    ),
    RightIcon && !isPassword && /* @__PURE__ */ React.createElement(
      "div",
      {
        className: `flex items-center px-3 ${themeClasses.icon} ${iconContainerClassName}`
      },
      /* @__PURE__ */ React.createElement(RightIcon, { className: `w-5 h-5 ${iconClassName}` })
    )
  ), /* @__PURE__ */ React.createElement("div", { className: "flex justify-between items-center" }, displayError && /* @__PURE__ */ React.createElement("span", { className: `text-sm text-red-500 ${errorClassName}` }, displayError), showCharacterCount && maxLength && /* @__PURE__ */ React.createElement(
    "span",
    {
      className: `text-sm ${themeClasses.characterCount} ml-auto ${characterCountClassName}`
    },
    currentLength,
    "/",
    maxLength
  )), searchable && showOptions && filteredOptions.length > 0 && /* @__PURE__ */ React.createElement(
    "div",
    {
      ref: optionsRef,
      className: `absolute z-50 w-full mt-1 top-full ${themeClasses.options} border rounded-md shadow-lg max-h-60 overflow-y-auto ${optionsContainerClassName}`
    },
    filteredOptions.map((option, index) => /* @__PURE__ */ React.createElement(
      "div",
      {
        key: index,
        className: `px-3 py-2 cursor-pointer ${themeClasses.optionHover} ${optionClassName}`,
        onMouseDown: (e) => {
          e.preventDefault();
          handleOptionClick(option);
        }
      },
      option
    ))
  ));
};
var Input_default = Input;

// src/components/Select/Select.tsx
import React2, { useState as useState2, useEffect as useEffect2, useRef as useRef2 } from "react";
import { IoIosArrowDown } from "react-icons/io";
var Select = ({
  options,
  value,
  onChange,
  placeholder = "Select an option",
  label,
  error,
  multiple = false,
  searchable = false,
  leftIcon: LeftIcon,
  disabled = false,
  clearable = false,
  maxDisplayedItems = 3,
  groupBy,
  popupPosition = "bottom",
  customOptionRenderer,
  wrapperClassName = "",
  labelClassName = "",
  selectContainerClassName = "",
  selectClassName = "",
  iconContainerClassName = "",
  iconClassName = "",
  errorClassName = "",
  optionsContainerClassName = "",
  searchInputClassName = "",
  optionsListClassName = "",
  optionClassName = "",
  groupHeaderClassName = "",
  noOptionsClassName = ""
}) => {
  const [isOpen, setIsOpen] = useState2(false);
  const [searchQuery, setSearchQuery] = useState2("");
  const [focusedIndex, setFocusedIndex] = useState2(-1);
  const wrapperRef = useRef2(null);
  const searchInputRef = useRef2(null);
  const filteredOptions = options.filter(
    (option) => option.label.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const groupedOptions = groupBy ? filteredOptions.reduce((acc, option) => {
    const group = option[groupBy] || "Other";
    if (!acc[group]) {
      acc[group] = [];
    }
    acc[group].push(option);
    return acc;
  }, {}) : { "": filteredOptions };
  useEffect2(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  useEffect2(() => {
    if (isOpen && searchable && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isOpen, searchable]);
  const handleKeyDown = (e) => {
    if (!isOpen) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        setIsOpen(true);
      }
      return;
    }
    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setFocusedIndex(
          (prev) => Math.min(prev + 1, filteredOptions.length - 1)
        );
        break;
      case "ArrowUp":
        e.preventDefault();
        setFocusedIndex((prev) => Math.max(prev - 1, 0));
        break;
      case "Enter":
        e.preventDefault();
        if (focusedIndex >= 0) {
          handleSelect(filteredOptions[focusedIndex].value);
        }
        break;
      case "Escape":
        e.preventDefault();
        setIsOpen(false);
        break;
    }
  };
  const handleSelect = (optionValue) => {
    if (multiple) {
      const currentValue = Array.isArray(value) ? value : [];
      const newValue = currentValue.includes(optionValue) ? currentValue.filter((v) => v !== optionValue) : [...currentValue, optionValue];
      onChange == null ? void 0 : onChange(newValue);
    } else {
      onChange == null ? void 0 : onChange(optionValue);
      setIsOpen(false);
    }
  };
  const handleClear = (e) => {
    e.stopPropagation();
    onChange == null ? void 0 : onChange(multiple ? [] : "");
  };
  const isSelected = (optionValue) => {
    if (multiple) {
      return Array.isArray(value) && value.includes(optionValue);
    }
    return value === optionValue;
  };
  const getSelectedLabels = () => {
    var _a;
    if (!value) return placeholder;
    if (multiple) {
      const selectedOptions = options.filter(
        (option) => value.includes(option.value)
      );
      if (selectedOptions.length === 0) return placeholder;
      if (selectedOptions.length > maxDisplayedItems) {
        return `${selectedOptions.length} items selected`;
      }
      return selectedOptions.map((option) => option.label).join(", ");
    }
    return ((_a = options.find((option) => option.value === value)) == null ? void 0 : _a.label) || placeholder;
  };
  return /* @__PURE__ */ React2.createElement(
    "div",
    {
      className: `relative flex flex-col gap-1 ${wrapperClassName}`,
      ref: wrapperRef,
      onKeyDown: handleKeyDown,
      tabIndex: 0
    },
    label && /* @__PURE__ */ React2.createElement(
      "label",
      {
        className: `text-sm font-medium text-black dark:text-white ${labelClassName}`
      },
      label
    ),
    /* @__PURE__ */ React2.createElement(
      "div",
      {
        className: `relative flex items-center border rounded-md ${isOpen ? "ring-2 ring-blue-500 border-blue-500" : "border-gray-300"} ${error ? "border-red-500" : ""} ${disabled ? "bg-gray-100 dark:bg-gray-800" : ""} ${selectContainerClassName}`
      },
      LeftIcon && /* @__PURE__ */ React2.createElement(
        "div",
        {
          className: `flex items-center px-3 text-gray-500 dark:text-gray-400 ${iconContainerClassName}`
        },
        /* @__PURE__ */ React2.createElement(LeftIcon, { className: `w-5 h-5 ${iconClassName}` })
      ),
      /* @__PURE__ */ React2.createElement(
        "div",
        {
          className: `flex-1 px-3 py-2 cursor-pointer text-black dark:text-white ${disabled ? "cursor-not-allowed" : ""} ${selectClassName}`,
          onClick: () => !disabled && setIsOpen(!isOpen)
        },
        getSelectedLabels()
      ),
      /* @__PURE__ */ React2.createElement("div", { className: "flex items-center" }, clearable && value && /* @__PURE__ */ React2.createElement(
        "button",
        {
          type: "button",
          onClick: handleClear,
          className: "p-1 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
        },
        "\xD7"
      ), /* @__PURE__ */ React2.createElement(
        "div",
        {
          className: `flex items-center px-3 text-gray-500 dark:text-gray-400 ${iconContainerClassName}`
        },
        /* @__PURE__ */ React2.createElement(
          IoIosArrowDown,
          {
            className: `w-5 h-5 cursor-pointer transition-transform ${isOpen ? "transform rotate-180" : ""} ${iconClassName}`,
            onClick: () => !disabled && setIsOpen(!isOpen)
          }
        )
      ))
    ),
    error && /* @__PURE__ */ React2.createElement("span", { className: `text-sm text-red-500 ${errorClassName}` }, error),
    isOpen && /* @__PURE__ */ React2.createElement(
      "div",
      {
        className: `absolute z-[10000] left-0 right-0 max-w-[100vw] overflow-x-auto ${popupPosition === "top" ? "bottom-full mb-1" : "top-full mt-1"} bg-white dark:bg-gray-800 border rounded-md shadow-lg max-h-60 overflow-y-auto ${optionsContainerClassName}`
      },
      searchable && /* @__PURE__ */ React2.createElement(
        "input",
        {
          ref: searchInputRef,
          type: "text",
          value: searchQuery,
          onChange: (e) => setSearchQuery(e.target.value),
          className: `w-full px-3 py-2 border-b outline-none text-black dark:text-white dark:bg-gray-800 dark:border-gray-700 ${searchInputClassName}`,
          placeholder: "Search..."
        }
      ),
      Object.entries(groupedOptions).map(([group, groupOptions]) => /* @__PURE__ */ React2.createElement("div", { key: group, className: optionsListClassName }, group && /* @__PURE__ */ React2.createElement(
        "div",
        {
          className: `px-3 py-1 text-sm font-medium text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-700 ${groupHeaderClassName}`
        },
        group
      ), groupOptions.map((option, index) => /* @__PURE__ */ React2.createElement(
        "div",
        {
          key: option.value,
          className: `px-3 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center gap-2 text-black dark:text-white ${isSelected(option.value) ? "bg-blue-50 dark:bg-blue-900" : ""} ${focusedIndex === index ? "bg-gray-100 dark:bg-gray-700" : ""} ${option.disabled ? "opacity-50 cursor-not-allowed" : ""} ${optionClassName}`,
          onClick: () => !option.disabled && handleSelect(option.value)
        },
        customOptionRenderer ? customOptionRenderer(option) : /* @__PURE__ */ React2.createElement(React2.Fragment, null, option.icon && /* @__PURE__ */ React2.createElement(option.icon, { className: "w-5 h-5 text-gray-500 dark:text-gray-400" }), /* @__PURE__ */ React2.createElement("div", { className: "flex flex-col" }, /* @__PURE__ */ React2.createElement("span", null, option.label), option.description && /* @__PURE__ */ React2.createElement("span", { className: "text-sm text-gray-500 dark:text-gray-400" }, option.description)))
      )))),
      filteredOptions.length === 0 && /* @__PURE__ */ React2.createElement(
        "div",
        {
          className: `px-3 py-2 text-gray-500 dark:text-gray-400 text-center ${noOptionsClassName}`
        },
        "No options found"
      )
    )
  );
};
var Select_default = Select;

// src/components/Button/Button.tsx
import React3 from "react";
var Button = (_a) => {
  var _b = _a, {
    children,
    variant = "primary",
    size = "md",
    leftIcon: LeftIcon,
    rightIcon: RightIcon,
    isLoading = false,
    fullWidth = false,
    disabled,
    className = "",
    iconContainerClassName = "",
    iconClassName = "",
    spinnerClassName = "",
    theme = "light"
  } = _b, props = __objRest(_b, [
    "children",
    "variant",
    "size",
    "leftIcon",
    "rightIcon",
    "isLoading",
    "fullWidth",
    "disabled",
    "className",
    "iconContainerClassName",
    "iconClassName",
    "spinnerClassName",
    "theme"
  ]);
  const baseClasses = "inline-flex items-center justify-center font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";
  const variantClasses = {
    primary: theme === "dark" ? "bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-400" : "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
    secondary: theme === "dark" ? "bg-gray-700 text-white hover:bg-gray-600 focus:ring-gray-500" : "bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500",
    outline: theme === "dark" ? "border-2 border-gray-600 text-gray-300 hover:bg-gray-700 focus:ring-gray-500" : "border-2 border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-gray-500",
    ghost: theme === "dark" ? "text-gray-300 hover:bg-gray-700 focus:ring-gray-500" : "text-gray-700 hover:bg-gray-100 focus:ring-gray-500"
  };
  const sizeClasses = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg"
  };
  const widthClass = fullWidth ? "w-full" : "";
  const disabledClass = disabled || isLoading ? "opacity-50 cursor-not-allowed" : "cursor-pointer";
  return /* @__PURE__ */ React3.createElement(
    "button",
    __spreadValues({
      className: `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${widthClass} ${disabledClass} ${className}`,
      disabled: disabled || isLoading
    }, props),
    isLoading && /* @__PURE__ */ React3.createElement(
      "svg",
      {
        className: `animate-spin -ml-1 mr-2 h-4 w-4 ${spinnerClassName}`,
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24"
      },
      /* @__PURE__ */ React3.createElement(
        "circle",
        {
          className: "opacity-25",
          cx: "12",
          cy: "12",
          r: "10",
          stroke: "currentColor",
          strokeWidth: "4"
        }
      ),
      /* @__PURE__ */ React3.createElement(
        "path",
        {
          className: "opacity-75",
          fill: "currentColor",
          d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        }
      )
    ),
    !isLoading && LeftIcon && /* @__PURE__ */ React3.createElement("div", { className: `mr-2 ${iconContainerClassName}` }, /* @__PURE__ */ React3.createElement(LeftIcon, { className: `w-5 h-5 ${iconClassName}` })),
    children,
    !isLoading && RightIcon && /* @__PURE__ */ React3.createElement("div", { className: `ml-2 ${iconContainerClassName}` }, /* @__PURE__ */ React3.createElement(RightIcon, { className: `w-5 h-5 ${iconClassName}` }))
  );
};
var Button_default = Button;

// src/components/Modal/Modal.tsx
import React4, { useEffect as useEffect3, useRef as useRef3, useState as useState3, useCallback } from "react";
import { IoClose } from "react-icons/io5";
var Modal = ({
  isOpen,
  onClose,
  title,
  children,
  size = "md",
  position: modalPosition = "center",
  closeOnEsc = true,
  closeOnOverlayClick = true,
  showCloseButton = true,
  overlayClassName = "",
  contentClassName = "bg-white dark:bg-gray-800",
  headerClassName = "",
  titleClassName = "",
  closeButtonClassName = "",
  bodyClassName = "",
  footer,
  footerClassName = "",
  animation = "fade",
  animationDuration = "normal",
  initialFocus,
  backdropBlur = false,
  draggable = false,
  resizable = false,
  minWidth,
  maxWidth,
  minHeight,
  maxHeight,
  backdropColor = "rgba(0, 0, 0, 0.5)"
}) => {
  const modalRef = useRef3(null);
  const previousFocus = useRef3(null);
  const [isDragging, setIsDragging] = useState3(false);
  const [dragPosition, setDragPosition] = useState3({ x: 0, y: 0 });
  const [dragStart, setDragStart] = useState3({ x: 0, y: 0 });
  const modalBounds = useRef3({
    width: 0,
    height: 0
  });
  const initialPosition = useRef3({ x: 0, y: 0 });
  const [isClosing, setIsClosing] = useState3(false);
  const handleClose = useCallback(() => {
    if (isClosing) return;
    setIsClosing(true);
    setTimeout(() => {
      setIsClosing(false);
      onClose();
    }, 300);
  }, [isClosing, onClose]);
  useEffect3(() => {
    var _a;
    const handleEsc = (event) => {
      if (closeOnEsc && event.key === "Escape") {
        handleClose();
      }
    };
    if (isOpen) {
      document.addEventListener("keydown", handleEsc);
      const focusableElements = (_a = modalRef.current) == null ? void 0 : _a.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      const firstFocusable = focusableElements == null ? void 0 : focusableElements[0];
      const lastFocusable = focusableElements == null ? void 0 : focusableElements[focusableElements.length - 1];
      const handleTabKey = (e) => {
        if (e.key === "Tab") {
          if (e.shiftKey) {
            if (document.activeElement === firstFocusable) {
              e.preventDefault();
              lastFocusable == null ? void 0 : lastFocusable.focus();
            }
          } else {
            if (document.activeElement === lastFocusable) {
              e.preventDefault();
              firstFocusable == null ? void 0 : firstFocusable.focus();
            }
          }
        }
      };
      document.addEventListener("keydown", handleTabKey);
      if (initialFocus == null ? void 0 : initialFocus.current) {
        initialFocus.current.focus();
      } else if (firstFocusable) {
        firstFocusable.focus();
      }
      return () => {
        document.removeEventListener("keydown", handleTabKey);
        document.removeEventListener("keydown", handleEsc);
      };
    }
  }, [isOpen, closeOnEsc, initialFocus]);
  useEffect3(() => {
    if (isOpen) {
      setIsClosing(false);
      previousFocus.current = document.activeElement;
      document.body.style.overflow = "hidden";
      if (modalRef.current) {
        const rect = modalRef.current.getBoundingClientRect();
        modalBounds.current = {
          width: rect.width,
          height: rect.height
        };
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;
        initialPosition.current = {
          x: (viewportWidth - rect.width) / 2,
          y: (viewportHeight - rect.height) / 2
        };
        setDragPosition(initialPosition.current);
      }
    }
    return () => {
      var _a;
      (_a = previousFocus.current) == null ? void 0 : _a.focus();
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);
  const constrainToViewport = (x, y) => {
    const { width, height } = modalBounds.current;
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const padding = 20;
    const minX = padding;
    const maxX = viewportWidth - width - padding;
    const minY = padding;
    const maxY = viewportHeight - height - padding;
    const constrainedX = Math.min(Math.max(x, minX), maxX);
    const constrainedY = Math.min(Math.max(y, minY), maxY);
    return { x: constrainedX, y: constrainedY };
  };
  const handleDragStart = (e) => {
    if (!draggable) return;
    e.preventDefault();
    setIsDragging(true);
    setDragStart({
      x: e.clientX - dragPosition.x,
      y: e.clientY - dragPosition.y
    });
  };
  const handleDrag = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const newX = e.clientX - dragStart.x;
    const newY = e.clientY - dragStart.y;
    const constrained = constrainToViewport(newX, newY);
    setDragPosition(constrained);
  };
  const handleDragEnd = () => {
    setIsDragging(false);
  };
  if (!isOpen && !isClosing) return null;
  const sizeClasses = {
    sm: "max-w-sm",
    // 24rem
    md: "max-w-md",
    // 28rem
    lg: "max-w-lg",
    // 32rem
    xl: "max-w-xl",
    // 36rem
    "2xl": "max-w-2xl",
    // 42rem
    "3xl": "max-w-3xl",
    // 48rem
    "4xl": "max-w-4xl",
    // 56rem
    "5xl": "max-w-5xl",
    // 64rem
    "6xl": "max-w-6xl",
    // 72rem
    "7xl": "max-w-7xl",
    // 80rem
    full: "max-w-full mx-4",
    screen: "w-screen h-screen max-w-none rounded-none"
  };
  const positionClasses = {
    center: "items-center justify-center",
    top: "items-start justify-center pt-16",
    bottom: "items-end justify-center pb-16",
    left: "items-center justify-start pl-16",
    right: "items-center justify-end pr-16"
  };
  const animationClasses = {
    fade: "animate-fade-in",
    slide: "animate-slide-in",
    zoom: "animate-zoom-in",
    bounce: "animate-bounce-in",
    flip: "animate-flip-in",
    none: ""
  };
  const durationClasses = {
    fast: "duration-150",
    normal: "duration-300",
    slow: "duration-500"
  };
  const modalStyle = {
    transform: draggable ? `translate(${dragPosition.x}px, ${dragPosition.y}px)` : void 0,
    minWidth,
    maxWidth,
    minHeight,
    maxHeight
  };
  return /* @__PURE__ */ React4.createElement(
    "div",
    {
      className: `fixed inset-0 z-50 flex ${positionClasses[modalPosition]}`,
      role: "dialog",
      "aria-modal": "true",
      "aria-labelledby": title ? "modal-title" : void 0
    },
    /* @__PURE__ */ React4.createElement(
      "div",
      {
        className: `fixed inset-0 transition-opacity ${backdropBlur ? "backdrop-blur-sm" : ""} ${isClosing ? "animate-fade-out" : animationClasses[animation]} ${durationClasses[animationDuration]} ${overlayClassName}`,
        onClick: closeOnOverlayClick ? handleClose : void 0,
        "aria-hidden": "true",
        style: {
          backgroundColor: backdropColor
        }
      }
    ),
    /* @__PURE__ */ React4.createElement(
      "div",
      {
        ref: modalRef,
        style: __spreadProps(__spreadValues({}, modalStyle), {
          position: draggable ? "fixed" : "relative",
          left: draggable ? `${dragPosition.x}px` : void 0,
          top: draggable ? `${dragPosition.y}px` : void 0,
          transform: draggable ? "none" : void 0,
          margin: draggable ? 0 : void 0
        }),
        className: `rounded-lg shadow-xl w-full ${draggable ? "" : "mx-4"} ${sizeClasses[size]} ${isClosing ? "animate-fade-out" : animationClasses[animation]} ${durationClasses[animationDuration]} ${resizable ? "resize" : ""} ${contentClassName}`,
        role: "document",
        onMouseDown: handleDragStart,
        onMouseMove: handleDrag,
        onMouseUp: handleDragEnd,
        onMouseLeave: handleDragEnd
      },
      (title || showCloseButton) && /* @__PURE__ */ React4.createElement(
        "div",
        {
          className: `flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-gray-700 ${draggable ? "cursor-move" : ""} ${headerClassName}`
        },
        title && /* @__PURE__ */ React4.createElement(
          "h2",
          {
            id: "modal-title",
            className: `text-lg font-medium text-gray-900 dark:text-gray-100 ${titleClassName}`
          },
          title
        ),
        showCloseButton && /* @__PURE__ */ React4.createElement(
          "button",
          {
            onClick: handleClose,
            className: `p-1 text-gray-400 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-full ${closeButtonClassName}`,
            "aria-label": "Close modal"
          },
          /* @__PURE__ */ React4.createElement(IoClose, { className: "w-6 h-6" })
        )
      ),
      /* @__PURE__ */ React4.createElement(
        "div",
        {
          className: `px-6 py-4 text-gray-900 dark:text-gray-100 ${bodyClassName}`
        },
        children
      ),
      footer && /* @__PURE__ */ React4.createElement(
        "div",
        {
          className: `px-6 py-4 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 rounded-b-lg ${footerClassName}`
        },
        footer
      )
    )
  );
};
var Modal_default = Modal;

// src/components/Skeleton/Skeleton.tsx
import React5 from "react";
var Skeleton = ({
  type = "text",
  width,
  height,
  className = "",
  animation = "pulse",
  rounded = true,
  count = 1,
  gap = 8,
  direction = "column",
  variant = "light",
  speed = "normal"
}) => {
  const baseClasses = "bg-gray-200 dark:bg-gray-700";
  const animationClasses = {
    pulse: "animate-pulse",
    wave: "animate-wave",
    shimmer: "animate-shimmer",
    none: ""
  };
  const speedClasses = {
    slow: "duration-1000",
    normal: "duration-500",
    fast: "duration-300"
  };
  const variantClasses = {
    light: "bg-gray-200 dark:bg-gray-700",
    dark: "bg-gray-300 dark:bg-gray-600"
  };
  const getTypeClasses = () => {
    switch (type) {
      case "text":
        return "h-4";
      case "circle":
        return "rounded-full";
      case "rectangle":
        return "rounded-md";
      case "avatar":
        return "rounded-full";
      case "card":
        return "rounded-lg p-4 space-y-3";
      case "list":
        return "rounded-md space-y-2";
      case "table":
        return "rounded-md";
      default:
        return "";
    }
  };
  const renderSkeleton = () => {
    switch (type) {
      case "card":
        return /* @__PURE__ */ React5.createElement(
          "div",
          {
            className: `${baseClasses} ${getTypeClasses()} ${className} ${variantClasses[variant]} ${animationClasses[animation]} ${speedClasses[speed]}`,
            style: { width, height }
          },
          /* @__PURE__ */ React5.createElement("div", { className: "h-4 w-3/4 bg-gray-300 dark:bg-gray-600 rounded" }),
          /* @__PURE__ */ React5.createElement("div", { className: "space-y-2" }, /* @__PURE__ */ React5.createElement("div", { className: "h-3 w-full bg-gray-300 dark:bg-gray-600 rounded" }), /* @__PURE__ */ React5.createElement("div", { className: "h-3 w-5/6 bg-gray-300 dark:bg-gray-600 rounded" }))
        );
      case "list":
        return /* @__PURE__ */ React5.createElement(
          "div",
          {
            className: `${baseClasses} ${getTypeClasses()} ${className} ${variantClasses[variant]} ${animationClasses[animation]} ${speedClasses[speed]}`,
            style: { width, height }
          },
          [...Array(3)].map((_, i) => /* @__PURE__ */ React5.createElement(
            "div",
            {
              key: i,
              className: "h-4 w-full bg-gray-300 dark:bg-gray-600 rounded mb-2"
            }
          ))
        );
      case "table":
        return /* @__PURE__ */ React5.createElement(
          "div",
          {
            className: `${baseClasses} ${getTypeClasses()} ${className} ${variantClasses[variant]} ${animationClasses[animation]} ${speedClasses[speed]}`,
            style: { width, height }
          },
          /* @__PURE__ */ React5.createElement("div", { className: "space-y-3" }, /* @__PURE__ */ React5.createElement("div", { className: "h-4 w-full bg-gray-300 dark:bg-gray-600 rounded" }), [...Array(3)].map((_, i) => /* @__PURE__ */ React5.createElement("div", { key: i, className: "flex space-x-2" }, /* @__PURE__ */ React5.createElement("div", { className: "h-4 w-1/4 bg-gray-300 dark:bg-gray-600 rounded" }), /* @__PURE__ */ React5.createElement("div", { className: "h-4 w-1/4 bg-gray-300 dark:bg-gray-600 rounded" }), /* @__PURE__ */ React5.createElement("div", { className: "h-4 w-1/4 bg-gray-300 dark:bg-gray-600 rounded" }), /* @__PURE__ */ React5.createElement("div", { className: "h-4 w-1/4 bg-gray-300 dark:bg-gray-600 rounded" }))))
        );
      default:
        return /* @__PURE__ */ React5.createElement(
          "div",
          {
            className: `${baseClasses} ${getTypeClasses()} ${rounded ? "rounded" : ""} ${className} ${variantClasses[variant]} ${animationClasses[animation]} ${speedClasses[speed]}`,
            style: { width, height }
          }
        );
    }
  };
  const containerStyle = {
    display: "flex",
    flexDirection: direction,
    gap: `${gap}px`
  };
  return /* @__PURE__ */ React5.createElement("div", { style: containerStyle }, [...Array(count)].map((_, index) => /* @__PURE__ */ React5.createElement("div", { key: index }, renderSkeleton())));
};
var Skeleton_default = Skeleton;

// src/components/Card/Card.tsx
import React6 from "react";
var Card = ({
  title,
  subtitle,
  icon: Icon,
  children,
  footer,
  variant = "default",
  className = "",
  headerClassName = "",
  bodyClassName = "",
  footerClassName = "",
  onClick,
  image,
  hoverEffect = "none",
  loading = false,
  skeleton = false,
  metadata,
  link
}) => {
  const getVariantClasses = () => {
    switch (variant) {
      case "bordered":
        return "border border-gray-200 dark:border-gray-700";
      case "elevated":
        return "shadow-lg hover:shadow-xl transition-shadow duration-200";
      case "news":
        return "bg-white dark:bg-gray-800 overflow-hidden relative";
      default:
        return "bg-white dark:bg-gray-800";
    }
  };
  const getHoverEffectClasses = () => {
    switch (hoverEffect) {
      case "scale":
        return "transition-transform duration-200 hover:scale-105";
      case "lift":
        return "transition-all duration-200 hover:-translate-y-1 hover:shadow-lg";
      case "glow":
        return "transition-all duration-200 hover:shadow-[0_0_15px_rgba(0,0,0,0.1)]";
      default:
        return "";
    }
  };
  const getImageClasses = () => {
    if (!image) return "";
    const aspectRatioClasses = {
      square: "aspect-square",
      video: "aspect-video",
      auto: "aspect-auto"
    };
    const positionClasses = {
      top: "w-full",
      bottom: "w-full order-last",
      left: "w-full md:w-1/3",
      right: "w-full md:w-1/3 order-last"
    };
    return `
      ${aspectRatioClasses[image.aspectRatio || "auto"]}
      ${positionClasses[image.position || "top"]}
      ${image.overlay ? "relative" : ""}
    `;
  };
  const renderImage = () => {
    if (!image) return null;
    return /* @__PURE__ */ React6.createElement("div", { className: getImageClasses() }, /* @__PURE__ */ React6.createElement(
      "img",
      {
        src: image.src,
        alt: image.alt || "",
        className: `
            w-full h-full object-cover
            ${image.overlay ? "absolute inset-0" : ""}
          `,
        loading: "lazy"
      }
    ), image.overlay && /* @__PURE__ */ React6.createElement("div", { className: "absolute inset-0 bg-black bg-opacity-40" }));
  };
  const renderSkeleton = () => /* @__PURE__ */ React6.createElement("div", { className: "animate-pulse" }, image && /* @__PURE__ */ React6.createElement("div", { className: `${getImageClasses()} bg-gray-200 dark:bg-gray-700` }), /* @__PURE__ */ React6.createElement("div", { className: "p-4" }, /* @__PURE__ */ React6.createElement("div", { className: "h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-2" }), /* @__PURE__ */ React6.createElement("div", { className: "h-3 bg-gray-200 dark:bg-gray-700 rounded w-1/2" })));
  const renderNewsMetadata = () => {
    if (!metadata) return null;
    return /* @__PURE__ */ React6.createElement("div", { className: "flex flex-wrap items-center gap-3 text-sm text-gray-500 dark:text-gray-400 mt-2" }, metadata.category && /* @__PURE__ */ React6.createElement("span", { className: "px-2 py-1 bg-red-600 text-white text-xs font-semibold rounded" }, metadata.category), /* @__PURE__ */ React6.createElement("div", { className: "flex flex-wrap items-center gap-3" }, metadata.time && /* @__PURE__ */ React6.createElement("span", { className: "flex items-center gap-1" }, /* @__PURE__ */ React6.createElement(
      "svg",
      {
        className: "w-4 h-4",
        fill: "none",
        stroke: "currentColor",
        viewBox: "0 0 24 24"
      },
      /* @__PURE__ */ React6.createElement(
        "path",
        {
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 2,
          d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        }
      )
    ), metadata.time), metadata.author && /* @__PURE__ */ React6.createElement("span", { className: "flex items-center gap-1" }, /* @__PURE__ */ React6.createElement(
      "svg",
      {
        className: "w-4 h-4",
        fill: "none",
        stroke: "currentColor",
        viewBox: "0 0 24 24"
      },
      /* @__PURE__ */ React6.createElement(
        "path",
        {
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 2,
          d: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
        }
      )
    ), metadata.author), metadata.comments !== void 0 && /* @__PURE__ */ React6.createElement("span", { className: "flex items-center gap-1" }, /* @__PURE__ */ React6.createElement(
      "svg",
      {
        className: "w-4 h-4",
        fill: "none",
        stroke: "currentColor",
        viewBox: "0 0 24 24"
      },
      /* @__PURE__ */ React6.createElement(
        "path",
        {
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 2,
          d: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
        }
      )
    ), metadata.comments), metadata.views !== void 0 && /* @__PURE__ */ React6.createElement("span", { className: "flex items-center gap-1" }, /* @__PURE__ */ React6.createElement(
      "svg",
      {
        className: "w-4 h-4",
        fill: "none",
        stroke: "currentColor",
        viewBox: "0 0 24 24"
      },
      /* @__PURE__ */ React6.createElement(
        "path",
        {
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 2,
          d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        }
      ),
      /* @__PURE__ */ React6.createElement(
        "path",
        {
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 2,
          d: "M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
        }
      )
    ), metadata.views)));
  };
  const renderNewsCard = () => /* @__PURE__ */ React6.createElement("div", { className: "flex flex-col" }, /* @__PURE__ */ React6.createElement("div", { className: "relative" }, renderImage(), (metadata == null ? void 0 : metadata.category) && /* @__PURE__ */ React6.createElement("div", { className: "absolute top-4 left-4 z-10" }, /* @__PURE__ */ React6.createElement("span", { className: "px-3 py-1 bg-red-600 text-white text-sm font-semibold rounded" }, metadata.category))), /* @__PURE__ */ React6.createElement("div", { className: "p-4" }, title && /* @__PURE__ */ React6.createElement("h3", { className: "text-lg md:text-xl font-bold text-gray-900 dark:text-white hover:text-red-600 dark:hover:text-red-500 transition-colors" }, title), subtitle && /* @__PURE__ */ React6.createElement("p", { className: "mt-2 text-sm md:text-base text-gray-600 dark:text-gray-400" }, subtitle), renderNewsMetadata(), children && /* @__PURE__ */ React6.createElement("div", { className: `mt-4 ${bodyClassName}` }, children)));
  const renderCard = () => /* @__PURE__ */ React6.createElement(
    "div",
    {
      className: `
        rounded-lg 
        ${getVariantClasses()}
        ${getHoverEffectClasses()}
        ${onClick ? "cursor-pointer" : ""}
        ${isHorizontal ? "flex flex-col md:flex-row" : ""}
        ${className}
      `,
      onClick
    },
    isNewsCard ? renderNewsCard() : /* @__PURE__ */ React6.createElement(React6.Fragment, null, (image == null ? void 0 : image.position) === "top" && renderImage(), (image == null ? void 0 : image.position) === "left" && renderImage(), /* @__PURE__ */ React6.createElement("div", { className: "flex-1" }, (title || subtitle || Icon) && /* @__PURE__ */ React6.createElement(
      "div",
      {
        className: `
                  p-4 border-b border-gray-200 dark:border-gray-700
                  ${headerClassName}
                `
      },
      /* @__PURE__ */ React6.createElement("div", { className: "flex items-center gap-3" }, Icon && /* @__PURE__ */ React6.createElement("div", { className: "flex-shrink-0" }, /* @__PURE__ */ React6.createElement(Icon, { className: "w-5 h-5 text-gray-500 dark:text-gray-400" })), /* @__PURE__ */ React6.createElement("div", { className: "flex-1" }, title && /* @__PURE__ */ React6.createElement("h3", { className: "text-lg font-medium text-gray-900 dark:text-white" }, title), subtitle && /* @__PURE__ */ React6.createElement("p", { className: "mt-1 text-sm text-gray-500 dark:text-gray-400" }, subtitle)))
    ), /* @__PURE__ */ React6.createElement("div", { className: `p-4 ${bodyClassName}` }, children), footer && /* @__PURE__ */ React6.createElement(
      "div",
      {
        className: `
                  p-4 border-t border-gray-200 dark:border-gray-700
                  ${footerClassName}
                `
      },
      footer
    )), (image == null ? void 0 : image.position) === "right" && renderImage(), (image == null ? void 0 : image.position) === "bottom" && renderImage())
  );
  if (loading || skeleton) {
    return renderSkeleton();
  }
  const isNewsCard = variant === "news";
  const isHorizontal = (image == null ? void 0 : image.position) === "left" || (image == null ? void 0 : image.position) === "right";
  if (isNewsCard && link) {
    return /* @__PURE__ */ React6.createElement(
      "a",
      {
        href: link,
        className: "block hover:no-underline",
        target: "_blank",
        rel: "noopener noreferrer"
      },
      renderCard()
    );
  }
  return renderCard();
};
var Card_default = Card;

// src/components/Table/Table.tsx
import React8, { useRef as useRef4, useEffect as useEffect4 } from "react";
import {
  HiChevronUp,
  HiChevronDown,
  HiChevronLeft,
  HiChevronRight,
  HiChevronDown as HiExpand,
  HiChevronUp as HiCollapse,
  HiArrowsUpDown,
  HiOutlineExclamationCircle,
  HiOutlineInformationCircle
} from "react-icons/hi2";

// src/components/Spinner/Spinner.tsx
import React7 from "react";
var sizeMap = {
  sm: 16,
  md: 24,
  lg: 32,
  xl: 48
};
var colorMap = {
  primary: "#2563eb",
  secondary: "#64748b",
  success: "#16a34a",
  danger: "#dc2626",
  warning: "#eab308",
  info: "#06b6d4"
};
var Spinner = ({
  size = "md",
  variant = "primary",
  text,
  textPosition = "right",
  type = "circular"
}) => {
  const px = sizeMap[size];
  const color = colorMap[variant];
  const textPositionClasses = {
    left: "flex-row-reverse",
    right: "flex-row",
    top: "flex-col-reverse",
    bottom: "flex-col"
  };
  const renderDotsSpinner = () => /* @__PURE__ */ React7.createElement("div", { className: "flex items-center gap-1 relative" }, /* @__PURE__ */ React7.createElement("style", null, `
        @keyframes spinner-dot-bounce {
          0%, 80%, 100% { transform: translateY(0); opacity: 0.7; }
          40% { transform: translateY(-8px); opacity: 1; }
        }
      `), [0, 1, 2].map((i) => /* @__PURE__ */ React7.createElement(
    "span",
    {
      key: i,
      style: {
        width: px / 2.5,
        height: px / 2.5,
        background: color,
        borderRadius: "50%",
        display: "inline-block",
        animation: `spinner-dot-bounce 1.2s infinite`,
        animationDelay: `${i * 0.2}s`
      }
    }
  )));
  const renderBounceSpinner = () => /* @__PURE__ */ React7.createElement("div", { className: "flex items-end gap-1 relative" }, /* @__PURE__ */ React7.createElement("style", null, `
        @keyframes spinner-bounce {
          0%, 100% { transform: scaleY(1); }
          50% { transform: scaleY(0.5); }
        }
      `), [0, 1, 2].map((i) => /* @__PURE__ */ React7.createElement(
    "span",
    {
      key: i,
      style: {
        width: px / 3,
        height: px,
        background: color,
        borderRadius: px / 2,
        display: "inline-block",
        animation: `spinner-bounce 0.8s infinite`,
        animationDelay: `${i * 0.15}s`,
        opacity: 0.8
      }
    }
  )));
  const renderGradientSpinner = () => /* @__PURE__ */ React7.createElement(
    "span",
    {
      style: {
        display: "inline-block",
        width: px,
        height: px,
        background: `conic-gradient(${color} 10%, transparent 60%, ${color} 100%)`,
        borderRadius: "50%",
        animation: "spinner-gradient-spin 1s linear infinite",
        position: "relative"
      }
    },
    /* @__PURE__ */ React7.createElement("style", null, `
        @keyframes spinner-gradient-spin {
          100% { transform: rotate(360deg); }
        }
      `),
    /* @__PURE__ */ React7.createElement(
      "span",
      {
        style: {
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: px * 0.6,
          height: px * 0.6,
          background: "var(--tw-bg-opacity, 1) #fff",
          borderRadius: "50%",
          zIndex: 1,
          boxShadow: "0 0 0 1px rgba(0,0,0,0.05)"
        },
        className: "dark:bg-gray-900"
      }
    )
  );
  const renderCircularSpinner = () => /* @__PURE__ */ React7.createElement(
    "span",
    {
      style: {
        display: "inline-block",
        width: px,
        height: px,
        border: `${px / 8}px solid ${color}33`,
        borderTop: `${px / 8}px solid ${color}`,
        borderRadius: "50%",
        animation: "spinner-circular-spin 0.8s linear infinite"
      }
    },
    /* @__PURE__ */ React7.createElement("style", null, `
        @keyframes spinner-circular-spin {
          100% { transform: rotate(360deg); }
        }
      `)
  );
  const renderPulseSpinner = () => /* @__PURE__ */ React7.createElement("span", { className: "relative inline-block" }, /* @__PURE__ */ React7.createElement("style", null, `
        @keyframes spinner-pulse {
          0%, 100% { opacity: 0.7; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }
      `), /* @__PURE__ */ React7.createElement(
    "span",
    {
      style: {
        width: px,
        height: px,
        background: color,
        borderRadius: "50%",
        display: "inline-block",
        animation: "spinner-pulse 1s infinite cubic-bezier(.66,0,0,1)"
      }
    }
  ));
  let spinnerContent;
  switch (type) {
    case "dots":
      spinnerContent = renderDotsSpinner();
      break;
    case "pulse":
      spinnerContent = renderPulseSpinner();
      break;
    case "gradient":
      spinnerContent = renderGradientSpinner();
      break;
    case "bounce":
      spinnerContent = renderBounceSpinner();
      break;
    default:
      spinnerContent = renderCircularSpinner();
  }
  if (!text) return spinnerContent;
  return /* @__PURE__ */ React7.createElement(
    "div",
    {
      className: `flex items-center gap-2 ${textPositionClasses[textPosition]}`
    },
    spinnerContent,
    /* @__PURE__ */ React7.createElement("span", { className: `text-sm`, style: { color } }, text)
  );
};
var Spinner_default = Spinner;

// src/components/Table/Table.tsx
function Table({
  columns,
  data,
  loading = false,
  pagination,
  selection,
  expandable,
  rowActions,
  draggable = false,
  onRowReorder,
  onRow,
  className = "",
  headerClassName = "",
  bodyClassName = "",
  rowClassName = "",
  cellClassName = "",
  scroll,
  bordered = false,
  size = "middle",
  showHeader = true,
  emptyText = "No data available",
  loadingText = "Loading...",
  error
}) {
  var _a;
  const [sortConfig, setSortConfig] = React8.useState(null);
  const [expandedRows, setExpandedRows] = React8.useState(
    (expandable == null ? void 0 : expandable.expandedRowKeys) || []
  );
  const [columnWidths, setColumnWidths] = React8.useState({});
  const [draggedRow, setDraggedRow] = React8.useState(null);
  const [dragOverRow, setDragOverRow] = React8.useState(null);
  const [activeFilters, setActiveFilters] = React8.useState(
    columns.reduce((acc, col) => {
      if (col.filterable && col.filters) {
        acc[col.key] = [];
      }
      return acc;
    }, {})
  );
  const [showLoading, setShowLoading] = React8.useState(false);
  const resizingRef = useRef4(null);
  useEffect4(() => {
    if (typeof loading === "object") {
      if (loading.delay) {
        setShowLoading(true);
        const timer = setTimeout(() => {
          setShowLoading(false);
        }, loading.delay);
        return () => clearTimeout(timer);
      }
    } else {
      setShowLoading(loading);
    }
  }, [loading]);
  const handleResizeStart = (e, columnKey, currentWidth) => {
    e.preventDefault();
    resizingRef.current = {
      columnKey,
      startX: e.clientX,
      startWidth: currentWidth
    };
    document.addEventListener("mousemove", handleResizeMove);
    document.addEventListener("mouseup", handleResizeEnd);
  };
  const handleResizeMove = (e) => {
    if (!resizingRef.current) return;
    const { columnKey, startX, startWidth } = resizingRef.current;
    const diff = e.clientX - startX;
    setColumnWidths((prev) => __spreadProps(__spreadValues({}, prev), {
      [columnKey]: Math.max(50, startWidth + diff)
    }));
  };
  const handleResizeEnd = () => {
    resizingRef.current = null;
    document.removeEventListener("mousemove", handleResizeMove);
    document.removeEventListener("mouseup", handleResizeEnd);
  };
  const handleDragStart = (index) => {
    if (!draggable) return;
    setDraggedRow(index);
  };
  const handleDragOver = (e, index) => {
    e.preventDefault();
    if (!draggable || draggedRow === null) return;
    setDragOverRow(index);
  };
  const handleDrop = (e, index) => {
    e.preventDefault();
    if (!draggable || draggedRow === null || !onRowReorder) return;
    const newData = [...data];
    const draggedItem = newData[draggedRow];
    newData.splice(draggedRow, 1);
    newData.splice(index, 0, draggedItem);
    onRowReorder(newData);
    setDraggedRow(null);
    setDragOverRow(null);
  };
  const handleSort = (column) => {
    if (!column.sorter) return;
    setSortConfig((current) => {
      if ((current == null ? void 0 : current.key) === column.key) {
        return current.direction === "asc" ? { key: column.key, direction: "desc" } : null;
      }
      return { key: column.key, direction: "asc" };
    });
  };
  const handleFilter = (column, value) => {
    if (!column.filters) return;
    setActiveFilters((prev) => {
      const currentFilters = prev[column.key] || [];
      const newFilters = currentFilters.includes(value) ? currentFilters.filter((v) => v !== value) : [...currentFilters, value];
      return __spreadProps(__spreadValues({}, prev), {
        [column.key]: newFilters
      });
    });
  };
  const handleExpand = (record) => {
    var _a2;
    const recordId = record.id;
    const isExpanded = expandedRows.includes(recordId);
    const newExpandedRows = isExpanded ? expandedRows.filter((id) => id !== recordId) : [...expandedRows, recordId];
    setExpandedRows(newExpandedRows);
    (_a2 = expandable == null ? void 0 : expandable.onExpand) == null ? void 0 : _a2.call(expandable, !isExpanded, record);
  };
  const filteredData = React8.useMemo(() => {
    let result = data;
    columns.forEach((column) => {
      var _a2;
      if (column.filters && column.onFilter && ((_a2 = activeFilters[column.key]) == null ? void 0 : _a2.length)) {
        result = result.filter(
          (record) => activeFilters[column.key].some(
            (value) => column.onFilter(value, record)
          )
        );
      }
    });
    if (sortConfig) {
      const column = columns.find((col) => col.key === sortConfig.key);
      if (column == null ? void 0 : column.sorter) {
        result = [...result].sort((a, b) => {
          const result2 = column.sorter(a, b);
          return sortConfig.direction === "asc" ? result2 : -result2;
        });
      }
    }
    return result;
  }, [data, sortConfig, columns, activeFilters]);
  const handleSelectAll = (checked) => {
    if (!selection) return;
    selection.onChange(checked ? filteredData.map((item) => item.id) : []);
  };
  const handleSelectRow = (checked, record) => {
    if (!selection) return;
    const selectedKeys = checked ? [...selection.selectedRowKeys, record.id] : selection.selectedRowKeys.filter((key) => key !== record.id);
    selection.onChange(selectedKeys);
  };
  const getFixedColumnStyle = (column, index) => {
    if (!column.fixed) return {};
    const isLeft = column.fixed === "left";
    let offset = 0;
    if (isLeft) {
      for (let i = 0; i < index; i++) {
        if (columns[i].fixed === "left") {
          const width = columnWidths[columns[i].key] || columns[i].width;
          if (typeof width === "number") {
            offset += width;
          }
        }
      }
    } else {
      for (let i = columns.length - 1; i > index; i--) {
        if (columns[i].fixed === "right") {
          const width = columnWidths[columns[i].key] || columns[i].width;
          if (typeof width === "number") {
            offset += width;
          }
        }
      }
    }
    return {
      position: "sticky",
      [isLeft ? "left" : "right"]: offset,
      zIndex: isLeft ? 10 : 5
    };
  };
  const getSizeClass = () => {
    switch (size) {
      case "small":
        return "text-sm";
      case "large":
        return "text-lg";
      default:
        return "text-base";
    }
  };
  const renderLoadingSpinner = () => /* @__PURE__ */ React8.createElement("div", { className: "flex items-center justify-center p-8" }, /* @__PURE__ */ React8.createElement(
    Spinner_default,
    {
      size: "xl",
      variant: "primary",
      text: typeof loading === "object" ? loading.tip : loadingText,
      textPosition: "right"
    }
  ));
  const renderError = () => /* @__PURE__ */ React8.createElement("div", { className: "flex flex-col items-center justify-center p-8 text-center" }, /* @__PURE__ */ React8.createElement(HiOutlineExclamationCircle, { className: "w-12 h-12 text-red-500 mb-4" }), /* @__PURE__ */ React8.createElement("p", { className: "text-red-500 mb-4" }, error == null ? void 0 : error.message), (error == null ? void 0 : error.retry) && /* @__PURE__ */ React8.createElement(
    "button",
    {
      onClick: error.retry,
      className: "px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700"
    },
    "Retry"
  ));
  const renderEmpty = () => /* @__PURE__ */ React8.createElement("div", { className: "flex flex-col items-center justify-center p-8 text-center" }, /* @__PURE__ */ React8.createElement(HiOutlineInformationCircle, { className: "w-12 h-12 text-gray-400 mb-4" }), /* @__PURE__ */ React8.createElement("p", { className: "text-gray-500" }, emptyText));
  return /* @__PURE__ */ React8.createElement("div", { className: `max-w-[90vw] md:max-w-full overflow-x-auto ${className}` }, /* @__PURE__ */ React8.createElement(
    "div",
    {
      className: "relative",
      style: {
        maxHeight: scroll == null ? void 0 : scroll.y,
        overflow: "auto"
      }
    },
    /* @__PURE__ */ React8.createElement(
      "table",
      {
        className: `min-w-max w-full ${bordered ? "border border-gray-200 dark:border-gray-700" : ""}`
      },
      showHeader && /* @__PURE__ */ React8.createElement(
        "thead",
        {
          className: `bg-gray-50 dark:bg-gray-800 sticky top-0 z-20 ${headerClassName}`
        },
        /* @__PURE__ */ React8.createElement("tr", null, expandable && /* @__PURE__ */ React8.createElement("th", { className: "w-12 p-4 bg-gray-50 dark:bg-gray-800" }), selection && /* @__PURE__ */ React8.createElement("th", { className: "w-12 p-4 bg-gray-50 dark:bg-gray-800" }, /* @__PURE__ */ React8.createElement(
          "input",
          {
            type: "checkbox",
            checked: selection.selectedRowKeys.length === filteredData.length,
            onChange: (e) => handleSelectAll(e.target.checked),
            className: "rounded border-gray-300 dark:border-gray-600"
          }
        )), columns.map((column, index) => /* @__PURE__ */ React8.createElement(
          "th",
          {
            key: column.key,
            className: `
                      p-4 text-${column.align || "left"} text-sm font-medium text-gray-500 dark:text-gray-400
                      ${column.sorter ? "cursor-pointer hover:text-gray-700 dark:hover:text-gray-300" : ""}
                      ${column.fixed ? "bg-gray-100 dark:bg-gray-800" : ""}
                      ${bordered ? "border border-gray-200 dark:border-gray-700" : ""}
                      ${cellClassName}
                    `,
            style: __spreadValues({
              width: columnWidths[column.key] || column.width
            }, getFixedColumnStyle(column, index)),
            onClick: () => handleSort(column)
          },
          /* @__PURE__ */ React8.createElement("div", { className: "flex items-center gap-2" }, column.title, column.sorter && (sortConfig == null ? void 0 : sortConfig.key) === column.key && (sortConfig.direction === "asc" ? /* @__PURE__ */ React8.createElement(HiChevronUp, { className: "w-4 h-4" }) : /* @__PURE__ */ React8.createElement(HiChevronDown, { className: "w-4 h-4" })), column.filterable && column.filters && /* @__PURE__ */ React8.createElement("div", { className: "relative group" }, /* @__PURE__ */ React8.createElement("button", { className: "p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded" }, /* @__PURE__ */ React8.createElement(HiArrowsUpDown, { className: "w-4 h-4" })), /* @__PURE__ */ React8.createElement("div", { className: "absolute hidden group-hover:block top-full left-0 mt-1 bg-white dark:bg-gray-800 shadow-lg rounded-md p-2 z-30" }, column.filters.map((filter) => {
            var _a2;
            return /* @__PURE__ */ React8.createElement(
              "label",
              {
                key: filter.value,
                className: "flex items-center gap-2 p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
              },
              /* @__PURE__ */ React8.createElement(
                "input",
                {
                  type: "checkbox",
                  checked: ((_a2 = activeFilters[column.key]) == null ? void 0 : _a2.includes(
                    filter.value
                  )) || false,
                  onChange: () => handleFilter(column, filter.value),
                  className: "rounded border-gray-300 dark:border-gray-600"
                }
              ),
              filter.text
            );
          })))),
          column.resizable && /* @__PURE__ */ React8.createElement(
            "div",
            {
              className: "absolute right-0 top-0 bottom-0 w-1 cursor-col-resize hover:bg-blue-500",
              onMouseDown: (e) => handleResizeStart(
                e,
                column.key,
                columnWidths[column.key] || (typeof column.width === "number" ? column.width : 0)
              )
            }
          )
        )), rowActions && /* @__PURE__ */ React8.createElement("th", { className: "w-12 p-4 bg-gray-50 dark:bg-gray-800" }))
      ),
      /* @__PURE__ */ React8.createElement(
        "tbody",
        {
          className: `divide-y divide-gray-200 dark:divide-gray-700 ${bodyClassName}`
        },
        showLoading ? /* @__PURE__ */ React8.createElement("tr", null, /* @__PURE__ */ React8.createElement(
          "td",
          {
            colSpan: columns.length + (expandable ? 1 : 0) + (selection ? 1 : 0) + (rowActions ? 1 : 0),
            className: "p-4"
          },
          renderLoadingSpinner()
        )) : error ? /* @__PURE__ */ React8.createElement("tr", null, /* @__PURE__ */ React8.createElement(
          "td",
          {
            colSpan: columns.length + (expandable ? 1 : 0) + (selection ? 1 : 0) + (rowActions ? 1 : 0),
            className: "p-4"
          },
          renderError()
        )) : filteredData.length === 0 ? /* @__PURE__ */ React8.createElement("tr", null, /* @__PURE__ */ React8.createElement(
          "td",
          {
            colSpan: columns.length + (expandable ? 1 : 0) + (selection ? 1 : 0) + (rowActions ? 1 : 0),
            className: "p-4"
          },
          renderEmpty()
        )) : filteredData.map((record, index) => {
          var _a2, _b, _c, _d, _e;
          return /* @__PURE__ */ React8.createElement(React8.Fragment, { key: record.id }, /* @__PURE__ */ React8.createElement(
            "tr",
            {
              draggable,
              onDragStart: () => handleDragStart(index),
              onDragOver: (e) => handleDragOver(e, index),
              onDrop: (e) => handleDrop(e, index),
              onClick: (_a2 = onRow == null ? void 0 : onRow(record, index)) == null ? void 0 : _a2.onClick,
              onDoubleClick: (_b = onRow == null ? void 0 : onRow(record, index)) == null ? void 0 : _b.onDoubleClick,
              onContextMenu: (_c = onRow == null ? void 0 : onRow(record, index)) == null ? void 0 : _c.onContextMenu,
              className: `
                      hover:bg-gray-50 dark:hover:bg-gray-800/50
                      ${draggedRow === index ? "opacity-50" : ""}
                      ${dragOverRow === index ? "border-t-2 border-blue-500" : ""}
                      ${((_d = onRow == null ? void 0 : onRow(record, index)) == null ? void 0 : _d.className) || ""}
                      ${rowClassName}
                      ${getSizeClass()}
                    `,
              style: (_e = onRow == null ? void 0 : onRow(record, index)) == null ? void 0 : _e.style
            },
            expandable && /* @__PURE__ */ React8.createElement(
              "td",
              {
                className: `p-4 bg-white dark:bg-gray-900 ${bordered ? "border border-gray-200 dark:border-gray-700" : ""}`
              },
              expandable.expandIcon ? expandable.expandIcon({
                expanded: expandedRows.includes(record.id),
                onExpand: () => handleExpand(record),
                record
              }) : /* @__PURE__ */ React8.createElement(
                "button",
                {
                  onClick: () => handleExpand(record),
                  className: "p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded"
                },
                expandedRows.includes(record.id) ? /* @__PURE__ */ React8.createElement(HiCollapse, { className: "w-4 h-4" }) : /* @__PURE__ */ React8.createElement(HiExpand, { className: "w-4 h-4" })
              )
            ),
            selection && /* @__PURE__ */ React8.createElement(
              "td",
              {
                className: `p-4 bg-white dark:bg-gray-900 ${bordered ? "border border-gray-200 dark:border-gray-700" : ""}`
              },
              /* @__PURE__ */ React8.createElement(
                "input",
                {
                  type: "checkbox",
                  checked: selection.selectedRowKeys.includes(
                    record.id
                  ),
                  onChange: (e) => handleSelectRow(e.target.checked, record),
                  className: "rounded border-gray-300 dark:border-gray-600"
                }
              )
            ),
            columns.map((column, colIndex) => /* @__PURE__ */ React8.createElement(
              "td",
              {
                key: column.key,
                className: `
                          p-4 text-${column.align || "left"} text-gray-900 dark:text-gray-100
                          ${column.fixed ? "bg-gray-50 dark:bg-gray-900" : ""}
                          ${column.ellipsis ? "truncate" : ""}
                          ${bordered ? "border border-gray-200 dark:border-gray-700" : ""}
                          ${cellClassName}
                        `,
                style: getFixedColumnStyle(column, colIndex)
              },
              column.tooltip ? /* @__PURE__ */ React8.createElement("div", { className: "group relative" }, /* @__PURE__ */ React8.createElement("div", { className: "truncate" }, column.render ? column.render(
                record[column.dataIndex],
                record
              ) : String(record[column.dataIndex])), /* @__PURE__ */ React8.createElement("div", { className: "absolute hidden group-hover:block top-full left-0 mt-1 bg-gray-900 text-white text-xs rounded px-2 py-1 z-30" }, column.render ? column.render(
                record[column.dataIndex],
                record
              ) : String(record[column.dataIndex]))) : column.render ? column.render(record[column.dataIndex], record) : String(record[column.dataIndex])
            )),
            rowActions && /* @__PURE__ */ React8.createElement(
              "td",
              {
                className: `p-4 bg-white dark:bg-gray-900 ${bordered ? "border border-gray-200 dark:border-gray-700" : ""}`
              },
              rowActions(record)
            )
          ), expandable && expandedRows.includes(record.id) && /* @__PURE__ */ React8.createElement("tr", null, /* @__PURE__ */ React8.createElement(
            "td",
            {
              colSpan: columns.length + (selection ? 1 : 0) + (rowActions ? 1 : 0) + (expandable ? 1 : 0),
              className: `p-4 bg-gray-50 dark:bg-gray-800/50 ${bordered ? "border border-gray-200 dark:border-gray-700" : ""}`
            },
            expandable.expandedRowRender(record)
          )));
        })
      )
    )
  ), pagination && /* @__PURE__ */ React8.createElement("div", { className: "flex items-center justify-between p-4 border-t border-gray-200 dark:border-gray-700" }, /* @__PURE__ */ React8.createElement("div", { className: "text-sm text-gray-500 dark:text-gray-400" }, "Showing ", (pagination.current - 1) * pagination.pageSize + 1, " to", " ", Math.min(
    pagination.current * pagination.pageSize,
    pagination.total
  ), " ", "of ", pagination.total, " entries"), /* @__PURE__ */ React8.createElement("div", { className: "flex items-center gap-2" }, pagination.showSizeChanger && /* @__PURE__ */ React8.createElement(
    "select",
    {
      value: pagination.pageSize,
      onChange: (e) => pagination.onChange(1, Number(e.target.value)),
      className: "px-2 py-1 text-sm border rounded-md dark:bg-gray-800 dark:border-gray-700"
    },
    (_a = pagination.pageSizeOptions) == null ? void 0 : _a.map((size2) => /* @__PURE__ */ React8.createElement("option", { key: size2, value: size2 }, size2, " / page"))
  ), /* @__PURE__ */ React8.createElement(
    "button",
    {
      onClick: () => pagination.onChange(pagination.current - 1, pagination.pageSize),
      disabled: pagination.current === 1,
      className: "p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 disabled:opacity-50"
    },
    /* @__PURE__ */ React8.createElement(HiChevronLeft, { className: "w-5 h-5" })
  ), /* @__PURE__ */ React8.createElement("span", { className: "text-sm text-gray-500 dark:text-gray-400" }, "Page ", pagination.current), /* @__PURE__ */ React8.createElement(
    "button",
    {
      onClick: () => pagination.onChange(pagination.current + 1, pagination.pageSize),
      disabled: pagination.current * pagination.pageSize >= pagination.total,
      className: "p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 disabled:opacity-50"
    },
    /* @__PURE__ */ React8.createElement(HiChevronRight, { className: "w-5 h-5" })
  ))));
}
var Table_default = Table;

// src/components/Badge/Badge.tsx
import React9 from "react";
var Badge = ({
  children,
  variant = "default",
  size = "md",
  rounded = "full",
  className = "",
  animation = "none",
  dot = false,
  count,
  maxCount = 99,
  showZero = false,
  offset = [0, 0],
  status,
  position = "top-right",
  standalone = false,
  processing = false,
  ribbon = false,
  ribbonText,
  ribbonColor = "primary"
}) => {
  const variantClasses = {
    default: "bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200",
    primary: "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200",
    success: "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200",
    warning: "bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200",
    error: "bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200",
    info: "bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200"
  };
  const sizeClasses = {
    sm: "text-xs px-1.5 py-0.5",
    md: "text-sm px-2 py-0.5",
    lg: "text-base px-2.5 py-1"
  };
  const roundedClasses = {
    none: "rounded-none",
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    full: "rounded-full"
  };
  const animationClasses = {
    pulse: "animate-pulse",
    bounce: "animate-bounce",
    none: ""
  };
  const statusClasses = {
    online: "bg-green-500 dark:bg-green-400",
    offline: "bg-gray-500 dark:bg-gray-400",
    away: "bg-yellow-500 dark:bg-yellow-400",
    busy: "bg-red-500 dark:bg-red-400"
  };
  const positionClasses = {
    "top-right": "-top-1 -right-1",
    "top-left": "-top-1 -left-1",
    "bottom-right": "-bottom-1 -right-1",
    "bottom-left": "-bottom-1 -left-1"
  };
  const ribbonClasses = {
    primary: "bg-blue-500 dark:bg-blue-600",
    success: "bg-green-500 dark:bg-green-600",
    warning: "bg-yellow-500 dark:bg-yellow-600",
    error: "bg-red-500 dark:bg-red-600",
    info: "bg-indigo-500 dark:bg-indigo-600"
  };
  const renderContent = () => {
    if (dot) {
      return /* @__PURE__ */ React9.createElement(
        "span",
        {
          className: `inline-block w-2 h-2 rounded-full ${status ? statusClasses[status] : variantClasses[variant].split(" ")[0]}`
        }
      );
    }
    if (count !== void 0) {
      if (count === 0 && !showZero) return null;
      return /* @__PURE__ */ React9.createElement("span", { className: "inline-flex items-center justify-center" }, count > maxCount ? `${maxCount}+` : count);
    }
    return children;
  };
  const badgeStyle = {
    transform: `translate(${offset[0]}px, ${offset[1]}px)`
  };
  if (standalone) {
    return /* @__PURE__ */ React9.createElement(
      "span",
      {
        style: badgeStyle,
        className: `inline-flex items-center justify-center ${dot ? "w-2 h-2" : sizeClasses[size]} ${roundedClasses[rounded]} ${variantClasses[variant]} ${animationClasses[animation]} ${className}`
      },
      renderContent()
    );
  }
  if (ribbon) {
    return /* @__PURE__ */ React9.createElement("div", { className: "relative" }, children, /* @__PURE__ */ React9.createElement(
      "div",
      {
        className: `absolute top-0 right-0 w-24 h-24 overflow-hidden ${ribbonText ? "h-8" : ""}`
      },
      /* @__PURE__ */ React9.createElement(
        "div",
        {
          className: `absolute top-0 right-0 w-32 h-32 transform rotate-45 translate-x-8 -translate-y-8 ${ribbonClasses[ribbonColor]} text-white text-xs font-medium flex items-center justify-center`
        },
        ribbonText
      )
    ));
  }
  return /* @__PURE__ */ React9.createElement("div", { className: "relative inline-block" }, children, /* @__PURE__ */ React9.createElement(
    "span",
    {
      style: badgeStyle,
      className: `absolute ${positionClasses[position]} z-10 inline-flex items-center justify-center ${dot ? "w-2 h-2" : sizeClasses[size]} ${roundedClasses[rounded]} ${variantClasses[variant]} ${animationClasses[animation]} ${processing ? "animate-spin" : ""} ${className}`
    },
    renderContent()
  ));
};
var Badge_default = Badge;

// src/components/Alert/Alert.tsx
import React10 from "react";
var typeStyles = {
  success: "bg-green-100 text-green-800 border-green-300 dark:bg-green-900 dark:text-green-200 dark:border-green-700",
  error: "bg-red-100 text-red-800 border-red-300 dark:bg-red-900 dark:text-red-200 dark:border-red-700",
  warning: "bg-yellow-100 text-yellow-800 border-yellow-300 dark:bg-yellow-900 dark:text-yellow-200 dark:border-yellow-700",
  info: "bg-blue-100 text-blue-800 border-blue-300 dark:bg-blue-900 dark:text-blue-200 dark:border-blue-700"
};
var Alert = ({
  type = "info",
  message,
  description,
  closable = false,
  onClose
}) => /* @__PURE__ */ React10.createElement(
  "div",
  {
    className: `flex items-start gap-3 border-l-4 p-4 rounded-md shadow-sm ${typeStyles[type]}`
  },
  /* @__PURE__ */ React10.createElement("div", { className: "flex-1" }, /* @__PURE__ */ React10.createElement("div", { className: "font-semibold" }, message), description && /* @__PURE__ */ React10.createElement("div", { className: "text-sm mt-1 opacity-80" }, description)),
  closable && /* @__PURE__ */ React10.createElement(
    "button",
    {
      onClick: onClose,
      className: "ml-2 text-lg font-bold opacity-60 hover:opacity-100"
    },
    "\xD7"
  )
);
var Alert_default = Alert;

// src/components/Avatar/Avatar.tsx
import React11 from "react";
var sizeMap2 = {
  sm: 32,
  md: 40,
  lg: 56,
  xl: 72
};
var Avatar = ({
  src,
  alt = "Avatar",
  size = "md",
  shape = "circle",
  initials,
  icon,
  className = ""
}) => {
  const px = sizeMap2[size];
  const base = `inline-flex items-center justify-center bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 font-semibold select-none ${className}`;
  const rounded = shape === "circle" ? "rounded-full" : "rounded-lg";
  return /* @__PURE__ */ React11.createElement(
    "span",
    {
      className: `${base} ${rounded}`,
      style: { width: px, height: px, fontSize: px / 2.2 }
    },
    src ? /* @__PURE__ */ React11.createElement(
      "img",
      {
        src,
        alt,
        className: `object-cover w-full h-full ${rounded}`
      }
    ) : initials ? /* @__PURE__ */ React11.createElement("span", null, initials) : icon ? icon : /* @__PURE__ */ React11.createElement("span", null, "?")
  );
};
var Avatar_default = Avatar;

// src/components/Breadcrumbs/Breadcrumbs.tsx
import React12 from "react";
var Breadcrumbs = ({
  items,
  separator = "/",
  className = ""
}) => /* @__PURE__ */ React12.createElement(
  "nav",
  {
    className: `flex items-center text-sm ${className}`,
    "aria-label": "Breadcrumb"
  },
  items.map((item, idx) => /* @__PURE__ */ React12.createElement("span", { key: idx, className: "flex items-center" }, item.href && idx !== items.length - 1 ? /* @__PURE__ */ React12.createElement(
    "a",
    {
      href: item.href,
      className: "text-blue-600 hover:underline dark:text-blue-400"
    },
    item.label
  ) : /* @__PURE__ */ React12.createElement("span", { className: "text-gray-500 dark:text-gray-300" }, item.label), idx < items.length - 1 && /* @__PURE__ */ React12.createElement("span", { className: "mx-2 text-gray-400" }, separator)))
);
var Breadcrumbs_default = Breadcrumbs;

// src/components/Calendar/Calendar.tsx
import React13 from "react";
function getDaysInMonth(year, month) {
  return new Date(year, month + 1, 0).getDate();
}
var getYears = (center, range = 20) => {
  const years = [];
  for (let i = center - range; i <= center + range; i++) years.push(i);
  return years;
};
var Calendar = ({
  value,
  onChange,
  className = "",
  showTimePicker = false,
  showSeconds = false,
  hour12 = false,
  timeInterval = 1,
  secondInterval = 1,
  minDate,
  maxDate,
  disableDate,
  disableTime,
  timePickerInline = true,
  renderDay
}) => {
  const today = /* @__PURE__ */ new Date();
  const [current, setCurrent] = React13.useState(() => value || today);
  const [showTime, setShowTime] = React13.useState(timePickerInline);
  const [selected, setSelected] = React13.useState(value);
  React13.useEffect(() => {
    if (value) setSelected(value);
  }, [value]);
  const year = current.getFullYear();
  const month = current.getMonth();
  const days = getDaysInMonth(year, month);
  const firstDay = new Date(year, month, 1).getDay();
  const years = getYears(year);
  const handleSelect = (day) => {
    const date = new Date(
      year,
      month,
      day,
      (selected == null ? void 0 : selected.getHours()) || 0,
      (selected == null ? void 0 : selected.getMinutes()) || 0,
      (selected == null ? void 0 : selected.getSeconds()) || 0
    );
    if (disableDate && disableDate(date)) return;
    setSelected(date);
    onChange == null ? void 0 : onChange(date);
  };
  const handleTimeChange = (h, m, s, ampm2) => {
    let hour = h;
    if (hour12) {
      if (ampm2 === "PM" && hour < 12) hour += 12;
      if (ampm2 === "AM" && hour === 12) hour = 0;
    }
    const date = new Date(selected || current);
    date.setHours(hour, m, s);
    if (disableTime && disableTime(date, hour, m, s)) return;
    setSelected(date);
    onChange == null ? void 0 : onChange(date);
  };
  const selectedHour = (selected || current).getHours();
  const selectedMinute = (selected || current).getMinutes();
  const selectedSecond = (selected || current).getSeconds();
  const ampm = hour12 ? selectedHour >= 12 ? "PM" : "AM" : void 0;
  const isDateDisabled = (date) => {
    if (minDate && date < minDate) return true;
    if (maxDate && date > maxDate) return true;
    if (disableDate && disableDate(date)) return true;
    return false;
  };
  return /* @__PURE__ */ React13.createElement(
    "div",
    {
      className: `w-full max-w-[320px] sm:max-w-sm p-2 sm:p-4 rounded-lg bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 ${className}`
    },
    /* @__PURE__ */ React13.createElement("div", { className: "flex items-center justify-between w-full mb-2 gap-1 sm:gap-2" }, /* @__PURE__ */ React13.createElement(
      "button",
      {
        onClick: () => setCurrent(new Date(year, month - 1, 1)),
        className: "p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full flex items-center justify-center min-w-[32px] min-h-[32px]"
      },
      "<"
    ), /* @__PURE__ */ React13.createElement(
      Select_default,
      {
        value: year.toString(),
        onChange: (y) => setCurrent(new Date(Number(y), month, 1)),
        options: years.map((y) => ({
          value: y.toString(),
          label: y.toString()
        })),
        className: "w-20 sm:w-24"
      }
    ), /* @__PURE__ */ React13.createElement("span", { className: "font-semibold text-sm sm:text-base flex-1 text-center" }, current.toLocaleString("default", { month: "long" })), /* @__PURE__ */ React13.createElement(
      "button",
      {
        onClick: () => setCurrent(new Date(year, month + 1, 1)),
        className: "p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full flex items-center justify-center min-w-[32px] min-h-[32px]"
      },
      ">"
    )),
    /* @__PURE__ */ React13.createElement("div", { className: "grid grid-cols-7 gap-0.5 sm:gap-1 text-xs mb-1" }, ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((d) => /* @__PURE__ */ React13.createElement(
      "div",
      {
        key: d,
        className: "text-center font-medium text-gray-500 dark:text-gray-400 py-1"
      },
      d
    ))),
    /* @__PURE__ */ React13.createElement("div", { className: "grid grid-cols-7 gap-0.5 sm:gap-1" }, Array.from({ length: firstDay }).map((_, i) => /* @__PURE__ */ React13.createElement("div", { key: `empty-${i}` })), Array.from({ length: days }, (_, i) => {
      const day = i + 1;
      const date = new Date(year, month, day);
      const isToday = today.getFullYear() === year && today.getMonth() === month && today.getDate() === day;
      const isSelected = Boolean(
        selected && selected.getFullYear() === year && selected.getMonth() === month && selected.getDate() === day
      );
      const disabled = isDateDisabled(date);
      return renderDay ? /* @__PURE__ */ React13.createElement("div", { key: `day-${day}` }, renderDay(date, isSelected, isToday, disabled)) : /* @__PURE__ */ React13.createElement(
        "button",
        {
          key: `day-${day}`,
          className: `min-w-[36px] min-h-[36px] sm:min-w-[40px] sm:min-h-[40px] rounded-full text-center transition-colors text-sm sm:text-base flex items-center justify-center
                ${isSelected ? "bg-blue-600 text-white" : isToday ? "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200" : "hover:bg-gray-100 dark:hover:bg-gray-800"}
                ${disabled ? "opacity-40 cursor-not-allowed" : ""}`,
          onClick: () => handleSelect(day),
          disabled
        },
        day
      );
    })),
    showTimePicker && (timePickerInline || showTime) && /* @__PURE__ */ React13.createElement("div", { className: "mt-4 flex flex-col gap-2 items-center" }, /* @__PURE__ */ React13.createElement("div", { className: "flex flex-wrap justify-center gap-1 sm:gap-2 items-center w-full" }, /* @__PURE__ */ React13.createElement(
      Select_default,
      {
        popupPosition: "top",
        value: hour12 ? (selectedHour % 12 || 12).toString() : selectedHour.toString(),
        onChange: (v) => handleTimeChange(
          Number(v),
          selectedMinute,
          selectedSecond,
          ampm
        ),
        options: Array.from({ length: hour12 ? 12 : 24 }, (_, i) => ({
          value: (hour12 ? i + 1 : i).toString(),
          label: (hour12 ? i + 1 : i).toString().padStart(2, "0")
        })),
        className: "w-16 sm:w-20"
      }
    ), /* @__PURE__ */ React13.createElement("span", { className: "text-gray-500 font-medium" }, ":"), /* @__PURE__ */ React13.createElement(
      Select_default,
      {
        popupPosition: "top",
        value: selectedMinute.toString(),
        onChange: (v) => handleTimeChange(selectedHour, Number(v), selectedSecond, ampm),
        options: Array.from(
          { length: 60 / timeInterval },
          (_, i) => i * timeInterval
        ).map((m) => ({
          value: m.toString(),
          label: m.toString().padStart(2, "0")
        })),
        className: "w-16 sm:w-20"
      }
    ), showSeconds && /* @__PURE__ */ React13.createElement(React13.Fragment, null, /* @__PURE__ */ React13.createElement("span", { className: "text-gray-500 font-medium" }, ":"), /* @__PURE__ */ React13.createElement(
      Select_default,
      {
        popupPosition: "top",
        value: selectedSecond.toString(),
        onChange: (v) => handleTimeChange(
          selectedHour,
          selectedMinute,
          Number(v),
          ampm
        ),
        options: Array.from(
          { length: 60 / secondInterval },
          (_, i) => i * secondInterval
        ).map((s) => ({
          value: s.toString(),
          label: s.toString().padStart(2, "0")
        })),
        className: "w-16 sm:w-20"
      }
    )), hour12 && /* @__PURE__ */ React13.createElement(
      Select_default,
      {
        popupPosition: "top",
        value: ampm,
        onChange: (v) => handleTimeChange(
          selectedHour % 12 || 12,
          selectedMinute,
          selectedSecond,
          v
        ),
        options: [
          { value: "AM", label: "AM" },
          { value: "PM", label: "PM" }
        ],
        className: "w-16 sm:w-20"
      }
    ))),
    showTimePicker && !timePickerInline && /* @__PURE__ */ React13.createElement(
      "button",
      {
        className: "mt-2 text-sm sm:text-base text-blue-600 dark:text-blue-400 underline w-full py-2",
        onClick: () => setShowTime((v) => !v)
      },
      showTime ? "Hide Time Picker" : "Show Time Picker"
    )
  );
};
var Calendar_default = Calendar;

// src/components/Collapse/Collapse.tsx
import React14 from "react";
import { IoIosArrowDown as IoIosArrowDown2 } from "react-icons/io";
var Collapse = ({
  items,
  defaultActiveKeys = [],
  onChange,
  className = "",
  itemClassName = "",
  headerClassName = "",
  contentClassName = "",
  activeItemClassName = "",
  disabledItemClassName = ""
}) => {
  const [activeKeys, setActiveKeys] = React14.useState(defaultActiveKeys);
  const handleItemClick = (key) => {
    const item = items.find((item2) => item2.key === key);
    if (item && !item.disabled) {
      const newActiveKeys = activeKeys.includes(key) ? activeKeys.filter((k) => k !== key) : [...activeKeys, key];
      setActiveKeys(newActiveKeys);
      onChange == null ? void 0 : onChange(newActiveKeys);
    }
  };
  return /* @__PURE__ */ React14.createElement("div", { className: `space-y-2 ${className}` }, items.map((item) => {
    const Icon = item.icon;
    const isActive = activeKeys.includes(item.key);
    const isDisabled = item.disabled;
    return /* @__PURE__ */ React14.createElement(
      "div",
      {
        key: item.key,
        className: `
              border rounded-md overflow-hidden
              ${itemClassName}
              ${isActive ? activeItemClassName : ""}
              ${isDisabled ? disabledItemClassName : ""}
            `
      },
      /* @__PURE__ */ React14.createElement(
        "button",
        {
          onClick: () => handleItemClick(item.key),
          disabled: isDisabled,
          className: `
                w-full flex items-center justify-between p-4
                ${isDisabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"}
                ${headerClassName}
              `
        },
        /* @__PURE__ */ React14.createElement("div", { className: "flex items-center gap-2" }, Icon && /* @__PURE__ */ React14.createElement(Icon, { className: "w-5 h-5" }), item.header),
        /* @__PURE__ */ React14.createElement(
          IoIosArrowDown2,
          {
            className: `w-5 h-5 transition-transform duration-200 ${isActive ? "transform rotate-180" : ""}`
          }
        )
      ),
      /* @__PURE__ */ React14.createElement(
        "div",
        {
          className: `
                overflow-hidden transition-all duration-200
                ${isActive ? "max-h-[1000px]" : "max-h-0"}
                ${contentClassName}
              `
        },
        /* @__PURE__ */ React14.createElement("div", { className: "p-4" }, item.content)
      )
    );
  }));
};
var Collapse_default = Collapse;

// src/components/List/List.tsx
var import_image = __toESM(require_image());
import React15 from "react";
var List = ({
  items,
  loading = false,
  emptyText = "No items available",
  className = "",
  itemClassName = "",
  headerClassName = "",
  contentClassName = "",
  actionClassName = ""
}) => {
  return /* @__PURE__ */ React15.createElement(
    "div",
    {
      className: `divide-y divide-gray-200 dark:divide-gray-700 ${className}`
    },
    loading ? /* @__PURE__ */ React15.createElement("div", { className: "p-4 text-center text-gray-500 dark:text-gray-400" }, "Loading...") : items.length === 0 ? /* @__PURE__ */ React15.createElement("div", { className: "p-4 text-center text-gray-500 dark:text-gray-400" }, emptyText) : items.map((item) => {
      const Icon = item.icon;
      return /* @__PURE__ */ React15.createElement(
        "div",
        {
          key: item.id,
          className: `
                flex items-center gap-4 p-4
                ${item.onClick ? "cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800/50" : ""}
                ${item.disabled ? "opacity-50 cursor-not-allowed" : ""}
                ${itemClassName}
              `,
          onClick: item.disabled ? void 0 : item.onClick
        },
        item.avatar ? /* @__PURE__ */ React15.createElement(
          import_image.default,
          {
            src: item.avatar,
            alt: item.title,
            width: 40,
            height: 40,
            className: "w-10 h-10 rounded-full object-cover"
          }
        ) : Icon ? /* @__PURE__ */ React15.createElement("div", { className: "flex-shrink-0 p-2 rounded-full bg-gray-100 dark:bg-gray-800" }, /* @__PURE__ */ React15.createElement(Icon, { className: "w-6 h-6 text-gray-500 dark:text-gray-400" })) : null,
        /* @__PURE__ */ React15.createElement("div", { className: `flex-1 min-w-0 ${contentClassName}` }, /* @__PURE__ */ React15.createElement(
          "h3",
          {
            className: `
                    text-sm font-medium text-gray-900 dark:text-white
                    ${headerClassName}
                  `
          },
          item.title
        ), item.description && /* @__PURE__ */ React15.createElement("p", { className: "mt-1 text-sm text-gray-500 dark:text-gray-400" }, item.description)),
        item.actions && /* @__PURE__ */ React15.createElement(
          "div",
          {
            className: `
                    flex-shrink-0 flex items-center gap-2
                    ${actionClassName}
                  `
          },
          item.actions
        )
      );
    })
  );
};
var List_default = List;

// src/components/Pagination/Pagination.tsx
import React16 from "react";
var Pagination = ({
  current,
  total,
  pageSize,
  onChange,
  className = ""
}) => {
  const pageCount = Math.ceil(total / pageSize);
  const pages = Array.from({ length: pageCount }, (_, i) => i + 1);
  return /* @__PURE__ */ React16.createElement("div", { className: `flex items-center gap-2 ${className}` }, /* @__PURE__ */ React16.createElement(
    "button",
    {
      className: "px-2 py-1 rounded border bg-gray-100 dark:bg-gray-800 disabled:opacity-50",
      onClick: () => onChange(current - 1),
      disabled: current === 1
    },
    "Prev"
  ), pages.map((page) => /* @__PURE__ */ React16.createElement(
    "button",
    {
      key: page,
      className: `px-3 py-1 rounded border transition-colors ${page === current ? "bg-blue-600 text-white border-blue-600" : "bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-200"}`,
      onClick: () => onChange(page)
    },
    page
  )), /* @__PURE__ */ React16.createElement(
    "button",
    {
      className: "px-2 py-1 rounded border bg-gray-100 dark:bg-gray-800 disabled:opacity-50",
      onClick: () => onChange(current + 1),
      disabled: current === pageCount
    },
    "Next"
  ));
};
var Pagination_default = Pagination;

// src/components/Popover/Popover.tsx
import React17, { useState as useState4, useRef as useRef5, useEffect as useEffect5 } from "react";
var Popover = ({
  trigger,
  content,
  placement = "top",
  hover = false,
  className = ""
}) => {
  const [open, setOpen] = useState4(false);
  const ref = useRef5(null);
  useEffect5(() => {
    if (!hover && open) {
      const handleClick = (e) => {
        if (ref.current && !ref.current.contains(e.target)) {
          setOpen(false);
        }
      };
      document.addEventListener("mousedown", handleClick);
      return () => document.removeEventListener("mousedown", handleClick);
    }
  }, [open, hover]);
  return /* @__PURE__ */ React17.createElement("div", { ref, className: "relative inline-block" }, /* @__PURE__ */ React17.createElement(
    "span",
    {
      onClick: () => !hover && setOpen((v) => !v),
      onMouseEnter: () => hover && setOpen(true),
      onMouseLeave: () => hover && setOpen(false),
      className: "cursor-pointer"
    },
    trigger
  ), open && /* @__PURE__ */ React17.createElement(
    "div",
    {
      className: `absolute z-30 min-w-[160px] p-3 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded shadow-lg ${className}`,
      style: {
        top: placement === "bottom" ? "100%" : placement === "top" ? void 0 : "50%",
        bottom: placement === "top" ? "100%" : void 0,
        left: placement === "right" ? "100%" : placement === "left" ? void 0 : "50%",
        right: placement === "left" ? "100%" : void 0,
        transform: placement === "top" || placement === "bottom" ? "translateX(-50%)" : "translateY(-50%)"
      }
    },
    content
  ));
};
var Popover_default = Popover;

// src/components/Progress/Progress.tsx
import React18 from "react";
var Progress = ({
  value,
  max = 100,
  size = "md",
  variant = "default",
  rounded = "full",
  showValue = false,
  valuePosition = "inside",
  striped = false,
  animated = false,
  className = "",
  trackClassName = "",
  barClassName = "",
  valueClassName = "",
  label,
  labelPosition = "top",
  labelClassName = ""
}) => {
  const sizeClasses = {
    sm: "h-1",
    md: "h-2",
    lg: "h-4"
  };
  const variantClasses = {
    default: "bg-gray-200 dark:bg-gray-700",
    primary: "bg-blue-200 dark:bg-blue-900",
    success: "bg-green-200 dark:bg-green-900",
    warning: "bg-yellow-200 dark:bg-yellow-900",
    error: "bg-red-200 dark:bg-red-900",
    info: "bg-indigo-200 dark:bg-indigo-900"
  };
  const barVariantClasses = {
    default: "bg-gray-600 dark:bg-gray-400",
    primary: "bg-blue-600 dark:bg-blue-400",
    success: "bg-green-600 dark:bg-green-400",
    warning: "bg-yellow-600 dark:bg-yellow-400",
    error: "bg-red-600 dark:bg-red-400",
    info: "bg-indigo-600 dark:bg-indigo-400"
  };
  const roundedClasses = {
    none: "rounded-none",
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    full: "rounded-full"
  };
  const percentage = Math.min(100, Math.max(0, value / max * 100));
  const renderValue = () => {
    if (!showValue) return null;
    return /* @__PURE__ */ React18.createElement(
      "span",
      {
        className: `text-xs font-medium ${valuePosition === "inside" ? "text-white" : "text-gray-700 dark:text-gray-300"} ${valueClassName}`
      },
      Math.round(percentage),
      "%"
    );
  };
  const renderLabel = () => {
    if (!label) return null;
    return /* @__PURE__ */ React18.createElement(
      "div",
      {
        className: `text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 ${labelPosition === "bottom" ? "mt-1" : "mb-1"} ${labelClassName}`
      },
      label
    );
  };
  return /* @__PURE__ */ React18.createElement("div", { className: `w-full ${className}` }, labelPosition === "top" && renderLabel(), /* @__PURE__ */ React18.createElement(
    "div",
    {
      className: `relative w-full overflow-hidden ${sizeClasses[size]} ${roundedClasses[rounded]} ${variantClasses[variant]} ${trackClassName}`
    },
    /* @__PURE__ */ React18.createElement(
      "div",
      {
        className: `h-full transition-all duration-300 ${barVariantClasses[variant]} ${roundedClasses[rounded]} ${striped ? "bg-stripes" : ""} ${animated ? "animate-progress" : ""} ${barClassName}`,
        style: { width: `${percentage}%` }
      },
      valuePosition === "inside" && renderValue()
    )
  ), valuePosition === "outside" && /* @__PURE__ */ React18.createElement("div", { className: "mt-1 flex justify-end" }, renderValue()), labelPosition === "bottom" && renderLabel());
};
var Progress_default = Progress;

// src/components/Rating/Rating.tsx
import React19 from "react";
var Rating = ({
  value,
  max = 5,
  onChange,
  readOnly = false,
  className = "",
  showInfo = false,
  infoPosition = "bottom"
}) => {
  const handleClick = (index, event) => {
    if (readOnly || !onChange) return;
    const starElement = event.currentTarget;
    const rect = starElement.getBoundingClientRect();
    const isHalf = event.clientX - rect.left < rect.width / 2;
    onChange(index + (isHalf ? 0.5 : 1));
  };
  const stars = /* @__PURE__ */ React19.createElement("div", { className: "flex items-center gap-1" }, Array.from({ length: max }, (_, i) => {
    const filled = i + 1 <= value;
    const half = !filled && i + 0.5 <= value;
    return /* @__PURE__ */ React19.createElement(
      "span",
      {
        key: i,
        className: `cursor-pointer ${readOnly ? "pointer-events-none" : ""}`,
        onClick: (e) => handleClick(i, e)
      },
      /* @__PURE__ */ React19.createElement(
        "svg",
        {
          className: `w-6 h-6 ${filled ? "text-yellow-400" : half ? "text-yellow-300" : "text-gray-300 dark:text-gray-600"}`,
          viewBox: "0 0 24 24",
          fill: filled ? "currentColor" : "none",
          stroke: "currentColor",
          strokeWidth: "1.5"
        },
        half ? /* @__PURE__ */ React19.createElement(React19.Fragment, null, /* @__PURE__ */ React19.createElement(
          "path",
          {
            d: "M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z",
            fill: "currentColor",
            style: { clipPath: "inset(0 50% 0 0)" }
          }
        ), /* @__PURE__ */ React19.createElement(
          "path",
          {
            d: "M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z",
            fill: "none",
            style: { clipPath: "inset(0 0 0 50%)" }
          }
        )) : /* @__PURE__ */ React19.createElement("path", { d: "M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" })
      )
    );
  }));
  const info = showInfo && /* @__PURE__ */ React19.createElement("div", { className: "text-sm text-gray-600 dark:text-gray-400" }, value.toFixed(1), " / ", max);
  return /* @__PURE__ */ React19.createElement("div", { className: `flex flex-col gap-1 ${className}` }, infoPosition === "top" && info, stars, infoPosition === "bottom" && info);
};
var Rating_default = Rating;

// src/components/Slider/Slider.tsx
import React20 from "react";
var Slider = ({
  min = 0,
  max = 100,
  step = 1,
  value,
  onChange,
  className = ""
}) => {
  return /* @__PURE__ */ React20.createElement("div", { className: `flex items-center gap-4 ${className}` }, /* @__PURE__ */ React20.createElement(
    "input",
    {
      type: "range",
      min,
      max,
      step,
      value,
      onChange: (e) => onChange(Number(e.target.value)),
      className: "w-full accent-blue-600"
    }
  ), /* @__PURE__ */ React20.createElement("span", { className: "w-10 text-right text-sm font-medium" }, value));
};
var Slider_default = Slider;

// src/components/StatCard/StatCard.tsx
import React21 from "react";
import { HiArrowUp, HiArrowDown } from "react-icons/hi2";
var StatCard = ({
  title,
  value,
  icon: Icon,
  trend,
  description,
  className = "",
  iconClassName = "",
  trendClassName = ""
}) => {
  return /* @__PURE__ */ React21.createElement(
    "div",
    {
      className: `
        p-6 rounded-lg bg-white dark:bg-gray-800
        border border-gray-200 dark:border-gray-700
        ${className}
      `
    },
    /* @__PURE__ */ React21.createElement("div", { className: "flex items-center justify-between" }, /* @__PURE__ */ React21.createElement("div", null, /* @__PURE__ */ React21.createElement("p", { className: "text-sm font-medium text-gray-500 dark:text-gray-400" }, title), /* @__PURE__ */ React21.createElement("p", { className: "mt-2 text-3xl font-semibold text-gray-900 dark:text-white" }, value)), Icon && /* @__PURE__ */ React21.createElement(
      "div",
      {
        className: `
              p-3 rounded-full bg-blue-100 dark:bg-blue-900
              ${iconClassName}
            `
      },
      /* @__PURE__ */ React21.createElement(Icon, { className: "w-6 h-6 text-blue-600 dark:text-blue-400" })
    )),
    (trend || description) && /* @__PURE__ */ React21.createElement("div", { className: "mt-4 flex items-center justify-between" }, trend && /* @__PURE__ */ React21.createElement(
      "div",
      {
        className: `
                flex items-center gap-1 text-sm
                ${trend.isPositive ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"}
                ${trendClassName}
              `
      },
      trend.isPositive ? /* @__PURE__ */ React21.createElement(HiArrowUp, { className: "w-4 h-4" }) : /* @__PURE__ */ React21.createElement(HiArrowDown, { className: "w-4 h-4" }),
      /* @__PURE__ */ React21.createElement("span", null, Math.abs(trend.value), "%")
    ), description && /* @__PURE__ */ React21.createElement("p", { className: "text-sm text-gray-500 dark:text-gray-400" }, description))
  );
};
var StatCard_default = StatCard;

// src/components/Stepper/Stepper.tsx
import React22 from "react";
var Stepper = ({
  steps,
  current,
  className = ""
}) => {
  return /* @__PURE__ */ React22.createElement("div", { className: `flex items-center gap-4 ${className}` }, steps.map((step, idx) => /* @__PURE__ */ React22.createElement("div", { key: idx, className: "flex items-center gap-2" }, /* @__PURE__ */ React22.createElement(
    "div",
    {
      className: `flex items-center justify-center w-8 h-8 rounded-full border-2 font-bold transition-all
            ${idx < current ? "bg-blue-600 text-white border-blue-600" : idx === current ? "bg-white dark:bg-gray-900 border-blue-600 text-blue-600" : "bg-gray-200 dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-400"}`
    },
    idx + 1
  ), /* @__PURE__ */ React22.createElement("div", { className: "flex flex-col" }, /* @__PURE__ */ React22.createElement("span", { className: "text-sm font-medium" }, step.label), step.description && /* @__PURE__ */ React22.createElement("span", { className: "text-xs text-gray-500 dark:text-gray-400" }, step.description)), idx < steps.length - 1 && /* @__PURE__ */ React22.createElement("div", { className: "w-8 h-0.5 bg-gray-300 dark:bg-gray-600 mx-2" }))));
};
var Stepper_default = Stepper;

// src/components/TagInput/TagInput.tsx
import React23, { useState as useState5 } from "react";
import { BsX } from "react-icons/bs";
var TagInput = ({
  label,
  placeholder = "Type and press comma to add tags",
  leftIcon: LeftIcon,
  tags,
  onChange,
  className = "",
  inputClassName = "",
  tagClassName = ""
}) => {
  const [inputValue, setInputValue] = useState5("");
  const handleKeyDown = (e) => {
    if (e.key === "," || e.key === "Enter") {
      e.preventDefault();
      const newTag = inputValue.trim();
      if (newTag && !tags.includes(newTag)) {
        onChange([...tags, newTag]);
        setInputValue("");
      }
    } else if (e.key === "Backspace" && !inputValue && tags.length > 0) {
      onChange(tags.slice(0, -1));
    }
  };
  const removeTag = (tagToRemove) => {
    onChange(tags.filter((tag) => tag !== tagToRemove));
  };
  return /* @__PURE__ */ React23.createElement("div", { className: `flex flex-col gap-1 ${className}` }, label && /* @__PURE__ */ React23.createElement("label", { className: "text-sm font-medium text-black dark:text-white" }, label), /* @__PURE__ */ React23.createElement("div", { className: "flex flex-wrap gap-2 p-2 border rounded-md dark:border-gray-700 dark:bg-gray-800" }, tags.map((tag) => /* @__PURE__ */ React23.createElement(
    "span",
    {
      key: tag,
      className: `inline-flex items-center gap-1 px-2 py-1 text-sm bg-blue-100 text-blue-800 rounded-md dark:bg-blue-900 dark:text-blue-200 ${tagClassName}`
    },
    tag,
    /* @__PURE__ */ React23.createElement(
      "button",
      {
        type: "button",
        onClick: () => removeTag(tag),
        className: "hover:text-blue-600 dark:hover:text-blue-300"
      },
      /* @__PURE__ */ React23.createElement(BsX, { className: "w-4 h-4" })
    )
  )), /* @__PURE__ */ React23.createElement("div", { className: "flex items-center flex-1 min-w-[120px]" }, LeftIcon && /* @__PURE__ */ React23.createElement("div", { className: "flex items-center px-2 text-gray-500" }, /* @__PURE__ */ React23.createElement(LeftIcon, { className: "w-5 h-5" })), /* @__PURE__ */ React23.createElement(
    "input",
    {
      type: "text",
      value: inputValue,
      onChange: (e) => setInputValue(e.target.value),
      onKeyDown: handleKeyDown,
      placeholder: tags.length === 0 ? placeholder : "",
      className: `flex-1 bg-transparent outline-none text-black dark:text-white ${inputClassName}`
    }
  ))));
};
var TagInput_default = TagInput;

// src/components/Timeline/Timeline.tsx
import React24 from "react";
var Timeline = ({
  items,
  className = "",
  itemClassName = "",
  iconClassName = "",
  contentClassName = "",
  timeClassName = ""
}) => {
  const getStatusColor = (status) => {
    switch (status) {
      case "success":
        return "bg-green-500";
      case "error":
        return "bg-red-500";
      case "warning":
        return "bg-yellow-500";
      case "info":
        return "bg-blue-500";
      default:
        return "bg-gray-500";
    }
  };
  return /* @__PURE__ */ React24.createElement("div", { className: `space-y-4 ${className}` }, items.map((item, index) => {
    const Icon = item.icon;
    const isLast = index === items.length - 1;
    return /* @__PURE__ */ React24.createElement("div", { key: item.key, className: `flex gap-4 ${itemClassName}` }, /* @__PURE__ */ React24.createElement("div", { className: "flex flex-col items-center" }, /* @__PURE__ */ React24.createElement(
      "div",
      {
        className: `
                  w-8 h-8 rounded-full flex items-center justify-center
                  ${getStatusColor(item.status)}
                  ${iconClassName}
                `
      },
      Icon ? /* @__PURE__ */ React24.createElement(Icon, { className: "w-4 h-4 text-white" }) : /* @__PURE__ */ React24.createElement("div", { className: "w-2 h-2 rounded-full bg-white" })
    ), !isLast && /* @__PURE__ */ React24.createElement("div", { className: "w-0.5 h-full bg-gray-200 dark:bg-gray-700" })), /* @__PURE__ */ React24.createElement("div", { className: "flex-1 pb-8" }, /* @__PURE__ */ React24.createElement("div", { className: "flex items-center justify-between mb-1" }, /* @__PURE__ */ React24.createElement("h3", { className: "text-sm font-medium text-gray-900 dark:text-white" }, item.title), item.time && /* @__PURE__ */ React24.createElement(
      "span",
      {
        className: `text-xs text-gray-500 dark:text-gray-400 ${timeClassName}`
      },
      item.time
    )), /* @__PURE__ */ React24.createElement(
      "div",
      {
        className: `text-sm text-gray-600 dark:text-gray-300 ${contentClassName}`
      },
      item.content
    )));
  }));
};
var Timeline_default = Timeline;

// src/components/Toast/Toast.tsx
import React25, { useEffect as useEffect6, useState as useState6 } from "react";
import { BsCheck, BsExclamationCircle, BsInfo, BsX as BsX2 } from "react-icons/bs";
var Toast = ({
  id,
  type,
  message,
  title,
  duration = 5e3,
  position = "top-right",
  onClose,
  icon,
  action,
  className = "",
  contentClassName = "",
  titleClassName = "",
  messageClassName = "",
  iconClassName = "",
  closeButtonClassName = "",
  actionButtonClassName = "",
  progressClassName = "",
  animation = "slide",
  animationDuration = "normal"
}) => {
  const [progress, setProgress] = useState6(100);
  const [isPaused, setIsPaused] = useState6(false);
  const [isExiting, setIsExiting] = useState6(false);
  const toastConfig = {
    success: {
      icon: BsCheck,
      bgColor: "bg-green-50 dark:bg-green-900/50",
      textColor: "text-green-800 dark:text-green-200",
      borderColor: "border-green-200 dark:border-green-800",
      iconColor: "text-green-500 dark:text-green-400",
      progressColor: "bg-green-500 dark:bg-green-400"
    },
    error: {
      icon: BsExclamationCircle,
      bgColor: "bg-red-50 dark:bg-red-900/50",
      textColor: "text-red-800 dark:text-red-200",
      borderColor: "border-red-200 dark:border-red-800",
      iconColor: "text-red-500 dark:text-red-400",
      progressColor: "bg-red-500 dark:bg-red-400"
    },
    warning: {
      icon: BsExclamationCircle,
      bgColor: "bg-yellow-50 dark:bg-yellow-900/50",
      textColor: "text-yellow-800 dark:text-yellow-200",
      borderColor: "border-yellow-200 dark:border-yellow-800",
      iconColor: "text-yellow-500 dark:text-yellow-400",
      progressColor: "bg-yellow-500 dark:bg-yellow-400"
    },
    info: {
      icon: BsInfo,
      bgColor: "bg-blue-50 dark:bg-blue-900/50",
      textColor: "text-blue-800 dark:text-blue-200",
      borderColor: "border-blue-200 dark:border-blue-800",
      iconColor: "text-blue-500 dark:text-blue-400",
      progressColor: "bg-blue-500 dark:bg-blue-400"
    }
  };
  const config = toastConfig[type];
  const Icon = icon || config.icon;
  const positionClasses = {
    "top-right": "top-4 right-4",
    "top-left": "top-4 left-4",
    "bottom-right": "bottom-4 right-4",
    "bottom-left": "bottom-4 left-4",
    "top-center": "top-4 left-1/2 -translate-x-1/2",
    "bottom-center": "bottom-4 left-1/2 -translate-x-1/2"
  };
  const animationClasses = {
    slide: isExiting ? "animate-slide-out" : "animate-slide-in",
    fade: isExiting ? "animate-fade-out" : "animate-fade-in",
    zoom: isExiting ? "animate-zoom-out" : "animate-zoom-in",
    bounce: isExiting ? "animate-bounce-out" : "animate-bounce-in",
    flip: isExiting ? "animate-flip-out" : "animate-flip-in"
  };
  const durationClasses = {
    fast: "duration-150",
    normal: "duration-300",
    slow: "duration-500"
  };
  useEffect6(() => {
    if (isExiting) {
      const timer = setTimeout(() => {
        onClose(id);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isExiting, id, onClose]);
  useEffect6(() => {
    let animationFrame;
    let startTime;
    const updateProgress = () => {
      const now = Date.now();
      const elapsed = now - startTime;
      const newProgress = Math.max(0, 100 - elapsed / duration * 100);
      if (newProgress <= 0) {
        setProgress(0);
        setIsExiting(true);
      } else {
        setProgress(newProgress);
        animationFrame = requestAnimationFrame(updateProgress);
      }
    };
    if (!isPaused && duration > 0) {
      startTime = Date.now();
      animationFrame = requestAnimationFrame(updateProgress);
    }
    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [duration, isPaused]);
  const handleClose = () => {
    setIsExiting(true);
  };
  return /* @__PURE__ */ React25.createElement(
    "div",
    {
      className: `fixed ${positionClasses[position]} z-50 max-w-md w-full shadow-lg rounded-lg border ${config.bgColor} ${config.borderColor} ${animationClasses[animation]} ${durationClasses[animationDuration]} transform transition-all ${className}`,
      onMouseEnter: () => setIsPaused(true),
      onMouseLeave: () => setIsPaused(false)
    },
    /* @__PURE__ */ React25.createElement("div", { className: `p-4 ${contentClassName}` }, /* @__PURE__ */ React25.createElement("div", { className: "flex items-start" }, /* @__PURE__ */ React25.createElement("div", { className: `flex-shrink-0 ${config.iconColor} ${iconClassName}` }, /* @__PURE__ */ React25.createElement(Icon, { className: "w-5 h-5" })), /* @__PURE__ */ React25.createElement("div", { className: "ml-3 w-0 flex-1" }, title && /* @__PURE__ */ React25.createElement(
      "p",
      {
        className: `text-sm font-medium ${config.textColor} ${titleClassName}`
      },
      title
    ), /* @__PURE__ */ React25.createElement("p", { className: `text-sm ${config.textColor} ${messageClassName}` }, message), action && /* @__PURE__ */ React25.createElement("div", { className: "mt-3" }, /* @__PURE__ */ React25.createElement(
      "button",
      {
        onClick: action.onClick,
        className: `text-sm font-medium ${config.textColor} hover:underline focus:outline-none ${actionButtonClassName}`
      },
      action.label
    ))), /* @__PURE__ */ React25.createElement("div", { className: "ml-4 flex-shrink-0 flex" }, /* @__PURE__ */ React25.createElement(
      "button",
      {
        onClick: handleClose,
        className: `inline-flex text-gray-400 hover:text-gray-500 focus:outline-none ${closeButtonClassName}`
      },
      /* @__PURE__ */ React25.createElement(BsX2, { className: "h-5 w-5" })
    )))),
    duration > 0 && /* @__PURE__ */ React25.createElement(
      "div",
      {
        className: `h-1 w-full ${config.progressColor} ${progressClassName}`,
        style: { width: `${progress}%` }
      }
    )
  );
};
var Toast_default = Toast;

// src/components/Toast/ToastContainer.tsx
import React26, { useState as useState7, useCallback as useCallback2 } from "react";
var ToastContainer = ({
  position = "top-right",
  className = "",
  limit = 5
}) => {
  const [toasts, setToasts] = useState7([]);
  const addToast = useCallback2(
    (options) => {
      const id = Math.random().toString(36).substr(2, 9);
      const newToast = __spreadValues({
        id
      }, options);
      setToasts((prevToasts) => {
        const updatedToasts = [newToast, ...prevToasts];
        return updatedToasts.slice(0, limit);
      });
      return id;
    },
    [limit]
  );
  const removeToast = useCallback2((id) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  }, []);
  const success = useCallback2(
    (options) => {
      return addToast(__spreadProps(__spreadValues({}, options), { type: "success" }));
    },
    [addToast]
  );
  const error = useCallback2(
    (options) => {
      return addToast(__spreadProps(__spreadValues({}, options), { type: "error" }));
    },
    [addToast]
  );
  const warning = useCallback2(
    (options) => {
      return addToast(__spreadProps(__spreadValues({}, options), { type: "warning" }));
    },
    [addToast]
  );
  const info = useCallback2(
    (options) => {
      return addToast(__spreadProps(__spreadValues({}, options), { type: "info" }));
    },
    [addToast]
  );
  if (typeof window !== "undefined") {
    window.toast = {
      success,
      error,
      warning,
      info
    };
  }
  return /* @__PURE__ */ React26.createElement("div", { className: `fixed z-50 ${className}` }, toasts.map((toast) => /* @__PURE__ */ React26.createElement(
    Toast_default,
    __spreadProps(__spreadValues({
      key: toast.id,
      type: toast.type || "info"
    }, toast), {
      position: toast.position || position,
      onClose: removeToast
    })
  )));
};
var ToastContainer_default = ToastContainer;

// src/components/Tooltip/Tooltip.tsx
import React27, { useState as useState8, useRef as useRef6, useEffect as useEffect7, useCallback as useCallback3 } from "react";
var Tooltip = ({
  content,
  children,
  position = "top",
  delay = 200,
  className = "",
  contentClassName = "",
  arrowClassName = "",
  animation = "fade",
  animationDuration = "normal",
  maxWidth = "200px",
  interactive = false
}) => {
  const [isVisible, setIsVisible] = useState8(false);
  const [coords, setCoords] = useState8({ x: 0, y: 0 });
  const triggerRef = useRef6(null);
  const tooltipRef = useRef6(null);
  const timeoutRef = useRef6(
    void 0
  );
  const positionClasses = {
    top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
    bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
    left: "right-full top-1/2 -translate-y-1/2 mr-2",
    right: "left-full top-1/2 -translate-y-1/2 ml-2"
  };
  const arrowClasses = {
    top: "bottom-[-6px] left-1/2 -translate-x-1/2 border-t-gray-900",
    bottom: "top-[-6px] left-1/2 -translate-x-1/2 border-b-gray-900",
    left: "right-[-6px] top-1/2 -translate-y-1/2 border-l-gray-900",
    right: "left-[-6px] top-1/2 -translate-y-1/2 border-r-gray-900"
  };
  const animationClasses = {
    fade: "animate-fade-in",
    zoom: "animate-zoom-in",
    slide: "animate-slide-in",
    bounce: "animate-bounce-in"
  };
  const durationClasses = {
    fast: "duration-150",
    normal: "duration-300",
    slow: "duration-500"
  };
  const updatePosition = useCallback3(() => {
    if (!triggerRef.current || !tooltipRef.current) return;
    const trigger = triggerRef.current.getBoundingClientRect();
    const scrollX = window.scrollX;
    const scrollY = window.scrollY;
    let x = 0;
    let y = 0;
    switch (position) {
      case "top":
        x = trigger.left + trigger.width / 2 + scrollX;
        y = trigger.top + scrollY;
        break;
      case "bottom":
        x = trigger.left + trigger.width / 2 + scrollX;
        y = trigger.bottom + scrollY;
        break;
      case "left":
        x = trigger.left + scrollX;
        y = trigger.top + trigger.height / 2 + scrollY;
        break;
      case "right":
        x = trigger.right + scrollX;
        y = trigger.top + trigger.height / 2 + scrollY;
        break;
    }
    setCoords({ x, y });
  }, [position]);
  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setIsVisible(true);
      updatePosition();
    }, delay);
  };
  const handleMouseLeave = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsVisible(false);
  };
  useEffect7(() => {
    if (isVisible) {
      updatePosition();
      window.addEventListener("scroll", updatePosition);
      window.addEventListener("resize", updatePosition);
    }
    return () => {
      window.removeEventListener("scroll", updatePosition);
      window.removeEventListener("resize", updatePosition);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [isVisible, updatePosition]);
  return /* @__PURE__ */ React27.createElement(
    "div",
    {
      ref: triggerRef,
      className: `inline-block ${className}`,
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave
    },
    children,
    isVisible && /* @__PURE__ */ React27.createElement(
      "div",
      {
        ref: tooltipRef,
        style: {
          position: "absolute",
          left: coords.x,
          top: coords.y,
          maxWidth
        },
        className: `${positionClasses[position]} ${animationClasses[animation]} ${durationClasses[animationDuration]}`,
        onMouseEnter: interactive ? handleMouseEnter : void 0,
        onMouseLeave: interactive ? handleMouseLeave : void 0
      },
      /* @__PURE__ */ React27.createElement(
        "div",
        {
          className: `bg-gray-900 text-white text-sm rounded-lg py-2 px-3 shadow-lg ${contentClassName}`
        },
        content,
        /* @__PURE__ */ React27.createElement(
          "div",
          {
            className: `absolute w-0 h-0 border-4 border-transparent ${arrowClasses[position]} ${arrowClassName}`
          }
        )
      )
    )
  );
};
var Tooltip_default = Tooltip;

// src/components/Upload/Upload.tsx
import React28, { useRef as useRef7 } from "react";
var Upload = ({
  onChange,
  multiple = false,
  accept,
  className = ""
}) => {
  const inputRef = useRef7(null);
  const [dragActive, setDragActive] = React28.useState(false);
  const [files, setFiles] = React28.useState(null);
  const handleFiles = (fileList) => {
    setFiles(fileList);
    onChange(fileList);
  };
  return /* @__PURE__ */ React28.createElement(
    "div",
    {
      className: `border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors ${dragActive ? "border-blue-500 bg-blue-50 dark:bg-blue-900/30" : "border-gray-300 dark:border-gray-600"} ${className}`,
      onClick: () => {
        var _a;
        return (_a = inputRef.current) == null ? void 0 : _a.click();
      },
      onDragOver: (e) => {
        e.preventDefault();
        setDragActive(true);
      },
      onDragLeave: (e) => {
        e.preventDefault();
        setDragActive(false);
      },
      onDrop: (e) => {
        e.preventDefault();
        setDragActive(false);
        if (e.dataTransfer.files) handleFiles(e.dataTransfer.files);
      }
    },
    /* @__PURE__ */ React28.createElement(
      "input",
      {
        ref: inputRef,
        type: "file",
        multiple,
        accept,
        className: "hidden",
        onChange: (e) => e.target.files && handleFiles(e.target.files)
      }
    ),
    /* @__PURE__ */ React28.createElement("div", { className: "text-gray-500 dark:text-gray-300 mb-2" }, "Drag & drop files here or", " ", /* @__PURE__ */ React28.createElement("span", { className: "text-blue-600 dark:text-blue-400 underline" }, "browse")),
    files && files.length > 0 && /* @__PURE__ */ React28.createElement("ul", { className: "mt-2 text-left text-xs text-gray-700 dark:text-gray-200" }, Array.from(files).map((file, i) => /* @__PURE__ */ React28.createElement("li", { key: i }, file.name)))
  );
};
var Upload_default = Upload;

// src/components/Tabs/Tabs.tsx
import React29 from "react";
var Tabs = ({
  items,
  defaultActiveKey,
  onChange,
  className = "",
  tabClassName = "",
  contentClassName = "",
  activeTabClassName = "",
  disabledTabClassName = ""
}) => {
  var _a;
  const [activeKey, setActiveKey] = React29.useState(
    defaultActiveKey || ((_a = items[0]) == null ? void 0 : _a.key)
  );
  const handleTabClick = (key) => {
    const tab = items.find((item) => item.key === key);
    if (tab && !tab.disabled) {
      setActiveKey(key);
      onChange == null ? void 0 : onChange(key);
    }
  };
  const activeTab = items.find((item) => item.key === activeKey);
  return /* @__PURE__ */ React29.createElement("div", { className: `flex flex-col ${className}` }, /* @__PURE__ */ React29.createElement("div", { className: "flex border-b border-gray-200 dark:border-gray-700" }, items.map((item) => {
    const Icon = item.icon;
    const isActive = item.key === activeKey;
    const isDisabled = item.disabled;
    return /* @__PURE__ */ React29.createElement(
      "button",
      {
        key: item.key,
        onClick: () => handleTabClick(item.key),
        disabled: isDisabled,
        className: `
                flex items-center gap-2 px-4 py-2 text-sm font-medium
                ${isActive ? "border-b-2 border-blue-500 text-blue-600 dark:text-blue-400" : "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"}
                ${isDisabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"}
                ${tabClassName}
                ${isActive ? activeTabClassName : ""}
                ${isDisabled ? disabledTabClassName : ""}
              `
      },
      Icon && /* @__PURE__ */ React29.createElement(Icon, { className: "w-4 h-4" }),
      item.label
    );
  })), /* @__PURE__ */ React29.createElement("div", { className: `p-4 ${contentClassName}` }, activeTab == null ? void 0 : activeTab.content));
};
var Tabs_default = Tabs;
export {
  Alert_default as Alert,
  Avatar_default as Avatar,
  Badge_default as Badge,
  Breadcrumbs_default as Breadcrumbs,
  Button_default as Button,
  Calendar_default as Calendar,
  Card_default as Card,
  Collapse_default as Collapse,
  Input_default as Input,
  List_default as List,
  Modal_default as Modal,
  Pagination_default as Pagination,
  Popover_default as Popover,
  Progress_default as Progress,
  Rating_default as Rating,
  Select_default as Select,
  Skeleton_default as Skeleton,
  Slider_default as Slider,
  Spinner_default as Spinner,
  StatCard_default as StatCard,
  Stepper_default as Stepper,
  Table_default as Table,
  Tabs_default as Tabs,
  TagInput_default as TagInput,
  Timeline_default as Timeline,
  Toast_default as Toast,
  ToastContainer_default as ToastContainer,
  Tooltip_default as Tooltip,
  Upload_default as Upload
};
