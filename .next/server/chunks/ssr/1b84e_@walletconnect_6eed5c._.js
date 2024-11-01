module.exports = {

"[project]/node_modules/@web3modal/wagmi/node_modules/@walletconnect/modal-core/dist/index.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "ConfigCtrl": ()=>y,
    "CoreUtil": ()=>a,
    "EventsCtrl": ()=>R,
    "ExplorerCtrl": ()=>te,
    "ModalCtrl": ()=>se,
    "OptionsCtrl": ()=>p,
    "RouterCtrl": ()=>T,
    "ThemeCtrl": ()=>ne,
    "ToastCtrl": ()=>oe
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/valtio/esm/vanilla.mjs [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const o = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proxy"])({
    history: [
        "ConnectWallet"
    ],
    view: "ConnectWallet",
    data: void 0
}), T = {
    state: o,
    subscribe (e) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["subscribe"])(o, ()=>e(o));
    },
    push (e, t) {
        e !== o.view && (o.view = e, t && (o.data = t), o.history.push(e));
    },
    reset (e) {
        o.view = e, o.history = [
            e
        ];
    },
    replace (e) {
        o.history.length > 1 && (o.history[o.history.length - 1] = e, o.view = e);
    },
    goBack () {
        if (o.history.length > 1) {
            o.history.pop();
            const [e] = o.history.slice(-1);
            o.view = e;
        }
    },
    setData (e) {
        o.data = e;
    }
}, a = {
    WALLETCONNECT_DEEPLINK_CHOICE: "WALLETCONNECT_DEEPLINK_CHOICE",
    WCM_VERSION: "WCM_VERSION",
    RECOMMENDED_WALLET_AMOUNT: 9,
    isMobile () {
        return typeof window < "u" ? Boolean(window.matchMedia("(pointer:coarse)").matches || /Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent)) : !1;
    },
    isAndroid () {
        return a.isMobile() && navigator.userAgent.toLowerCase().includes("android");
    },
    isIos () {
        const e = navigator.userAgent.toLowerCase();
        return a.isMobile() && (e.includes("iphone") || e.includes("ipad"));
    },
    isHttpUrl (e) {
        return e.startsWith("http://") || e.startsWith("https://");
    },
    isArray (e) {
        return Array.isArray(e) && e.length > 0;
    },
    formatNativeUrl (e, t, s) {
        if (a.isHttpUrl(e)) return this.formatUniversalUrl(e, t, s);
        let n = e;
        n.includes("://") || (n = e.replaceAll("/", "").replaceAll(":", ""), n = `${n}://`), n.endsWith("/") || (n = `${n}/`), this.setWalletConnectDeepLink(n, s);
        const i = encodeURIComponent(t);
        return `${n}wc?uri=${i}`;
    },
    formatUniversalUrl (e, t, s) {
        if (!a.isHttpUrl(e)) return this.formatNativeUrl(e, t, s);
        let n = e;
        n.endsWith("/") || (n = `${n}/`), this.setWalletConnectDeepLink(n, s);
        const i = encodeURIComponent(t);
        return `${n}wc?uri=${i}`;
    },
    async wait (e) {
        return new Promise((t)=>{
            setTimeout(t, e);
        });
    },
    openHref (e, t) {
        window.open(e, t, "noreferrer noopener");
    },
    setWalletConnectDeepLink (e, t) {
        try {
            localStorage.setItem(a.WALLETCONNECT_DEEPLINK_CHOICE, JSON.stringify({
                href: e,
                name: t
            }));
        } catch  {
            console.info("Unable to set WalletConnect deep link");
        }
    },
    setWalletConnectAndroidDeepLink (e) {
        try {
            const [t] = e.split("?");
            localStorage.setItem(a.WALLETCONNECT_DEEPLINK_CHOICE, JSON.stringify({
                href: t,
                name: "Android"
            }));
        } catch  {
            console.info("Unable to set WalletConnect android deep link");
        }
    },
    removeWalletConnectDeepLink () {
        try {
            localStorage.removeItem(a.WALLETCONNECT_DEEPLINK_CHOICE);
        } catch  {
            console.info("Unable to remove WalletConnect deep link");
        }
    },
    setModalVersionInStorage () {
        try {
            typeof localStorage < "u" && localStorage.setItem(a.WCM_VERSION, "2.6.2");
        } catch  {
            console.info("Unable to set Web3Modal version in storage");
        }
    },
    getWalletRouterData () {
        var e;
        const t = (e = T.state.data) == null ? void 0 : e.Wallet;
        if (!t) throw new Error('Missing "Wallet" view data');
        return t;
    }
}, _ = typeof location < "u" && (location.hostname.includes("localhost") || location.protocol.includes("https")), r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proxy"])({
    enabled: _,
    userSessionId: "",
    events: [],
    connectedWalletId: void 0
}), R = {
    state: r,
    subscribe (e) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["subscribe"])(r.events, ()=>e((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["snapshot"])(r.events[r.events.length - 1])));
    },
    initialize () {
        r.enabled && typeof (crypto == null ? void 0 : crypto.randomUUID) < "u" && (r.userSessionId = crypto.randomUUID());
    },
    setConnectedWalletId (e) {
        r.connectedWalletId = e;
    },
    click (e) {
        if (r.enabled) {
            const t = {
                type: "CLICK",
                name: e.name,
                userSessionId: r.userSessionId,
                timestamp: Date.now(),
                data: e
            };
            r.events.push(t);
        }
    },
    track (e) {
        if (r.enabled) {
            const t = {
                type: "TRACK",
                name: e.name,
                userSessionId: r.userSessionId,
                timestamp: Date.now(),
                data: e
            };
            r.events.push(t);
        }
    },
    view (e) {
        if (r.enabled) {
            const t = {
                type: "VIEW",
                name: e.name,
                userSessionId: r.userSessionId,
                timestamp: Date.now(),
                data: e
            };
            r.events.push(t);
        }
    }
}, c = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proxy"])({
    chains: void 0,
    walletConnectUri: void 0,
    isAuth: !1,
    isCustomDesktop: !1,
    isCustomMobile: !1,
    isDataLoaded: !1,
    isUiLoaded: !1
}), p = {
    state: c,
    subscribe (e) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["subscribe"])(c, ()=>e(c));
    },
    setChains (e) {
        c.chains = e;
    },
    setWalletConnectUri (e) {
        c.walletConnectUri = e;
    },
    setIsCustomDesktop (e) {
        c.isCustomDesktop = e;
    },
    setIsCustomMobile (e) {
        c.isCustomMobile = e;
    },
    setIsDataLoaded (e) {
        c.isDataLoaded = e;
    },
    setIsUiLoaded (e) {
        c.isUiLoaded = e;
    },
    setIsAuth (e) {
        c.isAuth = e;
    }
}, W = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proxy"])({
    projectId: "",
    mobileWallets: void 0,
    desktopWallets: void 0,
    walletImages: void 0,
    chains: void 0,
    enableAuthMode: !1,
    enableExplorer: !0,
    explorerExcludedWalletIds: void 0,
    explorerRecommendedWalletIds: void 0,
    termsOfServiceUrl: void 0,
    privacyPolicyUrl: void 0
}), y = {
    state: W,
    subscribe (e) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["subscribe"])(W, ()=>e(W));
    },
    setConfig (e) {
        var t, s;
        R.initialize(), p.setChains(e.chains), p.setIsAuth(Boolean(e.enableAuthMode)), p.setIsCustomMobile(Boolean((t = e.mobileWallets) == null ? void 0 : t.length)), p.setIsCustomDesktop(Boolean((s = e.desktopWallets) == null ? void 0 : s.length)), a.setModalVersionInStorage(), Object.assign(W, e);
    }
};
var V = Object.defineProperty, D = Object.getOwnPropertySymbols, H = Object.prototype.hasOwnProperty, B = Object.prototype.propertyIsEnumerable, M = (e, t, s)=>t in e ? V(e, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: s
    }) : e[t] = s, K = (e, t)=>{
    for(var s in t || (t = {}))H.call(t, s) && M(e, s, t[s]);
    if (D) for (var s of D(t))B.call(t, s) && M(e, s, t[s]);
    return e;
};
const L = "https://explorer-api.walletconnect.com", E = "wcm", O = "js-2.6.2";
async function w(e, t) {
    const s = K({
        sdkType: E,
        sdkVersion: O
    }, t), n = new URL(e, L);
    return n.searchParams.append("projectId", y.state.projectId), Object.entries(s).forEach(([i, l])=>{
        l && n.searchParams.append(i, String(l));
    }), (await fetch(n)).json();
}
const m = {
    async getDesktopListings (e) {
        return w("/w3m/v1/getDesktopListings", e);
    },
    async getMobileListings (e) {
        return w("/w3m/v1/getMobileListings", e);
    },
    async getInjectedListings (e) {
        return w("/w3m/v1/getInjectedListings", e);
    },
    async getAllListings (e) {
        return w("/w3m/v1/getAllListings", e);
    },
    getWalletImageUrl (e) {
        return `${L}/w3m/v1/getWalletImage/${e}?projectId=${y.state.projectId}&sdkType=${E}&sdkVersion=${O}`;
    },
    getAssetImageUrl (e) {
        return `${L}/w3m/v1/getAssetImage/${e}?projectId=${y.state.projectId}&sdkType=${E}&sdkVersion=${O}`;
    }
};
var z = Object.defineProperty, j = Object.getOwnPropertySymbols, J = Object.prototype.hasOwnProperty, q = Object.prototype.propertyIsEnumerable, k = (e, t, s)=>t in e ? z(e, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: s
    }) : e[t] = s, F = (e, t)=>{
    for(var s in t || (t = {}))J.call(t, s) && k(e, s, t[s]);
    if (j) for (var s of j(t))q.call(t, s) && k(e, s, t[s]);
    return e;
};
const N = a.isMobile(), d = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proxy"])({
    wallets: {
        listings: [],
        total: 0,
        page: 1
    },
    search: {
        listings: [],
        total: 0,
        page: 1
    },
    recomendedWallets: []
}), te = {
    state: d,
    async getRecomendedWallets () {
        const { explorerRecommendedWalletIds: e, explorerExcludedWalletIds: t } = y.state;
        if (e === "NONE" || t === "ALL" && !e) return d.recomendedWallets;
        if (a.isArray(e)) {
            const s = {
                recommendedIds: e.join(",")
            }, { listings: n } = await m.getAllListings(s), i = Object.values(n);
            i.sort((l, v)=>{
                const b = e.indexOf(l.id), f = e.indexOf(v.id);
                return b - f;
            }), d.recomendedWallets = i;
        } else {
            const { chains: s, isAuth: n } = p.state, i = s?.join(","), l = a.isArray(t), v = {
                page: 1,
                sdks: n ? "auth_v1" : void 0,
                entries: a.RECOMMENDED_WALLET_AMOUNT,
                chains: i,
                version: 2,
                excludedIds: l ? t.join(",") : void 0
            }, { listings: b } = N ? await m.getMobileListings(v) : await m.getDesktopListings(v);
            d.recomendedWallets = Object.values(b);
        }
        return d.recomendedWallets;
    },
    async getWallets (e) {
        const t = F({}, e), { explorerRecommendedWalletIds: s, explorerExcludedWalletIds: n } = y.state, { recomendedWallets: i } = d;
        if (n === "ALL") return d.wallets;
        i.length ? t.excludedIds = i.map((x)=>x.id).join(",") : a.isArray(s) && (t.excludedIds = s.join(",")), a.isArray(n) && (t.excludedIds = [
            t.excludedIds,
            n
        ].filter(Boolean).join(",")), p.state.isAuth && (t.sdks = "auth_v1");
        const { page: l, search: v } = e, { listings: b, total: f } = N ? await m.getMobileListings(t) : await m.getDesktopListings(t), A = Object.values(b), U = v ? "search" : "wallets";
        return d[U] = {
            listings: [
                ...d[U].listings,
                ...A
            ],
            total: f,
            page: l ?? 1
        }, {
            listings: A,
            total: f
        };
    },
    getWalletImageUrl (e) {
        return m.getWalletImageUrl(e);
    },
    getAssetImageUrl (e) {
        return m.getAssetImageUrl(e);
    },
    resetSearch () {
        d.search = {
            listings: [],
            total: 0,
            page: 1
        };
    }
}, I = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proxy"])({
    open: !1
}), se = {
    state: I,
    subscribe (e) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["subscribe"])(I, ()=>e(I));
    },
    async open (e) {
        return new Promise((t)=>{
            const { isUiLoaded: s, isDataLoaded: n } = p.state;
            if (a.removeWalletConnectDeepLink(), p.setWalletConnectUri(e?.uri), p.setChains(e?.chains), T.reset("ConnectWallet"), s && n) I.open = !0, t();
            else {
                const i = setInterval(()=>{
                    const l = p.state;
                    l.isUiLoaded && l.isDataLoaded && (clearInterval(i), I.open = !0, t());
                }, 200);
            }
        });
    },
    close () {
        I.open = !1;
    }
};
var G = Object.defineProperty, $ = Object.getOwnPropertySymbols, Q = Object.prototype.hasOwnProperty, X = Object.prototype.propertyIsEnumerable, S = (e, t, s)=>t in e ? G(e, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: s
    }) : e[t] = s, Y = (e, t)=>{
    for(var s in t || (t = {}))Q.call(t, s) && S(e, s, t[s]);
    if ($) for (var s of $(t))X.call(t, s) && S(e, s, t[s]);
    return e;
};
function Z() {
    return typeof matchMedia < "u" && matchMedia("(prefers-color-scheme: dark)").matches;
}
const C = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proxy"])({
    themeMode: Z() ? "dark" : "light"
}), ne = {
    state: C,
    subscribe (e) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["subscribe"])(C, ()=>e(C));
    },
    setThemeConfig (e) {
        const { themeMode: t, themeVariables: s } = e;
        t && (C.themeMode = t), s && (C.themeVariables = Y({}, s));
    }
}, g = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proxy"])({
    open: !1,
    message: "",
    variant: "success"
}), oe = {
    state: g,
    subscribe (e) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$valtio$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["subscribe"])(g, ()=>e(g));
    },
    openToast (e, t) {
        g.open = !0, g.message = e, g.variant = t;
    },
    closeToast () {
        g.open = !1;
    }
};
;
 //# sourceMappingURL=index.js.map

})()),
"[project]/node_modules/@web3modal/wagmi/node_modules/@walletconnect/modal/dist/index.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "WalletConnectModal": ()=>d
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$modal$2d$core$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@web3modal/wagmi/node_modules/@walletconnect/modal-core/dist/index.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
class d {
    constructor(e){
        this.openModal = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$modal$2d$core$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ModalCtrl"].open, this.closeModal = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$modal$2d$core$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ModalCtrl"].close, this.subscribeModal = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$modal$2d$core$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ModalCtrl"].subscribe, this.setTheme = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$modal$2d$core$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ThemeCtrl"].setThemeConfig, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$modal$2d$core$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ThemeCtrl"].setThemeConfig(e), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$modal$2d$core$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ConfigCtrl"].setConfig(e), this.initUi();
    }
    async initUi() {
        if (typeof window < "u") {
            await __turbopack_require__("[project]/node_modules/@web3modal/wagmi/node_modules/@walletconnect/modal-ui/dist/index.js [app-ssr] (ecmascript, async loader)")(__turbopack_import__);
            const e = document.createElement("wcm-modal");
            document.body.insertAdjacentElement("beforeend", e), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$modal$2d$core$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OptionsCtrl"].setIsUiLoaded(!0);
        }
    }
}
;
 //# sourceMappingURL=index.js.map

})()),

};

//# sourceMappingURL=1b84e_%40walletconnect_6eed5c._.js.map