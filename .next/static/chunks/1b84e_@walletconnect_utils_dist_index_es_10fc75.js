(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/1b84e_@walletconnect_utils_dist_index_es_10fc75.js", {

"[project]/node_modules/@web3modal/wagmi/node_modules/@walletconnect/utils/dist/index.es.js [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "BASE10": ()=>Gi,
    "BASE16": ()=>zt,
    "BASE64": ()=>Jr,
    "COLON": ()=>Yo,
    "DEFAULT_DEPTH": ()=>di,
    "EMPTY_SPACE": ()=>Br,
    "ENV_MAP": ()=>qt,
    "INTERNAL_ERRORS": ()=>Ao,
    "MemoryStore": ()=>lh,
    "ONE_THOUSAND": ()=>Vo,
    "REACT_NATIVE_PRODUCT": ()=>xn,
    "RELAYER_DEFAULT_PROTOCOL": ()=>ro,
    "SDK_ERRORS": ()=>go,
    "SDK_TYPE": ()=>En,
    "SLASH": ()=>Mn,
    "TYPE_0": ()=>Yi,
    "TYPE_1": ()=>lr,
    "UTF8": ()=>Gr,
    "addResourceToRecap": ()=>Vf,
    "appendToQueryString": ()=>Sn,
    "assertType": ()=>e0,
    "assignAbilityToActions": ()=>ji,
    "base64Decode": ()=>Gf,
    "base64Encode": ()=>Jf,
    "buildApprovedNamespaces": ()=>Lu,
    "buildAuthObject": ()=>su,
    "buildNamespacesFromAuth": ()=>ju,
    "buildRecapStatement": ()=>Xf,
    "calcExpiry": ()=>d0,
    "capitalize": ()=>s0,
    "capitalizeWord": ()=>Rn,
    "createDelayedPromise": ()=>a0,
    "createEncodedRecap": ()=>cu,
    "createExpiringPromise": ()=>u0,
    "createRecap": ()=>Yf,
    "decodeRecap": ()=>Oe,
    "decodeTypeByte": ()=>Mr,
    "decrypt": ()=>xu,
    "deriveSymKey": ()=>Au,
    "deserialize": ()=>Xi,
    "encodeRecap": ()=>jr,
    "encodeTypeByte": ()=>$f,
    "encrypt": ()=>wu,
    "engineEvent": ()=>v0,
    "enumify": ()=>o0,
    "formatAccountId": ()=>vn,
    "formatAccountWithChain": ()=>Ko,
    "formatChainId": ()=>pn,
    "formatExpirerTarget": ()=>vi,
    "formatIdTarget": ()=>c0,
    "formatMessage": ()=>zf,
    "formatMessageContext": ()=>r0,
    "formatRelayParams": ()=>ao,
    "formatRelayRpcUrl": ()=>$o,
    "formatStatementFromRecap": ()=>Ji,
    "formatTopicTarget": ()=>h0,
    "formatUA": ()=>_n,
    "formatUri": ()=>Du,
    "generateKeyPair": ()=>mu,
    "generateRandomBytes32": ()=>gu,
    "getAccountsChains": ()=>$e,
    "getAccountsFromNamespaces": ()=>zo,
    "getAddressFromAccount": ()=>mn,
    "getAddressesFromAccounts": ()=>Ho,
    "getAppMetadata": ()=>Xo,
    "getBrowserOnlineStatus": ()=>Bo,
    "getBundleId": ()=>Wo,
    "getChainFromAccount": ()=>gn,
    "getChainsFromAccounts": ()=>An,
    "getChainsFromNamespace": ()=>_r,
    "getChainsFromNamespaces": ()=>Lo,
    "getChainsFromRecap": ()=>pu,
    "getChainsFromRequiredNamespaces": ()=>jo,
    "getCommonValuesInArrays": ()=>mi,
    "getDecodedRecapFromResources": ()=>Lf,
    "getDeepLink": ()=>g0,
    "getDidAddress": ()=>Li,
    "getDidAddressSegments": ()=>Lr,
    "getDidChainId": ()=>zi,
    "getEnvironment": ()=>We,
    "getHttpUrl": ()=>t0,
    "getInternalError": ()=>xe,
    "getJavascriptID": ()=>In,
    "getJavascriptOS": ()=>Nn,
    "getLastItems": ()=>Cn,
    "getMethodsFromRecap": ()=>du,
    "getNamespacedDidChainId": ()=>fu,
    "getNamespacesChains": ()=>co,
    "getNamespacesEventsForChainId": ()=>po,
    "getNamespacesFromAccounts": ()=>mo,
    "getNamespacesMethodsForChainId": ()=>lo,
    "getNodeOnlineStatus": ()=>Ro,
    "getReCapActions": ()=>Qf,
    "getReactNativeOnlineStatus": ()=>Co,
    "getRecapAbilitiesFromResource": ()=>hu,
    "getRecapFromResources": ()=>Qr,
    "getRecapResource": ()=>jf,
    "getRelayClientMetadata": ()=>Zo,
    "getRelayProtocolApi": ()=>Nu,
    "getRelayProtocolName": ()=>Su,
    "getRequiredNamespacesFromNamespaces": ()=>zu,
    "getSdkError": ()=>tr,
    "getUniqueValues": ()=>li,
    "handleDeeplinkRedirect": ()=>m0,
    "hasOverlap": ()=>_e,
    "hashKey": ()=>bu,
    "hashMessage": ()=>yu,
    "isBrowser": ()=>pr,
    "isCaipNamespace": ()=>Zi,
    "isConformingNamespaces": ()=>Io,
    "isExpired": ()=>p0,
    "isNode": ()=>pi,
    "isOnline": ()=>hh,
    "isProposalStruct": ()=>Gu,
    "isReactNative": ()=>er,
    "isRecap": ()=>Qi,
    "isSessionCompatible": ()=>Qu,
    "isSessionStruct": ()=>Yu,
    "isTypeOneEnvelope": ()=>Eu,
    "isUndefined": ()=>Pe,
    "isValidAccountId": ()=>bo,
    "isValidAccounts": ()=>xo,
    "isValidActions": ()=>Eo,
    "isValidArray": ()=>Er,
    "isValidChainId": ()=>Sr,
    "isValidChains": ()=>yo,
    "isValidController": ()=>Vu,
    "isValidEip1271Signature": ()=>kf,
    "isValidEip191Signature": ()=>Uf,
    "isValidErrorReason": ()=>th,
    "isValidEvent": ()=>ih,
    "isValidId": ()=>Zu,
    "isValidNamespaceAccounts": ()=>Mo,
    "isValidNamespaceActions": ()=>en,
    "isValidNamespaceChains": ()=>wo,
    "isValidNamespaceMethodsOrEvents": ()=>tn,
    "isValidNamespaces": ()=>So,
    "isValidNamespacesChainId": ()=>nh,
    "isValidNamespacesEvent": ()=>oh,
    "isValidNamespacesRequest": ()=>fh,
    "isValidNumber": ()=>Vr,
    "isValidObject": ()=>Yr,
    "isValidParams": ()=>$u,
    "isValidRecap": ()=>me,
    "isValidRelay": ()=>No,
    "isValidRelays": ()=>Xu,
    "isValidRequest": ()=>eh,
    "isValidRequestExpiry": ()=>uh,
    "isValidRequiredNamespaces": ()=>Wu,
    "isValidResponse": ()=>rh,
    "isValidString": ()=>Gt,
    "isValidUrl": ()=>Ju,
    "mapEntries": ()=>f0,
    "mapToObj": ()=>i0,
    "mergeArrays": ()=>ge,
    "mergeEncodedRecaps": ()=>lu,
    "mergeRecaps": ()=>Wf,
    "normalizeNamespaces": ()=>$i,
    "objToMap": ()=>n0,
    "parseAccountId": ()=>ci,
    "parseChainId": ()=>dn,
    "parseContextNames": ()=>Bn,
    "parseExpirerTarget": ()=>l0,
    "parseNamespaceKey": ()=>vo,
    "parseRelayParams": ()=>oo,
    "parseTopic": ()=>so,
    "parseUri": ()=>Pu,
    "populateAuthPayload": ()=>au,
    "recapHasResource": ()=>uu,
    "serialize": ()=>to,
    "subscribeToBrowserNetworkChange": ()=>Oo,
    "subscribeToNetworkChange": ()=>ch,
    "subscribeToReactNativeNetworkChange": ()=>Po,
    "validateDecoding": ()=>Mu,
    "validateEncoding": ()=>eo,
    "validateSignedCacao": ()=>ou,
    "verifySignature": ()=>Tf
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$detect$2d$browser$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/detect-browser/es/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@walletconnect/time/dist/cjs/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$window$2d$getters$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@walletconnect/window-getters/dist/cjs/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$window$2d$metadata$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@walletconnect/window-metadata/dist/cjs/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$query$2d$string$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/query-string/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stablelib$2f$chacha20poly1305$2f$lib$2f$chacha20poly1305$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@stablelib/chacha20poly1305/lib/chacha20poly1305.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stablelib$2f$hkdf$2f$lib$2f$hkdf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@stablelib/hkdf/lib/hkdf.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stablelib$2f$random$2f$lib$2f$random$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@stablelib/random/lib/random.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stablelib$2f$sha256$2f$lib$2f$sha256$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@stablelib/sha256/lib/sha256.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stablelib$2f$x25519$2f$lib$2f$x25519$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@stablelib/x25519/lib/x25519.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/uint8arrays/esm/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$to$2d$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/uint8arrays/esm/src/to-string.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$from$2d$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/uint8arrays/esm/src/from-string.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$concat$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/uint8arrays/esm/src/concat.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$relay$2d$api$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@web3modal/wagmi/node_modules/@walletconnect/relay-api/dist/index.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/buffer/index.js [app-client] (ecmascript)");
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
const Ir = ":";
function dn(e) {
    const [t, r] = e.split(Ir);
    return {
        namespace: t,
        reference: r
    };
}
function pn(e) {
    const { namespace: t, reference: r } = e;
    return [
        t,
        r
    ].join(Ir);
}
function ci(e) {
    const [t, r, i] = e.split(Ir);
    return {
        namespace: t,
        reference: r,
        address: i
    };
}
function vn(e) {
    const { namespace: t, reference: r, address: i } = e;
    return [
        t,
        r,
        i
    ].join(Ir);
}
function li(e, t) {
    const r = [];
    return e.forEach((i)=>{
        const n = t(i);
        r.includes(n) || r.push(n);
    }), r;
}
function mn(e) {
    const { address: t } = ci(e);
    return t;
}
function gn(e) {
    const { namespace: t, reference: r } = ci(e);
    return pn({
        namespace: t,
        reference: r
    });
}
function Ko(e, t) {
    const { namespace: r, reference: i } = dn(t);
    return vn({
        namespace: r,
        reference: i,
        address: e
    });
}
function Ho(e) {
    return li(e, mn);
}
function An(e) {
    return li(e, gn);
}
function zo(e, t = []) {
    const r = [];
    return Object.keys(e).forEach((i)=>{
        if (t.length && !t.includes(i)) return;
        const n = e[i];
        r.push(...n.accounts);
    }), r;
}
function Lo(e, t = []) {
    const r = [];
    return Object.keys(e).forEach((i)=>{
        if (t.length && !t.includes(i)) return;
        const n = e[i];
        r.push(...An(n.accounts));
    }), r;
}
function jo(e, t = []) {
    const r = [];
    return Object.keys(e).forEach((i)=>{
        if (t.length && !t.includes(i)) return;
        const n = e[i];
        r.push(..._r(i, n));
    }), r;
}
function _r(e, t) {
    return e.includes(":") ? [
        e
    ] : t.chains || [];
}
var Qo = Object.defineProperty, bn = Object.getOwnPropertySymbols, Jo = Object.prototype.hasOwnProperty, Go = Object.prototype.propertyIsEnumerable, yn = (e, t, r)=>t in e ? Qo(e, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: r
    }) : e[t] = r, wn = (e, t)=>{
    for(var r in t || (t = {}))Jo.call(t, r) && yn(e, r, t[r]);
    if (bn) for (var r of bn(t))Go.call(t, r) && yn(e, r, t[r]);
    return e;
};
const xn = "ReactNative", qt = {
    reactNative: "react-native",
    node: "node",
    browser: "browser",
    unknown: "unknown"
}, Br = " ", Yo = ":", Mn = "/", di = 2, Vo = 1e3, En = "js";
function pi() {
    return typeof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] < "u" && typeof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].versions < "u" && typeof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].versions.node < "u";
}
function er() {
    return !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$window$2d$getters$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocument"])() && !!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$window$2d$getters$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNavigator"])() && navigator.product === xn;
}
function pr() {
    return !pi() && !!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$window$2d$getters$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNavigator"])() && !!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$window$2d$getters$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocument"])();
}
function We() {
    return er() ? qt.reactNative : pi() ? qt.node : pr() ? qt.browser : qt.unknown;
}
function Wo() {
    var e;
    try {
        return er() && typeof global < "u" && typeof (global == null ? void 0 : global.Application) < "u" ? (e = global.Application) == null ? void 0 : e.applicationId : void 0;
    } catch  {
        return;
    }
}
function Sn(e, t) {
    let r = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$query$2d$string$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.parse(e);
    return r = wn(wn({}, r), t), e = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$query$2d$string$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.stringify(r), e;
}
function Xo() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$window$2d$metadata$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getWindowMetadata"])() || {
        name: "",
        description: "",
        url: "",
        icons: [
            ""
        ]
    };
}
function Zo(e, t) {
    var r;
    const i = We(), n = {
        protocol: e,
        version: t,
        env: i
    };
    return i === "browser" && (n.host = ((r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$window$2d$getters$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLocation"])()) == null ? void 0 : r.host) || "unknown"), n;
}
function Nn() {
    if (We() === qt.reactNative && typeof global < "u" && typeof (global == null ? void 0 : global.Platform) < "u") {
        const { OS: r, Version: i } = global.Platform;
        return [
            r,
            i
        ].join("-");
    }
    const e = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$detect$2d$browser$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["detect"])();
    if (e === null) return "unknown";
    const t = e.os ? e.os.replace(" ", "").toLowerCase() : "unknown";
    return e.type === "browser" ? [
        t,
        e.name,
        e.version
    ].join("-") : [
        t,
        e.version
    ].join("-");
}
function In() {
    var e;
    const t = We();
    return t === qt.browser ? [
        t,
        ((e = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$window$2d$getters$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLocation"])()) == null ? void 0 : e.host) || "unknown"
    ].join(":") : t;
}
function _n(e, t, r) {
    const i = Nn(), n = In();
    return [
        [
            e,
            t
        ].join("-"),
        [
            En,
            r
        ].join("-"),
        i,
        n
    ].join("/");
}
function $o({ protocol: e, version: t, relayUrl: r, sdkVersion: i, auth: n, projectId: o, useOnCloseEvent: h, bundleId: p }) {
    const b = r.split("?"), m = _n(e, t, i), w = {
        auth: n,
        ua: m,
        projectId: o,
        useOnCloseEvent: h || void 0,
        origin: p || void 0
    }, y = Sn(b[1] || "", w);
    return b[0] + "?" + y;
}
function t0(e) {
    let t = (e.match(/^[^:]+(?=:\/\/)/gi) || [])[0];
    const r = typeof t < "u" ? e.split("://")[1] : e;
    return t = t === "wss" ? "https" : "http", [
        t,
        r
    ].join("://");
}
function e0(e, t, r) {
    if (!e[t] || typeof e[t] !== r) throw new Error(`Missing or invalid "${t}" param`);
}
function Bn(e, t = di) {
    return Cn(e.split(Mn), t);
}
function r0(e) {
    return Bn(e).join(Br);
}
function _e(e, t) {
    return e.filter((r)=>t.includes(r)).length === e.length;
}
function Cn(e, t = di) {
    return e.slice(Math.max(e.length - t, 0));
}
function i0(e) {
    return Object.fromEntries(e.entries());
}
function n0(e) {
    return new Map(Object.entries(e));
}
function f0(e, t) {
    const r = {};
    return Object.keys(e).forEach((i)=>{
        r[i] = t(e[i]);
    }), r;
}
const o0 = (e)=>e;
function Rn(e) {
    return e.trim().replace(/^\w/, (t)=>t.toUpperCase());
}
function s0(e) {
    return e.split(Br).map((t)=>Rn(t)).join(Br);
}
function a0(e = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FIVE_MINUTES"], t) {
    const r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toMiliseconds"])(e || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FIVE_MINUTES"]);
    let i, n, o;
    return {
        resolve: (h)=>{
            o && i && (clearTimeout(o), i(h));
        },
        reject: (h)=>{
            o && n && (clearTimeout(o), n(h));
        },
        done: ()=>new Promise((h, p)=>{
                o = setTimeout(()=>{
                    p(new Error(t));
                }, r), i = h, n = p;
            })
    };
}
function u0(e, t, r) {
    return new Promise(async (i, n)=>{
        const o = setTimeout(()=>n(new Error(r)), t);
        try {
            const h = await e;
            i(h);
        } catch (h) {
            n(h);
        }
        clearTimeout(o);
    });
}
function vi(e, t) {
    if (typeof t == "string" && t.startsWith(`${e}:`)) return t;
    if (e.toLowerCase() === "topic") {
        if (typeof t != "string") throw new Error('Value must be "string" for expirer target type: topic');
        return `topic:${t}`;
    } else if (e.toLowerCase() === "id") {
        if (typeof t != "number") throw new Error('Value must be "number" for expirer target type: id');
        return `id:${t}`;
    }
    throw new Error(`Unknown expirer target type: ${e}`);
}
function h0(e) {
    return vi("topic", e);
}
function c0(e) {
    return vi("id", e);
}
function l0(e) {
    const [t, r] = e.split(":"), i = {
        id: void 0,
        topic: void 0
    };
    if (t === "topic" && typeof r == "string") i.topic = r;
    else if (t === "id" && Number.isInteger(Number(r))) i.id = Number(r);
    else throw new Error(`Invalid target, expected id:number or topic:string, got ${t}:${r}`);
    return i;
}
function d0(e, t) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fromMiliseconds"])((t || Date.now()) + (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toMiliseconds"])(e));
}
function p0(e) {
    return Date.now() >= (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toMiliseconds"])(e);
}
function v0(e, t) {
    return `${e}${t ? `:${t}` : ""}`;
}
function ge(e = [], t = []) {
    return [
        ...new Set([
            ...e,
            ...t
        ])
    ];
}
async function m0({ id: e, topic: t, wcDeepLink: r }) {
    try {
        if (!r) return;
        const i = typeof r == "string" ? JSON.parse(r) : r;
        let n = i?.href;
        if (typeof n != "string") return;
        n.endsWith("/") && (n = n.slice(0, -1));
        const o = `${n}/wc?requestId=${e}&sessionTopic=${t}`, h = We();
        h === qt.browser ? o.startsWith("https://") || o.startsWith("http://") ? window.open(o, "_blank", "noreferrer noopener") : window.open(o, "_self", "noreferrer noopener") : h === qt.reactNative && typeof (global == null ? void 0 : global.Linking) < "u" && await global.Linking.openURL(o);
    } catch (i) {
        console.error(i);
    }
}
async function g0(e, t) {
    try {
        return await e.getItem(t) || (pr() ? localStorage.getItem(t) : void 0);
    } catch (r) {
        console.error(r);
    }
}
function mi(e, t) {
    return e.filter((r)=>t.includes(r));
}
var On = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function A0(e) {
    var t = e.default;
    if (typeof t == "function") {
        var r = function() {
            return t.apply(this, arguments);
        };
        r.prototype = t.prototype;
    } else r = {};
    return Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.keys(e).forEach(function(i) {
        var n = Object.getOwnPropertyDescriptor(e, i);
        Object.defineProperty(r, i, n.get ? n : {
            enumerable: !0,
            get: function() {
                return e[i];
            }
        });
    }), r;
}
var Pn = {
    exports: {}
}; /**
 * [js-sha3]{@link https://github.com/emn178/js-sha3}
 *
 * @version 0.8.0
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2015-2018
 * @license MIT
 */ 
(function(e) {
    (function() {
        var t = "input is invalid type", r = "finalize already called", i = typeof window == "object", n = i ? window : {};
        n.JS_SHA3_NO_WINDOW && (i = !1);
        var o = !i && typeof self == "object", h = !n.JS_SHA3_NO_NODE_JS && typeof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] == "object" && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].versions && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].versions.node;
        h ? n = On : o && (n = self);
        var p = !n.JS_SHA3_NO_COMMON_JS && !0 && e.exports, b = !n.JS_SHA3_NO_ARRAY_BUFFER && typeof ArrayBuffer < "u", m = "0123456789abcdef".split(""), w = [
            31,
            7936,
            2031616,
            520093696
        ], y = [
            4,
            1024,
            262144,
            67108864
        ], S = [
            1,
            256,
            65536,
            16777216
        ], I = [
            6,
            1536,
            393216,
            100663296
        ], N = [
            0,
            8,
            16,
            24
        ], C = [
            1,
            0,
            32898,
            0,
            32906,
            2147483648,
            2147516416,
            2147483648,
            32907,
            0,
            2147483649,
            0,
            2147516545,
            2147483648,
            32777,
            2147483648,
            138,
            0,
            136,
            0,
            2147516425,
            0,
            2147483658,
            0,
            2147516555,
            0,
            139,
            2147483648,
            32905,
            2147483648,
            32771,
            2147483648,
            32770,
            2147483648,
            128,
            2147483648,
            32778,
            0,
            2147483658,
            2147483648,
            2147516545,
            2147483648,
            32896,
            2147483648,
            2147483649,
            0,
            2147516424,
            2147483648
        ], F = [
            224,
            256,
            384,
            512
        ], U = [
            128,
            256
        ], J = [
            "hex",
            "buffer",
            "arrayBuffer",
            "array",
            "digest"
        ], Bt = {
            128: 168,
            256: 136
        };
        (n.JS_SHA3_NO_NODE_JS || !Array.isArray) && (Array.isArray = function(u) {
            return Object.prototype.toString.call(u) === "[object Array]";
        }), b && (n.JS_SHA3_NO_ARRAY_BUFFER_IS_VIEW || !ArrayBuffer.isView) && (ArrayBuffer.isView = function(u) {
            return typeof u == "object" && u.buffer && u.buffer.constructor === ArrayBuffer;
        });
        for(var G = function(u, E, _) {
            return function(B) {
                return new s(u, E, u).update(B)[_]();
            };
        }, H = function(u, E, _) {
            return function(B, R) {
                return new s(u, E, R).update(B)[_]();
            };
        }, z = function(u, E, _) {
            return function(B, R, T, P) {
                return f["cshake" + u].update(B, R, T, P)[_]();
            };
        }, Pt = function(u, E, _) {
            return function(B, R, T, P) {
                return f["kmac" + u].update(B, R, T, P)[_]();
            };
        }, W = function(u, E, _, B) {
            for(var R = 0; R < J.length; ++R){
                var T = J[R];
                u[T] = E(_, B, T);
            }
            return u;
        }, Rt = function(u, E) {
            var _ = G(u, E, "hex");
            return _.create = function() {
                return new s(u, E, u);
            }, _.update = function(B) {
                return _.create().update(B);
            }, W(_, G, u, E);
        }, Yt = function(u, E) {
            var _ = H(u, E, "hex");
            return _.create = function(B) {
                return new s(u, E, B);
            }, _.update = function(B, R) {
                return _.create(R).update(B);
            }, W(_, H, u, E);
        }, Y = function(u, E) {
            var _ = Bt[u], B = z(u, E, "hex");
            return B.create = function(R, T, P) {
                return !T && !P ? f["shake" + u].create(R) : new s(u, E, R).bytepad([
                    T,
                    P
                ], _);
            }, B.update = function(R, T, P, O) {
                return B.create(T, P, O).update(R);
            }, W(B, z, u, E);
        }, Vt = function(u, E) {
            var _ = Bt[u], B = Pt(u, E, "hex");
            return B.create = function(R, T, P) {
                return new v(u, E, T).bytepad([
                    "KMAC",
                    P
                ], _).bytepad([
                    R
                ], _);
            }, B.update = function(R, T, P, O) {
                return B.create(R, P, O).update(T);
            }, W(B, Pt, u, E);
        }, A = [
            {
                name: "keccak",
                padding: S,
                bits: F,
                createMethod: Rt
            },
            {
                name: "sha3",
                padding: I,
                bits: F,
                createMethod: Rt
            },
            {
                name: "shake",
                padding: w,
                bits: U,
                createMethod: Yt
            },
            {
                name: "cshake",
                padding: y,
                bits: U,
                createMethod: Y
            },
            {
                name: "kmac",
                padding: y,
                bits: U,
                createMethod: Vt
            }
        ], f = {}, a = [], c = 0; c < A.length; ++c)for(var d = A[c], g = d.bits, x = 0; x < g.length; ++x){
            var M = d.name + "_" + g[x];
            if (a.push(M), f[M] = d.createMethod(g[x], d.padding), d.name !== "sha3") {
                var l = d.name + g[x];
                a.push(l), f[l] = f[M];
            }
        }
        function s(u, E, _) {
            this.blocks = [], this.s = [], this.padding = E, this.outputBits = _, this.reset = !0, this.finalized = !1, this.block = 0, this.start = 0, this.blockCount = 1600 - (u << 1) >> 5, this.byteCount = this.blockCount << 2, this.outputBlocks = _ >> 5, this.extraBytes = (_ & 31) >> 3;
            for(var B = 0; B < 50; ++B)this.s[B] = 0;
        }
        s.prototype.update = function(u) {
            if (this.finalized) throw new Error(r);
            var E, _ = typeof u;
            if (_ !== "string") {
                if (_ === "object") {
                    if (u === null) throw new Error(t);
                    if (b && u.constructor === ArrayBuffer) u = new Uint8Array(u);
                    else if (!Array.isArray(u) && (!b || !ArrayBuffer.isView(u))) throw new Error(t);
                } else throw new Error(t);
                E = !0;
            }
            for(var B = this.blocks, R = this.byteCount, T = u.length, P = this.blockCount, O = 0, Ct = this.s, D, q; O < T;){
                if (this.reset) for(this.reset = !1, B[0] = this.block, D = 1; D < P + 1; ++D)B[D] = 0;
                if (E) for(D = this.start; O < T && D < R; ++O)B[D >> 2] |= u[O] << N[D++ & 3];
                else for(D = this.start; O < T && D < R; ++O)q = u.charCodeAt(O), q < 128 ? B[D >> 2] |= q << N[D++ & 3] : q < 2048 ? (B[D >> 2] |= (192 | q >> 6) << N[D++ & 3], B[D >> 2] |= (128 | q & 63) << N[D++ & 3]) : q < 55296 || q >= 57344 ? (B[D >> 2] |= (224 | q >> 12) << N[D++ & 3], B[D >> 2] |= (128 | q >> 6 & 63) << N[D++ & 3], B[D >> 2] |= (128 | q & 63) << N[D++ & 3]) : (q = 65536 + ((q & 1023) << 10 | u.charCodeAt(++O) & 1023), B[D >> 2] |= (240 | q >> 18) << N[D++ & 3], B[D >> 2] |= (128 | q >> 12 & 63) << N[D++ & 3], B[D >> 2] |= (128 | q >> 6 & 63) << N[D++ & 3], B[D >> 2] |= (128 | q & 63) << N[D++ & 3]);
                if (this.lastByteIndex = D, D >= R) {
                    for(this.start = D - R, this.block = B[P], D = 0; D < P; ++D)Ct[D] ^= B[D];
                    k(Ct), this.reset = !0;
                } else this.start = D;
            }
            return this;
        }, s.prototype.encode = function(u, E) {
            var _ = u & 255, B = 1, R = [
                _
            ];
            for(u = u >> 8, _ = u & 255; _ > 0;)R.unshift(_), u = u >> 8, _ = u & 255, ++B;
            return E ? R.push(B) : R.unshift(B), this.update(R), R.length;
        }, s.prototype.encodeString = function(u) {
            var E, _ = typeof u;
            if (_ !== "string") {
                if (_ === "object") {
                    if (u === null) throw new Error(t);
                    if (b && u.constructor === ArrayBuffer) u = new Uint8Array(u);
                    else if (!Array.isArray(u) && (!b || !ArrayBuffer.isView(u))) throw new Error(t);
                } else throw new Error(t);
                E = !0;
            }
            var B = 0, R = u.length;
            if (E) B = R;
            else for(var T = 0; T < u.length; ++T){
                var P = u.charCodeAt(T);
                P < 128 ? B += 1 : P < 2048 ? B += 2 : P < 55296 || P >= 57344 ? B += 3 : (P = 65536 + ((P & 1023) << 10 | u.charCodeAt(++T) & 1023), B += 4);
            }
            return B += this.encode(B * 8), this.update(u), B;
        }, s.prototype.bytepad = function(u, E) {
            for(var _ = this.encode(E), B = 0; B < u.length; ++B)_ += this.encodeString(u[B]);
            var R = E - _ % E, T = [];
            return T.length = R, this.update(T), this;
        }, s.prototype.finalize = function() {
            if (!this.finalized) {
                this.finalized = !0;
                var u = this.blocks, E = this.lastByteIndex, _ = this.blockCount, B = this.s;
                if (u[E >> 2] |= this.padding[E & 3], this.lastByteIndex === this.byteCount) for(u[0] = u[_], E = 1; E < _ + 1; ++E)u[E] = 0;
                for(u[_ - 1] |= 2147483648, E = 0; E < _; ++E)B[E] ^= u[E];
                k(B);
            }
        }, s.prototype.toString = s.prototype.hex = function() {
            this.finalize();
            for(var u = this.blockCount, E = this.s, _ = this.outputBlocks, B = this.extraBytes, R = 0, T = 0, P = "", O; T < _;){
                for(R = 0; R < u && T < _; ++R, ++T)O = E[R], P += m[O >> 4 & 15] + m[O & 15] + m[O >> 12 & 15] + m[O >> 8 & 15] + m[O >> 20 & 15] + m[O >> 16 & 15] + m[O >> 28 & 15] + m[O >> 24 & 15];
                T % u === 0 && (k(E), R = 0);
            }
            return B && (O = E[R], P += m[O >> 4 & 15] + m[O & 15], B > 1 && (P += m[O >> 12 & 15] + m[O >> 8 & 15]), B > 2 && (P += m[O >> 20 & 15] + m[O >> 16 & 15])), P;
        }, s.prototype.arrayBuffer = function() {
            this.finalize();
            var u = this.blockCount, E = this.s, _ = this.outputBlocks, B = this.extraBytes, R = 0, T = 0, P = this.outputBits >> 3, O;
            B ? O = new ArrayBuffer(_ + 1 << 2) : O = new ArrayBuffer(P);
            for(var Ct = new Uint32Array(O); T < _;){
                for(R = 0; R < u && T < _; ++R, ++T)Ct[T] = E[R];
                T % u === 0 && k(E);
            }
            return B && (Ct[R] = E[R], O = O.slice(0, P)), O;
        }, s.prototype.buffer = s.prototype.arrayBuffer, s.prototype.digest = s.prototype.array = function() {
            this.finalize();
            for(var u = this.blockCount, E = this.s, _ = this.outputBlocks, B = this.extraBytes, R = 0, T = 0, P = [], O, Ct; T < _;){
                for(R = 0; R < u && T < _; ++R, ++T)O = T << 2, Ct = E[R], P[O] = Ct & 255, P[O + 1] = Ct >> 8 & 255, P[O + 2] = Ct >> 16 & 255, P[O + 3] = Ct >> 24 & 255;
                T % u === 0 && k(E);
            }
            return B && (O = T << 2, Ct = E[R], P[O] = Ct & 255, B > 1 && (P[O + 1] = Ct >> 8 & 255), B > 2 && (P[O + 2] = Ct >> 16 & 255)), P;
        };
        function v(u, E, _) {
            s.call(this, u, E, _);
        }
        v.prototype = new s, v.prototype.finalize = function() {
            return this.encode(this.outputBits, !0), s.prototype.finalize.call(this);
        };
        var k = function(u) {
            var E, _, B, R, T, P, O, Ct, D, q, De, X, Z, Fe, $, tt, Te, et, rt, Ue, it, nt, ke, ft, ot, qe, st, at, Ke, ut, ht, He, ct, lt, ze, dt, pt, Le, vt, mt, je, gt, At, Qe, bt, yt, Je, wt, xt, Ge, Mt, Et, Ye, St, Nt, Ve, It, _t, Me, Ee, Se, Ne, Ie;
            for(B = 0; B < 48; B += 2)R = u[0] ^ u[10] ^ u[20] ^ u[30] ^ u[40], T = u[1] ^ u[11] ^ u[21] ^ u[31] ^ u[41], P = u[2] ^ u[12] ^ u[22] ^ u[32] ^ u[42], O = u[3] ^ u[13] ^ u[23] ^ u[33] ^ u[43], Ct = u[4] ^ u[14] ^ u[24] ^ u[34] ^ u[44], D = u[5] ^ u[15] ^ u[25] ^ u[35] ^ u[45], q = u[6] ^ u[16] ^ u[26] ^ u[36] ^ u[46], De = u[7] ^ u[17] ^ u[27] ^ u[37] ^ u[47], X = u[8] ^ u[18] ^ u[28] ^ u[38] ^ u[48], Z = u[9] ^ u[19] ^ u[29] ^ u[39] ^ u[49], E = X ^ (P << 1 | O >>> 31), _ = Z ^ (O << 1 | P >>> 31), u[0] ^= E, u[1] ^= _, u[10] ^= E, u[11] ^= _, u[20] ^= E, u[21] ^= _, u[30] ^= E, u[31] ^= _, u[40] ^= E, u[41] ^= _, E = R ^ (Ct << 1 | D >>> 31), _ = T ^ (D << 1 | Ct >>> 31), u[2] ^= E, u[3] ^= _, u[12] ^= E, u[13] ^= _, u[22] ^= E, u[23] ^= _, u[32] ^= E, u[33] ^= _, u[42] ^= E, u[43] ^= _, E = P ^ (q << 1 | De >>> 31), _ = O ^ (De << 1 | q >>> 31), u[4] ^= E, u[5] ^= _, u[14] ^= E, u[15] ^= _, u[24] ^= E, u[25] ^= _, u[34] ^= E, u[35] ^= _, u[44] ^= E, u[45] ^= _, E = Ct ^ (X << 1 | Z >>> 31), _ = D ^ (Z << 1 | X >>> 31), u[6] ^= E, u[7] ^= _, u[16] ^= E, u[17] ^= _, u[26] ^= E, u[27] ^= _, u[36] ^= E, u[37] ^= _, u[46] ^= E, u[47] ^= _, E = q ^ (R << 1 | T >>> 31), _ = De ^ (T << 1 | R >>> 31), u[8] ^= E, u[9] ^= _, u[18] ^= E, u[19] ^= _, u[28] ^= E, u[29] ^= _, u[38] ^= E, u[39] ^= _, u[48] ^= E, u[49] ^= _, Fe = u[0], $ = u[1], yt = u[11] << 4 | u[10] >>> 28, Je = u[10] << 4 | u[11] >>> 28, at = u[20] << 3 | u[21] >>> 29, Ke = u[21] << 3 | u[20] >>> 29, Ee = u[31] << 9 | u[30] >>> 23, Se = u[30] << 9 | u[31] >>> 23, gt = u[40] << 18 | u[41] >>> 14, At = u[41] << 18 | u[40] >>> 14, lt = u[2] << 1 | u[3] >>> 31, ze = u[3] << 1 | u[2] >>> 31, tt = u[13] << 12 | u[12] >>> 20, Te = u[12] << 12 | u[13] >>> 20, wt = u[22] << 10 | u[23] >>> 22, xt = u[23] << 10 | u[22] >>> 22, ut = u[33] << 13 | u[32] >>> 19, ht = u[32] << 13 | u[33] >>> 19, Ne = u[42] << 2 | u[43] >>> 30, Ie = u[43] << 2 | u[42] >>> 30, St = u[5] << 30 | u[4] >>> 2, Nt = u[4] << 30 | u[5] >>> 2, dt = u[14] << 6 | u[15] >>> 26, pt = u[15] << 6 | u[14] >>> 26, et = u[25] << 11 | u[24] >>> 21, rt = u[24] << 11 | u[25] >>> 21, Ge = u[34] << 15 | u[35] >>> 17, Mt = u[35] << 15 | u[34] >>> 17, He = u[45] << 29 | u[44] >>> 3, ct = u[44] << 29 | u[45] >>> 3, ft = u[6] << 28 | u[7] >>> 4, ot = u[7] << 28 | u[6] >>> 4, Ve = u[17] << 23 | u[16] >>> 9, It = u[16] << 23 | u[17] >>> 9, Le = u[26] << 25 | u[27] >>> 7, vt = u[27] << 25 | u[26] >>> 7, Ue = u[36] << 21 | u[37] >>> 11, it = u[37] << 21 | u[36] >>> 11, Et = u[47] << 24 | u[46] >>> 8, Ye = u[46] << 24 | u[47] >>> 8, Qe = u[8] << 27 | u[9] >>> 5, bt = u[9] << 27 | u[8] >>> 5, qe = u[18] << 20 | u[19] >>> 12, st = u[19] << 20 | u[18] >>> 12, _t = u[29] << 7 | u[28] >>> 25, Me = u[28] << 7 | u[29] >>> 25, mt = u[38] << 8 | u[39] >>> 24, je = u[39] << 8 | u[38] >>> 24, nt = u[48] << 14 | u[49] >>> 18, ke = u[49] << 14 | u[48] >>> 18, u[0] = Fe ^ ~tt & et, u[1] = $ ^ ~Te & rt, u[10] = ft ^ ~qe & at, u[11] = ot ^ ~st & Ke, u[20] = lt ^ ~dt & Le, u[21] = ze ^ ~pt & vt, u[30] = Qe ^ ~yt & wt, u[31] = bt ^ ~Je & xt, u[40] = St ^ ~Ve & _t, u[41] = Nt ^ ~It & Me, u[2] = tt ^ ~et & Ue, u[3] = Te ^ ~rt & it, u[12] = qe ^ ~at & ut, u[13] = st ^ ~Ke & ht, u[22] = dt ^ ~Le & mt, u[23] = pt ^ ~vt & je, u[32] = yt ^ ~wt & Ge, u[33] = Je ^ ~xt & Mt, u[42] = Ve ^ ~_t & Ee, u[43] = It ^ ~Me & Se, u[4] = et ^ ~Ue & nt, u[5] = rt ^ ~it & ke, u[14] = at ^ ~ut & He, u[15] = Ke ^ ~ht & ct, u[24] = Le ^ ~mt & gt, u[25] = vt ^ ~je & At, u[34] = wt ^ ~Ge & Et, u[35] = xt ^ ~Mt & Ye, u[44] = _t ^ ~Ee & Ne, u[45] = Me ^ ~Se & Ie, u[6] = Ue ^ ~nt & Fe, u[7] = it ^ ~ke & $, u[16] = ut ^ ~He & ft, u[17] = ht ^ ~ct & ot, u[26] = mt ^ ~gt & lt, u[27] = je ^ ~At & ze, u[36] = Ge ^ ~Et & Qe, u[37] = Mt ^ ~Ye & bt, u[46] = Ee ^ ~Ne & St, u[47] = Se ^ ~Ie & Nt, u[8] = nt ^ ~Fe & tt, u[9] = ke ^ ~$ & Te, u[18] = He ^ ~ft & qe, u[19] = ct ^ ~ot & st, u[28] = gt ^ ~lt & dt, u[29] = At ^ ~ze & pt, u[38] = Et ^ ~Qe & yt, u[39] = Ye ^ ~bt & Je, u[48] = Ne ^ ~St & Ve, u[49] = Ie ^ ~Nt & It, u[0] ^= C[B], u[1] ^= C[B + 1];
        };
        if (p) e.exports = f;
        else for(c = 0; c < a.length; ++c)n[a[c]] = f[a[c]];
    })();
})(Pn);
var b0 = Pn.exports;
const y0 = "logger/5.7.0";
let Dn = !1, Fn = !1;
const Cr = {
    debug: 1,
    default: 2,
    info: 2,
    warning: 3,
    error: 4,
    off: 5
};
let Tn = Cr.default, gi = null;
function w0() {
    try {
        const e = [];
        if ([
            "NFD",
            "NFC",
            "NFKD",
            "NFKC"
        ].forEach((t)=>{
            try {
                if ("test".normalize(t) !== "test") throw new Error("bad normalize");
            } catch  {
                e.push(t);
            }
        }), e.length) throw new Error("missing " + e.join(", "));
        if (String.fromCharCode(233).normalize("NFD") !== String.fromCharCode(101, 769)) throw new Error("broken implementation");
    } catch (e) {
        return e.message;
    }
    return null;
}
const Un = w0();
var Ai;
(function(e) {
    e.DEBUG = "DEBUG", e.INFO = "INFO", e.WARNING = "WARNING", e.ERROR = "ERROR", e.OFF = "OFF";
})(Ai || (Ai = {}));
var re;
(function(e) {
    e.UNKNOWN_ERROR = "UNKNOWN_ERROR", e.NOT_IMPLEMENTED = "NOT_IMPLEMENTED", e.UNSUPPORTED_OPERATION = "UNSUPPORTED_OPERATION", e.NETWORK_ERROR = "NETWORK_ERROR", e.SERVER_ERROR = "SERVER_ERROR", e.TIMEOUT = "TIMEOUT", e.BUFFER_OVERRUN = "BUFFER_OVERRUN", e.NUMERIC_FAULT = "NUMERIC_FAULT", e.MISSING_NEW = "MISSING_NEW", e.INVALID_ARGUMENT = "INVALID_ARGUMENT", e.MISSING_ARGUMENT = "MISSING_ARGUMENT", e.UNEXPECTED_ARGUMENT = "UNEXPECTED_ARGUMENT", e.CALL_EXCEPTION = "CALL_EXCEPTION", e.INSUFFICIENT_FUNDS = "INSUFFICIENT_FUNDS", e.NONCE_EXPIRED = "NONCE_EXPIRED", e.REPLACEMENT_UNDERPRICED = "REPLACEMENT_UNDERPRICED", e.UNPREDICTABLE_GAS_LIMIT = "UNPREDICTABLE_GAS_LIMIT", e.TRANSACTION_REPLACED = "TRANSACTION_REPLACED", e.ACTION_REJECTED = "ACTION_REJECTED";
})(re || (re = {}));
const kn = "0123456789abcdef";
class L {
    constructor(t){
        Object.defineProperty(this, "version", {
            enumerable: !0,
            value: t,
            writable: !1
        });
    }
    _log(t, r) {
        const i = t.toLowerCase();
        Cr[i] == null && this.throwArgumentError("invalid log level name", "logLevel", t), !(Tn > Cr[i]) && console.log.apply(console, r);
    }
    debug(...t) {
        this._log(L.levels.DEBUG, t);
    }
    info(...t) {
        this._log(L.levels.INFO, t);
    }
    warn(...t) {
        this._log(L.levels.WARNING, t);
    }
    makeError(t, r, i) {
        if (Fn) return this.makeError("censored error", r, {});
        r || (r = L.errors.UNKNOWN_ERROR), i || (i = {});
        const n = [];
        Object.keys(i).forEach((b)=>{
            const m = i[b];
            try {
                if (m instanceof Uint8Array) {
                    let w = "";
                    for(let y = 0; y < m.length; y++)w += kn[m[y] >> 4], w += kn[m[y] & 15];
                    n.push(b + "=Uint8Array(0x" + w + ")");
                } else n.push(b + "=" + JSON.stringify(m));
            } catch  {
                n.push(b + "=" + JSON.stringify(i[b].toString()));
            }
        }), n.push(`code=${r}`), n.push(`version=${this.version}`);
        const o = t;
        let h = "";
        switch(r){
            case re.NUMERIC_FAULT:
                {
                    h = "NUMERIC_FAULT";
                    const b = t;
                    switch(b){
                        case "overflow":
                        case "underflow":
                        case "division-by-zero":
                            h += "-" + b;
                            break;
                        case "negative-power":
                        case "negative-width":
                            h += "-unsupported";
                            break;
                        case "unbound-bitwise-result":
                            h += "-unbound-result";
                            break;
                    }
                    break;
                }
            case re.CALL_EXCEPTION:
            case re.INSUFFICIENT_FUNDS:
            case re.MISSING_NEW:
            case re.NONCE_EXPIRED:
            case re.REPLACEMENT_UNDERPRICED:
            case re.TRANSACTION_REPLACED:
            case re.UNPREDICTABLE_GAS_LIMIT:
                h = r;
                break;
        }
        h && (t += " [ See: https://links.ethers.org/v5-errors-" + h + " ]"), n.length && (t += " (" + n.join(", ") + ")");
        const p = new Error(t);
        return p.reason = o, p.code = r, Object.keys(i).forEach(function(b) {
            p[b] = i[b];
        }), p;
    }
    throwError(t, r, i) {
        throw this.makeError(t, r, i);
    }
    throwArgumentError(t, r, i) {
        return this.throwError(t, L.errors.INVALID_ARGUMENT, {
            argument: r,
            value: i
        });
    }
    assert(t, r, i, n) {
        t || this.throwError(r, i, n);
    }
    assertArgument(t, r, i, n) {
        t || this.throwArgumentError(r, i, n);
    }
    checkNormalize(t) {
        Un && this.throwError("platform missing String.prototype.normalize", L.errors.UNSUPPORTED_OPERATION, {
            operation: "String.prototype.normalize",
            form: Un
        });
    }
    checkSafeUint53(t, r) {
        typeof t == "number" && (r == null && (r = "value not safe"), (t < 0 || t >= 9007199254740991) && this.throwError(r, L.errors.NUMERIC_FAULT, {
            operation: "checkSafeInteger",
            fault: "out-of-safe-range",
            value: t
        }), t % 1 && this.throwError(r, L.errors.NUMERIC_FAULT, {
            operation: "checkSafeInteger",
            fault: "non-integer",
            value: t
        }));
    }
    checkArgumentCount(t, r, i) {
        i ? i = ": " + i : i = "", t < r && this.throwError("missing argument" + i, L.errors.MISSING_ARGUMENT, {
            count: t,
            expectedCount: r
        }), t > r && this.throwError("too many arguments" + i, L.errors.UNEXPECTED_ARGUMENT, {
            count: t,
            expectedCount: r
        });
    }
    checkNew(t, r) {
        (t === Object || t == null) && this.throwError("missing new", L.errors.MISSING_NEW, {
            name: r.name
        });
    }
    checkAbstract(t, r) {
        t === r ? this.throwError("cannot instantiate abstract class " + JSON.stringify(r.name) + " directly; use a sub-class", L.errors.UNSUPPORTED_OPERATION, {
            name: t.name,
            operation: "new"
        }) : (t === Object || t == null) && this.throwError("missing new", L.errors.MISSING_NEW, {
            name: r.name
        });
    }
    static globalLogger() {
        return gi || (gi = new L(y0)), gi;
    }
    static setCensorship(t, r) {
        if (!t && r && this.globalLogger().throwError("cannot permanently disable censorship", L.errors.UNSUPPORTED_OPERATION, {
            operation: "setCensorship"
        }), Dn) {
            if (!t) return;
            this.globalLogger().throwError("error censorship permanent", L.errors.UNSUPPORTED_OPERATION, {
                operation: "setCensorship"
            });
        }
        Fn = !!t, Dn = !!r;
    }
    static setLogLevel(t) {
        const r = Cr[t.toLowerCase()];
        if (r == null) {
            L.globalLogger().warn("invalid log level - " + t);
            return;
        }
        Tn = r;
    }
    static from(t) {
        return new L(t);
    }
}
L.errors = re, L.levels = Ai;
const x0 = "bytes/5.7.0", Dt = new L(x0);
function qn(e) {
    return !!e.toHexString;
}
function rr(e) {
    return e.slice || (e.slice = function() {
        const t = Array.prototype.slice.call(arguments);
        return rr(new Uint8Array(Array.prototype.slice.apply(e, t)));
    }), e;
}
function M0(e) {
    return Qt(e) && !(e.length % 2) || ir(e);
}
function Kn(e) {
    return typeof e == "number" && e == e && e % 1 === 0;
}
function ir(e) {
    if (e == null) return !1;
    if (e.constructor === Uint8Array) return !0;
    if (typeof e == "string" || !Kn(e.length) || e.length < 0) return !1;
    for(let t = 0; t < e.length; t++){
        const r = e[t];
        if (!Kn(r) || r < 0 || r >= 256) return !1;
    }
    return !0;
}
function Ot(e, t) {
    if (t || (t = {}), typeof e == "number") {
        Dt.checkSafeUint53(e, "invalid arrayify value");
        const r = [];
        for(; e;)r.unshift(e & 255), e = parseInt(String(e / 256));
        return r.length === 0 && r.push(0), rr(new Uint8Array(r));
    }
    if (t.allowMissingPrefix && typeof e == "string" && e.substring(0, 2) !== "0x" && (e = "0x" + e), qn(e) && (e = e.toHexString()), Qt(e)) {
        let r = e.substring(2);
        r.length % 2 && (t.hexPad === "left" ? r = "0" + r : t.hexPad === "right" ? r += "0" : Dt.throwArgumentError("hex data is odd-length", "value", e));
        const i = [];
        for(let n = 0; n < r.length; n += 2)i.push(parseInt(r.substring(n, n + 2), 16));
        return rr(new Uint8Array(i));
    }
    return ir(e) ? rr(new Uint8Array(e)) : Dt.throwArgumentError("invalid arrayify value", "value", e);
}
function E0(e) {
    const t = e.map((n)=>Ot(n)), r = t.reduce((n, o)=>n + o.length, 0), i = new Uint8Array(r);
    return t.reduce((n, o)=>(i.set(o, n), n + o.length), 0), rr(i);
}
function S0(e, t) {
    e = Ot(e), e.length > t && Dt.throwArgumentError("value out of range", "value", arguments[0]);
    const r = new Uint8Array(t);
    return r.set(e, t - e.length), rr(r);
}
function Qt(e, t) {
    return !(typeof e != "string" || !e.match(/^0x[0-9A-Fa-f]*$/) || t && e.length !== 2 + 2 * t);
}
const bi = "0123456789abcdef";
function Kt(e, t) {
    if (t || (t = {}), typeof e == "number") {
        Dt.checkSafeUint53(e, "invalid hexlify value");
        let r = "";
        for(; e;)r = bi[e & 15] + r, e = Math.floor(e / 16);
        return r.length ? (r.length % 2 && (r = "0" + r), "0x" + r) : "0x00";
    }
    if (typeof e == "bigint") return e = e.toString(16), e.length % 2 ? "0x0" + e : "0x" + e;
    if (t.allowMissingPrefix && typeof e == "string" && e.substring(0, 2) !== "0x" && (e = "0x" + e), qn(e)) return e.toHexString();
    if (Qt(e)) return e.length % 2 && (t.hexPad === "left" ? e = "0x0" + e.substring(2) : t.hexPad === "right" ? e += "0" : Dt.throwArgumentError("hex data is odd-length", "value", e)), e.toLowerCase();
    if (ir(e)) {
        let r = "0x";
        for(let i = 0; i < e.length; i++){
            let n = e[i];
            r += bi[(n & 240) >> 4] + bi[n & 15];
        }
        return r;
    }
    return Dt.throwArgumentError("invalid hexlify value", "value", e);
}
function N0(e) {
    if (typeof e != "string") e = Kt(e);
    else if (!Qt(e) || e.length % 2) return null;
    return (e.length - 2) / 2;
}
function Hn(e, t, r) {
    return typeof e != "string" ? e = Kt(e) : (!Qt(e) || e.length % 2) && Dt.throwArgumentError("invalid hexData", "value", e), t = 2 + 2 * t, r != null ? "0x" + e.substring(t, 2 + 2 * r) : "0x" + e.substring(t);
}
function oe(e, t) {
    for(typeof e != "string" ? e = Kt(e) : Qt(e) || Dt.throwArgumentError("invalid hex string", "value", e), e.length > 2 * t + 2 && Dt.throwArgumentError("value out of range", "value", arguments[1]); e.length < 2 * t + 2;)e = "0x0" + e.substring(2);
    return e;
}
function zn(e) {
    const t = {
        r: "0x",
        s: "0x",
        _vs: "0x",
        recoveryParam: 0,
        v: 0,
        yParityAndS: "0x",
        compact: "0x"
    };
    if (M0(e)) {
        let r = Ot(e);
        r.length === 64 ? (t.v = 27 + (r[32] >> 7), r[32] &= 127, t.r = Kt(r.slice(0, 32)), t.s = Kt(r.slice(32, 64))) : r.length === 65 ? (t.r = Kt(r.slice(0, 32)), t.s = Kt(r.slice(32, 64)), t.v = r[64]) : Dt.throwArgumentError("invalid signature string", "signature", e), t.v < 27 && (t.v === 0 || t.v === 1 ? t.v += 27 : Dt.throwArgumentError("signature invalid v byte", "signature", e)), t.recoveryParam = 1 - t.v % 2, t.recoveryParam && (r[32] |= 128), t._vs = Kt(r.slice(32, 64));
    } else {
        if (t.r = e.r, t.s = e.s, t.v = e.v, t.recoveryParam = e.recoveryParam, t._vs = e._vs, t._vs != null) {
            const n = S0(Ot(t._vs), 32);
            t._vs = Kt(n);
            const o = n[0] >= 128 ? 1 : 0;
            t.recoveryParam == null ? t.recoveryParam = o : t.recoveryParam !== o && Dt.throwArgumentError("signature recoveryParam mismatch _vs", "signature", e), n[0] &= 127;
            const h = Kt(n);
            t.s == null ? t.s = h : t.s !== h && Dt.throwArgumentError("signature v mismatch _vs", "signature", e);
        }
        if (t.recoveryParam == null) t.v == null ? Dt.throwArgumentError("signature missing v and recoveryParam", "signature", e) : t.v === 0 || t.v === 1 ? t.recoveryParam = t.v : t.recoveryParam = 1 - t.v % 2;
        else if (t.v == null) t.v = 27 + t.recoveryParam;
        else {
            const n = t.v === 0 || t.v === 1 ? t.v : 1 - t.v % 2;
            t.recoveryParam !== n && Dt.throwArgumentError("signature recoveryParam mismatch v", "signature", e);
        }
        t.r == null || !Qt(t.r) ? Dt.throwArgumentError("signature missing or invalid r", "signature", e) : t.r = oe(t.r, 32), t.s == null || !Qt(t.s) ? Dt.throwArgumentError("signature missing or invalid s", "signature", e) : t.s = oe(t.s, 32);
        const r = Ot(t.s);
        r[0] >= 128 && Dt.throwArgumentError("signature s out of range", "signature", e), t.recoveryParam && (r[0] |= 128);
        const i = Kt(r);
        t._vs && (Qt(t._vs) || Dt.throwArgumentError("signature invalid _vs", "signature", e), t._vs = oe(t._vs, 32)), t._vs == null ? t._vs = i : t._vs !== i && Dt.throwArgumentError("signature _vs mismatch v and s", "signature", e);
    }
    return t.yParityAndS = t._vs, t.compact = t.r + t.yParityAndS.substring(2), t;
}
function yi(e) {
    return "0x" + b0.keccak_256(Ot(e));
}
var Ln = {
    exports: {}
}, I0 = {}, _0 = Object.freeze({
    __proto__: null,
    default: I0
}), B0 = A0(_0);
(function(e) {
    (function(t, r) {
        function i(A, f) {
            if (!A) throw new Error(f || "Assertion failed");
        }
        function n(A, f) {
            A.super_ = f;
            var a = function() {};
            a.prototype = f.prototype, A.prototype = new a, A.prototype.constructor = A;
        }
        function o(A, f, a) {
            if (o.isBN(A)) return A;
            this.negative = 0, this.words = null, this.length = 0, this.red = null, A !== null && ((f === "le" || f === "be") && (a = f, f = 10), this._init(A || 0, f || 10, a || "be"));
        }
        typeof t == "object" ? t.exports = o : r.BN = o, o.BN = o, o.wordSize = 26;
        var h;
        try {
            typeof window < "u" && typeof window.Buffer < "u" ? h = window.Buffer : h = B0.Buffer;
        } catch  {}
        o.isBN = function(f) {
            return f instanceof o ? !0 : f !== null && typeof f == "object" && f.constructor.wordSize === o.wordSize && Array.isArray(f.words);
        }, o.max = function(f, a) {
            return f.cmp(a) > 0 ? f : a;
        }, o.min = function(f, a) {
            return f.cmp(a) < 0 ? f : a;
        }, o.prototype._init = function(f, a, c) {
            if (typeof f == "number") return this._initNumber(f, a, c);
            if (typeof f == "object") return this._initArray(f, a, c);
            a === "hex" && (a = 16), i(a === (a | 0) && a >= 2 && a <= 36), f = f.toString().replace(/\s+/g, "");
            var d = 0;
            f[0] === "-" && (d++, this.negative = 1), d < f.length && (a === 16 ? this._parseHex(f, d, c) : (this._parseBase(f, a, d), c === "le" && this._initArray(this.toArray(), a, c)));
        }, o.prototype._initNumber = function(f, a, c) {
            f < 0 && (this.negative = 1, f = -f), f < 67108864 ? (this.words = [
                f & 67108863
            ], this.length = 1) : f < 4503599627370496 ? (this.words = [
                f & 67108863,
                f / 67108864 & 67108863
            ], this.length = 2) : (i(f < 9007199254740992), this.words = [
                f & 67108863,
                f / 67108864 & 67108863,
                1
            ], this.length = 3), c === "le" && this._initArray(this.toArray(), a, c);
        }, o.prototype._initArray = function(f, a, c) {
            if (i(typeof f.length == "number"), f.length <= 0) return this.words = [
                0
            ], this.length = 1, this;
            this.length = Math.ceil(f.length / 3), this.words = new Array(this.length);
            for(var d = 0; d < this.length; d++)this.words[d] = 0;
            var g, x, M = 0;
            if (c === "be") for(d = f.length - 1, g = 0; d >= 0; d -= 3)x = f[d] | f[d - 1] << 8 | f[d - 2] << 16, this.words[g] |= x << M & 67108863, this.words[g + 1] = x >>> 26 - M & 67108863, M += 24, M >= 26 && (M -= 26, g++);
            else if (c === "le") for(d = 0, g = 0; d < f.length; d += 3)x = f[d] | f[d + 1] << 8 | f[d + 2] << 16, this.words[g] |= x << M & 67108863, this.words[g + 1] = x >>> 26 - M & 67108863, M += 24, M >= 26 && (M -= 26, g++);
            return this._strip();
        };
        function p(A, f) {
            var a = A.charCodeAt(f);
            if (a >= 48 && a <= 57) return a - 48;
            if (a >= 65 && a <= 70) return a - 55;
            if (a >= 97 && a <= 102) return a - 87;
            i(!1, "Invalid character in " + A);
        }
        function b(A, f, a) {
            var c = p(A, a);
            return a - 1 >= f && (c |= p(A, a - 1) << 4), c;
        }
        o.prototype._parseHex = function(f, a, c) {
            this.length = Math.ceil((f.length - a) / 6), this.words = new Array(this.length);
            for(var d = 0; d < this.length; d++)this.words[d] = 0;
            var g = 0, x = 0, M;
            if (c === "be") for(d = f.length - 1; d >= a; d -= 2)M = b(f, a, d) << g, this.words[x] |= M & 67108863, g >= 18 ? (g -= 18, x += 1, this.words[x] |= M >>> 26) : g += 8;
            else {
                var l = f.length - a;
                for(d = l % 2 === 0 ? a + 1 : a; d < f.length; d += 2)M = b(f, a, d) << g, this.words[x] |= M & 67108863, g >= 18 ? (g -= 18, x += 1, this.words[x] |= M >>> 26) : g += 8;
            }
            this._strip();
        };
        function m(A, f, a, c) {
            for(var d = 0, g = 0, x = Math.min(A.length, a), M = f; M < x; M++){
                var l = A.charCodeAt(M) - 48;
                d *= c, l >= 49 ? g = l - 49 + 10 : l >= 17 ? g = l - 17 + 10 : g = l, i(l >= 0 && g < c, "Invalid character"), d += g;
            }
            return d;
        }
        o.prototype._parseBase = function(f, a, c) {
            this.words = [
                0
            ], this.length = 1;
            for(var d = 0, g = 1; g <= 67108863; g *= a)d++;
            d--, g = g / a | 0;
            for(var x = f.length - c, M = x % d, l = Math.min(x, x - M) + c, s = 0, v = c; v < l; v += d)s = m(f, v, v + d, a), this.imuln(g), this.words[0] + s < 67108864 ? this.words[0] += s : this._iaddn(s);
            if (M !== 0) {
                var k = 1;
                for(s = m(f, v, f.length, a), v = 0; v < M; v++)k *= a;
                this.imuln(k), this.words[0] + s < 67108864 ? this.words[0] += s : this._iaddn(s);
            }
            this._strip();
        }, o.prototype.copy = function(f) {
            f.words = new Array(this.length);
            for(var a = 0; a < this.length; a++)f.words[a] = this.words[a];
            f.length = this.length, f.negative = this.negative, f.red = this.red;
        };
        function w(A, f) {
            A.words = f.words, A.length = f.length, A.negative = f.negative, A.red = f.red;
        }
        if (o.prototype._move = function(f) {
            w(f, this);
        }, o.prototype.clone = function() {
            var f = new o(null);
            return this.copy(f), f;
        }, o.prototype._expand = function(f) {
            for(; this.length < f;)this.words[this.length++] = 0;
            return this;
        }, o.prototype._strip = function() {
            for(; this.length > 1 && this.words[this.length - 1] === 0;)this.length--;
            return this._normSign();
        }, o.prototype._normSign = function() {
            return this.length === 1 && this.words[0] === 0 && (this.negative = 0), this;
        }, typeof Symbol < "u" && typeof Symbol.for == "function") try {
            o.prototype[Symbol.for("nodejs.util.inspect.custom")] = y;
        } catch  {
            o.prototype.inspect = y;
        }
        else o.prototype.inspect = y;
        function y() {
            return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">";
        }
        var S = [
            "",
            "0",
            "00",
            "000",
            "0000",
            "00000",
            "000000",
            "0000000",
            "00000000",
            "000000000",
            "0000000000",
            "00000000000",
            "000000000000",
            "0000000000000",
            "00000000000000",
            "000000000000000",
            "0000000000000000",
            "00000000000000000",
            "000000000000000000",
            "0000000000000000000",
            "00000000000000000000",
            "000000000000000000000",
            "0000000000000000000000",
            "00000000000000000000000",
            "000000000000000000000000",
            "0000000000000000000000000"
        ], I = [
            0,
            0,
            25,
            16,
            12,
            11,
            10,
            9,
            8,
            8,
            7,
            7,
            7,
            7,
            6,
            6,
            6,
            6,
            6,
            6,
            6,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5
        ], N = [
            0,
            0,
            33554432,
            43046721,
            16777216,
            48828125,
            60466176,
            40353607,
            16777216,
            43046721,
            1e7,
            19487171,
            35831808,
            62748517,
            7529536,
            11390625,
            16777216,
            24137569,
            34012224,
            47045881,
            64e6,
            4084101,
            5153632,
            6436343,
            7962624,
            9765625,
            11881376,
            14348907,
            17210368,
            20511149,
            243e5,
            28629151,
            33554432,
            39135393,
            45435424,
            52521875,
            60466176
        ];
        o.prototype.toString = function(f, a) {
            f = f || 10, a = a | 0 || 1;
            var c;
            if (f === 16 || f === "hex") {
                c = "";
                for(var d = 0, g = 0, x = 0; x < this.length; x++){
                    var M = this.words[x], l = ((M << d | g) & 16777215).toString(16);
                    g = M >>> 24 - d & 16777215, d += 2, d >= 26 && (d -= 26, x--), g !== 0 || x !== this.length - 1 ? c = S[6 - l.length] + l + c : c = l + c;
                }
                for(g !== 0 && (c = g.toString(16) + c); c.length % a !== 0;)c = "0" + c;
                return this.negative !== 0 && (c = "-" + c), c;
            }
            if (f === (f | 0) && f >= 2 && f <= 36) {
                var s = I[f], v = N[f];
                c = "";
                var k = this.clone();
                for(k.negative = 0; !k.isZero();){
                    var u = k.modrn(v).toString(f);
                    k = k.idivn(v), k.isZero() ? c = u + c : c = S[s - u.length] + u + c;
                }
                for(this.isZero() && (c = "0" + c); c.length % a !== 0;)c = "0" + c;
                return this.negative !== 0 && (c = "-" + c), c;
            }
            i(!1, "Base should be between 2 and 36");
        }, o.prototype.toNumber = function() {
            var f = this.words[0];
            return this.length === 2 ? f += this.words[1] * 67108864 : this.length === 3 && this.words[2] === 1 ? f += 4503599627370496 + this.words[1] * 67108864 : this.length > 2 && i(!1, "Number can only safely store up to 53 bits"), this.negative !== 0 ? -f : f;
        }, o.prototype.toJSON = function() {
            return this.toString(16, 2);
        }, h && (o.prototype.toBuffer = function(f, a) {
            return this.toArrayLike(h, f, a);
        }), o.prototype.toArray = function(f, a) {
            return this.toArrayLike(Array, f, a);
        };
        var C = function(f, a) {
            return f.allocUnsafe ? f.allocUnsafe(a) : new f(a);
        };
        o.prototype.toArrayLike = function(f, a, c) {
            this._strip();
            var d = this.byteLength(), g = c || Math.max(1, d);
            i(d <= g, "byte array longer than desired length"), i(g > 0, "Requested array length <= 0");
            var x = C(f, g), M = a === "le" ? "LE" : "BE";
            return this["_toArrayLike" + M](x, d), x;
        }, o.prototype._toArrayLikeLE = function(f, a) {
            for(var c = 0, d = 0, g = 0, x = 0; g < this.length; g++){
                var M = this.words[g] << x | d;
                f[c++] = M & 255, c < f.length && (f[c++] = M >> 8 & 255), c < f.length && (f[c++] = M >> 16 & 255), x === 6 ? (c < f.length && (f[c++] = M >> 24 & 255), d = 0, x = 0) : (d = M >>> 24, x += 2);
            }
            if (c < f.length) for(f[c++] = d; c < f.length;)f[c++] = 0;
        }, o.prototype._toArrayLikeBE = function(f, a) {
            for(var c = f.length - 1, d = 0, g = 0, x = 0; g < this.length; g++){
                var M = this.words[g] << x | d;
                f[c--] = M & 255, c >= 0 && (f[c--] = M >> 8 & 255), c >= 0 && (f[c--] = M >> 16 & 255), x === 6 ? (c >= 0 && (f[c--] = M >> 24 & 255), d = 0, x = 0) : (d = M >>> 24, x += 2);
            }
            if (c >= 0) for(f[c--] = d; c >= 0;)f[c--] = 0;
        }, Math.clz32 ? o.prototype._countBits = function(f) {
            return 32 - Math.clz32(f);
        } : o.prototype._countBits = function(f) {
            var a = f, c = 0;
            return a >= 4096 && (c += 13, a >>>= 13), a >= 64 && (c += 7, a >>>= 7), a >= 8 && (c += 4, a >>>= 4), a >= 2 && (c += 2, a >>>= 2), c + a;
        }, o.prototype._zeroBits = function(f) {
            if (f === 0) return 26;
            var a = f, c = 0;
            return a & 8191 || (c += 13, a >>>= 13), a & 127 || (c += 7, a >>>= 7), a & 15 || (c += 4, a >>>= 4), a & 3 || (c += 2, a >>>= 2), a & 1 || c++, c;
        }, o.prototype.bitLength = function() {
            var f = this.words[this.length - 1], a = this._countBits(f);
            return (this.length - 1) * 26 + a;
        };
        function F(A) {
            for(var f = new Array(A.bitLength()), a = 0; a < f.length; a++){
                var c = a / 26 | 0, d = a % 26;
                f[a] = A.words[c] >>> d & 1;
            }
            return f;
        }
        o.prototype.zeroBits = function() {
            if (this.isZero()) return 0;
            for(var f = 0, a = 0; a < this.length; a++){
                var c = this._zeroBits(this.words[a]);
                if (f += c, c !== 26) break;
            }
            return f;
        }, o.prototype.byteLength = function() {
            return Math.ceil(this.bitLength() / 8);
        }, o.prototype.toTwos = function(f) {
            return this.negative !== 0 ? this.abs().inotn(f).iaddn(1) : this.clone();
        }, o.prototype.fromTwos = function(f) {
            return this.testn(f - 1) ? this.notn(f).iaddn(1).ineg() : this.clone();
        }, o.prototype.isNeg = function() {
            return this.negative !== 0;
        }, o.prototype.neg = function() {
            return this.clone().ineg();
        }, o.prototype.ineg = function() {
            return this.isZero() || (this.negative ^= 1), this;
        }, o.prototype.iuor = function(f) {
            for(; this.length < f.length;)this.words[this.length++] = 0;
            for(var a = 0; a < f.length; a++)this.words[a] = this.words[a] | f.words[a];
            return this._strip();
        }, o.prototype.ior = function(f) {
            return i((this.negative | f.negative) === 0), this.iuor(f);
        }, o.prototype.or = function(f) {
            return this.length > f.length ? this.clone().ior(f) : f.clone().ior(this);
        }, o.prototype.uor = function(f) {
            return this.length > f.length ? this.clone().iuor(f) : f.clone().iuor(this);
        }, o.prototype.iuand = function(f) {
            var a;
            this.length > f.length ? a = f : a = this;
            for(var c = 0; c < a.length; c++)this.words[c] = this.words[c] & f.words[c];
            return this.length = a.length, this._strip();
        }, o.prototype.iand = function(f) {
            return i((this.negative | f.negative) === 0), this.iuand(f);
        }, o.prototype.and = function(f) {
            return this.length > f.length ? this.clone().iand(f) : f.clone().iand(this);
        }, o.prototype.uand = function(f) {
            return this.length > f.length ? this.clone().iuand(f) : f.clone().iuand(this);
        }, o.prototype.iuxor = function(f) {
            var a, c;
            this.length > f.length ? (a = this, c = f) : (a = f, c = this);
            for(var d = 0; d < c.length; d++)this.words[d] = a.words[d] ^ c.words[d];
            if (this !== a) for(; d < a.length; d++)this.words[d] = a.words[d];
            return this.length = a.length, this._strip();
        }, o.prototype.ixor = function(f) {
            return i((this.negative | f.negative) === 0), this.iuxor(f);
        }, o.prototype.xor = function(f) {
            return this.length > f.length ? this.clone().ixor(f) : f.clone().ixor(this);
        }, o.prototype.uxor = function(f) {
            return this.length > f.length ? this.clone().iuxor(f) : f.clone().iuxor(this);
        }, o.prototype.inotn = function(f) {
            i(typeof f == "number" && f >= 0);
            var a = Math.ceil(f / 26) | 0, c = f % 26;
            this._expand(a), c > 0 && a--;
            for(var d = 0; d < a; d++)this.words[d] = ~this.words[d] & 67108863;
            return c > 0 && (this.words[d] = ~this.words[d] & 67108863 >> 26 - c), this._strip();
        }, o.prototype.notn = function(f) {
            return this.clone().inotn(f);
        }, o.prototype.setn = function(f, a) {
            i(typeof f == "number" && f >= 0);
            var c = f / 26 | 0, d = f % 26;
            return this._expand(c + 1), a ? this.words[c] = this.words[c] | 1 << d : this.words[c] = this.words[c] & ~(1 << d), this._strip();
        }, o.prototype.iadd = function(f) {
            var a;
            if (this.negative !== 0 && f.negative === 0) return this.negative = 0, a = this.isub(f), this.negative ^= 1, this._normSign();
            if (this.negative === 0 && f.negative !== 0) return f.negative = 0, a = this.isub(f), f.negative = 1, a._normSign();
            var c, d;
            this.length > f.length ? (c = this, d = f) : (c = f, d = this);
            for(var g = 0, x = 0; x < d.length; x++)a = (c.words[x] | 0) + (d.words[x] | 0) + g, this.words[x] = a & 67108863, g = a >>> 26;
            for(; g !== 0 && x < c.length; x++)a = (c.words[x] | 0) + g, this.words[x] = a & 67108863, g = a >>> 26;
            if (this.length = c.length, g !== 0) this.words[this.length] = g, this.length++;
            else if (c !== this) for(; x < c.length; x++)this.words[x] = c.words[x];
            return this;
        }, o.prototype.add = function(f) {
            var a;
            return f.negative !== 0 && this.negative === 0 ? (f.negative = 0, a = this.sub(f), f.negative ^= 1, a) : f.negative === 0 && this.negative !== 0 ? (this.negative = 0, a = f.sub(this), this.negative = 1, a) : this.length > f.length ? this.clone().iadd(f) : f.clone().iadd(this);
        }, o.prototype.isub = function(f) {
            if (f.negative !== 0) {
                f.negative = 0;
                var a = this.iadd(f);
                return f.negative = 1, a._normSign();
            } else if (this.negative !== 0) return this.negative = 0, this.iadd(f), this.negative = 1, this._normSign();
            var c = this.cmp(f);
            if (c === 0) return this.negative = 0, this.length = 1, this.words[0] = 0, this;
            var d, g;
            c > 0 ? (d = this, g = f) : (d = f, g = this);
            for(var x = 0, M = 0; M < g.length; M++)a = (d.words[M] | 0) - (g.words[M] | 0) + x, x = a >> 26, this.words[M] = a & 67108863;
            for(; x !== 0 && M < d.length; M++)a = (d.words[M] | 0) + x, x = a >> 26, this.words[M] = a & 67108863;
            if (x === 0 && M < d.length && d !== this) for(; M < d.length; M++)this.words[M] = d.words[M];
            return this.length = Math.max(this.length, M), d !== this && (this.negative = 1), this._strip();
        }, o.prototype.sub = function(f) {
            return this.clone().isub(f);
        };
        function U(A, f, a) {
            a.negative = f.negative ^ A.negative;
            var c = A.length + f.length | 0;
            a.length = c, c = c - 1 | 0;
            var d = A.words[0] | 0, g = f.words[0] | 0, x = d * g, M = x & 67108863, l = x / 67108864 | 0;
            a.words[0] = M;
            for(var s = 1; s < c; s++){
                for(var v = l >>> 26, k = l & 67108863, u = Math.min(s, f.length - 1), E = Math.max(0, s - A.length + 1); E <= u; E++){
                    var _ = s - E | 0;
                    d = A.words[_] | 0, g = f.words[E] | 0, x = d * g + k, v += x / 67108864 | 0, k = x & 67108863;
                }
                a.words[s] = k | 0, l = v | 0;
            }
            return l !== 0 ? a.words[s] = l | 0 : a.length--, a._strip();
        }
        var J = function(f, a, c) {
            var d = f.words, g = a.words, x = c.words, M = 0, l, s, v, k = d[0] | 0, u = k & 8191, E = k >>> 13, _ = d[1] | 0, B = _ & 8191, R = _ >>> 13, T = d[2] | 0, P = T & 8191, O = T >>> 13, Ct = d[3] | 0, D = Ct & 8191, q = Ct >>> 13, De = d[4] | 0, X = De & 8191, Z = De >>> 13, Fe = d[5] | 0, $ = Fe & 8191, tt = Fe >>> 13, Te = d[6] | 0, et = Te & 8191, rt = Te >>> 13, Ue = d[7] | 0, it = Ue & 8191, nt = Ue >>> 13, ke = d[8] | 0, ft = ke & 8191, ot = ke >>> 13, qe = d[9] | 0, st = qe & 8191, at = qe >>> 13, Ke = g[0] | 0, ut = Ke & 8191, ht = Ke >>> 13, He = g[1] | 0, ct = He & 8191, lt = He >>> 13, ze = g[2] | 0, dt = ze & 8191, pt = ze >>> 13, Le = g[3] | 0, vt = Le & 8191, mt = Le >>> 13, je = g[4] | 0, gt = je & 8191, At = je >>> 13, Qe = g[5] | 0, bt = Qe & 8191, yt = Qe >>> 13, Je = g[6] | 0, wt = Je & 8191, xt = Je >>> 13, Ge = g[7] | 0, Mt = Ge & 8191, Et = Ge >>> 13, Ye = g[8] | 0, St = Ye & 8191, Nt = Ye >>> 13, Ve = g[9] | 0, It = Ve & 8191, _t = Ve >>> 13;
            c.negative = f.negative ^ a.negative, c.length = 19, l = Math.imul(u, ut), s = Math.imul(u, ht), s = s + Math.imul(E, ut) | 0, v = Math.imul(E, ht);
            var Me = (M + l | 0) + ((s & 8191) << 13) | 0;
            M = (v + (s >>> 13) | 0) + (Me >>> 26) | 0, Me &= 67108863, l = Math.imul(B, ut), s = Math.imul(B, ht), s = s + Math.imul(R, ut) | 0, v = Math.imul(R, ht), l = l + Math.imul(u, ct) | 0, s = s + Math.imul(u, lt) | 0, s = s + Math.imul(E, ct) | 0, v = v + Math.imul(E, lt) | 0;
            var Ee = (M + l | 0) + ((s & 8191) << 13) | 0;
            M = (v + (s >>> 13) | 0) + (Ee >>> 26) | 0, Ee &= 67108863, l = Math.imul(P, ut), s = Math.imul(P, ht), s = s + Math.imul(O, ut) | 0, v = Math.imul(O, ht), l = l + Math.imul(B, ct) | 0, s = s + Math.imul(B, lt) | 0, s = s + Math.imul(R, ct) | 0, v = v + Math.imul(R, lt) | 0, l = l + Math.imul(u, dt) | 0, s = s + Math.imul(u, pt) | 0, s = s + Math.imul(E, dt) | 0, v = v + Math.imul(E, pt) | 0;
            var Se = (M + l | 0) + ((s & 8191) << 13) | 0;
            M = (v + (s >>> 13) | 0) + (Se >>> 26) | 0, Se &= 67108863, l = Math.imul(D, ut), s = Math.imul(D, ht), s = s + Math.imul(q, ut) | 0, v = Math.imul(q, ht), l = l + Math.imul(P, ct) | 0, s = s + Math.imul(P, lt) | 0, s = s + Math.imul(O, ct) | 0, v = v + Math.imul(O, lt) | 0, l = l + Math.imul(B, dt) | 0, s = s + Math.imul(B, pt) | 0, s = s + Math.imul(R, dt) | 0, v = v + Math.imul(R, pt) | 0, l = l + Math.imul(u, vt) | 0, s = s + Math.imul(u, mt) | 0, s = s + Math.imul(E, vt) | 0, v = v + Math.imul(E, mt) | 0;
            var Ne = (M + l | 0) + ((s & 8191) << 13) | 0;
            M = (v + (s >>> 13) | 0) + (Ne >>> 26) | 0, Ne &= 67108863, l = Math.imul(X, ut), s = Math.imul(X, ht), s = s + Math.imul(Z, ut) | 0, v = Math.imul(Z, ht), l = l + Math.imul(D, ct) | 0, s = s + Math.imul(D, lt) | 0, s = s + Math.imul(q, ct) | 0, v = v + Math.imul(q, lt) | 0, l = l + Math.imul(P, dt) | 0, s = s + Math.imul(P, pt) | 0, s = s + Math.imul(O, dt) | 0, v = v + Math.imul(O, pt) | 0, l = l + Math.imul(B, vt) | 0, s = s + Math.imul(B, mt) | 0, s = s + Math.imul(R, vt) | 0, v = v + Math.imul(R, mt) | 0, l = l + Math.imul(u, gt) | 0, s = s + Math.imul(u, At) | 0, s = s + Math.imul(E, gt) | 0, v = v + Math.imul(E, At) | 0;
            var Ie = (M + l | 0) + ((s & 8191) << 13) | 0;
            M = (v + (s >>> 13) | 0) + (Ie >>> 26) | 0, Ie &= 67108863, l = Math.imul($, ut), s = Math.imul($, ht), s = s + Math.imul(tt, ut) | 0, v = Math.imul(tt, ht), l = l + Math.imul(X, ct) | 0, s = s + Math.imul(X, lt) | 0, s = s + Math.imul(Z, ct) | 0, v = v + Math.imul(Z, lt) | 0, l = l + Math.imul(D, dt) | 0, s = s + Math.imul(D, pt) | 0, s = s + Math.imul(q, dt) | 0, v = v + Math.imul(q, pt) | 0, l = l + Math.imul(P, vt) | 0, s = s + Math.imul(P, mt) | 0, s = s + Math.imul(O, vt) | 0, v = v + Math.imul(O, mt) | 0, l = l + Math.imul(B, gt) | 0, s = s + Math.imul(B, At) | 0, s = s + Math.imul(R, gt) | 0, v = v + Math.imul(R, At) | 0, l = l + Math.imul(u, bt) | 0, s = s + Math.imul(u, yt) | 0, s = s + Math.imul(E, bt) | 0, v = v + Math.imul(E, yt) | 0;
            var Wr = (M + l | 0) + ((s & 8191) << 13) | 0;
            M = (v + (s >>> 13) | 0) + (Wr >>> 26) | 0, Wr &= 67108863, l = Math.imul(et, ut), s = Math.imul(et, ht), s = s + Math.imul(rt, ut) | 0, v = Math.imul(rt, ht), l = l + Math.imul($, ct) | 0, s = s + Math.imul($, lt) | 0, s = s + Math.imul(tt, ct) | 0, v = v + Math.imul(tt, lt) | 0, l = l + Math.imul(X, dt) | 0, s = s + Math.imul(X, pt) | 0, s = s + Math.imul(Z, dt) | 0, v = v + Math.imul(Z, pt) | 0, l = l + Math.imul(D, vt) | 0, s = s + Math.imul(D, mt) | 0, s = s + Math.imul(q, vt) | 0, v = v + Math.imul(q, mt) | 0, l = l + Math.imul(P, gt) | 0, s = s + Math.imul(P, At) | 0, s = s + Math.imul(O, gt) | 0, v = v + Math.imul(O, At) | 0, l = l + Math.imul(B, bt) | 0, s = s + Math.imul(B, yt) | 0, s = s + Math.imul(R, bt) | 0, v = v + Math.imul(R, yt) | 0, l = l + Math.imul(u, wt) | 0, s = s + Math.imul(u, xt) | 0, s = s + Math.imul(E, wt) | 0, v = v + Math.imul(E, xt) | 0;
            var Xr = (M + l | 0) + ((s & 8191) << 13) | 0;
            M = (v + (s >>> 13) | 0) + (Xr >>> 26) | 0, Xr &= 67108863, l = Math.imul(it, ut), s = Math.imul(it, ht), s = s + Math.imul(nt, ut) | 0, v = Math.imul(nt, ht), l = l + Math.imul(et, ct) | 0, s = s + Math.imul(et, lt) | 0, s = s + Math.imul(rt, ct) | 0, v = v + Math.imul(rt, lt) | 0, l = l + Math.imul($, dt) | 0, s = s + Math.imul($, pt) | 0, s = s + Math.imul(tt, dt) | 0, v = v + Math.imul(tt, pt) | 0, l = l + Math.imul(X, vt) | 0, s = s + Math.imul(X, mt) | 0, s = s + Math.imul(Z, vt) | 0, v = v + Math.imul(Z, mt) | 0, l = l + Math.imul(D, gt) | 0, s = s + Math.imul(D, At) | 0, s = s + Math.imul(q, gt) | 0, v = v + Math.imul(q, At) | 0, l = l + Math.imul(P, bt) | 0, s = s + Math.imul(P, yt) | 0, s = s + Math.imul(O, bt) | 0, v = v + Math.imul(O, yt) | 0, l = l + Math.imul(B, wt) | 0, s = s + Math.imul(B, xt) | 0, s = s + Math.imul(R, wt) | 0, v = v + Math.imul(R, xt) | 0, l = l + Math.imul(u, Mt) | 0, s = s + Math.imul(u, Et) | 0, s = s + Math.imul(E, Mt) | 0, v = v + Math.imul(E, Et) | 0;
            var Zr = (M + l | 0) + ((s & 8191) << 13) | 0;
            M = (v + (s >>> 13) | 0) + (Zr >>> 26) | 0, Zr &= 67108863, l = Math.imul(ft, ut), s = Math.imul(ft, ht), s = s + Math.imul(ot, ut) | 0, v = Math.imul(ot, ht), l = l + Math.imul(it, ct) | 0, s = s + Math.imul(it, lt) | 0, s = s + Math.imul(nt, ct) | 0, v = v + Math.imul(nt, lt) | 0, l = l + Math.imul(et, dt) | 0, s = s + Math.imul(et, pt) | 0, s = s + Math.imul(rt, dt) | 0, v = v + Math.imul(rt, pt) | 0, l = l + Math.imul($, vt) | 0, s = s + Math.imul($, mt) | 0, s = s + Math.imul(tt, vt) | 0, v = v + Math.imul(tt, mt) | 0, l = l + Math.imul(X, gt) | 0, s = s + Math.imul(X, At) | 0, s = s + Math.imul(Z, gt) | 0, v = v + Math.imul(Z, At) | 0, l = l + Math.imul(D, bt) | 0, s = s + Math.imul(D, yt) | 0, s = s + Math.imul(q, bt) | 0, v = v + Math.imul(q, yt) | 0, l = l + Math.imul(P, wt) | 0, s = s + Math.imul(P, xt) | 0, s = s + Math.imul(O, wt) | 0, v = v + Math.imul(O, xt) | 0, l = l + Math.imul(B, Mt) | 0, s = s + Math.imul(B, Et) | 0, s = s + Math.imul(R, Mt) | 0, v = v + Math.imul(R, Et) | 0, l = l + Math.imul(u, St) | 0, s = s + Math.imul(u, Nt) | 0, s = s + Math.imul(E, St) | 0, v = v + Math.imul(E, Nt) | 0;
            var $r = (M + l | 0) + ((s & 8191) << 13) | 0;
            M = (v + (s >>> 13) | 0) + ($r >>> 26) | 0, $r &= 67108863, l = Math.imul(st, ut), s = Math.imul(st, ht), s = s + Math.imul(at, ut) | 0, v = Math.imul(at, ht), l = l + Math.imul(ft, ct) | 0, s = s + Math.imul(ft, lt) | 0, s = s + Math.imul(ot, ct) | 0, v = v + Math.imul(ot, lt) | 0, l = l + Math.imul(it, dt) | 0, s = s + Math.imul(it, pt) | 0, s = s + Math.imul(nt, dt) | 0, v = v + Math.imul(nt, pt) | 0, l = l + Math.imul(et, vt) | 0, s = s + Math.imul(et, mt) | 0, s = s + Math.imul(rt, vt) | 0, v = v + Math.imul(rt, mt) | 0, l = l + Math.imul($, gt) | 0, s = s + Math.imul($, At) | 0, s = s + Math.imul(tt, gt) | 0, v = v + Math.imul(tt, At) | 0, l = l + Math.imul(X, bt) | 0, s = s + Math.imul(X, yt) | 0, s = s + Math.imul(Z, bt) | 0, v = v + Math.imul(Z, yt) | 0, l = l + Math.imul(D, wt) | 0, s = s + Math.imul(D, xt) | 0, s = s + Math.imul(q, wt) | 0, v = v + Math.imul(q, xt) | 0, l = l + Math.imul(P, Mt) | 0, s = s + Math.imul(P, Et) | 0, s = s + Math.imul(O, Mt) | 0, v = v + Math.imul(O, Et) | 0, l = l + Math.imul(B, St) | 0, s = s + Math.imul(B, Nt) | 0, s = s + Math.imul(R, St) | 0, v = v + Math.imul(R, Nt) | 0, l = l + Math.imul(u, It) | 0, s = s + Math.imul(u, _t) | 0, s = s + Math.imul(E, It) | 0, v = v + Math.imul(E, _t) | 0;
            var ti = (M + l | 0) + ((s & 8191) << 13) | 0;
            M = (v + (s >>> 13) | 0) + (ti >>> 26) | 0, ti &= 67108863, l = Math.imul(st, ct), s = Math.imul(st, lt), s = s + Math.imul(at, ct) | 0, v = Math.imul(at, lt), l = l + Math.imul(ft, dt) | 0, s = s + Math.imul(ft, pt) | 0, s = s + Math.imul(ot, dt) | 0, v = v + Math.imul(ot, pt) | 0, l = l + Math.imul(it, vt) | 0, s = s + Math.imul(it, mt) | 0, s = s + Math.imul(nt, vt) | 0, v = v + Math.imul(nt, mt) | 0, l = l + Math.imul(et, gt) | 0, s = s + Math.imul(et, At) | 0, s = s + Math.imul(rt, gt) | 0, v = v + Math.imul(rt, At) | 0, l = l + Math.imul($, bt) | 0, s = s + Math.imul($, yt) | 0, s = s + Math.imul(tt, bt) | 0, v = v + Math.imul(tt, yt) | 0, l = l + Math.imul(X, wt) | 0, s = s + Math.imul(X, xt) | 0, s = s + Math.imul(Z, wt) | 0, v = v + Math.imul(Z, xt) | 0, l = l + Math.imul(D, Mt) | 0, s = s + Math.imul(D, Et) | 0, s = s + Math.imul(q, Mt) | 0, v = v + Math.imul(q, Et) | 0, l = l + Math.imul(P, St) | 0, s = s + Math.imul(P, Nt) | 0, s = s + Math.imul(O, St) | 0, v = v + Math.imul(O, Nt) | 0, l = l + Math.imul(B, It) | 0, s = s + Math.imul(B, _t) | 0, s = s + Math.imul(R, It) | 0, v = v + Math.imul(R, _t) | 0;
            var ei = (M + l | 0) + ((s & 8191) << 13) | 0;
            M = (v + (s >>> 13) | 0) + (ei >>> 26) | 0, ei &= 67108863, l = Math.imul(st, dt), s = Math.imul(st, pt), s = s + Math.imul(at, dt) | 0, v = Math.imul(at, pt), l = l + Math.imul(ft, vt) | 0, s = s + Math.imul(ft, mt) | 0, s = s + Math.imul(ot, vt) | 0, v = v + Math.imul(ot, mt) | 0, l = l + Math.imul(it, gt) | 0, s = s + Math.imul(it, At) | 0, s = s + Math.imul(nt, gt) | 0, v = v + Math.imul(nt, At) | 0, l = l + Math.imul(et, bt) | 0, s = s + Math.imul(et, yt) | 0, s = s + Math.imul(rt, bt) | 0, v = v + Math.imul(rt, yt) | 0, l = l + Math.imul($, wt) | 0, s = s + Math.imul($, xt) | 0, s = s + Math.imul(tt, wt) | 0, v = v + Math.imul(tt, xt) | 0, l = l + Math.imul(X, Mt) | 0, s = s + Math.imul(X, Et) | 0, s = s + Math.imul(Z, Mt) | 0, v = v + Math.imul(Z, Et) | 0, l = l + Math.imul(D, St) | 0, s = s + Math.imul(D, Nt) | 0, s = s + Math.imul(q, St) | 0, v = v + Math.imul(q, Nt) | 0, l = l + Math.imul(P, It) | 0, s = s + Math.imul(P, _t) | 0, s = s + Math.imul(O, It) | 0, v = v + Math.imul(O, _t) | 0;
            var ri = (M + l | 0) + ((s & 8191) << 13) | 0;
            M = (v + (s >>> 13) | 0) + (ri >>> 26) | 0, ri &= 67108863, l = Math.imul(st, vt), s = Math.imul(st, mt), s = s + Math.imul(at, vt) | 0, v = Math.imul(at, mt), l = l + Math.imul(ft, gt) | 0, s = s + Math.imul(ft, At) | 0, s = s + Math.imul(ot, gt) | 0, v = v + Math.imul(ot, At) | 0, l = l + Math.imul(it, bt) | 0, s = s + Math.imul(it, yt) | 0, s = s + Math.imul(nt, bt) | 0, v = v + Math.imul(nt, yt) | 0, l = l + Math.imul(et, wt) | 0, s = s + Math.imul(et, xt) | 0, s = s + Math.imul(rt, wt) | 0, v = v + Math.imul(rt, xt) | 0, l = l + Math.imul($, Mt) | 0, s = s + Math.imul($, Et) | 0, s = s + Math.imul(tt, Mt) | 0, v = v + Math.imul(tt, Et) | 0, l = l + Math.imul(X, St) | 0, s = s + Math.imul(X, Nt) | 0, s = s + Math.imul(Z, St) | 0, v = v + Math.imul(Z, Nt) | 0, l = l + Math.imul(D, It) | 0, s = s + Math.imul(D, _t) | 0, s = s + Math.imul(q, It) | 0, v = v + Math.imul(q, _t) | 0;
            var ii = (M + l | 0) + ((s & 8191) << 13) | 0;
            M = (v + (s >>> 13) | 0) + (ii >>> 26) | 0, ii &= 67108863, l = Math.imul(st, gt), s = Math.imul(st, At), s = s + Math.imul(at, gt) | 0, v = Math.imul(at, At), l = l + Math.imul(ft, bt) | 0, s = s + Math.imul(ft, yt) | 0, s = s + Math.imul(ot, bt) | 0, v = v + Math.imul(ot, yt) | 0, l = l + Math.imul(it, wt) | 0, s = s + Math.imul(it, xt) | 0, s = s + Math.imul(nt, wt) | 0, v = v + Math.imul(nt, xt) | 0, l = l + Math.imul(et, Mt) | 0, s = s + Math.imul(et, Et) | 0, s = s + Math.imul(rt, Mt) | 0, v = v + Math.imul(rt, Et) | 0, l = l + Math.imul($, St) | 0, s = s + Math.imul($, Nt) | 0, s = s + Math.imul(tt, St) | 0, v = v + Math.imul(tt, Nt) | 0, l = l + Math.imul(X, It) | 0, s = s + Math.imul(X, _t) | 0, s = s + Math.imul(Z, It) | 0, v = v + Math.imul(Z, _t) | 0;
            var ni = (M + l | 0) + ((s & 8191) << 13) | 0;
            M = (v + (s >>> 13) | 0) + (ni >>> 26) | 0, ni &= 67108863, l = Math.imul(st, bt), s = Math.imul(st, yt), s = s + Math.imul(at, bt) | 0, v = Math.imul(at, yt), l = l + Math.imul(ft, wt) | 0, s = s + Math.imul(ft, xt) | 0, s = s + Math.imul(ot, wt) | 0, v = v + Math.imul(ot, xt) | 0, l = l + Math.imul(it, Mt) | 0, s = s + Math.imul(it, Et) | 0, s = s + Math.imul(nt, Mt) | 0, v = v + Math.imul(nt, Et) | 0, l = l + Math.imul(et, St) | 0, s = s + Math.imul(et, Nt) | 0, s = s + Math.imul(rt, St) | 0, v = v + Math.imul(rt, Nt) | 0, l = l + Math.imul($, It) | 0, s = s + Math.imul($, _t) | 0, s = s + Math.imul(tt, It) | 0, v = v + Math.imul(tt, _t) | 0;
            var fi = (M + l | 0) + ((s & 8191) << 13) | 0;
            M = (v + (s >>> 13) | 0) + (fi >>> 26) | 0, fi &= 67108863, l = Math.imul(st, wt), s = Math.imul(st, xt), s = s + Math.imul(at, wt) | 0, v = Math.imul(at, xt), l = l + Math.imul(ft, Mt) | 0, s = s + Math.imul(ft, Et) | 0, s = s + Math.imul(ot, Mt) | 0, v = v + Math.imul(ot, Et) | 0, l = l + Math.imul(it, St) | 0, s = s + Math.imul(it, Nt) | 0, s = s + Math.imul(nt, St) | 0, v = v + Math.imul(nt, Nt) | 0, l = l + Math.imul(et, It) | 0, s = s + Math.imul(et, _t) | 0, s = s + Math.imul(rt, It) | 0, v = v + Math.imul(rt, _t) | 0;
            var oi = (M + l | 0) + ((s & 8191) << 13) | 0;
            M = (v + (s >>> 13) | 0) + (oi >>> 26) | 0, oi &= 67108863, l = Math.imul(st, Mt), s = Math.imul(st, Et), s = s + Math.imul(at, Mt) | 0, v = Math.imul(at, Et), l = l + Math.imul(ft, St) | 0, s = s + Math.imul(ft, Nt) | 0, s = s + Math.imul(ot, St) | 0, v = v + Math.imul(ot, Nt) | 0, l = l + Math.imul(it, It) | 0, s = s + Math.imul(it, _t) | 0, s = s + Math.imul(nt, It) | 0, v = v + Math.imul(nt, _t) | 0;
            var si = (M + l | 0) + ((s & 8191) << 13) | 0;
            M = (v + (s >>> 13) | 0) + (si >>> 26) | 0, si &= 67108863, l = Math.imul(st, St), s = Math.imul(st, Nt), s = s + Math.imul(at, St) | 0, v = Math.imul(at, Nt), l = l + Math.imul(ft, It) | 0, s = s + Math.imul(ft, _t) | 0, s = s + Math.imul(ot, It) | 0, v = v + Math.imul(ot, _t) | 0;
            var ai = (M + l | 0) + ((s & 8191) << 13) | 0;
            M = (v + (s >>> 13) | 0) + (ai >>> 26) | 0, ai &= 67108863, l = Math.imul(st, It), s = Math.imul(st, _t), s = s + Math.imul(at, It) | 0, v = Math.imul(at, _t);
            var ui = (M + l | 0) + ((s & 8191) << 13) | 0;
            return M = (v + (s >>> 13) | 0) + (ui >>> 26) | 0, ui &= 67108863, x[0] = Me, x[1] = Ee, x[2] = Se, x[3] = Ne, x[4] = Ie, x[5] = Wr, x[6] = Xr, x[7] = Zr, x[8] = $r, x[9] = ti, x[10] = ei, x[11] = ri, x[12] = ii, x[13] = ni, x[14] = fi, x[15] = oi, x[16] = si, x[17] = ai, x[18] = ui, M !== 0 && (x[19] = M, c.length++), c;
        };
        Math.imul || (J = U);
        function Bt(A, f, a) {
            a.negative = f.negative ^ A.negative, a.length = A.length + f.length;
            for(var c = 0, d = 0, g = 0; g < a.length - 1; g++){
                var x = d;
                d = 0;
                for(var M = c & 67108863, l = Math.min(g, f.length - 1), s = Math.max(0, g - A.length + 1); s <= l; s++){
                    var v = g - s, k = A.words[v] | 0, u = f.words[s] | 0, E = k * u, _ = E & 67108863;
                    x = x + (E / 67108864 | 0) | 0, _ = _ + M | 0, M = _ & 67108863, x = x + (_ >>> 26) | 0, d += x >>> 26, x &= 67108863;
                }
                a.words[g] = M, c = x, x = d;
            }
            return c !== 0 ? a.words[g] = c : a.length--, a._strip();
        }
        function G(A, f, a) {
            return Bt(A, f, a);
        }
        o.prototype.mulTo = function(f, a) {
            var c, d = this.length + f.length;
            return this.length === 10 && f.length === 10 ? c = J(this, f, a) : d < 63 ? c = U(this, f, a) : d < 1024 ? c = Bt(this, f, a) : c = G(this, f, a), c;
        }, o.prototype.mul = function(f) {
            var a = new o(null);
            return a.words = new Array(this.length + f.length), this.mulTo(f, a);
        }, o.prototype.mulf = function(f) {
            var a = new o(null);
            return a.words = new Array(this.length + f.length), G(this, f, a);
        }, o.prototype.imul = function(f) {
            return this.clone().mulTo(f, this);
        }, o.prototype.imuln = function(f) {
            var a = f < 0;
            a && (f = -f), i(typeof f == "number"), i(f < 67108864);
            for(var c = 0, d = 0; d < this.length; d++){
                var g = (this.words[d] | 0) * f, x = (g & 67108863) + (c & 67108863);
                c >>= 26, c += g / 67108864 | 0, c += x >>> 26, this.words[d] = x & 67108863;
            }
            return c !== 0 && (this.words[d] = c, this.length++), a ? this.ineg() : this;
        }, o.prototype.muln = function(f) {
            return this.clone().imuln(f);
        }, o.prototype.sqr = function() {
            return this.mul(this);
        }, o.prototype.isqr = function() {
            return this.imul(this.clone());
        }, o.prototype.pow = function(f) {
            var a = F(f);
            if (a.length === 0) return new o(1);
            for(var c = this, d = 0; d < a.length && a[d] === 0; d++, c = c.sqr());
            if (++d < a.length) for(var g = c.sqr(); d < a.length; d++, g = g.sqr())a[d] !== 0 && (c = c.mul(g));
            return c;
        }, o.prototype.iushln = function(f) {
            i(typeof f == "number" && f >= 0);
            var a = f % 26, c = (f - a) / 26, d = 67108863 >>> 26 - a << 26 - a, g;
            if (a !== 0) {
                var x = 0;
                for(g = 0; g < this.length; g++){
                    var M = this.words[g] & d, l = (this.words[g] | 0) - M << a;
                    this.words[g] = l | x, x = M >>> 26 - a;
                }
                x && (this.words[g] = x, this.length++);
            }
            if (c !== 0) {
                for(g = this.length - 1; g >= 0; g--)this.words[g + c] = this.words[g];
                for(g = 0; g < c; g++)this.words[g] = 0;
                this.length += c;
            }
            return this._strip();
        }, o.prototype.ishln = function(f) {
            return i(this.negative === 0), this.iushln(f);
        }, o.prototype.iushrn = function(f, a, c) {
            i(typeof f == "number" && f >= 0);
            var d;
            a ? d = (a - a % 26) / 26 : d = 0;
            var g = f % 26, x = Math.min((f - g) / 26, this.length), M = 67108863 ^ 67108863 >>> g << g, l = c;
            if (d -= x, d = Math.max(0, d), l) {
                for(var s = 0; s < x; s++)l.words[s] = this.words[s];
                l.length = x;
            }
            if (x !== 0) if (this.length > x) for(this.length -= x, s = 0; s < this.length; s++)this.words[s] = this.words[s + x];
            else this.words[0] = 0, this.length = 1;
            var v = 0;
            for(s = this.length - 1; s >= 0 && (v !== 0 || s >= d); s--){
                var k = this.words[s] | 0;
                this.words[s] = v << 26 - g | k >>> g, v = k & M;
            }
            return l && v !== 0 && (l.words[l.length++] = v), this.length === 0 && (this.words[0] = 0, this.length = 1), this._strip();
        }, o.prototype.ishrn = function(f, a, c) {
            return i(this.negative === 0), this.iushrn(f, a, c);
        }, o.prototype.shln = function(f) {
            return this.clone().ishln(f);
        }, o.prototype.ushln = function(f) {
            return this.clone().iushln(f);
        }, o.prototype.shrn = function(f) {
            return this.clone().ishrn(f);
        }, o.prototype.ushrn = function(f) {
            return this.clone().iushrn(f);
        }, o.prototype.testn = function(f) {
            i(typeof f == "number" && f >= 0);
            var a = f % 26, c = (f - a) / 26, d = 1 << a;
            if (this.length <= c) return !1;
            var g = this.words[c];
            return !!(g & d);
        }, o.prototype.imaskn = function(f) {
            i(typeof f == "number" && f >= 0);
            var a = f % 26, c = (f - a) / 26;
            if (i(this.negative === 0, "imaskn works only with positive numbers"), this.length <= c) return this;
            if (a !== 0 && c++, this.length = Math.min(c, this.length), a !== 0) {
                var d = 67108863 ^ 67108863 >>> a << a;
                this.words[this.length - 1] &= d;
            }
            return this._strip();
        }, o.prototype.maskn = function(f) {
            return this.clone().imaskn(f);
        }, o.prototype.iaddn = function(f) {
            return i(typeof f == "number"), i(f < 67108864), f < 0 ? this.isubn(-f) : this.negative !== 0 ? this.length === 1 && (this.words[0] | 0) <= f ? (this.words[0] = f - (this.words[0] | 0), this.negative = 0, this) : (this.negative = 0, this.isubn(f), this.negative = 1, this) : this._iaddn(f);
        }, o.prototype._iaddn = function(f) {
            this.words[0] += f;
            for(var a = 0; a < this.length && this.words[a] >= 67108864; a++)this.words[a] -= 67108864, a === this.length - 1 ? this.words[a + 1] = 1 : this.words[a + 1]++;
            return this.length = Math.max(this.length, a + 1), this;
        }, o.prototype.isubn = function(f) {
            if (i(typeof f == "number"), i(f < 67108864), f < 0) return this.iaddn(-f);
            if (this.negative !== 0) return this.negative = 0, this.iaddn(f), this.negative = 1, this;
            if (this.words[0] -= f, this.length === 1 && this.words[0] < 0) this.words[0] = -this.words[0], this.negative = 1;
            else for(var a = 0; a < this.length && this.words[a] < 0; a++)this.words[a] += 67108864, this.words[a + 1] -= 1;
            return this._strip();
        }, o.prototype.addn = function(f) {
            return this.clone().iaddn(f);
        }, o.prototype.subn = function(f) {
            return this.clone().isubn(f);
        }, o.prototype.iabs = function() {
            return this.negative = 0, this;
        }, o.prototype.abs = function() {
            return this.clone().iabs();
        }, o.prototype._ishlnsubmul = function(f, a, c) {
            var d = f.length + c, g;
            this._expand(d);
            var x, M = 0;
            for(g = 0; g < f.length; g++){
                x = (this.words[g + c] | 0) + M;
                var l = (f.words[g] | 0) * a;
                x -= l & 67108863, M = (x >> 26) - (l / 67108864 | 0), this.words[g + c] = x & 67108863;
            }
            for(; g < this.length - c; g++)x = (this.words[g + c] | 0) + M, M = x >> 26, this.words[g + c] = x & 67108863;
            if (M === 0) return this._strip();
            for(i(M === -1), M = 0, g = 0; g < this.length; g++)x = -(this.words[g] | 0) + M, M = x >> 26, this.words[g] = x & 67108863;
            return this.negative = 1, this._strip();
        }, o.prototype._wordDiv = function(f, a) {
            var c = this.length - f.length, d = this.clone(), g = f, x = g.words[g.length - 1] | 0, M = this._countBits(x);
            c = 26 - M, c !== 0 && (g = g.ushln(c), d.iushln(c), x = g.words[g.length - 1] | 0);
            var l = d.length - g.length, s;
            if (a !== "mod") {
                s = new o(null), s.length = l + 1, s.words = new Array(s.length);
                for(var v = 0; v < s.length; v++)s.words[v] = 0;
            }
            var k = d.clone()._ishlnsubmul(g, 1, l);
            k.negative === 0 && (d = k, s && (s.words[l] = 1));
            for(var u = l - 1; u >= 0; u--){
                var E = (d.words[g.length + u] | 0) * 67108864 + (d.words[g.length + u - 1] | 0);
                for(E = Math.min(E / x | 0, 67108863), d._ishlnsubmul(g, E, u); d.negative !== 0;)E--, d.negative = 0, d._ishlnsubmul(g, 1, u), d.isZero() || (d.negative ^= 1);
                s && (s.words[u] = E);
            }
            return s && s._strip(), d._strip(), a !== "div" && c !== 0 && d.iushrn(c), {
                div: s || null,
                mod: d
            };
        }, o.prototype.divmod = function(f, a, c) {
            if (i(!f.isZero()), this.isZero()) return {
                div: new o(0),
                mod: new o(0)
            };
            var d, g, x;
            return this.negative !== 0 && f.negative === 0 ? (x = this.neg().divmod(f, a), a !== "mod" && (d = x.div.neg()), a !== "div" && (g = x.mod.neg(), c && g.negative !== 0 && g.iadd(f)), {
                div: d,
                mod: g
            }) : this.negative === 0 && f.negative !== 0 ? (x = this.divmod(f.neg(), a), a !== "mod" && (d = x.div.neg()), {
                div: d,
                mod: x.mod
            }) : this.negative & f.negative ? (x = this.neg().divmod(f.neg(), a), a !== "div" && (g = x.mod.neg(), c && g.negative !== 0 && g.isub(f)), {
                div: x.div,
                mod: g
            }) : f.length > this.length || this.cmp(f) < 0 ? {
                div: new o(0),
                mod: this
            } : f.length === 1 ? a === "div" ? {
                div: this.divn(f.words[0]),
                mod: null
            } : a === "mod" ? {
                div: null,
                mod: new o(this.modrn(f.words[0]))
            } : {
                div: this.divn(f.words[0]),
                mod: new o(this.modrn(f.words[0]))
            } : this._wordDiv(f, a);
        }, o.prototype.div = function(f) {
            return this.divmod(f, "div", !1).div;
        }, o.prototype.mod = function(f) {
            return this.divmod(f, "mod", !1).mod;
        }, o.prototype.umod = function(f) {
            return this.divmod(f, "mod", !0).mod;
        }, o.prototype.divRound = function(f) {
            var a = this.divmod(f);
            if (a.mod.isZero()) return a.div;
            var c = a.div.negative !== 0 ? a.mod.isub(f) : a.mod, d = f.ushrn(1), g = f.andln(1), x = c.cmp(d);
            return x < 0 || g === 1 && x === 0 ? a.div : a.div.negative !== 0 ? a.div.isubn(1) : a.div.iaddn(1);
        }, o.prototype.modrn = function(f) {
            var a = f < 0;
            a && (f = -f), i(f <= 67108863);
            for(var c = (1 << 26) % f, d = 0, g = this.length - 1; g >= 0; g--)d = (c * d + (this.words[g] | 0)) % f;
            return a ? -d : d;
        }, o.prototype.modn = function(f) {
            return this.modrn(f);
        }, o.prototype.idivn = function(f) {
            var a = f < 0;
            a && (f = -f), i(f <= 67108863);
            for(var c = 0, d = this.length - 1; d >= 0; d--){
                var g = (this.words[d] | 0) + c * 67108864;
                this.words[d] = g / f | 0, c = g % f;
            }
            return this._strip(), a ? this.ineg() : this;
        }, o.prototype.divn = function(f) {
            return this.clone().idivn(f);
        }, o.prototype.egcd = function(f) {
            i(f.negative === 0), i(!f.isZero());
            var a = this, c = f.clone();
            a.negative !== 0 ? a = a.umod(f) : a = a.clone();
            for(var d = new o(1), g = new o(0), x = new o(0), M = new o(1), l = 0; a.isEven() && c.isEven();)a.iushrn(1), c.iushrn(1), ++l;
            for(var s = c.clone(), v = a.clone(); !a.isZero();){
                for(var k = 0, u = 1; !(a.words[0] & u) && k < 26; ++k, u <<= 1);
                if (k > 0) for(a.iushrn(k); k-- > 0;)(d.isOdd() || g.isOdd()) && (d.iadd(s), g.isub(v)), d.iushrn(1), g.iushrn(1);
                for(var E = 0, _ = 1; !(c.words[0] & _) && E < 26; ++E, _ <<= 1);
                if (E > 0) for(c.iushrn(E); E-- > 0;)(x.isOdd() || M.isOdd()) && (x.iadd(s), M.isub(v)), x.iushrn(1), M.iushrn(1);
                a.cmp(c) >= 0 ? (a.isub(c), d.isub(x), g.isub(M)) : (c.isub(a), x.isub(d), M.isub(g));
            }
            return {
                a: x,
                b: M,
                gcd: c.iushln(l)
            };
        }, o.prototype._invmp = function(f) {
            i(f.negative === 0), i(!f.isZero());
            var a = this, c = f.clone();
            a.negative !== 0 ? a = a.umod(f) : a = a.clone();
            for(var d = new o(1), g = new o(0), x = c.clone(); a.cmpn(1) > 0 && c.cmpn(1) > 0;){
                for(var M = 0, l = 1; !(a.words[0] & l) && M < 26; ++M, l <<= 1);
                if (M > 0) for(a.iushrn(M); M-- > 0;)d.isOdd() && d.iadd(x), d.iushrn(1);
                for(var s = 0, v = 1; !(c.words[0] & v) && s < 26; ++s, v <<= 1);
                if (s > 0) for(c.iushrn(s); s-- > 0;)g.isOdd() && g.iadd(x), g.iushrn(1);
                a.cmp(c) >= 0 ? (a.isub(c), d.isub(g)) : (c.isub(a), g.isub(d));
            }
            var k;
            return a.cmpn(1) === 0 ? k = d : k = g, k.cmpn(0) < 0 && k.iadd(f), k;
        }, o.prototype.gcd = function(f) {
            if (this.isZero()) return f.abs();
            if (f.isZero()) return this.abs();
            var a = this.clone(), c = f.clone();
            a.negative = 0, c.negative = 0;
            for(var d = 0; a.isEven() && c.isEven(); d++)a.iushrn(1), c.iushrn(1);
            do {
                for(; a.isEven();)a.iushrn(1);
                for(; c.isEven();)c.iushrn(1);
                var g = a.cmp(c);
                if (g < 0) {
                    var x = a;
                    a = c, c = x;
                } else if (g === 0 || c.cmpn(1) === 0) break;
                a.isub(c);
            }while (!0)
            return c.iushln(d);
        }, o.prototype.invm = function(f) {
            return this.egcd(f).a.umod(f);
        }, o.prototype.isEven = function() {
            return (this.words[0] & 1) === 0;
        }, o.prototype.isOdd = function() {
            return (this.words[0] & 1) === 1;
        }, o.prototype.andln = function(f) {
            return this.words[0] & f;
        }, o.prototype.bincn = function(f) {
            i(typeof f == "number");
            var a = f % 26, c = (f - a) / 26, d = 1 << a;
            if (this.length <= c) return this._expand(c + 1), this.words[c] |= d, this;
            for(var g = d, x = c; g !== 0 && x < this.length; x++){
                var M = this.words[x] | 0;
                M += g, g = M >>> 26, M &= 67108863, this.words[x] = M;
            }
            return g !== 0 && (this.words[x] = g, this.length++), this;
        }, o.prototype.isZero = function() {
            return this.length === 1 && this.words[0] === 0;
        }, o.prototype.cmpn = function(f) {
            var a = f < 0;
            if (this.negative !== 0 && !a) return -1;
            if (this.negative === 0 && a) return 1;
            this._strip();
            var c;
            if (this.length > 1) c = 1;
            else {
                a && (f = -f), i(f <= 67108863, "Number is too big");
                var d = this.words[0] | 0;
                c = d === f ? 0 : d < f ? -1 : 1;
            }
            return this.negative !== 0 ? -c | 0 : c;
        }, o.prototype.cmp = function(f) {
            if (this.negative !== 0 && f.negative === 0) return -1;
            if (this.negative === 0 && f.negative !== 0) return 1;
            var a = this.ucmp(f);
            return this.negative !== 0 ? -a | 0 : a;
        }, o.prototype.ucmp = function(f) {
            if (this.length > f.length) return 1;
            if (this.length < f.length) return -1;
            for(var a = 0, c = this.length - 1; c >= 0; c--){
                var d = this.words[c] | 0, g = f.words[c] | 0;
                if (d !== g) {
                    d < g ? a = -1 : d > g && (a = 1);
                    break;
                }
            }
            return a;
        }, o.prototype.gtn = function(f) {
            return this.cmpn(f) === 1;
        }, o.prototype.gt = function(f) {
            return this.cmp(f) === 1;
        }, o.prototype.gten = function(f) {
            return this.cmpn(f) >= 0;
        }, o.prototype.gte = function(f) {
            return this.cmp(f) >= 0;
        }, o.prototype.ltn = function(f) {
            return this.cmpn(f) === -1;
        }, o.prototype.lt = function(f) {
            return this.cmp(f) === -1;
        }, o.prototype.lten = function(f) {
            return this.cmpn(f) <= 0;
        }, o.prototype.lte = function(f) {
            return this.cmp(f) <= 0;
        }, o.prototype.eqn = function(f) {
            return this.cmpn(f) === 0;
        }, o.prototype.eq = function(f) {
            return this.cmp(f) === 0;
        }, o.red = function(f) {
            return new Y(f);
        }, o.prototype.toRed = function(f) {
            return i(!this.red, "Already a number in reduction context"), i(this.negative === 0, "red works only with positives"), f.convertTo(this)._forceRed(f);
        }, o.prototype.fromRed = function() {
            return i(this.red, "fromRed works only with numbers in reduction context"), this.red.convertFrom(this);
        }, o.prototype._forceRed = function(f) {
            return this.red = f, this;
        }, o.prototype.forceRed = function(f) {
            return i(!this.red, "Already a number in reduction context"), this._forceRed(f);
        }, o.prototype.redAdd = function(f) {
            return i(this.red, "redAdd works only with red numbers"), this.red.add(this, f);
        }, o.prototype.redIAdd = function(f) {
            return i(this.red, "redIAdd works only with red numbers"), this.red.iadd(this, f);
        }, o.prototype.redSub = function(f) {
            return i(this.red, "redSub works only with red numbers"), this.red.sub(this, f);
        }, o.prototype.redISub = function(f) {
            return i(this.red, "redISub works only with red numbers"), this.red.isub(this, f);
        }, o.prototype.redShl = function(f) {
            return i(this.red, "redShl works only with red numbers"), this.red.shl(this, f);
        }, o.prototype.redMul = function(f) {
            return i(this.red, "redMul works only with red numbers"), this.red._verify2(this, f), this.red.mul(this, f);
        }, o.prototype.redIMul = function(f) {
            return i(this.red, "redMul works only with red numbers"), this.red._verify2(this, f), this.red.imul(this, f);
        }, o.prototype.redSqr = function() {
            return i(this.red, "redSqr works only with red numbers"), this.red._verify1(this), this.red.sqr(this);
        }, o.prototype.redISqr = function() {
            return i(this.red, "redISqr works only with red numbers"), this.red._verify1(this), this.red.isqr(this);
        }, o.prototype.redSqrt = function() {
            return i(this.red, "redSqrt works only with red numbers"), this.red._verify1(this), this.red.sqrt(this);
        }, o.prototype.redInvm = function() {
            return i(this.red, "redInvm works only with red numbers"), this.red._verify1(this), this.red.invm(this);
        }, o.prototype.redNeg = function() {
            return i(this.red, "redNeg works only with red numbers"), this.red._verify1(this), this.red.neg(this);
        }, o.prototype.redPow = function(f) {
            return i(this.red && !f.red, "redPow(normalNum)"), this.red._verify1(this), this.red.pow(this, f);
        };
        var H = {
            k256: null,
            p224: null,
            p192: null,
            p25519: null
        };
        function z(A, f) {
            this.name = A, this.p = new o(f, 16), this.n = this.p.bitLength(), this.k = new o(1).iushln(this.n).isub(this.p), this.tmp = this._tmp();
        }
        z.prototype._tmp = function() {
            var f = new o(null);
            return f.words = new Array(Math.ceil(this.n / 13)), f;
        }, z.prototype.ireduce = function(f) {
            var a = f, c;
            do this.split(a, this.tmp), a = this.imulK(a), a = a.iadd(this.tmp), c = a.bitLength();
            while (c > this.n)
            var d = c < this.n ? -1 : a.ucmp(this.p);
            return d === 0 ? (a.words[0] = 0, a.length = 1) : d > 0 ? a.isub(this.p) : a.strip !== void 0 ? a.strip() : a._strip(), a;
        }, z.prototype.split = function(f, a) {
            f.iushrn(this.n, 0, a);
        }, z.prototype.imulK = function(f) {
            return f.imul(this.k);
        };
        function Pt() {
            z.call(this, "k256", "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f");
        }
        n(Pt, z), Pt.prototype.split = function(f, a) {
            for(var c = 4194303, d = Math.min(f.length, 9), g = 0; g < d; g++)a.words[g] = f.words[g];
            if (a.length = d, f.length <= 9) {
                f.words[0] = 0, f.length = 1;
                return;
            }
            var x = f.words[9];
            for(a.words[a.length++] = x & c, g = 10; g < f.length; g++){
                var M = f.words[g] | 0;
                f.words[g - 10] = (M & c) << 4 | x >>> 22, x = M;
            }
            x >>>= 22, f.words[g - 10] = x, x === 0 && f.length > 10 ? f.length -= 10 : f.length -= 9;
        }, Pt.prototype.imulK = function(f) {
            f.words[f.length] = 0, f.words[f.length + 1] = 0, f.length += 2;
            for(var a = 0, c = 0; c < f.length; c++){
                var d = f.words[c] | 0;
                a += d * 977, f.words[c] = a & 67108863, a = d * 64 + (a / 67108864 | 0);
            }
            return f.words[f.length - 1] === 0 && (f.length--, f.words[f.length - 1] === 0 && f.length--), f;
        };
        function W() {
            z.call(this, "p224", "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001");
        }
        n(W, z);
        function Rt() {
            z.call(this, "p192", "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff");
        }
        n(Rt, z);
        function Yt() {
            z.call(this, "25519", "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed");
        }
        n(Yt, z), Yt.prototype.imulK = function(f) {
            for(var a = 0, c = 0; c < f.length; c++){
                var d = (f.words[c] | 0) * 19 + a, g = d & 67108863;
                d >>>= 26, f.words[c] = g, a = d;
            }
            return a !== 0 && (f.words[f.length++] = a), f;
        }, o._prime = function(f) {
            if (H[f]) return H[f];
            var a;
            if (f === "k256") a = new Pt;
            else if (f === "p224") a = new W;
            else if (f === "p192") a = new Rt;
            else if (f === "p25519") a = new Yt;
            else throw new Error("Unknown prime " + f);
            return H[f] = a, a;
        };
        function Y(A) {
            if (typeof A == "string") {
                var f = o._prime(A);
                this.m = f.p, this.prime = f;
            } else i(A.gtn(1), "modulus must be greater than 1"), this.m = A, this.prime = null;
        }
        Y.prototype._verify1 = function(f) {
            i(f.negative === 0, "red works only with positives"), i(f.red, "red works only with red numbers");
        }, Y.prototype._verify2 = function(f, a) {
            i((f.negative | a.negative) === 0, "red works only with positives"), i(f.red && f.red === a.red, "red works only with red numbers");
        }, Y.prototype.imod = function(f) {
            return this.prime ? this.prime.ireduce(f)._forceRed(this) : (w(f, f.umod(this.m)._forceRed(this)), f);
        }, Y.prototype.neg = function(f) {
            return f.isZero() ? f.clone() : this.m.sub(f)._forceRed(this);
        }, Y.prototype.add = function(f, a) {
            this._verify2(f, a);
            var c = f.add(a);
            return c.cmp(this.m) >= 0 && c.isub(this.m), c._forceRed(this);
        }, Y.prototype.iadd = function(f, a) {
            this._verify2(f, a);
            var c = f.iadd(a);
            return c.cmp(this.m) >= 0 && c.isub(this.m), c;
        }, Y.prototype.sub = function(f, a) {
            this._verify2(f, a);
            var c = f.sub(a);
            return c.cmpn(0) < 0 && c.iadd(this.m), c._forceRed(this);
        }, Y.prototype.isub = function(f, a) {
            this._verify2(f, a);
            var c = f.isub(a);
            return c.cmpn(0) < 0 && c.iadd(this.m), c;
        }, Y.prototype.shl = function(f, a) {
            return this._verify1(f), this.imod(f.ushln(a));
        }, Y.prototype.imul = function(f, a) {
            return this._verify2(f, a), this.imod(f.imul(a));
        }, Y.prototype.mul = function(f, a) {
            return this._verify2(f, a), this.imod(f.mul(a));
        }, Y.prototype.isqr = function(f) {
            return this.imul(f, f.clone());
        }, Y.prototype.sqr = function(f) {
            return this.mul(f, f);
        }, Y.prototype.sqrt = function(f) {
            if (f.isZero()) return f.clone();
            var a = this.m.andln(3);
            if (i(a % 2 === 1), a === 3) {
                var c = this.m.add(new o(1)).iushrn(2);
                return this.pow(f, c);
            }
            for(var d = this.m.subn(1), g = 0; !d.isZero() && d.andln(1) === 0;)g++, d.iushrn(1);
            i(!d.isZero());
            var x = new o(1).toRed(this), M = x.redNeg(), l = this.m.subn(1).iushrn(1), s = this.m.bitLength();
            for(s = new o(2 * s * s).toRed(this); this.pow(s, l).cmp(M) !== 0;)s.redIAdd(M);
            for(var v = this.pow(s, d), k = this.pow(f, d.addn(1).iushrn(1)), u = this.pow(f, d), E = g; u.cmp(x) !== 0;){
                for(var _ = u, B = 0; _.cmp(x) !== 0; B++)_ = _.redSqr();
                i(B < E);
                var R = this.pow(v, new o(1).iushln(E - B - 1));
                k = k.redMul(R), v = R.redSqr(), u = u.redMul(v), E = B;
            }
            return k;
        }, Y.prototype.invm = function(f) {
            var a = f._invmp(this.m);
            return a.negative !== 0 ? (a.negative = 0, this.imod(a).redNeg()) : this.imod(a);
        }, Y.prototype.pow = function(f, a) {
            if (a.isZero()) return new o(1).toRed(this);
            if (a.cmpn(1) === 0) return f.clone();
            var c = 4, d = new Array(1 << c);
            d[0] = new o(1).toRed(this), d[1] = f;
            for(var g = 2; g < d.length; g++)d[g] = this.mul(d[g - 1], f);
            var x = d[0], M = 0, l = 0, s = a.bitLength() % 26;
            for(s === 0 && (s = 26), g = a.length - 1; g >= 0; g--){
                for(var v = a.words[g], k = s - 1; k >= 0; k--){
                    var u = v >> k & 1;
                    if (x !== d[0] && (x = this.sqr(x)), u === 0 && M === 0) {
                        l = 0;
                        continue;
                    }
                    M <<= 1, M |= u, l++, !(l !== c && (g !== 0 || k !== 0)) && (x = this.mul(x, d[M]), l = 0, M = 0);
                }
                s = 26;
            }
            return x;
        }, Y.prototype.convertTo = function(f) {
            var a = f.umod(this.m);
            return a === f ? a.clone() : a;
        }, Y.prototype.convertFrom = function(f) {
            var a = f.clone();
            return a.red = null, a;
        }, o.mont = function(f) {
            return new Vt(f);
        };
        function Vt(A) {
            Y.call(this, A), this.shift = this.m.bitLength(), this.shift % 26 !== 0 && (this.shift += 26 - this.shift % 26), this.r = new o(1).iushln(this.shift), this.r2 = this.imod(this.r.sqr()), this.rinv = this.r._invmp(this.m), this.minv = this.rinv.mul(this.r).isubn(1).div(this.m), this.minv = this.minv.umod(this.r), this.minv = this.r.sub(this.minv);
        }
        n(Vt, Y), Vt.prototype.convertTo = function(f) {
            return this.imod(f.ushln(this.shift));
        }, Vt.prototype.convertFrom = function(f) {
            var a = this.imod(f.mul(this.rinv));
            return a.red = null, a;
        }, Vt.prototype.imul = function(f, a) {
            if (f.isZero() || a.isZero()) return f.words[0] = 0, f.length = 1, f;
            var c = f.imul(a), d = c.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m), g = c.isub(d).iushrn(this.shift), x = g;
            return g.cmp(this.m) >= 0 ? x = g.isub(this.m) : g.cmpn(0) < 0 && (x = g.iadd(this.m)), x._forceRed(this);
        }, Vt.prototype.mul = function(f, a) {
            if (f.isZero() || a.isZero()) return new o(0)._forceRed(this);
            var c = f.mul(a), d = c.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m), g = c.isub(d).iushrn(this.shift), x = g;
            return g.cmp(this.m) >= 0 ? x = g.isub(this.m) : g.cmpn(0) < 0 && (x = g.iadd(this.m)), x._forceRed(this);
        }, Vt.prototype.invm = function(f) {
            var a = this.imod(f._invmp(this.m).mul(this.r2));
            return a._forceRed(this);
        };
    })(e, On);
})(Ln);
var K = Ln.exports;
const jn = "bignumber/5.7.0";
var Rr = K.BN;
const Ae = new L(jn), wi = {}, Qn = 9007199254740991;
function C0(e) {
    return e != null && (V.isBigNumber(e) || typeof e == "number" && e % 1 === 0 || typeof e == "string" && !!e.match(/^-?[0-9]+$/) || Qt(e) || typeof e == "bigint" || ir(e));
}
let Jn = !1;
class V {
    constructor(t, r){
        t !== wi && Ae.throwError("cannot call constructor directly; use BigNumber.from", L.errors.UNSUPPORTED_OPERATION, {
            operation: "new (BigNumber)"
        }), this._hex = r, this._isBigNumber = !0, Object.freeze(this);
    }
    fromTwos(t) {
        return Lt(j(this).fromTwos(t));
    }
    toTwos(t) {
        return Lt(j(this).toTwos(t));
    }
    abs() {
        return this._hex[0] === "-" ? V.from(this._hex.substring(1)) : this;
    }
    add(t) {
        return Lt(j(this).add(j(t)));
    }
    sub(t) {
        return Lt(j(this).sub(j(t)));
    }
    div(t) {
        return V.from(t).isZero() && Wt("division-by-zero", "div"), Lt(j(this).div(j(t)));
    }
    mul(t) {
        return Lt(j(this).mul(j(t)));
    }
    mod(t) {
        const r = j(t);
        return r.isNeg() && Wt("division-by-zero", "mod"), Lt(j(this).umod(r));
    }
    pow(t) {
        const r = j(t);
        return r.isNeg() && Wt("negative-power", "pow"), Lt(j(this).pow(r));
    }
    and(t) {
        const r = j(t);
        return (this.isNegative() || r.isNeg()) && Wt("unbound-bitwise-result", "and"), Lt(j(this).and(r));
    }
    or(t) {
        const r = j(t);
        return (this.isNegative() || r.isNeg()) && Wt("unbound-bitwise-result", "or"), Lt(j(this).or(r));
    }
    xor(t) {
        const r = j(t);
        return (this.isNegative() || r.isNeg()) && Wt("unbound-bitwise-result", "xor"), Lt(j(this).xor(r));
    }
    mask(t) {
        return (this.isNegative() || t < 0) && Wt("negative-width", "mask"), Lt(j(this).maskn(t));
    }
    shl(t) {
        return (this.isNegative() || t < 0) && Wt("negative-width", "shl"), Lt(j(this).shln(t));
    }
    shr(t) {
        return (this.isNegative() || t < 0) && Wt("negative-width", "shr"), Lt(j(this).shrn(t));
    }
    eq(t) {
        return j(this).eq(j(t));
    }
    lt(t) {
        return j(this).lt(j(t));
    }
    lte(t) {
        return j(this).lte(j(t));
    }
    gt(t) {
        return j(this).gt(j(t));
    }
    gte(t) {
        return j(this).gte(j(t));
    }
    isNegative() {
        return this._hex[0] === "-";
    }
    isZero() {
        return j(this).isZero();
    }
    toNumber() {
        try {
            return j(this).toNumber();
        } catch  {
            Wt("overflow", "toNumber", this.toString());
        }
        return null;
    }
    toBigInt() {
        try {
            return BigInt(this.toString());
        } catch  {}
        return Ae.throwError("this platform does not support BigInt", L.errors.UNSUPPORTED_OPERATION, {
            value: this.toString()
        });
    }
    toString() {
        return arguments.length > 0 && (arguments[0] === 10 ? Jn || (Jn = !0, Ae.warn("BigNumber.toString does not accept any parameters; base-10 is assumed")) : arguments[0] === 16 ? Ae.throwError("BigNumber.toString does not accept any parameters; use bigNumber.toHexString()", L.errors.UNEXPECTED_ARGUMENT, {}) : Ae.throwError("BigNumber.toString does not accept parameters", L.errors.UNEXPECTED_ARGUMENT, {})), j(this).toString(10);
    }
    toHexString() {
        return this._hex;
    }
    toJSON(t) {
        return {
            type: "BigNumber",
            hex: this.toHexString()
        };
    }
    static from(t) {
        if (t instanceof V) return t;
        if (typeof t == "string") return t.match(/^-?0x[0-9a-f]+$/i) ? new V(wi, vr(t)) : t.match(/^-?[0-9]+$/) ? new V(wi, vr(new Rr(t))) : Ae.throwArgumentError("invalid BigNumber string", "value", t);
        if (typeof t == "number") return t % 1 && Wt("underflow", "BigNumber.from", t), (t >= Qn || t <= -Qn) && Wt("overflow", "BigNumber.from", t), V.from(String(t));
        const r = t;
        if (typeof r == "bigint") return V.from(r.toString());
        if (ir(r)) return V.from(Kt(r));
        if (r) if (r.toHexString) {
            const i = r.toHexString();
            if (typeof i == "string") return V.from(i);
        } else {
            let i = r._hex;
            if (i == null && r.type === "BigNumber" && (i = r.hex), typeof i == "string" && (Qt(i) || i[0] === "-" && Qt(i.substring(1)))) return V.from(i);
        }
        return Ae.throwArgumentError("invalid BigNumber value", "value", t);
    }
    static isBigNumber(t) {
        return !!(t && t._isBigNumber);
    }
}
function vr(e) {
    if (typeof e != "string") return vr(e.toString(16));
    if (e[0] === "-") return e = e.substring(1), e[0] === "-" && Ae.throwArgumentError("invalid hex", "value", e), e = vr(e), e === "0x00" ? e : "-" + e;
    if (e.substring(0, 2) !== "0x" && (e = "0x" + e), e === "0x") return "0x00";
    for(e.length % 2 && (e = "0x0" + e.substring(2)); e.length > 4 && e.substring(0, 4) === "0x00";)e = "0x" + e.substring(4);
    return e;
}
function Lt(e) {
    return V.from(vr(e));
}
function j(e) {
    const t = V.from(e).toHexString();
    return t[0] === "-" ? new Rr("-" + t.substring(3), 16) : new Rr(t.substring(2), 16);
}
function Wt(e, t, r) {
    const i = {
        fault: e,
        operation: t
    };
    return r != null && (i.value = r), Ae.throwError(e, L.errors.NUMERIC_FAULT, i);
}
function R0(e) {
    return new Rr(e, 36).toString(16);
}
const Ht = new L(jn), mr = {}, Gn = V.from(0), Yn = V.from(-1);
function Vn(e, t, r, i) {
    const n = {
        fault: t,
        operation: r
    };
    return i !== void 0 && (n.value = i), Ht.throwError(e, L.errors.NUMERIC_FAULT, n);
}
let gr = "0";
for(; gr.length < 256;)gr += gr;
function xi(e) {
    if (typeof e != "number") try {
        e = V.from(e).toNumber();
    } catch  {}
    return typeof e == "number" && e >= 0 && e <= 256 && !(e % 1) ? "1" + gr.substring(0, e) : Ht.throwArgumentError("invalid decimal size", "decimals", e);
}
function Mi(e, t) {
    t == null && (t = 0);
    const r = xi(t);
    e = V.from(e);
    const i = e.lt(Gn);
    i && (e = e.mul(Yn));
    let n = e.mod(r).toString();
    for(; n.length < r.length - 1;)n = "0" + n;
    n = n.match(/^([0-9]*[1-9]|0)(0*)/)[1];
    const o = e.div(r).toString();
    return r.length === 1 ? e = o : e = o + "." + n, i && (e = "-" + e), e;
}
function be(e, t) {
    t == null && (t = 0);
    const r = xi(t);
    (typeof e != "string" || !e.match(/^-?[0-9.]+$/)) && Ht.throwArgumentError("invalid decimal value", "value", e);
    const i = e.substring(0, 1) === "-";
    i && (e = e.substring(1)), e === "." && Ht.throwArgumentError("missing value", "value", e);
    const n = e.split(".");
    n.length > 2 && Ht.throwArgumentError("too many decimal points", "value", e);
    let o = n[0], h = n[1];
    for(o || (o = "0"), h || (h = "0"); h[h.length - 1] === "0";)h = h.substring(0, h.length - 1);
    for(h.length > r.length - 1 && Vn("fractional component exceeds decimals", "underflow", "parseFixed"), h === "" && (h = "0"); h.length < r.length - 1;)h += "0";
    const p = V.from(o), b = V.from(h);
    let m = p.mul(r).add(b);
    return i && (m = m.mul(Yn)), m;
}
class dr {
    constructor(t, r, i, n){
        t !== mr && Ht.throwError("cannot use FixedFormat constructor; use FixedFormat.from", L.errors.UNSUPPORTED_OPERATION, {
            operation: "new FixedFormat"
        }), this.signed = r, this.width = i, this.decimals = n, this.name = (r ? "" : "u") + "fixed" + String(i) + "x" + String(n), this._multiplier = xi(n), Object.freeze(this);
    }
    static from(t) {
        if (t instanceof dr) return t;
        typeof t == "number" && (t = `fixed128x${t}`);
        let r = !0, i = 128, n = 18;
        if (typeof t == "string") {
            if (t !== "fixed") if (t === "ufixed") r = !1;
            else {
                const o = t.match(/^(u?)fixed([0-9]+)x([0-9]+)$/);
                o || Ht.throwArgumentError("invalid fixed format", "format", t), r = o[1] !== "u", i = parseInt(o[2]), n = parseInt(o[3]);
            }
        } else if (t) {
            const o = (h, p, b)=>t[h] == null ? b : (typeof t[h] !== p && Ht.throwArgumentError("invalid fixed format (" + h + " not " + p + ")", "format." + h, t[h]), t[h]);
            r = o("signed", "boolean", r), i = o("width", "number", i), n = o("decimals", "number", n);
        }
        return i % 8 && Ht.throwArgumentError("invalid fixed format width (not byte aligned)", "format.width", i), n > 80 && Ht.throwArgumentError("invalid fixed format (decimals too large)", "format.decimals", n), new dr(mr, r, i, n);
    }
}
class Ut {
    constructor(t, r, i, n){
        t !== mr && Ht.throwError("cannot use FixedNumber constructor; use FixedNumber.from", L.errors.UNSUPPORTED_OPERATION, {
            operation: "new FixedFormat"
        }), this.format = n, this._hex = r, this._value = i, this._isFixedNumber = !0, Object.freeze(this);
    }
    _checkFormat(t) {
        this.format.name !== t.format.name && Ht.throwArgumentError("incompatible format; use fixedNumber.toFormat", "other", t);
    }
    addUnsafe(t) {
        this._checkFormat(t);
        const r = be(this._value, this.format.decimals), i = be(t._value, t.format.decimals);
        return Ut.fromValue(r.add(i), this.format.decimals, this.format);
    }
    subUnsafe(t) {
        this._checkFormat(t);
        const r = be(this._value, this.format.decimals), i = be(t._value, t.format.decimals);
        return Ut.fromValue(r.sub(i), this.format.decimals, this.format);
    }
    mulUnsafe(t) {
        this._checkFormat(t);
        const r = be(this._value, this.format.decimals), i = be(t._value, t.format.decimals);
        return Ut.fromValue(r.mul(i).div(this.format._multiplier), this.format.decimals, this.format);
    }
    divUnsafe(t) {
        this._checkFormat(t);
        const r = be(this._value, this.format.decimals), i = be(t._value, t.format.decimals);
        return Ut.fromValue(r.mul(this.format._multiplier).div(i), this.format.decimals, this.format);
    }
    floor() {
        const t = this.toString().split(".");
        t.length === 1 && t.push("0");
        let r = Ut.from(t[0], this.format);
        const i = !t[1].match(/^(0*)$/);
        return this.isNegative() && i && (r = r.subUnsafe(Wn.toFormat(r.format))), r;
    }
    ceiling() {
        const t = this.toString().split(".");
        t.length === 1 && t.push("0");
        let r = Ut.from(t[0], this.format);
        const i = !t[1].match(/^(0*)$/);
        return !this.isNegative() && i && (r = r.addUnsafe(Wn.toFormat(r.format))), r;
    }
    round(t) {
        t == null && (t = 0);
        const r = this.toString().split(".");
        if (r.length === 1 && r.push("0"), (t < 0 || t > 80 || t % 1) && Ht.throwArgumentError("invalid decimal count", "decimals", t), r[1].length <= t) return this;
        const i = Ut.from("1" + gr.substring(0, t), this.format), n = O0.toFormat(this.format);
        return this.mulUnsafe(i).addUnsafe(n).floor().divUnsafe(i);
    }
    isZero() {
        return this._value === "0.0" || this._value === "0";
    }
    isNegative() {
        return this._value[0] === "-";
    }
    toString() {
        return this._value;
    }
    toHexString(t) {
        if (t == null) return this._hex;
        t % 8 && Ht.throwArgumentError("invalid byte width", "width", t);
        const r = V.from(this._hex).fromTwos(this.format.width).toTwos(t).toHexString();
        return oe(r, t / 8);
    }
    toUnsafeFloat() {
        return parseFloat(this.toString());
    }
    toFormat(t) {
        return Ut.fromString(this._value, t);
    }
    static fromValue(t, r, i) {
        return i == null && r != null && !C0(r) && (i = r, r = null), r == null && (r = 0), i == null && (i = "fixed"), Ut.fromString(Mi(t, r), dr.from(i));
    }
    static fromString(t, r) {
        r == null && (r = "fixed");
        const i = dr.from(r), n = be(t, i.decimals);
        !i.signed && n.lt(Gn) && Vn("unsigned value cannot be negative", "overflow", "value", t);
        let o = null;
        i.signed ? o = n.toTwos(i.width).toHexString() : (o = n.toHexString(), o = oe(o, i.width / 8));
        const h = Mi(n, i.decimals);
        return new Ut(mr, o, h, i);
    }
    static fromBytes(t, r) {
        r == null && (r = "fixed");
        const i = dr.from(r);
        if (Ot(t).length > i.width / 8) throw new Error("overflow");
        let n = V.from(t);
        i.signed && (n = n.fromTwos(i.width));
        const o = n.toTwos((i.signed ? 0 : 1) + i.width).toHexString(), h = Mi(n, i.decimals);
        return new Ut(mr, o, h, i);
    }
    static from(t, r) {
        if (typeof t == "string") return Ut.fromString(t, r);
        if (ir(t)) return Ut.fromBytes(t, r);
        try {
            return Ut.fromValue(t, 0, r);
        } catch (i) {
            if (i.code !== L.errors.INVALID_ARGUMENT) throw i;
        }
        return Ht.throwArgumentError("invalid FixedNumber value", "value", t);
    }
    static isFixedNumber(t) {
        return !!(t && t._isFixedNumber);
    }
}
const Wn = Ut.from(1), O0 = Ut.from("0.5"), P0 = "strings/5.7.0", Xn = new L(P0);
var Or;
(function(e) {
    e.current = "", e.NFC = "NFC", e.NFD = "NFD", e.NFKC = "NFKC", e.NFKD = "NFKD";
})(Or || (Or = {}));
var nr;
(function(e) {
    e.UNEXPECTED_CONTINUE = "unexpected continuation byte", e.BAD_PREFIX = "bad codepoint prefix", e.OVERRUN = "string overrun", e.MISSING_CONTINUE = "missing continuation byte", e.OUT_OF_RANGE = "out of UTF-8 range", e.UTF16_SURROGATE = "UTF-16 surrogate", e.OVERLONG = "overlong representation";
})(nr || (nr = {}));
function D0(e, t, r, i, n) {
    return Xn.throwArgumentError(`invalid codepoint at offset ${t}; ${e}`, "bytes", r);
}
function Zn(e, t, r, i, n) {
    if (e === nr.BAD_PREFIX || e === nr.UNEXPECTED_CONTINUE) {
        let o = 0;
        for(let h = t + 1; h < r.length && r[h] >> 6 === 2; h++)o++;
        return o;
    }
    return e === nr.OVERRUN ? r.length - t - 1 : 0;
}
function F0(e, t, r, i, n) {
    return e === nr.OVERLONG ? (i.push(n), 0) : (i.push(65533), Zn(e, t, r));
}
Object.freeze({
    error: D0,
    ignore: Zn,
    replace: F0
});
function Ei(e, t = Or.current) {
    t != Or.current && (Xn.checkNormalize(), e = e.normalize(t));
    let r = [];
    for(let i = 0; i < e.length; i++){
        const n = e.charCodeAt(i);
        if (n < 128) r.push(n);
        else if (n < 2048) r.push(n >> 6 | 192), r.push(n & 63 | 128);
        else if ((n & 64512) == 55296) {
            i++;
            const o = e.charCodeAt(i);
            if (i >= e.length || (o & 64512) !== 56320) throw new Error("invalid utf-8 string");
            const h = 65536 + ((n & 1023) << 10) + (o & 1023);
            r.push(h >> 18 | 240), r.push(h >> 12 & 63 | 128), r.push(h >> 6 & 63 | 128), r.push(h & 63 | 128);
        } else r.push(n >> 12 | 224), r.push(n >> 6 & 63 | 128), r.push(n & 63 | 128);
    }
    return Ot(r);
}
function T0(e) {
    if (e.length % 4 !== 0) throw new Error("bad data");
    let t = [];
    for(let r = 0; r < e.length; r += 4)t.push(parseInt(e.substring(r, r + 4), 16));
    return t;
}
function Si(e, t) {
    t || (t = function(n) {
        return [
            parseInt(n, 16)
        ];
    });
    let r = 0, i = {};
    return e.split(",").forEach((n)=>{
        let o = n.split(":");
        r += parseInt(o[0], 16), i[r] = t(o[1]);
    }), i;
}
function $n(e) {
    let t = 0;
    return e.split(",").map((r)=>{
        let i = r.split("-");
        i.length === 1 ? i[1] = "0" : i[1] === "" && (i[1] = "1");
        let n = t + parseInt(i[0], 16);
        return t = parseInt(i[1], 16), {
            l: n,
            h: t
        };
    });
}
$n("221,13-1b,5f-,40-10,51-f,11-3,3-3,2-2,2-4,8,2,15,2d,28-8,88,48,27-,3-5,11-20,27-,8,28,3-5,12,18,b-a,1c-4,6-16,2-d,2-2,2,1b-4,17-9,8f-,10,f,1f-2,1c-34,33-14e,4,36-,13-,6-2,1a-f,4,9-,3-,17,8,2-2,5-,2,8-,3-,4-8,2-3,3,6-,16-6,2-,7-3,3-,17,8,3,3,3-,2,6-3,3-,4-a,5,2-6,10-b,4,8,2,4,17,8,3,6-,b,4,4-,2-e,2-4,b-10,4,9-,3-,17,8,3-,5-,9-2,3-,4-7,3-3,3,4-3,c-10,3,7-2,4,5-2,3,2,3-2,3-2,4-2,9,4-3,6-2,4,5-8,2-e,d-d,4,9,4,18,b,6-3,8,4,5-6,3-8,3-3,b-11,3,9,4,18,b,6-3,8,4,5-6,3-6,2,3-3,b-11,3,9,4,18,11-3,7-,4,5-8,2-7,3-3,b-11,3,13-2,19,a,2-,8-2,2-3,7,2,9-11,4-b,3b-3,1e-24,3,2-,3,2-,2-5,5,8,4,2,2-,3,e,4-,6,2,7-,b-,3-21,49,23-5,1c-3,9,25,10-,2-2f,23,6,3,8-2,5-5,1b-45,27-9,2a-,2-3,5b-4,45-4,53-5,8,40,2,5-,8,2,5-,28,2,5-,20,2,5-,8,2,5-,8,8,18,20,2,5-,8,28,14-5,1d-22,56-b,277-8,1e-2,52-e,e,8-a,18-8,15-b,e,4,3-b,5e-2,b-15,10,b-5,59-7,2b-555,9d-3,5b-5,17-,7-,27-,7-,9,2,2,2,20-,36,10,f-,7,14-,4,a,54-3,2-6,6-5,9-,1c-10,13-1d,1c-14,3c-,10-6,32-b,240-30,28-18,c-14,a0,115-,3,66-,b-76,5,5-,1d,24,2,5-2,2,8-,35-2,19,f-10,1d-3,311-37f,1b,5a-b,d7-19,d-3,41,57-,68-4,29-3,5f,29-37,2e-2,25-c,2c-2,4e-3,30,78-3,64-,20,19b7-49,51a7-59,48e-2,38-738,2ba5-5b,222f-,3c-94,8-b,6-4,1b,6,2,3,3,6d-20,16e-f,41-,37-7,2e-2,11-f,5-b,18-,b,14,5-3,6,88-,2,bf-2,7-,7-,7-,4-2,8,8-9,8-2ff,20,5-b,1c-b4,27-,27-cbb1,f7-9,28-2,b5-221,56,48,3-,2-,3-,5,d,2,5,3,42,5-,9,8,1d,5,6,2-2,8,153-3,123-3,33-27fd,a6da-5128,21f-5df,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3,2-1d,61-ff7d"), "ad,34f,1806,180b,180c,180d,200b,200c,200d,2060,feff".split(",").map((e)=>parseInt(e, 16)), Si("b5:3bc,c3:ff,7:73,2:253,5:254,3:256,1:257,5:259,1:25b,3:260,1:263,2:269,1:268,5:26f,1:272,2:275,7:280,3:283,5:288,3:28a,1:28b,5:292,3f:195,1:1bf,29:19e,125:3b9,8b:3b2,1:3b8,1:3c5,3:3c6,1:3c0,1a:3ba,1:3c1,1:3c3,2:3b8,1:3b5,1bc9:3b9,1c:1f76,1:1f77,f:1f7a,1:1f7b,d:1f78,1:1f79,1:1f7c,1:1f7d,107:63,5:25b,4:68,1:68,1:68,3:69,1:69,1:6c,3:6e,4:70,1:71,1:72,1:72,1:72,7:7a,2:3c9,2:7a,2:6b,1:e5,1:62,1:63,3:65,1:66,2:6d,b:3b3,1:3c0,6:64,1b574:3b8,1a:3c3,20:3b8,1a:3c3,20:3b8,1a:3c3,20:3b8,1a:3c3,20:3b8,1a:3c3"), Si("179:1,2:1,2:1,5:1,2:1,a:4f,a:1,8:1,2:1,2:1,3:1,5:1,3:1,4:1,2:1,3:1,4:1,8:2,1:1,2:2,1:1,2:2,27:2,195:26,2:25,1:25,1:25,2:40,2:3f,1:3f,33:1,11:-6,1:-9,1ac7:-3a,6d:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,b:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,c:-8,2:-8,2:-8,2:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,49:-8,1:-8,1:-4a,1:-4a,d:-56,1:-56,1:-56,1:-56,d:-8,1:-8,f:-8,1:-8,3:-7"), Si("df:00730073,51:00690307,19:02BC006E,a7:006A030C,18a:002003B9,16:03B903080301,20:03C503080301,1d7:05650582,190f:00680331,1:00740308,1:0077030A,1:0079030A,1:006102BE,b6:03C50313,2:03C503130300,2:03C503130301,2:03C503130342,2a:1F0003B9,1:1F0103B9,1:1F0203B9,1:1F0303B9,1:1F0403B9,1:1F0503B9,1:1F0603B9,1:1F0703B9,1:1F0003B9,1:1F0103B9,1:1F0203B9,1:1F0303B9,1:1F0403B9,1:1F0503B9,1:1F0603B9,1:1F0703B9,1:1F2003B9,1:1F2103B9,1:1F2203B9,1:1F2303B9,1:1F2403B9,1:1F2503B9,1:1F2603B9,1:1F2703B9,1:1F2003B9,1:1F2103B9,1:1F2203B9,1:1F2303B9,1:1F2403B9,1:1F2503B9,1:1F2603B9,1:1F2703B9,1:1F6003B9,1:1F6103B9,1:1F6203B9,1:1F6303B9,1:1F6403B9,1:1F6503B9,1:1F6603B9,1:1F6703B9,1:1F6003B9,1:1F6103B9,1:1F6203B9,1:1F6303B9,1:1F6403B9,1:1F6503B9,1:1F6603B9,1:1F6703B9,3:1F7003B9,1:03B103B9,1:03AC03B9,2:03B10342,1:03B1034203B9,5:03B103B9,6:1F7403B9,1:03B703B9,1:03AE03B9,2:03B70342,1:03B7034203B9,5:03B703B9,6:03B903080300,1:03B903080301,3:03B90342,1:03B903080342,b:03C503080300,1:03C503080301,1:03C10313,2:03C50342,1:03C503080342,b:1F7C03B9,1:03C903B9,1:03CE03B9,2:03C90342,1:03C9034203B9,5:03C903B9,ac:00720073,5b:00B00063,6:00B00066,d:006E006F,a:0073006D,1:00740065006C,1:0074006D,124f:006800700061,2:00610075,2:006F0076,b:00700061,1:006E0061,1:03BC0061,1:006D0061,1:006B0061,1:006B0062,1:006D0062,1:00670062,3:00700066,1:006E0066,1:03BC0066,4:0068007A,1:006B0068007A,1:006D0068007A,1:00670068007A,1:00740068007A,15:00700061,1:006B00700061,1:006D00700061,1:006700700061,8:00700076,1:006E0076,1:03BC0076,1:006D0076,1:006B0076,1:006D0076,1:00700077,1:006E0077,1:03BC0077,1:006D0077,1:006B0077,1:006D0077,1:006B03C9,1:006D03C9,2:00620071,3:00632215006B0067,1:0063006F002E,1:00640062,1:00670079,2:00680070,2:006B006B,1:006B006D,9:00700068,2:00700070006D,1:00700072,2:00730076,1:00770062,c723:00660066,1:00660069,1:0066006C,1:006600660069,1:00660066006C,1:00730074,1:00730074,d:05740576,1:05740565,1:0574056B,1:057E0576,1:0574056D", T0), $n("80-20,2a0-,39c,32,f71,18e,7f2-f,19-7,30-4,7-5,f81-b,5,a800-20ff,4d1-1f,110,fa-6,d174-7,2e84-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,2,1f-5f,ff7f-20001");
const tf = "hash/5.7.0";
function U0(e) {
    e = atob(e);
    const t = [];
    for(let r = 0; r < e.length; r++)t.push(e.charCodeAt(r));
    return Ot(t);
}
function ef(e, t) {
    t == null && (t = 1);
    const r = [], i = r.forEach, n = function(o, h) {
        i.call(o, function(p) {
            h > 0 && Array.isArray(p) ? n(p, h - 1) : r.push(p);
        });
    };
    return n(e, t), r;
}
function k0(e) {
    const t = {};
    for(let r = 0; r < e.length; r++){
        const i = e[r];
        t[i[0]] = i[1];
    }
    return t;
}
function q0(e) {
    let t = 0;
    function r() {
        return e[t++] << 8 | e[t++];
    }
    let i = r(), n = 1, o = [
        0,
        1
    ];
    for(let H = 1; H < i; H++)o.push(n += r());
    let h = r(), p = t;
    t += h;
    let b = 0, m = 0;
    function w() {
        return b == 0 && (m = m << 8 | e[t++], b = 8), m >> --b & 1;
    }
    const y = 31, S = Math.pow(2, y), I = S >>> 1, N = I >> 1, C = S - 1;
    let F = 0;
    for(let H = 0; H < y; H++)F = F << 1 | w();
    let U = [], J = 0, Bt = S;
    for(;;){
        let H = Math.floor(((F - J + 1) * n - 1) / Bt), z = 0, Pt = i;
        for(; Pt - z > 1;){
            let Yt = z + Pt >>> 1;
            H < o[Yt] ? Pt = Yt : z = Yt;
        }
        if (z == 0) break;
        U.push(z);
        let W = J + Math.floor(Bt * o[z] / n), Rt = J + Math.floor(Bt * o[z + 1] / n) - 1;
        for(; !((W ^ Rt) & I);)F = F << 1 & C | w(), W = W << 1 & C, Rt = Rt << 1 & C | 1;
        for(; W & ~Rt & N;)F = F & I | F << 1 & C >>> 1 | w(), W = W << 1 ^ I, Rt = (Rt ^ I) << 1 | I | 1;
        J = W, Bt = 1 + Rt - W;
    }
    let G = i - 4;
    return U.map((H)=>{
        switch(H - G){
            case 3:
                return G + 65792 + (e[p++] << 16 | e[p++] << 8 | e[p++]);
            case 2:
                return G + 256 + (e[p++] << 8 | e[p++]);
            case 1:
                return G + e[p++];
            default:
                return H - 1;
        }
    });
}
function K0(e) {
    let t = 0;
    return ()=>e[t++];
}
function H0(e) {
    return K0(q0(e));
}
function z0(e) {
    return e & 1 ? ~e >> 1 : e >> 1;
}
function L0(e, t) {
    let r = Array(e);
    for(let i = 0; i < e; i++)r[i] = 1 + t();
    return r;
}
function rf(e, t) {
    let r = Array(e);
    for(let i = 0, n = -1; i < e; i++)r[i] = n += 1 + t();
    return r;
}
function j0(e, t) {
    let r = Array(e);
    for(let i = 0, n = 0; i < e; i++)r[i] = n += z0(t());
    return r;
}
function Pr(e, t) {
    let r = rf(e(), e), i = e(), n = rf(i, e), o = L0(i, e);
    for(let h = 0; h < i; h++)for(let p = 0; p < o[h]; p++)r.push(n[h] + p);
    return t ? r.map((h)=>t[h]) : r;
}
function Q0(e) {
    let t = [];
    for(;;){
        let r = e();
        if (r == 0) break;
        t.push(G0(r, e));
    }
    for(;;){
        let r = e() - 1;
        if (r < 0) break;
        t.push(Y0(r, e));
    }
    return k0(ef(t));
}
function J0(e) {
    let t = [];
    for(;;){
        let r = e();
        if (r == 0) break;
        t.push(r);
    }
    return t;
}
function nf(e, t, r) {
    let i = Array(e).fill(void 0).map(()=>[]);
    for(let n = 0; n < t; n++)j0(e, r).forEach((o, h)=>i[h].push(o));
    return i;
}
function G0(e, t) {
    let r = 1 + t(), i = t(), n = J0(t), o = nf(n.length, 1 + e, t);
    return ef(o.map((h, p)=>{
        const b = h[0], m = h.slice(1);
        return Array(n[p]).fill(void 0).map((w, y)=>{
            let S = y * i;
            return [
                b + y * r,
                m.map((I)=>I + S)
            ];
        });
    }));
}
function Y0(e, t) {
    let r = 1 + t();
    return nf(r, 1 + e, t).map((n)=>[
            n[0],
            n.slice(1)
        ]);
}
function V0(e) {
    let t = Pr(e).sort((i, n)=>i - n);
    return r();
    function r() {
        let i = [];
        for(;;){
            let m = Pr(e, t);
            if (m.length == 0) break;
            i.push({
                set: new Set(m),
                node: r()
            });
        }
        i.sort((m, w)=>w.set.size - m.set.size);
        let n = e(), o = n % 3;
        n = n / 3 | 0;
        let h = !!(n & 1);
        n >>= 1;
        let p = n == 1, b = n == 2;
        return {
            branches: i,
            valid: o,
            fe0f: h,
            save: p,
            check: b
        };
    }
}
function W0() {
    return H0(U0("AEQF2AO2DEsA2wIrAGsBRABxAN8AZwCcAEwAqgA0AGwAUgByADcATAAVAFYAIQAyACEAKAAYAFgAGwAjABQAMAAmADIAFAAfABQAKwATACoADgAbAA8AHQAYABoAGQAxADgALAAoADwAEwA9ABMAGgARAA4ADwAWABMAFgAIAA8AHgQXBYMA5BHJAS8JtAYoAe4AExozi0UAH21tAaMnBT8CrnIyhrMDhRgDygIBUAEHcoFHUPe8AXBjAewCjgDQR8IICIcEcQLwATXCDgzvHwBmBoHNAqsBdBcUAykgDhAMShskMgo8AY8jqAQfAUAfHw8BDw87MioGlCIPBwZCa4ELatMAAMspJVgsDl8AIhckSg8XAHdvTwBcIQEiDT4OPhUqbyECAEoAS34Aej8Ybx83JgT/Xw8gHxZ/7w8RICxPHA9vBw+Pfw8PHwAPFv+fAsAvCc8vEr8ivwD/EQ8Bol8OEBa/A78hrwAPCU8vESNvvwWfHwNfAVoDHr+ZAAED34YaAdJPAK7PLwSEgDLHAGo1Pz8Pvx9fUwMrpb8O/58VTzAPIBoXIyQJNF8hpwIVAT8YGAUADDNBaX3RAMomJCg9EhUeA29MABsZBTMNJipjOhc19gcIDR8bBwQHEggCWi6DIgLuAQYA+BAFCha3A5XiAEsqM7UFFgFLhAMjFTMYE1Klnw74nRVBG/ASCm0BYRN/BrsU3VoWy+S0vV8LQx+vN8gF2AC2AK5EAWwApgYDKmAAroQ0NDQ0AT+OCg7wAAIHRAbpNgVcBV0APTA5BfbPFgMLzcYL/QqqA82eBALKCjQCjqYCht0/k2+OAsXQAoP3ASTKDgDw6ACKAUYCMpIKJpRaAE4A5womABzZvs0REEKiACIQAd5QdAECAj4Ywg/wGqY2AVgAYADYvAoCGAEubA0gvAY2ALAAbpbvqpyEAGAEpgQAJgAG7gAgAEACmghUFwCqAMpAINQIwC4DthRAAPcycKgApoIdABwBfCisABoATwBqASIAvhnSBP8aH/ECeAKXAq40NjgDBTwFYQU6AXs3oABgAD4XNgmcCY1eCl5tIFZeUqGgyoNHABgAEQAaABNwWQAmABMATPMa3T34ADldyprmM1M2XociUQgLzvwAXT3xABgAEQAaABNwIGFAnADD8AAgAD4BBJWzaCcIAIEBFMAWwKoAAdq9BWAF5wLQpALEtQAKUSGkahR4GnJM+gsAwCgeFAiUAECQ0BQuL8AAIAAAADKeIheclvFqQAAETr4iAMxIARMgAMIoHhQIAn0E0pDQFC4HhznoAAAAIAI2C0/4lvFqQAAETgBJJwYCAy4ABgYAFAA8MBKYEH4eRhTkAjYeFcgACAYAeABsOqyQ5gRwDayqugEgaIIAtgoACgDmEABmBAWGme5OBJJA2m4cDeoAmITWAXwrMgOgAGwBCh6CBXYF1Tzg1wKAAFdiuABRAFwAXQBsAG8AdgBrAHYAbwCEAHEwfxQBVE5TEQADVFhTBwBDANILAqcCzgLTApQCrQL6vAAMAL8APLhNBKkE6glGKTAU4Dr4N2EYEwBCkABKk8rHAbYBmwIoAiU4Ajf/Aq4CowCAANIChzgaNBsCsTgeODcFXrgClQKdAqQBiQGYAqsCsjTsNHsfNPA0ixsAWTWiOAMFPDQSNCk2BDZHNow2TTZUNhk28Jk9VzI3QkEoAoICoQKwAqcAQAAxBV4FXbS9BW47YkIXP1ciUqs05DS/FwABUwJW11e6nHuYZmSh/RAYA8oMKvZ8KASoUAJYWAJ6ILAsAZSoqjpgA0ocBIhmDgDWAAawRDQoAAcuAj5iAHABZiR2AIgiHgCaAU68ACxuHAG0ygM8MiZIAlgBdF4GagJqAPZOHAMuBgoATkYAsABiAHgAMLoGDPj0HpKEBAAOJgAuALggTAHWAeAMEDbd20Uege0ADwAWADkAQgA9OHd+2MUQZBBhBgNNDkxxPxUQArEPqwvqERoM1irQ090ANK4H8ANYB/ADWANYB/AH8ANYB/ADWANYA1gDWBwP8B/YxRBkD00EcgWTBZAE2wiIJk4RhgctCNdUEnQjHEwDSgEBIypJITuYMxAlR0wRTQgIATZHbKx9PQNMMbBU+pCnA9AyVDlxBgMedhKlAC8PeCE1uk6DekxxpQpQT7NX9wBFBgASqwAS5gBJDSgAUCwGPQBI4zTYABNGAE2bAE3KAExdGABKaAbgAFBXAFCOAFBJABI2SWdObALDOq0//QomCZhvwHdTBkIQHCemEPgMNAG2ATwN7kvZBPIGPATKH34ZGg/OlZ0Ipi3eDO4m5C6igFsj9iqEBe5L9TzeC05RaQ9aC2YJ5DpkgU8DIgEOIowK3g06CG4Q9ArKbA3mEUYHOgPWSZsApgcCCxIdNhW2JhFirQsKOXgG/Br3C5AmsBMqev0F1BoiBk4BKhsAANAu6IWxWjJcHU9gBgQLJiPIFKlQIQ0mQLh4SRocBxYlqgKSQ3FKiFE3HpQh9zw+DWcuFFF9B/Y8BhlQC4I8n0asRQ8R0z6OPUkiSkwtBDaALDAnjAnQD4YMunxzAVoJIgmyDHITMhEYN8YIOgcaLpclJxYIIkaWYJsE+KAD9BPSAwwFQAlCBxQDthwuEy8VKgUOgSXYAvQ21i60ApBWgQEYBcwPJh/gEFFH4Q7qCJwCZgOEJewALhUiABginAhEZABgj9lTBi7MCMhqbSN1A2gU6GIRdAeSDlgHqBw0FcAc4nDJXgyGCSiksAlcAXYJmgFgBOQICjVcjKEgQmdUi1kYnCBiQUBd/QIyDGYVoES+h3kCjA9sEhwBNgF0BzoNAgJ4Ee4RbBCWCOyGBTW2M/k6JgRQIYQgEgooA1BszwsoJvoM+WoBpBJjAw00PnfvZ6xgtyUX/gcaMsZBYSHyC5NPzgydGsIYQ1QvGeUHwAP0GvQn60FYBgADpAQUOk4z7wS+C2oIjAlAAEoOpBgH2BhrCnKM0QEyjAG4mgNYkoQCcJAGOAcMAGgMiAV65gAeAqgIpAAGANADWAA6Aq4HngAaAIZCAT4DKDABIuYCkAOUCDLMAZYwAfQqBBzEDBYA+DhuSwLDsgKAa2ajBd5ZAo8CSjYBTiYEBk9IUgOwcuIA3ABMBhTgSAEWrEvMG+REAeBwLADIAPwABjYHBkIBzgH0bgC4AWALMgmjtLYBTuoqAIQAFmwB2AKKAN4ANgCA8gFUAE4FWvoF1AJQSgESMhksWGIBvAMgATQBDgB6BsyOpsoIIARuB9QCEBwV4gLvLwe2AgMi4BPOQsYCvd9WADIXUu5eZwqoCqdeaAC0YTQHMnM9UQAPH6k+yAdy/BZIiQImSwBQ5gBQQzSaNTFWSTYBpwGqKQK38AFtqwBI/wK37gK3rQK3sAK6280C0gK33AK3zxAAUEIAUD9SklKDArekArw5AEQAzAHCO147WTteO1k7XjtZO147WTteO1kDmChYI03AVU0oJqkKbV9GYewMpw3VRMk6ShPcYFJgMxPJLbgUwhXPJVcZPhq9JwYl5VUKDwUt1GYxCC00dhe9AEApaYNCY4ceMQpMHOhTklT5LRwAskujM7ANrRsWREEFSHXuYisWDwojAmSCAmJDXE6wXDchAqH4AmiZAmYKAp+FOBwMAmY8AmYnBG8EgAN/FAN+kzkHOXgYOYM6JCQCbB4CMjc4CwJtyAJtr/CLADRoRiwBaADfAOIASwYHmQyOAP8MwwAOtgJ3MAJ2o0ACeUxEAni7Hl3cRa9G9AJ8QAJ6yQJ9CgJ88UgBSH5kJQAsFklZSlwWGErNAtECAtDNSygDiFADh+dExpEzAvKiXQQDA69Lz0wuJgTQTU1NsAKLQAKK2cIcCB5EaAa4Ao44Ao5dQZiCAo7aAo5deVG1UzYLUtVUhgKT/AKTDQDqAB1VH1WwVdEHLBwplocy4nhnRTw6ApegAu+zWCKpAFomApaQApZ9nQCqWa1aCoJOADwClrYClk9cRVzSApnMApllXMtdCBoCnJw5wzqeApwXAp+cAp65iwAeEDIrEAKd8gKekwC2PmE1YfACntQCoG8BqgKeoCACnk+mY8lkKCYsAiewAiZ/AqD8AqBN2AKmMAKlzwKoAAB+AqfzaH1osgAESmodatICrOQCrK8CrWgCrQMCVx4CVd0CseLYAx9PbJgCsr4OArLpGGzhbWRtSWADJc4Ctl08QG6RAylGArhfArlIFgK5K3hwN3DiAr0aAy2zAzISAr6JcgMDM3ICvhtzI3NQAsPMAsMFc4N0TDZGdOEDPKgDPJsDPcACxX0CxkgCxhGKAshqUgLIRQLJUALJLwJkngLd03h6YniveSZL0QMYpGcDAmH1GfSVJXsMXpNevBICz2wCz20wTFTT9BSgAMeuAs90ASrrA04TfkwGAtwoAtuLAtJQA1JdA1NgAQIDVY2AikABzBfuYUZ2AILPg44C2sgC2d+EEYRKpz0DhqYAMANkD4ZyWvoAVgLfZgLeuXR4AuIw7RUB8zEoAfScAfLTiALr9ALpcXoAAur6AurlAPpIAboC7ooC652Wq5cEAu5AA4XhmHpw4XGiAvMEAGoDjheZlAL3FAORbwOSiAL3mQL52gL4Z5odmqy8OJsfA52EAv77ARwAOp8dn7QDBY4DpmsDptoA0sYDBmuhiaIGCgMMSgFgASACtgNGAJwEgLpoBgC8BGzAEowcggCEDC6kdjoAJAM0C5IKRoABZCgiAIzw3AYBLACkfng9ogigkgNmWAN6AEQCvrkEVqTGAwCsBRbAA+4iQkMCHR072jI2PTbUNsk2RjY5NvA23TZKNiU3EDcZN5I+RTxDRTBCJkK5VBYKFhZfwQCWygU3AJBRHpu+OytgNxa61A40GMsYjsn7BVwFXQVcBV0FaAVdBVwFXQVcBV0FXAVdBVwFXUsaCNyKAK4AAQUHBwKU7oICoW1e7jAEzgPxA+YDwgCkBFDAwADABKzAAOxFLhitA1UFTDeyPkM+bj51QkRCuwTQWWQ8X+0AWBYzsACNA8xwzAGm7EZ/QisoCTAbLDs6fnLfb8H2GccsbgFw13M1HAVkBW/Jxsm9CNRO8E8FDD0FBQw9FkcClOYCoMFegpDfADgcMiA2AJQACB8AsigKAIzIEAJKeBIApY5yPZQIAKQiHb4fvj5BKSRPQrZCOz0oXyxgOywfKAnGbgMClQaCAkILXgdeCD9IIGUgQj5fPoY+dT52Ao5CM0dAX9BTVG9SDzFwWTQAbxBzJF/lOEIQQglCCkKJIAls5AcClQICoKPMODEFxhi6KSAbiyfIRrMjtCgdWCAkPlFBIitCsEJRzAbMAV/OEyQzDg0OAQQEJ36i328/Mk9AybDJsQlq3tDRApUKAkFzXf1d/j9uALYP6hCoFgCTGD8kPsFKQiobrm0+zj0KSD8kPnVCRBwMDyJRTHFgMTJa5rwXQiQ2YfI/JD7BMEJEHGINTw4TOFlIRzwJO0icMQpyPyQ+wzJCRBv6DVgnKB01NgUKj2bwYzMqCoBkznBgEF+zYDIocwRIX+NgHj4HICNfh2C4CwdwFWpTG/lgUhYGAwRfv2Ts8mAaXzVgml/XYIJfuWC4HI1gUF9pYJZgMR6ilQHMAOwLAlDRefC0in4AXAEJA6PjCwc0IamOANMMCAECRQDFNRTZBgd+CwQlRA+r6+gLBDEFBnwUBXgKATIArwAGRAAHA3cDdAN2A3kDdwN9A3oDdQN7A30DfAN4A3oDfQAYEAAlAtYASwMAUAFsAHcKAHcAmgB3AHUAdQB2AHVu8UgAygDAAHcAdQB1AHYAdQALCgB3AAsAmgB3AAsCOwB3AAtu8UgAygDAAHgKAJoAdwB3AHUAdQB2AHUAeAB1AHUAdgB1bvFIAMoAwAALCgCaAHcACwB3AAsCOwB3AAtu8UgAygDAAH4ACwGgALcBpwC6AahdAu0COwLtbvFIAMoAwAALCgCaAu0ACwLtAAsCOwLtAAtu8UgAygDAA24ACwNvAAu0VsQAAzsAABCkjUIpAAsAUIusOggWcgMeBxVsGwL67U/2HlzmWOEeOgALASvuAAseAfpKUpnpGgYJDCIZM6YyARUE9ThqAD5iXQgnAJYJPnOzw0ZAEZxEKsIAkA4DhAHnTAIDxxUDK0lxCQlPYgIvIQVYJQBVqE1GakUAKGYiDToSBA1EtAYAXQJYAIF8GgMHRyAAIAjOe9YncekRAA0KACUrjwE7Ayc6AAYWAqaiKG4McEcqANoN3+Mg9TwCBhIkuCny+JwUQ29L008JluRxu3K+oAdqiHOqFH0AG5SUIfUJ5SxCGfxdipRzqTmT4V5Zb+r1Uo4Vm+NqSSEl2mNvR2JhIa8SpYO6ntdwFXHCWTCK8f2+Hxo7uiG3drDycAuKIMP5bhi06ACnqArH1rz4Rqg//lm6SgJGEVbF9xJHISaR6HxqxSnkw6shDnelHKNEfGUXSJRJ1GcsmtJw25xrZMDK9gXSm1/YMkdX4/6NKYOdtk/NQ3/NnDASjTc3fPjIjW/5sVfVObX2oTDWkr1dF9f3kxBsD3/3aQO8hPfRz+e0uEiJqt1161griu7gz8hDDwtpy+F+BWtefnKHZPAxcZoWbnznhJpy0e842j36bcNzGnIEusgGX0a8ZxsnjcSsPDZ09yZ36fCQbriHeQ72JRMILNl6ePPf2HWoVwgWAm1fb3V2sAY0+B6rAXqSwPBgseVmoqsBTSrm91+XasMYYySI8eeRxH3ZvHkMz3BQ5aJ3iUVbYPNM3/7emRtjlsMgv/9VyTsyt/mK+8fgWeT6SoFaclXqn42dAIsvAarF5vNNWHzKSkKQ/8Hfk5ZWK7r9yliOsooyBjRhfkHP4Q2DkWXQi6FG/9r/IwbmkV5T7JSopHKn1pJwm9tb5Ot0oyN1Z2mPpKXHTxx2nlK08fKk1hEYA8WgVVWL5lgx0iTv+KdojJeU23ZDjmiubXOxVXJKKi2Wjuh2HLZOFLiSC7Tls5SMh4f+Pj6xUSrNjFqLGehRNB8lC0QSLNmkJJx/wSG3MnjE9T1CkPwJI0wH2lfzwETIiVqUxg0dfu5q39Gt+hwdcxkhhNvQ4TyrBceof3Mhs/IxFci1HmHr4FMZgXEEczPiGCx0HRwzAqDq2j9AVm1kwN0mRVLWLylgtoPNapF5cY4Y1wJh/e0BBwZj44YgZrDNqvD/9Hv7GFYdUQeDJuQ3EWI4HaKqavU1XjC/n41kT4L79kqGq0kLhdTZvgP3TA3fS0ozVz+5piZsoOtIvBUFoMKbNcmBL6YxxaUAusHB38XrS8dQMnQwJfUUkpRoGr5AUeWicvBTzyK9g77+yCkf5PAysL7r/JjcZgrbvRpMW9iyaxZvKO6ceZN2EwIxKwVFPuvFuiEPGCoagbMo+SpydLrXqBzNCDGFCrO/rkcwa2xhokQZ5CdZ0AsU3JfSqJ6n5I14YA+P/uAgfhPU84Tlw7cEFfp7AEE8ey4sP12PTt4Cods1GRgDOB5xvyiR5m+Bx8O5nBCNctU8BevfV5A08x6RHd5jcwPTMDSZJOedIZ1cGQ704lxbAzqZOP05ZxaOghzSdvFBHYqomATARyAADK4elP8Ly3IrUZKfWh23Xy20uBUmLS4Pfagu9+oyVa2iPgqRP3F2CTUsvJ7+RYnN8fFZbU/HVvxvcFFDKkiTqV5UBZ3Gz54JAKByi9hkKMZJvuGgcSYXFmw08UyoQyVdfTD1/dMkCHXcTGAKeROgArsvmRrQTLUOXioOHGK2QkjHuoYFgXciZoTJd6Fs5q1QX1G+p/e26hYsEf7QZD1nnIyl/SFkNtYYmmBhpBrxl9WbY0YpHWRuw2Ll/tj9mD8P4snVzJl4F9J+1arVeTb9E5r2ILH04qStjxQNwn3m4YNqxmaNbLAqW2TN6LidwuJRqS+NXbtqxoeDXpxeGWmxzSkWxjkyCkX4NQRme6q5SAcC+M7+9ETfA/EwrzQajKakCwYyeunP6ZFlxU2oMEn1Pz31zeStW74G406ZJFCl1wAXIoUKkWotYEpOuXB1uVNxJ63dpJEqfxBeptwIHNrPz8BllZoIcBoXwgfJ+8VAUnVPvRvexnw0Ma/WiGYuJO5y8QTvEYBigFmhUxY5RqzE8OcywN/8m4UYrlaniJO75XQ6KSo9+tWHlu+hMi0UVdiKQp7NelnoZUzNaIyBPVeOwK6GNp+FfHuPOoyhaWuNvTYFkvxscMQWDh+zeFCFkgwbXftiV23ywJ4+uwRqmg9k3KzwIQpzppt8DBBOMbrqwQM5Gb05sEwdKzMiAqOloaA/lr0KA+1pr0/+HiWoiIjHA/wir2nIuS3PeU/ji3O6ZwoxcR1SZ9FhtLC5S0FIzFhbBWcGVP/KpxOPSiUoAdWUpqKH++6Scz507iCcxYI6rdMBICPJZea7OcmeFw5mObJSiqpjg2UoWNIs+cFhyDSt6geV5qgi3FunmwwDoGSMgerFOZGX1m0dMCYo5XOruxO063dwENK9DbnVM9wYFREzh4vyU1WYYJ/LRRp6oxgjqP/X5a8/4Af6p6NWkQferzBmXme0zY/4nwMJm/wd1tIqSwGz+E3xPEAOoZlJit3XddD7/BT1pllzOx+8bmQtANQ/S6fZexc6qi3W+Q2xcmXTUhuS5mpHQRvcxZUN0S5+PL9lXWUAaRZhEH8hTdAcuNMMCuVNKTEGtSUKNi3O6KhSaTzck8csZ2vWRZ+d7mW8c4IKwXIYd25S/zIftPkwPzufjEvOHWVD1m+FjpDVUTV0DGDuHj6QnaEwLu/dEgdLQOg9E1Sro9XHJ8ykLAwtPu+pxqKDuFexqON1sKQm7rwbE1E68UCfA/erovrTCG+DBSNg0l4goDQvZN6uNlbyLpcZAwj2UclycvLpIZMgv4yRlpb3YuMftozorbcGVHt/VeDV3+Fdf1TP0iuaCsPi2G4XeGhsyF1ubVDxkoJhmniQ0/jSg/eYML9KLfnCFgISWkp91eauR3IQvED0nAPXK+6hPCYs+n3+hCZbiskmVMG2da+0EsZPonUeIY8EbfusQXjsK/eFDaosbPjEfQS0RKG7yj5GG69M7MeO1HmiUYocgygJHL6M1qzUDDwUSmr99V7Sdr2F3JjQAJY+F0yH33Iv3+C9M38eML7gTgmNu/r2bUMiPvpYbZ6v1/IaESirBHNa7mPKn4dEmYg7v/+HQgPN1G79jBQ1+soydfDC2r+h2Bl/KIc5KjMK7OH6nb1jLsNf0EHVe2KBiE51ox636uyG6Lho0t3J34L5QY/ilE3mikaF4HKXG1mG1rCevT1Vv6GavltxoQe/bMrpZvRggnBxSEPEeEzkEdOxTnPXHVjUYdw8JYvjB/o7Eegc3Ma+NUxLLnsK0kJlinPmUHzHGtrk5+CAbVzFOBqpyy3QVUnzTDfC/0XD94/okH+OB+i7g9lolhWIjSnfIb+Eq43ZXOWmwvjyV/qqD+t0e+7mTEM74qP/Ozt8nmC7mRpyu63OB4KnUzFc074SqoyPUAgM+/TJGFo6T44EHnQU4X4z6qannVqgw/U7zCpwcmXV1AubIrvOmkKHazJAR55ePjp5tLBsN8vAqs3NAHdcEHOR2xQ0lsNAFzSUuxFQCFYvXLZJdOj9p4fNq6p0HBGUik2YzaI4xySy91KzhQ0+q1hjxvImRwPRf76tChlRkhRCi74NXZ9qUNeIwP+s5p+3m5nwPdNOHgSLD79n7O9m1n1uDHiMntq4nkYwV5OZ1ENbXxFd4PgrlvavZsyUO4MqYlqqn1O8W/I1dEZq5dXhrbETLaZIbC2Kj/Aa/QM+fqUOHdf0tXAQ1huZ3cmWECWSXy/43j35+Mvq9xws7JKseriZ1pEWKc8qlzNrGPUGcVgOa9cPJYIJsGnJTAUsEcDOEVULO5x0rXBijc1lgXEzQQKhROf8zIV82w8eswc78YX11KYLWQRcgHNJElBxfXr72lS2RBSl07qTKorO2uUDZr3sFhYsvnhLZn0A94KRzJ/7DEGIAhW5ZWFpL8gEwu1aLA9MuWZzNwl8Oze9Y+bX+v9gywRVnoB5I/8kXTXU3141yRLYrIOOz6SOnyHNy4SieqzkBXharjfjqq1q6tklaEbA8Qfm2DaIPs7OTq/nvJBjKfO2H9bH2cCMh1+5gspfycu8f/cuuRmtDjyqZ7uCIMyjdV3a+p3fqmXsRx4C8lujezIFHnQiVTXLXuI1XrwN3+siYYj2HHTvESUx8DlOTXpak9qFRK+L3mgJ1WsD7F4cu1aJoFoYQnu+wGDMOjJM3kiBQWHCcvhJ/HRdxodOQp45YZaOTA22Nb4XKCVxqkbwMYFhzYQYIAnCW8FW14uf98jhUG2zrKhQQ0q0CEq0t5nXyvUyvR8DvD69LU+g3i+HFWQMQ8PqZuHD+sNKAV0+M6EJC0szq7rEr7B5bQ8BcNHzvDMc9eqB5ZCQdTf80Obn4uzjwpYU7SISdtV0QGa9D3Wrh2BDQtpBKxaNFV+/Cy2P/Sv+8s7Ud0Fd74X4+o/TNztWgETUapy+majNQ68Lq3ee0ZO48VEbTZYiH1Co4OlfWef82RWeyUXo7woM03PyapGfikTnQinoNq5z5veLpeMV3HCAMTaZmA1oGLAn7XS3XYsz+XK7VMQsc4XKrmDXOLU/pSXVNUq8dIqTba///3x6LiLS6xs1xuCAYSfcQ3+rQgmu7uvf3THKt5Ooo97TqcbRqxx7EASizaQCBQllG/rYxVapMLgtLbZS64w1MDBMXX+PQpBKNwqUKOf2DDRDUXQf9EhOS0Qj4nTmlA8dzSLz/G1d+Ud8MTy/6ghhdiLpeerGY/UlDOfiuqFsMUU5/UYlP+BAmgRLuNpvrUaLlVkrqDievNVEAwF+4CoM1MZTmjxjJMsKJq+u8Zd7tNCUFy6LiyYXRJQ4VyvEQFFaCGKsxIwQkk7EzZ6LTJq2hUuPhvAW+gQnSG6J+MszC+7QCRHcnqDdyNRJ6T9xyS87A6MDutbzKGvGktpbXqtzWtXb9HsfK2cBMomjN9a4y+TaJLnXxAeX/HWzmf4cR4vALt/P4w4qgKY04ml4ZdLOinFYS6cup3G/1ie4+t1eOnpBNlqGqs75ilzkT4+DsZQxNvaSKJ//6zIbbk/M7LOhFmRc/1R+kBtz7JFGdZm/COotIdvQoXpTqP/1uqEUmCb/QWoGLMwO5ANcHzxdY48IGP5+J+zKOTBFZ4Pid+GTM+Wq12MV/H86xEJptBa6T+p3kgpwLedManBHC2GgNrFpoN2xnrMz9WFWX/8/ygSBkavq2Uv7FdCsLEYLu9LLIvAU0bNRDtzYl+/vXmjpIvuJFYjmI0im6QEYqnIeMsNjXG4vIutIGHijeAG/9EDBozKV5cldkHbLxHh25vT+ZEzbhXlqvpzKJwcEgfNwLAKFeo0/pvEE10XDB+EXRTXtSzJozQKFFAJhMxYkVaCW+E9AL7tMeU8acxidHqzb6lX4691UsDpy/LLRmT+epgW56+5Cw8tB4kMUv6s9lh3eRKbyGs+H/4mQMaYzPTf2OOdokEn+zzgvoD3FqNKk8QqGAXVsqcGdXrT62fSPkR2vROFi68A6se86UxRUk4cajfPyCC4G5wDhD+zNq4jodQ4u4n/m37Lr36n4LIAAsVr02dFi9AiwA81MYs2rm4eDlDNmdMRvEKRHfBwW5DdMNp0jPFZMeARqF/wL4XBfd+EMLBfMzpH5GH6NaW+1vrvMdg+VxDzatk3MXgO3ro3P/DpcC6+Mo4MySJhKJhSR01SGGGp5hPWmrrUgrv3lDnP+HhcI3nt3YqBoVAVTBAQT5iuhTg8nvPtd8ZeYj6w1x6RqGUBrSku7+N1+BaasZvjTk64RoIDlL8brpEcJx3OmY7jLoZsswdtmhfC/G21llXhITOwmvRDDeTTPbyASOa16cF5/A1fZAidJpqju3wYAy9avPR1ya6eNp9K8XYrrtuxlqi+bDKwlfrYdR0RRiKRVTLOH85+ZY7XSmzRpfZBJjaTa81VDcJHpZnZnSQLASGYW9l51ZV/h7eVzTi3Hv6hUsgc/51AqJRTkpbFVLXXszoBL8nBX0u/0jBLT8nH+fJePbrwURT58OY+UieRjd1vs04w0VG5VN2U6MoGZkQzKN/ptz0Q366dxoTGmj7i1NQGHi9GgnquXFYdrCfZBmeb7s0T6yrdlZH5cZuwHFyIJ/kAtGsTg0xH5taAAq44BAk1CPk9KVVbqQzrCUiFdF/6gtlPQ8bHHc1G1W92MXGZ5HEHftyLYs8mbD/9xYRUWkHmlM0zC2ilJlnNgV4bfALpQghxOUoZL7VTqtCHIaQSXm+YUMnpkXybnV+A6xlm2CVy8fn0Xlm2XRa0+zzOa21JWWmixfiPMSCZ7qA4rS93VN3pkpF1s5TonQjisHf7iU9ZGvUPOAKZcR1pbeVf/Ul7OhepGCaId9wOtqo7pJ7yLcBZ0pFkOF28y4zEI/kcUNmutBHaQpBdNM8vjCS6HZRokkeo88TBAjGyG7SR+6vUgTcyK9Imalj0kuxz0wmK+byQU11AiJFk/ya5dNduRClcnU64yGu/ieWSeOos1t3ep+RPIWQ2pyTYVbZltTbsb7NiwSi3AV+8KLWk7LxCnfZUetEM8ThnsSoGH38/nyAwFguJp8FjvlHtcWZuU4hPva0rHfr0UhOOJ/F6vS62FW7KzkmRll2HEc7oUq4fyi5T70Vl7YVIfsPHUCdHesf9Lk7WNVWO75JDkYbMI8TOW8JKVtLY9d6UJRITO8oKo0xS+o99Yy04iniGHAaGj88kEWgwv0OrHdY/nr76DOGNS59hXCGXzTKUvDl9iKpLSWYN1lxIeyywdNpTkhay74w2jFT6NS8qkjo5CxA1yfSYwp6AJIZNKIeEK5PJAW7ORgWgwp0VgzYpqovMrWxbu+DGZ6Lhie1RAqpzm8VUzKJOH3mCzWuTOLsN3VT/dv2eeYe9UjbR8YTBsLz7q60VN1sU51k+um1f8JxD5pPhbhSC8rRaB454tmh6YUWrJI3+GWY0qeWioj/tbkYITOkJaeuGt4JrJvHA+l0Gu7kY7XOaa05alMnRWVCXqFgLIwSY4uF59Ue5SU4QKuc/HamDxbr0x6csCetXGoP7Qn1Bk/J9DsynO/UD6iZ1Hyrz+jit0hDCwi/E9OjgKTbB3ZQKQ/0ZOvevfNHG0NK4Aj3Cp7NpRk07RT1i/S0EL93Ag8GRgKI9CfpajKyK6+Jj/PI1KO5/85VAwz2AwzP8FTBb075IxCXv6T9RVvWT2tUaqxDS92zrGUbWzUYk9mSs82pECH+fkqsDt93VW++4YsR/dHCYcQSYTO/KaBMDj9LSD/J/+z20Kq8XvZUAIHtm9hRPP3ItbuAu2Hm5lkPs92pd7kCxgRs0xOVBnZ13ccdA0aunrwv9SdqElJRC3g+oCu+nXyCgmXUs9yMjTMAIHfxZV+aPKcZeUBWt057Xo85Ks1Ir5gzEHCWqZEhrLZMuF11ziGtFQUds/EESajhagzcKsxamcSZxGth4UII+adPhQkUnx2WyN+4YWR+r3f8MnkyGFuR4zjzxJS8WsQYR5PTyRaD9ixa6Mh741nBHbzfjXHskGDq179xaRNrCIB1z1xRfWfjqw2pHc1zk9xlPpL8sQWAIuETZZhbnmL54rceXVNRvUiKrrqIkeogsl0XXb17ylNb0f4GA9Wd44vffEG8FSZGHEL2fbaTGRcSiCeA8PmA/f6Hz8HCS76fXUHwgwkzSwlI71ekZ7Fapmlk/KC+Hs8hUcw3N2LN5LhkVYyizYFl/uPeVP5lsoJHhhfWvvSWruCUW1ZcJOeuTbrDgywJ/qG07gZJplnTvLcYdNaH0KMYOYMGX+rB4NGPFmQsNaIwlWrfCezxre8zXBrsMT+edVLbLqN1BqB76JH4BvZTqUIMfGwPGEn+EnmTV86fPBaYbFL3DFEhjB45CewkXEAtJxk4/Ms2pPXnaRqdky0HOYdcUcE2zcXq4vaIvW2/v0nHFJH2XXe22ueDmq/18XGtELSq85j9X8q0tcNSSKJIX8FTuJF/Pf8j5PhqG2u+osvsLxYrvvfeVJL+4tkcXcr9JV7v0ERmj/X6fM3NC4j6dS1+9Umr2oPavqiAydTZPLMNRGY23LO9zAVDly7jD+70G5TPPLdhRIl4WxcYjLnM+SNcJ26FOrkrISUtPObIz5Zb3AG612krnpy15RMW+1cQjlnWFI6538qky9axd2oJmHIHP08KyP0ubGO+TQNOYuv2uh17yCIvR8VcStw7o1g0NM60sk+8Tq7YfIBJrtp53GkvzXH7OA0p8/n/u1satf/VJhtR1l8Wa6Gmaug7haSpaCaYQax6ta0mkutlb+eAOSG1aobM81D9A4iS1RRlzBBoVX6tU1S6WE2N9ORY6DfeLRC4l9Rvr5h95XDWB2mR1d4WFudpsgVYwiTwT31ljskD8ZyDOlm5DkGh9N/UB/0AI5Xvb8ZBmai2hQ4BWMqFwYnzxwB26YHSOv9WgY3JXnvoN+2R4rqGVh/LLDMtpFP+SpMGJNWvbIl5SOodbCczW2RKleksPoUeGEzrjtKHVdtZA+kfqO+rVx/iclCqwoopepvJpSTDjT+b9GWylGRF8EDbGlw6eUzmJM95Ovoz+kwLX3c2fTjFeYEsE7vUZm3mqdGJuKh2w9/QGSaqRHs99aScGOdDqkFcACoqdbBoQqqjamhH6Q9ng39JCg3lrGJwd50Qk9ovnqBTr8MME7Ps2wiVfygUmPoUBJJfJWX5Nda0nuncbFkA=="));
}
const Dr = W0();
new Set(Pr(Dr)), new Set(Pr(Dr)), Q0(Dr), V0(Dr), new L(tf);
const X0 = new Uint8Array(32);
X0.fill(0);
const Z0 = `Ethereum Signed Message:
`;
function ff(e) {
    return typeof e == "string" && (e = Ei(e)), yi(E0([
        Ei(Z0),
        Ei(String(e.length)),
        e
    ]));
}
const $0 = "rlp/5.7.0";
new L($0);
const ts = "address/5.7.0", Ar = new L(ts);
function of(e) {
    Qt(e, 20) || Ar.throwArgumentError("invalid address", "address", e), e = e.toLowerCase();
    const t = e.substring(2).split(""), r = new Uint8Array(40);
    for(let n = 0; n < 40; n++)r[n] = t[n].charCodeAt(0);
    const i = Ot(yi(r));
    for(let n = 0; n < 40; n += 2)i[n >> 1] >> 4 >= 8 && (t[n] = t[n].toUpperCase()), (i[n >> 1] & 15) >= 8 && (t[n + 1] = t[n + 1].toUpperCase());
    return "0x" + t.join("");
}
const es = 9007199254740991;
function rs(e) {
    return Math.log10 ? Math.log10(e) : Math.log(e) / Math.LN10;
}
const Ni = {};
for(let e = 0; e < 10; e++)Ni[String(e)] = String(e);
for(let e = 0; e < 26; e++)Ni[String.fromCharCode(65 + e)] = String(10 + e);
const sf = Math.floor(rs(es));
function is(e) {
    e = e.toUpperCase(), e = e.substring(4) + e.substring(0, 2) + "00";
    let t = e.split("").map((i)=>Ni[i]).join("");
    for(; t.length >= sf;){
        let i = t.substring(0, sf);
        t = parseInt(i, 10) % 97 + t.substring(i.length);
    }
    let r = String(98 - parseInt(t, 10) % 97);
    for(; r.length < 2;)r = "0" + r;
    return r;
}
function ns(e) {
    let t = null;
    if (typeof e != "string" && Ar.throwArgumentError("invalid address", "address", e), e.match(/^(0x)?[0-9a-fA-F]{40}$/)) e.substring(0, 2) !== "0x" && (e = "0x" + e), t = of(e), e.match(/([A-F].*[a-f])|([a-f].*[A-F])/) && t !== e && Ar.throwArgumentError("bad address checksum", "address", e);
    else if (e.match(/^XE[0-9]{2}[0-9A-Za-z]{30,31}$/)) {
        for(e.substring(2, 4) !== is(e) && Ar.throwArgumentError("bad icap checksum", "address", e), t = R0(e.substring(4)); t.length < 40;)t = "0" + t;
        t = of("0x" + t);
    } else Ar.throwArgumentError("invalid address", "address", e);
    return t;
}
const fs = "properties/5.7.0";
new L(fs);
function br(e, t, r) {
    Object.defineProperty(e, t, {
        enumerable: !0,
        value: r,
        writable: !1
    });
}
new L(tf);
const os = new Uint8Array(32);
os.fill(0), V.from(-1);
const ss = V.from(0), as = V.from(1);
V.from("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"), oe(as.toHexString(), 32), oe(ss.toHexString(), 32);
var se = {}, Q = {}, yr = af;
function af(e, t) {
    if (!e) throw new Error(t || "Assertion failed");
}
af.equal = function(t, r, i) {
    if (t != r) throw new Error(i || "Assertion failed: " + t + " != " + r);
};
var Ii = {
    exports: {}
};
typeof Object.create == "function" ? Ii.exports = function(t, r) {
    r && (t.super_ = r, t.prototype = Object.create(r.prototype, {
        constructor: {
            value: t,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }));
} : Ii.exports = function(t, r) {
    if (r) {
        t.super_ = r;
        var i = function() {};
        i.prototype = r.prototype, t.prototype = new i, t.prototype.constructor = t;
    }
};
var us = yr, hs = Ii.exports;
Q.inherits = hs;
function cs(e, t) {
    return (e.charCodeAt(t) & 64512) !== 55296 || t < 0 || t + 1 >= e.length ? !1 : (e.charCodeAt(t + 1) & 64512) === 56320;
}
function ls(e, t) {
    if (Array.isArray(e)) return e.slice();
    if (!e) return [];
    var r = [];
    if (typeof e == "string") if (t) {
        if (t === "hex") for(e = e.replace(/[^a-z0-9]+/ig, ""), e.length % 2 !== 0 && (e = "0" + e), n = 0; n < e.length; n += 2)r.push(parseInt(e[n] + e[n + 1], 16));
    } else for(var i = 0, n = 0; n < e.length; n++){
        var o = e.charCodeAt(n);
        o < 128 ? r[i++] = o : o < 2048 ? (r[i++] = o >> 6 | 192, r[i++] = o & 63 | 128) : cs(e, n) ? (o = 65536 + ((o & 1023) << 10) + (e.charCodeAt(++n) & 1023), r[i++] = o >> 18 | 240, r[i++] = o >> 12 & 63 | 128, r[i++] = o >> 6 & 63 | 128, r[i++] = o & 63 | 128) : (r[i++] = o >> 12 | 224, r[i++] = o >> 6 & 63 | 128, r[i++] = o & 63 | 128);
    }
    else for(n = 0; n < e.length; n++)r[n] = e[n] | 0;
    return r;
}
Q.toArray = ls;
function ds(e) {
    for(var t = "", r = 0; r < e.length; r++)t += hf(e[r].toString(16));
    return t;
}
Q.toHex = ds;
function uf(e) {
    var t = e >>> 24 | e >>> 8 & 65280 | e << 8 & 16711680 | (e & 255) << 24;
    return t >>> 0;
}
Q.htonl = uf;
function ps(e, t) {
    for(var r = "", i = 0; i < e.length; i++){
        var n = e[i];
        t === "little" && (n = uf(n)), r += cf(n.toString(16));
    }
    return r;
}
Q.toHex32 = ps;
function hf(e) {
    return e.length === 1 ? "0" + e : e;
}
Q.zero2 = hf;
function cf(e) {
    return e.length === 7 ? "0" + e : e.length === 6 ? "00" + e : e.length === 5 ? "000" + e : e.length === 4 ? "0000" + e : e.length === 3 ? "00000" + e : e.length === 2 ? "000000" + e : e.length === 1 ? "0000000" + e : e;
}
Q.zero8 = cf;
function vs(e, t, r, i) {
    var n = r - t;
    us(n % 4 === 0);
    for(var o = new Array(n / 4), h = 0, p = t; h < o.length; h++, p += 4){
        var b;
        i === "big" ? b = e[p] << 24 | e[p + 1] << 16 | e[p + 2] << 8 | e[p + 3] : b = e[p + 3] << 24 | e[p + 2] << 16 | e[p + 1] << 8 | e[p], o[h] = b >>> 0;
    }
    return o;
}
Q.join32 = vs;
function ms(e, t) {
    for(var r = new Array(e.length * 4), i = 0, n = 0; i < e.length; i++, n += 4){
        var o = e[i];
        t === "big" ? (r[n] = o >>> 24, r[n + 1] = o >>> 16 & 255, r[n + 2] = o >>> 8 & 255, r[n + 3] = o & 255) : (r[n + 3] = o >>> 24, r[n + 2] = o >>> 16 & 255, r[n + 1] = o >>> 8 & 255, r[n] = o & 255);
    }
    return r;
}
Q.split32 = ms;
function gs(e, t) {
    return e >>> t | e << 32 - t;
}
Q.rotr32 = gs;
function As(e, t) {
    return e << t | e >>> 32 - t;
}
Q.rotl32 = As;
function bs(e, t) {
    return e + t >>> 0;
}
Q.sum32 = bs;
function ys(e, t, r) {
    return e + t + r >>> 0;
}
Q.sum32_3 = ys;
function ws(e, t, r, i) {
    return e + t + r + i >>> 0;
}
Q.sum32_4 = ws;
function xs(e, t, r, i, n) {
    return e + t + r + i + n >>> 0;
}
Q.sum32_5 = xs;
function Ms(e, t, r, i) {
    var n = e[t], o = e[t + 1], h = i + o >>> 0, p = (h < i ? 1 : 0) + r + n;
    e[t] = p >>> 0, e[t + 1] = h;
}
Q.sum64 = Ms;
function Es(e, t, r, i) {
    var n = t + i >>> 0, o = (n < t ? 1 : 0) + e + r;
    return o >>> 0;
}
Q.sum64_hi = Es;
function Ss(e, t, r, i) {
    var n = t + i;
    return n >>> 0;
}
Q.sum64_lo = Ss;
function Ns(e, t, r, i, n, o, h, p) {
    var b = 0, m = t;
    m = m + i >>> 0, b += m < t ? 1 : 0, m = m + o >>> 0, b += m < o ? 1 : 0, m = m + p >>> 0, b += m < p ? 1 : 0;
    var w = e + r + n + h + b;
    return w >>> 0;
}
Q.sum64_4_hi = Ns;
function Is(e, t, r, i, n, o, h, p) {
    var b = t + i + o + p;
    return b >>> 0;
}
Q.sum64_4_lo = Is;
function _s(e, t, r, i, n, o, h, p, b, m) {
    var w = 0, y = t;
    y = y + i >>> 0, w += y < t ? 1 : 0, y = y + o >>> 0, w += y < o ? 1 : 0, y = y + p >>> 0, w += y < p ? 1 : 0, y = y + m >>> 0, w += y < m ? 1 : 0;
    var S = e + r + n + h + b + w;
    return S >>> 0;
}
Q.sum64_5_hi = _s;
function Bs(e, t, r, i, n, o, h, p, b, m) {
    var w = t + i + o + p + m;
    return w >>> 0;
}
Q.sum64_5_lo = Bs;
function Cs(e, t, r) {
    var i = t << 32 - r | e >>> r;
    return i >>> 0;
}
Q.rotr64_hi = Cs;
function Rs(e, t, r) {
    var i = e << 32 - r | t >>> r;
    return i >>> 0;
}
Q.rotr64_lo = Rs;
function Os(e, t, r) {
    return e >>> r;
}
Q.shr64_hi = Os;
function Ps(e, t, r) {
    var i = e << 32 - r | t >>> r;
    return i >>> 0;
}
Q.shr64_lo = Ps;
var fr = {}, lf = Q, Ds = yr;
function Fr() {
    this.pending = null, this.pendingTotal = 0, this.blockSize = this.constructor.blockSize, this.outSize = this.constructor.outSize, this.hmacStrength = this.constructor.hmacStrength, this.padLength = this.constructor.padLength / 8, this.endian = "big", this._delta8 = this.blockSize / 8, this._delta32 = this.blockSize / 32;
}
fr.BlockHash = Fr, Fr.prototype.update = function(t, r) {
    if (t = lf.toArray(t, r), this.pending ? this.pending = this.pending.concat(t) : this.pending = t, this.pendingTotal += t.length, this.pending.length >= this._delta8) {
        t = this.pending;
        var i = t.length % this._delta8;
        this.pending = t.slice(t.length - i, t.length), this.pending.length === 0 && (this.pending = null), t = lf.join32(t, 0, t.length - i, this.endian);
        for(var n = 0; n < t.length; n += this._delta32)this._update(t, n, n + this._delta32);
    }
    return this;
}, Fr.prototype.digest = function(t) {
    return this.update(this._pad()), Ds(this.pending === null), this._digest(t);
}, Fr.prototype._pad = function() {
    var t = this.pendingTotal, r = this._delta8, i = r - (t + this.padLength) % r, n = new Array(i + this.padLength);
    n[0] = 128;
    for(var o = 1; o < i; o++)n[o] = 0;
    if (t <<= 3, this.endian === "big") {
        for(var h = 8; h < this.padLength; h++)n[o++] = 0;
        n[o++] = 0, n[o++] = 0, n[o++] = 0, n[o++] = 0, n[o++] = t >>> 24 & 255, n[o++] = t >>> 16 & 255, n[o++] = t >>> 8 & 255, n[o++] = t & 255;
    } else for(n[o++] = t & 255, n[o++] = t >>> 8 & 255, n[o++] = t >>> 16 & 255, n[o++] = t >>> 24 & 255, n[o++] = 0, n[o++] = 0, n[o++] = 0, n[o++] = 0, h = 8; h < this.padLength; h++)n[o++] = 0;
    return n;
};
var or = {}, ae = {}, Fs = Q, ue = Fs.rotr32;
function Ts(e, t, r, i) {
    if (e === 0) return df(t, r, i);
    if (e === 1 || e === 3) return vf(t, r, i);
    if (e === 2) return pf(t, r, i);
}
ae.ft_1 = Ts;
function df(e, t, r) {
    return e & t ^ ~e & r;
}
ae.ch32 = df;
function pf(e, t, r) {
    return e & t ^ e & r ^ t & r;
}
ae.maj32 = pf;
function vf(e, t, r) {
    return e ^ t ^ r;
}
ae.p32 = vf;
function Us(e) {
    return ue(e, 2) ^ ue(e, 13) ^ ue(e, 22);
}
ae.s0_256 = Us;
function ks(e) {
    return ue(e, 6) ^ ue(e, 11) ^ ue(e, 25);
}
ae.s1_256 = ks;
function qs(e) {
    return ue(e, 7) ^ ue(e, 18) ^ e >>> 3;
}
ae.g0_256 = qs;
function Ks(e) {
    return ue(e, 17) ^ ue(e, 19) ^ e >>> 10;
}
ae.g1_256 = Ks;
var sr = Q, Hs = fr, zs = ae, _i = sr.rotl32, wr = sr.sum32, Ls = sr.sum32_5, js = zs.ft_1, mf = Hs.BlockHash, Qs = [
    1518500249,
    1859775393,
    2400959708,
    3395469782
];
function he() {
    if (!(this instanceof he)) return new he;
    mf.call(this), this.h = [
        1732584193,
        4023233417,
        2562383102,
        271733878,
        3285377520
    ], this.W = new Array(80);
}
sr.inherits(he, mf);
var Js = he;
he.blockSize = 512, he.outSize = 160, he.hmacStrength = 80, he.padLength = 64, he.prototype._update = function(t, r) {
    for(var i = this.W, n = 0; n < 16; n++)i[n] = t[r + n];
    for(; n < i.length; n++)i[n] = _i(i[n - 3] ^ i[n - 8] ^ i[n - 14] ^ i[n - 16], 1);
    var o = this.h[0], h = this.h[1], p = this.h[2], b = this.h[3], m = this.h[4];
    for(n = 0; n < i.length; n++){
        var w = ~~(n / 20), y = Ls(_i(o, 5), js(w, h, p, b), m, i[n], Qs[w]);
        m = b, b = p, p = _i(h, 30), h = o, o = y;
    }
    this.h[0] = wr(this.h[0], o), this.h[1] = wr(this.h[1], h), this.h[2] = wr(this.h[2], p), this.h[3] = wr(this.h[3], b), this.h[4] = wr(this.h[4], m);
}, he.prototype._digest = function(t) {
    return t === "hex" ? sr.toHex32(this.h, "big") : sr.split32(this.h, "big");
};
var ar = Q, Gs = fr, ur = ae, Ys = yr, ie = ar.sum32, Vs = ar.sum32_4, Ws = ar.sum32_5, Xs = ur.ch32, Zs = ur.maj32, $s = ur.s0_256, ta = ur.s1_256, ea = ur.g0_256, ra = ur.g1_256, gf = Gs.BlockHash, ia = [
    1116352408,
    1899447441,
    3049323471,
    3921009573,
    961987163,
    1508970993,
    2453635748,
    2870763221,
    3624381080,
    310598401,
    607225278,
    1426881987,
    1925078388,
    2162078206,
    2614888103,
    3248222580,
    3835390401,
    4022224774,
    264347078,
    604807628,
    770255983,
    1249150122,
    1555081692,
    1996064986,
    2554220882,
    2821834349,
    2952996808,
    3210313671,
    3336571891,
    3584528711,
    113926993,
    338241895,
    666307205,
    773529912,
    1294757372,
    1396182291,
    1695183700,
    1986661051,
    2177026350,
    2456956037,
    2730485921,
    2820302411,
    3259730800,
    3345764771,
    3516065817,
    3600352804,
    4094571909,
    275423344,
    430227734,
    506948616,
    659060556,
    883997877,
    958139571,
    1322822218,
    1537002063,
    1747873779,
    1955562222,
    2024104815,
    2227730452,
    2361852424,
    2428436474,
    2756734187,
    3204031479,
    3329325298
];
function ce() {
    if (!(this instanceof ce)) return new ce;
    gf.call(this), this.h = [
        1779033703,
        3144134277,
        1013904242,
        2773480762,
        1359893119,
        2600822924,
        528734635,
        1541459225
    ], this.k = ia, this.W = new Array(64);
}
ar.inherits(ce, gf);
var Af = ce;
ce.blockSize = 512, ce.outSize = 256, ce.hmacStrength = 192, ce.padLength = 64, ce.prototype._update = function(t, r) {
    for(var i = this.W, n = 0; n < 16; n++)i[n] = t[r + n];
    for(; n < i.length; n++)i[n] = Vs(ra(i[n - 2]), i[n - 7], ea(i[n - 15]), i[n - 16]);
    var o = this.h[0], h = this.h[1], p = this.h[2], b = this.h[3], m = this.h[4], w = this.h[5], y = this.h[6], S = this.h[7];
    for(Ys(this.k.length === i.length), n = 0; n < i.length; n++){
        var I = Ws(S, ta(m), Xs(m, w, y), this.k[n], i[n]), N = ie($s(o), Zs(o, h, p));
        S = y, y = w, w = m, m = ie(b, I), b = p, p = h, h = o, o = ie(I, N);
    }
    this.h[0] = ie(this.h[0], o), this.h[1] = ie(this.h[1], h), this.h[2] = ie(this.h[2], p), this.h[3] = ie(this.h[3], b), this.h[4] = ie(this.h[4], m), this.h[5] = ie(this.h[5], w), this.h[6] = ie(this.h[6], y), this.h[7] = ie(this.h[7], S);
}, ce.prototype._digest = function(t) {
    return t === "hex" ? ar.toHex32(this.h, "big") : ar.split32(this.h, "big");
};
var Bi = Q, bf = Af;
function ye() {
    if (!(this instanceof ye)) return new ye;
    bf.call(this), this.h = [
        3238371032,
        914150663,
        812702999,
        4144912697,
        4290775857,
        1750603025,
        1694076839,
        3204075428
    ];
}
Bi.inherits(ye, bf);
var na = ye;
ye.blockSize = 512, ye.outSize = 224, ye.hmacStrength = 192, ye.padLength = 64, ye.prototype._digest = function(t) {
    return t === "hex" ? Bi.toHex32(this.h.slice(0, 7), "big") : Bi.split32(this.h.slice(0, 7), "big");
};
var jt = Q, fa = fr, oa = yr, le = jt.rotr64_hi, de = jt.rotr64_lo, yf = jt.shr64_hi, wf = jt.shr64_lo, Be = jt.sum64, Ci = jt.sum64_hi, Ri = jt.sum64_lo, sa = jt.sum64_4_hi, aa = jt.sum64_4_lo, ua = jt.sum64_5_hi, ha = jt.sum64_5_lo, xf = fa.BlockHash, ca = [
    1116352408,
    3609767458,
    1899447441,
    602891725,
    3049323471,
    3964484399,
    3921009573,
    2173295548,
    961987163,
    4081628472,
    1508970993,
    3053834265,
    2453635748,
    2937671579,
    2870763221,
    3664609560,
    3624381080,
    2734883394,
    310598401,
    1164996542,
    607225278,
    1323610764,
    1426881987,
    3590304994,
    1925078388,
    4068182383,
    2162078206,
    991336113,
    2614888103,
    633803317,
    3248222580,
    3479774868,
    3835390401,
    2666613458,
    4022224774,
    944711139,
    264347078,
    2341262773,
    604807628,
    2007800933,
    770255983,
    1495990901,
    1249150122,
    1856431235,
    1555081692,
    3175218132,
    1996064986,
    2198950837,
    2554220882,
    3999719339,
    2821834349,
    766784016,
    2952996808,
    2566594879,
    3210313671,
    3203337956,
    3336571891,
    1034457026,
    3584528711,
    2466948901,
    113926993,
    3758326383,
    338241895,
    168717936,
    666307205,
    1188179964,
    773529912,
    1546045734,
    1294757372,
    1522805485,
    1396182291,
    2643833823,
    1695183700,
    2343527390,
    1986661051,
    1014477480,
    2177026350,
    1206759142,
    2456956037,
    344077627,
    2730485921,
    1290863460,
    2820302411,
    3158454273,
    3259730800,
    3505952657,
    3345764771,
    106217008,
    3516065817,
    3606008344,
    3600352804,
    1432725776,
    4094571909,
    1467031594,
    275423344,
    851169720,
    430227734,
    3100823752,
    506948616,
    1363258195,
    659060556,
    3750685593,
    883997877,
    3785050280,
    958139571,
    3318307427,
    1322822218,
    3812723403,
    1537002063,
    2003034995,
    1747873779,
    3602036899,
    1955562222,
    1575990012,
    2024104815,
    1125592928,
    2227730452,
    2716904306,
    2361852424,
    442776044,
    2428436474,
    593698344,
    2756734187,
    3733110249,
    3204031479,
    2999351573,
    3329325298,
    3815920427,
    3391569614,
    3928383900,
    3515267271,
    566280711,
    3940187606,
    3454069534,
    4118630271,
    4000239992,
    116418474,
    1914138554,
    174292421,
    2731055270,
    289380356,
    3203993006,
    460393269,
    320620315,
    685471733,
    587496836,
    852142971,
    1086792851,
    1017036298,
    365543100,
    1126000580,
    2618297676,
    1288033470,
    3409855158,
    1501505948,
    4234509866,
    1607167915,
    987167468,
    1816402316,
    1246189591
];
function ne() {
    if (!(this instanceof ne)) return new ne;
    xf.call(this), this.h = [
        1779033703,
        4089235720,
        3144134277,
        2227873595,
        1013904242,
        4271175723,
        2773480762,
        1595750129,
        1359893119,
        2917565137,
        2600822924,
        725511199,
        528734635,
        4215389547,
        1541459225,
        327033209
    ], this.k = ca, this.W = new Array(160);
}
jt.inherits(ne, xf);
var Mf = ne;
ne.blockSize = 1024, ne.outSize = 512, ne.hmacStrength = 192, ne.padLength = 128, ne.prototype._prepareBlock = function(t, r) {
    for(var i = this.W, n = 0; n < 32; n++)i[n] = t[r + n];
    for(; n < i.length; n += 2){
        var o = xa(i[n - 4], i[n - 3]), h = Ma(i[n - 4], i[n - 3]), p = i[n - 14], b = i[n - 13], m = ya(i[n - 30], i[n - 29]), w = wa(i[n - 30], i[n - 29]), y = i[n - 32], S = i[n - 31];
        i[n] = sa(o, h, p, b, m, w, y, S), i[n + 1] = aa(o, h, p, b, m, w, y, S);
    }
}, ne.prototype._update = function(t, r) {
    this._prepareBlock(t, r);
    var i = this.W, n = this.h[0], o = this.h[1], h = this.h[2], p = this.h[3], b = this.h[4], m = this.h[5], w = this.h[6], y = this.h[7], S = this.h[8], I = this.h[9], N = this.h[10], C = this.h[11], F = this.h[12], U = this.h[13], J = this.h[14], Bt = this.h[15];
    oa(this.k.length === i.length);
    for(var G = 0; G < i.length; G += 2){
        var H = J, z = Bt, Pt = Aa(S, I), W = ba(S, I), Rt = la(S, I, N, C, F), Yt = da(S, I, N, C, F, U), Y = this.k[G], Vt = this.k[G + 1], A = i[G], f = i[G + 1], a = ua(H, z, Pt, W, Rt, Yt, Y, Vt, A, f), c = ha(H, z, Pt, W, Rt, Yt, Y, Vt, A, f);
        H = ma(n, o), z = ga(n, o), Pt = pa(n, o, h, p, b), W = va(n, o, h, p, b, m);
        var d = Ci(H, z, Pt, W), g = Ri(H, z, Pt, W);
        J = F, Bt = U, F = N, U = C, N = S, C = I, S = Ci(w, y, a, c), I = Ri(y, y, a, c), w = b, y = m, b = h, m = p, h = n, p = o, n = Ci(a, c, d, g), o = Ri(a, c, d, g);
    }
    Be(this.h, 0, n, o), Be(this.h, 2, h, p), Be(this.h, 4, b, m), Be(this.h, 6, w, y), Be(this.h, 8, S, I), Be(this.h, 10, N, C), Be(this.h, 12, F, U), Be(this.h, 14, J, Bt);
}, ne.prototype._digest = function(t) {
    return t === "hex" ? jt.toHex32(this.h, "big") : jt.split32(this.h, "big");
};
function la(e, t, r, i, n) {
    var o = e & r ^ ~e & n;
    return o < 0 && (o += 4294967296), o;
}
function da(e, t, r, i, n, o) {
    var h = t & i ^ ~t & o;
    return h < 0 && (h += 4294967296), h;
}
function pa(e, t, r, i, n) {
    var o = e & r ^ e & n ^ r & n;
    return o < 0 && (o += 4294967296), o;
}
function va(e, t, r, i, n, o) {
    var h = t & i ^ t & o ^ i & o;
    return h < 0 && (h += 4294967296), h;
}
function ma(e, t) {
    var r = le(e, t, 28), i = le(t, e, 2), n = le(t, e, 7), o = r ^ i ^ n;
    return o < 0 && (o += 4294967296), o;
}
function ga(e, t) {
    var r = de(e, t, 28), i = de(t, e, 2), n = de(t, e, 7), o = r ^ i ^ n;
    return o < 0 && (o += 4294967296), o;
}
function Aa(e, t) {
    var r = le(e, t, 14), i = le(e, t, 18), n = le(t, e, 9), o = r ^ i ^ n;
    return o < 0 && (o += 4294967296), o;
}
function ba(e, t) {
    var r = de(e, t, 14), i = de(e, t, 18), n = de(t, e, 9), o = r ^ i ^ n;
    return o < 0 && (o += 4294967296), o;
}
function ya(e, t) {
    var r = le(e, t, 1), i = le(e, t, 8), n = yf(e, t, 7), o = r ^ i ^ n;
    return o < 0 && (o += 4294967296), o;
}
function wa(e, t) {
    var r = de(e, t, 1), i = de(e, t, 8), n = wf(e, t, 7), o = r ^ i ^ n;
    return o < 0 && (o += 4294967296), o;
}
function xa(e, t) {
    var r = le(e, t, 19), i = le(t, e, 29), n = yf(e, t, 6), o = r ^ i ^ n;
    return o < 0 && (o += 4294967296), o;
}
function Ma(e, t) {
    var r = de(e, t, 19), i = de(t, e, 29), n = wf(e, t, 6), o = r ^ i ^ n;
    return o < 0 && (o += 4294967296), o;
}
var Oi = Q, Ef = Mf;
function we() {
    if (!(this instanceof we)) return new we;
    Ef.call(this), this.h = [
        3418070365,
        3238371032,
        1654270250,
        914150663,
        2438529370,
        812702999,
        355462360,
        4144912697,
        1731405415,
        4290775857,
        2394180231,
        1750603025,
        3675008525,
        1694076839,
        1203062813,
        3204075428
    ];
}
Oi.inherits(we, Ef);
var Ea = we;
we.blockSize = 1024, we.outSize = 384, we.hmacStrength = 192, we.padLength = 128, we.prototype._digest = function(t) {
    return t === "hex" ? Oi.toHex32(this.h.slice(0, 12), "big") : Oi.split32(this.h.slice(0, 12), "big");
}, or.sha1 = Js, or.sha224 = na, or.sha256 = Af, or.sha384 = Ea, or.sha512 = Mf;
var Sf = {}, Xe = Q, Sa = fr, Tr = Xe.rotl32, Nf = Xe.sum32, xr = Xe.sum32_3, If = Xe.sum32_4, _f = Sa.BlockHash;
function pe() {
    if (!(this instanceof pe)) return new pe;
    _f.call(this), this.h = [
        1732584193,
        4023233417,
        2562383102,
        271733878,
        3285377520
    ], this.endian = "little";
}
Xe.inherits(pe, _f), Sf.ripemd160 = pe, pe.blockSize = 512, pe.outSize = 160, pe.hmacStrength = 192, pe.padLength = 64, pe.prototype._update = function(t, r) {
    for(var i = this.h[0], n = this.h[1], o = this.h[2], h = this.h[3], p = this.h[4], b = i, m = n, w = o, y = h, S = p, I = 0; I < 80; I++){
        var N = Nf(Tr(If(i, Bf(I, n, o, h), t[_a[I] + r], Na(I)), Ca[I]), p);
        i = p, p = h, h = Tr(o, 10), o = n, n = N, N = Nf(Tr(If(b, Bf(79 - I, m, w, y), t[Ba[I] + r], Ia(I)), Ra[I]), S), b = S, S = y, y = Tr(w, 10), w = m, m = N;
    }
    N = xr(this.h[1], o, y), this.h[1] = xr(this.h[2], h, S), this.h[2] = xr(this.h[3], p, b), this.h[3] = xr(this.h[4], i, m), this.h[4] = xr(this.h[0], n, w), this.h[0] = N;
}, pe.prototype._digest = function(t) {
    return t === "hex" ? Xe.toHex32(this.h, "little") : Xe.split32(this.h, "little");
};
function Bf(e, t, r, i) {
    return e <= 15 ? t ^ r ^ i : e <= 31 ? t & r | ~t & i : e <= 47 ? (t | ~r) ^ i : e <= 63 ? t & i | r & ~i : t ^ (r | ~i);
}
function Na(e) {
    return e <= 15 ? 0 : e <= 31 ? 1518500249 : e <= 47 ? 1859775393 : e <= 63 ? 2400959708 : 2840853838;
}
function Ia(e) {
    return e <= 15 ? 1352829926 : e <= 31 ? 1548603684 : e <= 47 ? 1836072691 : e <= 63 ? 2053994217 : 0;
}
var _a = [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    7,
    4,
    13,
    1,
    10,
    6,
    15,
    3,
    12,
    0,
    9,
    5,
    2,
    14,
    11,
    8,
    3,
    10,
    14,
    4,
    9,
    15,
    8,
    1,
    2,
    7,
    0,
    6,
    13,
    11,
    5,
    12,
    1,
    9,
    11,
    10,
    0,
    8,
    12,
    4,
    13,
    3,
    7,
    15,
    14,
    5,
    6,
    2,
    4,
    0,
    5,
    9,
    7,
    12,
    2,
    10,
    14,
    1,
    3,
    8,
    11,
    6,
    15,
    13
], Ba = [
    5,
    14,
    7,
    0,
    9,
    2,
    11,
    4,
    13,
    6,
    15,
    8,
    1,
    10,
    3,
    12,
    6,
    11,
    3,
    7,
    0,
    13,
    5,
    10,
    14,
    15,
    8,
    12,
    4,
    9,
    1,
    2,
    15,
    5,
    1,
    3,
    7,
    14,
    6,
    9,
    11,
    8,
    12,
    2,
    10,
    0,
    4,
    13,
    8,
    6,
    4,
    1,
    3,
    11,
    15,
    0,
    5,
    12,
    2,
    13,
    9,
    7,
    10,
    14,
    12,
    15,
    10,
    4,
    1,
    5,
    8,
    7,
    6,
    2,
    13,
    14,
    0,
    3,
    9,
    11
], Ca = [
    11,
    14,
    15,
    12,
    5,
    8,
    7,
    9,
    11,
    13,
    14,
    15,
    6,
    7,
    9,
    8,
    7,
    6,
    8,
    13,
    11,
    9,
    7,
    15,
    7,
    12,
    15,
    9,
    11,
    7,
    13,
    12,
    11,
    13,
    6,
    7,
    14,
    9,
    13,
    15,
    14,
    8,
    13,
    6,
    5,
    12,
    7,
    5,
    11,
    12,
    14,
    15,
    14,
    15,
    9,
    8,
    9,
    14,
    5,
    6,
    8,
    6,
    5,
    12,
    9,
    15,
    5,
    11,
    6,
    8,
    13,
    12,
    5,
    12,
    13,
    14,
    11,
    8,
    5,
    6
], Ra = [
    8,
    9,
    9,
    11,
    13,
    15,
    15,
    5,
    7,
    7,
    8,
    11,
    14,
    14,
    12,
    6,
    9,
    13,
    15,
    7,
    12,
    8,
    9,
    11,
    7,
    7,
    12,
    7,
    6,
    15,
    13,
    11,
    9,
    7,
    15,
    11,
    8,
    6,
    6,
    14,
    12,
    13,
    5,
    14,
    13,
    13,
    7,
    5,
    15,
    5,
    8,
    11,
    14,
    14,
    6,
    14,
    6,
    9,
    12,
    9,
    12,
    5,
    15,
    8,
    8,
    5,
    12,
    9,
    12,
    5,
    14,
    6,
    8,
    13,
    6,
    5,
    15,
    13,
    11,
    11
], Oa = Q, Pa = yr;
function hr(e, t, r) {
    if (!(this instanceof hr)) return new hr(e, t, r);
    this.Hash = e, this.blockSize = e.blockSize / 8, this.outSize = e.outSize / 8, this.inner = null, this.outer = null, this._init(Oa.toArray(t, r));
}
var Da = hr;
hr.prototype._init = function(t) {
    t.length > this.blockSize && (t = new this.Hash().update(t).digest()), Pa(t.length <= this.blockSize);
    for(var r = t.length; r < this.blockSize; r++)t.push(0);
    for(r = 0; r < t.length; r++)t[r] ^= 54;
    for(this.inner = new this.Hash().update(t), r = 0; r < t.length; r++)t[r] ^= 106;
    this.outer = new this.Hash().update(t);
}, hr.prototype.update = function(t, r) {
    return this.inner.update(t, r), this;
}, hr.prototype.digest = function(t) {
    return this.outer.update(this.inner.digest()), this.outer.digest(t);
}, function(e) {
    var t = e;
    t.utils = Q, t.common = fr, t.sha = or, t.ripemd = Sf, t.hmac = Da, t.sha1 = t.sha.sha1, t.sha256 = t.sha.sha256, t.sha224 = t.sha.sha224, t.sha384 = t.sha.sha384, t.sha512 = t.sha.sha512, t.ripemd160 = t.ripemd.ripemd160;
}(se);
function cr(e, t, r) {
    return r = {
        path: t,
        exports: {},
        require: function(i, n) {
            return Fa(i, n ?? r.path);
        }
    }, e(r, r.exports), r.exports;
}
function Fa() {
    throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");
}
var Pi = Cf;
function Cf(e, t) {
    if (!e) throw new Error(t || "Assertion failed");
}
Cf.equal = function(t, r, i) {
    if (t != r) throw new Error(i || "Assertion failed: " + t + " != " + r);
};
var fe = cr(function(e, t) {
    var r = t;
    function i(h, p) {
        if (Array.isArray(h)) return h.slice();
        if (!h) return [];
        var b = [];
        if (typeof h != "string") {
            for(var m = 0; m < h.length; m++)b[m] = h[m] | 0;
            return b;
        }
        if (p === "hex") {
            h = h.replace(/[^a-z0-9]+/ig, ""), h.length % 2 !== 0 && (h = "0" + h);
            for(var m = 0; m < h.length; m += 2)b.push(parseInt(h[m] + h[m + 1], 16));
        } else for(var m = 0; m < h.length; m++){
            var w = h.charCodeAt(m), y = w >> 8, S = w & 255;
            y ? b.push(y, S) : b.push(S);
        }
        return b;
    }
    r.toArray = i;
    function n(h) {
        return h.length === 1 ? "0" + h : h;
    }
    r.zero2 = n;
    function o(h) {
        for(var p = "", b = 0; b < h.length; b++)p += n(h[b].toString(16));
        return p;
    }
    r.toHex = o, r.encode = function(p, b) {
        return b === "hex" ? o(p) : p;
    };
}), Jt = cr(function(e, t) {
    var r = t;
    r.assert = Pi, r.toArray = fe.toArray, r.zero2 = fe.zero2, r.toHex = fe.toHex, r.encode = fe.encode;
    function i(b, m, w) {
        var y = new Array(Math.max(b.bitLength(), w) + 1);
        y.fill(0);
        for(var S = 1 << m + 1, I = b.clone(), N = 0; N < y.length; N++){
            var C, F = I.andln(S - 1);
            I.isOdd() ? (F > (S >> 1) - 1 ? C = (S >> 1) - F : C = F, I.isubn(C)) : C = 0, y[N] = C, I.iushrn(1);
        }
        return y;
    }
    r.getNAF = i;
    function n(b, m) {
        var w = [
            [],
            []
        ];
        b = b.clone(), m = m.clone();
        for(var y = 0, S = 0, I; b.cmpn(-y) > 0 || m.cmpn(-S) > 0;){
            var N = b.andln(3) + y & 3, C = m.andln(3) + S & 3;
            N === 3 && (N = -1), C === 3 && (C = -1);
            var F;
            N & 1 ? (I = b.andln(7) + y & 7, (I === 3 || I === 5) && C === 2 ? F = -N : F = N) : F = 0, w[0].push(F);
            var U;
            C & 1 ? (I = m.andln(7) + S & 7, (I === 3 || I === 5) && N === 2 ? U = -C : U = C) : U = 0, w[1].push(U), 2 * y === F + 1 && (y = 1 - y), 2 * S === U + 1 && (S = 1 - S), b.iushrn(1), m.iushrn(1);
        }
        return w;
    }
    r.getJSF = n;
    function o(b, m, w) {
        var y = "_" + m;
        b.prototype[m] = function() {
            return this[y] !== void 0 ? this[y] : this[y] = w.call(this);
        };
    }
    r.cachedProperty = o;
    function h(b) {
        return typeof b == "string" ? r.toArray(b, "hex") : b;
    }
    r.parseBytes = h;
    function p(b) {
        return new K(b, "hex", "le");
    }
    r.intFromLE = p;
}), Ur = Jt.getNAF, Ta = Jt.getJSF, kr = Jt.assert;
function Ce(e, t) {
    this.type = e, this.p = new K(t.p, 16), this.red = t.prime ? K.red(t.prime) : K.mont(this.p), this.zero = new K(0).toRed(this.red), this.one = new K(1).toRed(this.red), this.two = new K(2).toRed(this.red), this.n = t.n && new K(t.n, 16), this.g = t.g && this.pointFromJSON(t.g, t.gRed), this._wnafT1 = new Array(4), this._wnafT2 = new Array(4), this._wnafT3 = new Array(4), this._wnafT4 = new Array(4), this._bitLength = this.n ? this.n.bitLength() : 0;
    var r = this.n && this.p.div(this.n);
    !r || r.cmpn(100) > 0 ? this.redN = null : (this._maxwellTrick = !0, this.redN = this.n.toRed(this.red));
}
var Ze = Ce;
Ce.prototype.point = function() {
    throw new Error("Not implemented");
}, Ce.prototype.validate = function() {
    throw new Error("Not implemented");
}, Ce.prototype._fixedNafMul = function(t, r) {
    kr(t.precomputed);
    var i = t._getDoubles(), n = Ur(r, 1, this._bitLength), o = (1 << i.step + 1) - (i.step % 2 === 0 ? 2 : 1);
    o /= 3;
    var h = [], p, b;
    for(p = 0; p < n.length; p += i.step){
        b = 0;
        for(var m = p + i.step - 1; m >= p; m--)b = (b << 1) + n[m];
        h.push(b);
    }
    for(var w = this.jpoint(null, null, null), y = this.jpoint(null, null, null), S = o; S > 0; S--){
        for(p = 0; p < h.length; p++)b = h[p], b === S ? y = y.mixedAdd(i.points[p]) : b === -S && (y = y.mixedAdd(i.points[p].neg()));
        w = w.add(y);
    }
    return w.toP();
}, Ce.prototype._wnafMul = function(t, r) {
    var i = 4, n = t._getNAFPoints(i);
    i = n.wnd;
    for(var o = n.points, h = Ur(r, i, this._bitLength), p = this.jpoint(null, null, null), b = h.length - 1; b >= 0; b--){
        for(var m = 0; b >= 0 && h[b] === 0; b--)m++;
        if (b >= 0 && m++, p = p.dblp(m), b < 0) break;
        var w = h[b];
        kr(w !== 0), t.type === "affine" ? w > 0 ? p = p.mixedAdd(o[w - 1 >> 1]) : p = p.mixedAdd(o[-w - 1 >> 1].neg()) : w > 0 ? p = p.add(o[w - 1 >> 1]) : p = p.add(o[-w - 1 >> 1].neg());
    }
    return t.type === "affine" ? p.toP() : p;
}, Ce.prototype._wnafMulAdd = function(t, r, i, n, o) {
    var h = this._wnafT1, p = this._wnafT2, b = this._wnafT3, m = 0, w, y, S;
    for(w = 0; w < n; w++){
        S = r[w];
        var I = S._getNAFPoints(t);
        h[w] = I.wnd, p[w] = I.points;
    }
    for(w = n - 1; w >= 1; w -= 2){
        var N = w - 1, C = w;
        if (h[N] !== 1 || h[C] !== 1) {
            b[N] = Ur(i[N], h[N], this._bitLength), b[C] = Ur(i[C], h[C], this._bitLength), m = Math.max(b[N].length, m), m = Math.max(b[C].length, m);
            continue;
        }
        var F = [
            r[N],
            null,
            null,
            r[C]
        ];
        r[N].y.cmp(r[C].y) === 0 ? (F[1] = r[N].add(r[C]), F[2] = r[N].toJ().mixedAdd(r[C].neg())) : r[N].y.cmp(r[C].y.redNeg()) === 0 ? (F[1] = r[N].toJ().mixedAdd(r[C]), F[2] = r[N].add(r[C].neg())) : (F[1] = r[N].toJ().mixedAdd(r[C]), F[2] = r[N].toJ().mixedAdd(r[C].neg()));
        var U = [
            -3,
            -1,
            -5,
            -7,
            0,
            7,
            5,
            1,
            3
        ], J = Ta(i[N], i[C]);
        for(m = Math.max(J[0].length, m), b[N] = new Array(m), b[C] = new Array(m), y = 0; y < m; y++){
            var Bt = J[0][y] | 0, G = J[1][y] | 0;
            b[N][y] = U[(Bt + 1) * 3 + (G + 1)], b[C][y] = 0, p[N] = F;
        }
    }
    var H = this.jpoint(null, null, null), z = this._wnafT4;
    for(w = m; w >= 0; w--){
        for(var Pt = 0; w >= 0;){
            var W = !0;
            for(y = 0; y < n; y++)z[y] = b[y][w] | 0, z[y] !== 0 && (W = !1);
            if (!W) break;
            Pt++, w--;
        }
        if (w >= 0 && Pt++, H = H.dblp(Pt), w < 0) break;
        for(y = 0; y < n; y++){
            var Rt = z[y];
            Rt !== 0 && (Rt > 0 ? S = p[y][Rt - 1 >> 1] : Rt < 0 && (S = p[y][-Rt - 1 >> 1].neg()), S.type === "affine" ? H = H.mixedAdd(S) : H = H.add(S));
        }
    }
    for(w = 0; w < n; w++)p[w] = null;
    return o ? H : H.toP();
};
function Xt(e, t) {
    this.curve = e, this.type = t, this.precomputed = null;
}
Ce.BasePoint = Xt, Xt.prototype.eq = function() {
    throw new Error("Not implemented");
}, Xt.prototype.validate = function() {
    return this.curve.validate(this);
}, Ce.prototype.decodePoint = function(t, r) {
    t = Jt.toArray(t, r);
    var i = this.p.byteLength();
    if ((t[0] === 4 || t[0] === 6 || t[0] === 7) && t.length - 1 === 2 * i) {
        t[0] === 6 ? kr(t[t.length - 1] % 2 === 0) : t[0] === 7 && kr(t[t.length - 1] % 2 === 1);
        var n = this.point(t.slice(1, 1 + i), t.slice(1 + i, 1 + 2 * i));
        return n;
    } else if ((t[0] === 2 || t[0] === 3) && t.length - 1 === i) return this.pointFromX(t.slice(1, 1 + i), t[0] === 3);
    throw new Error("Unknown point format");
}, Xt.prototype.encodeCompressed = function(t) {
    return this.encode(t, !0);
}, Xt.prototype._encode = function(t) {
    var r = this.curve.p.byteLength(), i = this.getX().toArray("be", r);
    return t ? [
        this.getY().isEven() ? 2 : 3
    ].concat(i) : [
        4
    ].concat(i, this.getY().toArray("be", r));
}, Xt.prototype.encode = function(t, r) {
    return Jt.encode(this._encode(r), t);
}, Xt.prototype.precompute = function(t) {
    if (this.precomputed) return this;
    var r = {
        doubles: null,
        naf: null,
        beta: null
    };
    return r.naf = this._getNAFPoints(8), r.doubles = this._getDoubles(4, t), r.beta = this._getBeta(), this.precomputed = r, this;
}, Xt.prototype._hasDoubles = function(t) {
    if (!this.precomputed) return !1;
    var r = this.precomputed.doubles;
    return r ? r.points.length >= Math.ceil((t.bitLength() + 1) / r.step) : !1;
}, Xt.prototype._getDoubles = function(t, r) {
    if (this.precomputed && this.precomputed.doubles) return this.precomputed.doubles;
    for(var i = [
        this
    ], n = this, o = 0; o < r; o += t){
        for(var h = 0; h < t; h++)n = n.dbl();
        i.push(n);
    }
    return {
        step: t,
        points: i
    };
}, Xt.prototype._getNAFPoints = function(t) {
    if (this.precomputed && this.precomputed.naf) return this.precomputed.naf;
    for(var r = [
        this
    ], i = (1 << t) - 1, n = i === 1 ? null : this.dbl(), o = 1; o < i; o++)r[o] = r[o - 1].add(n);
    return {
        wnd: t,
        points: r
    };
}, Xt.prototype._getBeta = function() {
    return null;
}, Xt.prototype.dblp = function(t) {
    for(var r = this, i = 0; i < t; i++)r = r.dbl();
    return r;
};
var Di = cr(function(e) {
    typeof Object.create == "function" ? e.exports = function(r, i) {
        i && (r.super_ = i, r.prototype = Object.create(i.prototype, {
            constructor: {
                value: r,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }));
    } : e.exports = function(r, i) {
        if (i) {
            r.super_ = i;
            var n = function() {};
            n.prototype = i.prototype, r.prototype = new n, r.prototype.constructor = r;
        }
    };
}), Ua = Jt.assert;
function Zt(e) {
    Ze.call(this, "short", e), this.a = new K(e.a, 16).toRed(this.red), this.b = new K(e.b, 16).toRed(this.red), this.tinv = this.two.redInvm(), this.zeroA = this.a.fromRed().cmpn(0) === 0, this.threeA = this.a.fromRed().sub(this.p).cmpn(-3) === 0, this.endo = this._getEndomorphism(e), this._endoWnafT1 = new Array(4), this._endoWnafT2 = new Array(4);
}
Di(Zt, Ze);
var ka = Zt;
Zt.prototype._getEndomorphism = function(t) {
    if (!(!this.zeroA || !this.g || !this.n || this.p.modn(3) !== 1)) {
        var r, i;
        if (t.beta) r = new K(t.beta, 16).toRed(this.red);
        else {
            var n = this._getEndoRoots(this.p);
            r = n[0].cmp(n[1]) < 0 ? n[0] : n[1], r = r.toRed(this.red);
        }
        if (t.lambda) i = new K(t.lambda, 16);
        else {
            var o = this._getEndoRoots(this.n);
            this.g.mul(o[0]).x.cmp(this.g.x.redMul(r)) === 0 ? i = o[0] : (i = o[1], Ua(this.g.mul(i).x.cmp(this.g.x.redMul(r)) === 0));
        }
        var h;
        return t.basis ? h = t.basis.map(function(p) {
            return {
                a: new K(p.a, 16),
                b: new K(p.b, 16)
            };
        }) : h = this._getEndoBasis(i), {
            beta: r,
            lambda: i,
            basis: h
        };
    }
}, Zt.prototype._getEndoRoots = function(t) {
    var r = t === this.p ? this.red : K.mont(t), i = new K(2).toRed(r).redInvm(), n = i.redNeg(), o = new K(3).toRed(r).redNeg().redSqrt().redMul(i), h = n.redAdd(o).fromRed(), p = n.redSub(o).fromRed();
    return [
        h,
        p
    ];
}, Zt.prototype._getEndoBasis = function(t) {
    for(var r = this.n.ushrn(Math.floor(this.n.bitLength() / 2)), i = t, n = this.n.clone(), o = new K(1), h = new K(0), p = new K(0), b = new K(1), m, w, y, S, I, N, C, F = 0, U, J; i.cmpn(0) !== 0;){
        var Bt = n.div(i);
        U = n.sub(Bt.mul(i)), J = p.sub(Bt.mul(o));
        var G = b.sub(Bt.mul(h));
        if (!y && U.cmp(r) < 0) m = C.neg(), w = o, y = U.neg(), S = J;
        else if (y && ++F === 2) break;
        C = U, n = i, i = U, p = o, o = J, b = h, h = G;
    }
    I = U.neg(), N = J;
    var H = y.sqr().add(S.sqr()), z = I.sqr().add(N.sqr());
    return z.cmp(H) >= 0 && (I = m, N = w), y.negative && (y = y.neg(), S = S.neg()), I.negative && (I = I.neg(), N = N.neg()), [
        {
            a: y,
            b: S
        },
        {
            a: I,
            b: N
        }
    ];
}, Zt.prototype._endoSplit = function(t) {
    var r = this.endo.basis, i = r[0], n = r[1], o = n.b.mul(t).divRound(this.n), h = i.b.neg().mul(t).divRound(this.n), p = o.mul(i.a), b = h.mul(n.a), m = o.mul(i.b), w = h.mul(n.b), y = t.sub(p).sub(b), S = m.add(w).neg();
    return {
        k1: y,
        k2: S
    };
}, Zt.prototype.pointFromX = function(t, r) {
    t = new K(t, 16), t.red || (t = t.toRed(this.red));
    var i = t.redSqr().redMul(t).redIAdd(t.redMul(this.a)).redIAdd(this.b), n = i.redSqrt();
    if (n.redSqr().redSub(i).cmp(this.zero) !== 0) throw new Error("invalid point");
    var o = n.fromRed().isOdd();
    return (r && !o || !r && o) && (n = n.redNeg()), this.point(t, n);
}, Zt.prototype.validate = function(t) {
    if (t.inf) return !0;
    var r = t.x, i = t.y, n = this.a.redMul(r), o = r.redSqr().redMul(r).redIAdd(n).redIAdd(this.b);
    return i.redSqr().redISub(o).cmpn(0) === 0;
}, Zt.prototype._endoWnafMulAdd = function(t, r, i) {
    for(var n = this._endoWnafT1, o = this._endoWnafT2, h = 0; h < t.length; h++){
        var p = this._endoSplit(r[h]), b = t[h], m = b._getBeta();
        p.k1.negative && (p.k1.ineg(), b = b.neg(!0)), p.k2.negative && (p.k2.ineg(), m = m.neg(!0)), n[h * 2] = b, n[h * 2 + 1] = m, o[h * 2] = p.k1, o[h * 2 + 1] = p.k2;
    }
    for(var w = this._wnafMulAdd(1, n, o, h * 2, i), y = 0; y < h * 2; y++)n[y] = null, o[y] = null;
    return w;
};
function Ft(e, t, r, i) {
    Ze.BasePoint.call(this, e, "affine"), t === null && r === null ? (this.x = null, this.y = null, this.inf = !0) : (this.x = new K(t, 16), this.y = new K(r, 16), i && (this.x.forceRed(this.curve.red), this.y.forceRed(this.curve.red)), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), this.inf = !1);
}
Di(Ft, Ze.BasePoint), Zt.prototype.point = function(t, r, i) {
    return new Ft(this, t, r, i);
}, Zt.prototype.pointFromJSON = function(t, r) {
    return Ft.fromJSON(this, t, r);
}, Ft.prototype._getBeta = function() {
    if (this.curve.endo) {
        var t = this.precomputed;
        if (t && t.beta) return t.beta;
        var r = this.curve.point(this.x.redMul(this.curve.endo.beta), this.y);
        if (t) {
            var i = this.curve, n = function(o) {
                return i.point(o.x.redMul(i.endo.beta), o.y);
            };
            t.beta = r, r.precomputed = {
                beta: null,
                naf: t.naf && {
                    wnd: t.naf.wnd,
                    points: t.naf.points.map(n)
                },
                doubles: t.doubles && {
                    step: t.doubles.step,
                    points: t.doubles.points.map(n)
                }
            };
        }
        return r;
    }
}, Ft.prototype.toJSON = function() {
    return this.precomputed ? [
        this.x,
        this.y,
        this.precomputed && {
            doubles: this.precomputed.doubles && {
                step: this.precomputed.doubles.step,
                points: this.precomputed.doubles.points.slice(1)
            },
            naf: this.precomputed.naf && {
                wnd: this.precomputed.naf.wnd,
                points: this.precomputed.naf.points.slice(1)
            }
        }
    ] : [
        this.x,
        this.y
    ];
}, Ft.fromJSON = function(t, r, i) {
    typeof r == "string" && (r = JSON.parse(r));
    var n = t.point(r[0], r[1], i);
    if (!r[2]) return n;
    function o(p) {
        return t.point(p[0], p[1], i);
    }
    var h = r[2];
    return n.precomputed = {
        beta: null,
        doubles: h.doubles && {
            step: h.doubles.step,
            points: [
                n
            ].concat(h.doubles.points.map(o))
        },
        naf: h.naf && {
            wnd: h.naf.wnd,
            points: [
                n
            ].concat(h.naf.points.map(o))
        }
    }, n;
}, Ft.prototype.inspect = function() {
    return this.isInfinity() ? "<EC Point Infinity>" : "<EC Point x: " + this.x.fromRed().toString(16, 2) + " y: " + this.y.fromRed().toString(16, 2) + ">";
}, Ft.prototype.isInfinity = function() {
    return this.inf;
}, Ft.prototype.add = function(t) {
    if (this.inf) return t;
    if (t.inf) return this;
    if (this.eq(t)) return this.dbl();
    if (this.neg().eq(t)) return this.curve.point(null, null);
    if (this.x.cmp(t.x) === 0) return this.curve.point(null, null);
    var r = this.y.redSub(t.y);
    r.cmpn(0) !== 0 && (r = r.redMul(this.x.redSub(t.x).redInvm()));
    var i = r.redSqr().redISub(this.x).redISub(t.x), n = r.redMul(this.x.redSub(i)).redISub(this.y);
    return this.curve.point(i, n);
}, Ft.prototype.dbl = function() {
    if (this.inf) return this;
    var t = this.y.redAdd(this.y);
    if (t.cmpn(0) === 0) return this.curve.point(null, null);
    var r = this.curve.a, i = this.x.redSqr(), n = t.redInvm(), o = i.redAdd(i).redIAdd(i).redIAdd(r).redMul(n), h = o.redSqr().redISub(this.x.redAdd(this.x)), p = o.redMul(this.x.redSub(h)).redISub(this.y);
    return this.curve.point(h, p);
}, Ft.prototype.getX = function() {
    return this.x.fromRed();
}, Ft.prototype.getY = function() {
    return this.y.fromRed();
}, Ft.prototype.mul = function(t) {
    return t = new K(t, 16), this.isInfinity() ? this : this._hasDoubles(t) ? this.curve._fixedNafMul(this, t) : this.curve.endo ? this.curve._endoWnafMulAdd([
        this
    ], [
        t
    ]) : this.curve._wnafMul(this, t);
}, Ft.prototype.mulAdd = function(t, r, i) {
    var n = [
        this,
        r
    ], o = [
        t,
        i
    ];
    return this.curve.endo ? this.curve._endoWnafMulAdd(n, o) : this.curve._wnafMulAdd(1, n, o, 2);
}, Ft.prototype.jmulAdd = function(t, r, i) {
    var n = [
        this,
        r
    ], o = [
        t,
        i
    ];
    return this.curve.endo ? this.curve._endoWnafMulAdd(n, o, !0) : this.curve._wnafMulAdd(1, n, o, 2, !0);
}, Ft.prototype.eq = function(t) {
    return this === t || this.inf === t.inf && (this.inf || this.x.cmp(t.x) === 0 && this.y.cmp(t.y) === 0);
}, Ft.prototype.neg = function(t) {
    if (this.inf) return this;
    var r = this.curve.point(this.x, this.y.redNeg());
    if (t && this.precomputed) {
        var i = this.precomputed, n = function(o) {
            return o.neg();
        };
        r.precomputed = {
            naf: i.naf && {
                wnd: i.naf.wnd,
                points: i.naf.points.map(n)
            },
            doubles: i.doubles && {
                step: i.doubles.step,
                points: i.doubles.points.map(n)
            }
        };
    }
    return r;
}, Ft.prototype.toJ = function() {
    if (this.inf) return this.curve.jpoint(null, null, null);
    var t = this.curve.jpoint(this.x, this.y, this.curve.one);
    return t;
};
function Tt(e, t, r, i) {
    Ze.BasePoint.call(this, e, "jacobian"), t === null && r === null && i === null ? (this.x = this.curve.one, this.y = this.curve.one, this.z = new K(0)) : (this.x = new K(t, 16), this.y = new K(r, 16), this.z = new K(i, 16)), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), this.z.red || (this.z = this.z.toRed(this.curve.red)), this.zOne = this.z === this.curve.one;
}
Di(Tt, Ze.BasePoint), Zt.prototype.jpoint = function(t, r, i) {
    return new Tt(this, t, r, i);
}, Tt.prototype.toP = function() {
    if (this.isInfinity()) return this.curve.point(null, null);
    var t = this.z.redInvm(), r = t.redSqr(), i = this.x.redMul(r), n = this.y.redMul(r).redMul(t);
    return this.curve.point(i, n);
}, Tt.prototype.neg = function() {
    return this.curve.jpoint(this.x, this.y.redNeg(), this.z);
}, Tt.prototype.add = function(t) {
    if (this.isInfinity()) return t;
    if (t.isInfinity()) return this;
    var r = t.z.redSqr(), i = this.z.redSqr(), n = this.x.redMul(r), o = t.x.redMul(i), h = this.y.redMul(r.redMul(t.z)), p = t.y.redMul(i.redMul(this.z)), b = n.redSub(o), m = h.redSub(p);
    if (b.cmpn(0) === 0) return m.cmpn(0) !== 0 ? this.curve.jpoint(null, null, null) : this.dbl();
    var w = b.redSqr(), y = w.redMul(b), S = n.redMul(w), I = m.redSqr().redIAdd(y).redISub(S).redISub(S), N = m.redMul(S.redISub(I)).redISub(h.redMul(y)), C = this.z.redMul(t.z).redMul(b);
    return this.curve.jpoint(I, N, C);
}, Tt.prototype.mixedAdd = function(t) {
    if (this.isInfinity()) return t.toJ();
    if (t.isInfinity()) return this;
    var r = this.z.redSqr(), i = this.x, n = t.x.redMul(r), o = this.y, h = t.y.redMul(r).redMul(this.z), p = i.redSub(n), b = o.redSub(h);
    if (p.cmpn(0) === 0) return b.cmpn(0) !== 0 ? this.curve.jpoint(null, null, null) : this.dbl();
    var m = p.redSqr(), w = m.redMul(p), y = i.redMul(m), S = b.redSqr().redIAdd(w).redISub(y).redISub(y), I = b.redMul(y.redISub(S)).redISub(o.redMul(w)), N = this.z.redMul(p);
    return this.curve.jpoint(S, I, N);
}, Tt.prototype.dblp = function(t) {
    if (t === 0) return this;
    if (this.isInfinity()) return this;
    if (!t) return this.dbl();
    var r;
    if (this.curve.zeroA || this.curve.threeA) {
        var i = this;
        for(r = 0; r < t; r++)i = i.dbl();
        return i;
    }
    var n = this.curve.a, o = this.curve.tinv, h = this.x, p = this.y, b = this.z, m = b.redSqr().redSqr(), w = p.redAdd(p);
    for(r = 0; r < t; r++){
        var y = h.redSqr(), S = w.redSqr(), I = S.redSqr(), N = y.redAdd(y).redIAdd(y).redIAdd(n.redMul(m)), C = h.redMul(S), F = N.redSqr().redISub(C.redAdd(C)), U = C.redISub(F), J = N.redMul(U);
        J = J.redIAdd(J).redISub(I);
        var Bt = w.redMul(b);
        r + 1 < t && (m = m.redMul(I)), h = F, b = Bt, w = J;
    }
    return this.curve.jpoint(h, w.redMul(o), b);
}, Tt.prototype.dbl = function() {
    return this.isInfinity() ? this : this.curve.zeroA ? this._zeroDbl() : this.curve.threeA ? this._threeDbl() : this._dbl();
}, Tt.prototype._zeroDbl = function() {
    var t, r, i;
    if (this.zOne) {
        var n = this.x.redSqr(), o = this.y.redSqr(), h = o.redSqr(), p = this.x.redAdd(o).redSqr().redISub(n).redISub(h);
        p = p.redIAdd(p);
        var b = n.redAdd(n).redIAdd(n), m = b.redSqr().redISub(p).redISub(p), w = h.redIAdd(h);
        w = w.redIAdd(w), w = w.redIAdd(w), t = m, r = b.redMul(p.redISub(m)).redISub(w), i = this.y.redAdd(this.y);
    } else {
        var y = this.x.redSqr(), S = this.y.redSqr(), I = S.redSqr(), N = this.x.redAdd(S).redSqr().redISub(y).redISub(I);
        N = N.redIAdd(N);
        var C = y.redAdd(y).redIAdd(y), F = C.redSqr(), U = I.redIAdd(I);
        U = U.redIAdd(U), U = U.redIAdd(U), t = F.redISub(N).redISub(N), r = C.redMul(N.redISub(t)).redISub(U), i = this.y.redMul(this.z), i = i.redIAdd(i);
    }
    return this.curve.jpoint(t, r, i);
}, Tt.prototype._threeDbl = function() {
    var t, r, i;
    if (this.zOne) {
        var n = this.x.redSqr(), o = this.y.redSqr(), h = o.redSqr(), p = this.x.redAdd(o).redSqr().redISub(n).redISub(h);
        p = p.redIAdd(p);
        var b = n.redAdd(n).redIAdd(n).redIAdd(this.curve.a), m = b.redSqr().redISub(p).redISub(p);
        t = m;
        var w = h.redIAdd(h);
        w = w.redIAdd(w), w = w.redIAdd(w), r = b.redMul(p.redISub(m)).redISub(w), i = this.y.redAdd(this.y);
    } else {
        var y = this.z.redSqr(), S = this.y.redSqr(), I = this.x.redMul(S), N = this.x.redSub(y).redMul(this.x.redAdd(y));
        N = N.redAdd(N).redIAdd(N);
        var C = I.redIAdd(I);
        C = C.redIAdd(C);
        var F = C.redAdd(C);
        t = N.redSqr().redISub(F), i = this.y.redAdd(this.z).redSqr().redISub(S).redISub(y);
        var U = S.redSqr();
        U = U.redIAdd(U), U = U.redIAdd(U), U = U.redIAdd(U), r = N.redMul(C.redISub(t)).redISub(U);
    }
    return this.curve.jpoint(t, r, i);
}, Tt.prototype._dbl = function() {
    var t = this.curve.a, r = this.x, i = this.y, n = this.z, o = n.redSqr().redSqr(), h = r.redSqr(), p = i.redSqr(), b = h.redAdd(h).redIAdd(h).redIAdd(t.redMul(o)), m = r.redAdd(r);
    m = m.redIAdd(m);
    var w = m.redMul(p), y = b.redSqr().redISub(w.redAdd(w)), S = w.redISub(y), I = p.redSqr();
    I = I.redIAdd(I), I = I.redIAdd(I), I = I.redIAdd(I);
    var N = b.redMul(S).redISub(I), C = i.redAdd(i).redMul(n);
    return this.curve.jpoint(y, N, C);
}, Tt.prototype.trpl = function() {
    if (!this.curve.zeroA) return this.dbl().add(this);
    var t = this.x.redSqr(), r = this.y.redSqr(), i = this.z.redSqr(), n = r.redSqr(), o = t.redAdd(t).redIAdd(t), h = o.redSqr(), p = this.x.redAdd(r).redSqr().redISub(t).redISub(n);
    p = p.redIAdd(p), p = p.redAdd(p).redIAdd(p), p = p.redISub(h);
    var b = p.redSqr(), m = n.redIAdd(n);
    m = m.redIAdd(m), m = m.redIAdd(m), m = m.redIAdd(m);
    var w = o.redIAdd(p).redSqr().redISub(h).redISub(b).redISub(m), y = r.redMul(w);
    y = y.redIAdd(y), y = y.redIAdd(y);
    var S = this.x.redMul(b).redISub(y);
    S = S.redIAdd(S), S = S.redIAdd(S);
    var I = this.y.redMul(w.redMul(m.redISub(w)).redISub(p.redMul(b)));
    I = I.redIAdd(I), I = I.redIAdd(I), I = I.redIAdd(I);
    var N = this.z.redAdd(p).redSqr().redISub(i).redISub(b);
    return this.curve.jpoint(S, I, N);
}, Tt.prototype.mul = function(t, r) {
    return t = new K(t, r), this.curve._wnafMul(this, t);
}, Tt.prototype.eq = function(t) {
    if (t.type === "affine") return this.eq(t.toJ());
    if (this === t) return !0;
    var r = this.z.redSqr(), i = t.z.redSqr();
    if (this.x.redMul(i).redISub(t.x.redMul(r)).cmpn(0) !== 0) return !1;
    var n = r.redMul(this.z), o = i.redMul(t.z);
    return this.y.redMul(o).redISub(t.y.redMul(n)).cmpn(0) === 0;
}, Tt.prototype.eqXToP = function(t) {
    var r = this.z.redSqr(), i = t.toRed(this.curve.red).redMul(r);
    if (this.x.cmp(i) === 0) return !0;
    for(var n = t.clone(), o = this.curve.redN.redMul(r);;){
        if (n.iadd(this.curve.n), n.cmp(this.curve.p) >= 0) return !1;
        if (i.redIAdd(o), this.x.cmp(i) === 0) return !0;
    }
}, Tt.prototype.inspect = function() {
    return this.isInfinity() ? "<EC JPoint Infinity>" : "<EC JPoint x: " + this.x.toString(16, 2) + " y: " + this.y.toString(16, 2) + " z: " + this.z.toString(16, 2) + ">";
}, Tt.prototype.isInfinity = function() {
    return this.z.cmpn(0) === 0;
};
var qr = cr(function(e, t) {
    var r = t;
    r.base = Ze, r.short = ka, r.mont = null, r.edwards = null;
}), Kr = cr(function(e, t) {
    var r = t, i = Jt.assert;
    function n(p) {
        p.type === "short" ? this.curve = new qr.short(p) : p.type === "edwards" ? this.curve = new qr.edwards(p) : this.curve = new qr.mont(p), this.g = this.curve.g, this.n = this.curve.n, this.hash = p.hash, i(this.g.validate(), "Invalid curve"), i(this.g.mul(this.n).isInfinity(), "Invalid curve, G*N != O");
    }
    r.PresetCurve = n;
    function o(p, b) {
        Object.defineProperty(r, p, {
            configurable: !0,
            enumerable: !0,
            get: function() {
                var m = new n(b);
                return Object.defineProperty(r, p, {
                    configurable: !0,
                    enumerable: !0,
                    value: m
                }), m;
            }
        });
    }
    o("p192", {
        type: "short",
        prime: "p192",
        p: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff",
        a: "ffffffff ffffffff ffffffff fffffffe ffffffff fffffffc",
        b: "64210519 e59c80e7 0fa7e9ab 72243049 feb8deec c146b9b1",
        n: "ffffffff ffffffff ffffffff 99def836 146bc9b1 b4d22831",
        hash: se.sha256,
        gRed: !1,
        g: [
            "188da80e b03090f6 7cbf20eb 43a18800 f4ff0afd 82ff1012",
            "07192b95 ffc8da78 631011ed 6b24cdd5 73f977a1 1e794811"
        ]
    }), o("p224", {
        type: "short",
        prime: "p224",
        p: "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001",
        a: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff fffffffe",
        b: "b4050a85 0c04b3ab f5413256 5044b0b7 d7bfd8ba 270b3943 2355ffb4",
        n: "ffffffff ffffffff ffffffff ffff16a2 e0b8f03e 13dd2945 5c5c2a3d",
        hash: se.sha256,
        gRed: !1,
        g: [
            "b70e0cbd 6bb4bf7f 321390b9 4a03c1d3 56c21122 343280d6 115c1d21",
            "bd376388 b5f723fb 4c22dfe6 cd4375a0 5a074764 44d58199 85007e34"
        ]
    }), o("p256", {
        type: "short",
        prime: null,
        p: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff ffffffff",
        a: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff fffffffc",
        b: "5ac635d8 aa3a93e7 b3ebbd55 769886bc 651d06b0 cc53b0f6 3bce3c3e 27d2604b",
        n: "ffffffff 00000000 ffffffff ffffffff bce6faad a7179e84 f3b9cac2 fc632551",
        hash: se.sha256,
        gRed: !1,
        g: [
            "6b17d1f2 e12c4247 f8bce6e5 63a440f2 77037d81 2deb33a0 f4a13945 d898c296",
            "4fe342e2 fe1a7f9b 8ee7eb4a 7c0f9e16 2bce3357 6b315ece cbb64068 37bf51f5"
        ]
    }), o("p384", {
        type: "short",
        prime: null,
        p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 ffffffff",
        a: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 fffffffc",
        b: "b3312fa7 e23ee7e4 988e056b e3f82d19 181d9c6e fe814112 0314088f 5013875a c656398d 8a2ed19d 2a85c8ed d3ec2aef",
        n: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff c7634d81 f4372ddf 581a0db2 48b0a77a ecec196a ccc52973",
        hash: se.sha384,
        gRed: !1,
        g: [
            "aa87ca22 be8b0537 8eb1c71e f320ad74 6e1d3b62 8ba79b98 59f741e0 82542a38 5502f25d bf55296c 3a545e38 72760ab7",
            "3617de4a 96262c6f 5d9e98bf 9292dc29 f8f41dbd 289a147c e9da3113 b5f0b8c0 0a60b1ce 1d7e819d 7a431d7c 90ea0e5f"
        ]
    }), o("p521", {
        type: "short",
        prime: null,
        p: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff",
        a: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffc",
        b: "00000051 953eb961 8e1c9a1f 929a21a0 b68540ee a2da725b 99b315f3 b8b48991 8ef109e1 56193951 ec7e937b 1652c0bd 3bb1bf07 3573df88 3d2c34f1 ef451fd4 6b503f00",
        n: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffa 51868783 bf2f966b 7fcc0148 f709a5d0 3bb5c9b8 899c47ae bb6fb71e 91386409",
        hash: se.sha512,
        gRed: !1,
        g: [
            "000000c6 858e06b7 0404e9cd 9e3ecb66 2395b442 9c648139 053fb521 f828af60 6b4d3dba a14b5e77 efe75928 fe1dc127 a2ffa8de 3348b3c1 856a429b f97e7e31 c2e5bd66",
            "00000118 39296a78 9a3bc004 5c8a5fb4 2c7d1bd9 98f54449 579b4468 17afbd17 273e662c 97ee7299 5ef42640 c550b901 3fad0761 353c7086 a272c240 88be9476 9fd16650"
        ]
    }), o("curve25519", {
        type: "mont",
        prime: "p25519",
        p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
        a: "76d06",
        b: "1",
        n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
        hash: se.sha256,
        gRed: !1,
        g: [
            "9"
        ]
    }), o("ed25519", {
        type: "edwards",
        prime: "p25519",
        p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
        a: "-1",
        c: "1",
        d: "52036cee2b6ffe73 8cc740797779e898 00700a4d4141d8ab 75eb4dca135978a3",
        n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
        hash: se.sha256,
        gRed: !1,
        g: [
            "216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a",
            "6666666666666666666666666666666666666666666666666666666666666658"
        ]
    });
    var h;
    try {
        h = null.crash();
    } catch  {
        h = void 0;
    }
    o("secp256k1", {
        type: "short",
        prime: "k256",
        p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f",
        a: "0",
        b: "7",
        n: "ffffffff ffffffff ffffffff fffffffe baaedce6 af48a03b bfd25e8c d0364141",
        h: "1",
        hash: se.sha256,
        beta: "7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee",
        lambda: "5363ad4cc05c30e0a5261c028812645a122e22ea20816678df02967c1b23bd72",
        basis: [
            {
                a: "3086d221a7d46bcde86c90e49284eb15",
                b: "-e4437ed6010e88286f547fa90abfe4c3"
            },
            {
                a: "114ca50f7a8e2f3f657c1108d9d44cfd8",
                b: "3086d221a7d46bcde86c90e49284eb15"
            }
        ],
        gRed: !1,
        g: [
            "79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798",
            "483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8",
            h
        ]
    });
});
function Re(e) {
    if (!(this instanceof Re)) return new Re(e);
    this.hash = e.hash, this.predResist = !!e.predResist, this.outLen = this.hash.outSize, this.minEntropy = e.minEntropy || this.hash.hmacStrength, this._reseed = null, this.reseedInterval = null, this.K = null, this.V = null;
    var t = fe.toArray(e.entropy, e.entropyEnc || "hex"), r = fe.toArray(e.nonce, e.nonceEnc || "hex"), i = fe.toArray(e.pers, e.persEnc || "hex");
    Pi(t.length >= this.minEntropy / 8, "Not enough entropy. Minimum is: " + this.minEntropy + " bits"), this._init(t, r, i);
}
var Rf = Re;
Re.prototype._init = function(t, r, i) {
    var n = t.concat(r).concat(i);
    this.K = new Array(this.outLen / 8), this.V = new Array(this.outLen / 8);
    for(var o = 0; o < this.V.length; o++)this.K[o] = 0, this.V[o] = 1;
    this._update(n), this._reseed = 1, this.reseedInterval = 281474976710656;
}, Re.prototype._hmac = function() {
    return new se.hmac(this.hash, this.K);
}, Re.prototype._update = function(t) {
    var r = this._hmac().update(this.V).update([
        0
    ]);
    t && (r = r.update(t)), this.K = r.digest(), this.V = this._hmac().update(this.V).digest(), t && (this.K = this._hmac().update(this.V).update([
        1
    ]).update(t).digest(), this.V = this._hmac().update(this.V).digest());
}, Re.prototype.reseed = function(t, r, i, n) {
    typeof r != "string" && (n = i, i = r, r = null), t = fe.toArray(t, r), i = fe.toArray(i, n), Pi(t.length >= this.minEntropy / 8, "Not enough entropy. Minimum is: " + this.minEntropy + " bits"), this._update(t.concat(i || [])), this._reseed = 1;
}, Re.prototype.generate = function(t, r, i, n) {
    if (this._reseed > this.reseedInterval) throw new Error("Reseed is required");
    typeof r != "string" && (n = i, i = r, r = null), i && (i = fe.toArray(i, n || "hex"), this._update(i));
    for(var o = []; o.length < t;)this.V = this._hmac().update(this.V).digest(), o = o.concat(this.V);
    var h = o.slice(0, t);
    return this._update(i), this._reseed++, fe.encode(h, r);
};
var Fi = Jt.assert;
function kt(e, t) {
    this.ec = e, this.priv = null, this.pub = null, t.priv && this._importPrivate(t.priv, t.privEnc), t.pub && this._importPublic(t.pub, t.pubEnc);
}
var Ti = kt;
kt.fromPublic = function(t, r, i) {
    return r instanceof kt ? r : new kt(t, {
        pub: r,
        pubEnc: i
    });
}, kt.fromPrivate = function(t, r, i) {
    return r instanceof kt ? r : new kt(t, {
        priv: r,
        privEnc: i
    });
}, kt.prototype.validate = function() {
    var t = this.getPublic();
    return t.isInfinity() ? {
        result: !1,
        reason: "Invalid public key"
    } : t.validate() ? t.mul(this.ec.curve.n).isInfinity() ? {
        result: !0,
        reason: null
    } : {
        result: !1,
        reason: "Public key * N != O"
    } : {
        result: !1,
        reason: "Public key is not a point"
    };
}, kt.prototype.getPublic = function(t, r) {
    return typeof t == "string" && (r = t, t = null), this.pub || (this.pub = this.ec.g.mul(this.priv)), r ? this.pub.encode(r, t) : this.pub;
}, kt.prototype.getPrivate = function(t) {
    return t === "hex" ? this.priv.toString(16, 2) : this.priv;
}, kt.prototype._importPrivate = function(t, r) {
    this.priv = new K(t, r || 16), this.priv = this.priv.umod(this.ec.curve.n);
}, kt.prototype._importPublic = function(t, r) {
    if (t.x || t.y) {
        this.ec.curve.type === "mont" ? Fi(t.x, "Need x coordinate") : (this.ec.curve.type === "short" || this.ec.curve.type === "edwards") && Fi(t.x && t.y, "Need both x and y coordinate"), this.pub = this.ec.curve.point(t.x, t.y);
        return;
    }
    this.pub = this.ec.curve.decodePoint(t, r);
}, kt.prototype.derive = function(t) {
    return t.validate() || Fi(t.validate(), "public point not validated"), t.mul(this.priv).getX();
}, kt.prototype.sign = function(t, r, i) {
    return this.ec.sign(t, this, r, i);
}, kt.prototype.verify = function(t, r) {
    return this.ec.verify(t, r, this);
}, kt.prototype.inspect = function() {
    return "<Key priv: " + (this.priv && this.priv.toString(16, 2)) + " pub: " + (this.pub && this.pub.inspect()) + " >";
};
var qa = Jt.assert;
function Hr(e, t) {
    if (e instanceof Hr) return e;
    this._importDER(e, t) || (qa(e.r && e.s, "Signature without r or s"), this.r = new K(e.r, 16), this.s = new K(e.s, 16), e.recoveryParam === void 0 ? this.recoveryParam = null : this.recoveryParam = e.recoveryParam);
}
var zr = Hr;
function Ka() {
    this.place = 0;
}
function Ui(e, t) {
    var r = e[t.place++];
    if (!(r & 128)) return r;
    var i = r & 15;
    if (i === 0 || i > 4) return !1;
    for(var n = 0, o = 0, h = t.place; o < i; o++, h++)n <<= 8, n |= e[h], n >>>= 0;
    return n <= 127 ? !1 : (t.place = h, n);
}
function Of(e) {
    for(var t = 0, r = e.length - 1; !e[t] && !(e[t + 1] & 128) && t < r;)t++;
    return t === 0 ? e : e.slice(t);
}
Hr.prototype._importDER = function(t, r) {
    t = Jt.toArray(t, r);
    var i = new Ka;
    if (t[i.place++] !== 48) return !1;
    var n = Ui(t, i);
    if (n === !1 || n + i.place !== t.length || t[i.place++] !== 2) return !1;
    var o = Ui(t, i);
    if (o === !1) return !1;
    var h = t.slice(i.place, o + i.place);
    if (i.place += o, t[i.place++] !== 2) return !1;
    var p = Ui(t, i);
    if (p === !1 || t.length !== p + i.place) return !1;
    var b = t.slice(i.place, p + i.place);
    if (h[0] === 0) if (h[1] & 128) h = h.slice(1);
    else return !1;
    if (b[0] === 0) if (b[1] & 128) b = b.slice(1);
    else return !1;
    return this.r = new K(h), this.s = new K(b), this.recoveryParam = null, !0;
};
function ki(e, t) {
    if (t < 128) {
        e.push(t);
        return;
    }
    var r = 1 + (Math.log(t) / Math.LN2 >>> 3);
    for(e.push(r | 128); --r;)e.push(t >>> (r << 3) & 255);
    e.push(t);
}
Hr.prototype.toDER = function(t) {
    var r = this.r.toArray(), i = this.s.toArray();
    for(r[0] & 128 && (r = [
        0
    ].concat(r)), i[0] & 128 && (i = [
        0
    ].concat(i)), r = Of(r), i = Of(i); !i[0] && !(i[1] & 128);)i = i.slice(1);
    var n = [
        2
    ];
    ki(n, r.length), n = n.concat(r), n.push(2), ki(n, i.length);
    var o = n.concat(i), h = [
        48
    ];
    return ki(h, o.length), h = h.concat(o), Jt.encode(h, t);
};
var Ha = function() {
    throw new Error("unsupported");
}, Pf = Jt.assert;
function $t(e) {
    if (!(this instanceof $t)) return new $t(e);
    typeof e == "string" && (Pf(Object.prototype.hasOwnProperty.call(Kr, e), "Unknown curve " + e), e = Kr[e]), e instanceof Kr.PresetCurve && (e = {
        curve: e
    }), this.curve = e.curve.curve, this.n = this.curve.n, this.nh = this.n.ushrn(1), this.g = this.curve.g, this.g = e.curve.g, this.g.precompute(e.curve.n.bitLength() + 1), this.hash = e.hash || e.curve.hash;
}
var za = $t;
$t.prototype.keyPair = function(t) {
    return new Ti(this, t);
}, $t.prototype.keyFromPrivate = function(t, r) {
    return Ti.fromPrivate(this, t, r);
}, $t.prototype.keyFromPublic = function(t, r) {
    return Ti.fromPublic(this, t, r);
}, $t.prototype.genKeyPair = function(t) {
    t || (t = {});
    for(var r = new Rf({
        hash: this.hash,
        pers: t.pers,
        persEnc: t.persEnc || "utf8",
        entropy: t.entropy || Ha(this.hash.hmacStrength),
        entropyEnc: t.entropy && t.entropyEnc || "utf8",
        nonce: this.n.toArray()
    }), i = this.n.byteLength(), n = this.n.sub(new K(2));;){
        var o = new K(r.generate(i));
        if (!(o.cmp(n) > 0)) return o.iaddn(1), this.keyFromPrivate(o);
    }
}, $t.prototype._truncateToN = function(t, r) {
    var i = t.byteLength() * 8 - this.n.bitLength();
    return i > 0 && (t = t.ushrn(i)), !r && t.cmp(this.n) >= 0 ? t.sub(this.n) : t;
}, $t.prototype.sign = function(t, r, i, n) {
    typeof i == "object" && (n = i, i = null), n || (n = {}), r = this.keyFromPrivate(r, i), t = this._truncateToN(new K(t, 16));
    for(var o = this.n.byteLength(), h = r.getPrivate().toArray("be", o), p = t.toArray("be", o), b = new Rf({
        hash: this.hash,
        entropy: h,
        nonce: p,
        pers: n.pers,
        persEnc: n.persEnc || "utf8"
    }), m = this.n.sub(new K(1)), w = 0;; w++){
        var y = n.k ? n.k(w) : new K(b.generate(this.n.byteLength()));
        if (y = this._truncateToN(y, !0), !(y.cmpn(1) <= 0 || y.cmp(m) >= 0)) {
            var S = this.g.mul(y);
            if (!S.isInfinity()) {
                var I = S.getX(), N = I.umod(this.n);
                if (N.cmpn(0) !== 0) {
                    var C = y.invm(this.n).mul(N.mul(r.getPrivate()).iadd(t));
                    if (C = C.umod(this.n), C.cmpn(0) !== 0) {
                        var F = (S.getY().isOdd() ? 1 : 0) | (I.cmp(N) !== 0 ? 2 : 0);
                        return n.canonical && C.cmp(this.nh) > 0 && (C = this.n.sub(C), F ^= 1), new zr({
                            r: N,
                            s: C,
                            recoveryParam: F
                        });
                    }
                }
            }
        }
    }
}, $t.prototype.verify = function(t, r, i, n) {
    t = this._truncateToN(new K(t, 16)), i = this.keyFromPublic(i, n), r = new zr(r, "hex");
    var o = r.r, h = r.s;
    if (o.cmpn(1) < 0 || o.cmp(this.n) >= 0 || h.cmpn(1) < 0 || h.cmp(this.n) >= 0) return !1;
    var p = h.invm(this.n), b = p.mul(t).umod(this.n), m = p.mul(o).umod(this.n), w;
    return this.curve._maxwellTrick ? (w = this.g.jmulAdd(b, i.getPublic(), m), w.isInfinity() ? !1 : w.eqXToP(o)) : (w = this.g.mulAdd(b, i.getPublic(), m), w.isInfinity() ? !1 : w.getX().umod(this.n).cmp(o) === 0);
}, $t.prototype.recoverPubKey = function(e, t, r, i) {
    Pf((3 & r) === r, "The recovery param is more than two bits"), t = new zr(t, i);
    var n = this.n, o = new K(e), h = t.r, p = t.s, b = r & 1, m = r >> 1;
    if (h.cmp(this.curve.p.umod(this.curve.n)) >= 0 && m) throw new Error("Unable to find sencond key candinate");
    m ? h = this.curve.pointFromX(h.add(this.curve.n), b) : h = this.curve.pointFromX(h, b);
    var w = t.r.invm(n), y = n.sub(o).mul(w).umod(n), S = p.mul(w).umod(n);
    return this.g.mulAdd(y, h, S);
}, $t.prototype.getKeyRecoveryParam = function(e, t, r, i) {
    if (t = new zr(t, i), t.recoveryParam !== null) return t.recoveryParam;
    for(var n = 0; n < 4; n++){
        var o;
        try {
            o = this.recoverPubKey(e, t, n);
        } catch  {
            continue;
        }
        if (o.eq(r)) return n;
    }
    throw new Error("Unable to find valid recovery factor");
};
var La = cr(function(e, t) {
    var r = t;
    r.version = "6.5.4", r.utils = Jt, r.rand = function() {
        throw new Error("unsupported");
    }, r.curve = qr, r.curves = Kr, r.ec = za, r.eddsa = null;
}), ja = La.ec;
const Qa = "signing-key/5.7.0", qi = new L(Qa);
let Ki = null;
function ve() {
    return Ki || (Ki = new ja("secp256k1")), Ki;
}
class Ja {
    constructor(t){
        br(this, "curve", "secp256k1"), br(this, "privateKey", Kt(t)), N0(this.privateKey) !== 32 && qi.throwArgumentError("invalid private key", "privateKey", "[[ REDACTED ]]");
        const r = ve().keyFromPrivate(Ot(this.privateKey));
        br(this, "publicKey", "0x" + r.getPublic(!1, "hex")), br(this, "compressedPublicKey", "0x" + r.getPublic(!0, "hex")), br(this, "_isSigningKey", !0);
    }
    _addPoint(t) {
        const r = ve().keyFromPublic(Ot(this.publicKey)), i = ve().keyFromPublic(Ot(t));
        return "0x" + r.pub.add(i.pub).encodeCompressed("hex");
    }
    signDigest(t) {
        const r = ve().keyFromPrivate(Ot(this.privateKey)), i = Ot(t);
        i.length !== 32 && qi.throwArgumentError("bad digest length", "digest", t);
        const n = r.sign(i, {
            canonical: !0
        });
        return zn({
            recoveryParam: n.recoveryParam,
            r: oe("0x" + n.r.toString(16), 32),
            s: oe("0x" + n.s.toString(16), 32)
        });
    }
    computeSharedSecret(t) {
        const r = ve().keyFromPrivate(Ot(this.privateKey)), i = ve().keyFromPublic(Ot(Df(t)));
        return oe("0x" + r.derive(i.getPublic()).toString(16), 32);
    }
    static isSigningKey(t) {
        return !!(t && t._isSigningKey);
    }
}
function Ga(e, t) {
    const r = zn(t), i = {
        r: Ot(r.r),
        s: Ot(r.s)
    };
    return "0x" + ve().recoverPubKey(Ot(e), i, r.recoveryParam).encode("hex", !1);
}
function Df(e, t) {
    const r = Ot(e);
    if (r.length === 32) {
        const i = new Ja(r);
        return t ? "0x" + ve().keyFromPrivate(r).getPublic(!0, "hex") : i.publicKey;
    } else {
        if (r.length === 33) return t ? Kt(r) : "0x" + ve().keyFromPublic(r).getPublic(!1, "hex");
        if (r.length === 65) return t ? "0x" + ve().keyFromPublic(r).getPublic(!0, "hex") : Kt(r);
    }
    return qi.throwArgumentError("invalid public or private key", "key", "[REDACTED]");
}
const Ya = "transactions/5.7.0";
new L(Ya);
var Ff;
(function(e) {
    e[e.legacy = 0] = "legacy", e[e.eip2930 = 1] = "eip2930", e[e.eip1559 = 2] = "eip1559";
})(Ff || (Ff = {}));
function Va(e) {
    const t = Df(e);
    return ns(Hn(yi(Hn(t, 1)), 12));
}
function Wa(e, t) {
    return Va(Ga(Ot(e), t));
}
const Xa = "https://rpc.walletconnect.com/v1";
async function Tf(e, t, r, i, n, o) {
    switch(r.t){
        case "eip191":
            return Uf(e, t, r.s);
        case "eip1271":
            return await kf(e, t, r.s, i, n, o);
        default:
            throw new Error(`verifySignature failed: Attempted to verify CacaoSignature with unknown type: ${r.t}`);
    }
}
function Uf(e, t, r) {
    return Wa(ff(t), r).toLowerCase() === e.toLowerCase();
}
async function kf(e, t, r, i, n, o) {
    try {
        const h = "0x1626ba7e", p = "0000000000000000000000000000000000000000000000000000000000000040", b = "0000000000000000000000000000000000000000000000000000000000000041", m = r.substring(2), w = ff(t).substring(2), y = h + w + p + b + m, S = await fetch(`${o || Xa}/?chainId=${i}&projectId=${n}`, {
            method: "POST",
            body: JSON.stringify({
                id: Za(),
                jsonrpc: "2.0",
                method: "eth_call",
                params: [
                    {
                        to: e,
                        data: y
                    },
                    "latest"
                ]
            })
        }), { result: I } = await S.json();
        return I ? I.slice(0, h.length).toLowerCase() === h.toLowerCase() : !1;
    } catch (h) {
        return console.error("isValidEip1271Signature: ", h), !1;
    }
}
function Za() {
    return Date.now() + Math.floor(Math.random() * 1e3);
}
var $a = Object.defineProperty, tu = Object.defineProperties, eu = Object.getOwnPropertyDescriptors, qf = Object.getOwnPropertySymbols, ru = Object.prototype.hasOwnProperty, iu = Object.prototype.propertyIsEnumerable, Kf = (e, t, r)=>t in e ? $a(e, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: r
    }) : e[t] = r, Hi = (e, t)=>{
    for(var r in t || (t = {}))ru.call(t, r) && Kf(e, r, t[r]);
    if (qf) for (var r of qf(t))iu.call(t, r) && Kf(e, r, t[r]);
    return e;
}, Hf = (e, t)=>tu(e, eu(t));
const nu = "did:pkh:", Lr = (e)=>e?.split(":"), zi = (e)=>{
    const t = e && Lr(e);
    if (t) return e.includes(nu) ? t[3] : t[1];
}, fu = (e)=>{
    const t = e && Lr(e);
    if (t) return t[2] + ":" + t[3];
}, Li = (e)=>{
    const t = e && Lr(e);
    if (t) return t.pop();
};
async function ou(e) {
    const { cacao: t, projectId: r } = e, { s: i, p: n } = t, o = zf(n, n.iss), h = Li(n.iss);
    return await Tf(h, o, i, zi(n.iss), r);
}
const zf = (e, t)=>{
    const r = `${e.domain} wants you to sign in with your Ethereum account:`, i = Li(t);
    if (!e.aud && !e.uri) throw new Error("Either `aud` or `uri` is required to construct the message");
    let n = e.statement || void 0;
    const o = `URI: ${e.aud || e.uri}`, h = `Version: ${e.version}`, p = `Chain ID: ${zi(t)}`, b = `Nonce: ${e.nonce}`, m = `Issued At: ${e.iat}`, w = e.resources ? `Resources:${e.resources.map((S)=>`
- ${S}`).join("")}` : void 0, y = Qr(e.resources);
    if (y) {
        const S = Oe(y);
        n = Ji(n, S);
    }
    return [
        r,
        i,
        "",
        n,
        "",
        o,
        h,
        p,
        b,
        m,
        w
    ].filter((S)=>S != null).join(`
`);
};
function su(e, t, r) {
    return r.includes("did:pkh:") || (r = `did:pkh:${r}`), {
        h: {
            t: "caip122"
        },
        p: {
            iss: r,
            domain: e.domain,
            aud: e.aud,
            version: e.version,
            nonce: e.nonce,
            iat: e.iat,
            statement: e.statement,
            requestId: e.requestId,
            resources: e.resources,
            nbf: e.nbf,
            exp: e.exp
        },
        s: t
    };
}
function au(e) {
    var t;
    const { authPayload: r, chains: i, methods: n } = e, o = r.statement || "";
    if (!(i != null && i.length)) return r;
    const h = r.chains, p = mi(h, i);
    if (!(p != null && p.length)) throw new Error("No supported chains");
    const b = Lf(r.resources);
    if (!b) return r;
    me(b);
    const m = jf(b, "eip155");
    let w = r?.resources || [];
    if (m != null && m.length) {
        const y = Qf(m), S = mi(y, n);
        if (!(S != null && S.length)) throw new Error(`Supported methods don't satisfy the requested: ${JSON.stringify(y)}, supported: ${JSON.stringify(n)}`);
        const I = ji("request", S, {
            chains: p
        }), N = Vf(b, "eip155", I);
        w = ((t = r?.resources) == null ? void 0 : t.slice(0, -1)) || [], w.push(jr(N));
    }
    return Hf(Hi({}, r), {
        statement: Xf(o, Qr(w)),
        chains: p,
        resources: r != null && r.resources || w.length > 0 ? w : void 0
    });
}
function Lf(e) {
    const t = Qr(e);
    if (t && Qi(t)) return Oe(t);
}
function uu(e, t) {
    var r;
    return (r = e?.att) == null ? void 0 : r.hasOwnProperty(t);
}
function jf(e, t) {
    var r, i;
    return (r = e?.att) != null && r[t] ? Object.keys((i = e?.att) == null ? void 0 : i[t]) : [];
}
function hu(e) {
    return e?.map((t)=>Object.keys(t)) || [];
}
function Qf(e) {
    return e?.map((t)=>{
        var r;
        return (r = t.split("/")) == null ? void 0 : r[1];
    }) || [];
}
function Jf(e) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from(JSON.stringify(e)).toString("base64");
}
function Gf(e) {
    return JSON.parse(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from(e, "base64").toString("utf-8"));
}
function me(e) {
    if (!e) throw new Error("No recap provided, value is undefined");
    if (!e.att) throw new Error("No `att` property found");
    const t = Object.keys(e.att);
    if (!(t != null && t.length)) throw new Error("No resources found in `att` property");
    t.forEach((r)=>{
        const i = e.att[r];
        if (Array.isArray(i)) throw new Error(`Resource must be an object: ${r}`);
        if (typeof i != "object") throw new Error(`Resource must be an object: ${r}`);
        if (!Object.keys(i).length) throw new Error(`Resource object is empty: ${r}`);
        Object.keys(i).forEach((n)=>{
            const o = i[n];
            if (!Array.isArray(o)) throw new Error(`Ability limits ${n} must be an array of objects, found: ${o}`);
            if (!o.length) throw new Error(`Value of ${n} is empty array, must be an array with objects`);
            o.forEach((h)=>{
                if (typeof h != "object") throw new Error(`Ability limits (${n}) must be an array of objects, found: ${h}`);
            });
        });
    });
}
function Yf(e, t, r, i = {}) {
    return r?.sort((n, o)=>n.localeCompare(o)), {
        att: {
            [e]: ji(t, r, i)
        }
    };
}
function Vf(e, t, r) {
    var i;
    return e.att[t] = Hi({}, r), ((i = Object.keys(e.att)) == null ? void 0 : i.sort((n, o)=>n.localeCompare(o))).reduce((n, o)=>(n.att[o] = e.att[o], n), {
        att: {}
    });
}
function ji(e, t, r = {}) {
    t = t?.sort((n, o)=>n.localeCompare(o));
    const i = t.map((n)=>({
            [`${e}/${n}`]: [
                r
            ]
        }));
    return Object.assign({}, ...i);
}
function jr(e) {
    return me(e), `urn:recap:${Jf(e).replace(/=/g, "")}`;
}
function Oe(e) {
    const t = Gf(e.replace("urn:recap:", ""));
    return me(t), t;
}
function cu(e, t, r) {
    const i = Yf(e, t, r);
    return jr(i);
}
function Qi(e) {
    return e && e.includes("urn:recap:");
}
function lu(e, t) {
    const r = Oe(e), i = Oe(t), n = Wf(r, i);
    return jr(n);
}
function Wf(e, t) {
    me(e), me(t);
    const r = Object.keys(e.att).concat(Object.keys(t.att)).sort((n, o)=>n.localeCompare(o)), i = {
        att: {}
    };
    return r.forEach((n)=>{
        var o, h;
        Object.keys(((o = e.att) == null ? void 0 : o[n]) || {}).concat(Object.keys(((h = t.att) == null ? void 0 : h[n]) || {})).sort((p, b)=>p.localeCompare(b)).forEach((p)=>{
            var b, m;
            i.att[n] = Hf(Hi({}, i.att[n]), {
                [p]: ((b = e.att[n]) == null ? void 0 : b[p]) || ((m = t.att[n]) == null ? void 0 : m[p])
            });
        });
    }), i;
}
function Ji(e = "", t) {
    me(t);
    const r = "I further authorize the stated URI to perform the following actions on my behalf: ";
    if (e.includes(r)) return e;
    const i = [];
    let n = 0;
    Object.keys(t.att).forEach((p)=>{
        const b = Object.keys(t.att[p]).map((y)=>({
                ability: y.split("/")[0],
                action: y.split("/")[1]
            }));
        b.sort((y, S)=>y.action.localeCompare(S.action));
        const m = {};
        b.forEach((y)=>{
            m[y.ability] || (m[y.ability] = []), m[y.ability].push(y.action);
        });
        const w = Object.keys(m).map((y)=>(n++, `(${n}) '${y}': '${m[y].join("', '")}' for '${p}'.`));
        i.push(w.join(", ").replace(".,", "."));
    });
    const o = i.join(" "), h = `${r}${o}`;
    return `${e ? e + " " : ""}${h}`;
}
function du(e) {
    var t;
    const r = Oe(e);
    me(r);
    const i = (t = r.att) == null ? void 0 : t.eip155;
    return i ? Object.keys(i).map((n)=>n.split("/")[1]) : [];
}
function pu(e) {
    const t = Oe(e);
    me(t);
    const r = [];
    return Object.values(t.att).forEach((i)=>{
        Object.values(i).forEach((n)=>{
            var o;
            (o = n?.[0]) != null && o.chains && r.push(n[0].chains);
        });
    }), [
        ...new Set(r.flat())
    ];
}
function Xf(e, t) {
    if (!t) return e;
    const r = Oe(t);
    return me(r), Ji(e, r);
}
function Qr(e) {
    if (!e) return;
    const t = e?.[e.length - 1];
    return Qi(t) ? t : void 0;
}
const Gi = "base10", zt = "base16", Jr = "base64pad", Gr = "utf8", Yi = 0, lr = 1, vu = 0, Zf = 1, Vi = 12, Wi = 32;
function mu() {
    const e = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stablelib$2f$x25519$2f$lib$2f$x25519$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.generateKeyPair();
    return {
        privateKey: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$to$2d$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toString"])(e.secretKey, zt),
        publicKey: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$to$2d$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toString"])(e.publicKey, zt)
    };
}
function gu() {
    const e = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stablelib$2f$random$2f$lib$2f$random$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["randomBytes"])(Wi);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$to$2d$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toString"])(e, zt);
}
function Au(e, t) {
    const r = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stablelib$2f$x25519$2f$lib$2f$x25519$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.sharedKey((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$from$2d$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fromString"])(e, zt), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$from$2d$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fromString"])(t, zt), !0), i = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stablelib$2f$hkdf$2f$lib$2f$hkdf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HKDF"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stablelib$2f$sha256$2f$lib$2f$sha256$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SHA256"], r).expand(Wi);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$to$2d$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toString"])(i, zt);
}
function bu(e) {
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stablelib$2f$sha256$2f$lib$2f$sha256$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hash"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$from$2d$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fromString"])(e, zt));
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$to$2d$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toString"])(t, zt);
}
function yu(e) {
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stablelib$2f$sha256$2f$lib$2f$sha256$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hash"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$from$2d$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fromString"])(e, Gr));
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$to$2d$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toString"])(t, zt);
}
function $f(e) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$from$2d$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fromString"])(`${e}`, Gi);
}
function Mr(e) {
    return Number((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$to$2d$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toString"])(e, Gi));
}
function wu(e) {
    const t = $f(typeof e.type < "u" ? e.type : Yi);
    if (Mr(t) === lr && typeof e.senderPublicKey > "u") throw new Error("Missing sender public key for type 1 envelope");
    const r = typeof e.senderPublicKey < "u" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$from$2d$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fromString"])(e.senderPublicKey, zt) : void 0, i = typeof e.iv < "u" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$from$2d$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fromString"])(e.iv, zt) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stablelib$2f$random$2f$lib$2f$random$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["randomBytes"])(Vi), n = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stablelib$2f$chacha20poly1305$2f$lib$2f$chacha20poly1305$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChaCha20Poly1305"]((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$from$2d$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fromString"])(e.symKey, zt)).seal(i, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$from$2d$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fromString"])(e.message, Gr));
    return to({
        type: t,
        sealed: n,
        iv: i,
        senderPublicKey: r
    });
}
function xu(e) {
    const t = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stablelib$2f$chacha20poly1305$2f$lib$2f$chacha20poly1305$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChaCha20Poly1305"]((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$from$2d$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fromString"])(e.symKey, zt)), { sealed: r, iv: i } = Xi(e.encoded), n = t.open(i, r);
    if (n === null) throw new Error("Failed to decrypt");
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$to$2d$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toString"])(n, Gr);
}
function to(e) {
    if (Mr(e.type) === lr) {
        if (typeof e.senderPublicKey > "u") throw new Error("Missing sender public key for type 1 envelope");
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$to$2d$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toString"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$concat$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["concat"])([
            e.type,
            e.senderPublicKey,
            e.iv,
            e.sealed
        ]), Jr);
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$to$2d$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toString"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$concat$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["concat"])([
        e.type,
        e.iv,
        e.sealed
    ]), Jr);
}
function Xi(e) {
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$from$2d$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fromString"])(e, Jr), r = t.slice(vu, Zf), i = Zf;
    if (Mr(r) === lr) {
        const p = i + Wi, b = p + Vi, m = t.slice(i, p), w = t.slice(p, b), y = t.slice(b);
        return {
            type: r,
            sealed: y,
            iv: w,
            senderPublicKey: m
        };
    }
    const n = i + Vi, o = t.slice(i, n), h = t.slice(n);
    return {
        type: r,
        sealed: h,
        iv: o
    };
}
function Mu(e, t) {
    const r = Xi(e);
    return eo({
        type: Mr(r.type),
        senderPublicKey: typeof r.senderPublicKey < "u" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$to$2d$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toString"])(r.senderPublicKey, zt) : void 0,
        receiverPublicKey: t?.receiverPublicKey
    });
}
function eo(e) {
    const t = e?.type || Yi;
    if (t === lr) {
        if (typeof e?.senderPublicKey > "u") throw new Error("missing sender public key");
        if (typeof e?.receiverPublicKey > "u") throw new Error("missing receiver public key");
    }
    return {
        type: t,
        senderPublicKey: e?.senderPublicKey,
        receiverPublicKey: e?.receiverPublicKey
    };
}
function Eu(e) {
    return e.type === lr && typeof e.senderPublicKey == "string" && typeof e.receiverPublicKey == "string";
}
const ro = "irn";
function Su(e) {
    return e?.relay || {
        protocol: ro
    };
}
function Nu(e) {
    const t = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$relay$2d$api$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RELAY_JSONRPC"][e];
    if (typeof t > "u") throw new Error(`Relay Protocol not supported: ${e}`);
    return t;
}
var Iu = Object.defineProperty, _u = Object.defineProperties, Bu = Object.getOwnPropertyDescriptors, io = Object.getOwnPropertySymbols, Cu = Object.prototype.hasOwnProperty, Ru = Object.prototype.propertyIsEnumerable, no = (e, t, r)=>t in e ? Iu(e, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: r
    }) : e[t] = r, fo = (e, t)=>{
    for(var r in t || (t = {}))Cu.call(t, r) && no(e, r, t[r]);
    if (io) for (var r of io(t))Ru.call(t, r) && no(e, r, t[r]);
    return e;
}, Ou = (e, t)=>_u(e, Bu(t));
function oo(e, t = "-") {
    const r = {}, i = "relay" + t;
    return Object.keys(e).forEach((n)=>{
        if (n.startsWith(i)) {
            const o = n.replace(i, ""), h = e[n];
            r[o] = h;
        }
    }), r;
}
function Pu(e) {
    e = e.includes("wc://") ? e.replace("wc://", "") : e, e = e.includes("wc:") ? e.replace("wc:", "") : e;
    const t = e.indexOf(":"), r = e.indexOf("?") !== -1 ? e.indexOf("?") : void 0, i = e.substring(0, t), n = e.substring(t + 1, r).split("@"), o = typeof r < "u" ? e.substring(r) : "", h = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$query$2d$string$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.parse(o), p = typeof h.methods == "string" ? h.methods.split(",") : void 0;
    return {
        protocol: i,
        topic: so(n[0]),
        version: parseInt(n[1], 10),
        symKey: h.symKey,
        relay: oo(h),
        methods: p,
        expiryTimestamp: h.expiryTimestamp ? parseInt(h.expiryTimestamp, 10) : void 0
    };
}
function so(e) {
    return e.startsWith("//") ? e.substring(2) : e;
}
function ao(e, t = "-") {
    const r = "relay", i = {};
    return Object.keys(e).forEach((n)=>{
        const o = r + t + n;
        e[n] && (i[o] = e[n]);
    }), i;
}
function Du(e) {
    return `${e.protocol}:${e.topic}@${e.version}?` + __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$query$2d$string$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.stringify(fo(Ou(fo({
        symKey: e.symKey
    }, ao(e.relay)), {
        expiryTimestamp: e.expiryTimestamp
    }), e.methods ? {
        methods: e.methods.join(",")
    } : {}));
}
var Fu = Object.defineProperty, Tu = Object.defineProperties, Uu = Object.getOwnPropertyDescriptors, uo = Object.getOwnPropertySymbols, ku = Object.prototype.hasOwnProperty, qu = Object.prototype.propertyIsEnumerable, ho = (e, t, r)=>t in e ? Fu(e, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: r
    }) : e[t] = r, Ku = (e, t)=>{
    for(var r in t || (t = {}))ku.call(t, r) && ho(e, r, t[r]);
    if (uo) for (var r of uo(t))qu.call(t, r) && ho(e, r, t[r]);
    return e;
}, Hu = (e, t)=>Tu(e, Uu(t));
function $e(e) {
    const t = [];
    return e.forEach((r)=>{
        const [i, n] = r.split(":");
        t.push(`${i}:${n}`);
    }), t;
}
function co(e) {
    const t = [];
    return Object.values(e).forEach((r)=>{
        t.push(...$e(r.accounts));
    }), t;
}
function lo(e, t) {
    const r = [];
    return Object.values(e).forEach((i)=>{
        $e(i.accounts).includes(t) && r.push(...i.methods);
    }), r;
}
function po(e, t) {
    const r = [];
    return Object.values(e).forEach((i)=>{
        $e(i.accounts).includes(t) && r.push(...i.events);
    }), r;
}
function zu(e, t) {
    const r = So(e, t);
    if (r) throw new Error(r.message);
    const i = {};
    for (const [n, o] of Object.entries(e))i[n] = {
        methods: o.methods,
        events: o.events,
        chains: o.accounts.map((h)=>`${h.split(":")[0]}:${h.split(":")[1]}`)
    };
    return i;
}
function Lu(e) {
    const { proposal: { requiredNamespaces: t, optionalNamespaces: r = {} }, supportedNamespaces: i } = e, n = $i(t), o = $i(r), h = {};
    Object.keys(i).forEach((m)=>{
        const w = i[m].chains, y = i[m].methods, S = i[m].events, I = i[m].accounts;
        w.forEach((N)=>{
            if (!I.some((C)=>C.includes(N))) throw new Error(`No accounts provided for chain ${N} in namespace ${m}`);
        }), h[m] = {
            chains: w,
            methods: y,
            events: S,
            accounts: I
        };
    });
    const p = Io(t, h, "approve()");
    if (p) throw new Error(p.message);
    const b = {};
    return !Object.keys(t).length && !Object.keys(r).length ? h : (Object.keys(n).forEach((m)=>{
        const w = i[m].chains.filter((N)=>{
            var C, F;
            return (F = (C = n[m]) == null ? void 0 : C.chains) == null ? void 0 : F.includes(N);
        }), y = i[m].methods.filter((N)=>{
            var C, F;
            return (F = (C = n[m]) == null ? void 0 : C.methods) == null ? void 0 : F.includes(N);
        }), S = i[m].events.filter((N)=>{
            var C, F;
            return (F = (C = n[m]) == null ? void 0 : C.events) == null ? void 0 : F.includes(N);
        }), I = w.map((N)=>i[m].accounts.filter((C)=>C.includes(`${N}:`))).flat();
        b[m] = {
            chains: w,
            methods: y,
            events: S,
            accounts: I
        };
    }), Object.keys(o).forEach((m)=>{
        var w, y, S, I, N, C;
        if (!i[m]) return;
        const F = (y = (w = o[m]) == null ? void 0 : w.chains) == null ? void 0 : y.filter((G)=>i[m].chains.includes(G)), U = i[m].methods.filter((G)=>{
            var H, z;
            return (z = (H = o[m]) == null ? void 0 : H.methods) == null ? void 0 : z.includes(G);
        }), J = i[m].events.filter((G)=>{
            var H, z;
            return (z = (H = o[m]) == null ? void 0 : H.events) == null ? void 0 : z.includes(G);
        }), Bt = F?.map((G)=>i[m].accounts.filter((H)=>H.includes(`${G}:`))).flat();
        b[m] = {
            chains: ge((S = b[m]) == null ? void 0 : S.chains, F),
            methods: ge((I = b[m]) == null ? void 0 : I.methods, U),
            events: ge((N = b[m]) == null ? void 0 : N.events, J),
            accounts: ge((C = b[m]) == null ? void 0 : C.accounts, Bt)
        };
    }), b);
}
function Zi(e) {
    return e.includes(":");
}
function vo(e) {
    return Zi(e) ? e.split(":")[0] : e;
}
function $i(e) {
    var t, r, i;
    const n = {};
    if (!Yr(e)) return n;
    for (const [o, h] of Object.entries(e)){
        const p = Zi(o) ? [
            o
        ] : h.chains, b = h.methods || [], m = h.events || [], w = vo(o);
        n[w] = Hu(Ku({}, n[w]), {
            chains: ge(p, (t = n[w]) == null ? void 0 : t.chains),
            methods: ge(b, (r = n[w]) == null ? void 0 : r.methods),
            events: ge(m, (i = n[w]) == null ? void 0 : i.events)
        });
    }
    return n;
}
function mo(e) {
    const t = {};
    return e?.forEach((r)=>{
        const [i, n] = r.split(":");
        t[i] || (t[i] = {
            accounts: [],
            chains: [],
            events: []
        }), t[i].accounts.push(r), t[i].chains.push(`${i}:${n}`);
    }), t;
}
function ju(e, t) {
    t = t.map((i)=>i.replace("did:pkh:", ""));
    const r = mo(t);
    for (const [i, n] of Object.entries(r))n.methods ? n.methods = ge(n.methods, e) : n.methods = e, n.events = [
        "chainChanged",
        "accountsChanged"
    ];
    return r;
}
const go = {
    INVALID_METHOD: {
        message: "Invalid method.",
        code: 1001
    },
    INVALID_EVENT: {
        message: "Invalid event.",
        code: 1002
    },
    INVALID_UPDATE_REQUEST: {
        message: "Invalid update request.",
        code: 1003
    },
    INVALID_EXTEND_REQUEST: {
        message: "Invalid extend request.",
        code: 1004
    },
    INVALID_SESSION_SETTLE_REQUEST: {
        message: "Invalid session settle request.",
        code: 1005
    },
    UNAUTHORIZED_METHOD: {
        message: "Unauthorized method.",
        code: 3001
    },
    UNAUTHORIZED_EVENT: {
        message: "Unauthorized event.",
        code: 3002
    },
    UNAUTHORIZED_UPDATE_REQUEST: {
        message: "Unauthorized update request.",
        code: 3003
    },
    UNAUTHORIZED_EXTEND_REQUEST: {
        message: "Unauthorized extend request.",
        code: 3004
    },
    USER_REJECTED: {
        message: "User rejected.",
        code: 5e3
    },
    USER_REJECTED_CHAINS: {
        message: "User rejected chains.",
        code: 5001
    },
    USER_REJECTED_METHODS: {
        message: "User rejected methods.",
        code: 5002
    },
    USER_REJECTED_EVENTS: {
        message: "User rejected events.",
        code: 5003
    },
    UNSUPPORTED_CHAINS: {
        message: "Unsupported chains.",
        code: 5100
    },
    UNSUPPORTED_METHODS: {
        message: "Unsupported methods.",
        code: 5101
    },
    UNSUPPORTED_EVENTS: {
        message: "Unsupported events.",
        code: 5102
    },
    UNSUPPORTED_ACCOUNTS: {
        message: "Unsupported accounts.",
        code: 5103
    },
    UNSUPPORTED_NAMESPACE_KEY: {
        message: "Unsupported namespace key.",
        code: 5104
    },
    USER_DISCONNECTED: {
        message: "User disconnected.",
        code: 6e3
    },
    SESSION_SETTLEMENT_FAILED: {
        message: "Session settlement failed.",
        code: 7e3
    },
    WC_METHOD_UNSUPPORTED: {
        message: "Unsupported wc_ method.",
        code: 10001
    }
}, Ao = {
    NOT_INITIALIZED: {
        message: "Not initialized.",
        code: 1
    },
    NO_MATCHING_KEY: {
        message: "No matching key.",
        code: 2
    },
    RESTORE_WILL_OVERRIDE: {
        message: "Restore will override.",
        code: 3
    },
    RESUBSCRIBED: {
        message: "Resubscribed.",
        code: 4
    },
    MISSING_OR_INVALID: {
        message: "Missing or invalid.",
        code: 5
    },
    EXPIRED: {
        message: "Expired.",
        code: 6
    },
    UNKNOWN_TYPE: {
        message: "Unknown type.",
        code: 7
    },
    MISMATCHED_TOPIC: {
        message: "Mismatched topic.",
        code: 8
    },
    NON_CONFORMING_NAMESPACES: {
        message: "Non conforming namespaces.",
        code: 9
    }
};
function xe(e, t) {
    const { message: r, code: i } = Ao[e];
    return {
        message: t ? `${r} ${t}` : r,
        code: i
    };
}
function tr(e, t) {
    const { message: r, code: i } = go[e];
    return {
        message: t ? `${r} ${t}` : r,
        code: i
    };
}
function Er(e, t) {
    return Array.isArray(e) ? typeof t < "u" && e.length ? e.every(t) : !0 : !1;
}
function Yr(e) {
    return Object.getPrototypeOf(e) === Object.prototype && Object.keys(e).length;
}
function Pe(e) {
    return typeof e > "u";
}
function Gt(e, t) {
    return t && Pe(e) ? !0 : typeof e == "string" && !!e.trim().length;
}
function Vr(e, t) {
    return t && Pe(e) ? !0 : typeof e == "number" && !isNaN(e);
}
function Qu(e, t) {
    const { requiredNamespaces: r } = t, i = Object.keys(e.namespaces), n = Object.keys(r);
    let o = !0;
    return _e(n, i) ? (i.forEach((h)=>{
        const { accounts: p, methods: b, events: m } = e.namespaces[h], w = $e(p), y = r[h];
        (!_e(_r(h, y), w) || !_e(y.methods, b) || !_e(y.events, m)) && (o = !1);
    }), o) : !1;
}
function Sr(e) {
    return Gt(e, !1) && e.includes(":") ? e.split(":").length === 2 : !1;
}
function bo(e) {
    if (Gt(e, !1) && e.includes(":")) {
        const t = e.split(":");
        if (t.length === 3) {
            const r = t[0] + ":" + t[1];
            return !!t[2] && Sr(r);
        }
    }
    return !1;
}
function Ju(e) {
    if (Gt(e, !1)) try {
        return typeof new URL(e) < "u";
    } catch  {
        return !1;
    }
    return !1;
}
function Gu(e) {
    var t;
    return (t = e?.proposer) == null ? void 0 : t.publicKey;
}
function Yu(e) {
    return e?.topic;
}
function Vu(e, t) {
    let r = null;
    return Gt(e?.publicKey, !1) || (r = xe("MISSING_OR_INVALID", `${t} controller public key should be a string`)), r;
}
function tn(e) {
    let t = !0;
    return Er(e) ? e.length && (t = e.every((r)=>Gt(r, !1))) : t = !1, t;
}
function yo(e, t, r) {
    let i = null;
    return Er(t) && t.length ? t.forEach((n)=>{
        i || Sr(n) || (i = tr("UNSUPPORTED_CHAINS", `${r}, chain ${n} should be a string and conform to "namespace:chainId" format`));
    }) : Sr(e) || (i = tr("UNSUPPORTED_CHAINS", `${r}, chains must be defined as "namespace:chainId" e.g. "eip155:1": {...} in the namespace key OR as an array of CAIP-2 chainIds e.g. eip155: { chains: ["eip155:1", "eip155:5"] }`)), i;
}
function wo(e, t, r) {
    let i = null;
    return Object.entries(e).forEach(([n, o])=>{
        if (i) return;
        const h = yo(n, _r(n, o), `${t} ${r}`);
        h && (i = h);
    }), i;
}
function xo(e, t) {
    let r = null;
    return Er(e) ? e.forEach((i)=>{
        r || bo(i) || (r = tr("UNSUPPORTED_ACCOUNTS", `${t}, account ${i} should be a string and conform to "namespace:chainId:address" format`));
    }) : r = tr("UNSUPPORTED_ACCOUNTS", `${t}, accounts should be an array of strings conforming to "namespace:chainId:address" format`), r;
}
function Mo(e, t) {
    let r = null;
    return Object.values(e).forEach((i)=>{
        if (r) return;
        const n = xo(i?.accounts, `${t} namespace`);
        n && (r = n);
    }), r;
}
function Eo(e, t) {
    let r = null;
    return tn(e?.methods) ? tn(e?.events) || (r = tr("UNSUPPORTED_EVENTS", `${t}, events should be an array of strings or empty array for no events`)) : r = tr("UNSUPPORTED_METHODS", `${t}, methods should be an array of strings or empty array for no methods`), r;
}
function en(e, t) {
    let r = null;
    return Object.values(e).forEach((i)=>{
        if (r) return;
        const n = Eo(i, `${t}, namespace`);
        n && (r = n);
    }), r;
}
function Wu(e, t, r) {
    let i = null;
    if (e && Yr(e)) {
        const n = en(e, t);
        n && (i = n);
        const o = wo(e, t, r);
        o && (i = o);
    } else i = xe("MISSING_OR_INVALID", `${t}, ${r} should be an object with data`);
    return i;
}
function So(e, t) {
    let r = null;
    if (e && Yr(e)) {
        const i = en(e, t);
        i && (r = i);
        const n = Mo(e, t);
        n && (r = n);
    } else r = xe("MISSING_OR_INVALID", `${t}, namespaces should be an object with data`);
    return r;
}
function No(e) {
    return Gt(e.protocol, !0);
}
function Xu(e, t) {
    let r = !1;
    return t && !e ? r = !0 : e && Er(e) && e.length && e.forEach((i)=>{
        r = No(i);
    }), r;
}
function Zu(e) {
    return typeof e == "number";
}
function $u(e) {
    return typeof e < "u" && typeof e !== null;
}
function th(e) {
    return !(!e || typeof e != "object" || !e.code || !Vr(e.code, !1) || !e.message || !Gt(e.message, !1));
}
function eh(e) {
    return !(Pe(e) || !Gt(e.method, !1));
}
function rh(e) {
    return !(Pe(e) || Pe(e.result) && Pe(e.error) || !Vr(e.id, !1) || !Gt(e.jsonrpc, !1));
}
function ih(e) {
    return !(Pe(e) || !Gt(e.name, !1));
}
function nh(e, t) {
    return !(!Sr(t) || !co(e).includes(t));
}
function fh(e, t, r) {
    return Gt(r, !1) ? lo(e, t).includes(r) : !1;
}
function oh(e, t, r) {
    return Gt(r, !1) ? po(e, t).includes(r) : !1;
}
function Io(e, t, r) {
    let i = null;
    const n = sh(e), o = ah(t), h = Object.keys(n), p = Object.keys(o), b = _o(Object.keys(e)), m = _o(Object.keys(t)), w = b.filter((y)=>!m.includes(y));
    return w.length && (i = xe("NON_CONFORMING_NAMESPACES", `${r} namespaces keys don't satisfy requiredNamespaces.
      Required: ${w.toString()}
      Received: ${Object.keys(t).toString()}`)), _e(h, p) || (i = xe("NON_CONFORMING_NAMESPACES", `${r} namespaces chains don't satisfy required namespaces.
      Required: ${h.toString()}
      Approved: ${p.toString()}`)), Object.keys(t).forEach((y)=>{
        if (!y.includes(":") || i) return;
        const S = $e(t[y].accounts);
        S.includes(y) || (i = xe("NON_CONFORMING_NAMESPACES", `${r} namespaces accounts don't satisfy namespace accounts for ${y}
        Required: ${y}
        Approved: ${S.toString()}`));
    }), h.forEach((y)=>{
        i || (_e(n[y].methods, o[y].methods) ? _e(n[y].events, o[y].events) || (i = xe("NON_CONFORMING_NAMESPACES", `${r} namespaces events don't satisfy namespace events for ${y}`)) : i = xe("NON_CONFORMING_NAMESPACES", `${r} namespaces methods don't satisfy namespace methods for ${y}`));
    }), i;
}
function sh(e) {
    const t = {};
    return Object.keys(e).forEach((r)=>{
        var i;
        r.includes(":") ? t[r] = e[r] : (i = e[r].chains) == null || i.forEach((n)=>{
            t[n] = {
                methods: e[r].methods,
                events: e[r].events
            };
        });
    }), t;
}
function _o(e) {
    return [
        ...new Set(e.map((t)=>t.includes(":") ? t.split(":")[0] : t))
    ];
}
function ah(e) {
    const t = {};
    return Object.keys(e).forEach((r)=>{
        if (r.includes(":")) t[r] = e[r];
        else {
            const i = $e(e[r].accounts);
            i?.forEach((n)=>{
                t[n] = {
                    accounts: e[r].accounts.filter((o)=>o.includes(`${n}:`)),
                    methods: e[r].methods,
                    events: e[r].events
                };
            });
        }
    }), t;
}
function uh(e, t) {
    return Vr(e, !1) && e <= t.max && e >= t.min;
}
function hh() {
    const e = We();
    return new Promise((t)=>{
        switch(e){
            case qt.browser:
                t(Bo());
                break;
            case qt.reactNative:
                t(Co());
                break;
            case qt.node:
                t(Ro());
                break;
            default:
                t(!0);
        }
    });
}
function Bo() {
    return pr() && navigator?.onLine;
}
async function Co() {
    if (er() && typeof global < "u" && global != null && global.NetInfo) {
        const e = await (global == null ? void 0 : global.NetInfo.fetch());
        return e?.isConnected;
    }
    return !0;
}
function Ro() {
    return !0;
}
function ch(e) {
    switch(We()){
        case qt.browser:
            Oo(e);
            break;
        case qt.reactNative:
            Po(e);
            break;
        case qt.node:
            break;
    }
}
function Oo(e) {
    !er() && pr() && (window.addEventListener("online", ()=>e(!0)), window.addEventListener("offline", ()=>e(!1)));
}
function Po(e) {
    er() && typeof global < "u" && global != null && global.NetInfo && global?.NetInfo.addEventListener((t)=>e(t?.isConnected));
}
const rn = {};
class lh {
    static get(t) {
        return rn[t];
    }
    static set(t, r) {
        rn[t] = r;
    }
    static delete(t) {
        delete rn[t];
    }
}
;
 //# sourceMappingURL=index.es.js.map

})()),
}]);

//# sourceMappingURL=1b84e_%40walletconnect_utils_dist_index_es_10fc75.js.map