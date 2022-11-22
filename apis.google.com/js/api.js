(function() {
    var da = function(a) {
            var b = 0;
            return function() {
                return b < a.length ? {
                    done: !1,
                    value: a[b++]
                } : {
                    done: !0
                }
            }
        },
        g = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
            if (a == Array.prototype || a == Object.prototype) return a;
            a[b] = c.value;
            return a
        },
        ea = function(a) {
            a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
            for (var b = 0; b < a.length; ++b) {
                var c = a[b];
                if (c && c.Math == Math) return c
            }
            throw Error("Cannot find global object");
        },
        fa = ea(this),
        h = function(a, b) {
            if (b) a: {
                var c = fa;a = a.split(".");
                for (var d = 0; d < a.length - 1; d++) {
                    var e = a[d];
                    if (!(e in c)) break a;
                    c = c[e]
                }
                a = a[a.length - 1];d = c[a];b = b(d);b != d && null != b && g(c, a, {
                    configurable: !0,
                    writable: !0,
                    value: b
                })
            }
        };
    h("Symbol", function(a) {
        if (a) return a;
        var b = function(f, k) {
            this.B = f;
            g(this, "description", {
                configurable: !0,
                writable: !0,
                value: k
            })
        };
        b.prototype.toString = function() {
            return this.B
        };
        var c = "jscomp_symbol_" + (1E9 * Math.random() >>> 0) + "_",
            d = 0,
            e = function(f) {
                if (this instanceof e) throw new TypeError("Symbol is not a constructor");
                return new b(c + (f || "") + "_" + d++, f)
            };
        return e
    });
    h("Symbol.iterator", function(a) {
        if (a) return a;
        a = Symbol("Symbol.iterator");
        for (var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), c = 0; c < b.length; c++) {
            var d = fa[b[c]];
            "function" === typeof d && "function" != typeof d.prototype[a] && g(d.prototype, a, {
                configurable: !0,
                writable: !0,
                value: function() {
                    return ha(da(this))
                }
            })
        }
        return a
    });
    var ha = function(a) {
            a = {
                next: a
            };
            a[Symbol.iterator] = function() {
                return this
            };
            return a
        },
        ia = function(a, b, c) {
            if (null == a) throw new TypeError("The 'this' value for String.prototype." + c + " must not be null or undefined");
            if (b instanceof RegExp) throw new TypeError("First argument to String.prototype." + c + " must not be a regular expression");
            return a + ""
        };
    h("String.prototype.endsWith", function(a) {
        return a ? a : function(b, c) {
            var d = ia(this, b, "endsWith");
            b += "";
            void 0 === c && (c = d.length);
            c = Math.max(0, Math.min(c | 0, d.length));
            for (var e = b.length; 0 < e && 0 < c;)
                if (d[--c] != b[--e]) return !1;
            return 0 >= e
        }
    });
    var ja = function(a, b) {
        a instanceof String && (a += "");
        var c = 0,
            d = !1,
            e = {
                next: function() {
                    if (!d && c < a.length) {
                        var f = c++;
                        return {
                            value: b(f, a[f]),
                            done: !1
                        }
                    }
                    d = !0;
                    return {
                        done: !0,
                        value: void 0
                    }
                }
            };
        e[Symbol.iterator] = function() {
            return e
        };
        return e
    };
    h("Array.prototype.entries", function(a) {
        return a ? a : function() {
            return ja(this, function(b, c) {
                return [b, c]
            })
        }
    });
    h("Object.is", function(a) {
        return a ? a : function(b, c) {
            return b === c ? 0 !== b || 1 / b === 1 / c : b !== b && c !== c
        }
    });
    h("Array.prototype.includes", function(a) {
        return a ? a : function(b, c) {
            var d = this;
            d instanceof String && (d = String(d));
            var e = d.length;
            c = c || 0;
            for (0 > c && (c = Math.max(c + e, 0)); c < e; c++) {
                var f = d[c];
                if (f === b || Object.is(f, b)) return !0
            }
            return !1
        }
    });
    h("String.prototype.includes", function(a) {
        return a ? a : function(b, c) {
            return -1 !== ia(this, b, "includes").indexOf(b, c || 0)
        }
    });
    window.gapi = window.gapi || {};
    window.gapi.F = (new Date).getTime();
    /*

     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    var n = this || self,
        p = "closure_uid_" + (1E9 * Math.random() >>> 0),
        ka = 0,
        la = function(a, b) {
            function c() {}
            c.prototype = b.prototype;
            a.H = b.prototype;
            a.prototype = new c;
            a.prototype.constructor = a;
            a.G = function(d, e, f) {
                for (var k = Array(arguments.length - 2), m = 2; m < arguments.length; m++) k[m - 2] = arguments[m];
                return b.prototype[e].apply(d, k)
            }
        },
        t = function(a) {
            return a
        };

    function w(a, b) {
        if (Error.captureStackTrace) Error.captureStackTrace(this, w);
        else {
            var c = Error().stack;
            c && (this.stack = c)
        }
        a && (this.message = String(a));
        void 0 !== b && (this.cause = b)
    }
    la(w, Error);
    w.prototype.name = "CustomError";

    function y(a, b) {
        a = a.split("%s");
        for (var c = "", d = a.length - 1, e = 0; e < d; e++) c += a[e] + (e < b.length ? b[e] : "%s");
        w.call(this, c + a[d])
    }
    la(y, w);
    y.prototype.name = "AssertionError";
    var ma = function(a, b) {
        throw new y("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1));
    };
    var z = function(a, b) {
        this.name = a;
        this.value = b
    };
    z.prototype.toString = function() {
        return this.name
    };
    var B = new z("OFF", Infinity),
        na = new z("WARNING", 900),
        oa = new z("CONFIG", 700),
        pa = function() {
            this.g = 0;
            this.clear()
        },
        C;
    pa.prototype.clear = function() {
        this.l = Array(this.g);
        this.o = -1;
        this.s = !1
    };
    var F = function(a, b, c) {
        this.reset(a || B, b, c, void 0, void 0)
    };
    F.prototype.reset = function() {};
    var qa = function(a, b) {
            this.level = null;
            this.C = [];
            this.parent = (void 0 === b ? null : b) || null;
            this.children = [];
            this.D = {
                i: function() {
                    return a
                }
            }
        },
        ra = function(a) {
            if (a.level) return a.level;
            if (a.parent) return ra(a.parent);
            ma("Root logger has no level set.");
            return B
        },
        sa = function(a, b) {
            for (; a;) a.C.forEach(function(c) {
                c(b)
            }), a = a.parent
        },
        ta = function() {
            this.entries = {};
            var a = new qa("");
            a.level = oa;
            this.entries[""] = a
        },
        G, H = function(a, b) {
            var c = a.entries[b];
            if (c) return c;
            c = H(a, b.slice(0, Math.max(b.lastIndexOf("."), 0)));
            var d =
                new qa(b, c);
            a.entries[b] = d;
            c.children.push(d);
            return d
        },
        I = function() {
            G || (G = new ta);
            return G
        };
    /*

     SPDX-License-Identifier: Apache-2.0
    */
    var ua = [],
        va = function(a) {
            var b;
            if (b = H(I(), "safevalues").D) {
                var c = "A URL with content '" + a + "' was sanitized away.",
                    d = na;
                if (a = b)
                    if (a = b && d) {
                        a = d.value;
                        var e = b ? ra(H(I(), b.i())) : B;
                        a = a >= e.value
                    }
                if (a) {
                    d = d || B;
                    a = H(I(), b.i());
                    "function" === typeof c && (c = c());
                    C || (C = new pa);
                    e = C;
                    b = b.i();
                    if (0 < e.g) {
                        var f = (e.o + 1) % e.g;
                        e.o = f;
                        e.s ? (e = e.l[f], e.reset(d, c, b), b = e) : (e.s = f == e.g - 1, b = e.l[f] = new F(d, c, b))
                    } else b = new F(d, c, b);
                    sa(a, b)
                }
            }
        }; - 1 === ua.indexOf(va) && ua.push(va);
    /*
     gapi.loader.OBJECT_CREATE_TEST_OVERRIDE &&*/
    var J = window,
        K = document,
        wa = J.location,
        xa = function() {},
        ya = /\[native code\]/,
        L = function(a, b, c) {
            return a[b] = a[b] || c
        },
        Aa = function(a) {
            a = a.sort();
            for (var b = [], c = void 0, d = 0; d < a.length; d++) {
                var e = a[d];
                e != c && b.push(e);
                c = e
            }
            return b
        },
        M = function() {
            var a;
            if ((a = Object.create) && ya.test(a)) a = a(null);
            else {
                a = {};
                for (var b in a) a[b] = void 0
            }
            return a
        },
        P = L(J, "gapi", {});
    var Q = {};
    Q = L(J, "___jsl", M());
    L(Q, "I", 0);
    L(Q, "hel", 10);
    var Ba = function() {
            var a = wa.href;
            if (Q.dpo) var b = Q.h;
            else {
                b = Q.h;
                var c = RegExp("([#].*&|[#])jsh=([^&#]*)", "g"),
                    d = RegExp("([?#].*&|[?#])jsh=([^&#]*)", "g");
                if (a = a && (c.exec(a) || d.exec(a))) try {
                    b = decodeURIComponent(a[2])
                } catch (e) {}
            }
            return b
        },
        Ca = function(a) {
            var b = L(Q, "PQ", []);
            Q.PQ = [];
            var c = b.length;
            if (0 === c) a();
            else
                for (var d = 0, e = function() {
                        ++d === c && a()
                    }, f = 0; f < c; f++) b[f](e)
        },
        R = function(a) {
            return L(L(Q, "H", M()), a, M())
        };
    var S = L(Q, "perf", M()),
        Da = L(S, "g", M()),
        Ea = L(S, "i", M());
    L(S, "r", []);
    M();
    M();
    var T = function(a, b, c) {
            var d = S.r;
            "function" === typeof d ? d(a, b, c) : d.push([a, b, c])
        },
        U = function(a, b, c) {
            b && 0 < b.length && (b = Fa(b), c && 0 < c.length && (b += "___" + Fa(c)), 28 < b.length && (b = b.substr(0, 28) + (b.length - 28)), c = b, b = L(Ea, "_p", M()), L(b, c, M())[a] = (new Date).getTime(), T(a, "_p", c))
        },
        Fa = function(a) {
            return a.join("__").replace(/\./g, "_").replace(/\-/g, "_").replace(/,/g, "_")
        };
    var Ga = M(),
        V = [],
        W = function(a) {
            throw Error("Bad hint: " + a);
        };
    V.push(["jsl", function(a) {
        for (var b in a)
            if (Object.prototype.hasOwnProperty.call(a, b)) {
                var c = a[b];
                "object" == typeof c ? Q[b] = L(Q, b, []).concat(c) : L(Q, b, c)
            }
        if (b = a.u) a = L(Q, "us", []), a.push(b), (b = /^https:(.*)$/.exec(b)) && a.push("http:" + b[1])
    }]);
    var Ha = /^(\/[a-zA-Z0-9_\-]+)+$/,
        Ia = [/\/amp\//, /\/amp$/, /^\/amp$/],
        Ja = /^[a-zA-Z0-9\-_\.,!]+$/,
        Ka = /^gapi\.loaded_[0-9]+$/,
        La = /^[a-zA-Z0-9,._-]+$/,
        Pa = function(a, b, c, d, e) {
            var f = a.split(";"),
                k = f.shift(),
                m = Ga[k],
                l = null;
            m ? l = m(f, b, c, d) : W("no hint processor for: " + k);
            l || W("failed to generate load url");
            b = l;
            c = b.match(Ma);
            (d = b.match(Na)) && 1 === d.length && Oa.test(b) && c && 1 === c.length || W("failed sanity: " + a);
            try {
                a = "?";
                if (e && 0 < e.length) {
                    c = b = 0;
                    for (d = {}; c < e.length;) {
                        var q = e[c++];
                        f = void 0;
                        k = typeof q;
                        f = "object" == k && null !=
                            q || "function" == k ? "o" + (Object.prototype.hasOwnProperty.call(q, p) && q[p] || (q[p] = ++ka)) : (typeof q).charAt(0) + q;
                        Object.prototype.hasOwnProperty.call(d, f) || (d[f] = !0, e[b++] = q)
                    }
                    e.length = b;
                    l = l + "?le=" + e.join(",");
                    a = "&"
                }
                if (Q.rol) {
                    var A = Q.ol;
                    A && A.length && (l = "" + l + a + "ol=" + A.length)
                }
            } catch (aa) {}
            return l
        },
        Sa = function(a, b, c, d) {
            a = Qa(a);
            Ka.test(c) || W("invalid_callback");
            b = Ra(b);
            d = d && d.length ? Ra(d) : null;
            var e = function(f) {
                return encodeURIComponent(f).replace(/%2C/g, ",")
            };
            return [encodeURIComponent(a.pathPrefix).replace(/%2C/g,
                ",").replace(/%2F/g, "/"), "/k=", e(a.version), "/m=", e(b), d ? "/exm=" + e(d) : "", "/rt=j/sv=1/d=1/ed=1", a.j ? "/am=" + e(a.j) : "", a.v ? "/rs=" + e(a.v) : "", a.A ? "/t=" + e(a.A) : "", "/cb=", e(c)].join("")
        },
        Qa = function(a) {
            "/" !== a.charAt(0) && W("relative path");
            for (var b = a.substring(1).split("/"), c = []; b.length;) {
                a = b.shift();
                if (!a.length || 0 == a.indexOf(".")) W("empty/relative directory");
                else if (0 < a.indexOf("=")) {
                    b.unshift(a);
                    break
                }
                c.push(a)
            }
            a = {};
            for (var d = 0, e = b.length; d < e; ++d) {
                var f = b[d].split("="),
                    k = decodeURIComponent(f[0]),
                    m =
                    decodeURIComponent(f[1]);
                2 == f.length && k && m && (a[k] = a[k] || m)
            }
            b = "/" + c.join("/");
            Ha.test(b) || W("invalid_prefix");
            c = 0;
            for (d = Ia.length; c < d; ++c) Ia[c].test(b) && W("invalid_prefix");
            c = X(a, "k", !0);
            d = X(a, "am");
            e = X(a, "rs");
            a = X(a, "t");
            return {
                pathPrefix: b,
                version: c,
                j: d,
                v: e,
                A: a
            }
        },
        Ra = function(a) {
            for (var b = [], c = 0, d = a.length; c < d; ++c) {
                var e = a[c].replace(/\./g, "_").replace(/-/g, "_");
                La.test(e) && b.push(e)
            }
            return b.join(",")
        },
        X = function(a, b, c) {
            a = a[b];
            !a && c && W("missing: " + b);
            if (a) {
                if (Ja.test(a)) return a;
                W("invalid: " + b)
            }
            return null
        },
        Oa = /^https?:\/\/[a-z0-9_.-]+\.google(rs)?\.com(:\d+)?\/[a-zA-Z0-9_.,!=\-\/]+$/,
        Na = /\/cb=/g,
        Ma = /\/\//g;
    Ga.m = function(a, b, c, d) {
        (a = a[0]) || W("missing_hint");
        return "https://apis.google.com" + Sa(a, b, c, d)
    };
    var Y = decodeURI("%73cript"),
        Ta = /^[-+_0-9\/A-Za-z]+={0,2}$/,
        Ua = function(a, b) {
            for (var c = [], d = 0; d < a.length; ++d) {
                var e = a[d],
                    f;
                if (f = e) {
                    a: {
                        for (f = 0; f < b.length; f++)
                            if (b[f] === e) break a;f = -1
                    }
                    f = 0 > f
                }
                f && c.push(e)
            }
            return c
        },
        Va = function() {
            var a = Q.nonce;
            return void 0 !== a ? a && a === String(a) && a.match(Ta) ? a : Q.nonce = null : K.querySelector ? (a = K.querySelector("script[nonce]")) ? (a = a.nonce || a.getAttribute("nonce") || "", a && a === String(a) && a.match(Ta) ? Q.nonce = a : Q.nonce = null) : null : null
        },
        Xa = function(a) {
            if ("loading" != K.readyState) Wa(a);
            else {
                var b = Va(),
                    c = "";
                null !== b && (c = ' nonce="' + b + '"');
                a = "<" + Y + ' src="' + encodeURI(a) + '"' + c + "></" + Y + ">";
                K.write(Z ? Z.createHTML(a) : a)
            }
        },
        Wa = function(a) {
            var b = K.createElement(Y);
            b.setAttribute("src", Z ? Z.createScriptURL(a) : a);
            a = Va();
            null !== a && b.setAttribute("nonce", a);
            b.async = "true";
            (a = K.getElementsByTagName(Y)[0]) ? a.parentNode.insertBefore(b, a): (K.head || K.body || K.documentElement).appendChild(b)
        },
        Za = function(a, b, c) {
            Ya(function() {
                var d = b === Ba() ? L(P, "_", M()) : M();
                d = L(R(b), "_", d);
                a(d)
            }, c)
        },
        ab = function(a, b) {
            var c =
                b || {};
            "function" == typeof b && (c = {}, c.callback = b);
            var d = (b = c) && b._c;
            if (d)
                for (var e = 0; e < V.length; e++) {
                    var f = V[e][0],
                        k = V[e][1];
                    k && Object.prototype.hasOwnProperty.call(d, f) && k(d[f], a, b)
                }
            b = [];
            a ? b = a.split(":") : c.features && (b = c.features);
            if (!(a = c.h) && (a = Ba(), !a)) throw Error("Bad hint: !hint");
            $a(b || [], c, a)
        },
        $a = function(a, b, c) {
            var d = !!Q.glrp;
            a = Aa(a) || [];
            var e = b.callback,
                f = b.config,
                k = b.timeout,
                m = b.ontimeout,
                l = b.onerror,
                q = void 0;
            "function" == typeof l && (q = l);
            var A = null,
                aa = !1;
            if (k && !m || !k && m) throw "Timeout requires both the timeout parameter and ontimeout parameter to be set";
            l = L(R(c), "r", []).sort();
            var ba = L(R(c), "L", []).sort(),
                fb = Q.le || [],
                N = [].concat(l),
                za = function(x, D) {
                    if (aa) return 0;
                    J.clearTimeout(A);
                    ba.push.apply(ba, r);
                    var E = ((P || {}).config || {}).update;
                    E ? E(f) : f && L(Q, "cu", []).push(f);
                    if (D) {
                        U("me0", x, N);
                        try {
                            Za(D, c, q)
                        } finally {
                            U("me1", x, N)
                        }
                    }
                    return 1
                };
            0 < k && (A = J.setTimeout(function() {
                aa = !0;
                m()
            }, k));
            var r = Ua(a, ba);
            if (r.length) {
                r = Ua(a, l);
                var u = L(Q, "CP", []),
                    v = u.length;
                u[v] = function(x) {
                    if (!x) return 0;
                    U("ml1", r, N);
                    var D = function(O) {
                            d || (u[v] = null);
                            za(r, x) && (d && (u[v] = null), Ca(function() {
                                e &&
                                    e();
                                O()
                            }))
                        },
                        E = function() {
                            var O = u[v + 1];
                            O && O()
                        };
                    0 < v && u[v - 1] ? u[v] = function() {
                        D(E)
                    } : D(E)
                };
                if (r.length) {
                    var ca = "loaded_" + Q.I++;
                    P[ca] = function(x) {
                        u[v](x);
                        P[ca] = null
                    };
                    a = Pa(c, r, "gapi." + ca, l, fb);
                    l.push.apply(l, r);
                    U("ml0", r, N);
                    b.sync || J.___gapisync ? Xa(a) : Wa(a)
                } else u[v](xa)
            } else za(r) && e && e()
        },
        bb;
    var cb = null,
        db = n.trustedTypes;
    if (db && db.createPolicy) try {
        cb = db.createPolicy("gapi#gapi", {
            createHTML: t,
            createScript: t,
            createScriptURL: t
        })
    } catch (a) {
        n.console && n.console.error(a.message)
    }
    bb = cb;
    var Z = bb;
    var Ya = function(a, b) {
        if (Q.hee && 0 < Q.hel) try {
            return a()
        } catch (c) {
            b && b(c), Q.hel--, ab("debug_error", function() {
                try {
                    window.___jsl.hefn(c)
                } catch (d) {
                    throw c;
                }
            })
        } else try {
            return a()
        } catch (c) {
            throw b && b(c), c;
        }
    };
    var eb = P.load;
    eb && L(Q, "ol", []).push(eb);
    P.load = function(a, b) {
        return Ya(function() {
            return ab(a, b)
        })
    };
    V.unshift(["url", function(a, b, c) {
        !a || b && "" !== b || !a.endsWith(".js") || (a = a.substring(0, a.length - 3), b = a.lastIndexOf("/") + 1, b >= a.length || (a = a.substr(b).split(":").filter(function(d) {
            return !["api", "platform"].includes(d)
        }), c.features = a))
    }]);
    Da.bs0 = window.gapi._bs || (new Date).getTime();
    T("bs0");
    Da.bs1 = (new Date).getTime();
    T("bs1");
    delete window.gapi._bs;
    window.gapi.load("", {
        callback: window["gapi_onload"],
        _c: {
            url: "https://apis.google.com/js/api.js",
            jsl: {
                ci: {
                    "oauth-flow": {
                        authUrl: "https://accounts.google.com/o/oauth2/auth",
                        proxyUrl: "https://accounts.google.com/o/oauth2/postmessageRelay",
                        disableOpt: !0,
                        idpIframeUrl: "https://accounts.google.com/o/oauth2/iframe",
                        usegapi: !1
                    },
                    debug: {
                        reportExceptionRate: 1,
                        forceIm: !1,
                        rethrowException: !0,
                        host: "https://apis.google.com"
                    },
                    enableMultilogin: !0,
                    "googleapis.config": {
                        auth: {
                            useFirstPartyAuthV2: !0
                        },
                        root: "https://content.googleapis.com",
                        "root-1p": "https://clients6.google.com"
                    },
                    inline: {
                        css: 1
                    },
                    disableRealtimeCallback: !1,
                    drive_share: {
                        skipInitCommand: !0
                    },
                    csi: {
                        rate: .01
                    },
                    client: {
                        cors: !1
                    },
                    signInDeprecation: {
                        rate: 0
                    },
                    include_granted_scopes: !0,
                    llang: "en",
                    iframes: {
                        youtube: {
                            params: {
                                location: ["search", "hash"]
                            },
                            url: ":socialhost:/:session_prefix:_/widget/render/youtube?usegapi=1",
                            methods: ["scroll", "openwindow"]
                        },
                        ytsubscribe: {
                            url: "https://www.youtube.com/subscribe_embed?usegapi=1"
                        },
                        plus_circle: {
                            params: {
                                url: ""
                            },
                            url: ":socialhost:/:session_prefix::se:_/widget/plus/circle?usegapi=1"
                        },
                        plus_share: {
                            params: {
                                url: ""
                            },
                            url: ":socialhost:/:session_prefix::se:_/+1/sharebutton?plusShare=true&usegapi=1"
                        },
                        rbr_s: {
                            params: {
                                url: ""
                            },
                            url: ":socialhost:/:session_prefix::se:_/widget/render/recobarsimplescroller"
                        },
                        ":source:": "3p",
                        playemm: {
                            url: "https://play.google.com/work/embedded/search?usegapi=1&usegapi=1"
                        },
                        savetoandroidpay: {
                            url: "https://pay.google.com/gp/v/widget/save"
                        },
                        blogger: {
                            params: {
                                location: ["search", "hash"]
                            },
                            url: ":socialhost:/:session_prefix:_/widget/render/blogger?usegapi=1",
                            methods: ["scroll", "openwindow"]
                        },
                        evwidget: {
                            params: {
                                url: ""
                            },
                            url: ":socialhost:/:session_prefix:_/events/widget?usegapi=1"
                        },
                        partnersbadge: {
                            url: "https://www.gstatic.com/partners/badge/templates/badge.html?usegapi=1"
                        },
                        dataconnector: {
                            url: "https://dataconnector.corp.google.com/:session_prefix:ui/widgetview?usegapi=1"
                        },
                        surveyoptin: {
                            url: "https://www.google.com/shopping/customerreviews/optin?usegapi=1"
                        },
                        ":socialhost:": "https://apis.google.com",
                        shortlists: {
                            url: ""
                        },
                        hangout: {
                            url: "https://talkgadget.google.com/:session_prefix:talkgadget/_/widget"
                        },
                        plus_followers: {
                            params: {
                                url: ""
                            },
                            url: ":socialhost:/_/im/_/widget/render/plus/followers?usegapi=1"
                        },
                        post: {
                            params: {
                                url: ""
                            },
                            url: ":socialhost:/:session_prefix::im_prefix:_/widget/render/post?usegapi=1"
                        },
                        signin: {
                            params: {
                                url: ""
                            },
                            url: ":socialhost:/:session_prefix:_/widget/render/signin?usegapi=1",
                            methods: ["onauth"]
                        },
                        rbr_i: {
                            params: {
                                url: ""
                            },
                            url: ":socialhost:/:session_prefix::se:_/widget/render/recobarinvitation"
                        },
                        share: {
                            url: ":socialhost:/:session_prefix::im_prefix:_/widget/render/share?usegapi=1"
                        },
                        plusone: {
                            params: {
                                count: "",
                                size: "",
                                url: ""
                            },
                            url: ":socialhost:/:session_prefix::se:_/+1/fastbutton?usegapi=1"
                        },
                        comments: {
                            params: {
                                location: ["search", "hash"]
                            },
                            url: ":socialhost:/:session_prefix:_/widget/render/comments?usegapi=1",
                            methods: ["scroll", "openwindow"]
                        },
                        ":im_socialhost:": "https://plus.googleapis.com",
                        backdrop: {
                            url: "https://clients3.google.com/cast/chromecast/home/widget/backdrop?usegapi=1"
                        },
                        visibility: {
                            params: {
                                url: ""
                            },
                            url: ":socialhost:/:session_prefix:_/widget/render/visibility?usegapi=1"
                        },
                        autocomplete: {
                            params: {
                                url: ""
                            },
                            url: ":socialhost:/:session_prefix:_/widget/render/autocomplete"
                        },
                        ":signuphost:": "https://plus.google.com",
                        ratingbadge: {
                            url: "https://www.google.com/shopping/customerreviews/badge?usegapi=1"
                        },
                        appcirclepicker: {
                            url: ":socialhost:/:session_prefix:_/widget/render/appcirclepicker"
                        },
                        follow: {
                            url: ":socialhost:/:session_prefix:_/widget/render/follow?usegapi=1"
                        },
                        community: {
                            url: ":ctx_socialhost:/:session_prefix::im_prefix:_/widget/render/community?usegapi=1"
                        },
                        sharetoclassroom: {
                            url: "https://classroom.google.com/sharewidget?usegapi=1"
                        },
                        ytshare: {
                            params: {
                                url: ""
                            },
                            url: ":socialhost:/:session_prefix:_/widget/render/ytshare?usegapi=1"
                        },
                        plus: {
                            url: ":socialhost:/:session_prefix:_/widget/render/badge?usegapi=1"
                        },
                        family_creation: {
                            params: {
                                url: ""
                            },
                            url: "https://families.google.com/webcreation?usegapi=1&usegapi=1"
                        },
                        commentcount: {
                            url: ":socialhost:/:session_prefix:_/widget/render/commentcount?usegapi=1"
                        },
                        configurator: {
                            url: ":socialhost:/:session_prefix:_/plusbuttonconfigurator?usegapi=1"
                        },
                        zoomableimage: {
                            url: "https://ssl.gstatic.com/microscope/embed/"
                        },
                        appfinder: {
                            url: "https://workspace.google.com/:session_prefix:marketplace/appfinder?usegapi=1"
                        },
                        savetowallet: {
                            url: "https://pay.google.com/gp/v/widget/save"
                        },
                        person: {
                            url: ":socialhost:/:session_prefix:_/widget/render/person?usegapi=1"
                        },
                        savetodrive: {
                            url: "https://drive.google.com/savetodrivebutton?usegapi=1",
                            methods: ["save"]
                        },
                        page: {
                            url: ":socialhost:/:session_prefix:_/widget/render/page?usegapi=1"
                        },
                        card: {
                            url: ":socialhost:/:session_prefix:_/hovercard/card"
                        }
                    }
                },
                h: "m;/_/scs/abc-static/_/js/k=gapi.lb.en.geaHZXF2-fw.O/d=1/rs=AHpOoo9yYF5eCIYPx4UH9gpJptM2Q_GGxQ/m=__features__",
                u: "https://apis.google.com/js/api.js",
                hee: !0,
                dpo: !1,
                le: ["scs"],
                glrp: false
            },
            platform: "backdrop blogger comments commentcount community donation family_creation follow hangout health page partnersbadge person playemm playreview plus plusone post ratingbadge savetoandroidpay savetodrive savetowallet sharetoclassroom shortlists signin2 surveyoptin visibility youtube ytsubscribe zoomableimage".split(" "),
            annotation: ["interactivepost", "recobar", "signin2", "autocomplete"]
        }
    });
}).call(this);