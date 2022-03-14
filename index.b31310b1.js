// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function() {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"8uBhv":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "69f74e7f31319ffd";
module.bundle.HMR_BUNDLE_ID = "0b7c8afcb31310b1";
"use strict";
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F1() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = o[Symbol.iterator]();
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                } // Render the fancy html overlay
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
            document.body.appendChild(overlay);
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>\n          ").concat(stack, "\n        </pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>' + hint + '</div>';
            }).join(''), "\n        </div>\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') {
        reloadCSS();
        return;
    }
    var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
    if (deps) {
        var fn = new Function('require', 'module', 'exports', asset.output);
        modules[asset.id] = [
            fn,
            deps
        ];
    } else if (bundle.parent) hmrApply(bundle.parent, asset);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    return getParents(module.bundle.root, id).some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"4aleK":[function(require,module,exports) {
var _state = require("./state");
var _router = require("./router");
var _index = require("./components/text/index");
var _index1 = require("./components/button/index");
var _index2 = require("./components/counter/index");
var _piedra = require("./components/move/piedra");
var _papel = require("./components/move/papel");
var _tijeras = require("./components/move/tijeras");
var _index3 = require("./components/meme/index");
function initApp(param) {
    _state.state.init();
    _index3.initStar();
    _papel.initPapel();
    _piedra.initPiedra();
    _tijeras.initTijeras();
    _index2.initCounter();
    _index.initText();
    _index1.initButton();
    _router.initRouter(param);
}
(function() {
    const root = document.querySelector(".root");
    initApp(root);
    console.log(_state.state.getState());
})();

},{"./state":"28XHA","./router":"b2iia","./components/text/index":"8YEyP","./components/counter/index":"kSmEm","./components/move/piedra":"8Cy7x","./components/move/papel":"b4JXk","./components/move/tijeras":"3EbMd","./components/button/index":"3uBrB","./components/meme/index":"2mLGE"}],"28XHA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "state", ()=>state
);
const state = {
    data: {
        currentGame: {
            jugadaMia: "",
            jugadaPc: ""
        },
        histoy: []
    },
    listeners: [],
    init () {
        let localData = localStorage.getItem("saved-state");
        if (localData !== null) this.setState(JSON.parse(localData));
        else this.setState({
            currentGame: {
                jugadaMia: "",
                jugadaPc: ""
            },
            histoy: []
        });
    },
    getState () {
        return this.data;
    },
    setState (newState) {
        this.data = newState;
        for (const cb of this.listeners)cb();
        localStorage.setItem("saved-state", JSON.stringify(newState));
    },
    subscribe (callback) {
        this.listeners.push(callback);
    },
    addCurrentPlay (jugadaMia, jugadaPc) {
        const data = this.getState();
        const newData = {
            ...data,
            currentGame: {
                jugadaMia: jugadaMia,
                jugadaPc: jugadaPc
            }
        };
        this.setState(newData);
        this.whoWins({
            jugadaMia,
            jugadaPc
        });
    },
    whoWins (played) {
        const data = this.getState();
        const ganeConPapel = played.jugadaMia == "papel" && played.jugadaPc == "piedra";
        const GaneConPiedra = played.jugadaMia == "piedra" && played.jugadaPc == "tijera";
        const GaneConTijera = played.jugadaMia == "tijera" && played.jugadaPc == "papel";
        const gane = [
            ganeConPapel,
            GaneConPiedra,
            GaneConTijera
        ].includes(true);
        const perdiConPapel = played.jugadaPc == "papel" && played.jugadaMia == "piedra";
        const perdiConPiedra = played.jugadaPc == "piedra" && played.jugadaMia == "tijera";
        const perdiConTijera = played.jugadaPc == "tijera" && played.jugadaMia == "papel";
        const perdi = [
            perdiConPapel,
            perdiConPiedra,
            perdiConTijera
        ].includes(true);
        if (gane == true) {
            data.histoy.push(1);
            this.setState(data);
        } else if (perdi == true) {
            data.histoy.push(0);
            this.setState(data);
        }
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"JacNc":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule') return;
        // Skip duplicate re-exports when they have the same value.
        if (key in dest && dest[key] === source[key]) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"b2iia":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initRouter", ()=>initRouter
);
var _index = require("./pages/welcome/index");
var _index1 = require("./pages/result/loose/index");
var _index2 = require("./pages/result/win/index");
var _index3 = require("./pages/rules/index");
var _index4 = require("./pages/play/index");
var _index5 = require("./pages/result/tie/index");
const BASE_PATH = "/desafio5";
function isGithubPages() {
    return location.host.includes("github.io");
}
const routes = [
    {
        path: /\/inicio/,
        handler: _index.initWelcomePage
    },
    {
        path: /\/rules/,
        handler: _index3.initRules
    },
    {
        path: /\/play/,
        handler: _index4.initPlay
    },
    {
        path: /\/loose/,
        handler: _index1.initLoose
    },
    {
        path: /\/win/,
        handler: _index2.initWin
    },
    {
        path: /\/tie/,
        handler: _index5.initTie
    }, 
];
function initRouter(container) {
    function goTo(path) {
        const completePath = isGithubPages() ? BASE_PATH + path : path;
        history.pushState({
        }, "", completePath);
        handleRoute(completePath);
    }
    function handleRoute(route) {
        console.log("El handleRoute recibió una nueva ruta", route);
        const newRoute = isGithubPages() ? route.replace(BASE_PATH, "") : route;
        console.log(newRoute);
        for (const r of routes)if (r.path.test(newRoute)) {
            const el = r.handler({
                goTo: goTo
            });
            if (container.firstChild) container.firstChild.remove();
            console.log(el);
            container.appendChild(el);
        }
    }
    if (location.host.includes("github.io")) goTo("/inicio");
    else if (location.pathname == "/") goTo("/inicio");
    else handleRoute(location.pathname);
    window.onpopstate = function() {
        handleRoute(location.pathname);
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc","./pages/welcome/index":"bFh5y","./pages/result/loose/index":"3Xl8r","./pages/result/win/index":"fFiSL","./pages/rules/index":"dOTNr","./pages/play/index":"dLRVB","./pages/result/tie/index":"5jtzM"}],"bFh5y":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initWelcomePage", ()=>initWelcomePage
);
function initWelcomePage(params) {
    const style = document.createElement("style");
    style.innerHTML = `\n        *{\n            box-sizing: border-box;\n        }\n        body{\n            margin:0;\n        \n        }\n        .container{\n            display: flex;\n            width: 100%;\n            flex-direction: column;\n            align-items: center;\n            justify-content: baseline;\n            height: 100vh;\n            padding:20px;\n            gap:20px;\n        }\n        @media (min-width: 769px) {\n            .container {\n               \n                height: inherit;\n\n            }\n          }\n\n        .mostrar{\n            display:none;\n        }\n        .buttom-container{\n            width:100%;\n            max-width:404px;\n        }\n        .text-container{\n            font-size: 75px;\n            align-items: center;\n            justify-content: center;\n            padding:40px;\n            max-width:317px;\n            margin-top: 100px;\n            color: #FAFAFA\n\n        }\n        .move-container{\n            display:flex;\n            width:100%;\n            position: fixed;\n            bottom: 10px;\n            height: 150px;\n            justify-content: center;\n            padding:0 5px;\n\n        }\n        @media (min-width: 769px) {\n            .move-container{\n                height: 21.277481vh;\n                width:500px;\n                padding:0;\n                gap:67px;\n\n            }\n        }\n        \n\n\n        @media (min-width: 769px) {\n            .hand{\n                width:100%;\n            }\n        }\n        .desktop{}\n        @media (min-width: 769px) {\n            .desktop{\n                display:flex;\n                width:100%;\n                \n                justify-content: center;\n            }\n        }\n        \n    `;
    const div = document.createElement("div");
    div.innerHTML = `\n        <div class="container">\n            <div class="text-container">\n                 <component-text variant="title">Piedra Papel ó Tijeras</component-text>\n            </div>\n            <div class="buttom-container">\n                <component-button class="jugar">¡Jugar!</component-button>\n            </div>  \n        </div>       \n        <div class="desktop"><div class="move-container">\n                <div class="hand "><move-papel></move-papel></div>\n                <div class="hand "><move-piedra></move-piedra></div>\n                <div class="hand "><move-tijeras></move-tijeras></div>\n        </div>        \n        </div>\n    `;
    const next = div.querySelector(".jugar");
    next.addEventListener("click", ()=>{
        params.goTo("/rules");
    });
    div.appendChild(style);
    return div;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"3Xl8r":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initLoose", ()=>initLoose
);
var _state = require("../../../state");
function counterWins() {
    const currentState = _state.state.getState();
    const cpuContador = currentState.histoy.filter((e)=>{
        let contador = 0;
        if (e == 0) contador++;
        return contador;
    });
    const myContador = currentState.histoy.filter((e)=>{
        let contador = 0;
        if (e == 1) contador++;
        return contador;
    });
    let cpu = cpuContador.length;
    let user = myContador.length;
    return {
        user: user,
        pc: cpu
    };
}
function initLoose(params) {
    const div = document.createElement("div");
    const style = document.createElement("style");
    style.innerHTML = `\n            *{\n                margin:0;\n                \n                box-sizing: border-box;\n            }\n            body {\n                background-color: rgba(255, 0, 0, 0.6);\n                \n              }\n            .container{\n                background-color: white;\n                display:flex;\n                height: 217px;\n                flex-direction: column;\n                gap:10px;\n                margin: 0 58px 0 58px;\n                border:solid 10px black;\n                justify-content: space-evenly;\n\n            }\n            @media (min-width: 769px) {\n                .container{\n                    width:404px;\n                }}\n            .h3-container{\n                display:flex;\n                width: 100%;\n                flex-direction: column;\n                justify-content: end;\n                align-items: flex-end;\n                text-align: end;\n\n\n            }\n            .h2-container{\n                \n            }\n            .h2{\n                text-align: center;\n                font-size: 55px;\n                font-family: 'Odibee Sans', cursive;;\n                color:#000000;\n            }\n\n            .h3{\n                text-align: center;\n                font-size: 45px;\n                font-family: 'Odibee Sans', cursive;;\n                color:#000000;\n            }\n            .buttom-container{\n                padding:20px;\n            }\n            @media (min-width: 769px) {\n                .buttom-container{\n                    \n                    width:424px;\n                }}\n            .center{\n                height: 100vh;\n                display:flex;\n                flex-direction: column;\n                justify-content: center;\n\n            }\n            @media (min-width: 769px) {\n                .desktop{\n                    width:100%;\n                    display:flex;\n                    justify-content:center;\n                }}\n            \n    `;
    div.innerHTML = `\n    <div class="center">\n    <component-meme>perdiste</component-meme>\n    <div class="desktop"><div class="container">\n            <h2 class="h2">Score<h2>\n            <div class="h3-container">\n                <h3 class="h3">Vos: ${counterWins().user}   </h3>\n                <h3 class="h3">Maquína: ${counterWins().pc}   </h3>\n            </div>\n    </div></div>\n    <div class="desktop"><div class="buttom-container"><component-button class="jugar">volver a jugar</component-button></div></div>\n    </div>\n    \n                \n    `;
    div.appendChild(style);
    const next = div.querySelector(".jugar");
    next.addEventListener("click", ()=>{
        params.goTo("/rules");
    });
    return div;
}

},{"../../../state":"28XHA","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"fFiSL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initWin", ()=>initWin
);
var _state = require("../../../state");
function counterWins() {
    const currentState = _state.state.getState();
    const cpuContador = currentState.histoy.filter((e)=>{
        let contador = 0;
        if (e == 0) contador++;
        return contador;
    });
    const myContador = currentState.histoy.filter((e)=>{
        let contador = 0;
        if (e == 1) contador++;
        return contador;
    });
    let cpu = cpuContador.length;
    let user = myContador.length;
    return {
        user: user,
        pc: cpu
    };
}
function initWin(params) {
    const div = document.createElement("div");
    const style = document.createElement("style");
    style.innerHTML = `\n            *{\n                margin:0;\n                \n                box-sizing: border-box;\n            }\n            body {\n                background-color: rgba(0, 255, 0, 0.5);\n                \n              }\n            .container{\n                display:flex;\n                height: 217px;\n                flex-direction: column;\n                gap:10px;\n                margin: 0 58px 0 58px;\n                border:solid 10px black;\n                justify-content: space-evenly;\n                background-color: white;\n                    \n                  \n            }\n            @media (min-width: 769px) {\n                .container{\n                    width:404px;\n                }}\n            .h3-container{\n                display:flex;\n                width: 100%;\n                flex-direction: column;\n                justify-content: end;\n                align-items: flex-end;\n                text-align: end;\n\n            }\n            .h2-container{\n\n            }\n            .h2{\n                text-align: center;\n                font-size: 55px;\n                font-family: 'Odibee Sans', cursive;;\n                color:#000000;\n            }\n\n            .h3{\n                text-align: center;\n                font-size: 45px;\n                font-family: 'Odibee Sans', cursive;;\n                color:#000000;\n            }\n            .buttom-container{\n                padding:20px ;\n                \n            }\n            @media (min-width: 769px) {\n                .buttom-container{\n                    \n                    width:424px;\n                }}\n            .center{\n                height: 100vh;\n                display:flex;\n                flex-direction: column;\n                justify-content: center;\n\n            }\n            @media (min-width: 769px) {\n            .desktop{\n                width:100%;\n                display:flex;\n                justify-content:center;\n            }}\n    `;
    div.innerHTML = `\n    <div class="center">\n    <component-meme variant="win">Ganaste</component-meme>\n    <div class="desktop"><div class="container">\n            <h2 class="h2">Score<h2>\n            <div class="h3-container">\n                <h3 class="h3">Vos: ${counterWins().user}   </h3>\n                <h3 class="h3">Maquína: ${counterWins().pc}   </h3>\n            </div>\n    </div></div>\n    <div class="desktop"><div class="buttom-container"><component-button class="jugar">volver a jugar</component-button></div></div>\n    </div>\n                \n    `;
    div.appendChild(style);
    const next = div.querySelector(".jugar");
    next.addEventListener("click", ()=>{
        params.goTo("/rules");
    });
    return div;
}

},{"../../../state":"28XHA","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"dOTNr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initRules", ()=>initRules
);
function initRules(params) {
    const style = document.createElement("style");
    style.innerHTML = `\n        *{\n            box-sizing: border-box;\n        }\n        body{\n            margin:0;\n        }\n\n        .container{\n            \n            display: flex;\n            width: 100%;\n            flex-direction: column;\n            align-items: center;\n            justify-content: baseline;\n            gap:20px;\n            padding:20px;\n            height: 100vh;\n        }\n        @media (min-width: 769px) {\n            .container{margin-top:10%;}\n        }\n\n        .mostrar{\n            display:none;\n        }\n        .buttom-container{\n            width:100%;\n            max-width:404px;\n            \n        }\n        .text-container{\n            align-items: center;\n            justify-content: center;\n            padding:40px;\n            max-width:317px;\n            color: #FAFAFA\n        }\n        @media (min-width: 769px) {\n            .text-container{\n                padding:0;\n                max-width:317px;\n            }\n        }\n\n        .move-container{\n            display:flex;\n            width:100%;\n            position: fixed;\n            bottom: 10px;\n            height: 150px;\n            justify-content: center;\n        }\n        @media (min-width: 769px) {\n            .move-container{\n                height: 21.277481vh;\n                width:500px;\n                padding:0;\n                gap:67px;\n\n            }\n        }\n\n        @media (min-width: 769px) {\n            .hand{\n                width:100%;\n            }\n        }\n        .desktop{}\n        @media (min-width: 769px) {\n            .desktop{\n                display:flex;\n                width:100%;\n                \n                justify-content: center;\n            }\n        }\n    `;
    const div = document.createElement("div");
    div.innerHTML = `\n        <div class="container">\n            <div class="text-container">\n                 <component-text variant="body">Presioná jugar\n                 y elegí: piedra, papel o tijera antes de que pasen los 3 segundos.\n                </component-text>\n            </div>\n            <div class="buttom-container">\n                <component-button class="jugar">¡Jugar!</component-button>\n            </div>    \n        </div>     \n        <div class="desktop"> <div class="move-container">\n                <div class="hand"><move-papel></move-papel></div>\n                <div class="hand"><move-piedra></move-piedra></div>\n                <div class="hand"><move-tijeras></move-tijeras></div>\n        </div></div>\n    `;
    const next = div.querySelector(".jugar");
    next.addEventListener("click", ()=>{
        params.goTo("/play");
    });
    div.appendChild(style);
    return div;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"dLRVB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initPlay", ()=>initPlay
);
var _state = require("../../state");
function cpuPlayed() {
    const numberRandom = Math.floor(Math.random() * 3 + 1 - 1);
    const chose = [
        "piedra",
        "papel",
        "tijeras"
    ];
    const randomChose = chose[numberRandom];
    return randomChose;
}
function initPlay(params) {
    function pcImg(param) {
        if (param == "piedra") piedraPc.style.display = "inherit";
        else if (param == "papel") papelPc.style.display = "inherit";
        else if (param == "tijeras") tijerasPc.style.display = "inherit";
    }
    const style = document.createElement("style");
    style.innerHTML = `\n            *{\n                box-sizing: border-box;\n            }\n            .container{\n                width:100%;\n                display:flex;\n                justify-content: center;\n            }\n            .counter{\n                color:red;\n                margin-top:20vh;\n                width:15rem;  \n            }\n    \n            .move-cont{\n                position: fixed;\n                bottom: -40px;\n            }\n            .papel{\n                \n            }\n            .piedra{\n                \n                \n            }\n            .tijeras{\n                \n            }\n            .move-container{\n                display:flex;\n                position: fixed;\n                bottom: 10px;\n                height: 150px;\n                width:100%;\n                justify-content: center;\n            }\n            @media (min-width: 769px) {\n                .move-container{\n                    height: 21.277481vh;\n                    width:500px;\n                    padding:0;\n                    gap:67px;\n                }\n            }\n            .mover{\n                margin-top:200px;\n            }  \n\n            .selected{\n                display:flex;\n                width:100%;\n                justify-content: center;\n                height: 200px;\n                position: fixed;\n                bottom: 0;\n            }\n\n            .move-pc{\n                position: fixed;\n                top: 0px;\n                left: 35%;\n                transform: rotate(180deg);\n                display:none;\n            }\n            @media (min-width: 769px) {\n                .move-pc{\n                    left:45%\n                }\n            }\n            \n                \n            \n            .pcAnimation{\n                animation-duration: 3s;\n                animation-name: slidein;\n              }\n              \n              @keyframes slidein {\n                from {\n                    margin-bottom: 100px;\n                    height: 50px;\n                }\n              \n                to {\n                  \n                  margin-top: 34%;\n                  height: 50px;\n                }\n            }\n\n            @media (min-width: 769px) {\n                .pcAnimation{\n                    animation-duration: 3s;\n                    animation-name: slidein;\n                  }\n                  \n                  @keyframes slidein {\n                    from {\n                        margin-bottom: 100px;\n                        height: 50px;\n                    }\n                  \n                    to {\n                      \n                      margin-top: 10%;\n                      height: 50px;\n                    }\n                }\n            }\n\n            .user-move{\n                position: fixed;\n                bottom: 0;\n                left: 35%;\n                height: 350px;\n                \n                display:none;\n                \n            }\n            @media (min-width: 769px) {\n                .user-move{\n                    left: 45%;\n                }\n            }\n            .userAnimation{\n                animation-duration: 3s;\n                animation-name: toTop;\n              }\n              \n              @keyframes toTop {\n                from {\n                    margin-top: 60%;\n                    height: 100px;\n                }\n              \n                to {\n                    margin-bottom: 140px;\n                    height: 50px;\n                  \n                }\n              }\n              @media (min-width: 769px) {\n                .userAnimation{\n                    animation-duration: 3s;\n                    animation-name: toTop;\n                  }\n                  \n                  @keyframes toTop {\n                    from {\n                        margin-top: 60%;\n                        height: 100px;\n                    }\n                  \n                    to {\n                        margin-bottom: 160px;\n                        height: 50px;\n                      \n                    }\n                  }\n              }\n            .desktop{}\n            @media (min-width: 769px) {\n            .desktop{\n                display:flex;\n                width:100%;\n                justify-content: center;\n                 }\n            }\n    `;
    const div = document.createElement("div");
    div.innerHTML = `\n        <div class="container">\n                <div  class="counter"><component-counter></component-counter></div>\n        </div>  \n        \n        \n\n        <div class="desktop"><div class="move-container">\n                <div class="papel"><move-papel></move-papel></div>\n                <div class="piedra"><move-piedra></move-piedra></div>\n                <div class="tijeras" "><move-tijeras></move-tijeras></div>\n        </div></div>\n\n\n                <div class="user-move user-papel userAnimation"><move-papel></move-papel></div>\n                <div class="user-move user-piedra userAnimation"><move-piedra></move-piedra></div>\n                <div class="user-move user-tijeras userAnimation"><move-tijeras></move-tijeras></div>\n                \n                <div  class="move-pc papel-pc pcAnimation"><move-papel></move-papel></div>\n                <div  class="move-pc piedra-pc pcAnimation"><move-piedra></move-piedra></div>\n                <div class="move-pc tijeras-pc pcAnimation"><move-tijeras></move-tijeras></div>\n               \n        \n    `;
    div.appendChild(style);
    const tijerasPc = div.querySelector(".tijeras-pc");
    const piedraPc = div.querySelector(".piedra-pc");
    const papelPc = div.querySelector(".papel-pc");
    const counter = div.querySelector(".counter");
    const tijeras = div.querySelector(".tijeras");
    const piedra = div.querySelector(".piedra");
    const papel = div.querySelector(".papel");
    const userTijeras = div.querySelector(".user-tijeras");
    const userPapel = div.querySelector(".user-papel");
    const userPiedra = div.querySelector(".user-piedra");
    //no se porque solo me muestra la imagen de cuando pierdo, incluso cuando gano
    papel.addEventListener("click", (e)=>{
        counter.style.display = "none";
        piedra.style.display = "none";
        tijeras.style.display = "none";
        e.target.style.display = "none";
        userPapel.style.display = "inherit";
        let cpuChose = cpuPlayed();
        _state.state.addCurrentPlay("papel", cpuChose);
        setTimeout(()=>{
            if (_state.state.getState().currentGame.jugadaPc == "piedra") params.goTo("/result/win");
            else if (_state.state.getState().currentGame.jugadaPc == "tijeras") params.goTo("/result/loose");
            else params.goTo("/result/tie");
        }, 3000);
        pcImg(cpuChose);
    });
    piedra.addEventListener("click", (e)=>{
        papel.style.display = "none";
        tijeras.style.display = "none";
        e.target.style.display = "none";
        counter.style.display = "none";
        userPiedra.style.display = "inherit";
        let cpuChose = cpuPlayed();
        _state.state.addCurrentPlay("piedra", cpuChose);
        setTimeout(()=>{
            if (_state.state.getState().currentGame.jugadaPc == "tijeras") params.goTo("/result/win");
            else if (_state.state.getState().currentGame.jugadaPc == "papel") params.goTo("/result/loose");
            else params.goTo("/result/tie");
        }, 3000);
        pcImg(cpuChose);
    });
    tijeras.addEventListener("click", (e)=>{
        papel.style.display = "none";
        piedra.style.display = "none";
        e.target.style.display = "none";
        counter.style.display = "none";
        userTijeras.style.display = "inherit";
        let cpuChose = cpuPlayed();
        _state.state.addCurrentPlay("tijera", cpuChose);
        setTimeout(()=>{
            if (_state.state.getState().currentGame.jugadaPc == "papel") params.goTo("/result/win");
            else if (_state.state.getState().currentGame.jugadaPc == "piedra") params.goTo("/result/loose");
            else params.goTo("/result/tie");
        }, 3000);
        pcImg(cpuChose);
    });
    setTimeout(()=>{
        if (_state.state.getState().currentGame.jugadaMia == "") params.goTo("/rules");
    }, 4000);
    return div;
}

},{"../../state":"28XHA","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"5jtzM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initTie", ()=>initTie
);
var _state = require("../../../state");
function counterWins() {
    const currentState = _state.state.getState();
    const cpuContador = currentState.histoy.filter((e)=>{
        let contador = 0;
        if (e == 0) contador++;
        return contador;
    });
    const myContador = currentState.histoy.filter((e)=>{
        let contador = 0;
        if (e == 1) contador++;
        return contador;
    });
    let cpu = cpuContador.length;
    let user = myContador.length;
    return {
        user: user,
        pc: cpu
    };
}
function initTie(params) {
    const div = document.createElement("div");
    const style = document.createElement("style");
    style.innerHTML = `\n            *{\n                margin:0;\n                \n                box-sizing: border-box;\n            }\n            body {\n                background-color: rgba(181 ,178 ,178, 0.6);\n                \n              }\n            .container{\n                background-color: white;\n                display:flex;\n                height: 217px;\n                flex-direction: column;\n                gap:10px;\n                margin: 0 58px 0 58px;\n                border:solid 10px black;\n                justify-content: space-evenly;\n\n            }\n            @media (min-width: 769px) {\n                .container{\n                    width:404px;\n                }}\n            .h3-container{\n                display:flex;\n                width: 100%;\n                flex-direction: column;\n                justify-content: end;\n                align-items: flex-end;\n                text-align: end;\n\n\n            }\n            .h2-container{\n                \n            }\n            .h2{\n                text-align: center;\n                font-size: 55px;\n                font-family: 'Odibee Sans', cursive;;\n                color:#000000;\n            }\n\n            .h3{\n                text-align: center;\n                font-size: 45px;\n                font-family: 'Odibee Sans', cursive;;\n                color:#000000;\n            }\n            .buttom-container{\n                padding:20px;\n            }\n            @media (min-width: 769px) {\n                .buttom-container{\n                    \n                    width:424px;\n                }}\n            .center{\n                height: 100vh;\n                display:flex;\n                flex-direction: column;\n                justify-content: center;\n\n            }\n            @media (min-width: 769px) {\n                .desktop{\n                    width:100%;\n                    display:flex;\n                    justify-content:center;\n                }}\n            \n    `;
    div.innerHTML = `\n    <div class="center">\n    <component-text variant="tie">Empate</component-text>\n    <div class="desktop"><div class="container">\n            <h2 class="h2">Score<h2>\n            <div class="h3-container">\n                <h3 class="h3">Vos: ${counterWins().user}   </h3>\n                <h3 class="h3">Maquína: ${counterWins().pc}   </h3>\n            </div>\n    </div></div>\n    <div class="desktop"><div class="buttom-container"><component-button class="jugar">volver a jugar</component-button></div></div>\n    </div>\n    \n                \n    `;
    div.appendChild(style);
    const next = div.querySelector(".jugar");
    next.addEventListener("click", ()=>{
        params.goTo("/rules");
    });
    return div;
}

},{"../../../state":"28XHA","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"8YEyP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initText", ()=>initText
);
function initText() {
    class TextElement extends HTMLElement {
        constructor(){
            super();
        }
        connectedCallback() {
            this.render();
        }
        render() {
            const variant = this.getAttribute("variant") || "body";
            const style = document.createElement("style");
            style.textContent = `\n                *{\n                    box-sizing: border-box;\n                }\n\n                .body{\n                    font-size: 40px;\n                    font-family: 'Odibee Sans', cursive;;\n                    text-align:center;\n                }\n            `;
            const shadow = this.attachShadow({
                mode: "open"
            });
            shadow.appendChild(style);
            const div = document.createElement("div");
            div.className = variant;
            div.textContent = this.textContent;
            shadow.appendChild(div);
        }
    }
    customElements.define("component-text", TextElement);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"kSmEm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initCounter", ()=>initCounter
);
function initCounter() {
    class CounterElement extends HTMLElement {
        constructor(){
            super();
            this.shadow = this.attachShadow({
                mode: 'open'
            });
        }
        connectedCallback() {
            this.render();
        }
        counter() {
            let contador = 4;
            let interval = setInterval(()=>{
                contador--;
                if (contador == 3) {
                    let shadow = this.shadow.querySelector(".counter");
                    shadow.textContent = "3";
                } else if (contador == 2) {
                    let shadow = this.shadow.querySelector(".counter");
                    shadow.textContent = "2";
                } else if (contador == 1) {
                    let shadow = this.shadow.querySelector(".counter");
                    shadow.textContent = "1";
                } else clearInterval(interval);
            }, 1000);
            return interval;
        }
        render() {
            this.counter();
            var style = document.createElement('style');
            style.textContent = `\n            *{\n                box-sizing: border-box;\n            }\n            .circulo {\n                width: 15rem;\n                height: 15rem;\n                border-radius: 50%;\n                background-color: color|transparent|initial|inherit;\n                opacity: 1;\n                border:solid 20px black;\n                display: flex;\n                justify-content: center;\n                align-items: center;\n                text-align: center;\n                margin:0px auto;\n                padding:3%;\n            }\n            .counter{\n                width:100%;\n                font-size:150px;\n                font-family:"Odibee Sans";\n                text-align: center;\n                color:#FAFAFA;\n            }\n            `;
            this.shadow.appendChild(style);
            var div = document.createElement("div");
            div.classList.add("counter");
            div.classList.add("circulo");
            this.shadow.appendChild(div);
        }
    }
    customElements.define('component-counter', CounterElement);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"8Cy7x":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initPiedra", ()=>initPiedra
);
const piedra = require("url:../../images/piedra.png");
function initPiedra() {
    class MovePiedra extends HTMLElement {
        constructor(){
            super();
            this.shadow = this.attachShadow({
                mode: 'open'
            });
        }
        connectedCallback() {
            this.render();
        }
        render() {
            let style = document.createElement('style');
            style.textContent = `\n            *{\n                box-sizing: border-box;\n            }\n\n            .img{\n                width:100%;\n                height: 190px;\n                cursor: pointer;\n            }\n            @media (min-width: 769px) {\n                 .img{\n                width:100%;\n                height: 250px;\n                \n            }\n            .img:hover {\n                height: 300px;\n              }\n            }\n            \n            \n            .container{\n                width:100%;\n                \n            }\n            \n            `;
            this.shadow.appendChild(style);
            let div = document.createElement("div");
            div.classList.add("conteiner");
            div.innerHTML = `\n                <div class="move-container">\n                    <div>\n                        <img src=${piedra} class="img" who="piedra">\n                    </div>\n                \n                \n                </div>\n            \n            `;
            this.shadow.appendChild(div);
        }
    }
    customElements.define('move-piedra', MovePiedra);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc","url:../../images/piedra.png":"jQlP3"}],"jQlP3":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('Z8Pbo') + "piedra.a3b6d156.png";

},{"./helpers/bundle-url":"8YnfL"}],"8YnfL":[function(require,module,exports) {
"use strict";
var bundleURL = {
};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ('' + err.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return '/';
}
function getBaseURL(url) {
    return ('' + url).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/, '$1') + '/';
} // TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ('' + url).match(/(https?|file|ftp):\/\/[^/]+/);
    if (!matches) throw new Error('Origin not found');
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"b4JXk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initPapel", ()=>initPapel
);
const papel = require("url:../../images/papel.png");
function initPapel() {
    class MovePapel extends HTMLElement {
        constructor(){
            super();
            this.shadow = this.attachShadow({
                mode: 'open'
            });
        }
        connectedCallback() {
            this.render();
        }
        render() {
            const who = this.getAttribute("who");
            let style = document.createElement('style');
            style.textContent = `\n            *{\n                box-sizing: border-box;\n            }\n            \n            .img{\n                width:100%;\n                height: 190px;\n                cursor: pointer;\n            }\n            \n            \n            .active{\n                height: 500px;\n                color: aqua;\n                margin:20px;\n            }\n            @media (min-width: 769px) {\n                .img{\n               width:100%;\n               height: 250px;\n                }\n                .img:hover {\n             height: 300px;\n          }\n           }\n            `;
            this.shadow.appendChild(style);
            let div = document.createElement("div");
            div.classList.add("conteiner");
            div.innerHTML = `\n                <div class="move-container">\n                    <div>\n                        <img src=${papel} class="img" >\n                    </div>\n                </div>\n            \n            `;
            div.className = who;
            this.shadow.appendChild(div);
        }
    }
    customElements.define('move-papel', MovePapel);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc","url:../../images/papel.png":"8lgLG"}],"8lgLG":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('Z8Pbo') + "papel.135c8552.png";

},{"./helpers/bundle-url":"8YnfL"}],"3EbMd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initTijeras", ()=>initTijeras
);
const tijeras = require("url:../../images/tijeras.png");
function initTijeras() {
    class MoveTijeras extends HTMLElement {
        constructor(){
            super();
            this.shadow = this.attachShadow({
                mode: 'open'
            });
        }
        connectedCallback() {
            this.render();
        }
        render() {
            let style = document.createElement('style');
            style.textContent = `\n            *{\n                box-sizing: border-box;\n            }\n            \n            .container{\n                width:100%;\n                \n                \n            }\n           \n            \n            .img{\n                width:100%;\n                height: 190px;\n                cursor: pointer;\n            }\n            @media (min-width: 769px) {\n                .img{\n               width:100%;\n               height: 250px;\n               \n           }\n           .img:hover {\n            height: 300px;\n          }\n           }\n            `;
            this.shadow.appendChild(style);
            let div = document.createElement("div");
            div.classList.add("conteiner");
            div.innerHTML = `\n                <div class="move-container">\n                    <div>\n                    <img src=${tijeras} class="img" who="tijeras">\n                    </div>\n                </div>\n            \n            `;
            this.shadow.appendChild(div);
        }
    }
    customElements.define('move-tijeras', MoveTijeras);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc","url:../../images/tijeras.png":"klX5l"}],"klX5l":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('Z8Pbo') + "tijeras.599651f3.png";

},{"./helpers/bundle-url":"8YnfL"}],"3uBrB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initButton", ()=>initButton
);
function initButton() {
    class ButtonElement extends HTMLElement {
        constructor(){
            super();
        }
        connectedCallback() {
            this.render();
        }
        render() {
            const content = this.textContent;
            var style = document.createElement('style');
            style.textContent = `\n            *{\n                box-sizing: border-box;\n            }\n            \n            .button{\n                width:100%;\n                color:#D8FCFC;\n                background-color: #006CFC;\n                border:10px solid #001997;\n                font-size:45px;\n                font-family:"Odibee Sans";\n                border-radius: 10px;\n                cursor: pointer;\n                \n            }\n            .button:hover {\n                background-color: #2f44ad;\n              }\n            `;
            var shadow = this.attachShadow({
                mode: 'open'
            });
            shadow.appendChild(style);
            var div = document.createElement("button");
            div.classList.add("button");
            div.innerText = content;
            shadow.appendChild(div);
        }
    }
    customElements.define('component-button', ButtonElement);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"2mLGE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initStar", ()=>initStar
);
const memeGanar = require("url:../../images/ganaste.jpg");
const memePerdi = require("url:../../images/perdiste.jpg");
function initStar() {
    class Meme extends HTMLElement {
        constructor(){
            super();
        }
        connectedCallback() {
            this.render();
        }
        render() {
            const variant = this.getAttribute("variant");
            var style = document.createElement('style');
            style.textContent = `\n            *{\n                box-sizing: border-box;\n            }\n            .contenedor{\n                position: relative;\n                display: inline-block;\n                width: 100%;\n            }\n            \n            \n            .centrado{\n                position: absolute;\n                top: 50%;\n                left: 50%;\n            }\n            `;
            var content = this.textContent;
            var shadow = this.attachShadow({
                mode: 'open'
            });
            shadow.appendChild(style);
            var memes = "";
            if (variant == "gane") memes = memeGanar;
            else memes = memePerdi;
            var div = document.createElement("div");
            div.innerHTML = `<div class="contenedor">\n            <img src=${memes} />\n        \n            <div class="centrado">${content}</div>\n          </div>`;
            shadow.appendChild(div);
        }
    }
    customElements.define('component-meme', Meme);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc","url:../../images/ganaste.jpg":"iN7V1","url:../../images/perdiste.jpg":"a8Rfq"}],"iN7V1":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('Z8Pbo') + "ganaste.88616579.jpg";

},{"./helpers/bundle-url":"8YnfL"}],"a8Rfq":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('Z8Pbo') + "perdiste.f55230bd.jpg";

},{"./helpers/bundle-url":"8YnfL"}]},["8uBhv","4aleK"], "4aleK", "parcelRequire8840")

//# sourceMappingURL=index.b31310b1.js.map
