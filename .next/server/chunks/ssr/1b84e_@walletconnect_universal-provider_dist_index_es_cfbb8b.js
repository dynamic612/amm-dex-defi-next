module.exports = {

"[project]/node_modules/@web3modal/wagmi/node_modules/@walletconnect/universal-provider/dist/index.es.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "UniversalProvider": ()=>hv,
    "default": ()=>lr
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$sign$2d$client$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@web3modal/wagmi/node_modules/@walletconnect/sign-client/dist/index.es.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@web3modal/wagmi/node_modules/@walletconnect/utils/dist/index.es.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$logger$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@walletconnect/logger/dist/index.es.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pino$2f$pino$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__pino$3e$__ = __turbopack_import__("[project]/node_modules/pino/pino.js [app-ssr] (ecmascript) <export default as pino>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$logger$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/@walletconnect/logger/dist/index.es.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$http$2d$connection$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@walletconnect/jsonrpc-http-connection/dist/index.es.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$provider$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@walletconnect/jsonrpc-provider/dist/index.es.js [app-ssr] (ecmascript)");
var __TURBOPACK__commonjs__external__events__ = __turbopack_external_require__("events", true);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@walletconnect/jsonrpc-utils/dist/esm/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@walletconnect/jsonrpc-utils/dist/esm/format.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
;
;
;
const xa = "error", Mg = "wss://relay.walletconnect.com", qg = "wc", Bg = "universal_provider", Ea = `${qg}@2:${Bg}:`, Gg = "https://rpc.walletconnect.com/v1/", Vn = {
    DEFAULT_CHAIN_CHANGED: "default_chain_changed"
};
var ge = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Ui = {
    exports: {}
}; /**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */ 
(function(A, u) {
    (function() {
        var i, p = "4.17.21", w = 200, b = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", D = "Expected a function", En = "Invalid `variable` option passed into `_.template`", zt = "__lodash_hash_undefined__", pr = 500, It = "__lodash_placeholder__", Ln = 1, Fn = 2, xt = 4, Et = 1, ve = 2, vn = 1, ct = 2, Bi = 4, Dn = 8, yt = 16, Nn = 32, St = 64, Mn = 128, Kt = 256, dr = 512, Na = 30, Ha = "...", $a = 800, Ua = 16, Gi = 1, Wa = 2, Fa = 3, ht = 1 / 0, kn = 9007199254740991, Ma = 17976931348623157e292, _e = 0 / 0, Hn = 4294967295, qa = Hn - 1, Ba = Hn >>> 1, Ga = [
            [
                "ary",
                Mn
            ],
            [
                "bind",
                vn
            ],
            [
                "bindKey",
                ct
            ],
            [
                "curry",
                Dn
            ],
            [
                "curryRight",
                yt
            ],
            [
                "flip",
                dr
            ],
            [
                "partial",
                Nn
            ],
            [
                "partialRight",
                St
            ],
            [
                "rearg",
                Kt
            ]
        ], Ot = "[object Arguments]", me = "[object Array]", za = "[object AsyncFunction]", Yt = "[object Boolean]", Zt = "[object Date]", Ka = "[object DOMException]", we = "[object Error]", Pe = "[object Function]", zi = "[object GeneratorFunction]", yn = "[object Map]", Jt = "[object Number]", Ya = "[object Null]", qn = "[object Object]", Ki = "[object Promise]", Za = "[object Proxy]", Xt = "[object RegExp]", Sn = "[object Set]", Qt = "[object String]", Ae = "[object Symbol]", Ja = "[object Undefined]", Vt = "[object WeakMap]", Xa = "[object WeakSet]", kt = "[object ArrayBuffer]", Rt = "[object DataView]", gr = "[object Float32Array]", vr = "[object Float64Array]", _r = "[object Int8Array]", mr = "[object Int16Array]", wr = "[object Int32Array]", Pr = "[object Uint8Array]", Ar = "[object Uint8ClampedArray]", Cr = "[object Uint16Array]", Ir = "[object Uint32Array]", Qa = /\b__p \+= '';/g, Va = /\b(__p \+=) '' \+/g, ka = /(__e\(.*?\)|\b__t\)) \+\n'';/g, Yi = /&(?:amp|lt|gt|quot|#39);/g, Zi = /[&<>"']/g, ja = RegExp(Yi.source), no = RegExp(Zi.source), to = /<%-([\s\S]+?)%>/g, eo = /<%([\s\S]+?)%>/g, Ji = /<%=([\s\S]+?)%>/g, ro = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, io = /^\w*$/, so = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, xr = /[\\^$.*+?()[\]{}|]/g, uo = RegExp(xr.source), Er = /^\s+/, ao = /\s/, oo = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, fo = /\{\n\/\* \[wrapped with (.+)\] \*/, co = /,? & /, ho = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, lo = /[()=,{}\[\]\/\s]/, po = /\\(\\)?/g, go = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, Xi = /\w*$/, vo = /^[-+]0x[0-9a-f]+$/i, _o = /^0b[01]+$/i, mo = /^\[object .+?Constructor\]$/, wo = /^0o[0-7]+$/i, Po = /^(?:0|[1-9]\d*)$/, Ao = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, Ce = /($^)/, Co = /['\n\r\u2028\u2029\\]/g, Ie = "\\ud800-\\udfff", Io = "\\u0300-\\u036f", xo = "\\ufe20-\\ufe2f", Eo = "\\u20d0-\\u20ff", Qi = Io + xo + Eo, Vi = "\\u2700-\\u27bf", ki = "a-z\\xdf-\\xf6\\xf8-\\xff", yo = "\\xac\\xb1\\xd7\\xf7", So = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", Oo = "\\u2000-\\u206f", Ro = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", ji = "A-Z\\xc0-\\xd6\\xd8-\\xde", ns = "\\ufe0e\\ufe0f", ts = yo + So + Oo + Ro, yr = "['\u2019]", bo = "[" + Ie + "]", es = "[" + ts + "]", xe = "[" + Qi + "]", rs = "\\d+", To = "[" + Vi + "]", is = "[" + ki + "]", ss = "[^" + Ie + ts + rs + Vi + ki + ji + "]", Sr = "\\ud83c[\\udffb-\\udfff]", Lo = "(?:" + xe + "|" + Sr + ")", us = "[^" + Ie + "]", Or = "(?:\\ud83c[\\udde6-\\uddff]){2}", Rr = "[\\ud800-\\udbff][\\udc00-\\udfff]", bt = "[" + ji + "]", as = "\\u200d", os = "(?:" + is + "|" + ss + ")", Do = "(?:" + bt + "|" + ss + ")", fs = "(?:" + yr + "(?:d|ll|m|re|s|t|ve))?", cs = "(?:" + yr + "(?:D|LL|M|RE|S|T|VE))?", hs = Lo + "?", ls = "[" + ns + "]?", No = "(?:" + as + "(?:" + [
            us,
            Or,
            Rr
        ].join("|") + ")" + ls + hs + ")*", Ho = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", $o = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", ps = ls + hs + No, Uo = "(?:" + [
            To,
            Or,
            Rr
        ].join("|") + ")" + ps, Wo = "(?:" + [
            us + xe + "?",
            xe,
            Or,
            Rr,
            bo
        ].join("|") + ")", Fo = RegExp(yr, "g"), Mo = RegExp(xe, "g"), br = RegExp(Sr + "(?=" + Sr + ")|" + Wo + ps, "g"), qo = RegExp([
            bt + "?" + is + "+" + fs + "(?=" + [
                es,
                bt,
                "$"
            ].join("|") + ")",
            Do + "+" + cs + "(?=" + [
                es,
                bt + os,
                "$"
            ].join("|") + ")",
            bt + "?" + os + "+" + fs,
            bt + "+" + cs,
            $o,
            Ho,
            rs,
            Uo
        ].join("|"), "g"), Bo = RegExp("[" + as + Ie + Qi + ns + "]"), Go = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, zo = [
            "Array",
            "Buffer",
            "DataView",
            "Date",
            "Error",
            "Float32Array",
            "Float64Array",
            "Function",
            "Int8Array",
            "Int16Array",
            "Int32Array",
            "Map",
            "Math",
            "Object",
            "Promise",
            "RegExp",
            "Set",
            "String",
            "Symbol",
            "TypeError",
            "Uint8Array",
            "Uint8ClampedArray",
            "Uint16Array",
            "Uint32Array",
            "WeakMap",
            "_",
            "clearTimeout",
            "isFinite",
            "parseInt",
            "setTimeout"
        ], Ko = -1, B = {};
        B[gr] = B[vr] = B[_r] = B[mr] = B[wr] = B[Pr] = B[Ar] = B[Cr] = B[Ir] = !0, B[Ot] = B[me] = B[kt] = B[Yt] = B[Rt] = B[Zt] = B[we] = B[Pe] = B[yn] = B[Jt] = B[qn] = B[Xt] = B[Sn] = B[Qt] = B[Vt] = !1;
        var q = {};
        q[Ot] = q[me] = q[kt] = q[Rt] = q[Yt] = q[Zt] = q[gr] = q[vr] = q[_r] = q[mr] = q[wr] = q[yn] = q[Jt] = q[qn] = q[Xt] = q[Sn] = q[Qt] = q[Ae] = q[Pr] = q[Ar] = q[Cr] = q[Ir] = !0, q[we] = q[Pe] = q[Vt] = !1;
        var Yo = {
            À: "A",
            Á: "A",
            Â: "A",
            Ã: "A",
            Ä: "A",
            Å: "A",
            à: "a",
            á: "a",
            â: "a",
            ã: "a",
            ä: "a",
            å: "a",
            Ç: "C",
            ç: "c",
            Ð: "D",
            ð: "d",
            È: "E",
            É: "E",
            Ê: "E",
            Ë: "E",
            è: "e",
            é: "e",
            ê: "e",
            ë: "e",
            Ì: "I",
            Í: "I",
            Î: "I",
            Ï: "I",
            ì: "i",
            í: "i",
            î: "i",
            ï: "i",
            Ñ: "N",
            ñ: "n",
            Ò: "O",
            Ó: "O",
            Ô: "O",
            Õ: "O",
            Ö: "O",
            Ø: "O",
            ò: "o",
            ó: "o",
            ô: "o",
            õ: "o",
            ö: "o",
            ø: "o",
            Ù: "U",
            Ú: "U",
            Û: "U",
            Ü: "U",
            ù: "u",
            ú: "u",
            û: "u",
            ü: "u",
            Ý: "Y",
            ý: "y",
            ÿ: "y",
            Æ: "Ae",
            æ: "ae",
            Þ: "Th",
            þ: "th",
            ß: "ss",
            Ā: "A",
            Ă: "A",
            Ą: "A",
            ā: "a",
            ă: "a",
            ą: "a",
            Ć: "C",
            Ĉ: "C",
            Ċ: "C",
            Č: "C",
            ć: "c",
            ĉ: "c",
            ċ: "c",
            č: "c",
            Ď: "D",
            Đ: "D",
            ď: "d",
            đ: "d",
            Ē: "E",
            Ĕ: "E",
            Ė: "E",
            Ę: "E",
            Ě: "E",
            ē: "e",
            ĕ: "e",
            ė: "e",
            ę: "e",
            ě: "e",
            Ĝ: "G",
            Ğ: "G",
            Ġ: "G",
            Ģ: "G",
            ĝ: "g",
            ğ: "g",
            ġ: "g",
            ģ: "g",
            Ĥ: "H",
            Ħ: "H",
            ĥ: "h",
            ħ: "h",
            Ĩ: "I",
            Ī: "I",
            Ĭ: "I",
            Į: "I",
            İ: "I",
            ĩ: "i",
            ī: "i",
            ĭ: "i",
            į: "i",
            ı: "i",
            Ĵ: "J",
            ĵ: "j",
            Ķ: "K",
            ķ: "k",
            ĸ: "k",
            Ĺ: "L",
            Ļ: "L",
            Ľ: "L",
            Ŀ: "L",
            Ł: "L",
            ĺ: "l",
            ļ: "l",
            ľ: "l",
            ŀ: "l",
            ł: "l",
            Ń: "N",
            Ņ: "N",
            Ň: "N",
            Ŋ: "N",
            ń: "n",
            ņ: "n",
            ň: "n",
            ŋ: "n",
            Ō: "O",
            Ŏ: "O",
            Ő: "O",
            ō: "o",
            ŏ: "o",
            ő: "o",
            Ŕ: "R",
            Ŗ: "R",
            Ř: "R",
            ŕ: "r",
            ŗ: "r",
            ř: "r",
            Ś: "S",
            Ŝ: "S",
            Ş: "S",
            Š: "S",
            ś: "s",
            ŝ: "s",
            ş: "s",
            š: "s",
            Ţ: "T",
            Ť: "T",
            Ŧ: "T",
            ţ: "t",
            ť: "t",
            ŧ: "t",
            Ũ: "U",
            Ū: "U",
            Ŭ: "U",
            Ů: "U",
            Ű: "U",
            Ų: "U",
            ũ: "u",
            ū: "u",
            ŭ: "u",
            ů: "u",
            ű: "u",
            ų: "u",
            Ŵ: "W",
            ŵ: "w",
            Ŷ: "Y",
            ŷ: "y",
            Ÿ: "Y",
            Ź: "Z",
            Ż: "Z",
            Ž: "Z",
            ź: "z",
            ż: "z",
            ž: "z",
            Ĳ: "IJ",
            ĳ: "ij",
            Œ: "Oe",
            œ: "oe",
            ŉ: "'n",
            ſ: "s"
        }, Zo = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;"
        }, Jo = {
            "&amp;": "&",
            "&lt;": "<",
            "&gt;": ">",
            "&quot;": '"',
            "&#39;": "'"
        }, Xo = {
            "\\": "\\",
            "'": "'",
            "\n": "n",
            "\r": "r",
            "\u2028": "u2028",
            "\u2029": "u2029"
        }, Qo = parseFloat, Vo = parseInt, ds = typeof ge == "object" && ge && ge.Object === Object && ge, ko = typeof self == "object" && self && self.Object === Object && self, k = ds || ko || Function("return this")(), Tr = u && !u.nodeType && u, lt = Tr && !0 && A && !A.nodeType && A, gs = lt && lt.exports === Tr, Lr = gs && ds.process, _n = function() {
            try {
                var h = lt && lt.require && lt.require("util").types;
                return h || Lr && Lr.binding && Lr.binding("util");
            } catch  {}
        }(), vs = _n && _n.isArrayBuffer, _s = _n && _n.isDate, ms = _n && _n.isMap, ws = _n && _n.isRegExp, Ps = _n && _n.isSet, As = _n && _n.isTypedArray;
        function cn(h, g, d) {
            switch(d.length){
                case 0:
                    return h.call(g);
                case 1:
                    return h.call(g, d[0]);
                case 2:
                    return h.call(g, d[0], d[1]);
                case 3:
                    return h.call(g, d[0], d[1], d[2]);
            }
            return h.apply(g, d);
        }
        function jo(h, g, d, C) {
            for(var S = -1, U = h == null ? 0 : h.length; ++S < U;){
                var X = h[S];
                g(C, X, d(X), h);
            }
            return C;
        }
        function mn(h, g) {
            for(var d = -1, C = h == null ? 0 : h.length; ++d < C && g(h[d], d, h) !== !1;);
            return h;
        }
        function nf(h, g) {
            for(var d = h == null ? 0 : h.length; d-- && g(h[d], d, h) !== !1;);
            return h;
        }
        function Cs(h, g) {
            for(var d = -1, C = h == null ? 0 : h.length; ++d < C;)if (!g(h[d], d, h)) return !1;
            return !0;
        }
        function jn(h, g) {
            for(var d = -1, C = h == null ? 0 : h.length, S = 0, U = []; ++d < C;){
                var X = h[d];
                g(X, d, h) && (U[S++] = X);
            }
            return U;
        }
        function Ee(h, g) {
            var d = h == null ? 0 : h.length;
            return !!d && Tt(h, g, 0) > -1;
        }
        function Dr(h, g, d) {
            for(var C = -1, S = h == null ? 0 : h.length; ++C < S;)if (d(g, h[C])) return !0;
            return !1;
        }
        function G(h, g) {
            for(var d = -1, C = h == null ? 0 : h.length, S = Array(C); ++d < C;)S[d] = g(h[d], d, h);
            return S;
        }
        function nt(h, g) {
            for(var d = -1, C = g.length, S = h.length; ++d < C;)h[S + d] = g[d];
            return h;
        }
        function Nr(h, g, d, C) {
            var S = -1, U = h == null ? 0 : h.length;
            for(C && U && (d = h[++S]); ++S < U;)d = g(d, h[S], S, h);
            return d;
        }
        function tf(h, g, d, C) {
            var S = h == null ? 0 : h.length;
            for(C && S && (d = h[--S]); S--;)d = g(d, h[S], S, h);
            return d;
        }
        function Hr(h, g) {
            for(var d = -1, C = h == null ? 0 : h.length; ++d < C;)if (g(h[d], d, h)) return !0;
            return !1;
        }
        var ef = $r("length");
        function rf(h) {
            return h.split("");
        }
        function sf(h) {
            return h.match(ho) || [];
        }
        function Is(h, g, d) {
            var C;
            return d(h, function(S, U, X) {
                if (g(S, U, X)) return C = U, !1;
            }), C;
        }
        function ye(h, g, d, C) {
            for(var S = h.length, U = d + (C ? 1 : -1); C ? U-- : ++U < S;)if (g(h[U], U, h)) return U;
            return -1;
        }
        function Tt(h, g, d) {
            return g === g ? _f(h, g, d) : ye(h, xs, d);
        }
        function uf(h, g, d, C) {
            for(var S = d - 1, U = h.length; ++S < U;)if (C(h[S], g)) return S;
            return -1;
        }
        function xs(h) {
            return h !== h;
        }
        function Es(h, g) {
            var d = h == null ? 0 : h.length;
            return d ? Wr(h, g) / d : _e;
        }
        function $r(h) {
            return function(g) {
                return g == null ? i : g[h];
            };
        }
        function Ur(h) {
            return function(g) {
                return h == null ? i : h[g];
            };
        }
        function ys(h, g, d, C, S) {
            return S(h, function(U, X, M) {
                d = C ? (C = !1, U) : g(d, U, X, M);
            }), d;
        }
        function af(h, g) {
            var d = h.length;
            for(h.sort(g); d--;)h[d] = h[d].value;
            return h;
        }
        function Wr(h, g) {
            for(var d, C = -1, S = h.length; ++C < S;){
                var U = g(h[C]);
                U !== i && (d = d === i ? U : d + U);
            }
            return d;
        }
        function Fr(h, g) {
            for(var d = -1, C = Array(h); ++d < h;)C[d] = g(d);
            return C;
        }
        function of(h, g) {
            return G(g, function(d) {
                return [
                    d,
                    h[d]
                ];
            });
        }
        function Ss(h) {
            return h && h.slice(0, Ts(h) + 1).replace(Er, "");
        }
        function hn(h) {
            return function(g) {
                return h(g);
            };
        }
        function Mr(h, g) {
            return G(g, function(d) {
                return h[d];
            });
        }
        function jt(h, g) {
            return h.has(g);
        }
        function Os(h, g) {
            for(var d = -1, C = h.length; ++d < C && Tt(g, h[d], 0) > -1;);
            return d;
        }
        function Rs(h, g) {
            for(var d = h.length; d-- && Tt(g, h[d], 0) > -1;);
            return d;
        }
        function ff(h, g) {
            for(var d = h.length, C = 0; d--;)h[d] === g && ++C;
            return C;
        }
        var cf = Ur(Yo), hf = Ur(Zo);
        function lf(h) {
            return "\\" + Xo[h];
        }
        function pf(h, g) {
            return h == null ? i : h[g];
        }
        function Lt(h) {
            return Bo.test(h);
        }
        function df(h) {
            return Go.test(h);
        }
        function gf(h) {
            for(var g, d = []; !(g = h.next()).done;)d.push(g.value);
            return d;
        }
        function qr(h) {
            var g = -1, d = Array(h.size);
            return h.forEach(function(C, S) {
                d[++g] = [
                    S,
                    C
                ];
            }), d;
        }
        function bs(h, g) {
            return function(d) {
                return h(g(d));
            };
        }
        function tt(h, g) {
            for(var d = -1, C = h.length, S = 0, U = []; ++d < C;){
                var X = h[d];
                (X === g || X === It) && (h[d] = It, U[S++] = d);
            }
            return U;
        }
        function Se(h) {
            var g = -1, d = Array(h.size);
            return h.forEach(function(C) {
                d[++g] = C;
            }), d;
        }
        function vf(h) {
            var g = -1, d = Array(h.size);
            return h.forEach(function(C) {
                d[++g] = [
                    C,
                    C
                ];
            }), d;
        }
        function _f(h, g, d) {
            for(var C = d - 1, S = h.length; ++C < S;)if (h[C] === g) return C;
            return -1;
        }
        function mf(h, g, d) {
            for(var C = d + 1; C--;)if (h[C] === g) return C;
            return C;
        }
        function Dt(h) {
            return Lt(h) ? Pf(h) : ef(h);
        }
        function On(h) {
            return Lt(h) ? Af(h) : rf(h);
        }
        function Ts(h) {
            for(var g = h.length; g-- && ao.test(h.charAt(g)););
            return g;
        }
        var wf = Ur(Jo);
        function Pf(h) {
            for(var g = br.lastIndex = 0; br.test(h);)++g;
            return g;
        }
        function Af(h) {
            return h.match(br) || [];
        }
        function Cf(h) {
            return h.match(qo) || [];
        }
        var If = function h(g) {
            g = g == null ? k : Nt.defaults(k.Object(), g, Nt.pick(k, zo));
            var d = g.Array, C = g.Date, S = g.Error, U = g.Function, X = g.Math, M = g.Object, Br = g.RegExp, xf = g.String, wn = g.TypeError, Oe = d.prototype, Ef = U.prototype, Ht = M.prototype, Re = g["__core-js_shared__"], be = Ef.toString, F = Ht.hasOwnProperty, yf = 0, Ls = function() {
                var n = /[^.]+$/.exec(Re && Re.keys && Re.keys.IE_PROTO || "");
                return n ? "Symbol(src)_1." + n : "";
            }(), Te = Ht.toString, Sf = be.call(M), Of = k._, Rf = Br("^" + be.call(F).replace(xr, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"), Le = gs ? g.Buffer : i, et = g.Symbol, De = g.Uint8Array, Ds = Le ? Le.allocUnsafe : i, Ne = bs(M.getPrototypeOf, M), Ns = M.create, Hs = Ht.propertyIsEnumerable, He = Oe.splice, $s = et ? et.isConcatSpreadable : i, ne = et ? et.iterator : i, pt = et ? et.toStringTag : i, $e = function() {
                try {
                    var n = mt(M, "defineProperty");
                    return n({}, "", {}), n;
                } catch  {}
            }(), bf = g.clearTimeout !== k.clearTimeout && g.clearTimeout, Tf = C && C.now !== k.Date.now && C.now, Lf = g.setTimeout !== k.setTimeout && g.setTimeout, Ue = X.ceil, We = X.floor, Gr = M.getOwnPropertySymbols, Df = Le ? Le.isBuffer : i, Us = g.isFinite, Nf = Oe.join, Hf = bs(M.keys, M), Q = X.max, nn = X.min, $f = C.now, Uf = g.parseInt, Ws = X.random, Wf = Oe.reverse, zr = mt(g, "DataView"), te = mt(g, "Map"), Kr = mt(g, "Promise"), $t = mt(g, "Set"), ee = mt(g, "WeakMap"), re = mt(M, "create"), Fe = ee && new ee, Ut = {}, Ff = wt(zr), Mf = wt(te), qf = wt(Kr), Bf = wt($t), Gf = wt(ee), Me = et ? et.prototype : i, ie = Me ? Me.valueOf : i, Fs = Me ? Me.toString : i;
            function a(n) {
                if (Y(n) && !O(n) && !(n instanceof H)) {
                    if (n instanceof Pn) return n;
                    if (F.call(n, "__wrapped__")) return Mu(n);
                }
                return new Pn(n);
            }
            var Wt = function() {
                function n() {}
                return function(t) {
                    if (!K(t)) return {};
                    if (Ns) return Ns(t);
                    n.prototype = t;
                    var e = new n;
                    return n.prototype = i, e;
                };
            }();
            function qe() {}
            function Pn(n, t) {
                this.__wrapped__ = n, this.__actions__ = [], this.__chain__ = !!t, this.__index__ = 0, this.__values__ = i;
            }
            a.templateSettings = {
                escape: to,
                evaluate: eo,
                interpolate: Ji,
                variable: "",
                imports: {
                    _: a
                }
            }, a.prototype = qe.prototype, a.prototype.constructor = a, Pn.prototype = Wt(qe.prototype), Pn.prototype.constructor = Pn;
            function H(n) {
                this.__wrapped__ = n, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = Hn, this.__views__ = [];
            }
            function zf() {
                var n = new H(this.__wrapped__);
                return n.__actions__ = un(this.__actions__), n.__dir__ = this.__dir__, n.__filtered__ = this.__filtered__, n.__iteratees__ = un(this.__iteratees__), n.__takeCount__ = this.__takeCount__, n.__views__ = un(this.__views__), n;
            }
            function Kf() {
                if (this.__filtered__) {
                    var n = new H(this);
                    n.__dir__ = -1, n.__filtered__ = !0;
                } else n = this.clone(), n.__dir__ *= -1;
                return n;
            }
            function Yf() {
                var n = this.__wrapped__.value(), t = this.__dir__, e = O(n), r = t < 0, s = e ? n.length : 0, o = ih(0, s, this.__views__), f = o.start, c = o.end, l = c - f, v = r ? c : f - 1, _ = this.__iteratees__, m = _.length, P = 0, I = nn(l, this.__takeCount__);
                if (!e || !r && s == l && I == l) return fu(n, this.__actions__);
                var E = [];
                n: for(; l-- && P < I;){
                    v += t;
                    for(var T = -1, y = n[v]; ++T < m;){
                        var N = _[T], $ = N.iteratee, dn = N.type, sn = $(y);
                        if (dn == Wa) y = sn;
                        else if (!sn) {
                            if (dn == Gi) continue n;
                            break n;
                        }
                    }
                    E[P++] = y;
                }
                return E;
            }
            H.prototype = Wt(qe.prototype), H.prototype.constructor = H;
            function dt(n) {
                var t = -1, e = n == null ? 0 : n.length;
                for(this.clear(); ++t < e;){
                    var r = n[t];
                    this.set(r[0], r[1]);
                }
            }
            function Zf() {
                this.__data__ = re ? re(null) : {}, this.size = 0;
            }
            function Jf(n) {
                var t = this.has(n) && delete this.__data__[n];
                return this.size -= t ? 1 : 0, t;
            }
            function Xf(n) {
                var t = this.__data__;
                if (re) {
                    var e = t[n];
                    return e === zt ? i : e;
                }
                return F.call(t, n) ? t[n] : i;
            }
            function Qf(n) {
                var t = this.__data__;
                return re ? t[n] !== i : F.call(t, n);
            }
            function Vf(n, t) {
                var e = this.__data__;
                return this.size += this.has(n) ? 0 : 1, e[n] = re && t === i ? zt : t, this;
            }
            dt.prototype.clear = Zf, dt.prototype.delete = Jf, dt.prototype.get = Xf, dt.prototype.has = Qf, dt.prototype.set = Vf;
            function Bn(n) {
                var t = -1, e = n == null ? 0 : n.length;
                for(this.clear(); ++t < e;){
                    var r = n[t];
                    this.set(r[0], r[1]);
                }
            }
            function kf() {
                this.__data__ = [], this.size = 0;
            }
            function jf(n) {
                var t = this.__data__, e = Be(t, n);
                if (e < 0) return !1;
                var r = t.length - 1;
                return e == r ? t.pop() : He.call(t, e, 1), --this.size, !0;
            }
            function nc(n) {
                var t = this.__data__, e = Be(t, n);
                return e < 0 ? i : t[e][1];
            }
            function tc(n) {
                return Be(this.__data__, n) > -1;
            }
            function ec(n, t) {
                var e = this.__data__, r = Be(e, n);
                return r < 0 ? (++this.size, e.push([
                    n,
                    t
                ])) : e[r][1] = t, this;
            }
            Bn.prototype.clear = kf, Bn.prototype.delete = jf, Bn.prototype.get = nc, Bn.prototype.has = tc, Bn.prototype.set = ec;
            function Gn(n) {
                var t = -1, e = n == null ? 0 : n.length;
                for(this.clear(); ++t < e;){
                    var r = n[t];
                    this.set(r[0], r[1]);
                }
            }
            function rc() {
                this.size = 0, this.__data__ = {
                    hash: new dt,
                    map: new (te || Bn),
                    string: new dt
                };
            }
            function ic(n) {
                var t = nr(this, n).delete(n);
                return this.size -= t ? 1 : 0, t;
            }
            function sc(n) {
                return nr(this, n).get(n);
            }
            function uc(n) {
                return nr(this, n).has(n);
            }
            function ac(n, t) {
                var e = nr(this, n), r = e.size;
                return e.set(n, t), this.size += e.size == r ? 0 : 1, this;
            }
            Gn.prototype.clear = rc, Gn.prototype.delete = ic, Gn.prototype.get = sc, Gn.prototype.has = uc, Gn.prototype.set = ac;
            function gt(n) {
                var t = -1, e = n == null ? 0 : n.length;
                for(this.__data__ = new Gn; ++t < e;)this.add(n[t]);
            }
            function oc(n) {
                return this.__data__.set(n, zt), this;
            }
            function fc(n) {
                return this.__data__.has(n);
            }
            gt.prototype.add = gt.prototype.push = oc, gt.prototype.has = fc;
            function Rn(n) {
                var t = this.__data__ = new Bn(n);
                this.size = t.size;
            }
            function cc() {
                this.__data__ = new Bn, this.size = 0;
            }
            function hc(n) {
                var t = this.__data__, e = t.delete(n);
                return this.size = t.size, e;
            }
            function lc(n) {
                return this.__data__.get(n);
            }
            function pc(n) {
                return this.__data__.has(n);
            }
            function dc(n, t) {
                var e = this.__data__;
                if (e instanceof Bn) {
                    var r = e.__data__;
                    if (!te || r.length < w - 1) return r.push([
                        n,
                        t
                    ]), this.size = ++e.size, this;
                    e = this.__data__ = new Gn(r);
                }
                return e.set(n, t), this.size = e.size, this;
            }
            Rn.prototype.clear = cc, Rn.prototype.delete = hc, Rn.prototype.get = lc, Rn.prototype.has = pc, Rn.prototype.set = dc;
            function Ms(n, t) {
                var e = O(n), r = !e && Pt(n), s = !e && !r && at(n), o = !e && !r && !s && Bt(n), f = e || r || s || o, c = f ? Fr(n.length, xf) : [], l = c.length;
                for(var v in n)(t || F.call(n, v)) && !(f && (v == "length" || s && (v == "offset" || v == "parent") || o && (v == "buffer" || v == "byteLength" || v == "byteOffset") || Zn(v, l))) && c.push(v);
                return c;
            }
            function qs(n) {
                var t = n.length;
                return t ? n[ei(0, t - 1)] : i;
            }
            function gc(n, t) {
                return tr(un(n), vt(t, 0, n.length));
            }
            function vc(n) {
                return tr(un(n));
            }
            function Yr(n, t, e) {
                (e !== i && !bn(n[t], e) || e === i && !(t in n)) && zn(n, t, e);
            }
            function se(n, t, e) {
                var r = n[t];
                (!(F.call(n, t) && bn(r, e)) || e === i && !(t in n)) && zn(n, t, e);
            }
            function Be(n, t) {
                for(var e = n.length; e--;)if (bn(n[e][0], t)) return e;
                return -1;
            }
            function _c(n, t, e, r) {
                return rt(n, function(s, o, f) {
                    t(r, s, e(s), f);
                }), r;
            }
            function Bs(n, t) {
                return n && Un(t, V(t), n);
            }
            function mc(n, t) {
                return n && Un(t, on(t), n);
            }
            function zn(n, t, e) {
                t == "__proto__" && $e ? $e(n, t, {
                    configurable: !0,
                    enumerable: !0,
                    value: e,
                    writable: !0
                }) : n[t] = e;
            }
            function Zr(n, t) {
                for(var e = -1, r = t.length, s = d(r), o = n == null; ++e < r;)s[e] = o ? i : Si(n, t[e]);
                return s;
            }
            function vt(n, t, e) {
                return n === n && (e !== i && (n = n <= e ? n : e), t !== i && (n = n >= t ? n : t)), n;
            }
            function An(n, t, e, r, s, o) {
                var f, c = t & Ln, l = t & Fn, v = t & xt;
                if (e && (f = s ? e(n, r, s, o) : e(n)), f !== i) return f;
                if (!K(n)) return n;
                var _ = O(n);
                if (_) {
                    if (f = uh(n), !c) return un(n, f);
                } else {
                    var m = tn(n), P = m == Pe || m == zi;
                    if (at(n)) return lu(n, c);
                    if (m == qn || m == Ot || P && !s) {
                        if (f = l || P ? {} : Tu(n), !c) return l ? Xc(n, mc(f, n)) : Jc(n, Bs(f, n));
                    } else {
                        if (!q[m]) return s ? n : {};
                        f = ah(n, m, c);
                    }
                }
                o || (o = new Rn);
                var I = o.get(n);
                if (I) return I;
                o.set(n, f), ua(n) ? n.forEach(function(y) {
                    f.add(An(y, t, e, y, n, o));
                }) : ia(n) && n.forEach(function(y, N) {
                    f.set(N, An(y, t, e, N, n, o));
                });
                var E = v ? l ? pi : li : l ? on : V, T = _ ? i : E(n);
                return mn(T || n, function(y, N) {
                    T && (N = y, y = n[N]), se(f, N, An(y, t, e, N, n, o));
                }), f;
            }
            function wc(n) {
                var t = V(n);
                return function(e) {
                    return Gs(e, n, t);
                };
            }
            function Gs(n, t, e) {
                var r = e.length;
                if (n == null) return !r;
                for(n = M(n); r--;){
                    var s = e[r], o = t[s], f = n[s];
                    if (f === i && !(s in n) || !o(f)) return !1;
                }
                return !0;
            }
            function zs(n, t, e) {
                if (typeof n != "function") throw new wn(D);
                return le(function() {
                    n.apply(i, e);
                }, t);
            }
            function ue(n, t, e, r) {
                var s = -1, o = Ee, f = !0, c = n.length, l = [], v = t.length;
                if (!c) return l;
                e && (t = G(t, hn(e))), r ? (o = Dr, f = !1) : t.length >= w && (o = jt, f = !1, t = new gt(t));
                n: for(; ++s < c;){
                    var _ = n[s], m = e == null ? _ : e(_);
                    if (_ = r || _ !== 0 ? _ : 0, f && m === m) {
                        for(var P = v; P--;)if (t[P] === m) continue n;
                        l.push(_);
                    } else o(t, m, r) || l.push(_);
                }
                return l;
            }
            var rt = _u($n), Ks = _u(Xr, !0);
            function Pc(n, t) {
                var e = !0;
                return rt(n, function(r, s, o) {
                    return e = !!t(r, s, o), e;
                }), e;
            }
            function Ge(n, t, e) {
                for(var r = -1, s = n.length; ++r < s;){
                    var o = n[r], f = t(o);
                    if (f != null && (c === i ? f === f && !pn(f) : e(f, c))) var c = f, l = o;
                }
                return l;
            }
            function Ac(n, t, e, r) {
                var s = n.length;
                for(e = R(e), e < 0 && (e = -e > s ? 0 : s + e), r = r === i || r > s ? s : R(r), r < 0 && (r += s), r = e > r ? 0 : oa(r); e < r;)n[e++] = t;
                return n;
            }
            function Ys(n, t) {
                var e = [];
                return rt(n, function(r, s, o) {
                    t(r, s, o) && e.push(r);
                }), e;
            }
            function j(n, t, e, r, s) {
                var o = -1, f = n.length;
                for(e || (e = fh), s || (s = []); ++o < f;){
                    var c = n[o];
                    t > 0 && e(c) ? t > 1 ? j(c, t - 1, e, r, s) : nt(s, c) : r || (s[s.length] = c);
                }
                return s;
            }
            var Jr = mu(), Zs = mu(!0);
            function $n(n, t) {
                return n && Jr(n, t, V);
            }
            function Xr(n, t) {
                return n && Zs(n, t, V);
            }
            function ze(n, t) {
                return jn(t, function(e) {
                    return Jn(n[e]);
                });
            }
            function _t(n, t) {
                t = st(t, n);
                for(var e = 0, r = t.length; n != null && e < r;)n = n[Wn(t[e++])];
                return e && e == r ? n : i;
            }
            function Js(n, t, e) {
                var r = t(n);
                return O(n) ? r : nt(r, e(n));
            }
            function en(n) {
                return n == null ? n === i ? Ja : Ya : pt && pt in M(n) ? rh(n) : vh(n);
            }
            function Qr(n, t) {
                return n > t;
            }
            function Cc(n, t) {
                return n != null && F.call(n, t);
            }
            function Ic(n, t) {
                return n != null && t in M(n);
            }
            function xc(n, t, e) {
                return n >= nn(t, e) && n < Q(t, e);
            }
            function Vr(n, t, e) {
                for(var r = e ? Dr : Ee, s = n[0].length, o = n.length, f = o, c = d(o), l = 1 / 0, v = []; f--;){
                    var _ = n[f];
                    f && t && (_ = G(_, hn(t))), l = nn(_.length, l), c[f] = !e && (t || s >= 120 && _.length >= 120) ? new gt(f && _) : i;
                }
                _ = n[0];
                var m = -1, P = c[0];
                n: for(; ++m < s && v.length < l;){
                    var I = _[m], E = t ? t(I) : I;
                    if (I = e || I !== 0 ? I : 0, !(P ? jt(P, E) : r(v, E, e))) {
                        for(f = o; --f;){
                            var T = c[f];
                            if (!(T ? jt(T, E) : r(n[f], E, e))) continue n;
                        }
                        P && P.push(E), v.push(I);
                    }
                }
                return v;
            }
            function Ec(n, t, e, r) {
                return $n(n, function(s, o, f) {
                    t(r, e(s), o, f);
                }), r;
            }
            function ae(n, t, e) {
                t = st(t, n), n = Hu(n, t);
                var r = n == null ? n : n[Wn(In(t))];
                return r == null ? i : cn(r, n, e);
            }
            function Xs(n) {
                return Y(n) && en(n) == Ot;
            }
            function yc(n) {
                return Y(n) && en(n) == kt;
            }
            function Sc(n) {
                return Y(n) && en(n) == Zt;
            }
            function oe(n, t, e, r, s) {
                return n === t ? !0 : n == null || t == null || !Y(n) && !Y(t) ? n !== n && t !== t : Oc(n, t, e, r, oe, s);
            }
            function Oc(n, t, e, r, s, o) {
                var f = O(n), c = O(t), l = f ? me : tn(n), v = c ? me : tn(t);
                l = l == Ot ? qn : l, v = v == Ot ? qn : v;
                var _ = l == qn, m = v == qn, P = l == v;
                if (P && at(n)) {
                    if (!at(t)) return !1;
                    f = !0, _ = !1;
                }
                if (P && !_) return o || (o = new Rn), f || Bt(n) ? Ou(n, t, e, r, s, o) : th(n, t, l, e, r, s, o);
                if (!(e & Et)) {
                    var I = _ && F.call(n, "__wrapped__"), E = m && F.call(t, "__wrapped__");
                    if (I || E) {
                        var T = I ? n.value() : n, y = E ? t.value() : t;
                        return o || (o = new Rn), s(T, y, e, r, o);
                    }
                }
                return P ? (o || (o = new Rn), eh(n, t, e, r, s, o)) : !1;
            }
            function Rc(n) {
                return Y(n) && tn(n) == yn;
            }
            function kr(n, t, e, r) {
                var s = e.length, o = s, f = !r;
                if (n == null) return !o;
                for(n = M(n); s--;){
                    var c = e[s];
                    if (f && c[2] ? c[1] !== n[c[0]] : !(c[0] in n)) return !1;
                }
                for(; ++s < o;){
                    c = e[s];
                    var l = c[0], v = n[l], _ = c[1];
                    if (f && c[2]) {
                        if (v === i && !(l in n)) return !1;
                    } else {
                        var m = new Rn;
                        if (r) var P = r(v, _, l, n, t, m);
                        if (!(P === i ? oe(_, v, Et | ve, r, m) : P)) return !1;
                    }
                }
                return !0;
            }
            function Qs(n) {
                if (!K(n) || hh(n)) return !1;
                var t = Jn(n) ? Rf : mo;
                return t.test(wt(n));
            }
            function bc(n) {
                return Y(n) && en(n) == Xt;
            }
            function Tc(n) {
                return Y(n) && tn(n) == Sn;
            }
            function Lc(n) {
                return Y(n) && ar(n.length) && !!B[en(n)];
            }
            function Vs(n) {
                return typeof n == "function" ? n : n == null ? fn : typeof n == "object" ? O(n) ? nu(n[0], n[1]) : js(n) : wa(n);
            }
            function jr(n) {
                if (!he(n)) return Hf(n);
                var t = [];
                for(var e in M(n))F.call(n, e) && e != "constructor" && t.push(e);
                return t;
            }
            function Dc(n) {
                if (!K(n)) return gh(n);
                var t = he(n), e = [];
                for(var r in n)r == "constructor" && (t || !F.call(n, r)) || e.push(r);
                return e;
            }
            function ni(n, t) {
                return n < t;
            }
            function ks(n, t) {
                var e = -1, r = an(n) ? d(n.length) : [];
                return rt(n, function(s, o, f) {
                    r[++e] = t(s, o, f);
                }), r;
            }
            function js(n) {
                var t = gi(n);
                return t.length == 1 && t[0][2] ? Du(t[0][0], t[0][1]) : function(e) {
                    return e === n || kr(e, n, t);
                };
            }
            function nu(n, t) {
                return _i(n) && Lu(t) ? Du(Wn(n), t) : function(e) {
                    var r = Si(e, n);
                    return r === i && r === t ? Oi(e, n) : oe(t, r, Et | ve);
                };
            }
            function Ke(n, t, e, r, s) {
                n !== t && Jr(t, function(o, f) {
                    if (s || (s = new Rn), K(o)) Nc(n, t, f, e, Ke, r, s);
                    else {
                        var c = r ? r(wi(n, f), o, f + "", n, t, s) : i;
                        c === i && (c = o), Yr(n, f, c);
                    }
                }, on);
            }
            function Nc(n, t, e, r, s, o, f) {
                var c = wi(n, e), l = wi(t, e), v = f.get(l);
                if (v) {
                    Yr(n, e, v);
                    return;
                }
                var _ = o ? o(c, l, e + "", n, t, f) : i, m = _ === i;
                if (m) {
                    var P = O(l), I = !P && at(l), E = !P && !I && Bt(l);
                    _ = l, P || I || E ? O(c) ? _ = c : Z(c) ? _ = un(c) : I ? (m = !1, _ = lu(l, !0)) : E ? (m = !1, _ = pu(l, !0)) : _ = [] : pe(l) || Pt(l) ? (_ = c, Pt(c) ? _ = fa(c) : (!K(c) || Jn(c)) && (_ = Tu(l))) : m = !1;
                }
                m && (f.set(l, _), s(_, l, r, o, f), f.delete(l)), Yr(n, e, _);
            }
            function tu(n, t) {
                var e = n.length;
                if (e) return t += t < 0 ? e : 0, Zn(t, e) ? n[t] : i;
            }
            function eu(n, t, e) {
                t.length ? t = G(t, function(o) {
                    return O(o) ? function(f) {
                        return _t(f, o.length === 1 ? o[0] : o);
                    } : o;
                }) : t = [
                    fn
                ];
                var r = -1;
                t = G(t, hn(x()));
                var s = ks(n, function(o, f, c) {
                    var l = G(t, function(v) {
                        return v(o);
                    });
                    return {
                        criteria: l,
                        index: ++r,
                        value: o
                    };
                });
                return af(s, function(o, f) {
                    return Zc(o, f, e);
                });
            }
            function Hc(n, t) {
                return ru(n, t, function(e, r) {
                    return Oi(n, r);
                });
            }
            function ru(n, t, e) {
                for(var r = -1, s = t.length, o = {}; ++r < s;){
                    var f = t[r], c = _t(n, f);
                    e(c, f) && fe(o, st(f, n), c);
                }
                return o;
            }
            function $c(n) {
                return function(t) {
                    return _t(t, n);
                };
            }
            function ti(n, t, e, r) {
                var s = r ? uf : Tt, o = -1, f = t.length, c = n;
                for(n === t && (t = un(t)), e && (c = G(n, hn(e))); ++o < f;)for(var l = 0, v = t[o], _ = e ? e(v) : v; (l = s(c, _, l, r)) > -1;)c !== n && He.call(c, l, 1), He.call(n, l, 1);
                return n;
            }
            function iu(n, t) {
                for(var e = n ? t.length : 0, r = e - 1; e--;){
                    var s = t[e];
                    if (e == r || s !== o) {
                        var o = s;
                        Zn(s) ? He.call(n, s, 1) : si(n, s);
                    }
                }
                return n;
            }
            function ei(n, t) {
                return n + We(Ws() * (t - n + 1));
            }
            function Uc(n, t, e, r) {
                for(var s = -1, o = Q(Ue((t - n) / (e || 1)), 0), f = d(o); o--;)f[r ? o : ++s] = n, n += e;
                return f;
            }
            function ri(n, t) {
                var e = "";
                if (!n || t < 1 || t > kn) return e;
                do t % 2 && (e += n), t = We(t / 2), t && (n += n);
                while (t)
                return e;
            }
            function L(n, t) {
                return Pi(Nu(n, t, fn), n + "");
            }
            function Wc(n) {
                return qs(Gt(n));
            }
            function Fc(n, t) {
                var e = Gt(n);
                return tr(e, vt(t, 0, e.length));
            }
            function fe(n, t, e, r) {
                if (!K(n)) return n;
                t = st(t, n);
                for(var s = -1, o = t.length, f = o - 1, c = n; c != null && ++s < o;){
                    var l = Wn(t[s]), v = e;
                    if (l === "__proto__" || l === "constructor" || l === "prototype") return n;
                    if (s != f) {
                        var _ = c[l];
                        v = r ? r(_, l, c) : i, v === i && (v = K(_) ? _ : Zn(t[s + 1]) ? [] : {});
                    }
                    se(c, l, v), c = c[l];
                }
                return n;
            }
            var su = Fe ? function(n, t) {
                return Fe.set(n, t), n;
            } : fn, Mc = $e ? function(n, t) {
                return $e(n, "toString", {
                    configurable: !0,
                    enumerable: !1,
                    value: bi(t),
                    writable: !0
                });
            } : fn;
            function qc(n) {
                return tr(Gt(n));
            }
            function Cn(n, t, e) {
                var r = -1, s = n.length;
                t < 0 && (t = -t > s ? 0 : s + t), e = e > s ? s : e, e < 0 && (e += s), s = t > e ? 0 : e - t >>> 0, t >>>= 0;
                for(var o = d(s); ++r < s;)o[r] = n[r + t];
                return o;
            }
            function Bc(n, t) {
                var e;
                return rt(n, function(r, s, o) {
                    return e = t(r, s, o), !e;
                }), !!e;
            }
            function Ye(n, t, e) {
                var r = 0, s = n == null ? r : n.length;
                if (typeof t == "number" && t === t && s <= Ba) {
                    for(; r < s;){
                        var o = r + s >>> 1, f = n[o];
                        f !== null && !pn(f) && (e ? f <= t : f < t) ? r = o + 1 : s = o;
                    }
                    return s;
                }
                return ii(n, t, fn, e);
            }
            function ii(n, t, e, r) {
                var s = 0, o = n == null ? 0 : n.length;
                if (o === 0) return 0;
                t = e(t);
                for(var f = t !== t, c = t === null, l = pn(t), v = t === i; s < o;){
                    var _ = We((s + o) / 2), m = e(n[_]), P = m !== i, I = m === null, E = m === m, T = pn(m);
                    if (f) var y = r || E;
                    else v ? y = E && (r || P) : c ? y = E && P && (r || !I) : l ? y = E && P && !I && (r || !T) : I || T ? y = !1 : y = r ? m <= t : m < t;
                    y ? s = _ + 1 : o = _;
                }
                return nn(o, qa);
            }
            function uu(n, t) {
                for(var e = -1, r = n.length, s = 0, o = []; ++e < r;){
                    var f = n[e], c = t ? t(f) : f;
                    if (!e || !bn(c, l)) {
                        var l = c;
                        o[s++] = f === 0 ? 0 : f;
                    }
                }
                return o;
            }
            function au(n) {
                return typeof n == "number" ? n : pn(n) ? _e : +n;
            }
            function ln(n) {
                if (typeof n == "string") return n;
                if (O(n)) return G(n, ln) + "";
                if (pn(n)) return Fs ? Fs.call(n) : "";
                var t = n + "";
                return t == "0" && 1 / n == -ht ? "-0" : t;
            }
            function it(n, t, e) {
                var r = -1, s = Ee, o = n.length, f = !0, c = [], l = c;
                if (e) f = !1, s = Dr;
                else if (o >= w) {
                    var v = t ? null : jc(n);
                    if (v) return Se(v);
                    f = !1, s = jt, l = new gt;
                } else l = t ? [] : c;
                n: for(; ++r < o;){
                    var _ = n[r], m = t ? t(_) : _;
                    if (_ = e || _ !== 0 ? _ : 0, f && m === m) {
                        for(var P = l.length; P--;)if (l[P] === m) continue n;
                        t && l.push(m), c.push(_);
                    } else s(l, m, e) || (l !== c && l.push(m), c.push(_));
                }
                return c;
            }
            function si(n, t) {
                return t = st(t, n), n = Hu(n, t), n == null || delete n[Wn(In(t))];
            }
            function ou(n, t, e, r) {
                return fe(n, t, e(_t(n, t)), r);
            }
            function Ze(n, t, e, r) {
                for(var s = n.length, o = r ? s : -1; (r ? o-- : ++o < s) && t(n[o], o, n););
                return e ? Cn(n, r ? 0 : o, r ? o + 1 : s) : Cn(n, r ? o + 1 : 0, r ? s : o);
            }
            function fu(n, t) {
                var e = n;
                return e instanceof H && (e = e.value()), Nr(t, function(r, s) {
                    return s.func.apply(s.thisArg, nt([
                        r
                    ], s.args));
                }, e);
            }
            function ui(n, t, e) {
                var r = n.length;
                if (r < 2) return r ? it(n[0]) : [];
                for(var s = -1, o = d(r); ++s < r;)for(var f = n[s], c = -1; ++c < r;)c != s && (o[s] = ue(o[s] || f, n[c], t, e));
                return it(j(o, 1), t, e);
            }
            function cu(n, t, e) {
                for(var r = -1, s = n.length, o = t.length, f = {}; ++r < s;){
                    var c = r < o ? t[r] : i;
                    e(f, n[r], c);
                }
                return f;
            }
            function ai(n) {
                return Z(n) ? n : [];
            }
            function oi(n) {
                return typeof n == "function" ? n : fn;
            }
            function st(n, t) {
                return O(n) ? n : _i(n, t) ? [
                    n
                ] : Fu(W(n));
            }
            var Gc = L;
            function ut(n, t, e) {
                var r = n.length;
                return e = e === i ? r : e, !t && e >= r ? n : Cn(n, t, e);
            }
            var hu = bf || function(n) {
                return k.clearTimeout(n);
            };
            function lu(n, t) {
                if (t) return n.slice();
                var e = n.length, r = Ds ? Ds(e) : new n.constructor(e);
                return n.copy(r), r;
            }
            function fi(n) {
                var t = new n.constructor(n.byteLength);
                return new De(t).set(new De(n)), t;
            }
            function zc(n, t) {
                var e = t ? fi(n.buffer) : n.buffer;
                return new n.constructor(e, n.byteOffset, n.byteLength);
            }
            function Kc(n) {
                var t = new n.constructor(n.source, Xi.exec(n));
                return t.lastIndex = n.lastIndex, t;
            }
            function Yc(n) {
                return ie ? M(ie.call(n)) : {};
            }
            function pu(n, t) {
                var e = t ? fi(n.buffer) : n.buffer;
                return new n.constructor(e, n.byteOffset, n.length);
            }
            function du(n, t) {
                if (n !== t) {
                    var e = n !== i, r = n === null, s = n === n, o = pn(n), f = t !== i, c = t === null, l = t === t, v = pn(t);
                    if (!c && !v && !o && n > t || o && f && l && !c && !v || r && f && l || !e && l || !s) return 1;
                    if (!r && !o && !v && n < t || v && e && s && !r && !o || c && e && s || !f && s || !l) return -1;
                }
                return 0;
            }
            function Zc(n, t, e) {
                for(var r = -1, s = n.criteria, o = t.criteria, f = s.length, c = e.length; ++r < f;){
                    var l = du(s[r], o[r]);
                    if (l) {
                        if (r >= c) return l;
                        var v = e[r];
                        return l * (v == "desc" ? -1 : 1);
                    }
                }
                return n.index - t.index;
            }
            function gu(n, t, e, r) {
                for(var s = -1, o = n.length, f = e.length, c = -1, l = t.length, v = Q(o - f, 0), _ = d(l + v), m = !r; ++c < l;)_[c] = t[c];
                for(; ++s < f;)(m || s < o) && (_[e[s]] = n[s]);
                for(; v--;)_[c++] = n[s++];
                return _;
            }
            function vu(n, t, e, r) {
                for(var s = -1, o = n.length, f = -1, c = e.length, l = -1, v = t.length, _ = Q(o - c, 0), m = d(_ + v), P = !r; ++s < _;)m[s] = n[s];
                for(var I = s; ++l < v;)m[I + l] = t[l];
                for(; ++f < c;)(P || s < o) && (m[I + e[f]] = n[s++]);
                return m;
            }
            function un(n, t) {
                var e = -1, r = n.length;
                for(t || (t = d(r)); ++e < r;)t[e] = n[e];
                return t;
            }
            function Un(n, t, e, r) {
                var s = !e;
                e || (e = {});
                for(var o = -1, f = t.length; ++o < f;){
                    var c = t[o], l = r ? r(e[c], n[c], c, e, n) : i;
                    l === i && (l = n[c]), s ? zn(e, c, l) : se(e, c, l);
                }
                return e;
            }
            function Jc(n, t) {
                return Un(n, vi(n), t);
            }
            function Xc(n, t) {
                return Un(n, Ru(n), t);
            }
            function Je(n, t) {
                return function(e, r) {
                    var s = O(e) ? jo : _c, o = t ? t() : {};
                    return s(e, n, x(r, 2), o);
                };
            }
            function Ft(n) {
                return L(function(t, e) {
                    var r = -1, s = e.length, o = s > 1 ? e[s - 1] : i, f = s > 2 ? e[2] : i;
                    for(o = n.length > 3 && typeof o == "function" ? (s--, o) : i, f && rn(e[0], e[1], f) && (o = s < 3 ? i : o, s = 1), t = M(t); ++r < s;){
                        var c = e[r];
                        c && n(t, c, r, o);
                    }
                    return t;
                });
            }
            function _u(n, t) {
                return function(e, r) {
                    if (e == null) return e;
                    if (!an(e)) return n(e, r);
                    for(var s = e.length, o = t ? s : -1, f = M(e); (t ? o-- : ++o < s) && r(f[o], o, f) !== !1;);
                    return e;
                };
            }
            function mu(n) {
                return function(t, e, r) {
                    for(var s = -1, o = M(t), f = r(t), c = f.length; c--;){
                        var l = f[n ? c : ++s];
                        if (e(o[l], l, o) === !1) break;
                    }
                    return t;
                };
            }
            function Qc(n, t, e) {
                var r = t & vn, s = ce(n);
                function o() {
                    var f = this && this !== k && this instanceof o ? s : n;
                    return f.apply(r ? e : this, arguments);
                }
                return o;
            }
            function wu(n) {
                return function(t) {
                    t = W(t);
                    var e = Lt(t) ? On(t) : i, r = e ? e[0] : t.charAt(0), s = e ? ut(e, 1).join("") : t.slice(1);
                    return r[n]() + s;
                };
            }
            function Mt(n) {
                return function(t) {
                    return Nr(_a(va(t).replace(Fo, "")), n, "");
                };
            }
            function ce(n) {
                return function() {
                    var t = arguments;
                    switch(t.length){
                        case 0:
                            return new n;
                        case 1:
                            return new n(t[0]);
                        case 2:
                            return new n(t[0], t[1]);
                        case 3:
                            return new n(t[0], t[1], t[2]);
                        case 4:
                            return new n(t[0], t[1], t[2], t[3]);
                        case 5:
                            return new n(t[0], t[1], t[2], t[3], t[4]);
                        case 6:
                            return new n(t[0], t[1], t[2], t[3], t[4], t[5]);
                        case 7:
                            return new n(t[0], t[1], t[2], t[3], t[4], t[5], t[6]);
                    }
                    var e = Wt(n.prototype), r = n.apply(e, t);
                    return K(r) ? r : e;
                };
            }
            function Vc(n, t, e) {
                var r = ce(n);
                function s() {
                    for(var o = arguments.length, f = d(o), c = o, l = qt(s); c--;)f[c] = arguments[c];
                    var v = o < 3 && f[0] !== l && f[o - 1] !== l ? [] : tt(f, l);
                    if (o -= v.length, o < e) return xu(n, t, Xe, s.placeholder, i, f, v, i, i, e - o);
                    var _ = this && this !== k && this instanceof s ? r : n;
                    return cn(_, this, f);
                }
                return s;
            }
            function Pu(n) {
                return function(t, e, r) {
                    var s = M(t);
                    if (!an(t)) {
                        var o = x(e, 3);
                        t = V(t), e = function(c) {
                            return o(s[c], c, s);
                        };
                    }
                    var f = n(t, e, r);
                    return f > -1 ? s[o ? t[f] : f] : i;
                };
            }
            function Au(n) {
                return Yn(function(t) {
                    var e = t.length, r = e, s = Pn.prototype.thru;
                    for(n && t.reverse(); r--;){
                        var o = t[r];
                        if (typeof o != "function") throw new wn(D);
                        if (s && !f && je(o) == "wrapper") var f = new Pn([], !0);
                    }
                    for(r = f ? r : e; ++r < e;){
                        o = t[r];
                        var c = je(o), l = c == "wrapper" ? di(o) : i;
                        l && mi(l[0]) && l[1] == (Mn | Dn | Nn | Kt) && !l[4].length && l[9] == 1 ? f = f[je(l[0])].apply(f, l[3]) : f = o.length == 1 && mi(o) ? f[c]() : f.thru(o);
                    }
                    return function() {
                        var v = arguments, _ = v[0];
                        if (f && v.length == 1 && O(_)) return f.plant(_).value();
                        for(var m = 0, P = e ? t[m].apply(this, v) : _; ++m < e;)P = t[m].call(this, P);
                        return P;
                    };
                });
            }
            function Xe(n, t, e, r, s, o, f, c, l, v) {
                var _ = t & Mn, m = t & vn, P = t & ct, I = t & (Dn | yt), E = t & dr, T = P ? i : ce(n);
                function y() {
                    for(var N = arguments.length, $ = d(N), dn = N; dn--;)$[dn] = arguments[dn];
                    if (I) var sn = qt(y), gn = ff($, sn);
                    if (r && ($ = gu($, r, s, I)), o && ($ = vu($, o, f, I)), N -= gn, I && N < v) {
                        var J = tt($, sn);
                        return xu(n, t, Xe, y.placeholder, e, $, J, c, l, v - N);
                    }
                    var Tn = m ? e : this, Qn = P ? Tn[n] : n;
                    return N = $.length, c ? $ = _h($, c) : E && N > 1 && $.reverse(), _ && l < N && ($.length = l), this && this !== k && this instanceof y && (Qn = T || ce(Qn)), Qn.apply(Tn, $);
                }
                return y;
            }
            function Cu(n, t) {
                return function(e, r) {
                    return Ec(e, n, t(r), {});
                };
            }
            function Qe(n, t) {
                return function(e, r) {
                    var s;
                    if (e === i && r === i) return t;
                    if (e !== i && (s = e), r !== i) {
                        if (s === i) return r;
                        typeof e == "string" || typeof r == "string" ? (e = ln(e), r = ln(r)) : (e = au(e), r = au(r)), s = n(e, r);
                    }
                    return s;
                };
            }
            function ci(n) {
                return Yn(function(t) {
                    return t = G(t, hn(x())), L(function(e) {
                        var r = this;
                        return n(t, function(s) {
                            return cn(s, r, e);
                        });
                    });
                });
            }
            function Ve(n, t) {
                t = t === i ? " " : ln(t);
                var e = t.length;
                if (e < 2) return e ? ri(t, n) : t;
                var r = ri(t, Ue(n / Dt(t)));
                return Lt(t) ? ut(On(r), 0, n).join("") : r.slice(0, n);
            }
            function kc(n, t, e, r) {
                var s = t & vn, o = ce(n);
                function f() {
                    for(var c = -1, l = arguments.length, v = -1, _ = r.length, m = d(_ + l), P = this && this !== k && this instanceof f ? o : n; ++v < _;)m[v] = r[v];
                    for(; l--;)m[v++] = arguments[++c];
                    return cn(P, s ? e : this, m);
                }
                return f;
            }
            function Iu(n) {
                return function(t, e, r) {
                    return r && typeof r != "number" && rn(t, e, r) && (e = r = i), t = Xn(t), e === i ? (e = t, t = 0) : e = Xn(e), r = r === i ? t < e ? 1 : -1 : Xn(r), Uc(t, e, r, n);
                };
            }
            function ke(n) {
                return function(t, e) {
                    return typeof t == "string" && typeof e == "string" || (t = xn(t), e = xn(e)), n(t, e);
                };
            }
            function xu(n, t, e, r, s, o, f, c, l, v) {
                var _ = t & Dn, m = _ ? f : i, P = _ ? i : f, I = _ ? o : i, E = _ ? i : o;
                t |= _ ? Nn : St, t &= ~(_ ? St : Nn), t & Bi || (t &= ~(vn | ct));
                var T = [
                    n,
                    t,
                    s,
                    I,
                    m,
                    E,
                    P,
                    c,
                    l,
                    v
                ], y = e.apply(i, T);
                return mi(n) && $u(y, T), y.placeholder = r, Uu(y, n, t);
            }
            function hi(n) {
                var t = X[n];
                return function(e, r) {
                    if (e = xn(e), r = r == null ? 0 : nn(R(r), 292), r && Us(e)) {
                        var s = (W(e) + "e").split("e"), o = t(s[0] + "e" + (+s[1] + r));
                        return s = (W(o) + "e").split("e"), +(s[0] + "e" + (+s[1] - r));
                    }
                    return t(e);
                };
            }
            var jc = $t && 1 / Se(new $t([
                ,
                -0
            ]))[1] == ht ? function(n) {
                return new $t(n);
            } : Di;
            function Eu(n) {
                return function(t) {
                    var e = tn(t);
                    return e == yn ? qr(t) : e == Sn ? vf(t) : of(t, n(t));
                };
            }
            function Kn(n, t, e, r, s, o, f, c) {
                var l = t & ct;
                if (!l && typeof n != "function") throw new wn(D);
                var v = r ? r.length : 0;
                if (v || (t &= ~(Nn | St), r = s = i), f = f === i ? f : Q(R(f), 0), c = c === i ? c : R(c), v -= s ? s.length : 0, t & St) {
                    var _ = r, m = s;
                    r = s = i;
                }
                var P = l ? i : di(n), I = [
                    n,
                    t,
                    e,
                    r,
                    s,
                    _,
                    m,
                    o,
                    f,
                    c
                ];
                if (P && dh(I, P), n = I[0], t = I[1], e = I[2], r = I[3], s = I[4], c = I[9] = I[9] === i ? l ? 0 : n.length : Q(I[9] - v, 0), !c && t & (Dn | yt) && (t &= ~(Dn | yt)), !t || t == vn) var E = Qc(n, t, e);
                else t == Dn || t == yt ? E = Vc(n, t, c) : (t == Nn || t == (vn | Nn)) && !s.length ? E = kc(n, t, e, r) : E = Xe.apply(i, I);
                var T = P ? su : $u;
                return Uu(T(E, I), n, t);
            }
            function yu(n, t, e, r) {
                return n === i || bn(n, Ht[e]) && !F.call(r, e) ? t : n;
            }
            function Su(n, t, e, r, s, o) {
                return K(n) && K(t) && (o.set(t, n), Ke(n, t, i, Su, o), o.delete(t)), n;
            }
            function nh(n) {
                return pe(n) ? i : n;
            }
            function Ou(n, t, e, r, s, o) {
                var f = e & Et, c = n.length, l = t.length;
                if (c != l && !(f && l > c)) return !1;
                var v = o.get(n), _ = o.get(t);
                if (v && _) return v == t && _ == n;
                var m = -1, P = !0, I = e & ve ? new gt : i;
                for(o.set(n, t), o.set(t, n); ++m < c;){
                    var E = n[m], T = t[m];
                    if (r) var y = f ? r(T, E, m, t, n, o) : r(E, T, m, n, t, o);
                    if (y !== i) {
                        if (y) continue;
                        P = !1;
                        break;
                    }
                    if (I) {
                        if (!Hr(t, function(N, $) {
                            if (!jt(I, $) && (E === N || s(E, N, e, r, o))) return I.push($);
                        })) {
                            P = !1;
                            break;
                        }
                    } else if (!(E === T || s(E, T, e, r, o))) {
                        P = !1;
                        break;
                    }
                }
                return o.delete(n), o.delete(t), P;
            }
            function th(n, t, e, r, s, o, f) {
                switch(e){
                    case Rt:
                        if (n.byteLength != t.byteLength || n.byteOffset != t.byteOffset) return !1;
                        n = n.buffer, t = t.buffer;
                    case kt:
                        return !(n.byteLength != t.byteLength || !o(new De(n), new De(t)));
                    case Yt:
                    case Zt:
                    case Jt:
                        return bn(+n, +t);
                    case we:
                        return n.name == t.name && n.message == t.message;
                    case Xt:
                    case Qt:
                        return n == t + "";
                    case yn:
                        var c = qr;
                    case Sn:
                        var l = r & Et;
                        if (c || (c = Se), n.size != t.size && !l) return !1;
                        var v = f.get(n);
                        if (v) return v == t;
                        r |= ve, f.set(n, t);
                        var _ = Ou(c(n), c(t), r, s, o, f);
                        return f.delete(n), _;
                    case Ae:
                        if (ie) return ie.call(n) == ie.call(t);
                }
                return !1;
            }
            function eh(n, t, e, r, s, o) {
                var f = e & Et, c = li(n), l = c.length, v = li(t), _ = v.length;
                if (l != _ && !f) return !1;
                for(var m = l; m--;){
                    var P = c[m];
                    if (!(f ? P in t : F.call(t, P))) return !1;
                }
                var I = o.get(n), E = o.get(t);
                if (I && E) return I == t && E == n;
                var T = !0;
                o.set(n, t), o.set(t, n);
                for(var y = f; ++m < l;){
                    P = c[m];
                    var N = n[P], $ = t[P];
                    if (r) var dn = f ? r($, N, P, t, n, o) : r(N, $, P, n, t, o);
                    if (!(dn === i ? N === $ || s(N, $, e, r, o) : dn)) {
                        T = !1;
                        break;
                    }
                    y || (y = P == "constructor");
                }
                if (T && !y) {
                    var sn = n.constructor, gn = t.constructor;
                    sn != gn && "constructor" in n && "constructor" in t && !(typeof sn == "function" && sn instanceof sn && typeof gn == "function" && gn instanceof gn) && (T = !1);
                }
                return o.delete(n), o.delete(t), T;
            }
            function Yn(n) {
                return Pi(Nu(n, i, Gu), n + "");
            }
            function li(n) {
                return Js(n, V, vi);
            }
            function pi(n) {
                return Js(n, on, Ru);
            }
            var di = Fe ? function(n) {
                return Fe.get(n);
            } : Di;
            function je(n) {
                for(var t = n.name + "", e = Ut[t], r = F.call(Ut, t) ? e.length : 0; r--;){
                    var s = e[r], o = s.func;
                    if (o == null || o == n) return s.name;
                }
                return t;
            }
            function qt(n) {
                var t = F.call(a, "placeholder") ? a : n;
                return t.placeholder;
            }
            function x() {
                var n = a.iteratee || Ti;
                return n = n === Ti ? Vs : n, arguments.length ? n(arguments[0], arguments[1]) : n;
            }
            function nr(n, t) {
                var e = n.__data__;
                return ch(t) ? e[typeof t == "string" ? "string" : "hash"] : e.map;
            }
            function gi(n) {
                for(var t = V(n), e = t.length; e--;){
                    var r = t[e], s = n[r];
                    t[e] = [
                        r,
                        s,
                        Lu(s)
                    ];
                }
                return t;
            }
            function mt(n, t) {
                var e = pf(n, t);
                return Qs(e) ? e : i;
            }
            function rh(n) {
                var t = F.call(n, pt), e = n[pt];
                try {
                    n[pt] = i;
                    var r = !0;
                } catch  {}
                var s = Te.call(n);
                return r && (t ? n[pt] = e : delete n[pt]), s;
            }
            var vi = Gr ? function(n) {
                return n == null ? [] : (n = M(n), jn(Gr(n), function(t) {
                    return Hs.call(n, t);
                }));
            } : Ni, Ru = Gr ? function(n) {
                for(var t = []; n;)nt(t, vi(n)), n = Ne(n);
                return t;
            } : Ni, tn = en;
            (zr && tn(new zr(new ArrayBuffer(1))) != Rt || te && tn(new te) != yn || Kr && tn(Kr.resolve()) != Ki || $t && tn(new $t) != Sn || ee && tn(new ee) != Vt) && (tn = function(n) {
                var t = en(n), e = t == qn ? n.constructor : i, r = e ? wt(e) : "";
                if (r) switch(r){
                    case Ff:
                        return Rt;
                    case Mf:
                        return yn;
                    case qf:
                        return Ki;
                    case Bf:
                        return Sn;
                    case Gf:
                        return Vt;
                }
                return t;
            });
            function ih(n, t, e) {
                for(var r = -1, s = e.length; ++r < s;){
                    var o = e[r], f = o.size;
                    switch(o.type){
                        case "drop":
                            n += f;
                            break;
                        case "dropRight":
                            t -= f;
                            break;
                        case "take":
                            t = nn(t, n + f);
                            break;
                        case "takeRight":
                            n = Q(n, t - f);
                            break;
                    }
                }
                return {
                    start: n,
                    end: t
                };
            }
            function sh(n) {
                var t = n.match(fo);
                return t ? t[1].split(co) : [];
            }
            function bu(n, t, e) {
                t = st(t, n);
                for(var r = -1, s = t.length, o = !1; ++r < s;){
                    var f = Wn(t[r]);
                    if (!(o = n != null && e(n, f))) break;
                    n = n[f];
                }
                return o || ++r != s ? o : (s = n == null ? 0 : n.length, !!s && ar(s) && Zn(f, s) && (O(n) || Pt(n)));
            }
            function uh(n) {
                var t = n.length, e = new n.constructor(t);
                return t && typeof n[0] == "string" && F.call(n, "index") && (e.index = n.index, e.input = n.input), e;
            }
            function Tu(n) {
                return typeof n.constructor == "function" && !he(n) ? Wt(Ne(n)) : {};
            }
            function ah(n, t, e) {
                var r = n.constructor;
                switch(t){
                    case kt:
                        return fi(n);
                    case Yt:
                    case Zt:
                        return new r(+n);
                    case Rt:
                        return zc(n, e);
                    case gr:
                    case vr:
                    case _r:
                    case mr:
                    case wr:
                    case Pr:
                    case Ar:
                    case Cr:
                    case Ir:
                        return pu(n, e);
                    case yn:
                        return new r;
                    case Jt:
                    case Qt:
                        return new r(n);
                    case Xt:
                        return Kc(n);
                    case Sn:
                        return new r;
                    case Ae:
                        return Yc(n);
                }
            }
            function oh(n, t) {
                var e = t.length;
                if (!e) return n;
                var r = e - 1;
                return t[r] = (e > 1 ? "& " : "") + t[r], t = t.join(e > 2 ? ", " : " "), n.replace(oo, `{
/* [wrapped with ` + t + `] */
`);
            }
            function fh(n) {
                return O(n) || Pt(n) || !!($s && n && n[$s]);
            }
            function Zn(n, t) {
                var e = typeof n;
                return t = t ?? kn, !!t && (e == "number" || e != "symbol" && Po.test(n)) && n > -1 && n % 1 == 0 && n < t;
            }
            function rn(n, t, e) {
                if (!K(e)) return !1;
                var r = typeof t;
                return (r == "number" ? an(e) && Zn(t, e.length) : r == "string" && t in e) ? bn(e[t], n) : !1;
            }
            function _i(n, t) {
                if (O(n)) return !1;
                var e = typeof n;
                return e == "number" || e == "symbol" || e == "boolean" || n == null || pn(n) ? !0 : io.test(n) || !ro.test(n) || t != null && n in M(t);
            }
            function ch(n) {
                var t = typeof n;
                return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? n !== "__proto__" : n === null;
            }
            function mi(n) {
                var t = je(n), e = a[t];
                if (typeof e != "function" || !(t in H.prototype)) return !1;
                if (n === e) return !0;
                var r = di(e);
                return !!r && n === r[0];
            }
            function hh(n) {
                return !!Ls && Ls in n;
            }
            var lh = Re ? Jn : Hi;
            function he(n) {
                var t = n && n.constructor, e = typeof t == "function" && t.prototype || Ht;
                return n === e;
            }
            function Lu(n) {
                return n === n && !K(n);
            }
            function Du(n, t) {
                return function(e) {
                    return e == null ? !1 : e[n] === t && (t !== i || n in M(e));
                };
            }
            function ph(n) {
                var t = sr(n, function(r) {
                    return e.size === pr && e.clear(), r;
                }), e = t.cache;
                return t;
            }
            function dh(n, t) {
                var e = n[1], r = t[1], s = e | r, o = s < (vn | ct | Mn), f = r == Mn && e == Dn || r == Mn && e == Kt && n[7].length <= t[8] || r == (Mn | Kt) && t[7].length <= t[8] && e == Dn;
                if (!(o || f)) return n;
                r & vn && (n[2] = t[2], s |= e & vn ? 0 : Bi);
                var c = t[3];
                if (c) {
                    var l = n[3];
                    n[3] = l ? gu(l, c, t[4]) : c, n[4] = l ? tt(n[3], It) : t[4];
                }
                return c = t[5], c && (l = n[5], n[5] = l ? vu(l, c, t[6]) : c, n[6] = l ? tt(n[5], It) : t[6]), c = t[7], c && (n[7] = c), r & Mn && (n[8] = n[8] == null ? t[8] : nn(n[8], t[8])), n[9] == null && (n[9] = t[9]), n[0] = t[0], n[1] = s, n;
            }
            function gh(n) {
                var t = [];
                if (n != null) for(var e in M(n))t.push(e);
                return t;
            }
            function vh(n) {
                return Te.call(n);
            }
            function Nu(n, t, e) {
                return t = Q(t === i ? n.length - 1 : t, 0), function() {
                    for(var r = arguments, s = -1, o = Q(r.length - t, 0), f = d(o); ++s < o;)f[s] = r[t + s];
                    s = -1;
                    for(var c = d(t + 1); ++s < t;)c[s] = r[s];
                    return c[t] = e(f), cn(n, this, c);
                };
            }
            function Hu(n, t) {
                return t.length < 2 ? n : _t(n, Cn(t, 0, -1));
            }
            function _h(n, t) {
                for(var e = n.length, r = nn(t.length, e), s = un(n); r--;){
                    var o = t[r];
                    n[r] = Zn(o, e) ? s[o] : i;
                }
                return n;
            }
            function wi(n, t) {
                if (!(t === "constructor" && typeof n[t] == "function") && t != "__proto__") return n[t];
            }
            var $u = Wu(su), le = Lf || function(n, t) {
                return k.setTimeout(n, t);
            }, Pi = Wu(Mc);
            function Uu(n, t, e) {
                var r = t + "";
                return Pi(n, oh(r, mh(sh(r), e)));
            }
            function Wu(n) {
                var t = 0, e = 0;
                return function() {
                    var r = $f(), s = Ua - (r - e);
                    if (e = r, s > 0) {
                        if (++t >= $a) return arguments[0];
                    } else t = 0;
                    return n.apply(i, arguments);
                };
            }
            function tr(n, t) {
                var e = -1, r = n.length, s = r - 1;
                for(t = t === i ? r : t; ++e < t;){
                    var o = ei(e, s), f = n[o];
                    n[o] = n[e], n[e] = f;
                }
                return n.length = t, n;
            }
            var Fu = ph(function(n) {
                var t = [];
                return n.charCodeAt(0) === 46 && t.push(""), n.replace(so, function(e, r, s, o) {
                    t.push(s ? o.replace(po, "$1") : r || e);
                }), t;
            });
            function Wn(n) {
                if (typeof n == "string" || pn(n)) return n;
                var t = n + "";
                return t == "0" && 1 / n == -ht ? "-0" : t;
            }
            function wt(n) {
                if (n != null) {
                    try {
                        return be.call(n);
                    } catch  {}
                    try {
                        return n + "";
                    } catch  {}
                }
                return "";
            }
            function mh(n, t) {
                return mn(Ga, function(e) {
                    var r = "_." + e[0];
                    t & e[1] && !Ee(n, r) && n.push(r);
                }), n.sort();
            }
            function Mu(n) {
                if (n instanceof H) return n.clone();
                var t = new Pn(n.__wrapped__, n.__chain__);
                return t.__actions__ = un(n.__actions__), t.__index__ = n.__index__, t.__values__ = n.__values__, t;
            }
            function wh(n, t, e) {
                (e ? rn(n, t, e) : t === i) ? t = 1 : t = Q(R(t), 0);
                var r = n == null ? 0 : n.length;
                if (!r || t < 1) return [];
                for(var s = 0, o = 0, f = d(Ue(r / t)); s < r;)f[o++] = Cn(n, s, s += t);
                return f;
            }
            function Ph(n) {
                for(var t = -1, e = n == null ? 0 : n.length, r = 0, s = []; ++t < e;){
                    var o = n[t];
                    o && (s[r++] = o);
                }
                return s;
            }
            function Ah() {
                var n = arguments.length;
                if (!n) return [];
                for(var t = d(n - 1), e = arguments[0], r = n; r--;)t[r - 1] = arguments[r];
                return nt(O(e) ? un(e) : [
                    e
                ], j(t, 1));
            }
            var Ch = L(function(n, t) {
                return Z(n) ? ue(n, j(t, 1, Z, !0)) : [];
            }), Ih = L(function(n, t) {
                var e = In(t);
                return Z(e) && (e = i), Z(n) ? ue(n, j(t, 1, Z, !0), x(e, 2)) : [];
            }), xh = L(function(n, t) {
                var e = In(t);
                return Z(e) && (e = i), Z(n) ? ue(n, j(t, 1, Z, !0), i, e) : [];
            });
            function Eh(n, t, e) {
                var r = n == null ? 0 : n.length;
                return r ? (t = e || t === i ? 1 : R(t), Cn(n, t < 0 ? 0 : t, r)) : [];
            }
            function yh(n, t, e) {
                var r = n == null ? 0 : n.length;
                return r ? (t = e || t === i ? 1 : R(t), t = r - t, Cn(n, 0, t < 0 ? 0 : t)) : [];
            }
            function Sh(n, t) {
                return n && n.length ? Ze(n, x(t, 3), !0, !0) : [];
            }
            function Oh(n, t) {
                return n && n.length ? Ze(n, x(t, 3), !0) : [];
            }
            function Rh(n, t, e, r) {
                var s = n == null ? 0 : n.length;
                return s ? (e && typeof e != "number" && rn(n, t, e) && (e = 0, r = s), Ac(n, t, e, r)) : [];
            }
            function qu(n, t, e) {
                var r = n == null ? 0 : n.length;
                if (!r) return -1;
                var s = e == null ? 0 : R(e);
                return s < 0 && (s = Q(r + s, 0)), ye(n, x(t, 3), s);
            }
            function Bu(n, t, e) {
                var r = n == null ? 0 : n.length;
                if (!r) return -1;
                var s = r - 1;
                return e !== i && (s = R(e), s = e < 0 ? Q(r + s, 0) : nn(s, r - 1)), ye(n, x(t, 3), s, !0);
            }
            function Gu(n) {
                var t = n == null ? 0 : n.length;
                return t ? j(n, 1) : [];
            }
            function bh(n) {
                var t = n == null ? 0 : n.length;
                return t ? j(n, ht) : [];
            }
            function Th(n, t) {
                var e = n == null ? 0 : n.length;
                return e ? (t = t === i ? 1 : R(t), j(n, t)) : [];
            }
            function Lh(n) {
                for(var t = -1, e = n == null ? 0 : n.length, r = {}; ++t < e;){
                    var s = n[t];
                    r[s[0]] = s[1];
                }
                return r;
            }
            function zu(n) {
                return n && n.length ? n[0] : i;
            }
            function Dh(n, t, e) {
                var r = n == null ? 0 : n.length;
                if (!r) return -1;
                var s = e == null ? 0 : R(e);
                return s < 0 && (s = Q(r + s, 0)), Tt(n, t, s);
            }
            function Nh(n) {
                var t = n == null ? 0 : n.length;
                return t ? Cn(n, 0, -1) : [];
            }
            var Hh = L(function(n) {
                var t = G(n, ai);
                return t.length && t[0] === n[0] ? Vr(t) : [];
            }), $h = L(function(n) {
                var t = In(n), e = G(n, ai);
                return t === In(e) ? t = i : e.pop(), e.length && e[0] === n[0] ? Vr(e, x(t, 2)) : [];
            }), Uh = L(function(n) {
                var t = In(n), e = G(n, ai);
                return t = typeof t == "function" ? t : i, t && e.pop(), e.length && e[0] === n[0] ? Vr(e, i, t) : [];
            });
            function Wh(n, t) {
                return n == null ? "" : Nf.call(n, t);
            }
            function In(n) {
                var t = n == null ? 0 : n.length;
                return t ? n[t - 1] : i;
            }
            function Fh(n, t, e) {
                var r = n == null ? 0 : n.length;
                if (!r) return -1;
                var s = r;
                return e !== i && (s = R(e), s = s < 0 ? Q(r + s, 0) : nn(s, r - 1)), t === t ? mf(n, t, s) : ye(n, xs, s, !0);
            }
            function Mh(n, t) {
                return n && n.length ? tu(n, R(t)) : i;
            }
            var qh = L(Ku);
            function Ku(n, t) {
                return n && n.length && t && t.length ? ti(n, t) : n;
            }
            function Bh(n, t, e) {
                return n && n.length && t && t.length ? ti(n, t, x(e, 2)) : n;
            }
            function Gh(n, t, e) {
                return n && n.length && t && t.length ? ti(n, t, i, e) : n;
            }
            var zh = Yn(function(n, t) {
                var e = n == null ? 0 : n.length, r = Zr(n, t);
                return iu(n, G(t, function(s) {
                    return Zn(s, e) ? +s : s;
                }).sort(du)), r;
            });
            function Kh(n, t) {
                var e = [];
                if (!(n && n.length)) return e;
                var r = -1, s = [], o = n.length;
                for(t = x(t, 3); ++r < o;){
                    var f = n[r];
                    t(f, r, n) && (e.push(f), s.push(r));
                }
                return iu(n, s), e;
            }
            function Ai(n) {
                return n == null ? n : Wf.call(n);
            }
            function Yh(n, t, e) {
                var r = n == null ? 0 : n.length;
                return r ? (e && typeof e != "number" && rn(n, t, e) ? (t = 0, e = r) : (t = t == null ? 0 : R(t), e = e === i ? r : R(e)), Cn(n, t, e)) : [];
            }
            function Zh(n, t) {
                return Ye(n, t);
            }
            function Jh(n, t, e) {
                return ii(n, t, x(e, 2));
            }
            function Xh(n, t) {
                var e = n == null ? 0 : n.length;
                if (e) {
                    var r = Ye(n, t);
                    if (r < e && bn(n[r], t)) return r;
                }
                return -1;
            }
            function Qh(n, t) {
                return Ye(n, t, !0);
            }
            function Vh(n, t, e) {
                return ii(n, t, x(e, 2), !0);
            }
            function kh(n, t) {
                var e = n == null ? 0 : n.length;
                if (e) {
                    var r = Ye(n, t, !0) - 1;
                    if (bn(n[r], t)) return r;
                }
                return -1;
            }
            function jh(n) {
                return n && n.length ? uu(n) : [];
            }
            function nl(n, t) {
                return n && n.length ? uu(n, x(t, 2)) : [];
            }
            function tl(n) {
                var t = n == null ? 0 : n.length;
                return t ? Cn(n, 1, t) : [];
            }
            function el(n, t, e) {
                return n && n.length ? (t = e || t === i ? 1 : R(t), Cn(n, 0, t < 0 ? 0 : t)) : [];
            }
            function rl(n, t, e) {
                var r = n == null ? 0 : n.length;
                return r ? (t = e || t === i ? 1 : R(t), t = r - t, Cn(n, t < 0 ? 0 : t, r)) : [];
            }
            function il(n, t) {
                return n && n.length ? Ze(n, x(t, 3), !1, !0) : [];
            }
            function sl(n, t) {
                return n && n.length ? Ze(n, x(t, 3)) : [];
            }
            var ul = L(function(n) {
                return it(j(n, 1, Z, !0));
            }), al = L(function(n) {
                var t = In(n);
                return Z(t) && (t = i), it(j(n, 1, Z, !0), x(t, 2));
            }), ol = L(function(n) {
                var t = In(n);
                return t = typeof t == "function" ? t : i, it(j(n, 1, Z, !0), i, t);
            });
            function fl(n) {
                return n && n.length ? it(n) : [];
            }
            function cl(n, t) {
                return n && n.length ? it(n, x(t, 2)) : [];
            }
            function hl(n, t) {
                return t = typeof t == "function" ? t : i, n && n.length ? it(n, i, t) : [];
            }
            function Ci(n) {
                if (!(n && n.length)) return [];
                var t = 0;
                return n = jn(n, function(e) {
                    if (Z(e)) return t = Q(e.length, t), !0;
                }), Fr(t, function(e) {
                    return G(n, $r(e));
                });
            }
            function Yu(n, t) {
                if (!(n && n.length)) return [];
                var e = Ci(n);
                return t == null ? e : G(e, function(r) {
                    return cn(t, i, r);
                });
            }
            var ll = L(function(n, t) {
                return Z(n) ? ue(n, t) : [];
            }), pl = L(function(n) {
                return ui(jn(n, Z));
            }), dl = L(function(n) {
                var t = In(n);
                return Z(t) && (t = i), ui(jn(n, Z), x(t, 2));
            }), gl = L(function(n) {
                var t = In(n);
                return t = typeof t == "function" ? t : i, ui(jn(n, Z), i, t);
            }), vl = L(Ci);
            function _l(n, t) {
                return cu(n || [], t || [], se);
            }
            function ml(n, t) {
                return cu(n || [], t || [], fe);
            }
            var wl = L(function(n) {
                var t = n.length, e = t > 1 ? n[t - 1] : i;
                return e = typeof e == "function" ? (n.pop(), e) : i, Yu(n, e);
            });
            function Zu(n) {
                var t = a(n);
                return t.__chain__ = !0, t;
            }
            function Pl(n, t) {
                return t(n), n;
            }
            function er(n, t) {
                return t(n);
            }
            var Al = Yn(function(n) {
                var t = n.length, e = t ? n[0] : 0, r = this.__wrapped__, s = function(o) {
                    return Zr(o, n);
                };
                return t > 1 || this.__actions__.length || !(r instanceof H) || !Zn(e) ? this.thru(s) : (r = r.slice(e, +e + (t ? 1 : 0)), r.__actions__.push({
                    func: er,
                    args: [
                        s
                    ],
                    thisArg: i
                }), new Pn(r, this.__chain__).thru(function(o) {
                    return t && !o.length && o.push(i), o;
                }));
            });
            function Cl() {
                return Zu(this);
            }
            function Il() {
                return new Pn(this.value(), this.__chain__);
            }
            function xl() {
                this.__values__ === i && (this.__values__ = aa(this.value()));
                var n = this.__index__ >= this.__values__.length, t = n ? i : this.__values__[this.__index__++];
                return {
                    done: n,
                    value: t
                };
            }
            function El() {
                return this;
            }
            function yl(n) {
                for(var t, e = this; e instanceof qe;){
                    var r = Mu(e);
                    r.__index__ = 0, r.__values__ = i, t ? s.__wrapped__ = r : t = r;
                    var s = r;
                    e = e.__wrapped__;
                }
                return s.__wrapped__ = n, t;
            }
            function Sl() {
                var n = this.__wrapped__;
                if (n instanceof H) {
                    var t = n;
                    return this.__actions__.length && (t = new H(this)), t = t.reverse(), t.__actions__.push({
                        func: er,
                        args: [
                            Ai
                        ],
                        thisArg: i
                    }), new Pn(t, this.__chain__);
                }
                return this.thru(Ai);
            }
            function Ol() {
                return fu(this.__wrapped__, this.__actions__);
            }
            var Rl = Je(function(n, t, e) {
                F.call(n, e) ? ++n[e] : zn(n, e, 1);
            });
            function bl(n, t, e) {
                var r = O(n) ? Cs : Pc;
                return e && rn(n, t, e) && (t = i), r(n, x(t, 3));
            }
            function Tl(n, t) {
                var e = O(n) ? jn : Ys;
                return e(n, x(t, 3));
            }
            var Ll = Pu(qu), Dl = Pu(Bu);
            function Nl(n, t) {
                return j(rr(n, t), 1);
            }
            function Hl(n, t) {
                return j(rr(n, t), ht);
            }
            function $l(n, t, e) {
                return e = e === i ? 1 : R(e), j(rr(n, t), e);
            }
            function Ju(n, t) {
                var e = O(n) ? mn : rt;
                return e(n, x(t, 3));
            }
            function Xu(n, t) {
                var e = O(n) ? nf : Ks;
                return e(n, x(t, 3));
            }
            var Ul = Je(function(n, t, e) {
                F.call(n, e) ? n[e].push(t) : zn(n, e, [
                    t
                ]);
            });
            function Wl(n, t, e, r) {
                n = an(n) ? n : Gt(n), e = e && !r ? R(e) : 0;
                var s = n.length;
                return e < 0 && (e = Q(s + e, 0)), or(n) ? e <= s && n.indexOf(t, e) > -1 : !!s && Tt(n, t, e) > -1;
            }
            var Fl = L(function(n, t, e) {
                var r = -1, s = typeof t == "function", o = an(n) ? d(n.length) : [];
                return rt(n, function(f) {
                    o[++r] = s ? cn(t, f, e) : ae(f, t, e);
                }), o;
            }), Ml = Je(function(n, t, e) {
                zn(n, e, t);
            });
            function rr(n, t) {
                var e = O(n) ? G : ks;
                return e(n, x(t, 3));
            }
            function ql(n, t, e, r) {
                return n == null ? [] : (O(t) || (t = t == null ? [] : [
                    t
                ]), e = r ? i : e, O(e) || (e = e == null ? [] : [
                    e
                ]), eu(n, t, e));
            }
            var Bl = Je(function(n, t, e) {
                n[e ? 0 : 1].push(t);
            }, function() {
                return [
                    [],
                    []
                ];
            });
            function Gl(n, t, e) {
                var r = O(n) ? Nr : ys, s = arguments.length < 3;
                return r(n, x(t, 4), e, s, rt);
            }
            function zl(n, t, e) {
                var r = O(n) ? tf : ys, s = arguments.length < 3;
                return r(n, x(t, 4), e, s, Ks);
            }
            function Kl(n, t) {
                var e = O(n) ? jn : Ys;
                return e(n, ur(x(t, 3)));
            }
            function Yl(n) {
                var t = O(n) ? qs : Wc;
                return t(n);
            }
            function Zl(n, t, e) {
                (e ? rn(n, t, e) : t === i) ? t = 1 : t = R(t);
                var r = O(n) ? gc : Fc;
                return r(n, t);
            }
            function Jl(n) {
                var t = O(n) ? vc : qc;
                return t(n);
            }
            function Xl(n) {
                if (n == null) return 0;
                if (an(n)) return or(n) ? Dt(n) : n.length;
                var t = tn(n);
                return t == yn || t == Sn ? n.size : jr(n).length;
            }
            function Ql(n, t, e) {
                var r = O(n) ? Hr : Bc;
                return e && rn(n, t, e) && (t = i), r(n, x(t, 3));
            }
            var Vl = L(function(n, t) {
                if (n == null) return [];
                var e = t.length;
                return e > 1 && rn(n, t[0], t[1]) ? t = [] : e > 2 && rn(t[0], t[1], t[2]) && (t = [
                    t[0]
                ]), eu(n, j(t, 1), []);
            }), ir = Tf || function() {
                return k.Date.now();
            };
            function kl(n, t) {
                if (typeof t != "function") throw new wn(D);
                return n = R(n), function() {
                    if (--n < 1) return t.apply(this, arguments);
                };
            }
            function Qu(n, t, e) {
                return t = e ? i : t, t = n && t == null ? n.length : t, Kn(n, Mn, i, i, i, i, t);
            }
            function Vu(n, t) {
                var e;
                if (typeof t != "function") throw new wn(D);
                return n = R(n), function() {
                    return --n > 0 && (e = t.apply(this, arguments)), n <= 1 && (t = i), e;
                };
            }
            var Ii = L(function(n, t, e) {
                var r = vn;
                if (e.length) {
                    var s = tt(e, qt(Ii));
                    r |= Nn;
                }
                return Kn(n, r, t, e, s);
            }), ku = L(function(n, t, e) {
                var r = vn | ct;
                if (e.length) {
                    var s = tt(e, qt(ku));
                    r |= Nn;
                }
                return Kn(t, r, n, e, s);
            });
            function ju(n, t, e) {
                t = e ? i : t;
                var r = Kn(n, Dn, i, i, i, i, i, t);
                return r.placeholder = ju.placeholder, r;
            }
            function na(n, t, e) {
                t = e ? i : t;
                var r = Kn(n, yt, i, i, i, i, i, t);
                return r.placeholder = na.placeholder, r;
            }
            function ta(n, t, e) {
                var r, s, o, f, c, l, v = 0, _ = !1, m = !1, P = !0;
                if (typeof n != "function") throw new wn(D);
                t = xn(t) || 0, K(e) && (_ = !!e.leading, m = "maxWait" in e, o = m ? Q(xn(e.maxWait) || 0, t) : o, P = "trailing" in e ? !!e.trailing : P);
                function I(J) {
                    var Tn = r, Qn = s;
                    return r = s = i, v = J, f = n.apply(Qn, Tn), f;
                }
                function E(J) {
                    return v = J, c = le(N, t), _ ? I(J) : f;
                }
                function T(J) {
                    var Tn = J - l, Qn = J - v, Pa = t - Tn;
                    return m ? nn(Pa, o - Qn) : Pa;
                }
                function y(J) {
                    var Tn = J - l, Qn = J - v;
                    return l === i || Tn >= t || Tn < 0 || m && Qn >= o;
                }
                function N() {
                    var J = ir();
                    if (y(J)) return $(J);
                    c = le(N, T(J));
                }
                function $(J) {
                    return c = i, P && r ? I(J) : (r = s = i, f);
                }
                function dn() {
                    c !== i && hu(c), v = 0, r = l = s = c = i;
                }
                function sn() {
                    return c === i ? f : $(ir());
                }
                function gn() {
                    var J = ir(), Tn = y(J);
                    if (r = arguments, s = this, l = J, Tn) {
                        if (c === i) return E(l);
                        if (m) return hu(c), c = le(N, t), I(l);
                    }
                    return c === i && (c = le(N, t)), f;
                }
                return gn.cancel = dn, gn.flush = sn, gn;
            }
            var jl = L(function(n, t) {
                return zs(n, 1, t);
            }), np = L(function(n, t, e) {
                return zs(n, xn(t) || 0, e);
            });
            function tp(n) {
                return Kn(n, dr);
            }
            function sr(n, t) {
                if (typeof n != "function" || t != null && typeof t != "function") throw new wn(D);
                var e = function() {
                    var r = arguments, s = t ? t.apply(this, r) : r[0], o = e.cache;
                    if (o.has(s)) return o.get(s);
                    var f = n.apply(this, r);
                    return e.cache = o.set(s, f) || o, f;
                };
                return e.cache = new (sr.Cache || Gn), e;
            }
            sr.Cache = Gn;
            function ur(n) {
                if (typeof n != "function") throw new wn(D);
                return function() {
                    var t = arguments;
                    switch(t.length){
                        case 0:
                            return !n.call(this);
                        case 1:
                            return !n.call(this, t[0]);
                        case 2:
                            return !n.call(this, t[0], t[1]);
                        case 3:
                            return !n.call(this, t[0], t[1], t[2]);
                    }
                    return !n.apply(this, t);
                };
            }
            function ep(n) {
                return Vu(2, n);
            }
            var rp = Gc(function(n, t) {
                t = t.length == 1 && O(t[0]) ? G(t[0], hn(x())) : G(j(t, 1), hn(x()));
                var e = t.length;
                return L(function(r) {
                    for(var s = -1, o = nn(r.length, e); ++s < o;)r[s] = t[s].call(this, r[s]);
                    return cn(n, this, r);
                });
            }), xi = L(function(n, t) {
                var e = tt(t, qt(xi));
                return Kn(n, Nn, i, t, e);
            }), ea = L(function(n, t) {
                var e = tt(t, qt(ea));
                return Kn(n, St, i, t, e);
            }), ip = Yn(function(n, t) {
                return Kn(n, Kt, i, i, i, t);
            });
            function sp(n, t) {
                if (typeof n != "function") throw new wn(D);
                return t = t === i ? t : R(t), L(n, t);
            }
            function up(n, t) {
                if (typeof n != "function") throw new wn(D);
                return t = t == null ? 0 : Q(R(t), 0), L(function(e) {
                    var r = e[t], s = ut(e, 0, t);
                    return r && nt(s, r), cn(n, this, s);
                });
            }
            function ap(n, t, e) {
                var r = !0, s = !0;
                if (typeof n != "function") throw new wn(D);
                return K(e) && (r = "leading" in e ? !!e.leading : r, s = "trailing" in e ? !!e.trailing : s), ta(n, t, {
                    leading: r,
                    maxWait: t,
                    trailing: s
                });
            }
            function op(n) {
                return Qu(n, 1);
            }
            function fp(n, t) {
                return xi(oi(t), n);
            }
            function cp() {
                if (!arguments.length) return [];
                var n = arguments[0];
                return O(n) ? n : [
                    n
                ];
            }
            function hp(n) {
                return An(n, xt);
            }
            function lp(n, t) {
                return t = typeof t == "function" ? t : i, An(n, xt, t);
            }
            function pp(n) {
                return An(n, Ln | xt);
            }
            function dp(n, t) {
                return t = typeof t == "function" ? t : i, An(n, Ln | xt, t);
            }
            function gp(n, t) {
                return t == null || Gs(n, t, V(t));
            }
            function bn(n, t) {
                return n === t || n !== n && t !== t;
            }
            var vp = ke(Qr), _p = ke(function(n, t) {
                return n >= t;
            }), Pt = Xs(function() {
                return arguments;
            }()) ? Xs : function(n) {
                return Y(n) && F.call(n, "callee") && !Hs.call(n, "callee");
            }, O = d.isArray, mp = vs ? hn(vs) : yc;
            function an(n) {
                return n != null && ar(n.length) && !Jn(n);
            }
            function Z(n) {
                return Y(n) && an(n);
            }
            function wp(n) {
                return n === !0 || n === !1 || Y(n) && en(n) == Yt;
            }
            var at = Df || Hi, Pp = _s ? hn(_s) : Sc;
            function Ap(n) {
                return Y(n) && n.nodeType === 1 && !pe(n);
            }
            function Cp(n) {
                if (n == null) return !0;
                if (an(n) && (O(n) || typeof n == "string" || typeof n.splice == "function" || at(n) || Bt(n) || Pt(n))) return !n.length;
                var t = tn(n);
                if (t == yn || t == Sn) return !n.size;
                if (he(n)) return !jr(n).length;
                for(var e in n)if (F.call(n, e)) return !1;
                return !0;
            }
            function Ip(n, t) {
                return oe(n, t);
            }
            function xp(n, t, e) {
                e = typeof e == "function" ? e : i;
                var r = e ? e(n, t) : i;
                return r === i ? oe(n, t, i, e) : !!r;
            }
            function Ei(n) {
                if (!Y(n)) return !1;
                var t = en(n);
                return t == we || t == Ka || typeof n.message == "string" && typeof n.name == "string" && !pe(n);
            }
            function Ep(n) {
                return typeof n == "number" && Us(n);
            }
            function Jn(n) {
                if (!K(n)) return !1;
                var t = en(n);
                return t == Pe || t == zi || t == za || t == Za;
            }
            function ra(n) {
                return typeof n == "number" && n == R(n);
            }
            function ar(n) {
                return typeof n == "number" && n > -1 && n % 1 == 0 && n <= kn;
            }
            function K(n) {
                var t = typeof n;
                return n != null && (t == "object" || t == "function");
            }
            function Y(n) {
                return n != null && typeof n == "object";
            }
            var ia = ms ? hn(ms) : Rc;
            function yp(n, t) {
                return n === t || kr(n, t, gi(t));
            }
            function Sp(n, t, e) {
                return e = typeof e == "function" ? e : i, kr(n, t, gi(t), e);
            }
            function Op(n) {
                return sa(n) && n != +n;
            }
            function Rp(n) {
                if (lh(n)) throw new S(b);
                return Qs(n);
            }
            function bp(n) {
                return n === null;
            }
            function Tp(n) {
                return n == null;
            }
            function sa(n) {
                return typeof n == "number" || Y(n) && en(n) == Jt;
            }
            function pe(n) {
                if (!Y(n) || en(n) != qn) return !1;
                var t = Ne(n);
                if (t === null) return !0;
                var e = F.call(t, "constructor") && t.constructor;
                return typeof e == "function" && e instanceof e && be.call(e) == Sf;
            }
            var yi = ws ? hn(ws) : bc;
            function Lp(n) {
                return ra(n) && n >= -kn && n <= kn;
            }
            var ua = Ps ? hn(Ps) : Tc;
            function or(n) {
                return typeof n == "string" || !O(n) && Y(n) && en(n) == Qt;
            }
            function pn(n) {
                return typeof n == "symbol" || Y(n) && en(n) == Ae;
            }
            var Bt = As ? hn(As) : Lc;
            function Dp(n) {
                return n === i;
            }
            function Np(n) {
                return Y(n) && tn(n) == Vt;
            }
            function Hp(n) {
                return Y(n) && en(n) == Xa;
            }
            var $p = ke(ni), Up = ke(function(n, t) {
                return n <= t;
            });
            function aa(n) {
                if (!n) return [];
                if (an(n)) return or(n) ? On(n) : un(n);
                if (ne && n[ne]) return gf(n[ne]());
                var t = tn(n), e = t == yn ? qr : t == Sn ? Se : Gt;
                return e(n);
            }
            function Xn(n) {
                if (!n) return n === 0 ? n : 0;
                if (n = xn(n), n === ht || n === -ht) {
                    var t = n < 0 ? -1 : 1;
                    return t * Ma;
                }
                return n === n ? n : 0;
            }
            function R(n) {
                var t = Xn(n), e = t % 1;
                return t === t ? e ? t - e : t : 0;
            }
            function oa(n) {
                return n ? vt(R(n), 0, Hn) : 0;
            }
            function xn(n) {
                if (typeof n == "number") return n;
                if (pn(n)) return _e;
                if (K(n)) {
                    var t = typeof n.valueOf == "function" ? n.valueOf() : n;
                    n = K(t) ? t + "" : t;
                }
                if (typeof n != "string") return n === 0 ? n : +n;
                n = Ss(n);
                var e = _o.test(n);
                return e || wo.test(n) ? Vo(n.slice(2), e ? 2 : 8) : vo.test(n) ? _e : +n;
            }
            function fa(n) {
                return Un(n, on(n));
            }
            function Wp(n) {
                return n ? vt(R(n), -kn, kn) : n === 0 ? n : 0;
            }
            function W(n) {
                return n == null ? "" : ln(n);
            }
            var Fp = Ft(function(n, t) {
                if (he(t) || an(t)) {
                    Un(t, V(t), n);
                    return;
                }
                for(var e in t)F.call(t, e) && se(n, e, t[e]);
            }), ca = Ft(function(n, t) {
                Un(t, on(t), n);
            }), fr = Ft(function(n, t, e, r) {
                Un(t, on(t), n, r);
            }), Mp = Ft(function(n, t, e, r) {
                Un(t, V(t), n, r);
            }), qp = Yn(Zr);
            function Bp(n, t) {
                var e = Wt(n);
                return t == null ? e : Bs(e, t);
            }
            var Gp = L(function(n, t) {
                n = M(n);
                var e = -1, r = t.length, s = r > 2 ? t[2] : i;
                for(s && rn(t[0], t[1], s) && (r = 1); ++e < r;)for(var o = t[e], f = on(o), c = -1, l = f.length; ++c < l;){
                    var v = f[c], _ = n[v];
                    (_ === i || bn(_, Ht[v]) && !F.call(n, v)) && (n[v] = o[v]);
                }
                return n;
            }), zp = L(function(n) {
                return n.push(i, Su), cn(ha, i, n);
            });
            function Kp(n, t) {
                return Is(n, x(t, 3), $n);
            }
            function Yp(n, t) {
                return Is(n, x(t, 3), Xr);
            }
            function Zp(n, t) {
                return n == null ? n : Jr(n, x(t, 3), on);
            }
            function Jp(n, t) {
                return n == null ? n : Zs(n, x(t, 3), on);
            }
            function Xp(n, t) {
                return n && $n(n, x(t, 3));
            }
            function Qp(n, t) {
                return n && Xr(n, x(t, 3));
            }
            function Vp(n) {
                return n == null ? [] : ze(n, V(n));
            }
            function kp(n) {
                return n == null ? [] : ze(n, on(n));
            }
            function Si(n, t, e) {
                var r = n == null ? i : _t(n, t);
                return r === i ? e : r;
            }
            function jp(n, t) {
                return n != null && bu(n, t, Cc);
            }
            function Oi(n, t) {
                return n != null && bu(n, t, Ic);
            }
            var nd = Cu(function(n, t, e) {
                t != null && typeof t.toString != "function" && (t = Te.call(t)), n[t] = e;
            }, bi(fn)), td = Cu(function(n, t, e) {
                t != null && typeof t.toString != "function" && (t = Te.call(t)), F.call(n, t) ? n[t].push(e) : n[t] = [
                    e
                ];
            }, x), ed = L(ae);
            function V(n) {
                return an(n) ? Ms(n) : jr(n);
            }
            function on(n) {
                return an(n) ? Ms(n, !0) : Dc(n);
            }
            function rd(n, t) {
                var e = {};
                return t = x(t, 3), $n(n, function(r, s, o) {
                    zn(e, t(r, s, o), r);
                }), e;
            }
            function id(n, t) {
                var e = {};
                return t = x(t, 3), $n(n, function(r, s, o) {
                    zn(e, s, t(r, s, o));
                }), e;
            }
            var sd = Ft(function(n, t, e) {
                Ke(n, t, e);
            }), ha = Ft(function(n, t, e, r) {
                Ke(n, t, e, r);
            }), ud = Yn(function(n, t) {
                var e = {};
                if (n == null) return e;
                var r = !1;
                t = G(t, function(o) {
                    return o = st(o, n), r || (r = o.length > 1), o;
                }), Un(n, pi(n), e), r && (e = An(e, Ln | Fn | xt, nh));
                for(var s = t.length; s--;)si(e, t[s]);
                return e;
            });
            function ad(n, t) {
                return la(n, ur(x(t)));
            }
            var od = Yn(function(n, t) {
                return n == null ? {} : Hc(n, t);
            });
            function la(n, t) {
                if (n == null) return {};
                var e = G(pi(n), function(r) {
                    return [
                        r
                    ];
                });
                return t = x(t), ru(n, e, function(r, s) {
                    return t(r, s[0]);
                });
            }
            function fd(n, t, e) {
                t = st(t, n);
                var r = -1, s = t.length;
                for(s || (s = 1, n = i); ++r < s;){
                    var o = n == null ? i : n[Wn(t[r])];
                    o === i && (r = s, o = e), n = Jn(o) ? o.call(n) : o;
                }
                return n;
            }
            function cd(n, t, e) {
                return n == null ? n : fe(n, t, e);
            }
            function hd(n, t, e, r) {
                return r = typeof r == "function" ? r : i, n == null ? n : fe(n, t, e, r);
            }
            var pa = Eu(V), da = Eu(on);
            function ld(n, t, e) {
                var r = O(n), s = r || at(n) || Bt(n);
                if (t = x(t, 4), e == null) {
                    var o = n && n.constructor;
                    s ? e = r ? new o : [] : K(n) ? e = Jn(o) ? Wt(Ne(n)) : {} : e = {};
                }
                return (s ? mn : $n)(n, function(f, c, l) {
                    return t(e, f, c, l);
                }), e;
            }
            function pd(n, t) {
                return n == null ? !0 : si(n, t);
            }
            function dd(n, t, e) {
                return n == null ? n : ou(n, t, oi(e));
            }
            function gd(n, t, e, r) {
                return r = typeof r == "function" ? r : i, n == null ? n : ou(n, t, oi(e), r);
            }
            function Gt(n) {
                return n == null ? [] : Mr(n, V(n));
            }
            function vd(n) {
                return n == null ? [] : Mr(n, on(n));
            }
            function _d(n, t, e) {
                return e === i && (e = t, t = i), e !== i && (e = xn(e), e = e === e ? e : 0), t !== i && (t = xn(t), t = t === t ? t : 0), vt(xn(n), t, e);
            }
            function md(n, t, e) {
                return t = Xn(t), e === i ? (e = t, t = 0) : e = Xn(e), n = xn(n), xc(n, t, e);
            }
            function wd(n, t, e) {
                if (e && typeof e != "boolean" && rn(n, t, e) && (t = e = i), e === i && (typeof t == "boolean" ? (e = t, t = i) : typeof n == "boolean" && (e = n, n = i)), n === i && t === i ? (n = 0, t = 1) : (n = Xn(n), t === i ? (t = n, n = 0) : t = Xn(t)), n > t) {
                    var r = n;
                    n = t, t = r;
                }
                if (e || n % 1 || t % 1) {
                    var s = Ws();
                    return nn(n + s * (t - n + Qo("1e-" + ((s + "").length - 1))), t);
                }
                return ei(n, t);
            }
            var Pd = Mt(function(n, t, e) {
                return t = t.toLowerCase(), n + (e ? ga(t) : t);
            });
            function ga(n) {
                return Ri(W(n).toLowerCase());
            }
            function va(n) {
                return n = W(n), n && n.replace(Ao, cf).replace(Mo, "");
            }
            function Ad(n, t, e) {
                n = W(n), t = ln(t);
                var r = n.length;
                e = e === i ? r : vt(R(e), 0, r);
                var s = e;
                return e -= t.length, e >= 0 && n.slice(e, s) == t;
            }
            function Cd(n) {
                return n = W(n), n && no.test(n) ? n.replace(Zi, hf) : n;
            }
            function Id(n) {
                return n = W(n), n && uo.test(n) ? n.replace(xr, "\\$&") : n;
            }
            var xd = Mt(function(n, t, e) {
                return n + (e ? "-" : "") + t.toLowerCase();
            }), Ed = Mt(function(n, t, e) {
                return n + (e ? " " : "") + t.toLowerCase();
            }), yd = wu("toLowerCase");
            function Sd(n, t, e) {
                n = W(n), t = R(t);
                var r = t ? Dt(n) : 0;
                if (!t || r >= t) return n;
                var s = (t - r) / 2;
                return Ve(We(s), e) + n + Ve(Ue(s), e);
            }
            function Od(n, t, e) {
                n = W(n), t = R(t);
                var r = t ? Dt(n) : 0;
                return t && r < t ? n + Ve(t - r, e) : n;
            }
            function Rd(n, t, e) {
                n = W(n), t = R(t);
                var r = t ? Dt(n) : 0;
                return t && r < t ? Ve(t - r, e) + n : n;
            }
            function bd(n, t, e) {
                return e || t == null ? t = 0 : t && (t = +t), Uf(W(n).replace(Er, ""), t || 0);
            }
            function Td(n, t, e) {
                return (e ? rn(n, t, e) : t === i) ? t = 1 : t = R(t), ri(W(n), t);
            }
            function Ld() {
                var n = arguments, t = W(n[0]);
                return n.length < 3 ? t : t.replace(n[1], n[2]);
            }
            var Dd = Mt(function(n, t, e) {
                return n + (e ? "_" : "") + t.toLowerCase();
            });
            function Nd(n, t, e) {
                return e && typeof e != "number" && rn(n, t, e) && (t = e = i), e = e === i ? Hn : e >>> 0, e ? (n = W(n), n && (typeof t == "string" || t != null && !yi(t)) && (t = ln(t), !t && Lt(n)) ? ut(On(n), 0, e) : n.split(t, e)) : [];
            }
            var Hd = Mt(function(n, t, e) {
                return n + (e ? " " : "") + Ri(t);
            });
            function $d(n, t, e) {
                return n = W(n), e = e == null ? 0 : vt(R(e), 0, n.length), t = ln(t), n.slice(e, e + t.length) == t;
            }
            function Ud(n, t, e) {
                var r = a.templateSettings;
                e && rn(n, t, e) && (t = i), n = W(n), t = fr({}, t, r, yu);
                var s = fr({}, t.imports, r.imports, yu), o = V(s), f = Mr(s, o), c, l, v = 0, _ = t.interpolate || Ce, m = "__p += '", P = Br((t.escape || Ce).source + "|" + _.source + "|" + (_ === Ji ? go : Ce).source + "|" + (t.evaluate || Ce).source + "|$", "g"), I = "//# sourceURL=" + (F.call(t, "sourceURL") ? (t.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++Ko + "]") + `
`;
                n.replace(P, function(y, N, $, dn, sn, gn) {
                    return $ || ($ = dn), m += n.slice(v, gn).replace(Co, lf), N && (c = !0, m += `' +
__e(` + N + `) +
'`), sn && (l = !0, m += `';
` + sn + `;
__p += '`), $ && (m += `' +
((__t = (` + $ + `)) == null ? '' : __t) +
'`), v = gn + y.length, y;
                }), m += `';
`;
                var E = F.call(t, "variable") && t.variable;
                if (!E) m = `with (obj) {
` + m + `
}
`;
                else if (lo.test(E)) throw new S(En);
                m = (l ? m.replace(Qa, "") : m).replace(Va, "$1").replace(ka, "$1;"), m = "function(" + (E || "obj") + `) {
` + (E ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (c ? ", __e = _.escape" : "") + (l ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + m + `return __p
}`;
                var T = ma(function() {
                    return U(o, I + "return " + m).apply(i, f);
                });
                if (T.source = m, Ei(T)) throw T;
                return T;
            }
            function Wd(n) {
                return W(n).toLowerCase();
            }
            function Fd(n) {
                return W(n).toUpperCase();
            }
            function Md(n, t, e) {
                if (n = W(n), n && (e || t === i)) return Ss(n);
                if (!n || !(t = ln(t))) return n;
                var r = On(n), s = On(t), o = Os(r, s), f = Rs(r, s) + 1;
                return ut(r, o, f).join("");
            }
            function qd(n, t, e) {
                if (n = W(n), n && (e || t === i)) return n.slice(0, Ts(n) + 1);
                if (!n || !(t = ln(t))) return n;
                var r = On(n), s = Rs(r, On(t)) + 1;
                return ut(r, 0, s).join("");
            }
            function Bd(n, t, e) {
                if (n = W(n), n && (e || t === i)) return n.replace(Er, "");
                if (!n || !(t = ln(t))) return n;
                var r = On(n), s = Os(r, On(t));
                return ut(r, s).join("");
            }
            function Gd(n, t) {
                var e = Na, r = Ha;
                if (K(t)) {
                    var s = "separator" in t ? t.separator : s;
                    e = "length" in t ? R(t.length) : e, r = "omission" in t ? ln(t.omission) : r;
                }
                n = W(n);
                var o = n.length;
                if (Lt(n)) {
                    var f = On(n);
                    o = f.length;
                }
                if (e >= o) return n;
                var c = e - Dt(r);
                if (c < 1) return r;
                var l = f ? ut(f, 0, c).join("") : n.slice(0, c);
                if (s === i) return l + r;
                if (f && (c += l.length - c), yi(s)) {
                    if (n.slice(c).search(s)) {
                        var v, _ = l;
                        for(s.global || (s = Br(s.source, W(Xi.exec(s)) + "g")), s.lastIndex = 0; v = s.exec(_);)var m = v.index;
                        l = l.slice(0, m === i ? c : m);
                    }
                } else if (n.indexOf(ln(s), c) != c) {
                    var P = l.lastIndexOf(s);
                    P > -1 && (l = l.slice(0, P));
                }
                return l + r;
            }
            function zd(n) {
                return n = W(n), n && ja.test(n) ? n.replace(Yi, wf) : n;
            }
            var Kd = Mt(function(n, t, e) {
                return n + (e ? " " : "") + t.toUpperCase();
            }), Ri = wu("toUpperCase");
            function _a(n, t, e) {
                return n = W(n), t = e ? i : t, t === i ? df(n) ? Cf(n) : sf(n) : n.match(t) || [];
            }
            var ma = L(function(n, t) {
                try {
                    return cn(n, i, t);
                } catch (e) {
                    return Ei(e) ? e : new S(e);
                }
            }), Yd = Yn(function(n, t) {
                return mn(t, function(e) {
                    e = Wn(e), zn(n, e, Ii(n[e], n));
                }), n;
            });
            function Zd(n) {
                var t = n == null ? 0 : n.length, e = x();
                return n = t ? G(n, function(r) {
                    if (typeof r[1] != "function") throw new wn(D);
                    return [
                        e(r[0]),
                        r[1]
                    ];
                }) : [], L(function(r) {
                    for(var s = -1; ++s < t;){
                        var o = n[s];
                        if (cn(o[0], this, r)) return cn(o[1], this, r);
                    }
                });
            }
            function Jd(n) {
                return wc(An(n, Ln));
            }
            function bi(n) {
                return function() {
                    return n;
                };
            }
            function Xd(n, t) {
                return n == null || n !== n ? t : n;
            }
            var Qd = Au(), Vd = Au(!0);
            function fn(n) {
                return n;
            }
            function Ti(n) {
                return Vs(typeof n == "function" ? n : An(n, Ln));
            }
            function kd(n) {
                return js(An(n, Ln));
            }
            function jd(n, t) {
                return nu(n, An(t, Ln));
            }
            var ng = L(function(n, t) {
                return function(e) {
                    return ae(e, n, t);
                };
            }), tg = L(function(n, t) {
                return function(e) {
                    return ae(n, e, t);
                };
            });
            function Li(n, t, e) {
                var r = V(t), s = ze(t, r);
                e == null && !(K(t) && (s.length || !r.length)) && (e = t, t = n, n = this, s = ze(t, V(t)));
                var o = !(K(e) && "chain" in e) || !!e.chain, f = Jn(n);
                return mn(s, function(c) {
                    var l = t[c];
                    n[c] = l, f && (n.prototype[c] = function() {
                        var v = this.__chain__;
                        if (o || v) {
                            var _ = n(this.__wrapped__), m = _.__actions__ = un(this.__actions__);
                            return m.push({
                                func: l,
                                args: arguments,
                                thisArg: n
                            }), _.__chain__ = v, _;
                        }
                        return l.apply(n, nt([
                            this.value()
                        ], arguments));
                    });
                }), n;
            }
            function eg() {
                return k._ === this && (k._ = Of), this;
            }
            function Di() {}
            function rg(n) {
                return n = R(n), L(function(t) {
                    return tu(t, n);
                });
            }
            var ig = ci(G), sg = ci(Cs), ug = ci(Hr);
            function wa(n) {
                return _i(n) ? $r(Wn(n)) : $c(n);
            }
            function ag(n) {
                return function(t) {
                    return n == null ? i : _t(n, t);
                };
            }
            var og = Iu(), fg = Iu(!0);
            function Ni() {
                return [];
            }
            function Hi() {
                return !1;
            }
            function cg() {
                return {};
            }
            function hg() {
                return "";
            }
            function lg() {
                return !0;
            }
            function pg(n, t) {
                if (n = R(n), n < 1 || n > kn) return [];
                var e = Hn, r = nn(n, Hn);
                t = x(t), n -= Hn;
                for(var s = Fr(r, t); ++e < n;)t(e);
                return s;
            }
            function dg(n) {
                return O(n) ? G(n, Wn) : pn(n) ? [
                    n
                ] : un(Fu(W(n)));
            }
            function gg(n) {
                var t = ++yf;
                return W(n) + t;
            }
            var vg = Qe(function(n, t) {
                return n + t;
            }, 0), _g = hi("ceil"), mg = Qe(function(n, t) {
                return n / t;
            }, 1), wg = hi("floor");
            function Pg(n) {
                return n && n.length ? Ge(n, fn, Qr) : i;
            }
            function Ag(n, t) {
                return n && n.length ? Ge(n, x(t, 2), Qr) : i;
            }
            function Cg(n) {
                return Es(n, fn);
            }
            function Ig(n, t) {
                return Es(n, x(t, 2));
            }
            function xg(n) {
                return n && n.length ? Ge(n, fn, ni) : i;
            }
            function Eg(n, t) {
                return n && n.length ? Ge(n, x(t, 2), ni) : i;
            }
            var yg = Qe(function(n, t) {
                return n * t;
            }, 1), Sg = hi("round"), Og = Qe(function(n, t) {
                return n - t;
            }, 0);
            function Rg(n) {
                return n && n.length ? Wr(n, fn) : 0;
            }
            function bg(n, t) {
                return n && n.length ? Wr(n, x(t, 2)) : 0;
            }
            return a.after = kl, a.ary = Qu, a.assign = Fp, a.assignIn = ca, a.assignInWith = fr, a.assignWith = Mp, a.at = qp, a.before = Vu, a.bind = Ii, a.bindAll = Yd, a.bindKey = ku, a.castArray = cp, a.chain = Zu, a.chunk = wh, a.compact = Ph, a.concat = Ah, a.cond = Zd, a.conforms = Jd, a.constant = bi, a.countBy = Rl, a.create = Bp, a.curry = ju, a.curryRight = na, a.debounce = ta, a.defaults = Gp, a.defaultsDeep = zp, a.defer = jl, a.delay = np, a.difference = Ch, a.differenceBy = Ih, a.differenceWith = xh, a.drop = Eh, a.dropRight = yh, a.dropRightWhile = Sh, a.dropWhile = Oh, a.fill = Rh, a.filter = Tl, a.flatMap = Nl, a.flatMapDeep = Hl, a.flatMapDepth = $l, a.flatten = Gu, a.flattenDeep = bh, a.flattenDepth = Th, a.flip = tp, a.flow = Qd, a.flowRight = Vd, a.fromPairs = Lh, a.functions = Vp, a.functionsIn = kp, a.groupBy = Ul, a.initial = Nh, a.intersection = Hh, a.intersectionBy = $h, a.intersectionWith = Uh, a.invert = nd, a.invertBy = td, a.invokeMap = Fl, a.iteratee = Ti, a.keyBy = Ml, a.keys = V, a.keysIn = on, a.map = rr, a.mapKeys = rd, a.mapValues = id, a.matches = kd, a.matchesProperty = jd, a.memoize = sr, a.merge = sd, a.mergeWith = ha, a.method = ng, a.methodOf = tg, a.mixin = Li, a.negate = ur, a.nthArg = rg, a.omit = ud, a.omitBy = ad, a.once = ep, a.orderBy = ql, a.over = ig, a.overArgs = rp, a.overEvery = sg, a.overSome = ug, a.partial = xi, a.partialRight = ea, a.partition = Bl, a.pick = od, a.pickBy = la, a.property = wa, a.propertyOf = ag, a.pull = qh, a.pullAll = Ku, a.pullAllBy = Bh, a.pullAllWith = Gh, a.pullAt = zh, a.range = og, a.rangeRight = fg, a.rearg = ip, a.reject = Kl, a.remove = Kh, a.rest = sp, a.reverse = Ai, a.sampleSize = Zl, a.set = cd, a.setWith = hd, a.shuffle = Jl, a.slice = Yh, a.sortBy = Vl, a.sortedUniq = jh, a.sortedUniqBy = nl, a.split = Nd, a.spread = up, a.tail = tl, a.take = el, a.takeRight = rl, a.takeRightWhile = il, a.takeWhile = sl, a.tap = Pl, a.throttle = ap, a.thru = er, a.toArray = aa, a.toPairs = pa, a.toPairsIn = da, a.toPath = dg, a.toPlainObject = fa, a.transform = ld, a.unary = op, a.union = ul, a.unionBy = al, a.unionWith = ol, a.uniq = fl, a.uniqBy = cl, a.uniqWith = hl, a.unset = pd, a.unzip = Ci, a.unzipWith = Yu, a.update = dd, a.updateWith = gd, a.values = Gt, a.valuesIn = vd, a.without = ll, a.words = _a, a.wrap = fp, a.xor = pl, a.xorBy = dl, a.xorWith = gl, a.zip = vl, a.zipObject = _l, a.zipObjectDeep = ml, a.zipWith = wl, a.entries = pa, a.entriesIn = da, a.extend = ca, a.extendWith = fr, Li(a, a), a.add = vg, a.attempt = ma, a.camelCase = Pd, a.capitalize = ga, a.ceil = _g, a.clamp = _d, a.clone = hp, a.cloneDeep = pp, a.cloneDeepWith = dp, a.cloneWith = lp, a.conformsTo = gp, a.deburr = va, a.defaultTo = Xd, a.divide = mg, a.endsWith = Ad, a.eq = bn, a.escape = Cd, a.escapeRegExp = Id, a.every = bl, a.find = Ll, a.findIndex = qu, a.findKey = Kp, a.findLast = Dl, a.findLastIndex = Bu, a.findLastKey = Yp, a.floor = wg, a.forEach = Ju, a.forEachRight = Xu, a.forIn = Zp, a.forInRight = Jp, a.forOwn = Xp, a.forOwnRight = Qp, a.get = Si, a.gt = vp, a.gte = _p, a.has = jp, a.hasIn = Oi, a.head = zu, a.identity = fn, a.includes = Wl, a.indexOf = Dh, a.inRange = md, a.invoke = ed, a.isArguments = Pt, a.isArray = O, a.isArrayBuffer = mp, a.isArrayLike = an, a.isArrayLikeObject = Z, a.isBoolean = wp, a.isBuffer = at, a.isDate = Pp, a.isElement = Ap, a.isEmpty = Cp, a.isEqual = Ip, a.isEqualWith = xp, a.isError = Ei, a.isFinite = Ep, a.isFunction = Jn, a.isInteger = ra, a.isLength = ar, a.isMap = ia, a.isMatch = yp, a.isMatchWith = Sp, a.isNaN = Op, a.isNative = Rp, a.isNil = Tp, a.isNull = bp, a.isNumber = sa, a.isObject = K, a.isObjectLike = Y, a.isPlainObject = pe, a.isRegExp = yi, a.isSafeInteger = Lp, a.isSet = ua, a.isString = or, a.isSymbol = pn, a.isTypedArray = Bt, a.isUndefined = Dp, a.isWeakMap = Np, a.isWeakSet = Hp, a.join = Wh, a.kebabCase = xd, a.last = In, a.lastIndexOf = Fh, a.lowerCase = Ed, a.lowerFirst = yd, a.lt = $p, a.lte = Up, a.max = Pg, a.maxBy = Ag, a.mean = Cg, a.meanBy = Ig, a.min = xg, a.minBy = Eg, a.stubArray = Ni, a.stubFalse = Hi, a.stubObject = cg, a.stubString = hg, a.stubTrue = lg, a.multiply = yg, a.nth = Mh, a.noConflict = eg, a.noop = Di, a.now = ir, a.pad = Sd, a.padEnd = Od, a.padStart = Rd, a.parseInt = bd, a.random = wd, a.reduce = Gl, a.reduceRight = zl, a.repeat = Td, a.replace = Ld, a.result = fd, a.round = Sg, a.runInContext = h, a.sample = Yl, a.size = Xl, a.snakeCase = Dd, a.some = Ql, a.sortedIndex = Zh, a.sortedIndexBy = Jh, a.sortedIndexOf = Xh, a.sortedLastIndex = Qh, a.sortedLastIndexBy = Vh, a.sortedLastIndexOf = kh, a.startCase = Hd, a.startsWith = $d, a.subtract = Og, a.sum = Rg, a.sumBy = bg, a.template = Ud, a.times = pg, a.toFinite = Xn, a.toInteger = R, a.toLength = oa, a.toLower = Wd, a.toNumber = xn, a.toSafeInteger = Wp, a.toString = W, a.toUpper = Fd, a.trim = Md, a.trimEnd = qd, a.trimStart = Bd, a.truncate = Gd, a.unescape = zd, a.uniqueId = gg, a.upperCase = Kd, a.upperFirst = Ri, a.each = Ju, a.eachRight = Xu, a.first = zu, Li(a, function() {
                var n = {};
                return $n(a, function(t, e) {
                    F.call(a.prototype, e) || (n[e] = t);
                }), n;
            }(), {
                chain: !1
            }), a.VERSION = p, mn([
                "bind",
                "bindKey",
                "curry",
                "curryRight",
                "partial",
                "partialRight"
            ], function(n) {
                a[n].placeholder = a;
            }), mn([
                "drop",
                "take"
            ], function(n, t) {
                H.prototype[n] = function(e) {
                    e = e === i ? 1 : Q(R(e), 0);
                    var r = this.__filtered__ && !t ? new H(this) : this.clone();
                    return r.__filtered__ ? r.__takeCount__ = nn(e, r.__takeCount__) : r.__views__.push({
                        size: nn(e, Hn),
                        type: n + (r.__dir__ < 0 ? "Right" : "")
                    }), r;
                }, H.prototype[n + "Right"] = function(e) {
                    return this.reverse()[n](e).reverse();
                };
            }), mn([
                "filter",
                "map",
                "takeWhile"
            ], function(n, t) {
                var e = t + 1, r = e == Gi || e == Fa;
                H.prototype[n] = function(s) {
                    var o = this.clone();
                    return o.__iteratees__.push({
                        iteratee: x(s, 3),
                        type: e
                    }), o.__filtered__ = o.__filtered__ || r, o;
                };
            }), mn([
                "head",
                "last"
            ], function(n, t) {
                var e = "take" + (t ? "Right" : "");
                H.prototype[n] = function() {
                    return this[e](1).value()[0];
                };
            }), mn([
                "initial",
                "tail"
            ], function(n, t) {
                var e = "drop" + (t ? "" : "Right");
                H.prototype[n] = function() {
                    return this.__filtered__ ? new H(this) : this[e](1);
                };
            }), H.prototype.compact = function() {
                return this.filter(fn);
            }, H.prototype.find = function(n) {
                return this.filter(n).head();
            }, H.prototype.findLast = function(n) {
                return this.reverse().find(n);
            }, H.prototype.invokeMap = L(function(n, t) {
                return typeof n == "function" ? new H(this) : this.map(function(e) {
                    return ae(e, n, t);
                });
            }), H.prototype.reject = function(n) {
                return this.filter(ur(x(n)));
            }, H.prototype.slice = function(n, t) {
                n = R(n);
                var e = this;
                return e.__filtered__ && (n > 0 || t < 0) ? new H(e) : (n < 0 ? e = e.takeRight(-n) : n && (e = e.drop(n)), t !== i && (t = R(t), e = t < 0 ? e.dropRight(-t) : e.take(t - n)), e);
            }, H.prototype.takeRightWhile = function(n) {
                return this.reverse().takeWhile(n).reverse();
            }, H.prototype.toArray = function() {
                return this.take(Hn);
            }, $n(H.prototype, function(n, t) {
                var e = /^(?:filter|find|map|reject)|While$/.test(t), r = /^(?:head|last)$/.test(t), s = a[r ? "take" + (t == "last" ? "Right" : "") : t], o = r || /^find/.test(t);
                s && (a.prototype[t] = function() {
                    var f = this.__wrapped__, c = r ? [
                        1
                    ] : arguments, l = f instanceof H, v = c[0], _ = l || O(f), m = function(N) {
                        var $ = s.apply(a, nt([
                            N
                        ], c));
                        return r && P ? $[0] : $;
                    };
                    _ && e && typeof v == "function" && v.length != 1 && (l = _ = !1);
                    var P = this.__chain__, I = !!this.__actions__.length, E = o && !P, T = l && !I;
                    if (!o && _) {
                        f = T ? f : new H(this);
                        var y = n.apply(f, c);
                        return y.__actions__.push({
                            func: er,
                            args: [
                                m
                            ],
                            thisArg: i
                        }), new Pn(y, P);
                    }
                    return E && T ? n.apply(this, c) : (y = this.thru(m), E ? r ? y.value()[0] : y.value() : y);
                });
            }), mn([
                "pop",
                "push",
                "shift",
                "sort",
                "splice",
                "unshift"
            ], function(n) {
                var t = Oe[n], e = /^(?:push|sort|unshift)$/.test(n) ? "tap" : "thru", r = /^(?:pop|shift)$/.test(n);
                a.prototype[n] = function() {
                    var s = arguments;
                    if (r && !this.__chain__) {
                        var o = this.value();
                        return t.apply(O(o) ? o : [], s);
                    }
                    return this[e](function(f) {
                        return t.apply(O(f) ? f : [], s);
                    });
                };
            }), $n(H.prototype, function(n, t) {
                var e = a[t];
                if (e) {
                    var r = e.name + "";
                    F.call(Ut, r) || (Ut[r] = []), Ut[r].push({
                        name: t,
                        func: e
                    });
                }
            }), Ut[Xe(i, ct).name] = [
                {
                    name: "wrapper",
                    func: i
                }
            ], H.prototype.clone = zf, H.prototype.reverse = Kf, H.prototype.value = Yf, a.prototype.at = Al, a.prototype.chain = Cl, a.prototype.commit = Il, a.prototype.next = xl, a.prototype.plant = yl, a.prototype.reverse = Sl, a.prototype.toJSON = a.prototype.valueOf = a.prototype.value = Ol, a.prototype.first = a.prototype.head, ne && (a.prototype[ne] = El), a;
        }, Nt = If();
        lt ? ((lt.exports = Nt)._ = Nt, Tr._ = Nt) : k._ = Nt;
    }).call(ge);
})(Ui, Ui.exports);
var zg = Object.defineProperty, Kg = Object.defineProperties, Yg = Object.getOwnPropertyDescriptors, ya = Object.getOwnPropertySymbols, Zg = Object.prototype.hasOwnProperty, Jg = Object.prototype.propertyIsEnumerable, Sa = (A, u, i)=>u in A ? zg(A, u, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: i
    }) : A[u] = i, cr = (A, u)=>{
    for(var i in u || (u = {}))Zg.call(u, i) && Sa(A, i, u[i]);
    if (ya) for (var i of ya(u))Jg.call(u, i) && Sa(A, i, u[i]);
    return A;
}, Xg = (A, u)=>Kg(A, Yg(u));
function ft(A, u, i) {
    var p;
    const w = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseChainId"])(A);
    return ((p = u.rpcMap) == null ? void 0 : p[w.reference]) || `${Gg}?chainId=${w.namespace}:${w.reference}&projectId=${i}`;
}
function Ct(A) {
    return A.includes(":") ? A.split(":")[1] : A;
}
function Oa(A) {
    return A.map((u)=>`${u.split(":")[0]}:${u.split(":")[1]}`);
}
function Qg(A, u) {
    const i = Object.keys(u.namespaces).filter((w)=>w.includes(A));
    if (!i.length) return [];
    const p = [];
    return i.forEach((w)=>{
        const b = u.namespaces[w].accounts;
        p.push(...b);
    }), p;
}
function Wi(A = {}, u = {}) {
    const i = Ra(A), p = Ra(u);
    return Ui.exports.merge(i, p);
}
function Ra(A) {
    var u, i, p, w;
    const b = {};
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValidObject"])(A)) return b;
    for (const [D, En] of Object.entries(A)){
        const zt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isCaipNamespace"])(D) ? [
            D
        ] : En.chains, pr = En.methods || [], It = En.events || [], Ln = En.rpcMap || {}, Fn = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseNamespaceKey"])(D);
        b[Fn] = Xg(cr(cr({}, b[Fn]), En), {
            chains: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mergeArrays"])(zt, (u = b[Fn]) == null ? void 0 : u.chains),
            methods: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mergeArrays"])(pr, (i = b[Fn]) == null ? void 0 : i.methods),
            events: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mergeArrays"])(It, (p = b[Fn]) == null ? void 0 : p.events),
            rpcMap: cr(cr({}, Ln), (w = b[Fn]) == null ? void 0 : w.rpcMap)
        });
    }
    return b;
}
function Vg(A) {
    return A.includes(":") ? A.split(":")[2] : A;
}
function ba(A) {
    const u = {};
    for (const [i, p] of Object.entries(A)){
        const w = p.methods || [], b = p.events || [], D = p.accounts || [], En = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isCaipNamespace"])(i) ? [
            i
        ] : p.chains ? p.chains : Oa(p.accounts);
        u[i] = {
            chains: En,
            methods: w,
            events: b,
            accounts: D
        };
    }
    return u;
}
function Fi(A) {
    return typeof A == "number" ? A : A.includes("0x") ? parseInt(A, 16) : (A = A.includes(":") ? A.split(":")[1] : A, isNaN(Number(A)) ? A : Number(A));
}
const Ta = {}, z = (A)=>Ta[A], Mi = (A, u)=>{
    Ta[A] = u;
};
class kg {
    constructor(u){
        this.name = "polkadot", this.namespace = u.namespace, this.events = z("events"), this.client = z("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
    }
    updateNamespace(u) {
        this.namespace = Object.assign(this.namespace, u);
    }
    requestAccounts() {
        return this.getAccounts();
    }
    getDefaultChain() {
        if (this.chainId) return this.chainId;
        if (this.namespace.defaultChain) return this.namespace.defaultChain;
        const u = this.namespace.chains[0];
        if (!u) throw new Error("ChainId not found");
        return u.split(":")[1];
    }
    request(u) {
        return this.namespace.methods.includes(u.request.method) ? this.client.request(u) : this.getHttpProvider().request(u.request);
    }
    setDefaultChain(u, i) {
        this.httpProviders[u] || this.setHttpProvider(u, i), this.chainId = u, this.events.emit(Vn.DEFAULT_CHAIN_CHANGED, `${this.name}:${u}`);
    }
    getAccounts() {
        const u = this.namespace.accounts;
        return u ? u.filter((i)=>i.split(":")[1] === this.chainId.toString()).map((i)=>i.split(":")[2]) || [] : [];
    }
    createHttpProviders() {
        const u = {};
        return this.namespace.chains.forEach((i)=>{
            var p;
            const w = Ct(i);
            u[w] = this.createHttpProvider(w, (p = this.namespace.rpcMap) == null ? void 0 : p[i]);
        }), u;
    }
    getHttpProvider() {
        const u = `${this.name}:${this.chainId}`, i = this.httpProviders[u];
        if (typeof i > "u") throw new Error(`JSON-RPC provider for ${u} not found`);
        return i;
    }
    setHttpProvider(u, i) {
        const p = this.createHttpProvider(u, i);
        p && (this.httpProviders[u] = p);
    }
    createHttpProvider(u, i) {
        const p = i || ft(u, this.namespace, this.client.core.projectId);
        if (!p) throw new Error(`No RPC url provided for chainId: ${u}`);
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$provider$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["JsonRpcProvider"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$http$2d$connection$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](p, z("disableProviderPing")));
    }
}
class jg {
    constructor(u){
        this.name = "eip155", this.namespace = u.namespace, this.events = z("events"), this.client = z("client"), this.httpProviders = this.createHttpProviders(), this.chainId = parseInt(this.getDefaultChain());
    }
    async request(u) {
        switch(u.request.method){
            case "eth_requestAccounts":
                return this.getAccounts();
            case "eth_accounts":
                return this.getAccounts();
            case "wallet_switchEthereumChain":
                return await this.handleSwitchChain(u);
            case "eth_chainId":
                return parseInt(this.getDefaultChain());
        }
        return this.namespace.methods.includes(u.request.method) ? await this.client.request(u) : this.getHttpProvider().request(u.request);
    }
    updateNamespace(u) {
        this.namespace = Object.assign(this.namespace, u);
    }
    setDefaultChain(u, i) {
        this.httpProviders[u] || this.setHttpProvider(parseInt(u), i), this.chainId = parseInt(u), this.events.emit(Vn.DEFAULT_CHAIN_CHANGED, `${this.name}:${u}`);
    }
    requestAccounts() {
        return this.getAccounts();
    }
    getDefaultChain() {
        if (this.chainId) return this.chainId.toString();
        if (this.namespace.defaultChain) return this.namespace.defaultChain;
        const u = this.namespace.chains[0];
        if (!u) throw new Error("ChainId not found");
        return u.split(":")[1];
    }
    createHttpProvider(u, i) {
        const p = i || ft(`${this.name}:${u}`, this.namespace, this.client.core.projectId);
        if (!p) throw new Error(`No RPC url provided for chainId: ${u}`);
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$provider$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["JsonRpcProvider"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$http$2d$connection$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HttpConnection"](p, z("disableProviderPing")));
    }
    setHttpProvider(u, i) {
        const p = this.createHttpProvider(u, i);
        p && (this.httpProviders[u] = p);
    }
    createHttpProviders() {
        const u = {};
        return this.namespace.chains.forEach((i)=>{
            var p;
            const w = parseInt(Ct(i));
            u[w] = this.createHttpProvider(w, (p = this.namespace.rpcMap) == null ? void 0 : p[i]);
        }), u;
    }
    getAccounts() {
        const u = this.namespace.accounts;
        return u ? [
            ...new Set(u.filter((i)=>i.split(":")[1] === this.chainId.toString()).map((i)=>i.split(":")[2]))
        ] : [];
    }
    getHttpProvider() {
        const u = this.chainId, i = this.httpProviders[u];
        if (typeof i > "u") throw new Error(`JSON-RPC provider for ${u} not found`);
        return i;
    }
    async handleSwitchChain(u) {
        var i, p;
        let w = u.request.params ? (i = u.request.params[0]) == null ? void 0 : i.chainId : "0x0";
        w = w.startsWith("0x") ? w : `0x${w}`;
        const b = parseInt(w, 16);
        if (this.isChainApproved(b)) this.setDefaultChain(`${b}`);
        else if (this.namespace.methods.includes("wallet_switchEthereumChain")) await this.client.request({
            topic: u.topic,
            request: {
                method: u.request.method,
                params: [
                    {
                        chainId: w
                    }
                ]
            },
            chainId: (p = this.namespace.chains) == null ? void 0 : p[0]
        }), this.setDefaultChain(`${b}`);
        else throw new Error(`Failed to switch to chain 'eip155:${b}'. The chain is not approved or the wallet does not support 'wallet_switchEthereumChain' method.`);
        return null;
    }
    isChainApproved(u) {
        return this.namespace.chains.includes(`${this.name}:${u}`);
    }
}
class nv {
    constructor(u){
        this.name = "solana", this.namespace = u.namespace, this.events = z("events"), this.client = z("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
    }
    updateNamespace(u) {
        this.namespace = Object.assign(this.namespace, u);
    }
    requestAccounts() {
        return this.getAccounts();
    }
    request(u) {
        return this.namespace.methods.includes(u.request.method) ? this.client.request(u) : this.getHttpProvider().request(u.request);
    }
    setDefaultChain(u, i) {
        this.httpProviders[u] || this.setHttpProvider(u, i), this.chainId = u, this.events.emit(Vn.DEFAULT_CHAIN_CHANGED, `${this.name}:${u}`);
    }
    getDefaultChain() {
        if (this.chainId) return this.chainId;
        if (this.namespace.defaultChain) return this.namespace.defaultChain;
        const u = this.namespace.chains[0];
        if (!u) throw new Error("ChainId not found");
        return u.split(":")[1];
    }
    getAccounts() {
        const u = this.namespace.accounts;
        return u ? [
            ...new Set(u.filter((i)=>i.split(":")[1] === this.chainId.toString()).map((i)=>i.split(":")[2]))
        ] : [];
    }
    createHttpProviders() {
        const u = {};
        return this.namespace.chains.forEach((i)=>{
            var p;
            const w = Ct(i);
            u[w] = this.createHttpProvider(w, (p = this.namespace.rpcMap) == null ? void 0 : p[i]);
        }), u;
    }
    getHttpProvider() {
        const u = `${this.name}:${this.chainId}`, i = this.httpProviders[u];
        if (typeof i > "u") throw new Error(`JSON-RPC provider for ${u} not found`);
        return i;
    }
    setHttpProvider(u, i) {
        const p = this.createHttpProvider(u, i);
        p && (this.httpProviders[u] = p);
    }
    createHttpProvider(u, i) {
        const p = i || ft(u, this.namespace, this.client.core.projectId);
        if (!p) throw new Error(`No RPC url provided for chainId: ${u}`);
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$provider$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["JsonRpcProvider"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$http$2d$connection$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](p, z("disableProviderPing")));
    }
}
class tv {
    constructor(u){
        this.name = "cosmos", this.namespace = u.namespace, this.events = z("events"), this.client = z("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
    }
    updateNamespace(u) {
        this.namespace = Object.assign(this.namespace, u);
    }
    requestAccounts() {
        return this.getAccounts();
    }
    getDefaultChain() {
        if (this.chainId) return this.chainId;
        if (this.namespace.defaultChain) return this.namespace.defaultChain;
        const u = this.namespace.chains[0];
        if (!u) throw new Error("ChainId not found");
        return u.split(":")[1];
    }
    request(u) {
        return this.namespace.methods.includes(u.request.method) ? this.client.request(u) : this.getHttpProvider().request(u.request);
    }
    setDefaultChain(u, i) {
        this.httpProviders[u] || this.setHttpProvider(u, i), this.chainId = u, this.events.emit(Vn.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`);
    }
    getAccounts() {
        const u = this.namespace.accounts;
        return u ? [
            ...new Set(u.filter((i)=>i.split(":")[1] === this.chainId.toString()).map((i)=>i.split(":")[2]))
        ] : [];
    }
    createHttpProviders() {
        const u = {};
        return this.namespace.chains.forEach((i)=>{
            var p;
            const w = Ct(i);
            u[w] = this.createHttpProvider(w, (p = this.namespace.rpcMap) == null ? void 0 : p[i]);
        }), u;
    }
    getHttpProvider() {
        const u = `${this.name}:${this.chainId}`, i = this.httpProviders[u];
        if (typeof i > "u") throw new Error(`JSON-RPC provider for ${u} not found`);
        return i;
    }
    setHttpProvider(u, i) {
        const p = this.createHttpProvider(u, i);
        p && (this.httpProviders[u] = p);
    }
    createHttpProvider(u, i) {
        const p = i || ft(u, this.namespace, this.client.core.projectId);
        if (!p) throw new Error(`No RPC url provided for chainId: ${u}`);
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$provider$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["JsonRpcProvider"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$http$2d$connection$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](p, z("disableProviderPing")));
    }
}
class ev {
    constructor(u){
        this.name = "cip34", this.namespace = u.namespace, this.events = z("events"), this.client = z("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
    }
    updateNamespace(u) {
        this.namespace = Object.assign(this.namespace, u);
    }
    requestAccounts() {
        return this.getAccounts();
    }
    getDefaultChain() {
        if (this.chainId) return this.chainId;
        if (this.namespace.defaultChain) return this.namespace.defaultChain;
        const u = this.namespace.chains[0];
        if (!u) throw new Error("ChainId not found");
        return u.split(":")[1];
    }
    request(u) {
        return this.namespace.methods.includes(u.request.method) ? this.client.request(u) : this.getHttpProvider().request(u.request);
    }
    setDefaultChain(u, i) {
        this.httpProviders[u] || this.setHttpProvider(u, i), this.chainId = u, this.events.emit(Vn.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`);
    }
    getAccounts() {
        const u = this.namespace.accounts;
        return u ? [
            ...new Set(u.filter((i)=>i.split(":")[1] === this.chainId.toString()).map((i)=>i.split(":")[2]))
        ] : [];
    }
    createHttpProviders() {
        const u = {};
        return this.namespace.chains.forEach((i)=>{
            const p = this.getCardanoRPCUrl(i), w = Ct(i);
            u[w] = this.createHttpProvider(w, p);
        }), u;
    }
    getHttpProvider() {
        const u = `${this.name}:${this.chainId}`, i = this.httpProviders[u];
        if (typeof i > "u") throw new Error(`JSON-RPC provider for ${u} not found`);
        return i;
    }
    getCardanoRPCUrl(u) {
        const i = this.namespace.rpcMap;
        if (i) return i[u];
    }
    setHttpProvider(u, i) {
        const p = this.createHttpProvider(u, i);
        p && (this.httpProviders[u] = p);
    }
    createHttpProvider(u, i) {
        const p = i || this.getCardanoRPCUrl(u);
        if (!p) throw new Error(`No RPC url provided for chainId: ${u}`);
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$provider$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["JsonRpcProvider"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$http$2d$connection$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](p, z("disableProviderPing")));
    }
}
class rv {
    constructor(u){
        this.name = "elrond", this.namespace = u.namespace, this.events = z("events"), this.client = z("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
    }
    updateNamespace(u) {
        this.namespace = Object.assign(this.namespace, u);
    }
    requestAccounts() {
        return this.getAccounts();
    }
    request(u) {
        return this.namespace.methods.includes(u.request.method) ? this.client.request(u) : this.getHttpProvider().request(u.request);
    }
    setDefaultChain(u, i) {
        this.httpProviders[u] || this.setHttpProvider(u, i), this.chainId = u, this.events.emit(Vn.DEFAULT_CHAIN_CHANGED, `${this.name}:${u}`);
    }
    getDefaultChain() {
        if (this.chainId) return this.chainId;
        if (this.namespace.defaultChain) return this.namespace.defaultChain;
        const u = this.namespace.chains[0];
        if (!u) throw new Error("ChainId not found");
        return u.split(":")[1];
    }
    getAccounts() {
        const u = this.namespace.accounts;
        return u ? [
            ...new Set(u.filter((i)=>i.split(":")[1] === this.chainId.toString()).map((i)=>i.split(":")[2]))
        ] : [];
    }
    createHttpProviders() {
        const u = {};
        return this.namespace.chains.forEach((i)=>{
            var p;
            const w = Ct(i);
            u[w] = this.createHttpProvider(w, (p = this.namespace.rpcMap) == null ? void 0 : p[i]);
        }), u;
    }
    getHttpProvider() {
        const u = `${this.name}:${this.chainId}`, i = this.httpProviders[u];
        if (typeof i > "u") throw new Error(`JSON-RPC provider for ${u} not found`);
        return i;
    }
    setHttpProvider(u, i) {
        const p = this.createHttpProvider(u, i);
        p && (this.httpProviders[u] = p);
    }
    createHttpProvider(u, i) {
        const p = i || ft(u, this.namespace, this.client.core.projectId);
        if (!p) throw new Error(`No RPC url provided for chainId: ${u}`);
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$provider$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["JsonRpcProvider"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$http$2d$connection$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](p, z("disableProviderPing")));
    }
}
class iv {
    constructor(u){
        this.name = "multiversx", this.namespace = u.namespace, this.events = z("events"), this.client = z("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
    }
    updateNamespace(u) {
        this.namespace = Object.assign(this.namespace, u);
    }
    requestAccounts() {
        return this.getAccounts();
    }
    request(u) {
        return this.namespace.methods.includes(u.request.method) ? this.client.request(u) : this.getHttpProvider().request(u.request);
    }
    setDefaultChain(u, i) {
        this.httpProviders[u] || this.setHttpProvider(u, i), this.chainId = u, this.events.emit(Vn.DEFAULT_CHAIN_CHANGED, `${this.name}:${u}`);
    }
    getDefaultChain() {
        if (this.chainId) return this.chainId;
        if (this.namespace.defaultChain) return this.namespace.defaultChain;
        const u = this.namespace.chains[0];
        if (!u) throw new Error("ChainId not found");
        return u.split(":")[1];
    }
    getAccounts() {
        const u = this.namespace.accounts;
        return u ? [
            ...new Set(u.filter((i)=>i.split(":")[1] === this.chainId.toString()).map((i)=>i.split(":")[2]))
        ] : [];
    }
    createHttpProviders() {
        const u = {};
        return this.namespace.chains.forEach((i)=>{
            var p;
            const w = Ct(i);
            u[w] = this.createHttpProvider(w, (p = this.namespace.rpcMap) == null ? void 0 : p[i]);
        }), u;
    }
    getHttpProvider() {
        const u = `${this.name}:${this.chainId}`, i = this.httpProviders[u];
        if (typeof i > "u") throw new Error(`JSON-RPC provider for ${u} not found`);
        return i;
    }
    setHttpProvider(u, i) {
        const p = this.createHttpProvider(u, i);
        p && (this.httpProviders[u] = p);
    }
    createHttpProvider(u, i) {
        const p = i || ft(u, this.namespace, this.client.core.projectId);
        if (!p) throw new Error(`No RPC url provided for chainId: ${u}`);
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$provider$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["JsonRpcProvider"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$http$2d$connection$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](p, z("disableProviderPing")));
    }
}
class sv {
    constructor(u){
        this.name = "near", this.namespace = u.namespace, this.events = z("events"), this.client = z("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
    }
    updateNamespace(u) {
        this.namespace = Object.assign(this.namespace, u);
    }
    requestAccounts() {
        return this.getAccounts();
    }
    getDefaultChain() {
        if (this.chainId) return this.chainId;
        if (this.namespace.defaultChain) return this.namespace.defaultChain;
        const u = this.namespace.chains[0];
        if (!u) throw new Error("ChainId not found");
        return u.split(":")[1];
    }
    request(u) {
        return this.namespace.methods.includes(u.request.method) ? this.client.request(u) : this.getHttpProvider().request(u.request);
    }
    setDefaultChain(u, i) {
        if (this.chainId = u, !this.httpProviders[u]) {
            const p = i || ft(`${this.name}:${u}`, this.namespace);
            if (!p) throw new Error(`No RPC url provided for chainId: ${u}`);
            this.setHttpProvider(u, p);
        }
        this.events.emit(Vn.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`);
    }
    getAccounts() {
        const u = this.namespace.accounts;
        return u ? u.filter((i)=>i.split(":")[1] === this.chainId.toString()).map((i)=>i.split(":")[2]) || [] : [];
    }
    createHttpProviders() {
        const u = {};
        return this.namespace.chains.forEach((i)=>{
            var p;
            u[i] = this.createHttpProvider(i, (p = this.namespace.rpcMap) == null ? void 0 : p[i]);
        }), u;
    }
    getHttpProvider() {
        const u = `${this.name}:${this.chainId}`, i = this.httpProviders[u];
        if (typeof i > "u") throw new Error(`JSON-RPC provider for ${u} not found`);
        return i;
    }
    setHttpProvider(u, i) {
        const p = this.createHttpProvider(u, i);
        p && (this.httpProviders[u] = p);
    }
    createHttpProvider(u, i) {
        const p = i || ft(u, this.namespace);
        return typeof p > "u" ? void 0 : new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$provider$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["JsonRpcProvider"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$http$2d$connection$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](p, z("disableProviderPing")));
    }
}
var uv = Object.defineProperty, av = Object.defineProperties, ov = Object.getOwnPropertyDescriptors, La = Object.getOwnPropertySymbols, fv = Object.prototype.hasOwnProperty, cv = Object.prototype.propertyIsEnumerable, Da = (A, u, i)=>u in A ? uv(A, u, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: i
    }) : A[u] = i, hr = (A, u)=>{
    for(var i in u || (u = {}))fv.call(u, i) && Da(A, i, u[i]);
    if (La) for (var i of La(u))cv.call(u, i) && Da(A, i, u[i]);
    return A;
}, qi = (A, u)=>av(A, ov(u));
class lr {
    constructor(u){
        this.events = new __TURBOPACK__commonjs__external__events__["default"], this.rpcProviders = {}, this.shouldAbortPairingAttempt = !1, this.maxPairingAttempts = 10, this.disableProviderPing = !1, this.providerOpts = u, this.logger = typeof u?.logger < "u" && typeof u?.logger != "string" ? u.logger : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pino$2f$pino$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__pino$3e$__["pino"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$logger$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getDefaultLoggerOptions"])({
            level: u?.logger || xa
        })), this.disableProviderPing = u?.disableProviderPing || !1;
    }
    static async init(u) {
        const i = new lr(u);
        return await i.initialize(), i;
    }
    async request(u, i, p) {
        const [w, b] = this.validateChain(i);
        if (!this.session) throw new Error("Please call connect() before request()");
        return await this.getProvider(w).request({
            request: hr({}, u),
            chainId: `${w}:${b}`,
            topic: this.session.topic,
            expiry: p
        });
    }
    sendAsync(u, i, p, w) {
        const b = new Date().getTime();
        this.request(u, p, w).then((D)=>i(null, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatJsonRpcResult"])(b, D))).catch((D)=>i(D, void 0));
    }
    async enable() {
        if (!this.client) throw new Error("Sign Client not initialized");
        return this.session || await this.connect({
            namespaces: this.namespaces,
            optionalNamespaces: this.optionalNamespaces,
            sessionProperties: this.sessionProperties
        }), await this.requestAccounts();
    }
    async disconnect() {
        var u;
        if (!this.session) throw new Error("Please call connect() before enable()");
        await this.client.disconnect({
            topic: (u = this.session) == null ? void 0 : u.topic,
            reason: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSdkError"])("USER_DISCONNECTED")
        }), await this.cleanup();
    }
    async connect(u) {
        if (!this.client) throw new Error("Sign Client not initialized");
        if (this.setNamespaces(u), await this.cleanupPendingPairings(), !u.skipPairing) return await this.pair(u.pairingTopic);
    }
    async authenticate(u) {
        if (!this.client) throw new Error("Sign Client not initialized");
        this.setNamespaces(u), await this.cleanupPendingPairings();
        const { uri: i, response: p } = await this.client.authenticate(u);
        i && (this.uri = i, this.events.emit("display_uri", i));
        const w = await p();
        if (this.session = w.session, this.session) {
            const b = ba(this.session.namespaces);
            this.namespaces = Wi(this.namespaces, b), this.persist("namespaces", this.namespaces), this.onConnect();
        }
        return w;
    }
    on(u, i) {
        this.events.on(u, i);
    }
    once(u, i) {
        this.events.once(u, i);
    }
    removeListener(u, i) {
        this.events.removeListener(u, i);
    }
    off(u, i) {
        this.events.off(u, i);
    }
    get isWalletConnect() {
        return !0;
    }
    async pair(u) {
        this.shouldAbortPairingAttempt = !1;
        let i = 0;
        do {
            if (this.shouldAbortPairingAttempt) throw new Error("Pairing aborted");
            if (i >= this.maxPairingAttempts) throw new Error("Max auto pairing attempts reached");
            const { uri: p, approval: w } = await this.client.connect({
                pairingTopic: u,
                requiredNamespaces: this.namespaces,
                optionalNamespaces: this.optionalNamespaces,
                sessionProperties: this.sessionProperties
            });
            p && (this.uri = p, this.events.emit("display_uri", p)), await w().then((b)=>{
                this.session = b;
                const D = ba(b.namespaces);
                this.namespaces = Wi(this.namespaces, D), this.persist("namespaces", this.namespaces);
            }).catch((b)=>{
                if (b.message !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$sign$2d$client$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PROPOSAL_EXPIRY_MESSAGE"]) throw b;
                i++;
            });
        }while (!this.session)
        return this.onConnect(), this.session;
    }
    setDefaultChain(u, i) {
        try {
            if (!this.session) return;
            const [p, w] = this.validateChain(u);
            this.getProvider(p).setDefaultChain(w, i);
        } catch (p) {
            if (!/Please call connect/.test(p.message)) throw p;
        }
    }
    async cleanupPendingPairings(u = {}) {
        this.logger.info("Cleaning up inactive pairings...");
        const i = this.client.pairing.getAll();
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValidArray"])(i)) {
            for (const p of i)u.deletePairings ? this.client.core.expirer.set(p.topic, 0) : await this.client.core.relayer.subscriber.unsubscribe(p.topic);
            this.logger.info(`Inactive pairings cleared: ${i.length}`);
        }
    }
    abortPairingAttempt() {
        this.shouldAbortPairingAttempt = !0;
    }
    async checkStorage() {
        if (this.namespaces = await this.getFromStore("namespaces"), this.optionalNamespaces = await this.getFromStore("optionalNamespaces") || {}, this.client.session.length) {
            const u = this.client.session.keys.length - 1;
            this.session = this.client.session.get(this.client.session.keys[u]), this.createProviders();
        }
    }
    async initialize() {
        this.logger.trace("Initialized"), await this.createClient(), await this.checkStorage(), this.registerEventListeners();
    }
    async createClient() {
        this.client = this.providerOpts.client || await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$sign$2d$client$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].init({
            logger: this.providerOpts.logger || xa,
            relayUrl: this.providerOpts.relayUrl || Mg,
            projectId: this.providerOpts.projectId,
            metadata: this.providerOpts.metadata,
            storageOptions: this.providerOpts.storageOptions,
            storage: this.providerOpts.storage,
            name: this.providerOpts.name
        }), this.logger.trace("SignClient Initialized");
    }
    createProviders() {
        if (!this.client) throw new Error("Sign Client not initialized");
        if (!this.session) throw new Error("Session not initialized. Please call connect() before enable()");
        const u = [
            ...new Set(Object.keys(this.session.namespaces).map((i)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseNamespaceKey"])(i)))
        ];
        Mi("client", this.client), Mi("events", this.events), Mi("disableProviderPing", this.disableProviderPing), u.forEach((i)=>{
            if (!this.session) return;
            const p = Qg(i, this.session), w = Oa(p), b = Wi(this.namespaces, this.optionalNamespaces), D = qi(hr({}, b[i]), {
                accounts: p,
                chains: w
            });
            switch(i){
                case "eip155":
                    this.rpcProviders[i] = new jg({
                        namespace: D
                    });
                    break;
                case "solana":
                    this.rpcProviders[i] = new nv({
                        namespace: D
                    });
                    break;
                case "cosmos":
                    this.rpcProviders[i] = new tv({
                        namespace: D
                    });
                    break;
                case "polkadot":
                    this.rpcProviders[i] = new kg({
                        namespace: D
                    });
                    break;
                case "cip34":
                    this.rpcProviders[i] = new ev({
                        namespace: D
                    });
                    break;
                case "elrond":
                    this.rpcProviders[i] = new rv({
                        namespace: D
                    });
                    break;
                case "multiversx":
                    this.rpcProviders[i] = new iv({
                        namespace: D
                    });
                    break;
                case "near":
                    this.rpcProviders[i] = new sv({
                        namespace: D
                    });
                    break;
            }
        });
    }
    registerEventListeners() {
        if (typeof this.client > "u") throw new Error("Sign Client is not initialized");
        this.client.on("session_ping", (u)=>{
            this.events.emit("session_ping", u);
        }), this.client.on("session_event", (u)=>{
            const { params: i } = u, { event: p } = i;
            if (p.name === "accountsChanged") {
                const w = p.data;
                w && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValidArray"])(w) && this.events.emit("accountsChanged", w.map(Vg));
            } else if (p.name === "chainChanged") {
                const w = i.chainId, b = i.event.data, D = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseNamespaceKey"])(w), En = Fi(w) !== Fi(b) ? `${D}:${Fi(b)}` : w;
                this.onChainChanged(En);
            } else this.events.emit(p.name, p.data);
            this.events.emit("session_event", u);
        }), this.client.on("session_update", ({ topic: u, params: i })=>{
            var p;
            const { namespaces: w } = i, b = (p = this.client) == null ? void 0 : p.session.get(u);
            this.session = qi(hr({}, b), {
                namespaces: w
            }), this.onSessionUpdate(), this.events.emit("session_update", {
                topic: u,
                params: i
            });
        }), this.client.on("session_delete", async (u)=>{
            await this.cleanup(), this.events.emit("session_delete", u), this.events.emit("disconnect", qi(hr({}, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSdkError"])("USER_DISCONNECTED")), {
                data: u.topic
            }));
        }), this.on(Vn.DEFAULT_CHAIN_CHANGED, (u)=>{
            this.onChainChanged(u, !0);
        });
    }
    getProvider(u) {
        if (!this.rpcProviders[u]) throw new Error(`Provider not found: ${u}`);
        return this.rpcProviders[u];
    }
    onSessionUpdate() {
        Object.keys(this.rpcProviders).forEach((u)=>{
            var i;
            this.getProvider(u).updateNamespace((i = this.session) == null ? void 0 : i.namespaces[u]);
        });
    }
    setNamespaces(u) {
        const { namespaces: i, optionalNamespaces: p, sessionProperties: w } = u;
        i && Object.keys(i).length && (this.namespaces = i), p && Object.keys(p).length && (this.optionalNamespaces = p), this.sessionProperties = w, this.persist("namespaces", i), this.persist("optionalNamespaces", p);
    }
    validateChain(u) {
        const [i, p] = u?.split(":") || [
            "",
            ""
        ];
        if (!this.namespaces || !Object.keys(this.namespaces).length) return [
            i,
            p
        ];
        if (i && !Object.keys(this.namespaces || {}).map((D)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseNamespaceKey"])(D)).includes(i)) throw new Error(`Namespace '${i}' is not configured. Please call connect() first with namespace config.`);
        if (i && p) return [
            i,
            p
        ];
        const w = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseNamespaceKey"])(Object.keys(this.namespaces)[0]), b = this.rpcProviders[w].getDefaultChain();
        return [
            w,
            b
        ];
    }
    async requestAccounts() {
        const [u] = this.validateChain();
        return await this.getProvider(u).requestAccounts();
    }
    onChainChanged(u, i = !1) {
        if (!this.namespaces) return;
        const [p, w] = this.validateChain(u);
        w && (i || this.getProvider(p).setDefaultChain(w), this.namespaces[p] ? this.namespaces[p].defaultChain = w : this.namespaces[`${p}:${w}`] ? this.namespaces[`${p}:${w}`].defaultChain = w : this.namespaces[`${p}:${w}`] = {
            defaultChain: w
        }, this.persist("namespaces", this.namespaces), this.events.emit("chainChanged", w));
    }
    onConnect() {
        this.createProviders(), this.events.emit("connect", {
            session: this.session
        });
    }
    async cleanup() {
        this.session = void 0, this.namespaces = void 0, this.optionalNamespaces = void 0, this.sessionProperties = void 0, this.persist("namespaces", void 0), this.persist("optionalNamespaces", void 0), this.persist("sessionProperties", void 0), await this.cleanupPendingPairings({
            deletePairings: !0
        });
    }
    persist(u, i) {
        this.client.core.storage.setItem(`${Ea}/${u}`, i);
    }
    async getFromStore(u) {
        return await this.client.core.storage.getItem(`${Ea}/${u}`);
    }
}
const hv = lr;
;
 //# sourceMappingURL=index.es.js.map

})()),

};

//# sourceMappingURL=1b84e_%40walletconnect_universal-provider_dist_index_es_cfbb8b.js.map