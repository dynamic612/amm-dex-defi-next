module.exports = {

"[project]/node_modules/@web3modal/wagmi/node_modules/@walletconnect/core/dist/index.es.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "CORE_CONTEXT": ()=>Z,
    "CORE_DEFAULT": ()=>Ze,
    "CORE_PROTOCOL": ()=>De,
    "CORE_STORAGE_OPTIONS": ()=>et,
    "CORE_STORAGE_PREFIX": ()=>z,
    "CORE_VERSION": ()=>Qe,
    "CRYPTO_CLIENT_SEED": ()=>ye,
    "CRYPTO_CONTEXT": ()=>tt,
    "CRYPTO_JWT_TTL": ()=>it,
    "Core": ()=>Br,
    "Crypto": ()=>Ot,
    "ECHO_CONTEXT": ()=>St,
    "ECHO_URL": ()=>Pt,
    "EXPIRER_CONTEXT": ()=>Tt,
    "EXPIRER_DEFAULT_TTL": ()=>wr,
    "EXPIRER_EVENTS": ()=>C,
    "EXPIRER_STORAGE_VERSION": ()=>_t,
    "EchoClient": ()=>Yt,
    "Expirer": ()=>jt,
    "HISTORY_CONTEXT": ()=>It,
    "HISTORY_EVENTS": ()=>I,
    "HISTORY_STORAGE_VERSION": ()=>Ct,
    "JsonRpcHistory": ()=>qt,
    "KEYCHAIN_CONTEXT": ()=>st,
    "KEYCHAIN_STORAGE_VERSION": ()=>rt,
    "KeyChain": ()=>xt,
    "MESSAGES_CONTEXT": ()=>nt,
    "MESSAGES_STORAGE_VERSION": ()=>ot,
    "MessageTracker": ()=>At,
    "PAIRING_CONTEXT": ()=>wt,
    "PAIRING_DEFAULT_TTL": ()=>Er,
    "PAIRING_EVENTS": ()=>q,
    "PAIRING_RPC_OPTS": ()=>B,
    "PAIRING_STORAGE_VERSION": ()=>vt,
    "PENDING_SUB_RESOLUTION_TIMEOUT": ()=>Et,
    "PUBLISHER_CONTEXT": ()=>ht,
    "PUBLISHER_DEFAULT_TTL": ()=>at,
    "Pairing": ()=>Vt,
    "RELAYER_CONTEXT": ()=>ut,
    "RELAYER_DEFAULT_LOGGER": ()=>lt,
    "RELAYER_DEFAULT_PROTOCOL": ()=>ct,
    "RELAYER_DEFAULT_RELAY_URL": ()=>me,
    "RELAYER_EVENTS": ()=>f,
    "RELAYER_FAILOVER_RELAY_URL": ()=>be,
    "RELAYER_PROVIDER_EVENTS": ()=>E,
    "RELAYER_RECONNECT_TIMEOUT": ()=>gt,
    "RELAYER_SDK_VERSION": ()=>pt,
    "RELAYER_STORAGE_OPTIONS": ()=>br,
    "RELAYER_SUBSCRIBER_SUFFIX": ()=>dt,
    "RELAYER_TRANSPORT_CUTOFF": ()=>Dt,
    "Relayer": ()=>$t,
    "STORE_STORAGE_VERSION": ()=>yt,
    "SUBSCRIBER_CONTEXT": ()=>bt,
    "SUBSCRIBER_DEFAULT_TTL": ()=>fr,
    "SUBSCRIBER_EVENTS": ()=>S,
    "SUBSCRIBER_STORAGE_VERSION": ()=>ft,
    "Store": ()=>Kt,
    "Subscriber": ()=>Lt,
    "TRUSTED_VERIFY_URLS": ()=>Rt,
    "VERIFY_CONTEXT": ()=>ee,
    "VERIFY_FALLBACK_SERVER": ()=>te,
    "VERIFY_SERVER": ()=>M,
    "Verify": ()=>Gt,
    "WALLETCONNECT_CLIENT_ID": ()=>mt,
    "default": ()=>ie
});
var __TURBOPACK__commonjs__external__events__ = __turbopack_external_require__("events", true);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$keyvaluestorage$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@walletconnect/keyvaluestorage/dist/index.es.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$heartbeat$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@walletconnect/heartbeat/dist/index.es.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$logger$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@walletconnect/logger/dist/index.es.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$logger$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/@walletconnect/logger/dist/index.es.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pino$2f$pino$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__pino$3e$__ = __turbopack_import__("[project]/node_modules/pino/pino.js [app-ssr] (ecmascript) <export default as pino>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$types$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@web3modal/wagmi/node_modules/@walletconnect/types/dist/index.es.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$safe$2d$json$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@walletconnect/safe-json/dist/esm/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$relay$2d$auth$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@walletconnect/relay-auth/dist/esm/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$relay$2d$auth$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$facade$3e$__ = __turbopack_import__("[project]/node_modules/@walletconnect/relay-auth/dist/esm/index.js [app-ssr] (ecmascript) <facade>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@web3modal/wagmi/node_modules/@walletconnect/utils/dist/index.es.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/uint8arrays/esm/src/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$to$2d$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/uint8arrays/esm/src/to-string.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@walletconnect/time/dist/cjs/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$provider$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@walletconnect/jsonrpc-provider/dist/index.es.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@walletconnect/jsonrpc-utils/dist/esm/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@walletconnect/jsonrpc-utils/dist/esm/format.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$validators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@walletconnect/jsonrpc-utils/dist/esm/validators.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$ws$2d$connection$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@walletconnect/jsonrpc-ws-connection/dist/index.es.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lodash$2e$isequal$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/lodash.isequal/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$isomorphic$2d$unfetch$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/isomorphic-unfetch/index.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
function Hi(o, e) {
    if (o.length >= 255) throw new TypeError("Alphabet too long");
    for(var t = new Uint8Array(256), i = 0; i < t.length; i++)t[i] = 255;
    for(var s = 0; s < o.length; s++){
        var r = o.charAt(s), n = r.charCodeAt(0);
        if (t[n] !== 255) throw new TypeError(r + " is ambiguous");
        t[n] = s;
    }
    var a = o.length, h = o.charAt(0), l = Math.log(a) / Math.log(256), d = Math.log(256) / Math.log(a);
    function g(u) {
        if (u instanceof Uint8Array || (ArrayBuffer.isView(u) ? u = new Uint8Array(u.buffer, u.byteOffset, u.byteLength) : Array.isArray(u) && (u = Uint8Array.from(u))), !(u instanceof Uint8Array)) throw new TypeError("Expected Uint8Array");
        if (u.length === 0) return "";
        for(var p = 0, T = 0, D = 0, P = u.length; D !== P && u[D] === 0;)D++, p++;
        for(var x = (P - D) * d + 1 >>> 0, w = new Uint8Array(x); D !== P;){
            for(var O = u[D], N = 0, _ = x - 1; (O !== 0 || N < T) && _ !== -1; _--, N++)O += 256 * w[_] >>> 0, w[_] = O % a >>> 0, O = O / a >>> 0;
            if (O !== 0) throw new Error("Non-zero carry");
            T = N, D++;
        }
        for(var A = x - T; A !== x && w[A] === 0;)A++;
        for(var G = h.repeat(p); A < x; ++A)G += o.charAt(w[A]);
        return G;
    }
    function m(u) {
        if (typeof u != "string") throw new TypeError("Expected String");
        if (u.length === 0) return new Uint8Array;
        var p = 0;
        if (u[p] !== " ") {
            for(var T = 0, D = 0; u[p] === h;)T++, p++;
            for(var P = (u.length - p) * l + 1 >>> 0, x = new Uint8Array(P); u[p];){
                var w = t[u.charCodeAt(p)];
                if (w === 255) return;
                for(var O = 0, N = P - 1; (w !== 0 || O < D) && N !== -1; N--, O++)w += a * x[N] >>> 0, x[N] = w % 256 >>> 0, w = w / 256 >>> 0;
                if (w !== 0) throw new Error("Non-zero carry");
                D = O, p++;
            }
            if (u[p] !== " ") {
                for(var _ = P - D; _ !== P && x[_] === 0;)_++;
                for(var A = new Uint8Array(T + (P - _)), G = T; _ !== P;)A[G++] = x[_++];
                return A;
            }
        }
    }
    function L(u) {
        var p = m(u);
        if (p) return p;
        throw new Error(`Non-${e} character`);
    }
    return {
        encode: g,
        decodeUnsafe: m,
        decode: L
    };
}
var Ji = Hi, Xi = Ji;
const Ue = (o)=>{
    if (o instanceof Uint8Array && o.constructor.name === "Uint8Array") return o;
    if (o instanceof ArrayBuffer) return new Uint8Array(o);
    if (ArrayBuffer.isView(o)) return new Uint8Array(o.buffer, o.byteOffset, o.byteLength);
    throw new Error("Unknown type, must be binary type");
}, Wi = (o)=>new TextEncoder().encode(o), Qi = (o)=>new TextDecoder().decode(o);
class Zi {
    constructor(e, t, i){
        this.name = e, this.prefix = t, this.baseEncode = i;
    }
    encode(e) {
        if (e instanceof Uint8Array) return `${this.prefix}${this.baseEncode(e)}`;
        throw Error("Unknown type, must be binary type");
    }
}
class es {
    constructor(e, t, i){
        if (this.name = e, this.prefix = t, t.codePointAt(0) === void 0) throw new Error("Invalid prefix character");
        this.prefixCodePoint = t.codePointAt(0), this.baseDecode = i;
    }
    decode(e) {
        if (typeof e == "string") {
            if (e.codePointAt(0) !== this.prefixCodePoint) throw Error(`Unable to decode multibase string ${JSON.stringify(e)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);
            return this.baseDecode(e.slice(this.prefix.length));
        } else throw Error("Can only multibase decode strings");
    }
    or(e) {
        return Fe(this, e);
    }
}
class ts {
    constructor(e){
        this.decoders = e;
    }
    or(e) {
        return Fe(this, e);
    }
    decode(e) {
        const t = e[0], i = this.decoders[t];
        if (i) return i.decode(e);
        throw RangeError(`Unable to decode multibase string ${JSON.stringify(e)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`);
    }
}
const Fe = (o, e)=>new ts({
        ...o.decoders || {
            [o.prefix]: o
        },
        ...e.decoders || {
            [e.prefix]: e
        }
    });
class is {
    constructor(e, t, i, s){
        this.name = e, this.prefix = t, this.baseEncode = i, this.baseDecode = s, this.encoder = new Zi(e, t, i), this.decoder = new es(e, t, s);
    }
    encode(e) {
        return this.encoder.encode(e);
    }
    decode(e) {
        return this.decoder.decode(e);
    }
}
const Q = ({ name: o, prefix: e, encode: t, decode: i })=>new is(o, e, t, i), V = ({ prefix: o, name: e, alphabet: t })=>{
    const { encode: i, decode: s } = Xi(t, e);
    return Q({
        prefix: o,
        name: e,
        encode: i,
        decode: (r)=>Ue(s(r))
    });
}, ss = (o, e, t, i)=>{
    const s = {};
    for(let d = 0; d < e.length; ++d)s[e[d]] = d;
    let r = o.length;
    for(; o[r - 1] === "=";)--r;
    const n = new Uint8Array(r * t / 8 | 0);
    let a = 0, h = 0, l = 0;
    for(let d = 0; d < r; ++d){
        const g = s[o[d]];
        if (g === void 0) throw new SyntaxError(`Non-${i} character`);
        h = h << t | g, a += t, a >= 8 && (a -= 8, n[l++] = 255 & h >> a);
    }
    if (a >= t || 255 & h << 8 - a) throw new SyntaxError("Unexpected end of data");
    return n;
}, rs = (o, e, t)=>{
    const i = e[e.length - 1] === "=", s = (1 << t) - 1;
    let r = "", n = 0, a = 0;
    for(let h = 0; h < o.length; ++h)for(a = a << 8 | o[h], n += 8; n > t;)n -= t, r += e[s & a >> n];
    if (n && (r += e[s & a << t - n]), i) for(; r.length * t & 7;)r += "=";
    return r;
}, y = ({ name: o, prefix: e, bitsPerChar: t, alphabet: i })=>Q({
        prefix: e,
        name: o,
        encode (s) {
            return rs(s, i, t);
        },
        decode (s) {
            return ss(s, i, t, o);
        }
    }), ns = Q({
    prefix: "\0",
    name: "identity",
    encode: (o)=>Qi(o),
    decode: (o)=>Wi(o)
});
var os = Object.freeze({
    __proto__: null,
    identity: ns
});
const as = y({
    prefix: "0",
    name: "base2",
    alphabet: "01",
    bitsPerChar: 1
});
var hs = Object.freeze({
    __proto__: null,
    base2: as
});
const cs = y({
    prefix: "7",
    name: "base8",
    alphabet: "01234567",
    bitsPerChar: 3
});
var ls = Object.freeze({
    __proto__: null,
    base8: cs
});
const us = V({
    prefix: "9",
    name: "base10",
    alphabet: "0123456789"
});
var ds = Object.freeze({
    __proto__: null,
    base10: us
});
const gs = y({
    prefix: "f",
    name: "base16",
    alphabet: "0123456789abcdef",
    bitsPerChar: 4
}), ps = y({
    prefix: "F",
    name: "base16upper",
    alphabet: "0123456789ABCDEF",
    bitsPerChar: 4
});
var Ds = Object.freeze({
    __proto__: null,
    base16: gs,
    base16upper: ps
});
const ys = y({
    prefix: "b",
    name: "base32",
    alphabet: "abcdefghijklmnopqrstuvwxyz234567",
    bitsPerChar: 5
}), ms = y({
    prefix: "B",
    name: "base32upper",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
    bitsPerChar: 5
}), bs = y({
    prefix: "c",
    name: "base32pad",
    alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
    bitsPerChar: 5
}), fs = y({
    prefix: "C",
    name: "base32padupper",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
    bitsPerChar: 5
}), Es = y({
    prefix: "v",
    name: "base32hex",
    alphabet: "0123456789abcdefghijklmnopqrstuv",
    bitsPerChar: 5
}), ws = y({
    prefix: "V",
    name: "base32hexupper",
    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
    bitsPerChar: 5
}), vs = y({
    prefix: "t",
    name: "base32hexpad",
    alphabet: "0123456789abcdefghijklmnopqrstuv=",
    bitsPerChar: 5
}), Is = y({
    prefix: "T",
    name: "base32hexpadupper",
    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
    bitsPerChar: 5
}), Cs = y({
    prefix: "h",
    name: "base32z",
    alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
    bitsPerChar: 5
});
var Ts = Object.freeze({
    __proto__: null,
    base32: ys,
    base32upper: ms,
    base32pad: bs,
    base32padupper: fs,
    base32hex: Es,
    base32hexupper: ws,
    base32hexpad: vs,
    base32hexpadupper: Is,
    base32z: Cs
});
const _s = V({
    prefix: "k",
    name: "base36",
    alphabet: "0123456789abcdefghijklmnopqrstuvwxyz"
}), Rs = V({
    prefix: "K",
    name: "base36upper",
    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
});
var Ss = Object.freeze({
    __proto__: null,
    base36: _s,
    base36upper: Rs
});
const Ps = V({
    name: "base58btc",
    prefix: "z",
    alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
}), xs = V({
    name: "base58flickr",
    prefix: "Z",
    alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"
});
var Os = Object.freeze({
    __proto__: null,
    base58btc: Ps,
    base58flickr: xs
});
const As = y({
    prefix: "m",
    name: "base64",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
    bitsPerChar: 6
}), zs = y({
    prefix: "M",
    name: "base64pad",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    bitsPerChar: 6
}), Ns = y({
    prefix: "u",
    name: "base64url",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
    bitsPerChar: 6
}), Ls = y({
    prefix: "U",
    name: "base64urlpad",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
    bitsPerChar: 6
});
var Us = Object.freeze({
    __proto__: null,
    base64: As,
    base64pad: zs,
    base64url: Ns,
    base64urlpad: Ls
});
const $e = Array.from("\u{1F680}\u{1FA90}\u2604\u{1F6F0}\u{1F30C}\u{1F311}\u{1F312}\u{1F313}\u{1F314}\u{1F315}\u{1F316}\u{1F317}\u{1F318}\u{1F30D}\u{1F30F}\u{1F30E}\u{1F409}\u2600\u{1F4BB}\u{1F5A5}\u{1F4BE}\u{1F4BF}\u{1F602}\u2764\u{1F60D}\u{1F923}\u{1F60A}\u{1F64F}\u{1F495}\u{1F62D}\u{1F618}\u{1F44D}\u{1F605}\u{1F44F}\u{1F601}\u{1F525}\u{1F970}\u{1F494}\u{1F496}\u{1F499}\u{1F622}\u{1F914}\u{1F606}\u{1F644}\u{1F4AA}\u{1F609}\u263A\u{1F44C}\u{1F917}\u{1F49C}\u{1F614}\u{1F60E}\u{1F607}\u{1F339}\u{1F926}\u{1F389}\u{1F49E}\u270C\u2728\u{1F937}\u{1F631}\u{1F60C}\u{1F338}\u{1F64C}\u{1F60B}\u{1F497}\u{1F49A}\u{1F60F}\u{1F49B}\u{1F642}\u{1F493}\u{1F929}\u{1F604}\u{1F600}\u{1F5A4}\u{1F603}\u{1F4AF}\u{1F648}\u{1F447}\u{1F3B6}\u{1F612}\u{1F92D}\u2763\u{1F61C}\u{1F48B}\u{1F440}\u{1F62A}\u{1F611}\u{1F4A5}\u{1F64B}\u{1F61E}\u{1F629}\u{1F621}\u{1F92A}\u{1F44A}\u{1F973}\u{1F625}\u{1F924}\u{1F449}\u{1F483}\u{1F633}\u270B\u{1F61A}\u{1F61D}\u{1F634}\u{1F31F}\u{1F62C}\u{1F643}\u{1F340}\u{1F337}\u{1F63B}\u{1F613}\u2B50\u2705\u{1F97A}\u{1F308}\u{1F608}\u{1F918}\u{1F4A6}\u2714\u{1F623}\u{1F3C3}\u{1F490}\u2639\u{1F38A}\u{1F498}\u{1F620}\u261D\u{1F615}\u{1F33A}\u{1F382}\u{1F33B}\u{1F610}\u{1F595}\u{1F49D}\u{1F64A}\u{1F639}\u{1F5E3}\u{1F4AB}\u{1F480}\u{1F451}\u{1F3B5}\u{1F91E}\u{1F61B}\u{1F534}\u{1F624}\u{1F33C}\u{1F62B}\u26BD\u{1F919}\u2615\u{1F3C6}\u{1F92B}\u{1F448}\u{1F62E}\u{1F646}\u{1F37B}\u{1F343}\u{1F436}\u{1F481}\u{1F632}\u{1F33F}\u{1F9E1}\u{1F381}\u26A1\u{1F31E}\u{1F388}\u274C\u270A\u{1F44B}\u{1F630}\u{1F928}\u{1F636}\u{1F91D}\u{1F6B6}\u{1F4B0}\u{1F353}\u{1F4A2}\u{1F91F}\u{1F641}\u{1F6A8}\u{1F4A8}\u{1F92C}\u2708\u{1F380}\u{1F37A}\u{1F913}\u{1F619}\u{1F49F}\u{1F331}\u{1F616}\u{1F476}\u{1F974}\u25B6\u27A1\u2753\u{1F48E}\u{1F4B8}\u2B07\u{1F628}\u{1F31A}\u{1F98B}\u{1F637}\u{1F57A}\u26A0\u{1F645}\u{1F61F}\u{1F635}\u{1F44E}\u{1F932}\u{1F920}\u{1F927}\u{1F4CC}\u{1F535}\u{1F485}\u{1F9D0}\u{1F43E}\u{1F352}\u{1F617}\u{1F911}\u{1F30A}\u{1F92F}\u{1F437}\u260E\u{1F4A7}\u{1F62F}\u{1F486}\u{1F446}\u{1F3A4}\u{1F647}\u{1F351}\u2744\u{1F334}\u{1F4A3}\u{1F438}\u{1F48C}\u{1F4CD}\u{1F940}\u{1F922}\u{1F445}\u{1F4A1}\u{1F4A9}\u{1F450}\u{1F4F8}\u{1F47B}\u{1F910}\u{1F92E}\u{1F3BC}\u{1F975}\u{1F6A9}\u{1F34E}\u{1F34A}\u{1F47C}\u{1F48D}\u{1F4E3}\u{1F942}"), Fs = $e.reduce((o, e, t)=>(o[t] = e, o), []), $s = $e.reduce((o, e, t)=>(o[e.codePointAt(0)] = t, o), []);
function Bs(o) {
    return o.reduce((e, t)=>(e += Fs[t], e), "");
}
function Ms(o) {
    const e = [];
    for (const t of o){
        const i = $s[t.codePointAt(0)];
        if (i === void 0) throw new Error(`Non-base256emoji character: ${t}`);
        e.push(i);
    }
    return new Uint8Array(e);
}
const ks = Q({
    prefix: "\u{1F680}",
    name: "base256emoji",
    encode: Bs,
    decode: Ms
});
var Ks = Object.freeze({
    __proto__: null,
    base256emoji: ks
}), Vs = Me, Be = 128, qs = 127, js = ~qs, Gs = Math.pow(2, 31);
function Me(o, e, t) {
    e = e || [], t = t || 0;
    for(var i = t; o >= Gs;)e[t++] = o & 255 | Be, o /= 128;
    for(; o & js;)e[t++] = o & 255 | Be, o >>>= 7;
    return e[t] = o | 0, Me.bytes = t - i + 1, e;
}
var Ys = de, Hs = 128, ke = 127;
function de(o, i) {
    var t = 0, i = i || 0, s = 0, r = i, n, a = o.length;
    do {
        if (r >= a) throw de.bytes = 0, new RangeError("Could not decode varint");
        n = o[r++], t += s < 28 ? (n & ke) << s : (n & ke) * Math.pow(2, s), s += 7;
    }while (n >= Hs)
    return de.bytes = r - i, t;
}
var Js = Math.pow(2, 7), Xs = Math.pow(2, 14), Ws = Math.pow(2, 21), Qs = Math.pow(2, 28), Zs = Math.pow(2, 35), er = Math.pow(2, 42), tr = Math.pow(2, 49), ir = Math.pow(2, 56), sr = Math.pow(2, 63), rr = function(o) {
    return o < Js ? 1 : o < Xs ? 2 : o < Ws ? 3 : o < Qs ? 4 : o < Zs ? 5 : o < er ? 6 : o < tr ? 7 : o < ir ? 8 : o < sr ? 9 : 10;
}, nr = {
    encode: Vs,
    decode: Ys,
    encodingLength: rr
}, Ke = nr;
const Ve = (o, e, t = 0)=>(Ke.encode(o, e, t), e), qe = (o)=>Ke.encodingLength(o), ge = (o, e)=>{
    const t = e.byteLength, i = qe(o), s = i + qe(t), r = new Uint8Array(s + t);
    return Ve(o, r, 0), Ve(t, r, i), r.set(e, s), new or(o, t, e, r);
};
class or {
    constructor(e, t, i, s){
        this.code = e, this.size = t, this.digest = i, this.bytes = s;
    }
}
const je = ({ name: o, code: e, encode: t })=>new ar(o, e, t);
class ar {
    constructor(e, t, i){
        this.name = e, this.code = t, this.encode = i;
    }
    digest(e) {
        if (e instanceof Uint8Array) {
            const t = this.encode(e);
            return t instanceof Uint8Array ? ge(this.code, t) : t.then((i)=>ge(this.code, i));
        } else throw Error("Unknown type, must be binary type");
    }
}
const Ge = (o)=>async (e)=>new Uint8Array(await crypto.subtle.digest(o, e)), hr = je({
    name: "sha2-256",
    code: 18,
    encode: Ge("SHA-256")
}), cr = je({
    name: "sha2-512",
    code: 19,
    encode: Ge("SHA-512")
});
var lr = Object.freeze({
    __proto__: null,
    sha256: hr,
    sha512: cr
});
const Ye = 0, ur = "identity", He = Ue, dr = (o)=>ge(Ye, He(o)), gr = {
    code: Ye,
    name: ur,
    encode: He,
    digest: dr
};
var pr = Object.freeze({
    __proto__: null,
    identity: gr
});
new TextEncoder, new TextDecoder;
const Je = {
    ...os,
    ...hs,
    ...ls,
    ...ds,
    ...Ds,
    ...Ts,
    ...Ss,
    ...Os,
    ...Us,
    ...Ks
};
({
    ...lr,
    ...pr
});
function Dr(o = 0) {
    return globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null ? globalThis.Buffer.allocUnsafe(o) : new Uint8Array(o);
}
function Xe(o, e, t, i) {
    return {
        name: o,
        prefix: e,
        encoder: {
            name: o,
            prefix: e,
            encode: t
        },
        decoder: {
            decode: i
        }
    };
}
const We = Xe("utf8", "u", (o)=>"u" + new TextDecoder("utf8").decode(o), (o)=>new TextEncoder().encode(o.substring(1))), pe = Xe("ascii", "a", (o)=>{
    let e = "a";
    for(let t = 0; t < o.length; t++)e += String.fromCharCode(o[t]);
    return e;
}, (o)=>{
    o = o.substring(1);
    const e = Dr(o.length);
    for(let t = 0; t < o.length; t++)e[t] = o.charCodeAt(t);
    return e;
}), yr = {
    utf8: We,
    "utf-8": We,
    hex: Je.base16,
    latin1: pe,
    ascii: pe,
    binary: pe,
    ...Je
};
function mr(o, e = "utf8") {
    const t = yr[e];
    if (!t) throw new Error(`Unsupported encoding "${e}"`);
    return (e === "utf8" || e === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? globalThis.Buffer.from(o, "utf8") : t.decoder.decode(`${t.prefix}${o}`);
}
const De = "wc", Qe = 2, Z = "core", z = `${De}@2:${Z}:`, Ze = {
    name: Z,
    logger: "error"
}, et = {
    database: ":memory:"
}, tt = "crypto", ye = "client_ed25519_seed", it = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ONE_DAY"], st = "keychain", rt = "0.3", nt = "messages", ot = "0.3", at = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SIX_HOURS"], ht = "publisher", ct = "irn", lt = "error", me = "wss://relay.walletconnect.com", be = "wss://relay.walletconnect.org", ut = "relayer", f = {
    message: "relayer_message",
    message_ack: "relayer_message_ack",
    connect: "relayer_connect",
    disconnect: "relayer_disconnect",
    error: "relayer_error",
    connection_stalled: "relayer_connection_stalled",
    transport_closed: "relayer_transport_closed",
    publish: "relayer_publish"
}, dt = "_subscription", E = {
    payload: "payload",
    connect: "connect",
    disconnect: "disconnect",
    error: "error"
}, gt = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ONE_SECOND"], br = {
    database: ":memory:"
}, pt = "2.13.0", Dt = 1e4, yt = "0.3", mt = "WALLETCONNECT_CLIENT_ID", S = {
    created: "subscription_created",
    deleted: "subscription_deleted",
    expired: "subscription_expired",
    disabled: "subscription_disabled",
    sync: "subscription_sync",
    resubscribed: "subscription_resubscribed"
}, fr = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["THIRTY_DAYS"], bt = "subscription", ft = "0.3", Et = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FIVE_SECONDS"] * 1e3, wt = "pairing", vt = "0.3", Er = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["THIRTY_DAYS"], B = {
    wc_pairingDelete: {
        req: {
            ttl: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ONE_DAY"],
            prompt: !1,
            tag: 1e3
        },
        res: {
            ttl: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ONE_DAY"],
            prompt: !1,
            tag: 1001
        }
    },
    wc_pairingPing: {
        req: {
            ttl: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["THIRTY_SECONDS"],
            prompt: !1,
            tag: 1002
        },
        res: {
            ttl: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["THIRTY_SECONDS"],
            prompt: !1,
            tag: 1003
        }
    },
    unregistered_method: {
        req: {
            ttl: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ONE_DAY"],
            prompt: !1,
            tag: 0
        },
        res: {
            ttl: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ONE_DAY"],
            prompt: !1,
            tag: 0
        }
    }
}, q = {
    create: "pairing_create",
    expire: "pairing_expire",
    delete: "pairing_delete",
    ping: "pairing_ping"
}, I = {
    created: "history_created",
    updated: "history_updated",
    deleted: "history_deleted",
    sync: "history_sync"
}, It = "history", Ct = "0.3", Tt = "expirer", C = {
    created: "expirer_created",
    deleted: "expirer_deleted",
    expired: "expirer_expired",
    sync: "expirer_sync"
}, _t = "0.3", wr = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ONE_DAY"], ee = "verify-api", M = "https://verify.walletconnect.com", te = "https://verify.walletconnect.org", Rt = [
    M,
    te
], St = "echo", Pt = "https://echo.walletconnect.com";
class xt {
    constructor(e, t){
        this.core = e, this.logger = t, this.keychain = new Map, this.name = st, this.version = rt, this.initialized = !1, this.storagePrefix = z, this.init = async ()=>{
            if (!this.initialized) {
                const i = await this.getKeyChain();
                typeof i < "u" && (this.keychain = i), this.initialized = !0;
            }
        }, this.has = (i)=>(this.isInitialized(), this.keychain.has(i)), this.set = async (i, s)=>{
            this.isInitialized(), this.keychain.set(i, s), await this.persist();
        }, this.get = (i)=>{
            this.isInitialized();
            const s = this.keychain.get(i);
            if (typeof s > "u") {
                const { message: r } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getInternalError"])("NO_MATCHING_KEY", `${this.name}: ${i}`);
                throw new Error(r);
            }
            return s;
        }, this.del = async (i)=>{
            this.isInitialized(), this.keychain.delete(i), await this.persist();
        }, this.core = e, this.logger = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$logger$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["generateChildLogger"])(t, this.name);
    }
    get context() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$logger$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getLoggerContext"])(this.logger);
    }
    get storageKey() {
        return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
    }
    async setKeyChain(e) {
        await this.core.storage.setItem(this.storageKey, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mapToObj"])(e));
    }
    async getKeyChain() {
        const e = await this.core.storage.getItem(this.storageKey);
        return typeof e < "u" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["objToMap"])(e) : void 0;
    }
    async persist() {
        await this.setKeyChain(this.keychain);
    }
    isInitialized() {
        if (!this.initialized) {
            const { message: e } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getInternalError"])("NOT_INITIALIZED", this.name);
            throw new Error(e);
        }
    }
}
class Ot {
    constructor(e, t, i){
        this.core = e, this.logger = t, this.name = tt, this.initialized = !1, this.init = async ()=>{
            this.initialized || (await this.keychain.init(), this.initialized = !0);
        }, this.hasKeys = (s)=>(this.isInitialized(), this.keychain.has(s)), this.getClientId = async ()=>{
            this.isInitialized();
            const s = await this.getClientSeed(), r = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$relay$2d$auth$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$facade$3e$__.generateKeyPair(s);
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$relay$2d$auth$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$facade$3e$__.encodeIss(r.publicKey);
        }, this.generateKeyPair = ()=>{
            this.isInitialized();
            const s = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateKeyPair"])();
            return this.setPrivateKey(s.publicKey, s.privateKey);
        }, this.signJWT = async (s)=>{
            this.isInitialized();
            const r = await this.getClientSeed(), n = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$relay$2d$auth$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$facade$3e$__.generateKeyPair(r), a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateRandomBytes32"])(), h = it;
            return await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$relay$2d$auth$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$facade$3e$__.signJWT(a, s, h, n);
        }, this.generateSharedKey = (s, r, n)=>{
            this.isInitialized();
            const a = this.getPrivateKey(s), h = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deriveSymKey"])(a, r);
            return this.setSymKey(h, n);
        }, this.setSymKey = async (s, r)=>{
            this.isInitialized();
            const n = r || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hashKey"])(s);
            return await this.keychain.set(n, s), n;
        }, this.deleteKeyPair = async (s)=>{
            this.isInitialized(), await this.keychain.del(s);
        }, this.deleteSymKey = async (s)=>{
            this.isInitialized(), await this.keychain.del(s);
        }, this.encode = async (s, r, n)=>{
            this.isInitialized();
            const a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validateEncoding"])(n), h = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$safe$2d$json$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["safeJsonStringify"])(r);
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTypeOneEnvelope"])(a)) {
                const m = a.senderPublicKey, L = a.receiverPublicKey;
                s = await this.generateSharedKey(m, L);
            }
            const l = this.getSymKey(s), { type: d, senderPublicKey: g } = a;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["encrypt"])({
                type: d,
                symKey: l,
                message: h,
                senderPublicKey: g
            });
        }, this.decode = async (s, r, n)=>{
            this.isInitialized();
            const a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validateDecoding"])(r, n);
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTypeOneEnvelope"])(a)) {
                const h = a.receiverPublicKey, l = a.senderPublicKey;
                s = await this.generateSharedKey(h, l);
            }
            try {
                const h = this.getSymKey(s), l = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decrypt"])({
                    symKey: h,
                    encoded: r
                });
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$safe$2d$json$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["safeJsonParse"])(l);
            } catch (h) {
                this.logger.error(`Failed to decode message from topic: '${s}', clientId: '${await this.getClientId()}'`), this.logger.error(h);
            }
        }, this.getPayloadType = (s)=>{
            const r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deserialize"])(s);
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decodeTypeByte"])(r.type);
        }, this.getPayloadSenderPublicKey = (s)=>{
            const r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deserialize"])(s);
            return r.senderPublicKey ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$to$2d$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toString"])(r.senderPublicKey, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BASE16"]) : void 0;
        }, this.core = e, this.logger = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$logger$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["generateChildLogger"])(t, this.name), this.keychain = i || new xt(this.core, this.logger);
    }
    get context() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$logger$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getLoggerContext"])(this.logger);
    }
    async setPrivateKey(e, t) {
        return await this.keychain.set(e, t), e;
    }
    getPrivateKey(e) {
        return this.keychain.get(e);
    }
    async getClientSeed() {
        let e = "";
        try {
            e = this.keychain.get(ye);
        } catch  {
            e = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateRandomBytes32"])(), await this.keychain.set(ye, e);
        }
        return mr(e, "base16");
    }
    getSymKey(e) {
        return this.keychain.get(e);
    }
    isInitialized() {
        if (!this.initialized) {
            const { message: e } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getInternalError"])("NOT_INITIALIZED", this.name);
            throw new Error(e);
        }
    }
}
class At extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$types$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IMessageTracker"] {
    constructor(e, t){
        super(e, t), this.logger = e, this.core = t, this.messages = new Map, this.name = nt, this.version = ot, this.initialized = !1, this.storagePrefix = z, this.init = async ()=>{
            if (!this.initialized) {
                this.logger.trace("Initialized");
                try {
                    const i = await this.getRelayerMessages();
                    typeof i < "u" && (this.messages = i), this.logger.debug(`Successfully Restored records for ${this.name}`), this.logger.trace({
                        type: "method",
                        method: "restore",
                        size: this.messages.size
                    });
                } catch (i) {
                    this.logger.debug(`Failed to Restore records for ${this.name}`), this.logger.error(i);
                } finally{
                    this.initialized = !0;
                }
            }
        }, this.set = async (i, s)=>{
            this.isInitialized();
            const r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hashMessage"])(s);
            let n = this.messages.get(i);
            return typeof n > "u" && (n = {}), typeof n[r] < "u" || (n[r] = s, this.messages.set(i, n), await this.persist()), r;
        }, this.get = (i)=>{
            this.isInitialized();
            let s = this.messages.get(i);
            return typeof s > "u" && (s = {}), s;
        }, this.has = (i, s)=>{
            this.isInitialized();
            const r = this.get(i), n = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hashMessage"])(s);
            return typeof r[n] < "u";
        }, this.del = async (i)=>{
            this.isInitialized(), this.messages.delete(i), await this.persist();
        }, this.logger = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$logger$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["generateChildLogger"])(e, this.name), this.core = t;
    }
    get context() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$logger$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getLoggerContext"])(this.logger);
    }
    get storageKey() {
        return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
    }
    async setRelayerMessages(e) {
        await this.core.storage.setItem(this.storageKey, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mapToObj"])(e));
    }
    async getRelayerMessages() {
        const e = await this.core.storage.getItem(this.storageKey);
        return typeof e < "u" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["objToMap"])(e) : void 0;
    }
    async persist() {
        await this.setRelayerMessages(this.messages);
    }
    isInitialized() {
        if (!this.initialized) {
            const { message: e } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getInternalError"])("NOT_INITIALIZED", this.name);
            throw new Error(e);
        }
    }
}
class vr extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$types$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IPublisher"] {
    constructor(e, t){
        super(e, t), this.relayer = e, this.logger = t, this.events = new __TURBOPACK__commonjs__external__events__["EventEmitter"], this.name = ht, this.queue = new Map, this.publishTimeout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toMiliseconds"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ONE_MINUTE"]), this.failedPublishTimeout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toMiliseconds"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ONE_SECOND"]), this.needsTransportRestart = !1, this.publish = async (i, s, r)=>{
            var n;
            this.logger.debug("Publishing Payload"), this.logger.trace({
                type: "method",
                method: "publish",
                params: {
                    topic: i,
                    message: s,
                    opts: r
                }
            });
            const a = r?.ttl || at, h = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRelayProtocolName"])(r), l = r?.prompt || !1, d = r?.tag || 0, g = r?.id || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getBigIntRpcId"])().toString(), m = {
                topic: i,
                message: s,
                opts: {
                    ttl: a,
                    relay: h,
                    prompt: l,
                    tag: d,
                    id: g
                }
            }, L = `Failed to publish payload, please try again. id:${g} tag:${d}`, u = Date.now();
            let p, T = 1;
            try {
                for(; p === void 0;){
                    if (Date.now() - u > this.publishTimeout) throw new Error(L);
                    this.logger.trace({
                        id: g,
                        attempts: T
                    }, `publisher.publish - attempt ${T}`), p = await await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createExpiringPromise"])(this.rpcPublish(i, s, a, h, l, d, g).catch((D)=>this.logger.warn(D)), this.publishTimeout, L), T++, p || await new Promise((D)=>setTimeout(D, this.failedPublishTimeout));
                }
                this.relayer.events.emit(f.publish, m), this.logger.debug("Successfully Published Payload"), this.logger.trace({
                    type: "method",
                    method: "publish",
                    params: {
                        id: g,
                        topic: i,
                        message: s,
                        opts: r
                    }
                });
            } catch (D) {
                if (this.logger.debug("Failed to Publish Payload"), this.logger.error(D), (n = r?.internal) != null && n.throwOnFailedPublish) throw D;
                this.queue.set(g, m);
            }
        }, this.on = (i, s)=>{
            this.events.on(i, s);
        }, this.once = (i, s)=>{
            this.events.once(i, s);
        }, this.off = (i, s)=>{
            this.events.off(i, s);
        }, this.removeListener = (i, s)=>{
            this.events.removeListener(i, s);
        }, this.relayer = e, this.logger = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$logger$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["generateChildLogger"])(t, this.name), this.registerEventListeners();
    }
    get context() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$logger$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getLoggerContext"])(this.logger);
    }
    rpcPublish(e, t, i, s, r, n, a) {
        var h, l, d, g;
        const m = {
            method: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRelayProtocolApi"])(s.protocol).publish,
            params: {
                topic: e,
                message: t,
                ttl: i,
                prompt: r,
                tag: n
            },
            id: a
        };
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isUndefined"])((h = m.params) == null ? void 0 : h.prompt) && ((l = m.params) == null || delete l.prompt), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isUndefined"])((d = m.params) == null ? void 0 : d.tag) && ((g = m.params) == null || delete g.tag), this.logger.debug("Outgoing Relay Payload"), this.logger.trace({
            type: "message",
            direction: "outgoing",
            request: m
        }), this.relayer.request(m);
    }
    removeRequestFromQueue(e) {
        this.queue.delete(e);
    }
    checkQueue() {
        this.queue.forEach(async (e)=>{
            const { topic: t, message: i, opts: s } = e;
            await this.publish(t, i, s);
        });
    }
    registerEventListeners() {
        this.relayer.core.heartbeat.on(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$heartbeat$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HEARTBEAT_EVENTS"].pulse, ()=>{
            if (this.needsTransportRestart) {
                this.needsTransportRestart = !1, this.relayer.events.emit(f.connection_stalled);
                return;
            }
            this.checkQueue();
        }), this.relayer.on(f.message_ack, (e)=>{
            this.removeRequestFromQueue(e.id.toString());
        });
    }
}
class Ir {
    constructor(){
        this.map = new Map, this.set = (e, t)=>{
            const i = this.get(e);
            this.exists(e, t) || this.map.set(e, [
                ...i,
                t
            ]);
        }, this.get = (e)=>this.map.get(e) || [], this.exists = (e, t)=>this.get(e).includes(t), this.delete = (e, t)=>{
            if (typeof t > "u") {
                this.map.delete(e);
                return;
            }
            if (!this.map.has(e)) return;
            const i = this.get(e);
            if (!this.exists(e, t)) return;
            const s = i.filter((r)=>r !== t);
            if (!s.length) {
                this.map.delete(e);
                return;
            }
            this.map.set(e, s);
        }, this.clear = ()=>{
            this.map.clear();
        };
    }
    get topics() {
        return Array.from(this.map.keys());
    }
}
var Cr = Object.defineProperty, Tr = Object.defineProperties, _r = Object.getOwnPropertyDescriptors, zt = Object.getOwnPropertySymbols, Rr = Object.prototype.hasOwnProperty, Sr = Object.prototype.propertyIsEnumerable, Nt = (o, e, t)=>e in o ? Cr(o, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: t
    }) : o[e] = t, j = (o, e)=>{
    for(var t in e || (e = {}))Rr.call(e, t) && Nt(o, t, e[t]);
    if (zt) for (var t of zt(e))Sr.call(e, t) && Nt(o, t, e[t]);
    return o;
}, fe = (o, e)=>Tr(o, _r(e));
class Lt extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$types$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ISubscriber"] {
    constructor(e, t){
        super(e, t), this.relayer = e, this.logger = t, this.subscriptions = new Map, this.topicMap = new Ir, this.events = new __TURBOPACK__commonjs__external__events__["EventEmitter"], this.name = bt, this.version = ft, this.pending = new Map, this.cached = [], this.initialized = !1, this.pendingSubscriptionWatchLabel = "pending_sub_watch_label", this.pollingInterval = 20, this.storagePrefix = z, this.subscribeTimeout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toMiliseconds"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ONE_MINUTE"]), this.restartInProgress = !1, this.batchSubscribeTopicsLimit = 500, this.pendingBatchMessages = [], this.init = async ()=>{
            this.initialized || (this.logger.trace("Initialized"), this.registerEventListeners(), this.clientId = await this.relayer.core.crypto.getClientId());
        }, this.subscribe = async (i, s)=>{
            await this.restartToComplete(), this.isInitialized(), this.logger.debug("Subscribing Topic"), this.logger.trace({
                type: "method",
                method: "subscribe",
                params: {
                    topic: i,
                    opts: s
                }
            });
            try {
                const r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRelayProtocolName"])(s), n = {
                    topic: i,
                    relay: r
                };
                this.pending.set(i, n);
                const a = await this.rpcSubscribe(i, r);
                return typeof a == "string" && (this.onSubscribe(a, n), this.logger.debug("Successfully Subscribed Topic"), this.logger.trace({
                    type: "method",
                    method: "subscribe",
                    params: {
                        topic: i,
                        opts: s
                    }
                })), a;
            } catch (r) {
                throw this.logger.debug("Failed to Subscribe Topic"), this.logger.error(r), r;
            }
        }, this.unsubscribe = async (i, s)=>{
            await this.restartToComplete(), this.isInitialized(), typeof s?.id < "u" ? await this.unsubscribeById(i, s.id, s) : await this.unsubscribeByTopic(i, s);
        }, this.isSubscribed = async (i)=>{
            if (this.topics.includes(i)) return !0;
            const s = `${this.pendingSubscriptionWatchLabel}_${i}`;
            return await new Promise((r, n)=>{
                const a = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Watch"];
                a.start(s);
                const h = setInterval(()=>{
                    !this.pending.has(i) && this.topics.includes(i) && (clearInterval(h), a.stop(s), r(!0)), a.elapsed(s) >= Et && (clearInterval(h), a.stop(s), n(new Error("Subscription resolution timeout")));
                }, this.pollingInterval);
            }).catch(()=>!1);
        }, this.on = (i, s)=>{
            this.events.on(i, s);
        }, this.once = (i, s)=>{
            this.events.once(i, s);
        }, this.off = (i, s)=>{
            this.events.off(i, s);
        }, this.removeListener = (i, s)=>{
            this.events.removeListener(i, s);
        }, this.start = async ()=>{
            await this.onConnect();
        }, this.stop = async ()=>{
            await this.onDisconnect();
        }, this.restart = async ()=>{
            this.restartInProgress = !0, await this.restore(), await this.reset(), this.restartInProgress = !1;
        }, this.relayer = e, this.logger = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$logger$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["generateChildLogger"])(t, this.name), this.clientId = "";
    }
    get context() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$logger$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getLoggerContext"])(this.logger);
    }
    get storageKey() {
        return this.storagePrefix + this.version + this.relayer.core.customStoragePrefix + "//" + this.name;
    }
    get length() {
        return this.subscriptions.size;
    }
    get ids() {
        return Array.from(this.subscriptions.keys());
    }
    get values() {
        return Array.from(this.subscriptions.values());
    }
    get topics() {
        return this.topicMap.topics;
    }
    hasSubscription(e, t) {
        let i = !1;
        try {
            i = this.getSubscription(e).topic === t;
        } catch  {}
        return i;
    }
    onEnable() {
        this.cached = [], this.initialized = !0;
    }
    onDisable() {
        this.cached = this.values, this.subscriptions.clear(), this.topicMap.clear();
    }
    async unsubscribeByTopic(e, t) {
        const i = this.topicMap.get(e);
        await Promise.all(i.map(async (s)=>await this.unsubscribeById(e, s, t)));
    }
    async unsubscribeById(e, t, i) {
        this.logger.debug("Unsubscribing Topic"), this.logger.trace({
            type: "method",
            method: "unsubscribe",
            params: {
                topic: e,
                id: t,
                opts: i
            }
        });
        try {
            const s = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRelayProtocolName"])(i);
            await this.rpcUnsubscribe(e, t, s);
            const r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSdkError"])("USER_DISCONNECTED", `${this.name}, ${e}`);
            await this.onUnsubscribe(e, t, r), this.logger.debug("Successfully Unsubscribed Topic"), this.logger.trace({
                type: "method",
                method: "unsubscribe",
                params: {
                    topic: e,
                    id: t,
                    opts: i
                }
            });
        } catch (s) {
            throw this.logger.debug("Failed to Unsubscribe Topic"), this.logger.error(s), s;
        }
    }
    async rpcSubscribe(e, t) {
        const i = {
            method: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRelayProtocolApi"])(t.protocol).subscribe,
            params: {
                topic: e
            }
        };
        this.logger.debug("Outgoing Relay Payload"), this.logger.trace({
            type: "payload",
            direction: "outgoing",
            request: i
        });
        try {
            return await await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createExpiringPromise"])(this.relayer.request(i).catch((s)=>this.logger.warn(s)), this.subscribeTimeout) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hashMessage"])(e + this.clientId) : null;
        } catch  {
            this.logger.debug("Outgoing Relay Subscribe Payload stalled"), this.relayer.events.emit(f.connection_stalled);
        }
        return null;
    }
    async rpcBatchSubscribe(e) {
        if (!e.length) return;
        const t = e[0].relay, i = {
            method: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRelayProtocolApi"])(t.protocol).batchSubscribe,
            params: {
                topics: e.map((s)=>s.topic)
            }
        };
        this.logger.debug("Outgoing Relay Payload"), this.logger.trace({
            type: "payload",
            direction: "outgoing",
            request: i
        });
        try {
            return await await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createExpiringPromise"])(this.relayer.request(i).catch((s)=>this.logger.warn(s)), this.subscribeTimeout);
        } catch  {
            this.relayer.events.emit(f.connection_stalled);
        }
    }
    async rpcBatchFetchMessages(e) {
        if (!e.length) return;
        const t = e[0].relay, i = {
            method: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRelayProtocolApi"])(t.protocol).batchFetchMessages,
            params: {
                topics: e.map((r)=>r.topic)
            }
        };
        this.logger.debug("Outgoing Relay Payload"), this.logger.trace({
            type: "payload",
            direction: "outgoing",
            request: i
        });
        let s;
        try {
            s = await await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createExpiringPromise"])(this.relayer.request(i).catch((r)=>this.logger.warn(r)), this.subscribeTimeout);
        } catch  {
            this.relayer.events.emit(f.connection_stalled);
        }
        return s;
    }
    rpcUnsubscribe(e, t, i) {
        const s = {
            method: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRelayProtocolApi"])(i.protocol).unsubscribe,
            params: {
                topic: e,
                id: t
            }
        };
        return this.logger.debug("Outgoing Relay Payload"), this.logger.trace({
            type: "payload",
            direction: "outgoing",
            request: s
        }), this.relayer.request(s);
    }
    onSubscribe(e, t) {
        this.setSubscription(e, fe(j({}, t), {
            id: e
        })), this.pending.delete(t.topic);
    }
    onBatchSubscribe(e) {
        e.length && e.forEach((t)=>{
            this.setSubscription(t.id, j({}, t)), this.pending.delete(t.topic);
        });
    }
    async onUnsubscribe(e, t, i) {
        this.events.removeAllListeners(t), this.hasSubscription(t, e) && this.deleteSubscription(t, i), await this.relayer.messages.del(e);
    }
    async setRelayerSubscriptions(e) {
        await this.relayer.core.storage.setItem(this.storageKey, e);
    }
    async getRelayerSubscriptions() {
        return await this.relayer.core.storage.getItem(this.storageKey);
    }
    setSubscription(e, t) {
        this.logger.debug("Setting subscription"), this.logger.trace({
            type: "method",
            method: "setSubscription",
            id: e,
            subscription: t
        }), this.addSubscription(e, t);
    }
    addSubscription(e, t) {
        this.subscriptions.set(e, j({}, t)), this.topicMap.set(t.topic, e), this.events.emit(S.created, t);
    }
    getSubscription(e) {
        this.logger.debug("Getting subscription"), this.logger.trace({
            type: "method",
            method: "getSubscription",
            id: e
        });
        const t = this.subscriptions.get(e);
        if (!t) {
            const { message: i } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getInternalError"])("NO_MATCHING_KEY", `${this.name}: ${e}`);
            throw new Error(i);
        }
        return t;
    }
    deleteSubscription(e, t) {
        this.logger.debug("Deleting subscription"), this.logger.trace({
            type: "method",
            method: "deleteSubscription",
            id: e,
            reason: t
        });
        const i = this.getSubscription(e);
        this.subscriptions.delete(e), this.topicMap.delete(i.topic, e), this.events.emit(S.deleted, fe(j({}, i), {
            reason: t
        }));
    }
    async persist() {
        await this.setRelayerSubscriptions(this.values), this.events.emit(S.sync);
    }
    async reset() {
        if (this.cached.length) {
            const e = Math.ceil(this.cached.length / this.batchSubscribeTopicsLimit);
            for(let t = 0; t < e; t++){
                const i = this.cached.splice(0, this.batchSubscribeTopicsLimit);
                await this.batchFetchMessages(i), await this.batchSubscribe(i);
            }
        }
        this.events.emit(S.resubscribed);
    }
    async restore() {
        try {
            const e = await this.getRelayerSubscriptions();
            if (typeof e > "u" || !e.length) return;
            if (this.subscriptions.size) {
                const { message: t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getInternalError"])("RESTORE_WILL_OVERRIDE", this.name);
                throw this.logger.error(t), this.logger.error(`${this.name}: ${JSON.stringify(this.values)}`), new Error(t);
            }
            this.cached = e, this.logger.debug(`Successfully Restored subscriptions for ${this.name}`), this.logger.trace({
                type: "method",
                method: "restore",
                subscriptions: this.values
            });
        } catch (e) {
            this.logger.debug(`Failed to Restore subscriptions for ${this.name}`), this.logger.error(e);
        }
    }
    async batchSubscribe(e) {
        if (!e.length) return;
        const t = await this.rpcBatchSubscribe(e);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValidArray"])(t) && this.onBatchSubscribe(t.map((i, s)=>fe(j({}, e[s]), {
                id: i
            })));
    }
    async batchFetchMessages(e) {
        if (!e.length) return;
        this.logger.trace(`Fetching batch messages for ${e.length} subscriptions`);
        const t = await this.rpcBatchFetchMessages(e);
        t && t.messages && (this.pendingBatchMessages = this.pendingBatchMessages.concat(t.messages));
    }
    async onConnect() {
        await this.restart(), this.onEnable();
    }
    onDisconnect() {
        this.onDisable();
    }
    async checkPending() {
        if (!this.initialized || !this.relayer.connected) return;
        const e = [];
        this.pending.forEach((t)=>{
            e.push(t);
        }), await this.batchSubscribe(e), this.pendingBatchMessages.length && (await this.relayer.handleBatchMessageEvents(this.pendingBatchMessages), this.pendingBatchMessages = []);
    }
    registerEventListeners() {
        this.relayer.core.heartbeat.on(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$heartbeat$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HEARTBEAT_EVENTS"].pulse, async ()=>{
            await this.checkPending();
        }), this.events.on(S.created, async (e)=>{
            const t = S.created;
            this.logger.info(`Emitting ${t}`), this.logger.debug({
                type: "event",
                event: t,
                data: e
            }), await this.persist();
        }), this.events.on(S.deleted, async (e)=>{
            const t = S.deleted;
            this.logger.info(`Emitting ${t}`), this.logger.debug({
                type: "event",
                event: t,
                data: e
            }), await this.persist();
        });
    }
    isInitialized() {
        if (!this.initialized) {
            const { message: e } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getInternalError"])("NOT_INITIALIZED", this.name);
            throw new Error(e);
        }
    }
    async restartToComplete() {
        this.restartInProgress && await new Promise((e)=>{
            const t = setInterval(()=>{
                this.restartInProgress || (clearInterval(t), e());
            }, this.pollingInterval);
        });
    }
}
var Pr = Object.defineProperty, Ut = Object.getOwnPropertySymbols, xr = Object.prototype.hasOwnProperty, Or = Object.prototype.propertyIsEnumerable, Ft = (o, e, t)=>e in o ? Pr(o, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: t
    }) : o[e] = t, Ar = (o, e)=>{
    for(var t in e || (e = {}))xr.call(e, t) && Ft(o, t, e[t]);
    if (Ut) for (var t of Ut(e))Or.call(e, t) && Ft(o, t, e[t]);
    return o;
};
class $t extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$types$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IRelayer"] {
    constructor(e){
        super(e), this.protocol = "wc", this.version = 2, this.events = new __TURBOPACK__commonjs__external__events__["EventEmitter"], this.name = ut, this.transportExplicitlyClosed = !1, this.initialized = !1, this.connectionAttemptInProgress = !1, this.connectionStatusPollingInterval = 20, this.staleConnectionErrors = [
            "socket hang up",
            "stalled",
            "interrupted"
        ], this.hasExperiencedNetworkDisruption = !1, this.requestsInFlight = new Map, this.heartBeatTimeout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toMiliseconds"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["THIRTY_SECONDS"] + __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ONE_SECOND"]), this.request = async (t)=>{
            var i, s;
            this.logger.debug("Publishing Request Payload");
            const r = t.id || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getBigIntRpcId"])().toString();
            await this.toEstablishConnection();
            try {
                const n = this.provider.request(t);
                this.requestsInFlight.set(r, {
                    promise: n,
                    request: t
                }), this.logger.trace({
                    id: r,
                    method: t.method,
                    topic: (i = t.params) == null ? void 0 : i.topic
                }, "relayer.request - attempt to publish...");
                const a = await new Promise(async (h, l)=>{
                    const d = ()=>{
                        l(new Error(`relayer.request - publish interrupted, id: ${r}`));
                    };
                    this.provider.on(E.disconnect, d);
                    const g = await n;
                    this.provider.off(E.disconnect, d), h(g);
                });
                return this.logger.trace({
                    id: r,
                    method: t.method,
                    topic: (s = t.params) == null ? void 0 : s.topic
                }, "relayer.request - published"), a;
            } catch (n) {
                throw this.logger.debug(`Failed to Publish Request: ${r}`), n;
            } finally{
                this.requestsInFlight.delete(r);
            }
        }, this.resetPingTimeout = ()=>{
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNode"])()) try {
                clearTimeout(this.pingTimeout), this.pingTimeout = setTimeout(()=>{
                    var t, i, s;
                    (s = (i = (t = this.provider) == null ? void 0 : t.connection) == null ? void 0 : i.socket) == null || s.terminate();
                }, this.heartBeatTimeout);
            } catch (t) {
                this.logger.warn(t);
            }
        }, this.onPayloadHandler = (t)=>{
            this.onProviderPayload(t), this.resetPingTimeout();
        }, this.onConnectHandler = ()=>{
            this.startPingTimeout(), this.events.emit(f.connect);
        }, this.onDisconnectHandler = ()=>{
            this.onProviderDisconnect();
        }, this.onProviderErrorHandler = (t)=>{
            this.logger.error(t), this.events.emit(f.error, t), this.logger.info("Fatal socket error received, closing transport"), this.transportClose();
        }, this.registerProviderListeners = ()=>{
            this.provider.on(E.payload, this.onPayloadHandler), this.provider.on(E.connect, this.onConnectHandler), this.provider.on(E.disconnect, this.onDisconnectHandler), this.provider.on(E.error, this.onProviderErrorHandler);
        }, this.core = e.core, this.logger = typeof e.logger < "u" && typeof e.logger != "string" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$logger$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["generateChildLogger"])(e.logger, this.name) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pino$2f$pino$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__pino$3e$__["pino"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$logger$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getDefaultLoggerOptions"])({
            level: e.logger || lt
        })), this.messages = new At(this.logger, e.core), this.subscriber = new Lt(this, this.logger), this.publisher = new vr(this, this.logger), this.relayUrl = e?.relayUrl || me, this.projectId = e.projectId, this.bundleId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getBundleId"])(), this.provider = {};
    }
    async init() {
        this.logger.trace("Initialized"), this.registerEventListeners(), await Promise.all([
            this.messages.init(),
            this.subscriber.init()
        ]);
        try {
            await this.transportOpen();
        } catch  {
            this.logger.warn(`Connection via ${this.relayUrl} failed, attempting to connect via failover domain ${be}...`), await this.restartTransport(be);
        }
        this.initialized = !0, setTimeout(async ()=>{
            this.subscriber.topics.length === 0 && this.subscriber.pending.size === 0 && (this.logger.info("No topics subscribed to after init, closing transport"), await this.transportClose(), this.transportExplicitlyClosed = !1);
        }, Dt);
    }
    get context() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$logger$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getLoggerContext"])(this.logger);
    }
    get connected() {
        var e, t, i;
        return ((i = (t = (e = this.provider) == null ? void 0 : e.connection) == null ? void 0 : t.socket) == null ? void 0 : i.readyState) === 1;
    }
    get connecting() {
        var e, t, i;
        return ((i = (t = (e = this.provider) == null ? void 0 : e.connection) == null ? void 0 : t.socket) == null ? void 0 : i.readyState) === 0;
    }
    async publish(e, t, i) {
        this.isInitialized(), await this.publisher.publish(e, t, i), await this.recordMessageEvent({
            topic: e,
            message: t,
            publishedAt: Date.now()
        });
    }
    async subscribe(e, t) {
        var i;
        this.isInitialized();
        let s = ((i = this.subscriber.topicMap.get(e)) == null ? void 0 : i[0]) || "", r;
        const n = (a)=>{
            a.topic === e && (this.subscriber.off(S.created, n), r());
        };
        return await Promise.all([
            new Promise((a)=>{
                r = a, this.subscriber.on(S.created, n);
            }),
            new Promise(async (a)=>{
                s = await this.subscriber.subscribe(e, t) || s, a();
            })
        ]), s;
    }
    async unsubscribe(e, t) {
        this.isInitialized(), await this.subscriber.unsubscribe(e, t);
    }
    on(e, t) {
        this.events.on(e, t);
    }
    once(e, t) {
        this.events.once(e, t);
    }
    off(e, t) {
        this.events.off(e, t);
    }
    removeListener(e, t) {
        this.events.removeListener(e, t);
    }
    async transportDisconnect() {
        if (!this.hasExperiencedNetworkDisruption && this.connected && this.requestsInFlight.size > 0) try {
            await Promise.all(Array.from(this.requestsInFlight.values()).map((e)=>e.promise));
        } catch (e) {
            this.logger.warn(e);
        }
        this.hasExperiencedNetworkDisruption || this.connected ? await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createExpiringPromise"])(this.provider.disconnect(), 2e3, "provider.disconnect()").catch(()=>this.onProviderDisconnect()) : this.onProviderDisconnect();
    }
    async transportClose() {
        this.transportExplicitlyClosed = !0, await this.transportDisconnect();
    }
    async transportOpen(e) {
        await this.confirmOnlineStateOrThrow(), e && e !== this.relayUrl && (this.relayUrl = e, await this.transportDisconnect()), await this.createProvider(), this.connectionAttemptInProgress = !0, this.transportExplicitlyClosed = !1;
        try {
            await new Promise(async (t, i)=>{
                const s = ()=>{
                    this.provider.off(E.disconnect, s), i(new Error("Connection interrupted while trying to subscribe"));
                };
                this.provider.on(E.disconnect, s), await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createExpiringPromise"])(this.provider.connect(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toMiliseconds"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ONE_MINUTE"]), `Socket stalled when trying to connect to ${this.relayUrl}`).catch((r)=>{
                    i(r);
                }), await this.subscriber.start(), this.hasExperiencedNetworkDisruption = !1, t();
            });
        } catch (t) {
            this.logger.error(t);
            const i = t;
            if (this.hasExperiencedNetworkDisruption = !0, !this.isConnectionStalled(i.message)) throw t;
        } finally{
            this.connectionAttemptInProgress = !1;
        }
    }
    async restartTransport(e) {
        this.connectionAttemptInProgress || (this.relayUrl = e || this.relayUrl, await this.confirmOnlineStateOrThrow(), await this.transportClose(), await this.transportOpen());
    }
    async confirmOnlineStateOrThrow() {
        if (!await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isOnline"])()) throw new Error("No internet connection detected. Please restart your network and try again.");
    }
    async handleBatchMessageEvents(e) {
        if (e?.length === 0) {
            this.logger.trace("Batch message events is empty. Ignoring...");
            return;
        }
        const t = e.sort((i, s)=>i.publishedAt - s.publishedAt);
        this.logger.trace(`Batch of ${t.length} message events sorted`);
        for (const i of t)try {
            await this.onMessageEvent(i);
        } catch (s) {
            this.logger.warn(s);
        }
        this.logger.trace(`Batch of ${t.length} message events processed`);
    }
    startPingTimeout() {
        var e, t, i, s, r;
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNode"])()) try {
            (t = (e = this.provider) == null ? void 0 : e.connection) != null && t.socket && ((r = (s = (i = this.provider) == null ? void 0 : i.connection) == null ? void 0 : s.socket) == null || r.once("ping", ()=>{
                this.resetPingTimeout();
            })), this.resetPingTimeout();
        } catch (n) {
            this.logger.warn(n);
        }
    }
    isConnectionStalled(e) {
        return this.staleConnectionErrors.some((t)=>e.includes(t));
    }
    async createProvider() {
        this.provider.connection && this.unregisterProviderListeners();
        const e = await this.core.crypto.signJWT(this.relayUrl);
        this.provider = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$provider$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["JsonRpcProvider"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$ws$2d$connection$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatRelayRpcUrl"])({
            sdkVersion: pt,
            protocol: this.protocol,
            version: this.version,
            relayUrl: this.relayUrl,
            projectId: this.projectId,
            auth: e,
            useOnCloseEvent: !0,
            bundleId: this.bundleId
        }))), this.registerProviderListeners();
    }
    async recordMessageEvent(e) {
        const { topic: t, message: i } = e;
        await this.messages.set(t, i);
    }
    async shouldIgnoreMessageEvent(e) {
        const { topic: t, message: i } = e;
        if (!i || i.length === 0) return this.logger.debug(`Ignoring invalid/empty message: ${i}`), !0;
        if (!await this.subscriber.isSubscribed(t)) return this.logger.debug(`Ignoring message for non-subscribed topic ${t}`), !0;
        const s = this.messages.has(t, i);
        return s && this.logger.debug(`Ignoring duplicate message: ${i}`), s;
    }
    async onProviderPayload(e) {
        if (this.logger.debug("Incoming Relay Payload"), this.logger.trace({
            type: "payload",
            direction: "incoming",
            payload: e
        }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$validators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isJsonRpcRequest"])(e)) {
            if (!e.method.endsWith(dt)) return;
            const t = e.params, { topic: i, message: s, publishedAt: r } = t.data, n = {
                topic: i,
                message: s,
                publishedAt: r
            };
            this.logger.debug("Emitting Relayer Payload"), this.logger.trace(Ar({
                type: "event",
                event: t.id
            }, n)), this.events.emit(t.id, n), await this.acknowledgePayload(e), await this.onMessageEvent(n);
        } else (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$validators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isJsonRpcResponse"])(e) && this.events.emit(f.message_ack, e);
    }
    async onMessageEvent(e) {
        await this.shouldIgnoreMessageEvent(e) || (this.events.emit(f.message, e), await this.recordMessageEvent(e));
    }
    async acknowledgePayload(e) {
        const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatJsonRpcResult"])(e.id, !0);
        await this.provider.connection.send(t);
    }
    unregisterProviderListeners() {
        this.provider.off(E.payload, this.onPayloadHandler), this.provider.off(E.connect, this.onConnectHandler), this.provider.off(E.disconnect, this.onDisconnectHandler), this.provider.off(E.error, this.onProviderErrorHandler), clearTimeout(this.pingTimeout);
    }
    async registerEventListeners() {
        let e = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isOnline"])();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["subscribeToNetworkChange"])(async (t)=>{
            e !== t && (e = t, t ? await this.restartTransport().catch((i)=>this.logger.error(i)) : (this.hasExperiencedNetworkDisruption = !0, await this.transportDisconnect(), this.transportExplicitlyClosed = !1));
        });
    }
    async onProviderDisconnect() {
        await this.subscriber.stop(), this.requestsInFlight.clear(), clearTimeout(this.pingTimeout), this.events.emit(f.disconnect), this.connectionAttemptInProgress = !1, !this.transportExplicitlyClosed && setTimeout(async ()=>{
            await this.transportOpen().catch((e)=>this.logger.error(e));
        }, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toMiliseconds"])(gt));
    }
    isInitialized() {
        if (!this.initialized) {
            const { message: e } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getInternalError"])("NOT_INITIALIZED", this.name);
            throw new Error(e);
        }
    }
    async toEstablishConnection() {
        await this.confirmOnlineStateOrThrow(), !this.connected && (this.connectionAttemptInProgress && await new Promise((e)=>{
            const t = setInterval(()=>{
                this.connected && (clearInterval(t), e());
            }, this.connectionStatusPollingInterval);
        }), await this.transportOpen());
    }
}
var zr = Object.defineProperty, Bt = Object.getOwnPropertySymbols, Nr = Object.prototype.hasOwnProperty, Lr = Object.prototype.propertyIsEnumerable, Mt = (o, e, t)=>e in o ? zr(o, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: t
    }) : o[e] = t, kt = (o, e)=>{
    for(var t in e || (e = {}))Nr.call(e, t) && Mt(o, t, e[t]);
    if (Bt) for (var t of Bt(e))Lr.call(e, t) && Mt(o, t, e[t]);
    return o;
};
class Kt extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$types$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IStore"] {
    constructor(e, t, i, s = z, r = void 0){
        super(e, t, i, s), this.core = e, this.logger = t, this.name = i, this.map = new Map, this.version = yt, this.cached = [], this.initialized = !1, this.storagePrefix = z, this.recentlyDeleted = [], this.recentlyDeletedLimit = 200, this.init = async ()=>{
            this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((n)=>{
                this.getKey && n !== null && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isUndefined"])(n) ? this.map.set(this.getKey(n), n) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isProposalStruct"])(n) ? this.map.set(n.id, n) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isSessionStruct"])(n) && this.map.set(n.topic, n);
            }), this.cached = [], this.initialized = !0);
        }, this.set = async (n, a)=>{
            this.isInitialized(), this.map.has(n) ? await this.update(n, a) : (this.logger.debug("Setting value"), this.logger.trace({
                type: "method",
                method: "set",
                key: n,
                value: a
            }), this.map.set(n, a), await this.persist());
        }, this.get = (n)=>(this.isInitialized(), this.logger.debug("Getting value"), this.logger.trace({
                type: "method",
                method: "get",
                key: n
            }), this.getData(n)), this.getAll = (n)=>(this.isInitialized(), n ? this.values.filter((a)=>Object.keys(n).every((h)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lodash$2e$isequal$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(a[h], n[h]))) : this.values), this.update = async (n, a)=>{
            this.isInitialized(), this.logger.debug("Updating value"), this.logger.trace({
                type: "method",
                method: "update",
                key: n,
                update: a
            });
            const h = kt(kt({}, this.getData(n)), a);
            this.map.set(n, h), await this.persist();
        }, this.delete = async (n, a)=>{
            this.isInitialized(), this.map.has(n) && (this.logger.debug("Deleting value"), this.logger.trace({
                type: "method",
                method: "delete",
                key: n,
                reason: a
            }), this.map.delete(n), this.addToRecentlyDeleted(n), await this.persist());
        }, this.logger = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$logger$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["generateChildLogger"])(t, this.name), this.storagePrefix = s, this.getKey = r;
    }
    get context() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$logger$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getLoggerContext"])(this.logger);
    }
    get storageKey() {
        return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
    }
    get length() {
        return this.map.size;
    }
    get keys() {
        return Array.from(this.map.keys());
    }
    get values() {
        return Array.from(this.map.values());
    }
    addToRecentlyDeleted(e) {
        this.recentlyDeleted.push(e), this.recentlyDeleted.length >= this.recentlyDeletedLimit && this.recentlyDeleted.splice(0, this.recentlyDeletedLimit / 2);
    }
    async setDataStore(e) {
        await this.core.storage.setItem(this.storageKey, e);
    }
    async getDataStore() {
        return await this.core.storage.getItem(this.storageKey);
    }
    getData(e) {
        const t = this.map.get(e);
        if (!t) {
            if (this.recentlyDeleted.includes(e)) {
                const { message: s } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getInternalError"])("MISSING_OR_INVALID", `Record was recently deleted - ${this.name}: ${e}`);
                throw this.logger.error(s), new Error(s);
            }
            const { message: i } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getInternalError"])("NO_MATCHING_KEY", `${this.name}: ${e}`);
            throw this.logger.error(i), new Error(i);
        }
        return t;
    }
    async persist() {
        await this.setDataStore(this.values);
    }
    async restore() {
        try {
            const e = await this.getDataStore();
            if (typeof e > "u" || !e.length) return;
            if (this.map.size) {
                const { message: t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getInternalError"])("RESTORE_WILL_OVERRIDE", this.name);
                throw this.logger.error(t), new Error(t);
            }
            this.cached = e, this.logger.debug(`Successfully Restored value for ${this.name}`), this.logger.trace({
                type: "method",
                method: "restore",
                value: this.values
            });
        } catch (e) {
            this.logger.debug(`Failed to Restore value for ${this.name}`), this.logger.error(e);
        }
    }
    isInitialized() {
        if (!this.initialized) {
            const { message: e } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getInternalError"])("NOT_INITIALIZED", this.name);
            throw new Error(e);
        }
    }
}
class Vt {
    constructor(e, t){
        this.core = e, this.logger = t, this.name = wt, this.version = vt, this.events = new __TURBOPACK__commonjs__external__events__["default"], this.initialized = !1, this.storagePrefix = z, this.ignoredPayloadTypes = [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TYPE_1"]
        ], this.registeredMethods = [], this.init = async ()=>{
            this.initialized || (await this.pairings.init(), await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.initialized = !0, this.logger.trace("Initialized"));
        }, this.register = ({ methods: i })=>{
            this.isInitialized(), this.registeredMethods = [
                ...new Set([
                    ...this.registeredMethods,
                    ...i
                ])
            ];
        }, this.create = async (i)=>{
            this.isInitialized();
            const s = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateRandomBytes32"])(), r = await this.core.crypto.setSymKey(s), n = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["calcExpiry"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FIVE_MINUTES"]), a = {
                protocol: ct
            }, h = {
                topic: r,
                expiry: n,
                relay: a,
                active: !1
            }, l = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatUri"])({
                protocol: this.core.protocol,
                version: this.core.version,
                topic: r,
                symKey: s,
                relay: a,
                expiryTimestamp: n,
                methods: i?.methods
            });
            return this.core.expirer.set(r, n), await this.pairings.set(r, h), await this.core.relayer.subscribe(r), {
                topic: r,
                uri: l
            };
        }, this.pair = async (i)=>{
            this.isInitialized(), this.isValidPair(i);
            const { topic: s, symKey: r, relay: n, expiryTimestamp: a, methods: h } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseUri"])(i.uri);
            let l;
            if (this.pairings.keys.includes(s) && (l = this.pairings.get(s), l.active)) throw new Error(`Pairing already exists: ${s}. Please try again with a new connection URI.`);
            const d = a || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["calcExpiry"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FIVE_MINUTES"]), g = {
                topic: s,
                relay: n,
                expiry: d,
                active: !1,
                methods: h
            };
            return this.core.expirer.set(s, d), await this.pairings.set(s, g), i.activatePairing && await this.activate({
                topic: s
            }), this.events.emit(q.create, g), this.core.crypto.keychain.has(s) || await this.core.crypto.setSymKey(r, s), await this.core.relayer.subscribe(s, {
                relay: n
            }), g;
        }, this.activate = async ({ topic: i })=>{
            this.isInitialized();
            const s = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["calcExpiry"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["THIRTY_DAYS"]);
            this.core.expirer.set(i, s), await this.pairings.update(i, {
                active: !0,
                expiry: s
            });
        }, this.ping = async (i)=>{
            this.isInitialized(), await this.isValidPing(i);
            const { topic: s } = i;
            if (this.pairings.keys.includes(s)) {
                const r = await this.sendRequest(s, "wc_pairingPing", {}), { done: n, resolve: a, reject: h } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createDelayedPromise"])();
                this.events.once((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["engineEvent"])("pairing_ping", r), ({ error: l })=>{
                    l ? h(l) : a();
                }), await n();
            }
        }, this.updateExpiry = async ({ topic: i, expiry: s })=>{
            this.isInitialized(), await this.pairings.update(i, {
                expiry: s
            });
        }, this.updateMetadata = async ({ topic: i, metadata: s })=>{
            this.isInitialized(), await this.pairings.update(i, {
                peerMetadata: s
            });
        }, this.getPairings = ()=>(this.isInitialized(), this.pairings.values), this.disconnect = async (i)=>{
            this.isInitialized(), await this.isValidDisconnect(i);
            const { topic: s } = i;
            this.pairings.keys.includes(s) && (await this.sendRequest(s, "wc_pairingDelete", (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSdkError"])("USER_DISCONNECTED")), await this.deletePairing(s));
        }, this.sendRequest = async (i, s, r)=>{
            const n = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatJsonRpcRequest"])(s, r), a = await this.core.crypto.encode(i, n), h = B[s].req;
            return this.core.history.set(i, n), this.core.relayer.publish(i, a, h), n.id;
        }, this.sendResult = async (i, s, r)=>{
            const n = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatJsonRpcResult"])(i, r), a = await this.core.crypto.encode(s, n), h = await this.core.history.get(s, i), l = B[h.request.method].res;
            await this.core.relayer.publish(s, a, l), await this.core.history.resolve(n);
        }, this.sendError = async (i, s, r)=>{
            const n = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatJsonRpcError"])(i, r), a = await this.core.crypto.encode(s, n), h = await this.core.history.get(s, i), l = B[h.request.method] ? B[h.request.method].res : B.unregistered_method.res;
            await this.core.relayer.publish(s, a, l), await this.core.history.resolve(n);
        }, this.deletePairing = async (i, s)=>{
            await this.core.relayer.unsubscribe(i), await Promise.all([
                this.pairings.delete(i, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSdkError"])("USER_DISCONNECTED")),
                this.core.crypto.deleteSymKey(i),
                s ? Promise.resolve() : this.core.expirer.del(i)
            ]);
        }, this.cleanup = async ()=>{
            const i = this.pairings.getAll().filter((s)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isExpired"])(s.expiry));
            await Promise.all(i.map((s)=>this.deletePairing(s.topic)));
        }, this.onRelayEventRequest = (i)=>{
            const { topic: s, payload: r } = i;
            switch(r.method){
                case "wc_pairingPing":
                    return this.onPairingPingRequest(s, r);
                case "wc_pairingDelete":
                    return this.onPairingDeleteRequest(s, r);
                default:
                    return this.onUnknownRpcMethodRequest(s, r);
            }
        }, this.onRelayEventResponse = async (i)=>{
            const { topic: s, payload: r } = i, n = (await this.core.history.get(s, r.id)).request.method;
            switch(n){
                case "wc_pairingPing":
                    return this.onPairingPingResponse(s, r);
                default:
                    return this.onUnknownRpcMethodResponse(n);
            }
        }, this.onPairingPingRequest = async (i, s)=>{
            const { id: r } = s;
            try {
                this.isValidPing({
                    topic: i
                }), await this.sendResult(r, i, !0), this.events.emit(q.ping, {
                    id: r,
                    topic: i
                });
            } catch (n) {
                await this.sendError(r, i, n), this.logger.error(n);
            }
        }, this.onPairingPingResponse = (i, s)=>{
            const { id: r } = s;
            setTimeout(()=>{
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$validators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isJsonRpcResult"])(s) ? this.events.emit((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["engineEvent"])("pairing_ping", r), {}) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$validators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isJsonRpcError"])(s) && this.events.emit((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["engineEvent"])("pairing_ping", r), {
                    error: s.error
                });
            }, 500);
        }, this.onPairingDeleteRequest = async (i, s)=>{
            const { id: r } = s;
            try {
                this.isValidDisconnect({
                    topic: i
                }), await this.deletePairing(i), this.events.emit(q.delete, {
                    id: r,
                    topic: i
                });
            } catch (n) {
                await this.sendError(r, i, n), this.logger.error(n);
            }
        }, this.onUnknownRpcMethodRequest = async (i, s)=>{
            const { id: r, method: n } = s;
            try {
                if (this.registeredMethods.includes(n)) return;
                const a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSdkError"])("WC_METHOD_UNSUPPORTED", n);
                await this.sendError(r, i, a), this.logger.error(a);
            } catch (a) {
                await this.sendError(r, i, a), this.logger.error(a);
            }
        }, this.onUnknownRpcMethodResponse = (i)=>{
            this.registeredMethods.includes(i) || this.logger.error((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSdkError"])("WC_METHOD_UNSUPPORTED", i));
        }, this.isValidPair = (i)=>{
            var s;
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValidParams"])(i)) {
                const { message: n } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getInternalError"])("MISSING_OR_INVALID", `pair() params: ${i}`);
                throw new Error(n);
            }
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValidUrl"])(i.uri)) {
                const { message: n } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getInternalError"])("MISSING_OR_INVALID", `pair() uri: ${i.uri}`);
                throw new Error(n);
            }
            const r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseUri"])(i.uri);
            if (!((s = r?.relay) != null && s.protocol)) {
                const { message: n } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getInternalError"])("MISSING_OR_INVALID", "pair() uri#relay-protocol");
                throw new Error(n);
            }
            if (!(r != null && r.symKey)) {
                const { message: n } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getInternalError"])("MISSING_OR_INVALID", "pair() uri#symKey");
                throw new Error(n);
            }
            if (r != null && r.expiryTimestamp && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toMiliseconds"])(r?.expiryTimestamp) < Date.now()) {
                const { message: n } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getInternalError"])("EXPIRED", "pair() URI has expired. Please try again with a new connection URI.");
                throw new Error(n);
            }
        }, this.isValidPing = async (i)=>{
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValidParams"])(i)) {
                const { message: r } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getInternalError"])("MISSING_OR_INVALID", `ping() params: ${i}`);
                throw new Error(r);
            }
            const { topic: s } = i;
            await this.isValidPairingTopic(s);
        }, this.isValidDisconnect = async (i)=>{
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValidParams"])(i)) {
                const { message: r } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getInternalError"])("MISSING_OR_INVALID", `disconnect() params: ${i}`);
                throw new Error(r);
            }
            const { topic: s } = i;
            await this.isValidPairingTopic(s);
        }, this.isValidPairingTopic = async (i)=>{
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValidString"])(i, !1)) {
                const { message: s } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getInternalError"])("MISSING_OR_INVALID", `pairing topic should be a string: ${i}`);
                throw new Error(s);
            }
            if (!this.pairings.keys.includes(i)) {
                const { message: s } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getInternalError"])("NO_MATCHING_KEY", `pairing topic doesn't exist: ${i}`);
                throw new Error(s);
            }
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isExpired"])(this.pairings.get(i).expiry)) {
                await this.deletePairing(i);
                const { message: s } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getInternalError"])("EXPIRED", `pairing topic: ${i}`);
                throw new Error(s);
            }
        }, this.core = e, this.logger = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$logger$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["generateChildLogger"])(t, this.name), this.pairings = new Kt(this.core, this.logger, this.name, this.storagePrefix);
    }
    get context() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$logger$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getLoggerContext"])(this.logger);
    }
    isInitialized() {
        if (!this.initialized) {
            const { message: e } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getInternalError"])("NOT_INITIALIZED", this.name);
            throw new Error(e);
        }
    }
    registerRelayerEvents() {
        this.core.relayer.on(f.message, async (e)=>{
            const { topic: t, message: i } = e;
            if (!this.pairings.keys.includes(t) || this.ignoredPayloadTypes.includes(this.core.crypto.getPayloadType(i))) return;
            const s = await this.core.crypto.decode(t, i);
            try {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$validators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isJsonRpcRequest"])(s) ? (this.core.history.set(t, s), this.onRelayEventRequest({
                    topic: t,
                    payload: s
                })) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$validators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isJsonRpcResponse"])(s) && (await this.core.history.resolve(s), await this.onRelayEventResponse({
                    topic: t,
                    payload: s
                }), this.core.history.delete(t, s.id));
            } catch (r) {
                this.logger.error(r);
            }
        });
    }
    registerExpirerEvents() {
        this.core.expirer.on(C.expired, async (e)=>{
            const { topic: t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseExpirerTarget"])(e.target);
            t && this.pairings.keys.includes(t) && (await this.deletePairing(t, !0), this.events.emit(q.expire, {
                topic: t
            }));
        });
    }
}
class qt extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$types$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IJsonRpcHistory"] {
    constructor(e, t){
        super(e, t), this.core = e, this.logger = t, this.records = new Map, this.events = new __TURBOPACK__commonjs__external__events__["EventEmitter"], this.name = It, this.version = Ct, this.cached = [], this.initialized = !1, this.storagePrefix = z, this.init = async ()=>{
            this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((i)=>this.records.set(i.id, i)), this.cached = [], this.registerEventListeners(), this.initialized = !0);
        }, this.set = (i, s, r)=>{
            if (this.isInitialized(), this.logger.debug("Setting JSON-RPC request history record"), this.logger.trace({
                type: "method",
                method: "set",
                topic: i,
                request: s,
                chainId: r
            }), this.records.has(s.id)) return;
            const n = {
                id: s.id,
                topic: i,
                request: {
                    method: s.method,
                    params: s.params || null
                },
                chainId: r,
                expiry: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["calcExpiry"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["THIRTY_DAYS"])
            };
            this.records.set(n.id, n), this.persist(), this.events.emit(I.created, n);
        }, this.resolve = async (i)=>{
            if (this.isInitialized(), this.logger.debug("Updating JSON-RPC response history record"), this.logger.trace({
                type: "method",
                method: "update",
                response: i
            }), !this.records.has(i.id)) return;
            const s = await this.getRecord(i.id);
            typeof s.response > "u" && (s.response = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$validators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isJsonRpcError"])(i) ? {
                error: i.error
            } : {
                result: i.result
            }, this.records.set(s.id, s), this.persist(), this.events.emit(I.updated, s));
        }, this.get = async (i, s)=>(this.isInitialized(), this.logger.debug("Getting record"), this.logger.trace({
                type: "method",
                method: "get",
                topic: i,
                id: s
            }), await this.getRecord(s)), this.delete = (i, s)=>{
            this.isInitialized(), this.logger.debug("Deleting record"), this.logger.trace({
                type: "method",
                method: "delete",
                id: s
            }), this.values.forEach((r)=>{
                if (r.topic === i) {
                    if (typeof s < "u" && r.id !== s) return;
                    this.records.delete(r.id), this.events.emit(I.deleted, r);
                }
            }), this.persist();
        }, this.exists = async (i, s)=>(this.isInitialized(), this.records.has(s) ? (await this.getRecord(s)).topic === i : !1), this.on = (i, s)=>{
            this.events.on(i, s);
        }, this.once = (i, s)=>{
            this.events.once(i, s);
        }, this.off = (i, s)=>{
            this.events.off(i, s);
        }, this.removeListener = (i, s)=>{
            this.events.removeListener(i, s);
        }, this.logger = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$logger$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["generateChildLogger"])(t, this.name);
    }
    get context() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$logger$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getLoggerContext"])(this.logger);
    }
    get storageKey() {
        return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
    }
    get size() {
        return this.records.size;
    }
    get keys() {
        return Array.from(this.records.keys());
    }
    get values() {
        return Array.from(this.records.values());
    }
    get pending() {
        const e = [];
        return this.values.forEach((t)=>{
            if (typeof t.response < "u") return;
            const i = {
                topic: t.topic,
                request: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatJsonRpcRequest"])(t.request.method, t.request.params, t.id),
                chainId: t.chainId
            };
            return e.push(i);
        }), e;
    }
    async setJsonRpcRecords(e) {
        await this.core.storage.setItem(this.storageKey, e);
    }
    async getJsonRpcRecords() {
        return await this.core.storage.getItem(this.storageKey);
    }
    getRecord(e) {
        this.isInitialized();
        const t = this.records.get(e);
        if (!t) {
            const { message: i } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getInternalError"])("NO_MATCHING_KEY", `${this.name}: ${e}`);
            throw new Error(i);
        }
        return t;
    }
    async persist() {
        await this.setJsonRpcRecords(this.values), this.events.emit(I.sync);
    }
    async restore() {
        try {
            const e = await this.getJsonRpcRecords();
            if (typeof e > "u" || !e.length) return;
            if (this.records.size) {
                const { message: t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getInternalError"])("RESTORE_WILL_OVERRIDE", this.name);
                throw this.logger.error(t), new Error(t);
            }
            this.cached = e, this.logger.debug(`Successfully Restored records for ${this.name}`), this.logger.trace({
                type: "method",
                method: "restore",
                records: this.values
            });
        } catch (e) {
            this.logger.debug(`Failed to Restore records for ${this.name}`), this.logger.error(e);
        }
    }
    registerEventListeners() {
        this.events.on(I.created, (e)=>{
            const t = I.created;
            this.logger.info(`Emitting ${t}`), this.logger.debug({
                type: "event",
                event: t,
                record: e
            });
        }), this.events.on(I.updated, (e)=>{
            const t = I.updated;
            this.logger.info(`Emitting ${t}`), this.logger.debug({
                type: "event",
                event: t,
                record: e
            });
        }), this.events.on(I.deleted, (e)=>{
            const t = I.deleted;
            this.logger.info(`Emitting ${t}`), this.logger.debug({
                type: "event",
                event: t,
                record: e
            });
        }), this.core.heartbeat.on(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$heartbeat$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HEARTBEAT_EVENTS"].pulse, ()=>{
            this.cleanup();
        });
    }
    cleanup() {
        try {
            this.isInitialized();
            let e = !1;
            this.records.forEach((t)=>{
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toMiliseconds"])(t.expiry || 0) - Date.now() <= 0 && (this.logger.info(`Deleting expired history log: ${t.id}`), this.records.delete(t.id), this.events.emit(I.deleted, t, !1), e = !0);
            }), e && this.persist();
        } catch (e) {
            this.logger.warn(e);
        }
    }
    isInitialized() {
        if (!this.initialized) {
            const { message: e } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getInternalError"])("NOT_INITIALIZED", this.name);
            throw new Error(e);
        }
    }
}
class jt extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$types$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IExpirer"] {
    constructor(e, t){
        super(e, t), this.core = e, this.logger = t, this.expirations = new Map, this.events = new __TURBOPACK__commonjs__external__events__["EventEmitter"], this.name = Tt, this.version = _t, this.cached = [], this.initialized = !1, this.storagePrefix = z, this.init = async ()=>{
            this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((i)=>this.expirations.set(i.target, i)), this.cached = [], this.registerEventListeners(), this.initialized = !0);
        }, this.has = (i)=>{
            try {
                const s = this.formatTarget(i);
                return typeof this.getExpiration(s) < "u";
            } catch  {
                return !1;
            }
        }, this.set = (i, s)=>{
            this.isInitialized();
            const r = this.formatTarget(i), n = {
                target: r,
                expiry: s
            };
            this.expirations.set(r, n), this.checkExpiry(r, n), this.events.emit(C.created, {
                target: r,
                expiration: n
            });
        }, this.get = (i)=>{
            this.isInitialized();
            const s = this.formatTarget(i);
            return this.getExpiration(s);
        }, this.del = (i)=>{
            if (this.isInitialized(), this.has(i)) {
                const s = this.formatTarget(i), r = this.getExpiration(s);
                this.expirations.delete(s), this.events.emit(C.deleted, {
                    target: s,
                    expiration: r
                });
            }
        }, this.on = (i, s)=>{
            this.events.on(i, s);
        }, this.once = (i, s)=>{
            this.events.once(i, s);
        }, this.off = (i, s)=>{
            this.events.off(i, s);
        }, this.removeListener = (i, s)=>{
            this.events.removeListener(i, s);
        }, this.logger = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$logger$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["generateChildLogger"])(t, this.name);
    }
    get context() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$logger$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getLoggerContext"])(this.logger);
    }
    get storageKey() {
        return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
    }
    get length() {
        return this.expirations.size;
    }
    get keys() {
        return Array.from(this.expirations.keys());
    }
    get values() {
        return Array.from(this.expirations.values());
    }
    formatTarget(e) {
        if (typeof e == "string") return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatTopicTarget"])(e);
        if (typeof e == "number") return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatIdTarget"])(e);
        const { message: t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getInternalError"])("UNKNOWN_TYPE", `Target type: ${typeof e}`);
        throw new Error(t);
    }
    async setExpirations(e) {
        await this.core.storage.setItem(this.storageKey, e);
    }
    async getExpirations() {
        return await this.core.storage.getItem(this.storageKey);
    }
    async persist() {
        await this.setExpirations(this.values), this.events.emit(C.sync);
    }
    async restore() {
        try {
            const e = await this.getExpirations();
            if (typeof e > "u" || !e.length) return;
            if (this.expirations.size) {
                const { message: t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getInternalError"])("RESTORE_WILL_OVERRIDE", this.name);
                throw this.logger.error(t), new Error(t);
            }
            this.cached = e, this.logger.debug(`Successfully Restored expirations for ${this.name}`), this.logger.trace({
                type: "method",
                method: "restore",
                expirations: this.values
            });
        } catch (e) {
            this.logger.debug(`Failed to Restore expirations for ${this.name}`), this.logger.error(e);
        }
    }
    getExpiration(e) {
        const t = this.expirations.get(e);
        if (!t) {
            const { message: i } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getInternalError"])("NO_MATCHING_KEY", `${this.name}: ${e}`);
            throw this.logger.warn(i), new Error(i);
        }
        return t;
    }
    checkExpiry(e, t) {
        const { expiry: i } = t;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toMiliseconds"])(i) - Date.now() <= 0 && this.expire(e, t);
    }
    expire(e, t) {
        this.expirations.delete(e), this.events.emit(C.expired, {
            target: e,
            expiration: t
        });
    }
    checkExpirations() {
        this.core.relayer.connected && this.expirations.forEach((e, t)=>this.checkExpiry(t, e));
    }
    registerEventListeners() {
        this.core.heartbeat.on(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$heartbeat$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HEARTBEAT_EVENTS"].pulse, ()=>this.checkExpirations()), this.events.on(C.created, (e)=>{
            const t = C.created;
            this.logger.info(`Emitting ${t}`), this.logger.debug({
                type: "event",
                event: t,
                data: e
            }), this.persist();
        }), this.events.on(C.expired, (e)=>{
            const t = C.expired;
            this.logger.info(`Emitting ${t}`), this.logger.debug({
                type: "event",
                event: t,
                data: e
            }), this.persist();
        }), this.events.on(C.deleted, (e)=>{
            const t = C.deleted;
            this.logger.info(`Emitting ${t}`), this.logger.debug({
                type: "event",
                event: t,
                data: e
            }), this.persist();
        });
    }
    isInitialized() {
        if (!this.initialized) {
            const { message: e } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getInternalError"])("NOT_INITIALIZED", this.name);
            throw new Error(e);
        }
    }
}
class Gt extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$types$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IVerify"] {
    constructor(e, t){
        super(e, t), this.projectId = e, this.logger = t, this.name = ee, this.initialized = !1, this.queue = [], this.verifyDisabled = !1, this.init = async (i)=>{
            if (this.verifyDisabled || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isReactNative"])() || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isBrowser"])()) return;
            const s = this.getVerifyUrl(i?.verifyUrl);
            this.verifyUrl !== s && this.removeIframe(), this.verifyUrl = s;
            try {
                await this.createIframe();
            } catch (r) {
                this.logger.info(`Verify iframe failed to load: ${this.verifyUrl}`), this.logger.info(r);
            }
            if (!this.initialized) {
                this.removeIframe(), this.verifyUrl = te;
                try {
                    await this.createIframe();
                } catch (r) {
                    this.logger.info(`Verify iframe failed to load: ${this.verifyUrl}`), this.logger.info(r), this.verifyDisabled = !0;
                }
            }
        }, this.register = async (i)=>{
            this.initialized ? this.sendPost(i.attestationId) : (this.addToQueue(i.attestationId), await this.init());
        }, this.resolve = async (i)=>{
            if (this.isDevEnv) return "";
            const s = this.getVerifyUrl(i?.verifyUrl);
            let r;
            try {
                r = await this.fetchAttestation(i.attestationId, s);
            } catch (n) {
                this.logger.info(`failed to resolve attestation: ${i.attestationId} from url: ${s}`), this.logger.info(n), r = await this.fetchAttestation(i.attestationId, te);
            }
            return r;
        }, this.fetchAttestation = async (i, s)=>{
            this.logger.info(`resolving attestation: ${i} from url: ${s}`);
            const r = this.startAbortTimer(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ONE_SECOND"] * 2), n = await fetch(`${s}/attestation/${i}`, {
                signal: this.abortController.signal
            });
            return clearTimeout(r), n.status === 200 ? await n.json() : void 0;
        }, this.addToQueue = (i)=>{
            this.queue.push(i);
        }, this.processQueue = ()=>{
            this.queue.length !== 0 && (this.queue.forEach((i)=>this.sendPost(i)), this.queue = []);
        }, this.sendPost = (i)=>{
            var s;
            try {
                if (!this.iframe) return;
                (s = this.iframe.contentWindow) == null || s.postMessage(i, "*"), this.logger.info(`postMessage sent: ${i} ${this.verifyUrl}`);
            } catch  {}
        }, this.createIframe = async ()=>{
            let i;
            const s = (r)=>{
                r.data === "verify_ready" && (this.onInit(), window.removeEventListener("message", s), i());
            };
            await Promise.race([
                new Promise((r)=>{
                    const n = document.getElementById(ee);
                    if (n) return this.iframe = n, this.onInit(), r();
                    window.addEventListener("message", s);
                    const a = document.createElement("iframe");
                    a.id = ee, a.src = `${this.verifyUrl}/${this.projectId}`, a.style.display = "none", document.body.append(a), this.iframe = a, i = r;
                }),
                new Promise((r, n)=>setTimeout(()=>{
                        window.removeEventListener("message", s), n("verify iframe load timeout");
                    }, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toMiliseconds"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FIVE_SECONDS"])))
            ]);
        }, this.onInit = ()=>{
            this.initialized = !0, this.processQueue();
        }, this.removeIframe = ()=>{
            this.iframe && (this.iframe.remove(), this.iframe = void 0, this.initialized = !1);
        }, this.getVerifyUrl = (i)=>{
            let s = i || M;
            return Rt.includes(s) || (this.logger.info(`verify url: ${s}, not included in trusted list, assigning default: ${M}`), s = M), s;
        }, this.logger = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$logger$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["generateChildLogger"])(t, this.name), this.verifyUrl = M, this.abortController = new AbortController, this.isDevEnv = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNode"])() && process.env.IS_VITEST;
    }
    get context() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$logger$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getLoggerContext"])(this.logger);
    }
    startAbortTimer(e) {
        return this.abortController = new AbortController, setTimeout(()=>this.abortController.abort(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toMiliseconds"])(e));
    }
}
class Yt extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$types$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IEchoClient"] {
    constructor(e, t){
        super(e, t), this.projectId = e, this.logger = t, this.context = St, this.registerDeviceToken = async (i)=>{
            const { clientId: s, token: r, notificationType: n, enableEncrypted: a = !1 } = i, h = `${Pt}/${this.projectId}/clients`;
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$isomorphic$2d$unfetch$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(h, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    client_id: s,
                    type: n,
                    token: r,
                    always_raw: a
                })
            });
        }, this.logger = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$logger$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["generateChildLogger"])(t, this.context);
    }
}
var Ur = Object.defineProperty, Ht = Object.getOwnPropertySymbols, Fr = Object.prototype.hasOwnProperty, $r = Object.prototype.propertyIsEnumerable, Jt = (o, e, t)=>e in o ? Ur(o, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: t
    }) : o[e] = t, Xt = (o, e)=>{
    for(var t in e || (e = {}))Fr.call(e, t) && Jt(o, t, e[t]);
    if (Ht) for (var t of Ht(e))$r.call(e, t) && Jt(o, t, e[t]);
    return o;
};
class ie extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$types$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ICore"] {
    constructor(e){
        var t;
        super(e), this.protocol = De, this.version = Qe, this.name = Z, this.events = new __TURBOPACK__commonjs__external__events__["EventEmitter"], this.initialized = !1, this.on = (n, a)=>this.events.on(n, a), this.once = (n, a)=>this.events.once(n, a), this.off = (n, a)=>this.events.off(n, a), this.removeListener = (n, a)=>this.events.removeListener(n, a), this.projectId = e?.projectId, this.relayUrl = e?.relayUrl || me, this.customStoragePrefix = e != null && e.customStoragePrefix ? `:${e.customStoragePrefix}` : "";
        const i = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$logger$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getDefaultLoggerOptions"])({
            level: typeof e?.logger == "string" && e.logger ? e.logger : Ze.logger
        }), { logger: s, chunkLoggerController: r } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$logger$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["generatePlatformLogger"])({
            opts: i,
            maxSizeInBytes: e?.maxLogBlobSizeInBytes,
            loggerOverride: e?.logger
        });
        this.logChunkController = r, (t = this.logChunkController) != null && t.downloadLogsBlobInBrowser && (window.downloadLogsBlobInBrowser = async ()=>{
            var n, a;
            (n = this.logChunkController) != null && n.downloadLogsBlobInBrowser && ((a = this.logChunkController) == null || a.downloadLogsBlobInBrowser({
                clientId: await this.crypto.getClientId()
            }));
        }), this.logger = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$logger$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["generateChildLogger"])(s, this.name), this.heartbeat = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$heartbeat$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HeartBeat"], this.crypto = new Ot(this, this.logger, e?.keychain), this.history = new qt(this, this.logger), this.expirer = new jt(this, this.logger), this.storage = e != null && e.storage ? e.storage : new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$keyvaluestorage$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](Xt(Xt({}, et), e?.storageOptions)), this.relayer = new $t({
            core: this,
            logger: this.logger,
            relayUrl: this.relayUrl,
            projectId: this.projectId
        }), this.pairing = new Vt(this, this.logger), this.verify = new Gt(this.projectId || "", this.logger), this.echoClient = new Yt(this.projectId || "", this.logger);
    }
    static async init(e) {
        const t = new ie(e);
        await t.initialize();
        const i = await t.crypto.getClientId();
        return await t.storage.setItem(mt, i), t;
    }
    get context() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$logger$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getLoggerContext"])(this.logger);
    }
    async start() {
        this.initialized || await this.initialize();
    }
    async getLogsBlob() {
        var e;
        return (e = this.logChunkController) == null ? void 0 : e.logsToBlob({
            clientId: await this.crypto.getClientId()
        });
    }
    async initialize() {
        this.logger.trace("Initialized");
        try {
            await this.crypto.init(), await this.history.init(), await this.expirer.init(), await this.relayer.init(), await this.heartbeat.init(), await this.pairing.init(), this.initialized = !0, this.logger.info("Core Initialization Success");
        } catch (e) {
            throw this.logger.warn(`Core Initialization Failure at epoch ${Date.now()}`, e), this.logger.error(e.message), e;
        }
    }
}
const Br = ie;
;
 //# sourceMappingURL=index.es.js.map

})()),

};

//# sourceMappingURL=1b84e_%40walletconnect_core_dist_index_es_6f0a58.js.map