module.exports = {

"[project]/node_modules/@web3modal/wagmi/node_modules/@walletconnect/sign-client/dist/index.es.js [app-rsc] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "AUTH_CONTEXT": ()=>He,
    "AUTH_KEYS_CONTEXT": ()=>Ye,
    "AUTH_PAIRING_TOPIC_CONTEXT": ()=>Xe,
    "AUTH_PROTOCOL": ()=>ze,
    "AUTH_PUBLIC_KEY_NAME": ()=>J,
    "AUTH_REQUEST_CONTEXT": ()=>Je,
    "AUTH_STORAGE_PREFIX": ()=>X,
    "AUTH_VERSION": ()=>Ht,
    "ENGINE_CONTEXT": ()=>Fe,
    "ENGINE_QUEUE_STATES": ()=>D,
    "ENGINE_RPC_OPTS": ()=>f,
    "HISTORY_CONTEXT": ()=>Qt,
    "HISTORY_EVENTS": ()=>Ft,
    "HISTORY_STORAGE_VERSION": ()=>jt,
    "METHODS_TO_VERIFY": ()=>je,
    "PROPOSAL_CONTEXT": ()=>Ue,
    "PROPOSAL_EXPIRY": ()=>zt,
    "PROPOSAL_EXPIRY_MESSAGE": ()=>Ge,
    "REQUEST_CONTEXT": ()=>Qe,
    "SESSION_CONTEXT": ()=>ke,
    "SESSION_EXPIRY": ()=>L,
    "SESSION_REQUEST_EXPIRY_BOUNDARIES": ()=>ne,
    "SIGN_CLIENT_CONTEXT": ()=>Se,
    "SIGN_CLIENT_DEFAULT": ()=>re,
    "SIGN_CLIENT_EVENTS": ()=>Gt,
    "SIGN_CLIENT_PROTOCOL": ()=>Re,
    "SIGN_CLIENT_STORAGE_OPTIONS": ()=>kt,
    "SIGN_CLIENT_STORAGE_PREFIX": ()=>ie,
    "SIGN_CLIENT_VERSION": ()=>Ee,
    "SessionStore": ()=>os,
    "SignClient": ()=>as,
    "WALLETCONNECT_DEEPLINK_CHOICE": ()=>_e,
    "default": ()=>oe
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$core$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@web3modal/wagmi/node_modules/@walletconnect/core/dist/index.es.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$logger$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@walletconnect/logger/dist/index.es.js [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pino$2f$pino$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__pino$3e$__ = __turbopack_import__("[project]/node_modules/pino/pino.js [app-rsc] (ecmascript) <export default as pino>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$logger$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/@walletconnect/logger/dist/index.es.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$types$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@web3modal/wagmi/node_modules/@walletconnect/types/dist/index.es.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@web3modal/wagmi/node_modules/@walletconnect/utils/dist/index.es.js [app-rsc] (ecmascript)");
var __TURBOPACK__commonjs__external__events__ = __turbopack_external_require__("events", true);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@walletconnect/time/dist/cjs/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@walletconnect/jsonrpc-utils/dist/esm/index.js [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$format$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@walletconnect/jsonrpc-utils/dist/esm/format.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$validators$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@walletconnect/jsonrpc-utils/dist/esm/validators.js [app-rsc] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
;
;
;
const Re = "wc", Ee = 2, Se = "client", ie = `${Re}@${Ee}:${Se}:`, re = {
    name: Se,
    logger: "error",
    controller: !1,
    relayUrl: "wss://relay.walletconnect.com"
}, Gt = {
    session_proposal: "session_proposal",
    session_update: "session_update",
    session_extend: "session_extend",
    session_ping: "session_ping",
    session_delete: "session_delete",
    session_expire: "session_expire",
    session_request: "session_request",
    session_request_sent: "session_request_sent",
    session_event: "session_event",
    proposal_expire: "proposal_expire",
    session_authenticate: "session_authenticate",
    session_request_expire: "session_request_expire"
}, kt = {
    database: ":memory:"
}, _e = "WALLETCONNECT_DEEPLINK_CHOICE", Ft = {
    created: "history_created",
    updated: "history_updated",
    deleted: "history_deleted",
    sync: "history_sync"
}, Qt = "history", jt = "0.3", Ue = "proposal", zt = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["THIRTY_DAYS"], Ge = "Proposal expired", ke = "session", L = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SEVEN_DAYS"], Fe = "engine", f = {
    wc_sessionPropose: {
        req: {
            ttl: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FIVE_MINUTES"],
            prompt: !0,
            tag: 1100
        },
        res: {
            ttl: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FIVE_MINUTES"],
            prompt: !1,
            tag: 1101
        }
    },
    wc_sessionSettle: {
        req: {
            ttl: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FIVE_MINUTES"],
            prompt: !1,
            tag: 1102
        },
        res: {
            ttl: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FIVE_MINUTES"],
            prompt: !1,
            tag: 1103
        }
    },
    wc_sessionUpdate: {
        req: {
            ttl: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ONE_DAY"],
            prompt: !1,
            tag: 1104
        },
        res: {
            ttl: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ONE_DAY"],
            prompt: !1,
            tag: 1105
        }
    },
    wc_sessionExtend: {
        req: {
            ttl: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ONE_DAY"],
            prompt: !1,
            tag: 1106
        },
        res: {
            ttl: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ONE_DAY"],
            prompt: !1,
            tag: 1107
        }
    },
    wc_sessionRequest: {
        req: {
            ttl: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FIVE_MINUTES"],
            prompt: !0,
            tag: 1108
        },
        res: {
            ttl: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FIVE_MINUTES"],
            prompt: !1,
            tag: 1109
        }
    },
    wc_sessionEvent: {
        req: {
            ttl: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FIVE_MINUTES"],
            prompt: !0,
            tag: 1110
        },
        res: {
            ttl: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FIVE_MINUTES"],
            prompt: !1,
            tag: 1111
        }
    },
    wc_sessionDelete: {
        req: {
            ttl: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ONE_DAY"],
            prompt: !1,
            tag: 1112
        },
        res: {
            ttl: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ONE_DAY"],
            prompt: !1,
            tag: 1113
        }
    },
    wc_sessionPing: {
        req: {
            ttl: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ONE_DAY"],
            prompt: !1,
            tag: 1114
        },
        res: {
            ttl: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ONE_DAY"],
            prompt: !1,
            tag: 1115
        }
    },
    wc_sessionAuthenticate: {
        req: {
            ttl: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ONE_HOUR"],
            prompt: !0,
            tag: 1116
        },
        res: {
            ttl: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ONE_HOUR"],
            prompt: !1,
            tag: 1117
        }
    }
}, ne = {
    min: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FIVE_MINUTES"],
    max: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SEVEN_DAYS"]
}, D = {
    idle: "IDLE",
    active: "ACTIVE"
}, Qe = "request", je = [
    "wc_sessionPropose",
    "wc_sessionRequest",
    "wc_authRequest"
], ze = "wc", Ht = 1.5, He = "auth", Ye = "authKeys", Xe = "pairingTopics", Je = "requests", X = `${ze}@${1.5}:${He}:`, J = `${X}:PUB_KEY`;
var Yt = Object.defineProperty, Xt = Object.defineProperties, Jt = Object.getOwnPropertyDescriptors, Be = Object.getOwnPropertySymbols, Bt = Object.prototype.hasOwnProperty, Wt = Object.prototype.propertyIsEnumerable, We = (R, n, t)=>n in R ? Yt(R, n, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: t
    }) : R[n] = t, y = (R, n)=>{
    for(var t in n || (n = {}))Bt.call(n, t) && We(R, t, n[t]);
    if (Be) for (var t of Be(n))Wt.call(n, t) && We(R, t, n[t]);
    return R;
}, M = (R, n)=>Xt(R, Jt(n));
class Zt extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$types$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["IEngine"] {
    constructor(n){
        super(n), this.name = Fe, this.events = new __TURBOPACK__commonjs__external__events__["default"], this.initialized = !1, this.requestQueue = {
            state: D.idle,
            queue: []
        }, this.sessionRequestQueue = {
            state: D.idle,
            queue: []
        }, this.requestQueueDelay = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ONE_SECOND"], this.expectedPairingMethodMap = new Map, this.recentlyDeletedMap = new Map, this.recentlyDeletedLimit = 200, this.init = async ()=>{
            this.initialized || (await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.registerPairingEvents(), this.client.core.pairing.register({
                methods: Object.keys(f)
            }), this.initialized = !0, setTimeout(()=>{
                this.sessionRequestQueue.queue = this.getPendingSessionRequests(), this.processSessionRequestQueue();
            }, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["toMiliseconds"])(this.requestQueueDelay)));
        }, this.connect = async (t)=>{
            await this.isInitialized();
            const e = M(y({}, t), {
                requiredNamespaces: t.requiredNamespaces || {},
                optionalNamespaces: t.optionalNamespaces || {}
            });
            await this.isValidConnect(e);
            const { pairingTopic: s, requiredNamespaces: i, optionalNamespaces: r, sessionProperties: o, relays: a } = e;
            let c = s, h, p = !1;
            try {
                c && (p = this.client.core.pairing.pairings.get(c).active);
            } catch (P) {
                throw this.client.logger.error(`connect() -> pairing.get(${c}) failed`), P;
            }
            if (!c || !p) {
                const { topic: P, uri: v } = await this.client.core.pairing.create();
                c = P, h = v;
            }
            if (!c) {
                const { message: P } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getInternalError"])("NO_MATCHING_KEY", `connect() pairing topic: ${c}`);
                throw new Error(P);
            }
            const g = await this.client.core.crypto.generateKeyPair(), d = f.wc_sessionPropose.req.ttl || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FIVE_MINUTES"], w = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["calcExpiry"])(d), m = y({
                requiredNamespaces: i,
                optionalNamespaces: r,
                relays: a ?? [
                    {
                        protocol: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$core$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RELAYER_DEFAULT_PROTOCOL"]
                    }
                ],
                proposer: {
                    publicKey: g,
                    metadata: this.client.metadata
                },
                expiryTimestamp: w
            }, o && {
                sessionProperties: o
            }), { reject: E, resolve: O, done: S } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createDelayedPromise"])(d, Ge);
            this.events.once((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["engineEvent"])("session_connect"), async ({ error: P, session: v })=>{
                if (P) E(P);
                else if (v) {
                    v.self.publicKey = g;
                    const B = M(y({}, v), {
                        requiredNamespaces: m.requiredNamespaces,
                        optionalNamespaces: m.optionalNamespaces
                    });
                    await this.client.session.set(v.topic, B), await this.setExpiry(v.topic, v.expiry), c && await this.client.core.pairing.updateMetadata({
                        topic: c,
                        metadata: v.peer.metadata
                    }), O(B);
                }
            });
            const N = await this.sendRequest({
                topic: c,
                method: "wc_sessionPropose",
                params: m,
                throwOnFailedPublish: !0
            });
            return await this.setProposal(N, y({
                id: N
            }, m)), {
                uri: h,
                approval: S
            };
        }, this.pair = async (t)=>{
            await this.isInitialized();
            try {
                return await this.client.core.pairing.pair(t);
            } catch (e) {
                throw this.client.logger.error("pair() failed"), e;
            }
        }, this.approve = async (t)=>{
            await this.isInitialized();
            try {
                await this.isValidApprove(t);
            } catch (S) {
                throw this.client.logger.error("approve() -> isValidApprove() failed"), S;
            }
            const { id: e, relayProtocol: s, namespaces: i, sessionProperties: r, sessionConfig: o } = t;
            let a;
            try {
                a = this.client.proposal.get(e);
            } catch (S) {
                throw this.client.logger.error(`approve() -> proposal.get(${e}) failed`), S;
            }
            let { pairingTopic: c, proposer: h, requiredNamespaces: p, optionalNamespaces: g } = a;
            c = c || "";
            const d = await this.client.core.crypto.generateKeyPair(), w = h.publicKey, m = await this.client.core.crypto.generateSharedKey(d, w), E = y(y({
                relay: {
                    protocol: s ?? "irn"
                },
                namespaces: i,
                pairingTopic: c,
                controller: {
                    publicKey: d,
                    metadata: this.client.metadata
                },
                expiry: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["calcExpiry"])(L)
            }, r && {
                sessionProperties: r
            }), o && {
                sessionConfig: o
            });
            await this.client.core.relayer.subscribe(m);
            const O = M(y({}, E), {
                topic: m,
                requiredNamespaces: p,
                optionalNamespaces: g,
                pairingTopic: c,
                acknowledged: !1,
                self: E.controller,
                peer: {
                    publicKey: h.publicKey,
                    metadata: h.metadata
                },
                controller: d
            });
            await this.client.session.set(m, O);
            try {
                await this.sendResult({
                    id: e,
                    topic: c,
                    result: {
                        relay: {
                            protocol: s ?? "irn"
                        },
                        responderPublicKey: d
                    },
                    throwOnFailedPublish: !0
                }), await this.sendRequest({
                    topic: m,
                    method: "wc_sessionSettle",
                    params: E,
                    throwOnFailedPublish: !0
                });
            } catch (S) {
                throw this.client.logger.error(S), this.client.session.delete(m, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSdkError"])("USER_DISCONNECTED")), await this.client.core.relayer.unsubscribe(m), S;
            }
            return await this.client.core.pairing.updateMetadata({
                topic: c,
                metadata: h.metadata
            }), await this.client.proposal.delete(e, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSdkError"])("USER_DISCONNECTED")), await this.client.core.pairing.activate({
                topic: c
            }), await this.setExpiry(m, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["calcExpiry"])(L)), {
                topic: m,
                acknowledged: ()=>new Promise((S)=>setTimeout(()=>S(this.client.session.get(m)), 500))
            };
        }, this.reject = async (t)=>{
            await this.isInitialized();
            try {
                await this.isValidReject(t);
            } catch (r) {
                throw this.client.logger.error("reject() -> isValidReject() failed"), r;
            }
            const { id: e, reason: s } = t;
            let i;
            try {
                i = this.client.proposal.get(e).pairingTopic;
            } catch (r) {
                throw this.client.logger.error(`reject() -> proposal.get(${e}) failed`), r;
            }
            i && (await this.sendError({
                id: e,
                topic: i,
                error: s
            }), await this.client.proposal.delete(e, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSdkError"])("USER_DISCONNECTED")));
        }, this.update = async (t)=>{
            await this.isInitialized();
            try {
                await this.isValidUpdate(t);
            } catch (p) {
                throw this.client.logger.error("update() -> isValidUpdate() failed"), p;
            }
            const { topic: e, namespaces: s } = t, { done: i, resolve: r, reject: o } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createDelayedPromise"])(), a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$format$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["payloadId"])(), c = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$format$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getBigIntRpcId"])().toString(), h = this.client.session.get(e).namespaces;
            return this.events.once((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["engineEvent"])("session_update", a), ({ error: p })=>{
                p ? o(p) : r();
            }), await this.client.session.update(e, {
                namespaces: s
            }), await this.sendRequest({
                topic: e,
                method: "wc_sessionUpdate",
                params: {
                    namespaces: s
                },
                throwOnFailedPublish: !0,
                clientRpcId: a,
                relayRpcId: c
            }).catch((p)=>{
                this.client.logger.error(p), this.client.session.update(e, {
                    namespaces: h
                }), o(p);
            }), {
                acknowledged: i
            };
        }, this.extend = async (t)=>{
            await this.isInitialized();
            try {
                await this.isValidExtend(t);
            } catch (a) {
                throw this.client.logger.error("extend() -> isValidExtend() failed"), a;
            }
            const { topic: e } = t, s = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$format$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["payloadId"])(), { done: i, resolve: r, reject: o } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createDelayedPromise"])();
            return this.events.once((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["engineEvent"])("session_extend", s), ({ error: a })=>{
                a ? o(a) : r();
            }), await this.setExpiry(e, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["calcExpiry"])(L)), this.sendRequest({
                topic: e,
                method: "wc_sessionExtend",
                params: {},
                clientRpcId: s,
                throwOnFailedPublish: !0
            }).catch((a)=>{
                o(a);
            }), {
                acknowledged: i
            };
        }, this.request = async (t)=>{
            await this.isInitialized();
            try {
                await this.isValidRequest(t);
            } catch (d) {
                throw this.client.logger.error("request() -> isValidRequest() failed"), d;
            }
            const { chainId: e, request: s, topic: i, expiry: r = f.wc_sessionRequest.req.ttl } = t, o = this.client.session.get(i), a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$format$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["payloadId"])(), c = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$format$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getBigIntRpcId"])().toString(), { done: h, resolve: p, reject: g } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createDelayedPromise"])(r, "Request expired. Please try again.");
            return this.events.once((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["engineEvent"])("session_request", a), ({ error: d, result: w })=>{
                d ? g(d) : p(w);
            }), await Promise.all([
                new Promise(async (d)=>{
                    await this.sendRequest({
                        clientRpcId: a,
                        relayRpcId: c,
                        topic: i,
                        method: "wc_sessionRequest",
                        params: {
                            request: M(y({}, s), {
                                expiryTimestamp: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["calcExpiry"])(r)
                            }),
                            chainId: e
                        },
                        expiry: r,
                        throwOnFailedPublish: !0
                    }).catch((w)=>g(w)), this.client.events.emit("session_request_sent", {
                        topic: i,
                        request: s,
                        chainId: e,
                        id: a
                    }), d();
                }),
                new Promise(async (d)=>{
                    var w;
                    if (!((w = o.sessionConfig) != null && w.disableDeepLink)) {
                        const m = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getDeepLink"])(this.client.core.storage, _e);
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["handleDeeplinkRedirect"])({
                            id: a,
                            topic: i,
                            wcDeepLink: m
                        });
                    }
                    d();
                }),
                h()
            ]).then((d)=>d[2]);
        }, this.respond = async (t)=>{
            await this.isInitialized(), await this.isValidRespond(t);
            const { topic: e, response: s } = t, { id: i } = s;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$validators$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isJsonRpcResult"])(s) ? await this.sendResult({
                id: i,
                topic: e,
                result: s.result,
                throwOnFailedPublish: !0
            }) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$validators$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isJsonRpcError"])(s) && await this.sendError({
                id: i,
                topic: e,
                error: s.error
            }), this.cleanupAfterResponse(t);
        }, this.ping = async (t)=>{
            await this.isInitialized();
            try {
                await this.isValidPing(t);
            } catch (s) {
                throw this.client.logger.error("ping() -> isValidPing() failed"), s;
            }
            const { topic: e } = t;
            if (this.client.session.keys.includes(e)) {
                const s = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$format$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["payloadId"])(), i = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$format$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getBigIntRpcId"])().toString(), { done: r, resolve: o, reject: a } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createDelayedPromise"])();
                this.events.once((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["engineEvent"])("session_ping", s), ({ error: c })=>{
                    c ? a(c) : o();
                }), await Promise.all([
                    this.sendRequest({
                        topic: e,
                        method: "wc_sessionPing",
                        params: {},
                        throwOnFailedPublish: !0,
                        clientRpcId: s,
                        relayRpcId: i
                    }),
                    r()
                ]);
            } else this.client.core.pairing.pairings.keys.includes(e) && await this.client.core.pairing.ping({
                topic: e
            });
        }, this.emit = async (t)=>{
            await this.isInitialized(), await this.isValidEmit(t);
            const { topic: e, event: s, chainId: i } = t, r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$format$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getBigIntRpcId"])().toString();
            await this.sendRequest({
                topic: e,
                method: "wc_sessionEvent",
                params: {
                    event: s,
                    chainId: i
                },
                throwOnFailedPublish: !0,
                relayRpcId: r
            });
        }, this.disconnect = async (t)=>{
            await this.isInitialized(), await this.isValidDisconnect(t);
            const { topic: e } = t;
            if (this.client.session.keys.includes(e)) await this.sendRequest({
                topic: e,
                method: "wc_sessionDelete",
                params: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSdkError"])("USER_DISCONNECTED"),
                throwOnFailedPublish: !0
            }), await this.deleteSession({
                topic: e,
                emitEvent: !1
            });
            else if (this.client.core.pairing.pairings.keys.includes(e)) await this.client.core.pairing.disconnect({
                topic: e
            });
            else {
                const { message: s } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getInternalError"])("MISMATCHED_TOPIC", `Session or pairing topic not found: ${e}`);
                throw new Error(s);
            }
        }, this.find = (t)=>(this.isInitialized(), this.client.session.getAll().filter((e)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isSessionCompatible"])(e, t))), this.getPendingSessionRequests = ()=>this.client.pendingRequest.getAll(), this.authenticate = async (t)=>{
            this.isInitialized(), this.isValidAuthenticate(t);
            const { chains: e, statement: s = "", uri: i, domain: r, nonce: o, type: a, exp: c, nbf: h, methods: p = [], expiry: g } = t, d = [
                ...t.resources || []
            ], { topic: w, uri: m } = await this.client.core.pairing.create({
                methods: [
                    "wc_sessionAuthenticate"
                ]
            });
            this.client.logger.info({
                message: "Generated new pairing",
                pairing: {
                    topic: w,
                    uri: m
                }
            });
            const E = await this.client.core.crypto.generateKeyPair(), O = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hashKey"])(E);
            if (await Promise.all([
                this.client.auth.authKeys.set(J, {
                    responseTopic: O,
                    publicKey: E
                }),
                this.client.auth.pairingTopics.set(O, {
                    topic: O,
                    pairingTopic: w
                })
            ]), await this.client.core.relayer.subscribe(O), this.client.logger.info(`sending request to new pairing topic: ${w}`), p.length > 0) {
                const { namespace: T } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseChainId"])(e[0]);
                let _ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createEncodedRecap"])(T, "request", p);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRecapFromResources"])(d) && (_ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["mergeEncodedRecaps"])(_, d.pop())), d.push(_);
            }
            const S = g && g > f.wc_sessionAuthenticate.req.ttl ? g : f.wc_sessionAuthenticate.req.ttl, N = {
                authPayload: {
                    type: a ?? "caip122",
                    chains: e,
                    statement: s,
                    aud: i,
                    domain: r,
                    version: "1",
                    nonce: o,
                    iat: new Date().toISOString(),
                    exp: c,
                    nbf: h,
                    resources: d
                },
                requester: {
                    publicKey: E,
                    metadata: this.client.metadata
                },
                expiryTimestamp: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["calcExpiry"])(S)
            }, P = {
                eip155: {
                    chains: e,
                    methods: [
                        ...new Set([
                            "personal_sign",
                            ...p
                        ])
                    ],
                    events: [
                        "chainChanged",
                        "accountsChanged"
                    ]
                }
            }, v = {
                requiredNamespaces: {},
                optionalNamespaces: P,
                relays: [
                    {
                        protocol: "irn"
                    }
                ],
                proposer: {
                    publicKey: E,
                    metadata: this.client.metadata
                },
                expiryTimestamp: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["calcExpiry"])(f.wc_sessionPropose.req.ttl)
            }, { done: B, resolve: Ie, reject: ae } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createDelayedPromise"])(S, "Request expired"), W = async ({ error: T, session: _ })=>{
                if (this.events.off((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["engineEvent"])("session_request", K), ce), T) ae(T);
                else if (_) {
                    _.self.publicKey = E, await this.client.session.set(_.topic, _), await this.setExpiry(_.topic, _.expiry), w && await this.client.core.pairing.updateMetadata({
                        topic: w,
                        metadata: _.peer.metadata
                    });
                    const j = this.client.session.get(_.topic);
                    await this.deleteProposal(Q), Ie({
                        session: j
                    });
                }
            }, ce = async (T)=>{
                if (await this.deletePendingAuthRequest(K, {
                    message: "fulfilled",
                    code: 0
                }), T.error) {
                    const z = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSdkError"])("WC_METHOD_UNSUPPORTED", "wc_sessionAuthenticate");
                    return T.error.code === z.code ? void 0 : (this.events.off((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["engineEvent"])("session_connect"), W), ae(T.error.message));
                }
                await this.deleteProposal(Q), this.events.off((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["engineEvent"])("session_connect"), W);
                const { cacaos: _, responder: j } = T.result, le = [], fe = [];
                for (const z of _){
                    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["validateSignedCacao"])({
                        cacao: z,
                        projectId: this.client.core.projectId
                    }) || (this.client.logger.error(z, "Signature verification failed"), ae((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSdkError"])("SESSION_SETTLEMENT_FAILED", "Signature verification failed")));
                    const { p: he } = z, pe = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRecapFromResources"])(he.resources), qe = [
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getNamespacedDidChainId"])(he.iss)
                    ], et = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getDidAddress"])(he.iss);
                    if (pe) {
                        const de = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getMethodsFromRecap"])(pe), tt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getChainsFromRecap"])(pe);
                        le.push(...de), qe.push(...tt);
                    }
                    for (const de of qe)fe.push(`${de}:${et}`);
                }
                const Z = await this.client.core.crypto.generateSharedKey(E, j.publicKey);
                let ee;
                le.length > 0 && (ee = {
                    topic: Z,
                    acknowledged: !0,
                    self: {
                        publicKey: E,
                        metadata: this.client.metadata
                    },
                    peer: j,
                    controller: j.publicKey,
                    expiry: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["calcExpiry"])(L),
                    requiredNamespaces: {},
                    optionalNamespaces: {},
                    relay: {
                        protocol: "irn"
                    },
                    pairingTopic: w,
                    namespaces: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buildNamespacesFromAuth"])([
                        ...new Set(le)
                    ], [
                        ...new Set(fe)
                    ])
                }, await this.client.core.relayer.subscribe(Z), await this.client.session.set(Z, ee), ee = this.client.session.get(Z)), Ie({
                    auths: _,
                    session: ee
                });
            }, K = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$format$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["payloadId"])(), Q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$format$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["payloadId"])();
            this.events.once((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["engineEvent"])("session_connect"), W), this.events.once((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["engineEvent"])("session_request", K), ce);
            try {
                await Promise.all([
                    this.sendRequest({
                        topic: w,
                        method: "wc_sessionAuthenticate",
                        params: N,
                        expiry: t.expiry,
                        throwOnFailedPublish: !0,
                        clientRpcId: K
                    }),
                    this.sendRequest({
                        topic: w,
                        method: "wc_sessionPropose",
                        params: v,
                        expiry: f.wc_sessionPropose.req.ttl,
                        throwOnFailedPublish: !0,
                        clientRpcId: Q
                    })
                ]);
            } catch (T) {
                throw this.events.off((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["engineEvent"])("session_connect"), W), this.events.off((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["engineEvent"])("session_request", K), ce), T;
            }
            return await this.setProposal(Q, y({
                id: Q
            }, v)), await this.setAuthRequest(K, {
                request: M(y({}, N), {
                    verifyContext: {}
                }),
                pairingTopic: w
            }), {
                uri: m,
                response: B
            };
        }, this.approveSessionAuthenticate = async (t)=>{
            this.isInitialized();
            const { id: e, auths: s } = t, i = this.getPendingAuthRequest(e);
            if (!i) throw new Error(`Could not find pending auth request with id ${e}`);
            const r = i.requester.publicKey, o = await this.client.core.crypto.generateKeyPair(), a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hashKey"])(r), c = {
                type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TYPE_1"],
                receiverPublicKey: r,
                senderPublicKey: o
            }, h = [], p = [];
            for (const w of s){
                if (!await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["validateSignedCacao"])({
                    cacao: w,
                    projectId: this.client.core.projectId
                })) {
                    const N = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSdkError"])("SESSION_SETTLEMENT_FAILED", "Signature verification failed");
                    throw await this.sendError({
                        id: e,
                        topic: a,
                        error: N,
                        encodeOpts: c
                    }), new Error(N.message);
                }
                const { p: m } = w, E = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRecapFromResources"])(m.resources), O = [
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getNamespacedDidChainId"])(m.iss)
                ], S = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getDidAddress"])(m.iss);
                if (E) {
                    const N = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getMethodsFromRecap"])(E), P = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getChainsFromRecap"])(E);
                    h.push(...N), O.push(...P);
                }
                for (const N of O)p.push(`${N}:${S}`);
            }
            const g = await this.client.core.crypto.generateSharedKey(o, r);
            let d;
            return h?.length > 0 && (d = {
                topic: g,
                acknowledged: !0,
                self: {
                    publicKey: o,
                    metadata: this.client.metadata
                },
                peer: {
                    publicKey: r,
                    metadata: i.requester.metadata
                },
                controller: r,
                expiry: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["calcExpiry"])(L),
                authentication: s,
                requiredNamespaces: {},
                optionalNamespaces: {},
                relay: {
                    protocol: "irn"
                },
                pairingTopic: "",
                namespaces: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buildNamespacesFromAuth"])([
                    ...new Set(h)
                ], [
                    ...new Set(p)
                ])
            }, await this.client.core.relayer.subscribe(g), await this.client.session.set(g, d)), await this.sendResult({
                topic: a,
                id: e,
                result: {
                    cacaos: s,
                    responder: {
                        publicKey: o,
                        metadata: this.client.metadata
                    }
                },
                encodeOpts: c,
                throwOnFailedPublish: !0
            }), await this.client.auth.requests.delete(e, {
                message: "fullfilled",
                code: 0
            }), await this.client.core.pairing.activate({
                topic: i.pairingTopic
            }), {
                session: d
            };
        }, this.rejectSessionAuthenticate = async (t)=>{
            await this.isInitialized();
            const { id: e, reason: s } = t, i = this.getPendingAuthRequest(e);
            if (!i) throw new Error(`Could not find pending auth request with id ${e}`);
            const r = i.requester.publicKey, o = await this.client.core.crypto.generateKeyPair(), a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hashKey"])(r), c = {
                type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TYPE_1"],
                receiverPublicKey: r,
                senderPublicKey: o
            };
            await this.sendError({
                id: e,
                topic: a,
                error: s,
                encodeOpts: c
            }), await this.client.auth.requests.delete(e, {
                message: "rejected",
                code: 0
            }), await this.client.proposal.delete(e, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSdkError"])("USER_DISCONNECTED"));
        }, this.formatAuthMessage = (t)=>{
            this.isInitialized();
            const { request: e, iss: s } = t;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatMessage"])(e, s);
        }, this.cleanupDuplicatePairings = async (t)=>{
            if (t.pairingTopic) try {
                const e = this.client.core.pairing.pairings.get(t.pairingTopic), s = this.client.core.pairing.pairings.getAll().filter((i)=>{
                    var r, o;
                    return ((r = i.peerMetadata) == null ? void 0 : r.url) && ((o = i.peerMetadata) == null ? void 0 : o.url) === t.peer.metadata.url && i.topic && i.topic !== e.topic;
                });
                if (s.length === 0) return;
                this.client.logger.info(`Cleaning up ${s.length} duplicate pairing(s)`), await Promise.all(s.map((i)=>this.client.core.pairing.disconnect({
                        topic: i.topic
                    }))), this.client.logger.info("Duplicate pairings clean up finished");
            } catch (e) {
                this.client.logger.error(e);
            }
        }, this.deleteSession = async (t)=>{
            const { topic: e, expirerHasDeleted: s = !1, emitEvent: i = !0, id: r = 0 } = t, { self: o } = this.client.session.get(e);
            await this.client.core.relayer.unsubscribe(e), await this.client.session.delete(e, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSdkError"])("USER_DISCONNECTED")), this.addToRecentlyDeleted(e, "session"), this.client.core.crypto.keychain.has(o.publicKey) && await this.client.core.crypto.deleteKeyPair(o.publicKey), this.client.core.crypto.keychain.has(e) && await this.client.core.crypto.deleteSymKey(e), s || this.client.core.expirer.del(e), this.client.core.storage.removeItem(_e).catch((a)=>this.client.logger.warn(a)), this.getPendingSessionRequests().forEach((a)=>{
                a.topic === e && this.deletePendingSessionRequest(a.id, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSdkError"])("USER_DISCONNECTED"));
            }), i && this.client.events.emit("session_delete", {
                id: r,
                topic: e
            });
        }, this.deleteProposal = async (t, e)=>{
            await Promise.all([
                this.client.proposal.delete(t, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSdkError"])("USER_DISCONNECTED")),
                e ? Promise.resolve() : this.client.core.expirer.del(t)
            ]), this.addToRecentlyDeleted(t, "proposal");
        }, this.deletePendingSessionRequest = async (t, e, s = !1)=>{
            await Promise.all([
                this.client.pendingRequest.delete(t, e),
                s ? Promise.resolve() : this.client.core.expirer.del(t)
            ]), this.addToRecentlyDeleted(t, "request"), this.sessionRequestQueue.queue = this.sessionRequestQueue.queue.filter((i)=>i.id !== t), s && (this.sessionRequestQueue.state = D.idle, this.client.events.emit("session_request_expire", {
                id: t
            }));
        }, this.deletePendingAuthRequest = async (t, e, s = !1)=>{
            await Promise.all([
                this.client.auth.requests.delete(t, e),
                s ? Promise.resolve() : this.client.core.expirer.del(t)
            ]);
        }, this.setExpiry = async (t, e)=>{
            this.client.session.keys.includes(t) && (this.client.core.expirer.set(t, e), await this.client.session.update(t, {
                expiry: e
            }));
        }, this.setProposal = async (t, e)=>{
            this.client.core.expirer.set(t, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["calcExpiry"])(f.wc_sessionPropose.req.ttl)), await this.client.proposal.set(t, e);
        }, this.setAuthRequest = async (t, e)=>{
            const { request: s, pairingTopic: i } = e;
            this.client.core.expirer.set(t, s.expiryTimestamp), await this.client.auth.requests.set(t, {
                authPayload: s.authPayload,
                requester: s.requester,
                expiryTimestamp: s.expiryTimestamp,
                id: t,
                pairingTopic: i,
                verifyContext: s.verifyContext
            });
        }, this.setPendingSessionRequest = async (t)=>{
            const { id: e, topic: s, params: i, verifyContext: r } = t, o = i.request.expiryTimestamp || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["calcExpiry"])(f.wc_sessionRequest.req.ttl);
            this.client.core.expirer.set(e, o), await this.client.pendingRequest.set(e, {
                id: e,
                topic: s,
                params: i,
                verifyContext: r
            });
        }, this.sendRequest = async (t)=>{
            const { topic: e, method: s, params: i, expiry: r, relayRpcId: o, clientRpcId: a, throwOnFailedPublish: c } = t, h = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$format$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatJsonRpcRequest"])(s, i, a);
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isBrowser"])() && je.includes(s)) {
                const d = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hashMessage"])(JSON.stringify(h));
                this.client.core.verify.register({
                    attestationId: d
                });
            }
            let p;
            try {
                p = await this.client.core.crypto.encode(e, h);
            } catch (d) {
                throw await this.cleanup(), this.client.logger.error(`sendRequest() -> core.crypto.encode() for topic ${e} failed`), d;
            }
            const g = f[s].req;
            return r && (g.ttl = r), o && (g.id = o), this.client.core.history.set(e, h), c ? (g.internal = M(y({}, g.internal), {
                throwOnFailedPublish: !0
            }), await this.client.core.relayer.publish(e, p, g)) : this.client.core.relayer.publish(e, p, g).catch((d)=>this.client.logger.error(d)), h.id;
        }, this.sendResult = async (t)=>{
            const { id: e, topic: s, result: i, throwOnFailedPublish: r, encodeOpts: o } = t, a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$format$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatJsonRpcResult"])(e, i);
            let c;
            try {
                c = await this.client.core.crypto.encode(s, a, o);
            } catch (g) {
                throw await this.cleanup(), this.client.logger.error(`sendResult() -> core.crypto.encode() for topic ${s} failed`), g;
            }
            let h;
            try {
                h = await this.client.core.history.get(s, e);
            } catch (g) {
                throw this.client.logger.error(`sendResult() -> history.get(${s}, ${e}) failed`), g;
            }
            const p = f[h.request.method].res;
            r ? (p.internal = M(y({}, p.internal), {
                throwOnFailedPublish: !0
            }), await this.client.core.relayer.publish(s, c, p)) : this.client.core.relayer.publish(s, c, p).catch((g)=>this.client.logger.error(g)), await this.client.core.history.resolve(a);
        }, this.sendError = async (t)=>{
            const { id: e, topic: s, error: i, encodeOpts: r } = t, o = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$format$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatJsonRpcError"])(e, i);
            let a;
            try {
                a = await this.client.core.crypto.encode(s, o, r);
            } catch (p) {
                throw await this.cleanup(), this.client.logger.error(`sendError() -> core.crypto.encode() for topic ${s} failed`), p;
            }
            let c;
            try {
                c = await this.client.core.history.get(s, e);
            } catch (p) {
                throw this.client.logger.error(`sendError() -> history.get(${s}, ${e}) failed`), p;
            }
            const h = f[c.request.method].res;
            this.client.core.relayer.publish(s, a, h), await this.client.core.history.resolve(o);
        }, this.cleanup = async ()=>{
            const t = [], e = [];
            this.client.session.getAll().forEach((s)=>{
                let i = !1;
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isExpired"])(s.expiry) && (i = !0), this.client.core.crypto.keychain.has(s.topic) || (i = !0), i && t.push(s.topic);
            }), this.client.proposal.getAll().forEach((s)=>{
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isExpired"])(s.expiryTimestamp) && e.push(s.id);
            }), await Promise.all([
                ...t.map((s)=>this.deleteSession({
                        topic: s
                    })),
                ...e.map((s)=>this.deleteProposal(s))
            ]);
        }, this.onRelayEventRequest = async (t)=>{
            this.requestQueue.queue.push(t), await this.processRequestsQueue();
        }, this.processRequestsQueue = async ()=>{
            if (this.requestQueue.state === D.active) {
                this.client.logger.info("Request queue already active, skipping...");
                return;
            }
            for(this.client.logger.info(`Request queue starting with ${this.requestQueue.queue.length} requests`); this.requestQueue.queue.length > 0;){
                this.requestQueue.state = D.active;
                const t = this.requestQueue.queue.shift();
                if (t) try {
                    this.processRequest(t), await new Promise((e)=>setTimeout(e, 300));
                } catch (e) {
                    this.client.logger.warn(e);
                }
            }
            this.requestQueue.state = D.idle;
        }, this.processRequest = (t)=>{
            const { topic: e, payload: s } = t, i = s.method;
            if (!this.shouldIgnorePairingRequest({
                topic: e,
                requestMethod: i
            })) switch(i){
                case "wc_sessionPropose":
                    return this.onSessionProposeRequest(e, s);
                case "wc_sessionSettle":
                    return this.onSessionSettleRequest(e, s);
                case "wc_sessionUpdate":
                    return this.onSessionUpdateRequest(e, s);
                case "wc_sessionExtend":
                    return this.onSessionExtendRequest(e, s);
                case "wc_sessionPing":
                    return this.onSessionPingRequest(e, s);
                case "wc_sessionDelete":
                    return this.onSessionDeleteRequest(e, s);
                case "wc_sessionRequest":
                    return this.onSessionRequest(e, s);
                case "wc_sessionEvent":
                    return this.onSessionEventRequest(e, s);
                case "wc_sessionAuthenticate":
                    return this.onSessionAuthenticateRequest(e, s);
                default:
                    return this.client.logger.info(`Unsupported request method ${i}`);
            }
        }, this.onRelayEventResponse = async (t)=>{
            const { topic: e, payload: s } = t, i = (await this.client.core.history.get(e, s.id)).request.method;
            switch(i){
                case "wc_sessionPropose":
                    return this.onSessionProposeResponse(e, s);
                case "wc_sessionSettle":
                    return this.onSessionSettleResponse(e, s);
                case "wc_sessionUpdate":
                    return this.onSessionUpdateResponse(e, s);
                case "wc_sessionExtend":
                    return this.onSessionExtendResponse(e, s);
                case "wc_sessionPing":
                    return this.onSessionPingResponse(e, s);
                case "wc_sessionRequest":
                    return this.onSessionRequestResponse(e, s);
                case "wc_sessionAuthenticate":
                    return this.onSessionAuthenticateResponse(e, s);
                default:
                    return this.client.logger.info(`Unsupported response method ${i}`);
            }
        }, this.onRelayEventUnknownPayload = (t)=>{
            const { topic: e } = t, { message: s } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getInternalError"])("MISSING_OR_INVALID", `Decoded payload on topic ${e} is not identifiable as a JSON-RPC request or a response.`);
            throw new Error(s);
        }, this.shouldIgnorePairingRequest = (t)=>{
            const { topic: e, requestMethod: s } = t, i = this.expectedPairingMethodMap.get(e);
            return !i || i.includes(s) ? !1 : !!(i.includes("wc_sessionAuthenticate") && this.client.events.listenerCount("session_authenticate") > 0);
        }, this.onSessionProposeRequest = async (t, e)=>{
            const { params: s, id: i } = e;
            try {
                this.isValidConnect(y({}, e.params));
                const r = s.expiryTimestamp || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["calcExpiry"])(f.wc_sessionPropose.req.ttl), o = y({
                    id: i,
                    pairingTopic: t,
                    expiryTimestamp: r
                }, s);
                await this.setProposal(i, o);
                const a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hashMessage"])(JSON.stringify(e)), c = await this.getVerifyContext(a, o.proposer.metadata);
                this.client.events.emit("session_proposal", {
                    id: i,
                    params: o,
                    verifyContext: c
                });
            } catch (r) {
                await this.sendError({
                    id: i,
                    topic: t,
                    error: r
                }), this.client.logger.error(r);
            }
        }, this.onSessionProposeResponse = async (t, e)=>{
            const { id: s } = e;
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$validators$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isJsonRpcResult"])(e)) {
                const { result: i } = e;
                this.client.logger.trace({
                    type: "method",
                    method: "onSessionProposeResponse",
                    result: i
                });
                const r = this.client.proposal.get(s);
                this.client.logger.trace({
                    type: "method",
                    method: "onSessionProposeResponse",
                    proposal: r
                });
                const o = r.proposer.publicKey;
                this.client.logger.trace({
                    type: "method",
                    method: "onSessionProposeResponse",
                    selfPublicKey: o
                });
                const a = i.responderPublicKey;
                this.client.logger.trace({
                    type: "method",
                    method: "onSessionProposeResponse",
                    peerPublicKey: a
                });
                const c = await this.client.core.crypto.generateSharedKey(o, a);
                this.client.logger.trace({
                    type: "method",
                    method: "onSessionProposeResponse",
                    sessionTopic: c
                });
                const h = await this.client.core.relayer.subscribe(c);
                this.client.logger.trace({
                    type: "method",
                    method: "onSessionProposeResponse",
                    subscriptionId: h
                }), await this.client.core.pairing.activate({
                    topic: t
                });
            } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$validators$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isJsonRpcError"])(e)) {
                await this.client.proposal.delete(s, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSdkError"])("USER_DISCONNECTED"));
                const i = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["engineEvent"])("session_connect");
                if (this.events.listenerCount(i) === 0) throw new Error(`emitting ${i} without any listeners, 954`);
                this.events.emit((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["engineEvent"])("session_connect"), {
                    error: e.error
                });
            }
        }, this.onSessionSettleRequest = async (t, e)=>{
            const { id: s, params: i } = e;
            try {
                this.isValidSessionSettleRequest(i);
                const { relay: r, controller: o, expiry: a, namespaces: c, sessionProperties: h, pairingTopic: p, sessionConfig: g } = e.params, d = y(y({
                    topic: t,
                    relay: r,
                    expiry: a,
                    namespaces: c,
                    acknowledged: !0,
                    pairingTopic: p,
                    requiredNamespaces: {},
                    optionalNamespaces: {},
                    controller: o.publicKey,
                    self: {
                        publicKey: "",
                        metadata: this.client.metadata
                    },
                    peer: {
                        publicKey: o.publicKey,
                        metadata: o.metadata
                    }
                }, h && {
                    sessionProperties: h
                }), g && {
                    sessionConfig: g
                });
                await this.sendResult({
                    id: e.id,
                    topic: t,
                    result: !0,
                    throwOnFailedPublish: !0
                });
                const w = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["engineEvent"])("session_connect");
                if (this.events.listenerCount(w) === 0) throw new Error(`emitting ${w} without any listeners 997`);
                this.events.emit((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["engineEvent"])("session_connect"), {
                    session: d
                }), this.cleanupDuplicatePairings(d);
            } catch (r) {
                await this.sendError({
                    id: s,
                    topic: t,
                    error: r
                }), this.client.logger.error(r);
            }
        }, this.onSessionSettleResponse = async (t, e)=>{
            const { id: s } = e;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$validators$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isJsonRpcResult"])(e) ? (await this.client.session.update(t, {
                acknowledged: !0
            }), this.events.emit((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["engineEvent"])("session_approve", s), {})) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$validators$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isJsonRpcError"])(e) && (await this.client.session.delete(t, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSdkError"])("USER_DISCONNECTED")), this.events.emit((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["engineEvent"])("session_approve", s), {
                error: e.error
            }));
        }, this.onSessionUpdateRequest = async (t, e)=>{
            const { params: s, id: i } = e;
            try {
                const r = `${t}_session_update`, o = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MemoryStore"].get(r);
                if (o && this.isRequestOutOfSync(o, i)) {
                    this.client.logger.info(`Discarding out of sync request - ${i}`), this.sendError({
                        id: i,
                        topic: t,
                        error: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSdkError"])("INVALID_UPDATE_REQUEST")
                    });
                    return;
                }
                this.isValidUpdate(y({
                    topic: t
                }, s));
                try {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MemoryStore"].set(r, i), await this.client.session.update(t, {
                        namespaces: s.namespaces
                    }), await this.sendResult({
                        id: i,
                        topic: t,
                        result: !0,
                        throwOnFailedPublish: !0
                    });
                } catch (a) {
                    throw __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MemoryStore"].delete(r), a;
                }
                this.client.events.emit("session_update", {
                    id: i,
                    topic: t,
                    params: s
                });
            } catch (r) {
                await this.sendError({
                    id: i,
                    topic: t,
                    error: r
                }), this.client.logger.error(r);
            }
        }, this.isRequestOutOfSync = (t, e)=>parseInt(e.toString().slice(0, -3)) <= parseInt(t.toString().slice(0, -3)), this.onSessionUpdateResponse = (t, e)=>{
            const { id: s } = e, i = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["engineEvent"])("session_update", s);
            if (this.events.listenerCount(i) === 0) throw new Error(`emitting ${i} without any listeners`);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$validators$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isJsonRpcResult"])(e) ? this.events.emit((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["engineEvent"])("session_update", s), {}) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$validators$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isJsonRpcError"])(e) && this.events.emit((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["engineEvent"])("session_update", s), {
                error: e.error
            });
        }, this.onSessionExtendRequest = async (t, e)=>{
            const { id: s } = e;
            try {
                this.isValidExtend({
                    topic: t
                }), await this.setExpiry(t, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["calcExpiry"])(L)), await this.sendResult({
                    id: s,
                    topic: t,
                    result: !0,
                    throwOnFailedPublish: !0
                }), this.client.events.emit("session_extend", {
                    id: s,
                    topic: t
                });
            } catch (i) {
                await this.sendError({
                    id: s,
                    topic: t,
                    error: i
                }), this.client.logger.error(i);
            }
        }, this.onSessionExtendResponse = (t, e)=>{
            const { id: s } = e, i = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["engineEvent"])("session_extend", s);
            if (this.events.listenerCount(i) === 0) throw new Error(`emitting ${i} without any listeners`);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$validators$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isJsonRpcResult"])(e) ? this.events.emit((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["engineEvent"])("session_extend", s), {}) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$validators$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isJsonRpcError"])(e) && this.events.emit((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["engineEvent"])("session_extend", s), {
                error: e.error
            });
        }, this.onSessionPingRequest = async (t, e)=>{
            const { id: s } = e;
            try {
                this.isValidPing({
                    topic: t
                }), await this.sendResult({
                    id: s,
                    topic: t,
                    result: !0,
                    throwOnFailedPublish: !0
                }), this.client.events.emit("session_ping", {
                    id: s,
                    topic: t
                });
            } catch (i) {
                await this.sendError({
                    id: s,
                    topic: t,
                    error: i
                }), this.client.logger.error(i);
            }
        }, this.onSessionPingResponse = (t, e)=>{
            const { id: s } = e, i = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["engineEvent"])("session_ping", s);
            if (this.events.listenerCount(i) === 0) throw new Error(`emitting ${i} without any listeners`);
            setTimeout(()=>{
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$validators$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isJsonRpcResult"])(e) ? this.events.emit((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["engineEvent"])("session_ping", s), {}) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$validators$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isJsonRpcError"])(e) && this.events.emit((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["engineEvent"])("session_ping", s), {
                    error: e.error
                });
            }, 500);
        }, this.onSessionDeleteRequest = async (t, e)=>{
            const { id: s } = e;
            try {
                this.isValidDisconnect({
                    topic: t,
                    reason: e.params
                }), await Promise.all([
                    new Promise((i)=>{
                        this.client.core.relayer.once(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$core$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RELAYER_EVENTS"].publish, async ()=>{
                            i(await this.deleteSession({
                                topic: t,
                                id: s
                            }));
                        });
                    }),
                    this.sendResult({
                        id: s,
                        topic: t,
                        result: !0,
                        throwOnFailedPublish: !0
                    }),
                    this.cleanupPendingSentRequestsForTopic({
                        topic: t,
                        error: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSdkError"])("USER_DISCONNECTED")
                    })
                ]);
            } catch (i) {
                this.client.logger.error(i);
            }
        }, this.onSessionRequest = async (t, e)=>{
            var s;
            const { id: i, params: r } = e;
            try {
                await this.isValidRequest(y({
                    topic: t
                }, r));
                const o = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hashMessage"])(JSON.stringify((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$format$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatJsonRpcRequest"])("wc_sessionRequest", r, i))), a = this.client.session.get(t), c = await this.getVerifyContext(o, a.peer.metadata), h = {
                    id: i,
                    topic: t,
                    params: r,
                    verifyContext: c
                };
                await this.setPendingSessionRequest(h), (s = this.client.signConfig) != null && s.disableRequestQueue ? this.emitSessionRequest(h) : (this.addSessionRequestToSessionRequestQueue(h), this.processSessionRequestQueue());
            } catch (o) {
                await this.sendError({
                    id: i,
                    topic: t,
                    error: o
                }), this.client.logger.error(o);
            }
        }, this.onSessionRequestResponse = (t, e)=>{
            const { id: s } = e, i = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["engineEvent"])("session_request", s);
            if (this.events.listenerCount(i) === 0) throw new Error(`emitting ${i} without any listeners`);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$validators$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isJsonRpcResult"])(e) ? this.events.emit((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["engineEvent"])("session_request", s), {
                result: e.result
            }) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$validators$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isJsonRpcError"])(e) && this.events.emit((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["engineEvent"])("session_request", s), {
                error: e.error
            });
        }, this.onSessionEventRequest = async (t, e)=>{
            const { id: s, params: i } = e;
            try {
                const r = `${t}_session_event_${i.event.name}`, o = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MemoryStore"].get(r);
                if (o && this.isRequestOutOfSync(o, s)) {
                    this.client.logger.info(`Discarding out of sync request - ${s}`);
                    return;
                }
                this.isValidEmit(y({
                    topic: t
                }, i)), this.client.events.emit("session_event", {
                    id: s,
                    topic: t,
                    params: i
                }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MemoryStore"].set(r, s);
            } catch (r) {
                await this.sendError({
                    id: s,
                    topic: t,
                    error: r
                }), this.client.logger.error(r);
            }
        }, this.onSessionAuthenticateResponse = (t, e)=>{
            const { id: s } = e;
            this.client.logger.trace({
                type: "method",
                method: "onSessionAuthenticateResponse",
                topic: t,
                payload: e
            }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$validators$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isJsonRpcResult"])(e) ? this.events.emit((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["engineEvent"])("session_request", s), {
                result: e.result
            }) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$validators$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isJsonRpcError"])(e) && this.events.emit((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["engineEvent"])("session_request", s), {
                error: e.error
            });
        }, this.onSessionAuthenticateRequest = async (t, e)=>{
            const { requester: s, authPayload: i, expiryTimestamp: r } = e.params, o = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hashMessage"])(JSON.stringify(e)), a = await this.getVerifyContext(o, this.client.metadata), c = {
                requester: s,
                pairingTopic: t,
                id: e.id,
                authPayload: i,
                verifyContext: a,
                expiryTimestamp: r
            };
            await this.setAuthRequest(e.id, {
                request: c,
                pairingTopic: t
            }), this.client.events.emit("session_authenticate", {
                topic: t,
                params: e.params,
                id: e.id
            });
        }, this.addSessionRequestToSessionRequestQueue = (t)=>{
            this.sessionRequestQueue.queue.push(t);
        }, this.cleanupAfterResponse = (t)=>{
            this.deletePendingSessionRequest(t.response.id, {
                message: "fulfilled",
                code: 0
            }), setTimeout(()=>{
                this.sessionRequestQueue.state = D.idle, this.processSessionRequestQueue();
            }, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["toMiliseconds"])(this.requestQueueDelay));
        }, this.cleanupPendingSentRequestsForTopic = ({ topic: t, error: e })=>{
            const s = this.client.core.history.pending;
            s.length > 0 && s.filter((i)=>i.topic === t && i.request.method === "wc_sessionRequest").forEach((i)=>{
                const r = i.request.id, o = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["engineEvent"])("session_request", r);
                if (this.events.listenerCount(o) === 0) throw new Error(`emitting ${o} without any listeners`);
                this.events.emit((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["engineEvent"])("session_request", i.request.id), {
                    error: e
                });
            });
        }, this.processSessionRequestQueue = ()=>{
            if (this.sessionRequestQueue.state === D.active) {
                this.client.logger.info("session request queue is already active.");
                return;
            }
            const t = this.sessionRequestQueue.queue[0];
            if (!t) {
                this.client.logger.info("session request queue is empty.");
                return;
            }
            try {
                this.sessionRequestQueue.state = D.active, this.emitSessionRequest(t);
            } catch (e) {
                this.client.logger.error(e);
            }
        }, this.emitSessionRequest = (t)=>{
            this.client.events.emit("session_request", t);
        }, this.onPairingCreated = (t)=>{
            if (t.methods && this.expectedPairingMethodMap.set(t.topic, t.methods), t.active) return;
            const e = this.client.proposal.getAll().find((s)=>s.pairingTopic === t.topic);
            e && this.onSessionProposeRequest(t.topic, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$format$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatJsonRpcRequest"])("wc_sessionPropose", {
                requiredNamespaces: e.requiredNamespaces,
                optionalNamespaces: e.optionalNamespaces,
                relays: e.relays,
                proposer: e.proposer,
                sessionProperties: e.sessionProperties
            }, e.id));
        }, this.isValidConnect = async (t)=>{
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isValidParams"])(t)) {
                const { message: a } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getInternalError"])("MISSING_OR_INVALID", `connect() params: ${JSON.stringify(t)}`);
                throw new Error(a);
            }
            const { pairingTopic: e, requiredNamespaces: s, optionalNamespaces: i, sessionProperties: r, relays: o } = t;
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isUndefined"])(e) || await this.isValidPairingTopic(e), !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isValidRelays"])(o, !0)) {
                const { message: a } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getInternalError"])("MISSING_OR_INVALID", `connect() relays: ${o}`);
                throw new Error(a);
            }
            !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isUndefined"])(s) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isValidObject"])(s) !== 0 && this.validateNamespaces(s, "requiredNamespaces"), !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isUndefined"])(i) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isValidObject"])(i) !== 0 && this.validateNamespaces(i, "optionalNamespaces"), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isUndefined"])(r) || this.validateSessionProps(r, "sessionProperties");
        }, this.validateNamespaces = (t, e)=>{
            const s = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isValidRequiredNamespaces"])(t, "connect()", e);
            if (s) throw new Error(s.message);
        }, this.isValidApprove = async (t)=>{
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isValidParams"])(t)) throw new Error((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getInternalError"])("MISSING_OR_INVALID", `approve() params: ${t}`).message);
            const { id: e, namespaces: s, relayProtocol: i, sessionProperties: r } = t;
            this.checkRecentlyDeleted(e), await this.isValidProposalId(e);
            const o = this.client.proposal.get(e), a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isValidNamespaces"])(s, "approve()");
            if (a) throw new Error(a.message);
            const c = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isConformingNamespaces"])(o.requiredNamespaces, s, "approve()");
            if (c) throw new Error(c.message);
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isValidString"])(i, !0)) {
                const { message: h } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getInternalError"])("MISSING_OR_INVALID", `approve() relayProtocol: ${i}`);
                throw new Error(h);
            }
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isUndefined"])(r) || this.validateSessionProps(r, "sessionProperties");
        }, this.isValidReject = async (t)=>{
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isValidParams"])(t)) {
                const { message: i } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getInternalError"])("MISSING_OR_INVALID", `reject() params: ${t}`);
                throw new Error(i);
            }
            const { id: e, reason: s } = t;
            if (this.checkRecentlyDeleted(e), await this.isValidProposalId(e), !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isValidErrorReason"])(s)) {
                const { message: i } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getInternalError"])("MISSING_OR_INVALID", `reject() reason: ${JSON.stringify(s)}`);
                throw new Error(i);
            }
        }, this.isValidSessionSettleRequest = (t)=>{
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isValidParams"])(t)) {
                const { message: c } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getInternalError"])("MISSING_OR_INVALID", `onSessionSettleRequest() params: ${t}`);
                throw new Error(c);
            }
            const { relay: e, controller: s, namespaces: i, expiry: r } = t;
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isValidRelay"])(e)) {
                const { message: c } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getInternalError"])("MISSING_OR_INVALID", "onSessionSettleRequest() relay protocol should be a string");
                throw new Error(c);
            }
            const o = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isValidController"])(s, "onSessionSettleRequest()");
            if (o) throw new Error(o.message);
            const a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isValidNamespaces"])(i, "onSessionSettleRequest()");
            if (a) throw new Error(a.message);
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isExpired"])(r)) {
                const { message: c } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getInternalError"])("EXPIRED", "onSessionSettleRequest()");
                throw new Error(c);
            }
        }, this.isValidUpdate = async (t)=>{
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isValidParams"])(t)) {
                const { message: a } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getInternalError"])("MISSING_OR_INVALID", `update() params: ${t}`);
                throw new Error(a);
            }
            const { topic: e, namespaces: s } = t;
            this.checkRecentlyDeleted(e), await this.isValidSessionTopic(e);
            const i = this.client.session.get(e), r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isValidNamespaces"])(s, "update()");
            if (r) throw new Error(r.message);
            const o = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isConformingNamespaces"])(i.requiredNamespaces, s, "update()");
            if (o) throw new Error(o.message);
        }, this.isValidExtend = async (t)=>{
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isValidParams"])(t)) {
                const { message: s } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getInternalError"])("MISSING_OR_INVALID", `extend() params: ${t}`);
                throw new Error(s);
            }
            const { topic: e } = t;
            this.checkRecentlyDeleted(e), await this.isValidSessionTopic(e);
        }, this.isValidRequest = async (t)=>{
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isValidParams"])(t)) {
                const { message: a } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getInternalError"])("MISSING_OR_INVALID", `request() params: ${t}`);
                throw new Error(a);
            }
            const { topic: e, request: s, chainId: i, expiry: r } = t;
            this.checkRecentlyDeleted(e), await this.isValidSessionTopic(e);
            const { namespaces: o } = this.client.session.get(e);
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isValidNamespacesChainId"])(o, i)) {
                const { message: a } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getInternalError"])("MISSING_OR_INVALID", `request() chainId: ${i}`);
                throw new Error(a);
            }
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isValidRequest"])(s)) {
                const { message: a } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getInternalError"])("MISSING_OR_INVALID", `request() ${JSON.stringify(s)}`);
                throw new Error(a);
            }
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isValidNamespacesRequest"])(o, i, s.method)) {
                const { message: a } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getInternalError"])("MISSING_OR_INVALID", `request() method: ${s.method}`);
                throw new Error(a);
            }
            if (r && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isValidRequestExpiry"])(r, ne)) {
                const { message: a } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getInternalError"])("MISSING_OR_INVALID", `request() expiry: ${r}. Expiry must be a number (in seconds) between ${ne.min} and ${ne.max}`);
                throw new Error(a);
            }
        }, this.isValidRespond = async (t)=>{
            var e;
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isValidParams"])(t)) {
                const { message: r } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getInternalError"])("MISSING_OR_INVALID", `respond() params: ${t}`);
                throw new Error(r);
            }
            const { topic: s, response: i } = t;
            try {
                await this.isValidSessionTopic(s);
            } catch (r) {
                throw (e = t?.response) != null && e.id && this.cleanupAfterResponse(t), r;
            }
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isValidResponse"])(i)) {
                const { message: r } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getInternalError"])("MISSING_OR_INVALID", `respond() response: ${JSON.stringify(i)}`);
                throw new Error(r);
            }
        }, this.isValidPing = async (t)=>{
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isValidParams"])(t)) {
                const { message: s } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getInternalError"])("MISSING_OR_INVALID", `ping() params: ${t}`);
                throw new Error(s);
            }
            const { topic: e } = t;
            await this.isValidSessionOrPairingTopic(e);
        }, this.isValidEmit = async (t)=>{
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isValidParams"])(t)) {
                const { message: o } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getInternalError"])("MISSING_OR_INVALID", `emit() params: ${t}`);
                throw new Error(o);
            }
            const { topic: e, event: s, chainId: i } = t;
            await this.isValidSessionTopic(e);
            const { namespaces: r } = this.client.session.get(e);
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isValidNamespacesChainId"])(r, i)) {
                const { message: o } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getInternalError"])("MISSING_OR_INVALID", `emit() chainId: ${i}`);
                throw new Error(o);
            }
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isValidEvent"])(s)) {
                const { message: o } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getInternalError"])("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(s)}`);
                throw new Error(o);
            }
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isValidNamespacesEvent"])(r, i, s.name)) {
                const { message: o } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getInternalError"])("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(s)}`);
                throw new Error(o);
            }
        }, this.isValidDisconnect = async (t)=>{
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isValidParams"])(t)) {
                const { message: s } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getInternalError"])("MISSING_OR_INVALID", `disconnect() params: ${t}`);
                throw new Error(s);
            }
            const { topic: e } = t;
            await this.isValidSessionOrPairingTopic(e);
        }, this.isValidAuthenticate = (t)=>{
            const { chains: e, uri: s, domain: i, nonce: r } = t;
            if (!Array.isArray(e) || e.length === 0) throw new Error("chains is required and must be a non-empty array");
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isValidString"])(s, !1)) throw new Error("uri is required parameter");
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isValidString"])(i, !1)) throw new Error("domain is required parameter");
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isValidString"])(r, !1)) throw new Error("nonce is required parameter");
            if ([
                ...new Set(e.map((a)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseChainId"])(a).namespace))
            ].length > 1) throw new Error("Multi-namespace requests are not supported. Please request single namespace only.");
            const { namespace: o } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseChainId"])(e[0]);
            if (o !== "eip155") throw new Error("Only eip155 namespace is supported for authenticated sessions. Please use .connect() for non-eip155 chains.");
        }, this.getVerifyContext = async (t, e)=>{
            const s = {
                verified: {
                    verifyUrl: e.verifyUrl || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$core$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["VERIFY_SERVER"],
                    validation: "UNKNOWN",
                    origin: e.url || ""
                }
            };
            try {
                const i = await this.client.core.verify.resolve({
                    attestationId: t,
                    verifyUrl: e.verifyUrl
                });
                i && (s.verified.origin = i.origin, s.verified.isScam = i.isScam, s.verified.validation = i.origin === new URL(e.url).origin ? "VALID" : "INVALID");
            } catch (i) {
                this.client.logger.info(i);
            }
            return this.client.logger.info(`Verify context: ${JSON.stringify(s)}`), s;
        }, this.validateSessionProps = (t, e)=>{
            Object.values(t).forEach((s)=>{
                if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isValidString"])(s, !1)) {
                    const { message: i } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getInternalError"])("MISSING_OR_INVALID", `${e} must be in Record<string, string> format. Received: ${JSON.stringify(s)}`);
                    throw new Error(i);
                }
            });
        }, this.getPendingAuthRequest = (t)=>{
            const e = this.client.auth.requests.get(t);
            return typeof e == "object" ? e : void 0;
        }, this.addToRecentlyDeleted = (t, e)=>{
            if (this.recentlyDeletedMap.set(t, e), this.recentlyDeletedMap.size >= this.recentlyDeletedLimit) {
                let s = 0;
                const i = this.recentlyDeletedLimit / 2;
                for (const r of this.recentlyDeletedMap.keys()){
                    if (s++ >= i) break;
                    this.recentlyDeletedMap.delete(r);
                }
            }
        }, this.checkRecentlyDeleted = (t)=>{
            const e = this.recentlyDeletedMap.get(t);
            if (e) {
                const { message: s } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getInternalError"])("MISSING_OR_INVALID", `Record was recently deleted - ${e}: ${t}`);
                throw new Error(s);
            }
        };
    }
    async isInitialized() {
        if (!this.initialized) {
            const { message: n } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getInternalError"])("NOT_INITIALIZED", this.name);
            throw new Error(n);
        }
        await this.client.core.relayer.confirmOnlineStateOrThrow();
    }
    registerRelayerEvents() {
        this.client.core.relayer.on(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$core$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RELAYER_EVENTS"].message, async (n)=>{
            const { topic: t, message: e } = n, { publicKey: s } = this.client.auth.authKeys.keys.includes(J) ? this.client.auth.authKeys.get(J) : {
                responseTopic: void 0,
                publicKey: void 0
            }, i = await this.client.core.crypto.decode(t, e, {
                receiverPublicKey: s
            });
            try {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$validators$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isJsonRpcRequest"])(i) ? (this.client.core.history.set(t, i), this.onRelayEventRequest({
                    topic: t,
                    payload: i
                })) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$validators$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isJsonRpcResponse"])(i) ? (await this.client.core.history.resolve(i), await this.onRelayEventResponse({
                    topic: t,
                    payload: i
                }), this.client.core.history.delete(t, i.id)) : this.onRelayEventUnknownPayload({
                    topic: t,
                    payload: i
                });
            } catch (r) {
                this.client.logger.error(r);
            }
        });
    }
    registerExpirerEvents() {
        this.client.core.expirer.on(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$core$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["EXPIRER_EVENTS"].expired, async (n)=>{
            const { topic: t, id: e } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseExpirerTarget"])(n.target);
            if (e && this.client.pendingRequest.keys.includes(e)) return await this.deletePendingSessionRequest(e, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getInternalError"])("EXPIRED"), !0);
            if (e && this.client.auth.requests.keys.includes(e)) return await this.deletePendingAuthRequest(e, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getInternalError"])("EXPIRED"), !0);
            t ? this.client.session.keys.includes(t) && (await this.deleteSession({
                topic: t,
                expirerHasDeleted: !0
            }), this.client.events.emit("session_expire", {
                topic: t
            })) : e && (await this.deleteProposal(e, !0), this.client.events.emit("proposal_expire", {
                id: e
            }));
        });
    }
    registerPairingEvents() {
        this.client.core.pairing.events.on(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$core$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PAIRING_EVENTS"].create, (n)=>this.onPairingCreated(n)), this.client.core.pairing.events.on(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$core$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PAIRING_EVENTS"].delete, (n)=>{
            this.addToRecentlyDeleted(n.topic, "pairing");
        });
    }
    isValidPairingTopic(n) {
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isValidString"])(n, !1)) {
            const { message: t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getInternalError"])("MISSING_OR_INVALID", `pairing topic should be a string: ${n}`);
            throw new Error(t);
        }
        if (!this.client.core.pairing.pairings.keys.includes(n)) {
            const { message: t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getInternalError"])("NO_MATCHING_KEY", `pairing topic doesn't exist: ${n}`);
            throw new Error(t);
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isExpired"])(this.client.core.pairing.pairings.get(n).expiry)) {
            const { message: t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getInternalError"])("EXPIRED", `pairing topic: ${n}`);
            throw new Error(t);
        }
    }
    async isValidSessionTopic(n) {
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isValidString"])(n, !1)) {
            const { message: t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getInternalError"])("MISSING_OR_INVALID", `session topic should be a string: ${n}`);
            throw new Error(t);
        }
        if (this.checkRecentlyDeleted(n), !this.client.session.keys.includes(n)) {
            const { message: t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getInternalError"])("NO_MATCHING_KEY", `session topic doesn't exist: ${n}`);
            throw new Error(t);
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isExpired"])(this.client.session.get(n).expiry)) {
            await this.deleteSession({
                topic: n
            });
            const { message: t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getInternalError"])("EXPIRED", `session topic: ${n}`);
            throw new Error(t);
        }
        if (!this.client.core.crypto.keychain.has(n)) {
            const { message: t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getInternalError"])("MISSING_OR_INVALID", `session topic does not exist in keychain: ${n}`);
            throw await this.deleteSession({
                topic: n
            }), new Error(t);
        }
    }
    async isValidSessionOrPairingTopic(n) {
        if (this.checkRecentlyDeleted(n), this.client.session.keys.includes(n)) await this.isValidSessionTopic(n);
        else if (this.client.core.pairing.pairings.keys.includes(n)) this.isValidPairingTopic(n);
        else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isValidString"])(n, !1)) {
            const { message: t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getInternalError"])("NO_MATCHING_KEY", `session or pairing topic doesn't exist: ${n}`);
            throw new Error(t);
        } else {
            const { message: t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getInternalError"])("MISSING_OR_INVALID", `session or pairing topic should be a string: ${n}`);
            throw new Error(t);
        }
    }
    async isValidProposalId(n) {
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isValidId"])(n)) {
            const { message: t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getInternalError"])("MISSING_OR_INVALID", `proposal id should be a number: ${n}`);
            throw new Error(t);
        }
        if (!this.client.proposal.keys.includes(n)) {
            const { message: t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getInternalError"])("NO_MATCHING_KEY", `proposal id doesn't exist: ${n}`);
            throw new Error(t);
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isExpired"])(this.client.proposal.get(n).expiryTimestamp)) {
            await this.deleteProposal(n);
            const { message: t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getInternalError"])("EXPIRED", `proposal id: ${n}`);
            throw new Error(t);
        }
    }
}
class es extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$core$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Store"] {
    constructor(n, t){
        super(n, t, Ue, ie), this.core = n, this.logger = t;
    }
}
class Ze extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$core$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Store"] {
    constructor(n, t){
        super(n, t, ke, ie), this.core = n, this.logger = t;
    }
}
class ts extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$core$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Store"] {
    constructor(n, t){
        super(n, t, Qe, ie, (e)=>e.id), this.core = n, this.logger = t;
    }
}
class ss extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$core$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Store"] {
    constructor(n, t){
        super(n, t, Ye, X, ()=>J), this.core = n, this.logger = t;
    }
}
class is extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$core$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Store"] {
    constructor(n, t){
        super(n, t, Xe, X), this.core = n, this.logger = t;
    }
}
class rs extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$core$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Store"] {
    constructor(n, t){
        super(n, t, Je, X, (e)=>e.id), this.core = n, this.logger = t;
    }
}
class ns {
    constructor(n, t){
        this.core = n, this.logger = t, this.authKeys = new ss(this.core, this.logger), this.pairingTopics = new is(this.core, this.logger), this.requests = new rs(this.core, this.logger);
    }
    async init() {
        await this.authKeys.init(), await this.pairingTopics.init(), await this.requests.init();
    }
}
class oe extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$types$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ISignClient"] {
    constructor(n){
        super(n), this.protocol = Re, this.version = Ee, this.name = re.name, this.events = new __TURBOPACK__commonjs__external__events__["EventEmitter"], this.on = (e, s)=>this.events.on(e, s), this.once = (e, s)=>this.events.once(e, s), this.off = (e, s)=>this.events.off(e, s), this.removeListener = (e, s)=>this.events.removeListener(e, s), this.removeAllListeners = (e)=>this.events.removeAllListeners(e), this.connect = async (e)=>{
            try {
                return await this.engine.connect(e);
            } catch (s) {
                throw this.logger.error(s.message), s;
            }
        }, this.pair = async (e)=>{
            try {
                return await this.engine.pair(e);
            } catch (s) {
                throw this.logger.error(s.message), s;
            }
        }, this.approve = async (e)=>{
            try {
                return await this.engine.approve(e);
            } catch (s) {
                throw this.logger.error(s.message), s;
            }
        }, this.reject = async (e)=>{
            try {
                return await this.engine.reject(e);
            } catch (s) {
                throw this.logger.error(s.message), s;
            }
        }, this.update = async (e)=>{
            try {
                return await this.engine.update(e);
            } catch (s) {
                throw this.logger.error(s.message), s;
            }
        }, this.extend = async (e)=>{
            try {
                return await this.engine.extend(e);
            } catch (s) {
                throw this.logger.error(s.message), s;
            }
        }, this.request = async (e)=>{
            try {
                return await this.engine.request(e);
            } catch (s) {
                throw this.logger.error(s.message), s;
            }
        }, this.respond = async (e)=>{
            try {
                return await this.engine.respond(e);
            } catch (s) {
                throw this.logger.error(s.message), s;
            }
        }, this.ping = async (e)=>{
            try {
                return await this.engine.ping(e);
            } catch (s) {
                throw this.logger.error(s.message), s;
            }
        }, this.emit = async (e)=>{
            try {
                return await this.engine.emit(e);
            } catch (s) {
                throw this.logger.error(s.message), s;
            }
        }, this.disconnect = async (e)=>{
            try {
                return await this.engine.disconnect(e);
            } catch (s) {
                throw this.logger.error(s.message), s;
            }
        }, this.find = (e)=>{
            try {
                return this.engine.find(e);
            } catch (s) {
                throw this.logger.error(s.message), s;
            }
        }, this.getPendingSessionRequests = ()=>{
            try {
                return this.engine.getPendingSessionRequests();
            } catch (e) {
                throw this.logger.error(e.message), e;
            }
        }, this.authenticate = async (e)=>{
            try {
                return await this.engine.authenticate(e);
            } catch (s) {
                throw this.logger.error(s.message), s;
            }
        }, this.formatAuthMessage = (e)=>{
            try {
                return this.engine.formatAuthMessage(e);
            } catch (s) {
                throw this.logger.error(s.message), s;
            }
        }, this.approveSessionAuthenticate = async (e)=>{
            try {
                return await this.engine.approveSessionAuthenticate(e);
            } catch (s) {
                throw this.logger.error(s.message), s;
            }
        }, this.rejectSessionAuthenticate = async (e)=>{
            try {
                return await this.engine.rejectSessionAuthenticate(e);
            } catch (s) {
                throw this.logger.error(s.message), s;
            }
        }, this.name = n?.name || re.name, this.metadata = n?.metadata || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAppMetadata"])(), this.signConfig = n?.signConfig;
        const t = typeof n?.logger < "u" && typeof n?.logger != "string" ? n.logger : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pino$2f$pino$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__pino$3e$__["pino"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$logger$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getDefaultLoggerOptions"])({
            level: n?.logger || re.logger
        }));
        this.core = n?.core || new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$web3modal$2f$wagmi$2f$node_modules$2f40$walletconnect$2f$core$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Core"](n), this.logger = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$logger$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["generateChildLogger"])(t, this.name), this.session = new Ze(this.core, this.logger), this.proposal = new es(this.core, this.logger), this.pendingRequest = new ts(this.core, this.logger), this.engine = new Zt(this), this.auth = new ns(this.core, this.logger);
    }
    static async init(n) {
        const t = new oe(n);
        return await t.initialize(), t;
    }
    get context() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$logger$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getLoggerContext"])(this.logger);
    }
    get pairing() {
        return this.core.pairing.pairings;
    }
    async initialize() {
        this.logger.trace("Initialized");
        try {
            await this.core.start(), await this.session.init(), await this.proposal.init(), await this.pendingRequest.init(), await this.engine.init(), await this.auth.init(), this.core.verify.init({
                verifyUrl: this.metadata.verifyUrl
            }), this.logger.info("SignClient Initialization Success");
        } catch (n) {
            throw this.logger.info("SignClient Initialization Failure"), this.logger.error(n.message), n;
        }
    }
}
const os = Ze, as = oe;
;
 //# sourceMappingURL=index.es.js.map

})()),

};

//# sourceMappingURL=1b84e_%40walletconnect_sign-client_dist_index_es_bb8d2d.js.map