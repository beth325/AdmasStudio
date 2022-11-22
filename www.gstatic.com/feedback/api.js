(function() {
    /*

     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    'use strict';
    var n;

    function aa(a) {
        var b = 0;
        return function() {
            return b < a.length ? {
                done: !1,
                value: a[b++]
            } : {
                done: !0
            }
        }
    }
    var q = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
        if (a == Array.prototype || a == Object.prototype) return a;
        a[b] = c.value;
        return a
    };

    function ba(a) {
        a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
        for (var b = 0; b < a.length; ++b) {
            var c = a[b];
            if (c && c.Math == Math) return c
        }
        throw Error("Cannot find global object");
    }
    var r = ba(this);

    function t(a, b) {
        if (b) a: {
            var c = r;a = a.split(".");
            for (var d = 0; d < a.length - 1; d++) {
                var h = a[d];
                if (!(h in c)) break a;
                c = c[h]
            }
            a = a[a.length - 1];d = c[a];b = b(d);b != d && null != b && q(c, a, {
                configurable: !0,
                writable: !0,
                value: b
            })
        }
    }
    t("Symbol", function(a) {
        function b(f) {
            if (this instanceof b) throw new TypeError("Symbol is not a constructor");
            return new c(d + (f || "") + "_" + h++, f)
        }

        function c(f, e) {
            this.h = f;
            q(this, "description", {
                configurable: !0,
                writable: !0,
                value: e
            })
        }
        if (a) return a;
        c.prototype.toString = function() {
            return this.h
        };
        var d = "jscomp_symbol_" + (1E9 * Math.random() >>> 0) + "_",
            h = 0;
        return b
    });
    t("Symbol.iterator", function(a) {
        if (a) return a;
        a = Symbol("Symbol.iterator");
        for (var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), c = 0; c < b.length; c++) {
            var d = r[b[c]];
            "function" === typeof d && "function" != typeof d.prototype[a] && q(d.prototype, a, {
                configurable: !0,
                writable: !0,
                value: function() {
                    return ca(aa(this))
                }
            })
        }
        return a
    });

    function ca(a) {
        a = {
            next: a
        };
        a[Symbol.iterator] = function() {
            return this
        };
        return a
    }

    function da(a) {
        return a.raw = a
    }

    function w(a) {
        var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
        return b ? b.call(a) : {
            next: aa(a)
        }
    }
    var ea = "function" == typeof Object.create ? Object.create : function(a) {
            function b() {}
            b.prototype = a;
            return new b
        },
        fa;
    if ("function" == typeof Object.setPrototypeOf) fa = Object.setPrototypeOf;
    else {
        var ha;
        a: {
            var ia = {
                    a: !0
                },
                ja = {};
            try {
                ja.__proto__ = ia;
                ha = ja.a;
                break a
            } catch (a) {}
            ha = !1
        }
        fa = ha ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    var ka = fa;

    function la(a, b) {
        a.prototype = ea(b.prototype);
        a.prototype.constructor = a;
        if (ka) ka(a, b);
        else
            for (var c in b)
                if ("prototype" != c)
                    if (Object.defineProperties) {
                        var d = Object.getOwnPropertyDescriptor(b, c);
                        d && Object.defineProperty(a, c, d)
                    } else a[c] = b[c];
        a.V = b.prototype
    }

    function ma() {
        this.l = !1;
        this.h = null;
        this.o = void 0;
        this.i = 1;
        this.A = 0;
        this.j = null
    }

    function pa(a) {
        if (a.l) throw new TypeError("Generator is already running");
        a.l = !0
    }
    ma.prototype.u = function(a) {
        this.o = a
    };

    function qa(a, b) {
        a.j = {
            da: b,
            ea: !0
        };
        a.i = a.A
    }
    ma.prototype.return = function(a) {
        this.j = {
            return: a
        };
        this.i = this.A
    };

    function ra(a) {
        this.h = new ma;
        this.i = a
    }

    function sa(a, b) {
        pa(a.h);
        var c = a.h.h;
        if (c) return ta(a, "return" in c ? c["return"] : function(d) {
            return {
                value: d,
                done: !0
            }
        }, b, a.h.return);
        a.h.return(b);
        return x(a)
    }

    function ta(a, b, c, d) {
        try {
            var h = b.call(a.h.h, c);
            if (!(h instanceof Object)) throw new TypeError("Iterator result " + h + " is not an object");
            if (!h.done) return a.h.l = !1, h;
            var f = h.value
        } catch (e) {
            return a.h.h = null, qa(a.h, e), x(a)
        }
        a.h.h = null;
        d.call(a.h, f);
        return x(a)
    }

    function x(a) {
        for (; a.h.i;) try {
            var b = a.i(a.h);
            if (b) return a.h.l = !1, {
                value: b.value,
                done: !1
            }
        } catch (c) {
            a.h.o = void 0, qa(a.h, c)
        }
        a.h.l = !1;
        if (a.h.j) {
            b = a.h.j;
            a.h.j = null;
            if (b.ea) throw b.da;
            return {
                value: b.return,
                done: !0
            }
        }
        return {
            value: void 0,
            done: !0
        }
    }

    function ua(a) {
        this.next = function(b) {
            pa(a.h);
            a.h.h ? b = ta(a, a.h.h.next, b, a.h.u) : (a.h.u(b), b = x(a));
            return b
        };
        this.throw = function(b) {
            pa(a.h);
            a.h.h ? b = ta(a, a.h.h["throw"], b, a.h.u) : (qa(a.h, b), b = x(a));
            return b
        };
        this.return = function(b) {
            return sa(a, b)
        };
        this[Symbol.iterator] = function() {
            return this
        }
    }

    function va(a) {
        function b(d) {
            return a.next(d)
        }

        function c(d) {
            return a.throw(d)
        }
        return new Promise(function(d, h) {
            function f(e) {
                e.done ? d(e.value) : Promise.resolve(e.value).then(b, c).then(f, h)
            }
            f(a.next())
        })
    }

    function wa(a) {
        return va(new ua(new ra(a)))
    }

    function xa() {
        for (var a = Number(this), b = [], c = a; c < arguments.length; c++) b[c - a] = arguments[c];
        return b
    }
    t("Promise", function(a) {
        function b(e) {
            this.h = 0;
            this.j = void 0;
            this.i = [];
            this.A = !1;
            var g = this.l();
            try {
                e(g.resolve, g.reject)
            } catch (k) {
                g.reject(k)
            }
        }

        function c() {
            this.h = null
        }

        function d(e) {
            return e instanceof b ? e : new b(function(g) {
                g(e)
            })
        }
        if (a) return a;
        c.prototype.i = function(e) {
            if (null == this.h) {
                this.h = [];
                var g = this;
                this.j(function() {
                    g.o()
                })
            }
            this.h.push(e)
        };
        var h = r.setTimeout;
        c.prototype.j = function(e) {
            h(e, 0)
        };
        c.prototype.o = function() {
            for (; this.h && this.h.length;) {
                var e = this.h;
                this.h = [];
                for (var g = 0; g < e.length; ++g) {
                    var k =
                        e[g];
                    e[g] = null;
                    try {
                        k()
                    } catch (l) {
                        this.l(l)
                    }
                }
            }
            this.h = null
        };
        c.prototype.l = function(e) {
            this.j(function() {
                throw e;
            })
        };
        b.prototype.l = function() {
            function e(l) {
                return function(m) {
                    k || (k = !0, l.call(g, m))
                }
            }
            var g = this,
                k = !1;
            return {
                resolve: e(this.I),
                reject: e(this.o)
            }
        };
        b.prototype.I = function(e) {
            if (e === this) this.o(new TypeError("A Promise cannot resolve to itself"));
            else if (e instanceof b) this.K(e);
            else {
                a: switch (typeof e) {
                    case "object":
                        var g = null != e;
                        break a;
                    case "function":
                        g = !0;
                        break a;
                    default:
                        g = !1
                }
                g ? this.G(e) : this.u(e)
            }
        };
        b.prototype.G = function(e) {
            var g = void 0;
            try {
                g = e.then
            } catch (k) {
                this.o(k);
                return
            }
            "function" == typeof g ? this.L(g, e) : this.u(e)
        };
        b.prototype.o = function(e) {
            this.D(2, e)
        };
        b.prototype.u = function(e) {
            this.D(1, e)
        };
        b.prototype.D = function(e, g) {
            if (0 != this.h) throw Error("Cannot settle(" + e + ", " + g + "): Promise already settled in state" + this.h);
            this.h = e;
            this.j = g;
            2 === this.h && this.J();
            this.H()
        };
        b.prototype.J = function() {
            var e = this;
            h(function() {
                if (e.F()) {
                    var g = r.console;
                    "undefined" !== typeof g && g.error(e.j)
                }
            }, 1)
        };
        b.prototype.F =
            function() {
                if (this.A) return !1;
                var e = r.CustomEvent,
                    g = r.Event,
                    k = r.dispatchEvent;
                if ("undefined" === typeof k) return !0;
                "function" === typeof e ? e = new e("unhandledrejection", {
                    cancelable: !0
                }) : "function" === typeof g ? e = new g("unhandledrejection", {
                    cancelable: !0
                }) : (e = r.document.createEvent("CustomEvent"), e.initCustomEvent("unhandledrejection", !1, !0, e));
                e.promise = this;
                e.reason = this.j;
                return k(e)
            };
        b.prototype.H = function() {
            if (null != this.i) {
                for (var e = 0; e < this.i.length; ++e) f.i(this.i[e]);
                this.i = null
            }
        };
        var f = new c;
        b.prototype.K =
            function(e) {
                var g = this.l();
                e.N(g.resolve, g.reject)
            };
        b.prototype.L = function(e, g) {
            var k = this.l();
            try {
                e.call(g, k.resolve, k.reject)
            } catch (l) {
                k.reject(l)
            }
        };
        b.prototype.then = function(e, g) {
            function k(u, v) {
                return "function" == typeof u ? function(na) {
                    try {
                        l(u(na))
                    } catch (oa) {
                        m(oa)
                    }
                } : v
            }
            var l, m, p = new b(function(u, v) {
                l = u;
                m = v
            });
            this.N(k(e, l), k(g, m));
            return p
        };
        b.prototype.catch = function(e) {
            return this.then(void 0, e)
        };
        b.prototype.N = function(e, g) {
            function k() {
                switch (l.h) {
                    case 1:
                        e(l.j);
                        break;
                    case 2:
                        g(l.j);
                        break;
                    default:
                        throw Error("Unexpected state: " +
                            l.h);
                }
            }
            var l = this;
            null == this.i ? f.i(k) : this.i.push(k);
            this.A = !0
        };
        b.resolve = d;
        b.reject = function(e) {
            return new b(function(g, k) {
                k(e)
            })
        };
        b.race = function(e) {
            return new b(function(g, k) {
                for (var l = w(e), m = l.next(); !m.done; m = l.next()) d(m.value).N(g, k)
            })
        };
        b.all = function(e) {
            var g = w(e),
                k = g.next();
            return k.done ? d([]) : new b(function(l, m) {
                function p(na) {
                    return function(oa) {
                        u[na] = oa;
                        v--;
                        0 == v && l(u)
                    }
                }
                var u = [],
                    v = 0;
                do u.push(void 0), v++, d(k.value).N(p(u.length - 1), m), k = g.next(); while (!k.done)
            })
        };
        return b
    });
    t("Array.prototype.find", function(a) {
        return a ? a : function(b, c) {
            a: {
                var d = this;d instanceof String && (d = String(d));
                for (var h = d.length, f = 0; f < h; f++) {
                    var e = d[f];
                    if (b.call(c, e, f, d)) {
                        b = e;
                        break a
                    }
                }
                b = void 0
            }
            return b
        }
    });

    function y(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    }
    t("WeakMap", function(a) {
        function b(k) {
            this.h = (g += Math.random() + 1).toString();
            if (k) {
                k = w(k);
                for (var l; !(l = k.next()).done;) l = l.value, this.set(l[0], l[1])
            }
        }

        function c() {}

        function d(k) {
            var l = typeof k;
            return "object" === l && null !== k || "function" === l
        }

        function h(k) {
            if (!y(k, e)) {
                var l = new c;
                q(k, e, {
                    value: l
                })
            }
        }

        function f(k) {
            var l = Object[k];
            l && (Object[k] = function(m) {
                if (m instanceof c) return m;
                Object.isExtensible(m) && h(m);
                return l(m)
            })
        }
        if (function() {
                if (!a || !Object.seal) return !1;
                try {
                    var k = Object.seal({}),
                        l = Object.seal({}),
                        m = new a([
                            [k, 2],
                            [l, 3]
                        ]);
                    if (2 != m.get(k) || 3 != m.get(l)) return !1;
                    m.delete(k);
                    m.set(l, 4);
                    return !m.has(k) && 4 == m.get(l)
                } catch (p) {
                    return !1
                }
            }()) return a;
        var e = "$jscomp_hidden_" + Math.random();
        f("freeze");
        f("preventExtensions");
        f("seal");
        var g = 0;
        b.prototype.set = function(k, l) {
            if (!d(k)) throw Error("Invalid WeakMap key");
            h(k);
            if (!y(k, e)) throw Error("WeakMap key fail: " + k);
            k[e][this.h] = l;
            return this
        };
        b.prototype.get = function(k) {
            return d(k) && y(k, e) ? k[e][this.h] : void 0
        };
        b.prototype.has = function(k) {
            return d(k) && y(k,
                e) && y(k[e], this.h)
        };
        b.prototype.delete = function(k) {
            return d(k) && y(k, e) && y(k[e], this.h) ? delete k[e][this.h] : !1
        };
        return b
    });
    t("Map", function(a) {
        function b() {
            var g = {};
            return g.B = g.next = g.head = g
        }

        function c(g, k) {
            var l = g.h;
            return ca(function() {
                if (l) {
                    for (; l.head != g.h;) l = l.B;
                    for (; l.next != l.head;) return l = l.next, {
                        done: !1,
                        value: k(l)
                    };
                    l = null
                }
                return {
                    done: !0,
                    value: void 0
                }
            })
        }

        function d(g, k) {
            var l = k && typeof k;
            "object" == l || "function" == l ? f.has(k) ? l = f.get(k) : (l = "" + ++e, f.set(k, l)) : l = "p_" + k;
            var m = g.i[l];
            if (m && y(g.i, l))
                for (g = 0; g < m.length; g++) {
                    var p = m[g];
                    if (k !== k && p.key !== p.key || k === p.key) return {
                        id: l,
                        list: m,
                        index: g,
                        s: p
                    }
                }
            return {
                id: l,
                list: m,
                index: -1,
                s: void 0
            }
        }

        function h(g) {
            this.i = {};
            this.h = b();
            this.size = 0;
            if (g) {
                g = w(g);
                for (var k; !(k = g.next()).done;) k = k.value, this.set(k[0], k[1])
            }
        }
        if (function() {
                if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal) return !1;
                try {
                    var g = Object.seal({
                            x: 4
                        }),
                        k = new a(w([
                            [g, "s"]
                        ]));
                    if ("s" != k.get(g) || 1 != k.size || k.get({
                            x: 4
                        }) || k.set({
                            x: 4
                        }, "t") != k || 2 != k.size) return !1;
                    var l = k.entries(),
                        m = l.next();
                    if (m.done || m.value[0] != g || "s" != m.value[1]) return !1;
                    m = l.next();
                    return m.done || 4 != m.value[0].x ||
                        "t" != m.value[1] || !l.next().done ? !1 : !0
                } catch (p) {
                    return !1
                }
            }()) return a;
        var f = new WeakMap;
        h.prototype.set = function(g, k) {
            g = 0 === g ? 0 : g;
            var l = d(this, g);
            l.list || (l.list = this.i[l.id] = []);
            l.s ? l.s.value = k : (l.s = {
                next: this.h,
                B: this.h.B,
                head: this.h,
                key: g,
                value: k
            }, l.list.push(l.s), this.h.B.next = l.s, this.h.B = l.s, this.size++);
            return this
        };
        h.prototype.delete = function(g) {
            g = d(this, g);
            return g.s && g.list ? (g.list.splice(g.index, 1), g.list.length || delete this.i[g.id], g.s.B.next = g.s.next, g.s.next.B = g.s.B, g.s.head = null, this.size--, !0) : !1
        };
        h.prototype.clear = function() {
            this.i = {};
            this.h = this.h.B = b();
            this.size = 0
        };
        h.prototype.has = function(g) {
            return !!d(this, g).s
        };
        h.prototype.get = function(g) {
            return (g = d(this, g).s) && g.value
        };
        h.prototype.entries = function() {
            return c(this, function(g) {
                return [g.key, g.value]
            })
        };
        h.prototype.keys = function() {
            return c(this, function(g) {
                return g.key
            })
        };
        h.prototype.values = function() {
            return c(this, function(g) {
                return g.value
            })
        };
        h.prototype.forEach = function(g, k) {
            for (var l = this.entries(), m; !(m = l.next()).done;) m = m.value,
                g.call(k, m[1], m[0], this)
        };
        h.prototype[Symbol.iterator] = h.prototype.entries;
        var e = 0;
        return h
    });
    t("Number.isNaN", function(a) {
        return a ? a : function(b) {
            return "number" === typeof b && isNaN(b)
        }
    });

    function ya(a, b) {
        a instanceof String && (a += "");
        var c = 0,
            d = !1,
            h = {
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
        h[Symbol.iterator] = function() {
            return h
        };
        return h
    }
    t("Array.prototype.entries", function(a) {
        return a ? a : function() {
            return ya(this, function(b, c) {
                return [b, c]
            })
        }
    });
    t("Array.from", function(a) {
        return a ? a : function(b, c, d) {
            c = null != c ? c : function(g) {
                return g
            };
            var h = [],
                f = "undefined" != typeof Symbol && Symbol.iterator && b[Symbol.iterator];
            if ("function" == typeof f) {
                b = f.call(b);
                for (var e = 0; !(f = b.next()).done;) h.push(c.call(d, f.value, e++))
            } else
                for (f = b.length, e = 0; e < f; e++) h.push(c.call(d, b[e], e));
            return h
        }
    });
    t("Array.prototype.keys", function(a) {
        return a ? a : function() {
            return ya(this, function(b) {
                return b
            })
        }
    });
    t("Object.entries", function(a) {
        return a ? a : function(b) {
            var c = [],
                d;
            for (d in b) y(b, d) && c.push([d, b[d]]);
            return c
        }
    });
    t("Object.is", function(a) {
        return a ? a : function(b, c) {
            return b === c ? 0 !== b || 1 / b === 1 / c : b !== b && c !== c
        }
    });
    t("Array.prototype.includes", function(a) {
        return a ? a : function(b, c) {
            var d = this;
            d instanceof String && (d = String(d));
            var h = d.length;
            c = c || 0;
            for (0 > c && (c = Math.max(c + h, 0)); c < h; c++) {
                var f = d[c];
                if (f === b || Object.is(f, b)) return !0
            }
            return !1
        }
    });
    t("String.prototype.includes", function(a) {
        return a ? a : function(b, c) {
            if (null == this) throw new TypeError("The 'this' value for String.prototype.includes must not be null or undefined");
            if (b instanceof RegExp) throw new TypeError("First argument to String.prototype.includes must not be a regular expression");
            return -1 !== (this + "").indexOf(b, c || 0)
        }
    });
    t("String.prototype.replaceAll", function(a) {
        return a ? a : function(b, c) {
            if (b instanceof RegExp && !b.global) throw new TypeError("String.prototype.replaceAll called with a non-global RegExp argument.");
            return b instanceof RegExp ? this.replace(b, c) : this.replace(new RegExp(String(b).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08"), "g"), c)
        }
    });
    var za = za || {},
        z = this || self;

    function Aa(a) {
        var b = typeof a;
        return "object" == b && null != a || "function" == b
    }

    function Ba(a, b, c) {
        return a.call.apply(a.bind, arguments)
    }

    function Ca(a, b, c) {
        if (!a) throw Error();
        if (2 < arguments.length) {
            var d = Array.prototype.slice.call(arguments, 2);
            return function() {
                var h = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(h, d);
                return a.apply(b, h)
            }
        }
        return function() {
            return a.apply(b, arguments)
        }
    }

    function A(a, b, c) {
        Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? A = Ba : A = Ca;
        return A.apply(null, arguments)
    }

    function Da(a, b) {
        function c() {}
        c.prototype = b.prototype;
        a.V = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a;
        a.ga = function(d, h, f) {
            for (var e = Array(arguments.length - 2), g = 2; g < arguments.length; g++) e[g - 2] = arguments[g];
            return b.prototype[h].apply(d, e)
        }
    }

    function Ea(a) {
        return a
    };
    var Fa;

    function B() {
        var a = z.navigator;
        return a && (a = a.userAgent) ? a : ""
    };
    var Ga = Array.prototype.indexOf ? function(a, b) {
            return Array.prototype.indexOf.call(a, b, void 0)
        } : function(a, b) {
            if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
            for (var c = 0; c < a.length; c++)
                if (c in a && a[c] === b) return c;
            return -1
        },
        Ha = Array.prototype.map ? function(a, b) {
            return Array.prototype.map.call(a, b, void 0)
        } : function(a, b) {
            for (var c = a.length, d = Array(c), h = "string" === typeof a ? a.split("") : a, f = 0; f < c; f++) f in h && (d[f] = b.call(void 0, h[f], f, a));
            return d
        };

    function Ia(a, b) {
        b = Ga(a, b);
        var c;
        (c = 0 <= b) && Array.prototype.splice.call(a, b, 1);
        return c
    };
    var Ja = -1 != B().indexOf("Trident") || -1 != B().indexOf("MSIE"),
        Ka = -1 != B().toLowerCase().indexOf("webkit") && -1 == B().indexOf("Edge") && -1 != B().indexOf("Mobile");
    var La = {},
        C = null;

    function Ma(a) {
        var b;
        void 0 === b && (b = 0);
        if (!C) {
            C = {};
            for (var c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), d = ["+/=", "+/", "-_=", "-_.", "-_"], h = 0; 5 > h; h++) {
                var f = c.concat(d[h].split(""));
                La[h] = f;
                for (var e = 0; e < f.length; e++) {
                    var g = f[e];
                    void 0 === C[g] && (C[g] = e)
                }
            }
        }
        b = La[b];
        c = Array(Math.floor(a.length / 3));
        d = b[64] || "";
        for (h = f = 0; f < a.length - 2; f += 3) {
            var k = a[f],
                l = a[f + 1];
            g = a[f + 2];
            e = b[k >> 2];
            k = b[(k & 3) << 4 | l >> 4];
            l = b[(l & 15) << 2 | g >> 6];
            g = b[g & 63];
            c[h++] = "" + e + k + l + g
        }
        e = 0;
        g = d;
        switch (a.length - f) {
            case 2:
                e =
                    a[f + 1], g = b[(e & 15) << 2] || d;
            case 1:
                a = a[f], c[h] = "" + b[a >> 2] + b[(a & 3) << 4 | e >> 4] + g + d
        }
        return c.join("")
    };
    var Na = "undefined" !== typeof Uint8Array,
        Oa = {};
    var Pa;

    function Qa(a) {
        if (Oa !== Oa) throw Error("illegal external caller");
        this.aa = a;
        if (null != a && 0 === a.length) throw Error("ByteString should be constructed with non-empty values");
    };
    var D = "function" === typeof Symbol && "symbol" === typeof Symbol() ? Symbol() : void 0;

    function E(a, b) {
        if (D) return a[D] |= b;
        if (void 0 !== a.v) return a.v |= b;
        Object.defineProperties(a, {
            v: {
                value: b,
                configurable: !0,
                writable: !0,
                enumerable: !1
            }
        });
        return b
    }

    function F(a) {
        var b;
        D ? b = a[D] : b = a.v;
        return null == b ? 0 : b
    }

    function G(a, b) {
        D ? a[D] = b : void 0 !== a.v ? a.v = b : Object.defineProperties(a, {
            v: {
                value: b,
                configurable: !0,
                writable: !0,
                enumerable: !1
            }
        })
    }

    function Ra(a) {
        E(a, 16);
        return a
    }

    function Sa(a, b) {
        G(b, (a | 0) & -51)
    }

    function Ta(a, b) {
        G(b, (a | 18) & -41)
    };
    var H = {};

    function I(a) {
        return null !== a && "object" === typeof a && !Array.isArray(a) && a.constructor === Object
    }
    var J, Ua = [];
    G(Ua, 23);
    J = Object.freeze(Ua);

    function K(a) {
        if (F(a.m) & 2) throw Error("Cannot mutate an immutable Message");
    }

    function Va(a) {
        var b = a.length;
        (b = b ? a[b - 1] : void 0) && I(b) ? b.g = 1 : (b = {}, a.push((b.g = 1, b)))
    };

    function Wa(a) {
        return a.displayName || a.name || "unknown type name"
    }

    function Xa(a, b) {
        if (!(a instanceof b)) throw Error("Expected instanceof " + Wa(b) + " but got " + (a && Wa(a.constructor)));
        return a
    };
    var L;

    function Ya(a, b) {
        L = b;
        a = new a(b);
        L = void 0;
        return a
    };

    function Za(a) {
        switch (typeof a) {
            case "number":
                return isFinite(a) ? a : String(a);
            case "object":
                if (a)
                    if (Array.isArray(a)) {
                        if (0 !== (F(a) & 128)) return a = Array.prototype.slice.call(a), Va(a), a
                    } else {
                        if (Na && null != a && a instanceof Uint8Array) return Ma(a);
                        if (a instanceof Qa) {
                            var b = a.aa;
                            return null == b ? "" : "string" === typeof b ? b : a.aa = Ma(b)
                        }
                    }
        }
        return a
    };

    function $a(a, b, c, d) {
        if (null != a) {
            if (Array.isArray(a)) a = ab(a, b, c, void 0 !== d);
            else if (I(a)) {
                var h = {},
                    f;
                for (f in a) h[f] = $a(a[f], b, c, d);
                a = h
            } else a = b(a, d);
            return a
        }
    }

    function ab(a, b, c, d) {
        var h = F(a);
        d = d ? !!(h & 16) : void 0;
        a = Array.prototype.slice.call(a);
        for (var f = 0; f < a.length; f++) a[f] = $a(a[f], b, c, d);
        c(h, a);
        return a
    }

    function bb(a) {
        return a.U === H ? a.toJSON() : Za(a)
    }

    function cb(a, b) {
        a & 128 && Va(b)
    };

    function db(a) {
        return a.h || (a.h = a.m[a.j + a.C] = {})
    }

    function eb(a, b, c) {
        return -1 === b ? null : b >= a.j ? a.h ? a.h[b] : void 0 : c && a.h && (c = a.h[b], null != c) ? c : a.m[b + a.C]
    }

    function M(a, b, c, d) {
        a.l && (a.l = void 0);
        if (b >= a.j || d) return db(a)[b] = c, a;
        a.m[b + a.C] = c;
        (c = a.h) && b in c && delete c[b];
        return a
    }

    function N(a, b) {
        K(a);
        M(a, b, void 0, !1);
        return a
    }

    function O(a, b) {
        a = eb(a, b);
        a = null == a ? a : !!a;
        return null == a ? !1 : a
    };

    function fb(a, b, c) {
        c = void 0 === c ? Ta : c;
        if (null != a) {
            if (Na && a instanceof Uint8Array) return a.length ? new Qa(new Uint8Array(a)) : Pa || (Pa = new Qa(null));
            if (Array.isArray(a)) {
                var d = F(a);
                if (d & 2) return a;
                if (b && !(d & 32) && (d & 16 || 0 === d)) return G(a, d | 2), a;
                a = ab(a, fb, c, !0);
                b = F(a);
                b & 4 && b & 2 && Object.freeze(a);
                return a
            }
            return a.U === H ? gb(a) : a
        }
    }

    function hb(a, b, c, d, h, f, e) {
        if (a = a.i && a.i[c]) {
            d = 0 < a.length ? a[0].constructor : void 0;
            f = F(a);
            f & 2 || (a = Ha(a, gb), Ta(f, a), Object.freeze(a));
            K(b);
            if (null != a) {
                f = [];
                E(f, 1);
                e = !1;
                for (var g = 0; g < a.length; g++) f[g] = Xa(a[g], d).m, e = e || !!(F(f[g]) & 2);
                b.i || (b.i = {});
                b.i[c] = a;
                d = f;
                e ? D ? d[D] && (d[D] &= -9) : void 0 !== d.v && (d.v &= -9) : E(d, 8)
            } else b.i && (b.i[c] = void 0), f = J;
            M(b, c, f, h)
        } else d = fb(d, f, e), K(b), M(b, c, d, h)
    }

    function gb(a) {
        if (F(a.m) & 2) return a;
        a = ib(a, !0);
        E(a.m, 2);
        return a
    }

    function ib(a, b) {
        var c = a.m,
            d = Ra([]),
            h = a.constructor.h;
        h && d.push(h);
        0 !== (F(c) & 128) && Va(d);
        b = b || F(a.m) & 2 ? Ta : Sa;
        d = Ya(a.constructor, d);
        a.X && (d.X = a.X.slice());
        h = !!(F(c) & 16);
        for (var f = 0; f < c.length; f++) {
            var e = c[f];
            if (f === c.length - 1 && I(e))
                for (var g in e) {
                    var k = +g;
                    Number.isNaN(k) ? db(d)[k] = e[k] : hb(a, d, k, e[g], !0, h, b)
                } else hb(a, d, f - a.C, e, !1, h, b)
        }
        return d
    };

    function P(a, b, c) {
        null == a && (a = L);
        L = void 0;
        var d = this.constructor.i || 0,
            h = 0 < d,
            f = this.constructor.h,
            e = !1;
        if (null == a) {
            a = f ? [f] : [];
            var g = !0;
            G(a, 48)
        } else {
            if (!Array.isArray(a)) throw Error();
            if (f && f !== a[0]) throw Error();
            var k = E(a, 0),
                l = k;
            if (g = 0 !== (16 & l))(e = 0 !== (32 & l)) || (l |= 32);
            if (h)
                if (128 & l) d = 0;
                else {
                    if (0 < a.length) {
                        var m = a[a.length - 1];
                        if (I(m) && "g" in m) {
                            d = 0;
                            l |= 128;
                            delete m.g;
                            var p = !0,
                                u;
                            for (u in m) {
                                p = !1;
                                break
                            }
                            p && a.pop()
                        }
                    }
                }
            else if (128 & l) throw Error();
            k !== l && G(a, l)
        }
        this.C = (f ? 0 : -1) - d;
        this.i = void 0;
        this.m = a;
        a: {
            f =
            this.m.length;d = f - 1;
            if (f && (f = this.m[d], I(f))) {
                this.h = f;
                this.j = d - this.C;
                break a
            }
            void 0 !== b && -1 < b ? (this.j = Math.max(b, d + 1 - this.C), this.h = void 0) : this.j = Number.MAX_VALUE
        }
        if (!h && this.h && "g" in this.h) throw Error('Unexpected "g" flag in sparse object of message that is not a group type.');
        if (c) {
            b = g && !e && !0;
            h = this.j;
            var v;
            for (g = 0; g < c.length; g++) e = c[g], e < h ? (e += this.C, (d = a[e]) ? jb(d, b) : a[e] = J) : (v || (v = db(this)), (d = v[e]) ? jb(d, b) : v[e] = J)
        }
    }
    P.prototype.toJSON = function() {
        return ab(this.m, bb, cb)
    };

    function jb(a, b) {
        if (Array.isArray(a)) {
            var c = F(a),
                d = 1;
            !b || c & 2 || (d |= 16);
            (c & d) !== d && G(a, c | d)
        }
    }
    P.prototype.U = H;
    P.prototype.toString = function() {
        return this.m.toString()
    };
    try {
        (new self.OffscreenCanvas(0, 0)).getContext("2d")
    } catch (a) {};
    var kb = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

    function lb(a, b) {
        for (var c, d, h = 1; h < arguments.length; h++) {
            d = arguments[h];
            for (c in d) a[c] = d[c];
            for (var f = 0; f < kb.length; f++) c = kb[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
        }
    };
    var Q;

    function R(a, b) {
        this.h = b === mb ? a : ""
    }
    R.prototype.toString = function() {
        return this.h + ""
    };

    function nb(a) {
        return a instanceof R && a.constructor === R ? a.h : "type_error:TrustedResourceUrl"
    }
    var mb = {};

    function ob(a) {
        if (void 0 === Q) {
            var b = null;
            var c = z.trustedTypes;
            if (c && c.createPolicy) {
                try {
                    b = c.createPolicy("uf-api#html", {
                        createHTML: Ea,
                        createScript: Ea,
                        createScriptURL: Ea
                    })
                } catch (d) {
                    z.console && z.console.error(d.message)
                }
                Q = b
            } else Q = b
        }
        a = (b = Q) ? b.createScriptURL(a) : a;
        return new R(a, mb)
    };
    var pb = /^[\w+/_-]+[=]{0,2}$/;

    function qb(a) {
        a = (a || z).document;
        return a.querySelector ? (a = a.querySelector("script[nonce]")) && (a = a.nonce || a.getAttribute("nonce")) && pb.test(a) ? a : "" : ""
    };

    function rb(a) {
        this.h = a || z.document || document
    };

    function S() {
        this.o = this.o;
        this.A = this.A
    }
    S.prototype.o = !1;
    S.prototype.isDisposed = function() {
        return this.o
    };
    S.prototype.M = function() {
        if (this.A)
            for (; this.A.length;) this.A.shift()()
    };

    function sb(a, b) {
        this.type = a;
        this.h = this.target = b;
        this.defaultPrevented = !1
    };
    var tb = "closure_listenable_" + (1E6 * Math.random() | 0);
    var ub = 0;

    function vb(a, b, c, d, h) {
        this.listener = a;
        this.proxy = null;
        this.src = b;
        this.type = c;
        this.capture = !!d;
        this.T = h;
        this.key = ++ub;
        this.O = this.S = !1
    }

    function T(a) {
        a.O = !0;
        a.listener = null;
        a.proxy = null;
        a.src = null;
        a.T = null
    };

    function wb(a) {
        this.src = a;
        this.h = {};
        this.i = 0
    }
    wb.prototype.add = function(a, b, c, d, h) {
        var f = a.toString();
        a = this.h[f];
        a || (a = this.h[f] = [], this.i++);
        var e = xb(a, b, d, h); - 1 < e ? (b = a[e], c || (b.S = !1)) : (b = new vb(b, this.src, f, !!d, h), b.S = c, a.push(b));
        return b
    };

    function yb(a, b) {
        var c = b.type;
        c in a.h && Ia(a.h[c], b) && (T(b), 0 == a.h[c].length && (delete a.h[c], a.i--))
    }

    function xb(a, b, c, d) {
        for (var h = 0; h < a.length; ++h) {
            var f = a[h];
            if (!f.O && f.listener == b && f.capture == !!c && f.T == d) return h
        }
        return -1
    };
    var zb = "closure_lm_" + (1E6 * Math.random() | 0),
        Ab = {},
        Bb = 0;

    function Cb(a, b, c, d, h) {
        if (Array.isArray(b))
            for (var f = 0; f < b.length; f++) Cb(a, b[f], c, d, h);
        else(d = Aa(d) ? !!d.capture : !!d, c = Db(c), a && a[tb]) ? (a = a.j, b = String(b).toString(), b in a.h && (f = a.h[b], c = xb(f, c, d, h), -1 < c && (T(f[c]), Array.prototype.splice.call(f, c, 1), 0 == f.length && (delete a.h[b], a.i--)))) : a && (a = Eb(a)) && (b = a.h[b.toString()], a = -1, b && (a = xb(b, c, d, h)), (c = -1 < a ? b[a] : null) && "number" !== typeof c && c && !c.O && ((h = c.src) && h[tb] ? yb(h.j, c) : (d = c.type, b = c.proxy, h.removeEventListener ? h.removeEventListener(d, b, c.capture) :
            h.detachEvent ? h.detachEvent(d in Ab ? Ab[d] : Ab[d] = "on" + d, b) : h.addListener && h.removeListener && h.removeListener(b), Bb--, (d = Eb(h)) ? (yb(d, c), 0 == d.i && (d.src = null, h[zb] = null)) : T(c))))
    }

    function Eb(a) {
        a = a[zb];
        return a instanceof wb ? a : null
    }
    var Fb = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);

    function Db(a) {
        if ("function" === typeof a) return a;
        a[Fb] || (a[Fb] = function(b) {
            return a.handleEvent(b)
        });
        return a[Fb]
    };

    function U() {
        S.call(this);
        this.j = new wb(this);
        this.ba = this;
        this.L = null
    }
    Da(U, S);
    U.prototype[tb] = !0;
    U.prototype.removeEventListener = function(a, b, c, d) {
        Cb(this, a, b, c, d)
    };

    function V(a, b) {
        var c = a.L;
        if (c) {
            var d = [];
            for (var h = 1; c; c = c.L) d.push(c), ++h
        }
        a = a.ba;
        c = b.type || b;
        "string" === typeof b ? b = new sb(b, a) : b instanceof sb ? b.target = b.target || a : (h = b, b = new sb(c, a), lb(b, h));
        h = !0;
        if (d)
            for (var f = d.length - 1; 0 <= f; f--) {
                var e = b.h = d[f];
                h = Gb(e, c, !0, b) && h
            }
        e = b.h = a;
        h = Gb(e, c, !0, b) && h;
        h = Gb(e, c, !1, b) && h;
        if (d)
            for (f = 0; f < d.length; f++) e = b.h = d[f], h = Gb(e, c, !1, b) && h
    }
    U.prototype.M = function() {
        U.V.M.call(this);
        if (this.j) {
            var a = this.j,
                b = 0,
                c;
            for (c in a.h) {
                for (var d = a.h[c], h = 0; h < d.length; h++) ++b, T(d[h]);
                delete a.h[c];
                a.i--
            }
        }
        this.L = null
    };

    function Gb(a, b, c, d) {
        b = a.j.h[String(b)];
        if (!b) return !0;
        b = b.concat();
        for (var h = !0, f = 0; f < b.length; ++f) {
            var e = b[f];
            if (e && !e.O && e.capture == c) {
                var g = e.listener,
                    k = e.T || e.src;
                e.S && yb(a.j, e);
                h = !1 !== g.call(k, d) && h
            }
        }
        return h && !d.defaultPrevented
    };

    function Hb(a) {
        try {
            return z.JSON.parse(a)
        } catch (b) {}
        a = String(a);
        if (/^\s*$/.test(a) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))) try {
            return eval("(" + a + ")")
        } catch (b) {}
        throw Error("Invalid JSON string: " + a);
    };

    function Ib() {}
    Ib.prototype.h = null;

    function Jb(a) {
        var b;
        (b = a.h) || (b = {}, Kb(a) && (b[0] = !0, b[1] = !0), b = a.h = b);
        return b
    };
    var Lb;

    function Mb() {}
    Da(Mb, Ib);

    function Nb(a) {
        return (a = Kb(a)) ? new ActiveXObject(a) : new XMLHttpRequest
    }

    function Kb(a) {
        if (!a.i && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
            for (var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0; c < b.length; c++) {
                var d = b[c];
                try {
                    return new ActiveXObject(d), a.i = d
                } catch (h) {}
            }
            throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");
        }
        return a.i
    }
    Lb = new Mb;

    function Ob(a, b, c) {
        if ("function" === typeof a) c && (a = A(a, c));
        else if (a && "function" == typeof a.handleEvent) a = A(a.handleEvent, a);
        else throw Error("Invalid listener argument");
        return 2147483647 < Number(b) ? -1 : z.setTimeout(a, b || 0)
    };
    var Pb = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");

    function Qb(a) {
        U.call(this);
        this.headers = new Map;
        this.G = a || null;
        this.i = !1;
        this.F = this.h = null;
        this.K = "";
        this.l = this.J = this.u = this.I = !1;
        this.H = 0;
        this.D = null;
        this.W = "";
        this.P = this.R = !1
    }
    Da(Qb, U);
    var Rb = /^https?$/i,
        Sb = ["POST", "PUT"],
        Tb = [];

    function Ub(a, b) {
        var c = new Qb;
        Tb.push(c);
        b && c.j.add("complete", b, !1, void 0, void 0);
        c.j.add("ready", c.ca, !0, void 0, void 0);
        c.H = 2E3;
        c.R = !0;
        Vb(c, a)
    }
    n = Qb.prototype;
    n.ca = function() {
        this.o || (this.o = !0, this.M());
        Ia(Tb, this)
    };

    function Vb(a, b) {
        var c = {};
        if (a.h) throw Error("[goog.net.XhrIo] Object is active with another request=" + a.K + "; newUri=" + b);
        a.K = b;
        a.I = !1;
        a.i = !0;
        a.h = a.G ? Nb(a.G) : Nb(Lb);
        a.F = a.G ? Jb(a.G) : Jb(Lb);
        a.h.onreadystatechange = A(a.Y, a);
        try {
            a.J = !0, a.h.open("GET", String(b), !0), a.J = !1
        } catch (f) {
            Wb(a);
            return
        }
        b = new Map(a.headers);
        if (c)
            if (Object.getPrototypeOf(c) === Object.prototype)
                for (var d in c) b.set(d, c[d]);
            else if ("function" === typeof c.keys && "function" === typeof c.get) {
            d = w(c.keys());
            for (var h = d.next(); !h.done; h = d.next()) h =
                h.value, b.set(h, c.get(h))
        } else throw Error("Unknown input type for opt_headers: " + String(c));
        c = Array.from(b.keys()).find(function(f) {
            return "content-type" == f.toLowerCase()
        });
        d = z.FormData && !1;
        !(0 <= Ga(Sb, "GET")) || c || d || b.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
        b = w(b);
        for (c = b.next(); !c.done; c = b.next()) d = w(c.value), c = d.next().value, d = d.next().value, a.h.setRequestHeader(c, d);
        a.W && (a.h.responseType = a.W);
        "withCredentials" in a.h && a.h.withCredentials !== a.R && (a.h.withCredentials =
            a.R);
        try {
            Xb(a), 0 < a.H && (a.P = Yb(a.h), a.P ? (a.h.timeout = a.H, a.h.ontimeout = A(a.Z, a)) : a.D = Ob(a.Z, a.H, a)), a.u = !0, a.h.send(""), a.u = !1
        } catch (f) {
            Wb(a)
        }
    }

    function Yb(a) {
        return Ja && "number" === typeof a.timeout && void 0 !== a.ontimeout
    }
    n.Z = function() {
        "undefined" != typeof za && this.h && (V(this, "timeout"), this.abort(8))
    };

    function Wb(a) {
        a.i = !1;
        a.h && (a.l = !0, a.h.abort(), a.l = !1);
        Zb(a);
        $b(a)
    }

    function Zb(a) {
        a.I || (a.I = !0, V(a, "complete"), V(a, "error"))
    }
    n.abort = function() {
        this.h && this.i && (this.i = !1, this.l = !0, this.h.abort(), this.l = !1, V(this, "complete"), V(this, "abort"), $b(this))
    };
    n.M = function() {
        this.h && (this.i && (this.i = !1, this.l = !0, this.h.abort(), this.l = !1), $b(this, !0));
        Qb.V.M.call(this)
    };
    n.Y = function() {
        this.isDisposed() || (this.J || this.u || this.l ? ac(this) : this.fa())
    };
    n.fa = function() {
        ac(this)
    };

    function ac(a) {
        if (a.i && "undefined" != typeof za && (!a.F[1] || 4 != (a.h ? a.h.readyState : 0) || 2 != bc(a)))
            if (a.u && 4 == (a.h ? a.h.readyState : 0)) Ob(a.Y, 0, a);
            else if (V(a, "readystatechange"), 4 == (a.h ? a.h.readyState : 0)) {
            a.i = !1;
            try {
                var b = bc(a);
                a: switch (b) {
                    case 200:
                    case 201:
                    case 202:
                    case 204:
                    case 206:
                    case 304:
                    case 1223:
                        var c = !0;
                        break a;
                    default:
                        c = !1
                }
                var d;
                if (!(d = c)) {
                    var h;
                    if (h = 0 === b) {
                        var f = String(a.K).match(Pb)[1] || null;
                        !f && z.self && z.self.location && (f = z.self.location.protocol.slice(0, -1));
                        h = !Rb.test(f ? f.toLowerCase() : "")
                    }
                    d =
                        h
                }
                d ? (V(a, "complete"), V(a, "success")) : Zb(a)
            } finally {
                $b(a)
            }
        }
    }

    function $b(a, b) {
        if (a.h) {
            Xb(a);
            var c = a.h,
                d = a.F[0] ? function() {} : null;
            a.h = null;
            a.F = null;
            b || V(a, "ready");
            try {
                c.onreadystatechange = d
            } catch (h) {}
        }
    }

    function Xb(a) {
        a.h && a.P && (a.h.ontimeout = null);
        a.D && (z.clearTimeout(a.D), a.D = null)
    }
    n.isActive = function() {
        return !!this.h
    };

    function bc(a) {
        try {
            return 2 < (a.h ? a.h.readyState : 0) ? a.h.status : -1
        } catch (b) {
            return -1
        }
    };
    /*

     SPDX-License-Identifier: Apache-2.0
    */
    function cc(a) {
        var b = xa.apply(1, arguments);
        if (0 === b.length) return ob(a[0]);
        for (var c = [a[0]], d = 0; d < b.length; d++) c.push(encodeURIComponent(b[d])), c.push(a[d + 1]);
        return ob(c.join(""))
    };

    function dc(a) {
        var b, c, d = null == (c = (b = (a.ownerDocument && a.ownerDocument.defaultView || window).document).querySelector) ? void 0 : c.call(b, "script[nonce]");
        (b = d ? d.nonce || d.getAttribute("nonce") || "" : "") && a.setAttribute("nonce", b)
    };

    function W(a) {
        P.call(this, a)
    }
    la(W, P);
    n = W.prototype;
    n.getEnableSsEngine = function() {
        return O(this, 2)
    };
    n.getEnableAwr = function() {
        return O(this, 3)
    };
    n.getEnableHelpSuggestions = function() {
        return O(this, 4)
    };
    n.getAlohaAutoGaRollout = function() {
        return O(this, 5)
    };
    n.getEnableConfigurator = function() {
        return O(this, 6)
    };
    n.getEnableMweb = function() {
        return O(this, 7)
    };
    n.getEnableCtlConsentCheckbox = function() {
        return O(this, 8)
    };
    n.getEnableIframe = function() {
        return O(this, 9)
    };
    n.getEnableScreenshotNudge = function() {
        return O(this, 10)
    };
    n.getEnableWebStartupConfigEndpoint = function() {
        return O(this, 11)
    };
    n.getEnableJunkNudge = function() {
        return O(this, 12)
    };
    n.getEnableConfiguratorLocale = function() {
        return O(this, 13)
    };
    n.getEnableTinyNoPointer = function() {
        return O(this, 14)
    };

    function ec(a) {
        P.call(this, a)
    }
    la(ec, P);

    function fc(a) {
        return gc.some(function(b) {
            return b.test(a)
        })
    }
    var gc = [/https:\/\/sandbox\.google\.com\/tools\/feedback/, /https:\/\/.*\.googleusercontent\.com\/inapp/];
    var hc = "af am ar-EG ar-JO ar-MA ar-SA ar-XB ar az be bg bn bs ca cs cy da de-AT de-CH de el en en-GB en-AU en-CA en-IE en-IN en-NZ en-SG en-XA en-XC en-ZA es es-419 es-AR es-BO es-CL es-CO es-CR es-DO es-EC es-GT es-HN es-MX es-NI es-PA es-PE es-PR es-PY es-SV es-US es-UY es-VE et eu fa fi fil fr-CA fr-CH fr gl gsw gu he hi hr hu hy id in is it iw ja ka kk km kn ko ky ln lo lt lv mk ml mn mo mr ms my nb ne nl no pa pl pt pt-BR pt-PT ro ru si sk sl sq sr-Latn sr sv sw ta te th tl tr uk ur uz vi zh zh-CN zh-HK zh-TW zu".split(" ");

    function ic(a) {
        var b;
        return null == (b = a.formContent) ? void 0 : b.locale
    };
    var jc = da(["https://www.gstatic.com/uservoice/feedback/client/web/", "/main_binary__", ".js"]);

    function kc(a) {
        var b = ic(a);
        b = (b && hc.includes(b) ? ic(a) : "en").replaceAll("-", "_").toLowerCase();
        var c;
        a = (null == (c = a.initializationData) ? 0 : c.useNightlyRelease) ? "nightly" : "live";
        return cc(jc, a, b)
    };
    var lc;

    function mc(a, b, c) {
        if (lc) return lc;
        var d = kc(a);
        return lc = b.feedbackV2GlobalObject ? Promise.resolve(b.feedbackV2GlobalObject) : new Promise(function(h, f) {
            var e = c.createElement("script");
            e.src = nb(d);
            dc(e);
            e.onload = function() {
                b.feedbackV2GlobalObject ? h(b.feedbackV2GlobalObject) : f("feedbackV2GlobalObject not found on window.")
            };
            e.onerror = function() {
                f("Feedback binary script tag failed to load: " + d.toString())
            };
            c.body.appendChild(e)
        })
    }

    function nc(a, b, c, d, h) {
        h = void 0 === h ? !0 : h;
        var f, e, g, k, l;
        return wa(function(m) {
            switch (m.i) {
                case 1:
                    f = Date.now();
                    var p = mc(a, c, d);
                    m.i = 2;
                    return {
                        value: p
                    };
                case 2:
                    e = m.o;
                    if (!(h || (null == (k = a.initializationData) ? 0 : k.useNightlyRelease) || (null == (l = a.initializationData) ? 0 : l.isLocalServer))) {
                        g = e.initializeFeedbackClient(a, f, b);
                        m.i = 3;
                        break
                    }
                    p = e.initializeFeedbackClientAsync(a, f, b);
                    m.i = 4;
                    return {
                        value: p
                    };
                case 4:
                    g = m.o;
                case 3:
                    return g.initiateAloha(), m.return(g)
            }
        })
    }

    function oc(a, b, c) {
        var d = !0;
        d = void 0 === d ? !0 : d;
        var h, f, e, g;
        wa(function(k) {
            f = h = c || z;
            if (f.isFormOpened) throw e = Error("Form is either loading or already opened"), e.name = "DuplicateFormError", e;
            f.isFormOpened = !0;
            a.callbacks = a.callbacks || {};
            g = a.callbacks.onClose || function() {};
            a.callbacks.onClose = function(l) {
                f.isFormOpened = !1;
                g(l)
            };
            try {
                return k.return(nc(a, b, f, h.document, d))
            } catch (l) {
                throw f.isFormOpened = !1, l;
            }
        })
    };

    function pc(a, b) {
        return wa(function(c) {
            return c.return(new Promise(function(d) {
                var h = qc(null != b ? b : "") + "/aloha_form_properties?productId=" + a;
                Ub(h, function(f) {
                    var e = f.target;
                    f = null;
                    try {
                        var g = JSON,
                            k = g.stringify;
                        if (e.h) {
                            var l = e.h.responseText;
                            0 == l.indexOf(")]}'\n") && (l = l.substring(5));
                            b: {
                                if (z.JSON) try {
                                    var m = z.JSON.parse(l);
                                    break b
                                } catch (v) {}
                                m = Hb(l)
                            }
                        } else m = void 0;
                        var p = k.call(g, m);
                        if (null == p || "" == p) f = new ec;
                        else {
                            var u = JSON.parse(p);
                            if (!Array.isArray(u)) throw Error(void 0);
                            f = Ya(ec, Ra(u))
                        }
                    } catch (v) {
                        k = new ec,
                            m = new W, m = N(m, 5), m = N(m, 2), m = N(m, 4), m = N(m, 8), m = N(m, 9), m = N(m, 7), m = N(m, 10), m = N(m, 12), m = N(m, 13), m = N(m, 14), K(k), null != m ? Xa(m, W) : m = void 0, f = M(k, 1, m)
                    }
                    d(f)
                })
            }))
        })
    }

    function qc(a) {
        return fc(a) ? a : "https://www.google.com/tools/feedback"
    };

    function rc(a, b, c) {
        a.timeOfStartCall = (new Date).getTime();
        var d = c || z,
            h = d.document,
            f = a.nonce || qb(d);
        f && !a.nonce && (a.nonce = f);
        if ("help" == a.flow) {
            a: {
                var e = ["document", "location", "href"];
                for (var g = d || z, k = 0; k < e.length; k++)
                    if (g = g[e[k]], null == g) {
                        e = null;
                        break a
                    }
                e = g
            }!a.helpCenterContext && e && (a.helpCenterContext = e.substring(0, 1200));e = !0;b && JSON && JSON.stringify && (g = JSON.stringify(b), (e = 1200 >= g.length) && (a.psdJson = g));e || (b = {
                invalidPsd: !0
            })
        }
        b = [a, b, c];
        d.GOOGLE_FEEDBACK_START_ARGUMENTS = b;
        c = a.feedbackServerUri ||
            "//www.google.com/tools/feedback";
        if (e = d.GOOGLE_FEEDBACK_START) e.apply(d, b);
        else {
            d = c + "/load.js?";
            for (var l in a) b = a[l], null == b || Aa(b) || (d += encodeURIComponent(l) + "=" + encodeURIComponent(b) + "&");
            a = (h ? new rb(9 == h.nodeType ? h : h.ownerDocument || h.document) : Fa || (Fa = new rb)).h;
            l = "SCRIPT";
            "application/xhtml+xml" === a.contentType && (l = l.toLowerCase());
            a = a.createElement(l);
            f && a.setAttribute("nonce", f);
            f = ob(d);
            a.src = nb(f);
            dc(a);
            h.body.appendChild(a)
        }
    }

    function sc(a, b, c) {
        try {
            "submit" === a.flow || "help" === a.flow || a.tinyNoPointer ? rc(a, b, c) : pc(a.productId, a.feedbackServerUri).then(function(d) {
                var h = void 0 === h ? !1 : h;
                var f = eb(d, 1, h);
                var e = !1;
                var g = null == f || "object" !== typeof f || (e = Array.isArray(f)) || f.U !== H ? e ? new W(f) : void 0 : f;
                g !== f && null != g && (M(d, 1, g, h), E(g.m, F(d.m) & -33));
                f = g;
                null == f || F(d.m) & 2 || (g = f, F(g.m) & 2 && (e = ib(g, !1), e.l = g, g = e), g !== f && (f = g, M(d, 1, f, h)));
                d = f;
                null == d || !d.getAlohaAutoGaRollout() || Ka && !d.getEnableMweb() ? rc(a, b, c) : (h = c || z, f = "DEV" === a.serverEnvironment,
                    g = c || z, g = a.nonce || qb(g), f = {
                        integrationKeys: {
                            productId: a.productId,
                            feedbackBucket: a.bucket
                        },
                        callbacks: {
                            onClose: a.callback,
                            onLoad: a.onLoadCallback
                        },
                        formContent: {
                            locale: a.locale,
                            disableScreenshot: a.disableScreenshotting,
                            productDisplayName: void 0,
                            announcement: void 0,
                            issueCategories: void 0,
                            includeSeveritySelection: void 0,
                            customImageSrc: void 0,
                            thankYouMessage: void 0,
                            ha: void 0,
                            defaultFormInputValues: void 0,
                            defaultFormInputValuesString: void 0,
                            abuseLink: a.abuseLink
                        },
                        initializationData: {
                            isLocalServer: f,
                            nonce: g,
                            useNightlyRelease: f,
                            feedbackJsUrl: void 0,
                            feedbackCssUrl: void 0,
                            feedbackJsUrlSerialized: void 0,
                            feedbackCssUrlSerialized: void 0,
                            submissionServerUri: a.feedbackServerUri,
                            colorScheme: a.colorScheme
                        },
                        extraData: {
                            productVersion: a.productVersion,
                            authUser: a.authuser,
                            configuratorId: a.configuratorId,
                            customZIndex: a.customZIndex,
                            tinyNoPointer: a.tinyNoPointer,
                            allowNonLoggedInFeedback: a.allowNonLoggedInFeedback,
                            enableAnonymousFeedback: a.enableAnonymousFeedback
                        }
                    }, b && (g = new Map(Object.entries(b)), f.extraData.productSpecificData =
                        g), oc(f, d, h))
            }, function(d) {
                d && "DuplicateFormError" !== d.name && rc(a, b, c)
            })
        } catch (d) {
            rc(a, b, c)
        }
    }
    var X = ["userfeedback", "api", "startFeedback"],
        Y = z;
    X[0] in Y || "undefined" == typeof Y.execScript || Y.execScript("var " + X[0]);
    for (var Z; X.length && (Z = X.shift());) X.length || void 0 === sc ? Y[Z] && Y[Z] !== Object.prototype[Z] ? Y = Y[Z] : Y = Y[Z] = {} : Y[Z] = sc;
}).call(this);