(function() {
    window.NEJ = window.NEJ || {};
    NEJ.O = {};
    NEJ.R = [];
    NEJ.F = function() {
        return ! 1
    };
    NEJ.P = function(FM9D) {
        if (!FM9D || !FM9D.length) return null;
        var YB3x = window;
        for (var a = FM9D.split("."), l = a.length, i = a[0] == "window" ? 1 : 0; i < l; YB3x = YB3x[a[i]] = YB3x[a[i]] || {},
        i++);
        return YB3x
    };
    NEJ.Q = function(bN9E, FM9D) {
        bN9E = bN9E || NEJ.O;
        var bs9j = FM9D.split(".");
        for (var i = 0,
        l = bs9j.length; i < l; i++) {
            bN9E = bN9E[bs9j[i]];
            if (!bN9E) break
        }
        return bN9E
    };
    NEJ.C = function() {
        var bvt9k = function() {
            return NEJ.O.toString.call(arguments[0]) != "[object Function]"
        };
        var bLC3x = function(C8u, bv9m) {
            for (var x in bv9m) if (C8u == bv9m[x]) return x;
            return null
        };
        var beK6E = {
            cs9j: 0,
            bj9a: 1,
            bA9r: 2,
            bS9J: 3,
            bH9y: 4,
            eL0x: 5,
            jR2x: 6,
            es0x: 7
        },
        uB5G = {
            cx9o: 0,
            bk9b: 1,
            bF9w: 2,
            cc9T: 3,
            bL9C: 4,
            gp1x: 5,
            kA2x: 6,
            fW1x: 7
        };
        return function() {
            var fv1x = function() {
                this.bvR0x();
                return this.cs9j.apply(this, arguments)
            };
            fv1x.prototype.bvR0x = NEJ.F;
            fv1x.prototype.cs9j = NEJ.F;
            fv1x.O8G = function(BV8N, bwH0x) {
                if (bvt9k(BV8N)) return;
                if (bwH0x == null || !!bwH0x) NEJ.X(this, BV8N, bvt9k);
                this.cdG8y = BV8N;
                this.cl9c = BV8N.prototype;
                var bG9x = function() {};
                bG9x.prototype = BV8N.prototype;
                this.prototype = new bG9x;
                var Du8m = this.prototype;
                Du8m.constructor = this;
                var cf9W;
                for (var x in beK6E) {
                    cf9W = bLC3x(beK6E[x], uB5G);
                    if (!cf9W || !this.cl9c[x]) continue;
                    Du8m[x] = function(T8L) {
                        return function() {
                            this[T8L].apply(this, arguments)
                        }
                    } (cf9W)
                }
                var Gf9W = {};
                for (var x in uB5G) {
                    cf9W = bLC3x(uB5G[x], beK6E);
                    if (!cf9W || !this.cl9c[cf9W]) continue;
                    Gf9W[cf9W] = BV8N;
                    Du8m[x] = function(T8L) {
                        return function() {
                            var o8g, bG9x = this.bgo6i[T8L],
                            bbY5d = bG9x.prototype[T8L];
                            this.bgo6i[T8L] = bG9x.cdG8y || BV8N;
                            if ( !! bbY5d) o8g = bbY5d.apply(this, arguments);
                            this.bgo6i[T8L] = BV8N;
                            return o8g
                        }
                    } (cf9W)
                }
                Du8m.bvR0x = function() {
                    this.bgo6i = NEJ.X({},
                    Gf9W)
                };
                Du8m.cCi3x = Du8m.cx9o;
                return Du8m
            };
            return fv1x
        }
    } ();
    NEJ.X = function(gb1x, bQ9H, dP0x) {
        if (!gb1x || !bQ9H) return gb1x;
        dP0x = dP0x || NEJ.F;
        for (var x in bQ9H) {
            if (bQ9H.hasOwnProperty(x) && !dP0x(bQ9H[x], x)) gb1x[x] = bQ9H[x]
        }
        return gb1x
    };
    NEJ.EX = function(gb1x, bQ9H) {
        if (!gb1x || !bQ9H) return gb1x;
        for (var x in gb1x) {
            if (gb1x.hasOwnProperty(x) && bQ9H[x] != null) gb1x[x] = bQ9H[x]
        }
        return gb1x
    };
    var KZ7S = Function.prototype;
    KZ7S.er0x = function(le2x, Tz2x) {
        var f = NEJ.F,
        Tz2x = Tz2x || f,
        le2x = le2x || f,
        dp0x = this;
        return function() {
            var d8f = {
                args: NEJ.R.slice.call(arguments, 0)
            };
            le2x(d8f);
            if (!d8f.stopped) {
                d8f.value = dp0x.apply(this, d8f.args);
                Tz2x(d8f)
            }
            return d8f.value
        }
    };
    KZ7S.g8c = function() {
        var bh9Y = arguments,
        gb1x = arguments[0],
        bgp6j = this;
        return function() {
            var vH6B = NEJ.R.slice.call(bh9Y, 1);
            NEJ.R.push.apply(vH6B, arguments);
            return bgp6j.apply(gb1x || window, vH6B)
        }
    };
    KZ7S.en0x = function() {
        var bh9Y = arguments,
        gb1x = NEJ.R.shift.call(bh9Y),
        bgp6j = this;
        return function() {
            NEJ.R.push.apply(arguments, bh9Y);
            return bgp6j.apply(gb1x || window, arguments)
        }
    };
    var KZ7S = String.prototype;
    if (!KZ7S.trim) {
        KZ7S.trim = function() {
            var cZ0x = /(?:^\s+)|(?:\s+$)/g;
            return function() {
                return this.replace(cZ0x, "")
            }
        } ()
    }
    if (!window.MWF) window.MWF = NEJ;
    if (!window.mwf) window.mwf = NEJ.P("nej");
    if (!window.console) {
        NEJ.P("console").log = NEJ.F;
        NEJ.P("console").error = NEJ.F
    }
    var lt, gt, amp, nbsp, quot, apos, copy, reg
})(); (function() {
    var c8g = NEJ.P,
    Z9Q = NEJ.O,
    N8F = c8g("nej.p"),
    bcs5x = window.navigator.platform,
    tA5F = window.navigator.userAgent;
    var kK2x = {
        mac: bcs5x,
        win: bcs5x,
        linux: bcs5x,
        ipad: tA5F,
        ipod: tA5F,
        iphone: bcs5x,
        android: tA5F
    };
    N8F.KX7Q = kK2x;
    for (var x in kK2x) kK2x[x] = (new RegExp(x, "i")).test(kK2x[x]);
    kK2x.ios = kK2x.ipad || kK2x.iphone || kK2x.ipod;
    kK2x.tablet = kK2x.ipad;
    kK2x.desktop = kK2x.mac || kK2x.win || kK2x.linux && !kK2x.android;
    var hT1x = {
        engine: "unknow",
        release: "unknow",
        browser: "unknow",
        version: "unknow",
        prefix: {
            css: "",
            pro: "",
            clz: ""
        }
    };
    N8F.dj0x = hT1x;
    if (/msie\s+(.*?);/i.test(tA5F) || /trident\/.+rv:([\d\.]+)/i.test(tA5F)) {
        hT1x.engine = "trident";
        hT1x.browser = "ie";
        hT1x.version = RegExp.$1;
        hT1x.prefix = {
            css: "ms",
            pro: "ms",
            clz: "MS",
            evt: "MS"
        };
        var oy3x = {
            6 : "2.0",
            7 : "3.0",
            8 : "4.0",
            9 : "5.0",
            10 : "6.0",
            11 : "7.0"
        };
        hT1x.release = oy3x[document.documentMode] || oy3x[parseInt(hT1x.version)]
    } else if (/webkit\/?([\d.]+?)(?=\s|$)/i.test(tA5F)) {
        hT1x.engine = "webkit";
        hT1x.release = RegExp.$1 || "";
        hT1x.prefix = {
            css: "webkit",
            pro: "webkit",
            clz: "WebKit"
        }
    } else if (/rv\:(.*?)\)\s+gecko\//i.test(tA5F)) {
        hT1x.engine = "gecko";
        hT1x.release = RegExp.$1 || "";
        hT1x.browser = "firefox";
        hT1x.prefix = {
            css: "Moz",
            pro: "moz",
            clz: "Moz"
        };
        if (/firefox\/(.*?)(?=\s|$)/i.test(tA5F)) hT1x.version = RegExp.$1 || ""
    } else if (/presto\/(.*?)\s/i.test(tA5F)) {
        hT1x.engine = "presto";
        hT1x.release = RegExp.$1 || "";
        hT1x.browser = "opera";
        hT1x.prefix = {
            css: "O",
            pro: "o",
            clz: "O"
        };
        if (/version\/(.*?)(?=\s|$)/i.test(tA5F)) hT1x.version = RegExp.$1 || ""
    }
    if (hT1x.browser == "unknow") {
        var oy3x = ["chrome", "maxthon", "safari"];
        for (var i = 0,
        l = oy3x.length,
        T8L; i < l; i++) {
            T8L = oy3x[i] == "safari" ? "version": oy3x[i];
            if ((new RegExp(T8L + "/(.*?)(?=\\s|$)", "i")).test(tA5F)) {
                hT1x.browser = oy3x[i];
                hT1x.version = RegExp.$1.trim();
                break
            }
        }
    }
    N8F.bND3x = {};
    var XI3x = hT1x.engine != "trident";
    N8F.mF3x = {
        gecko: hT1x.engine != "gecko",
        webkit: hT1x.engine != "webkit",
        presto: hT1x.engine != "presto",
        trident0: XI3x || hT1x.release > "2.0",
        trident1: XI3x || hT1x.release < "6.0",
        trident2: XI3x || hT1x.release > "3.0",
        trident: XI3x || hT1x.release >= "6.0"
    }
})(); (function() {
    var hO1x = NEJ.P("nej.c"),
    Q8I = {};
    var bgF6z = function() {
        var cZ0x = /^([\w]+?:\/\/.*?(?=\/|$))/i;
        return function(V8N) {
            V8N = V8N || "";
            if (cZ0x.test(V8N)) return RegExp.$1;
            return location.protocol + "//" + location.host
        }
    } ();
    var Ts2x = function() {
        var bwq0x = function(i8a, bv9m) {
            if (!i8a || !i8a.length) return;
            for (var i = 0,
            l = i8a.length,
            li2x; i < l; i++) {
                li2x = i8a[i];
                if (li2x.indexOf("://") > 0) bv9m[bgF6z(li2x)] = li2x
            }
        };
        var bd9U = {
            portrait: {
                name: "portrait",
                dft: "portrait/"
            },
            "ajax.swf": {
                name: "ajax",
                dft: "nej_proxy_flash.swf"
            },
            "chart.swf": {
                name: "chart",
                dft: "nej_flex_chart.swf"
            },
            "audio.swf": {
                name: "audio",
                dft: "nej_player_audio.swf"
            },
            "video.swf": {
                name: "video",
                dft: "nej_player_video.swf"
            },
            "clipboard.swf": {
                name: "clipboard",
                dft: "nej_clipboard.swf"
            }
        };
        return function(bQ9H) {
            hO1x.KV7O("root", bQ9H.root || "/res/");
            var bjt7m, fK1x = hO1x.B8t("root");
            for (var x in bd9U) {
                bjt7m = bd9U[x];
                hO1x.KV7O(x, bQ9H[bjt7m.name] || fK1x + bjt7m.dft)
            }
            var BO8G = bQ9H.p_csrf;
            if (BO8G == !0) {
                BO8G = {
                    cookie: "AntiCSRF",
                    param: "AntiCSRF"
                }
            }
            hO1x.KV7O("csrf", NEJ.EX({
                cookie: "",
                param: ""
            },
            BO8G));
            Q8I.frames = {};
            bwq0x(bQ9H.p_frame, Q8I.frames);
            Q8I.flashs = {};
            bwq0x(bQ9H.p_flash, Q8I.flashs)
        }
    } ();
    hO1x.KV7O = function(J8B, C8u) {
        Q8I[J8B] = C8u
    };
    hO1x.B8t = function(J8B) {
        return Q8I[J8B]
    };
    hO1x.bWF6z = function(V8N) {
        var sB5G = bgF6z(V8N);
        return Q8I.frames[sB5G] || sB5G + "/res/nej_proxy_frame.html"
    };
    hO1x.bXb6V = function(V8N) {
        return Q8I.flashs[bgF6z(V8N)]
    };
    Ts2x(window.NEJ_CONF || NEJ.O)
})(); (function() {
    var c8g = NEJ.P,
    N8F = c8g("nej.p"),
    hO1x = c8g("nej.c"),
    bQ9H = window.NEJ_CONF || NEJ.O;
    if (N8F.mF3x.trident) return;
    hO1x.KV7O("storage.swf", bQ9H.storage || hO1x.B8t("root") + "nej_storage.swf");
    if (N8F.dj0x.release < "4.0") {
        hO1x.KV7O("blank.png", bQ9H.blank || hO1x.B8t("root") + "nej_blank.gif")
    }
    var i8a = bQ9H.xdr,
    go1x = /^(https?:\/\/.*?)(?=\/|$)/i,
    jD2x = /[\/?=&]/i;
    var bNW4a = function(V8N) {
        return (go1x.test(V8N) ? RegExp.$1: "").toLowerCase()
    };
    if ( !! i8a && !!i8a.length) for (var i = i8a.length - 1,
    V8N, J8B; i >= 0; i--) {
        V8N = i8a[i];
        J8B = bNW4a(V8N);
        if ( !! J8B) hO1x.KV7O(J8B, V8N)
    }
    hO1x.cBa3x = function(V8N) {
        var J8B = bNW4a(V8N);
        if (!J8B) {
            if (jD2x.test(V8N)) {
                J8B = location.protocol + "//" + location.host
            } else if (V8N.indexOf("://") < 0) {
                J8B = location.protocol + "//" + V8N
            } else {
                J8B = V8N
            }
        }
        return hO1x.B8t(J8B) || J8B + "/res/nej_xdomain.html"
    }
})(); (function() {
    var c8g = NEJ.P,
    hO1x = c8g("nej.c"),
    N8F = c8g("nej.g"),
    gq1x = +(new Date);
    N8F.cAR3x = 1e4 - gq1x;
    N8F.blG7z = 10001 - gq1x;
    N8F.cAO3x = 10002 - gq1x;
    N8F.bwG0x = 10003 - gq1x;
    N8F.cku9l = 10004 - gq1x;
    N8F.cAF3x = 10005 - gq1x;
    N8F.bne8W = 10006 - gq1x;
    N8F.cwl2x = 10007 - gq1x;
    N8F.yj7c = "Content-Type";
    N8F.cAy2x = "text/plain";
    N8F.EM9D = "multipart/form-data";
    N8F.cwD2x = "application/x-www-form-urlencoded";
    N8F.bnm8e = hO1x.B8t("blank.png") || "data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
})(); (function() {
    var c8g = NEJ.P,
    fj0x = NEJ.R,
    N8F = c8g("nej.p"),
    a7h = c8g("nej.e"),
    h8b = c8g("nej.v"),
    k8c = c8g("nej.u"),
    bc9T = c8g("nej.h");
    var lD3x = N8F.dj0x.prefix,
    bzW0x = N8F.bND3x,
    cwT2x = {
        scale: "scale({x|1},{y|1})",
        rotate: "rotate({a})",
        translate: "translate({x},{y})"
    },
    cwU2x = {
        scale: "scale3d({x|1},{y|1},{z|1})",
        rotate: "rotate3d({x},{y},{z},{a})",
        translate: "translate3d({x},{y},{z})"
    },
    Tb1x = {
        transition: !0,
        transform: !0,
        animation: !0,
        keyframes: !0,
        box: !0,
        "box-pack": !0,
        "box-flex": !0,
        marquee: !0,
        "border-radius": !0,
        "user-select": !0
    };
    var Ts2x = function() {
        var ss5x = bc9T.bzZ0x();
        bzW0x.css3d = !!ss5x && ss5x.m41 != null;
        var cZ0x = /-([a-z])/g;
        for (var x in Tb1x) {
            Tb1x[bAe0x(x)] = Tb1x[x]
        }
    };
    var bAe0x = function() {
        var cZ0x = /-([a-z])/g;
        return function(T8L) {
            T8L = T8L || "";
            return T8L.replace(cZ0x,
            function($1, $2) {
                return $2.toUpperCase()
            })
        }
    } ();
    var bAg0x = function(T8L) {
        return (!bzW0x.css3d ? cwT2x: cwU2x)[T8L]
    };
    var bAh1x = function() {
        var cZ0x = /\s+/;
        return function(fv1x) {
            fv1x = (fv1x || "").trim();
            return !! fv1x ? fv1x.split(cZ0x) : null
        }
    } ();
    var bby5D = function(G8y, t8l, fv1x) {
        G8y = a7h.B8t(G8y);
        if (!G8y) return;
        k8c.bb9S(bAh1x(fv1x),
        function(dS0x) {
            G8y.classList[t8l](dS0x)
        })
    };
    bc9T.KQ7J = function(i8a) {
        return fj0x.slice.call(i8a, 0)
    };
    bc9T.bnr8j = function(G8y) {
        return bc9T.KQ7J(G8y.children)
    };
    bc9T.bns8k = function(G8y, fv1x) {
        return bc9T.KQ7J(G8y.getElementsByClassName(fv1x))
    };
    bc9T.bnt8l = function(G8y, KO7H) {
        bby5D(G8y, "add", KO7H)
    };
    bc9T.bnu8m = function(G8y, KM7F) {
        bby5D(G8y, "remove", KM7F)
    };
    bc9T.SN1x = function(G8y, KM7F, KO7H) {
        bby5D(G8y, "remove", KM7F);
        bby5D(G8y, "add", KO7H)
    };
    bc9T.bnw8o = function(G8y, fv1x) {
        G8y = a7h.B8t(G8y);
        if (!G8y) return ! 1;
        var i8a = G8y.classList;
        if (!i8a || !i8a.length) return ! 1;
        return k8c.dd0x(bAh1x(fv1x),
        function(dS0x) {
            return i8a.contains(dS0x)
        }) >= 0
    };
    bc9T.bnF8x = function(G8y, dS0x) {};
    bc9T.boo8g = function(G8y) {};
    bc9T.bor8j = function(fO1x, nf3x) {
        fO1x.selectionEnd = nf3x.end || 0;
        fO1x.selectionStart = nf3x.start || 0;
        fO1x.focus()
    };
    bc9T.boX8P = function(fO1x) {
        return {
            end: fO1x.selectionEnd,
            start: fO1x.selectionStart
        }
    };
    bc9T.boZ8R = function() {
        var DY9P = function(dS0x, d8f) {
            var G8y = h8b.U8M(d8f);
            if (!G8y.value) a7h.v8n(G8y, dS0x)
        };
        var KH7A = function(dS0x, d8f) {
            a7h.w8o(h8b.U8M(d8f), dS0x)
        };
        return function(G8y, eZ0x, dS0x) {
            if (eZ0x == 1) {
                h8b.s8k(G8y, "blur", DY9P.g8c(null, dS0x))
            }
            if (eZ0x == 1 || eZ0x == -1) {
                h8b.s8k(G8y, "focus", KH7A.g8c(null, dS0x))
            }
        }
    } ();
    bc9T.bph8Z = function(I8A) {
        return (new XMLSerializer).serializeToString(I8A) || ""
    };
    bc9T.bqa8S = function(BE8w) {
        var fK1x = (new DOMParser).parseFromString(BE8w, "text/xml").documentElement;
        return fK1x.nodeName == "parsererror" ? null: fK1x
    };
    bc9T.bqf8X = function(G8y) {};
    bc9T.ng3x = function(G8y) {
        return null
    };
    bc9T.bqi8a = function(G8y) {
        return null
    };
    bc9T.bqm8e = function(dW0x) {};
    bc9T.bqK8C = function() {
        var bh9Y = bc9T.KQ7J(arguments);
        bh9Y[0] = a7h.B8t(bh9Y[0]);
        if (!bh9Y[0]) return null;
        bh9Y[1] = (bh9Y[1] || "").toLowerCase();
        if (!bh9Y[1]) return null;
        return bh9Y
    };
    bc9T.BD8v = function() {
        var vc6W = {
            touchstart: "mousedown",
            touchmove: "mousemove",
            touchend: "mouseup"
        },
        iT2x = {
            transitionend: "TransitionEnd",
            animationend: "AnimationEnd",
            animationstart: "AnimationStart",
            animationiteration: "AnimationIteration"
        };
        var cee8W = function(t8l) {
            return (lD3x.evt || lD3x.pro) + t8l
        };
        return function() {
            var bh9Y = bc9T.bqK8C.apply(bc9T, arguments);
            if (!bh9Y) return;
            var bcy5D = iT2x[bh9Y[1]],
            bcI5N = vc6W[bh9Y[1]];
            if ( !! bcy5D) {
                bh9Y[4] = bh9Y[1];
                bh9Y[1] = cee8W(bcy5D)
            } else if ( !! bcI5N) {
                var T8L = "on" + bh9Y[1];
                if (! (T8L in bh9Y[0])) {
                    bh9Y[4] = bh9Y[1];
                    bh9Y[1] = bcI5N
                }
            }
            return bh9Y
        }
    } ();
    bc9T.bqM8E = function() {
        var bh9Y = arguments;
        bh9Y[0].addEventListener(bh9Y[1], bh9Y[2], !!bh9Y[3])
    };
    bc9T.VB2x = function() {
        var bh9Y = arguments;
        bh9Y[0].removeEventListener(bh9Y[1], bh9Y[2], !!bh9Y[3])
    };
    bc9T.bqZ9Q = function(G8y, t8l, e8e) {
        var d8f = document.createEvent("Event");
        d8f.initEvent(t8l, !0, !0);
        NEJ.X(d8f, e8e);
        G8y.dispatchEvent(d8f)
    };
    bc9T.bzZ0x = function() {
        var go1x = /\((.*?)\)/,
        jD2x = /\s*,\s*/,
        i8a = ["m11", "m12", "m21", "m22", "m41", "m42"];
        var Wv2x = function(ss5x) {
            var iz2x = {};
            if (go1x.test(ss5x || "")) {
                k8c.bb9S(RegExp.$1.split(jD2x),
                function(C8u, r8j) {
                    iz2x[i8a[r8j]] = C8u || ""
                })
            }
            return iz2x
        };
        return function(ss5x) {
            if ( !! window.CSSMatrix) return new CSSMatrix(ss5x);
            var T8L = lD3x.clz + "CSSMatrix";
            if ( !! window[T8L]) return new window[T8L](ss5x || "");
            return Wv2x(ss5x)
        }
    } ();
    bc9T.bIC2x = function() {
        var cZ0x = /\{(.*?)\}/g;
        return function(T8L, bv9m) {
            bv9m = bv9m || o;
            var pT4X = bAg0x(T8L);
            return ! pT4X ? "": pT4X.replace(cZ0x,
            function($1, $2) {
                var bs9j = $2.split("|");
                return bv9m[bs9j[0]] || bs9j[1] || "0"
            })
        }
    } ();
    bc9T.brl9c = function(G8y, T8L, C8u) {
        G8y.style[bc9T.bIW2x(T8L)] = C8u
    };
    bc9T.bIW2x = function() {
        var cZ0x = /^[a-z]/,
        brA9r = lD3x.css;
        var cql0x = function(T8L) {
            return T8L.replace(cZ0x,
            function($1) {
                return brA9r + $1.toUpperCase()
            })
        };
        return function(T8L) {
            T8L = bAe0x(T8L);
            var csT1x = bc9T.csZ1x(T8L, Tb1x);
            return csT1x ? cql0x(T8L) : T8L
        }
    } ();
    bc9T.csZ1x = function() {
        var cZ0x = /^([a-z]+?)[A-Z]/;
        return function(T8L, bv9m) {
            if (!bv9m[T8L]) {
                if (cZ0x.test(T8L)) T8L = RegExp.$1
            }
            return !! bv9m[T8L]
        }
    } ();
    bc9T.ctf1x = function() {
        var cZ0x = /\$<(.*?)>/gi,
        brA9r = "-" + lD3x.css.toLowerCase() + "-";
        return function(jH2x) {
            return jH2x.replace(cZ0x,
            function($1, $2) {
                var eG0x = $2,
                bs9j = eG0x.split("|"),
                pT4X = bAg0x(bs9j[0]);
                if ( !! pT4X) {
                    return bc9T.bIC2x(bs9j[0], k8c.hD1x(bs9j[1]))
                }
                return ! bc9T.cuc1x(eG0x, Tb1x) ? eG0x: brA9r + eG0x
            })
        }
    } ();
    bc9T.cuc1x = function(T8L, bv9m) {
        return !! bv9m[T8L]
    };
    bc9T.btZ9Q = function(cb9S, jH2x) {
        cb9S.textContent = jH2x
    };
    bc9T.buf9W = function(cb9S, jH2x) {
        var xh6b = cb9S.sheet,
        bm9d = xh6b.cssRules.length;
        xh6b.insertRule(jH2x, bm9d);
        return xh6b.cssRules[bm9d]
    };
    bc9T.cyq2x = function(G8y, e8e) {};
    bc9T.Vd2x = function(Vf2x) {
        return (Vf2x || "").toLowerCase() != "transparent"
    };
    bc9T.cye2x = function(G8y) {};
    bc9T.bcS5X = function(G8y, T8L) {
        if ( !! G8y.getAttribute) return G8y.getAttribute(T8L);
        return ""
    };
    bc9T.VR2x = function(ft1x) {
        a7h.cz9q(ft1x)
    };
    Ts2x()
})(); (function() {
    var c8g = NEJ.P,
    a7h = c8g("nej.e"),
    h8b = c8g("nej.v"),
    N8F = c8g("nej.p"),
    bc9T = c8g("nej.h");
    if (N8F.mF3x.trident0) return;
    var gq1x = +(new Date);
    Q8I = {};
    bc9T.bnF8x = bc9T.bnF8x.er0x(function(d8f) {
        d8f.stopped = !0;
        var bh9Y = d8f.args,
        D8v = a7h.kZ2x(bh9Y[0]),
        J8B = "hover-" + D8v;
        if (!D8v || !!Q8I[J8B]) return;
        Q8I[J8B] = !0;
        h8b.s8k(D8v, "mouseenter", a7h.w8o.g8c(a7h, D8v, bh9Y[1]));
        h8b.s8k(D8v, "mouseleave", a7h.v8n.g8c(a7h, D8v, bh9Y[1]))
    });
    bc9T.boo8g = function() {
        var cAB2x = function() {};
        return bc9T.boo8g.er0x(function(d8f) {
            d8f.stopped = !0;
            var G8y = d8f.args[0],
            D8v = "fixed-" + a7h.kZ2x(G8y);
            if ( !! Q8I[D8v]) return;
            var bd9U = {};
            Q8I[D8v] = bd9U
        })
    } ();
    bc9T.bqf8X = bc9T.bqf8X.er0x(function(d8f) {
        d8f.stopped = !0;
        var G8y = d8f.args[0],
        cb9S = G8y.style,
        bRw5B = a7h.oQ4U();
        cb9S.width = bRw5B.scrollWidth + "px";
        cb9S.height = bRw5B.scrollHeight + "px"
    });
    bc9T.ng3x = bc9T.ng3x.er0x(function(d8f) {
        d8f.stopped = !0;
        var G8y = d8f.args[0],
        kI2x = Q8I[G8y.msk];
        if (!kI2x) {
            G8y.msk = gq1x++;
            kI2x = a7h.cY0x("iframe");
            kI2x.style.position = "absolute";
            Q8I[G8y.msk] = kI2x
        }
        d8f.value = kI2x;
        var cb9S = kI2x.style;
        cb9S.top = (parseInt(a7h.cV0x(G8y, "top")) || 0) + "px";
        cb9S.left = (parseInt(a7h.cV0x(G8y, "left")) || 0) + "px";
        cb9S.width = G8y.offsetWidth + "px";
        cb9S.height = G8y.offsetHeight + "px";
        G8y.insertAdjacentElement("beforeBegin", kI2x)
    });
    bc9T.bqi8a = bc9T.bqi8a.er0x(function(d8f) {
        d8f.stopped = !0;
        var kI2x = Q8I[d8f.args[0].msk];
        if ( !! kI2x) a7h.mK3x(kI2x)
    })
})(); (function() {
    var c8g = NEJ.P,
    N8F = c8g("nej.p"),
    a7h = c8g("nej.e"),
    bc9T = c8g("nej.h");
    if (N8F.mF3x.trident1) return;
    bc9T.BD8v = function() {
        var vc6W = {
            touchcancel: "MSPointerCancel",
            touchstart: "MSPointerDown",
            touchmove: "MSPointerMove",
            touchend: "MSPointerUp"
        };
        return bc9T.BD8v.er0x(function(d8f) {
            var bh9Y = bc9T.bqK8C.apply(bc9T, d8f.args);
            if (!bh9Y) {
                d8f.stopped = !0;
                return
            }
            var t8l = vc6W[bh9Y[1]];
            if ( !! t8l && ("on" + t8l).toLowerCase() in bh9Y[0]) {
                bh9Y[4] = bh9Y[1];
                bh9Y[1] = t8l;
                d8f.stopped = !0;
                d8f.value = bh9Y
            }
        })
    } ();
    bc9T.Vd2x = function(Vf2x) {
        return ! 0
    };
    bc9T.VR2x = bc9T.VR2x.er0x(function(d8f) {
        d8f.stopped = !0;
        var ft1x = d8f.args[0];
        a7h.Y9P(ft1x, "display", "none");
        try {
            ft1x.contentWindow.document.body.innerHTML = "&nbsp;"
        } catch(ex) {}
    })
})(); (function() {
    var c8g = NEJ.P,
    Z9Q = NEJ.O,
    N8F = c8g("nej.p"),
    a7h = c8g("nej.e"),
    h8b = c8g("nej.v"),
    k8c = c8g("nej.u"),
    bc9T = c8g("nej.h"),
    buJ9A = {};
    if (N8F.mF3x.trident) return;
    bc9T.KQ7J = bc9T.KQ7J.er0x(function(d8f) {
        d8f.stopped = !0;
        var i8a = d8f.args[0];
        if (!i8a) {
            d8f.value = null;
            return
        }
        var r8j = 0,
        o8g = [];
        while ( !! i8a[r8j]) {
            o8g.push(i8a[r8j++])
        }
        d8f.value = o8g
    });
    bc9T.bnr8j = bc9T.bnr8j.er0x(function(d8f) {
        d8f.stopped = !0;
        var bs9j = [];
        k8c.bb9S(d8f.args[0].childNodes,
        function(f8d) {
            if (f8d.nodeType == 1) bs9j.push(f8d)
        });
        d8f.value = bs9j
    });
    bc9T.bns8k = bc9T.bns8k.er0x(function(d8f) {
        var G8y = d8f.args[0];
        if ( !! G8y.getElementsByClassName) return;
        d8f.stopped = !0;
        var o8g = [],
        buH9y = new RegExp("(\\s|^)(?:" + d8f.args[1].replace(/\s+/g, "|") + ")(?=\\s|$)");
        k8c.bb9S(G8y.getElementsByTagName("*"),
        function(f8d) {
            if (buH9y.test(f8d.className)) o8g.push(f8d)
        });
        d8f.value = o8g
    });
    bc9T.bor8j = bc9T.bor8j.er0x(function(d8f) {
        var fO1x = d8f.args[0],
        nf3x = d8f.args[1];
        if (fO1x.selectionStart == null) {
            d8f.stopped = !0;
            var cR0x = fO1x.createTextRange();
            cR0x.collapse(!0);
            cR0x.moveStart("character", nf3x.start);
            cR0x.moveEnd("character", nf3x.end - nf3x.start);
            cR0x.select();
            fO1x.focus()
        }
    });
    bc9T.boX8P = bc9T.boX8P.er0x(function(d8f) {
        var fO1x = d8f.args[0];
        fO1x.focus();
        if (fO1x.selectionStart == null) {
            d8f.stopped = !0;
            var bRq5v = document.selection.createRange();
            var bRp5u = fO1x.createTextRange();
            bRp5u.moveToBookmark(bRq5v.getBookmark());
            var buG9x = fO1x.createTextRange();
            buG9x.collapse(!0);
            buG9x.setEndPoint("EndToStart", bRp5u);
            var hW1x = buG9x.text.length;
            d8f.value = {
                start: hW1x,
                end: hW1x + bRq5v.text.length
            }
        }
    });
    bc9T.bph8Z = bc9T.bph8Z.er0x(function(d8f) {
        if ( !! window.XMLSerializer) return;
        d8f.stopped = !0;
        var G8y = d8f.args[0];
        d8f.value = G8y.xml != null ? G8y.xml: G8y.outHTML
    });
    bc9T.bqa8S = function() {
        var Sx1x = ["Msxml2.DOMDocument.6.0", "Msxml2.DOMDocument.3.0"];
        var cxB2x = function() {
            try {
                for (var i = 0,
                l = Sx1x.length; i < l; i++) return new ActiveXObject(Sx1x[i])
            } catch(ex) {
                return null
            }
        };
        return bc9T.bqa8S.er0x(function(d8f) {
            if ( !! window.DOMParser) return;
            d8f.stopped = !0;
            var nx3x = cxB2x();
            if ( !! nx3x && nx3x.loadXML(d8f.args[0]) && !nx3x.parseError.errorCode) d8f.value = nx3x.documentElement
        })
    } ();
    bc9T.BD8v = function() {
        var iT2x = {
            input: "propertychange",
            load: "readystatechange"
        };
        for (var x in iT2x) buJ9A[iT2x[x]] = !0;
        var cxA2x = function(G8y, t8l) {
            if ("on" + t8l in G8y) return null;
            return iT2x[t8l] || ""
        };
        var cxd2x = function(t8l, dp0x) {
            var dE0x = dp0x;
            switch (t8l) {
            case "readystatechange":
                dE0x = function(d8f) {
                    var G8y = h8b.U8M(d8f) || this;
                    if (G8y.readyState == "loaded" || G8y.readyState == "complete") {
                        d8f.target = G8y;
                        dp0x.call(G8y, d8f)
                    }
                };
                break;
            case "propertychange":
                dE0x = function(d8f) {
                    var G8y = h8b.U8M(d8f) || this;
                    if ("value" in G8y && d8f.propertyName == "value") {
                        d8f.target = G8y;
                        dp0x.call(G8y, d8f)
                    }
                };
                break
            }
            return dE0x
        };
        return bc9T.BD8v.er0x(function(d8f) {
            var bh9Y = bc9T.bqK8C.apply(bc9T, d8f.args);
            if (!bh9Y) {
                d8f.stopped = !0;
                return
            }
            var t8l = cxA2x(bh9Y[0], bh9Y[1]);
            if ( !! t8l) {
                d8f.stopped = !0;
                bh9Y[4] = bh9Y[1];
                bh9Y[1] = t8l;
                if ( !! bh9Y[2]) {
                    bh9Y[5] = bh9Y[2];
                    bh9Y[2] = cxd2x(bh9Y[1], bh9Y[2])
                }
                d8f.value = bh9Y
            }
        },
        function(d8f) {
            var bh9Y = d8f.value;
            if (!bh9Y[0] || !k8c.gr1x(bh9Y[2])) return;
            if (!k8c.gr1x(bh9Y[5])) bh9Y[5] = bh9Y[2];
            bh9Y[2] = bh9Y[2].g8c(bh9Y[0])
        })
    } ();
    bc9T.bqM8E = bc9T.bqM8E.er0x(function(d8f) {
        var bh9Y = d8f.args;
        if ( !! buJ9A[bh9Y[1]] || !document.addEventListener) {
            d8f.stopped = !0;
            bh9Y[0].attachEvent("on" + bh9Y[1], bh9Y[2])
        }
    });
    bc9T.VB2x = bc9T.VB2x.er0x(function(d8f) {
        var bh9Y = d8f.args;
        if ( !! buJ9A[bh9Y[1]] || !document.removeEventListener) {
            d8f.stopped = !0;
            bh9Y[0].detachEvent("on" + bh9Y[1], bh9Y[2])
        }
    });
    bc9T.bqZ9Q = bc9T.bqZ9Q.er0x(function(d8f) {
        if (!document.createEvent) {
            d8f.stopped = !0;
            var bh9Y = d8f.args,
            bRc5h = document.createEventObject();
            NEJ.X(bRc5h, bh9Y[2]);
            try {
                bh9Y[0].fireEvent("on" + bh9Y[1], bRc5h)
            } catch(ex) {
                console.error(ex.message);
                console.error(ex.stack)
            }
        }
    });
    bc9T.brl9c = bc9T.brl9c.er0x(function(d8f) {
        var bh9Y = d8f.args,
        T8L = bh9Y[1].toLowerCase();
        if (T8L == "opacity" && !(T8L in document.body.style)) {
            bh9Y[1] = "filter";
            bh9Y[2] = "alpha(opacity=" + bh9Y[2] * 100 + ")"
        }
    });
    bc9T.btZ9Q = function() {
        var fc0x = 30;
        return bc9T.btZ9Q.er0x(function(d8f) {
            var G8y = d8f.args[0];
            if (!G8y.styleSheet) return;
            d8f.stopped = !0;
            var jH2x = d8f.args[1];
            var i8a = document.styleSheets;
            if (i8a.length > fc0x) {
                G8y = i8a[fc0x];
                jH2x = G8y.cssText + jH2x
            } else {
                G8y = G8y.styleSheet
            }
            G8y.cssText = jH2x
        })
    } ();
    bc9T.buf9W = bc9T.buf9W.er0x(function(d8f) {
        var bh9Y = d8f.args,
        xh6b = bh9Y[0].sheet;
        if ( !! xh6b) return;
        d8f.stopped = !0;
        var xh6b = bh9Y[0].styleSheet,
        bm9d = xh6b.rules.length,
        bs9j = bh9Y[1].split(/[\{\}]/);
        xh6b.addRule(bs9j[0], bs9j[1], bm9d);
        d8f.value = xh6b.rules[bm9d]
    });
    bc9T.boZ8R = function() {
        var DY9P = function(dS0x, d8f) {
            a7h.v8n(h8b.U8M(d8f), dS0x)
        };
        return bc9T.boZ8R.er0x(function(d8f) {
            if (N8F.dj0x.release >= "4.0") return;
            var bh9Y = d8f.args;
            if (bh9Y[1] != 1) {
                h8b.s8k(bh9Y[0], "blur", DY9P.g8c(null, bh9Y[2]));
                bh9Y[1] = -1
            }
        })
    } ();
    bc9T.Vd2x = function(Vf2x) {
        return ! 0
    };
    bc9T.bcS5X = bc9T.bcS5X.er0x(function(d8f) {
        var bh9Y = d8f.args,
        f8d = (bh9Y[0].attributes || Z9Q)[bh9Y[1]];
        if ( !! f8d) {
            d8f.stopped = !0;
            d8f.value = f8d.value
        }
    },
    function(d8f) {
        var bh9Y = d8f.args;
        if (bh9Y[1] == "maxlength" && d8f.value == 2147483647) d8f.value = ""
    });
    if (N8F.dj0x.release < 5) {
        bc9T.bqm8e = function() {
            var eE0x, ft1x, jE2x = [],
            buy9p = "cb-" + +(new Date),
            bl9c = '<script>parent.nej.h["' + buy9p + '"] = !0;parent.location.hash = decodeURIComponent("#<HASH>");</scr' + "ipt>";
            var bQY5d = function() {
                eE0x = window.clearTimeout(eE0x);
                if (!jE2x.length) return;
                var dW0x = jE2x.shift();
                try {
                    var vh6b = ft1x.contentWindow.document;
                    vh6b.open();
                    vh6b.write("<head><title>");
                    vh6b.write(document.title);
                    vh6b.write("</title>");
                    vh6b.write(bl9c.replace("#<HASH>", encodeURIComponent(dW0x)));
                    vh6b.write("</head><body></body>");
                    if (location.hostname != document.domain) vh6b.domain = document.domain;
                    vh6b.close();
                    bc9T[buy9p] = !1
                } catch(ex) {
                    console.log(ex.message || ex);
                    jE2x.unshift(dW0x)
                }
                eE0x = window.setTimeout(bQY5d, 50)
            };
            return bc9T.bqm8e.er0x(function(d8f) {
                d8f.stopped = !0;
                var dW0x = d8f.args[0];
                if ( !! bc9T[buy9p] || !ft1x && !dW0x) return;
                jE2x.push(dW0x);
                if (!ft1x) ft1x = a7h.Xb3x();
                bQY5d()
            })
        } ()
    }
    try {
        document.execCommand("BackgroundImageCache", !1, !0)
    } catch(e) {}
})(); (function() {
    var c8g = NEJ.P,
    h8b = c8g("nej.v"),
    bc9T = c8g("nej.h"),
    N8F = c8g("nej.p"),
    Xp3x = N8F.bND3x;
    if (N8F.mF3x.gecko) return;
    var Ts2x = function() {
        Xp3x.css3d = Xp3x.css3d || "MozPerspective" in document.body.style;
        if (!document.body.insertAdjacentElement) HTMLElement.prototype.insertAdjacentElement = function(iq2x, G8y) {
            if (!iq2x || !G8y) return;
            switch (iq2x) {
            case "beforeEnd":
                this.appendChild(G8y);
                return;
            case "beforeBegin":
                this.parentNode.insertBefore(G8y, this);
                return;
            case "afterBegin":
                !this.firstChild ? this.appendChild(G8y) : this.insertBefore(G8y, this.firstChild);
                return;
            case "afterEnd":
                !this.nextSibling ? this.parentNode.appendChild(G8y) : this.parentNode.insertBefore(G8y, this.nextSibling);
                return
            }
        };
        if (! ("innerText" in document.body)) {
            HTMLElement.prototype["__defineGetter__"]("innerText",
            function() {
                return this.textContent
            });
            HTMLElement.prototype["__defineSetter__"]("innerText",
            function(bl9c) {
                this.textContent = bl9c
            })
        }
    };
    bc9T.BD8v = function() {
        var go1x = /^(?:transitionend|animationend|animationstart|animationiteration)$/i;
        return bc9T.BD8v.er0x(function(d8f) {
            var bh9Y = d8f.args;
            if (go1x.test(bh9Y[1] || "")) {
                d8f.stopped = !0;
                d8f.value = bh9Y
            }
        })
    } ();
    bc9T.cye2x = function() {
        var cwR2x = function(d8f) {
            h8b.bf9W(d8f);
            h8b.U8M(d8f).control.click()
        };
        return function(G8y) {
            h8b.s8k(G8y, "click", cwR2x)
        }
    } ();
    Ts2x()
})(); (function() {
    var c8g = NEJ.P,
    a7h = c8g("nej.e"),
    bc9T = c8g("nej.h");
    var Ya3x = function() {
        var oy3x = !!document.body.classList;
        return function() {
            return oy3x
        }
    } ();
    var bQV5a = function() {
        var cZ0x = /\s+/g;
        return function(fv1x) {
            fv1x = (fv1x || "").trim();
            return ! fv1x ? null: new RegExp("(\\s|^)(?:" + fv1x.replace(cZ0x, "|") + ")(?=\\s|$)", "g")
        }
    } ();
    bc9T.SN1x = bc9T.SN1x.er0x(function(d8f) {
        if (Ya3x()) return;
        d8f.stopped = !0;
        var bh9Y = d8f.args,
        G8y = a7h.B8t(bh9Y[0]);
        if (!G8y || !bh9Y[1] && !bh9Y[2]) return;
        var fv1x = G8y.className || "";
        var KO7H = " " + (bh9Y[2] || ""),
        KM7F = bQV5a((bh9Y[1] || "") + KO7H); !! KM7F && (fv1x = fv1x.replace(KM7F, "$1"));
        G8y.className = (fv1x + KO7H).replace(/\s+/g, " ").trim()
    });
    bc9T.bnt8l = bc9T.bnt8l.er0x(function(d8f) {
        if (Ya3x()) return;
        d8f.stopped = !0;
        var bh9Y = d8f.args;
        bc9T.SN1x(bh9Y[0], "", bh9Y[1])
    });
    bc9T.bnu8m = bc9T.bnu8m.er0x(function(d8f) {
        if (Ya3x()) return;
        d8f.stopped = !0;
        var bh9Y = d8f.args;
        bc9T.SN1x(bh9Y[0], bh9Y[1], "")
    });
    bc9T.bnw8o = bc9T.bnw8o.er0x(function(d8f) {
        if (Ya3x()) return;
        d8f.stopped = !0;
        var bh9Y = d8f.args,
        G8y = a7h.B8t(bh9Y[0]);
        if (!G8y) {
            d8f.value = !1;
            return
        }
        var cZ0x = bQV5a(bh9Y[1]);
        d8f.value = !cZ0x ? !1 : cZ0x.test(G8y.className || "")
    })
})(); (function() {
    var c8g = NEJ.P,
    N8F = c8g("nej.p"),
    bc9T = c8g("nej.h");
    if (N8F.mF3x.webkit) return;
    bc9T.Vd2x = function(Vf2x) {
        return ! 0
    }
})(); (function() {
    var c8g = NEJ.P,
    bc9T = c8g("nej.h"),
    a7h = c8g("nej.e"),
    k8c = c8g("nej.u"),
    h8b = c8g("nej.v"),
    cP0x = c8g("nej.x"),
    Q8I = {};
    var bQS5X = function(G8y) {
        G8y = a7h.B8t(G8y);
        if (!G8y || !Q8I[G8y.id]) return;
        var YC3x = !0,
        D8v = G8y.id;
        k8c.ey0x(Q8I[D8v],
        function() {
            YC3x = !1;
            return ! 0
        });
        if (YC3x) delete Q8I[D8v]
    };
    h8b.s8k = cP0x.s8k = function() {
        var cwC2x = function() {
            var bh9Y = bc9T.BD8v.apply(bc9T, arguments);
            if (!bh9Y || !bh9Y[2]) return;
            var ut5y = a7h.kZ2x(bh9Y[0]),
            oo3x = Q8I[ut5y] || {};
            Q8I[ut5y] = oo3x;
            ut5y = bh9Y[4] || bh9Y[1];
            var Bq8i = oo3x[ut5y] || [];
            oo3x[ut5y] = Bq8i;
            Bq8i.push({
                type: bh9Y[1],
                func: bh9Y[2],
                capt: !!bh9Y[3],
                sfun: bh9Y[5] || bh9Y[2]
            });
            return bh9Y.slice(0, 4)
        };
        return function() {
            var bh9Y = cwC2x.apply(null, arguments);
            if ( !! bh9Y) bc9T.bqM8E.apply(bc9T, bh9Y);
            return this
        }
    } ();
    h8b.mx3x = cP0x.mx3x = function() {
        var cwz2x = function() {
            var vH6B = arguments,
            ut5y = a7h.kZ2x(vH6B[0]),
            oo3x = Q8I[ut5y],
            t8l = (vH6B[1] || "").toLowerCase(),
            d8f = vH6B[2];
            if (!oo3x || !t8l || !d8f) return;
            oo3x = oo3x[t8l];
            if (!oo3x) return;
            var cwy2x = !!vH6B[3],
            r8j = k8c.dd0x(oo3x,
            function(iT2x) {
                return d8f == iT2x.sfun && cwy2x == iT2x.capt
            });
            if (r8j < 0) return;
            var iT2x = oo3x.splice(r8j, 1)[0];
            return ! iT2x ? null: [a7h.B8t(ut5y), iT2x.type, iT2x.func, iT2x.capt]
        };
        return function() {
            var bh9Y = cwz2x.apply(null, arguments);
            if ( !! bh9Y) {
                bc9T.VB2x.apply(bc9T, bh9Y);
                bQS5X(bh9Y[0])
            }
            return this
        }
    } ();
    h8b.gG1x = cP0x.gG1x = function() {
        var bQH5M = function() {
            var vH6B = arguments,
            ut5y = a7h.kZ2x(vH6B[0]),
            oo3x = Q8I[ut5y],
            Bq8i = (vH6B[1] || "").toLowerCase();
            if (!oo3x || !Bq8i) return;
            var G8y = a7h.B8t(ut5y);
            k8c.mt3x(oo3x[Bq8i],
            function(iT2x, r8j, i8a) {
                bc9T.VB2x(G8y, iT2x.type, iT2x.func, iT2x.capt);
                i8a.splice(r8j, 1)
            });
            delete oo3x[Bq8i]
        };
        var cwi2x = function(G8y) {
            G8y = a7h.B8t(G8y);
            if (!G8y) return;
            var D8v = G8y.id;
            k8c.ey0x(Q8I[D8v],
            function(i8a, t8l) {
                bQH5M(D8v, t8l)
            });
            delete Q8I[D8v]
        };
        return function(G8y, t8l) { ! t8l ? cwi2x(G8y) : bQH5M(G8y, t8l);
            bQS5X(G8y);
            return this
        }
    } ();
    h8b.U8M = function() {
        var buo9f;
        var KB7u = function(T8L, G8y) {
            var bs9j = T8L.split(":");
            if (bs9j.length > 1) {
                if (!buo9f) buo9f = {
                    c: a7h.by9p,
                    d: a7h.u8m,
                    a: a7h.ga1x
                };
                var KA7t = buo9f[bs9j[0]];
                if ( !! KA7t) return !! KA7t(G8y, bs9j[1]);
                T8L = bs9j[1]
            }
            return !! a7h.ga1x(G8y, T8L) || !!a7h.u8m(G8y, T8L) || a7h.by9p(G8y, T8L)
        };
        return function(d8f) {
            if (!d8f) return null;
            var G8y = d8f.target || d8f.srcElement,
            dP0x = arguments[1];
            if (!dP0x) return G8y;
            if (k8c.fw1x(dP0x)) dP0x = KB7u.g8c(null, dP0x);
            if (k8c.gr1x(dP0x)) {
                while (G8y) {
                    if ( !! dP0x(G8y)) return G8y;
                    G8y = G8y.parentNode
                }
                return null
            }
            return G8y
        }
    } ();
    h8b.bf9W = function(d8f) {
        h8b.si5n(d8f);
        h8b.cm9d(d8f);
        return this
    };
    h8b.si5n = function(d8f) {
        if ( !! d8f) { !! d8f.stopPropagation ? d8f.stopPropagation() : d8f.cancelBubble = !0
        }
        return this
    };
    h8b.cm9d = function(d8f) {
        if ( !! d8f) { !! d8f.preventDefault ? d8f.preventDefault() : d8f.returnValue = !1
        }
        return this
    };
    h8b.cyn2x = function() {
        var pF4J = !1;
        var cvV2x = function() {
            if (pF4J) return;
            pF4J = !0;
            h8b.s8k(document, "click", cvK2x, !0)
        };
        var cvK2x = function(d8f) {
            var G8y = h8b.U8M(d8f),
            cvD1x = a7h.u8m(G8y, "stopped");
            if (cvD1x == "true") {
                h8b.bf9W(d8f);
                a7h.u8m(G8y, "stopped", "false")
            }
        };
        return function(d8f) {
            if (!d8f) return;
            if (d8f.type == "click") {
                h8b.bf9W(d8f);
                return
            }
            cvV2x();
            a7h.u8m(h8b.U8M(d8f), "stopped", "true")
        }
    } ();
    h8b.iW2x = function(d8f) {
        return d8f.pageX != null ? d8f.pageX: d8f.clientX + a7h.oQ4U().scrollLeft
    };
    h8b.lJ3x = function(d8f) {
        return d8f.pageY != null ? d8f.pageY: d8f.clientY + a7h.oQ4U().scrollTop
    };
    h8b.z8r = cP0x.z8r = function(G8y, t8l, e8e) {
        var bh9Y = bc9T.BD8v(G8y, t8l);
        if ( !! bh9Y) bc9T.bqZ9Q(bh9Y[0], bh9Y[1], e8e);
        return this
    };
    c8g("dbg").dumpEV = function() {
        return Q8I
    };
    cP0x.isChange = !0
})(); (function() {
    var o = !0,
    w = null; (function(B) {
        function v(a) {
            if ("bug-string-char-index" == a) return "a" != "a" [0];
            var f, c = "json" == a;
            if (c || "json-stringify" == a || "json-parse" == a) {
                if ("json-stringify" == a || c) {
                    var d = k.stringify,
                    b = "function" == typeof d && l;
                    if (b) { (f = function() {
                            return 1
                        }).toJSON = f;
                        try {
                            b = "0" === d(0) && "0" === d(new Number) && '""' == d(new String) && d(m) === r && d(r) === r && d() === r && "1" === d(f) && "[1]" == d([f]) && "[null]" == d([r]) && "null" == d(w) && "[null,null,null]" == d([r, m, w]) && '{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}' == d({
                                a: [f, o, !1, w, "\0\b\n\f\r\t"]
                            }) && "1" === d(w, f) && "[\n 1,\n 2\n]" == d([1, 2], w, 1) && '"-271821-04-20T00:00:00.000Z"' == d(new Date( - 864e13)) && '"+275760-09-13T00:00:00.000Z"' == d(new Date(864e13)) && '"-000001-01-01T00:00:00.000Z"' == d(new Date( - 621987552e5)) && '"1969-12-31T23:59:59.999Z"' == d(new Date( - 1))
                        } catch(n) {
                            b = !1
                        }
                    }
                    if (!c) return b
                }
                if ("json-parse" == a || c) {
                    a = k.parse;
                    if ("function" == typeof a) try {
                        if (0 === a("0") && !a(!1)) {
                            f = a('{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}');
                            var e = 5 == f.a.length && 1 === f.a[0];
                            if (e) {
                                try {
                                    e = !a('"\t"')
                                } catch(g) {}
                                if (e) try {
                                    e = 1 !== a("01")
                                } catch(i) {}
                            }
                        }
                    } catch(O) {
                        e = !1
                    }
                    if (!c) return e
                }
                return b && e
            }
        }
        var m = {}.toString,
        p, C, r, D = typeof define === "function" && define.amd,
        k = "object" == typeof exports && exports;
        k || D ? "object" == typeof JSON && JSON ? k ? (k.stringify = JSON.stringify, k.parse = JSON.parse) : k = JSON: D && (k = B.JSON = {}) : k = B.JSON || (B.JSON = {});
        var l = new Date( - 0xc782b5b800cec);
        try {
            l = -109252 == l.getUTCFullYear() && 0 === l.getUTCMonth() && 1 === l.getUTCDate() && 10 == l.getUTCHours() && 37 == l.getUTCMinutes() && 6 == l.getUTCSeconds() && 708 == l.getUTCMilliseconds()
        } catch(P) {}
        if (!v("json")) {
            var s = v("bug-string-char-index");
            if (!l) var t = Math.floor,
            J = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334],
            z = function(a, f) {
                return J[f] + 365 * (a - 1970) + t((a - 1969 + (f = +(f > 1))) / 4) - t((a - 1901 + f) / 100) + t((a - 1601 + f) / 400)
            };
            if (! (p = {}.hasOwnProperty)) p = function(a) {
                var f = {},
                c;
                if ((f.__proto__ = w, f.__proto__ = {
                    toString: 1
                },
                f).toString != m) p = function(a) {
                    var f = this.__proto__,
                    a = a in (this.__proto__ = w, this);
                    this.__proto__ = f;
                    return a
                };
                else {
                    c = f.constructor;
                    p = function(a) {
                        var f = (this.constructor || c).prototype;
                        return a in this && !(a in f && this[a] === f[a])
                    }
                }
                f = w;
                return p.call(this, a)
            };
            var K = {
                "boolean": 1,
                number: 1,
                string: 1,
                "undefined": 1
            };
            C = function(a, f) {
                var c = 0,
                b, h, n; (b = function() {
                    this.valueOf = 0
                }).prototype.valueOf = 0;
                h = new b;
                for (n in h) p.call(h, n) && c++;
                b = h = w;
                if (c) c = c == 2 ?
                function(a, f) {
                    var c = {},
                    b = m.call(a) == "[object Function]",
                    d;
                    for (d in a) ! (b && d == "prototype") && !p.call(c, d) && (c[d] = 1) && p.call(a, d) && f(d)
                }: function(a, f) {
                    var c = m.call(a) == "[object Function]",
                    b,
                    d;
                    for (b in a) ! (c && b == "prototype") && p.call(a, b) && !(d = b === "constructor") && f(b); (d || p.call(a, b = "constructor")) && f(b)
                };
                else {
                    h = ["valueOf", "toString", "toLocaleString", "propertyIsEnumerable", "isPrototypeOf", "hasOwnProperty", "constructor"];
                    c = function(a, f) {
                        var c = m.call(a) == "[object Function]",
                        b,
                        d;
                        if (d = !c) if (d = typeof a.constructor != "function") {
                            d = typeof a.hasOwnProperty;
                            d = d == "object" ? !!a.hasOwnProperty: !K[d]
                        }
                        d = d ? a.hasOwnProperty: p;
                        for (b in a) ! (c && b == "prototype") && d.call(a, b) && f(b);
                        for (c = h.length; b = h[--c]; d.call(a, b) && f(b));
                    }
                }
                c(a, f)
            };
            if (!v("json-stringify")) {
                var L = {
                    92 : "\\\\",
                    34 : '\\"',
                    8 : "\\b",
                    12 : "\\f",
                    10 : "\\n",
                    13 : "\\r",
                    9 : "\\t"
                },
                u = function(a, f) {
                    return ("000000" + (f || 0)).slice( - a)
                },
                G = function(a) {
                    var f = '"',
                    b = 0,
                    d = a.length,
                    h = d > 10 && s,
                    n;
                    for (h && (n = a.split("")); b < d; b++) {
                        var e = a.charCodeAt(b);
                        switch (e) {
                        case 8:
                        case 9:
                        case 10:
                        case 12:
                        case 13:
                        case 34:
                        case 92:
                            f = f + L[e];
                            break;
                        default:
                            if (e < 32) {
                                f = f + ("\\u00" + u(2, e.toString(16)));
                                break
                            }
                            f = f + (h ? n[b] : s ? a.charAt(b) : a[b])
                        }
                    }
                    return f + '"'
                },
                E = function(a, b, c, d, h, n, e) {
                    var g = b[a],
                    i,
                    j,
                    k,
                    l,
                    q,
                    s,
                    v,
                    x,
                    y;
                    try {
                        g = b[a]
                    } catch(A) {}
                    if (typeof g == "object" && g) {
                        i = m.call(g);
                        if (i == "[object Date]" && !p.call(g, "toJSON")) if (g > -1 / 0 && g < 1 / 0) {
                            if (z) {
                                k = t(g / 864e5);
                                for (i = t(k / 365.2425) + 1970 - 1; z(i + 1, 0) <= k; i++);
                                for (j = t((k - z(i, 0)) / 30.42); z(i, j + 1) <= k; j++);
                                k = 1 + k - z(i, j);
                                l = (g % 864e5 + 864e5) % 864e5;
                                q = t(l / 36e5) % 24;
                                s = t(l / 6e4) % 60;
                                v = t(l / 1e3) % 60;
                                l = l % 1e3
                            } else {
                                i = g.getUTCFullYear();
                                j = g.getUTCMonth();
                                k = g.getUTCDate();
                                q = g.getUTCHours();
                                s = g.getUTCMinutes();
                                v = g.getUTCSeconds();
                                l = g.getUTCMilliseconds()
                            }
                            g = (i <= 0 || i >= 1e4 ? (i < 0 ? "-": "+") + u(6, i < 0 ? -i: i) : u(4, i)) + "-" + u(2, j + 1) + "-" + u(2, k) + "T" + u(2, q) + ":" + u(2, s) + ":" + u(2, v) + "." + u(3, l) + "Z"
                        } else g = w;
                        else if (typeof g.toJSON == "function" && (i != "[object Number]" && i != "[object String]" && i != "[object Array]" || p.call(g, "toJSON"))) g = g.toJSON(a)
                    }
                    c && (g = c.call(b, a, g));
                    if (g === w) return "null";
                    i = m.call(g);
                    if (i == "[object Boolean]") return "" + g;
                    if (i == "[object Number]") return g > -1 / 0 && g < 1 / 0 ? "" + g: "null";
                    if (i == "[object String]") return G("" + g);
                    if (typeof g == "object") {
                        for (a = e.length; a--;) if (e[a] === g) throw TypeError();
                        e.push(g);
                        x = [];
                        b = n;
                        n = n + h;
                        if (i == "[object Array]") {
                            j = 0;
                            for (a = g.length; j < a; y || (y = o), j++) {
                                i = E(j, g, c, d, h, n, e);
                                x.push(i === r ? "null": i)
                            }
                            a = y ? h ? "[\n" + n + x.join(",\n" + n) + "\n" + b + "]": "[" + x.join(",") + "]": "[]"
                        } else {
                            C(d || g,
                            function(a) {
                                var b = E(a, g, c, d, h, n, e);
                                b !== r && x.push(G(a) + ":" + (h ? " ": "") + b);
                                y || (y = o)
                            });
                            a = y ? h ? "{\n" + n + x.join(",\n" + n) + "\n" + b + "}": "{" + x.join(",") + "}": "{}"
                        }
                        e.pop();
                        return a
                    }
                };
                k.stringify = function(a, b, c) {
                    var d, h, j;
                    if (typeof b == "function" || typeof b == "object" && b) if (m.call(b) == "[object Function]") h = b;
                    else if (m.call(b) == "[object Array]") {
                        j = {};
                        for (var e = 0,
                        g = b.length,
                        i; e < g; i = b[e++], (m.call(i) == "[object String]" || m.call(i) == "[object Number]") && (j[i] = 1));
                    }
                    if (c) if (m.call(c) == "[object Number]") {
                        if ((c = c - c % 1) > 0) {
                            d = "";
                            for (c > 10 && (c = 10); d.length < c; d = d + " ");
                        }
                    } else m.call(c) == "[object String]" && (d = c.length <= 10 ? c: c.slice(0, 10));
                    return E("", (i = {},
                    i[""] = a, i), h, j, d, "", [])
                }
            }
            if (!v("json-parse")) {
                var M = String.fromCharCode,
                N = {
                    92 : "\\",
                    34 : '"',
                    47 : "/",
                    98 : "\b",
                    116 : "\t",
                    110 : "\n",
                    102 : "\f",
                    114 : "\r"
                },
                b,
                A,
                j = function() {
                    b = A = w;
                    throw SyntaxError()
                },
                q = function() {
                    for (var a = A,
                    f = a.length,
                    c, d, h, k, e; b < f;) {
                        e = a.charCodeAt(b);
                        switch (e) {
                        case 9:
                        case 10:
                        case 13:
                        case 32:
                            b++;
                            break;
                        case 123:
                        case 125:
                        case 91:
                        case 93:
                        case 58:
                        case 44:
                            c = s ? a.charAt(b) : a[b];
                            b++;
                            return c;
                        case 34:
                            c = "@";
                            for (b++; b < f;) {
                                e = a.charCodeAt(b);
                                if (e < 32) j();
                                else if (e == 92) {
                                    e = a.charCodeAt(++b);
                                    switch (e) {
                                    case 92:
                                    case 34:
                                    case 47:
                                    case 98:
                                    case 116:
                                    case 110:
                                    case 102:
                                    case 114:
                                        c = c + N[e];
                                        b++;
                                        break;
                                    case 117:
                                        d = ++b;
                                        for (h = b + 4; b < h; b++) {
                                            e = a.charCodeAt(b);
                                            e >= 48 && e <= 57 || e >= 97 && e <= 102 || e >= 65 && e <= 70 || j()
                                        }
                                        c = c + M("0x" + a.slice(d, b));
                                        break;
                                    default:
                                        j()
                                    }
                                } else {
                                    if (e == 34) break;
                                    e = a.charCodeAt(b);
                                    for (d = b; e >= 32 && e != 92 && e != 34;) e = a.charCodeAt(++b);
                                    c = c + a.slice(d, b)
                                }
                            }
                            if (a.charCodeAt(b) == 34) {
                                b++;
                                return c
                            }
                            j();
                        default:
                            d = b;
                            if (e == 45) {
                                k = o;
                                e = a.charCodeAt(++b)
                            }
                            if (e >= 48 && e <= 57) {
                                for (e == 48 && (e = a.charCodeAt(b + 1), e >= 48 && e <= 57) && j(); b < f && (e = a.charCodeAt(b), e >= 48 && e <= 57); b++);
                                if (a.charCodeAt(b) == 46) {
                                    for (h = ++b; h < f && (e = a.charCodeAt(h), e >= 48 && e <= 57); h++);
                                    h == b && j();
                                    b = h
                                }
                                e = a.charCodeAt(b);
                                if (e == 101 || e == 69) {
                                    e = a.charCodeAt(++b); (e == 43 || e == 45) && b++;
                                    for (h = b; h < f && (e = a.charCodeAt(h), e >= 48 && e <= 57); h++);
                                    h == b && j();
                                    b = h
                                }
                                return + a.slice(d, b)
                            }
                            k && j();
                            if (a.slice(b, b + 4) == "true") {
                                b = b + 4;
                                return o
                            }
                            if (a.slice(b, b + 5) == "false") {
                                b = b + 5;
                                return false
                            }
                            if (a.slice(b, b + 4) == "null") {
                                b = b + 4;
                                return w
                            }
                            j()
                        }
                    }
                    return "$"
                },
                F = function(a) {
                    var b, c;
                    a == "$" && j();
                    if (typeof a == "string") {
                        if ((s ? a.charAt(0) : a[0]) == "@") return a.slice(1);
                        if (a == "[") {
                            for (b = [];; c || (c = o)) {
                                a = q();
                                if (a == "]") break;
                                if (c) if (a == ",") {
                                    a = q();
                                    a == "]" && j()
                                } else j();
                                a == "," && j();
                                b.push(F(a))
                            }
                            return b
                        }
                        if (a == "{") {
                            for (b = {};; c || (c = o)) {
                                a = q();
                                if (a == "}") break;
                                if (c) if (a == ",") {
                                    a = q();
                                    a == "}" && j()
                                } else j(); (a == "," || typeof a != "string" || (s ? a.charAt(0) : a[0]) != "@" || q() != ":") && j();
                                b[a.slice(1)] = F(q())
                            }
                            return b
                        }
                        j()
                    }
                    return a
                },
                I = function(a, b, c) {
                    c = H(a, b, c);
                    c === r ? delete a[b] : a[b] = c
                },
                H = function(a, b, c) {
                    var d = a[b],
                    h;
                    if (typeof d == "object" && d) if (m.call(d) == "[object Array]") for (h = d.length; h--;) I(d, h, c);
                    else C(d,
                    function(a) {
                        I(d, a, c)
                    });
                    return c.call(a, b, d)
                };
                k.parse = function(a, f) {
                    var c, d;
                    b = 0;
                    A = "" + a;
                    c = F(q());
                    q() != "$" && j();
                    b = A = w;
                    return f && m.call(f) == "[object Function]" ? H((d = {},
                    d[""] = c, d), "", f) : c
                }
            }
        }
        D && define(function() {
            return k
        })
    })(this)
})(); (function() {
    var c8g = NEJ.P,
    N8F = c8g("nej.p");
    if (N8F.mF3x.trident0) return;
    JSON.parse = JSON.parse.er0x(function(d8f) {
        var cF0x = d8f.args[0] || "";
        if (cF0x.length >= 5e5) {
            d8f.stopped = !0;
            d8f.value = eval("(" + cF0x + ")")
        }
    })
})(); (function() {
    var c8g = NEJ.P,
    Z9Q = NEJ.O,
    bn9e = NEJ.F,
    eb0x = c8g("nej.g"),
    a7h = c8g("nej.e"),
    k8c = c8g("nej.u"),
    h8b = c8g("nej.v"),
    bc9T = c8g("nej.h"),
    cP0x = c8g("nej.x"),
    Kx7q,
    bui9Z = {},
    Q8I = document.createDocumentFragment();
    a7h.kZ2x = cP0x.kZ2x = function(G8y) {
        G8y = a7h.B8t(G8y);
        if (!G8y) return;
        var D8v = !!G8y.id ? G8y.id: "auto-id-" + k8c.Sj1x(16);
        G8y.id = D8v;
        if (a7h.B8t(D8v) != G8y) bui9Z[D8v] = G8y;
        return D8v
    };
    a7h.B8t = cP0x.B8t = function(G8y) {
        var f8d = bui9Z["" + G8y];
        if ( !! f8d) return f8d;
        if (!k8c.fw1x(G8y) && !k8c.vl6f(G8y)) return G8y;
        return document.getElementById(G8y)
    };
    a7h.db0x = cP0x.db0x = function(G8y, dS0x) {
        G8y = a7h.B8t(G8y);
        if (!G8y) return null;
        var i8a = bc9T.bnr8j(G8y);
        if ( !! dS0x) k8c.mt3x(i8a,
        function(f8d, r8j) {
            if (!a7h.by9p(f8d, dS0x)) i8a.splice(r8j, 1)
        });
        return i8a
    };
    a7h.F8x = cP0x.F8x = function(G8y, fv1x) {
        G8y = a7h.B8t(G8y);
        return ! G8y ? null: bc9T.bns8k(G8y, fv1x.trim())
    };
    a7h.bQm4q = cP0x.bQm4q = function(G8y) {
        G8y = a7h.B8t(G8y);
        if ( !! G8y) {
            G8y = G8y.parentNode;
            while ( !! G8y) {
                if (G8y.scrollHeight > G8y.clientHeight) break;
                G8y = G8y.parentNode
            }
            if ( !! G8y) return G8y
        }
        var oo3x = document.body.scrollHeight,
        Bq8i = document.documentElement.scrollHeight;
        return Bq8i >= oo3x ? document.documentElement: document.body
    };
    a7h.oQ4U = function() {
        var bQj4n = function(i8a) {
            var o8g = 0;
            k8c.bb9S(i8a,
            function(eV0x) {
                if (!eV0x) return;
                if (!o8g) {
                    o8g = eV0x
                } else {
                    o8g = Math.min(o8g, eV0x)
                }
            });
            return o8g
        };
        return function(vh6b) {
            var Kv7o = vh6b || document,
            Bj8b = Kv7o.body,
            Bi8a = Kv7o.documentElement,
            o8g = {
                scrollTop: Math.max(Bj8b.scrollTop, Bi8a.scrollTop),
                scrollLeft: Math.max(Bj8b.scrollLeft, Bi8a.scrollLeft),
                clientWidth: bQj4n([Bj8b.clientWidth, Bj8b.offsetWidth, Bi8a.clientWidth, Bi8a.offsetWidth]),
                clientHeight: bQj4n([Bj8b.clientHeight, Bj8b.offsetHeight, Bi8a.clientHeight, Bi8a.offsetHeight])
            };
            o8g.scrollWidth = Math.max(o8g.clientWidth, Bj8b.scrollWidth, Bi8a.scrollWidth);
            o8g.scrollHeight = Math.max(o8g.clientHeight, Bj8b.scrollHeight, Bi8a.scrollHeight);
            return o8g
        }
    } ();
    a7h.cyr2x = function(fc0x, oq3x) {
        var o8g = NEJ.X({},
        oq3x),
        bQg4k = fc0x.width / fc0x.height,
        bba5f = oq3x.width / oq3x.height;
        if (bQg4k > bba5f && oq3x.height > fc0x.height) {
            o8g.height = fc0x.height;
            o8g.width = o8g.height * bba5f
        }
        if (bQg4k < bba5f && oq3x.width > fc0x.width) {
            o8g.width = fc0x.width;
            o8g.height = o8g.width / bba5f
        }
        return o8g
    };
    a7h.cys2x = function() {
        var cZ0x = /\s+/;
        var up5u = {
            left: function() {
                return 0
            },
            center: function(gY1x, oq3x) {
                return (gY1x.width - oq3x.width) / 2
            },
            right: function(gY1x, oq3x) {
                return gY1x.width - oq3x.width
            },
            top: function() {
                return 0
            },
            middle: function(gY1x, oq3x) {
                return (gY1x.height - oq3x.height) / 2
            },
            bottom: function(gY1x, oq3x) {
                return gY1x.height - oq3x.height
            }
        };
        return function(gY1x, oq3x, nl3x) {
            var o8g = {},
            bs9j = (nl3x || "").split(cZ0x),
            gi1x = up5u[bs9j[1]] || up5u.middle,
            gx1x = up5u[bs9j[0]] || up5u.center;
            o8g.top = gi1x(gY1x, oq3x);
            o8g.left = gx1x(gY1x, oq3x);
            return o8g
        }
    } ();
    a7h.sU5Z = cP0x.sU5Z = function(G8y, dS0x) {
        bc9T.bnF8x(G8y, dS0x || a7h.u8m(G8y, "hover") || "js-hover");
        return this
    };
    a7h.Ks7l = cP0x.Ks7l = function(G8y) {
        G8y = a7h.B8t(G8y);
        if (!G8y) return;
        bc9T.boo8g(G8y)
    };
    a7h.cvi1x = cP0x.cvi1x = function() {
        var Q8I = {},
        bQa4e = 2;
        var cvg1x = function(D8v, dS0x, d8f) {
            Q8I[D8v] = [h8b.iW2x(d8f), h8b.lJ3x(d8f)];
            a7h.w8o(D8v, dS0x)
        };
        var cva1x = function(D8v, dS0x, d8f) {
            var bI9z = Q8I[D8v];
            if (!k8c.eC0x(bI9z)) return;
            var cuZ1x = Math.abs(h8b.iW2x(d8f) - bI9z[0]),
            cuY1x = Math.abs(h8b.lJ3x(d8f) - bI9z[1]);
            if (cuZ1x > bQa4e || cuY1x > bQa4e) bud9U(D8v, dS0x)
        };
        var bud9U = function(D8v, dS0x) {
            if (k8c.eC0x(Q8I[D8v])) {
                Q8I[D8v] = -1;
                a7h.v8n(D8v, dS0x)
            }
        };
        return function(G8y, dS0x) {
            var D8v = a7h.kZ2x(G8y);
            if (!D8v || Q8I[D8v] != null) return;
            Q8I[D8v] = -1;
            dS0x = dS0x || a7h.u8m(D8v, "highlight") || "js-highlight";
            h8b.s8k(D8v, "touchstart", cvg1x.g8c(null, D8v, dS0x));
            h8b.s8k(document, "touchmove", cva1x.g8c(null, D8v, dS0x));
            h8b.s8k(document, "touchend", bud9U.g8c(null, D8v, dS0x));
            h8b.s8k(document, "touchcancel", bud9U.g8c(null, D8v, dS0x))
        }
    } ();
    a7h.Bc8U = cP0x.Bc8U = function() {
        var cuH1x = function(D8v, dS0x, cuG1x) {
            var G8y = a7h.B8t(D8v),
            d8f = {
                clazz: dS0x,
                target: G8y
            };
            if (a7h.by9p(G8y, dS0x)) {
                d8f.toggled = !1;
                a7h.v8n(G8y, dS0x)
            } else {
                d8f.toggled = !0;
                a7h.w8o(G8y, dS0x)
            }
            cuG1x.call(null, d8f)
        };
        return function(G8y, e8e) {
            G8y = a7h.B8t(G8y);
            if ( !! G8y) {
                var iz2x = {
                    ontoggle: bn9e,
                    clazz: "js-toggle",
                    element: G8y.parentNode
                };
                if (k8c.fw1x(e8e)) {
                    var f8d = a7h.B8t(e8e); !! f8d ? iz2x.element = f8d: iz2x.clazz = e8e
                } else {
                    NEJ.EX(iz2x, e8e);
                    iz2x.element = a7h.B8t(iz2x.element)
                }
                var D8v = a7h.kZ2x(iz2x.element);
                h8b.s8k(G8y, "click", cuH1x.g8c(null, D8v, iz2x.clazz, iz2x.ontoggle || bn9e))
            }
            return this
        }
    } ();
    a7h.mc3x = cP0x.mc3x = function(G8y, e8e) {
        G8y = a7h.B8t(G8y);
        if (!G8y) return;
        var eZ0x = 0,
        dS0x = "js-focus";
        if (k8c.vl6f(e8e)) {
            eZ0x = e8e
        } else if (k8c.fw1x(e8e)) {
            dS0x = e8e
        } else if (k8c.lg2x(e8e)) {
            eZ0x = e8e.mode || eZ0x;
            dS0x = e8e.clazz || dS0x
        }
        var C8u = parseInt(a7h.u8m(G8y, "mode"));
        if (!isNaN(C8u)) eZ0x = C8u;
        C8u = a7h.u8m(G8y, "focus");
        if ( !! C8u) dS0x = C8u;
        bc9T.boZ8R(G8y, eZ0x, dS0x);
        return this
    };
    a7h.cY0x = function() {
        var bv9m = {
            a: {
                href: "#",
                hideFocus: !0
            },
            style: {
                type: "text/css"
            },
            link: {
                type: "text/css",
                rel: "stylesheet"
            },
            iframe: {
                frameBorder: 0
            },
            script: {
                defer: !0,
                type: "text/javascript"
            }
        };
        return function(fk0x, fv1x, bG9x) {
            var G8y = document.createElement(fk0x);
            NEJ.X(G8y, bv9m[fk0x.toLowerCase()]);
            if ( !! fv1x) G8y.className = fv1x;
            bG9x = a7h.B8t(bG9x);
            if ( !! bG9x) bG9x.appendChild(G8y);
            return G8y
        }
    } ();
    a7h.Xb3x = function() {
        var cuF1x = function() {
            if (location.hostname == document.domain) return "about:blank";
            return 'javascript:(function(){document.open();document.domain="' + document.domain + '";document.close();})();'
        };
        var cuA1x = function(T8L) {
            T8L = T8L.trim();
            if (!T8L) return a7h.cY0x("iframe");
            var ft1x;
            try {
                ft1x = document.createElement('<iframe name="' + T8L + '"></iframe>');
                ft1x.frameBorder = 0
            } catch(e) {
                ft1x = a7h.cY0x("iframe");
                ft1x.name = T8L
            }
            return ft1x
        };
        return function(e8e) {
            e8e = e8e || Z9Q;
            var ft1x = cuA1x(e8e.name || "");
            if (!e8e.visible) ft1x.style.display = "none";
            if (k8c.gr1x(e8e.onload)) h8b.s8k(ft1x, "load",
            function(d8f) {
                if (!ft1x.src) return;
                h8b.gG1x(ft1x, "load");
                e8e.onload(d8f)
            });
            var bG9x = e8e.parent;
            if (k8c.gr1x(bG9x)) {
                try {
                    bG9x(ft1x)
                } catch(e) {}
            } else { (a7h.B8t(bG9x) || document.body).appendChild(ft1x)
            }
            var dt0x = e8e.src || cuF1x();
            window.setTimeout(function() {
                ft1x.src = dt0x
            },
            0);
            return ft1x
        }
    } ();
    a7h.cz9q = cP0x.cz9q = function() {
        var bPP4T = function(yE7x) {
            yE7x.src = eb0x.bnm8e
        };
        var bPO4S = function(vn6h) {
            vn6h.src = "about:blank"
        };
        return function(G8y, cur1x) {
            G8y = a7h.B8t(G8y);
            if (!G8y) return this;
            if (!cur1x) h8b.gG1x(G8y);
            delete bui9Z[G8y.id];
            var fk0x = G8y.tagName;
            if (fk0x == "IFRAME") {
                bPO4S(G8y)
            } else if (fk0x == "IMG") {
                bPP4T(G8y)
            } else if ( !! G8y.getElementsByTagName) {
                k8c.bb9S(G8y.getElementsByTagName("img"), bPP4T);
                k8c.bb9S(G8y.getElementsByTagName("iframe"), bPO4S)
            }
            if ( !! G8y.parentNode) {
                G8y.parentNode.removeChild(G8y)
            }
            return this
        }
    } ();
    a7h.mK3x = cP0x.mK3x = function(G8y) {
        G8y = a7h.B8t(G8y);
        if ( !! G8y) Q8I.appendChild(G8y);
        return this
    };
    a7h.bPN4R = cP0x.bPN4R = function(G8y) {
        G8y = a7h.B8t(G8y);
        if (!G8y) return;
        k8c.mt3x(G8y.childNodes,
        function(f8d) {
            a7h.cz9q(f8d)
        })
    };
    a7h.Kn7g = cP0x.Kn7g = function() {
        var dS0x, go1x = /\s+/;
        var cuk1x = function() {
            if ( !! dS0x) return;
            dS0x = a7h.sp5u(".#<uispace>{position:relative;zoom:1;}.#<uispace>-show{position:absolute;top:0;left:100%;cursor:text;white-space:nowrap;overflow:hidden;}");
            a7h.bPM4Q()
        };
        return function(G8y, e8e) {
            G8y = a7h.B8t(G8y);
            if (!G8y) return;
            cuk1x();
            e8e = e8e || Z9Q;
            var bG9x = G8y.parentNode;
            if (!a7h.by9p(bG9x, dS0x)) {
                bG9x = a7h.cY0x("span", dS0x);
                G8y.insertAdjacentElement("beforeBegin", bG9x);
                bG9x.appendChild(G8y)
            }
            var bPJ4N = e8e.nid || "",
            f8d = a7h.F8x(bG9x, bPJ4N || dS0x + "-show")[0];
            if (!f8d) {
                var dT0x = ((e8e.clazz || "") + " " + bPJ4N).trim();
                dT0x = dS0x + "-show" + (!dT0x ? "": " ") + dT0x;
                f8d = a7h.cY0x(e8e.tag || "span", dT0x);
                bG9x.appendChild(f8d)
            }
            var dT0x = e8e.clazz;
            if ( !! dT0x) {
                dT0x = (dT0x || "").trim().split(go1x)[0] + "-parent";
                a7h.w8o(bG9x, dT0x)
            }
            return f8d
        }
    } ();
    a7h.u8m = cP0x.u8m = function() {
        var btY9P = {},
        fk0x = "data-",
        cZ0x = /\-(.{1})/gi;
        var EK9B = function(G8y) {
            var D8v = a7h.kZ2x(G8y);
            if ( !! btY9P[D8v]) return;
            var bv9m = {};
            k8c.bb9S(G8y.attributes,
            function(f8d) {
                var J8B = f8d.nodeName;
                if (J8B.indexOf(fk0x) != 0) return;
                J8B = J8B.replace(fk0x, "").replace(cZ0x,
                function($1, $2) {
                    return $2.toUpperCase()
                });
                bv9m[J8B] = f8d.nodeValue || ""
            });
            btY9P[D8v] = bv9m
        };
        return function(G8y, J8B, C8u) {
            G8y = a7h.B8t(G8y);
            if (!G8y) return null;
            var baK4O = G8y.dataset;
            if (!baK4O) {
                EK9B(G8y);
                baK4O = btY9P[G8y.id]
            }
            if (C8u !== undefined) baK4O[J8B] = C8u;
            return baK4O[J8B]
        }
    } ();
    a7h.ga1x = cP0x.ga1x = function(G8y, T8L, C8u) {
        G8y = a7h.B8t(G8y);
        if (!G8y) return "";
        if (C8u !== undefined && !!G8y.setAttribute) G8y.setAttribute(T8L, C8u);
        return bc9T.bcS5X(G8y, T8L)
    };
    a7h.no3x = function(dL0x) {
        var qL4P = document.createElement("div");
        qL4P.innerHTML = dL0x;
        var i8a = a7h.db0x(qL4P);
        return i8a.length > 1 ? qL4P: i8a[0]
    };
    a7h.ctS1x = cP0x.ctS1x = function(G8y) {
        G8y = a7h.B8t(G8y);
        return ! G8y ? "": bc9T.bph8Z(G8y)
    };
    a7h.bPE4I = function(BE8w) {
        BE8w = (BE8w || "").trim();
        return ! BE8w ? null: bc9T.bqa8S(BE8w)
    };
    a7h.ctJ1x = function(cJ0x, t8l) {
        cJ0x = cJ0x || "";
        switch (t8l) {
        case "xml":
            cJ0x = a7h.bPE4I(cJ0x);
            break;
        case "json":
            try {
                cJ0x = JSON.parse(cJ0x)
            } catch(ex) {
                cJ0x = null
            }
            break
        }
        return cJ0x
    };
    a7h.hL1x = cP0x.hL1x = function() {
        var ctI1x = function(G8y) {
            return G8y == document.body || G8y == document.documentElement
        };
        return function(dY0x, oA3x) {
            dY0x = a7h.B8t(dY0x);
            if (!dY0x) return null;
            oA3x = a7h.B8t(oA3x) || null;
            var o8g = {
                x: 0,
                y: 0
            },
            btW9N,
            dl0x,
            Uz2x;
            while ( !! dY0x && dY0x != oA3x) {
                btW9N = ctI1x(dY0x);
                dl0x = btW9N ? 0 : dY0x.scrollLeft;
                Uz2x = parseInt(a7h.cV0x(dY0x, "borderLeftWidth")) || 0;
                o8g.x += dY0x.offsetLeft + Uz2x - dl0x;
                dl0x = btW9N ? 0 : dY0x.scrollTop;
                Uz2x = parseInt(a7h.cV0x(dY0x, "borderTopWidth")) || 0;
                o8g.y += dY0x.offsetTop + Uz2x - dl0x;
                dY0x = dY0x.offsetParent
            }
            return o8g
        }
    } ();
    a7h.mE3x = cP0x.mE3x = function(G8y) {
        var be9V = a7h.hL1x(G8y);
        window.scrollTo(be9V.x, be9V.y);
        return this
    };
    a7h.cyx2x = function(ss5x) {
        ss5x = (ss5x || "").trim();
        return bc9T.bzZ0x(ss5x)
    };
    a7h.ctA1x = cP0x.ctA1x = function(G8y, T8L, bv9m) {
        G8y = a7h.B8t(G8y);
        if (!G8y) return this;
        var C8u = bc9T.bIC2x(T8L, bv9m);
        if (!C8u) return this;
        a7h.Y9P(G8y, "transform", C8u);
        return this
    };
    a7h.eT0x = cP0x.eT0x = function(G8y, bv9m) {
        G8y = a7h.B8t(G8y);
        if ( !! G8y) k8c.ey0x(bv9m,
        function(C8u, T8L) {
            a7h.Y9P(G8y, T8L, C8u)
        });
        return this
    };
    a7h.ctz1x = cP0x.ctz1x = function(fO1x, e8e) {
        fO1x = a7h.B8t(fO1x);
        if (!fO1x) return {
            start: 0,
            end: 0
        };
        if (k8c.vl6f(e8e)) e8e = {
            start: e8e,
            end: e8e
        };
        if (e8e != null) {
            if (e8e.end == null) e8e.end = e8e.start || 0;
            bc9T.bor8j(fO1x, e8e)
        } else {
            e8e = bc9T.boX8P(fO1x)
        }
        return e8e
    };
    a7h.Y9P = cP0x.Y9P = function(G8y, T8L, C8u) {
        G8y = a7h.B8t(G8y);
        if ( !! G8y) bc9T.brl9c(G8y, T8L, C8u);
        return this
    };
    a7h.cV0x = cP0x.cV0x = function(G8y, T8L) {
        G8y = a7h.B8t(G8y);
        if (!G8y) return "";
        var gI1x = !window.getComputedStyle ? G8y.currentStyle || Z9Q: window.getComputedStyle(G8y, null);
        return gI1x[bc9T.bIW2x(T8L)] || ""
    };
    a7h.bPA4E = function() {
        var cZ0x = /[\s\r\n]+/gi;
        return function(cb9S) {
            cb9S = (cb9S || "").trim().replace(cZ0x, " ");
            if (!cb9S) return;
            var f8d = a7h.cY0x("style");
            document.head.appendChild(f8d);
            bc9T.btZ9Q(f8d, bc9T.ctf1x(cb9S));
            return f8d
        }
    } ();
    a7h.bPx4B = function(yS7L) {
        try {
            yS7L = yS7L.trim();
            if ( !! yS7L) return (new Function(yS7L))()
        } catch(ex) {
            console.error(ex.message);
            console.error(ex.stack)
        }
    };
    a7h.sp5u = function() {
        var cZ0x = /#<.*?>/g,
        gq1x = +(new Date);
        return function(jH2x) {
            if (!Kx7q) Kx7q = [];
            var fv1x = "auto-" + gq1x++;
            Kx7q.push(jH2x.replace(cZ0x, fv1x));
            return fv1x
        }
    } ();
    a7h.bPM4Q = function() {
        if ( !! Kx7q) {
            a7h.bPA4E(Kx7q.join(""));
            Kx7q = null
        }
        return this
    };
    a7h.cyz2x = function(cb9S, jH2x) {
        cb9S = a7h.B8t(cb9S);
        return ! cb9S ? null: bc9T.buf9W(cb9S, jH2x)
    };
    a7h.w8o = cP0x.w8o = function() {
        bc9T.bnt8l.apply(bc9T, arguments);
        return this
    };
    a7h.v8n = cP0x.v8n = function() {
        bc9T.bnu8m.apply(bc9T, arguments);
        return this
    };
    a7h.eR0x = cP0x.eR0x = function() {
        bc9T.SN1x.apply(bc9T, arguments);
        return this
    };
    a7h.by9p = cP0x.by9p = function() {
        return bc9T.bnw8o.apply(bc9T, arguments)
    };
    if (!document.head) document.head = document.getElementsByTagName("head")[0] || document.body;
    cP0x.isChange = !0
})(); (function() {
    var c8g = NEJ.P,
    Z9Q = NEJ.O,
    fj0x = NEJ.R,
    bn9e = NEJ.F,
    a7h = c8g("nej.e"),
    bc9T = c8g("nej.h"),
    k8c = c8g("nej.u");
    var DV9M = function(j8b, t8l) {
        try {
            t8l = t8l.toLowerCase();
            if (j8b === null) return t8l == "null";
            if (j8b === undefined) return t8l == "undefined";
            return Z9Q.toString.call(j8b).toLowerCase() == "[object " + t8l + "]"
        } catch(e) {
            return ! 1
        }
    };
    k8c.gr1x = function(j8b) {
        return DV9M(j8b, "function")
    };
    k8c.fw1x = function(j8b) {
        return DV9M(j8b, "string")
    };
    k8c.vl6f = function(j8b) {
        return DV9M(j8b, "number")
    };
    k8c.cyA2x = function(j8b) {
        return DV9M(j8b, "boolean")
    };
    k8c.Eq9h = function(j8b) {
        return DV9M(j8b, "date")
    };
    k8c.eC0x = function(j8b) {
        return DV9M(j8b, "array")
    };
    k8c.lg2x = function(j8b) {
        return DV9M(j8b, "object")
    };
    k8c.fp1x = function() {
        var cZ0x = /[^\x00-\xfff]/g;
        return function(bl9c) {
            return ("" + (bl9c || "")).replace(cZ0x, "**").length
        }
    } ();
    k8c.dd0x = function(i8a, p8h) {
        var dP0x = k8c.gr1x(p8h) ? p8h: function(C8u) {
            return C8u === p8h
        },
        r8j = k8c.ey0x(i8a, dP0x);
        return r8j != null ? r8j: -1
    };
    k8c.cyB2x = function() {
        var bPr4v;
        var RQ1x = function(i8a, nO3x, oi3x) {
            if (nO3x > oi3x) return - 1;
            var FX9O = Math.ceil((nO3x + oi3x) / 2),
            o8g = bPr4v(i8a[FX9O], FX9O, i8a);
            if (o8g == 0) return FX9O;
            if (o8g < 0) return RQ1x(i8a, nO3x, FX9O - 1);
            return RQ1x(i8a, FX9O + 1, oi3x)
        };
        return function(i8a, KA7t) {
            bPr4v = KA7t || bn9e;
            return RQ1x(i8a, 0, i8a.length - 1)
        }
    } ();
    k8c.mt3x = function(i8a, dE0x, iK2x) {
        if (!i8a || !i8a.length || !k8c.gr1x(dE0x)) return null;
        for (var i = i8a.length - 1; i >= 0; i--) if ( !! dE0x.call(iK2x, i8a[i], i, i8a)) return i;
        return null
    };
    k8c.bb9S = function(i8a, dE0x, iK2x) {
        if (!i8a || !i8a.length || !k8c.gr1x(dE0x)) return this;
        if ( !! i8a.forEach) {
            i8a.forEach(dE0x, iK2x);
            return this
        }
        for (var i = 0,
        l = i8a.length; i < l; i++) dE0x.call(iK2x, i8a[i], i, i8a);
        return this
    };
    k8c.ey0x = function(i8a, dE0x, iK2x) {
        if (!i8a || !k8c.gr1x(dE0x)) return null;
        if (i8a.length != null) {
            if (i8a.length > 0) for (var i = 0,
            l = i8a.length; i < l; i++) if ( !! dE0x.call(iK2x, i8a[i], i, i8a)) return i
        }
        if (k8c.lg2x(i8a)) {
            for (var x in i8a) if (i8a.hasOwnProperty(x) && !!dE0x.call(iK2x, i8a[x], x, i8a)) return x
        }
        return null
    };
    k8c.csO1x = function(iF2x, csN1x, e8e) {
        iF2x = iF2x || [];
        e8e = e8e || Z9Q;
        var bPo4s = !!e8e.union,
        vu6o = !!e8e.begin,
        bar4v = e8e.compare,
        csJ1x = bPo4s && vu6o ? k8c.mt3x: k8c.bb9S;
        csJ1x(csN1x,
        function(p8h) {
            if ( !! bar4v) bar4v = bar4v.en0x(p8h);
            var r8j = k8c.dd0x(iF2x, bar4v || p8h);
            if (r8j >= 0) iF2x.splice(r8j, 1);
            if (bPo4s) iF2x[vu6o ? "unshift": "push"](p8h)
        });
        return iF2x
    };
    k8c.Cq8i = function(bv9m, bl9c) {
        if (!bv9m || !bl9c || !bl9c.replace) return bl9c || "";
        return bl9c.replace(bv9m.r,
        function($1) {
            var o8g = bv9m[!bv9m.i ? $1.toLowerCase() : $1];
            return o8g != null ? o8g: $1
        })
    };
    k8c.dQ0x = function() {
        var bv9m = {
            r: /\<|\>|\&lt;|\&gt;|\&|\r|\n|\s|\'|\"/g,
            "<": "&lt;",
            ">": "&gt;",
            "&": "&amp;",
            " ": "&nbsp;",
            '"': "&quot;",
            "'": "&#39;",
            "\n": "<br/>",
            "\r": "",
            "&lt;": "&lt;",
            "&gt;": "&gt;"
        };
        return function(bl9c) {
            return k8c.Cq8i(bv9m, bl9c)
        }
    } ();
    k8c.Kk7d = function() {
        var bv9m = {
            r: /\&(?:lt|gt|amp|nbsp|#39|quot)\;|\<br\/\>/gi,
            "&lt;": "<",
            "&gt;": ">",
            "&amp;": "&",
            "&nbsp;": " ",
            "&#39;": "'",
            "&quot;": '"',
            "<br/>": "\n"
        };
        return function(bl9c) {
            return k8c.Cq8i(bv9m, bl9c)
        }
    } ();
    k8c.hJ1x = function() {
        var bv9m = {
            i: !0,
            r: /\byyyy|yy|MM|cM|eM|M|dd|d|HH|H|mm|ms|ss|m|s|w|ct|et\b/g
        },
        csE1x = ["上午", "下午"],
        csC1x = ["A.M.", "P.M."],
        btQ9H = ["日", "一", "二", "三", "四", "五", "六"],
        csx1x = ["一", "二", "三", "四", "五", "六", "七", "八", "九", "十", "十一", "十二"],
        cso1x = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
        var RM1x = function(gB1x) {
            gB1x = parseInt(gB1x) || 0;
            return (gB1x < 10 ? "0": "") + gB1x
        };
        var csl1x = function(pt4x) {
            return pt4x < 12 ? 0 : 1
        };
        return function(bw9n, Ki7b, csk1x) {
            if (!bw9n || !Ki7b) return "";
            bw9n = k8c.Ut2x(bw9n);
            bv9m.yyyy = bw9n.getFullYear();
            bv9m.yy = ("" + bv9m.yyyy).substr(2);
            bv9m.M = bw9n.getMonth() + 1;
            bv9m.MM = RM1x(bv9m.M);
            bv9m.eM = cso1x[bv9m.M - 1];
            bv9m.cM = csx1x[bv9m.M - 1];
            bv9m.d = bw9n.getDate();
            bv9m.dd = RM1x(bv9m.d);
            bv9m.H = bw9n.getHours();
            bv9m.HH = RM1x(bv9m.H);
            bv9m.m = bw9n.getMinutes();
            bv9m.mm = RM1x(bv9m.m);
            bv9m.s = bw9n.getSeconds();
            bv9m.ss = RM1x(bv9m.s);
            bv9m.ms = bw9n.getMilliseconds();
            bv9m.w = btQ9H[bw9n.getDay()];
            var bOX4b = csl1x(bv9m.H);
            bv9m.ct = csE1x[bOX4b];
            bv9m.et = csC1x[bOX4b];
            if ( !! csk1x) {
                bv9m.H = bv9m.H % 12
            }
            return k8c.Cq8i(bv9m, Ki7b)
        }
    } ();
    k8c.Ut2x = function(bw9n) {
        var cN0x = bw9n;
        if (k8c.fw1x(bw9n)) cN0x = new Date(Date.parse(bw9n));
        if (!k8c.Eq9h(bw9n)) cN0x = new Date(bw9n);
        return cN0x
    };
    k8c.Ks7l = function(crZ1x, crW1x) {
        return (new Number(crZ1x)).toFixed(crW1x)
    };
    k8c.btM9D = function() {
        var go1x = /([^\/:])\/.*$/,
        jD2x = /\/[^\/]+$/,
        EE9v = /[#\?]/,
        btJ9A = location.href.split(/[?#]/)[0],
        sJ5O = document.createElement("a");
        var btI9z = function(lf2x) {
            return (lf2x || "").indexOf("://") > 0
        };
        var bOP4T = function(lf2x) {
            return (lf2x || "").split(EE9v)[0].replace(jD2x, "/")
        };
        var crL1x = function(lf2x, fK1x) {
            if (lf2x.indexOf("/") == 0) return fK1x.replace(go1x, "$1") + lf2x;
            return bOP4T(fK1x) + lf2x
        };
        btJ9A = bOP4T(btJ9A);
        return function(lf2x, fK1x) {
            lf2x = (lf2x || "").trim();
            if (!btI9z(fK1x)) fK1x = btJ9A;
            if (!lf2x) return fK1x;
            if (btI9z(lf2x)) return lf2x;
            lf2x = crL1x(lf2x, fK1x);
            sJ5O.href = lf2x;
            lf2x = sJ5O.href;
            return btI9z(lf2x) ? lf2x: sJ5O.getAttribute("href", 4)
        }
    } ();
    k8c.crI1x = function() {
        var cZ0x = /^([\w]+?:\/\/.*?(?=\/|$))/i;
        return function(V8N) {
            if (cZ0x.test(V8N || "")) return RegExp.$1.toLowerCase();
            return ""
        }
    } ();
    k8c.bOO4S = function(I8A, iz2x) {
        if (!I8A) return iz2x;
        var T8L = I8A.tagName.toLowerCase(),
        i8a = a7h.db0x(I8A);
        if (!i8a || !i8a.length) {
            iz2x[T8L] = I8A.textContent || I8A.text || "";
            return iz2x
        }
        var cf9W = {};
        iz2x[T8L] = cf9W;
        k8c.bb9S(i8a,
        function(f8d) {
            k8c.bOO4S(f8d, cf9W)
        });
        return iz2x
    };
    k8c.cyD2x = function(BE8w) {
        try {
            return k8c.bOO4S(a7h.bPE4I(BE8w), {})
        } catch(ex) {
            return null
        }
    };
    k8c.bOM4Q = function(if1x, RC1x) {
        var iz2x = {};
        k8c.bb9S((if1x || "").split(RC1x),
        function(T8L) {
            var XB3x = T8L.split("=");
            if (!XB3x || !XB3x.length) return;
            var J8B = XB3x.shift();
            if (!J8B) return;
            iz2x[decodeURIComponent(J8B)] = decodeURIComponent(XB3x.join("="))
        });
        return iz2x
    };
    k8c.sY5d = function(gb1x, RC1x, crz1x) {
        if (!gb1x) return "";
        var bs9j = [];
        for (var x in gb1x) {
            bs9j.push(encodeURIComponent(x) + "=" + ( !! crz1x ? encodeURIComponent(gb1x[x]) : gb1x[x]))
        }
        return bs9j.join(RC1x || ",")
    };
    k8c.hD1x = function(bx9o) {
        return k8c.bOM4Q(bx9o, "&")
    };
    k8c.dh0x = function(gb1x) {
        return k8c.sY5d(gb1x, "&", !0)
    };
    k8c.cyE2x = function(gb1x) {
        return bc9T.KQ7J(gb1x)
    };
    k8c.cyF2x = function(i8a, dP0x) {
        var o8g = {};
        k8c.bb9S(i8a,
        function(p8h) {
            var J8B = p8h;
            if ( !! dP0x) {
                J8B = dP0x(p8h)
            }
            o8g[J8B] = p8h
        });
        return o8g
    };
    k8c.cyG2x = function(gB1x, gn1x) {
        var crm1x = ("" + gB1x).length,
        crl1x = Math.max(1, parseInt(gn1x) || 0),
        dl0x = crl1x - crm1x;
        if (dl0x > 0) {
            gB1x = (new Array(dl0x + 1)).join("0") + gB1x
        }
        return "" + gB1x
    };
    k8c.YV3x = function(gb1x, T8L) {
        if (!k8c.eC0x(T8L)) {
            try {
                delete gb1x[T8L]
            } catch(e) {
                gb1x[T8L] = undefined
            }
            return this
        }
        k8c.bb9S(T8L, k8c.YV3x.g8c(k8c, gb1x));
        return this
    };
    k8c.Sj1x = function() {
        var bOF4J = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
        return function(bm9d) {
            bm9d = bm9d || 10;
            var o8g = [];
            for (var i = 0,
            bOE4I; i < bm9d; ++i) {
                bOE4I = Math.floor(Math.random() * bOF4J.length);
                o8g.push(bOF4J.charAt(bOE4I))
            }
            return o8g.join("")
        }
    } ();
    k8c.Ay7r = function(fr1x, fc0x) {
        return Math.floor(Math.random() * (fc0x - fr1x) + fr1x)
    };
    k8c.ns3x = function(bm9d) {
        bm9d = Math.max(0, Math.min(bm9d || 8, 30));
        var fr1x = Math.pow(10, bm9d - 1),
        fc0x = fr1x * 10;
        return k8c.Ay7r(fr1x, fc0x).toString()
    };
    k8c.bav4z = function() {
        var gq1x = +(new Date);
        return function() {
            return "" + gq1x++
        }
    } ()
})(); (function() {
    var c8g = NEJ.P,
    Z9Q = NEJ.O,
    fj0x = NEJ.R,
    bn9e = NEJ.F,
    h8b = c8g("nej.v"),
    k8c = c8g("nej.u"),
    N8F = c8g("nej.ut"),
    ot3x;
    if ( !! N8F.cD0x) return;
    N8F.cD0x = NEJ.C();
    ot3x = N8F.cD0x.prototype;
    N8F.cD0x.A8s = function(e8e) {
        e8e = e8e || {};
        var cv9m = !!this.yV7O && this.yV7O.shift();
        if (!cv9m) {
            cv9m = new this(e8e);
            this.cri1x = (this.cri1x || 0) + 1
        }
        cv9m.bj9a(e8e);
        return cv9m
    };
    N8F.cD0x.S8K = function() {
        var RB1x = function(p8h, r8j, i8a) {
            p8h.S8K();
            i8a.splice(r8j, 1)
        };
        return function(cv9m) {
            if (!cv9m) return null;
            if (!k8c.eC0x(cv9m)) {
                if (! (cv9m instanceof this)) {
                    var fv1x = cv9m.constructor;
                    if ( !! fv1x.S8K) fv1x.S8K(cv9m);
                    return null
                }
                if (cv9m == this.eX0x) delete this.eX0x;
                if (cv9m == this.Av7o) delete this.Av7o;
                cv9m.bA9r();
                if (!this.yV7O) this.yV7O = [];
                if (k8c.dd0x(this.yV7O, cv9m) < 0) {
                    this.yV7O.push(cv9m)
                }
                return null
            }
            k8c.mt3x(cv9m, RB1x, this)
        }
    } ();
    N8F.cD0x.gh1x = function(e8e) {
        e8e = e8e || {};
        if (!this.eX0x) this.eX0x = this.A8s(e8e);
        return this.eX0x
    };
    N8F.cD0x.crh1x = function(e8e, qR4V) {
        e8e = e8e || {};
        if ( !! qR4V && !!this.Av7o) {
            this.Av7o.S8K();
            delete this.Av7o
        }
        if (!this.Av7o) {
            this.Av7o = this.A8s(e8e)
        } else {
            this.Av7o.bj9a(e8e)
        }
        return this.Av7o
    };
    ot3x.cs9j = function() {
        var gq1x = +(new Date);
        return function() {
            this.id = gq1x++;
            this.lI3x = {};
            this.bOA4E = {}
        }
    } ();
    ot3x.bj9a = function(e8e) {
        this.btE9v(e8e)
    };
    ot3x.bA9r = function() {
        this.gG1x();
        this.Ke7X()
    };
    ot3x.bT9K = function() {
        var gq1x = +(new Date);
        var cqW1x = function(bh9Y) {
            if (!bh9Y || bh9Y.length < 3) return;
            this.bOA4E["de-" + gq1x++] = bh9Y;
            h8b.s8k.apply(h8b, bh9Y)
        };
        return function(i8a) {
            k8c.bb9S(i8a, cqW1x, this)
        }
    } ();
    ot3x.Ke7X = function() {
        var cqU1x = function(bh9Y, J8B, bv9m) {
            delete bv9m[J8B];
            h8b.mx3x.apply(h8b, bh9Y)
        };
        return function() {
            k8c.ey0x(this.bOA4E, cqU1x)
        }
    } ();
    ot3x.cyH2x = function(dP0x) {
        dP0x = dP0x || bn9e;
        k8c.ey0x(this,
        function(FT9K, J8B, bv9m) {
            if ( !! FT9K && !!FT9K.S8K && !dP0x(FT9K)) {
                delete bv9m[J8B];
                FT9K.S8K()
            }
        })
    };
    ot3x.S8K = function() {
        this.constructor.S8K(this)
    };
    ot3x.bOt4x = function(t8l) {
        var d8f = this.lI3x[t8l.toLowerCase()];
        return !! d8f && d8f !== bn9e
    };
    ot3x.s8k = function(t8l, d8f) {
        this.vF6z.apply(this, arguments);
        return this
    };
    ot3x.mx3x = function(t8l, d8f) {
        var t8l = (t8l || "").toLowerCase(),
        dU0x = this.lI3x[t8l];
        if (!k8c.eC0x(dU0x)) {
            if (dU0x == d8f) delete this.lI3x[t8l];
            return
        }
        k8c.mt3x(dU0x,
        function(eF0x, r8j, i8a) {
            if (eF0x == d8f) i8a.splice(r8j, 1)
        })
    };
    ot3x.vF6z = function(t8l, d8f) {
        if ( !! t8l && k8c.gr1x(d8f)) this.lI3x[t8l.toLowerCase()] = d8f;
        return this
    };
    ot3x.btE9v = function() {
        var cqJ0x = function(d8f, t8l) {
            this.vF6z(t8l, d8f)
        };
        return function(dU0x) {
            k8c.ey0x(dU0x, cqJ0x, this);
            return this
        }
    } ();
    ot3x.gG1x = function() {
        var btC9t = function(d8f, t8l) {
            this.gG1x(t8l)
        };
        return function(t8l) {
            var t8l = (t8l || "").toLowerCase();
            if ( !! t8l) {
                delete this.lI3x[t8l]
            } else {
                k8c.ey0x(this.lI3x, btC9t, this)
            }
            return this
        }
    } ();
    ot3x.btB9s = function(t8l, d8f) {
        if (!t8l || !k8c.gr1x(d8f)) return this;
        t8l = t8l.toLowerCase();
        var dU0x = this.lI3x[t8l];
        if (!dU0x) {
            this.lI3x[t8l] = d8f;
            return this
        }
        if (!k8c.eC0x(dU0x)) {
            this.lI3x[t8l] = [dU0x]
        }
        this.lI3x[t8l].push(d8f);
        return this
    };
    ot3x.z8r = function(t8l) {
        var d8f = this.lI3x[(t8l || "").toLowerCase()];
        if (!d8f) return this;
        var bh9Y = fj0x.slice.call(arguments, 1);
        if (!k8c.eC0x(d8f)) return d8f.apply(this, bh9Y);
        k8c.bb9S(d8f,
        function(dp0x) {
            try {
                dp0x.apply(this, bh9Y)
            } catch(ex) {
                console.error(ex.message);
                console.error(ex.stack)
            }
        },
        this);
        return this
    };
    N8F.VO2x = function() {
        var Q8I = {};
        return function(D8v, fv1x, e8e) {
            var eU0x = fv1x.cqF0x;
            if (!eU0x) {
                eU0x = k8c.Sj1x(10);
                fv1x.cqF0x = eU0x
            }
            var J8B = D8v + "-" + eU0x,
            cv9m = Q8I[J8B];
            if ( !! e8e && !cv9m) {
                cv9m = fv1x.A8s(e8e);
                cv9m.S8K = cv9m.S8K.er0x(function(d8f) {
                    delete Q8I[J8B];
                    delete cv9m.S8K
                });
                Q8I[J8B] = cv9m
            }
            return cv9m
        }
    } ()
})(); (function() {
    var o = NEJ.O,
    u = NEJ.P("nej.u"),
    j = NEJ.P("nej.j");
    j.gZ1x = function() {
        var cN0x = new Date,
        cqD0x = +cN0x,
        btz9q = 864e5;
        var cqx0x = function(T8L) {
            var qS4W = document.cookie,
            rU5Z = "\\b" + T8L + "=",
            Xo3x = qS4W.search(rU5Z);
            if (Xo3x < 0) return "";
            Xo3x += rU5Z.length - 2;
            var Am7f = qS4W.indexOf(";", Xo3x);
            if (Am7f < 0) Am7f = qS4W.length;
            return qS4W.substring(Xo3x, Am7f) || ""
        };
        return function(T8L, j8b) {
            if (j8b === undefined) return cqx0x(T8L);
            if (u.fw1x(j8b)) {
                if ( !! j8b) {
                    document.cookie = T8L + "=" + j8b + ";";
                    return j8b
                }
                j8b = {
                    expires: -100
                }
            }
            j8b = j8b || o;
            var qS4W = T8L + "=" + (j8b.value || "") + ";";
            delete j8b.value;
            if (j8b.expires !== undefined) {
                cN0x.setTime(cqD0x + j8b.expires * btz9q);
                j8b.expires = cN0x.toGMTString()
            }
            qS4W += u.sY5d(j8b, ";");
            document.cookie = qS4W
        }
    } ()
})(); (function() {
    var c8g = NEJ.P,
    bn9e = NEJ.F,
    hO1x = c8g("nej.c"),
    eb0x = c8g("nej.g"),
    a7h = c8g("nej.e"),
    x8p = c8g("nej.j"),
    H8z = c8g("nej.ut"),
    N8F = c8g("nej.ut.j"),
    k8c = c8g("nej.u"),
    b8h;
    if ( !! N8F.Ka7T) return;
    N8F.Ka7T = NEJ.C();
    b8h = N8F.Ka7T.O8G(H8z.cD0x);
    b8h.bj9a = function(e8e) {
        this.bk9b(e8e);
        this.oS4W = {
            noescape: false,
            url: "",
            sync: !1,
            cookie: !1,
            type: "text",
            method: "GET",
            timeout: 6e4
        };
        NEJ.EX(this.oS4W, e8e);
        var BO8G = hO1x.B8t("csrf");
        if ((/^\/[^\/]/.test(this.oS4W.url) || this.oS4W.url.indexOf(location.protocol + "//" + location.host) == 0) && !!BO8G.cookie && !!BO8G.param) {
            var bx9o = encodeURIComponent(BO8G.param) + "=" + encodeURIComponent(x8p.gZ1x(BO8G.cookie) || ""),
            RC1x = this.oS4W.url.indexOf("?") < 0 ? "?": "&";
            this.oS4W.url += RC1x + bx9o
        }
        this.XV3x = e8e.headers || {};
        var bl9c = this.XV3x[eb0x.yj7c];
        if (bl9c == null) this.XV3x[eb0x.yj7c] = eb0x.cwD2x
    };
    b8h.bA9r = function() {
        this.bF9w();
        delete this.Ai7b;
        delete this.oS4W;
        delete this.XV3x
    };
    b8h.cqw0x = function(bl9c) {
        var bv9m = {
            r: /\<|\>/g,
            "<": "&lt;",
            ">": "&gt;"
        };
        if (!this.oS4W.noescape) {
            return k8c.Cq8i(bv9m, bl9c)
        } else {
            return bl9c
        }
    };
    b8h.tQ5V = function(d8f) {
        var eh0x = d8f.status;
        if (eh0x == -1) {
            this.z8r("onerror", {
                code: eb0x.bwG0x,
                message: "请求[" + this.oS4W.url + "]超时！"
            });
            return
        }
        if (("" + eh0x).indexOf("2") != 0) {
            this.z8r("onerror", {
                data: eh0x,
                code: eb0x.bne8W,
                message: "服务器返回异常状态[" + eh0x + "]!",
                extData: d8f.result
            });
            return
        }
        this.z8r("onload", a7h.ctJ1x(this.cqw0x(d8f.result), this.oS4W.type))
    };
    b8h.cn9e = bn9e;
    b8h.bty9p = function(j8b) {
        var V8N = this.oS4W.url;
        if (!V8N) {
            this.z8r("onerror", {
                code: eb0x.blG7z,
                message: "没有输入请求地址！"
            });
            return this
        }
        try {
            this.oS4W.data = j8b == null ? null: j8b;
            var d8f = {
                request: this.oS4W,
                headers: this.XV3x
            };
            try {
                this.z8r("onbeforerequest", d8f)
            } catch(ex) {
                console.error(ex.message);
                console.error(ex.stack)
            }
            this.cn9e(d8f)
        } catch(e) {
            this.z8r("onerror", {
                code: eb0x.bne8W,
                message: "请求[" + V8N + "]失败:" + e.message + "！"
            })
        }
        return this
    };
    b8h.jI2x = bn9e
})(); (function() {
    var c8g = NEJ.P,
    bn9e = NEJ.F,
    bc9T = c8g("nej.h"),
    eb0x = c8g("nej.g"),
    k8c = c8g("nej.u"),
    N8F = c8g("nej.ut.j"),
    Q8I = {},
    Ro1x;
    if ( !! N8F.Zp4t) return;
    N8F.Zp4t = NEJ.C();
    Ro1x = N8F.Zp4t.O8G(N8F.Ka7T);
    Ro1x.bA9r = function() {
        this.bF9w();
        window.clearTimeout(this.dX0x);
        delete this.dX0x;
        try {
            this.qU4Y.onreadystatechange = bn9e;
            this.qU4Y.abort()
        } catch(e) {}
        delete this.qU4Y
    };
    Ro1x.cn9e = function() {
        var cqu0x = function(C8u, J8B) {
            this.qU4Y.setRequestHeader(J8B, C8u)
        };
        return function(e8e) {
            var fP1x = e8e.request,
            ol3x = e8e.headers;
            this.qU4Y = bc9T.btx9o();
            if (ol3x[eb0x.yj7c] === eb0x.EM9D) {
                delete ol3x[eb0x.yj7c];
                this.qU4Y.upload.onprogress = this.fX1x.g8c(this, 1);
                if (fP1x.data.tagName === "FORM") fP1x.data = new FormData(fP1x.data)
            }
            this.qU4Y.onreadystatechange = this.fX1x.g8c(this, 2);
            if (fP1x.timeout != 0) {
                this.dX0x = window.setTimeout(this.fX1x.g8c(this, 3), fP1x.timeout)
            }
            this.qU4Y.open(fP1x.method, fP1x.url, !fP1x.sync);
            k8c.ey0x(ol3x, cqu0x, this);
            if ( !! this.oS4W.cookie && "withCredentials" in this.qU4Y) this.qU4Y.withCredentials = !0;
            this.qU4Y.send(fP1x.data)
        }
    } ();
    Ro1x.fX1x = function(t8l) {
        switch (t8l) {
        case 1:
            this.z8r("onuploading", arguments[1]);
            break;
        case 2:
            if (this.qU4Y.readyState == 4) this.tQ5V({
                status: this.qU4Y.status,
                result: this.qU4Y.responseText || ""
            });
            break;
        case 3:
            this.tQ5V({
                status:
                -1
            });
            break
        }
    };
    Ro1x.jI2x = function() {
        this.tQ5V({
            status: 0
        });
        return this
    }
})(); (function() {
    if (typeof TrimPath === "undefined") {
        TrimPath = {};
        if (typeof exports !== "undefined") TrimPath = exports
    }
    var Rl1x = {},
    baJ4N = [],
    bOb4f = /\s+/g,
    gq1x = +(new Date),
    JW7P,
    bQ9H,
    kv2x;
    var Fk9b = function() {
        var go1x = /^\s*[\[\{'"].*?[\]\}'"]\s*$/,
        jD2x = /[\&\|\<\>\+\-\*\/\%\,\(\)\[\]\?\:\!\=\;\s]/,
        EE9v = /^(?:defined|null|undefined|true|false|instanceof|new|this|typeof|\$v|[\d]+)$/i,
        btw9n = /^new\s+/,
        cqh0x = /['"]/;
        var cqg0x = function(C8u) {
            if (go1x.test(C8u)) return;
            C8u = C8u.split(".")[0].trim();
            if (!C8u || cqh0x.test(C8u)) return;
            C8u = C8u.replace(btw9n, "");
            try {
                if (EE9v.test(C8u)) return;
                kv2x[C8u] = 1
            } catch(e) {}
        };
        return function(bl9c) {
            bl9c = bl9c || "";
            if (!bl9c || go1x.test(bl9c)) return;
            var bs9j = bl9c.split(jD2x);
            for (var i = 0,
            l = bs9j.length; i < l; i++) cqg0x(bs9j[i])
        }
    } ();
    var cqd0x = function(dB0x) {
        if (dB0x[2] != "in") throw "bad for loop statement: " + dB0x.join(" ");
        baJ4N.push(dB0x[1]);
        Fk9b(dB0x[3]);
        return "var __HASH__" + dB0x[1] + " = " + dB0x[3] + "," + dB0x[1] + "," + dB0x[1] + "_count=0;" + "if (!!__HASH__" + dB0x[1] + ")" + "for(var " + dB0x[1] + "_key in __HASH__" + dB0x[1] + "){" + dB0x[1] + " = __HASH__" + dB0x[1] + "[" + dB0x[1] + "_key];" + "if (typeof(" + dB0x[1] + ')=="function") continue;' + dB0x[1] + "_count++;"
    };
    var cqc0x = function() {
        var dB0x = baJ4N[baJ4N.length - 1];
        return "}; if(!__HASH__" + dB0x + "||!" + dB0x + "_count){"
    };
    var cqa0x = function() {
        baJ4N.pop();
        return "};"
    };
    var cpZ0x = function(dB0x) {
        if (dB0x[2] != "as") throw "bad for list loop statement: " + dB0x.join(" ");
        var Rg1x = dB0x[1].split("..");
        if (Rg1x.length > 1) {
            Fk9b(Rg1x[0]);
            Fk9b(Rg1x[1]);
            return "for(var " + dB0x[3] + "," + dB0x[3] + "_index=0," + dB0x[3] + "_beg=" + Rg1x[0] + "," + dB0x[3] + "_end=" + Rg1x[1] + "," + dB0x[3] + "_length=parseInt(" + dB0x[3] + "_end-" + dB0x[3] + "_beg+1);" + dB0x[3] + "_index<" + dB0x[3] + "_length;" + dB0x[3] + "_index++){" + dB0x[3] + " = " + dB0x[3] + "_beg+" + dB0x[3] + "_index;"
        } else {
            Fk9b(dB0x[1]);
            return "for(var __LIST__" + dB0x[3] + " = " + dB0x[1] + "," + dB0x[3] + "," + dB0x[3] + "_index=0," + dB0x[3] + "_length=__LIST__" + dB0x[3] + ".length;" + dB0x[3] + "_index<" + dB0x[3] + "_length;" + dB0x[3] + "_index++){" + dB0x[3] + " = __LIST__" + dB0x[3] + "[" + dB0x[3] + "_index];"
        }
    };
    var cpT0x = function(dB0x) {
        if (!dB0x || !dB0x.length) return;
        dB0x.shift();
        var T8L = dB0x[0].split("(")[0];
        return "var " + T8L + " = function" + dB0x.join("").replace(T8L, "") + "{var __OUT=[];"
    };
    var cpS0x = function(dB0x) {
        if (!dB0x[1]) throw "bad include statement: " + dB0x.join(" ");
        return 'if (typeof inline == "function"){__OUT.push(inline('
    };
    var btt9k = function(lD3x, dB0x) {
        Fk9b(dB0x.slice(1).join(" "));
        return lD3x
    };
    var cpQ0x = function(dB0x) {
        return btt9k("if(", dB0x)
    };
    var cpP0x = function(dB0x) {
        return btt9k("}else if(", dB0x)
    };
    var cpO0x = function(dB0x) {
        return btt9k("var ", dB0x)
    };
    bQ9H = {
        blk: /^\{(cdata|minify|eval)/i,
        tag: "forelse|for|list|if|elseif|else|var|macro|break|notrim|trim|include",
        def: {
            "if": {
                pfix: cpQ0x,
                sfix: "){",
                pmin: 1
            },
            "else": {
                pfix: "}else{"
            },
            elseif: {
                pfix: cpP0x,
                sfix: "){",
                pdft: "true"
            },
            "/if": {
                pfix: "}"
            },
            "for": {
                pfix: cqd0x,
                pmin: 3
            },
            forelse: {
                pfix: cqc0x
            },
            "/for": {
                pfix: cqa0x
            },
            list: {
                pfix: cpZ0x,
                pmin: 3
            },
            "/list": {
                pfix: "};"
            },
            "break": {
                pfix: "break;"
            },
            "var": {
                pfix: cpO0x,
                sfix: ";"
            },
            macro: {
                pfix: cpT0x
            },
            "/macro": {
                pfix: 'return __OUT.join("");};'
            },
            trim: {
                pfix: function() {
                    JW7P = !0
                }
            },
            "/trim": {
                pfix: function() {
                    JW7P = null
                }
            },
            inline: {
                pfix: cpS0x,
                pmin: 1,
                sfix: "));}"
            }
        },
        ext: {
            seed: function(lD3x) {
                return (lD3x || "") + "" + gq1x
            },
            "default": function(C8u, kT2x) {
                return C8u || kT2x
            }
        }
    };
    var cpN0x = function() {
        var cpL0x = /\\([\{\}])/g;
        return function(bl9c, jl2x) {
            bl9c = bl9c.replace(cpL0x, "$1");
            var dB0x = bl9c.slice(1, -1).split(bOb4f),
            bd9U = bQ9H.def[dB0x[0]];
            if (!bd9U) {
                Vl2x(bl9c, jl2x);
                return
            }
            if ( !! bd9U.pmin && bd9U.pmin >= dB0x.length) throw "Statement needs more parameters:" + bl9c;
            jl2x.push( !! bd9U.pfix && typeof bd9U.pfix != "string" ? bd9U.pfix(dB0x) : bd9U.pfix || "");
            if ( !! bd9U.sfix) {
                if (dB0x.length <= 1) {
                    if ( !! bd9U.pdft) jl2x.push(bd9U.pdft)
                } else {
                    for (var i = 1,
                    l = dB0x.length; i < l; i++) {
                        if (i > 1) jl2x.push(" ");
                        jl2x.push(dB0x[i])
                    }
                }
                jl2x.push(bd9U.sfix)
            }
        }
    } ();
    var bNR4V = function(JT7M, jl2x) {
        if (!JT7M || !JT7M.length) return;
        if (JT7M.length == 1) {
            var bts9j = JT7M.pop();
            Fk9b(bts9j);
            jl2x.push(bts9j == "" ? '""': bts9j);
            return
        }
        var btr9i = JT7M.pop().split(":");
        jl2x.push("__MDF['" + btr9i.shift() + "'](");
        bNR4V(JT7M, jl2x);
        if (btr9i.length > 0) {
            var bh9Y = btr9i.join(":");
            Fk9b(bh9Y);
            jl2x.push("," + bh9Y)
        }
        jl2x.push(")")
    };
    var Vl2x = function(bl9c, jl2x) {
        if (!bl9c) return;
        var vM6G = bl9c.split("\n");
        if (!vM6G || !vM6G.length) return;
        for (var i = 0,
        l = vM6G.length,
        he1x; i < l; i++) {
            he1x = vM6G[i];
            if ( !! JW7P) {
                he1x = he1x.trim();
                if (!he1x) continue
            }
            cpG0x(he1x, jl2x);
            if ( !! JW7P && i < l - 1) jl2x.push("__OUT.push('\\n');")
        }
    };
    var cpG0x = function() {
        var cpE0x = /\|\|/g,
        cpD0x = /#@@#/g;
        return function(bl9c, jl2x) {
            var QZ1x = "}",
            QY1x = -1,
            bm9d = bl9c.length,
            vu6o, gs1x, JR7K, WQ2x, QW1x;
            while (QY1x + QZ1x.length < bm9d) {
                vu6o = "${";
                gs1x = "}";
                JR7K = bl9c.indexOf(vu6o, QY1x + QZ1x.length);
                if (JR7K < 0) break;
                if (bl9c.charAt(JR7K + 2) == "%") {
                    vu6o = "${%";
                    gs1x = "%}"
                }
                WQ2x = bl9c.indexOf(gs1x, JR7K + vu6o.length);
                if (WQ2x < 0) break;
                Xf3x(bl9c.substring(QY1x + QZ1x.length, JR7K), jl2x);
                QW1x = bl9c.substring(JR7K + vu6o.length, WQ2x).replace(cpE0x, "#@@#").split("|");
                for (var i = 0,
                l = QW1x.length; i < l; QW1x[i] = QW1x[i].replace(cpD0x, "||"), i++);
                jl2x.push("__OUT.push(");
                bNR4V(QW1x, jl2x);
                jl2x.push(");");
                QZ1x = gs1x;
                QY1x = WQ2x
            }
            Xf3x(bl9c.substring(QY1x + QZ1x.length), jl2x)
        }
    } ();
    var Xf3x = function() {
        var bv9m = {
            r: /\n|\\|\'/g,
            "\n": "\\n",
            "\\": "\\\\",
            "'": "\\'"
        };
        var cpC0x = function(bl9c) {
            return (bl9c || "").replace(bv9m.r,
            function($1) {
                return bv9m[$1] || $1
            })
        };
        return function(bl9c, jl2x) {
            if (!bl9c) return;
            jl2x.push("__OUT.push('" + cpC0x(bl9c) + "');")
        }
    } ();
    var cpB0x = function() {
        var cpz0x = /\t/g,
        cpn0x = /\n/g,
        cpi0x = /\r\n?/g;
        var bNy3x = function(bl9c, vu6o) {
            var r8j = bl9c.indexOf("}", vu6o + 1);
            while (bl9c.charAt(r8j - 1) == "\\") {
                r8j = bl9c.indexOf("}", r8j + 1)
            }
            return r8j
        };
        var cpc0x = function() {
            var bs9j = [],
            DS9J = arguments[0];
            for (var x in DS9J) {
                x = (x || "").trim();
                if (!x) continue;
                bs9j.push(x + "=$v('" + x + "')")
            }
            return bs9j.length > 0 ? "var " + bs9j.join(",") + ";": ""
        };
        return function(bl9c) {
            kv2x = {};
            bl9c = bl9c.replace(cpi0x, "\n").replace(cpz0x, "    ");
            var qX4b = ["if(!__CTX) return '';", ""];
            qX4b.push("function $v(__NAME){var v = __CTX[__NAME];return v==null?window[__NAME]:v;};");
            qX4b.push("var defined=function(__NAME){return __CTX[__NAME]!=null;},");
            qX4b.push("__OUT=[];");
            var DW9N = -1,
            bm9d = bl9c.length;
            var mz3x, JQ7J, QR1x, QP1x, zX7Q, QN1x, btg9X, QK1x;
            while (DW9N + 1 < bm9d) {
                mz3x = DW9N;
                mz3x = bl9c.indexOf("{", mz3x + 1);
                while (mz3x >= 0) {
                    JQ7J = bNy3x(bl9c, mz3x);
                    QR1x = bl9c.substring(mz3x, JQ7J);
                    QP1x = QR1x.match(bQ9H.blk);
                    if ( !! QP1x) {
                        zX7Q = QP1x[1].length + 1;
                        QN1x = bl9c.indexOf("}", mz3x + zX7Q);
                        if (QN1x >= 0) {
                            btg9X = QN1x - mz3x - zX7Q <= 0 ? "{/" + QP1x[1] + "}": QR1x.substr(zX7Q + 1);
                            zX7Q = bl9c.indexOf(btg9X, QN1x + 1);
                            if (zX7Q >= 0) {
                                Vl2x(bl9c.substring(DW9N + 1, mz3x), qX4b);
                                QK1x = bl9c.substring(QN1x + 1, zX7Q);
                                switch (QP1x[1]) {
                                case "cdata":
                                    Xf3x(QK1x, qX4b);
                                    break;
                                case "minify":
                                    Xf3x(QK1x.replace(cpn0x, " ").replace(bOb4f, " "), qX4b);
                                    break;
                                case "eval":
                                    if ( !! QK1x) qX4b.push("__OUT.push((function(){" + QK1x + "})());");
                                    break
                                }
                                mz3x = DW9N = zX7Q + btg9X.length - 1
                            }
                        }
                    } else if (bl9c.charAt(mz3x - 1) != "$" && bl9c.charAt(mz3x - 1) != "\\" && QR1x.substr(QR1x.charAt(1) == "/" ? 2 : 1).search(bQ9H.tag) == 0) {
                        break
                    }
                    mz3x = bl9c.indexOf("{", mz3x + 1)
                }
                if (mz3x < 0) break;
                JQ7J = bNy3x(bl9c, mz3x);
                if (JQ7J < 0) break;
                Vl2x(bl9c.substring(DW9N + 1, mz3x), qX4b);
                cpN0x(bl9c.substring(mz3x, JQ7J + 1), qX4b);
                DW9N = JQ7J
            }
            Vl2x(bl9c.substring(DW9N + 1), qX4b);
            qX4b.push(';return __OUT.join("");');
            qX4b[1] = cpc0x(kv2x);
            kv2x = null;
            return new Function("__CTX", "__MDF", qX4b.join(""))
        }
    } ();
    TrimPath.seed = function() {
        return gq1x
    };
    TrimPath.merge = function() {
        var QJ1x = {};
        TrimPath.dump = function() {
            return {
                func: QJ1x,
                text: Rl1x
            }
        };
        return function(eU0x, j8b, js2x) {
            try {
                j8b = j8b || {};
                if (!QJ1x[eU0x] && !Rl1x[eU0x]) return "";
                if (!QJ1x[eU0x]) {
                    QJ1x[eU0x] = cpB0x(Rl1x[eU0x]);
                    delete Rl1x[eU0x]
                }
                if ( !! js2x) {
                    for (var x in bQ9H.ext) if (!js2x[x]) js2x[x] = bQ9H.ext[x]
                }
                return QJ1x[eU0x](j8b, js2x || bQ9H.ext)
            } catch(ex) {
                return ex.message || ""
            }
        }
    } ();
    TrimPath.parse = function() {
        var coZ0x = +(new Date);
        return function(bl9c, eU0x) {
            if (!bl9c) return "";
            eU0x = eU0x || "ck_" + coZ0x++;
            Rl1x[eU0x] = bl9c;
            return eU0x
        }
    } ()
})(); (function() {
    var c8g = NEJ.P,
    a7h = c8g("nej.e"),
    k8c = c8g("nej.u"),
    eJ0x = {},
    bNt3x = {};
    a7h.JO7H = TrimPath.seed;
    a7h.bX9O = function() {
        var bNs3x = function(D8v) {
            return ! a7h.ih1x ? "": a7h.ih1x(D8v)
        };
        return function(eU0x, j8b, js2x) {
            j8b = NEJ.X(NEJ.X({},
            bNt3x), j8b);
            j8b.inline = bNs3x;
            js2x = NEJ.X(NEJ.X({},
            eJ0x), js2x);
            js2x.rand = k8c.ns3x;
            js2x.format = k8c.hJ1x;
            js2x.escape = k8c.dQ0x;
            js2x.inline = bNs3x;
            return TrimPath.merge(eU0x, j8b, js2x)
        }
    } ();
    a7h.et0x = function(bl9c, coV0x) {
        if (!bl9c) return "";
        var eU0x, G8y = a7h.B8t(bl9c);
        if ( !! G8y) {
            eU0x = G8y.id;
            bl9c = G8y.value || G8y.innerText;
            if (!coV0x) a7h.cz9q(G8y)
        }
        return TrimPath.parse(bl9c, eU0x)
    };
    a7h.dH0x = function(bG9x, eU0x, j8b, js2x) {
        bG9x = a7h.B8t(bG9x);
        if ( !! bG9x) bG9x.innerHTML = a7h.bX9O(eU0x, j8b, js2x);
        return this
    };
    a7h.cyN2x = function(bv9m) {
        NEJ.X(eJ0x, bv9m)
    };
    a7h.coO0x = function(bv9m) {
        NEJ.X(bNt3x, bv9m)
    };
    c8g("dbg").dumpJST = function() {
        return TrimPath.dump()
    }
})(); (function() {
    var dn0x = NEJ.P("nej.p"),
    N8F = window,
    kK2x = dn0x.KX7Q,
    bNo3x = kK2x.ipad || kK2x.iphone;
    if (!bNo3x && !!N8F.requestAnimationFrame && !!N8F.cancelRequestAnimationFrame) return;
    var lD3x = dn0x.dj0x.prefix.pro;
    if (!bNo3x && !!N8F[lD3x + "RequestAnimationFrame"] && !!N8F[lD3x + "CancelRequestAnimationFrame"]) {
        N8F.requestAnimationFrame = N8F[lD3x + "RequestAnimationFrame"];
        N8F.cancelRequestAnimationFrame = N8F[lD3x + "CancelRequestAnimationFrame"];
        return
    }
    var bbl5q = kK2x.desktop ? 80 : kK2x.ios ? 50 : 30;
    N8F.requestAnimationFrame = function(dE0x) {
        return window.setTimeout(function() {
            try {
                dE0x( + (new Date))
            } catch(ex) {}
        },
        1e3 / bbl5q)
    };
    N8F.cancelRequestAnimationFrame = function(D8v) {
        window.clearTimeout(D8v);
        return this
    }
})(); (function() {
    var c8g = NEJ.P,
    bn9e = NEJ.F,
    k8c = c8g("nej.u"),
    a7h = c8g("nej.e"),
    h8b = c8g("nej.v"),
    bc9T = c8g("nej.h"),
    cP0x = c8g("nej.x"),
    bbp5u = c8g("nej.ut.j.cb"),
    gt1x;
    if ( !! a7h.pW4a) return;
    a7h.pW4a = cP0x.pW4a = function() {
        var Q8I = {},
        go1x = /^(?:mouse.*|(?:dbl)?click)$/i;
        window.onflashevent = function(d8f) {
            var D8v = decodeURIComponent(d8f.target),
            t8l = d8f.type.toLowerCase();
            var dp0x = Q8I[D8v + "-on" + t8l];
            if ( !! dp0x) {
                try {
                    dp0x(d8f)
                } catch(e) {}
                return
            }
            var cE0x = Q8I[D8v + "-tgt"];
            if ( !! cE0x && go1x.test(t8l)) {
                bNn3x(cE0x, d8f)
            }
        };
        var btd9U = function(e8e) {
            var bG9x = a7h.B8t(e8e.parent) || document.body,
            dL0x = a7h.bX9O(gt1x, e8e);
            bG9x.insertAdjacentHTML(!e8e.hidden ? "beforeEnd": "afterBegin", dL0x)
        };
        var bNn3x = function(D8v, d8f) {
            var t8l = d8f.type.toLowerCase();
            requestAnimationFrame(function() {
                h8b.z8r(D8v, t8l)
            })
        };
        var coI0x = function(ho1x) {
            return !! ho1x && !!ho1x.inited && !!ho1x.inited()
        };
        var QB1x = function(D8v) {
            var bs9j = [document.embeds[D8v], a7h.B8t(D8v), document[D8v], window[D8v]],
            r8j = k8c.ey0x(bs9j, coI0x),
            ho1x = bs9j[r8j],
            btc9T = D8v + "-count";
            Q8I[btc9T]++;
            if ( !! ho1x || Q8I[btc9T] > 100) {
                Q8I[D8v](ho1x);
                delete Q8I[D8v];
                delete Q8I[btc9T];
                return
            }
            window.setTimeout(QB1x.g8c(null, D8v), 300)
        };
        var coG0x = function(e8e) {
            var D8v = e8e.id,
            gd1x = e8e.params;
            if (!gd1x) {
                gd1x = {};
                e8e.params = gd1x
            }
            var kv2x = gd1x.flashvars || "";
            kv2x += (!kv2x ? "": "&") + ("id=" + D8v);
            if (!e8e.hidden && ( !! e8e.target || bc9T.Vd2x(gd1x.wmode))) {
                var hs1x = a7h.kZ2x(e8e.target) || a7h.kZ2x(e8e.parent),
                TW2x = k8c.bav4z();
                bbp5u["cb" + TW2x] = bNn3x.g8c(null, hs1x);
                kv2x += "&onevent=nej.ut.j.cb.cb" + TW2x;
                Q8I[D8v + "-tgt"] = hs1x
            }
            gd1x.flashvars = kv2x;
            k8c.ey0x(e8e,
            function(C8u, J8B) {
                if (k8c.gr1x(C8u) && J8B != "onready") {
                    Q8I[D8v + "-" + J8B] = C8u
                }
            })
        };
        return function(e8e) {
            e8e = NEJ.X({},
            e8e);
            if (!e8e.src) return;
            var D8v = "flash_" + k8c.bav4z();
            e8e.id = D8v;
            coG0x(e8e);
            btd9U(e8e);
            if (!e8e.onready) return;
            Q8I[D8v] = e8e.onready;
            Q8I[D8v + "-count"] = 0;
            QB1x(D8v)
        }
    } ();
    gt1x = a7h.et0x('{var hide  = defined("hidden")&&!!hidden}{var param = defined("params")&&params||NEJ.O}{var width = !hide?width:"1px",height = !hide?height:"1px"}{if hide}<div style="position:absolute;top:0;left:0;width:1px;height:1px;z-index:10000;overflow:hidden;">{/if}<object classid = "clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"codebase = "http://fpdownload.macromedia.com/get/flashplayer/current/swflash.cab"width = "${width|default:"100px"}"height = "${height|default:"100px"}" id="${id}"><param value="${src}" name="movie">{for x in param}<param value="${x}" name="${x_key}"/>{/for}<embed src="${src}" name="${id}"width="${width|default:"100px"}"height="${height|default:"100px"}"pluginspage="http://www.adobe.com/go/getflashplayer"type="application/x-shockwave-flash"{for x in param}${x_key}="${x}" {/for}></embed></object>{if hide}</div>{/if}');
    cP0x.isChange = !0
})(); (function() {
    var c8g = NEJ.P,
    hO1x = c8g("nej.c"),
    a7h = c8g("nej.e"),
    k8c = c8g("nej.u"),
    N8F = c8g("nej.ut.j"),
    bbp5u = c8g("nej.ut.j.cb"),
    Q8I = {},
    gq1x = +(new Date),
    btb9S;
    if ( !! N8F.bta9R) return;
    bbp5u["ld" + gq1x] = function(J8B, cJ0x) {
        var jq2x = Q8I[J8B];
        if (!jq2x) return;
        delete Q8I[J8B];
        jq2x.tQ5V({
            status: 200,
            result: cJ0x
        })
    };
    bbp5u["er" + gq1x] = function(J8B, eh0x) {
        var jq2x = Q8I[J8B];
        if (!jq2x) return;
        delete Q8I[J8B];
        jq2x.tQ5V({
            status: eh0x || 0
        })
    };
    N8F.bta9R = NEJ.C();
    btb9S = N8F.bta9R.O8G(N8F.Ka7T);
    btb9S.cn9e = function(e8e) {
        var ho1x = Q8I.flash;
        if (k8c.eC0x(ho1x)) {
            ho1x.push(this.cn9e.g8c(this, e8e));
            return
        }
        if (!ho1x) {
            Q8I.flash = [this.cn9e.g8c(this, e8e)];
            a7h.pW4a({
                hidden: !0,
                src: hO1x.B8t("ajax.swf"),
                onready: function(ho1x) {
                    if (!ho1x) return;
                    var i8a = Q8I.flash;
                    Q8I.flash = ho1x;
                    k8c.mt3x(i8a,
                    function(dp0x) {
                        try {
                            dp0x()
                        } catch(e) {}
                    })
                }
            });
            return
        }
        this.Ai7b = "swf-" + k8c.ns3x();
        Q8I[this.Ai7b] = this;
        var j8b = NEJ.EX({
            url: "",
            data: null,
            method: "GET"
        },
        e8e.request);
        j8b.key = this.Ai7b;
        j8b.headers = e8e.headers;
        j8b.onerror = "nej.ut.j.cb.er" + gq1x;
        j8b.onloaded = "nej.ut.j.cb.ld" + gq1x;
        var bNi3x = hO1x.bXb6V(j8b.url);
        if ( !! bNi3x) j8b.policyURL = bNi3x;
        ho1x.request(j8b)
    };
    btb9S.jI2x = function() {
        delete Q8I[this.Ai7b];
        this.tQ5V({
            status: 0
        });
        return this
    }
})(); (function() {
    var c8g = NEJ.P,
    Z9Q = NEJ.O,
    bc9T = c8g("nej.h");
    bc9T.bNh3x = function() {
        var cZ0x = /^([\w]+?:\/\/.*?(?=\/|$))/i;
        return function(kd2x) {
            kd2x = kd2x || "";
            if (cZ0x.test(kd2x)) return RegExp.$1;
            return "*"
        }
    } ();
    bc9T.bsW9N = function(j8b) {
        return j8b
    };
    bc9T.bsV9M = function(bMY3x, e8e) {
        if (!bMY3x.postMessage) return;
        e8e = e8e || Z9Q;
        bMY3x.postMessage(bc9T.bsW9N(e8e.data), bc9T.bNh3x(e8e.origin))
    }
})(); (function() {
    var c8g = NEJ.P,
    bn9e = NEJ.F,
    a7h = c8g("nej.e"),
    h8b = c8g("nej.v"),
    k8c = c8g("nej.u"),
    N8F = c8g("nej.ut"),
    b8h;
    if ( !! N8F.fE1x) return;
    N8F.fE1x = NEJ.C();
    b8h = N8F.fE1x.O8G(N8F.cD0x);
    b8h.cs9j = function() {
        this.R8J = {};
        this.cx9o()
    };
    b8h.bj9a = function(e8e) {
        this.bk9b(e8e);
        this.Qs0x = a7h.B8t(e8e.element) || window;
        this.bMX3x(e8e.event);
        this.coj0x();
        this.z8r("oninit")
    };
    b8h.bA9r = function() {
        var CT8L = function(C8u, J8B, bv9m) {
            if (!k8c.eC0x(C8u)) {
                k8c.YV3x(this.Qs0x, J8B)
            }
            delete bv9m[J8B]
        };
        return function() {
            this.bF9w();
            k8c.ey0x(this.R8J, CT8L, this);
            delete this.Qs0x
        }
    } ();
    b8h.VK2x = function(G8y, t8l) {
        G8y = a7h.B8t(G8y);
        return G8y == this.Qs0x && (!t8l || !!this.R8J["on" + t8l])
    };
    b8h.bMX3x = function(d8f) {
        if (k8c.fw1x(d8f)) {
            var T8L = "on" + d8f;
            if (!this.R8J[T8L]) {
                this.R8J[T8L] = this.coi0x.g8c(this, d8f)
            }
            this.bMW3x(d8f);
            return
        }
        if (k8c.eC0x(d8f)) {
            k8c.bb9S(d8f, this.bMX3x, this)
        }
    };
    b8h.bMW3x = function(t8l) {
        var d8f = "on" + t8l,
        dp0x = this.Qs0x[d8f],
        bMP3x = this.R8J[d8f];
        if (dp0x != bMP3x) {
            this.VT2x(t8l);
            if ( !! dp0x && dp0x != bn9e) this.bMO3x(t8l, dp0x);
            this.Qs0x[d8f] = bMP3x
        }
    };
    b8h.bMO3x = function(t8l, dp0x, cnS0x) {
        var i8a = this.R8J[t8l];
        if (!i8a) {
            i8a = [];
            this.R8J[t8l] = i8a
        }
        if (k8c.gr1x(dp0x)) { ! cnS0x ? i8a.push(dp0x) : i8a.unshift(dp0x)
        }
    };
    b8h.VT2x = function(t8l, dp0x) {
        var i8a = this.R8J[t8l];
        if (!i8a || !i8a.length) return;
        if (!dp0x) {
            delete this.R8J[t8l];
            return
        }
        k8c.mt3x(i8a,
        function(C8u, r8j, JK7D) {
            if (dp0x === C8u) {
                JK7D.splice(r8j, 1);
                return ! 0
            }
        })
    };
    b8h.coi0x = function(t8l, d8f) {
        d8f = d8f || {
            noargs: !0
        };
        d8f.type = t8l;
        this.z8r("ondispatch", d8f);
        if ( !! d8f.stopped) return;
        k8c.bb9S(this.R8J[t8l],
        function(dp0x) {
            try {
                dp0x(d8f)
            } catch(ex) {
                console.error(ex.message);
                console.error(ex.stack)
            }
        })
    };
    b8h.coj0x = function() {
        var bsR9I = function(d8f) {
            var bh9Y = d8f.args,
            t8l = bh9Y[1].toLowerCase();
            if (this.VK2x(bh9Y[0], t8l)) {
                d8f.stopped = !0;
                this.bMW3x(t8l);
                this.bMO3x(t8l, bh9Y[2], bh9Y[3]);
                this.z8r("oneventadd", {
                    type: t8l,
                    listener: bh9Y[2]
                })
            }
        };
        var cnD0x = function(d8f) {
            var bh9Y = d8f.args,
            t8l = bh9Y[1].toLowerCase();
            if (this.VK2x(bh9Y[0], t8l)) {
                d8f.stopped = !0;
                this.VT2x(t8l, bh9Y[2])
            }
        };
        var btC9t = function(d8f) {
            var bh9Y = d8f.args,
            t8l = (bh9Y[1] || "").toLowerCase();
            if (this.VK2x(bh9Y[0])) {
                if ( !! t8l) {
                    this.VT2x(t8l);
                    return
                }
                k8c.ey0x(this.R8J,
                function(C8u, J8B) {
                    if (k8c.eC0x(C8u)) {
                        this.VT2x(J8B)
                    }
                },
                this)
            }
        };
        var cnC0x = function(d8f) {
            var bh9Y = d8f.args,
            t8l = bh9Y[1].toLowerCase();
            if (this.VK2x(bh9Y[0], t8l)) {
                d8f.stopped = !0;
                bh9Y[0]["on" + t8l].apply(bh9Y[0], bh9Y.slice(2))
            }
        };
        return function() {
            if ( !! this.cnB0x) return;
            this.cnB0x = true;
            h8b.s8k = h8b.s8k.er0x(bsR9I.g8c(this));
            h8b.mx3x = h8b.mx3x.er0x(cnD0x.g8c(this));
            h8b.gG1x = h8b.gG1x.er0x(btC9t.g8c(this));
            h8b.z8r = h8b.z8r.er0x(cnC0x.g8c(this))
        }
    } ()
})(); (function() {
    var c8g = NEJ.P,
    N8F = c8g("nej.p"),
    bc9T = c8g("nej.h"),
    k8c = c8g("nej.u"),
    h8b = c8g("nej.v"),
    H8z = c8g("nej.ut");
    if (N8F.mF3x.trident) return;
    if ( !! window.postMessage) {
        bc9T.bsW9N = bc9T.bsW9N.er0x(function(d8f) {
            d8f.stopped = !0;
            d8f.value = JSON.stringify(d8f.args[0])
        });
        return
    }
    var J8B = "MSG|",
    jE2x = [];
    var cnz0x = function() {
        var T8L = unescape(window.name || "").trim();
        if (!T8L || T8L.indexOf(J8B) != 0) return;
        window.name = "";
        var o8g = k8c.bOM4Q(T8L.replace(J8B, ""), "|"),
        kd2x = (o8g.origin || "").toLowerCase();
        if ( !! kd2x && kd2x != "*" && location.href.toLowerCase().indexOf(kd2x) != 0) return;
        h8b.z8r(window, "message", {
            data: JSON.parse(o8g.data || "null"),
            source: window.frames[o8g.self] || o8g.self,
            origin: bc9T.bNh3x(o8g.ref || document.referrer)
        })
    };
    var cnv0x = function() {
        var WC2x;
        var cns0x = function(bv9m, r8j, i8a) {
            if (k8c.dd0x(WC2x, bv9m.w) < 0) {
                WC2x.push(bv9m.w);
                i8a.splice(r8j, 1);
                bv9m.w.name = bv9m.d
            }
        };
        return function() {
            WC2x = [];
            k8c.mt3x(jE2x, cns0x);
            WC2x = null
        }
    } ();
    bc9T.bsV9M = function() {
        var cnp0x = function(j8b) {
            var o8g = {};
            j8b = j8b || Z9Q;
            o8g.origin = j8b.origin || "";
            o8g.ref = location.href;
            o8g.self = j8b.source;
            o8g.data = JSON.stringify(j8b.data);
            return J8B + k8c.sY5d(o8g, "|", !0)
        };
        return bc9T.bsV9M.er0x(function(d8f) {
            d8f.stopped = !0;
            var bh9Y = d8f.args;
            jE2x.unshift({
                w: bh9Y[0],
                d: escape(cnp0x(bh9Y[1]))
            })
        })
    } ();
    H8z.fE1x.A8s({
        element: window,
        event: "message"
    });
    window.setInterval(cnv0x, 100);
    window.setInterval(cnz0x, 20)
})(); (function() {
    var c8g = NEJ.P,
    bc9T = c8g("nej.h"),
    a7h = c8g("nej.e"),
    x8p = c8g("nej.j");
    x8p.cno0x = function() {
        var iQ2x = window.name || "_parent",
        cni0x = {
            gi1x: window.top,
            iQ2x: window,
            bG9x: window.parent
        };
        return function(cE0x, e8e) {
            if (typeof cE0x == "string") {
                cE0x = cni0x[cE0x] || window.frames[cE0x];
                if (!cE0x) return this
            }
            var j8b = NEJ.X({
                origin: "*",
                source: iQ2x
            },
            e8e);
            bc9T.bsV9M(cE0x, j8b);
            return this
        }
    } ()
})(); (function() {
    var c8g = NEJ.P,
    hO1x = c8g("nej.c"),
    a7h = c8g("nej.e"),
    h8b = c8g("nej.v"),
    k8c = c8g("nej.u"),
    x8p = c8g("nej.j"),
    N8F = c8g("nej.ut.j"),
    Q8I = {},
    Xk3x;
    if ( !! N8F.bsH9y) return;
    N8F.bsH9y = NEJ.C();
    Xk3x = N8F.bsH9y.O8G(N8F.Ka7T);
    Xk3x.cs9j = function() {
        var eO0x = "NEJ-AJAX-DATA:",
        EK9B = !1;
        var bsG9x = function(d8f) {
            var j8b = d8f.data;
            if (j8b.indexOf(eO0x) != 0) return;
            j8b = JSON.parse(j8b.replace(eO0x, ""));
            var jq2x = Q8I[j8b.key];
            if (!jq2x) return;
            delete Q8I[j8b.key];
            j8b.result = decodeURIComponent(j8b.result || "");
            jq2x.tQ5V(j8b)
        };
        var bsF9w = function() {
            if (!EK9B) {
                EK9B = !0;
                h8b.s8k(window, "message", bsG9x)
            }
        };
        return function() {
            this.cx9o();
            bsF9w()
        }
    } ();
    Xk3x.cn9e = function(e8e) {
        var fP1x = e8e.request,
        jq2x = hO1x.bWF6z(fP1x.url),
        vn6h = Q8I[jq2x];
        if (k8c.eC0x(vn6h)) {
            vn6h.push(this.cn9e.g8c(this, e8e));
            return
        }
        if (!vn6h) {
            Q8I[jq2x] = [this.cn9e.g8c(this, e8e)];
            a7h.Xb3x({
                src: jq2x,
                visible: !1,
                onload: function(d8f) {
                    var i8a = Q8I[jq2x];
                    Q8I[jq2x] = h8b.U8M(d8f).contentWindow;
                    k8c.mt3x(i8a,
                    function(dp0x) {
                        try {
                            dp0x()
                        } catch(e) {}
                    })
                }
            });
            return
        }
        this.Ai7b = "frm-" + k8c.ns3x();
        Q8I[this.Ai7b] = this;
        var j8b = NEJ.EX({
            url: "",
            data: null,
            timeout: 0,
            method: "GET"
        },
        fP1x);
        j8b.key = this.Ai7b;
        j8b.headers = e8e.headers;
        x8p.cno0x(Q8I[jq2x], {
            data: j8b
        })
    };
    Xk3x.jI2x = function() {
        delete Q8I[this.Ai7b];
        this.tQ5V({
            status: 0
        });
        return this
    }
})(); (function() {
    var c8g = NEJ.P,
    Z9Q = NEJ.O,
    eb0x = c8g("nej.g"),
    a7h = c8g("nej.e"),
    h8b = c8g("nej.v"),
    k8c = c8g("nej.u"),
    x8p = c8g("nej.j"),
    N8F = c8g("nej.ut.j"),
    Q8I = {},
    JI7B;
    if ( !! N8F.bsE9v) return;
    N8F.bsE9v = NEJ.C();
    JI7B = N8F.bsE9v.O8G(N8F.Ka7T);
    JI7B.cs9j = function() {
        var eO0x = "NEJ-UPLOAD-RESULT:",
        EK9B = !1;
        var bsG9x = function(d8f) {
            var j8b = d8f.data;
            if (j8b.indexOf(eO0x) != 0) return;
            j8b = JSON.parse(j8b.replace(eO0x, ""));
            var jq2x = Q8I[j8b.key];
            if (!jq2x) return;
            delete Q8I[j8b.key];
            jq2x.tQ5V(decodeURIComponent(j8b.result))
        };
        var bsF9w = function() {
            if (!EK9B) {
                EK9B = !0;
                h8b.s8k(window, "message", bsG9x)
            }
        };
        return function() {
            this.cx9o();
            bsF9w()
        }
    } ();
    JI7B.bA9r = function() {
        this.bF9w();
        a7h.cz9q(this.bsD9u);
        delete this.bsD9u;
        window.clearTimeout(this.dX0x);
        delete this.dX0x
    };
    JI7B.tQ5V = function(cJ0x) {
        var P8H;
        try {
            P8H = JSON.parse(cJ0x);
            this.z8r("onload", P8H)
        } catch(e) {
            this.z8r("onerror", {
                code: eb0x.cku9l,
                message: cJ0x
            })
        }
    };
    JI7B.cn9e = function() {
        var cmo0x = function() {
            var mb3x, cJ0x;
            try {
                var mb3x = this.bsD9u.contentWindow.document.body,
                cJ0x = mb3x.innerText || mb3x.textContent
            } catch(e) {
                return
            }
            this.tQ5V(cJ0x)
        };
        var bsC9t = function(V8N, eZ0x, qS4W) {
            x8p.bp9g(V8N, {
                type: "json",
                method: "POST",
                cookie: qS4W,
                mode: parseInt(eZ0x) || 0,
                onload: function(j8b) {
                    if (!this.dX0x) return;
                    this.z8r("onuploading", j8b);
                    this.dX0x = window.setTimeout(bsC9t.g8c(this, V8N, eZ0x, qS4W), 1e3)
                }.g8c(this),
                onerror: function(bV9M) {
                    if (!this.dX0x) return;
                    this.dX0x = window.setTimeout(bsC9t.g8c(this, V8N, eZ0x, qS4W), 1e3)
                }.g8c(this)
            })
        };
        return function(e8e) {
            var fP1x = e8e.request,
            ol3x = e8e.headers,
            eS0x = fP1x.data,
            T8L = "fom-" + k8c.ns3x();
            Q8I[T8L] = this;
            eS0x.target = T8L;
            eS0x.method = "POST";
            eS0x.enctype = eb0x.EM9D;
            eS0x.encoding = eb0x.EM9D;
            var V8N = eS0x.action || "",
            lp2x = V8N.indexOf("?") <= 0 ? "?": "&";
            eS0x.action = V8N + lp2x + "_proxy_=form";
            this.bsD9u = a7h.Xb3x({
                name: T8L,
                onload: function(d8f) {
                    var vn6h = h8b.U8M(d8f);
                    h8b.s8k(vn6h, "load", cmo0x.g8c(this));
                    eS0x.submit();
                    var bMb3x = (eS0x.nej_query || Z9Q).value;
                    if (!bMb3x) return;
                    var eZ0x = (eS0x.nej_mode || Z9Q).value,
                    qS4W = (eS0x.nej_cookie || Z9Q).value == "true";
                    this.dX0x = window.setTimeout(bsC9t.g8c(this, bMb3x, eZ0x, qS4W), 100)
                }.g8c(this)
            })
        }
    } ();
    JI7B.jI2x = function() {
        this.z8r("onerror", {
            code: eb0x.cwl2x,
            message: "客户端终止文件上传"
        });
        return this
    }
})(); (function() {
    var c8g = NEJ.P,
    Z9Q = NEJ.O,
    bc9T = c8g("nej.h"),
    N8F = c8g("nej.ut.j");
    bc9T.btx9o = function() {
        return new XMLHttpRequest
    };
    bc9T.bsB9s = function(eZ0x, Yq3x, e8e) {
        var bv9m = !!Yq3x ? {
            2 : N8F.bsE9v
        }: {
            2 : N8F.bsH9y,
            3 : N8F.bta9R
        };
        return (bv9m[eZ0x] || N8F.Zp4t).A8s(e8e)
    }
})(); (function() {
    var c8g = NEJ.P,
    N8F = c8g("nej.p"),
    bc9T = c8g("nej.h");
    if (N8F.mF3x.trident) return;
    bc9T.btx9o = function() {
        var Sx1x = ["Msxml2.XMLHTTP.6.0", "Msxml2.XMLHTTP.3.0", "Msxml2.XMLHTTP.4.0", "Msxml2.XMLHTTP.5.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"];
        var cmd0x = function() {
            for (var i = 0,
            l = Sx1x.length; i < l; i++) {
                try {
                    return new ActiveXObject(Sx1x[i])
                } catch(e) {}
            }
            return null
        };
        return bc9T.btx9o.er0x(function(d8f) {
            if ( !! window.XMLHttpRequest) return;
            d8f.stopped = !0;
            d8f.value = cmd0x()
        })
    } ();
    bc9T.bsB9s = function() {
        var Gf9W = {
            0 : 2,
            1 : 3
        };
        return bc9T.bsB9s.er0x(function(d8f) {
            var bh9Y = d8f.args,
            eZ0x = bh9Y[0] || 0;
            bh9Y[0] = !!bh9Y[1] ? 2 : Gf9W[eZ0x] || eZ0x
        })
    } ()
})(); (function() {
    var c8g = NEJ.P,
    Z9Q = NEJ.O,
    bn9e = NEJ.F,
    bc9T = c8g("nej.h"),
    eb0x = c8g("nej.g"),
    k8c = c8g("nej.u"),
    x8p = c8g("nej.j"),
    N8F = c8g("nej.ut.j"),
    nt3x = {},
    KB7u = bn9e;
    x8p.jI2x = function(eU0x) {
        var Q8I = nt3x[eU0x];
        if (!Q8I) return this;
        Q8I.req.jI2x();
        return this
    };
    x8p.YK3x = function(dP0x) {
        KB7u = dP0x || bn9e;
        return this
    };
    x8p.bp9g = function() {
        var jd2x = (location.protocol + "//" + location.host).toLowerCase();
        var clY0x = function(V8N) {
            var kd2x = k8c.crI1x(V8N);
            return !! kd2x && kd2x != jd2x
        };
        var clS0x = function(ol3x) {
            return (ol3x || Z9Q)[eb0x.yj7c] == eb0x.EM9D
        };
        var clI9z = function(e8e) {
            var Yq3x = clS0x(e8e.headers);
            if (!clY0x(e8e.url) && !Yq3x) return N8F.Zp4t.A8s(e8e);
            return bc9T.bsB9s(e8e.mode, Yq3x, e8e)
        };
        var CT8L = function(eU0x) {
            var Q8I = nt3x[eU0x];
            if (!Q8I) return;
            if ( !! Q8I.req) Q8I.req.S8K();
            delete nt3x[eU0x]
        };
        var bLK3x = function(eU0x, t8l) {
            var Q8I = nt3x[eU0x];
            if (!Q8I) return;
            CT8L(eU0x);
            try {
                var d8f = {
                    type: t8l,
                    result: arguments[2]
                };
                KB7u(d8f);
                if (!d8f.stopped)(Q8I[t8l] || bn9e)(d8f.result)
            } catch(ex) {
                console.error(ex.message);
                console.error(ex)
            }
        };
        var yD7w = function(eU0x, j8b) {
            bLK3x(eU0x, "onload", j8b)
        };
        var zy7r = function(eU0x, bV9M) {
            bLK3x(eU0x, "onerror", bV9M)
        };
        return function(V8N, e8e) {
            e8e = e8e || {};
            var eU0x = k8c.ns3x(),
            Q8I = {
                onload: e8e.onload || bn9e,
                onerror: e8e.onerror || bn9e
            };
            nt3x[eU0x] = Q8I;
            e8e.onload = yD7w.g8c(null, eU0x);
            e8e.onerror = zy7r.g8c(null, eU0x);
            if ( !! e8e.query) {
                var lp2x = V8N.indexOf("?") < 0 ? "?": "&",
                bx9o = e8e.query;
                if (k8c.lg2x(bx9o)) bx9o = k8c.dh0x(bx9o);
                if ( !! bx9o) V8N += lp2x + bx9o
            }
            e8e.url = V8N;
            Q8I.req = clI9z(e8e);
            Q8I.req.bty9p(e8e.data);
            return eU0x
        }
    } ();
    x8p.gC1x = function(eS0x, e8e) {
        var gM1x = {
            mode: 0,
            type: "json",
            query: null,
            cookie: !1,
            headers: {},
            onload: null,
            onerror: null,
            onuploading: null,
            onbeforerequest: null
        };
        NEJ.EX(gM1x, e8e);
        gM1x.data = eS0x;
        gM1x.method = "POST";
        gM1x.timeout = 0;
        gM1x.headers[eb0x.yj7c] = eb0x.EM9D;
        return x8p.bp9g(eS0x.action, gM1x)
    }
})(); (function() {
    var c8g = NEJ.P,
    bn9e = NEJ.F,
    eb0x = c8g("nej.g"),
    h8b = c8g("nej.v"),
    k8c = c8g("nej.u"),
    H8z = c8g("nej.ut"),
    N8F = c8g("nej.ut.j"),
    lO3x,
    jM2x = 6e4;
    if ( !! N8F.Qf0x) return;
    N8F.Qf0x = NEJ.C();
    lO3x = N8F.Qf0x.O8G(H8z.cD0x);
    lO3x.cs9j = function() {
        this.cx9o();
        this.Qd0x = {
            onerror: this.clh9Y.g8c(this),
            onloaded: this.cld9U.g8c(this)
        };
        if (!this.constructor.R8J) this.constructor.R8J = {
            loaded: {}
        }
    };
    lO3x.bj9a = function(e8e) {
        this.bk9b(e8e);
        this.JG7z = e8e.version;
        this.bsp9g = e8e.timeout;
        this.Qd0x.version = this.JG7z;
        this.Qd0x.timeout = this.bsp9g
    };
    lO3x.bLw3x = function(J8B) {
        delete this.constructor.R8J[J8B]
    };
    lO3x.zx7q = function(J8B) {
        return this.constructor.R8J[J8B]
    };
    lO3x.bLv3x = function(J8B, j8b) {
        this.constructor.R8J[J8B] = j8b
    };
    lO3x.bbn5s = bn9e;
    lO3x.bLu3x = function(fP1x) {
        h8b.gG1x(fP1x)
    };
    lO3x.bsl9c = function(fP1x) {
        fP1x.src = this.lk2x;
        document.head.appendChild(fP1x)
    };
    lO3x.zv7o = function() {
        var Q8I = this.zx7q(this.lk2x);
        if (!Q8I) return;
        window.clearTimeout(Q8I.timer);
        this.bLu3x(Q8I.request);
        delete Q8I.bind;
        delete Q8I.timer;
        delete Q8I.request;
        this.bLw3x(this.lk2x);
        this.zx7q("loaded")[this.lk2x] = !0
    };
    lO3x.bbU5Z = function(T8L) {
        var Q8I = this.zx7q(this.lk2x);
        if (!Q8I) return;
        var i8a = Q8I.bind;
        this.zv7o();
        if ( !! i8a && i8a.length > 0) {
            var cv9m;
            while (i8a.length) {
                cv9m = i8a.shift();
                try {
                    cv9m.z8r(T8L, arguments[1])
                } catch(ex) {
                    console.error(ex.message);
                    console.error(ex.stack)
                }
                cv9m.S8K()
            }
        }
    };
    lO3x.ew0x = function(bV9M) {
        this.bbU5Z("onerror", bV9M)
    };
    lO3x.bLr3x = function() {
        this.bbU5Z("onloaded")
    };
    lO3x.ckH9y = function(V8N) {
        this.constructor.A8s(this.Qd0x).JC7v(V8N)
    };
    lO3x.bLp3x = function(bV9M) {
        var Q8I = this.zx7q(this.wm6g);
        if (!Q8I) return;
        if ( !! bV9M) Q8I.error++;
        Q8I.loaded++;
        if (Q8I.loaded < Q8I.total) return;
        this.bLw3x(this.wm6g);
        this.z8r(Q8I.error > 0 ? "onerror": "onloaded")
    };
    lO3x.clh9Y = function(bV9M) {
        this.bLp3x(!0)
    };
    lO3x.cld9U = function() {
        this.bLp3x()
    };
    lO3x.JC7v = function(V8N) {
        V8N = k8c.btM9D(V8N);
        if (!V8N) {
            this.z8r("onerror", {
                code: eb0x.blG7z,
                message: "请指定要载入的资源地址！"
            });
            return this
        }
        this.lk2x = V8N;
        if ( !! this.JG7z) this.lk2x += (this.lk2x.indexOf("?") < 0 ? "?": "&") + this.JG7z;
        if (this.zx7q("loaded")[this.lk2x]) {
            try {
                this.z8r("onloaded")
            } catch(ex) {
                console.error(ex.message);
                console.error(ex.stack)
            }
            this.S8K();
            return this
        }
        var Q8I = this.zx7q(this.lk2x),
        fP1x;
        if ( !! Q8I) {
            Q8I.bind.unshift(this);
            Q8I.timer = window.clearTimeout(Q8I.timer)
        } else {
            fP1x = this.bbn5s();
            Q8I = {
                request: fP1x,
                bind: [this]
            };
            this.bLv3x(this.lk2x, Q8I);
            h8b.s8k(fP1x, "load", this.bLr3x.g8c(this));
            h8b.s8k(fP1x, "error", this.ew0x.g8c(this, {
                code: eb0x.bne8W,
                message: "无法加载指定资源文件[" + this.lk2x + "]！"
            }))
        }
        if (this.bsp9g != 0) Q8I.timer = window.setTimeout(this.ew0x.g8c(this, {
            code: eb0x.bwG0x,
            message: "指定资源文件[" + this.lk2x + "]载入超时！"
        }), this.bsp9g || jM2x);
        if ( !! fP1x) this.bsl9c(fP1x);
        this.z8r("onloading");
        return this
    };
    lO3x.bLl3x = function(i8a) {
        if (!i8a || !i8a.length) {
            this.z8r("onerror", {
                code: eb0x.blG7z,
                message: "请指定要载入的资源队列！"
            });
            return this
        }
        this.wm6g = k8c.ns3x();
        var Q8I = {
            error: 0,
            loaded: 0,
            total: i8a.length
        };
        this.bLv3x(this.wm6g, Q8I);
        for (var i = 0,
        l = i8a.length; i < l; i++) {
            if (!i8a[i]) {
                Q8I.total--;
                continue
            }
            this.ckH9y(i8a[i])
        }
        this.z8r("onloading");
        return this
    }
})(); (function() {
    var c8g = NEJ.P,
    Z9Q = NEJ.O,
    a7h = c8g("nej.e"),
    bc9T = c8g("nej.h"),
    N8F = c8g("nej.ut.j"),
    PQ0x;
    if ( !! N8F.bsf9W) return;
    N8F.bsf9W = NEJ.C();
    PQ0x = N8F.bsf9W.O8G(N8F.Qf0x);
    PQ0x.bbn5s = function() {
        var ft1x = a7h.cY0x("iframe");
        ft1x.width = 0;
        ft1x.height = 0;
        ft1x.style.display = "none";
        return ft1x
    };
    PQ0x.bsl9c = function(fP1x) {
        fP1x.src = this.lk2x;
        document.body.appendChild(fP1x)
    };
    PQ0x.ew0x = function(bV9M) {
        var ft1x = (this.zx7q(this.lk2x) || Z9Q).request;
        this.bbU5Z("onerror", bV9M);
        bc9T.VR2x(ft1x)
    };
    PQ0x.bLr3x = function() {
        var mb3x = null,
        ft1x = (this.zx7q(this.lk2x) || Z9Q).request;
        try {
            mb3x = ft1x.contentWindow.document.body
        } catch(ex) {}
        this.bbU5Z("onloaded", mb3x);
        bc9T.VR2x(ft1x)
    }
})(); (function() {
    var c8g = NEJ.P,
    a7h = c8g("nej.e"),
    N8F = c8g("nej.ut.j"),
    bse9V;
    if ( !! N8F.TQ2x) return;
    N8F.TQ2x = NEJ.C();
    bse9V = N8F.TQ2x.O8G(N8F.Qf0x);
    bse9V.bbn5s = function() {
        return a7h.cY0x("link")
    };
    bse9V.bsl9c = function(fP1x) {
        fP1x.href = this.lk2x;
        document.head.appendChild(fP1x)
    }
})(); (function() {
    var c8g = NEJ.P,
    a7h = c8g("nej.e"),
    N8F = c8g("nej.ut.j"),
    TS2x;
    if ( !! N8F.TU2x) return;
    N8F.TU2x = NEJ.C();
    TS2x = N8F.TU2x.O8G(N8F.Qf0x);
    TS2x.bj9a = function(e8e) {
        this.bk9b(e8e);
        this.bLh3x = e8e.async;
        this.bsd9U = e8e.charset;
        this.Qd0x.async = !1;
        this.Qd0x.charset = this.bsd9U
    };
    TS2x.bbn5s = function() {
        var fP1x = a7h.cY0x("script");
        if (this.bLh3x != null) fP1x.async = !!this.bLh3x;
        if (this.bsd9U != null) fP1x.charset = this.bsd9U;
        return fP1x
    };
    TS2x.bLu3x = function(fP1x) {
        a7h.cz9q(fP1x)
    }
})(); (function() {
    var c8g = NEJ.P,
    x8p = c8g("nej.j"),
    N8F = c8g("nej.ut.j");
    x8p.cks9j = function(V8N, e8e) {
        N8F.TU2x.A8s(e8e).JC7v(V8N);
        return this
    };
    x8p.cke9V = function(i8a, e8e) {
        N8F.TU2x.A8s(e8e).bLl3x(i8a);
        return this
    };
    x8p.cyV2x = function(V8N, e8e) {
        N8F.TQ2x.A8s(e8e).JC7v(V8N);
        return this
    };
    x8p.ckb9S = function(i8a, e8e) {
        N8F.TQ2x.A8s(e8e).bLl3x(i8a);
        return this
    };
    x8p.bKS3x = function(V8N, e8e) {
        N8F.bsf9W.A8s(e8e).JC7v(V8N);
        return this
    }
})(); (function() {
    var c8g = NEJ.P,
    Z9Q = NEJ.O,
    a7h = c8g("nej.e"),
    h8b = c8g("nej.v"),
    k8c = c8g("nej.u"),
    x8p = c8g("nej.j"),
    H8z = c8g("nej.ut"),
    Q8I = {},
    sa5f = +(new Date) + "-";
    a7h.cO0x = function() {
        var cA9r = 0;
        var PI0x = function() {
            if (cA9r > 0) return;
            cA9r = 0;
            h8b.z8r(document, "templateready");
            h8b.gG1x(document, "templateready")
        };
        var Va2x = function(fO1x, e8e) {
            var dt0x = a7h.u8m(fO1x, "src");
            if (!dt0x) return;
            e8e = e8e || Z9Q;
            var fK1x = e8e.root;
            if (!fK1x) {
                fK1x = fO1x.ownerDocument.location.href
            } else {
                fK1x = k8c.btM9D(fK1x)
            }
            dt0x = dt0x.split(",");
            k8c.bb9S(dt0x,
            function(C8u, r8j, i8a) {
                i8a[r8j] = k8c.btM9D(C8u, fK1x)
            });
            return dt0x
        };
        var cjU9L = function(fO1x, e8e) {
            if (!fO1x) return;
            var dt0x = Va2x(fO1x, e8e);
            if ( !! dt0x) x8p.ckb9S(dt0x, {
                version: a7h.u8m(fO1x, "version")
            });
            a7h.bPA4E(fO1x.value)
        };
        var cjO9F = function(C8u) {
            cA9r--;
            a7h.bPx4B(C8u);
            PI0x()
        };
        var cjM9D = function(fO1x, e8e) {
            if (!fO1x) return;
            var dt0x = Va2x(fO1x, e8e),
            eG0x = fO1x.value;
            if ( !! dt0x) {
                cA9r++;
                var e8e = {
                    version: a7h.u8m(fO1x, "version"),
                    onloaded: cjO9F.g8c(null, eG0x)
                };
                window.setTimeout(x8p.cke9V.g8c(x8p, dt0x, e8e), 0);
                return
            }
            a7h.bPx4B(eG0x)
        };
        var cjK9B = function(mb3x) {
            cA9r--;
            a7h.cO0x(mb3x);
            PI0x()
        };
        var cjI9z = function(fO1x, e8e) {
            if (!fO1x) return;
            var dt0x = Va2x(fO1x, e8e)[0];
            if ( !! dt0x) {
                cA9r++;
                var e8e = {
                    version: a7h.u8m(fO1x, "version"),
                    onloaded: cjK9B
                };
                window.setTimeout(x8p.bKS3x.g8c(x8p, dt0x, e8e), 0)
            }
        };
        var cjc9T = function(D8v, cJ0x) {
            cA9r--;
            a7h.JA7t(D8v, cJ0x || "");
            PI0x()
        };
        var cja9R = function(fO1x, e8e) {
            if (!fO1x || !fO1x.id) return;
            var D8v = fO1x.id,
            dt0x = Va2x(fO1x, e8e)[0];
            if ( !! dt0x) {
                cA9r++;
                var V8N = dt0x + (dt0x.indexOf("?") < 0 ? "?": "&") + (a7h.u8m(fO1x, "version") || ""),
                e8e = {
                    type: "text",
                    method: "GET",
                    onload: cjc9T.g8c(null, D8v)
                };
                window.setTimeout(x8p.bp9g.g8c(x8p, V8N, e8e), 0)
            }
        };
        var ciU9L = function(f8d, e8e) {
            var t8l = f8d.name.toLowerCase();
            switch (t8l) {
            case "jst":
                a7h.et0x(f8d, !0);
                return;
            case "txt":
                a7h.JA7t(f8d.id, f8d.value || "");
                return;
            case "ntp":
                a7h.in1x(f8d.value || "", f8d.id);
                return;
            case "js":
                cjM9D(f8d, e8e);
                return;
            case "css":
                cjU9L(f8d, e8e);
                return;
            case "html":
                cjI9z(f8d, e8e);
                return;
            case "res":
                cja9R(f8d, e8e);
                return
            }
        };
        H8z.fE1x.A8s({
            element: document,
            event: "templateready",
            oneventadd: PI0x
        });
        return function(G8y, e8e) {
            G8y = a7h.B8t(G8y);
            if ( !! G8y) {
                var i8a = G8y.tagName == "TEXTAREA" ? [G8y] : G8y.getElementsByTagName("textarea");
                k8c.bb9S(i8a,
                function(f8d) {
                    ciU9L(f8d, e8e)
                });
                a7h.cz9q(G8y, !0)
            }
            PI0x();
            return this
        }
    } ();
    a7h.JA7t = function(J8B, C8u) {
        Q8I[J8B] = C8u || "";
        return this
    };
    a7h.ih1x = function(J8B) {
        return Q8I[J8B] || ""
    };
    a7h.in1x = function(G8y, J8B) {
        J8B = J8B || k8c.ns3x();
        G8y = a7h.B8t(G8y) || G8y;
        a7h.JA7t(sa5f + J8B, G8y);
        a7h.mK3x(G8y);
        return J8B
    };
    a7h.dr0x = function(J8B) {
        if (!J8B) return null;
        J8B = sa5f + J8B;
        var C8u = a7h.ih1x(J8B);
        if (!C8u) return null;
        if (k8c.fw1x(C8u)) {
            C8u = a7h.no3x(C8u);
            a7h.JA7t(J8B, C8u)
        }
        return C8u.cloneNode(!0)
    };
    a7h.zn7g = function() {
        var KB7u = function(C8u, J8B) {
            return J8B == "offset" || J8B == "limit"
        };
        return function(i8a, p8h, e8e) {
            var bs9j = [];
            if (!i8a || !i8a.length || !p8h) return bs9j;
            e8e = e8e || Z9Q;
            var du0x = i8a.length,
            jB2x = parseInt(e8e.offset) || 0,
            gs1x = Math.min(du0x, jB2x + (parseInt(e8e.limit) || du0x)),
            co9f = {
                total: i8a.length,
                range: [jB2x, gs1x]
            };
            NEJ.X(co9f, e8e, KB7u);
            for (var i = jB2x,
            cv9m; i < gs1x; i++) {
                co9f.index = i;
                co9f.data = i8a[i];
                cv9m = p8h.A8s(co9f);
                var D8v = cv9m.Ed9U();
                Q8I[D8v] = cv9m;
                cv9m.S8K = cv9m.S8K.er0x(function(D8v, cv9m) {
                    delete Q8I[D8v];
                    delete cv9m.S8K
                }.g8c(null, D8v, cv9m));
                bs9j.push(cv9m)
            }
            return bs9j
        }
    } ();
    a7h.bKl3x = function(D8v) {
        return Q8I[D8v]
    };
    a7h.cyW2x = function(dT0x, e8e) {
        e8e = e8e || Z9Q;
        a7h.cO0x(e8e.tid || "template-box");
        h8b.s8k(document, "templateready",
        function() {
            dT0x.A8s().z8r("onshow", e8e)
        })
    };
    c8g("dbg").dumpTC = function() {
        return Q8I
    }
})(); (function() {
    var c8g = NEJ.P,
    Z9Q = NEJ.O,
    bn9e = NEJ.F,
    a7h = c8g("nej.e"),
    k8c = c8g("nej.u"),
    H8z = c8g("nej.ut"),
    N8F = c8g("nej.ui"),
    b8h;
    if ( !! N8F.ee0x) return;
    N8F.ee0x = NEJ.C();
    b8h = N8F.ee0x.O8G(H8z.cD0x);
    b8h.cs9j = function() {
        this.cx9o();
        a7h.bPM4Q();
        this.ca9R();
        this.bS9J()
    };
    b8h.bj9a = function(e8e) {
        this.bk9b(e8e);
        this.ciB9s(e8e.clazz);
        this.bKe3x(e8e.parent)
    };
    b8h.bA9r = function() {
        this.bF9w();
        this.bKb3x();
        delete this.fQ1x;
        a7h.mK3x(this.m8e);
        a7h.v8n(this.m8e, this.brL9C);
        delete this.brL9C
    };
    b8h.ca9R = bn9e;
    b8h.bS9J = function() {
        if (!this.cd9U) this.WL2x();
        this.m8e = a7h.dr0x(this.cd9U);
        if (!this.m8e) this.m8e = a7h.cY0x("div", this.lw2x);
        a7h.w8o(this.m8e, this.lw2x)
    };
    b8h.WL2x = bn9e;
    b8h.ciB9s = function(dS0x) {
        this.brL9C = dS0x || "";
        a7h.w8o(this.m8e, this.brL9C)
    };
    b8h.cir9i = function() {
        if (!this.lw2x) return;
        a7h.w8o(this.fQ1x, this.lw2x + "-parent")
    };
    b8h.bKb3x = function() {
        if (!this.lw2x) return;
        a7h.v8n(this.fQ1x, this.lw2x + "-parent")
    };
    b8h.ln2x = function() {
        return this.m8e
    };
    b8h.bKe3x = function(bG9x) {
        if (!this.m8e) return this;
        this.bKb3x();
        if (k8c.gr1x(bG9x)) {
            this.fQ1x = bG9x(this.m8e)
        } else {
            this.fQ1x = a7h.B8t(bG9x);
            if ( !! this.fQ1x) this.fQ1x.appendChild(this.m8e)
        }
        this.cir9i();
        return this
    };
    b8h.L8D = function() {
        if (!this.fQ1x || !this.m8e || this.m8e.parentNode == this.fQ1x) return this;
        this.fQ1x.appendChild(this.m8e);
        return this
    };
    b8h.br9i = function() {
        a7h.mK3x(this.m8e);
        return this
    }
})(); (function() {
    var c8g = NEJ.P,
    Z9Q = NEJ.O,
    bn9e = NEJ.F,
    a7h = c8g("nej.e"),
    k8c = c8g("nej.u"),
    bc9T = c8g("nej.h"),
    N8F = c8g("nej.ui"),
    wr6l,
    bJW3x;
    if ( !! N8F.Pz0x) return;
    N8F.Pz0x = NEJ.C();
    wr6l = N8F.Pz0x.O8G(N8F.ee0x);
    bJW3x = N8F.Pz0x.cl9c;
    wr6l.bj9a = function(e8e) {
        this.bk9b(e8e);
        this.vF6z("oncontentready", e8e.oncontentready || this.cim9d.g8c(this));
        this.cil9c = !!e8e.nohack;
        this.cik9b = !!e8e.destroyable;
        this.Jw7p(e8e.content)
    };
    wr6l.bA9r = function() {
        this.z8r("onbeforerecycle");
        this.bF9w();
        this.XE3x();
        this.Jw7p("");
        a7h.eT0x(this.m8e, {
            top: "",
            left: ""
        })
    };
    wr6l.cim9d = bn9e;
    wr6l.Jv7o = bn9e;
    wr6l.XE3x = function() {
        a7h.mK3x(this.m8e);
        if ( !! this.ng3x) {
            this.ng3x = bc9T.bqi8a(this.m8e);
            delete this.ng3x
        }
    };
    wr6l.Jw7p = function(bl9c) {
        if (!this.m8e || !this.zf7Y || bl9c == null) return this;
        bl9c = bl9c || "";
        k8c.fw1x(bl9c) ? this.zf7Y.innerHTML = bl9c: this.zf7Y.appendChild(bl9c);
        this.z8r("oncontentready", this.zf7Y);
        return this
    };
    wr6l.gj1x = function(be9V) {
        var C8u = be9V.top;
        if (C8u != null) {
            C8u += "px";
            a7h.Y9P(this.m8e, "top", C8u);
            a7h.Y9P(this.ng3x, "top", C8u)
        }
        var C8u = be9V.left;
        if (C8u != null) {
            C8u += "px";
            a7h.Y9P(this.m8e, "left", C8u);
            a7h.Y9P(this.ng3x, "left", C8u)
        }
        return this
    };
    wr6l.L8D = function() {
        a7h.Y9P(this.m8e, "visibility", "hidden");
        bJW3x.L8D.apply(this, arguments);
        this.Jv7o();
        a7h.Y9P(this.m8e, "visibility", "");
        if (!this.cil9c) {
            this.ng3x = bc9T.ng3x(this.m8e)
        }
        return this
    };
    wr6l.br9i = function() {
        this.cik9b ? this.S8K() : this.XE3x();
        return this
    }
})(); (function() {
    var c8g = NEJ.P,
    bn9e = NEJ.F,
    k8c = c8g("nej.u"),
    a7h = c8g("nej.e"),
    N8F = c8g("nej.ui"),
    ze7X;
    if ( !! N8F.XS3x) return;
    N8F.XS3x = NEJ.C();
    ze7X = N8F.XS3x.O8G(N8F.ee0x);
    ze7X.bj9a = function(e8e) {
        this.Pw0x();
        this.bk9b(this.cii9Z(e8e));
        this.bW9N.onbeforerecycle = this.S8K.g8c(this);
        this.om3x = this.brK9B()
    };
    ze7X.bA9r = function() {
        this.z8r("onbeforerecycle");
        this.bF9w();
        delete this.bW9N;
        a7h.mK3x(this.m8e);
        var zd7W = this.om3x;
        if ( !! zd7W) {
            delete this.om3x;
            zd7W.S8K()
        }
    };
    ze7X.brK9B = bn9e;
    ze7X.cii9Z = function(e8e) {
        var o8g = {};
        k8c.ey0x(e8e,
        function(p8h, J8B) {
            this.bW9N.hasOwnProperty(J8B) ? this.bW9N[J8B] = p8h: o8g[J8B] = p8h
        },
        this);
        return o8g
    };
    ze7X.Pw0x = function() {
        this.bW9N = {
            clazz: "",
            parent: null,
            content: this.m8e,
            destroyable: !1,
            oncontentready: null,
            nohack: !1
        }
    };
    ze7X.L8D = function() {
        if ( !! this.om3x) this.om3x.L8D();
        this.z8r("onaftershow");
        return this
    };
    ze7X.br9i = function() {
        if ( !! this.om3x) this.om3x.br9i();
        return this
    }
})(); (function() {
    var c8g = NEJ.P,
    eb0x = c8g("nej.g"),
    bc9T = c8g("nej.h"),
    a7h = c8g("nej.e"),
    k8c = c8g("nej.u"),
    h8b = c8g("nej.v"),
    N8F = c8g("nej.ui"),
    Pu0x,
    bJS3x;
    if ( !! N8F.Ju7n) return;
    var io1x = a7h.sp5u(".#<uispace>{position:fixed;_position:absolute;z-index:100;top:0;bottom:0;left:0;right:0;width:100%;height:100%;background-image:url(" + eb0x.bnm8e + ");}");
    N8F.Ju7n = NEJ.C();
    Pu0x = N8F.Ju7n.O8G(N8F.ee0x);
    bJS3x = N8F.Ju7n.cl9c;
    Pu0x.bj9a = function(e8e) {
        this.bk9b(e8e);
        var bl9c = e8e.content || "&nbsp;";
        k8c.fw1x(bl9c) ? this.m8e.innerHTML = bl9c: this.m8e.appendChild(bl9c)
    };
    Pu0x.bA9r = function() {
        this.bF9w();
        this.m8e.innerHTML = "&nbsp;"
    };
    Pu0x.ca9R = function() {
        this.lw2x = io1x
    };
    Pu0x.L8D = function() {
        bc9T.bqf8X(this.m8e);
        bJS3x.L8D.apply(this, arguments);
        return this
    }
})(); (function() {
    var c8g = NEJ.P,
    Z9Q = NEJ.O,
    a7h = c8g("nej.e"),
    h8b = c8g("nej.v"),
    N8F = c8g("nej.ut"),
    uU6O;
    if ( !! N8F.tE5J) return;
    N8F.tE5J = NEJ.C();
    uU6O = N8F.tE5J.O8G(N8F.cD0x);
    uU6O.bj9a = function(e8e) {
        this.bk9b(e8e);
        this.chT9K = !!e8e.overflow;
        this.m8e = a7h.B8t(e8e.body);
        this.yY7R = a7h.B8t(e8e.view) || a7h.bQm4q(this.m8e);
        this.bJL3x = a7h.B8t(e8e.mbar) || this.m8e;
        this.Zk4o = parseInt(e8e.direction) || 0;
        if ( !! e8e.isRelative) {
            this.m8e.style.position = "relative";
            this.brG9x = true;
            this.brF9w()
        }
        this.bT9K([[document, "mouseup", this.brE9v.g8c(this)], [document, "mousemove", this.brC9t.g8c(this)], [this.bJL3x, "mousedown", this.Pq0x.g8c(this)]])
    };
    uU6O.brF9w = function() {
        if ( !! this.brG9x) {
            this.Jp7i = a7h.hL1x(this.m8e, this.yY7R);
            this.Jp7i.x -= parseInt(a7h.cV0x(this.m8e, "left")) || 0;
            this.Jp7i.y -= parseInt(a7h.cV0x(this.m8e, "top")) || 0
        }
    };
    uU6O.bA9r = function() {
        this.bF9w();
        delete this.m8e;
        delete this.bJL3x;
        delete this.yY7R
    };
    uU6O.brz9q = function() {
        return {
            x: Math.max(this.yY7R.clientWidth, this.yY7R.scrollWidth) - this.m8e.offsetWidth,
            y: Math.max(this.yY7R.clientHeight, this.yY7R.scrollHeight) - this.m8e.offsetHeight
        }
    };
    uU6O.Pq0x = function(d8f) {
        h8b.bf9W(d8f);
        if ( !! this.hp1x) return;
        this.hp1x = {
            x: h8b.iW2x(d8f),
            y: h8b.lJ3x(d8f)
        };
        this.bJx3x = this.brz9q();
        this.z8r("ondragstart", d8f)
    };
    uU6O.brC9t = function(d8f) {
        if (!this.hp1x) return;
        var be9V = {
            x: h8b.iW2x(d8f),
            y: h8b.lJ3x(d8f)
        };
        var oE3x = be9V.x - this.hp1x.x,
        pe4i = be9V.y - this.hp1x.y,
        C8u = {
            top: (parseInt(a7h.cV0x(this.m8e, "top")) || 0) + pe4i,
            left: (parseInt(a7h.cV0x(this.m8e, "left")) || 0) + oE3x
        };
        if (this.brG9x) {
            this.brF9w();
            C8u.top = C8u.top + this.Jp7i.y;
            C8u.left = C8u.left + this.Jp7i.x
        }
        this.hp1x = be9V;
        this.gj1x(C8u)
    };
    uU6O.brE9v = function(d8f) {
        if (!this.hp1x) return;
        delete this.bJx3x;
        delete this.hp1x;
        this.z8r("ondragend", this.brw9n())
    };
    uU6O.gj1x = function(d8f) {
        if (!this.chT9K) {
            var bJp3x = this.bJx3x || this.brz9q();
            d8f.top = Math.min(bJp3x.y, Math.max(0, d8f.top));
            d8f.left = Math.min(bJp3x.x, Math.max(0, d8f.left))
        }
        var cb9S = this.m8e.style;
        if (this.brG9x) {
            this.brF9w();
            d8f.top = d8f.top - this.Jp7i.y;
            d8f.left = d8f.left - this.Jp7i.x
        }
        if (this.Zk4o == 0 || this.Zk4o == 2) cb9S.top = d8f.top + "px";
        if (this.Zk4o == 0 || this.Zk4o == 1) cb9S.left = d8f.left + "px";
        this.z8r("onchange", d8f);
        return this
    };
    uU6O.brw9n = function() {
        return {
            left: parseInt(a7h.cV0x(this.m8e, "left")) || 0,
            top: parseInt(a7h.cV0x(this.m8e, "top")) || 0
        }
    }
})(); (function() {
    var c8g = NEJ.P,
    Z9Q = NEJ.O,
    a7h = NEJ.P("nej.e"),
    h8b = NEJ.P("nej.v"),
    k8c = NEJ.P("nej.u"),
    H8z = NEJ.P("nej.ut"),
    N8F = NEJ.P("nej.ui"),
    io1x,
    gt1x,
    b8h,
    K8C;
    if ( !! N8F.baI4M) return;
    N8F.baI4M = NEJ.C();
    b8h = N8F.baI4M.O8G(N8F.Pz0x);
    K8C = N8F.baI4M.cl9c;
    b8h.cs9j = function() {
        this.rs4w = {};
        this.kg2x = {
            onchange: this.brC9t.g8c(this)
        };
        this.cx9o()
    };
    b8h.bj9a = function(e8e) {
        this.bk9b(e8e);
        this.cgZ9Q(e8e.mask);
        this.cgR8J(e8e.align);
        this.yW7P(e8e.title);
        if (!e8e.draggable) return;
        this.ip1x = H8z.tE5J.A8s(this.kg2x)
    };
    b8h.bA9r = function() {
        this.bF9w();
        delete this.qw4A;
        delete this.Pj0x;
        if ( !! this.yZ7S) {
            this.yZ7S.S8K();
            delete this.yZ7S
        }
        if ( !! this.ip1x) {
            this.ip1x.S8K();
            delete this.ip1x
        }
    };
    b8h.ca9R = function() {
        this.lw2x = io1x;
        this.cd9U = gt1x
    };
    b8h.bS9J = function() {
        this.cc9T();
        var i8a = a7h.db0x(this.m8e);
        this.zf7Y = i8a[1];
        this.kg2x.mbar = i8a[0];
        this.kg2x.body = this.m8e;
        h8b.s8k(i8a[2], "mousedown", this.cgN8F.g8c(this));
        h8b.s8k(this.kg2x.mbar, "mousedown", this.Pq0x.g8c(this));
        this.bJh2x = a7h.db0x(this.kg2x.mbar)[0]
    };
    b8h.cgN8F = function(d8f) {
        h8b.bf9W(d8f);
        this.z8r("onclose", d8f);
        if (!d8f.stopped) {
            this.br9i()
        }
    };
    b8h.Pq0x = function(d8f) {
        h8b.z8r(document, "click")
    };
    b8h.brC9t = function(d8f) {
        if (!this.ng3x) return;
        a7h.eT0x(this.ng3x, {
            top: d8f.top + "px",
            left: d8f.left + "px"
        })
    };
    b8h.Jv7o = function() {
        var eF0x = [function() {
            return 0
        },
        function(nr3x, CX8P, be9V, J8B) {
            if (J8B == "top" && window.top != window.self) {
                var bbS5X = 0,
                Da8S = 0;
                if (top.g_topBarHeight) bbS5X = top.g_topBarHeight;
                if (top.g_bottomBarShow && top.g_bottomBarHeight) Da8S = top.g_bottomBarHeight;
                if (nr3x.top <= bbS5X) {
                    var brt9k = Math.max(0, (CX8P.height - (bbS5X - nr3x.top) - Da8S - be9V.height) / 2);
                    return brt9k + bbS5X
                } else {
                    var brt9k = Math.max(0, (CX8P.height - Da8S - be9V.height) / 2);
                    return brt9k + nr3x.top
                }
            }
            return Math.max(0, nr3x[J8B] + (CX8P[hS1x[J8B]] - be9V[hS1x[J8B]]) / 2)
        },
        function(nr3x, CX8P, be9V, J8B) {
            return nr3x[J8B] + (CX8P[hS1x[J8B]] - be9V[hS1x[J8B]])
        }],
        cgF8x = ["left", "top"],
        hS1x = {
            left: "width",
            top: "height"
        };
        return function() {
            var C8u = {},
            cb9S = this.m8e.style,
            jj2x = a7h.oQ4U(),
            nr3x = {
                left: jj2x.scrollLeft,
                top: jj2x.scrollTop
            },
            CX8P = {
                width: jj2x.clientWidth,
                height: jj2x.clientHeight
            },
            be9V = {
                width: this.m8e.offsetWidth,
                height: this.m8e.offsetHeight
            },
            dl0x = {
                left: jj2x.clientWidth - this.m8e.offsetWidth,
                top: jj2x.clientHeight - this.m8e.offsetHeight
            };
            k8c.bb9S(cgF8x,
            function(J8B, r8j) {
                var dp0x = eF0x[this.qw4A[r8j]];
                if (!dp0x) return;
                C8u[J8B] = dp0x(nr3x, CX8P, be9V, J8B)
            },
            this);
            this.gj1x(C8u)
        }
    } ();
    b8h.cgw8o = function() {
        if (!this.yZ7S) {
            if (!this.Pj0x) return;
            this.rs4w.parent = this.fQ1x;
            this.yZ7S = this.Pj0x.A8s(this.rs4w)
        }
        this.yZ7S.L8D()
    };
    b8h.XE3x = function() {
        if ( !! this.yZ7S) this.yZ7S.br9i();
        K8C.XE3x.apply(this, arguments)
    };
    b8h.cgZ9Q = function(kI2x) {
        if ( !! kI2x) {
            if (kI2x instanceof N8F.Ju7n) {
                this.yZ7S = kI2x;
                return
            }
            if (k8c.gr1x(kI2x)) {
                this.Pj0x = kI2x;
                return
            }
            this.Pj0x = N8F.Ju7n;
            if (k8c.fw1x(kI2x)) this.rs4w.clazz = kI2x;
            return
        }
        this.Pj0x = null
    };
    b8h.yW7P = function(ec0x, dL0x) {
        if ( !! this.bJh2x) {
            var bbY5d = !dL0x ? "innerText": "innerHTML";
            this.bJh2x[bbY5d] = ec0x || "标题"
        }
        return this
    };
    b8h.cgR8J = function() {
        var cZ0x = /\s+/,
        cgv8n = {
            left: 0,
            center: 1,
            right: 2,
            auto: 3
        },
        cgu8m = {
            top: 0,
            middle: 1,
            bottom: 2,
            auto: 3
        };
        return function(nl3x) {
            this.qw4A = (nl3x || "").split(cZ0x);
            var cf9W = cgv8n[this.qw4A[0]];
            if (cf9W == null) cf9W = 1;
            this.qw4A[0] = cf9W;
            var cf9W = cgu8m[this.qw4A[1]];
            if (cf9W == null) cf9W = 1;
            this.qw4A[1] = cf9W;
            return this
        }
    } ();
    b8h.L8D = function() {
        K8C.L8D.apply(this, arguments);
        this.cgw8o();
        return this
    };
    io1x = a7h.sp5u(".#<uispace>{position:absolute;z-index:1000;border:1px solid #aaa;background:#fff;}.#<uispace> .zbar{line-height:30px;background:#8098E7;border-bottom:1px solid #aaa;}.#<uispace> .zcnt{padding:10px 5px;}.#<uispace> .zttl{margin-right:20px;text-align:left;}.#<uispace> .zcls{position:absolute;top:5px;right:0;width:20px;height:20px;line-height:20px;cursor:pointer;}");
    gt1x = a7h.in1x('<div class="' + io1x + '"><div class="zbar"><div class="zttl">标题</div></div><div class="zcnt"></div><span class="zcls" title="关闭窗体">×</span></div>')
})(); (function() {
    var c8g = NEJ.P,
    k8c = c8g("nej.u"),
    N8F = c8g("nej.ui"),
    brr9i;
    if ( !! N8F.bcC5H) return;
    N8F.bcC5H = NEJ.C();
    brr9i = N8F.bcC5H.O8G(N8F.XS3x);
    brr9i.brK9B = function() {
        return N8F.baI4M.A8s(this.bW9N)
    };
    brr9i.Pw0x = function() {
        N8F.bcC5H.cl9c.Pw0x.apply(this, arguments);
        this.bW9N.mask = null;
        this.bW9N.title = "标题";
        this.bW9N.align = "";
        this.bW9N.draggable = !1;
        this.bW9N.onclose = null
    }
})(); (function() {
    var c8g = NEJ.P,
    a7h = c8g("nej.e"),
    ba9R = c8g("nej.ui"),
    n8f = c8g("nm.l"),
    b8h,
    K8C;
    n8f.ei0x = NEJ.C();
    b8h = n8f.ei0x.O8G(ba9R.bcC5H);
    b8h.bj9a = function(e8e) {
        e8e.clazz = "m-layer z-show " + (e8e.clazz || "");
        e8e.nohack = true;
        e8e.draggable = true;
        this.bk9b(e8e)
    };
    b8h.dG0x = function(f8d, bE9v) {
        if (!f8d) return;
        a7h.Y9P(f8d, "display", !bE9v ? "none": "");
        f8d.lastChild.innerText = bE9v || ""
    };
    b8h.dO0x = function(gl1x, cQ0x, Ph0x, Pg0x) {
        var dT0x = "js-lock";
        if (cQ0x === undefined) return a7h.by9p(gl1x, dT0x); ! cQ0x ? a7h.v8n(gl1x, dT0x) : a7h.w8o(gl1x, dT0x);
        gl1x.firstChild.innerText = !cQ0x ? Ph0x: Pg0x
    };
    n8f.ei0x.L8D = function(e8e) {
        e8e = e8e || {};
        if (e8e.mask === undefined) e8e.mask = "m-mask";
        if (e8e.parent === undefined) e8e.parent = document.body;
        if (e8e.draggable === undefined) e8e.draggable = true; !! this.eX0x && this.eX0x.S8K();
        this.eX0x = this.A8s(e8e);
        this.eX0x.L8D(e8e);
        return this.eX0x
    };
    n8f.ei0x.br9i = function() { !! this.eX0x && this.eX0x.S8K()
    }
})(); (function() {
    var c8g = NEJ.P,
    Z9Q = NEJ.O,
    a7h = c8g("nej.e"),
    h8b = c8g("nej.v"),
    k8c = c8g("nej.u"),
    q8i = c8g("nm.d"),
    l8d = c8g("nm.x"),
    n8f = c8g("nm.l"),
    b8h,
    K8C;
    n8f.brp9g = NEJ.C();
    b8h = n8f.brp9g.O8G(n8f.ei0x);
    K8C = n8f.brp9g.cl9c;
    b8h.bj9a = function(e8e) {
        this.bk9b(e8e);
        if (e8e.bubble === undefined) e8e.bubble = true;
        this.Pf0x = e8e.bubble;
        this.qh4l = e8e.message || ""
    };
    b8h.ca9R = function() {
        this.cd9U = a7h.in1x('<div class="lyct f-cb f-tc"></div>')
    };
    b8h.bS9J = function() {
        this.cc9T();
        h8b.s8k(this.m8e, "click", this.cG0x.g8c(this))
    };
    b8h.cG0x = function(d8f) {
        var f8d = h8b.U8M(d8f, "d:action");
        if (!f8d) return;
        if (f8d.href) h8b.cm9d(d8f);
        if (a7h.u8m(f8d, "action") == "close") this.br9i();
        if (this.Pf0x === !1) h8b.si5n(d8f);
        this.z8r("onaction", a7h.u8m(f8d, "action"))
    };
    b8h.L8D = function() {
        K8C.L8D.call(this);
        this.m8e.innerHTML = this.qh4l
    };
    var gq1x = a7h.et0x('<div class="f-fs1" style="line-height:22px;">${message|default:""}</div><div class="lybtn">{list buttons as item}<a hidefocus="true" class="u-btn2 ${item.klass} {if item.style}${item.style}{else}u-btn2-w2{/if}" href="javascript:;" {if !!item.action}data-action="${item.action}"{/if}><i>${item.text}</i></a>{/list}</div>');
    l8d.mM3x = function() {
        var eE0x;
        var cv9m;
        var brn9e = function(fx1x, W8O) {
            if (k8c.gr1x(fx1x, "function") && fx1x(W8O) != -1) cv9m.S8K()
        };
        var zj7c = function() { !! cv9m && cv9m.br9i()
        };
        return function(e8e) {
            clearTimeout(eE0x);
            e8e = e8e || {};
            e8e.title = e8e.title || "提示";
            e8e.clazz = e8e.clazz || "";
            e8e.parent = e8e.parent || document.body;
            e8e.buttons = e8e.buttons || [];
            e8e.message = a7h.bX9O(gq1x, e8e);
            e8e.onaction = brn9e.g8c(null, e8e.action);
            if (e8e.mask === undefined) e8e.mask = true;
            if (e8e.draggable === undefined) e8e.draggable = true; !! cv9m && cv9m.S8K();
            cv9m = n8f.brp9g.A8s(e8e);
            cv9m.L8D();
            if (e8e.autoclose) eE0x = setTimeout(zj7c.g8c(null), 2e3);
            return cv9m
        }
    } ();
    l8d.fh0x = function(e8e) {
        e8e = e8e || {};
        e8e.clazz = e8e.clazz || "m-layer-w1";
        e8e.buttons = [{
            klass: "u-btn2-2",
            action: "close",
            text: e8e.btntxt || "确定"
        }];
        var cv9m = l8d.mM3x(e8e);
        return cv9m
    };
    l8d.gD1x = function(e8e) {
        e8e = e8e || {};
        e8e.clazz = e8e.clazz || "m-layer-w2";
        e8e.buttons = [{
            klass: "u-btn2-2",
            action: "ok",
            text: e8e.btnok || "确定",
            style: e8e.okstyle || ""
        },
        {
            klass: "u-btn2-1",
            action: "close",
            text: e8e.btncc || "取消",
            style: e8e.ccstyle || ""
        }];
        var cv9m = l8d.mM3x(e8e);
        return cv9m
    }
})(); (function() {
    var c8g = NEJ.P,
    bn9e = NEJ.F,
    a7h = c8g("nej.e"),
    h8b = c8g("nej.v"),
    k8c = c8g("nej.u");
    a7h.cgb8T = function() {
        var go1x = /[\r\n]/gi,
        Q8I = {};
        var cga8S = function(cF0x) {
            return (cF0x || "").replace(go1x, "aa").length
        };
        var bIU2x = function(D8v) {
            var bd9U = Q8I[D8v],
            bIQ2x = a7h.B8t(D8v),
            pU4Y = a7h.B8t(D8v + "-counter");
            if (!bIQ2x || !bd9U) return;
            var d8f = {
                input: bIQ2x.value
            };
            d8f.length = bd9U.onlength(d8f.input);
            d8f.delta = bd9U.max - d8f.length;
            bd9U.onchange(d8f);
            pU4Y.innerHTML = d8f.value || "剩余" + d8f.delta + "个字"
        };
        return function(G8y, e8e) {
            var D8v = a7h.kZ2x(G8y);
            if (!D8v || !!Q8I[D8v]) return;
            var bd9U = NEJ.X({},
            e8e);
            bd9U.onchange = bd9U.onchange || bn9e;
            bd9U.onlength = cga8S;
            if (!bd9U.max) {
                var bIP2x = parseInt(a7h.ga1x(D8v, "maxlength")),
                bIO2x = parseInt(a7h.u8m(D8v, "maxLength"));
                bd9U.max = bIP2x || bIO2x || 100;
                if (!bIP2x && !!bIO2x) bd9U.onlength = k8c.fp1x
            }
            Q8I[D8v] = bd9U;
            h8b.s8k(D8v, "input", bIU2x.g8c(null, D8v));
            var f8d = a7h.Kn7g(D8v, {
                nid: bd9U.nid || "js-counter",
                clazz: bd9U.clazz
            });
            bd9U.xid = D8v + "-counter";
            f8d.id = bd9U.xid;
            bIU2x(D8v)
        }
    } ()
})(); (function() {
    var c8g = NEJ.P,
    a7h = c8g("nej.e"),
    bc9T = c8g("nej.h");
    bc9T.bri9Z = function(G8y, dS0x) {}
})(); (function() {
    var c8g = NEJ.P,
    bn9e = NEJ.F,
    N8F = c8g("nej.p"),
    a7h = c8g("nej.e"),
    h8b = c8g("nej.v"),
    bc9T = c8g("nej.h");
    if (N8F.mF3x.trident) return;
    bc9T.bri9Z = function() {
        var Q8I = {};
        var KH7A = function(d8f) {
            var dc0x = h8b.U8M(d8f);
            if ( !! dc0x.value) return;
            a7h.Y9P(a7h.Kn7g(dc0x), "display", "none")
        };
        var DY9P = function(d8f) {
            var dc0x = h8b.U8M(d8f);
            if ( !! dc0x.value) return;
            a7h.Y9P(a7h.Kn7g(dc0x), "display", "")
        };
        var cfK8C = function(dc0x, dS0x) {
            var D8v = a7h.kZ2x(dc0x),
            iw2x = a7h.Kn7g(dc0x, {
                tag: "label",
                clazz: dS0x
            });
            iw2x.htmlFor = D8v;
            var cJ0x = a7h.ga1x(dc0x, "placeholder") || "";
            iw2x.innerText = cJ0x == "null" ? "": cJ0x;
            var ch9Y = dc0x.offsetHeight + "px";
            a7h.eT0x(iw2x, {
                left: 0,
                display: !dc0x.value ? "": "none"
            })
        };
        return bc9T.bri9Z.er0x(function(d8f) {
            d8f.stopped = !0;
            var bh9Y = d8f.args,
            dc0x = a7h.B8t(bh9Y[0]);
            if ( !! Q8I[dc0x.id]) return;
            cfK8C(dc0x, bh9Y[1]);
            Q8I[dc0x.id] = !0;
            h8b.s8k(dc0x, "blur", DY9P.g8c(null));
            h8b.s8k(dc0x, "focus", KH7A.g8c(null))
        })
    } ()
})(); (function() {
    var c8g = NEJ.P,
    bc9T = c8g("nej.h"),
    a7h = c8g("nej.e"),
    cP0x = c8g("nej.x");
    a7h.fV1x = cP0x.fV1x = function(G8y, dS0x) {
        bc9T.bri9Z(G8y, a7h.u8m(G8y, "holder") || dS0x || "js-placeholder");
        return this
    };
    cP0x.isChange = !0
})(); (function() {
    var c8g = NEJ.P,
    Z9Q = NEJ.O,
    bn9e = NEJ.F,
    a7h = c8g("nej.e"),
    h8b = c8g("nej.v"),
    k8c = c8g("nej.u"),
    N8F = c8g("nej.ut"),
    hu1x;
    if ( !! N8F.Pc0x) return;
    N8F.Pc0x = NEJ.C();
    hu1x = N8F.Pc0x.O8G(N8F.cD0x);
    hu1x.cs9j = function() {
        this.cx9o();
        this.Ff9W = {
            tp: {
                nid: "js-nej-tp"
            },
            ok: {
                nid: "js-nej-ok"
            },
            er: {
                nid: "js-nej-er"
            }
        }
    };
    hu1x.bj9a = function(e8e) {
        this.bk9b(e8e);
        this.fY1x = document.forms[e8e.form] || a7h.B8t(e8e.form);
        this.bT9K([[this.fY1x, "keypress", this.cfH8z.g8c(this)]]);
        this.qh4l = e8e.message || {};
        this.qh4l.pass = this.qh4l.pass || "&nbsp;";
        var eZ0x = this.pl4p(this.fY1x, "focusMode", 1);
        if (!isNaN(eZ0x)) {
            this.bIH2x = {
                mode: eZ0x,
                clazz: e8e.focus
            }
        }
        this.zt7m = e8e.holder;
        this.Ff9W.tp.clazz = "js-mhd " + (e8e.tip || "js-tip");
        this.Ff9W.ok.clazz = "js-mhd " + (e8e.pass || "js-pass");
        this.Ff9W.er.clazz = "js-mhd " + (e8e.error || "js-error");
        this.bIF2x = e8e.invalid || "js-invalid";
        this.cfD8v(e8e);
        this.ge1x();
        if ( !! this.zu7n) this.zu7n.focus()
    };
    hu1x.bA9r = function() {
        this.bF9w();
        delete this.qh4l;
        delete this.zu7n;
        delete this.FI9z;
        delete this.fY1x;
        delete this.bIE2x;
        delete this.OX0x
    };
    hu1x.pl4p = function(f8d, wl6f, t8l) {
        var C8u = a7h.u8m(f8d, wl6f);
        switch (t8l) {
        case 1:
            return parseInt(C8u);
        case 2:
            return (C8u || "").toLowerCase() == "true";
        case 3:
            return this.brg9X(C8u)
        }
        return C8u
    };
    hu1x.zB7u = function(C8u, t8l) {
        if (t8l == "date") return this.brg9X(C8u);
        return parseInt(C8u)
    };
    hu1x.WU3x = function() {
        var jD2x = /^button|submit|reset|image|hidden|file$/i;
        return function(f8d) {
            f8d = this.B8t(f8d) || f8d;
            var t8l = f8d.type;
            return !! f8d.name && !jD2x.test(f8d.type || "")
        }
    } ();
    hu1x.cfr8j = function() {
        var jD2x = /^hidden$/i;
        return function(f8d) {
            if (this.WU3x(f8d)) return ! 0;
            f8d = this.B8t(f8d) || f8d;
            var t8l = f8d.type || "";
            return jD2x.test(t8l)
        }
    } ();
    hu1x.brg9X = function() {
        var cZ0x = /[-\/]/;
        var cfo8g = function(C8u) {
            if (!C8u) return "";
            C8u = C8u.split(cZ0x);
            C8u.push(C8u.shift());
            return C8u.join("/")
        };
        return function(C8u) {
            if ((C8u || "").toLowerCase() == "now") return + (new Date);
            return Date.parse(cfo8g(C8u))
        }
    } ();
    hu1x.cfH8z = function(d8f) {
        if (d8f.keyCode != 13) return;
        this.z8r("onenter", d8f)
    };
    hu1x.cfn8f = function(D8v, T8L) {
        var rD4H = this.OX0x[T8L],
        C8u = this.pl4p(D8v, T8L);
        if (!C8u || !rD4H) return;
        this.Xh3x(D8v, rD4H);
        this.brb9S(D8v, T8L, C8u)
    };
    hu1x.cfh8Z = function(D8v, T8L) {
        try {
            var bIr2x = this.pl4p(D8v, T8L);
            if (!bIr2x) return;
            var C8u = new RegExp(bIr2x);
            this.brb9S(D8v, T8L, C8u);
            this.Xh3x(D8v, this.OX0x[T8L])
        } catch(e) {}
    };
    hu1x.cff8X = function(D8v, T8L) {
        var rD4H = this.OX0x[T8L];
        if ( !! rD4H && this.pl4p(D8v, T8L, 2)) this.Xh3x(D8v, rD4H)
    };
    hu1x.bra9R = function(D8v, T8L, C8u) {
        C8u = parseInt(C8u);
        if (isNaN(C8u)) return;
        this.brb9S(D8v, T8L, C8u);
        this.Xh3x(D8v, this.OX0x[T8L])
    };
    hu1x.bIl2x = function(D8v, T8L) {
        this.bra9R(D8v, T8L, this.pl4p(D8v, T8L))
    };
    hu1x.bIk2x = function(D8v, T8L) {
        this.bra9R(D8v, T8L, a7h.ga1x(D8v, T8L))
    };
    hu1x.bIj2x = function(D8v, T8L, t8l) {
        var C8u = this.zB7u(this.pl4p(D8v, T8L), this.pl4p(D8v, "type"));
        this.bra9R(D8v, T8L, C8u)
    };
    hu1x.ceO8G = function() {
        var go1x = /^input|textarea$/i;
        var KH7A = function(d8f) {
            this.pp4t(h8b.U8M(d8f))
        };
        var DY9P = function(d8f) {
            var f8d = h8b.U8M(d8f);
            if (!this.pl4p(f8d, "ignore", 2)) {
                this.bIh2x(f8d)
            }
        };
        return function(f8d) {
            if (this.pl4p(f8d, "autoFocus", 2)) this.zu7n = f8d;
            var qb4f = a7h.ga1x(f8d, "placeholder");
            if ( !! qb4f && qb4f != "null") a7h.fV1x(f8d, this.zt7m);
            if ( !! this.bIH2x && go1x.test(f8d.tagName)) a7h.mc3x(f8d, this.bIH2x);
            var D8v = a7h.kZ2x(f8d);
            this.cff8X(D8v, "required");
            this.cfn8f(D8v, "type");
            this.cfh8Z(D8v, "pattern");
            this.bIk2x(D8v, "maxlength");
            this.bIk2x(D8v, "minlength");
            this.bIl2x(D8v, "maxLength");
            this.bIl2x(D8v, "minLength");
            this.bIj2x(D8v, "min");
            this.bIj2x(D8v, "max");
            var T8L = f8d.name;
            this.qh4l[T8L + "-tip"] = this.pl4p(f8d, "tip");
            this.qh4l[T8L + "-error"] = this.pl4p(f8d, "message");
            this.pp4t(f8d);
            var bu9l = this.FI9z[D8v],
            j8b = (bu9l || Z9Q).data || Z9Q,
            OM0x = this.pl4p(f8d, "counter", 2);
            if (OM0x && (j8b.maxlength || j8b.maxLength)) {
                a7h.cgb8T(D8v, {
                    nid: this.Ff9W.tp.nid,
                    clazz: "js-counter"
                })
            }
            if ( !! bu9l && go1x.test(f8d.tagName)) {
                this.bT9K([[f8d, "focus", KH7A.g8c(this)], [f8d, "blur", DY9P.g8c(this)]])
            } else if (this.pl4p(f8d, "focus", 2)) {
                this.bT9K([[f8d, "focus", KH7A.g8c(this)]])
            }
        }
    } ();
    hu1x.cfD8v = function() {
        var Ch8Z = {
            number: /^[\d]+$/i,
            url: /^[a-z]+:\/\/(?:[\w-]+\.)+[a-z]{2,6}.*$/i,
            email: /^[\w-\.]+@(?:[\w-]+\.)+[a-z]{2,6}$/i,
            date: function(v) {
                return ! v || !isNaN(this.brg9X(v))
            }
        };
        var ceJ8B = {
            required: function(f8d) {
                var t8l = f8d.type,
                ceI8A = !f8d.value,
                ceH8z = (t8l == "checkbox" || t8l == "radio") && !f8d.checked;
                if (ceH8z || ceI8A) return - 1
            },
            type: function(f8d, e8e) {
                var cZ0x = this.bIE2x[e8e.type],
                eG0x = f8d.value.trim(),
                ceC8u = !!cZ0x.test && !cZ0x.test(eG0x),
                ceB8t = k8c.gr1x(cZ0x) && !cZ0x.call(this, eG0x);
                if (ceC8u || ceB8t) return - 2
            },
            pattern: function(f8d, e8e) {
                if (!e8e.pattern.test(f8d.value)) return - 3
            },
            maxlength: function(f8d, e8e) {
                if (f8d.value.length > e8e.maxlength) return - 4
            },
            minlength: function(f8d, e8e) {
                if (f8d.value.length < e8e.minlength) return - 5
            },
            maxLength: function(f8d, e8e) {
                if (k8c.fp1x(f8d.value) > e8e.maxLength) return - 4
            },
            minLength: function(f8d, e8e) {
                if (k8c.fp1x(f8d.value) < e8e.minLength) return - 5
            },
            min: function(f8d, e8e) {
                var gB1x = this.zB7u(f8d.value, e8e.type);
                if (isNaN(gB1x) || gB1x < e8e.min) return - 6
            },
            max: function(f8d, e8e) {
                var gB1x = this.zB7u(f8d.value, e8e.type);
                if (isNaN(gB1x) || gB1x > e8e.max) return - 7
            }
        };
        return function(e8e) {
            this.bIE2x = NEJ.X(NEJ.X({},
            Ch8Z), e8e.type);
            this.OX0x = NEJ.X(NEJ.X({},
            ceJ8B), e8e.attr)
        }
    } ();
    hu1x.Xh3x = function(D8v, ys7l) {
        if (!k8c.gr1x(ys7l)) return;
        var bu9l = this.FI9z[D8v];
        if (!bu9l || !bu9l.func) {
            bu9l = bu9l || {};
            bu9l.func = [];
            this.FI9z[D8v] = bu9l
        }
        bu9l.func.push(ys7l)
    };
    hu1x.brb9S = function(D8v, T8L, C8u) {
        if (!T8L) return;
        var bu9l = this.FI9z[D8v];
        if (!bu9l || !bu9l.data) {
            bu9l = bu9l || {};
            bu9l.data = {};
            this.FI9z[D8v] = bu9l
        }
        bu9l.data[T8L] = C8u
    };
    hu1x.bIh2x = function(f8d) {
        f8d = this.B8t(f8d) || f8d;
        var bu9l = this.FI9z[a7h.kZ2x(f8d)];
        if (!f8d || !bu9l || !this.WU3x(f8d)) return ! 0;
        var o8g;
        k8c.ey0x(bu9l.func,
        function(eF0x) {
            o8g = eF0x.call(this, f8d, bu9l.data);
            return o8g != null
        },
        this);
        if (o8g == null) {
            var d8f = {
                target: f8d,
                form: this.fY1x
            };
            this.z8r("oncheck", d8f);
            o8g = d8f.value
        }
        var d8f = {
            target: f8d,
            form: this.fY1x
        };
        if (o8g != null) {
            d8f.code = o8g;
            this.z8r("oninvalid", d8f);
            if (!d8f.stopped) {
                this.cez8r(f8d, d8f.value || this.qh4l[f8d.name + o8g])
            }
        } else {
            this.z8r("onvalid", d8f);
            if (!d8f.stopped) this.cey8q(f8d, d8f.value)
        }
        return o8g == null
    };
    hu1x.yq7j = function() {
        var cex8p = function(bcy5D, bcI5N) {
            return bcy5D == bcI5N ? "block": "none"
        };
        var cet8l = function(f8d, t8l, bE9v) {
            var qb4f = bHV2x.call(this, f8d, t8l);
            if (!qb4f && !!bE9v) qb4f = a7h.Kn7g(f8d, this.Ff9W[t8l]);
            return qb4f
        };
        var bHV2x = function(f8d, t8l) {
            var qb4f;
            if (t8l == "tp") qb4f = a7h.B8t(f8d.name + "-tip");
            if (!qb4f) qb4f = a7h.F8x(f8d.parentNode, this.Ff9W[t8l].nid)[0];
            return qb4f
        };
        return function(f8d, bE9v, t8l) {
            f8d = this.B8t(f8d) || f8d;
            if (!f8d) return;
            t8l == "er" ? a7h.w8o(f8d, this.bIF2x) : a7h.v8n(f8d, this.bIF2x);
            var qb4f = cet8l.call(this, f8d, t8l, bE9v);
            if ( !! qb4f && !!bE9v) qb4f.innerHTML = bE9v;
            k8c.ey0x(this.Ff9W,
            function(C8u, J8B) {
                a7h.Y9P(bHV2x.call(this, f8d, J8B), "display", cex8p(t8l, J8B))
            },
            this)
        }
    } ();
    hu1x.pp4t = function(f8d, bE9v) {
        this.yq7j(f8d, bE9v || this.qh4l[f8d.name + "-tip"], "tp");
        return this
    };
    hu1x.cey8q = function(f8d, bE9v) {
        this.yq7j(f8d, bE9v || this.qh4l[f8d.name + "-pass"] || this.qh4l.pass, "ok");
        return this
    };
    hu1x.cez8r = function(f8d, bE9v) {
        this.yq7j(f8d, bE9v || this.qh4l[f8d.name + "-error"], "er");
        return this
    };
    hu1x.ir2x = function() {
        var go1x = /^(?:radio|checkbox)$/i;
        var cep8h = function(C8u) {
            return C8u == null ? "": C8u
        };
        var bHQ2x = function(C8u, f8d) {
            if (go1x.test(f8d.type || "")) {
                f8d.checked = C8u == f8d.value
            } else {
                f8d.value = cep8h(C8u)
            }
        };
        return function(T8L, C8u) {
            var f8d = this.B8t(T8L);
            if (!f8d) return this;
            if (f8d.tagName == "SELECT" || !f8d.length) {
                bHQ2x(C8u, f8d)
            } else {
                k8c.bb9S(f8d, bHQ2x.g8c(null, C8u))
            }
            return this
        }
    } ();
    hu1x.B8t = function(T8L) {
        return this.fY1x.elements[T8L]
    };
    hu1x.czd2x = function() {
        return this.fY1x
    };
    hu1x.YO3x = function() {
        var go1x = /^radio|checkbox$/i,
        jD2x = /^number|date$/;
        var ceg8Y = function(bv9m, f8d) {
            var T8L = f8d.name,
            C8u = f8d.value,
            bu9l = bv9m[T8L],
            t8l = this.pl4p(f8d, "type");
            if (jD2x.test(t8l)) C8u = this.zB7u(C8u, t8l);
            if (go1x.test(f8d.type) && !f8d.checked) {
                C8u = this.pl4p(f8d, "value");
                if (!C8u) return
            }
            if ( !! bu9l) {
                if (!k8c.eC0x(bu9l)) {
                    bu9l = [bu9l];
                    bv9m[T8L] = bu9l
                }
                bu9l.push(C8u)
            } else {
                bv9m[T8L] = C8u
            }
        };
        return function() {
            var o8g = {};
            k8c.bb9S(this.fY1x.elements,
            function(f8d) {
                if (this.cfr8j(f8d)) ceg8Y.call(this, o8g, f8d)
            },
            this);
            return o8g
        }
    } ();
    hu1x.Jf7Y = function() {
        var cef8X = function(f8d) {
            if (this.WU3x(f8d)) this.pp4t(f8d)
        };
        return function() {
            this.fY1x.reset();
            k8c.bb9S(this.fY1x.elements, cef8X, this);
            return this
        }
    } ();
    hu1x.cze2x = function() {
        this.fY1x.submit();
        return this
    };
    hu1x.ge1x = function() {
        var ced8V = function(f8d) {
            if (this.WU3x(f8d)) this.ceO8G(f8d)
        };
        return function() {
            this.FI9z = {};
            k8c.bb9S(this.fY1x.elements, ced8V, this);
            return this
        }
    } ();
    hu1x.cec8U = function(f8d) {
        f8d = this.B8t(f8d) || f8d;
        if ( !! f8d) return this.bIh2x(f8d);
        var o8g = !0;
        k8c.bb9S(this.fY1x.elements,
        function(f8d) {
            var ky2x = this.cec8U(f8d);
            o8g = o8g && ky2x
        },
        this);
        return o8g
    }
})(); (function() {
    var c8g = NEJ.P,
    Z9Q = NEJ.O,
    a7h = c8g("nej.e"),
    h8b = c8g("nej.v"),
    H8z = c8g("nej.ut"),
    k8c = c8g("nej.u"),
    l8d = c8g("nm.x"),
    n8f = c8g("nm.l"),
    b8h,
    K8C;
    n8f.Zv4z = NEJ.C();
    b8h = n8f.Zv4z.O8G(n8f.ei0x);
    K8C = n8f.Zv4z.cl9c;
    b8h.bS9J = function() {
        this.cc9T();
        h8b.s8k(this.m8e, "click", this.cG0x.g8c(this));
        h8b.s8k(document, "mousewheel", this.zI7B.g8c(this));
        if ( !! document.body.addEventListener) document.body.addEventListener("DOMMouseScroll", this.zI7B.g8c(this))
    };
    b8h.bj9a = function(e8e) {
        this.bk9b(e8e);
        if (e8e.jst) {
            this.m8e.innerHTML = a7h.bX9O(e8e.jst, e8e.data)
        } else if (e8e.ntp) {
            this.m8e.appendChild(a7h.dr0x(e8e.ntp))
        } else if (e8e.txt) {
            this.m8e.innerHTML = a7h.ih1x(e8e.txt)
        } else if (e8e.html) {
            this.m8e.innerHTML = e8e.html
        }
        var OE0x = this.m8e.getElementsByTagName("form");
        if (OE0x.length) {
            this.fY1x = H8z.Pc0x.A8s({
                form: OE0x[0]
            })
        }
        this.Dh8Z = a7h.db0x(this.m8e)[0]
    };
    b8h.bA9r = function() {
        this.z8r("ondestroy");
        this.bF9w();
        this.m8e.innerHTML = "";
        delete this.Dh8Z
    };
    b8h.cG0x = function(d8f) {
        var f8d = h8b.U8M(d8f, "d:action"),
        j8b = this.fY1x ? this.fY1x.YO3x() : null,
        d8f = {
            action: a7h.u8m(f8d, "action")
        };
        if (j8b) d8f.data = j8b;
        if (d8f.action) {
            this.z8r("onaction", d8f);
            if (d8f.stopped) return;
            this.br9i()
        }
    };
    b8h.zI7B = function(d8f) {
        if (!this.Dh8Z) return;
        h8b.bf9W(d8f);
        var dl0x = d8f.wheelDelta || -d8f.detail;
        this.Dh8Z.scrollTop -= dl0x
    };
    l8d.jK2x = function(e8e) {
        e8e.destroyable = e8e.destroyable || true;
        e8e.title = e8e.title || "提示";
        e8e.draggable = true;
        e8e.parent = document.body;
        e8e.mask = e8e.mask || true;
        var zd7W = n8f.Zv4z.A8s(e8e);
        zd7W.L8D();
        return zd7W
    }
})(); (function() {
    var p = NEJ.P("nej.u");
    var bHK2x = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
    OD0x = {},
    Dt8l = {};
    for (var i = 0,
    l = bHK2x.length,
    c; i < l; i++) {
        c = bHK2x.charAt(i);
        OD0x[i] = c;
        Dt8l[c] = i
    }
    var cdX8P = function(hZ1x) {
        var r8j = 0,
        c, o8g = [];
        while (r8j < hZ1x.length) {
            c = hZ1x[r8j];
            if (c < 128) {
                o8g.push(String.fromCharCode(c));
                r8j++
            } else if (c > 191 && c < 224) {
                o8g.push(String.fromCharCode((c & 31) << 6 | hZ1x[r8j + 1] & 63));
                r8j += 2
            } else {
                o8g.push(String.fromCharCode((c & 15) << 12 | (hZ1x[r8j + 1] & 63) << 6 | hZ1x[r8j + 2] & 63));
                r8j += 3
            }
        }
        return o8g.join("")
    };
    var cdW8O = function() {
        var he1x = /\r\n/g;
        return function(j8b) {
            j8b = j8b.replace(he1x, "\n");
            var o8g = [],
            oy3x = String.fromCharCode(237);
            if (oy3x.charCodeAt(0) < 0) for (var i = 0,
            l = j8b.length,
            c; i < l; i++) {
                c = j8b.charCodeAt(i);
                c > 0 ? o8g.push(c) : o8g.push(256 + c >> 6 | 192, 256 + c & 63 | 128)
            } else for (var i = 0,
            l = j8b.length,
            c; i < l; i++) {
                c = j8b.charCodeAt(i);
                if (c < 128) o8g.push(c);
                else if (c > 127 && c < 2048) o8g.push(c >> 6 | 192, c & 63 | 128);
                else o8g.push(c >> 12 | 224, c >> 6 & 63 | 128, c & 63 | 128)
            }
            return o8g
        }
    } ();
    var Je7X = function(hZ1x) {
        var r8j = 0,
        o8g = [],
        eZ0x = hZ1x.length % 3;
        if (eZ0x == 1) hZ1x.push(0, 0);
        if (eZ0x == 2) hZ1x.push(0);
        while (r8j < hZ1x.length) {
            o8g.push(OD0x[hZ1x[r8j] >> 2], OD0x[(hZ1x[r8j] & 3) << 4 | hZ1x[r8j + 1] >> 4], OD0x[(hZ1x[r8j + 1] & 15) << 2 | hZ1x[r8j + 2] >> 6], OD0x[hZ1x[r8j + 2] & 63]);
            r8j += 3
        }
        if (eZ0x == 1) o8g[o8g.length - 1] = o8g[o8g.length - 2] = "=";
        if (eZ0x == 2) o8g[o8g.length - 1] = "=";
        return o8g.join("")
    };
    var bHJ2x = function() {
        var qR4V = /\n|\r|=/g;
        return function(j8b) {
            var r8j = 0,
            o8g = [];
            j8b = j8b.replace(qR4V, "");
            for (var i = 0,
            l = j8b.length; i < l; i += 4) o8g.push(Dt8l[j8b.charAt(i)] << 2 | Dt8l[j8b.charAt(i + 1)] >> 4, (Dt8l[j8b.charAt(i + 1)] & 15) << 4 | Dt8l[j8b.charAt(i + 2)] >> 2, (Dt8l[j8b.charAt(i + 2)] & 3) << 6 | Dt8l[j8b.charAt(i + 3)]);
            var bm9d = o8g.length,
            eZ0x = j8b.length % 4;
            if (eZ0x == 2) o8g = o8g.slice(0, bm9d - 2);
            if (eZ0x == 3) o8g = o8g.slice(0, bm9d - 1);
            return o8g
        }
    } ();
    p.czf2x = function(j8b) {
        return cdX8P(bHJ2x(j8b))
    };
    p.cdO8G = function(j8b) {
        var hZ1x = bHJ2x(j8b),
        du0x = hZ1x.length,
        hO1x;
        var r8j = 0;
        while (hO1x = hZ1x[r8j]) {
            if (hO1x > 128) {
                hZ1x[r8j] = hO1x - 256
            }
            r8j++
        }
        return hZ1x
    };
    p.cdN8F = function(j8b) {
        try {
            return window.btoa(j8b)
        } catch(ex) {
            return Je7X(cdW8O(j8b))
        }
    }
})(); (function() {
    var c8g = NEJ.P,
    Z9Q = NEJ.O,
    h8b = c8g("nej.v"),
    a7h = c8g("nej.e"),
    x8p = c8g("nej.j"),
    N8F = c8g("nej.p"),
    k8c = c8g("nej.u"),
    n8f = c8g("nm.l"),
    y8q = c8g("nm.w"),
    bC9t = c8g("nej.ui"),
    q8i = c8g("nm.d"),
    l8d = c8g("nm.x"),
    b8h,
    K8C;
    var TYPE_MAP = {
        13 : "playlist",
        17 : "program",
        18 : "song",
        19 : "album"
    };
    n8f.bHB2x = NEJ.C();
    b8h = n8f.bHB2x.O8G(n8f.ei0x);
    b8h.ca9R = function() {
        this.cd9U = "m-download-layer"
    };
    b8h.bS9J = function() {
        this.cc9T();
        var i8a = a7h.F8x(this.m8e, "j-flag");
        this.bqI8A = i8a[0];
        this.bqF8x = i8a[1];
        this.bHr2x = i8a[2];
        x8p.bp9g("/client/version/get", {
            type: "json",
            onload: this.cdt8l.g8c(this)
        });
        if (N8F.KX7Q.mac) {
            a7h.v8n(this.bqI8A.parentNode, "f-hide");
            a7h.w8o(this.bqF8x.parentNode, "f-hide");
            a7h.w8o(this.bHr2x, "f-hide")
        } else {
            a7h.w8o(this.bqI8A.parentNode, "f-hide");
            a7h.v8n(this.bqF8x.parentNode, "f-hide");
            a7h.v8n(this.bHr2x, "f-hide")
        }
    };
    b8h.bj9a = function(e8e) {
        e8e.clazz = " m-layer-down";
        e8e.parent = e8e.parent || document.body;
        e8e.title = "下载";
        e8e.draggable = !0;
        e8e.destroyalbe = !0;
        e8e.mask = true;
        this.bk9b(e8e);
        this.bT9K([[this.m8e, "click", this.bP9G.g8c(this)]]);
        this.ez0x = TYPE_MAP[e8e.type];
        this.gL1x = e8e.id
    };
    b8h.bA9r = function() {
        this.bF9w()
    };
    b8h.zQ7J = function() {
        this.br9i()
    };
    b8h.Ep9g = function(d8f) {
        this.z8r("onok", C8u);
        this.br9i()
    };
    b8h.bP9G = function(d8f) {
        var f8d = h8b.U8M(d8f, "d:action");
        switch (a7h.u8m(f8d, "action")) {
        case "download":
            this.br9i();
            window.open(a7h.u8m(f8d, "src"));
            break;
        case "orpheus":
            this.br9i();
            location.href = "orpheus://" + k8c.cdN8F(JSON.stringify({
                type: this.ez0x,
                id: this.gL1x,
                cmd: "download"
            }));
            break
        }
    };
    b8h.cdt8l = function(d8f) {
        if ((d8f || Z9Q).code == 200) {
            this.JG7z = d8f.data;
            this.bqI8A.innerText = "V" + this.JG7z.mac;
            this.bqF8x.innerText = "V" + this.JG7z.pc
        }
    };
    l8d.Jc7V = function(e8e) {
        n8f.bHB2x.A8s(e8e).L8D()
    }
})(); (function() {
    var c8g = NEJ.P,
    Z9Q = NEJ.O,
    k8c = c8g("nej.u"),
    q8i = c8g("nm.d"),
    bQ9H = {};
    q8i.B8t = function(J8B) {
        return bQ9H[J8B]
    };
    q8i.mQ3x = function(J8B, bd9U) {
        bQ9H[J8B] = bd9U
    };
    q8i.ff0x = function(j8b) {
        k8c.ey0x(j8b,
        function(p8h, J8B) {
            var bd9U = bQ9H[J8B] || {};
            NEJ.X(bd9U, p8h);
            bQ9H[J8B] = bd9U
        })
    }
})(); (function() {
    var c8g = NEJ.P,
    bn9e = NEJ.F,
    bc9T = c8g("nej.h");
    bc9T.bbK5P = function(J8B) {
        return localStorage.getItem(J8B)
    };
    bc9T.bbR5W = function(J8B, C8u) {
        localStorage.setItem(J8B, C8u)
    };
    bc9T.bqz8r = function(J8B) {
        localStorage.removeItem(J8B)
    };
    bc9T.bqy8q = function() {
        localStorage.clear()
    };
    bc9T.cdk8c = function() {
        var o8g = [];
        for (var i = 0,
        l = localStorage.length; i < l; i++) o8g.push(localStorage.key(i));
        return o8g
    };
    bc9T.bqw8o = function() { (document.onstorageready || bn9e)()
    };
    bc9T.bqu8m = function() {
        return ! 0
    }
})(); (function() {
    var c8g = NEJ.P,
    N8F = c8g("nej.p"),
    hO1x = c8g("nej.c"),
    bc9T = c8g("nej.h"),
    sZ5e;
    if (N8F.mF3x.trident || !!window.localStorage) return;
    var ccP8H = function() {
        var qL4P, eE0x;
        var btd9U = function() {
            qL4P = document.createElement("div");
            NEJ.X(qL4P.style, {
                position: "absolute",
                top: 0,
                left: 0,
                width: "1px",
                height: "1px",
                zIndex: 1e4,
                overflow: "hidden"
            });
            document.body.insertAdjacentElement("afterBegin", qL4P);
            qL4P.innerHTML = '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" width="1" height="1"id="f-' + +(new Date) + '" codebase="http://fpdownload.macromedia.com/get/flashplayer/current/swflash.cab"><param name="movie" value="' + hO1x.B8t("storage.swf") + '"/><param name="AllowScriptAccess" value="sameDomain"/></object>'
        };
        var QB1x = function() {
            eE0x = window.clearTimeout(eE0x);
            var ho1x = qL4P.getElementsByTagName("object")[0];
            if ( !! ho1x.initStorage) {
                delete qL4P;
                sZ5e = ho1x;
                sZ5e.initStorage("nej-storage"); (document.onstorageready || bn9e)();
                return
            }
            eE0x = window.setTimeout(QB1x, 500)
        };
        return function() {
            if ( !! sZ5e) return;
            btd9U();
            QB1x()
        }
    } ();
    bc9T.bbK5P = bc9T.bbK5P.er0x(function(d8f) {
        d8f.stopped = !0;
        if (!sZ5e) return;
        d8f.value = sZ5e.getItem(d8f.args[0])
    });
    bc9T.bbR5W = bc9T.bbR5W.er0x(function(d8f) {
        d8f.stopped = !0;
        if (!sZ5e) return;
        var bh9Y = d8f.args;
        sZ5e.setItem(bh9Y[0], bh9Y[1])
    });
    bc9T.bqz8r = bc9T.bqz8r.er0x(function(d8f) {
        d8f.stopped = !0;
        if (!sZ5e) return;
        sZ5e.removeItem(d8f.args[0])
    });
    bc9T.bqy8q = bc9T.bqy8q.er0x(function(d8f) {
        d8f.stopped = !0;
        if ( !! sZ5e) sZ5e.clear()
    });
    bc9T.bqw8o = bc9T.bqw8o.er0x(function(d8f) {
        d8f.stopped = !0;
        ccP8H()
    });
    bc9T.bqu8m = bc9T.bqu8m.er0x(function(d8f) {
        d8f.stopped = !0;
        d8f.value = !!sZ5e
    })
})(); (function() {
    var c8g = NEJ.P,
    k8c = c8g("nej.u"),
    h8b = c8g("nej.v"),
    bc9T = c8g("nej.h"),
    x8p = c8g("nej.j"),
    H8z = c8g("nej.ut"),
    Q8I = {};
    x8p.vZ6T = function(J8B, C8u) {
        var bGY2x = JSON.stringify(C8u);
        try {
            bc9T.bbR5W(J8B, bGY2x)
        } catch(ex) {
            console.error(ex.message);
            console.error(ex)
        }
        if (bGY2x != bc9T.bbK5P(J8B)) Q8I[J8B] = C8u;
        return this
    };
    x8p.tb5g = function(J8B) {
        var j8b = JSON.parse(bc9T.bbK5P(J8B) || "null");
        return j8b == null ? Q8I[J8B] : j8b
    };
    x8p.bGS2x = function(J8B, C8u) {
        var j8b = x8p.tb5g(J8B);
        if (j8b == null) {
            j8b = C8u;
            x8p.vZ6T(J8B, j8b)
        }
        return j8b
    };
    x8p.Ov0x = function(J8B) {
        delete Q8I[J8B];
        bc9T.bqz8r(J8B);
        return this
    };
    x8p.czg2x = function() {
        var bqn8f = function(p8h, J8B, bv9m) {
            delete bv9m[J8B]
        };
        return function() {
            k8c.ey0x(Q8I, bqn8f);
            bc9T.bqy8q();
            return this
        }
    } ();
    x8p.czh2x = function(o8g) {
        o8g = o8g || {};
        k8c.bb9S(bc9T.cdk8c(),
        function(J8B) {
            o8g[J8B] = x8p.tb5g(J8B)
        });
        return o8g
    };
    H8z.fE1x.A8s({
        element: document,
        event: "storageready",
        oneventadd: function() {
            if (bc9T.bqu8m()) {
                document.onstorageready()
            }
        }
    });
    var ccr8j = function() {
        var ccq8i = function(C8u, J8B, bv9m) {
            bc9T.bbR5W(J8B, JSON.stringify(C8u));
            delete bv9m[J8B]
        };
        return function() {
            k8c.ey0x(Q8I, ccq8i)
        }
    } ();
    h8b.s8k(document, "storageready", ccr8j);
    bc9T.bqw8o()
})(); (function() {
    var c8g = NEJ.P,
    h8b = c8g("nej.v"),
    k8c = c8g("nej.u"),
    N8F = c8g("nej.ut"),
    Ja7T;
    if ( !! N8F.bql8d) return;
    N8F.bql8d = NEJ.C();
    Ja7T = N8F.bql8d.O8G(N8F.cD0x);
    Ja7T.cs9j = function() {
        var gq1x = +(new Date),
        mu3x = "dat-" + gq1x;
        return function() {
            this.cx9o();
            var Q8I = this.constructor[mu3x];
            if (!Q8I) {
                Q8I = {};
                this.constructor[mu3x] = Q8I
            }
            this.R8J = Q8I
        }
    } ();
    Ja7T.B8t = function(J8B) {
        return this.R8J[J8B]
    };
    Ja7T.mQ3x = function(J8B, C8u) {
        var mv3x = this.R8J[J8B];
        this.R8J[J8B] = C8u;
        h8b.z8r(localCache, "cachechange", {
            key: J8B,
            type: "set",
            oldValue: mv3x,
            newValue: C8u
        });
        return this
    };
    Ja7T.cz9q = function(J8B) {
        var mv3x = this.R8J[J8B];
        k8c.YV3x(this.R8J, J8B);
        h8b.z8r(localCache, "cachechange", {
            key: J8B,
            type: "delete",
            oldValue: mv3x,
            newValue: undefined
        });
        return mv3x
    };
    Ja7T.TV2x = function(FM9D) {
        return NEJ.Q(this.R8J, FM9D)
    };
    window.localCache = N8F.bql8d.A8s();
    N8F.fE1x.A8s({
        element: localCache,
        event: "cachechange"
    })
})(); (function() {
    var c8g = NEJ.P,
    fj0x = NEJ.R,
    bn9e = NEJ.F,
    k8c = c8g("nej.u"),
    x8p = c8g("nej.j"),
    N8F = c8g("nej.ut"),
    mu3x = "dat-" + +(new Date),
    mw3x;
    if ( !! N8F.bqk8c) return;
    N8F.bqk8c = NEJ.C();
    mw3x = N8F.bqk8c.O8G(N8F.cD0x);
    mw3x.cs9j = function() {
        this.cx9o();
        this.R8J = this.constructor[mu3x];
        if (!this.R8J) {
            this.R8J = {};
            this.R8J[mu3x + "-l"] = {};
            this.constructor[mu3x] = this.R8J
        }
    };
    mw3x.rF4J = function(J8B) {
        return this.R8J[J8B]
    };
    mw3x.pu4y = function(J8B, C8u) {
        this.R8J[J8B] = C8u
    };
    mw3x.lj2x = function(J8B, kT2x) {
        var j8b = this.rF4J(J8B);
        if (j8b == null) {
            j8b = kT2x;
            this.pu4y(J8B, j8b)
        }
        return j8b
    };
    mw3x.cci8a = function(J8B) {
        if (J8B != null) {
            delete this.R8J[J8B];
            return
        }
        k8c.ey0x(this.R8J,
        function(p8h, J8B) {
            if (J8B == mu3x + "-l") return;
            this.cci8a(J8B)
        },
        this)
    };
    mw3x.czi2x = function(J8B) {
        if ( !! x8p.Ov0x) return x8p.Ov0x(J8B)
    };
    mw3x.cbX7Q = function(J8B) {
        if ( !! x8p.tb5g) return x8p.tb5g(J8B)
    };
    mw3x.cbT7M = function(J8B, C8u) {
        if ( !! x8p.vZ6T) x8p.vZ6T(J8B, C8u)
    };
    mw3x.FD9u = function(J8B, kT2x) {
        var j8b = this.Op0x(J8B);
        if (j8b == null) {
            j8b = kT2x;
            this.vT6N(J8B, j8b)
        }
        return j8b
    };
    mw3x.Op0x = function(J8B) {
        var j8b = this.rF4J(J8B);
        if (j8b != null) return j8b;
        j8b = this.cbX7Q(J8B);
        if (j8b != null) this.pu4y(J8B, j8b);
        return j8b
    };
    mw3x.vT6N = function(J8B, C8u) {
        this.cbT7M(J8B, C8u);
        this.pu4y(J8B, C8u)
    };
    mw3x.bGA2x = function(J8B) {
        if (J8B != null) {
            delete this.R8J[J8B];
            if ( !! x8p.Ov0x) x8p.Ov0x(J8B);
            return
        }
        k8c.ey0x(this.R8J,
        function(p8h, J8B) {
            if (J8B == mu3x + "-l") return;
            this.bGA2x(J8B)
        },
        this)
    };
    mw3x.czk2x = function() {
        this.bGA2x();
        return this
    };
    mw3x.czl2x = function(J8B) {
        var j8b = this.R8J[mu3x + "-l"];
        delete j8b[J8B]
    };
    mw3x.bqe8W = function(J8B) {
        var j8b = this.R8J[mu3x + "-l"],
        bh9Y = fj0x.slice.call(arguments, 1);
        k8c.bb9S(j8b[J8B],
        function(dE0x) {
            try {
                dE0x.apply(null, bh9Y)
            } catch(ex) {
                console.error(ex.message);
                console.error(ex.stack)
            }
        });
        delete j8b[J8B]
    };
    mw3x.bqb8T = function(J8B, dE0x) {
        dE0x = dE0x || bn9e;
        var i8a = this.R8J[mu3x + "-l"][J8B];
        if (!i8a) {
            i8a = [dE0x];
            this.R8J[mu3x + "-l"][J8B] = i8a;
            return ! 1
        }
        i8a.push(dE0x);
        return ! 0
    };
    mw3x.cbA7t = function(i8a, be9V, gn1x) {
        if (!i8a) return ! 1;
        be9V = parseInt(be9V) || 0;
        gn1x = parseInt(gn1x) || 0;
        if (!gn1x) {
            if (!i8a.loaded) return ! 1;
            gn1x = i8a.length
        }
        if ( !! i8a.loaded) gn1x = Math.min(gn1x, i8a.length - be9V);
        for (var i = 0; i < gn1x; i++) if (!i8a[be9V + i]) return ! 1;
        return ! 0
    }
})(); (function() {
    var c8g = NEJ.P,
    Z9Q = NEJ.O,
    bn9e = NEJ.F,
    k8c = c8g("nej.u"),
    N8F = c8g("nej.ut"),
    b8h,
    K8C;
    if ( !! N8F.On0x) return;
    N8F.On0x = NEJ.C();
    b8h = N8F.On0x.O8G(N8F.bqk8c);
    K8C = N8F.On0x.cl9c;
    b8h.bj9a = function(e8e) {
        this.bk9b(e8e);
        this.wm6g = e8e.key || "id";
        this.bi9Z = e8e.data || Z9Q;
        this.cby7r = !!e8e.autogc;
        this.cbu7n(e8e.id)
    };
    b8h.bA9r = function() {
        this.bF9w();
        if ( !! this.dX0x) {
            this.bGl2x()
        }
    };
    b8h.cbu7n = function(D8v) {
        var Q8I;
        if ( !! D8v) {
            Q8I = this.R8J[D8v];
            if (!Q8I) {
                Q8I = {};
                this.R8J[D8v] = Q8I
            }
        }
        Q8I = Q8I || this.R8J;
        Q8I.hash = Q8I.hash || {};
        this.Oi0x = Q8I
    };
    b8h.bGl2x = function() {
        this.dX0x = window.clearTimeout(this.dX0x);
        var bv9m = {};
        k8c.ey0x(this.Oi0x,
        function(i8a, J8B) {
            if (J8B == "hash") return;
            if (!k8c.eC0x(i8a)) return;
            k8c.bb9S(i8a,
            function(p8h) {
                if (!p8h) return;
                bv9m[p8h[this.wm6g]] = !0
            },
            this)
        },
        this);
        k8c.ey0x(this.Vk2x(),
        function(p8h, D8v, dW0x) {
            if (!bv9m[D8v]) {
                delete dW0x[D8v]
            }
        })
    };
    b8h.cbp7i = function() {
        if ( !! this.dX0x) {
            this.dX0x = window.clearTimeout(this.dX0x)
        }
        this.dX0x = window.setTimeout(this.bGl2x.g8c(this), 150)
    };
    b8h.zW7P = function(p8h, Vs2x) {
        p8h = this.bGk2x(p8h, Vs2x) || p8h;
        if (!p8h) return null;
        var J8B = p8h[this.wm6g];
        if (J8B != null) {
            var hQ1x = this.Vk2x()[J8B];
            if ( !! hQ1x) p8h = NEJ.X(hQ1x, p8h);
            this.Vk2x()[J8B] = p8h
        }
        delete p8h.bGj2x;
        return p8h
    };
    b8h.bGk2x = bn9e;
    b8h.bpV8N = function(J8B, p8h) {
        if (!p8h) return;
        if (!k8c.eC0x(p8h)) {
            var i8a = this.hi1x(J8B),
            p8h = this.zW7P(p8h, J8B);
            if ( !! p8h) i8a.unshift(p8h);
            return
        }
        k8c.mt3x(p8h, this.bpV8N.g8c(this, J8B))
    };
    b8h.Oe0x = function(J8B, cu9l) {
        var i8a = this.hi1x(J8B);
        i8a.length = Math.max(i8a.length, cu9l);
        this.bpU8M(J8B);
        return this
    };
    b8h.jn2x = function(J8B) {
        return this.hi1x(J8B).length
    };
    b8h.bpU8M = function(J8B, nP3x) {
        this.hi1x(J8B).loaded = nP3x != !1;
        return this
    };
    b8h.VS2x = function(J8B) {
        return !! this.hi1x(J8B).loaded
    };
    b8h.ui5n = function(J8B, i8a) {
        this.uk5p(J8B);
        this.bpT8L({
            key: J8B,
            offset: 0,
            limit: i8a.length + 1
        },
        {
            list: i8a,
            total: i8a.length
        })
    };
    b8h.hi1x = function() {
        var Cc8U = function(J8B) {
            return (J8B || "") + (!J8B ? "": "-") + "list"
        };
        return function(J8B) {
            var J8B = Cc8U(J8B),
            i8a = this.Oi0x[J8B];
            if (!i8a) {
                i8a = [];
                this.Oi0x[J8B] = i8a
            }
            return i8a
        }
    } ();
    b8h.Vk2x = function() {
        var dW0x = this.Oi0x.hash;
        if (!dW0x) {
            dW0x = {};
            this.Oi0x.hash = dW0x
        }
        return dW0x
    };
    b8h.bpS8K = function() {
        var Cc8U = function(e8e) {
            return "r-" + e8e.key
        };
        return function(e8e) {
            var iy2x = NEJ.X({},
            e8e),
            ny3x = Cc8U(iy2x);
            if (!this.bqb8T(ny3x, this.z8r.g8c(this))) {
                iy2x.rkey = ny3x;
                iy2x.onload = this.cbg7Z.g8c(this, iy2x);
                this.z8r("dopullrefresh", iy2x)
            }
            return this
        }
    } ();
    b8h.cbg7Z = function(e8e, i8a) {
        this.bpV8N(e8e.key, i8a);
        this.bqe8W(e8e.rkey, "onpullrefresh", e8e)
    };
    b8h.la2x = function() {
        var Cc8U = function(e8e) {
            return "r-" + e8e.key + "-" + e8e.offset + "-" + e8e.limit
        };
        return function(e8e) {
            e8e = e8e || Z9Q;
            var iy2x = {
                key: "" + e8e.key || "",
                ext: e8e.ext || null,
                data: e8e.data || null,
                offset: parseInt(e8e.offset) || 0,
                limit: parseInt(e8e.limit) || 0
            },
            i8a = this.hi1x(iy2x.key);
            if (this.cbA7t(i8a, iy2x.offset, iy2x.limit)) {
                this.z8r("onlistload", iy2x);
                return this
            }
            var ny3x = Cc8U(iy2x);
            if (!this.bqb8T(ny3x, this.z8r.g8c(this))) {
                iy2x.rkey = ny3x;
                iy2x.onload = this.bpT8L.g8c(this, iy2x);
                this.z8r("doloadlist", iy2x)
            }
            return this
        }
    } ();
    b8h.bpT8L = function() {
        var CT8L = function(p8h, r8j, i8a) {
            if ( !! p8h) {
                return ! 0
            }
            i8a.splice(r8j, 1)
        };
        return function(e8e, o8g) {
            e8e = e8e || Z9Q;
            var J8B = e8e.key,
            be9V = e8e.offset,
            bGd2x = this.hi1x(J8B);
            var i8a = o8g || [];
            if (!k8c.eC0x(i8a)) {
                i8a = o8g.result || o8g.list || [];
                var cu9l = parseInt(o8g.total);
                if (!isNaN(cu9l) || cu9l > i8a.length) {
                    this.Oe0x(J8B, cu9l)
                }
            }
            k8c.bb9S(i8a,
            function(p8h, r8j) {
                bGd2x[be9V + r8j] = this.zW7P(p8h, J8B)
            },
            this);
            if (i8a.length < e8e.limit) {
                this.bpU8M(J8B);
                k8c.mt3x(bGd2x, CT8L)
            }
            this.bqe8W(e8e.rkey, "onlistload", e8e)
        }
    } ();
    b8h.uk5p = function() {
        var CT8L = function(p8h, r8j, i8a) {
            i8a.splice(r8j, 1)
        };
        return function(J8B) {
            var i8a = this.hi1x(J8B);
            k8c.mt3x(i8a, CT8L);
            this.bpU8M(J8B, !1);
            if (this.cby7r) {
                this.cbp7i()
            }
            return this
        }
    } ();
    b8h.bGb2x = function(p8h, Vs2x) {
        return ! p8h.bGj2x
    };
    b8h.ex0x = function(D8v) {
        return this.Vk2x()[D8v]
    };
    b8h.czn2x = function(D8v) {
        var p8h = this.ex0x(D8v);
        if ( !! p8h) p8h.bGj2x = !0
    };
    b8h.WE2x = function() {
        var Cc8U = function(e8e) {
            return "r-" + e8e.key + "-" + e8e.id
        };
        return function(e8e) {
            e8e = e8e || Z9Q;
            var D8v = e8e[this.wm6g],
            iy2x = {
                id: D8v,
                ext: e8e.ext,
                data: e8e.data || {},
                key: "" + e8e.key || ""
            };
            p8h = this.ex0x(D8v);
            iy2x.data[this.wm6g] = D8v;
            if ( !! p8h && this.bGb2x(p8h, iy2x.key)) {
                this.z8r("onitemload", iy2x);
                return this
            }
            var ny3x = Cc8U(iy2x);
            if (!this.bqb8T(ny3x, this.z8r.g8c(this))) {
                iy2x.rkey = ny3x;
                iy2x.onload = this.caY7R.g8c(this, iy2x);
                this.z8r("doloaditem", iy2x)
            }
            return this
        }
    } ();
    b8h.caY7R = function(e8e, p8h) {
        e8e = e8e || Z9Q;
        this.zW7P(p8h, e8e.key);
        this.bqe8W(e8e.rkey, "onitemload", e8e)
    };
    b8h.iY2x = function(e8e) {
        e8e = NEJ.X({},
        e8e);
        e8e.onload = this.xJ6D.g8c(this, e8e);
        this.z8r("doadditem", e8e)
    };
    b8h.xJ6D = function(e8e, p8h) {
        var J8B = e8e.key;
        p8h = this.zW7P(p8h, J8B);
        if ( !! p8h) {
            var eO0x = 0,
            i8a = this.hi1x(J8B);
            if (!e8e.push) {
                eO0x = -1;
                var be9V = e8e.offset || 0;
                i8a.splice(be9V, 0, p8h)
            } else if (i8a.loaded) {
                eO0x = 1;
                i8a.push(p8h)
            } else {
                i8a.length++
            }
        }
        var d8f = {
            key: J8B,
            flag: eO0x,
            data: p8h,
            action: "add",
            ext: e8e.ext
        };
        this.z8r("onitemadd", d8f);
        return d8f
    };
    b8h.IT7M = function(e8e) {
        e8e = NEJ.X({},
        e8e);
        e8e.onload = this.bpM8E.g8c(this, e8e);
        this.z8r("dodeleteitem", e8e)
    };
    b8h.bpM8E = function(e8e, bFS2x) {
        var p8h, J8B = e8e.key;
        if ( !! bFS2x) {
            p8h = this.ex0x(e8e.id) || null;
            var D8v = e8e.id,
            caR7K = this.wm6g,
            i8a = this.hi1x(J8B),
            r8j = k8c.dd0x(i8a,
            function(hQ1x) {
                return !! hQ1x && hQ1x[caR7K] == D8v
            });
            if (r8j >= 0) i8a.splice(r8j, 1)
        }
        var d8f = {
            key: J8B,
            data: p8h,
            action: "delete",
            ext: e8e.ext
        };
        this.z8r("onitemdelete", d8f);
        return d8f
    };
    b8h.WS3x = function(e8e) {
        e8e = NEJ.X({},
        e8e);
        e8e.onload = this.caQ7J.g8c(this, e8e);
        this.z8r("doupdateitem", e8e)
    };
    b8h.caQ7J = function(e8e, p8h) {
        var J8B = e8e.key;
        if ( !! p8h) p8h = this.zW7P(p8h, J8B);
        var d8f = {
            key: J8B,
            data: p8h,
            action: "update",
            ext: e8e.ext
        };
        this.z8r("onitemupdate", d8f);
        return d8f
    }
})(); (function() {
    var c8g = NEJ.P,
    Z9Q = NEJ.O,
    bn9e = NEJ.F,
    k8c = c8g("nej.u"),
    N8F = c8g("nej.ut"),
    b8h;
    if ( !! N8F.bpJ8B) return;
    N8F.bpJ8B = NEJ.C();
    b8h = N8F.bpJ8B.O8G(N8F.On0x);
    b8h.bj9a = function(e8e) {
        this.bk9b(e8e);
        this.btE9v({
            doloadlist: this.WY3x.g8c(this),
            doloaditem: this.bpI8A.g8c(this),
            doadditem: this.bFP2x.g8c(this),
            dodeleteitem: this.Xd3x.g8c(this),
            doupdateitem: this.Xe3x.g8c(this),
            dopullrefresh: this.bFN2x.g8c(this)
        })
    };
    b8h.WY3x = bn9e;
    b8h.bFN2x = bn9e;
    b8h.bpI8A = bn9e;
    b8h.bFP2x = bn9e;
    b8h.Xd3x = bn9e;
    b8h.Xe3x = bn9e
})(); (function() {
    var c8g = NEJ.P,
    Z9Q = NEJ.O,
    bn9e = NEJ.F,
    k8c = c8g("nej.u"),
    h8b = c8g("nej.v"),
    x8p = c8g("nej.j"),
    H8z = c8g("nej.ut"),
    l8d = c8g("nm.x"),
    q8i = c8g("nm.d"),
    b8h,
    K8C;
    q8i.hn1x = NEJ.C();
    b8h = q8i.hn1x.O8G(H8z.bpJ8B);
    b8h.cn9e = function() {
        var NQ9H = location.protocol + "//" + location.host;
        var caI7B = function(bs9j, j8b) {
            var bv9m = {
                conf: {},
                data: {},
                urls: []
            };
            k8c.bb9S(bs9j,
            function(J8B, r8j, i8a) {
                var bd9U = q8i.B8t(J8B);
                if (!bd9U) return;
                var bpC8u = bFH2x(bd9U.url, j8b[J8B]);
                bv9m.urls.push(bpC8u);
                bv9m.conf[bpC8u] = bd9U;
                bv9m.data[bpC8u] = JSON.stringify(j8b[J8B] == null ? "": j8b[J8B])
            });
            return bv9m
        };
        var bFH2x = function(V8N, j8b) {
            return V8N.replace(/\{(.*?)\}/gi,
            function($1, $2) {
                return j8b[$2] || $1
            })
        };
        var bFF2x = function(bd9U, e8e, d8f) {
            h8b.z8r(window, "requesterror", d8f);
            if ( !! d8f.stopped) return;
            var IO7H = bd9U.onerror || e8e.onerror;
            if (k8c.fw1x(IO7H)) {
                this.z8r(IO7H, d8f, e8e)
            } else { (IO7H || bn9e).call(this, d8f, e8e)
            }
            var d8f = {
                result: d8f,
                option: e8e
            };
            this.z8r("onerror", d8f);
            if (!d8f.stopped)(bd9U.onmessage || bn9e).call(this, d8f.result.code, d8f.result)
        };
        var bFB2x = function(P8H, bd9U, e8e) {
            var o8g = P8H;
            if (k8c.gr1x(bd9U.format)) {
                o8g = bd9U.format.call(this, P8H, e8e)
            }
            return o8g
        };
        var yD7w = function(P8H, bd9U, e8e, uB5G) {
            if (k8c.gr1x(bd9U.beforeload)) {
                bd9U.beforeload.call(this, P8H, e8e, bd9U)
            }
            if (P8H && P8H.code != null && P8H.code != 200) {
                bFF2x.call(this, bd9U, e8e, {
                    key: e8e.key,
                    code: P8H.code,
                    message: P8H.message || "",
                    captchaId: P8H.captchaId,
                    ext: P8H
                });
                return
            }
            var o8g = P8H;
            if (!uB5G) {
                o8g = bFB2x.call(this, P8H, bd9U, e8e)
            } else if (k8c.gr1x(bd9U.format)) {
                var bpv8n = [];
                k8c.bb9S(uB5G.urls,
                function(V8N) {
                    bpv8n.push(bFB2x.call(this, P8H[V8N], uB5G.conf[V8N], e8e))
                },
                this);
                bpv8n.push(e8e);
                o8g = bd9U.format.apply(this, bpv8n)
            }
            var tc5h = bd9U.onload || e8e.onload,
            bFv2x = bd9U.finaly || e8e.finaly || bn9e;
            if (k8c.fw1x(tc5h)) {
                bFv2x.call(this, this.z8r(tc5h, o8g), e8e)
            } else {
                bFv2x.call(this, (tc5h || bn9e).call(this, o8g), e8e)
            }
        };
        var zy7r = function(bd9U, e8e, bV9M) {
            bFF2x.call(this, bd9U, e8e, {
                key: e8e.key,
                code: bV9M.code || -1,
                message: bV9M.message || ""
            })
        };
        return function(bd9U, e8e) {
            if (k8c.fw1x(bd9U)) {
                bd9U = q8i.B8t(bd9U)
            }
            delete e8e.value; (bd9U.filter || bn9e).call(this, e8e, bd9U);
            var P8H = e8e.value;
            if ( !! P8H) {
                yD7w.call(this, P8H, bd9U, e8e);
                return
            }
            var V8N, j8b = e8e.data || Z9Q,
            xF6z = {
                cookie: !0,
                type: bd9U.rtype || "json",
                method: bd9U.type || "POST",
                onerror: zy7r.g8c(this, bd9U, e8e),
                noescape: bd9U.noescape
            };
            if (k8c.eC0x(bd9U.url)) {
                var uB5G = caI7B(bd9U.url, j8b);
                V8N = NQ9H + "/api/batch";
                xF6z.data = k8c.dh0x(uB5G.data);
                xF6z.onload = yD7w.en0x(this, bd9U, e8e, uB5G);
                xF6z.headers = {
                    "batch-method": "POST"
                };
                delete uB5G.data
            } else {
                var lD3x = bd9U.url.indexOf(":") < 0 ? NQ9H: "";
                V8N = bFH2x(lD3x + bd9U.url, j8b);
                xF6z.data = k8c.dh0x(e8e.data);
                xF6z.onload = yD7w.en0x(this, bd9U, e8e)
            }
            if (xF6z.method == "GET") xF6z.query = xF6z.data;
            return x8p.bp9g(V8N, xF6z)
        }
    } ();
    b8h.Dl8d = function() {
        var go1x = /^get|list|pull$/i;
        return function(bFu2x, e8e) {
            var J8B = e8e.key,
            bd9U = q8i.B8t(J8B.split("-")[0] + "-" + bFu2x);
            if (go1x.test(bFu2x) && J8B.indexOf("post-") < 0) bd9U.type = "GET";
            this.cn9e(bd9U, e8e)
        }
    } ();
    b8h.czr2x = function(J8B, i8a) {
        var cu9l = i8a.length;
        this.bpT8L({
            key: J8B,
            offset: 0,
            limit: cu9l + 1
        },
        {
            list: i8a,
            total: cu9l
        })
    };
    b8h.WY3x = function(e8e) {
        this.Dl8d("list", e8e)
    };
    b8h.bpI8A = function(e8e) {
        this.Dl8d("get", e8e)
    };
    b8h.bFN2x = function(e8e) {
        this.Dl8d("pull", e8e)
    };
    b8h.bFP2x = function(e8e) {
        this.Dl8d("add", e8e)
    };
    b8h.Xd3x = function(e8e) {
        this.Dl8d("del", e8e)
    };
    b8h.Xe3x = function(e8e) {
        this.Dl8d("update", e8e)
    };
    b8h.cam7f = function(p8h) {
        this.zW7P(p8h)
    };
    H8z.fE1x.A8s({
        element: window,
        event: "requesterror"
    })
})(); (function() {
    var c8g = NEJ.P,
    Z9Q = NEJ.O,
    bn9e = NEJ.F,
    h8b = c8g("nej.v"),
    H8z = c8g("nej.ut"),
    q8i = c8g("nm.d"),
    bpu8m = {},
    b8h,
    K8C;
    var tl5q = function(o8g, e8e) {
        o8g.conf = e8e.conf;
        return o8g
    };
    q8i.ff0x({
        "res-mv-get": {
            type: "GET",
            url: "/api/v1/mv/detail",
            format: function(P8H, e8e) {
                return tl5q({
                    mv: P8H
                },
                e8e)
            }
        },
        "res-song-get": {
            type: "GET",
            url: "/api/song/detail",
            format: function(o8g, e8e) {
                if ( !! o8g.songs && o8g.songs.length > 0) o8g.song = o8g.songs[0];
                else o8g.song = bpu8m;
                delete o8g.songs;
                return tl5q(o8g, e8e)
            },
            filter: function(e8e) {
                e8e.data.ids = "[" + e8e.data.id + "]"
            }
        },
        "res-program-get": {
            type: "GET",
            url: "/api/dj/program/detail",
            format: tl5q
        },
        "res-album-get": {
            type: "GET",
            url: "/api/album/{id}",
            format: tl5q
        },
        "res-playlist-get": {
            type: "GET",
            url: "/api/playlist/detail",
            format: function(o8g, e8e) {
                o8g.playlist = o8g.result;
                delete o8g.result;
                return tl5q(o8g, e8e)
            }
        },
        "res-mv-play": {
            type: "GET",
            url: "/api/song/mv/play",
            format: tl5q
        },
        "res-playlist-play": {
            type: "GET",
            url: "/api/playlist/update/playcount",
            format: tl5q
        },
        "res-program-play": {
            type: "GET",
            url: "/api/dj/program/listen",
            format: tl5q
        },
        "res-djradio-get": {
            type: "GET",
            url: "/api/dj/program/byradio",
            filter: function(e8e) {
                var i8a = e8e.data.id.split("-");
                e8e.data.radioId = i8a[0];
                e8e.data.asc = i8a[1] == 2;
                e8e.data.limit = 1e3;
                delete e8e.data.id
            },
            format: function(P8H, e8e) {
                var caj7c = {
                    id: e8e.data.radioId,
                    programs: P8H.programs
                };
                return tl5q({
                    djradio: caj7c
                },
                e8e)
            }
        },
        "res-hotSongs-get": {
            type: "GET",
            url: "/api/artist/{id}",
            format: tl5q
        },
        "res-lyric-get": {
            type: "GET",
            url: "/api/song/lyric",
            filter: function(e8e) {
                e8e.data.lv = 0;
                e8e.data.tv = 0
            },
            format: function(o8g, e8e) {
                var vP6J = {
                    lyric: "",
                    nolyric: true
                };
                if (o8g.code == 200 && o8g.lrc && o8g.lrc.lyric) {
                    vP6J.lyric = o8g.lrc.lyric;
                    vP6J.nolyric = false
                } else {
                    vP6J.nolyric = true
                }
                return tl5q({
                    lyric: vP6J
                },
                e8e)
            }
        }
    });
    q8i.vO6I = NEJ.C();
    b8h = q8i.vO6I.O8G(q8i.hn1x);
    b8h.caf7Y = function(t8l, cU0x) {
        return this.rF4J(this.Yd3x(t8l, cU0x))
    };
    b8h.NE9v = function(t8l, cU0x, e8e) {
        e8e = e8e || {};
        var j8b = this.rF4J(this.Yd3x(t8l, cU0x));
        if (j8b && (t8l != 13 && t8l != 19 || e8e.conf && e8e.conf.useCache)) {
            this.z8r("onresourceload", t8l, cU0x, j8b, e8e.conf);
            return
        }
        e8e.data = {
            id: cU0x
        };
        e8e.onload = this.cac7V.g8c(this, t8l, cU0x);
        e8e.onerror = this.cab7U.g8c(this, t8l, cU0x);
        this.cn9e("res-" + this.Aa7T(t8l) + "-get", e8e)
    };
    b8h.cac7V = function(t8l, cU0x, o8g) {
        var j8b = o8g[this.Aa7T(t8l)];
        this.pu4y(this.Yd3x(t8l, cU0x), j8b);
        this.z8r("onresourceload", t8l, cU0x, j8b, o8g.conf)
    };
    b8h.cab7U = function(t8l, cU0x, o8g, e8e) {
        if (o8g.code != 404) {
            this.z8r("onresourceerror", t8l, cU0x, o8g.code);
            return
        }
        this.pu4y(this.Yd3x(t8l, cU0x), bpu8m);
        this.z8r("onresourceload", t8l, cU0x, bpu8m, e8e.conf)
    };
    b8h.czs2x = function(t8l, e8e) {
        this.cn9e("res-" + this.Aa7T(t8l) + "-play", e8e)
    };
    b8h.Yd3x = function(t8l, cU0x) {
        return "res-" + this.Aa7T(t8l) + "-" + cU0x
    };
    b8h.Aa7T = function(t8l) {
        var bv9m = {
            2 : "hotSongs",
            13 : "playlist",
            17 : "program",
            18 : "song",
            19 : "album",
            21 : "mv",
            41 : "lyric",
            70 : "djradio"
        };
        return bv9m[t8l]
    };
    q8i.vO6I.IJ7C = function(t8l, cU0x) {
        if (!this.eX0x) this.eX0x = q8i.vO6I.A8s({});
        return this.eX0x.caf7Y(t8l, cU0x)
    }
})(); (function() {
    var c8g = NEJ.P,
    Z9Q = NEJ.O,
    bn9e = NEJ.F,
    h8b = c8g("nej.v"),
    k8c = c8g("nej.u"),
    H8z = c8g("nej.ut"),
    q8i = c8g("nm.d"),
    bps8k = /^[1-9][0-9]*$/,
    b8h,
    K8C;
    var LOCAL_LOG_KEY = "local-log";
    q8i.ff0x({
        "bi-log": {
            url: "/api/feedback/weblog"
        },
        "bi-batch-log": {
            url: "/api/feedback/weblog"
        },
        "plus-mv-count": {
            url: "/api/song/mv/play"
        },
        "plus-song-count": {
            url: "/api/song/play"
        },
        "plus-dj-count": {
            type: "GET",
            url: "/api/dj/program/listen"
        },
        "plus-playlist-count": {
            type: "GET",
            url: "/api/playlist/update/playcount"
        }
    });
    q8i.hM1x = NEJ.C();
    b8h = q8i.hM1x.O8G(q8i.hn1x);
    b8h.fu1x = function(W8O, bd9U) {
        if (!W8O || !bd9U) return;
        if (k8c.fw1x(bd9U)) {
            try {
                bd9U = JSON.parse(bd9U)
            } catch(_e) {
                if (console && console.warn) {
                    console.warn("bilog error: ", a7h)
                }
            }
        }
        if (!k8c.lg2x(bd9U)) return;
        this.cn9e("bi-log", {
            data: {
                logs: JSON.stringify([{
                    action: W8O,
                    json: bd9U
                }])
            }
        });
        if (typeof GEnvType == "string" && GEnvType == "local") {
            console.log("[BI LOG] action=" + W8O + ", json=" + JSON.stringify(bd9U))
        }
    };
    b8h.YJ3x = function(nn3x) {
        if (!k8c.eC0x(nn3x)) return;
        this.cn9e("bi-batch-log", {
            data: {
                logs: JSON.stringify(nn3x)
            }
        })
    };
    b8h.bFk2x = function(bd9U) {
        if (!bd9U || !bd9U.type || !bd9U.rid) return;
        var nm3x = bd9U.type;
        if (bps8k.test(nm3x)) {
            nm3x = this.Aa7T(nm3x)
        }
        if (!nm3x) return;
        if (nm3x == "playlist") nm3x = "list";
        this.fu1x("search", {
            type: nm3x,
            id: bd9U.rid || null,
            keyword: bd9U.keyword || null
        })
    };
    b8h.NC9t = function() {
        var bZP7I = /^\/m\/(song|album|playlist)\?id=(\d+)/;
        return function(bd9U) {
            if (!bd9U || !bd9U.type || !bd9U.rid) return;
            if (bd9U.play === undefined) bd9U.play = true;
            var nm3x = bd9U.type;
            if (bps8k.test(nm3x)) {
                nm3x = this.Aa7T(nm3x)
            }
            if (!nm3x) return;
            if (nm3x == "playlist") nm3x = "list";
            var P8H = {
                id: bd9U.rid,
                type: nm3x
            };
            if (nm3x == "song" && bd9U.source) {
                P8H.source = this.bFh2x(bd9U.source);
                if ( !! bd9U.sourceid) P8H.sourceid = bd9U.sourceid
            }
            this.fu1x(!bd9U.play ? "addto": "play", P8H);
            if (nm3x == "song" && bd9U.hash && bd9U.hash.match(bZP7I)) {
                this.fu1x(!bd9U.play ? "addto": "play", {
                    type: RegExp.$1,
                    id: RegExp.$2
                })
            }
        }
    } ();
    b8h.bpq8i = function(D8v, bw9n, dY0x, Ec9T) {
        var P8H = {
            type: "song",
            wifi: 0,
            download: 0
        };
        var bZF7y = {
            1 : "ui",
            2 : "playend",
            3 : "interrupt",
            4 : "exception"
        };
        P8H.id = D8v;
        P8H.time = Math.round(bw9n);
        P8H.end = k8c.fw1x(Ec9T) ? Ec9T: bZF7y[Ec9T] || "";
        if (dY0x && dY0x.fid) {
            P8H.source = this.bFh2x(dY0x.fid);
            P8H.sourceId = dY0x.fdata
        }
        this.fu1x("play", P8H)
    };
    b8h.bFd2x = function(t8l, cU0x) {
        if (!t8l || !cU0x) return;
        if (bps8k.test(t8l)) t8l = this.Aa7T(t8l);
        if (t8l != "playlist" && t8l != "dj") return;
        var bd9U = q8i.B8t("plus-" + t8l + "-count");
        if (!bd9U) return ! 1;
        this.cn9e(bd9U, {
            data: {
                id: cU0x
            }
        });
        var Q8I = this.lj2x("play-hist-" + t8l, []);
        if (k8c.dd0x(Q8I, cU0x) < 0) {
            Q8I.push(cU0x);
            return ! 0
        }
        return ! 1
    };
    b8h.Aa7T = function(t8l) {
        var bv9m = {
            1 : "user",
            2 : "artist",
            13 : "playlist",
            17 : "dj",
            18 : "song",
            19 : "album",
            21 : "mv",
            31 : "toplist"
        };
        return bv9m[t8l]
    };
    b8h.bFh2x = function(II7B) {
        var bv9m = {
            1 : "user",
            2 : "artist",
            13 : "list",
            17 : "dj",
            18 : "song",
            19 : "album",
            21 : "mv",
            31 : "toplist",
            32 : "search",
            33 : "search",
            34 : "event",
            35 : "msg"
        };
        return bv9m[II7B]
    };
    b8h.bZC7v = function(hh1x) {
        var nn3x = this.FD9u(LOCAL_LOG_KEY, []);
        nn3x.unshift(hh1x);
        if (nn3x.length > 200) {
            nn3x.length = 200
        }
        this.vT6N(LOCAL_LOG_KEY, nn3x)
    };
    b8h.bZz7s = function() {
        return this.Op0x(LOCAL_LOG_KEY)
    };
    b8h.eu0x = function(P8H) {
        this.fu1x("play", P8H)
    }
})(); (function() {
    var c8g = NEJ.P,
    Z9Q = NEJ.O,
    bn9e = NEJ.F,
    h8b = c8g("nej.v"),
    x8p = c8g("nej.j"),
    H8z = c8g("nej.ut"),
    a7h = c8g("nej.e"),
    k8c = c8g("nej.u"),
    n8f = c8g("nm.l"),
    l8d = c8g("nm.x"),
    q8i = c8g("nm.d");
    if (!q8i.vO6I) return;
    var Q8I = q8i.vO6I.A8s({
        onresourceload: bZy7r
    });
    var tL5Q = q8i.hM1x.gh1x();
    function bZy7r(t8l, cU0x, j8b, bd9U) {
        var i8a = [];
        switch (parseInt(t8l)) {
        case 2:
            i8a = j8b;
            break;
        case 13:
            i8a = j8b.tracks;
            break;
        case 18:
            i8a.push(j8b);
            break;
        case 19:
            i8a = j8b.songs;
            break;
        case 21:
            if (j8b.mp && j8b.mp.fee && j8b.mp.pl <= 0) {
                l8d.ZR4V(j8b.data.id, j8b.mp.fee);
                return
            }
            break
        }
        if (l8d.IH7A(i8a, true, null, t8l == 19 ? {
            source: "album",
            sourceid: cU0x
        }: null) == 0) {
            return
        }
        l8d.fh0x({
            clazz: "m-layer-w2",
            bubble: !1,
            message: bd9U.message
        })
    }
    function bZu7n(d8f, rr4v, xz6t, eJ0x) {
        eJ0x = eJ0x || {};
        if (d8f.action == "ok") {
            if (xz6t) {
                location.dispatch2("/payfee?songId=" + xz6t)
            } else {
                location.dispatch2("/payfee?fee=" + rr4v || 1)
            }
            tL5Q.fu1x("click", {
                type: "tobuyvip",
                name: "box",
                source: eJ0x.source || "song",
                sourceid: eJ0x.sourceid || xz6t || 0
            })
        } else if (d8f.action == "song") {
            location.dispatch2("/payfee?singleSong=true&songId=" + xz6t);
            tL5Q.fu1x("click", {
                type: "tobuyone",
                name: "box",
                source: eJ0x.source || "song",
                sourceid: eJ0x.sourceid || xz6t || 0
            })
        }
    }
    function Nx9o(bE9v) {
        l8d.fh0x({
            clazz: "m-layer-w2",
            bubble: !1,
            message: bE9v,
            btntxt: "知道了"
        })
    }
    function Nw9n(bE9v, P8H) {
        Nx9o((P8H || Z9Q).toast || bE9v)
    }
    l8d.ic1x = function(bE9v, D8v, t8l, bZr7k, bg9X) {
        bE9v = bE9v || "由于版权保护，您所在的地区暂时无法使用。";
        if (bZr7k && bg9X && bg9X.privilege && bg9X.privilege.toast) {
            x8p.bp9g("/api/song/toast", {
                query: {
                    id: bg9X.id
                },
                type: "json",
                onload: Nw9n.g8c(this, bE9v),
                onerror: Nw9n.g8c(this, bE9v)
            })
        } else if (D8v && t8l) {
            Q8I.NE9v(t8l, D8v, {
                conf: {
                    message: bE9v,
                    useCache: t8l != 18
                }
            })
        } else {
            Nx9o(bE9v)
        }
    };
    l8d.tY5d = function(rr4v, xz6t, t8l, eJ0x, na3x) {
        var bQ9H, pT4X = "m-popup-info",
        bpo8g = "单首购买",
        bpj8b = "马上去开通",
        cI0x = "唱片公司要求，当前歌曲须付费使用。",
        bER2x = true;
        try {
            bQ9H = top.api.feeMessage || {}
        } catch(e) {
            bQ9H = {}
        }
        if (rr4v == 1 || rr4v == 8 || rr4v == 16) {
            if (t8l == "song") {
                pT4X = "m-popup-song-buy";
                cI0x = bQ9H["vip2"] || cI0x;
                bpj8b = bQ9H["vip2button"] || "包月购买";
                bpo8g = bQ9H["vip2link"] || bpo8g;
                if (na3x && na3x.flag !== undefined) {
                    var bs9j = na3x.flag.toString(2).split("");
                    if (parseInt(bs9j.pop(), 10) == 1) {
                        bER2x = false
                    }
                }
            } else {
                cI0x = bQ9H["vip"] || cI0x
            }
        } else if (rr4v == 4) {
            cI0x = bQ9H["album"] || cI0x;
            bpj8b = "立即订购"
        } else {
            cI0x = bQ9H["unknow"] || cI0x
        }
        l8d.jK2x({
            clazz: "m-layer-w5",
            html: a7h.bX9O(pT4X, {
                songTxt: bpo8g,
                tip: cI0x,
                oktext: bpj8b,
                cctext: "以后再说",
                showSongText: bER2x
            }),
            onaction: bZu7n.en0x(null, rr4v, xz6t, eJ0x)
        })
    };
    l8d.bEP2x = function(hc1x, hd1x) {
        l8d.gD1x({
            title: "提示",
            message: "唱片公司要求，该歌曲须下载后播放",
            btnok: "下载",
            btncc: "取消",
            okstyle: "u-btn2-w1",
            ccstyle: "u-btn2-w1",
            action: function(t8l) {
                if (t8l == "ok") {
                    l8d.Jc7V({
                        id: hc1x,
                        type: hd1x
                    })
                }
            }
        })
    };
    l8d.ZR4V = function(oz3x, rr4v) {
        var bQ9H, cI0x = "唱片公司要求，当前歌曲须付费使用。";
        try {
            bQ9H = top.api.feeMessage || {}
        } catch(e) {
            bQ9H = {}
        }
        if (rr4v == 1 || rr4v == 8) {
            cI0x = bQ9H["vip"] || cI0x
        } else if (rr4v == 4) {
            cI0x = bQ9H["album"] || cI0x
        } else {
            cI0x = bQ9H["unknow"] || cI0x
        }
        return l8d.jK2x({
            clazz: "m-layer-w5",
            html: a7h.bX9O("m-popup-info", {
                tip: cI0x,
                oktext: "马上去开通",
                cctext: "以后再说"
            }),
            onaction: function(d8f) {
                if (d8f.action == "ok") {
                    location.dispatch2("/payfee?mvId=" + oz3x);
                    tL5Q.fu1x("click", {
                        type: "tobuyone",
                        name: "box",
                        source: "mv",
                        sourceid: oz3x || 0
                    })
                }
            }
        })
    };
    l8d.IH7A = function() {
        function compareFee(bZe7X, bZc7V) {
            var bv9m = {
                1 : 99,
                8 : 99,
                4 : 88,
                16 : 99
            };
            return (bv9m[bZe7X] || 0) - (bv9m[bZc7V] || 0)
        }
        return function(i8a, cI0x, um5r, eJ0x) {
            um5r = um5r || {};
            var ys7l = [],
            IG7z = {},
            bEN2x = 0,
            bEM2x = 0,
            IF7y = null;
            if (!i8a || !i8a.length) return ys7l;
            k8c.bb9S(i8a,
            function(bg9X) {
                var fm1x = l8d.oU4Y(bg9X);
                if (fm1x == 0) {
                    ys7l.push(bg9X)
                } else if (fm1x == 10) {
                    if (bg9X.privilege) {
                        bg9X.fee = bg9X.privilege.fee
                    }
                    if (compareFee(bg9X.fee, IG7z.fee) > 0) {
                        IG7z = bg9X
                    }
                } else if (fm1x == 11) {++bEN2x;
                    if (!um5r.play) ys7l.push(bg9X)
                } else if (fm1x == 1e3) {++bEM2x;
                    if (!um5r.download) ys7l.push(bg9X)
                } else if (fm1x == 100) {
                    IF7y = bg9X
                }
            });
            if (ys7l.length == 0 && cI0x) {
                if (bEN2x == i8a.length) {
                    var sc5h = i8a[0].privilege || {};
                    if (sc5h.payed) {
                        l8d.ic1x("唱片公司要求，该歌曲须下载后播放")
                    } else {
                        l8d.tY5d(sc5h.fee, null, null, eJ0x)
                    }
                } else if (bEM2x == i8a.length) {
                    l8d.ic1x("因版权方要求，该歌曲不支持下载")
                } else if (IG7z.id) {
                    l8d.tY5d(IG7z.fee, IG7z.id, null, eJ0x, IG7z.privilege)
                } else {
                    if (IF7y && i8a.length == 1 && IF7y.privilege && IF7y.privilege.st < 0 && IF7y.privilege.toast) {
                        l8d.ic1x(null, null, null, true, IF7y)
                    } else {
                        l8d.ic1x()
                    }
                }
            }
            return ys7l
        }
    } ();
    l8d.oU4Y = function(bg9X) {
        if (!bg9X) return 0;
        var fm1x = bg9X.privilege;
        if (bg9X.program) return 0;
        if (window.GAbroad) return 100;
        if (fm1x) {
            if (fm1x.st != null && fm1x.st < 0) {
                return 100
            }
            if (fm1x.fee > 0 && fm1x.fee != 8 && fm1x.payed == 0 && fm1x.pl <= 0) return 10;
            if (fm1x.fee == 16) return 11;
            if ((fm1x.fee == 0 || fm1x.payed) && fm1x.pl > 0 && fm1x.dl == 0) return 1e3;
            if (fm1x.pl == 0 && fm1x.dl == 0) return 100;
            return 0
        } else {
            var eh0x = bg9X.status != null ? bg9X.status: bg9X.st != null ? bg9X.st: 0;
            if (bg9X.status >= 0) return 0;
            if (bg9X.fee > 0) return 10;
            return 100
        }
    }
})(); (function() {
    var c8g = NEJ.P,
    Z9Q = NEJ.O,
    bn9e = NEJ.F,
    fj0x = NEJ.R,
    a7h = c8g("nej.e"),
    h8b = c8g("nej.v"),
    k8c = c8g("nej.u"),
    H8z = c8g("nej.ut"),
    y8q = c8g("nm.w"),
    b8h;
    if ( !! y8q.bEL2x) return;
    var cf9W = ~ [];
    cf9W = {
        bEK2x: ++cf9W,
        bYX7Q: (![] + "")[cf9W],
        jV2x: ++cf9W,
        IE7x: (![] + "")[cf9W],
        bbZ5e: (cf9W[cf9W] + "")[cf9W],
        bEE1x: ++cf9W,
        czv2x: ({} + "")[cf9W],
        bYI7B: (cf9W[cf9W] + "")[cf9W],
        bYG7z: (![] + "")[cf9W],
        No8g: ++cf9W,
        bcr5w: (!"" + "")[cf9W],
        czw2x: ++cf9W,
        Ak7d: ++cf9W,
        bEx1x: ({} + "")[cf9W],
        vI6C: ++cf9W,
        bYr7k: ++cf9W,
        czx2x: ++cf9W,
        czz2x: ++cf9W
    };
    cf9W.IC7v = (cf9W.IC7v = cf9W + "")[cf9W.Ak7d] + (cf9W.IB7u = cf9W.IC7v[cf9W.jV2x]) + (cf9W.bcL5Q = (cf9W.Gd9U + "")[cf9W.jV2x]) + (!cf9W + "")[cf9W.No8g] + (cf9W.Ge9V = cf9W.IC7v[cf9W.vI6C]) + (cf9W.Gd9U = (!"" + "")[cf9W.jV2x]) + (bYj7c = (!"" + "")[cf9W.bEE1x]) + cf9W.IC7v[cf9W.Ak7d] + cf9W.Ge9V + cf9W.IB7u + cf9W.Gd9U;
    cf9W.bcL5Q = cf9W.Gd9U + (!"" + "")[cf9W.No8g] + cf9W.Ge9V + bYj7c + cf9W.Gd9U + cf9W.bcL5Q;
    cf9W.Gd9U = cf9W.bEK2x[cf9W.IC7v][cf9W.IC7v];
    y8q.bEL2x = cf9W
})(); (function() {
    var c8g = NEJ.P,
    Z9Q = NEJ.O,
    h8b = c8g("nej.v"),
    a7h = c8g("nej.e"),
    N8F = c8g("nej.ui"),
    b8h;
    if ( !! N8F.TP2x) return;
    var io1x = a7h.sp5u(".#<uispace>{position:absolute;background:#fff;}");
    N8F.TP2x = NEJ.C();
    b8h = N8F.TP2x.O8G(N8F.Pz0x);
    b8h.bj9a = function(e8e) {
        this.bk9b(e8e);
        this.bT9K([[document, "click", this.rI5N.g8c(this)]]);
        this.bYf7Y = !!e8e.nostop;
        this.bEk1x = {
            top: e8e.top,
            left: e8e.left
        }
    };
    b8h.bA9r = function() {
        delete this.xi6c;
        delete this.boR8J;
        delete this.qw4A;
        delete this.bEh1x;
        delete this.Ub2x;
        delete this.bEk1x;
        this.bF9w()
    };
    b8h.ca9R = function() {
        this.lw2x = io1x
    };
    b8h.bS9J = function() {
        this.cc9T();
        this.zf7Y = this.m8e;
        h8b.s8k(this.m8e, "click", this.bXR7K.g8c(this))
    };
    b8h.rI5N = function(d8f) {
        if (d8f.button != 2) this.br9i()
    };
    b8h.bXR7K = function(d8f) {
        if (this.bYf7Y) return;
        h8b.si5n(d8f);
        var G8y = h8b.U8M(d8f);
        if (G8y.tagName == "A") h8b.cm9d(d8f)
    };
    b8h.bXN7G = function() {
        var cZ0x = /\s+/i;
        return function(nl3x) {
            nl3x = (nl3x || "").trim().toLowerCase().split(cZ0x);
            nl3x[0] = nl3x[0] || "bottom";
            nl3x[1] = nl3x[1] || "left";
            this.qw4A = nl3x
        }
    } ();
    b8h.bXJ7C = function(nl3x) {
        var o8g = {},
        mO3x = this.boR8J,
        czA2x = a7h.oQ4U(),
        cy9p = this.m8e.offsetWidth,
        ch9Y = this.m8e.offsetHeight;
        switch (nl3x[0]) {
        case "top":
            o8g.top = mO3x.top - ch9Y;
            o8g.left = nl3x[1] == "right" ? mO3x.left + mO3x.width - cy9p: mO3x.left;
            break;
        case "left":
            o8g.left = mO3x.left - cy9p;
            o8g.top = nl3x[1] == "bottom" ? mO3x.top + mO3x.height - ch9Y: mO3x.top;
            break;
        case "right":
            o8g.left = mO3x.left + mO3x.width;
            o8g.top = nl3x[1] == "bottom" ? mO3x.top + mO3x.height - ch9Y: mO3x.top;
            break;
        default:
            o8g.top = mO3x.top + mO3x.height;
            o8g.left = nl3x[1] == "right" ? mO3x.left + mO3x.width - cy9p: mO3x.left;
            break
        }
        return o8g
    };
    b8h.Jv7o = function() {
        if (!this.bEh1x) {
            this.gj1x(this.bEk1x);
            return
        }
        if ( !! this.Ub2x) {
            this.gj1x(this.xi6c);
            return
        }
        if ( !! this.boR8J) this.gj1x(this.bXJ7C(this.qw4A))
    };
    b8h.bXA7t = function(G8y, dl0x, d8f) {
        dl0x = dl0x || Z9Q;
        var bDR1x = a7h.oQ4U(),
        cP0x = h8b.iW2x(d8f) + (dl0x.left || 0),
        gU1x = h8b.lJ3x(d8f) + (dl0x.top || 0),
        cy9p = G8y.offsetWidth + (dl0x.right || 0),
        ch9Y = G8y.offsetHeight + (dl0x.bottom || 0),
        Iv7o = bDR1x.scrollWidth,
        boM8E = bDR1x.scrollHeight,
        boL8D = cP0x + cy9p,
        boK8C = gU1x + ch9Y;
        switch (this.qw4A[0]) {
        case "top":
            gU1x = boK8C > boM8E ? gU1x - ch9Y: gU1x;
            if (this.qw4A[1] == "right") {
                cP0x = cP0x - cy9p < 0 ? 0 : cP0x - cy9p
            } else {
                cP0x = boL8D > Iv7o ? Iv7o - cy9p: cP0x
            }
            break;
        case "left":
            cP0x = boL8D > Iv7o ? Iv7o - cy9p: cP0x;
            if (this.qw4A[1] == "top") {
                gU1x = boK8C > boM8E ? gU1x - ch9Y: gU1x
            } else {
                gU1x = gU1x - ch9Y < 0 ? gU1x: gU1x - ch9Y
            }
            break;
        case "right":
            cP0x = cP0x - cy9p < 0 ? 0 : cP0x - cy9p;
            if (this.qw4A[1] == "top") {
                gU1x = boK8C > boM8E ? gU1x - ch9Y: gU1x
            } else {
                gU1x = gU1x - ch9Y < 0 ? gU1x: gU1x - ch9Y
            }
            break;
        default:
            gU1x = gU1x - ch9Y < 0 ? gU1x: gU1x - ch9Y;
            if (this.qw4A[1] == "left") {
                cP0x = boL8D > Iv7o ? Iv7o - cy9p: cP0x
            } else {
                cP0x = cP0x - cy9p < 0 ? 0 : cP0x - cy9p
            }
            break
        }
        return {
            top: gU1x,
            left: cP0x
        }
    };
    b8h.boJ8B = function() {
        var bXq7j = function(G8y, dl0x) {
            G8y = a7h.B8t(G8y);
            if (!G8y) return;
            dl0x = dl0x || Z9Q;
            var be9V = a7h.hL1x(G8y);
            return {
                top: be9V.y - (dl0x.top || 0),
                left: be9V.x - (dl0x.left || 0),
                width: G8y.offsetWidth + (dl0x.right || 0),
                height: G8y.offsetHeight + (dl0x.bottom || 0)
            }
        };
        return function(e8e) {
            e8e = e8e || Z9Q;
            this.Ub2x = e8e.event;
            this.bXN7G(e8e.align);
            if ( !! this.Ub2x) this.xi6c = this.bXA7t(e8e.target, e8e.delta, this.Ub2x);
            this.boR8J = bXq7j(e8e.target, e8e.delta);
            this.bEh1x = !!e8e.fitable;
            this.L8D();
            return this
        }
    } ()
})(); (function() {
    var c8g = NEJ.P,
    Z9Q = NEJ.O,
    a7h = c8g("nej.e"),
    h8b = c8g("nej.v"),
    k8c = c8g("nej.u"),
    N8F = c8g("nej.ui"),
    b8h,
    K8C;
    if ( !! N8F.Ax7q) return;
    N8F.Ax7q = NEJ.C();
    b8h = N8F.Ax7q.O8G(N8F.XS3x);
    K8C = N8F.Ax7q.cl9c;
    N8F.Ax7q.czC2x = function() {
        var bXi6c = function(d8f, D8v, fv1x, jL2x, MV8N) {
            var cv9m, J8B = D8v + "-i",
            Q8I = fv1x.wY6S,
            bDG1x = !!jL2x.noclear,
            bDE1x = !!jL2x.toggled;
            if (k8c.gr1x(jL2x.onbeforeclick)) {
                var Vi2x = jL2x.noclear,
                bXa6U = jL2x.toggled;
                try {
                    jL2x.onbeforeclick(jL2x)
                } catch(e) {}
                bDG1x = !!jL2x.noclear;
                bDE1x = !!jL2x.toggled;
                jL2x.toggled = bXa6U;
                jL2x.noclear = Vi2x
            }
            var FT9K = Q8I[J8B];
            if (bDE1x && !!FT9K) {
                FT9K.br9i();
                return
            }
            h8b.bf9W(d8f);
            if (!bDG1x) {
                h8b.z8r(document, "click");
                cv9m = fv1x.A8s(jL2x)
            } else {
                cv9m = fv1x.crh1x(jL2x, !0)
            }
            Q8I[J8B] = cv9m;
            cv9m.vF6z("onbeforerecycle",
            function() {
                delete Q8I[J8B]
            });
            cv9m.boJ8B(MV8N)
        };
        return function(f8d, e8e) {
            f8d = a7h.B8t(f8d);
            if (!f8d) return this;
            if (!this.wY6S) this.wY6S = {};
            var D8v = a7h.kZ2x(f8d);
            if ( !! this.wY6S[D8v]) return this;
            e8e = NEJ.X({},
            e8e);
            var MV8N = NEJ.EX({
                align: "",
                delta: null,
                fitable: !1
            },
            e8e);
            MV8N.target = D8v;
            e8e.destroyable = !0;
            if (!e8e.fixed) {
                MV8N.fitable = !0;
                e8e.parent = document.body
            }
            this.wY6S[D8v] = [D8v, e8e.event || "click", bXi6c.en0x(null, D8v, this, e8e, MV8N)];
            h8b.s8k.apply(h8b, this.wY6S[D8v]);
            return this
        }
    } ();
    N8F.Ax7q.czF2x = function(f8d) {
        if (!this.wY6S) return this;
        var D8v = a7h.kZ2x(f8d),
        d8f = this.wY6S[D8v];
        if (!d8f) return this;
        delete this.wY6S[D8v];
        h8b.mx3x.apply(h8b, d8f);
        var cv9m = this.wY6S[D8v + "-i"];
        if ( !! cv9m) cv9m.br9i();
        return this
    };
    b8h.brK9B = function() {
        return N8F.TP2x.A8s(this.bW9N)
    };
    b8h.Pw0x = function() {
        K8C.Pw0x.apply(this, arguments);
        this.bW9N.top = null;
        this.bW9N.left = null;
        this.bW9N.nostop = !1
    };
    b8h.boJ8B = function(e8e) {
        if ( !! this.om3x) this.om3x.boJ8B(e8e);
        return this
    }
})(); (function() {
    var c8g = NEJ.P,
    ba9R = c8g("nej.ui"),
    n8f = c8g("nm.l"),
    b8h,
    K8C;
    n8f.boE8w = NEJ.C();
    b8h = n8f.boE8w.O8G(ba9R.Ax7q);
    b8h.bj9a = function(e8e) {
        e8e.nohack = true;
        this.bk9b(e8e)
    }
})(); (function() {
    var c8g = NEJ.P,
    a7h = c8g("nej.e"),
    n8f = c8g("nm.l"),
    b8h,
    K8C;
    n8f.X8P = NEJ.C();
    b8h = n8f.X8P.O8G(n8f.boE8w);
    K8C = n8f.X8P.cl9c;
    b8h.bj9a = function(e8e) {
        this.bk9b(e8e);
        this.ez0x = e8e.type || 1
    };
    b8h.bS9J = function() {
        this.cc9T();
        this.m8e = a7h.no3x(this.bWT6N());
        var i8a = a7h.db0x(this.m8e);
        this.pN4R = i8a[0];
        this.cp9g = i8a[1]
    };
    b8h.bWT6N = function() {
        return '<div class="sysmsg"><i class="u-icn u-icn-31"></i><span></span></div>'
    };
    b8h.Jv7o = function() {
        var C8u = {},
        cb9S = this.m8e.style,
        jj2x = a7h.oQ4U(),
        nr3x = {
            left: jj2x.scrollLeft,
            top: jj2x.scrollTop
        },
        dl0x = {
            left: jj2x.clientWidth - this.m8e.offsetWidth,
            top: jj2x.clientHeight - this.m8e.offsetHeight
        };
        C8u.top = Math.max(0, nr3x.top + dl0x.top / 2);
        C8u.left = Math.max(0, nr3x.left + dl0x.left / 2);
        this.om3x.gj1x(C8u)
    };
    b8h.L8D = function(e8e) {
        K8C.L8D.call(this);
        this.Jv7o();
        this.ez0x == 1 ? a7h.eR0x(this.pN4R, "u-icn-32", "u-icn-31") : a7h.eR0x(this.pN4R, "u-icn-31", "u-icn-32");
        this.cp9g.innerHTML = e8e.tip || ""
    };
    window.g_showTipCard = n8f.X8P.L8D = function() {
        var eE0x;
        return function(e8e) {
            clearTimeout(eE0x);
            if (e8e.parent === undefined) e8e.parent = document.body;
            if (e8e.autoclose === undefined) e8e.autoclose = true;
            e8e.clazz = "m-sysmsg"; !! this.eX0x && this.eX0x.S8K();
            this.eX0x = this.A8s(e8e);
            this.eX0x.L8D(e8e);
            if (e8e.autoclose) eE0x = setTimeout(this.br9i.g8c(this), 2e3)
        }.g8c(n8f.X8P)
    } ();
    n8f.X8P.br9i = function() { !! this.eX0x && this.eX0x.br9i()
    }
})(); (function() {
    var c8g = NEJ.P,
    x8p = c8g("nej.j"),
    k8c = c8g("nej.u");
    if (window["GRef"] && window["GRef"] == "mail") {
        x8p.bp9g = x8p.bp9g.er0x(function(d8f) {
            e8e = d8f.args[1];
            e8e.query = e8e.query || {};
            if (k8c.fw1x(e8e.query)) e8e.query = k8c.hD1x(e8e.query);
            e8e.query.ref = "mail"
        })
    }
})(); (function() {
    var c8g = NEJ.P,
    bn9e = NEJ.F,
    fj0x = NEJ.R,
    H8z = c8g("nej.ut"),
    k8c = c8g("nej.u"),
    h8b = c8g("nej.v"),
    x8p = c8g("nej.j"),
    q8i = c8g("nm.d"),
    n8f = c8g("nm.l"),
    J8B = "playlist-tracks_",
    b8h;
    q8i.ff0x({
        "playlist_my-list": {
            url: "/api/user/playlist",
            type: "GET",
            format: function(P8H, e8e) {
                this.bWS6M(P8H.playlist);
                return {
                    total: 0,
                    list: fj0x
                }
            },
            onerror: function() {
                this.z8r("onlisterror")
            }
        },
        "playlist_new-add": {
            url: "/api/playlist/create",
            format: function(P8H, e8e) {
                var mD3x = P8H.playlist;
                mD3x.creator = GUser;
                mD3x.isHost = !0;
                mD3x.typeFlag = "playlist";
                return mD3x
            },
            finaly: function(d8f, e8e) {
                h8b.z8r(q8i.hw1x, "listchange", d8f)
            },
            onmessage: function() {
                var lU3x = {
                    507 : "歌单数量超过上限！",
                    405 : "你操作太快了，请休息一会再试！",
                    406 : "你操作太快了，请休息一会再试！"
                };
                return function(cg9X) {
                    n8f.X8P.L8D({
                        tip: lU3x[cg9X] || "创建失败",
                        type: 2
                    })
                }
            } ()
        },
        "playlist_new-del": {
            url: "/api/playlist/delete",
            type: "GET",
            filter: function(e8e) {
                e8e.id = e8e.data.pid
            },
            finaly: function(d8f, e8e) {
                h8b.z8r(q8i.hw1x, "listchange", d8f)
            },
            onmessage: function() {
                var lU3x = {
                    404 : "歌单不存在！",
                    405 : "你操作太快了，请休息一会再试！",
                    406 : "你操作太快了，请休息一会再试！"
                };
                return function(cg9X) {
                    n8f.X8P.L8D({
                        tip: lU3x[cg9X] || "删除失败",
                        type: 2
                    })
                }
            } ()
        },
        "playlist_fav-add": {
            type: "GET",
            url: "/api/playlist/subscribe",
            filter: function(e8e) {
                var eJ0x = e8e.ext || {};
                e8e.ext = NEJ.X(eJ0x, e8e.data);
                e8e.data = {
                    id: e8e.ext.id
                }
            },
            format: function(P8H, e8e) {
                n8f.X8P.L8D({
                    tip: "收藏成功" + (P8H.point > 0 ? ' 获得<em class="s-fc6">' + P8H.point + "积分</em>": "")
                });
                var p8h = e8e.ext;
                p8h.subscribedCount++;
                return p8h
            },
            finaly: function(d8f, e8e) {
                h8b.z8r(q8i.bWI6C, "listchange", d8f);
                h8b.z8r(q8i.bWI6C, "itemchange", {
                    attr: "subscribedCount",
                    data: d8f.data
                })
            },
            onmessage: function() {
                var lU3x = {
                    404 : "歌单不存在！",
                    501 : "歌单已经收藏！",
                    506 : "歌单收藏数量超过上限！"
                };
                return function(cg9X) {
                    n8f.X8P.L8D({
                        type: 2,
                        tip: lU3x[cg9X] || "收藏失败，请稍后再试！"
                    })
                }
            } ()
        },
        "playlist_fav-del": {
            url: "/api/playlist/unsubscribe",
            type: "GET",
            filter: function(e8e) {
                e8e.id = e8e.data.id = e8e.data.pid
            },
            finaly: function(d8f, e8e) {
                h8b.z8r(q8i.hw1x, "listchange", d8f)
            },
            onmessage: function() {
                var lU3x = {
                    404 : "歌单不存在！",
                    405 : "你操作太快了，请休息一会再试！",
                    406 : "你操作太快了，请休息一会再试！"
                };
                return function(cg9X) {
                    n8f.X8P.L8D({
                        tip: lU3x[cg9X],
                        type: 2
                    })
                }
            } ()
        },
        "playlist_new-update": {
            url: ["playlist-update-name", "playlist-update-tag", "playlist-update-desc"],
            filter: function(e8e) {
                var j8b = e8e.data,
                VL2x = {};
                VL2x["playlist-update-name"] = {
                    id: j8b.id,
                    name: j8b.name
                };
                VL2x["playlist-update-tag"] = {
                    id: j8b.id,
                    tags: j8b.tags.join(";")
                };
                VL2x["playlist-update-desc"] = {
                    id: j8b.id,
                    desc: j8b.description
                };
                e8e.data = VL2x;
                e8e.ext = j8b
            },
            format: function(T8L, pH4L, MO8G, e8e) {
                if (T8L.code == 200 && pH4L.code == 200 && MO8G.code == 200) {
                    e8e.ext.allSuccess = true;
                    n8f.X8P.L8D({
                        tip: "保存成功"
                    })
                } else if (T8L.code == 407 || pH4L.code == 407 || MO8G.code == 407) {
                    e8e.ext.allSuccess = false;
                    n8f.X8P.L8D({
                        type: 2,
                        tip: "输入内容包含关键字"
                    })
                } else {
                    e8e.ext.allSuccess = false;
                    n8f.X8P.L8D({
                        type: 2,
                        tip: "保存失败"
                    })
                }
                return this.ex0x(e8e.ext.id)
            },
            finaly: function(d8f, e8e) {
                h8b.z8r(q8i.hw1x, "listchange", d8f)
            },
            onmessage: function(cg9X) {
                n8f.X8P.L8D({
                    type: 2,
                    tip: "保存失败"
                })
            }
        },
        "playlist-update-name": {
            url: "/api/playlist/update/name",
            format: function(P8H, e8e) {
                var p8h = this.ex0x(e8e.ext.id);
                if (P8H.code == 200) p8h.name = e8e.ext.name;
                return P8H
            }
        },
        "playlist-update-tag": {
            url: "/api/playlist/tags/update",
            format: function(P8H, e8e) {
                var p8h = this.ex0x(e8e.ext.id);
                if (P8H.code == 200) p8h.tags = e8e.ext.tags;
                return P8H
            }
        },
        "playlist-update-desc": {
            url: "/api/playlist/desc/update",
            format: function(P8H, e8e) {
                var p8h = this.ex0x(e8e.ext.id);
                if (P8H.code == 200) p8h.description = e8e.ext.description;
                return P8H
            }
        },
        "playlist-update-cover": {
            url: "/api/playlist/cover/update",
            filter: function(e8e) {
                e8e.url = e8e.data.url;
                delete e8e.data.url
            },
            format: function(P8H, e8e) {
                n8f.X8P.L8D({
                    tip: "保存成功"
                });
                var p8h = this.ex0x(e8e.data.id);
                p8h.coverImgUrl = e8e.url;
                e8e.ext = p8h;
                return p8h
            },
            onmessage: function(cg9X) {
                n8f.X8P.L8D({
                    type: 2,
                    tip: "保存失败"
                })
            },
            finaly: function(d8f, e8e) {
                h8b.z8r(q8i.hw1x, "itemchange", {
                    attr: "coverImgUrl",
                    data: e8e.ext
                })
            }
        },
        "playlist-upcount": {
            url: "/api/playlist/update/playcount",
            type: "GET",
            format: function(P8H, e8e) {
                var mD3x = this.ex0x(e8e.data.id);
                if (!mD3x) return;
                mD3x.playCount++;
                h8b.z8r(q8i.hw1x, "itemchange", {
                    attr: "playcount",
                    data: mD3x
                })
            }
        }
    });
    q8i.hw1x = NEJ.C();
    b8h = q8i.hw1x.O8G(q8i.hn1x);
    b8h.cs9j = function() {
        this.cx9o()
    };
    b8h.bDv1x = function() {
        var de0x = GUser.userId;
        this.la2x({
            limit: 1001,
            key: "playlist_my-" + de0x,
            data: {
                offset: 0,
                limit: 1001,
                uid: de0x
            }
        })
    };
    b8h.bWS6M = function(i8a) {
        var de0x = GUser.userId,
        iv2x = [],
        bDr1x = [];
        k8c.bb9S(i8a,
        function(p8h) {
            p8h.typeFlag = "playlist";
            if (p8h.creator && p8h.creator.userId == de0x) {
                if (p8h.specialType == 5) p8h.name = "我喜欢的音乐";
                p8h.isHost = !0;
                iv2x.push(p8h)
            } else {
                bDr1x.push(p8h)
            }
        });
        this.ui5n("playlist_new-" + de0x, iv2x);
        this.ui5n("playlist_fav-" + de0x, bDr1x)
    };
    b8h.bWw6q = function(j8b) {
        this.cn9e("playlist-update-cover", {
            data: j8b
        })
    };
    b8h.czN2x = function() {
        var MM8E = this.bWu6o.B8t("host-plist");
        if (MM8E.length == 0) {
            return
        }
        if (MM8E.length == 1 && MM8E[0].trackCount <= 0) {
            return
        }
        for (var i = 0,
        len = MM8E.length; i < len; i++) {
            var p8h = MM8E[i];
            if (p8h.trackCount > 0) return p8h.id
        }
        return this.bWu6o.B8t("host-plist")[0].id
    };
    b8h.bWs6m = function(D8v) {
        if (GUser && GUser.userId > 0) {
            this.cn9e("playlist-upcount", {
                data: {
                    id: D8v
                }
            })
        }
    };
    b8h.Dd8V = function() {
        if (GUser && GUser.userId > 0) {
            return ! 0
        } else {
            top.login();
            return ! 1
        }
    };
    b8h.czP2x = function() {
        return GUser.userId
    };
    b8h.bow8o = function(p8h) {
        if (p8h.userId == GUser.userId && p8h.specialType == 5) p8h.name = "我喜欢的音乐";
        h8b.z8r(this.constructor, "itemchange", {
            data: this.zW7P(p8h)
        });
        return p8h
    };
    H8z.fE1x.A8s({
        element: q8i.hw1x,
        event: ["listchange", "playcountchange", "itemchange"]
    })
})(); (function() {
    var c8g = NEJ.P,
    fj0x = NEJ.R,
    bn9e = NEJ.F,
    Z9Q = NEJ.O,
    H8z = c8g("nej.ut"),
    h8b = c8g("nej.v"),
    k8c = c8g("nej.u"),
    l8d = c8g("nm.x"),
    q8i = c8g("nm.d"),
    n8f = c8g("nm.l"),
    b8h,
    K8C;
    q8i.ff0x({
        "program-get": {
            url: "/api/dj/program/detail",
            format: function(P8H) {
                return P8H.program
            }
        },
        "program_djradio-list": {
            type: "GET",
            url: "/api/dj/program/byradio",
            filter: function(e8e) {
                e8e.data.limit = 1e3;
                delete e8e.data.id
            },
            format: function(P8H, e8e) {
                var bDg1x = [],
                oK4O = P8H.programs;
                if (oK4O) {
                    for (var i = 0,
                    l = oK4O.length; i < l; i++) {
                        if (oK4O[i].programFeeType < 10 || oK4O[i].buyed) {
                            bDg1x.push(oK4O[i])
                        }
                    }
                }
                return bDg1x
            }
        },
        "program_fav-list": {
            url: "/api/djprogram/subscribed/paged",
            format: function(P8H, e8e) {
                return P8H.programs
            },
            onerror: "onlisterror"
        },
        "program_fav-add": {
            url: "/api/djprogram/subscribe",
            filter: function(e8e) {
                e8e.ext = e8e.data;
                e8e.data = {
                    id: e8e.ext.id
                };
                e8e.id = e8e.data.id
            },
            format: function(P8H, e8e) {
                n8f.X8P.L8D({
                    tip: "收藏成功"
                });
                var p8h = e8e.ext;
                p8h.subscribedCount++;
                p8h.subscribed = !0;
                return p8h
            },
            finaly: function(d8f, e8e) {
                h8b.z8r(q8i.qj4n, "listchange", d8f)
            },
            onmessage: function() {
                var lU3x = {
                    404 : "节目不存在！",
                    501 : "节目已收藏！"
                };
                return function(cg9X) {
                    n8f.X8P.L8D({
                        type: 2,
                        tip: lU3x[cg9X] || "收藏失败！"
                    })
                }
            } ()
        },
        "program_fav-del": {
            url: "/api/djprogram/unsubscribe",
            finaly: function(d8f, e8e) {
                h8b.z8r(q8i.qj4n, "listchange", d8f)
            },
            onmessage: function() {
                var lU3x = {
                    404 : "节目不存在！",
                    502 : "没有收藏此节目！"
                };
                return function(cg9X) {
                    l8d.bou8m({
                        txt: lU3x[cg9X] || "取消收藏失败！"
                    })
                }
            } ()
        },
        "program-update-count": {
            type: "GET",
            url: "/api/dj/program/listen",
            filter: function(e8e) {
                var p8h = this.ex0x(e8e.data.id) || Z9Q;
                e8e.ext = (p8h.listenerCount || 0) + 1
            },
            format: function(P8H, e8e) {
                var p8h = this.ex0x(e8e.data.id);
                if ( !! p8h) {
                    p8h.listenerCount = Math.max(e8e.ext, p8h.listenerCount || 0)
                }
            },
            finaly: function(d8f, e8e) {
                h8b.z8r(q8i.qj4n, "itemchange", {
                    attr: "playCount",
                    data: this.ex0x(e8e.data.id)
                })
            }
        },
        "program-like": {
            url: "/api/resource/like",
            filter: function(e8e) {
                e8e.data = {
                    threadId: "A_DJ_1_" + e8e.id
                }
            },
            format: function(P8H, e8e) {
                var p8h = e8e.ext.data || this.ex0x(e8e.id);
                p8h.liked = true;
                p8h.likedCount++;
                e8e.ext.data = p8h;
                try {
                    top.player.setLike(p8h)
                } catch(e) {}
                return p8h
            },
            finaly: function(d8f, e8e) {
                h8b.z8r(q8i.qj4n, "itemchange", {
                    attr: "likedCount",
                    data: e8e.ext.data
                })
            }
        },
        "program-unlike": {
            url: "/api/resource/unlike",
            filter: function(e8e) {
                e8e.data = {
                    threadId: "A_DJ_1_" + e8e.id
                }
            },
            format: function(P8H, e8e) {
                var p8h = e8e.ext.data || this.ex0x(e8e.id);
                p8h.liked = false;
                p8h.likedCount--;
                e8e.ext.data = p8h;
                try {
                    top.player.setLike(p8h)
                } catch(e) {}
                return p8h
            },
            finaly: function(d8f, e8e) {
                h8b.z8r(q8i.qj4n, "itemchange", {
                    attr: "likedCount",
                    data: e8e.ext.data
                })
            }
        }
    });
    q8i.qj4n = NEJ.C();
    b8h = q8i.qj4n.O8G(q8i.hn1x);
    b8h.czT2x = function() {
        var de0x = GUser.userId;
        this.la2x({
            limit: 1001,
            key: "program_fav-" + de0x,
            data: {
                offset: 0,
                limit: 1e3,
                uid: de0x
            }
        })
    };
    b8h.czV2x = function(cT0x) {
        var oH4L = cT0x[this.wm6g];
        l8d.bVM6G(4,
        function(Q8I) {
            Q8I.ui5n("track_program-" + oH4L, cT0x.songs)
        });
        delete cT0x.songs;
        var bJ9A = cT0x.mainSong;
        l8d.bVM6G(4,
        function(Q8I) {
            Q8I.ui5n("track_program_main-" + oH4L, !bJ9A ? [] : [bJ9A])
        });
        cT0x.mainSong = (bJ9A || Z9Q).id
    };
    b8h.czW2x = function(D8v) {
        var cT0x = this.ex0x(D8v),
        de0x = localCache.TV2x("host.profile.userId");
        return !! cT0x && cT0x.dj.userId == de0x
    };
    b8h.czX2x = function(D8v) {
        return ! 1
    };
    b8h.bow8o = function(p8h) {
        h8b.z8r(this.constructor, "itemchange", {
            attr: "detail",
            data: this.zW7P(p8h)
        });
        return p8h
    };
    b8h.bWs6m = function(D8v) {
        this.cn9e("program-update-count", {
            data: {
                id: D8v
            }
        })
    };
    l8d.bCI1x = function(e8e) {
        var Q8I = q8i.qj4n.A8s({
            onitemadd: function() { (e8e.onsuccess || bn9e)()
            },
            onerror: function() { (e8e.onerror || bn9e)()
            }
        });
        if (e8e.data.liked) {
            Q8I.MI8A(e8e.data)
        } else {
            Q8I.vy6s(e8e.data)
        }
    };
    b8h.vy6s = function(cT0x) {
        if (!l8d.gN1x()) return;
        var co9f = {
            ext: {}
        };
        if (k8c.lg2x(cT0x)) {
            co9f.id = cT0x.id;
            co9f.ext.data = cT0x
        } else {
            co9f.id = cT0x
        }
        this.cn9e("program-like", co9f)
    };
    b8h.MI8A = function(cT0x) {
        if (!l8d.gN1x()) return;
        var co9f = {
            ext: {}
        };
        if (k8c.lg2x(cT0x)) {
            co9f.id = cT0x.id;
            co9f.ext.data = cT0x
        } else {
            co9f.id = cT0x
        }
        this.cn9e("program-unlike", co9f)
    };
    H8z.fE1x.A8s({
        element: q8i.qj4n,
        event: ["listchange", "itemchange"]
    })
})(); (function() {
    var c8g = NEJ.P,
    bn9e = NEJ.F,
    fj0x = NEJ.R,
    H8z = c8g("nej.ut"),
    k8c = c8g("nej.u"),
    h8b = c8g("nej.v"),
    x8p = c8g("nej.j"),
    q8i = c8g("nm.d"),
    n8f = c8g("nm.l"),
    l8d = c8g("nm.x"),
    J8B = "playlist-tracks_",
    l8d = c8g("nm.x"),
    b8h;
    q8i.ff0x({
        "track-get": {
            url: "/api/v3/song/detail",
            filter: function(e8e) {
                e8e.data.c = JSON.stringify([{
                    id: e8e.data.id
                }])
            },
            format: function(P8H, e8e) {
                var bg9X = l8d.DH8z(P8H.songs[0]);
                bg9X.privilege = P8H.privileges[0];
                return bg9X
            }
        },
        "track_playlist-list": {
            url: "/api/v3/playlist/detail",
            filter: function(e8e) {
                e8e.data.n = 1e3
            },
            format: function(P8H, e8e) {
                var gW1x = [];
                this.sw5B.bow8o(P8H.playlist);
                k8c.bb9S(P8H.playlist.tracks,
                function(bJ9A, r8j) {
                    var bCA1x = l8d.DH8z(bJ9A);
                    bCA1x.privilege = P8H.privileges[r8j];
                    gW1x.push(bCA1x)
                },
                this);
                return gW1x
            }
        },
        "track_album-list": {
            url: "/api/v1/album/{id}",
            format: function(P8H, e8e) {
                var gW1x = [];
                k8c.bb9S(P8H.songs,
                function(bg9X) {
                    gW1x.push(l8d.DH8z(bg9X))
                });
                return gW1x
            }
        },
        "track_playlist-add": {
            url: "/api/playlist/manipulate/tracks",
            filter: function(e8e) {
                var bv9m = {},
                j8b = e8e.data,
                bVg6a = this.hi1x(e8e.key) || [];
                DL8D = [];
                k8c.bb9S(bVg6a,
                function(bJ9A) {
                    var D8v = k8c.lg2x(bJ9A) ? bJ9A.id: bJ9A;
                    bv9m[D8v] = true
                });
                e8e.ext = [];
                k8c.bb9S(j8b.tracks,
                function(bJ9A) {
                    var D8v = k8c.lg2x(bJ9A) ? bJ9A.id: bJ9A;
                    if (!bv9m[D8v]) {
                        DL8D.push(D8v);
                        bv9m[D8v] = true;
                        e8e.ext.push(bJ9A)
                    }
                });
                j8b.trackIds = JSON.stringify(DL8D);
                j8b.op = "add";
                if (!DL8D.length) {
                    e8e.value = {
                        code: 502
                    }
                }
            },
            format: function(P8H, e8e) {
                n8f.X8P.L8D({
                    tip: "已添加至歌单"
                });
                var mD3x = this.sw5B.ex0x(e8e.data.pid);
                if ( !! P8H.coverImgUrl) mD3x.coverImgUrl = P8H.coverImgUrl;
                k8c.mt3x(e8e.ext,
                function(bJ9A) {
                    this.xJ6D(e8e, k8c.lg2x(bJ9A) ? bJ9A: null);
                    if ( !! mD3x) mD3x.trackCount++
                },
                this);
                h8b.z8r(q8i.hw1x, "itemchange", {
                    data: mD3x || {},
                    cmd: "add"
                });
                this.z8r("onaddsuccess");
                return null
            },
            finaly: function(d8f, e8e) {
                h8b.z8r(q8i.vw6q, "listchange", {
                    key: e8e.key,
                    action: "refresh"
                });
                var oH4L = e8e.data.pid,
                cu9l = this.jn2x(e8e.key)
            },
            onmessage: function() {
                var lU3x = {
                    502 : "歌曲已存在！",
                    505 : "歌单已满！"
                };
                return function(cg9X) {
                    setTimeout(function() {
                        n8f.X8P.L8D({
                            tip: lU3x[cg9X] || "添加失败，请稍后再试！",
                            type: 2
                        })
                    },
                    0)
                }
            } ()
        },
        "track_playlist-del": {
            url: "/api/playlist/manipulate/tracks",
            filter: function(e8e) {
                var j8b = e8e.data;
                e8e.ext = j8b.trackIds;
                j8b.trackIds = JSON.stringify(j8b.trackIds);
                j8b.op = "del"
            },
            format: function(P8H, e8e) {
                var mD3x = this.sw5B.ex0x(e8e.data.pid);
                k8c.bb9S(e8e.ext,
                function(D8v) {
                    this.bpM8E({
                        id: D8v,
                        key: "track_playlist-" + e8e.data.pid
                    },
                    !0);
                    if ( !! mD3x) mD3x.trackCount = Math.max(0, mD3x.trackCount - 1)
                },
                this);
                h8b.z8r(q8i.hw1x, "itemchange", {
                    data: mD3x || {},
                    cmd: "del"
                });
                return null
            },
            finaly: function(d8f, e8e) {
                h8b.z8r(q8i.vw6q, "listchange", {
                    key: e8e.key,
                    action: "refresh"
                })
            },
            onmessage: function(cg9X) {
                l8d.bou8m({
                    text: "歌曲删除失败！"
                })
            }
        },
        "track_program-list": {
            url: "/api/dj/program/detail",
            format: function(P8H, e8e) {
                return this.bCy1x.bow8o(P8H.program).songs
            },
            onerror: "onlisterror"
        },
        "track_listen_record-list": {
            url: "/api/v1/play/record",
            format: function(P8H, e8e) {
                var i8a = [];
                if (e8e.data.type == -1) {
                    if (P8H.weekData && P8H.weekData.length) {
                        e8e.data.type = 1
                    } else {
                        e8e.data.type = 0
                    }
                }
                if (e8e.data.type == 1) {
                    i8a = this.bCw1x(P8H.weekData)
                } else {
                    i8a = this.bCw1x(P8H.allData)
                }
                return i8a
            },
            onerror: "onlisterror"
        },
        "track_day-list": {
            url: "/api/v2/discovery/recommend/songs",
            format: function(P8H, e8e) {
                var nn3x = [],
                i8a = P8H.recommend || [];
                k8c.bb9S(i8a,
                function(bg9X, r8j) {
                    nn3x.push({
                        action: "recommendimpress",
                        json: {
                            alg: bg9X.alg,
                            scene: "user-song",
                            position: r8j,
                            id: bg9X.id
                        }
                    })
                });
                this.kU2x.YJ3x(nn3x);
                e8e.limit = i8a.length;
                return i8a
            },
            onerror: "onlisterror"
        },
        "track_lyric-get": {
            type: "GET",
            url: "/api/song/lyric",
            filter: function(e8e) {
                e8e.data.lv = 0;
                e8e.data.tv = 0
            },
            format: function(o8g, e8e) {
                return o8g
            },
            onload: "onlyricload",
            onerror: "onlyricerror"
        }
    });
    q8i.vw6q = NEJ.C();
    b8h = q8i.vw6q.O8G(q8i.hn1x);
    b8h.cs9j = function() {
        this.cx9o();
        this.sw5B = q8i.hw1x.A8s();
        this.bCy1x = q8i.qj4n.A8s();
        this.kU2x = q8i.hM1x.A8s()
    };
    b8h.bCw1x = function(i8a) {
        var o8g = [],
        fc0x = 0;
        k8c.bb9S(i8a,
        function(p8h, r8j) {
            var bg9X = l8d.DH8z(p8h.song);
            if (r8j == 0) {
                fc0x = p8h.score
            }
            bg9X.max = fc0x;
            bg9X.playCount = p8h.playCount;
            bg9X.score = p8h.score;
            o8g.push(bg9X)
        });
        return o8g
    };
    H8z.fE1x.A8s({
        element: q8i.vw6q,
        event: ["listchange"]
    })
})(); (function() {
    var c8g = NEJ.P,
    Z9Q = NEJ.O,
    cW0x = c8g("nm.pc");
    var boj8b = {
        playlist: "A_PL_0_",
        dj: "A_DJ_1_",
        program: "A_DJ_1_",
        album: "R_AL_3_",
        song: "R_SO_4_"
    };
    var qW4a = function(bQ9H) {
        var NQ9H = "orpheus://orpheus";
        if (GEnvType == "local") NQ9H = "http://igame.163.com";
        window.top.postMessage(JSON.stringify(bQ9H), NQ9H)
    };
    var bUW6Q = function(lH3x) {
        var kd2x = "http://" + location.host + "/",
        ME8w = /(igame|music)\.163\.com\/(song|album|playlist|dj|event|artist|mv|djradio|topic|video|program|user\/home|activity)\?id=(\w+)(&uid=(\d+))?/,
        fn1x = ME8w.exec(lH3x);
        if (!fn1x) return bUV6P(lH3x);
        var hd1x = fn1x[2],
        hc1x = fn1x[3],
        de0x = fn1x[4] || "",
        iH2x = "";
        switch (hd1x) {
        case "album":
            iH2x = "#/m/album/comment/?rid=" + boj8b[hd1x] + hc1x + "&id=" + hc1x;
            break;
        case "playlist":
            iH2x = "#/m/playlist/comment/?rid=" + boj8b[hd1x] + hc1x + "&id=" + hc1x;
            break;
        case "song":
        case "dj":
        case "program":
            iH2x = "#/m/song?rid=" + boj8b[hd1x] + hc1x;
            break;
        case "event":
            iH2x = "#/m/friend/event/?id=" + hc1x + "&uid=" + de0x;
            break;
        case "user/home":
            iH2x = "#/m/personal/?uid=" + hc1x;
            break;
        case "mv":
            iH2x = "#/m2/mv/?id=" + hc1x;
            break;
        case "activity":
            iH2x = "#/m/friend/activity?id=" + hc1x;
            break;
        case "video":
            iH2x = "#/m2/mv/?id=" + hc1x + "&type=1";
            break;
        default:
            iH2x = "#/m/" + hd1x + "/?id=" + hc1x
        }
        return kd2x + iH2x
    };
    var bUV6P = function(lH3x) {
        var bUN6H = /http:\/\/player\.youku\.com\/embed\/(.+)/;
        var fn1x = bUN6H.exec(lH3x);
        if (fn1x) return "http://v.youku.com/v_show/id_" + fn1x[1];
        return lH3x
    };
    cW0x.eu0x = function(hd1x, hc1x) {
        qW4a({
            name: "play",
            args: {
                type: hd1x,
                id: hc1x
            }
        })
    };
    cW0x.fH1x = function() {
        qW4a({
            name: "pause"
        })
    };
    cW0x.AJ7C = function(lH3x) {
        qW4a({
            name: "open",
            args: {
                link: bUW6Q(lH3x)
            }
        })
    };
    cW0x.mr3x = function(hd1x, hc1x) {
        qW4a({
            name: "share",
            args: {
                type: hd1x,
                id: hc1x
            }
        })
    };
    cW0x.bCo1x = function(hd1x, hc1x) {
        qW4a({
            name: "comment",
            args: {
                type: hd1x,
                id: hc1x
            }
        })
    };
    cW0x.bUH6B = function() {
        qW4a({
            name: "init"
        })
    };
    cW0x.MD8v = function(ch9Y) {
        qW4a({
            name: "setHeight",
            args: {
                height: ch9Y
            }
        })
    };
    cW0x.ji2x = function(bE9v, dw0x) {
        qW4a({
            name: "toast",
            args: {
                message: bE9v || "",
                state: dw0x
            }
        })
    };
    cW0x.XR3x = function(lH3x) {
        qW4a({
            name: "login",
            args: {
                link: lH3x
            }
        })
    };
    cW0x.bCl1x = function(AO8G) {
        qW4a({
            name: "topbar",
            args: {
                show: !!AO8G
            }
        })
    };
    cW0x.bUA6u = function(bu9l) {
        qW4a({
            name: "refreshtopbar",
            args: {
                info: bu9l
            }
        })
    };
    cW0x.bUy6s = function(bs9j, r8j) {
        qW4a({
            name: "big",
            args: {
                arr: bs9j,
                index: r8j
            }
        })
    };
    cW0x.Jc7V = function(cK0x) {
        qW4a({
            name: "download",
            args: {
                img: cK0x
            }
        })
    }
})(); (function() {
    function J() {
        var d = "6skV4PUYecGhx07l".split("");
        this.d = function(f) {
            if (null == f || void 0 == f) return f;
            if (0 != f.length % 2) throw Error("1100");
            for (var b = [], c = 0; c < f.length; c++) {
                0 == c % 2 && b.push("%");
                for (var g = d,
                a = 0; a < g.length; a++) if (f.charAt(c) == g[a]) {
                    b.push(a.toString(16));
                    break
                }
            }
            return decodeURIComponent(b.join(""))
        }
    }
    var k = (new J).d,
    d = (new J).d,
    e = (new J).d,
    f = (new J).d,
    g = (new J).d; (function() {
        var B = [e("44UsY4UP"), e("40UcU7UcUkUsYkP6UxYPUYUcU7"), d("U4UPUVUlU4UPPPPk4c4VUlU0Y6UlU7UPU7Y4"), f("47P6P6UxUsYcUPYkPVUeUPUxUx"), f("40PVk6PkUPUUUPYkUPU7UVUPk6PVUsU7YVk6PVUPYkUcUU"), e("4eUcYkUsUYUcU7Ulk6PVUsU7YVk64Y4k"), d("YVUPYkUcUU"), g("UYUPY44VUlU7Y4UPYeY4")],
        J = [g("YPU7UcUUUlYkU0VkUU")],
        b = [d(""), g("4YYkUsYcP4UPYeY4"), k("Y6UsYkUPU7Y4"), e("7Phchx7PcxeU"), k("Y6UxYPUYUcU7YV"), d("4sU4UlUkUP4PYe40UsU744UPY4UPUVY4"), e("V6V6VsV6"), d("4YUlUlUYUxUPk64PUsYkY4Uek6P6UxYPUYUcU7"), k("PUUPUPY4UxUPk6P4PUk64VUlYkUP"), f("V6V6V6VY"), f("V6V6V6V4"), d("V6V6V6Vk"), d("V6V6V6VV"), g("V6V6V6V6"), e("V6V6V6Vs"), g("PPU7UcY4Yck6P6UxUsYcUPYk"), d("PVUhYcY6UPk6PYUPUkk6P6UxYPUYUcU7"), d("PYUPUk4hUcY4k0UcU7Y4UPUYYkUcUPYkY4UPk6P6444U"), e("4kUPUxUxk640P4"), e("V6V6V6Ve"), g("UYUPY4PVYPY6Y6UlYkY4UPU44PYeY4UPU7YVUcUlU7YV"), d("YVUPY4P4UcU0UP"), e("V6V6V6Vc"), g("PVUsUUUPPVUPUsYkUVUe"), d("kk"), f("k4"), f("PPU7UcYUUPYkYV"), e("kP"), e("kU"), f("kY"), f("VsVsVsV6"), d("UYUPY4k6Y6UxYPUYUcU7k6YVY4YkUcU7UYk6UPYeUVUPY6Y4UcUlU7"), e("P4UeYkUPUP44PVUeUsU4UlYY"), g("kh"), f("kx"), d("k0"), f("4sYkUsUk"), g("7eehhc7Uc7cx74heh07YhheU7PG7eh"), d("k7"), g("4UPPPG4PPVUeUsYkUP"), g("kl"), d("V6"), k("Vs"), f("Vk"), e("VV"), e("V4"), e("74hhhl7PG7ehPl4Y4kVkVVVsVk"), g("VP"), f("VU"), e("4cU7UsUVY4UcYUUP4VUsY6Y4UcUlU7P4UPYeY4"), f("VY"), d("PY4P4kPG4P47k64kYkUlYYYVUPYkk64PYeY4UPU7YVUcUlU7"), f("Ve"), e("Vc"), g("VG"), g("44UcYUPek64kYkUlYYYVUPYkk6P6UxYPUYk04cU7"), k("Vh"), g("V0"), d("PPY6UxUsYck6P64V"), e("UVUsU7YUUsYVk6UPYeUVUPY6Y4UcUlU7"), f("4s"), k("4k"), g("4V"), g("44"), g("4P"), f("7Ph7G77eh0Gl7ccheP7chhcs"), e("4U"), k("4eUsYkYkUcU7UYY4UlU7"), f("4Y"), f("4e"), f("4c"), k("4G"), e("4YU7UlU0UPk6PVUeUPUxUxk64cU7Y4UPUYYkUsY4UcUlU7"), f("4h"), f("4x"), f("40"), e("47"), f("4l"), k("P6"), d("Ps"), k("Pk"), d("PV"), g("47UcUsUYUsYkUsk6PVUlUxUcU4"), g("P4"), e("PVUPUU4VUxUcUPU7Y4k6P6UxYPUYUcU7"), d("PP"), e("PU"), d("VsVsVsVs"), e("PY"), d("Pe"), g("Pc"), k("PG"), e("4YUlYPU4Yck64lUxU4k6PVY4YcUxUP"), k("Px"), g("PkUlUkUxUlYek64xUsYPU7UVUeUPYkk6P6UxYPUYUcU7"), d("40UcUVYkUlYVUlUUY4k64lUUUUUcUVUPk6VkV6VsVV"), f("PsPs40YPYVUcUV"), k("Us"), e("4PYPYkUlYVY4UcUxUP"), e("Uk"), k("YkU0UlUVYek7PkUPUsUxP6UxUsYcUPYkk64YVkk64VUlU7Y4YkUlUxk7Vs"), k("UV"), d("PVUVYkUcY6Y4UcU7UYk744UcUVY4UcUlU7UsYkYc"), f("U4"), f("74hhhl7PG7eh"), f("UP"), k("UU"), k("UY"), e("Ue"), d("40Usk04VUlU7UUUcUYk7UVUlU0k6Y6UxYPUYUcU7"), d("Uc"), g("VsV6VsV6"), d("4VUsYVYPUsUx"), d("UG"), e("Uh"), e("Ux"), d("U0"), g("U7"), e("Ul"), d("Y6"), k("VsV6V6Ve"), f("UVY4"), d("U4Ul47UlY4P4YkUsUVUh"), g("Ys"), d("YVUPY4P4UcU0UPUlYPY4"), f("74heh07PG7ehk6P6YkUl"), e("Yk"), k("4YUcYVUeUs"), k("UYUPY4P4UcU0UPYGUlU7UP4lUUUUYVUPY4"), g("YV"), d("VsV6V6VP"), g("VsV6V6V4"), k("Y4"), k("YP"), g("VsV6V6VV"), f("YU"), f("VsV6V6Vs"), d("YY"), e("Ye"), e("U4YkUsYY4sYkYkUsYcYV"), g("Yc"), e("YG"), f("Yh"), g("Y0"), k("Y7"), d("UUUlU7Y4"), g("VsV6V6Vc"), k("V0U7YPUxUxVhk6Y6UsY4UeV0klVhk6UPYeY6UcYkUPYVV0"), f("PVUeUPUxUxk7PP4c4eUPUxY6UPYk"), f("Y4Ul44UsY4UsPPPk4x"), f("PYUcU7U4UlYYP4UPYeY4"), e("UxUsU7UYYPUsUYUP"), g("U4Ul"), f("74heh07chhcsk6P6YkUl"), e("4eUcUYUeUxUcUYUeY4P4UPYeY4"), k("U4UcYU"), g("40UPU7YPP4UPYeY4"), e("4s4l4xk640UPU4UcUsk6P6UxUsYcUkUsUVUhk6P6UxYPUYUcU7"), f("4VUcY4YkUcYek6UlU7UxUcU7UPk6Y6UxYPUYk0UcU7"), f("UPUV"), f("44UPYVU4UPU0UlU7Us"), k("4cU7UsUVY4UcYUUP4kUlYkU4UPYk"), f("PkUPUsUxP6UxUsYcUPYk"), d("4e4P4x4x4l"), f("kxk6kYUVUlU4UPkYVG"), k("UPU0"), f("U7Y6P4UlU7UYUkYP4sU4U4UcU7"), e("UVYkUPUsY4UP4PUxUPU0UPU7Y4"), g("Y6UeUsU7Y4UlU0"), k("40PVk6P640UcU7UVUeUl"), d("7UGPhY74h0cV"), d("UPYUUsUx"), f("UPYe"), k("44UcYUPek6PU4l44k64eUPUxY6UPYkk6P6UxYPUYk0UcU7"), f("7UcUh67YhheU7Ucee774h0cV"), d("PsYPUcUVUhP4UcU0UP4VUeUPUVUh4lUkUGUPUVY4k7PsYPUcUVUhP4UcU0UP4VUeUPUVUhk7Vs"), k("4UUxYc4lYk44UcUPk64YUsU0UPYVk6P6UxYPUYUcU7"), e("UsY4Y4UsUVUePVUeUsU4UPYk"), e("P6UxUsYc4lU7k6P6UxYPUYk0UcU7"), f("UYUPY4P4UcU0UP"), e("Vsk7V6Vs"), e("4kYkUlUsU4YYUsYc"), k("UUY6"), e("4sUxUsYYUsYkk647P64sP64ck6YPY4UcUxYV"), d("4UUlYkY4UP"), g("UeUsYVUe4VUlU4UP"), e("7UcUhc7UG0GV7PGYcG74h0cV"), e("4PPV47k6PVUlU7UsYkk64sP64c"), k("4eP644UPY4UPUVY4"), e("4kUcY4U4UPUUUPU7U4UPYkk6PsYPUcUVUhPVUVUsU7"), k("4c4Pk6P4UsUkk6Y6UxYPUYUcU7"), g("kYkx"), k("4kYPY4Y4UlU74UUsUVUP"), e("UVY6YP4VUxUsYVYV"), g("4VUPU7Y4YPYkYck64YUlY4UeUcUV"), f("4lU7UxUcU7UPk6PVY4UlYkUsUYUPk6Y6UxYPUYk0UcU7"), k("PVUsUUUPYkk6PPY6U4UsY4UP"), d("40YVYeU0UxVkk7444l4044UlUVYPU0UPU7Y4"), d("4PU7UYYkUsYUUPYkYVk640P4"), d("PVUcUxYUUPYkUxUcUYUeY4k6P6UxYPUYk04cU7"), g("4YUlUlUYUxUPk64YUPUsYkYVk6V6k7VPk7VVVVk7V6"), g("4VUcY4YkUcYek64c4V4sk64VUxUcUPU7Y4"), d("UsUxY6UeUsUkUPY4UcUV"), k("PU44UlYYU7UxUlUsU4UPYk"), e("7Pe0e77UcUeY7UGPhY74h0cV"), f("UsY4Y4YkPUUPYkY4UPYe"), g("7PG7eh74h0cV"), f("UVUlUlUhUcUP"), g("kPVkVk"), k("kPVkVU"), g("4VUPU7Y4UsYPYk"), g("V4UYUsU0UP"), e("PkUlUVUhYYUPUxUx"), e("4xUlUY40UP4cU7k6P6UxYPUYUcU7k6Vsk7V6k7V6k7VcVUVs"), g("4lUVY4UlYVUeUsY6UPk6PVY4YkUPUsU0UcU7UYk6PVUPYkYUUcUVUPYV"), e("Y4Ul4Y40P4PVY4YkUcU7UY"), d("Y4UeV0kl"), d("PVYPU0UsY4YkUsP6444Uk64kYkUlYYYVUPYkk6P6UxYPUYUcU7"), k("P6444Uk7P6U4UU4VY4YkUx"), g("UUUcUxUxPVY4YcUxUP"), d("UGUP"), f("4sU4UlUkUPk640UcU7UYk6PVY4U4"), g("P4UlYkUVUe4eUPUxY6UPYk"), e("4UYkUsU7UhUxUcU7k64YUlY4UeUcUVk64eUPUsYUYc"), f("7Pe0e77UcUeY74hhhl7PG7eh"), g("4eUsYkU0UlU7Yck6P6UxYPUYk04cU7"), d("4YUcUYUc"), f("YUVsk7Vs"), g("4hUcU7Ulk640P4"), f("PVUcU04eUPUc"), k("4sUxUcPVPV4l4xUlUYUcU7k6Y6UxYPUYUcU7"), k("PkUPUsUxP6UxUsYcUPYkk7PkUPUsUxP6UxUsYcUPYkkeY4U0kck64sUVY4UcYUUPPek64VUlU7Y4YkUlUxk6keVVVkk0UkUcY4kc"), d("PcUsU7U4UPYek6P6444Uk6PUUcUPYYUPYk"), g("4VUcY4YkUcYek6PkUPUVUPUcYUUPYkk6P6UxYPUYk0UcU7"), g("U0UsUc"), g("Y4UlY6"), d("4sUVYkUlP6444Uk7P6444U"), g("UVUsU7YUUsYVk6UsY6Uck6UPYeUVUPY6Y4UcUlU7"), d("4cU7UsUVY4UcYUUP4VUsY6Y4UcUlU7"), g("40UPU7YP"), d("Y6YkUPUVUcYVUcUlU7k6U0UPU4UcYPU0Y6k6UUUxUlUsY4Vhk6YUUsYkYcUcU7UYk6YUUPUVVkk6YUUsYkYcUcU7P4UPYe4VUlUlYkU4UcU7UsY4UPVhk6YUUlUcU4k6U0UsUcU7kekck6Yhk6k6k6UYUxPl4UYkUsUY4VUlUxUlYkk6V0k6YUUPUVV4keYUUsYkYcUcU7P4UPYe4VUlUlYkU4UcU7UsY4UPkxk6V6kxk6VskcVhk6Y0"), g("PsPsVkV6VsVVk64UUcYkUPUUUlYek6P6UxYPUYUcU7"), f("4YUlUlUYUxUPk6PPY6U4UsY4UP"), k("7Pe0e77UcUeY7Ph0Gc74hGcs"), k("UP40YPYVUcUVP6UxYPUYUcU7k6444x40VU"), f("PYUPUkk64VUlU0Y6UlU7UPU7Y4YV"), e("4kUsUkYcUxUlU7k6P4UlUlUx4kUsYk"), g("4VUlUlYYUlU7k6PPY6U4UsY4UP"), k("4cU7UUUlP4UPYeY4"), f("YkU0UlUVYek7PkUPUsUxP6UxUsYcUPYkk64YVkk64VUlU7Y4YkUlUx"), d("Uc40UPYVUek6Y6UxYPUYUcU7"), e("PkUPUsUx44UlYYU7UxUlUsU4UPYkk6P6UxYPUYUcU7"), e("PVYcU0UsU7Y4UPUVk6P64h4ck64VUxUcUPU7Y4"), g("PlY6UeUsU7Y4UlU0"), g("4Y444xk64lUkUGUPUVY4k6PYUPUkk6P6UxYPUYk0UcU7k6VsVUk7V6V6"), d("YYUPUkUYUx"), k("7Pe0e77UcUeY7PG7eh74h0cV"), g("YVUVYkUPUPU7"), k("UkUlU4Yc"), f("P4Pk4c4s474Y4x4PPlPVP4Pk4cP6"), k("U7V0"), d("P4UxYYUY40UlU7Ul"), f("kYVGkY"), k("4xUlUY40UP4cU7k6P6UxYPUYUcU7k6Vsk7V6k7V6k7VcVVVP"), d("UUYPU7UVY4UcUlU7"), e("UVUlU7Y4UPYeY4k7UeUsYVUe4VUlU4UP"), k("4sYkUVUeUc4V4s44"), g("PU4PPkP44PPePlPV4e4s444PPk"), k("PPUkYPU7Y4YP"), d("4UUsUVUPUkUlUlUhk6P6UxYPUYUcU7"), e("4sUVY4UcYUUP4VUsY6Y4UcUlU7"), g("7YhheU7Ucee774h0cV"), k("40UsUxUYYPU7k64YUlY4UeUcUV"), e("47UPYYYVk64YUlY4UeUcUVk640P4"), e("4VUsY6Y4UcUlU7P4UPYeY4"), k("UsPGUkPcV6UVPeU4PYVsUPPUUUVkPPUYVVP4UeV4PVUcPkVPUGPsUhVUP6Ux4lVYU047U7Ve40Ul4xVcY64hYs4GYk4cYV4eY44YYP4UYU4PYY44Ye4VYc4kYG4s"), e("44UPUGUsPUYPk64x4Y4Vk6PVUsU7YVk640UlU7Ul"), k("4VUlY6Y6UPYkY6UxUsY4UPk64YUlY4UeUcUVk64xUcUYUeY4"), e("PVUPUYUlUPk6P6YkUcU7Y4"), g("PVUsYYUsYVU4UPUP"), d("4kUsYPUeUsYPYVk6VcVV"), f("4VUeUsUxUhU4YPYVY4UPYk"), g("4sUkUsU4Uck640P4k64VUlU7U4UPU7YVUPU4k64xUcUYUeY4"), f("4xYPUVUcU4Usk64kYkUcUYUeY4"), g("PYUcU4UPk64xUsY4UcU7"), g("UUUlU7Y4k6U4UPY4UPUVY4k6UPYkYkUlYk"), f("4hUlYGYPUhUsk64YUlY4UeUcUVk6P6YkVU47"), d("4eY4U0UxVPk6UxUlUVUsY4UcUlU7k6Y6YkUlYUUcU4UPYk"), f("44UcYUPek6P6UxYPYVk6PYUPUkk6P6UxUsYcUPYk"), f("PUUxUsU4UcU0UcYkk6PVUVYkUcY6Y4"), d("4UUcUxUPk644UlYYU7UxUlUsU4UPYkk6P6UxYPUYk0UcU7"), f("UlUk"), d("4sU4UlU4Ukk7PVY4YkUPUsU0"), d("40UPU7UxUl"), e("UVUsUxUxP6UeUsU7Y4UlU0"), k("PYUlUxUUYkUsU0k640UsY4UeUPU0UsY4UcUVUs"), e("4VUsY4UsUxUcU7Us4YYkUlYPY6k6PPY6U4UsY4UP"), k("4PYkUsYVk64kUlUxU4k64cP44V"), e("44UPYUUsUxPUPkPe4VY4YkUxk744UPYUUsUxPUPkPe4VY4YkUxk7Vs"), k("4GPV4PPVPV4c4l474c44k0PYPcPcPc"), g("7Pe0e77UcUeY7YhheU7chhcs"), k("UsU4U44kUPUeUsYUUcUlYk"), k("Y6Us"), k("4kUcY4YVY4YkUPUsU0k6PUUPYkUsk6PVUPYkUcUU"), d("keUUYPU7UVY4UcUlU7kekcYhYkUPY4YPYkU7k6VsVkVVVhY0kckekcVh"), d("Y6Uc"), d("P4UPU7UVUPU7Y4k64UP447k6Y6UxYPUYk0UcU7"), k("YkUPU0UlYUUP4VUeUcUxU4"), f("4UUlUxYek6VVk64kYkUlYYYVUPYkk6P6UxYPUYUcU7"), k("YPYVUPP6YkUlUYYkUsU0"), f("UeUlYVY4U7UsU0UP"), f("Y6UeUsU7Y4UlU0k7UcU7UGUPUVY44GYV"), f("PVUeUlUVUhYYUsYUUP4UUxUsYVUek7PVUeUlUVUhYYUsYUUP4UUxUsYVUe"), d("YkUYUkUskeVsV6Vkkxk6VkV6V4kxk6V6kxk6V6k7VYkc"), e("4sU4UkUxUlUVUhP6UxYPUYUcU7"), e("4kUsUVUhUYYkUlYPU7U4"), g("4sUY4VUlU7Y4YkUlUxk74sUY4VUlU7Y4YkUlUx"), e("P6UeUlY4Ul4VUPU7Y4UPYkP6UxYPUYUcU7Vsk7Vsk7Vkk7Vk"), g("4YYPU7UYPVUPUl"), e("YVV0"), d("U4UPUVUlU4UPPPPk4c"), g("7UcUhc7UG0GV7eeeck74h0cV"), d("7Pe0e77UcUeY7UcUh67cG0el"), d("VsVkVV"), g("YYUPUkUYUxk6UPYeUVUPY6Y4UcUlU7"), f("YkUP"), k("PY40P6UxUsYcUPYkk74l4VPe"), e("VYVkY6Ye"), f("4sY6Y6PYUlYkUhYVY6UsUVUP"), d("4eUcUYUeUxUcUYUeY4"), e("U4UlUVYPU0UPU7Y4"), d("PcUsU7U4UPYek640UPU4UcUsk6P6UxYPUYUcU7"), e("4PPV47k64xUsYPU7UVUek640UlYGUcUxUxUsk6P6UxYPUYUcU7"), d("VYV6Y6Yek6kY4sYkUcUsUxkY"), k("UcU7UGUPUVY44GYV"), g("4xUlU0Us"), d("4kUcY44VUlU0UPY44sUYUPU7Y4"), f("4VUsUxUcUkYkUc"), f("4kUlUlUhU0UsU7k64lUxU4k6PVY4YcUxUP"), d("YVUPYVYVUcUlU7PVY4UlYkUsUYUP"), f("PPY4UlY6UcUs"), k("UVUlU0Y6UcUxUPPVUeUsU4UPYk"), e("UPYVUVUsY6UP"), d("PVUVYkUlUxUxUkUsYk"), g("PYUcU7U4UlYY"), d("VsV4VYV4V4U4VcVPVVVeVVUVU4VVV6VYVP444sV4Vk4VVcVVUV44Us4sUPVYV4VUVP4V4U4sVPUU4VV64kVcVV4kVs"), d("7ccGhU74hcGU"), d("4hUsYVY6UPYkYVUhYck6P6UsYVYVYYUlYkU4k640UsU7UsUYUPYk"), e("40UcU7UY4xUcPPk04PYeY44k"), d("UYUPY4k6YVYcYVY4UPU0k6UVUlUxUlYkYVk6UPYeUVUPY6Y4UcUlU7"), d("PVUhYcY6UPk744UPY4UPUVY4UcUlU7"), k("4UUcUxUP4xUsUkk6Y6UxYPUYUcU7"), e("U7Y64sP64ck6P6UxYPUYUcU7"), g("U7UlY4PlUPYeUcYVY4PlUeUlYVY4"), e("VkU4"), d("4sUVY4UcYUUPPe4lUkUGUPUVY4"), k("44UlY4YPU0"), d("P6444Uk0Pe4VUeUsU7UYUPk6PUUcUPYYUPYk"), d("P640UcU7UY4xUcPP"), k("UVUlUxUlYk44UPY6Y4Ue")],
        c = [f("47UlUhUcUsk6PVYPUcY4UPk64PU7UsUkUxUPYkk6P6UxYPUYUcU7"), k("PkUPUsUxPUUcU4UPUlk7PkUPUsUxPUUcU4UPUlkeY4U0kck64sUVY4UcYUUPPek64VUlU7Y4YkUlUxk6keVVVkk0UkUcY4kc"), k("40UsUYU7UPY4Ul"), e("4sU4UlUkUP4PYe40UsU74V4V44UPY4UPUVY4"), f("4YUsUkYkUcUlUxUs"), k("P6UxUsYcUkUcUxUx"), e("U7UsYUUcUYUsY4UlYk"), g("PkUsUVUeUsU7Us"), e("P4YYk64VUPU7k640P4k64VUlU7U4UPU7YVUPU4k64PYeY4YkUsk64kUlUxU4"), e("PsPs40UcU7Uc444xk6P6UxYPUYUcU7"), f("kVUUVUV6"), f("UUUcUxUxPkUPUVY4"), e("V0U7YPUxUxVhk6Y6UsY4UeV0klVhk6U4UlU0UsUcU7V0"), d("44UPUUUsYPUxY4k64kYkUlYYYVUPYkk64eUPUxY6UPYk"), d("4UYkUPU7UVUek6PVUVYkUcY6Y4k640P4"), g("7UG6eY7UGPhY74h0cV"), g("UPU7UVUlU4UPPPPk4c"), e("PPU0Y6YPYVUe"), k("UcUVY6"), f("7Pe0e77UcUeY7Yc6GP7Yele6"), k("UVYkUPUsY4UPP6YkUlUYYkUsU0"), g("U0UlU7UlYVY6UsUVUP"), k("4kYPY4Y4UlU7PVUeUsU4UlYY"), k("4kUlU4UlU7Uck640P4"), g("PVP44sP44c4VPl44Pk4sPY"), e("7chhcs74h0cV"), k("U4UlYYU7UxUlUsU4PPY6U4UsY4UPYk"), k("4sUxUcUPU4UcY4k6P6UxYPUYk04cU7"), d("P6444Uk6UcU7Y4UPUYYkUsU4Ulk6U4Ulk6PYUPUk4hUcY4"), k("YPU7UcUUUlYkU04lUUUUYVUPY4"), k("UPU7UVUlU4UPPPPk4c4VUlU0Y6UlU7UPU7Y4"), f("P6UcUVUsYVUs"), f("4sU4UlUkUPk64UUsU7UYYVUlU7UYk6PVY4U4"), k("UkUcU7U44kYPUUUUUPYk"), g("4sPU4Yk6PVUcY4UPPVUsUUUPY4Yck6Y6UxYPUYUcU7"), f("4lYkUkUcY4k644UlYYU7UxUlUsU4UPYk"), d("UVUlUxUlYk"), f("UeUcU4U4UPU7"), f("UxUlUVUsUxPVY4UlYkUsUYUP"), e("4YUlUlUYUxUPk6P4UsUxUhk64PUUUUUPUVY4YVk6P6UxYPUYUcU7"), d("UcU7U4UPYeUPU4444k"), g("4xYPUVUcU4Usk64UUsYe"), g("4sU0UsYGUlU740P6VV44UlYYU7UxUlUsU4UPYkP6UxYPUYUcU7"), k("UVYkUPUsY4UP4kYPUUUUUPYk"), f("4VUsYVY4UPUxUxUsYk"), k("UxUcU7UhP6YkUlUYYkUsU0"), f("4VUsUxUcUUUlYkU7UcUsU7k64U4k"), f("P4UeYkUPUP444eUcUYUeUxUcUYUeY4"), g("UVYkUPUsY4UPPVUeUsU4UPYk"), f("4YYPUxUcU0"), f("47YcYe4xUsYPU7UVUeUPYk"), d("PcUlYPP4YPUkUPk6P6UxYPUYk0UcU7"), e("7UGPhY74h0cVPl4Y4kVkVVVsVk"), g("PVPY4VY4Uxk7PVPY4VY4Ux"), f("4YUlUlUYUxUPk64PUsYkY4Uek6P6UxYPUYk0UcU7"), k("PsPs44UlYYU7UxUlUsU4k6P6UxYPUYUcU7"), k("k7U0YPYVUcUVk7VsVUVVk7UVUlU0Vhk7UcUYUsU0UPk7VsVUVVk7UVUlU0Vhk7U0YPYVUcUVk7UeYGk7U7UPY4UPUsYVUPk7UVUlU0"), k("47UlYkY4UlU7k64cU4UPU7Y4UcY4Yck6PVUsUUUP"), d("Y6UsYkYVUP4cU7Y4"), f("PVUcU0Y6UxUPk6P6UsYVYV"), d("4VUlUxUlU7U7Usk640P4"), k("YGUsUhUl"), k("UYUPY4PPU7UcUUUlYkU04xUlUVUsY4UcUlU7"), e("YVUeUsU4UPYkPVUlYPYkUVUP"), d("44UlYYU7UxUlUsU4UPYkYVk6Y6UxYPUYUcU7"), f("UxUlUVUsY4UcUlU7"), f("4eUPYkUlUPYVk6kUk64YUPU7UPYkUsUxYVk6UxUcYUUP"), g("YYUcU7U4UlYY"), g("PVUeUlYYUVUsYkU4k64YUlY4UeUcUV"), d("7Ph7G77eh0Gl7UG0GV7chhcs74h0cV"), e("7Pe0e77UcUeY7eGsex7UGPhY"), d("4YUcU7UYUPYk"), g("PkUlUVUh40UPUxY4k6PPY6U4UsY4UP"), f("PYUcU7U4UlYY4UYkUsU0UP"), g("UPU7UsUkUxUPPUUPYkY4UPYe4sY4Y4YkUcUk4sYkYkUsYc"), k("4hUsUVYVY44lU7UP"), d("UsY4Y4YkUcUkYPY4UPk6YUUPUVVkk6UsY4Y4YkPUUPYkY4UPYeVhk6YUUsYkYcUcU7UYk6YUUPUVVkk6YUUsYkYcUcU7P4UPYe4VUlUlYkU4UcU7UsY4UPVhk6YPU7UcUUUlYkU0k6YUUPUVVkk6YPU7UcUUUlYkU04lUUUUYVUPY4Vhk6YUUlUcU4k6U0UsUcU7kekck6Yhk6k6k6YUUsYkYcUcU7P4UPYe4VUlUlYkU4UcU7UsY4UPk6V0k6UsY4Y4YkPUUPYkY4UPYek6khk6YPU7UcUUUlYkU04lUUUUYVUPY4Vhk6k6k6UYUxPlP6UlYVUcY4UcUlU7k6V0k6YUUPUVV4keUsY4Y4YkPUUPYkY4UPYekxk6V6kxk6VskcVhk6Y0"), f("P6UPYkY6UPY4YPUs"), k("UlY6UPU744UsY4UsUkUsYVUP"), f("UVUsU7YUUsYV"), d("Uc4YUPY4Y4UPYkPVUVYkUcY6Y4UsUkUxUPP6UxYPUYUcU7"), d("4cU7UUUlYkU0UsUxk6PkUlU0UsU7"), k("47UcY4YkUlk6P6444Uk6P6UxYPUYk04cU7"), g("40YVYeU0UxVkk7Pe404x4eP4P4P6"), e("7Pe0e77UcUeY7chhcs74h0cV"), f("47P64xUsYVY4P6UsYVYV"), d("P4UeYkUPUP444UUsUVUP"), f("4xUsYVY4P6UsYVYV"), f("VGVG"), k("Y6UsYkYVUP4UUxUlUsY4"), k("7Pe0e77UcUeY7ccGhU74hcGU"), d("Vhk6"), g("UYUPY44sY4Y4YkUcUk4xUlUVUsY4UcUlU7"), f("YhkYU7UsU0UPkYVG"), e("47YcUsUxUs"), f("U7UlY4PlUPYeUcYVY4PlUeUlYVY4U7UsU0UP"), f("PxkY"), g("4Y4U4s4V4Pk6P6UxYPUYUcU7"), k("YPU7U4UPUUUcU7UPU4"), d("7UcUh67PG7eh74h0cV"), g("PlUcYPYsYeUxU4U0YGYkPl"), e("Pxk7"), f("40UsY4YPYkUsk640P4k6PVUVYkUcY6Y4k64VUsY6UcY4UsUxYV"), e("4sYkUcUsUxk64kUxUsUVUh"), e("4UUsU7UYPVUlU7UY"), d("U0YY4Vk6U7UhUkUsUUUGUlYkU4k6Y6UeYVUYUxYck6UPYeYUY4k6YGYsUcYPkxk67sh0G6k6Y4Y6UeYVY4klVGklYPUeUkUYY4UcUVk7U0UlklUxUPYUYUUs"), d("4kYkUsUYUYUsU4UlUVUcUl"), f("4eUsYkU0UlU7Yck64UUcYkUPUUUlYek6P6UxYPUYUcU7"), f("P6UsUxUsUVUPk6PVUVYkUcY6Y4k640P4"), g("47UsY4UcYUUPk64VUxUcUPU7Y4"), e("YPYVUPYk4sUYUPU7Y4"), g("PsYPUcUVUhP4UcU0UPk7PsYPUcUVUhP4UcU0UP"), k("UPYeY6UPYkUcU0UPU7Y4UsUxk0YYUPUkUYUx"), f("4sPkPk4sPcPl4kPP4U4U4PPk"), f("7eehhc7Uc7cx74heh074heG07chhcs"), d("4sUxUcY6UsYck6PVUPUVYPYkUcY4Yck64VUlU7Y4YkUlUxk6VV"), d("PVUVYkUcY6Y4k640P4k64kUlUxU4"), e("kxk6kYUkYkUlYYYVUPYkP6YkUlY6kYVG"), g("P4444V4VY4Uxk7P4444V4VY4Ux"), k("YVUPUxUU"), f("4cU7UUUl4kUsUVUhUYYkUlYPU7U4"), g("P6UsU7U4Ulk6PYUPUkk6P6UxYPUYUcU7"), e("4eUsUPY4Y4UPU7YVUVUeYYUPUcUxUPYk"), d("YVY6UsU7"), g("4sUVY4UcYUUP4kUlYkU4UPYk"), k("P4UeYkUPUP444xUcUYUeY4PVUeUsU4UlYY"), g("V6VkV6Vk"), f("V6VkV6VV"), e("V6VkV6V6"), d("V6VkV6Vs"), d("PYP64ck644UPY4UPUVY4UlYkk6Vsk7V4"), g("Vhk6UPYeY6UcYkUPYVV0"), d("P4UeYkUPUP4444UsYkUhPVUeUsU4UlYY"), g("4PYeUcUUk64PYUUPYkYcYYUeUPYkUP"), d("4kUsY4Y4UxUPUxUlUYk64YUsU0UPk64xUsYPU7UVUeUPYk"), g("4cU0Y6UsUVY4"), k("PU4x4Vk640YPUxY4UcU0UPU4UcUsk6P6UxYPUYUcU7"), d("4sU4UlUkUPk64eUPUkYkUPYY"), e("4kUxYPUPPVY4UsUVUhYVk64cU7YVY4UsUxUxk644UPY4UPUVY4UlYk"), d("YYYYYYU0U0U0U0U0U0U0U0U0U0UxUxUc"), d("UeUcYVY4UlYkYc"), g("YVUsU7YVk0YVUPYkUcUU"), g("P6UsY6YcYkYPYV"), d("4kYPY4Y4UlU7P4UPYeY4"), k("V6VkVsVs"), f("4sY6Y6PPY6"), g("P6UsYkUlU0k7P4PUk6Y6UxUsYcUPYkk6Y6UxYPUYUcU7"), k("44UPUsUxP6UxYc4xUcYUUPk6PPY6U4UsY4UP"), f("4xUlUeUcY4k64YYPUGUsYkUsY4Uc"), d("4UPk4s4Y404P47P4PlPV4e4s444PPk"), d("4sUYUPU7UVYck64U4k"), e("40UsUVYkUlU0UPU4UcUs4UUxUsYVUeP6UsY6UPYkk740UsUVYkUlU0UPU4UcUs4UUxUsYVUeP6UsY6UPYk"), d("kVkVkV"), f("PYUlYkU44VUsY6Y4YPYkUPPe"), k("UYUPY44VUlU0Y6YPY4UPU4PVY4YcUxUP"), e("Y6UxUsY4UUUlYkU0"), e("V6VsV6VP"), g("4sYkUsUkUcUVk6P4YcY6UPYVUPY4Y4UcU7UY"), e("V6VsV6VU"), e("V6VsV6VV"), d("7Pe0e77UcUeY74heG07PG7eh"), g("V6VsV6V4"), f("V6VsV6Vs"), g("V6VsV6Vk"), f("V6VsV6V6"), k("V6VsV6VY"), k("4kYPY4Y4UlU74eUcUYUeUxUcUYUeY4"), k("YUUPYkY4UPYe4sY4Y4YkUcUkP6UlUcU7Y4UPYk"), e("V6VsV6Ve"), k("Y4UPYeY44kUsYVUPUxUcU7UP"), e("kVV6VUVc"), f("U4UlYPUkUxUPP4YYUcYVY4k6PYUPUkk6P6UxYPUYUcU7"), g("YPU7UPYVUVUsY6UP"), g("P4UeYPU7U4UPYkk644UsY64VY4YkUxk647P64sP64ck6P6UxYPUYUcU7"), d("4kUsY4UsU7UY"), d("444U4hUsUck0PV4k"), g("PVU7UsY6k64cP44V")],
        Ja = [e("40UlUlUx4kUlYkUsU7")]; (function() {
            var a = [82, 73, 50, 30, 45, 29, 28, 16, 82, 41, 77, 5, 27, 92, 27, 0, 2, 1423857449, -2, 3, -3, 3432918353, 1555261956, 4, 2847714899, -4, 5, -5, 2714866558, 1281953886, 6, -6, 198958881, 1141124467, 2970347812, -7, 7, 3110523913, 8, -8, 2428444049, -9, 9, 10, -10, 11, -11, 2563907772, 12, -12, 13, 2282248934, -13, 2154129355, -14, 14, 15, -15, 16, -16, 17, -17, 18, -18, 19, -19, 20, -20, 21, -21, -22, 22, 23, -23, 24, -24, -25, 25, -26, 26, 27, -27, 28, -28, 29, -29, -30, 30, 31, -31, -32, 32, -33, 33, -34, 34, -35, 35, -37, -36, 36, 37, -38, 39, -39, 38, -41, 41, 40, -40, 42, -43, 43, -42, -45, 45, -44, 44, -46, 47, 46, -47, 48, -48, 49, -49, 50, -51, 51, -50, 570562233, 53, -52, -53, 52, 55, 54, -54, -55, 503444072, -57, -56, 57, 56, 58, -59, -58, 59, 60, 61, -61, -60, 62, 63, -63, -62, -66, 711928724, 64, -67, 66, 65, -64, -65, 67, -69, 68, 69, 70, -70, -68, -71, 71, -72, 3686517206, -75, -74, 75, 73, 72, 74, -73, 79, 76, -76, 77, -79, -78, 78, -77, 3554079995, 82, -80, 80, -83, -82, 81, -81, 83, -85, -84, -86, 86, 84, 85, 87, -87, -91, 90, 88, 89, -88, -90, 91, -89, 95, 94, -92, -95, 93, -94, -93, 92, -99, 99, -96, 98, -97, -98, 96, 97, -101, 3272380065, 100, -103, 101, 102, -102, -100, 103, 107, -105, 104, 106, 105, -106, -104, -107, 111, 108, 110, 109, -108, -110, -109, -111, 251722036, -114, 115, 113, 112, 114, -115, -112, -113, -118, 118, -116, -119, 116, 117, -117, 119, 123, 120, 122, 121, -120, -122, -121, -123, 125, 127, 3412177804, 126, 124, -125, -126, -124, -127, -128, 128, -129, 1843258603, 3803740692, 984961486, 3939845945, 4195302755, 4066508878, 255, 1706088902, 256, 1969922972, 365, 2097651377, 376229701, 853044451, 752459403, 1e3, 426522225, 3772115230, 615818150, 3904427059, 4167216745, 4027552580, 3654703836, 1886057615, 879679996, 3518719985, 3244367275, 2013776290, 3373015174, 1759359992, 285281116, 1622183637, 1006888145, 1e4, 1231636301, 83908371, 1090812512, 2463272603, 1373503546, 2596254646, 2321926636, 1504918807, 2181625025, 2882616665, 2747007092, 3009837614, 3138078467, 397917763, 81470997, 829329135, 2657392035, 956543938, 2517215374, 2262029012, 40735498, 2394877945, 3266489909, 702138776, 2808555105, 2936675148, 1258607687, 1131014506, 3218104598, 3082640443, 1404277552, 565507253, 534414190, 1541320221, 1913087877, 2053790376, 1789927666, 3965973030, 3826175755, 4107580753, 4240017532, 1658658271, 3579855332, 3708648649, 3453421203, 3317316542, 1873836001, 1742555852, 461845907, 3608007406, 1996959894, 3747672003, 3485111705, 2137656763, 3352799412, 213261112, 3993919788, 1.01, 3865271297, 4139329115, 4275313526, 282753626, 1068828381, 2768942443, 2909243462, 936918e3, 3183342108, 27492, 141376813, 174e4, 3050360625, 654459306, 2617837225, 1454621731, 2489596804, 2227061214, 1591671054, 2362670323, 4294967295, 1308918612, 2246822507, 795835527, 1181335161, 414664567, 4279200368, 1661365465, 1037604311, 4150417245, 3887607047, 1802195444, 4023717930, 2075208622, 1943803523, 901097722, 628085408, 755167117, 3322730930, 3462522015, 3736837829, 3604390888, 2366115317, .4, 2238001368, 2512341634, 2647816111, -.2, 314042704, 1510334235, 58964, 1382605366, 31158534, 450548861, 3020668471, 1119000684, 3160834842, 2898065728, 1256170817, 18e5, 2765210733, 3060149565, 3188396048, 2932959818, 124634137, 2797360999, 366619977, 62317068, -.26, 1202900863, 498536548, 1340076626, 2405801727, 2265490386, 1594198024, 1466479909, 2547177864, 249268274, 2680153253, 2125561021, 3294710456, 855842277, 3423369109, .732134444, 3705015759, 3569037538, 1994146192, 1711684554, 1852507879, 997073096, 733239954, 4251122042, 601450431, 4111451223, 167816743, 3855990285, 3988292384, 3369554304, 3233442989, 3495958263, 3624741850, 65535, 453092731, -.9, 2094854071, 1957810842, 325883990, 4057260610, 1684777152, 4189708143, 3915621685, 162941995, 1812370925, 3775830040, 783551873, 3134207493, 1172266101, 2998733608, 2724688242, 1303535960, 2852801631, 112637215, 1567103746, 651767980, 1426400815, 906185462, 2211677639, 1047427035, 2344532202, 2607071920, 2466906013, 225274430, 544179635, 2176718541, 2312317920, 1483230225, 1342533948, 2567524794, 2439277719, 1088359270, 671266974, 1219638859, 953729732, 3099436303, 2966460450, 817233897, 2685067896, 2825379669, 4089016648, 4224994405, 3943577151, 3814918930, 476864866, 1634467795, 335633487, 1762050814, 1, 2044508324, -1, 3401237130, 3268935591, 3524101629, 3663771856, 1907459465]; (function() {
                function d(b, c) {
                    if (null == b) return null;
                    for (var l = x(c), f = [], g = b.length, e = a[15]; e < g; e++) f.push(Y(b[e], l++));
                    return f
                }
                function f(b) {
                    if (null == b) return null;
                    for (var c = [], l = a[15], d = b.length; l < d; l++) {
                        var g = b[l];
                        c[l] = Ka[(g >>> a[23] & a[56]) * a[58] + (g & a[56])]
                    }
                    return c
                }
                function g(h) {
                    var c = [];
                    if (null == h || void 0 == h || h.length == a[15]) return za(L);
                    if (h.length >= L) {
                        var c = a[15],
                        l = [];
                        if (null != h && h.length != a[15]) {
                            if (h.length < L) throw Error(b[134]);
                            for (var d = a[15]; d < L; d++) l[d] = h[c + d]
                        }
                        return l
                    }
                    for (l = a[15]; l < L; l++) c[l] = h[l % h.length];
                    return c
                }
                function e(h) {
                    var c = a[405];
                    if (null != h) for (var l = a[15]; l < h.length; l++) c = c >>> a[38] ^ La[(c ^ h[l]) & a[299]];
                    h = Aa(c ^ a[405]);
                    c = h.length;
                    if (null == h || c < a[15]) h = new String(b[0]);
                    else {
                        for (var l = [], d = a[15]; d < c; d++) l.push(Ma(h[d]));
                        h = l.join(b[0])
                    }
                    return h
                }
                function k(h, c, l) {
                    var d, f = [b[70], b[85], b[118], b[73], b[77], b[106], b[80], b[116], b[44], b[42], b[62], b[114], b[93], b[105], b[40], b[64], b[103], b[86], b[99], b[141], b[48], b[89], b[76], b[69], b[132], b[47], b[88], b[33], b[43], b[45], b[78], b[53], b[110], b[50], b[68], b[101], b[52], b[41], b[138], b[133], b[66], b[129], b[108], b[81], b[140], b[90], b[117], b[63], b[107], b[91], b[135], b[115], b[113], b[97], b[60], b[61], b[137], b[126], b[83], b[79], b[119], b[71], b[123], b[75]],
                    g = b[74],
                    e = [];
                    if (l == a[541]) l = h[c],
                    d = a[15],
                    e.push(f[l >>> a[16] & a[153]]),
                    e.push(f[(l << a[23] & a[122]) + (d >>> a[23] & a[56])]),
                    e.push(g),
                    e.push(g);
                    else if (l == a[16]) l = h[c],
                    d = h[c + a[541]],
                    h = a[15],
                    e.push(f[l >>> a[16] & a[153]]),
                    e.push(f[(l << a[23] & a[122]) + (d >>> a[23] & a[56])]),
                    e.push(f[(d << a[16] & a[148]) + (h >>> a[30] & a[19])]),
                    e.push(g);
                    else if (l == a[19]) l = h[c],
                    d = h[c + a[541]],
                    h = h[c + a[16]],
                    e.push(f[l >>> a[16] & a[153]]),
                    e.push(f[(l << a[23] & a[122]) + (d >>> a[23] & a[56])]),
                    e.push(f[(d << a[16] & a[148]) + (h >>> a[30] & a[19])]),
                    e.push(f[h & a[153]]);
                    else throw Error(b[111]);
                    return e.join(b[0])
                }
                function za(b) {
                    for (var c = [], l = a[15]; l < b; l++) c[l] = a[15];
                    return c
                }
                function Z(h, c, l, d, f) {
                    if (null != h && h.length != a[15]) {
                        if (null == l) throw Error(b[131]);
                        if (h.length < f) throw Error(b[134]);
                        for (var e = a[15]; e < f; e++) l[d + e] = h[c + e]
                    }
                }
                function Aa(b) {
                    var c = [];
                    c[0] = b >>> a[74] & a[299];
                    c[1] = b >>> a[58] & a[299];
                    c[2] = b >>> a[38] & a[299];
                    c[3] = b & a[299];
                    return c
                }
                function ma(h) {
                    if (null == h || void 0 == h) return h;
                    h = encodeURIComponent(h);
                    for (var c = [], l = h.length, d = a[15]; d < l; d++) if (h.charAt(d) == b[27]) if (d + a[16] < l) c.push(Na(h.charAt(++d) + b[0] + h.charAt(++d))[0]);
                    else throw Error(b[146]);
                    else c.push(h.charCodeAt(d));
                    return c
                }
                function Na(b) {
                    if (null == b || b.length == a[15]) return [];
                    b = new String(b);
                    for (var c = [], l = b.length / a[16], d = a[15], f = a[15]; f < l; f++) {
                        var e = parseInt(b.charAt(d++), a[58]) << a[23],
                        g = parseInt(b.charAt(d++), a[58]);
                        c[f] = x(e + g)
                    }
                    return c
                }
                function Ma(c) {
                    var d = [];
                    d.push(aa[c >>> a[23] & a[56]]);
                    d.push(aa[c & a[56]]);
                    return d.join(b[0])
                }
                function na(b, c) {
                    if (null == b || null == c || b.length != c.length) return b;
                    for (var d = [], f = a[15], e = b.length; f < e; f++) d[f] = Y(b[f], c[f]);
                    return d
                }
                function Y(a, b) {
                    a = x(a);
                    b = x(b);
                    return x(a ^ b)
                }
                function Oa(a, b) {
                    return x(a + b)
                }
                function x(c) {
                    if (c < a[290]) return x(a[291] - (a[290] - c));
                    if (c >= a[290] && c <= a[282]) return c;
                    if (c > a[282]) return x(a[292] + c - a[282]);
                    throw Error(b[136])
                }
                function Pa(h) {
                    function d() {
                        for (var h = [b[282], c[32], c[137], b[221], c[150], b[36], c[157], c[103], c[174], b[280], b[18], b[303], c[23], b[338], c[106], b[181], b[337], c[46], c[44], b[112], b[210], b[194], b[281], c[60], b[277], b[276], b[160], c[175], b[356], b[198], b[297], b[98], c[104], b[184], b[223], c[14], c[4], b[226], b[127], b[92], c[49], b[318], c[122], b[67], B[5], c[135], c[81], c[75], b[228], b[286], c[148], b[335], b[283], c[41], c[2], b[272], c[102], b[293], b[348], Ja[0], b[169], B[4], b[273], b[82], c[94], c[108], c[142], c[77], c[5], b[358], c[7], b[212], b[279], c[116], b[278], c[68], b[229], c[176], b[261], c[8], b[268], c[17], b[26], b[340], b[289], b[284], b[104], c[160], b[224], b[256], b[243], b[322], b[204], c[19], b[300], c[70], c[90], b[206], b[3], b[65], c[99], b[186], b[321], b[170], b[346], c[25], b[174], b[271], c[15], b[46], c[52], c[69], c[84], b[153], b[125], c[114], b[37]], f = [], e = a[15]; e < h.length; e++) try {
                            var g = h[e];
                            l()(g) && f.push(g)
                        } catch(k) {}
                        return f.join(b[56])
                    }
                    function l() {
                        function h(a) {
                            var c = {};
                            return k.style.fontFamily = a,
                            g.appendChild(k),
                            c.height = k.offsetHeight,
                            c.width = k.offsetWidth,
                            g[b[307]](k),
                            c
                        }
                        var d = [c[21], c[141], B[6]],
                        l = [],
                        f = c[139],
                        e = b[327],
                        g = C[b[258]],
                        k = C[b[167]](c[123]);
                        k.style.fontSize = e;
                        k.style.visibility = c[37];
                        k.innerHTML = f;
                        for (f = a[15]; f < d.length; f++) l[f] = h(d[f]);
                        return function(c) {
                            for (var f = a[15]; f < l.length; f++) {
                                var e = h(c + b[34] + d[f]),
                                g = l[f];
                                if (e.height !== g.height || e.width !== g.width) return ! 0
                            }
                            return ! 1
                        }
                    }
                    function f() {
                        var a = null,
                        h = null,
                        d = [];
                        try {
                            h = C[b[167]](c[79]),
                            a = h[B[7]](b[255]) || h[B[7]](c[112])
                        } catch(l) {}
                        if (!a) return d;
                        try {
                            d.push(a[b[20]]())
                        } catch(g) {}
                        try {
                            d.push(e(a, h))
                        } catch(k) {}
                        return d.join(b[56])
                    }
                    function e(h, d) {
                        try {
                            var f = c[76],
                            l = b[240],
                            g = h[c[43]]();
                            h[c[33]](h[c[113]], g);
                            var k = new Float32Array([a[432], a[488], a[15], a[428], a[453], a[15], a[15], a[468], a[15]]);
                            h.bufferData(h[c[113]], k, h[c[24]]);
                            g.k = a[19];
                            g.l = a[19];
                            var t = h[c[20]](),
                            X = h[c[48]](h[b[267]]);
                            h[c[63]](X, f);
                            h[b[341]](X);
                            var la = h[c[48]](h[c[149]]);
                            return h[c[63]](la, l),
                            h[b[341]](la),
                            h[b[177]](t, X),
                            h[b[177]](t, la),
                            h[c[45]](t),
                            h[b[309]](t),
                            t.n = h[c[92]](t, b[205]),
                            t.m = h[c[62]](t, c[29]),
                            h[c[74]](t.o),
                            h[c[167]](t.n, g.k, h.FLOAT, !a[541], a[15], a[15]),
                            h[J[0]](t.m, a[541], a[541]),
                            h[b[139]](h[b[259]], a[15], g.l),
                            M(d[b[149]]())
                        } catch($a) {
                            return b[324]
                        }
                    }
                    function g() {
                        var h = C[b[167]](b[155]),
                        d = [],
                        f = [c[124], b[270], b[328], b[315], b[192], c[166], c[22], c[143], b[274], b[1], b[329], b[154], b[161], b[238], b[49], c[120], b[248], b[239], b[156], b[343], c[132], c[86], c[47], c[125], b[32], b[344], c[73], b[150]];
                        if (!window[c[154]]) return d.join(b[0]);
                        for (var l = a[15]; l < f.length; l++) try {
                            C[b[258]].appendChild(h),
                            h.style.color = f[l],
                            d.push(f[l]),
                            d.push(window[c[154]](h).getPropertyValue(c[36])),
                            C[b[258]][b[307]](h)
                        } catch(e) {
                            d.push(b[349])
                        }
                        return d.join(b[54])
                    }
                    function k() {
                        try {
                            var h = C[b[167]](c[79]),
                            d = h[B[7]](b[354]),
                            f = c[105];
                            d[c[169]] = b[235];
                            d[b[145]] = b[333];
                            d[c[169]] = b[202];
                            d[b[219]] = c[10];
                            d[c[11]](a[281], a[541], a[152], a[66]);
                            d[b[219]] = c[170];
                            d.fillText(f, a[16], a[56]);
                            d[b[219]] = b[313];
                            d.fillText(f, a[23], a[60]);
                            return h[b[149]]()
                        } catch(l) {
                            return b[237]
                        }
                    }
                    function m() {
                        try {
                            return window[b[355]] && n.h ? q() : r()
                        } catch(a) {
                            return b[31]
                        }
                    }
                    function r() {
                        if (!y[b[4]]) return b[0];
                        var h = [b[211], b[314], c[3], b[5], b[183], c[27], c[115], b[230], c[42], b[157], c[145], b[266], c[34], b[246], c[134], b[336], b[189], c[138], b[296], b[201], b[158], b[233], b[247], c[147], c[13], b[55], b[288], b[173], c[171], c[64], c[26], b[244], b[332], b[187], c[133], b[269], b[290], b[351], b[176], b[308], b[39], b[254], c[97], c[71], b[72], b[7], c[54], b[200], c[39], b[242], c[107], b[225], c[66], b[188], b[287], b[190], c[80], b[250], b[347], c[87], b[263], b[213], b[109], b[95], B[1], c[109], c[82], c[0], c[57], b[352], c[85], B[3], b[166], c[50], b[214], b[195], c[35], c[121], c[146], c[28], b[357], b[317], c[31], b[178], b[241], c[55], c[9], b[96], b[251], b[94], c[72], b[196], b[23], b[102], b[84], b[148], b[199], c[59], b[16], b[217], b[252], b[306], c[173], b[222], b[15], b[58], b[203], b[8], c[136], b[245], b[17], b[51], b[295], c[153], c[130], b[331], b[232], c[51], c[61]],
                        d = [],
                        f = {};
                        d.push(p(y[b[4]],
                        function(h) {
                            f[h.name] = a[541];
                            var d = p(h,
                            function(a) {
                                return [a.type, a.suffixes].join(b[144])
                            }).join(b[34]);
                            return [h.name, h.description, d].join(c[88])
                        },
                        this).join(b[25]));
                        d.push(p(h,
                        function(a) {
                            if (f[a]) return b[0];
                            a = y[b[4]][a];
                            if (!a) return b[0];
                            var h = p(a,
                            function(a) {
                                return [a.type, a.suffixes].join(b[144])
                            }).join(b[34]);
                            return [a.name, a.description, h].join(c[88])
                        },
                        this).join(b[56]));
                        return d.join(b[56])
                    }
                    function q() {
                        return window[b[355]] ? p([b[236], b[292], b[316], b[298], c[151], b[197], c[83], b[218], c[111], b[175], b[249], b[100], b[162], b[231], c[1], b[249], b[102], b[148], b[312], c[53], b[350], c[118], b[326]],
                        function(a) {
                            try {
                                return new window[b[355]](a),
                                a
                            } catch(h) {
                                return null
                            }
                        }).join(b[56]) : b[0]
                    }
                    function p(a, b, h) {
                        var c = [];
                        if (null == a) return c;
                        if (I && a.map === I) return a.map(b, h);
                        E(a,
                        function(a, d, f) {
                            c[c.length] = b.call(h, a, d, f)
                        });
                        return c
                    }
                    function E(b, h) {
                        if (null !== b) if (z && b.forEach === z) b.forEach(h, void 0);
                        else if (b.length === +b.length) for (var c = a[15], d = b.length; c < d && h.call(void 0, b[c], c, b) !== {}; c++);
                        else for (c in b) if (b.hasOwnProperty(c) && h.call(void 0, b[c], c, b) === {}) break
                    }
                    var z = Array.prototype.forEach,
                    I = Array.prototype.map,
                    n = {
                        e: M,
                        j: !0,
                        i: !0,
                        h: !0,
                        b: !0,
                        a: !0
                    };
                    typeof h == b[264] ? n.e = h: (null != h.b && void 0 != h.b && (n.b = h.b), null != h.a && void 0 != h.a && (n.a = h.a));
                    this.get = function() {
                        var h = [],
                        l = [];
                        if (Qa) {
                            var e;
                            try {
                                e = !!window[b[339]]
                            } catch(X) {
                                e = !0
                            }
                            h.push(e);
                            var p;
                            try {
                                p = !!window[c[38]]
                            } catch(z) {
                                p = !0
                            }
                            h.push(p);
                            h.push( !! window[c[40]]);
                            C[b[258]] ? h.push(typeof C[b[258]][b[301]]) : h.push("undefined");
                            h.push(typeof window[c[78]]);
                            h.push(y[b[193]]);
                            h.push(y[c[155]]);
                            if (e = n.i) try {
                                var u = C[b[167]](c[79]);
                                e = !(!u[B[7]] || !u[B[7]](b[354]))
                            } catch(r) {
                                e = !1
                            }
                            if (e) try {
                                h.push(k()),
                                n.b && h.push(f())
                            } catch(E) {
                                h.push(b[59])
                            }
                            h.push(g());
                            n.a && l.push(d());
                            l.push(y[c[110]]);
                            l.push(y[b[151]]);
                            l.push(window[b[257]][b[359]]);
                            n.j && (u = window[b[257]] ? [window[b[257]].height, window[b[257]].width] : [a[15], a[15]], typeof u !== c[98] && l.push(u.join(b[138])));
                            l.push((new Date)[b[128]]());
                            l.push(y[b[122]]);
                            l.push(m())
                        }
                        u = [];
                        n.e ? (u.push(n.e(h.join(c[152]))), u.push(n.e(l.join(c[152])))) : (u.push(M(h.join(c[152]))), u.push(M(l.join(c[152]))));
                        return u
                    }
                }
                function M(h) {
                    var c = a[88],
                    d,
                    f,
                    e,
                    g,
                    k,
                    m;
                    d = h.length & a[19];
                    f = h.length - d;
                    e = c;
                    c = a[21];
                    g = a[375];
                    for (m = a[15]; m < f;) k = h.charCodeAt(m) & a[299] | (h.charCodeAt(++m) & a[299]) << a[38] | (h.charCodeAt(++m) & a[299]) << a[58] | (h.charCodeAt(++m) & a[299]) << a[74],
                    ++m,
                    k = (k & a[486]) * c + (((k >>> a[58]) * c & a[486]) << a[58]) & a[405],
                    k = k << a[56] | k >>> a[60],
                    k = (k & a[486]) * g + (((k >>> a[58]) * g & a[486]) << a[58]) & a[405],
                    e ^= k,
                    e = e << a[50] | e >>> a[64],
                    e = (e & a[486]) * a[26] + (((e >>> a[58]) * a[26] & a[486]) << a[58]) & a[405],
                    e = (e & a[486]) + a[394] + (((e >>> a[58]) + a[435] & a[486]) << a[58]);
                    k = a[15];
                    switch (d) {
                    case a[19]:
                        k ^= (h.charCodeAt(m + a[16]) & a[299]) << a[58];
                    case a[16]:
                        k ^= (h.charCodeAt(m + a[541]) & a[299]) << a[38];
                    case a[541]:
                        k ^= h.charCodeAt(m) & a[299],
                        k = (k & a[486]) * c + (((k >>> a[58]) * c & a[486]) << a[58]) & a[405],
                        k = k << a[56] | k >>> a[60],
                        k = (k & a[486]) * g + (((k >>> a[58]) * g & a[486]) << a[58]) & a[405],
                        e ^= k
                    }
                    e ^= h.length;
                    e ^= e >>> a[58];
                    e = (e & a[486]) * a[407] + (((e >>> a[58]) * a[407] & a[486]) << a[58]) & a[405];
                    e ^= e >>> a[50];
                    e = (e & a[486]) * a[349] + (((e >>> a[58]) * a[349] & a[486]) << a[58]) & a[405];
                    e ^= e >>> a[58];
                    h = e >>> a[15];
                    d = [];
                    d.push(h);
                    try {
                        for (var r, B = h + b[0], p = a[15], E = a[15], z = a[15]; z < B.length; z++) try {
                            var q = parseInt(B.charAt(z) + b[0]),
                            p = q || q === a[15] ? p + q: p + a[541];
                            E++
                        } catch(n) {
                            p += a[541],
                            E++
                        }
                        E = E == a[15] ? a[541] : E;
                        r = ba(p * a[541] / E, N);
                        for (var x, C = Math.floor(r / Math.pow(a[43], N - a[541])), G = h + b[0], w = a[15], D = a[15], H = a[15], u = a[15], F = a[15]; F < G.length; F++) try {
                            var v = parseInt(G.charAt(F) + b[0]);
                            v || v === a[15] ? v < C ? (D++, w += v) : (u++, H += v) : (u++, H += C)
                        } catch(A) {
                            u++,
                            H += C
                        }
                        u = u == a[15] ? a[541] : u;
                        D = D == a[15] ? a[541] : D;
                        x = ba(H * a[541] / u - w * a[541] / D, T);
                        d.push(ca(r, N, b[41]));
                        d.push(ca(x, T, b[41]))
                    } catch(y) {
                        d = [],
                        d.push(h),
                        d.push(U(N, b[35]).join(b[0])),
                        d.push(U(T, b[35]).join(b[0]))
                    }
                    return d.join(b[0])
                }
                function ba(h, c) {
                    if (h < a[15] || h >= a[43]) throw Error(b[30]);
                    for (var d = U(c, b[41]), e = b[0] + h, f = a[15], g = a[15]; f < d.length && g < e.length; g++) e.charAt(g) != b[38] && (d[f++] = e.charAt(g));
                    return parseInt(d.join(b[0]))
                }
                function ca(a, c, d) {
                    a = b[0] + a;
                    if (a.length > c) throw Error(b[87]);
                    if (a.length == c) return a;
                    for (var e = [], f = a.length; f < c; f++) e.push(d);
                    e.push(a);
                    return e.join(b[0])
                }
                function U(b, c) {
                    if (b <= a[15]) return [a[15]];
                    for (var d = [], e = a[15]; e < b; e++) d.push(c);
                    return d
                }
                function r(a) {
                    return null == a || void 0 == a
                }
                function m(a, b, c) {
                    this.f = a;
                    this.c = b;
                    this.g = r(c) ? !0 : c
                }
                function Ra(a) {
                    if (r(a) || r(a.f) || r(a.c)) return ! 1;
                    try {
                        if (r(window[a.f])) return ! 1
                    } catch(b) {
                        return ! 1
                    }
                    return ! 0
                }
                function v(c, d) {
                    if (r(c)) return b[0];
                    for (var e = a[15]; e < c.length; e++) {
                        var f = c[e];
                        if (!r(f) && f.f == d) return f
                    }
                }
                function da() {
                    var h;
                    a: {
                        if (!r(q)) for (h = a[15]; h < q.length; h++) {
                            var d = q[h];
                            if (d.g && !Ra(d)) {
                                h = d;
                                break a
                            }
                        }
                        h = null
                    }
                    var e;
                    if (r(h)) {
                        try {
                            e = window.parseFloat(b[180]) === a[384] && window.isNaN(window.parseFloat(b[163]))
                        } catch(f) {
                            e = !1
                        }
                        if (e) {
                            var g;
                            try {
                                g = window.parseInt(b[323]) === a[273] && window.isNaN(window.parseInt(b[163]))
                            } catch(k) {
                                g = !1
                            }
                            if (g) {
                                var m;
                                try {
                                    m = window.decodeURI(b[208]) === b[24]
                                } catch(C) {
                                    m = !1
                                }
                                if (m) {
                                    var x;
                                    try {
                                        x = window.decodeURIComponent(b[209]) === b[28]
                                    } catch(F) {
                                        x = !1
                                    }
                                    if (x) {
                                        var p;
                                        try {
                                            p = window.encodeURI(b[24]) === b[208]
                                        } catch(E) {
                                            p = !1
                                        }
                                        if (p) {
                                            var z;
                                            try {
                                                z = window.encodeURIComponent(b[28]) === b[209]
                                            } catch(I) {
                                                z = !1
                                            }
                                            if (z) {
                                                var n;
                                                try {
                                                    n = window.escape(b[28]) === b[209]
                                                } catch(A) {
                                                    n = !1
                                                }
                                                if (n) {
                                                    var y;
                                                    try {
                                                        y = window.unescape(b[209]) === b[28]
                                                    } catch(G) {
                                                        y = !1
                                                    }
                                                    if (y) {
                                                        var w;
                                                        try {
                                                            w = window.eval(b[304]) === a[273]
                                                        } catch(D) {
                                                            w = !1
                                                        }
                                                        e = w ? null: v(q, b[171])
                                                    } else e = v(q, c[172])
                                                } else e = v(q, b[342])
                                            } else e = v(q, c[30])
                                        } else e = v(q, c[16])
                                    } else e = v(q, B[2])
                                } else e = v(q, b[320])
                            } else e = v(q, c[58])
                        } else e = v(q, c[89])
                    } else e = h;
                    return e
                }
                function Sa() {
                    var a = da();
                    if (!r(a)) return a.c;
                    try {
                        a = r(window[b[168]]) || r(window[b[168]][b[334]]) ? null: v(q, b[311])
                    } catch(c) {
                        a = null
                    }
                    if (!r(a)) return a.c;
                    try {
                        a = r(context) || r(context[b[185]]) ? null: v(q, b[265])
                    } catch(d) {
                        a = null
                    }
                    return r(a) ? null: a.c
                }
                function Ba(c) {
                    for (var d = [], e = a[15]; e < c; e++) {
                        var f = Math.random() * Ta,
                        f = Math.floor(f);
                        d.push(ea.charAt(f))
                    }
                    return d.join(b[0])
                }
                function P(h) {
                    for (var d = (C[b[207]] || b[0]).split(c[91]), e = a[15]; e < d.length; e++) {
                        var f = d[e].indexOf(b[57]);
                        if (f >= a[15]) {
                            var g = d[e].substring(f + a[541], d[e].length);
                            if (d[e].substring(a[15], f) == h) return window.decodeURIComponent(g)
                        }
                    }
                    return null
                }
                function Ca(h) {
                    var d = [b[135], b[182], b[133], b[108], b[159], b[165], c[18]],
                    e = b[0];
                    if (null == h || void 0 == h) return h;
                    if (typeof h == [b[291], b[220], b[121]].join(b[0])) {
                        for (var e = e + b[142], f = a[15]; f < d.length; f++) if (h.hasOwnProperty(d[f])) {
                            var g = b[29] + d[f] + b[262],
                            k;
                            k = b[0] + h[d[f]];
                            k = null == k || void 0 == k ? k: k.replace(/'/g, c[96]).replace(/"/g, b[24]);
                            e += g + k + b[191]
                        }
                        e.charAt(e.length - a[541]) == b[34] && (e = e.substring(a[15], e.length - a[541]));
                        return e += b[143]
                    }
                    return null
                }
                function oa(a, d, e, f) {
                    var g = [];
                    g.push(a + b[57] + encodeURIComponent(d));
                    e && (a = new Date, a = new Date(f), f = a[b[215]](), g.push(c[91]), g.push(b[172]), g.push(b[305]), g.push(b[325]), g.push(b[319]), g.push(f));
                    g.push(c[91]);
                    g.push(b[302]);
                    g.push(b[216]);
                    null != A && void 0 != A && A != b[0] && (g.push(c[91]), g.push(b[152]), g.push(b[234]), g.push(b[260]), g.push(A));
                    C[b[207]] = g.join(b[0])
                }
                function Da(a) {
                    window[pa] = a
                }
                function Ea(a) {
                    window[qa] = a
                }
                function Fa(c, d) {
                    for (var e = [], f = a[15]; f < d; f++) e.push(c);
                    return e.join(b[0])
                }
                function Ga(a, c) {
                    var d = P(a);
                    null !== d && void 0 !== d && d !== b[0] || oa(a, c, !1)
                }
                function ra() {
                    var a = P(V);
                    if (null == a || void 0 == a || a == b[0]) a = window[qa];
                    return a
                }
                function Ua() {
                    var a = ra();
                    if (null == a || void 0 == a || a == b[0]) return ! 1;
                    try {
                        return (a = parseInt(a)) && a >= fa ? !0 : !1
                    } catch(c) {
                        return ! 1
                    }
                }
                function ga(c) {
                    if (null == c || void 0 == c || c == b[0]) return null;
                    c = c.split(b[54]);
                    return c.length < a[16] || !/[0-9]+/gi.test(c[1]) ? null: parseInt(c[1])
                }
                function Q() {
                    var a = P(S);
                    if (null == a || void 0 == a || a == b[0]) a = window[pa];
                    return a
                }
                function Va() {
                    var c = Q();
                    if (null == c || void 0 == c || c == b[0]) return a[15];
                    c = ga(c);
                    return null == c ? a[15] : c - (sa - ta) - (new window[B[0]])[b[179]]()
                }
                function Ha(d, e) {
                    var f = new window[B[0]];
                    f[b[21]](f[b[179]]() - a[326]);
                    window[b[330]][b[207]] = null == e || void 0 == e || e == b[0] ? d + b[147] + f[b[215]]() : d + c[12] + e + c[131] + f[b[215]]()
                }
                function Ia() {
                    if (! (null == K || void 0 == K || K.length <= a[15])) for (var c = a[15]; c < K.length; c++) {
                        var d = K[c]; (null != A && void 0 != A && A != b[0] || null != d && void 0 != d && d != b[0]) && A != d && (Ha(S, d), Ha(V, d))
                    }
                }
                function ua() {
                    Ia();
                    window[qa] = null;
                    window[pa] = null;
                    var h = !0,
                    t = {
                        v: b[227]
                    },
                    l = Sa();
                    l && (t[c[18]] = l);
                    l = null;
                    t[b[108]] = Wa;
                    var m = (new window[B[0]])[b[179]]() + sa,
                    r = m + a[308] * a[148] * a[148] * a[74] * a[303] * a[26];
                    t[b[133]] = Ba(a[19]) + m + Ba(a[19]);
                    try {
                        var q = (new Pa({
                            b: Xa,
                            a: Ya
                        })).get();
                        null != q && void 0 != q && q.length > a[15] ? t[b[182]] = q.join(b[34]) : (t[b[182]] = Fa(b[41], a[43]), t[b[159]] = b[42], h = !1)
                    } catch(C) {
                        t[b[182]] = Fa(b[41], a[43]),
                        t[b[159]] = b[42],
                        h = !1
                    }
                    try {
                        var v = l = Ca(t),
                        t = Za;
                        if (null == t || void 0 == t) throw Error(b[120]);
                        if (null == v || void 0 == v) v = b[0];
                        var q = v,
                        y;
                        y = null == v ? e([]) : e(ma(v));
                        var A = ma(q + y),
                        p = ma(t);
                        null == A && (A = []);
                        y = [];
                        for (var E = a[15]; E < va; E++) {
                            var z = Math.random() * a[301],
                            z = Math.floor(z);
                            y[E] = x(z)
                        }
                        var p = g(p),
                        p = na(p, g(y)),
                        E = p = g(p),
                        I;
                        if (null == A || void 0 == A || A.length == a[15]) I = za(F);
                        else {
                            var n = A.length,
                            J = a[15],
                            J = n % F <= F - ha ? F - n % F - ha: F * a[16] - n % F - ha,
                            z = [];
                            Z(A, a[15], z, a[15], n);
                            for (var K = a[15]; K < J; K++) z[n + K] = a[15];
                            Z(Aa(n), a[15], z, n + J, ha);
                            I = z
                        }
                        n = I;
                        if (null == n || n.length % F != a[15]) throw Error(b[130]);
                        I = [];
                        for (var G = a[15], w = n.length / F, D = a[15]; D < w; D++) {
                            I[D] = [];
                            for (var H = a[15]; H < F; H++) I[D][H] = n[G++]
                        }
                        G = [];
                        Z(y, a[15], G, a[15], va);
                        for (var u = I.length,
                        L = a[15]; L < u; L++) {
                            var O, M;
                            var N = I[L];
                            if (null == N) M = null;
                            else {
                                for (var T = x(a[104]), w = [], U = N.length, P = a[15]; P < U; P++) w.push(Oa(N[P], T++));
                                M = w
                            }
                            var Q;
                            w = M;
                            if (null == w) Q = null;
                            else {
                                for (var aa = x(a[143]), D = [], ba = w.length, wa = a[15]; wa < ba; wa++) D.push(Y(w[wa], aa--));
                                Q = D
                            }
                            var ca = d(Q, a[127]);
                            O = d(ca, a[36]);
                            var xa = na(O, p),
                            ia;
                            w = xa;
                            D = E;
                            if (null == w) ia = null;
                            else if (null == D) ia = w;
                            else {
                                for (var H = [], da = D.length, W = a[15], ea = w.length; W < ea; W++) H[W] = x(w[W] + D[W % da]);
                                ia = H
                            }
                            var xa = na(ia, E),
                            ja = f(xa),
                            ja = f(ja);
                            Z(ja, a[15], G, L * F + va, F);
                            E = ja
                        }
                        var ka;
                        if (null == G || void 0 == G) ka = null;
                        else if (G.length == a[15]) ka = b[0];
                        else {
                            var ya = a[19];
                            try {
                                for (var u = [], R = a[15]; R < G.length;) if (R + ya <= G.length) u.push(k(G, R, ya)),
                                R += ya;
                                else {
                                    u.push(k(G, R, G.length - R));
                                    break
                                }
                                ka = u.join(b[0])
                            } catch(ra) {
                                throw Error(b[111])
                            }
                        }
                        l = ka
                    } catch(ga) {
                        l = Ca({
                            ec: b[43],
                            em: ga.message
                        }),
                        h = !1
                    }
                    l = l + b[54] + m;
                    oa(S, l, h, r);
                    Ga(S, l);
                    Da(l);
                    oa(V, fa, h, r);
                    Ga(V, fa);
                    Ea(fa);
                    window[b[124]] && window[b[124]](ua, ta)
                }
                m.prototype = {
                    toString: function() {
                        return c[93] + this.f + b[164] + this.c + c[117] + this.g + b[143]
                    }
                };
                var q = [new m(c[67], b[13]), new m(b[330], b[14]), new m(c[6], b[11]), new m(c[65], b[12]), new m(c[140], b[10]), new m(b[257], b[9]), new m(b[2], b[19]), new m(b[235], b[22]), new m(c[119], b[6]), new m(c[89], c[164]), new m(c[58], c[162]), new m(b[320], c[163]), new m(B[2], c[159]), new m(c[16], c[161]), new m(c[30], c[156]), new m(b[342], c[158]), new m(c[172], c[165]), new m(b[171], c[168]), new m(b[253], c[128], !1), new m(b[294], c[129], !1), new m(b[168], c[126], !1), new m(b[311], c[127], !1), new m(b[265], c[144], !1)],
                Qa = da() ? !1 : !0,
                Wa = window && window[c[65]] && window[c[65]].host || b[353],
                C = window[b[330]],
                y = window[c[6]],
                N = a[16],
                T = a[16],
                aa = [b[41], b[42], b[43], b[44], b[45], b[47], b[48], b[50], b[52], b[53], b[97], b[99], b[101], b[103], b[105], b[106]],
                La = [a[15], a[377], a[383], a[522], a[449], a[316], a[495], a[343], a[462], a[542], a[310], a[461], a[496], a[464], a[415], a[40], a[455], a[363], a[533], a[402], a[438], a[293], a[366], a[511], a[491], a[493], a[476], a[333], a[539], a[412], a[297], a[427], a[474], a[29], a[369], a[503], a[325], a[353], a[546], a[390], a[420], a[440], a[174], a[442], a[306], a[501], a[469], a[336], a[508], a[331], a[482], a[355], a[358], a[400], a[379], a[528], a[525], a[459], a[423], a[34], a[408], a[520], a[319], a[446], a[471], a[437], a[47], a[417], a[548], a[506], a[463], a[312], a[320], a[256], a[345], a[498], a[380], a[395], a[523], a[385], a[416], a[537], a[429], a[298], a[497], a[487], a[335], a[478], a[300], a[433], a[513], a[367], a[368], a[451], a[404], a[534], a[504], a[295], a[337], a[470], a[443], a[413], a[445], a[190], a[354], a[317], a[391], a[547], a[33], a[466], a[505], a[370], a[521], a[398], a[447], a[321], a[460], a[517], a[37], a[424], a[403], a[350], a[529], a[381], a[334], a[499], a[356], a[483], a[481], a[332], a[452], a[490], a[296], a[431], a[341], a[419], a[536], a[401], a[516], a[362], a[365], a[515], a[479], a[304], a[314], a[458], a[139], a[540], a[414], a[53], a[309], a[473], a[387], a[519], a[388], a[374], a[494], a[348], a[340], a[324], a[426], a[28], a[527], a[456], a[318], a[450], a[389], a[526], a[485], a[352], a[510], a[329], a[378], a[532], a[342], a[409], a[283], a[441], a[421], a[436], a[467], a[339], a[130], a[509], a[372], a[502], a[475], a[22], a[545], a[397], a[307], a[360], a[514], a[364], a[302], a[347], a[399], a[535], a[361], a[328], a[430], a[294], a[418], a[382], a[330], a[480], a[489], a[32], a[346], a[492], a[322], a[359], a[518], a[386], a[373], a[410], a[51], a[411], a[472], a[323], a[457], a[313], a[538], a[305], a[531], a[376], a[406], a[344], a[351], a[484], a[327], a[512], a[448], a[315], a[524], a[392], a[24], a[425], a[454], a[530], a[393], a[544], a[357], a[311], a[500], a[371], a[17], a[477], a[338], a[465], a[507], a[157], a[439], a[232], a[434], a[422]],
                Ka = [a[76], a[182], a[199], a[231], a[165], a[156], a[75], a[207], a[166], a[19], a[158], a[223], a[191], a[102], a[35], a[94], a[126], a[127], a[248], a[192], a[56], a[66], a[284], a[274], a[82], a[110], a[257], a[258], a[175], a[275], a[86], a[215], a[224], a[95], a[167], a[168], a[193], a[233], a[64], a[285], a[159], a[70], a[153], a[240], a[208], a[45], a[173], a[241], a[140], a[83], a[65], a[103], a[152], a[135], a[194], a[209], a[144], a[38], a[276], a[46], a[114], a[265], a[68], a[131], a[106], a[242], a[243], a[225], a[136], a[71], a[132], a[145], a[128], a[183], a[60], a[44], a[286], a[118], a[266], a[72], a[90], a[18], a[267], a[200], a[73], a[123], a[169], a[111], a[137], a[115], a[244], a[277], a[98], a[216], a[74], a[26], a[124], a[282], a[27], a[133], a[259], a[281], a[31], a[217], a[249], a[41], a[96], a[78], a[23], a[160], a[176], a[184], a[250], a[201], a[119], a[226], a[62], a[16], a[251], a[59], a[48], a[227], a[148], a[129], a[116], a[290], a[170], a[107], a[99], a[234], a[87], a[134], a[245], a[210], a[84], a[235], a[195], a[260], a[91], a[261], a[92], a[211], a[100], a[80], a[262], a[268], a[112], a[185], a[218], a[79], a[122], a[269], a[104], a[120], a[177], a[20], a[263], a[149], a[61], a[77], a[154], a[36], a[150], a[125], a[89], a[219], a[101], a[252], a[113], a[141], a[121], a[220], a[273], a[186], a[253], a[178], a[202], a[246], a[108], a[187], a[81], a[117], a[49], a[203], a[30], a[264], a[270], a[142], a[271], a[212], a[138], a[52], a[221], a[88], a[109], a[222], a[143], a[236], a[54], a[97], a[272], a[287], a[541], a[228], a[247], a[146], a[63], a[278], a[67], a[254], a[161], a[15], a[543], a[213], a[204], a[214], a[188], a[179], a[196], a[58], a[229], a[288], a[237], a[55], a[279], a[162], a[50], a[155], a[289], a[69], a[197], a[180], a[280], a[151], a[93], a[230], a[181], a[39], a[85], a[238], a[105], a[25], a[255], a[171], a[189], a[42], a[198], a[57], a[163], a[164], a[205], a[239], a[172], a[206], a[147], a[43]],
                F = a[158],
                L = a[158],
                ha = a[23],
                va = a[23],
                d = function(b, c) {
                    if (null == b) return null;
                    for (var d = x(c), e = [], f = b.length, g = a[15]; g < f; g++) e.push(Y(b[g], d++));
                    return e
                },
                Za = b[345],
                S = b[299],
                V = c[100],
                fa = a[91],
                ea = b[275],
                Ta = ea.length,
                sa = a[444],
                ta = a[396],
                Ya = !1,
                Xa = !1,
                O = window && window[c[65]] && window[c[65]][b[310]] || c[95],
                A = c[56],
                A = function(d, e) {
                    if (null == d || void 0 == d || d == b[0] || null == e || void 0 == e || e.length <= a[15]) return null;
                    e = e.split(b[56]);
                    for (var f = a[15]; f < e.length; f++) {
                        var g = new RegExp(e[f].replace(/\./g, c[101]) + b[25]);
                        if (null != d.match(g) || null != (b[38] + d).match(g)) return e[f]
                    }
                    return null
                } (O, A),
                pa = S.replace(/[^a-zA-Z0-9$]/g, b[0]).toLowerCase(),
                qa = V.replace(/[^a-zA-Z0-9$]/g, b[0]).toLowerCase(),
                K = function(c) {
                    var d = [];
                    if (!c) return d;
                    c = c.split(b[38]);
                    for (var e = b[0], f = a[15]; f < c.length; f++) f < c.length - a[541] && (e = b[38] + c[c.length - a[541] - f] + e, d.push(e));
                    return d
                } (O);
                K.push(null);
                K.push(b[38] + O); (function(d) {
                    for (var e = a[15], f = (C[b[207]] || b[0]).split(c[91]), g = a[15]; g < f.length; g++) {
                        var k = f[g].indexOf(b[57]);
                        k >= a[15] && f[g].substring(a[15], k) == d && (e += a[541])
                    }
                    return e
                })(S) > a[541] && Ia(); (function() {
                    var a = Q();
                    if (null == a || void 0 == a || a == b[0]) a = !1;
                    else {
                        var c;
                        if (c = Ua()) a = ga(a),
                        c = !(null == a || a - (new window[B[0]])[b[179]]() <= sa - ta);
                        a = c
                    }
                    return a
                })() ? (Da(Q()), Ea(ra()), O = Va(), window[b[124]] && window[b[124]](ua, O)) : ua()
            })()
        })()
    })()
})(); (function() {})(); (function() {
    var bCg1x;
    var uP6J = "VISITOR_CLIENT_NO_COOKIE_SUPPORT";
    var bUf6Z = 0;
    var bBY1x = 0;
    var bBX1x = 1;
    var bBV1x = 0;
    var boc8U = "";
    var bBM1x = "";
    var bBJ1x = "";
    var Yo3x = "";
    var Yp3x = "";
    var boa8S = "";
    var bBG1x = 0;
    var bBF1x = "";
    var In7g = "";
    var ER9I = 0;
    var bnZ8R = ntes_get_domain();
    var bnX8P = null;
    var czZ2x = "//analytics.163.com";
    var bTC6w = function() {};
    function is_spider() {
        return /baiduspider/gi.test(window.navigator.userAgent)
    }
    function ntes_get_domain() {
        var f = document.domain;
        var d = f.split(".");
        var c = d.length;
        var e = /^\d+$/g;
        if (e.test(d[c - 1])) {
            return f
        }
        if (d.length < 3) {
            return "." + f
        }
        var g = ["com", "net", "org", "gov", "co"];
        var b, a = false;
        for (b = 0; b < g.length; b++) {
            if (d[c - 2] == g[b]) {
                a = true
            }
        }
        if (!a) {
            return "." + d[c - 2] + "." + d[c - 1]
        } else {
            return "." + d[c - 3] + "." + d[c - 2] + "." + d[c - 1]
        }
    }
    function ntes_set_cookie_long(a, c) {
        var b = new Date;
        b.setTime(b.getTime() + 1e3 * 60 * 60 * 24 * 365 * 100);
        document.cookie = a + "=" + c + "; expires=" + b.toGMTString() + "; path=/; domain=" + bnZ8R
    }
    function ntes_set_cookie(a, c) {
        var b = new Date;
        b.setTime(b.getTime() + 0);
        document.cookie = a + "=" + c + "; path=/; domain=" + bnZ8R
    }
    function ntes_set_cookie_new(b, d, a) {
        if (!a || a == "") {
            a = 1e3 * 60 * 60 * 24 * 365 * 1
        }
        var c = new Date;
        c.setTime(c.getTime() + a);
        document.cookie = b + "=" + d + "; expires=" + c.toGMTString() + "; path=/; domain=" + bnZ8R
    }
    function ntes_get_cookie(c) {
        var a = document.cookie;
        var d = c + "=";
        var g = a.length;
        var b = 0;
        while (b < g) {
            var e = b + d.length;
            if (a.substring(b, e) == d) {
                var f = a.indexOf(";", e);
                if (f == -1) {
                    f = g
                }
                return unescape(a.substring(e, f))
            }
            b = a.indexOf(" ", b) + 1;
            if (b == 0) {
                break
            }
        }
        return - 1
    }
    function ntes_get_flashver() {
        var f = "",
        n = navigator;
        if (n.plugins && n.plugins.length) {
            for (var ii = 0; ii < n.plugins.length; ii++) {
                if (n.plugins[ii].name.indexOf("Shockwave Flash") != -1) {
                    f = n.plugins[ii].description.split("Shockwave Flash")[1];
                    break
                }
            }
        } else {
            if (window.ActiveXObject) {
                for (var ii = 10; ii >= 2; ii--) {
                    try {
                        var fl = eval("new ActiveXObject('ShockwaveFlash.ShockwaveFlash." + ii + "');");
                        if (fl) {
                            f = ii + ".0";
                            break
                        }
                    } catch(e) {}
                }
            }
        }
        return f
    }
    var bTB6v = 0;
    var Mn8f = 8;
    function ntes_hex_md5(a) {
        return binl2hex(ntes_core_md5(str2binl(a), a.length * Mn8f))
    }
    function ntes_core_md5(p, k) {
        p[k >> 5] |= 128 << k % 32;
        p[(k + 64 >>> 9 << 4) + 14] = k;
        var o = 1732584193;
        var n = -271733879;
        var m = -1732584194;
        var l = 271733878;
        for (var g = 0; g < p.length; g += 16) {
            var j = o;
            var h = n;
            var f = m;
            var e = l;
            o = md5_ff(o, n, m, l, p[g + 0], 7, -680876936);
            l = md5_ff(l, o, n, m, p[g + 1], 12, -389564586);
            m = md5_ff(m, l, o, n, p[g + 2], 17, 606105819);
            n = md5_ff(n, m, l, o, p[g + 3], 22, -1044525330);
            o = md5_ff(o, n, m, l, p[g + 4], 7, -176418897);
            l = md5_ff(l, o, n, m, p[g + 5], 12, 1200080426);
            m = md5_ff(m, l, o, n, p[g + 6], 17, -1473231341);
            n = md5_ff(n, m, l, o, p[g + 7], 22, -45705983);
            o = md5_ff(o, n, m, l, p[g + 8], 7, 1770035416);
            l = md5_ff(l, o, n, m, p[g + 9], 12, -1958414417);
            m = md5_ff(m, l, o, n, p[g + 10], 17, -42063);
            n = md5_ff(n, m, l, o, p[g + 11], 22, -1990404162);
            o = md5_ff(o, n, m, l, p[g + 12], 7, 1804603682);
            l = md5_ff(l, o, n, m, p[g + 13], 12, -40341101);
            m = md5_ff(m, l, o, n, p[g + 14], 17, -1502002290);
            n = md5_ff(n, m, l, o, p[g + 15], 22, 1236535329);
            o = md5_gg(o, n, m, l, p[g + 1], 5, -165796510);
            l = md5_gg(l, o, n, m, p[g + 6], 9, -1069501632);
            m = md5_gg(m, l, o, n, p[g + 11], 14, 643717713);
            n = md5_gg(n, m, l, o, p[g + 0], 20, -373897302);
            o = md5_gg(o, n, m, l, p[g + 5], 5, -701558691);
            l = md5_gg(l, o, n, m, p[g + 10], 9, 38016083);
            m = md5_gg(m, l, o, n, p[g + 15], 14, -660478335);
            n = md5_gg(n, m, l, o, p[g + 4], 20, -405537848);
            o = md5_gg(o, n, m, l, p[g + 9], 5, 568446438);
            l = md5_gg(l, o, n, m, p[g + 14], 9, -1019803690);
            m = md5_gg(m, l, o, n, p[g + 3], 14, -187363961);
            n = md5_gg(n, m, l, o, p[g + 8], 20, 1163531501);
            o = md5_gg(o, n, m, l, p[g + 13], 5, -1444681467);
            l = md5_gg(l, o, n, m, p[g + 2], 9, -51403784);
            m = md5_gg(m, l, o, n, p[g + 7], 14, 1735328473);
            n = md5_gg(n, m, l, o, p[g + 12], 20, -1926607734);
            o = md5_hh(o, n, m, l, p[g + 5], 4, -378558);
            l = md5_hh(l, o, n, m, p[g + 8], 11, -2022574463);
            m = md5_hh(m, l, o, n, p[g + 11], 16, 1839030562);
            n = md5_hh(n, m, l, o, p[g + 14], 23, -35309556);
            o = md5_hh(o, n, m, l, p[g + 1], 4, -1530992060);
            l = md5_hh(l, o, n, m, p[g + 4], 11, 1272893353);
            m = md5_hh(m, l, o, n, p[g + 7], 16, -155497632);
            n = md5_hh(n, m, l, o, p[g + 10], 23, -1094730640);
            o = md5_hh(o, n, m, l, p[g + 13], 4, 681279174);
            l = md5_hh(l, o, n, m, p[g + 0], 11, -358537222);
            m = md5_hh(m, l, o, n, p[g + 3], 16, -722521979);
            n = md5_hh(n, m, l, o, p[g + 6], 23, 76029189);
            o = md5_hh(o, n, m, l, p[g + 9], 4, -640364487);
            l = md5_hh(l, o, n, m, p[g + 12], 11, -421815835);
            m = md5_hh(m, l, o, n, p[g + 15], 16, 530742520);
            n = md5_hh(n, m, l, o, p[g + 2], 23, -995338651);
            o = md5_ii(o, n, m, l, p[g + 0], 6, -198630844);
            l = md5_ii(l, o, n, m, p[g + 7], 10, 1126891415);
            m = md5_ii(m, l, o, n, p[g + 14], 15, -1416354905);
            n = md5_ii(n, m, l, o, p[g + 5], 21, -57434055);
            o = md5_ii(o, n, m, l, p[g + 12], 6, 1700485571);
            l = md5_ii(l, o, n, m, p[g + 3], 10, -1894986606);
            m = md5_ii(m, l, o, n, p[g + 10], 15, -1051523);
            n = md5_ii(n, m, l, o, p[g + 1], 21, -2054922799);
            o = md5_ii(o, n, m, l, p[g + 8], 6, 1873313359);
            l = md5_ii(l, o, n, m, p[g + 15], 10, -30611744);
            m = md5_ii(m, l, o, n, p[g + 6], 15, -1560198380);
            n = md5_ii(n, m, l, o, p[g + 13], 21, 1309151649);
            o = md5_ii(o, n, m, l, p[g + 4], 6, -145523070);
            l = md5_ii(l, o, n, m, p[g + 11], 10, -1120210379);
            m = md5_ii(m, l, o, n, p[g + 2], 15, 718787259);
            n = md5_ii(n, m, l, o, p[g + 9], 21, -343485551);
            o = safe_add(o, j);
            n = safe_add(n, h);
            m = safe_add(m, f);
            l = safe_add(l, e)
        }
        return Array(o, n, m, l)
    }
    function md5_cmn(h, e, d, c, g, f) {
        return safe_add(bit_rol(safe_add(safe_add(e, h), safe_add(c, f)), g), d)
    }
    function md5_ff(g, f, k, j, e, i, h) {
        return md5_cmn(f & k | ~f & j, g, f, e, i, h)
    }
    function md5_gg(g, f, k, j, e, i, h) {
        return md5_cmn(f & j | k & ~j, g, f, e, i, h)
    }
    function md5_hh(g, f, k, j, e, i, h) {
        return md5_cmn(f ^ k ^ j, g, f, e, i, h)
    }
    function md5_ii(g, f, k, j, e, i, h) {
        return md5_cmn(k ^ (f | ~j), g, f, e, i, h)
    }
    function safe_add(a, d) {
        var c = (a & 65535) + (d & 65535);
        var b = (a >> 16) + (d >> 16) + (c >> 16);
        return b << 16 | c & 65535
    }
    function bit_rol(a, b) {
        return a << b | a >>> 32 - b
    }
    function str2binl(d) {
        var c = new Array;
        var a = (1 << Mn8f) - 1;
        for (var b = 0; b < d.length * Mn8f; b += Mn8f) {
            c[b >> 5] |= (d.charCodeAt(b / Mn8f) & a) << b % 32
        }
        return c
    }
    function binl2hex(c) {
        var b = bTB6v ? "0123456789ABCDEF": "0123456789abcdef";
        var d = "";
        for (var a = 0; a < c.length * 4; a++) {
            d += b.charAt(c[a >> 2] >> a % 4 * 8 + 4 & 15) + b.charAt(c[a >> 2] >> a % 4 * 8 & 15)
        }
        return d
    }
    function str_to_ent(e) {
        var a = "";
        var d;
        for (d = 0; d < e.length; d++) {
            var f = e.charCodeAt(d);
            var b = "";
            if (f > 255) {
                while (f >= 1) {
                    b = "0123456789".charAt(f % 10) + b;
                    f = f / 10
                }
                if (b == "") {
                    b = "0"
                }
                b = "#" + b;
                b = "&" + b;
                b = b + ";";
                a += b
            } else {
                a += e.charAt(d)
            }
        }
        return a
    }
    function ntes_get_navigation_info() {
        Yo3x = "-";
        boa8S = "-";
        Yp3x = "-";
        var c = window.self,
        b = window.screen,
        a = window.navigator;
        if (c.screen) {
            Yo3x = b.width + "x" + b.height;
            boa8S = b.colorDepth + "-bit"
        } else {
            if (c.java) {
                var e = java.awt.Toolkit.getDefaultToolkit();
                var f = e.getScreenSize();
                Yo3x = f.width + "x" + f.height
            }
        }
        if (a.language) {
            Yp3x = a.language.toLowerCase()
        } else {
            if (a.browserLanguage) {
                Yp3x = a.browserLanguage.toLowerCase()
            }
        }
        var g = new Date(document.lastModified);
        bBG1x = g.getTime() / 1e3
    }
    function fetch_visitor_hash() {
        var c = new Date;
        var b = document.body.clientWidth + ":" + document.body.clientHeight;
        var a = str_to_ent(c.getTime() + Math.random() + document.location + document.referrer + screen.width + screen.height + navigator.userAgent + document.cookie + b);
        return ntes_hex_md5(a)
    }
    function cAa2x(c, b, f) {
        var e = c + "_" + +(new Date) + parseInt(Math.random() * 100),
        a,
        d = f || bTC6w;
        a = window[e] = new Image;
        a.onload = function() {
            window[e] = null;
            d()
        };
        a.onerror = function() {
            window[e] = null;
            d()
        };
        a.src = b;
        a = null
    }
    function neteaseTracker(l, a, m, k) {
        if (is_spider()) {
            return
        }
        var e = k || bCg1x;
        boc8U = escape(a || document.location);
        bBM1x = escape(m || document.title);
        bBJ1x = l === true ? "": escape(l || document.referrer);
        bBF1x = ntes_get_flashver();
        var b = (new Date).getTime();
        if (bnX8P == null) {
            document.cookie = "__ntes__test__cookies=" + b;
            bnX8P = ntes_get_cookie("__ntes__test__cookies") == b ? true: false;
            document.cookie = "__ntes__test__cookies=" + b + "; expires=" + (new Date("1970/01/01")).toUTCString()
        }
        if (e == "undefined" || !e) {
            return
        }
        if (boc8U.indexOf("http") != 0) {
            return
        }
        var h = ntes_get_cookie("_ntes_nnid");
        if (h == -1) {
            if (bnX8P) {
                uP6J = fetch_visitor_hash();
                bBY1x = 1;
                ntes_set_cookie_long("_ntes_nnid", uP6J + "," + (new Date).getTime());
                ntes_set_cookie_long("_ntes_nuid", uP6J)
            }
        } else {
            var o = h.indexOf(",");
            var p = h.indexOf("|");
            var f = false;
            if (p == -1) {
                p = h.length
            }
            uP6J = h.substr(0, o);
            ER9I = h.substr(o + 1, p - o - 1);
            if (ER9I == 0) {
                ER9I = (new Date).getTime();
                f = true
            }
            if (!uP6J) {
                uP6J = fetch_visitor_hash();
                f = true
            }
            if (f) {
                ntes_set_cookie_long("_ntes_nnid", uP6J + "," + ER9I);
                ntes_set_cookie_long("_ntes_nuid", uP6J)
            }
            if (ER9I != 0 && b - ER9I > 365 * 86400 * 1e3) {
                ER9I = 0;
                ntes_set_cookie_long("_ntes_nnid", uP6J + "," + (new Date).getTime());
                ntes_set_cookie_long("_ntes_nuid", uP6J)
            }
        }
        function c(q, i) {
            var s = ntes_get_cookie(q),
            r = ntes_get_cookie(i);
            return s == -1 ? r == -1 ? "": r: s
        }
        In7g = c("P_INFO", "P_OINFO");
        In7g = In7g ? In7g.substr(0, In7g.indexOf("|")) : "";
        bBV1x = c("S_INFO", "S_OINFO") ? 1 : 0;
        ntes_get_navigation_info();
        var n = ["_nacc=", e, "&_nvid=", uP6J, "&_nvtm=", bUf6Z, "&_nvsf=", bBX1x, "&_nvfi=", bBY1x, "&_nlag=", Yp3x, "&_nlmf=", bBG1x, "&_nres=", Yo3x, "&_nscd=", boa8S, "&_nstm=", bBV1x, "&_nurl=", boc8U, "&_ntit=", bBM1x, "&_nref=", bBJ1x, "&_nfla=", bBF1x, "&_nssn=", In7g, "&_nxkey=", (b + "" + Math.random()).substring(6, 20), "&_end1"].join("");
        bBX1x = 0;
        neteaseTracker.callback = null
    }
    bCg1x = "iad";
    neteaseTracker()
})(); (function() {})();
var CryptoJS = CryptoJS ||
function(u, p) {
    var d = {},
    l = d.lib = {},
    s = function() {},
    t = l.Base = {
        extend: function(a) {
            s.prototype = this;
            var c = new s;
            a && c.mixIn(a);
            c.hasOwnProperty("init") || (c.init = function() {
                c.$super.init.apply(this, arguments)
            });
            c.init.prototype = c;
            c.$super = this;
            return c
        },
        create: function() {
            var a = this.extend();
            a.init.apply(a, arguments);
            return a
        },
        init: function() {},
        mixIn: function(a) {
            for (var c in a) a.hasOwnProperty(c) && (this[c] = a[c]);
            a.hasOwnProperty("toString") && (this.toString = a.toString)
        },
        clone: function() {
            return this.init.prototype.extend(this)
        }
    },
    r = l.WordArray = t.extend({
        init: function(a, c) {
            a = this.words = a || [];
            this.sigBytes = c != p ? c: 4 * a.length
        },
        toString: function(a) {
            return (a || v).stringify(this)
        },
        concat: function(a) {
            var c = this.words,
            e = a.words,
            j = this.sigBytes;
            a = a.sigBytes;
            this.clamp();
            if (j % 4) for (var k = 0; k < a; k++) c[j + k >>> 2] |= (e[k >>> 2] >>> 24 - 8 * (k % 4) & 255) << 24 - 8 * ((j + k) % 4);
            else if (65535 < e.length) for (k = 0; k < a; k += 4) c[j + k >>> 2] = e[k >>> 2];
            else c.push.apply(c, e);
            this.sigBytes += a;
            return this
        },
        clamp: function() {
            var a = this.words,
            c = this.sigBytes;
            a[c >>> 2] &= 4294967295 << 32 - 8 * (c % 4);
            a.length = u.ceil(c / 4)
        },
        clone: function() {
            var a = t.clone.call(this);
            a.words = this.words.slice(0);
            return a
        },
        random: function(a) {
            for (var c = [], e = 0; e < a; e += 4) c.push(4294967296 * u.random() | 0);
            return new r.init(c, a)
        }
    }),
    w = d.enc = {},
    v = w.Hex = {
        stringify: function(a) {
            var c = a.words;
            a = a.sigBytes;
            for (var e = [], j = 0; j < a; j++) {
                var k = c[j >>> 2] >>> 24 - 8 * (j % 4) & 255;
                e.push((k >>> 4).toString(16));
                e.push((k & 15).toString(16))
            }
            return e.join("")
        },
        parse: function(a) {
            for (var c = a.length,
            e = [], j = 0; j < c; j += 2) e[j >>> 3] |= parseInt(a.substr(j, 2), 16) << 24 - 4 * (j % 8);
            return new r.init(e, c / 2)
        }
    },
    b = w.Latin1 = {
        stringify: function(a) {
            var c = a.words;
            a = a.sigBytes;
            for (var e = [], j = 0; j < a; j++) e.push(String.fromCharCode(c[j >>> 2] >>> 24 - 8 * (j % 4) & 255));
            return e.join("")
        },
        parse: function(a) {
            for (var c = a.length,
            e = [], j = 0; j < c; j++) e[j >>> 2] |= (a.charCodeAt(j) & 255) << 24 - 8 * (j % 4);
            return new r.init(e, c)
        }
    },
    x = w.Utf8 = {
        stringify: function(a) {
            try {
                return decodeURIComponent(escape(b.stringify(a)))
            } catch(c) {
                throw Error("Malformed UTF-8 data")
            }
        },
        parse: function(a) {
            return b.parse(unescape(encodeURIComponent(a)))
        }
    },
    q = l.BufferedBlockAlgorithm = t.extend({
        reset: function() {
            this.j8b = new r.init;
            this.bBv1x = 0
        },
        YP3x: function(a) {
            "string" == typeof a && (a = x.parse(a));
            this.j8b.concat(a);
            this.bBv1x += a.sigBytes
        },
        AT8L: function(a) {
            var c = this.j8b,
            e = c.words,
            j = c.sigBytes,
            k = this.blockSize,
            b = j / (4 * k),
            b = a ? u.ceil(b) : u.max((b | 0) - this.bBx1x, 0);
            a = b * k;
            j = u.min(4 * a, j);
            if (a) {
                for (var q = 0; q < a; q += k) this.bBt1x(e, q);
                q = e.splice(0, a);
                c.sigBytes -= j
            }
            return new r.init(q, j)
        },
        clone: function() {
            var a = t.clone.call(this);
            a.j8b = this.j8b.clone();
            return a
        },
        bBx1x: 0
    });
    l.Hasher = q.extend({
        cfg: t.extend(),
        init: function(a) {
            this.cfg = this.cfg.extend(a);
            this.reset()
        },
        reset: function() {
            q.reset.call(this);
            this.bnV8N()
        },
        update: function(a) {
            this.YP3x(a);
            this.AT8L();
            return this
        },
        finalize: function(a) {
            a && this.YP3x(a);
            return this.Zn4r()
        },
        blockSize: 16,
        bnW8O: function(a) {
            return function(b, e) {
                return (new a.init(e)).finalize(b)
            }
        },
        bTo6i: function(a) {
            return function(b, e) {
                return (new n.HMAC.init(a, e)).finalize(b)
            }
        }
    });
    var n = d.algo = {};
    return d
} (Math); (function() {
    var u = CryptoJS,
    p = u.lib.WordArray;
    u.enc.Base64 = {
        stringify: function(d) {
            var l = d.words,
            p = d.sigBytes,
            t = this.bv9m;
            d.clamp();
            d = [];
            for (var r = 0; r < p; r += 3) for (var w = (l[r >>> 2] >>> 24 - 8 * (r % 4) & 255) << 16 | (l[r + 1 >>> 2] >>> 24 - 8 * ((r + 1) % 4) & 255) << 8 | l[r + 2 >>> 2] >>> 24 - 8 * ((r + 2) % 4) & 255, v = 0; 4 > v && r + .75 * v < p; v++) d.push(t.charAt(w >>> 6 * (3 - v) & 63));
            if (l = t.charAt(64)) for (; d.length % 4;) d.push(l);
            return d.join("")
        },
        parse: function(d) {
            var l = d.length,
            s = this.bv9m,
            t = s.charAt(64);
            t && (t = d.indexOf(t), -1 != t && (l = t));
            for (var t = [], r = 0, w = 0; w < l; w++) if (w % 4) {
                var v = s.indexOf(d.charAt(w - 1)) << 2 * (w % 4),
                b = s.indexOf(d.charAt(w)) >>> 6 - 2 * (w % 4);
                t[r >>> 2] |= (v | b) << 24 - 8 * (r % 4);
                r++
            }
            return p.create(t, r)
        },
        bv9m: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
    }
})(); (function(u) {
    function p(b, n, a, c, e, j, k) {
        b = b + (n & a | ~n & c) + e + k;
        return (b << j | b >>> 32 - j) + n
    }
    function d(b, n, a, c, e, j, k) {
        b = b + (n & c | a & ~c) + e + k;
        return (b << j | b >>> 32 - j) + n
    }
    function l(b, n, a, c, e, j, k) {
        b = b + (n ^ a ^ c) + e + k;
        return (b << j | b >>> 32 - j) + n
    }
    function s(b, n, a, c, e, j, k) {
        b = b + (a ^ (n | ~c)) + e + k;
        return (b << j | b >>> 32 - j) + n
    }
    for (var t = CryptoJS,
    r = t.lib,
    w = r.WordArray,
    v = r.Hasher,
    r = t.algo,
    b = [], x = 0; 64 > x; x++) b[x] = 4294967296 * u.abs(u.sin(x + 1)) | 0;
    r = r.MD5 = v.extend({
        bnV8N: function() {
            this.dW0x = new w.init([1732584193, 4023233417, 2562383102, 271733878])
        },
        bBt1x: function(q, n) {
            for (var a = 0; 16 > a; a++) {
                var c = n + a,
                e = q[c];
                q[c] = (e << 8 | e >>> 24) & 16711935 | (e << 24 | e >>> 8) & 4278255360
            }
            var a = this.dW0x.words,
            c = q[n + 0],
            e = q[n + 1],
            j = q[n + 2],
            k = q[n + 3],
            z = q[n + 4],
            r = q[n + 5],
            t = q[n + 6],
            w = q[n + 7],
            v = q[n + 8],
            A = q[n + 9],
            B = q[n + 10],
            C = q[n + 11],
            u = q[n + 12],
            D = q[n + 13],
            E = q[n + 14],
            x = q[n + 15],
            f = a[0],
            m = a[1],
            g = a[2],
            h = a[3],
            f = p(f, m, g, h, c, 7, b[0]),
            h = p(h, f, m, g, e, 12, b[1]),
            g = p(g, h, f, m, j, 17, b[2]),
            m = p(m, g, h, f, k, 22, b[3]),
            f = p(f, m, g, h, z, 7, b[4]),
            h = p(h, f, m, g, r, 12, b[5]),
            g = p(g, h, f, m, t, 17, b[6]),
            m = p(m, g, h, f, w, 22, b[7]),
            f = p(f, m, g, h, v, 7, b[8]),
            h = p(h, f, m, g, A, 12, b[9]),
            g = p(g, h, f, m, B, 17, b[10]),
            m = p(m, g, h, f, C, 22, b[11]),
            f = p(f, m, g, h, u, 7, b[12]),
            h = p(h, f, m, g, D, 12, b[13]),
            g = p(g, h, f, m, E, 17, b[14]),
            m = p(m, g, h, f, x, 22, b[15]),
            f = d(f, m, g, h, e, 5, b[16]),
            h = d(h, f, m, g, t, 9, b[17]),
            g = d(g, h, f, m, C, 14, b[18]),
            m = d(m, g, h, f, c, 20, b[19]),
            f = d(f, m, g, h, r, 5, b[20]),
            h = d(h, f, m, g, B, 9, b[21]),
            g = d(g, h, f, m, x, 14, b[22]),
            m = d(m, g, h, f, z, 20, b[23]),
            f = d(f, m, g, h, A, 5, b[24]),
            h = d(h, f, m, g, E, 9, b[25]),
            g = d(g, h, f, m, k, 14, b[26]),
            m = d(m, g, h, f, v, 20, b[27]),
            f = d(f, m, g, h, D, 5, b[28]),
            h = d(h, f, m, g, j, 9, b[29]),
            g = d(g, h, f, m, w, 14, b[30]),
            m = d(m, g, h, f, u, 20, b[31]),
            f = l(f, m, g, h, r, 4, b[32]),
            h = l(h, f, m, g, v, 11, b[33]),
            g = l(g, h, f, m, C, 16, b[34]),
            m = l(m, g, h, f, E, 23, b[35]),
            f = l(f, m, g, h, e, 4, b[36]),
            h = l(h, f, m, g, z, 11, b[37]),
            g = l(g, h, f, m, w, 16, b[38]),
            m = l(m, g, h, f, B, 23, b[39]),
            f = l(f, m, g, h, D, 4, b[40]),
            h = l(h, f, m, g, c, 11, b[41]),
            g = l(g, h, f, m, k, 16, b[42]),
            m = l(m, g, h, f, t, 23, b[43]),
            f = l(f, m, g, h, A, 4, b[44]),
            h = l(h, f, m, g, u, 11, b[45]),
            g = l(g, h, f, m, x, 16, b[46]),
            m = l(m, g, h, f, j, 23, b[47]),
            f = s(f, m, g, h, c, 6, b[48]),
            h = s(h, f, m, g, w, 10, b[49]),
            g = s(g, h, f, m, E, 15, b[50]),
            m = s(m, g, h, f, r, 21, b[51]),
            f = s(f, m, g, h, u, 6, b[52]),
            h = s(h, f, m, g, k, 10, b[53]),
            g = s(g, h, f, m, B, 15, b[54]),
            m = s(m, g, h, f, e, 21, b[55]),
            f = s(f, m, g, h, v, 6, b[56]),
            h = s(h, f, m, g, x, 10, b[57]),
            g = s(g, h, f, m, t, 15, b[58]),
            m = s(m, g, h, f, D, 21, b[59]),
            f = s(f, m, g, h, z, 6, b[60]),
            h = s(h, f, m, g, C, 10, b[61]),
            g = s(g, h, f, m, j, 15, b[62]),
            m = s(m, g, h, f, A, 21, b[63]);
            a[0] = a[0] + f | 0;
            a[1] = a[1] + m | 0;
            a[2] = a[2] + g | 0;
            a[3] = a[3] + h | 0
        },
        Zn4r: function() {
            var b = this.j8b,
            n = b.words,
            a = 8 * this.bBv1x,
            c = 8 * b.sigBytes;
            n[c >>> 5] |= 128 << 24 - c % 32;
            var e = u.floor(a / 4294967296);
            n[(c + 64 >>> 9 << 4) + 15] = (e << 8 | e >>> 24) & 16711935 | (e << 24 | e >>> 8) & 4278255360;
            n[(c + 64 >>> 9 << 4) + 14] = (a << 8 | a >>> 24) & 16711935 | (a << 24 | a >>> 8) & 4278255360;
            b.sigBytes = 4 * (n.length + 1);
            this.AT8L();
            b = this.dW0x;
            n = b.words;
            for (a = 0; 4 > a; a++) c = n[a],
            n[a] = (c << 8 | c >>> 24) & 16711935 | (c << 24 | c >>> 8) & 4278255360;
            return b
        },
        clone: function() {
            var b = v.clone.call(this);
            b.dW0x = this.dW0x.clone();
            return b
        }
    });
    t.MD5 = v.bnW8O(r);
    t.HmacMD5 = v.bTo6i(r)
})(Math); (function() {
    var u = CryptoJS,
    p = u.lib,
    d = p.Base,
    l = p.WordArray,
    p = u.algo,
    s = p.EvpKDF = d.extend({
        cfg: d.extend({
            keySize: 4,
            hasher: p.MD5,
            iterations: 1
        }),
        init: function(d) {
            this.cfg = this.cfg.extend(d)
        },
        compute: function(d, r) {
            for (var p = this.cfg,
            s = p.hasher.create(), b = l.create(), u = b.words, q = p.keySize, p = p.iterations; u.length < q;) {
                n && s.update(n);
                var n = s.update(d).finalize(r);
                s.reset();
                for (var a = 1; a < p; a++) n = s.finalize(n),
                s.reset();
                b.concat(n)
            }
            b.sigBytes = 4 * q;
            return b
        }
    });
    u.EvpKDF = function(d, l, p) {
        return s.create(p).compute(d, l)
    }
})();
CryptoJS.lib.Cipher ||
function(u) {
    var p = CryptoJS,
    d = p.lib,
    l = d.Base,
    s = d.WordArray,
    t = d.BufferedBlockAlgorithm,
    r = p.enc.Base64,
    w = p.algo.EvpKDF,
    v = d.Cipher = t.extend({
        cfg: l.extend(),
        createEncryptor: function(e, a) {
            return this.create(this.bnU8M, e, a)
        },
        createDecryptor: function(e, a) {
            return this.create(this.bTh6b, e, a)
        },
        init: function(e, a, b) {
            this.cfg = this.cfg.extend(b);
            this.bBj1x = e;
            this.J8B = a;
            this.reset()
        },
        reset: function() {
            t.reset.call(this);
            this.bnV8N()
        },
        process: function(e) {
            this.YP3x(e);
            return this.AT8L()
        },
        finalize: function(e) {
            e && this.YP3x(e);
            return this.Zn4r()
        },
        keySize: 4,
        ivSize: 4,
        bnU8M: 1,
        bTh6b: 2,
        bnW8O: function(e) {
            return {
                encrypt: function(b, k, d) {
                    return ("string" == typeof k ? c: a).encrypt(e, b, k, d)
                },
                decrypt: function(b, k, d) {
                    return ("string" == typeof k ? c: a).decrypt(e, b, k, d)
                }
            }
        }
    });
    d.StreamCipher = v.extend({
        Zn4r: function() {
            return this.AT8L(!0)
        },
        blockSize: 1
    });
    var b = p.mode = {},
    x = function(e, a, b) {
        var c = this.bBi1x;
        c ? this.bBi1x = u: c = this.bBe1x;
        for (var d = 0; d < b; d++) e[a + d] ^= c[d]
    },
    q = (d.BlockCipherMode = l.extend({
        createEncryptor: function(e, a) {
            return this.Encryptor.create(e, a)
        },
        createDecryptor: function(e, a) {
            return this.Decryptor.create(e, a)
        },
        init: function(e, a) {
            this.bBd1x = e;
            this.bBi1x = a
        }
    })).extend();
    q.Encryptor = q.extend({
        processBlock: function(e, a) {
            var b = this.bBd1x,
            c = b.blockSize;
            x.call(this, e, a, c);
            b.encryptBlock(e, a);
            this.bBe1x = e.slice(a, a + c)
        }
    });
    q.Decryptor = q.extend({
        processBlock: function(e, a) {
            var b = this.bBd1x,
            c = b.blockSize,
            d = e.slice(a, a + c);
            b.decryptBlock(e, a);
            x.call(this, e, a, c);
            this.bBe1x = d
        }
    });
    b = b.CBC = q;
    q = (p.pad = {}).Pkcs7 = {
        pad: function(a, b) {
            for (var c = 4 * b,
            c = c - a.sigBytes % c,
            d = c << 24 | c << 16 | c << 8 | c,
            l = [], n = 0; n < c; n += 4) l.push(d);
            c = s.create(l, c);
            a.concat(c)
        },
        unpad: function(a) {
            a.sigBytes -= a.words[a.sigBytes - 1 >>> 2] & 255
        }
    };
    d.BlockCipher = v.extend({
        cfg: v.cfg.extend({
            mode: b,
            padding: q
        }),
        reset: function() {
            v.reset.call(this);
            var a = this.cfg,
            b = a.iv,
            a = a.mode;
            if (this.bBj1x == this.bnU8M) var c = a.createEncryptor;
            else c = a.createDecryptor,
            this.bBx1x = 1;
            this.eZ0x = c.call(a, this, b && b.words)
        },
        bBt1x: function(a, b) {
            this.eZ0x.processBlock(a, b)
        },
        Zn4r: function() {
            var a = this.cfg.padding;
            if (this.bBj1x == this.bnU8M) {
                a.pad(this.j8b, this.blockSize);
                var b = this.AT8L(!0)
            } else b = this.AT8L(!0),
            a.unpad(b);
            return b
        },
        blockSize: 4
    });
    var n = d.CipherParams = l.extend({
        init: function(a) {
            this.mixIn(a)
        },
        toString: function(a) {
            return (a || this.formatter).stringify(this)
        }
    }),
    b = (p.format = {}).OpenSSL = {
        stringify: function(a) {
            var b = a.ciphertext;
            a = a.salt;
            return (a ? s.create([1398893684, 1701076831]).concat(a).concat(b) : b).toString(r)
        },
        parse: function(a) {
            a = r.parse(a);
            var b = a.words;
            if (1398893684 == b[0] && 1701076831 == b[1]) {
                var c = s.create(b.slice(2, 4));
                b.splice(0, 4);
                a.sigBytes -= 16
            }
            return n.create({
                ciphertext: a,
                salt: c
            })
        }
    },
    a = d.SerializableCipher = l.extend({
        cfg: l.extend({
            format: b
        }),
        encrypt: function(a, b, c, d) {
            d = this.cfg.extend(d);
            var l = a.createEncryptor(c, d);
            b = l.finalize(b);
            l = l.cfg;
            return n.create({
                ciphertext: b,
                key: c,
                iv: l.iv,
                algorithm: a,
                mode: l.mode,
                padding: l.padding,
                blockSize: a.blockSize,
                formatter: d.format
            })
        },
        decrypt: function(a, b, c, d) {
            d = this.cfg.extend(d);
            b = this.Wv2x(b, d.format);
            return a.createDecryptor(c, d).finalize(b.ciphertext)
        },
        Wv2x: function(a, b) {
            return "string" == typeof a ? b.parse(a, this) : a
        }
    }),
    p = (p.kdf = {}).OpenSSL = {
        execute: function(a, b, c, d) {
            d || (d = s.random(8));
            a = w.create({
                keySize: b + c
            }).compute(a, d);
            c = s.create(a.words.slice(b), 4 * c);
            a.sigBytes = 4 * b;
            return n.create({
                key: a,
                iv: c,
                salt: d
            })
        }
    },
    c = d.PasswordBasedCipher = a.extend({
        cfg: a.cfg.extend({
            kdf: p
        }),
        encrypt: function(b, c, d, l) {
            l = this.cfg.extend(l);
            d = l.kdf.execute(d, b.keySize, b.ivSize);
            l.iv = d.iv;
            b = a.encrypt.call(this, b, c, d.key, l);
            b.mixIn(d);
            return b
        },
        decrypt: function(b, c, d, l) {
            l = this.cfg.extend(l);
            c = this.Wv2x(c, l.format);
            d = l.kdf.execute(d, b.keySize, b.ivSize, c.salt);
            l.iv = d.iv;
            return a.decrypt.call(this, b, c, d.key, l)
        }
    })
} (); (function() {
    for (var u = CryptoJS,
    p = u.lib.BlockCipher,
    d = u.algo,
    l = [], s = [], t = [], r = [], w = [], v = [], b = [], x = [], q = [], n = [], a = [], c = 0; 256 > c; c++) a[c] = 128 > c ? c << 1 : c << 1 ^ 283;
    for (var e = 0,
    j = 0,
    c = 0; 256 > c; c++) {
        var k = j ^ j << 1 ^ j << 2 ^ j << 3 ^ j << 4,
        k = k >>> 8 ^ k & 255 ^ 99;
        l[e] = k;
        s[k] = e;
        var z = a[e],
        F = a[z],
        G = a[F],
        y = 257 * a[k] ^ 16843008 * k;
        t[e] = y << 24 | y >>> 8;
        r[e] = y << 16 | y >>> 16;
        w[e] = y << 8 | y >>> 24;
        v[e] = y;
        y = 16843009 * G ^ 65537 * F ^ 257 * z ^ 16843008 * e;
        b[k] = y << 24 | y >>> 8;
        x[k] = y << 16 | y >>> 16;
        q[k] = y << 8 | y >>> 24;
        n[k] = y;
        e ? (e = z ^ a[a[a[G ^ z]]], j ^= a[a[j]]) : e = j = 1
    }
    var H = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54],
    d = d.AES = p.extend({
        bnV8N: function() {
            for (var a = this.J8B,
            c = a.words,
            d = a.sigBytes / 4,
            a = 4 * ((this.bSS6M = d + 6) + 1), e = this.bSR6L = [], j = 0; j < a; j++) if (j < d) e[j] = c[j];
            else {
                var k = e[j - 1];
                j % d ? 6 < d && 4 == j % d && (k = l[k >>> 24] << 24 | l[k >>> 16 & 255] << 16 | l[k >>> 8 & 255] << 8 | l[k & 255]) : (k = k << 8 | k >>> 24, k = l[k >>> 24] << 24 | l[k >>> 16 & 255] << 16 | l[k >>> 8 & 255] << 8 | l[k & 255], k ^= H[j / d | 0] << 24);
                e[j] = e[j - d] ^ k
            }
            c = this.bSO6I = [];
            for (d = 0; d < a; d++) j = a - d,
            k = d % 4 ? e[j] : e[j - 4],
            c[d] = 4 > d || 4 >= j ? k: b[l[k >>> 24]] ^ x[l[k >>> 16 & 255]] ^ q[l[k >>> 8 & 255]] ^ n[l[k & 255]]
        },
        encryptBlock: function(a, b) {
            this.bBb1x(a, b, this.bSR6L, t, r, w, v, l)
        },
        decryptBlock: function(a, c) {
            var d = a[c + 1];
            a[c + 1] = a[c + 3];
            a[c + 3] = d;
            this.bBb1x(a, c, this.bSO6I, b, x, q, n, s);
            d = a[c + 1];
            a[c + 1] = a[c + 3];
            a[c + 3] = d
        },
        bBb1x: function(a, b, c, d, e, j, l, f) {
            for (var m = this.bSS6M,
            g = a[b] ^ c[0], h = a[b + 1] ^ c[1], k = a[b + 2] ^ c[2], n = a[b + 3] ^ c[3], p = 4, r = 1; r < m; r++) var q = d[g >>> 24] ^ e[h >>> 16 & 255] ^ j[k >>> 8 & 255] ^ l[n & 255] ^ c[p++],
            s = d[h >>> 24] ^ e[k >>> 16 & 255] ^ j[n >>> 8 & 255] ^ l[g & 255] ^ c[p++],
            t = d[k >>> 24] ^ e[n >>> 16 & 255] ^ j[g >>> 8 & 255] ^ l[h & 255] ^ c[p++],
            n = d[n >>> 24] ^ e[g >>> 16 & 255] ^ j[h >>> 8 & 255] ^ l[k & 255] ^ c[p++],
            g = q,
            h = s,
            k = t;
            q = (f[g >>> 24] << 24 | f[h >>> 16 & 255] << 16 | f[k >>> 8 & 255] << 8 | f[n & 255]) ^ c[p++];
            s = (f[h >>> 24] << 24 | f[k >>> 16 & 255] << 16 | f[n >>> 8 & 255] << 8 | f[g & 255]) ^ c[p++];
            t = (f[k >>> 24] << 24 | f[n >>> 16 & 255] << 16 | f[g >>> 8 & 255] << 8 | f[h & 255]) ^ c[p++];
            n = (f[n >>> 24] << 24 | f[g >>> 16 & 255] << 16 | f[h >>> 8 & 255] << 8 | f[k & 255]) ^ c[p++];
            a[b] = q;
            a[b + 1] = s;
            a[b + 2] = t;
            a[b + 3] = n
        },
        keySize: 8
    });
    u.AES = p.bnW8O(d)
})();
function RSAKeyPair(a, b, c) {
    this.e = biFromHex(a),
    this.d = biFromHex(b),
    this.m = biFromHex(c),
    this.chunkSize = 2 * biHighIndex(this.m),
    this.radix = 16,
    this.barrett = new BarrettMu(this.m)
}
function twoDigit(a) {
    return (10 > a ? "0": "") + String(a)
}
function encryptedString(a, b) {
    for (var f, g, h, i, j, k, l, c = new Array,
    d = b.length,
    e = 0; d > e;) c[e] = b.charCodeAt(e),
    e++;
    for (; 0 != c.length % a.chunkSize;) c[e++] = 0;
    for (f = c.length, g = "", e = 0; f > e; e += a.chunkSize) {
        for (j = new BigInt, h = 0, i = e; i < e + a.chunkSize; ++h) j.digits[h] = c[i++],
        j.digits[h] += c[i++] << 8;
        k = a.barrett.powMod(j, a.e),
        l = 16 == a.radix ? biToHex(k) : biToString(k, a.radix),
        g += l + " "
    }
    return g.substring(0, g.length - 1)
}
function decryptedString(a, b) {
    var e, f, g, h, c = b.split(" "),
    d = "";
    for (e = 0; e < c.length; ++e) for (h = 16 == a.radix ? biFromHex(c[e]) : biFromString(c[e], a.radix), g = a.barrett.powMod(h, a.d), f = 0; f <= biHighIndex(g); ++f) d += String.fromCharCode(255 & g.digits[f], g.digits[f] >> 8);
    return 0 == d.charCodeAt(d.length - 1) && (d = d.substring(0, d.length - 1)),
    d
}
function setMaxDigits(a) {
    maxDigits = a,
    ZERO_ARRAY = new Array(maxDigits);
    for (var b = 0; b < ZERO_ARRAY.length; b++) ZERO_ARRAY[b] = 0;
    bigZero = new BigInt,
    bigOne = new BigInt,
    bigOne.digits[0] = 1
}
function BigInt(a) {
    this.digits = "boolean" == typeof a && 1 == a ? null: ZERO_ARRAY.slice(0),
    this.isNeg = !1
}
function biFromDecimal(a) {
    for (var d, e, f, b = "-" == a.charAt(0), c = b ? 1 : 0; c < a.length && "0" == a.charAt(c);)++c;
    if (c == a.length) d = new BigInt;
    else {
        for (e = a.length - c, f = e % dpl10, 0 == f && (f = dpl10), d = biFromNumber(Number(a.substr(c, f))), c += f; c < a.length;) d = biAdd(biMultiply(d, lr10), biFromNumber(Number(a.substr(c, dpl10)))),
        c += dpl10;
        d.isNeg = b
    }
    return d
}
function biCopy(a) {
    var b = new BigInt(!0);
    return b.digits = a.digits.slice(0),
    b.isNeg = a.isNeg,
    b
}
function biFromNumber(a) {
    var c, b = new BigInt;
    for (b.isNeg = 0 > a, a = Math.abs(a), c = 0; a > 0;) b.digits[c++] = a & maxDigitVal,
    a >>= biRadixBits;
    return b
}
function reverseStr(a) {
    var c, b = "";
    for (c = a.length - 1; c > -1; --c) b += a.charAt(c);
    return b
}
function biToString(a, b) {
    var d, e, c = new BigInt;
    for (c.digits[0] = b, d = biDivideModulo(a, c), e = hexatrigesimalToChar[d[1].digits[0]]; 1 == biCompare(d[0], bigZero);) d = biDivideModulo(d[0], c),
    digit = d[1].digits[0],
    e += hexatrigesimalToChar[d[1].digits[0]];
    return (a.isNeg ? "-": "") + reverseStr(e)
}
function biToDecimal(a) {
    var c, d, b = new BigInt;
    for (b.digits[0] = 10, c = biDivideModulo(a, b), d = String(c[1].digits[0]); 1 == biCompare(c[0], bigZero);) c = biDivideModulo(c[0], b),
    d += String(c[1].digits[0]);
    return (a.isNeg ? "-": "") + reverseStr(d)
}
function digitToHex(a) {
    var b = 15,
    c = "";
    for (i = 0; 4 > i; ++i) c += hexToChar[a & b],
    a >>>= 4;
    return reverseStr(c)
}
function biToHex(a) {
    var d, b = "";
    for (biHighIndex(a), d = biHighIndex(a); d > -1; --d) b += digitToHex(a.digits[d]);
    return b
}
function charToHex(a) {
    var h, b = 48,
    c = b + 9,
    d = 97,
    e = d + 25,
    f = 65,
    g = 90;
    return h = a >= b && c >= a ? a - b: a >= f && g >= a ? 10 + a - f: a >= d && e >= a ? 10 + a - d: 0
}
function hexToDigit(a) {
    var d, b = 0,
    c = Math.min(a.length, 4);
    for (d = 0; c > d; ++d) b <<= 4,
    b |= charToHex(a.charCodeAt(d));
    return b
}
function biFromHex(a) {
    var d, e, b = new BigInt,
    c = a.length;
    for (d = c, e = 0; d > 0; d -= 4, ++e) b.digits[e] = hexToDigit(a.substr(Math.max(d - 4, 0), Math.min(d, 4)));
    return b
}
function biFromString(a, b) {
    var g, h, i, j, c = "-" == a.charAt(0),
    d = c ? 1 : 0,
    e = new BigInt,
    f = new BigInt;
    for (f.digits[0] = 1, g = a.length - 1; g >= d; g--) h = a.charCodeAt(g),
    i = charToHex(h),
    j = biMultiplyDigit(f, i),
    e = biAdd(e, j),
    f = biMultiplyDigit(f, b);
    return e.isNeg = c,
    e
}
function biDump(a) {
    return (a.isNeg ? "-": "") + a.digits.join(" ")
}
function biAdd(a, b) {
    var c, d, e, f;
    if (a.isNeg != b.isNeg) b.isNeg = !b.isNeg,
    c = biSubtract(a, b),
    b.isNeg = !b.isNeg;
    else {
        for (c = new BigInt, d = 0, f = 0; f < a.digits.length; ++f) e = a.digits[f] + b.digits[f] + d,
        c.digits[f] = 65535 & e,
        d = Number(e >= biRadix);
        c.isNeg = a.isNeg
    }
    return c
}
function biSubtract(a, b) {
    var c, d, e, f;
    if (a.isNeg != b.isNeg) b.isNeg = !b.isNeg,
    c = biAdd(a, b),
    b.isNeg = !b.isNeg;
    else {
        for (c = new BigInt, e = 0, f = 0; f < a.digits.length; ++f) d = a.digits[f] - b.digits[f] + e,
        c.digits[f] = 65535 & d,
        c.digits[f] < 0 && (c.digits[f] += biRadix),
        e = 0 - Number(0 > d);
        if ( - 1 == e) {
            for (e = 0, f = 0; f < a.digits.length; ++f) d = 0 - c.digits[f] + e,
            c.digits[f] = 65535 & d,
            c.digits[f] < 0 && (c.digits[f] += biRadix),
            e = 0 - Number(0 > d);
            c.isNeg = !a.isNeg
        } else c.isNeg = a.isNeg
    }
    return c
}
function biHighIndex(a) {
    for (var b = a.digits.length - 1; b > 0 && 0 == a.digits[b];)--b;
    return b
}
function biNumBits(a) {
    var e, b = biHighIndex(a),
    c = a.digits[b],
    d = (b + 1) * bitsPerDigit;
    for (e = d; e > d - bitsPerDigit && 0 == (32768 & c); --e) c <<= 1;
    return e
}
function biMultiply(a, b) {
    var d, h, i, k, c = new BigInt,
    e = biHighIndex(a),
    f = biHighIndex(b);
    for (k = 0; f >= k; ++k) {
        for (d = 0, i = k, j = 0; e >= j; ++j, ++i) h = c.digits[i] + a.digits[j] * b.digits[k] + d,
        c.digits[i] = h & maxDigitVal,
        d = h >>> biRadixBits;
        c.digits[k + e + 1] = d
    }
    return c.isNeg = a.isNeg != b.isNeg,
    c
}
function biMultiplyDigit(a, b) {
    var c, d, e, f;
    for (result = new BigInt, c = biHighIndex(a), d = 0, f = 0; c >= f; ++f) e = result.digits[f] + a.digits[f] * b + d,
    result.digits[f] = e & maxDigitVal,
    d = e >>> biRadixBits;
    return result.digits[1 + c] = d,
    result
}
function arrayCopy(a, b, c, d, e) {
    var g, h, f = Math.min(b + e, a.length);
    for (g = b, h = d; f > g; ++g, ++h) c[h] = a[g]
}
function biShiftLeft(a, b) {
    var e, f, g, h, c = Math.floor(b / bitsPerDigit),
    d = new BigInt;
    for (arrayCopy(a.digits, 0, d.digits, c, d.digits.length - c), e = b % bitsPerDigit, f = bitsPerDigit - e, g = d.digits.length - 1, h = g - 1; g > 0; --g, --h) d.digits[g] = d.digits[g] << e & maxDigitVal | (d.digits[h] & highBitMasks[e]) >>> f;
    return d.digits[0] = d.digits[g] << e & maxDigitVal,
    d.isNeg = a.isNeg,
    d
}
function biShiftRight(a, b) {
    var e, f, g, h, c = Math.floor(b / bitsPerDigit),
    d = new BigInt;
    for (arrayCopy(a.digits, c, d.digits, 0, a.digits.length - c), e = b % bitsPerDigit, f = bitsPerDigit - e, g = 0, h = g + 1; g < d.digits.length - 1; ++g, ++h) d.digits[g] = d.digits[g] >>> e | (d.digits[h] & lowBitMasks[e]) << f;
    return d.digits[d.digits.length - 1] >>>= e,
    d.isNeg = a.isNeg,
    d
}
function biMultiplyByRadixPower(a, b) {
    var c = new BigInt;
    return arrayCopy(a.digits, 0, c.digits, b, c.digits.length - b),
    c
}
function biDivideByRadixPower(a, b) {
    var c = new BigInt;
    return arrayCopy(a.digits, b, c.digits, 0, c.digits.length - b),
    c
}
function biModuloByRadixPower(a, b) {
    var c = new BigInt;
    return arrayCopy(a.digits, 0, c.digits, 0, b),
    c
}
function biCompare(a, b) {
    if (a.isNeg != b.isNeg) return 1 - 2 * Number(a.isNeg);
    for (var c = a.digits.length - 1; c >= 0; --c) if (a.digits[c] != b.digits[c]) return a.isNeg ? 1 - 2 * Number(a.digits[c] > b.digits[c]) : 1 - 2 * Number(a.digits[c] < b.digits[c]);
    return 0
}
function biDivideModulo(a, b) {
    var f, g, h, i, j, k, l, m, n, o, p, q, r, s, c = biNumBits(a),
    d = biNumBits(b),
    e = b.isNeg;
    if (d > c) return a.isNeg ? (f = biCopy(bigOne), f.isNeg = !b.isNeg, a.isNeg = !1, b.isNeg = !1, g = biSubtract(b, a), a.isNeg = !0, b.isNeg = e) : (f = new BigInt, g = biCopy(a)),
    new Array(f, g);
    for (f = new BigInt, g = a, h = Math.ceil(d / bitsPerDigit) - 1, i = 0; b.digits[h] < biHalfRadix;) b = biShiftLeft(b, 1),
    ++i,
    ++d,
    h = Math.ceil(d / bitsPerDigit) - 1;
    for (g = biShiftLeft(g, i), c += i, j = Math.ceil(c / bitsPerDigit) - 1, k = biMultiplyByRadixPower(b, j - h); - 1 != biCompare(g, k);)++f.digits[j - h],
    g = biSubtract(g, k);
    for (l = j; l > h; --l) {
        for (m = l >= g.digits.length ? 0 : g.digits[l], n = l - 1 >= g.digits.length ? 0 : g.digits[l - 1], o = l - 2 >= g.digits.length ? 0 : g.digits[l - 2], p = h >= b.digits.length ? 0 : b.digits[h], q = h - 1 >= b.digits.length ? 0 : b.digits[h - 1], f.digits[l - h - 1] = m == p ? maxDigitVal: Math.floor((m * biRadix + n) / p), r = f.digits[l - h - 1] * (p * biRadix + q), s = m * biRadixSquared + (n * biRadix + o); r > s;)--f.digits[l - h - 1],
        r = f.digits[l - h - 1] * (p * biRadix | q),
        s = m * biRadix * biRadix + (n * biRadix + o);
        k = biMultiplyByRadixPower(b, l - h - 1),
        g = biSubtract(g, biMultiplyDigit(k, f.digits[l - h - 1])),
        g.isNeg && (g = biAdd(g, k), --f.digits[l - h - 1])
    }
    return g = biShiftRight(g, i),
    f.isNeg = a.isNeg != e,
    a.isNeg && (f = e ? biAdd(f, bigOne) : biSubtract(f, bigOne), b = biShiftRight(b, i), g = biSubtract(b, g)),
    0 == g.digits[0] && 0 == biHighIndex(g) && (g.isNeg = !1),
    new Array(f, g)
}
function biDivide(a, b) {
    return biDivideModulo(a, b)[0]
}
function biModulo(a, b) {
    return biDivideModulo(a, b)[1]
}
function biMultiplyMod(a, b, c) {
    return biModulo(biMultiply(a, b), c)
}
function biPow(a, b) {
    for (var c = bigOne,
    d = a;;) {
        if (0 != (1 & b) && (c = biMultiply(c, d)), b >>= 1, 0 == b) break;
        d = biMultiply(d, d)
    }
    return c
}
function biPowMod(a, b, c) {
    for (var d = bigOne,
    e = a,
    f = b;;) {
        if (0 != (1 & f.digits[0]) && (d = biMultiplyMod(d, e, c)), f = biShiftRight(f, 1), 0 == f.digits[0] && 0 == biHighIndex(f)) break;
        e = biMultiplyMod(e, e, c)
    }
    return d
}
function BarrettMu(a) {
    this.modulus = biCopy(a),
    this.k = biHighIndex(this.modulus) + 1;
    var b = new BigInt;
    b.digits[2 * this.k] = 1,
    this.mu = biDivide(b, this.modulus),
    this.bkplus1 = new BigInt,
    this.bkplus1.digits[this.k + 1] = 1,
    this.modulo = BarrettMu_modulo,
    this.multiplyMod = BarrettMu_multiplyMod,
    this.powMod = BarrettMu_powMod
}
function BarrettMu_modulo(a) {
    var i, b = biDivideByRadixPower(a, this.k - 1),
    c = biMultiply(b, this.mu),
    d = biDivideByRadixPower(c, this.k + 1),
    e = biModuloByRadixPower(a, this.k + 1),
    f = biMultiply(d, this.modulus),
    g = biModuloByRadixPower(f, this.k + 1),
    h = biSubtract(e, g);
    for (h.isNeg && (h = biAdd(h, this.bkplus1)), i = biCompare(h, this.modulus) >= 0; i;) h = biSubtract(h, this.modulus),
    i = biCompare(h, this.modulus) >= 0;
    return h
}
function BarrettMu_multiplyMod(a, b) {
    var c = biMultiply(a, b);
    return this.modulo(c)
}
function BarrettMu_powMod(a, b) {
    var d, e, c = new BigInt;
    for (c.digits[0] = 1, d = a, e = b;;) {
        if (0 != (1 & e.digits[0]) && (c = this.multiplyMod(c, d)), e = biShiftRight(e, 1), 0 == e.digits[0] && 0 == biHighIndex(e)) break;
        d = this.multiplyMod(d, d)
    }
    return c
}
var maxDigits, ZERO_ARRAY, bigZero, bigOne, dpl10, lr10, hexatrigesimalToChar, hexToChar, highBitMasks, lowBitMasks, biRadixBase = 2,
biRadixBits = 16,
bitsPerDigit = biRadixBits,
biRadix = 65536,
biHalfRadix = biRadix >>> 1,
biRadixSquared = biRadix * biRadix,
maxDigitVal = biRadix - 1,
maxInteger = 9999999999999998;
setMaxDigits(20),
dpl10 = 15,
lr10 = biFromNumber(1e15),
hexatrigesimalToChar = new Array("0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"),
hexToChar = new Array("0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"),
highBitMasks = new Array(0, 32768, 49152, 57344, 61440, 63488, 64512, 65024, 65280, 65408, 65472, 65504, 65520, 65528, 65532, 65534, 65535),
lowBitMasks = new Array(0, 1, 3, 7, 15, 31, 63, 127, 255, 511, 1023, 2047, 4095, 8191, 16383, 32767, 65535); !
function() {
    function a(a) {
        var d, e, b = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        c = "";
        for (d = 0; a > d; d += 1) e = Math.random() * b.length,
        e = Math.floor(e),
        c += b.charAt(e);
        return c
    }
    function b(a, b) {
        var c = CryptoJS.enc.Utf8.parse(b),
        d = CryptoJS.enc.Utf8.parse("0102030405060708"),
        e = CryptoJS.enc.Utf8.parse(a),
        f = CryptoJS.AES.encrypt(e, c, {
            iv: d,
            mode: CryptoJS.mode.CBC
        });
        return f.toString()
    }
    function c(a, b, c) {
        var d, e;
        return setMaxDigits(131),
        d = new RSAKeyPair(b, "", c),
        e = encryptedString(d, a)
    }
    function d(d, e, f, g) {
        var h = {},
        i = a(16);
        return h.encText = b(d, g),
        h.encText = b(h.encText, i),
        h.encSecKey = c(i, e, f),
        h
    }
    function e(a, b, d, e) {
        var f = {};
        return f.encText = c(a + e, b, d),
        f
    }
    window.asrsea = d,
    window.ecnonasr = e
} (); (function() {
    var c8g = NEJ.P,
    eb0x = c8g("nej.g"),
    x8p = c8g("nej.j"),
    k8c = c8g("nej.u"),
    Mc8U = c8g("nm.x.ek");
    Mc8U.emj = {
        "色": "00e0b",
        "流感": "509f6",
        "这边": "259df",
        "弱": "8642d",
        "嘴唇": "bc356",
        "亲": "62901",
        "开心": "477df",
        "呲牙": "22677",
        "憨笑": "ec152",
        "猫": "b5ff6",
        "皱眉": "8ace6",
        "幽灵": "15bb7",
        "蛋糕": "b7251",
        "发怒": "52b3a",
        "大哭": "b17a8",
        "兔子": "76aea",
        "星星": "8a5aa",
        "钟情": "76d2e",
        "牵手": "41762",
        "公鸡": "9ec4e",
        "爱意": "e341f",
        "禁止": "56135",
        "狗": "fccf6",
        "亲亲": "95280",
        "叉": "104e0",
        "礼物": "312ec",
        "晕": "bda92",
        "呆": "557c9",
        "生病": "38701",
        "钻石": "14af6",
        "拜": "c9d05",
        "怒": "c4f7f",
        "示爱": "0c368",
        "汗": "5b7a4",
        "小鸡": "6bee2",
        "痛苦": "55932",
        "撇嘴": "575cc",
        "惶恐": "e10b4",
        "口罩": "24d81",
        "吐舌": "3cfe4",
        "心碎": "875d3",
        "生气": "e8204",
        "可爱": "7b97d",
        "鬼脸": "def52",
        "跳舞": "741d5",
        "男孩": "46b8e",
        "奸笑": "289dc",
        "猪": "6935b",
        "圈": "3ece0",
        "便便": "462db",
        "外星": "0a22b",
        "圣诞": "8e7",
        "流泪": "01000",
        "强": "1",
        "爱心": "0CoJU",
        "女孩": "m6Qyw",
        "惊恐": "8W8ju",
        "大笑": "d"
    };
    Mc8U.md = ["色", "流感", "这边", "弱", "嘴唇", "亲", "开心", "呲牙", "憨笑", "猫", "皱眉", "幽灵", "蛋糕", "发怒", "大哭", "兔子", "星星", "钟情", "牵手", "公鸡", "爱意", "禁止", "狗", "亲亲", "叉", "礼物", "晕", "呆", "生病", "钻石", "拜", "怒", "示爱", "汗", "小鸡", "痛苦", "撇嘴", "惶恐", "口罩", "吐舌", "心碎", "生气", "可爱", "鬼脸", "跳舞", "男孩", "奸笑", "猪", "圈", "便便", "外星", "圣诞"]
})(); (function() {
    var c8g = NEJ.P,
    eb0x = c8g("nej.g"),
    x8p = c8g("nej.j"),
    k8c = c8g("nej.u"),
    Mc8U = c8g("nm.x.ek"),
    l8d = c8g("nm.x");
    if (x8p.bp9g.redefine) return;
    window.GEnc = true;
    var bnQ8I = function(bSH6B) {
        var o8g = [];
        k8c.bb9S(bSH6B,
        function(bSG6A) {
            o8g.push(Mc8U.emj[bSG6A])
        });
        return o8g.join("")
    };
    var bSA6u = x8p.bp9g;
    x8p.bp9g = function(V8N, e8e) {
        var j8b = {},
        e8e = NEJ.X({},
        e8e),
        lp2x = V8N.indexOf("?");
        if (window.GEnc && /(^|\.com)\/api/.test(V8N) && !(e8e.headers && e8e.headers[eb0x.yj7c] == eb0x.EM9D) && !e8e.noEnc) {
            if (lp2x != -1) {
                j8b = k8c.hD1x(V8N.substring(lp2x + 1));
                V8N = V8N.substring(0, lp2x)
            }
            if (e8e.query) {
                j8b = NEJ.X(j8b, k8c.fw1x(e8e.query) ? k8c.hD1x(e8e.query) : e8e.query)
            }
            if (e8e.data) {
                j8b = NEJ.X(j8b, k8c.fw1x(e8e.data) ? k8c.hD1x(e8e.data) : e8e.data)
            }
            j8b["csrf_token"] = x8p.gZ1x("__csrf");
            V8N = V8N.replace("api", "weapi");
            e8e.method = "post";
            delete e8e.query;
            var bAM1x = window.asrsea(JSON.stringify(j8b), bnQ8I(["流泪", "强"]), bnQ8I(Mc8U.md), bnQ8I(["爱心", "女孩", "惊恐", "大笑"]));
            e8e.data = k8c.dh0x({
                params: bAM1x.encText,
                encSecKey: bAM1x.encSecKey
            })
        }
        bSA6u(V8N, e8e)
    };
    x8p.bp9g.redefine = true
})(); (function() {
    window.setTimeout(function() {
        if (!location.href.match(/^https?:\/\/([a-zA-Z0-9\-]+?\.)*?music\.163\.com($|\/)/gi)) return;
        var getNode = function(tagName, attrName, attrValue) {
            if (!tagName || !attrName || !attrValue) return null;
            var nodes = document.getElementsByTagName(tagName);
            if (nodes && nodes.length) {
                for (var i = 0,
                ii = nodes.length; i < ii; i++) {
                    if ((nodes[i][attrName] || "").toLowerCase() == attrValue.toLowerCase()) {
                        return nodes[i]
                    }
                }
            }
            return null
        };
        var meta = getNode("meta", "name", "robots");
        if (meta && (meta.content || "").toLowerCase() == "nofollow") return;
        var canonicalURL, curProtocol;
        var link = getNode("link", "rel", "canonical");
        if (link && link.href) canonicalURL = link.href;
        if (!canonicalURL) {
            curProtocol = location.protocol.split(":")[0]
        } else {
            curProtocol = canonicalURL.split(":")[0]
        }
        if (!canonicalURL) canonicalURL = location.href;
        var pushHref = String(curProtocol).toLowerCase() === "https" ? "https://sp0.baidu.com/9_Q4simg2RQJ8t7jm9iCKT-xh_/s.gif": "//api.share.baidu.com/s.gif";
        var params = [];
        if (document.referrer) {
            params.push("r=" + encodeURIComponent(document.referrer))
        }
        params.push("l=" + encodeURIComponent(canonicalURL)); (new Image).src = pushHref + "?" + params.join("&")
    },
    3e3)
})(); (function() {})(); (function() {})(); (function() {
    var c8g = NEJ.P,
    a7h = c8g("nej.e"),
    dn0x = c8g("nej.p"),
    k8c = c8g("nej.u"),
    h8b = c8g("nej.v"),
    x8p = c8g("nej.j"),
    dz0x = c8g("nm.u"),
    l8d = c8g("nm.x"),
    q8i = c8g("nm.d"),
    n8f = c8g("nm.l"),
    cW0x = c8g("nm.pc"),
    bnK8C = "http://s1.music.126.net/style/web2/emt/emoji_{ID}.png",
    j8b = {
        "大笑": "86",
        "可爱": "85",
        "憨笑": "359",
        "色": "95",
        "亲亲": "363",
        "惊恐": "96",
        "流泪": "356",
        "亲": "362",
        "呆": "352",
        "哀伤": "342",
        "呲牙": "343",
        "吐舌": "348",
        "撇嘴": "353",
        "怒": "361",
        "奸笑": "341",
        "汗": "97",
        "痛苦": "346",
        "惶恐": "354",
        "生病": "350",
        "口罩": "351",
        "大哭": "357",
        "晕": "355",
        "发怒": "115",
        "开心": "360",
        "鬼脸": "94",
        "皱眉": "87",
        "流感": "358",
        "爱心": "33",
        "心碎": "34",
        "钟情": "303",
        "星星": "309",
        "生气": "314",
        "便便": "89",
        "强": "13",
        "弱": "372",
        "拜": "14",
        "牵手": "379",
        "跳舞": "380",
        "禁止": "374",
        "这边": "262",
        "爱意": "106",
        "示爱": "376",
        "嘴唇": "367",
        "狗": "81",
        "猫": "78",
        "猪": "100",
        "兔子": "459",
        "小鸡": "450",
        "公鸡": "461",
        "幽灵": "116",
        "圣诞": "411",
        "外星": "101",
        "钻石": "52",
        "礼物": "107",
        "男孩": "0",
        "女孩": "1",
        "蛋糕": "337",
        18 : "186",
        "圈": "312",
        "叉": "313"
    },
    bSx6r = function() {
        if (h8b && h8b.z8r) {
            h8b.dispatchEventalias = h8b.z8r
        }
    };
    bSx6r();
    l8d.bnJ8B = function(bJ9A) {
        if (!bJ9A || bJ9A.copyrightId === undefined || !!bJ9A.program) return false;
        if (window.GAbroad) {
            bJ9A.fee = 0;
            return true
        }
        if (bJ9A.status < 0) return true;
        var LW8O;
        if (typeof GCopyrights !== "undefined") LW8O = GCopyrights;
        try {
            if (!LW8O && !!top.GCopyrights) LW8O = top.GCopyrights
        } catch(e) {}
        if (LW8O) {
            var r8j = k8c.dd0x(LW8O, bJ9A.copyrightId);
            if (r8j >= 0) return true
        }
        return false
    };
    l8d.bnI8A = function() {
        var AZ8R = /^\/m\/(song|album|artist|playlist|dj|search)\?/,
        vc6W = {
            2 : "artist",
            13 : "playlist",
            17 : "dj",
            19 : "album",
            18 : "song",
            31 : "toplist",
            32 : "searchsong",
            33 : "searchlyric",
            34 : "event",
            70 : "djradio",
            24 : "day",
            50 : "record"
        },
        bSr5w = {
            song: "单曲",
            album: "专辑",
            artist: "歌手",
            playlist: "歌单",
            dj: "电台节目",
            searchsong: "单曲搜索",
            searchlyric: "歌词搜索",
            toplist: "榜单",
            event: "动态",
            djradio: "电台",
            day: "每日歌曲推荐",
            record: "听歌排行榜"
        };
        var bSp5u = function(J8B, j8b, LP8H) {
            switch (J8B) {
            case "event":
                j8b = j8b.split("|");
                return "/event?id=" + j8b[0] + "&uid=" + j8b[1];
            case "searchsong":
            case "searchlyric":
                var t8l = J8B == "searchsong" ? 1 : 1006;
                return "/search/m/?s=" + encodeURIComponent(j8b) + "&type=" + t8l;
            case "toplist":
                return "/discover/toplist?id=" + j8b + "&_hash=songlist-" + LP8H;
            case "day":
                return "/discover/recommend/taste" + "?_hash=songlist-" + LP8H;;
            case "record":
                j8b = j8b.split("|");
                return "/user/songs/rank?id=" + j8b[0] + "&cat=" + j8b[1];
                break;
            default:
                return "/" + J8B + "?id=" + j8b + "&_hash=songlist-" + LP8H
            }
        };
        return function(dY0x, LP8H) {
            if (!dY0x) return null;
            var II7B = dY0x.fid || (dY0x.type != 18 ? dY0x.type: null),
            bnH8z = dY0x.fdata || dY0x.rid,
            bAF1x = dY0x.page || dY0x.fhref;
            var J8B = vc6W[II7B];
            if (!J8B) {
                var yC7v = (bAF1x || "").match(AZ8R);
                if (yC7v) J8B = yC7v[1]
            }
            if (!J8B) return null;
            return {
                title: bSr5w[J8B],
                link: !vc6W[II7B] ? bAF1x: bSp5u(J8B, bnH8z, LP8H),
                fid: II7B,
                fdata: bnH8z
            }
        }
    } ();
    l8d.baX5c = function(kT2x) {
        var df0x = kT2x;
        if (typeof GUser !== "undefined" && GUser.userId > 0) df0x = GUser;
        return df0x
    };
    l8d.gN1x = function() {
        if (typeof GUser !== "undefined" && GUser.userId > 0) {
            return true
        } else {
            top.login();
            return false
        }
    };
    l8d.Ig6a = function() {
        var AZ8R = /#(.*?)$/;
        return function(gi1x) {
            var jd2x = gi1x === false ? location: top.location;
            return AZ8R.test(jd2x.href) ? RegExp.$1: ""
        }
    } ();
    l8d.Bf8X = function() {
        var Bh8Z = a7h.cY0x("audio"),
        bSg5l = Bh8Z.canPlayType && Bh8Z.canPlayType("audio/mpeg");
        if (bSg5l) return 2;
        var bSd5i = l8d.bnD8v().supported;
        if (bSd5i) return 1;
        return 0
    };
    l8d.bnD8v = function() {
        var gb1x, bnB8t = !1,
        bnA8s = "";
        if (dn0x.dj0x.browser == "ie") {
            try {
                gb1x = new ActiveXObject("ShockwaveFlash.ShockwaveFlash")
            } catch(e) {
                gb1x = null
            }
            if (gb1x) {
                bnB8t = !0;
                bnA8s = gb1x.GetVariable("$version")
            }
        } else {
            if (navigator.plugins && navigator.plugins.length > 0) {
                gb1x = navigator.plugins["Shockwave Flash"];
                if (gb1x) {
                    bnB8t = !0;
                    bnA8s = gb1x.description
                }
            }
        }
        return {
            supported: bnB8t,
            version: bnA8s
        }
    };
    l8d.rf4j = function() {
        return "网易云音乐"
    };
    l8d.bRS5X = function() {
        return j8b
    };
    l8d.bAv1x = function(cJ0x) {
        var D8v = j8b[cJ0x];
        return D8v == null ? "": bnK8C.replace("{ID}", D8v)
    };
    l8d.vj6d = function(bl9c, dT0x, Bm8e) {
        if (!bl9c) return "";
        if ( !! Bm8e) {
            bl9c = l8d.bRP5U(bl9c)
        }
        return l8d.bbC5H(l8d.bRM5R(bl9c, dT0x))
    };
    l8d.bbI5N = function() {
        var ME8w = {
            AT: /(@([\u4e00-\u9fa5A-Za-z0-9-_]{2,})((?=[ :@：])|$))/g,
            LINK: /(@([\u4e00-\u9fa5A-Za-z0-9-_]{2,})((?=[ :@：])|$))|((http[s]{0,1}):\/\/[\-a-zA-Z0-9\.]+(:(6553[0-5]|655[0-2][0-9]|65[0-4][0-9][0-9]|6[0-4][0-9][0-9][0-9]|\\d{2,4}|[1-9]))?(\/[a-zA-Z0-9\\\.\-~!@#$%\^&\*\+\?:_\/=<>]*)?)/g,
            ACT_NOLINK: /(@([\u4e00-\u9fa5A-Za-z0-9-_]{2,})((?=[ :@：])|$))|(#[^\[\]\/\\\#\r\n]+?#)/g,
            ACT: /(@([\u4e00-\u9fa5A-Za-z0-9-_]{2,})((?=[ :@：])|$))|((http[s]{0,1}):\/\/[\-a-zA-Z0-9\.]+(:(6553[0-5]|655[0-2][0-9]|65[0-4][0-9][0-9]|6[0-4][0-9][0-9][0-9]|\\d{2,4}|[1-9]))?(\/[a-zA-Z0-9\\\.\-~!@#$%\^&\*\+\?:_\/=<>]*)?)|(#[^\[\]\/\\\#\r\n]+?#)/g,
            LING: /\n/g,
            BLANK: /\s/g,
            MLINE: /([ \f\r\t\v]*\n){2,}/g
        },
        bny8q = {
            LINK: '<a href="${url}" class="${klass}">${value}</a>',
            AT: '<a href="${url}" class="${klass}">@${value}</a>',
            ACT: '<a href="javascript:;" class="${klass}" data-title="${value}" data-action="activity">${value}</a>'
        },
        cyb2x = {
            r: /\<|\>|\&lt;|\&gt;|\&|\'|\"/g,
            "<": "&lt;",
            ">": "&gt;",
            "&": "&amp;",
            " ": "&nbsp;",
            '"': "&quot;",
            "'": "&#39;",
            "&lt;": "&lt;",
            "&gt;": "&gt;"
        },
        cxS2x = ["AT", "LINK", "ACT_NOLINK", "ACT"];
        var cxF2x = function(dA0x, bnq8i) {
            dA0x = Ie6Y(dA0x);
            if ( !! bnq8i) {
                dA0x = dA0x.replace(ME8w.MLINE, "\n\n").replace(ME8w.LING, "</br>")
            }
            dA0x = l8d.bbC5H(dA0x);
            return dA0x
        };
        var Ie6Y = function(bl9c) {
            return k8c.Cq8i(cyb2x, bl9c)
        };
        return function(dA0x, e8e, ej0x) {
            e8e = e8e || {};
            ej0x = ej0x || {};
            ej0x.actHash = {};
            var cxz2x = !!e8e.parseLink,
            cxx2x = !!e8e.parseAct,
            cxi2x = e8e.linkTpl || bny8q.LINK,
            cxh2x = e8e.atTpl || bny8q.AT,
            cxc2x = e8e.atUrl || "/user/home?nickname=",
            cxa2x = e8e.actTpl || bny8q.ACT,
            bnq8i = !!e8e.keepSpace,
            bnn8f = e8e.linkKlass || "s-fc7";
            cAq2x = e8e.actBiJson || "";
            if (!dA0x) return "";
            dA0x = dA0x.trim().replace(/&amp;/g, "&").replace(/&nbsp;/g, " ");
            var kS2x = cxS2x[cxz2x + 2 * cxx2x],
            cZ0x = ME8w[kS2x],
            bs9j = null,
            lL3x = null,
            gS1x = 0,
            cAr2x = "",
            cAt2x = "";
            var Bs8k = [];
            cZ0x.lastIndex = 0;
            while (bs9j = cZ0x.exec(dA0x)) {
                var fn1x = {
                    html: "",
                    before: bs9j.index - 1,
                    after: bs9j.index + bs9j[0].length
                };
                if (bs9j[1]) {
                    var lL3x = bs9j[2].replace(/[^\x00-\xff]/g, "**");
                    if (lL3x.length < 4 || lL3x.length > 32) {} else {
                        var LA8s = a7h.et0x(cxh2x);
                        fn1x.html = a7h.bX9O(LA8s, {
                            value: Ie6Y(bs9j[2]),
                            url: encodeURI(cxc2x + bs9j[2]),
                            klass: bnn8f
                        });
                        Bs8k.push(fn1x)
                    }
                } else if (bs9j.length > 8 && bs9j[4]) {
                    var LA8s = a7h.et0x(cxi2x);
                    fn1x.html = a7h.bX9O(LA8s, {
                        value: Ie6Y(bs9j[4]),
                        url: bs9j[4],
                        klass: bnn8f
                    });
                    Bs8k.push(fn1x)
                } else {
                    var bzY0x = kS2x == "ACT_NOLINK" ? 4 : 9;
                    var LA8s = a7h.et0x(cxa2x);
                    fn1x.html = a7h.bX9O(LA8s, {
                        value: Ie6Y(bs9j[bzY0x]),
                        klass: bnn8f
                    });
                    Bs8k.push(fn1x);
                    ej0x.actHash[bs9j[bzY0x].slice(1, -1)] = true
                }
            }
            var cwv2x = Bs8k.length,
            kT2x = {
                before: dA0x.length - 1,
                after: 0
            },
            bnl8d = "";
            for (var i = 0; i <= cwv2x; i++) {
                var hW1x, gs1x;
                hW1x = (Bs8k[i - 1] || kT2x).after;
                gs1x = (Bs8k[i] || kT2x).before;
                if (gs1x >= hW1x && hW1x >= 0 && gs1x <= dA0x.length - 1) {
                    bnl8d += cxF2x(dA0x.substring(hW1x, gs1x + 1), bnq8i)
                }
                if (Bs8k[i]) {
                    bnl8d += Bs8k[i].html
                }
            }
            return bnl8d
        }
    } ();
    l8d.bRP5U = function() {
        var cZ0x = new RegExp("(http[s]{0,1})://[-a-zA-Z0-9.]+(:(6553[0-5]|655[0-2][0-9]|65[0-4][0-9][0-9]|6[0-4][0-9][0-9][0-9]|\\d{2,4}|[1-9]))?(/[a-zA-Z0-9\\.\\-~!@#$%^&*+?:_/=<>]*)?", "g");
        return function(bl9c) {
            return (bl9c || "").replace(/&amp;/g, "&").replace(/&nbsp;/g, " ").replace(cZ0x,
            function($0, $1) {
                return "<a href=" + $0 + ' class="link u-link"><i class="u-dicn u-dicn-28"></i>网页链接</a>'
            })
        }
    } ();
    l8d.bRM5R = function() {
        var cZ0x = /@([a-zA-Z0-9_\-\u4E00-\u9FA5]+)/g;
        var eF0x = function(lL3x, dT0x) {
            return '<a href="/user/home?nickname=' + encodeURIComponent(lL3x) + '" class="' + (dT0x || "") + '">@' + lL3x + "</a>"
        };
        return function(bl9c, dT0x) {
            return (bl9c || "").replace(cZ0x,
            function($0, $1) {
                return eF0x($1, dT0x)
            })
        }
    } ();
    l8d.bbC5H = function() {
        var cZ0x = /\[(.*?)\]/g;
        return function(bl9c) {
            return (bl9c || "").replace(cZ0x,
            function($1, $2) {
                var V8N = l8d.bAv1x($2);
                return ! V8N ? $1: '<img src="' + V8N + '"/>'
            })
        }
    } ();
    l8d.Bc8U = function(G8y, dT0x) {
        a7h.by9p(G8y, dT0x) ? a7h.v8n(G8y, dT0x) : a7h.w8o(G8y, dT0x)
    };
    l8d.Ib6V = function(cE0x, kd2x) {
        cE0x = a7h.B8t(cE0x);
        kd2x = a7h.B8t(kd2x);
        if (!cE0x || !kd2x) return ! 1;
        for (kd2x = kd2x.parentNode; !! kd2x && kd2x != cE0x; kd2x = kd2x.parentNode);
        return kd2x == cE0x
    };
    l8d.kX2x = function() {
        var bzP0x = function(gB1x) {
            return (gB1x < 10 ? "0": "") + gB1x
        };
        return function(kk2x) {
            kk2x = parseInt(kk2x) || 0;
            if (!kk2x) return "00:00";
            var xI6C = Math.floor(kk2x % 60),
            cwh2x = Math.floor(kk2x / 60);
            return bzP0x(cwh2x) + ":" + bzP0x(xI6C)
        }
    } ();
    l8d.xE6y = function(fF1x, vg6a) {
        if (!fF1x || fF1x.length == 0) return "";
        vg6a = vg6a || "/";
        var bs9j = [];
        for (var i = fF1x.length - 1; i >= 0; i--) {
            bs9j.unshift(fF1x[i].name)
        }
        return bs9j.join(vg6a)
    };
    l8d.rY5d = function() {
        var Lw8o = function(hA1x, dT0x, cE0x, Uh2x) {
            var eF0x = Uh2x ? l8d.bng8Y: k8c.dQ0x;
            if (!hA1x || !hA1x.name) return "";
            if (!hA1x.id) return '<span class="' + dT0x + '">' + eF0x(hA1x.name) + "</span>";
            return "<a" + (cE0x ? ' target="_blank"': "") + ' class="' + dT0x + '" href="/artist?id=' + hA1x.id + '" hidefocus="true">' + eF0x(hA1x.name) + "</a>"
        };
        return function(fF1x, T8L, vg6a, cE0x, bzG0x, Uh2x) {
            if (!fF1x || !fF1x.length) return "";
            vg6a = vg6a || "/";
            T8L = T8L || "";
            Ia6U = "";
            var ec0x = [];
            for (var i = 0,
            i8a = [], sg5l = [], fA1x; i < fF1x.length; ++i) {
                ec0x.push(fF1x[i].name);
                if (!fF1x[i] || fF1x[i].id <= 0) {
                    sg5l.push(fF1x[i]);
                    continue
                }
                if (k8c.gr1x(T8L)) {
                    fA1x = T8L(fF1x[i])
                } else {
                    fA1x = Lw8o(fF1x[i], T8L, cE0x, Uh2x)
                }
                if (fA1x && bzG0x && fF1x[i].tns && fF1x[i].tns.length > 0) {
                    Ia6U = k8c.dQ0x(fF1x[i].tns[0]);
                    fA1x += '<span class="s-fc8" title="' + Ia6U + '"> - (' + Ia6U + ")</span>"
                } !! fA1x && i8a.push(fA1x)
            }
            for (var i = 0,
            fA1x; i < sg5l.length; ++i) {
                if (k8c.gr1x(T8L)) {
                    fA1x = T8L(sg5l[i])
                } else {
                    fA1x = Lw8o(sg5l[i], T8L, cE0x, Uh2x)
                }
                if (fA1x && bzG0x && sg5l[i].tns && sg5l[i].tns.length > 0) {
                    Ia6U = k8c.dQ0x(sg5l[i].tns[0]);
                    fA1x += '<span class="s-fc8" title="' + Ia6U + '"> - (' + Ia6U + ")</span>"
                } !! fA1x && i8a.push(fA1x)
            }
            return '<span title="' + ec0x.join(vg6a) + '">' + i8a.join(vg6a) + "</span>"
        }
    } ();
    l8d.xu6o = function(fl1x, oJ4N) {
        oJ4N = oJ4N || "86";
        return !! fl1x && (oJ4N == "86" ? /^\d{11}$/: /^\d+$/).test(fl1x)
    };
    l8d.cAC2x = function(fl1x) {
        if (!l8d.xu6o(fl1x)) return fl1x;
        return fl1x.substring(0, 3) + "****" + fl1x.substr(7)
    };
    l8d.jy2x = function() {
        var cZ0x = /^\s+$/g;
        return function(if1x) {
            return ! if1x || cZ0x.test(if1x)
        }
    } ();
    l8d.Lu8m = function() {
        var bnd8V = /[^\x00-\xfff]/g;
        return function(if1x) {
            var cvj1x = if1x.match(bnd8V) || [],
            du0x = cvj1x.length;
            return if1x.length + du0x
        }
    } ();
    l8d.Bt8l = function() {
        var bnd8V = /[^\x00-\xfff]/;
        return function(if1x, eV0x) {
            for (var i = 0,
            len = if1x.length; i < len && eV0x > 0; i++) {
                if (bnd8V.test(if1x.charAt(i))) {
                    eV0x -= 2;
                    if (eV0x < 0) {
                        break
                    }
                } else {
                    eV0x -= 1
                }
            }
            return if1x.substring(0, i)
        }
    } ();
    l8d.Bv8n = function(if1x, eV0x, OM0x) {
        eV0x = eV0x || 10;
        OM0x = OM0x || nej.p.dj0x.engine == "trident" && parseInt(nej.p.dj0x.release) < 5;
        if (OM0x && l8d.Lu8m(if1x) > eV0x) {
            return l8d.Bt8l(if1x, eV0x) + "..."
        } else {
            return if1x
        }
    };
    l8d.bzv0x = function(f8d) {
        return f8d === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(f8d.type || f8d.href || ~f8d.tabIndex)
    };
    l8d.ctT1x = function(d8f, cE0x) {
        if (!d8f || !cE0x) return ! 0;
        var f8d, t8l = d8f.type.toLowerCase();
        if (t8l == "mouseout") {
            f8d = d8f.relatedTarget || d8f.toElement
        } else if (t8l == "mouseover") {
            f8d = d8f.relatedTarget || d8f.fromElement
        }
        return ! f8d || f8d !== cE0x && !l8d.Ib6V(cE0x, f8d)
    };
    l8d.sU5Z = function() {
        Q8I = {};
        return function(f8d, dS0x) {
            var D8v = a7h.kZ2x(f8d),
            J8B = "hover-" + D8v;
            if (!dS0x || !D8v || !!Q8I[J8B]) return;
            Q8I[J8B] = !0;
            h8b.s8k(D8v, "mouseover",
            function() {
                var bmQ8I = a7h.F8x(f8d, "hshow") || [];
                var bmP8H = a7h.F8x(f8d, "icn-dislike") || [];
                a7h.w8o(D8v, "z-hover");
                a7h.Y9P(bmQ8I[0], "display", "block");
                a7h.Y9P(bmP8H[0], "display", "block")
            });
            h8b.s8k(D8v, "mouseout",
            function() {
                var bmQ8I = a7h.F8x(f8d, "hshow") || [];
                var bmP8H = a7h.F8x(f8d, "icn-dislike") || [];
                a7h.v8n(D8v, "z-hover");
                a7h.Y9P(bmQ8I[0], "display", "none");
                a7h.Y9P(bmP8H[0], "display", "none")
            })
        }
    } ();
    l8d.byT0x = function() {
        var bv9m = {
            r: /\(|\)|\[|\]|\{|\}|\*|\+|\^|\$|\?|\!|\\|\||\./gi,
            "(": "\\(",
            ")": "\\)",
            "[": "\\[",
            "]": "\\]",
            "{": "\\{",
            "}": "\\}",
            "*": "\\*",
            "+": "\\+",
            "^": "\\^",
            $: "\\$",
            "?": "\\?",
            "!": "\\!",
            "\\": "\\\\",
            "|": "\\|",
            ".": "\\."
        };
        return function(if1x) {
            return k8c.Cq8i(bv9m, if1x)
        }
    } ();
    l8d.xf6Z = function(bw9n) {
        if (k8c.Eq9h(bw9n)) bw9n = bw9n.getTime();
        var fe0x = new Date,
        jN2x = fe0x.getTime() - bw9n;
        if (jN2x <= 6e4) return "刚刚";
        var mH3x = fe0x.getHours() * 36e5 + fe0x.getMinutes() * 6e4 + fe0x.getSeconds() * 1e3;
        if (jN2x <= mH3x) {
            if (jN2x < 36e5) {
                var Dz8r = Math.floor(jN2x / 6e4);
                return Dz8r + "分钟前"
            }
            return k8c.hJ1x(bw9n, "HH:mm")
        } else {
            if (jN2x < mH3x + 864e5) {
                return "昨天" + k8c.hJ1x(bw9n, "HH:mm")
            } else {
                var gm1x = fe0x.getFullYear(),
                Lq8i = new Date(gm1x, 0, 1);
                var mH3x = fe0x.getTime() - Lq8i.getTime();
                if (jN2x < mH3x) {
                    return k8c.hJ1x(bw9n, "M月d日 HH:mm")
                }
                return k8c.hJ1x(bw9n, "yyyy年M月d日")
            }
        }
    };
    l8d.csp1x = function(bw9n) {
        if (k8c.Eq9h(bw9n)) bw9n = bw9n.getTime();
        var fe0x = new Date,
        jN2x = fe0x.getTime() - bw9n;
        var mH3x = fe0x.getHours() * 36e5 + fe0x.getMinutes() * 6e4 + fe0x.getSeconds() * 1e3;
        if (jN2x <= mH3x) {
            return "今天" + k8c.hJ1x(bw9n, "HH:mm")
        } else {
            if (jN2x < mH3x + 864e5) {
                return "昨天" + k8c.hJ1x(bw9n, "HH:mm")
            } else {
                return k8c.hJ1x(bw9n, "yy-MM-dd HH:mm")
            }
        }
    };
    l8d.csj1x = function(bw9n) {
        if (k8c.Eq9h(bw9n)) bw9n = bw9n.getTime();
        var fe0x = new Date,
        jN2x = fe0x.getTime() - bw9n;
        if (jN2x <= 6e4) return "刚刚";
        var mH3x = fe0x.getHours() * 36e5 + fe0x.getMinutes() * 6e4 + fe0x.getSeconds() * 1e3;
        if (jN2x <= mH3x) {
            if (jN2x < 36e5) {
                var Dz8r = Math.floor(jN2x / 6e4);
                return Dz8r + "分钟前"
            }
            return k8c.hJ1x(bw9n, "HH:mm")
        } else {
            if (jN2x < mH3x + 864e5) {
                return "昨天" + k8c.hJ1x(bw9n, "HH:mm")
            } else if (jN2x < mH3x + 864e5 * 6) {
                var gm1x = fe0x.getFullYear(),
                Lq8i = new Date(gm1x, 0, 1);
                var mH3x = fe0x.getTime() - Lq8i.getTime();
                if (jN2x < mH3x) {
                    return k8c.hJ1x(bw9n, "M月d日 HH:mm")
                }
                return k8c.hJ1x(bw9n, "yyyy年M月d日")
            } else {
                return "最近"
            }
        }
    };
    l8d.Vn2x = function() {
        var cZ0x = /\{(.*?)\}/gi;
        return function(pT4X, j8b) {
            return (pT4X || "").replace(cZ0x,
            function($1, $2) {
                var C8u = j8b[$2];
                return C8u == null ? $1: C8u
            })
        }
    } ();
    l8d.ff0x = function() {
        var bh9Y = Array.prototype.slice.call(arguments, 0),
        pT4X = bh9Y.shift();
        if (pT4X) {
            return pT4X.replace(/{(\d+)}/g,
            function($1, $2) {
                return $2 < bh9Y.length ? bh9Y[$2] : $1
            })
        }
        return ""
    };
    l8d.HY6S = function(i8a, dT0x, lD3x) {
        return "";
        lD3x = lD3x || " - ";
        if (i8a && i8a.length) {
            return lD3x + ( !! dT0x ? '<span class="' + dT0x + '">' + i8a[0] + "</span>": i8a[0])
        }
        return ""
    };
    l8d.byL0x = function() {
        if (window.getSelection) {
            var qC4G = window.getSelection();
            if (qC4G && qC4G.focusNode && qC4G.focusNode.tagName) {
                var BA8s = a7h.db0x(qC4G.focusNode);
                for (var i = 0,
                wO6I; i < BA8s.length; ++i) {
                    wO6I = BA8s[i].tagName;
                    if (!wO6I) continue;
                    wO6I = wO6I.toLowerCase();
                    if (wO6I == "textarea" || wO6I == "input") return ! 0
                }
            }
        } else if (document.selection) {
            var cR0x = document.selection.createRange();
            if (cR0x) {
                var f8d = cR0x.parentElement();
                if (f8d && f8d.tagName) {
                    var wO6I = f8d.tagName.toLowerCase();
                    if (wO6I == "textarea" || wO6I == "input") return ! 0
                }
            }
        }
        return ! 1
    };
    l8d.BF8x = function(fs1x) {
        if (/^[A-Z]\:\\/i.test(fs1x)) {
            fs1x = fs1x.split("\\")
        } else {
            fs1x = fs1x.split("/")
        }
        fs1x = fs1x[fs1x.length - 1];
        return fs1x
    };
    l8d.crQ1x = function() {
        var Ch8Z = [13, 17, 34, 19, 18, 21];
        return function(D8v) {
            var bs9j = (D8v || "").split("_");
            return {
                type: Ch8Z[bs9j[2]] || -1,
                id: bs9j[3] || ""
            }
        }
    } ();
    l8d.byI0x = function(gb1x) {
        if (!gb1x) {
            return true
        }
        for (var k in gb1x) {
            return false
        }
        return true
    };
    l8d.bmK8C = function(df0x) {
        if (!df0x) {
            return ""
        }
        if (4 == df0x.userType) {
            return '<sup class="icn u-icn2 u-icn2-music2"></sup>'
        } else if (df0x.authStatus == 1) {
            return '<sup class="u-icn u-icn-1"></sup>'
        } else if (df0x.expertTags && df0x.expertTags.length || !l8d.byI0x(df0x.experts)) {
            return '<sup class="u-icn u-icn-84"></sup>'
        }
    };
    l8d.Lm8e = function(hj1x) {
        if (!hj1x) return "";
        var du0x = hj1x.length,
        hK1x = [];
        hK1x[0] = du0x / 3 | 0;
        hK1x[1] = hK1x[0] + ((du0x - hK1x[0]) / 2 | 0);
        return hj1x.substring(0, hK1x[0]) + hj1x.substring(hK1x[0], hK1x[1]).replace(/\d/g, "*") + hj1x.substring(hK1x[1], du0x)
    };
    l8d.cAG3x = function(r8j, cu9l) {
        return (r8j % cu9l + cu9l) % cu9l
    };
    l8d.bmI8A = function() {
        var Ch8Z = {
            0 : "playlist",
            1 : "program",
            2 : "event",
            3 : "album",
            4 : "song",
            5 : "mv",
            6 : "topic",
            62 : "video"
        };
        return function(D8v) {
            var bs9j = (D8v || "").split("_"),
            o8g = {
                type: Ch8Z[bs9j[2]] || -1,
                id: bs9j[3] || ""
            };
            if (o8g.type == "event") {
                o8g.uid = bs9j[4] || "";
                return "/" + o8g.type + "?id=" + o8g.id + "&uid=" + o8g.uid
            }
            return "/" + o8g.type + "?id=" + o8g.id
        }
    } ();
    l8d.bmH8z = function() {
        var Ch8Z = {
            0 : "歌单",
            1 : "电台节目",
            2 : "动态",
            3 : "专辑",
            4 : "单曲",
            5 : "MV",
            6 : "专栏文章",
            62 : "视频"
        };
        return function(D8v) {
            var bs9j = (D8v || "").split("_");
            return Ch8Z[bs9j[2]] || "资源"
        }
    } ();
    l8d.crf1x = function(bx9o) {
        var qs = bx9o.length > 0 ? bx9o.substring(1) : "",
        args = {},
        items = qs.length ? qs.split("&") : [],
        item = null,
        name = null,
        value = null,
        i = 0,
        len = items.length;
        for (i = 0; i < len; i++) {
            item = items[i].split("=");
            name = decodeURIComponent(item[0]);
            value = decodeURIComponent(item[1]);
            if (name.length) {
                args[name] = value
            }
        }
        return args
    };
    l8d.bmE8w = function(pR4V, Lg8Y) {
        var VY2x = 0,
        eh0x = new Array;
        k8c.bb9S(pR4V,
        function(V8N, r8j) {
            var cK0x = a7h.cY0x("img");
            cK0x.src = V8N;
            h8b.s8k(cK0x, "load",
            function(r8j, d8f) {
                eh0x[r8j] = 1;
                VY2x++;
                if (VY2x == pR4V.length) Lg8Y(pR4V, eh0x)
            }.g8c(this, r8j));
            h8b.s8k(cK0x, "error",
            function(d8f, r8j) {
                eh0x[r8j] = 0;
                VY2x++;
                if (VY2x == pR4V.length) Lg8Y(pR4V, eh0x)
            }.g8c(this, r8j))
        })
    };
    l8d.HW6Q = function(i8a, dP0x) {
        var o8g = [];
        k8c.bb9S(i8a,
        function(p8h, r8j, iK2x) {
            o8g.push(dP0x(p8h, r8j, iK2x))
        });
        return o8g
    };
    l8d.YK3x = function(i8a, dP0x, iK2x) {
        var o8g = [];
        k8c.bb9S(i8a,
        function(p8h, r8j) {
            if (dP0x.call(iK2x, p8h, r8j, i8a)) {
                o8g.push(p8h)
            }
        });
        return o8g
    };
    l8d.byt0x = function(bl9c) {
        return k8c.dQ0x((bl9c || "").replace(/\s{2,}/g, " ").trim())
    };
    l8d.bmx8p = function(bg9X) {
        if (bg9X.transNames && bg9X.transNames.length) {
            return bg9X.transNames[0]
        } else if (bg9X.alias && bg9X.alias.length) {
            return bg9X.alias[0]
        }
    };
    l8d.bmu8m = function(MO8G) {
        if (MO8G) {
            return MO8G.replace(/\n{2,}/g, "<br/><br/>").replace(/\n/g, "<br/>").replace(/(<br\/?>){2,}/g, "<br/><br/>")
        }
    };
    l8d.bmt7m = function(f8d) {
        var f8d = a7h.B8t(f8d),
        cJ0x = f8d && f8d.getElementsByTagName("textarea")[0],
        J8B = a7h.u8m(f8d, "key"),
        bms7l = a7h.u8m(f8d, "simple") == "1",
        cpW0x = a7h.u8m(f8d, "pvnamed") == "1",
        cpJ0x = q8i.vw6q.gh1x();
        if (! (f8d && cJ0x && J8B)) return;
        var Wq2x, bmn7g, Wt2x;
        Wq2x = a7h.F8x(a7h.B8t("m-playlist"), "j-img");
        k8c.bb9S(Wq2x,
        function(iR2x) {
            if (!Wt2x && a7h.u8m(iR2x, "key")) {
                Wt2x = a7h.u8m(iR2x, "key");
                iR2x.removeAttribute("data-key")
            }
        });
        Wq2x = a7h.F8x(a7h.B8t("m-playlist"), "m-info");
        k8c.bb9S(Wq2x,
        function(iR2x) {
            if (!bmn7g && iR2x.id && iR2x.id.indexOf("auto-id-") == 0) {
                bmn7g = iR2x.id.slice(8, 12)
            }
        });
        var C8u = cJ0x.value || cJ0x.defaultValue;
        if (Wt2x) {
            C8u = decodeURIComponent(k8c.cpq0x(C8u, "param=" + bmn7g + Wt2x))
        }
        C8u = JSON.parse(C8u);
        if (cpW0x) {
            l8d.cpp0x(C8u)
        }
        if (bms7l) {
            C8u = l8d.DH8z(C8u)
        }
        cpJ0x.ui5n(J8B, C8u);
        f8d.innerHTML = "";
        return J8B
    };
    l8d.cpo0x = function(oW4a) {
        if (!oW4a.onbeforelistload) {
            oW4a.onbeforelistload = function(d8f) {
                d8f.value = '<div class="u-load s-fc4"><i class="icn"></i> 加载中...</div>'
            }
        }
        if (!oW4a.onemptylist) {
            oW4a.onemptylist = function(d8f) {
                d8f.value = '<div class="n-nmusic"><h3 class="f-ff2"><i class="u-icn u-icn-21"></i>' + (oW4a.emptyMsg || "暂时还没有数据") + "</h3></div>"
            }
        }
        return oW4a
    };
    l8d.cpp0x = function(gW1x) {
        k8c.bb9S(gW1x,
        function(bJ9A) {
            bJ9A.privilege = bJ9A.pv;
            delete bJ9A.pv
        })
    };
    l8d.DH8z = function(hI1x) {
        if (k8c.eC0x(hI1x)) {
            var ej0x = [];
            k8c.bb9S(hI1x,
            function(bms7l) {
                ej0x.push(bxO0x(bms7l))
            });
            return ej0x
        } else {
            return bxO0x(hI1x)
        }
        function bxO0x(hI1x) {
            if (!hI1x) return null;
            var ej0x = {
                album: hI1x.al,
                alias: hI1x.alia || hI1x.ala || [],
                artists: hI1x.ar || [],
                commentThreadId: "R_SO_4_" + hI1x.id,
                copyrightId: hI1x.cp || 0,
                duration: hI1x.dt || 0,
                id: hI1x.id,
                mvid: hI1x.mv || 0,
                name: hI1x.name || "",
                cd: hI1x.cd,
                position: hI1x.no || 0,
                ringtone: hI1x.rt,
                rtUrl: hI1x.rtUrl,
                status: hI1x.st || 0,
                pstatus: hI1x.pst || 0,
                fee: hI1x.fee || 0,
                version: hI1x.v || 0,
                eq: hI1x.eq,
                songType: hI1x.t || 0,
                mst: hI1x.mst,
                score: hI1x.pop || 0,
                ftype: hI1x.ftype,
                rtUrls: hI1x.rtUrls,
                transNames: hI1x.tns,
                privilege: hI1x.privilege,
                lyrics: hI1x.lyrics
            };
            return ej0x
        }
    };
    l8d.cAH3x = function() {
        var f8d = a7h.no3x('<div class="u-mask u-mask-light"></div>' + '<div class="m-opentip">' + '<div class="lay">' + '<div class="note">' + "<h3>分享打不开？</h3>" + '<p>请点击右上角<br>选择<span class="s-fc5">“分享到...”</span></p>' + "</div></div></div>");
        document.body.appendChild(f8d);
        h8b.s8k(f8d, "click",
        function(d8f) {
            h8b.bf9W(d8f);
            a7h.cz9q(f8d)
        })
    };
    l8d.jZ2x = function(cA9r) {
        if (cA9r < 1e5) {
            return cA9r
        } else {
            return Math.floor(cA9r / 1e4) + "万"
        }
    };
    l8d.tW5b = function(cA9r, cJ0x) {
        return "<i>" + (cA9r ? "(" + cA9r + ")": cJ0x) + "</i>"
    };
    l8d.bxL0x = function(t8l, hz1x) {
        var e8e = {};
        if (!k8c.lg2x(hz1x)) {
            return e8e
        }
        switch (parseInt(t8l)) {
        case 17:
            e8e.title = hz1x.name;
            e8e.author = (hz1x.radio || []).name;
            e8e.picUrl = hz1x.coverUrl;
            e8e.category = hz1x.radio.category;
            break;
        case 19:
            e8e.title = hz1x.name;
            e8e.author = l8d.xE6y(hz1x.artists);
            e8e.authors = l8d.xE6y(hz1x.artists, " / ");
            e8e.picUrl = hz1x.picUrl;
            break;
        case 13:
            e8e.title = hz1x.name;
            e8e.author = (hz1x.creator || []).nickname;
            e8e.picUrl = hz1x.coverImgUrl;
            break;
        case 18:
            e8e.title = hz1x.name;
            e8e.author = l8d.xE6y(hz1x.artists);
            e8e.picUrl = (hz1x.album || []).picUrl;
            break;
        case 20:
            e8e.title = hz1x.name;
            e8e.author = "";
            e8e.picUrl = hz1x.img1v1Url;
            break;
        case 21:
            e8e.title = hz1x.name;
            e8e.author = hz1x.artistName;
            e8e.authors = l8d.xE6y(hz1x.artists, " / ");
            e8e.picUrl = hz1x.newCover || hz1x.cover;
            break;
        case 70:
            e8e.title = hz1x.name;
            e8e.author = (hz1x.dj || []).nickname;
            e8e.picUrl = hz1x.picUrl;
            e8e.category = hz1x.category;
            break;
        default:
            break
        }
        return e8e
    };
    l8d.bxH0x = function() {
        return location.hostname.indexOf("igame.163.com") >= 0
    };
    l8d.coF0x = function(eF0x, uY6S, e8e) {
        var bN9E, bh9Y, o8g;
        var jM2x = null;
        var Tr2x = 0;
        if (!e8e) e8e = {};
        var WM2x = function() {
            Tr2x = e8e.leading === false ? 0 : +(new Date);
            jM2x = null;
            o8g = eF0x.apply(bN9E, bh9Y);
            if (!jM2x) bN9E = bh9Y = null
        };
        return function() {
            var fe0x = +(new Date);
            if (!Tr2x && e8e.leading === false) Tr2x = fe0x;
            var bme7X = uY6S - (fe0x - Tr2x);
            bN9E = this;
            bh9Y = arguments;
            if (bme7X <= 0 || bme7X > uY6S) {
                if (jM2x) {
                    clearTimeout(jM2x);
                    jM2x = null
                }
                Tr2x = fe0x;
                o8g = eF0x.apply(bN9E, bh9Y);
                if (!jM2x) bN9E = bh9Y = null
            } else if (!jM2x && e8e.trailing !== false) {
                jM2x = setTimeout(WM2x, bme7X)
            }
            return o8g
        }
    };
    l8d.Tf1x = function(eF0x, uY6S, ru4y) {
        var jM2x, bh9Y, bN9E, Td1x, o8g;
        var WM2x = function() {
            var gS1x = new Date - Td1x;
            if (gS1x < uY6S && gS1x >= 0) {
                jM2x = setTimeout(WM2x, uY6S - gS1x)
            } else {
                jM2x = null;
                if (!ru4y) {
                    o8g = eF0x.apply(bN9E, bh9Y);
                    if (!jM2x) bN9E = bh9Y = null
                }
            }
        };
        return function() {
            bN9E = this;
            bh9Y = arguments;
            Td1x = new Date;
            var bmd7W = ru4y && !jM2x;
            if (!jM2x) jM2x = setTimeout(WM2x, uY6S);
            if (bmd7W) {
                o8g = eF0x.apply(bN9E, bh9Y);
                bN9E = bh9Y = null
            }
            return o8g
        }
    };
    l8d.Tc1x = function(f8d, hy1x) {
        if (f8d) {
            var f8d = f8d.firstElementChild;
            if (f8d) {
                f8d.firstElementChild && (f8d = f8d.firstElementChild);
                f8d.setAttribute("xlink:href", "/style/pc/svg/" + hy1x)
            }
        }
    };
    l8d.bxB0x = function(ec0x) {
        if (!ec0x || !ec0x.length) {
            return
        }
        ec0x = /^#(.+?)#$/.exec(ec0x)[1];
        ec0x = ec0x.replace(/\s/g, " ");
        x8p.bp9g("/api/act/detail", {
            type: "json",
            method: "post",
            data: k8c.dh0x({
                actname: ec0x
            }),
            onload: function(P8H) {
                if (!P8H || P8H.code != 200 || !P8H.act) {
                    n8f.X8P.L8D({
                        type: 2,
                        tip: "该话题暂未创建"
                    })
                } else {
                    location.dispatch2("/activity?id=" + P8H.act.actId)
                }
            },
            onerror: function(bV9M) {
                n8f.X8P.L8D({
                    type: 2,
                    tip: "操作失败，请稍后再试"
                })
            }
        })
    };
    l8d.con0x = function(ec0x) {
        if (!ec0x || !ec0x.length) {
            return
        }
        var SQ1x = location.host;
        ec0x = /^#(.+?)#$/.exec(ec0x)[1];
        ec0x = ec0x.replace(/\s/g, " ");
        x8p.bp9g("/api/act/detail", {
            type: "json",
            method: "post",
            data: k8c.dh0x({
                actname: ec0x
            }),
            onload: function(P8H) {
                if (!P8H || P8H.code != 200 || !P8H.act) {
                    cW0x.ji2x("该话题暂未创建")
                } else {
                    cW0x.AJ7C(SQ1x + "/activity?id=" + P8H.act.actId)
                }
            },
            onerror: function(bV9M) {
                cW0x.ji2x("操作失败，请稍后再试")
            }
        })
    };
    l8d.blZ7S = function(SJ1x, wQ6K) {
        if (!SJ1x || !wQ6K) return false;
        if (SJ1x == wQ6K) return true;
        return l8d.blZ7S(SJ1x, wQ6K.parentNode)
    };
    a7h.ct9k = function(bG9x, ja2x) {
        if (!bG9x) return null;
        if (!ja2x) return bG9x.firstChild;
        return a7h.F8x(bG9x, ja2x)[0]
    };
    l8d.bxt0x = function(if1x) {
        return /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i.test(if1x)
    };
    l8d.bxs0x = function(if1x, SG1x) {
        SG1x = SG1x || "86";
        if (SG1x == "86") return /^\d{11}$/.test(if1x);
        return /^\d+$/.test(if1x)
    };
    l8d.cAJ3x = function(us5x) {
        if (!us5x) {
            return "0b"
        }
        var cnV0x = ["Bytes", "KB", "MB", "GB"];
        var ba9R = Math.floor(Math.log(us5x) / Math.log(1024));
        return (us5x / Math.pow(1024, Math.floor(ba9R))).toFixed(ba9R == 1 ? 0 : 1) + cnV0x[ba9R]
    };
    l8d.bxo0x = function(dA0x, fc0x, cnH0x) {
        if (!dA0x) return dA0x;
        var du0x = k8c.fp1x(dA0x);
        if (du0x <= fc0x) return dA0x;
        var blV7O = du0x - dA0x.length,
        blT7M = dA0x.length - blV7O;
        var fr1x = Math.ceil(fc0x / 2),
        cnq0x = fc0x,
        bxg0x = 0;
        if (blV7O < fr1x) fr1x = fc0x - blV7O;
        if (blT7M < fc0x) fc0x = blT7M + Math.ceil((fc0x - blT7M) / 2);
        while (fr1x <= fc0x) {
            bxg0x = k8c.fp1x(dA0x.substr(0, fr1x));
            var blR7K = cnq0x - bxg0x;
            if (blR7K == 0) break;
            if (blR7K == 1) {
                var cmM0x = k8c.fp1x(dA0x.charAt(fr1x));
                if (cmM0x == 1) {
                    fr1x++;
                    break
                } else {
                    break
                }
            }
            fr1x += Math.floor(blR7K / 2)
        }
        return dA0x.substr(0, fr1x) + ( !! cnH0x ? "": "...")
    };
    l8d.cmI0x = function(bm9d) {
        bm9d = bm9d || 10;
        var cF0x = "";
        for (var i = 0; i < bm9d; i++) {
            cF0x += String.fromCharCode(Math.round(Math.random() * 20901) + 19968)
        }
        return cF0x
    };
    var cmH0x = /([A-Za-z0-9 \.\-\(\)\!\?])/,
    cmC0x = /([\u4e00-\u9fa5\uac00-\ud7af\u3040-\u30ff\u31f0-\u31ff])/,
    cmB0x = ["的", "一", "是", "在", "不", "了", "有", "和", "人", "这", "中", "大", "为", "上", "个", "国", "我", "以", "要", "他", "时", "来", "用", "们", "生", "到", "作", "地", "于", "出", "就", "分", "对", "成", "会", "可", "主", "发", "年", "动", "同", "工", "也", "能", "下", "过", "子", "说", "产", "种", "面", "而", "方", "后", "多", "定", "行", "学", "法", "所", "民", "得", "经", "十", "三", "之", "进", "着", "等", "部", "度", "家", "电", "力", "里", "如", "水", "化", "高", "自", "二", "理", "起", "小", "物", "现", "实", "加", "量", "都", "两", "体", "制", "机", "当", "使", "点", "从", "业", "本", "去", "把", "性", "好", "应", "开", "它", "合", "还", "因", "由", "其", "些", "然", "前", "外", "天", "政", "四", "日", "那", "社", "义", "事", "平", "形", "相", "全", "表", "间", "样", "与", "关", "各", "重", "新", "线", "内", "数", "正", "心", "反", "你", "明", "看", "原", "又", "么", "利", "比", "或", "但", "质", "气", "第", "向", "道", "命", "此", "变", "条", "只", "没", "结", "解", "问", "意", "建", "月", "公", "无", "系", "军", "很", "情", "者", "最", "立", "代", "想", "已", "通", "并", "提", "直", "题", "党", "程", "展", "五", "果", "料", "象", "员", "革", "位", "入", "常", "文", "总", "次", "品", "式", "活", "设", "及", "管", "特", "件", "长", "求", "老", "头", "基", "资", "边", "流", "路", "级", "少", "图", "山", "统", "接", "知", "较", "将", "组", "见", "计", "别", "她", "手", "角", "期", "根", "论", "运", "农", "指", "几", "九", "区", "强", "放", "决", "西", "被", "干", "做", "必", "战", "先", "回", "则", "任", "取", "据", "处", "队", "南", "给", "色", "光", "门", "即", "保", "治", "北", "造", "百", "规", "热", "领", "七", "海", "口", "东", "导", "器", "压", "志", "世", "金", "增", "争", "济", "阶", "油", "思", "术", "极", "交", "受", "联", "什", "认", "六", "共", "权", "收", "证", "改", "清", "己", "美", "再", "采", "转", "更", "单", "风", "切", "打", "白", "教", "速", "花", "带", "安", "场", "身", "车", "例", "真", "务", "具", "万", "每", "目", "至", "达", "走", "积", "示", "议", "声", "报", "斗", "完", "类", "八", "离", "华", "名", "确", "才", "科", "张", "信", "马", "节", "话", "米", "整", "空", "元", "况", "今", "集", "温", "传", "土", "许", "步", "群", "广", "石", "记", "需", "段", "研", "界", "拉", "林", "律", "叫", "且", "究", "观", "越", "织", "装", "影", "算", "低", "持", "音", "众", "书", "布", "复", "容", "儿", "须", "际", "商", "非", "验", "连", "断", "深", "难", "近", "矿", "千", "周", "委", "素", "技", "备", "半", "办", "青", "省", "列", "习", "响", "约", "支", "般", "史", "感", "劳", "便", "团", "往", "酸", "历", "市", "克", "何", "除", "消", "构", "府", "称", "太", "准", "精", "值", "号", "率", "族", "维", "划", "选", "标", "写", "存", "候", "毛", "亲", "快", "效", "斯", "院", "查", "江", "型", "眼", "王", "按", "格", "养", "易", "置", "派", "层", "片", "始", "却", "专", "状", "育", "厂", "京", "识", "适", "属", "圆", "包", "火", "住", "调", "满", "县", "局", "照", "参", "红", "细", "引", "听", "该", "铁", "价", "严", "龙", "飞"];
    var bxe0x = function(cmz0x) {
        var bm9d = k8c.Ay7r(1, 5),
        cmy0x = Math.random() < .5,
        iv2x = "";
        if (cmz0x) {
            if (cmy0x) {
                while (bm9d >= 0) {
                    iv2x += cmB0x[k8c.Ay7r(0, 500)];
                    bm9d--
                }
            } else {
                iv2x = l8d.cmI0x(bm9d)
            }
        } else {
            iv2x = k8c.Sj1x(bm9d)
        }
        return '<div class="soil">' + iv2x + "</div>"
    };
    l8d.bng8Y = function(eg0x) {
        eg0x = k8c.Kk7d(eg0x);
        try {
            var bm9d = eg0x.length,
            r8j = k8c.Ay7r(1, bm9d - 1);
            while (r8j < bm9d) {
                if (cmC0x.test(eg0x.charAt(r8j))) {
                    return k8c.dQ0x(eg0x.slice(0, r8j)) + bxe0x(true) + k8c.dQ0x(eg0x.slice(r8j))
                } else if (cmH0x.test(eg0x.charAt(r8j))) {
                    return k8c.dQ0x(eg0x.slice(0, r8j)) + bxe0x() + k8c.dQ0x(eg0x.slice(r8j))
                } else {
                    r8j++
                }
            }
            return k8c.dQ0x(eg0x)
        } catch(e) {
            return k8c.dQ0x(eg0x)
        }
    };
    l8d.XZ3x = function(kL2x, me3x) {
        return "//nos.netease.com/" + kL2x + "/" + me3x
    };
    l8d.cmv0x = function(fs1x) {
        var fn1x = /(.+)(\.[^\.]+$)/.exec(fs1x);
        return fn1x ? {
            filename: fn1x[1],
            suffix: fn1x[2]
        }: {
            filename: fs1x || "",
            suffix: ""
        }
    };
    l8d.cms0x = function(V8N) {
        return (V8N || "").replace(/^https?:/, "")
    }
})(); (function() {
    var k8c = NEJ.P("nej.u");
    function cmp0x() {
        var BR8J = function(jQ2x) {
            if (jQ2x < -128) {
                return BR8J(128 - ( - 128 - jQ2x))
            } else if (jQ2x >= -128 && jQ2x <= 127) {
                return jQ2x
            } else if (jQ2x > 127) {
                return BR8J( - 129 + jQ2x - 127)
            } else {
                throw new Error("1001")
            }
        };
        var cmn0x = function(jQ2x, be9V) {
            return BR8J(jQ2x + be9V)
        };
        var cmk0x = function(Yk3x, blQ7J) {
            if (Yk3x == null) {
                return null
            }
            if (blQ7J == null) {
                return Yk3x
            }
            var pG4K = [];
            var clG9x = blQ7J.length;
            for (var i = 0,
            bm9d = Yk3x.length; i < bm9d; i++) {
                pG4K[i] = cmn0x(Yk3x[i], blQ7J[i % clG9x])
            }
            return pG4K
        };
        var clB9s = function(Yr3x) {
            if (Yr3x == null) {
                return Yr3x
            }
            var pG4K = [];
            var ckN9E = Yr3x.length;
            for (var i = 0,
            bm9d = ckN9E; i < bm9d; i++) {
                pG4K[i] = BR8J(0 - Yr3x[i])
            }
            return pG4K
        };
        var ckM9D = function(blN7G, Sr1x) {
            blN7G = BR8J(blN7G);
            Sr1x = BR8J(Sr1x);
            return BR8J(blN7G ^ Sr1x)
        };
        var bwN0x = function(Sn1x, blL7E) {
            if (Sn1x == null || blL7E == null || Sn1x.length != blL7E.length) {
                return Sn1x
            }
            var pG4K = [];
            var ckD9u = Sn1x.length;
            for (var i = 0,
            bm9d = ckD9u; i < bm9d; i++) {
                pG4K[i] = ckM9D(Sn1x[i], blL7E[i])
            }
            return pG4K
        };
        var bwK0x = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
        var ckB9s = function(dn0x) {
            var HQ6K = [];
            HQ6K.push(bwK0x[dn0x >>> 4 & 15]);
            HQ6K.push(bwK0x[dn0x & 15]);
            return HQ6K.join("")
        };
        var bwJ0x = function(us5x) {
            var bm9d = us5x.length;
            if (us5x == null || bm9d < 0) {
                return new String("")
            }
            var HQ6K = [];
            for (var i = 0; i < bm9d; i++) {
                HQ6K.push(ckB9s(us5x[i]))
            }
            return HQ6K.join("")
        };
        var bwE0x = function(YT3x) {
            if (YT3x == null || YT3x.length == 0) {
                return YT3x
            }
            var blI7B = new String(YT3x);
            var pG4K = [];
            var bm9d = blI7B.length / 2;
            var be9V = 0;
            for (var i = 0; i < bm9d; i++) {
                var oi3x = parseInt(blI7B.charAt(be9V++), 16) << 4;
                var nO3x = parseInt(blI7B.charAt(be9V++), 16);
                pG4K[i] = BR8J(oi3x + nO3x)
            }
            return pG4K
        };
        var bwA0x = function(cF0x) {
            if (cF0x == null || cF0x == undefined) {
                return cF0x
            }
            var Sg1x = encodeURIComponent(cF0x);
            var us5x = [];
            var bwz0x = Sg1x.length;
            for (var i = 0; i < bwz0x; i++) {
                if (Sg1x.charAt(i) == "%") {
                    if (i + 2 < bwz0x) {
                        us5x.push(bwE0x(Sg1x.charAt(++i) + "" + Sg1x.charAt(++i))[0])
                    } else {
                        throw new Error("1009")
                    }
                } else {
                    us5x.push(Sg1x.charCodeAt(i))
                }
            }
            return us5x
        };
        var cjN9E = function(uW6Q) {
            var ba9R = 0;
            ba9R += (uW6Q[0] & 255) << 24;
            ba9R += (uW6Q[1] & 255) << 16;
            ba9R += (uW6Q[2] & 255) << 8;
            ba9R += uW6Q[3] & 255;
            return ba9R
        };
        var cAQ3x = function(ba9R) {
            var uW6Q = [];
            uW6Q[0] = ba9R >>> 24 & 255;
            uW6Q[1] = ba9R >>> 16 & 255;
            uW6Q[2] = ba9R >>> 8 & 255;
            uW6Q[3] = ba9R & 255;
            return uW6Q
        };
        var cjy9p = function(dt0x, blB7u, bm9d) {
            var ej0x = [];
            if (dt0x == null || dt0x.length == 0) {
                return ej0x
            }
            if (dt0x.length < bm9d) {
                throw new Error("1003")
            }
            for (var i = 0; i < bm9d; i++) {
                ej0x[i] = dt0x[blB7u + i]
            }
            return ej0x
        };
        var blA7t = function(dt0x, blB7u, rv4z, cje9V, bm9d) {
            if (dt0x == null || dt0x.length == 0) {
                return rv4z
            }
            if (rv4z == null) {
                throw new Error("1004")
            }
            if (dt0x.length < bm9d) {
                throw new Error("1003")
            }
            for (var i = 0; i < bm9d; i++) {
                rv4z[cje9V + i] = dt0x[blB7u + i]
            }
            return rv4z
        };
        var cjd9U = function(bm9d) {
            var bs9j = [];
            for (var i = 0; i < bm9d; i++) {
                bs9j[i] = 0
            }
            return bs9j
        };
        var ciS9J = [82, 9, 106, -43, 48, 54, -91, 56, -65, 64, -93, -98, -127, -13, -41, -5, 124, -29, 57, -126, -101, 47, -1, -121, 52, -114, 67, 68, -60, -34, -23, -53, 84, 123, -108, 50, -90, -62, 35, 61, -18, 76, -107, 11, 66, -6, -61, 78, 8, 46, -95, 102, 40, -39, 36, -78, 118, 91, -94, 73, 109, -117, -47, 37, 114, -8, -10, 100, -122, 104, -104, 22, -44, -92, 92, -52, 93, 101, -74, -110, 108, 112, 72, 80, -3, -19, -71, -38, 94, 21, 70, 87, -89, -115, -99, -124, -112, -40, -85, 0, -116, -68, -45, 10, -9, -28, 88, 5, -72, -77, 69, 6, -48, 44, 30, -113, -54, 63, 15, 2, -63, -81, -67, 3, 1, 19, -118, 107, 58, -111, 17, 65, 79, 103, -36, -22, -105, -14, -49, -50, -16, -76, -26, 115, -106, -84, 116, 34, -25, -83, 53, -123, -30, -7, 55, -24, 28, 117, -33, 110, 71, -15, 26, 113, 29, 41, -59, -119, 111, -73, 98, 14, -86, 24, -66, 27, -4, 86, 62, 75, -58, -46, 121, 32, -102, -37, -64, -2, 120, -51, 90, -12, 31, -35, -88, 51, -120, 7, -57, 49, -79, 18, 16, 89, 39, -128, -20, 95, 96, 81, 127, -87, 25, -75, 74, 13, 45, -27, 122, -97, -109, -55, -100, -17, -96, -32, 59, 77, -82, 42, -11, -80, -56, -21, -69, 60, -125, 83, -103, 97, 23, 43, 4, 126, -70, 119, -42, 38, -31, 105, 20, 99, 85, 33, 12, 125];
        var HL6F = 64;
        var Zu4y = 64;
        var bwj0x = 4;
        var ciA9r = function(pM4Q) {
            var bwd0x = [];
            if (pM4Q == null || pM4Q == undefined || pM4Q.length == 0) {
                return cjd9U(Zu4y)
            }
            if (pM4Q.length >= Zu4y) {
                return cjy9p(pM4Q, 0, Zu4y)
            } else {
                for (var i = 0; i < Zu4y; i++) {
                    bwd0x[i] = pM4Q[i % pM4Q.length]
                }
            }
            return bwd0x
        };
        var cig9X = function(ZD4H) {
            if (ZD4H == null || ZD4H.length % HL6F != 0) {
                throw new Error("1005")
            }
            var bln7g = [];
            var be9V = 0;
            var chB9s = ZD4H.length / HL6F;
            for (var i = 0; i < chB9s; i++) {
                bln7g[i] = [];
                for (var j = 0; j < HL6F; j++) {
                    bln7g[i][j] = ZD4H[be9V++]
                }
            }
            return bln7g
        };
        var chA9r = function(bvM0x) {
            var oi3x = bvM0x >>> 4 & 15;
            var nO3x = bvM0x & 15;
            var be9V = oi3x * 16 + nO3x;
            return ciS9J[be9V]
        };
        var bvL0x = function(blj7c) {
            if (blj7c == null) {
                return null
            }
            var bvF0x = [];
            for (var i = 0,
            bm9d = blj7c.length; i < bm9d; i++) {
                bvF0x[i] = chA9r(blj7c[i])
            }
            return bvF0x
        };
        var bvB0x = function(HH6B, pM4Q) {
            if (HH6B == null) {
                return null
            }
            if (HH6B.length == 0) {
                return []
            }
            if (HH6B.length % HL6F != 0) {
                throw new Error("1005")
            }
            pM4Q = ciA9r(pM4Q);
            var bli7b = pM4Q;
            var blh7a = cig9X(HH6B);
            var Rz1x = [];
            var cgh8Z = blh7a.length;
            for (var i = 0; i < cgh8Z; i++) {
                var blg7Z = bvL0x(blh7a[i]);
                blg7Z = bvL0x(blg7Z);
                var blf7Y = bwN0x(blg7Z, bli7b);
                var cfS8K = cmk0x(blf7Y, clB9s(bli7b));
                blf7Y = bwN0x(cfS8K, pM4Q);
                blA7t(blf7Y, 0, Rz1x, i * HL6F, HL6F);
                bli7b = blh7a[i]
            }
            var bvn9e = [];
            blA7t(Rz1x, Rz1x.length - bwj0x, bvn9e, 0, bwj0x);
            var bm9d = cjN9E(bvn9e);
            if (bm9d > Rz1x.length) {
                throw new Error("1006")
            }
            var pG4K = [];
            blA7t(Rz1x, 0, pG4K, 0, bm9d);
            return pG4K
        };
        var cfP8H = function(bap4t, J8B) {
            if (bap4t == null) {
                return null
            }
            var bvb9S = new String(bap4t);
            if (bvb9S.length == 0) {
                return []
            }
            var HH6B = bwE0x(bvb9S);
            if (J8B == null || J8B == undefined) {
                throw new Error("1007")
            }
            var pM4Q = bwA0x(J8B);
            return bvB0x(HH6B, pM4Q)
        };
        this.cfe8W = function(bap4t, J8B) {
            var bkZ7S = cfP8H(bap4t, J8B);
            var Cy8q = new String(bwJ0x(bkZ7S));
            var wW6Q = [];
            var bkY7R = Cy8q.length / 2;
            var be9V = 0;
            for (var i = 0; i < bkY7R; i++) {
                wW6Q.push("%");
                wW6Q.push(Cy8q.charAt(be9V++));
                wW6Q.push(Cy8q.charAt(be9V++))
            }
            return wW6Q.join("")
        };
        k8c.cpq0x = function(bkX7Q, J8B) {
            return k8c.ceQ8I(k8c.cdO8G(bkX7Q), J8B)
        };
        k8c.ceQ8I = function(bkX7Q, J8B) {
            var bkZ7S = bvB0x(bkX7Q, bwA0x(J8B));
            var Cy8q = new String(bwJ0x(bkZ7S));
            var wW6Q = [];
            var bkY7R = Cy8q.length / 2;
            var be9V = 0;
            for (var i = 0; i < bkY7R; i++) {
                wW6Q.push("%");
                wW6Q.push(Cy8q.charAt(be9V++));
                wW6Q.push(Cy8q.charAt(be9V++))
            }
            return wW6Q.join("")
        }
    }
    window.settmusic = (new cmp0x).cfe8W
})(); (function() {
    var c8g = NEJ.P,
    bn9e = NEJ.F,
    H8z = c8g("nej.ut"),
    k8c = c8g("nej.u"),
    h8b = c8g("nej.v"),
    x8p = c8g("nej.j"),
    q8i = c8g("nm.d"),
    l8d = c8g("nm.x"),
    J8B = "Search-tracks_",
    b8h;
    q8i.ff0x({
        "search-suggest": {
            url: "/api/search/suggest/web",
            type: "POST",
            format: function(P8H) {
                return P8H
            },
            onerror: function(P8H, e8e) {
                if (P8H.code == 407) {
                    e8e.onForbidden()
                }
            }
        },
        "search-multimatch": {
            url: "/api/search/suggest/multimatch",
            type: "GET"
        },
        "search-list": {
            url: "/api/cloudsearch/get/web",
            type: "post",
            noescape: true,
            filter: function(e8e, bd9U) {
                window.log && window.log("searchkeywordclient", {
                    type: this.ceN8F(parseInt(e8e.data.type)) || "suggest",
                    keyword: e8e.data.s,
                    offset: e8e.offset
                })
            },
            format: function(P8H, e8e) {
                if (P8H.abroad) {
                    try {
                        P8H.result = JSON.parse(decodeURIComponent(settmusic(P8H.result, q8i.sk)))
                    } catch(e) {}
                }
                P8H.result = P8H.result || {};
                var i8a, cu9l, jk2x = [],
                tj5o = e8e.data.s || "",
                gn1x = e8e.data.limit,
                t8l = parseInt(e8e.data.type) || 1,
                o8g = P8H.result;
                switch (t8l) {
                case 1:
                    i8a = this.buQ9H(o8g.songs, e8e.data.hlpretag, e8e.data.hlposttag);
                    cu9l = o8g.songCount;
                    break;
                case 10:
                    i8a = o8g.albums;
                    cu9l = o8g.albumCount;
                    break;
                case 100:
                    i8a = o8g.artists;
                    cu9l = o8g.artistCount;
                    break;
                case 1e3:
                    i8a = o8g.playlists;
                    cu9l = o8g.playlistCount;
                    break;
                case 1002:
                    i8a = o8g.userprofiles;
                    cu9l = o8g.userprofileCount;
                    break;
                case 1004:
                    i8a = o8g.mvs;
                    cu9l = o8g.mvCount;
                    break;
                case 1006:
                    i8a = this.buQ9H(o8g.songs, e8e.data.hlpretag, e8e.data.hlposttag);
                    cu9l = o8g.songCount;
                    break;
                case 1009:
                    var qe4i = o8g.djRadios;
                    if ( !! qe4i) {
                        k8c.bb9S(qe4i,
                        function(C8u, r8j, ceE8w) {
                            C8u.xid = C8u.id;
                            C8u.id = C8u.id + "_rad"
                        });
                        if (qe4i.length) {
                            this.ui5n("radio_search-" + e8e.data.s, qe4i)
                        }
                    }
                    cu9l = Math.min(o8g.djprogramCount, 500);
                    i8a = o8g.djprograms || [];
                    if (e8e.data.isPub) {
                        k8c.mt3x(qe4i,
                        function(C8u, r8j, ceE8w) {
                            C8u.stype = 1;
                            i8a.unshift(C8u)
                        });
                        cu9l = Math.min(i8a.length, 500)
                    }
                    break
                }
                this.z8r("onsearchload", P8H);
                if (i8a && i8a.length) {
                    for (var i = 0; i < gn1x; i++) {
                        if (i < i8a.length) {
                            jk2x.push(i8a[i])
                        } else {
                            jk2x.push(null)
                        }
                    }
                }
                return {
                    more: !0,
                    total: Math.min(cu9l || 0, tj5o.length < 3 ? 500 : 5e3),
                    list: jk2x
                }
            },
            onerror: function(P8H, e8e) {
                e8e.onload(e8e, []);
                if (k8c.gr1x(e8e.onerror)) {
                    e8e.onerror(P8H)
                }
            }
        }
    });
    q8i.CK8C = NEJ.C();
    b8h = q8i.CK8C.O8G(q8i.hn1x);
    b8h.cs9j = function() {
        this.cx9o()
    };
    b8h.ceu8m = function(J8B, e8e) {
        if (!J8B) return;
        if ( !! this.bRC5H) x8p.jI2x(this.bRC5H);
        this.bRC5H = this.cn9e("search-suggest", NEJ.X({
            data: {
                s: J8B,
                limit: 8
            }
        },
        e8e))
    };
    b8h.ceh8Z = function(J8B, e8e) {
        if (!J8B) return;
        this.cn9e("search-multimatch", NEJ.X({
            data: {
                s: J8B
            }
        },
        e8e))
    };
    b8h.buQ9H = function() {
        var cdY8Q = function(he1x, bRk5p, bRj5o) {
            var cdF8x = he1x.match(new RegExp(bRk5p + "(.+?)" + bRj5o, "gi")),
            cA9r = 0;
            k8c.bb9S(cdF8x,
            function(p8h) {
                cA9r += p8h.replace(new RegExp(bRk5p, "g"), "").replace(new RegExp(bRj5o, "g"), "").length
            });
            return cA9r
        };
        return function(iL2x, cdC8u, cdq8i) {
            var bQU5Z = [];
            k8c.bb9S(iL2x,
            function(bg9X, ba9R) {
                bg9X = l8d.DH8z(bg9X);
                var bbi5n = bg9X.lyrics || [],
                du0x = bbi5n.length,
                jB2x = 0,
                cu9l = 4,
                bbj5o = {
                    l: 0,
                    v: 0
                },
                bkQ7J;
                if (du0x > 4) {
                    k8c.bb9S(bbi5n,
                    function(he1x, r8j) {
                        var bQK5P = cdY8Q(he1x, cdC8u, cdq8i);
                        if (bQK5P > bbj5o.v) {
                            bbj5o.v = bQK5P;
                            bbj5o.l = r8j
                        }
                    });
                    jB2x = bbj5o.l;
                    jB2x = Math.max(jB2x, 0);
                    bkQ7J = du0x - jB2x - 4;
                    if (bkQ7J < 0) jB2x += bkQ7J;
                    bg9X.lrcAbstractEnd = jB2x + cu9l - 1
                } else {
                    bg9X.lrcAbstractEnd = du0x - 1
                }
                bg9X.lrcAbstractStart = jB2x;
                bg9X.indexId = (bbi5n && bbi5n.length ? "L": "NL") + bg9X.id;
                bQU5Z.push(bg9X)
            });
            return bQU5Z
        }
    } ();
    b8h.ceN8F = function(t8l) {
        switch (t8l) {
        case 1:
            return "song";
            break;
        case 100:
            return "artist";
            break;
        case 10:
            return "album";
            break;
        case 1004:
            return "mv";
            break;
        case 1006:
            return "lyric";
            break;
        case 1e3:
            return "list";
            break;
        case 1009:
            return "djradio";
            break;
        case 1002:
            return "user";
            break;
        default:
            return "suggest";
            break
        }
    }
})(); (function() {
    var c8g = NEJ.P,
    a7h = c8g("nej.e"),
    h8b = c8g("nej.v"),
    k8c = c8g("nej.u"),
    H8z = c8g("nej.ut"),
    x8p = c8g("nej.j"),
    q8i = c8g("nm.d"),
    l8d = c8g("nm.x"),
    E8w = c8g("nm.m"),
    n8f = c8g("nm.l"),
    dq0x = c8g("nm.i"),
    M8E = c8g("nm.m.sch"),
    b8h,
    K8C;
    var bbq5v = {
        songs: 1,
        artists: 100,
        albums: 10,
        playlists: 1e3,
        mvs: 1004
    };
    M8E.QE1x = NEJ.C();
    b8h = M8E.QE1x.O8G(H8z.cD0x);
    b8h.cs9j = function(f8d) {
        this.cx9o();
        this.bS9J(f8d);
        this.R8J = q8i.CK8C.gh1x()
    };
    b8h.bS9J = function(f8d) {
        this.m8e = f8d;
        var i8a = a7h.F8x(f8d, "j-flag");
        this.eI0x = i8a[0];
        this.bkN7G = i8a[1];
        this.cj9a = i8a[2];
        this.mG3x = i8a[3];
        h8b.s8k(this.eI0x, "input", this.fN1x.g8c(this));
        h8b.s8k(this.eI0x, "keyup", this.fN1x.g8c(this));
        h8b.s8k(this.eI0x, "focus", this.gu1x.g8c(this));
        h8b.s8k(this.bkN7G, "click", this.gu1x.g8c(this));
        h8b.s8k(this.eI0x, "blur", this.bkM7F.g8c(this));
        h8b.s8k(this.cj9a, "click", this.bbH5M.g8c(this));
        h8b.s8k(this.m8e, "keydown", this.bkK7D.g8c(this));
        h8b.s8k(this.m8e, "keypress", this.bbJ5O.g8c(this));
        h8b.s8k(this.mG3x, "mouseover", this.Qq0x.g8c(this));
        h8b.s8k(this.mG3x, "mouseout", this.Qq0x.g8c(this));
        if (this.eI0x.value) {
            this.eI0x.value = ""
        }
        if (this.eI0x.style.opacity != null) {
            this.eI0x.style.opacity = 1
        }
    };
    b8h.fN1x = function(d8f) {
        if (d8f.type == "keyup" && d8f.keyCode == 8 || d8f.keyCode == 46) {
            this.Di8a()
        } else if (d8f.type == "input" || d8f.type == "propertychange") {
            setTimeout(this.Di8a.g8c(this), 0)
        }
    };
    b8h.gu1x = function() {
        this.yb7U(this.bkN7G, !1);
        a7h.w8o(this.m8e, "m-srch-fcs");
        this.eI0x.focus();
        this.Di8a();
        a7h.w8o(a7h.F8x("g-topbar", "j-showoff")[0], "f-hide")
    };
    b8h.bkM7F = function() {
        if (!this.eI0x.value) {
            this.yb7U(this.bkN7G, !0)
        }
        var Dk8c = a7h.F8x(this.mG3x, "slt");
        if (this.bbT5Y(this.mG3x) && Dk8c.length > 0 && a7h.u8m(Dk8c[0], "type")) {
            var hy1x = Dk8c[0].href;
            if (/#\/(song|album|artist|playlist)\?id=(\d+)/.test(hy1x)) {
                window.log("search", {
                    rid: RegExp.$2,
                    type: RegExp.$1,
                    keyword: this.eI0x.value
                })
            }
            this.bkJ7C(Dk8c[0].href)
        }
        this.yb7U(this.mG3x, !1);
        a7h.v8n(this.m8e, "m-srch-fcs")
    };
    b8h.yb7U = function(f8d, lN3x) {
        a7h.Y9P(f8d, "display", !lN3x ? "none": "")
    };
    b8h.bbT5Y = function(f8d) {
        return a7h.cV0x(f8d, "display") != "none"
    };
    b8h.Di8a = function() {
        var Dn8f = function(tS5X, cJ0x) {
            if (!cJ0x) return;
            return cJ0x.replace(new RegExp(l8d.byT0x(tS5X), "gi"),
            function($1) {
                return '<span class="s-fc7 f-tdn">' + $1 + "</span>"
            })
        };
        var ccI8A = function(if1x) {
            var eV0x = this.m8e.clientWidth > 250 ? 41 : 17;
            if (l8d.Lu8m(if1x) > eV0x) {
                return l8d.Bt8l(if1x, eV0x) + "..."
            } else {
                return if1x
            }
        };
        var bch5m = function(o8g) {
            return o8g.songs && o8g.songs.length || o8g.albums && o8g.albums.length || o8g.artists && o8g.artists.length || o8g.playlists && o8g.playlists.length
        };
        var tc5h = function(tS5X, d8f) {
            if (!l8d.bzv0x(this.eI0x) || l8d.jy2x(this.eI0x.value)) {
                this.yb7U(this.mG3x, !1);
                return
            }
            d8f.keyword = k8c.dQ0x(tS5X);
            var dL0x = a7h.bX9O("m-search-suggest", d8f, {
                mark: Dn8f.g8c(this, tS5X),
                cutStr: ccI8A.g8c(this)
            }),
            sD5I = d8f.result.order;
            this.mG3x.innerHTML = dL0x;
            this.yb7U(this.mG3x, bch5m(d8f.result) ? !0 : !1);
            if ( !! sD5I && !!sD5I.length && bbq5v[sD5I[0]]) {
                this.bkG7z = {
                    keyword: tS5X,
                    type: bbq5v[sD5I[0]]
                }
            }
        };
        var ccl8d = function() {
            this.yb7U(this.mG3x, !1);
            return
        };
        return function() {
            var C8u = this.eI0x.value;
            if (l8d.jy2x(C8u)) {
                this.yb7U(this.mG3x, !1);
                return
            }
            this.R8J.ceu8m(C8u, {
                onload: tc5h.g8c(this, C8u),
                onForbidden: ccl8d.g8c(this)
            })
        }
    } ();
    b8h.bbJ5O = function(d8f) {
        if (d8f.keyCode != 13) return;
        var Dk8c = a7h.F8x(this.mG3x, "slt");
        if (this.bbT5Y(this.mG3x) && Dk8c.length > 0) {
            this.bkJ7C(Dk8c[0].href);
            this.yb7U(this.mG3x, !1);
            return
        }
        this.bbH5M();
        this.yb7U(this.mG3x, !1)
    };
    b8h.bkK7D = function(d8f) {
        if (!this.bbT5Y(this.mG3x)) return;
        var i8a = a7h.F8x(this.mG3x, "xtag"),
        du0x = i8a.length,
        r8j = k8c.dd0x(i8a,
        function(p8h) {
            return a7h.by9p(p8h, "slt")
        });
        switch (d8f.keyCode) {
        case 38:
            if (r8j >= 0) a7h.v8n(i8a[r8j], "slt");
            a7h.w8o(i8a[r8j <= 0 ? du0x - 1 : r8j - 1], "slt");
            break;
        case 40:
            if (r8j >= 0) a7h.v8n(i8a[r8j], "slt");
            a7h.w8o(i8a[(r8j + 1) % du0x], "slt");
            break
        }
    };
    b8h.Qq0x = function(d8f) {
        if (!this.bbT5Y(this.mG3x)) return;
        var PZ0x, G8y = h8b.U8M(d8f),
        i8a = a7h.F8x(this.mG3x, "xtag");
        if (G8y.tagName.toLowerCase() == "a") PZ0x = G8y;
        else if (G8y.parentNode.tagName.toLowerCase() == "a") PZ0x = G8y.parentNode;
        if (!PZ0x) return;
        k8c.bb9S(i8a,
        function(p8h) {
            a7h.v8n(p8h, "slt");
            a7h.u8m(p8h, "type", "")
        });
        if (d8f.type == "mouseout") return;
        a7h.w8o(PZ0x, "slt");
        a7h.u8m(PZ0x, "type", "mouse")
    };
    b8h.bbH5M = function() {
        var dW0x = location.hash,
        r8j = dW0x.indexOf("?"),
        bx9o = k8c.hD1x(dW0x.substring(r8j + 1));
        bx9o.s = this.eI0x.value;
        if (l8d.jy2x(bx9o.s)) return;
        if (!bx9o.type && this.bkG7z && this.bkG7z.keyword == bx9o.s) {
            bx9o.type = this.bkG7z.type
        }
        this.bkJ7C("/search/#/?" + k8c.dh0x(bx9o));
        this.eI0x.blur()
    };
    b8h.bkJ7C = function(V8N) {
        if (location.dispatch2) {
            location.dispatch2(V8N)
        } else {
            location.href = V8N
        }
    };
    M8E.QE1x.cch8Z = function() {
        var i8a = a7h.F8x(document.body, "j-suggest");
        k8c.bb9S(i8a,
        function(p8h) {
            new M8E.QE1x(p8h)
        })
    };
    M8E.QE1x.cch8Z()
})(); (function() {
    var c8g = NEJ.P,
    bn9e = NEJ.F,
    H8z = c8g("nej.ut"),
    k8c = c8g("nej.u"),
    h8b = c8g("nej.v"),
    x8p = c8g("nej.j"),
    q8i = c8g("nm.d"),
    b8h;
    q8i.ff0x({
        "mv_artist-list": {
            url: "/api/artist/mvs",
            type: "get",
            format: function(P8H) {
                return {
                    total: P8H.size || 0,
                    list: P8H.mvs || []
                }
            }
        },
        "album_artist-list": {
            url: "/api/artist/albums/{id}",
            type: "get",
            format: function(P8H) {
                return {
                    total: P8H.size || 0,
                    list: P8H.hotAlbums || []
                }
            }
        },
        "ydcailing_post-list": {
            url: "/api/cailing/all",
            type: "POST",
            format: function(P8H) {
                return P8H.result.songs
            }
        },
        "wo-list": {
            url: "/api/unicom/wo/content",
            format: function(P8H, e8e) {
                if (e8e.offset == 0) {
                    var px4B = P8H.data[0];
                    this.z8r("onfirstload", px4B);
                    P8H.data.splice(0, 1);
                    return P8H.data
                } else {
                    return P8H.data
                }
            }
        }
    });
    q8i.Dx8p = NEJ.C();
    b8h = q8i.Dx8p.O8G(q8i.hn1x);
    b8h.cs9j = function() {
        this.cx9o()
    };
    b8h.bkD7w = function() {
        var sa5f = "LOCAL_FLAG";
        return function(t8l, cbR7K) {
            var j8b = this.FD9u(sa5f, {});
            if (j8b[t8l]) {
                return true
            } else {
                if (!cbR7K) {
                    j8b[t8l] = true;
                    this.vT6N(sa5f, j8b)
                }
                return false
            }
        }
    } ()
})(); (function() {
    var c8g = NEJ.P,
    a7h = c8g("nej.e"),
    k8c = c8g("nej.u"),
    N8F = c8g("nej.ut"),
    bkC7v;
    if ( !! N8F.nI3x) return;
    N8F.nI3x = NEJ.C();
    bkC7v = N8F.nI3x.O8G(N8F.cD0x);
    bkC7v.bj9a = function() {
        var cbK7D = function(d8f) {
            d8f.matched = d8f.source == d8f.target
        };
        return function(e8e) {
            e8e.oncheck = e8e.oncheck || cbK7D;
            this.bk9b(e8e);
            this.bO9F = e8e.list;
            this.iG2x = e8e.dataset || "id";
            this.ki2x = e8e.selected || "js-selected"
        }
    } ();
    bkC7v.nv3x = function(C8u) {
        var G8y, d8f = {
            target: C8u
        };
        k8c.bb9S(this.bO9F,
        function(f8d) {
            delete d8f.matched;
            d8f.source = a7h.u8m(f8d, this.iG2x);
            this.z8r("oncheck", d8f);
            if (!d8f.matched) {
                a7h.v8n(f8d, this.ki2x)
            } else {
                G8y = f8d;
                a7h.w8o(f8d, this.ki2x)
            }
        },
        this);
        return G8y
    }
})(); (function() {
    var c8g = NEJ.P,
    Z9Q = NEJ.O,
    bn9e = NEJ.F,
    a7h = c8g("nej.e"),
    N8F = c8g("nej.ut"),
    pj4n;
    if ( !! N8F.cX0x) return;
    N8F.cX0x = NEJ.C();
    pj4n = N8F.cX0x.O8G(N8F.cD0x);
    pj4n.cs9j = function() {
        this.it2x = {};
        this.cx9o();
        this.bH9y()
    };
    pj4n.bj9a = function(e8e) {
        this.bk9b(e8e);
        this.bkz7s = e8e.umi || "";
        this.AU8M = e8e.dispatcher;
        this.Hu0x = e8e.composite || Z9Q;
        this.btE9v({
            onshow: this.eL0x.g8c(this),
            onhide: this.jR2x.g8c(this),
            onrefresh: this.es0x.g8c(this),
            onmessage: this.pZ4d.g8c(this),
            onbeforehide: this.cbb7U.g8c(this)
        })
    };
    pj4n.bA9r = function() {
        delete this.bkz7s;
        this.it2x = {};
        this.bF9w()
    };
    pj4n.tf5k = function(d8f) {
        if ( !! d8f) d8f.stopped = !0
    };
    pj4n.bH9y = bn9e;
    pj4n.eL0x = bn9e;
    pj4n.jR2x = bn9e;
    pj4n.es0x = bn9e;
    pj4n.pZ4d = bn9e;
    pj4n.cbb7U = bn9e;
    pj4n.mV3x = function(oA3x, bE9v, eZ0x) {
        this.AU8M.bkx7q({
            to: oA3x,
            mode: eZ0x || 0,
            data: bE9v,
            from: this.bkz7s
        })
    };
    pj4n.cBc3x = function(t8l, j8b) {
        this.AU8M.AP8H(t8l, {
            from: this.bkz7s,
            data: j8b
        })
    };
    pj4n.cBd3x = function() {
        this.AU8M.mi3x.apply(this.AU8M, arguments)
    };
    pj4n.caT7M = function() {
        return this.it2x
    };
    a7h.Uf2x = function() {
        if ( !! window.dispatcher) {
            dispatcher.bOo4s.apply(dispatcher, arguments)
        }
    }
})(); (function() {
    var c8g = NEJ.P,
    bn9e = NEJ.F,
    Z9Q = NEJ.O,
    a7h = c8g("nej.e"),
    k8c = c8g("nej.u"),
    N8F = c8g("nej.ut"),
    wD6x;
    if ( !! N8F.do0x) return;
    N8F.do0x = NEJ.C();
    wD6x = N8F.do0x.O8G(N8F.cX0x);
    wD6x.caO7H = function(e8e) {
        var bG9x;
        if (!bG9x) {
            var j8b = e8e.input || Z9Q;
            bG9x = a7h.B8t(j8b.parent)
        }
        if (!bG9x) {
            var j8b = e8e.data || Z9Q;
            bG9x = a7h.B8t(j8b.parent)
        }
        if (!bG9x) {
            bG9x = a7h.B8t(e8e.parent)
        }
        return bG9x
    };
    wD6x.eL0x = function(e8e) {
        var bG9x = this.caO7H(e8e);
        if ( !! bG9x && !!this.m8e) bG9x.appendChild(this.m8e);
        this.gp1x(e8e);
        this.bOm4q("onshow", e8e);
        this.es0x(e8e)
    };
    wD6x.es0x = function(e8e) {
        this.fW1x(e8e);
        this.bOm4q("onrefresh", e8e)
    };
    wD6x.jR2x = function() {
        this.kA2x();
        this.caE7x();
        a7h.mK3x(this.m8e)
    };
    wD6x.bNZ4d = function() {
        var go1x = /^onshow|onrefresh|delay$/;
        return function(ce9V) {
            return go1x.test(ce9V)
        }
    } ();
    wD6x.bNV4Z = bn9e;
    wD6x.bOm4q = function() {
        var bNQ3x = function(bx9o, e8e, ce9V, oH4L) {
            if (this.bNZ4d(oH4L)) return;
            if ( !! bx9o) ce9V += (ce9V.indexOf("?") > 1 ? "&": "?") + bx9o;
            var dc0x = this.bNV4Z(oH4L, e8e) || {};
            dc0x.location = e8e;
            dc0x.parent = this.it2x[oH4L];
            this.AU8M.hU1x(ce9V, {
                input: dc0x
            })
        };
        return function(t8l, e8e) {
            if (!e8e.nodelay) {
                if ( !! this.Hu0x.delay) return;
                var bNO3x = this.Hu0x[t8l] || Z9Q;
                if (bNO3x.delay) return
            }
            var bx9o = k8c.dh0x(e8e.param) || "";
            if (t8l == "onrefresh") {
                k8c.ey0x(this.Hu0x, bNQ3x.g8c(this, bx9o, e8e))
            }
            k8c.ey0x(bNO3x, bNQ3x.g8c(this, bx9o, e8e))
        }
    } ();
    wD6x.caE7x = function() {
        var zj7c = function(ce9V, oH4L) {
            if (!this.bNZ4d(oH4L)) this.AU8M.br9i(ce9V)
        };
        return function() {
            k8c.ey0x(this.Hu0x, zj7c, this);
            k8c.ey0x(this.Hu0x.onshow, zj7c, this);
            k8c.ey0x(this.Hu0x.onrefresh, zj7c, this)
        }
    } ()
})(); (function() {
    var c8g = NEJ.P,
    a7h = c8g("nej.e"),
    h8b = c8g("nej.v"),
    H8z = c8g("nej.ut"),
    x8p = c8g("nej.j"),
    k8c = c8g("nej.u"),
    E8w = c8g("nm.m"),
    l8d = c8g("nm.x"),
    q8i = c8g("nm.d"),
    b8h,
    K8C;
    E8w.PH0x = NEJ.C();
    b8h = E8w.PH0x.O8G(H8z.cD0x);
    b8h.cs9j = function() {
        this.cx9o();
        this.m8e = a7h.B8t("g-topbar");
        var i8a = a7h.F8x(this.m8e, "j-tflag");
        this.bks7l = i8a[0];
        this.Ei9Z = i8a[1];
        this.bNI3x = i8a[2];
        this.bkr7k = i8a[3];
        this.bZU7N = H8z.nI3x.A8s({
            list: this.bks7l.getElementsByTagName("a"),
            selected: "z-slt",
            dataset: "module"
        });
        this.bkq7j = H8z.nI3x.A8s({
            list: this.bkr7k.getElementsByTagName("a"),
            selected: "z-slt",
            dataset: "module"
        });
        this.bT9K([[this.m8e, "click", this.PA0x.g8c(this)], [this.Ei9Z, "click", this.cG0x.g8c(this)], [this.Ei9Z, "mouseout", this.bNC3x.g8c(this, 0)], [this.Ei9Z, "mouseover", this.bNC3x.g8c(this, 1)]]);
        window.scrollTopbar = this.bZv7o.g8c(this);
        window.matchNav = this.bNw3x.g8c(this);
        window.polling = this.ul5q.g8c(this);
        this.bkp7i = q8i.Dx8p.A8s();
        this.bZq7j();
        this.Hq0x();
        var bx9o = k8c.hD1x(location.href.split("?")[1]) || {};
        if (bx9o.market) {
            a7h.B8t("topbar-download-link").href = "/download?market=" + bx9o.market
        }
        var bkm7f = a7h.F8x(this.m8e, "j-showoff");
        if (bkm7f && !this.bkp7i.bkD7w("newMvSearch")) {
            a7h.v8n(bkm7f[0], "f-hide");
            window.setTimeout(function() {
                a7h.w8o(bkm7f[0], "f-hide")
            },
            5e3)
        }
    };
    b8h.ul5q = function(d8f) {
        var dW0x = l8d.Ig6a();
        if (!/^\/msg/.test(dW0x)) {
            var vx6r = 0;
            vx6r += d8f.comment;
            vx6r += d8f.forward;
            vx6r += d8f.msg;
            vx6r += d8f.notice;
            if (vx6r > 0) {
                vx6r = vx6r > 99 ? "99+": vx6r;
                this.Pn0x.innerText = vx6r;
                this.Hp0x.innerText = vx6r;
                a7h.v8n(this.Pn0x, "f-hide");
                a7h.v8n(this.Hp0x, "f-hide");
                this.Vc2x = true
            } else {
                a7h.w8o(this.Pn0x, "f-hide");
                a7h.w8o(this.Hp0x, "f-hide");
                this.Vc2x = false
            }
            var eH0x = "/at";
            if (d8f.notice) eH0x = "/notify";
            if (d8f.comment) eH0x = "/comment";
            if (d8f.msg > 0) eH0x = "/private";
            if (d8f.forward > 0) eH0x = "/at";
            this.Hp0x.parentNode.href = "/msg/#" + eH0x
        } else {
            this.Hp0x.parentNode.href = "javascript:;";
            a7h.w8o(this.Pn0x, "f-hide");
            a7h.w8o(this.Hp0x, "f-hide");
            this.Vc2x = false
        }
        var i8a = a7h.F8x(this.bks7l, "j-t");
        if (!/^\/friend/.test(dW0x)) {
            if (i8a && i8a.length) {
                a7h.Y9P(i8a[0], "display", d8f.event > 0 ? "": "none")
            }
        } else {
            a7h.Y9P(i8a[0], "display", "none")
        }
    };
    b8h.cG0x = function(d8f) {
        var f8d = h8b.U8M(d8f, "d:action");
        if (f8d) {
            switch (a7h.u8m(f8d, "action")) {
            case "login":
                h8b.cm9d(d8f);
                var t8l = a7h.u8m(f8d, "type");
                if (t8l) {
                    if (t8l == "sina" || t8l == "tencent") top.open(f8d.href);
                    else top.login(t8l == "mobile" ? 0 : 3)
                } else {
                    top.login()
                }
                break;
            case "logout":
                h8b.cm9d(d8f);
                top.logout();
                break;
            case "viewStore":
                if (!this.bkp7i.bkD7w("storeNew")) {
                    a7h.w8o(this.cBf3x, "f-vhide")
                }
                break;
            case "viewLevel":
                if (!this.bkp7i.bkD7w("levelNew")) {
                    a7h.w8o(this.cBi3x, "f-vhide")
                }
                break
            }
        }
    };
    b8h.PA0x = function(d8f) {
        var f8d = h8b.U8M(d8f, "d:action");
        if (!f8d) return;
        var W8O = a7h.u8m(f8d, "action");
        switch (W8O) {
        case "bilog":
            var bkj7c = a7h.u8m(f8d, "logAction"),
            bkh7a = a7h.u8m(f8d, "logJson");
            window.log(bkj7c, bkh7a);
            break
        }
    };
    b8h.bNC3x = function(Ho0x, d8f) {
        if (this.bkg7Z) {
            this.bkg7Z.style.display = !Ho0x ? "none": ""; (Ho0x || !this.Vc2x ? a7h.w8o: a7h.v8n).call(window, this.Pn0x, "f-hide")
        }
    };
    b8h.bZv7o = function(fS1x) {
        a7h.Y9P(this.m8e, "top", -fS1x + "px")
    };
    b8h.bNw3x = function(eH0x, bYp7i) {
        this.bZU7N.nv3x(eH0x);
        if (eH0x == "discover") {
            a7h.w8o(this.bNI3x, "f-hide");
            a7h.v8n(this.bkr7k, "f-hide");
            window.g_topBarHeight = 105;
            this.bkq7j.nv3x(bYp7i)
        } else {
            a7h.v8n(this.bNI3x, "f-hide");
            a7h.w8o(this.bkr7k, "f-hide");
            window.g_topBarHeight = 75
        }
    };
    b8h.bZq7j = function() {
        var vn6h = a7h.B8t("g_iframe");
        if (!vn6h) return;
        var gi1x = vn6h.contentWindow.document.getElementById("g_top");
        this.bNw3x(a7h.u8m(gi1x, "module"), a7h.u8m(gi1x, "sub"))
    };
    var Vo2x = {},
    bMt3x = /\/\/\w+/,
    bYk7d = {
        avatarUrl: function(a, b) {
            a = a || "";
            b = b || "";
            return a.replace(bMt3x, "") !== b.replace(bMt3x, "")
        },
        userId: true,
        nickname: true,
        reward: true,
        topic: true,
        djStatus: true
    };
    b8h.bYi7b = function(Vt2x) {
        var nd3x = k8c.dd0x(bYk7d,
        function(C8u, J8B) {
            if (k8c.gr1x(C8u)) {
                return C8u(Vt2x[J8B], Vo2x[J8B])
            } else {
                return Vt2x[J8B] !== Vo2x[J8B]
            }
        });
        Vo2x = Vt2x;
        return Vt2x[nd3x]
    };
    b8h.Hq0x = function() {
        var df0x = GUser || {},
        bYg7Z = GUserAcc || {};
        if (df0x && df0x.userId) {
            var bMm3x = NEJ.X(df0x, bYg7Z);
            if (this.bYi7b(bMm3x)) {
                a7h.dH0x(this.Ei9Z, "m-topbar-user-login", bMm3x)
            }
        } else {
            Vo2x = {};
            this.Ei9Z.innerHTML = a7h.ih1x("m-topbar-user-unlogin");
            var i8a = a7h.F8x(this.bks7l, "j-t");
            a7h.Y9P(i8a[0], "display", "none")
        }
        a7h.v8n(this.Ei9Z, "f-hide");
        this.Vc2x = false;
        var i8a = a7h.F8x(this.Ei9Z, "j-uflag");
        if (df0x && df0x.userId) {
            this.Pn0x = i8a.shift();
            this.bkg7Z = i8a.shift();
            this.Hp0x = i8a.shift()
        } else {
            this.bkg7Z = i8a.shift()
        }
    }
})(); (function() {
    var c8g = NEJ.P,
    Z9Q = NEJ.O,
    bn9e = NEJ.F,
    h8b = c8g("nej.v"),
    H8z = c8g("nej.ut"),
    q8i = c8g("nm.d"),
    b8h,
    K8C;
    q8i.ff0x({
        "polling-get": {
            type: "GET",
            url: "/api/pl/count",
            format: function(P8H) {
                h8b.z8r(q8i.rJ5O, "message", P8H)
            }
        }
    });
    q8i.rJ5O = NEJ.C();
    b8h = q8i.rJ5O.O8G(q8i.hn1x);
    b8h.VA2x = function() {
        this.cn9e("polling-get", {})
    };
    b8h.th5m = function() {
        var eE0x;
        return function() {
            if ( !! eE0x) return;
            eE0x = window.setInterval(this.VA2x.g8c(this), 1e5);
            this.VA2x()
        }
    } ();
    H8z.fE1x.A8s({
        event: "message",
        element: q8i.rJ5O
    })
})();
var io = "undefined" === typeof module ? {}: module.exports; (function() { (function(exports, global) {
        var io = exports;
        io.version = "0.9.16";
        io.protocol = 1;
        io.transports = [];
        io.j = [];
        io.sockets = {};
        io.connect = function(host, details) {
            var uri = io.util.parseUri(host),
            uuri,
            socket;
            if (global && global.location) {
                uri.protocol = uri.protocol || global.location.protocol.slice(0, -1);
                uri.host = uri.host || (global.document ? global.document.domain: global.location.hostname);
                uri.port = uri.port || global.location.port
            }
            uuri = io.util.uniqueUri(uri);
            var options = {
                host: uri.host,
                secure: "https" == uri.protocol,
                port: uri.port || ("https" == uri.protocol ? 443 : 80),
                query: uri.query || ""
            };
            io.util.merge(options, details);
            if (options["force new connection"] || !io.sockets[uuri]) {
                socket = new io.Socket(options)
            }
            if (!options["force new connection"] && socket) {
                io.sockets[uuri] = socket
            }
            socket = socket || io.sockets[uuri];
            return socket.of(uri.path.length > 1 ? uri.path: "")
        }
    })("object" === typeof module ? module.exports: this.io = {},
    this); (function(exports, global) {
        var util = exports.util = {};
        var re = /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;
        var parts = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"];
        util.parseUri = function(str) {
            var m = re.exec(str || ""),
            uri = {},
            i = 14;
            while (i--) {
                uri[parts[i]] = m[i] || ""
            }
            return uri
        };
        util.uniqueUri = function(uri) {
            var protocol = uri.protocol,
            host = uri.host,
            port = uri.port;
            if ("document" in global) {
                host = host || document.domain;
                port = port || (protocol == "https" && document.location.protocol !== "https:" ? 443 : document.location.port)
            } else {
                host = host || "localhost";
                if (!port && protocol == "https") {
                    port = 443
                }
            }
            return (protocol || "http") + "://" + host + ":" + (port || 80)
        };
        util.query = function(base, addition) {
            var query = util.chunkQuery(base || ""),
            components = [];
            util.merge(query, util.chunkQuery(addition || ""));
            for (var part in query) {
                if (query.hasOwnProperty(part)) {
                    components.push(part + "=" + query[part])
                }
            }
            return components.length ? "?" + components.join("&") : ""
        };
        util.chunkQuery = function(qs) {
            var query = {},
            params = qs.split("&"),
            i = 0,
            l = params.length,
            kv;
            for (; i < l; ++i) {
                kv = params[i].split("=");
                if (kv[0]) {
                    query[kv[0]] = kv[1]
                }
            }
            return query
        };
        var pageLoaded = false;
        util.load = function(fn) {
            if ("document" in global && document.readyState === "complete" || pageLoaded) {
                return fn()
            }
            util.on(global, "load", fn, false)
        };
        util.on = function(element, event, fn, capture) {
            if (element.attachEvent) {
                element.attachEvent("on" + event, fn)
            } else if (element.addEventListener) {
                element.addEventListener(event, fn, capture)
            }
        };
        util.request = function(xdomain) {
            if (xdomain && "undefined" != typeof XDomainRequest && !util.ua.hasCORS) {
                return new XDomainRequest
            }
            if ("undefined" != typeof XMLHttpRequest && (!xdomain || util.ua.hasCORS)) {
                return new XMLHttpRequest
            }
            if (!xdomain) {
                try {
                    return new(window[["Active"].concat("Object").join("X")])("Microsoft.XMLHTTP")
                } catch(e) {}
            }
            return null
        };
        if ("undefined" != typeof window) {
            util.load(function() {
                pageLoaded = true
            })
        }
        util.defer = function(fn) {
            if (!util.ua.webkit || "undefined" != typeof importScripts) {
                return fn()
            }
            util.load(function() {
                setTimeout(fn, 100)
            })
        };
        util.merge = function merge(target, additional, deep, lastseen) {
            var seen = lastseen || [],
            depth = typeof deep == "undefined" ? 2 : deep,
            prop;
            for (prop in additional) {
                if (additional.hasOwnProperty(prop) && util.indexOf(seen, prop) < 0) {
                    if (typeof target[prop] !== "object" || !depth) {
                        target[prop] = additional[prop];
                        seen.push(additional[prop])
                    } else {
                        util.merge(target[prop], additional[prop], depth - 1, seen)
                    }
                }
            }
            return target
        };
        util.mixin = function(ctor, ctor2) {
            util.merge(ctor.prototype, ctor2.prototype)
        };
        util.inherit = function(ctor, ctor2) {
            function f() {}
            f.prototype = ctor2.prototype;
            ctor.prototype = new f
        };
        util.isArray = Array.isArray ||
        function(obj) {
            return Object.prototype.toString.call(obj) === "[object Array]"
        };
        util.intersect = function(arr, arr2) {
            var ret = [],
            longest = arr.length > arr2.length ? arr: arr2,
            shortest = arr.length > arr2.length ? arr2: arr;
            for (var i = 0,
            l = shortest.length; i < l; i++) {
                if (~util.indexOf(longest, shortest[i])) ret.push(shortest[i])
            }
            return ret
        };
        util.indexOf = function(arr, o, i) {
            for (var j = arr.length,
            i = i < 0 ? i + j < 0 ? 0 : i + j: i || 0; i < j && arr[i] !== o; i++) {}
            return j <= i ? -1 : i
        };
        util.toArray = function(enu) {
            var arr = [];
            for (var i = 0,
            l = enu.length; i < l; i++) arr.push(enu[i]);
            return arr
        };
        util.ua = {};
        util.ua.hasCORS = "undefined" != typeof XMLHttpRequest &&
        function() {
            try {
                var a = new XMLHttpRequest
            } catch(e) {
                return false
            }
            return a.withCredentials != undefined
        } ();
        util.ua.webkit = "undefined" != typeof navigator && /webkit/i.test(navigator.userAgent);
        util.ua.iDevice = "undefined" != typeof navigator && /iPad|iPhone|iPod/i.test(navigator.userAgent)
    })("undefined" != typeof io ? io: module.exports, this); (function(exports, io) {
        exports.EventEmitter = EventEmitter;
        function EventEmitter() {}
        EventEmitter.prototype.on = function(name, fn) {
            if (!this.$events) {
                this.$events = {}
            }
            if (!this.$events[name]) {
                this.$events[name] = fn
            } else if (io.util.isArray(this.$events[name])) {
                this.$events[name].push(fn)
            } else {
                this.$events[name] = [this.$events[name], fn]
            }
            return this
        };
        EventEmitter.prototype.addListener = EventEmitter.prototype.on;
        EventEmitter.prototype.once = function(name, fn) {
            var self = this;
            function on() {
                self.removeListener(name, on);
                fn.apply(this, arguments)
            }
            on.listener = fn;
            this.on(name, on);
            return this
        };
        EventEmitter.prototype.removeListener = function(name, fn) {
            if (this.$events && this.$events[name]) {
                var list = this.$events[name];
                if (io.util.isArray(list)) {
                    var pos = -1;
                    for (var i = 0,
                    l = list.length; i < l; i++) {
                        if (list[i] === fn || list[i].listener && list[i].listener === fn) {
                            pos = i;
                            break
                        }
                    }
                    if (pos < 0) {
                        return this
                    }
                    list.splice(pos, 1);
                    if (!list.length) {
                        delete this.$events[name]
                    }
                } else if (list === fn || list.listener && list.listener === fn) {
                    delete this.$events[name]
                }
            }
            return this
        };
        EventEmitter.prototype.removeAllListeners = function(name) {
            if (name === undefined) {
                this.$events = {};
                return this
            }
            if (this.$events && this.$events[name]) {
                this.$events[name] = null
            }
            return this
        };
        EventEmitter.prototype.listeners = function(name) {
            if (!this.$events) {
                this.$events = {}
            }
            if (!this.$events[name]) {
                this.$events[name] = []
            }
            if (!io.util.isArray(this.$events[name])) {
                this.$events[name] = [this.$events[name]]
            }
            return this.$events[name]
        };
        EventEmitter.prototype.emit = function(name) {
            if (!this.$events) {
                return false
            }
            var handler = this.$events[name];
            if (!handler) {
                return false
            }
            var args = Array.prototype.slice.call(arguments, 1);
            if ("function" == typeof handler) {
                handler.apply(this, args)
            } else if (io.util.isArray(handler)) {
                var listeners = handler.slice();
                for (var i = 0,
                l = listeners.length; i < l; i++) {
                    listeners[i].apply(this, args)
                }
            } else {
                return false
            }
            return true
        }
    })("undefined" != typeof io ? io: module.exports, "undefined" != typeof io ? io: module.parent.exports); (function(exports, nativeJSON) {
        "use strict";
        if (nativeJSON && nativeJSON.parse) {
            return exports.JSON = {
                parse: nativeJSON.parse,
                stringify: nativeJSON.stringify
            }
        }
        var JSON = exports.JSON = {};
        function f(n) {
            return n < 10 ? "0" + n: n
        }
        function date(d, key) {
            return isFinite(d.valueOf()) ? d.getUTCFullYear() + "-" + f(d.getUTCMonth() + 1) + "-" + f(d.getUTCDate()) + "T" + f(d.getUTCHours()) + ":" + f(d.getUTCMinutes()) + ":" + f(d.getUTCSeconds()) + "Z": null
        }
        var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        gap, indent, meta = {
            "\b": "\\b",
            "\t": "\\t",
            "\n": "\\n",
            "\f": "\\f",
            "\r": "\\r",
            '"': '\\"',
            "\\": "\\\\"
        },
        rep;
        function quote(string) {
            escapable.lastIndex = 0;
            return escapable.test(string) ? '"' + string.replace(escapable,
            function(a) {
                var c = meta[a];
                return typeof c === "string" ? c: "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice( - 4)
            }) + '"': '"' + string + '"'
        }
        function str(key, holder) {
            var i, k, v, length, mind = gap,
            partial, value = holder[key];
            if (value instanceof Date) {
                value = date(key)
            }
            if (typeof rep === "function") {
                value = rep.call(holder, key, value)
            }
            switch (typeof value) {
            case "string":
                return quote(value);
            case "number":
                return isFinite(value) ? String(value) : "null";
            case "boolean":
            case "null":
                return String(value);
            case "object":
                if (!value) {
                    return "null"
                }
                gap += indent;
                partial = [];
                if (Object.prototype.toString.apply(value) === "[object Array]") {
                    length = value.length;
                    for (i = 0; i < length; i += 1) {
                        partial[i] = str(i, value) || "null"
                    }
                    v = partial.length === 0 ? "[]": gap ? "[\n" + gap + partial.join(",\n" + gap) + "\n" + mind + "]": "[" + partial.join(",") + "]";
                    gap = mind;
                    return v
                }
                if (rep && typeof rep === "object") {
                    length = rep.length;
                    for (i = 0; i < length; i += 1) {
                        if (typeof rep[i] === "string") {
                            k = rep[i];
                            v = str(k, value);
                            if (v) {
                                partial.push(quote(k) + (gap ? ": ": ":") + v)
                            }
                        }
                    }
                } else {
                    for (k in value) {
                        if (Object.prototype.hasOwnProperty.call(value, k)) {
                            v = str(k, value);
                            if (v) {
                                partial.push(quote(k) + (gap ? ": ": ":") + v)
                            }
                        }
                    }
                }
                v = partial.length === 0 ? "{}": gap ? "{\n" + gap + partial.join(",\n" + gap) + "\n" + mind + "}": "{" + partial.join(",") + "}";
                gap = mind;
                return v
            }
        }
        JSON.stringify = function(value, replacer, space) {
            var i;
            gap = "";
            indent = "";
            if (typeof space === "number") {
                for (i = 0; i < space; i += 1) {
                    indent += " "
                }
            } else if (typeof space === "string") {
                indent = space
            }
            rep = replacer;
            if (replacer && typeof replacer !== "function" && (typeof replacer !== "object" || typeof replacer.length !== "number")) {
                throw new Error("JSON.stringify")
            }
            return str("", {
                "": value
            })
        };
        JSON.parse = function(text, reviver) {
            var j;
            function walk(holder, key) {
                var k, v, value = holder[key];
                if (value && typeof value === "object") {
                    for (k in value) {
                        if (Object.prototype.hasOwnProperty.call(value, k)) {
                            v = walk(value, k);
                            if (v !== undefined) {
                                value[k] = v
                            } else {
                                delete value[k]
                            }
                        }
                    }
                }
                return reviver.call(holder, key, value)
            }
            text = String(text);
            cx.lastIndex = 0;
            if (cx.test(text)) {
                text = text.replace(cx,
                function(a) {
                    return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice( - 4)
                })
            }
            if (/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) {
                j = eval("(" + text + ")");
                return typeof reviver === "function" ? walk({
                    "": j
                },
                "") : j
            }
            throw new SyntaxError("JSON.parse")
        }
    })("undefined" != typeof io ? io: module.exports, typeof JSON !== "undefined" ? JSON: undefined); (function(exports, io) {
        var parser = exports.parser = {};
        var packets = parser.packets = ["disconnect", "connect", "heartbeat", "message", "json", "event", "ack", "error", "noop"];
        var reasons = parser.reasons = ["transport not supported", "client not handshaken", "unauthorized"];
        var advice = parser.advice = ["reconnect"];
        var JSON = io.JSON,
        indexOf = io.util.indexOf;
        parser.encodePacket = function(packet) {
            var type = indexOf(packets, packet.type),
            id = packet.id || "",
            endpoint = packet.endpoint || "",
            ack = packet.ack,
            data = null;
            switch (packet.type) {
            case "error":
                var reason = packet.reason ? indexOf(reasons, packet.reason) : "",
                adv = packet.advice ? indexOf(advice, packet.advice) : "";
                if (reason !== "" || adv !== "") data = reason + (adv !== "" ? "+" + adv: "");
                break;
            case "message":
                if (packet.data !== "") data = packet.data;
                break;
            case "event":
                var ev = {
                    name: packet.name
                };
                if (packet.args && packet.args.length) {
                    ev.args = packet.args
                }
                data = JSON.stringify(ev);
                break;
            case "json":
                data = JSON.stringify(packet.data);
                break;
            case "connect":
                if (packet.qs) data = packet.qs;
                break;
            case "ack":
                data = packet.ackId + (packet.args && packet.args.length ? "+" + JSON.stringify(packet.args) : "");
                break
            }
            var encoded = [type, id + (ack == "data" ? "+": ""), endpoint];
            if (data !== null && data !== undefined) encoded.push(data);
            return encoded.join(":")
        };
        parser.encodePayload = function(packets) {
            var decoded = "";
            if (packets.length == 1) return packets[0];
            for (var i = 0,
            l = packets.length; i < l; i++) {
                var packet = packets[i];
                decoded += "�" + packet.length + "�" + packets[i]
            }
            return decoded
        };
        var regexp = /([^:]+):([0-9]+)?(\+)?:([^:]+)?:?([\s\S]*)?/;
        parser.decodePacket = function(data) {
            var pieces = data.match(regexp);
            if (!pieces) return {};
            var id = pieces[2] || "",
            data = pieces[5] || "",
            packet = {
                type: packets[pieces[1]],
                endpoint: pieces[4] || ""
            };
            if (id) {
                packet.id = id;
                if (pieces[3]) packet.ack = "data";
                else packet.ack = true
            }
            switch (packet.type) {
            case "error":
                var pieces = data.split("+");
                packet.reason = reasons[pieces[0]] || "";
                packet.advice = advice[pieces[1]] || "";
                break;
            case "message":
                packet.data = data || "";
                break;
            case "event":
                try {
                    var opts = JSON.parse(data);
                    packet.name = opts.name;
                    packet.args = opts.args
                } catch(e) {}
                packet.args = packet.args || [];
                break;
            case "json":
                try {
                    packet.data = JSON.parse(data)
                } catch(e) {}
                break;
            case "connect":
                packet.qs = data || "";
                break;
            case "ack":
                var pieces = data.match(/^([0-9]+)(\+)?(.*)/);
                if (pieces) {
                    packet.ackId = pieces[1];
                    packet.args = [];
                    if (pieces[3]) {
                        try {
                            packet.args = pieces[3] ? JSON.parse(pieces[3]) : []
                        } catch(e) {}
                    }
                }
                break;
            case "disconnect":
            case "heartbeat":
                break
            }
            return packet
        };
        parser.decodePayload = function(data) {
            if (data.charAt(0) == "�") {
                var ret = [];
                for (var i = 1,
                length = ""; i < data.length; i++) {
                    if (data.charAt(i) == "�") {
                        ret.push(parser.decodePacket(data.substr(i + 1).substr(0, length)));
                        i += Number(length) + 1;
                        length = ""
                    } else {
                        length += data.charAt(i)
                    }
                }
                return ret
            } else {
                return [parser.decodePacket(data)]
            }
        }
    })("undefined" != typeof io ? io: module.exports, "undefined" != typeof io ? io: module.parent.exports); (function(exports, io) {
        exports.Transport = Transport;
        function Transport(socket, sessid) {
            this.socket = socket;
            this.sessid = sessid
        }
        io.util.mixin(Transport, io.EventEmitter);
        Transport.prototype.heartbeats = function() {
            return true
        };
        Transport.prototype.onData = function(data) {
            this.clearCloseTimeout();
            if (this.socket.connected || this.socket.connecting || this.socket.reconnecting) {
                this.setCloseTimeout()
            }
            if (data !== "") {
                var msgs = io.parser.decodePayload(data);
                if (msgs && msgs.length) {
                    for (var i = 0,
                    l = msgs.length; i < l; i++) {
                        this.onPacket(msgs[i])
                    }
                }
            }
            return this
        };
        Transport.prototype.onPacket = function(packet) {
            this.socket.setHeartbeatTimeout();
            if (packet.type == "heartbeat") {
                return this.onHeartbeat()
            }
            if (packet.type == "connect" && packet.endpoint == "") {
                this.onConnect()
            }
            if (packet.type == "error" && packet.advice == "reconnect") {
                this.isOpen = false
            }
            this.socket.onPacket(packet);
            return this
        };
        Transport.prototype.setCloseTimeout = function() {
            if (!this.closeTimeout) {
                var self = this;
                this.closeTimeout = setTimeout(function() {
                    self.onDisconnect()
                },
                this.socket.closeTimeout)
            }
        };
        Transport.prototype.onDisconnect = function() {
            if (this.isOpen) this.close();
            this.clearTimeouts();
            this.socket.onDisconnect();
            return this
        };
        Transport.prototype.onConnect = function() {
            this.socket.onConnect();
            return this
        };
        Transport.prototype.clearCloseTimeout = function() {
            if (this.closeTimeout) {
                clearTimeout(this.closeTimeout);
                this.closeTimeout = null
            }
        };
        Transport.prototype.clearTimeouts = function() {
            this.clearCloseTimeout();
            if (this.reopenTimeout) {
                clearTimeout(this.reopenTimeout)
            }
        };
        Transport.prototype.packet = function(packet) {
            this.send(io.parser.encodePacket(packet))
        };
        Transport.prototype.onHeartbeat = function(heartbeat) {
            this.packet({
                type: "heartbeat"
            })
        };
        Transport.prototype.onOpen = function() {
            this.isOpen = true;
            this.clearCloseTimeout();
            this.socket.onOpen()
        };
        Transport.prototype.onClose = function() {
            var self = this;
            this.isOpen = false;
            this.socket.onClose();
            this.onDisconnect()
        };
        Transport.prototype.prepareUrl = function() {
            var options = this.socket.options;
            return this.scheme() + "://" + options.host + ":" + options.port + "/" + options.resource + "/" + io.protocol + "/" + this.name + "/" + this.sessid
        };
        Transport.prototype.ready = function(socket, fn) {
            fn.call(this)
        }
    })("undefined" != typeof io ? io: module.exports, "undefined" != typeof io ? io: module.parent.exports); (function(exports, io, global) {
        exports.Socket = Socket;
        function Socket(options) {
            this.options = {
                port: 80,
                secure: false,
                document: "document" in global ? document: false,
                resource: "socket.io",
                transports: io.transports,
                "connect timeout": 1e4,
                "try multiple transports": true,
                reconnect: true,
                "reconnection delay": 500,
                "reconnection limit": Infinity,
                "reopen delay": 3e3,
                "max reconnection attempts": 10,
                "sync disconnect on unload": false,
                "auto connect": true,
                "flash policy port": 10843,
                manualFlush: false
            };
            io.util.merge(this.options, options);
            this.connected = false;
            this.open = false;
            this.connecting = false;
            this.reconnecting = false;
            this.namespaces = {};
            this.buffer = [];
            this.doBuffer = false;
            if (this.options["sync disconnect on unload"] && (!this.isXDomain() || io.util.ua.hasCORS)) {
                var self = this;
                io.util.on(global, "beforeunload",
                function() {
                    self.disconnectSync()
                },
                false)
            }
            if (this.options["auto connect"]) {
                this.connect()
            }
        }
        io.util.mixin(Socket, io.EventEmitter);
        Socket.prototype.of = function(name) {
            if (!this.namespaces[name]) {
                this.namespaces[name] = new io.SocketNamespace(this, name);
                if (name !== "") {
                    this.namespaces[name].packet({
                        type: "connect"
                    })
                }
            }
            return this.namespaces[name]
        };
        Socket.prototype.publish = function() {
            this.emit.apply(this, arguments);
            var nsp;
            for (var i in this.namespaces) {
                if (this.namespaces.hasOwnProperty(i)) {
                    nsp = this.of(i);
                    nsp.$emit.apply(nsp, arguments)
                }
            }
        };
        function empty() {}
        Socket.prototype.handshake = function(fn) {
            var self = this,
            options = this.options;
            function complete(data) {
                if (data instanceof Error) {
                    self.connecting = false;
                    self.onError(data.message)
                } else {
                    fn.apply(null, data.split(":"))
                }
            }
            var url = ["http" + (options.secure ? "s": "") + ":/", options.host + ":" + options.port, options.resource, io.protocol, io.util.query(this.options.query, "t=" + +(new Date))].join("/");
            if (this.isXDomain() && !io.util.ua.hasCORS) {
                var insertAt = document.getElementsByTagName("script")[0],
                script = document.createElement("script");
                script.src = url + "&jsonp=" + io.j.length;
                insertAt.parentNode.insertBefore(script, insertAt);
                io.j.push(function(data) {
                    complete(data);
                    script.parentNode.removeChild(script)
                })
            } else {
                var xhr = io.util.request();
                xhr.open("GET", url, true);
                if (this.isXDomain()) {
                    xhr.withCredentials = true
                }
                xhr.onreadystatechange = function() {
                    if (xhr.readyState == 4) {
                        xhr.onreadystatechange = empty;
                        if (xhr.status == 200) {
                            complete(xhr.responseText)
                        } else if (xhr.status == 403) {
                            self.onError(xhr.responseText)
                        } else {
                            self.connecting = false; ! self.reconnecting && self.onError(xhr.responseText)
                        }
                    }
                };
                xhr.send(null)
            }
        };
        Socket.prototype.getTransport = function(override) {
            var transports = override || this.transports,
            match;
            for (var i = 0,
            transport; transport = transports[i]; i++) {
                if (io.Transport[transport] && io.Transport[transport].check(this) && (!this.isXDomain() || io.Transport[transport].xdomainCheck(this))) {
                    return new io.Transport[transport](this, this.sessionid)
                }
            }
            return null
        };
        Socket.prototype.connect = function(fn) {
            if (this.connecting && this.transports != "jsonp-polling") {
                return this
            }
            var self = this;
            self.connecting = true;
            this.handshake(function(sid, heartbeat, close, transports) {
                self.sessionid = sid;
                self.closeTimeout = close * 1e3;
                self.heartbeatTimeout = heartbeat * 1e3;
                var check = function() {
                    return "WebSocket" in global && !("__addTask" in WebSocket) || "MozWebSocket" in global
                };
                if (!check()) {
                    transports = "jsonp-polling"
                }
                if (!self.transports) self.transports = self.origTransports = transports ? io.util.intersect(transports.split(","), self.options.transports) : self.options.transports;
                self.setHeartbeatTimeout();
                function connect(transports) {
                    if (self.transport) self.transport.clearTimeouts();
                    self.transport = self.getTransport(transports);
                    if (!self.transport) return self.publish("connect_failed");
                    self.transport.ready(self,
                    function() {
                        self.connecting = true;
                        self.publish("connecting", self.transport.name);
                        self.transport.open();
                        if (self.options["connect timeout"]) {
                            self.connectTimeoutTimer = setTimeout(function() {
                                if (!self.connected) {
                                    self.connecting = false;
                                    if (self.options["try multiple transports"]) {
                                        var remaining = self.transports;
                                        while (remaining.length > 0 && remaining.splice(0, 1)[0] != self.transport.name) {}
                                        if (remaining.length) {
                                            connect(remaining)
                                        } else {
                                            self.publish("connect_failed")
                                        }
                                    }
                                }
                            },
                            self.options["connect timeout"])
                        }
                    })
                }
                connect(self.transports);
                self.once("connect",
                function() {
                    clearTimeout(self.connectTimeoutTimer);
                    fn && typeof fn == "function" && fn()
                })
            });
            return this
        };
        Socket.prototype.setHeartbeatTimeout = function() {
            clearTimeout(this.heartbeatTimeoutTimer);
            if (this.transport && !this.transport.heartbeats()) return;
            var self = this;
            this.heartbeatTimeoutTimer = setTimeout(function() {
                self.transport.onClose()
            },
            this.heartbeatTimeout)
        };
        Socket.prototype.packet = function(data) {
            if (this.connected && !this.doBuffer) {
                this.transport.packet(data)
            } else {
                this.buffer.push(data)
            }
            return this
        };
        Socket.prototype.setBuffer = function(v) {
            this.doBuffer = v;
            if (!v && this.connected && this.buffer.length) {
                if (!this.options["manualFlush"]) {
                    this.flushBuffer()
                }
            }
        };
        Socket.prototype.flushBuffer = function() {
            this.transport.payload(this.buffer);
            this.buffer = []
        };
        Socket.prototype.disconnect = function() {
            if (this.connected || this.connecting) {
                if (this.open) {
                    this.of("").packet({
                        type: "disconnect"
                    })
                }
                this.onDisconnect("booted")
            }
            return this
        };
        Socket.prototype.disconnectSync = function() {
            var xhr = io.util.request();
            var uri = ["http" + (this.options.secure ? "s": "") + ":/", this.options.host + ":" + this.options.port, this.options.resource, io.protocol, "", this.sessionid].join("/") + "/?disconnect=1";
            xhr.open("GET", uri, false);
            xhr.send(null);
            this.onDisconnect("booted")
        };
        Socket.prototype.isXDomain = function() {
            var port = global.location.port || ("https:" == global.location.protocol ? 443 : 80);
            return this.options.host !== global.location.hostname || this.options.port != port
        };
        Socket.prototype.onConnect = function() {
            if (!this.connected) {
                this.connected = true;
                this.connecting = false;
                if (!this.doBuffer) {
                    this.setBuffer(false)
                }
                this.emit("connect")
            }
        };
        Socket.prototype.onOpen = function() {
            this.open = true
        };
        Socket.prototype.onClose = function() {
            this.open = false;
            clearTimeout(this.heartbeatTimeoutTimer)
        };
        Socket.prototype.onPacket = function(packet) {
            this.of(packet.endpoint).onPacket(packet)
        };
        Socket.prototype.onError = function(err) {
            if (err && err.advice) {
                if (err.advice === "reconnect" && (this.connected || this.connecting)) {
                    this.disconnect();
                    if (this.options.reconnect) {
                        this.reconnect()
                    }
                }
            }
            this.publish("error", err && err.reason ? err.reason: err)
        };
        Socket.prototype.onDisconnect = function(reason) {
            var wasConnected = this.connected,
            wasConnecting = this.connecting;
            this.connected = false;
            this.connecting = false;
            this.open = false;
            if (wasConnected || wasConnecting) {
                this.transport.close();
                this.transport.clearTimeouts();
                if (wasConnected) {
                    this.publish("disconnect", reason);
                    if ("booted" != reason && this.options.reconnect && !this.reconnecting) {
                        this.reconnect()
                    }
                }
            }
        };
        Socket.prototype.reconnect = function() {
            this.reconnecting = true;
            this.reconnectionAttempts = 0;
            this.reconnectionDelay = this.options["reconnection delay"];
            var self = this,
            maxAttempts = this.options["max reconnection attempts"],
            tryMultiple = this.options["try multiple transports"],
            limit = this.options["reconnection limit"];
            function reset() {
                if (self.connected) {
                    for (var i in self.namespaces) {
                        if (self.namespaces.hasOwnProperty(i) && "" !== i) {
                            self.namespaces[i].packet({
                                type: "connect"
                            })
                        }
                    }
                    self.publish("reconnect", self.transport.name, self.reconnectionAttempts)
                }
                clearTimeout(self.reconnectionTimer);
                self.removeListener("connect_failed", maybeReconnect);
                self.removeListener("connect", maybeReconnect);
                self.reconnecting = false;
                delete self.reconnectionAttempts;
                delete self.reconnectionDelay;
                delete self.reconnectionTimer;
                delete self.redoTransports;
                self.options["try multiple transports"] = tryMultiple
            }
            function maybeReconnect() {
                if (!self.reconnecting) {
                    return
                }
                if (self.connected) {
                    return reset()
                }
                if (self.connecting && self.reconnecting && self.transports != "jsonp-polling") {
                    return self.reconnectionTimer = setTimeout(maybeReconnect, 1e3)
                }
                if (self.reconnectionAttempts++>=maxAttempts) {
                    if (!self.redoTransports) {
                        self.on("connect_failed", maybeReconnect);
                        self.options["try multiple transports"] = true;
                        self.transports = self.origTransports;
                        self.transport = self.getTransport();
                        self.redoTransports = true;
                        self.connect()
                    } else {
                        self.publish("reconnect_failed");
                        reset()
                    }
                } else {
                    if (self.reconnectionDelay < limit) {
                        self.reconnectionDelay *= 2
                    }
                    self.connect();
                    self.publish("reconnecting", self.reconnectionDelay, self.reconnectionAttempts);
                    self.reconnectionTimer = setTimeout(maybeReconnect, self.reconnectionDelay)
                }
            }
            this.options["try multiple transports"] = false;
            this.reconnectionTimer = setTimeout(maybeReconnect, this.reconnectionDelay);
            this.on("connect", maybeReconnect)
        }
    })("undefined" != typeof io ? io: module.exports, "undefined" != typeof io ? io: module.parent.exports, this); (function(exports, io) {
        exports.SocketNamespace = SocketNamespace;
        function SocketNamespace(socket, name) {
            this.socket = socket;
            this.name = name || "";
            this.flags = {};
            this.json = new Flag(this, "json");
            this.ackPackets = 0;
            this.acks = {}
        }
        io.util.mixin(SocketNamespace, io.EventEmitter);
        SocketNamespace.prototype.$emit = io.EventEmitter.prototype.emit;
        SocketNamespace.prototype.of = function() {
            return this.socket.of.apply(this.socket, arguments)
        };
        SocketNamespace.prototype.packet = function(packet) {
            packet.endpoint = this.name;
            this.socket.packet(packet);
            this.flags = {};
            return this
        };
        SocketNamespace.prototype.send = function(data, fn) {
            var packet = {
                type: this.flags.json ? "json": "message",
                data: data
            };
            if ("function" == typeof fn) {
                packet.id = ++this.ackPackets;
                packet.ack = true;
                this.acks[packet.id] = fn
            }
            return this.packet(packet)
        };
        SocketNamespace.prototype.emit = function(name) {
            var args = Array.prototype.slice.call(arguments, 1),
            lastArg = args[args.length - 1],
            packet = {
                type: "event",
                name: name
            };
            if ("function" == typeof lastArg) {
                packet.id = ++this.ackPackets;
                packet.ack = "data";
                this.acks[packet.id] = lastArg;
                args = args.slice(0, args.length - 1)
            }
            packet.args = args;
            return this.packet(packet)
        };
        SocketNamespace.prototype.disconnect = function() {
            if (this.name === "") {
                this.socket.disconnect()
            } else {
                this.packet({
                    type: "disconnect"
                });
                this.$emit("disconnect")
            }
            return this
        };
        SocketNamespace.prototype.onPacket = function(packet) {
            var self = this;
            function ack() {
                self.packet({
                    type: "ack",
                    args: io.util.toArray(arguments),
                    ackId: packet.id
                })
            }
            switch (packet.type) {
            case "connect":
                this.$emit("connect");
                break;
            case "disconnect":
                if (this.name === "") {
                    this.socket.onDisconnect(packet.reason || "booted")
                } else {
                    this.$emit("disconnect", packet.reason)
                }
                break;
            case "message":
            case "json":
                var params = ["message", packet.data];
                if (packet.ack == "data") {
                    params.push(ack)
                } else if (packet.ack) {
                    this.packet({
                        type: "ack",
                        ackId: packet.id
                    })
                }
                this.$emit.apply(this, params);
                break;
            case "event":
                var params = [packet.name].concat(packet.args);
                if (packet.ack == "data") params.push(ack);
                this.$emit.apply(this, params);
                break;
            case "ack":
                if (this.acks[packet.ackId]) {
                    this.acks[packet.ackId].apply(this, packet.args);
                    delete this.acks[packet.ackId]
                }
                break;
            case "error":
                if (packet.advice) {
                    this.socket.onError(packet)
                } else {
                    if (packet.reason == "unauthorized") {
                        this.$emit("connect_failed", packet.reason)
                    } else {
                        this.$emit("error", packet.reason)
                    }
                }
                break
            }
        };
        function Flag(nsp, name) {
            this.namespace = nsp;
            this.name = name
        }
        Flag.prototype.send = function() {
            this.namespace.flags[this.name] = true;
            this.namespace.send.apply(this.namespace, arguments)
        };
        Flag.prototype.emit = function() {
            this.namespace.flags[this.name] = true;
            this.namespace.emit.apply(this.namespace, arguments)
        }
    })("undefined" != typeof io ? io: module.exports, "undefined" != typeof io ? io: module.parent.exports); (function(exports, io, global) {
        exports.websocket = WS;
        function WS(socket) {
            io.Transport.apply(this, arguments)
        }
        io.util.inherit(WS, io.Transport);
        WS.prototype.name = "websocket";
        WS.prototype.open = function() {
            var query = io.util.query(this.socket.options.query),
            self = this,
            Socket;
            if (!Socket) {
                Socket = global.MozWebSocket || global.WebSocket
            }
            this.websocket = new Socket(this.prepareUrl() + query);
            this.websocket.onopen = function() {
                self.onOpen();
                self.socket.setBuffer(false)
            };
            this.websocket.onmessage = function(ev) {
                self.onData(ev.data)
            };
            this.websocket.onclose = function() {
                self.onClose();
                self.socket.setBuffer(true)
            };
            this.websocket.onerror = function(e) {
                self.onError(e)
            };
            return this
        };
        if (io.util.ua.iDevice) {
            WS.prototype.send = function(data) {
                var self = this;
                setTimeout(function() {
                    self.websocket.send(data)
                },
                0);
                return this
            }
        } else {
            WS.prototype.send = function(data) {
                this.websocket.send(data);
                return this
            }
        }
        WS.prototype.payload = function(arr) {
            for (var i = 0,
            l = arr.length; i < l; i++) {
                this.packet(arr[i])
            }
            return this
        };
        WS.prototype.close = function() {
            this.websocket.close();
            return this
        };
        WS.prototype.onError = function(e) {
            this.socket.onError(e)
        };
        WS.prototype.scheme = function() {
            return this.socket.options.secure ? "wss": "ws"
        };
        WS.check = function() {
            return "WebSocket" in global && !("__addTask" in WebSocket) || "MozWebSocket" in global
        };
        WS.xdomainCheck = function() {
            return true
        };
        io.transports.push("websocket")
    })("undefined" != typeof io ? io.Transport: module.exports, "undefined" != typeof io ? io: module.parent.exports, this); (function(exports, io) {
        exports.flashsocket = Flashsocket;
        function Flashsocket() {
            io.Transport.websocket.apply(this, arguments)
        }
        io.util.inherit(Flashsocket, io.Transport.websocket);
        Flashsocket.prototype.name = "flashsocket";
        Flashsocket.prototype.open = function() {
            var self = this,
            args = arguments;
            WebSocket.VC2x(function() {
                io.Transport.websocket.prototype.open.apply(self, args)
            });
            return this
        };
        Flashsocket.prototype.send = function() {
            var self = this,
            args = arguments;
            WebSocket.VC2x(function() {
                io.Transport.websocket.prototype.send.apply(self, args)
            });
            return this
        };
        Flashsocket.prototype.close = function() {
            WebSocket.OC0x.length = 0;
            io.Transport.websocket.prototype.close.call(this);
            return this
        };
        Flashsocket.prototype.ready = function(socket, fn) {
            function init() {
                var options = socket.options,
                port = options["flash policy port"],
                path = ["http" + (options.secure ? "s": "") + ":/", options.host + ":" + options.port, options.resource, "static/flashsocket", "WebSocketMain" + (socket.isXDomain() ? "Insecure": "") + ".swf"];
                if (!Flashsocket.loaded) {
                    if (typeof WEB_SOCKET_SWF_LOCATION === "undefined") {
                        WEB_SOCKET_SWF_LOCATION = path.join("/")
                    }
                    if (port !== 843) {
                        WebSocket.loadFlashPolicyFile("xmlsocket://" + options.host + ":" + port)
                    }
                    WebSocket.bkd7W();
                    Flashsocket.loaded = true
                }
                fn.call(self)
            }
            var self = this;
            if (document.body) return init();
            io.util.load(init)
        };
        Flashsocket.check = function() {
            if (typeof WebSocket == "undefined" || !("__initialize" in WebSocket) || !swfobject) return false;
            return swfobject.getFlashPlayerVersion().major >= 10
        };
        Flashsocket.xdomainCheck = function() {
            return true
        };
        if (typeof window != "undefined") {
            WEB_SOCKET_DISABLE_AUTO_INITIALIZATION = true
        }
        io.transports.push("flashsocket")
    })("undefined" != typeof io ? io.Transport: module.exports, "undefined" != typeof io ? io: module.parent.exports);
    if ("undefined" != typeof window) {
        var swfobject = function() {
            var D = "undefined",
            r = "object",
            S = "Shockwave Flash",
            W = "ShockwaveFlash.ShockwaveFlash",
            q = "application/x-shockwave-flash",
            R = "SWFObjectExprInst",
            x = "onreadystatechange",
            O = window,
            j = document,
            t = navigator,
            T = false,
            U = [h],
            o = [],
            N = [],
            I = [],
            l,
            Q,
            E,
            B,
            J = false,
            a = false,
            n,
            G,
            m = true,
            M = function() {
                var aa = typeof j.getElementById != D && typeof j.getElementsByTagName != D && typeof j.createElement != D,
                ah = t.userAgent.toLowerCase(),
                Y = t.platform.toLowerCase(),
                ae = Y ? /win/.test(Y) : /win/.test(ah),
                ac = Y ? /mac/.test(Y) : /mac/.test(ah),
                af = /webkit/.test(ah) ? parseFloat(ah.replace(/^.*webkit\/(\d+(\.\d+)?).*$/, "$1")) : false,
                X = !+"1",
                ag = [0, 0, 0],
                ab = null;
                if (typeof t.plugins != D && typeof t.plugins[S] == r) {
                    ab = t.plugins[S].description;
                    if (ab && !(typeof t.mimeTypes != D && t.mimeTypes[q] && !t.mimeTypes[q].enabledPlugin)) {
                        T = true;
                        X = false;
                        ab = ab.replace(/^.*\s+(\S+\s+\S+$)/, "$1");
                        ag[0] = parseInt(ab.replace(/^(.*)\..*$/, "$1"), 10);
                        ag[1] = parseInt(ab.replace(/^.*\.(.*)\s.*$/, "$1"), 10);
                        ag[2] = /[a-zA-Z]/.test(ab) ? parseInt(ab.replace(/^.*[a-zA-Z]+(.*)$/, "$1"), 10) : 0
                    }
                } else {
                    if (typeof O[["Active"].concat("Object").join("X")] != D) {
                        try {
                            var ad = new(window[["Active"].concat("Object").join("X")])(W);
                            if (ad) {
                                ab = ad.GetVariable("$version");
                                if (ab) {
                                    X = true;
                                    ab = ab.split(" ")[1].split(",");
                                    ag = [parseInt(ab[0], 10), parseInt(ab[1], 10), parseInt(ab[2], 10)]
                                }
                            }
                        } catch(Z) {}
                    }
                }
                return {
                    w3: aa,
                    pv: ag,
                    wk: af,
                    ie: X,
                    win: ae,
                    mac: ac
                }
            } (),
            k = function() {
                if (!M.w3) {
                    return
                }
                if (typeof j.readyState != D && j.readyState == "complete" || typeof j.readyState == D && (j.getElementsByTagName("body")[0] || j.body)) {
                    f()
                }
                if (!J) {
                    if (typeof j.addEventListener != D) {
                        j.addEventListener("DOMContentLoaded", f, false)
                    }
                    if (M.ie && M.win) {
                        j.attachEvent(x,
                        function() {
                            if (j.readyState == "complete") {
                                j.detachEvent(x, arguments.callee);
                                f()
                            }
                        });
                        if (O == top) { (function() {
                                if (J) {
                                    return
                                }
                                try {
                                    j.documentElement.doScroll("left")
                                } catch(X) {
                                    setTimeout(arguments.callee, 0);
                                    return
                                }
                                f()
                            })()
                        }
                    }
                    if (M.wk) { (function() {
                            if (J) {
                                return
                            }
                            if (!/loaded|complete/.test(j.readyState)) {
                                setTimeout(arguments.callee, 0);
                                return
                            }
                            f()
                        })()
                    }
                    s(f)
                }
            } ();
            function f() {
                if (J) {
                    return
                }
                try {
                    var Z = j.getElementsByTagName("body")[0].appendChild(C("span"));
                    Z.parentNode.removeChild(Z)
                } catch(aa) {
                    return
                }
                J = true;
                var X = U.length;
                for (var Y = 0; Y < X; Y++) {
                    U[Y]()
                }
            }
            function K(X) {
                if (J) {
                    X()
                } else {
                    U[U.length] = X
                }
            }
            function s(Y) {
                if (typeof O.addEventListener != D) {
                    O.addEventListener("load", Y, false)
                } else {
                    if (typeof j.addEventListener != D) {
                        j.addEventListener("load", Y, false)
                    } else {
                        if (typeof O.attachEvent != D) {
                            i(O, "onload", Y)
                        } else {
                            if (typeof O.onload == "function") {
                                var X = O.onload;
                                O.onload = function() {
                                    X();
                                    Y()
                                }
                            } else {
                                O.onload = Y
                            }
                        }
                    }
                }
            }
            function h() {
                if (T) {
                    V()
                } else {
                    H()
                }
            }
            function V() {
                var X = j.getElementsByTagName("body")[0];
                var aa = C(r);
                aa.setAttribute("type", q);
                aa.style.visibility = "hidden";
                var Z = X.appendChild(aa);
                if (Z) {
                    var Y = 0; (function() {
                        if (typeof Z.GetVariable != D) {
                            var ab = Z.GetVariable("$version");
                            if (ab) {
                                ab = ab.split(" ")[1].split(",");
                                M.pv = [parseInt(ab[0], 10), parseInt(ab[1], 10), parseInt(ab[2], 10)]
                            }
                        } else {
                            if (Y < 10) {
                                Y++;
                                setTimeout(arguments.callee, 10);
                                return
                            }
                        }
                        X.removeChild(aa);
                        Z = null;
                        H()
                    })()
                } else {
                    H()
                }
            }
            function H() {
                var ag = o.length;
                if (ag > 0) {
                    for (var af = 0; af < ag; af++) {
                        var Y = o[af].id;
                        var ab = o[af].callbackFn;
                        var aa = {
                            success: false,
                            id: Y
                        };
                        if (M.pv[0] > 0) {
                            var ae = c(Y);
                            if (ae) {
                                if (F(o[af].swfVersion) && !(M.wk && M.wk < 312)) {
                                    w(Y, true);
                                    if (ab) {
                                        aa.success = true;
                                        aa.ref = z(Y);
                                        ab(aa)
                                    }
                                } else {
                                    if (o[af].expressInstall && A()) {
                                        var ai = {};
                                        ai.data = o[af].expressInstall;
                                        ai.width = ae.getAttribute("width") || "0";
                                        ai.height = ae.getAttribute("height") || "0";
                                        if (ae.getAttribute("class")) {
                                            ai.styleclass = ae.getAttribute("class")
                                        }
                                        if (ae.getAttribute("align")) {
                                            ai.align = ae.getAttribute("align")
                                        }
                                        var ah = {};
                                        var X = ae.getElementsByTagName("param");
                                        var ac = X.length;
                                        for (var ad = 0; ad < ac; ad++) {
                                            if (X[ad].getAttribute("name").toLowerCase() != "movie") {
                                                ah[X[ad].getAttribute("name")] = X[ad].getAttribute("value")
                                            }
                                        }
                                        P(ai, ah, Y, ab)
                                    } else {
                                        p(ae);
                                        if (ab) {
                                            ab(aa)
                                        }
                                    }
                                }
                            }
                        } else {
                            w(Y, true);
                            if (ab) {
                                var Z = z(Y);
                                if (Z && typeof Z.SetVariable != D) {
                                    aa.success = true;
                                    aa.ref = Z
                                }
                                ab(aa)
                            }
                        }
                    }
                }
            }
            function z(aa) {
                var X = null;
                var Y = c(aa);
                if (Y && Y.nodeName == "OBJECT") {
                    if (typeof Y.SetVariable != D) {
                        X = Y
                    } else {
                        var Z = Y.getElementsByTagName(r)[0];
                        if (Z) {
                            X = Z
                        }
                    }
                }
                return X
            }
            function A() {
                return ! a && F("6.0.65") && (M.win || M.mac) && !(M.wk && M.wk < 312)
            }
            function P(aa, ab, X, Z) {
                a = true;
                E = Z || null;
                B = {
                    success: false,
                    id: X
                };
                var ae = c(X);
                if (ae) {
                    if (ae.nodeName == "OBJECT") {
                        l = g(ae);
                        Q = null
                    } else {
                        l = ae;
                        Q = X
                    }
                    aa.id = R;
                    if (typeof aa.width == D || !/%$/.test(aa.width) && parseInt(aa.width, 10) < 310) {
                        aa.width = "310"
                    }
                    if (typeof aa.height == D || !/%$/.test(aa.height) && parseInt(aa.height, 10) < 137) {
                        aa.height = "137"
                    }
                    j.title = j.title.slice(0, 47) + " - Flash Player Installation";
                    var ad = M.ie && M.win ? ["Active"].concat("").join("X") : "PlugIn",
                    ac = "MMredirectURL=" + O.location.toString().replace(/&/g, "%26") + "&MMplayerType=" + ad + "&MMdoctitle=" + j.title;
                    if (typeof ab.flashvars != D) {
                        ab.flashvars += "&" + ac
                    } else {
                        ab.flashvars = ac
                    }
                    if (M.ie && M.win && ae.readyState != 4) {
                        var Y = C("div");
                        X += "SWFObjectNew";
                        Y.setAttribute("id", X);
                        ae.parentNode.insertBefore(Y, ae);
                        ae.style.display = "none"; (function() {
                            if (ae.readyState == 4) {
                                ae.parentNode.removeChild(ae)
                            } else {
                                setTimeout(arguments.callee, 10)
                            }
                        })()
                    }
                    u(aa, ab, X)
                }
            }
            function p(Y) {
                if (M.ie && M.win && Y.readyState != 4) {
                    var X = C("div");
                    Y.parentNode.insertBefore(X, Y);
                    X.parentNode.replaceChild(g(Y), X);
                    Y.style.display = "none"; (function() {
                        if (Y.readyState == 4) {
                            Y.parentNode.removeChild(Y)
                        } else {
                            setTimeout(arguments.callee, 10)
                        }
                    })()
                } else {
                    Y.parentNode.replaceChild(g(Y), Y)
                }
            }
            function g(ab) {
                var aa = C("div");
                if (M.win && M.ie) {
                    aa.innerHTML = ab.innerHTML
                } else {
                    var Y = ab.getElementsByTagName(r)[0];
                    if (Y) {
                        var ad = Y.childNodes;
                        if (ad) {
                            var X = ad.length;
                            for (var Z = 0; Z < X; Z++) {
                                if (! (ad[Z].nodeType == 1 && ad[Z].nodeName == "PARAM") && !(ad[Z].nodeType == 8)) {
                                    aa.appendChild(ad[Z].cloneNode(true))
                                }
                            }
                        }
                    }
                }
                return aa
            }
            function u(ai, ag, Y) {
                var X, aa = c(Y);
                if (M.wk && M.wk < 312) {
                    return X
                }
                if (aa) {
                    if (typeof ai.id == D) {
                        ai.id = Y
                    }
                    if (M.ie && M.win) {
                        var ah = "";
                        for (var ae in ai) {
                            if (ai[ae] != Object.prototype[ae]) {
                                if (ae.toLowerCase() == "data") {
                                    ag.movie = ai[ae]
                                } else {
                                    if (ae.toLowerCase() == "styleclass") {
                                        ah += ' class="' + ai[ae] + '"'
                                    } else {
                                        if (ae.toLowerCase() != "classid") {
                                            ah += " " + ae + '="' + ai[ae] + '"'
                                        }
                                    }
                                }
                            }
                        }
                        var af = "";
                        for (var ad in ag) {
                            if (ag[ad] != Object.prototype[ad]) {
                                af += '<param name="' + ad + '" value="' + ag[ad] + '" />'
                            }
                        }
                        aa.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"' + ah + ">" + af + "</object>";
                        N[N.length] = ai.id;
                        X = c(ai.id)
                    } else {
                        var Z = C(r);
                        Z.setAttribute("type", q);
                        for (var ac in ai) {
                            if (ai[ac] != Object.prototype[ac]) {
                                if (ac.toLowerCase() == "styleclass") {
                                    Z.setAttribute("class", ai[ac])
                                } else {
                                    if (ac.toLowerCase() != "classid") {
                                        Z.setAttribute(ac, ai[ac])
                                    }
                                }
                            }
                        }
                        for (var ab in ag) {
                            if (ag[ab] != Object.prototype[ab] && ab.toLowerCase() != "movie") {
                                e(Z, ab, ag[ab])
                            }
                        }
                        aa.parentNode.replaceChild(Z, aa);
                        X = Z
                    }
                }
                return X
            }
            function e(Z, X, Y) {
                var aa = C("param");
                aa.setAttribute("name", X);
                aa.setAttribute("value", Y);
                Z.appendChild(aa)
            }
            function y(Y) {
                var X = c(Y);
                if (X && X.nodeName == "OBJECT") {
                    if (M.ie && M.win) {
                        X.style.display = "none"; (function() {
                            if (X.readyState == 4) {
                                b(Y)
                            } else {
                                setTimeout(arguments.callee, 10)
                            }
                        })()
                    } else {
                        X.parentNode.removeChild(X)
                    }
                }
            }
            function b(Z) {
                var Y = c(Z);
                if (Y) {
                    for (var X in Y) {
                        if (typeof Y[X] == "function") {
                            Y[X] = null
                        }
                    }
                    Y.parentNode.removeChild(Y)
                }
            }
            function c(Z) {
                var X = null;
                try {
                    X = j.getElementById(Z)
                } catch(Y) {}
                return X
            }
            function C(X) {
                return j.createElement(X)
            }
            function i(Z, X, Y) {
                Z.attachEvent(X, Y);
                I[I.length] = [Z, X, Y]
            }
            function F(Z) {
                var Y = M.pv,
                X = Z.split(".");
                X[0] = parseInt(X[0], 10);
                X[1] = parseInt(X[1], 10) || 0;
                X[2] = parseInt(X[2], 10) || 0;
                return Y[0] > X[0] || Y[0] == X[0] && Y[1] > X[1] || Y[0] == X[0] && Y[1] == X[1] && Y[2] >= X[2] ? true: false
            }
            function v(ac, Y, ad, ab) {
                if (M.ie && M.mac) {
                    return
                }
                var aa = j.getElementsByTagName("head")[0];
                if (!aa) {
                    return
                }
                var X = ad && typeof ad == "string" ? ad: "screen";
                if (ab) {
                    n = null;
                    G = null
                }
                if (!n || G != X) {
                    var Z = C("style");
                    Z.setAttribute("type", "text/css");
                    Z.setAttribute("media", X);
                    n = aa.appendChild(Z);
                    if (M.ie && M.win && typeof j.styleSheets != D && j.styleSheets.length > 0) {
                        n = j.styleSheets[j.styleSheets.length - 1]
                    }
                    G = X
                }
                if (M.ie && M.win) {
                    if (n && typeof n.addRule == r) {
                        n.addRule(ac, Y)
                    }
                } else {
                    if (n && typeof j.createTextNode != D) {
                        n.appendChild(j.createTextNode(ac + " {" + Y + "}"))
                    }
                }
            }
            function w(Z, X) {
                if (!m) {
                    return
                }
                var Y = X ? "visible": "hidden";
                if (J && c(Z)) {
                    c(Z).style.visibility = Y
                } else {
                    v("#" + Z, "visibility:" + Y)
                }
            }
            function L(Y) {
                var Z = /[\\\"<>\.;]/;
                var X = Z.exec(Y) != null;
                return X && typeof encodeURIComponent != D ? encodeURIComponent(Y) : Y
            }
            var d = function() {
                if (M.ie && M.win) {
                    window.attachEvent("onunload",
                    function() {
                        var ac = I.length;
                        for (var ab = 0; ab < ac; ab++) {
                            I[ab][0].detachEvent(I[ab][1], I[ab][2])
                        }
                        var Z = N.length;
                        for (var aa = 0; aa < Z; aa++) {
                            y(N[aa])
                        }
                        for (var Y in M) {
                            M[Y] = null
                        }
                        M = null;
                        for (var X in swfobject) {
                            swfobject[X] = null
                        }
                        swfobject = null
                    })
                }
            } ();
            return {
                registerObject: function(ab, X, aa, Z) {
                    if (M.w3 && ab && X) {
                        var Y = {};
                        Y.id = ab;
                        Y.swfVersion = X;
                        Y.expressInstall = aa;
                        Y.callbackFn = Z;
                        o[o.length] = Y;
                        w(ab, false)
                    } else {
                        if (Z) {
                            Z({
                                success: false,
                                id: ab
                            })
                        }
                    }
                },
                getObjectById: function(X) {
                    if (M.w3) {
                        return z(X)
                    }
                },
                embedSWF: function(ab, ah, ae, ag, Y, aa, Z, ad, af, ac) {
                    var X = {
                        success: false,
                        id: ah
                    };
                    if (M.w3 && !(M.wk && M.wk < 312) && ab && ah && ae && ag && Y) {
                        w(ah, false);
                        K(function() {
                            ae += "";
                            ag += "";
                            var aj = {};
                            if (af && typeof af === r) {
                                for (var al in af) {
                                    aj[al] = af[al]
                                }
                            }
                            aj.data = ab;
                            aj.width = ae;
                            aj.height = ag;
                            var am = {};
                            if (ad && typeof ad === r) {
                                for (var ak in ad) {
                                    am[ak] = ad[ak]
                                }
                            }
                            if (Z && typeof Z === r) {
                                for (var ai in Z) {
                                    if (typeof am.flashvars != D) {
                                        am.flashvars += "&" + ai + "=" + Z[ai]
                                    } else {
                                        am.flashvars = ai + "=" + Z[ai]
                                    }
                                }
                            }
                            if (F(Y)) {
                                var an = u(aj, am, ah);
                                if (aj.id == ah) {
                                    w(ah, true)
                                }
                                X.success = true;
                                X.ref = an
                            } else {
                                if (aa && A()) {
                                    aj.data = aa;
                                    P(aj, am, ah, ac);
                                    return
                                } else {
                                    w(ah, true)
                                }
                            }
                            if (ac) {
                                ac(X)
                            }
                        })
                    } else {
                        if (ac) {
                            ac(X)
                        }
                    }
                },
                switchOffAutoHideShow: function() {
                    m = false
                },
                ua: M,
                getFlashPlayerVersion: function() {
                    return {
                        major: M.pv[0],
                        minor: M.pv[1],
                        release: M.pv[2]
                    }
                },
                hasFlashPlayerVersion: F,
                createSWF: function(Z, Y, X) {
                    if (M.w3) {
                        return u(Z, Y, X)
                    } else {
                        return undefined
                    }
                },
                showExpressInstall: function(Z, aa, X, Y) {
                    if (M.w3 && A()) {
                        P(Z, aa, X, Y)
                    }
                },
                removeSWF: function(X) {
                    if (M.w3) {
                        y(X)
                    }
                },
                createCSS: function(aa, Z, Y, X) {
                    if (M.w3) {
                        v(aa, Z, Y, X)
                    }
                },
                addDomLoadEvent: K,
                addLoadEvent: s,
                getQueryParamValue: function(aa) {
                    var Z = j.location.search || j.location.hash;
                    if (Z) {
                        if (/\?/.test(Z)) {
                            Z = Z.split("?")[1]
                        }
                        if (aa == null) {
                            return L(Z)
                        }
                        var Y = Z.split("&");
                        for (var X = 0; X < Y.length; X++) {
                            if (Y[X].substring(0, Y[X].indexOf("=")) == aa) {
                                return L(Y[X].substring(Y[X].indexOf("=") + 1))
                            }
                        }
                    }
                    return ""
                },
                expressInstallCallback: function() {
                    if (a) {
                        var X = c(R);
                        if (X && l) {
                            X.parentNode.replaceChild(l, X);
                            if (Q) {
                                w(Q, true);
                                if (M.ie && M.win) {
                                    l.style.display = "block"
                                }
                            }
                            if (E) {
                                E(B)
                            }
                        }
                        a = false
                    }
                }
            }
        } ()
    } (function() {
        if ("undefined" == typeof window || window.WebSocket) return;
        var console = window.console;
        if (!console || !console.log || !console.error) {
            console = {
                log: function() {},
                error: function() {}
            }
        }
        if (!swfobject.hasFlashPlayerVersion("10.0.0")) {
            console.error("Flash Player >= 10.0.0 is required.");
            return
        }
        if (location.protocol == "file:") {
            console.error("WARNING: web-socket-js doesn't work in file:///... URL " + "unless you set Flash Security Settings properly. " + "Open the page via Web server i.e. http://...")
        }
        WebSocket = function(url, protocols, proxyHost, proxyPort, headers) {
            var self = this;
            self.gL1x = WebSocket.bXS7L++;
            WebSocket.bLX3x[self.gL1x] = self;
            self.readyState = WebSocket.CONNECTING;
            self.bufferedAmount = 0;
            self.lI3x = {};
            if (!protocols) {
                protocols = []
            } else if (typeof protocols == "string") {
                protocols = [protocols]
            }
            setTimeout(function() {
                WebSocket.VC2x(function() {
                    WebSocket.oP4T.create(self.gL1x, url, protocols, proxyHost || null, proxyPort || 0, headers || null)
                })
            },
            0)
        };
        WebSocket.prototype.send = function(data) {
            if (this.readyState == WebSocket.CONNECTING) {
                throw "INVALID_STATE_ERR: Web Socket connection has not been established"
            }
            var result = WebSocket.oP4T.send(this.gL1x, encodeURIComponent(data));
            if (result < 0) {
                return true
            } else {
                this.bufferedAmount += result;
                return false
            }
        };
        WebSocket.prototype.close = function() {
            if (this.readyState == WebSocket.CLOSED || this.readyState == WebSocket.CLOSING) {
                return
            }
            this.readyState = WebSocket.CLOSING;
            WebSocket.oP4T.close(this.gL1x)
        };
        WebSocket.prototype.addEventListener = function(type, listener, useCapture) {
            if (! (type in this.lI3x)) {
                this.lI3x[type] = []
            }
            this.lI3x[type].push(listener)
        };
        WebSocket.prototype.removeEventListener = function(type, listener, useCapture) {
            if (! (type in this.lI3x)) return;
            var events = this.lI3x[type];
            for (var i = events.length - 1; i >= 0; --i) {
                if (events[i] === listener) {
                    events.splice(i, 1);
                    break
                }
            }
        };
        WebSocket.prototype.dispatchEvent = function(event) {
            var events = this.lI3x[event.type] || [];
            for (var i = 0; i < events.length; ++i) {
                events[i](event)
            }
            var handler = this["on" + event.type];
            if (handler) handler(event)
        };
        WebSocket.prototype.bXO7H = function(flashEvent) {
            if ("readyState" in flashEvent) {
                this.readyState = flashEvent.readyState
            }
            if ("protocol" in flashEvent) {
                this.protocol = flashEvent.protocol
            }
            var jsEvent;
            if (flashEvent.type == "open" || flashEvent.type == "error") {
                jsEvent = this.bLS3x(flashEvent.type)
            } else if (flashEvent.type == "close") {
                jsEvent = this.bLS3x("close")
            } else if (flashEvent.type == "message") {
                var data = decodeURIComponent(flashEvent.message);
                jsEvent = this.bXD7w("message", data)
            } else {
                throw "unknown event type: " + flashEvent.type
            }
            this.dispatchEvent(jsEvent)
        };
        WebSocket.prototype.bLS3x = function(type) {
            if (document.createEvent && window.Event) {
                var event = document.createEvent("Event");
                event.initEvent(type, false, false);
                return event
            } else {
                return {
                    type: type,
                    bubbles: false,
                    cancelable: false
                }
            }
        };
        WebSocket.prototype.bXD7w = function(type, data) {
            if (document.createEvent && window.MessageEvent && !window.opera) {
                var event = document.createEvent("MessageEvent");
                event.initMessageEvent("message", false, false, data, null, null, window, null);
                return event
            } else {
                return {
                    type: type,
                    data: data,
                    bubbles: false,
                    cancelable: false
                }
            }
        };
        WebSocket.CONNECTING = 0;
        WebSocket.OPEN = 1;
        WebSocket.CLOSING = 2;
        WebSocket.CLOSED = 3;
        WebSocket.oP4T = null;
        WebSocket.bLX3x = {};
        WebSocket.OC0x = [];
        WebSocket.bXS7L = 0;
        WebSocket.loadFlashPolicyFile = function(url) {
            WebSocket.VC2x(function() {
                WebSocket.oP4T.loadManualPolicyFile(url)
            })
        };
        WebSocket.bkd7W = function() {
            if (WebSocket.oP4T) return;
            if (WebSocket.bXB7u) {
                window.WEB_SOCKET_SWF_LOCATION = WebSocket.bXB7u
            }
            if (!window.WEB_SOCKET_SWF_LOCATION) {
                console.error("[WebSocket] set WEB_SOCKET_SWF_LOCATION to location of WebSocketMain.swf");
                return
            }
            var container = document.createElement("div");
            container.id = "webSocketContainer";
            container.style.position = "absolute";
            if (WebSocket.bXz7s()) {
                container.style.left = "0px";
                container.style.top = "0px"
            } else {
                container.style.left = "-100px";
                container.style.top = "-100px"
            }
            var holder = document.createElement("div");
            holder.id = "webSocketFlash";
            container.appendChild(holder);
            document.body.appendChild(container);
            swfobject.embedSWF(WEB_SOCKET_SWF_LOCATION, "webSocketFlash", "1", "1", "10.0.0", null, null, {
                hasPriority: true,
                swliveconnect: true,
                allowScriptAccess: "always"
            },
            null,
            function(e) {
                if (!e.success) {
                    console.error("[WebSocket] swfobject.embedSWF failed")
                }
            })
        };
        WebSocket.cBk3x = function() {
            setTimeout(function() {
                WebSocket.oP4T = document.getElementById("webSocketFlash");
                WebSocket.oP4T.setCallerUrl(location.href);
                WebSocket.oP4T.setDebug( !! window.WEB_SOCKET_DEBUG);
                for (var i = 0; i < WebSocket.OC0x.length; ++i) {
                    WebSocket.OC0x[i]()
                }
                WebSocket.OC0x = []
            },
            0)
        };
        WebSocket.cBl3x = function() {
            setTimeout(function() {
                try {
                    var events = WebSocket.oP4T.receiveEvents();
                    for (var i = 0; i < events.length; ++i) {
                        WebSocket.bLX3x[events[i].webSocketId].bXO7H(events[i])
                    }
                } catch(e) {
                    console.error(e)
                }
            },
            0);
            return true
        };
        WebSocket.cBm3x = function(message) {
            console.log(decodeURIComponent(message))
        };
        WebSocket.dG0x = function(message) {
            console.error(decodeURIComponent(message))
        };
        WebSocket.VC2x = function(task) {
            if (WebSocket.oP4T) {
                task()
            } else {
                WebSocket.OC0x.push(task)
            }
        };
        WebSocket.bXz7s = function() {
            if (!window.navigator || !window.navigator.mimeTypes) {
                return false
            }
            var mimeType = window.navigator.mimeTypes["application/x-shockwave-flash"];
            if (!mimeType || !mimeType.enabledPlugin || !mimeType.enabledPlugin.filename) {
                return false
            }
            return mimeType.enabledPlugin.filename.match(/flashlite/i) ? true: false
        };
        if (!window.WEB_SOCKET_DISABLE_AUTO_INITIALIZATION) {
            if (window.addEventListener) {
                window.addEventListener("load",
                function() {
                    WebSocket.bkd7W()
                },
                false)
            } else {
                window.attachEvent("onload",
                function() {
                    WebSocket.bkd7W()
                })
            }
        }
    })(); (function(exports, io, global) {
        exports.XHR = XHR;
        function XHR(socket) {
            if (!socket) return;
            io.Transport.apply(this, arguments);
            this.sendBuffer = []
        }
        io.util.inherit(XHR, io.Transport);
        XHR.prototype.open = function() {
            this.socket.setBuffer(false);
            this.onOpen();
            this.get();
            this.setCloseTimeout();
            return this
        };
        XHR.prototype.payload = function(payload) {
            var msgs = [];
            for (var i = 0,
            l = payload.length; i < l; i++) {
                msgs.push(io.parser.encodePacket(payload[i]))
            }
            this.send(io.parser.encodePayload(msgs))
        };
        XHR.prototype.send = function(data) {
            this.post(data);
            return this
        };
        function empty() {}
        XHR.prototype.post = function(data) {
            var self = this;
            this.socket.setBuffer(true);
            function stateChange() {
                if (this.readyState == 4) {
                    this.onreadystatechange = empty;
                    self.posting = false;
                    if (this.status == 200) {
                        self.socket.setBuffer(false)
                    } else {
                        self.onClose()
                    }
                }
            }
            function onload() {
                this.onload = empty;
                self.socket.setBuffer(false)
            }
            this.sendXHR = this.request("POST");
            if (global.XDomainRequest && this.sendXHR instanceof XDomainRequest) {
                this.sendXHR.onload = this.sendXHR.onerror = onload
            } else {
                this.sendXHR.onreadystatechange = stateChange
            }
            this.sendXHR.send(data)
        };
        XHR.prototype.close = function() {
            this.onClose();
            return this
        };
        XHR.prototype.request = function(method) {
            var req = io.util.request(this.socket.isXDomain()),
            query = io.util.query(this.socket.options.query, "t=" + +(new Date));
            req.open(method || "GET", this.prepareUrl() + query, true);
            if (method == "POST") {
                try {
                    if (req.setRequestHeader) {
                        req.setRequestHeader("Content-type", "text/plain;charset=UTF-8")
                    } else {
                        req.contentType = "text/plain"
                    }
                } catch(e) {}
            }
            return req
        };
        XHR.prototype.scheme = function() {
            return this.socket.options.secure ? "https": "http"
        };
        XHR.check = function(socket, xdomain) {
            try {
                var request = io.util.request(xdomain),
                usesXDomReq = global.XDomainRequest && request instanceof XDomainRequest,
                socketProtocol = socket && socket.options && socket.options.secure ? "https:": "http:",
                isXProtocol = global.location && socketProtocol != global.location.protocol;
                if (request && !(usesXDomReq && isXProtocol)) {
                    return true
                }
            } catch(e) {}
            return false
        };
        XHR.xdomainCheck = function(socket) {
            return XHR.check(socket, true)
        }
    })("undefined" != typeof io ? io.Transport: module.exports, "undefined" != typeof io ? io: module.parent.exports, this); (function(exports, io) {
        exports.htmlfile = HTMLFile;
        function HTMLFile(socket) {
            io.Transport.XHR.apply(this, arguments)
        }
        io.util.inherit(HTMLFile, io.Transport.XHR);
        HTMLFile.prototype.name = "htmlfile";
        HTMLFile.prototype.get = function() {
            this.doc = new(window[["Active"].concat("Object").join("X")])("htmlfile");
            this.doc.open();
            this.doc.write("<html></html>");
            this.doc.close();
            this.doc.parentWindow.s = this;
            var iframeC = this.doc.createElement("div");
            iframeC.className = "socketio";
            this.doc.body.appendChild(iframeC);
            this.iframe = this.doc.createElement("iframe");
            iframeC.appendChild(this.iframe);
            var self = this,
            query = io.util.query(this.socket.options.query, "t=" + +(new Date));
            this.iframe.src = this.prepareUrl() + query;
            io.util.on(window, "unload",
            function() {
                self.destroy()
            })
        };
        HTMLFile.prototype.c8g = function(data, doc) {
            data = data.replace(/\\\//g, "/");
            this.onData(data);
            try {
                var script = doc.getElementsByTagName("script")[0];
                script.parentNode.removeChild(script)
            } catch(e) {}
        };
        HTMLFile.prototype.destroy = function() {
            if (this.iframe) {
                try {
                    this.iframe.src = "about:blank"
                } catch(e) {}
                this.doc = null;
                this.iframe.parentNode.removeChild(this.iframe);
                this.iframe = null;
                CollectGarbage()
            }
        };
        HTMLFile.prototype.close = function() {
            this.destroy();
            return io.Transport.XHR.prototype.close.call(this)
        };
        HTMLFile.check = function(socket) {
            if (typeof window != "undefined" && ["Active"].concat("Object").join("X") in window) {
                try {
                    var a = new(window[["Active"].concat("Object").join("X")])("htmlfile");
                    return a && io.Transport.XHR.check(socket)
                } catch(e) {}
            }
            return false
        };
        HTMLFile.xdomainCheck = function() {
            return false
        };
        io.transports.push("htmlfile")
    })("undefined" != typeof io ? io.Transport: module.exports, "undefined" != typeof io ? io: module.parent.exports); (function(exports, io, global) {
        exports["xhr-polling"] = XHRPolling;
        function XHRPolling() {
            io.Transport.XHR.apply(this, arguments)
        }
        io.util.inherit(XHRPolling, io.Transport.XHR);
        io.util.merge(XHRPolling, io.Transport.XHR);
        XHRPolling.prototype.name = "xhr-polling";
        XHRPolling.prototype.heartbeats = function() {
            return false
        };
        XHRPolling.prototype.open = function() {
            var self = this;
            io.Transport.XHR.prototype.open.call(self);
            return false
        };
        function empty() {}
        XHRPolling.prototype.get = function() {
            if (!this.isOpen) return;
            var self = this;
            function stateChange() {
                if (this.readyState == 4) {
                    this.onreadystatechange = empty;
                    if (this.status == 200) {
                        self.onData(this.responseText);
                        self.get()
                    } else {
                        self.onClose()
                    }
                }
            }
            function onload() {
                this.onload = empty;
                this.onerror = empty;
                self.retryCounter = 1;
                self.onData(this.responseText);
                self.get()
            }
            function onerror() {
                self.retryCounter++;
                if (!self.retryCounter || self.retryCounter > 3) {
                    self.onClose()
                } else {
                    self.get()
                }
            }
            this.xhr = this.request();
            if (global.XDomainRequest && this.xhr instanceof XDomainRequest) {
                this.xhr.onload = onload;
                this.xhr.onerror = onerror
            } else {
                this.xhr.onreadystatechange = stateChange
            }
            this.xhr.send(null)
        };
        XHRPolling.prototype.onClose = function() {
            io.Transport.XHR.prototype.onClose.call(this);
            if (this.xhr) {
                this.xhr.onreadystatechange = this.xhr.onload = this.xhr.onerror = empty;
                try {
                    this.xhr.abort()
                } catch(e) {}
                this.xhr = null
            }
        };
        XHRPolling.prototype.ready = function(socket, fn) {
            var self = this;
            io.util.defer(function() {
                fn.call(self)
            })
        };
        io.transports.push("xhr-polling")
    })("undefined" != typeof io ? io.Transport: module.exports, "undefined" != typeof io ? io: module.parent.exports, this); (function(exports, io, global) {
        var indicator = global.document && "MozAppearance" in global.document.documentElement.style;
        exports["jsonp-polling"] = JSONPPolling;
        function JSONPPolling(socket) {
            io.Transport["xhr-polling"].apply(this, arguments);
            this.index = io.j.length;
            var self = this;
            io.j.push(function(msg) {
                self.c8g(msg)
            })
        }
        io.util.inherit(JSONPPolling, io.Transport["xhr-polling"]);
        JSONPPolling.prototype.name = "jsonp-polling";
        JSONPPolling.prototype.post = function(data) {
            var self = this,
            query = io.util.query(this.socket.options.query, "t=" + +(new Date) + "&i=" + this.index);
            if (!this.form) {
                var form = document.createElement("form"),
                area = document.createElement("textarea"),
                id = this.iframeId = "socketio_iframe_" + this.index,
                iframe;
                form.className = "socketio";
                form.style.position = "absolute";
                form.style.top = "0px";
                form.style.left = "0px";
                form.style.display = "none";
                form.target = id;
                form.method = "POST";
                form.setAttribute("accept-charset", "utf-8");
                area.name = "d";
                form.appendChild(area);
                document.body.appendChild(form);
                this.form = form;
                this.area = area
            }
            this.form.action = this.prepareUrl() + query;
            function complete() {
                initIframe();
                self.socket.setBuffer(false)
            }
            function initIframe() {
                if (self.iframe) {
                    self.form.removeChild(self.iframe)
                }
                try {
                    iframe = document.createElement('<iframe name="' + self.iframeId + '">')
                } catch(e) {
                    iframe = document.createElement("iframe");
                    iframe.name = self.iframeId
                }
                iframe.id = self.iframeId;
                self.form.appendChild(iframe);
                self.iframe = iframe
            }
            initIframe();
            this.area.value = io.JSON.stringify(data);
            try {
                this.form.submit()
            } catch(e) {}
            if (this.iframe.attachEvent) {
                iframe.onreadystatechange = function() {
                    if (self.iframe.readyState == "complete") {
                        complete()
                    }
                }
            } else {
                this.iframe.onload = complete
            }
            this.socket.setBuffer(true)
        };
        JSONPPolling.prototype.get = function() {
            var self = this,
            script = document.createElement("script"),
            query = io.util.query(this.socket.options.query, "t=" + +(new Date) + "&i=" + this.index);
            if (this.script) {
                this.script.parentNode.removeChild(this.script);
                this.script = null
            }
            script.async = true;
            script.src = this.prepareUrl() + query;
            script.onerror = function() {
                self.onClose()
            };
            var insertAt = document.getElementsByTagName("script")[0];
            insertAt.parentNode.insertBefore(script, insertAt);
            this.script = script;
            if (indicator) {
                setTimeout(function() {
                    var iframe = document.createElement("iframe");
                    document.body.appendChild(iframe);
                    document.body.removeChild(iframe)
                },
                100)
            }
        };
        JSONPPolling.prototype.c8g = function(msg) {
            this.onData(msg);
            if (this.isOpen) {
                this.get()
            }
            return this
        };
        JSONPPolling.prototype.ready = function(socket, fn) {
            var self = this;
            if (!indicator) return fn.call(this);
            io.util.load(function() {
                fn.call(self)
            })
        };
        JSONPPolling.check = function() {
            return "document" in global
        };
        JSONPPolling.xdomainCheck = function() {
            return true
        };
        io.transports.push("jsonp-polling")
    })("undefined" != typeof io ? io.Transport: module.exports, "undefined" != typeof io ? io: module.parent.exports, this);
    if (typeof define === "function" && define.amd) {
        define([],
        function() {
            return io
        })
    }
})(); (function() {
    var isArray = Array.isArray;
    if (isArray === undefined) {
        isArray = function(arr) {
            return Object.prototype.toString.call(arr) === "[object Array]"
        }
    }
    var root = this;
    function EventEmitter() {}
    if (typeof module !== "undefined" && module.exports) {
        module.exports.EventEmitter = EventEmitter
    } else {
        root = window;
        root.EventEmitter = EventEmitter
    }
    var defaultMaxListeners = 10;
    EventEmitter.prototype.setMaxListeners = function(n) {
        if (!this.dU0x) this.dU0x = {};
        this.bLF3x = n
    };
    EventEmitter.prototype.emit = function() {
        var type = arguments[0];
        if (type === "error") {
            if (!this.dU0x || !this.dU0x.error || isArray(this.dU0x.error) && !this.dU0x.error.length) {
                if (this.domain) {
                    var er = arguments[1];
                    er.domain_emitter = this;
                    er.domain = this.domain;
                    er.domain_thrown = false;
                    this.domain.emit("error", er);
                    return false
                }
                if (arguments[1] instanceof Error) {
                    throw arguments[1]
                } else {
                    throw new Error("Uncaught, unspecified 'error' event.")
                }
                return false
            }
        }
        if (!this.dU0x) return false;
        var handler = this.dU0x[type];
        if (!handler) return false;
        if (typeof handler == "function") {
            if (this.domain) {
                this.domain.enter()
            }
            switch (arguments.length) {
            case 1:
                handler.call(this);
                break;
            case 2:
                handler.call(this, arguments[1]);
                break;
            case 3:
                handler.call(this, arguments[1], arguments[2]);
                break;
            default:
                var l = arguments.length;
                var args = new Array(l - 1);
                for (var i = 1; i < l; i++) args[i - 1] = arguments[i];
                handler.apply(this, args)
            }
            if (this.domain) {
                this.domain.exit()
            }
            return true
        } else if (isArray(handler)) {
            if (this.domain) {
                this.domain.enter()
            }
            var l = arguments.length;
            var args = new Array(l - 1);
            for (var i = 1; i < l; i++) args[i - 1] = arguments[i];
            var listeners = handler.slice();
            for (var i = 0,
            l = listeners.length; i < l; i++) {
                listeners[i].apply(this, args)
            }
            if (this.domain) {
                this.domain.exit()
            }
            return true
        } else {
            return false
        }
    };
    EventEmitter.prototype.addListener = function(type, listener) {
        if ("function" !== typeof listener) {
            throw new Error("addListener only takes instances of Function")
        }
        if (!this.dU0x) this.dU0x = {};
        this.emit("newListener", type, typeof listener.listener === "function" ? listener.listener: listener);
        if (!this.dU0x[type]) {
            this.dU0x[type] = listener
        } else if (isArray(this.dU0x[type])) {
            this.dU0x[type].push(listener)
        } else {
            this.dU0x[type] = [this.dU0x[type], listener]
        }
        if (isArray(this.dU0x[type]) && !this.dU0x[type].warned) {
            var m;
            if (this.bLF3x !== undefined) {
                m = this.bLF3x
            } else {
                m = defaultMaxListeners
            }
            if (m && m > 0 && this.dU0x[type].length > m) {
                this.dU0x[type].warned = true;
                console.error("(node) warning: possible EventEmitter memory " + "leak detected. %d listeners added. " + "Use emitter.setMaxListeners() to increase limit.", this.dU0x[type].length);
                console.trace()
            }
        }
        return this
    };
    EventEmitter.prototype.on = EventEmitter.prototype.addListener;
    EventEmitter.prototype.once = function(type, listener) {
        if ("function" !== typeof listener) {
            throw new Error(".once only takes instances of Function")
        }
        var self = this;
        function g() {
            self.removeListener(type, g);
            listener.apply(this, arguments)
        }
        g.listener = listener;
        self.on(type, g);
        return this
    };
    EventEmitter.prototype.removeListener = function(type, listener) {
        if ("function" !== typeof listener) {
            throw new Error("removeListener only takes instances of Function")
        }
        if (!this.dU0x || !this.dU0x[type]) return this;
        var list = this.dU0x[type];
        if (isArray(list)) {
            var position = -1;
            for (var i = 0,
            length = list.length; i < length; i++) {
                if (list[i] === listener || list[i].listener && list[i].listener === listener) {
                    position = i;
                    break
                }
            }
            if (position < 0) return this;
            list.splice(position, 1)
        } else if (list === listener || list.listener && list.listener === listener) {
            delete this.dU0x[type]
        }
        return this
    };
    EventEmitter.prototype.removeAllListeners = function(type) {
        if (arguments.length === 0) {
            this.dU0x = {};
            return this
        }
        var events = this.dU0x && this.dU0x[type];
        if (!events) return this;
        if (isArray(events)) {
            events.splice(0)
        } else {
            this.dU0x[type] = null
        }
        return this
    };
    EventEmitter.prototype.listeners = function(type) {
        if (!this.dU0x) this.dU0x = {};
        if (!this.dU0x[type]) this.dU0x[type] = [];
        if (!isArray(this.dU0x[type])) {
            this.dU0x[type] = [this.dU0x[type]]
        }
        return this.dU0x[type]
    }
})(); (function() {
    if (typeof Object.create !== "function") {
        Object.create = function(o) {
            function F() {}
            F.prototype = o;
            return new F
        }
    }
    var root = window;
    var pomelo = Object.create(EventEmitter.prototype);
    root.pomelo = pomelo;
    var socket = null;
    var id = 1;
    var callbacks = {};
    var route = "web-connector.messageHandler.";
    var isRegister = false;
    var success = 200;
    var register_ack = "register";
    var bind_ack = "bind";
    var regBind_ack = "registerAndBind";
    var cancelBind_ack = "cancelBind";
    var message_store = {};
    var heartbeat_interval = 1e3 * 60;
    var heartbeat_timer;
    var current_user;
    var current_domain;
    var cacheMessageIds = [];
    var cacheSize = 100;
    pomelo.init = function(host, port, reconnect, cb) {
        var url = "ws://" + host;
        if (port) {
            url += ":" + port
        }
        var params;
        if (reconnect) {
            params = {
                "force new connection": true,
                reconnect: true,
                "max reconnection attempts": 50
            }
        } else {
            params = {
                "force new connection": true,
                reconnect: false
            }
        }
        socket = io.connect(url, params);
        socket.on("connect",
        function() {
            console.log("[pomeloclient.init] websocket connected!");
            cb()
        });
        socket.on("reconnect",
        function() {
            pomelo.emit("reconnect")
        });
        socket.on("message",
        function(data) {
            message_store = {};
            if (typeof data === "string") {
                data = JSON.parse(data)
            }
            if (data instanceof Array) {
                processMessageBatch(data)
            } else {
                processMessage(data);
                emitMessage()
            }
        });
        socket.on("error",
        function(err) {
            cb(err)
        });
        socket.on("disconnect",
        function(reason) {
            isRegister = false;
            pomelo.emit("disconnect", reason)
        })
    };
    var request = function(method, opts, cb) {
        if (!method) {
            console.error("request message error with no method.");
            return
        }
        id++;
        callbacks[id] = cb;
        sendMsg(method, id, opts)
    };
    var notify = function(method, msg) {
        if (!method) {
            console.error("notify message error with no method.");
            return
        }
        sendMsg(method, 0, msg)
    };
    var sendMsg = function(method, msgId, msg) {
        var path = route + method;
        var rs = {
            id: msgId,
            route: path,
            msg: msg
        };
        var sg = JSON.stringify(rs);
        socket.send(sg)
    };
    var processMessageBatch = function(msgs) {
        for (var i = 0,
        l = msgs.length; i < l; i++) {
            processMessage(msgs[i])
        }
        emitMessage()
    };
    var emitMessage = function() {
        for (var key in message_store) {
            pomelo.emit(key, message_store[key])
        }
    };
    var processMessage = function(msg) {
        if (msg.id) {
            var cb = callbacks[msg.id];
            delete callbacks[msg.id];
            if (typeof cb !== "function") {
                console.log("[pomeloclient.processMessage] cb is not a function for request " + msg.id);
                return
            }
            cb(msg.body);
            if (msg.body.type === register_ack && msg.body.code == success) {
                isRegister = true
            }
            if ((msg.body.type === bind_ack || msg.body.type === regBind_ack) && msg.body.code == success) {
                heartbeat_timer = setInterval(function() {
                    notify("heartbeat", {
                        flag: "online",
                        domain: current_domain,
                        user: current_user
                    })
                },
                heartbeat_interval)
            }
            if (msg.body.type === cancelBind_ack && msg.body.code == success) {
                clearInterval(heartbeat_timer)
            }
            return
        } else {
            if (!filterMessage(msg)) {
                return
            }
            if (!message_store[msg.route]) {
                if (msg.body instanceof Array) {
                    message_store[msg.route] = msg.body
                } else {
                    message_store[msg.route] = [msg.body]
                }
            } else {
                var arr = message_store[msg.route];
                if (msg.body instanceof Array) {
                    var messages = msg.body;
                    for (var i = 0; i < messages.length; i++) {
                        arr.push(messages[i])
                    }
                } else {
                    arr.push(msg.body)
                }
                message_store[msg.route] = arr
            }
        }
    };
    var filterMessage = function(message) {
        var msgs = message.body;
        var ids = [];
        var results = {};
        if (msgs instanceof Array) {
            for (var i = 0; i < msgs.length; i++) {
                var id = msgs[i].msgId;
                ids.push(id)
            }
            var duplicatedIds = checkMessage(ids);
            if (duplicatedIds.length !== 0) {
                return false
            } else {
                cacheMessageIds = cacheMessageIds.concat(ids);
                if (cacheMessageIds.length > cacheSize) {
                    var length = cacheMessageIds - cacheSize;
                    for (var i = 0; i < length; i++) {
                        cacheMessageIds.shift()
                    }
                }
            }
        }
        return true
    };
    var checkMessage = function(ids) {
        var array = [];
        for (var i = 0; i < cacheMessageIds.length; i++) {
            var id = cacheMessageIds[i];
            for (var j = 0; j < ids.length; j++) {
                if (ids[j] === id) {
                    array.push(id)
                }
            }
        }
        return array
    };
    pomelo.register = function(opts, cb) {
        request("register", opts, cb)
    };
    pomelo.bind = function(opts, cb) {
        if (isRegister) {
            current_domain = opts.domain;
            current_user = opts.user;
            request("bind", opts, cb)
        } else {
            console.log("cannot bind without registration.")
        }
    };
    pomelo.registerAndBind = function(opts, cb) {
        current_domain = opts.domain;
        current_user = opts.user;
        request("registerAndBind", opts, cb)
    };
    pomelo.cancelBind = function(opts, cb) {
        current_domain = null;
        current_user = null;
        request("cancelBind", opts, cb)
    };
    pomelo.getOnlineUser = function(opts, cb) {
        request("getOnlineUser", opts, cb)
    };
    pomelo.disconnect = function() {
        if (socket) {
            socket.disconnect();
            socket = null
        }
    };
    pomelo.ackMessage = function(domain, msgs) {
        var msgIds = "";
        var types = "";
        var message = {};
        var user;
        for (var i = 0; i < msgs.length; i++) {
            var data = msgs[i];
            if (!user) {
                user = data.user
            }
            msgIds += data.msgId;
            types += data.type;
            if (i !== msgs.length - 1) {
                msgIds += ";";
                types += ";"
            }
        }
        var message = {
            user: user,
            msgIds: msgIds,
            types: types,
            domain: domain
        };
        notify("ack", message)
    }
})(); (function() {
    var c8g = NEJ.P,
    Z9Q = NEJ.O,
    bn9e = NEJ.F,
    h8b = c8g("nej.v"),
    k8c = c8g("nej.u"),
    H8z = c8g("nej.ut"),
    l8d = c8g("nm.x"),
    dz0x = c8g("nm.u"),
    q8i = c8g("nm.d"),
    Ou0x = c8g("pomelo"),
    dw0x = 0,
    b8h,
    K8C;
    q8i.ff0x({
        "polling-init": {
            url: "/api/push/init",
            format: function(P8H) {
                dw0x = 2;
                var rV5a = {
                    domain: "music.163.com",
                    host: MUSIC_CONFIG.pushHost,
                    port: MUSIC_CONFIG.pushPort,
                    key: MUSIC_CONFIG.pushKey,
                    secret: "bec0b878892740c498505a85eb3dcec9"
                },
                j8b = P8H.account || Z9Q,
                de0x = GUser.userId;
                Ou0x.init(rV5a.host, rV5a.port, true, this.bXs7l.g8c(this, {
                    user: de0x,
                    nonce: j8b.nonce,
                    domain: rV5a.domain,
                    productKey: rV5a.key,
                    signature: j8b.signature,
                    expire_time: j8b.expireTime
                }))
            },
            onerror: function() {
                return this.bjZ7S()
            }
        }
    });
    q8i.Ah7a = NEJ.C();
    b8h = q8i.Ah7a.O8G(q8i.hn1x);
    b8h.cs9j = function() {
        var pF4J = !1;
        return function(e8e) {
            if (!pF4J) {
                pF4J = !0
            }
            this.cx9o(e8e);
            Ou0x.on("specify", this.pZ4d.g8c(this));
            Ou0x.on("broadcast", this.pZ4d.g8c(this))
        }
    } ();
    b8h.pZ4d = function(d8f) {
        k8c.bb9S(d8f,
        function(bE9v) {
            h8b.z8r(q8i.Ah7a, "message", bE9v)
        },
        this)
    };
    b8h.bjZ7S = function() {
        var bw9n = 500;
        return function() {
            dw0x = 0;
            Ou0x.disconnect();
            if (bw9n > 6e4) bw9n = 500;
            bw9n *= 2
        }
    } ();
    b8h.bXs7l = function(e8e, bV9M) {
        if ( !! bV9M) {
            return this.bjZ7S()
        }
        dw0x = 3;
        Ou0x.registerAndBind(e8e,
        function(o8g) {
            if (o8g.code != 200) {
                return this.bjZ7S()
            }
            dw0x = 4
        }.g8c(this))
    };
    b8h.cBn3x = function() {
        dz0x.bWX6R.gh1x().cBo3x()
    };
    b8h.cBp3x = function() {
        dz0x.bWX6R.gh1x().cBq3x()
    };
    b8h.bjQ7J = function() {
        var pF4J = !1;
        return function() {
            if (pF4J) return;
            pF4J = !0;
            this.cn9e("polling-init", {})
        }
    } ();
    H8z.fE1x.A8s({
        event: "message",
        element: q8i.Ah7a
    })
})(); (function() {
    var c8g = NEJ.P,
    Z9Q = NEJ.O,
    a7h = c8g("nej.e"),
    h8b = c8g("nej.v"),
    x8p = c8g("nej.j"),
    dn0x = c8g("nej.p"),
    k8c = c8g("nej.u"),
    n8f = c8g("nm.l"),
    q8i = c8g("nm.d"),
    l8d = c8g("nm.x"),
    cW0x = c8g("api"),
    b8h,
    K8C;
    var gt1x = a7h.in1x('<div class="lyct f-cb"><div class="m-fdback"><div class="tip">任何产品中的问题，欢迎反馈给我们</div><div class="u-txtwrap f-pr"><textarea class="u-txt area" placeholder="请输入反馈内容"></textarea><span class="zs s-fc2">140</span></div><div class="u-txtwrap f-pr holder-parent"><textarea class="u-txt contact" placeholder="请留下联系方式（电话、QQ、邮箱）" maxLength="100"></textarea></div><div style="display:none" class="u-err"><i class="u-icn u-icn-25"></i>内容不能为空！</div></div><div class="lybtn f-tc"><a href="javascript:;" class="u-btn2 u-btn2-2 u-btn2-w4" hidefocus="true"><i>发送意见</i></a><a href="javascript:;" class="u-btn2 u-btn2-1 u-btn2-w4" hidefocus="true"><i>取 消</i></a></div></div>');
    n8f.bjP7I = NEJ.C();
    b8h = n8f.bjP7I.O8G(n8f.ei0x);
    K8C = n8f.bjP7I.cl9c;
    b8h.bj9a = function(e8e) {
        e8e.title = "意见反馈";
        this.bk9b(e8e)
    };
    b8h.ca9R = function() {
        this.cd9U = gt1x
    };
    b8h.bS9J = function() {
        this.cc9T();
        this.ha1x = {};
        var Hj0x = a7h.F8x;
        var Fx9o = h8b.s8k;
        this.ha1x.submit_btn = Hj0x(this.m8e, "u-btn2")[0];
        this.ha1x.cancle_btn = Hj0x(this.m8e, "u-btn2")[1];
        this.ha1x.prompt_msg = Hj0x(this.m8e, "u-err")[0];
        this.ha1x.zs = Hj0x(this.m8e, "zs")[0];
        a7h.Y9P(this.ha1x.zs, "display", "none");
        this.ha1x.fb_txt = Hj0x(this.m8e, "u-txt")[0];
        this.ha1x.contact = Hj0x(this.m8e, "u-txt")[1];
        a7h.fV1x(this.ha1x.fb_txt, "holder");
        a7h.fV1x(this.ha1x.contact, "holder");
        if (a7h.by9p(this.ha1x.fb_txt.parentNode, "holder-parent")) {
            a7h.Y9P(this.ha1x.fb_txt.parentNode, "display", "block")
        }
        if (a7h.by9p(this.ha1x.contact.parentNode, "holder-parent")) {
            a7h.Y9P(this.ha1x.contact.parentNode, "display", "block")
        }
        Fx9o(this.ha1x.submit_btn, "click", this.bWn6h.g8c(this));
        Fx9o(this.ha1x.cancle_btn, "click", this.bWm6g.g8c(this));
        Fx9o(this.ha1x.prompt_msg, "msgShow", this.bVZ6T.g8c(this));
        Fx9o(this.ha1x.fb_txt, "keyup", this.tm5r.g8c(this));
        Fx9o(this.ha1x.fb_txt, "input", this.fC1x.g8c(this));
        Fx9o(this.ha1x.contact, "keyup", this.bVL6F.g8c(this));
        Fx9o(this.ha1x.contact, "input", this.bKH3x.g8c(this));
        this.kU2x = q8i.hM1x.A8s()
    };
    b8h.bWn6h = function(d8f) {
        h8b.bf9W(d8f);
        if (this.cC9t()) return;
        var bl9c = this.ha1x.fb_txt.value.trim();
        var bm9d = bl9c.length;
        var e8e = {
            type: "json",
            method: "post",
            noEnc: true
        };
        var bKG3x = this.ha1x.contact.value.trim();
        var WD2x = {
            ua: navigator.userAgent,
            hash: top.location.hash,
            href: location.href,
            flash: l8d.bnD8v(),
            contact: bKG3x
        };
        var j8b = {
            content: bl9c,
            client: "web",
            xInfo: JSON.stringify(WD2x)
        },
        nn3x = this.kU2x.bZz7s();
        if (nn3x && nn3x.length) {
            j8b.log = nn3x.join("\n")
        }
        if (bm9d == 0) {
            this.ha1x.prompt_msg.innerHTML = "反馈内容不能为空";
            a7h.Y9P(this.ha1x.prompt_msg, "display", "block");
            return
        }
        if (bKG3x.length > 100) {
            this.ha1x.prompt_msg.innerHTML = "联系方式最多只能输入100个字符";
            a7h.Y9P(this.ha1x.prompt_msg, "display", "block");
            return
        }
        this.cC9t(true);
        e8e.data = k8c.dh0x(j8b);
        e8e.onload = this.bVI6C.g8c(this);
        e8e.onerror = this.ix2x.g8c(this);
        x8p.bp9g("/api/feedback/web", e8e)
    };
    b8h.fC1x = function(d8f) {
        var bm9d = this.ha1x.fb_txt.value.trim().length;
        if (bm9d > 0) a7h.Y9P(this.ha1x.prompt_msg, "display", "none");
        dn0x.dj0x.browser == "ie" && dn0x.dj0x.version < "7.0" ? setTimeout(this.fN1x.g8c(this), 0) : this.fN1x()
    };
    b8h.tm5r = function(d8f) {
        if (d8f.keyCode === 8) this.fN1x()
    };
    b8h.fN1x = function() {
        var bm9d = this.ha1x.fb_txt.value.trim().length;
        this.ha1x.zs.innerHTML = !bm9d ? "0/140": bm9d + "/140"
    };
    b8h.bKH3x = function(d8f) {
        var bm9d = this.ha1x.contact.value.trim().length;
        if (bm9d > 0) a7h.Y9P(this.ha1x.prompt_msg, "display", "none")
    };
    b8h.bVL6F = function(d8f) {
        if (d8f.keyCode === 8) this.bKH3x()
    };
    b8h.bWm6g = function(d8f) {
        h8b.cm9d(d8f);
        this.br9i()
    };
    b8h.bVZ6T = function(d8f) {
        var f8d = h8b.U8M(d8f);
        f8d.innerHTML = "请输入反馈内容"
    };
    b8h.cBs3x = function(cBt3x) {
        var f8d = h8b.U8M(d8f);
        f8d.innerHTML = ""
    };
    b8h.bVI6C = function(o8g) {
        this.cC9t(false);
        this.br9i();
        n8f.X8P.L8D({
            tip: "意见发送成功",
            autoclose: true
        })
    };
    b8h.ix2x = function(o8g) {
        this.cC9t(false);
        n8f.X8P.L8D({
            tip: "意见发送失败",
            autoclose: true
        })
    };
    b8h.cC9t = function(cQ0x) {
        return this.dO0x(this.ha1x.submit_btn, cQ0x, "发送意见", "发送中...")
    };
    b8h.L8D = function() {
        K8C.L8D.call(this);
        this.cC9t(false);
        this.ha1x.fb_txt.value = "";
        this.ha1x.contact.value = "";
        a7h.Y9P(this.ha1x.prompt_msg, "display", "none");
        this.fN1x()
    };
    l8d.bVF6z = function(e8e) {
        e8e = e8e || {};
        if (e8e.title === undefined) e8e.title = "意见反馈";
        n8f.bjP7I.L8D(e8e)
    };
    cW0x.feedback = l8d.feedback = l8d.bVF6z
})(); (function() {
    var c8g = NEJ.P,
    Z9Q = NEJ.O,
    bn9e = NEJ.F,
    N8F = c8g("nej.ui"),
    b8h;
    if ( !! N8F.xP7I) return;
    N8F.xP7I = NEJ.C();
    b8h = N8F.xP7I.O8G(N8F.ee0x);
    b8h.cs9j = function() {
        this.gL1x = this.bKB3x();
        this.cx9o()
    };
    b8h.bj9a = function(e8e) {
        this.bk9b(e8e);
        this.cq9h = e8e.index;
        this.gg1x = e8e.total;
        this.gX1x = e8e.range;
        this.ge1x(e8e.data)
    };
    b8h.bA9r = function() {
        this.bF9w();
        delete this.bi9Z;
        delete this.cq9h;
        delete this.gg1x;
        delete this.gX1x
    };
    b8h.hG1x = bn9e;
    b8h.bKB3x = function() {
        var gq1x = +(new Date);
        return function() {
            return "itm-" + ++gq1x
        }
    } ();
    b8h.Ed9U = function() {
        return this.gL1x
    };
    b8h.hC1x = function() {
        return this.bi9Z
    };
    b8h.ge1x = function(j8b) {
        this.bi9Z = j8b || {};
        this.hG1x(this.bi9Z)
    }
})(); (function() {
    var c8g = NEJ.P,
    a7h = c8g("nej.e"),
    h8b = c8g("nej.v"),
    N8F = c8g("nej.ui"),
    b8h,
    K8C;
    if ( !! N8F.tk5p) return;
    N8F.tk5p = NEJ.C();
    b8h = N8F.tk5p.O8G(N8F.xP7I);
    K8C = N8F.tk5p.cl9c;
    b8h.bj9a = function(e8e) {
        this.bVD6x = e8e.pkey || "id";
        this.bk9b(e8e)
    };
    b8h.FZ9Q = function(j8b) {
        this.z8r("ondelete", {
            ext: j8b,
            id: this.Ed9U(),
            data: this.hC1x(),
            body: this.ln2x()
        })
    };
    b8h.sW5b = function(j8b) {
        this.z8r("onupdate", {
            ext: j8b,
            id: this.Ed9U(),
            data: this.hC1x(),
            body: this.ln2x()
        })
    };
    b8h.ge1x = function(j8b) {
        K8C.ge1x.apply(this, arguments);
        this.gL1x = this.bi9Z[this.bVD6x] || this.bKB3x()
    }
})(); (function() {
    var c8g = NEJ.P,
    Z9Q = NEJ.O,
    fj0x = NEJ.R,
    a7h = c8g("nej.e"),
    k8c = c8g("nej.u"),
    N8F = c8g("nej.ui"),
    b8h,
    io1x,
    bjL7E;
    if ( !! N8F.bjK7D) return;
    N8F.bjK7D = NEJ.C();
    b8h = N8F.bjK7D.O8G(N8F.ee0x);
    b8h.bj9a = function(e8e) {
        this.Xc3x = NEJ.X({},
        e8e);
        this.fG1x = NEJ.X({},
        e8e);
        delete this.Xc3x.onchange;
        this.fG1x.onchange = this.fI1x.g8c(this);
        this.bk9b(e8e);
        this.bVu6o({
            number: e8e.number,
            label: e8e.label || Z9Q
        })
    };
    b8h.bA9r = function() {
        this.bF9w();
        if ( !! this.kE2x) {
            this.kE2x.S8K();
            delete this.kE2x
        }
        delete this.Xc3x;
        delete this.fG1x;
        this.bUZ6T();
        this.m8e.innerHTML = "&nbsp;"
    };
    b8h.ca9R = function() {
        this.lw2x = io1x
    };
    b8h.bVu6o = function(j8b) {
        a7h.dH0x(this.m8e, bjL7E, j8b);
        var gq1x = a7h.JO7H();
        this.fG1x.list = a7h.F8x(this.m8e, "js-i-" + gq1x);
        this.fG1x.pbtn = (a7h.F8x(this.m8e, "js-p-" + gq1x) || fj0x)[0];
        this.fG1x.nbtn = (a7h.F8x(this.m8e, "js-n-" + gq1x) || fj0x)[0]
    };
    b8h.bS9J = function() {
        this.cc9T()
    };
    b8h.cBv3x = function(j8b) {
        return a7h.bX9O(bjL7E, j8b)
    };
    b8h.fI1x = function(d8f) {
        if (this.NB9s) return;
        var r8j = d8f.index,
        cu9l = d8f.total;
        this.NB9s = !0;
        this.NA9r(r8j, cu9l);
        k8c.bb9S(this.Xm3x,
        function(sT5Y) {
            sT5Y.NA9r(r8j, cu9l)
        });
        this.NB9s = !1;
        this.z8r("onchange", d8f)
    };
    b8h.g8c = function(bG9x) {
        bG9x = a7h.B8t(bG9x);
        if (!bG9x) return this;
        var co9f = NEJ.X({},
        this.Xc3x);
        co9f.parent = bG9x;
        co9f.index = this.sQ5V();
        co9f.total = this.jn2x();
        var sT5Y = this.constructor.A8s(co9f);
        sT5Y.vF6z("onchange", this.fG1x.onchange);
        if (!this.Xm3x) this.Xm3x = [];
        this.Xm3x.push(sT5Y);
        return this
    };
    b8h.bUZ6T = function() {
        var bqn8f = function(sT5Y, r8j, i8a) {
            sT5Y.S8K();
            i8a.splice(r8j, 1)
        };
        return function() {
            k8c.mt3x(this.Xm3x, bqn8f)
        }
    } ();
    b8h.kp2x = function(r8j) {
        if (!this.kE2x) return;
        this.kE2x.kp2x(r8j)
    };
    b8h.sQ5V = function() {
        if (!this.kE2x) return 1;
        return this.kE2x.sQ5V()
    };
    b8h.jn2x = function() {
        if (!this.kE2x) return 1;
        return this.kE2x.jn2x()
    };
    b8h.NA9r = function(r8j, cu9l) {
        if (!this.kE2x) return;
        this.kE2x.NA9r(r8j, cu9l)
    };
    b8h.bjA7t = function(cu9l) {
        if (!this.kE2x) return;
        this.kE2x.bjA7t(cu9l)
    };
    io1x = a7h.sp5u(".#<uispace>{font-size:12px;line-height:160%;}.#<uispace> a{margin:0 2px;padding:2px 8px;color:#333;border:1px solid #aaa;text-decoration:none;}.#<uispace> .js-disabled{cursor:default;}.#<uispace> .js-selected{cursor:default;background:#bbb;}");
    bjL7E = a7h.et0x('{trim}{if !defined("noprv")||!noprv}<a href="#" class="zbtn zprv ${\'js-p-\'|seed}">${label.prev||"上一页"}</a>{/if}{list 1..number as x}<a href="#" class="zpgi zpg${x} ${\'js-i-\'|seed}"></a>{/list}{if !defined("nonxt")||!nonxt}<a href="#" class="zbtn znxt ${\'js-n-\'|seed}">${label.next||"下一页"}</a>{/if}{/trim}')
})(); (function() {
    var c8g = NEJ.P,
    Z9Q = NEJ.O,
    bn9e = NEJ.F,
    a7h = c8g("nej.e"),
    h8b = c8g("nej.v"),
    k8c = c8g("nej.u"),
    N8F = c8g("nej.ut"),
    b8h;
    if ( !! N8F.Xr3x) return;
    N8F.Xr3x = NEJ.C();
    b8h = N8F.Xr3x.O8G(N8F.cD0x);
    b8h.bj9a = function(e8e) {
        this.bk9b(e8e);
        this.Xs3x = e8e.pbtn;
        this.cj9a = e8e.nbtn;
        this.Xt3x = e8e.sbtn;
        this.Xu3x = e8e.ebtn;
        this.iG2x = e8e.event || "click";
        this.ki2x = e8e.selected || "js-selected";
        this.nD3x = e8e.disabled || "js-disabled";
        this.bUk6e(e8e.list);
        this.NA9r(e8e.index || 1, e8e.total || 1)
    };
    b8h.bA9r = function() {
        this.bF9w();
        delete this.bO9F;
        delete this.iG2x;
        delete this.Xs3x;
        delete this.cj9a;
        delete this.Xt3x;
        delete this.Xu3x;
        delete this.bJg2x;
        delete this.gg1x;
        delete this.cq9h;
        delete this.ki2x;
        delete this.nD3x
    };
    b8h.bUk6e = function() {
        var bjy7r = function(f8d) {
            this.bO9F.push(f8d);
            this.bT9K([[f8d, this.iG2x, this.cr9i.en0x(this, 0)]])
        };
        return function(i8a) {
            this.bO9F = [];
            this.bT9K([[this.Xs3x, "click", this.cr9i.en0x(this, -1)], [this.cj9a, "click", this.cr9i.en0x(this, 1)], [this.Xt3x, "click", this.cr9i.en0x(this, -2)], [this.Xu3x, "click", this.cr9i.en0x(this, 2)]]);
            k8c.bb9S(i8a, bjy7r, this)
        }
    } ();
    b8h.Ca8S = function(f8d, r8j) {
        if (r8j == null) {
            f8d.innerText = "";
            a7h.Y9P(f8d, "display", "none");
            a7h.v8n(f8d, this.ki2x)
        } else {
            f8d.innerText = r8j;
            a7h.Y9P(f8d, "display", "");
            r8j == this.cq9h ? a7h.w8o(f8d, this.ki2x) : a7h.v8n(f8d, this.ki2x)
        }
    };
    b8h.bjx7q = function() {
        if (this.cq9h <= 1) {
            a7h.w8o(this.Xs3x, this.nD3x);
            a7h.w8o(this.Xt3x, this.nD3x)
        } else {
            a7h.v8n(this.Xs3x, this.nD3x);
            a7h.v8n(this.Xt3x, this.nD3x)
        }
        if (this.cq9h >= this.gg1x) {
            a7h.w8o(this.cj9a, this.nD3x);
            a7h.w8o(this.Xu3x, this.nD3x)
        } else {
            a7h.v8n(this.cj9a, this.nD3x);
            a7h.v8n(this.Xu3x, this.nD3x)
        }
    };
    b8h.XF3x = bn9e;
    b8h.bjw7p = function() {
        this.XF3x();
        this.bjx7q();
        this.z8r("onchange", {
            last: this.bJg2x,
            total: this.gg1x,
            index: this.cq9h,
            ext: this.bjv7o
        })
    };
    b8h.bIL2x = function(r8j) {
        r8j = parseInt(r8j);
        if (isNaN(r8j) || this.gg1x == null) return ! 1;
        r8j = Math.max(1, Math.min(r8j, this.gg1x));
        this.bJg2x = this.cq9h;
        this.cq9h = r8j;
        return ! 0
    };
    b8h.bju7n = function(cu9l) {
        cu9l = parseInt(cu9l);
        if (isNaN(cu9l) || cu9l < 1) return ! 1;
        this.gg1x = cu9l;
        return ! 0
    };
    b8h.cr9i = function(d8f, eO0x) {
        h8b.cm9d(d8f);
        var G8y = h8b.U8M(d8f);
        if (!G8y || a7h.by9p(G8y, this.ki2x) || a7h.by9p(G8y, this.nD3x)) return;
        var r8j = G8y.innerText;
        switch (eO0x) {
        case 1:
        case - 1 : r8j = this.cq9h + eO0x;
            break;
        case 2:
            r8j = this.gg1x;
            break;
        case - 2 : r8j = 1;
            break
        }
        this.kp2x(r8j)
    };
    b8h.sQ5V = function() {
        return this.cq9h
    };
    b8h.kp2x = function(r8j) {
        var bTM6G = this.cq9h;
        this.bIL2x(r8j);
        if (bTM6G != this.cq9h) this.bjw7p();
        return this
    };
    b8h.jn2x = function() {
        return this.gg1x
    };
    b8h.Oe0x = function(cu9l) {
        if (this.bju7n(cu9l) && this.cq9h != null) {
            this.cq9h = 1;
            this.bjw7p()
        }
        return this
    };
    b8h.bjA7t = function(cu9l) {
        if (this.bju7n(cu9l)) {
            this.XF3x();
            this.bjx7q()
        }
        return this
    };
    b8h.NA9r = function(r8j, cu9l) {
        if (!this.bju7n(cu9l) || !this.bIL2x(r8j)) return this;
        this.bjw7p();
        return this
    }
})(); (function() {
    var c8g = NEJ.P,
    Z9Q = NEJ.O,
    a7h = c8g("nej.e"),
    k8c = c8g("nej.u"),
    cP0x = c8g("nej.x"),
    N8F = c8g("nej.ut"),
    b8h;
    if ( !! N8F.Ng8Y) return;
    N8F.Ng8Y = NEJ.C();
    b8h = N8F.Ng8Y.O8G(N8F.Xr3x);
    b8h.cs9j = function() {
        this.cx9o();
        var f8d = a7h.cY0x("span", "zdot");
        f8d.innerText = "...";
        this.XO3x = [f8d.cloneNode(true), f8d]
    };
    b8h.bA9r = function() {
        this.bF9w();
        this.bIG2x()
    };
    b8h.bIG2x = function() {
        a7h.mK3x(this.XO3x[0]);
        a7h.mK3x(this.XO3x[1])
    };
    b8h.XF3x = function() {
        this.bjv7o = {
            last: !1,
            first: !1,
            list: this.bO9F
        };
        this.bIG2x();
        this.Ca8S(this.bO9F[0], 1);
        var bI9z = 1,
        bm9d = this.bO9F.length;
        if (this.gg1x < bm9d) {
            for (var qy4C; bI9z < bm9d; bI9z++) {
                qy4C = bI9z + 1;
                this.Ca8S(this.bO9F[bI9z], qy4C > this.gg1x ? null: qy4C)
            }
            return
        }
        if (this.cq9h > 1) {
            var cA9r = Math.floor((bm9d - 2) / 2),
            bTG6A = this.gg1x - bm9d + 2,
            hW1x = Math.max(2, this.cq9h - cA9r);
            if (this.gg1x >= bm9d) {
                hW1x = Math.min(hW1x, bTG6A)
            }
            if (hW1x > 2) {
                this.bO9F[0].insertAdjacentElement("afterEnd", this.XO3x[0]);
                this.bjv7o.first = !0
            }
            for (var r8j;; bI9z++) {
                r8j = hW1x + bI9z - 1;
                if (r8j > this.cq9h) break;
                this.Ca8S(this.bO9F[bI9z], r8j)
            }
        }
        if (this.cq9h < this.gg1x) {
            var r8j, hW1x = this.cq9h + 1;
            for (var i = 0,
            l = bm9d - 2;; i++, bI9z++) {
                r8j = hW1x + i;
                if (bI9z > l || r8j > this.gg1x) break;
                this.Ca8S(this.bO9F[bI9z], r8j)
            }
            if (r8j < this.gg1x) {
                this.bO9F[bI9z].insertAdjacentElement("beforeBegin", this.XO3x[1]);
                this.bjv7o.last = !0
            }
            if (r8j <= this.gg1x) {
                this.Ca8S(this.bO9F[bI9z++], this.gg1x)
            }
        }
        for (; bI9z < bm9d; bI9z++) {
            this.Ca8S(this.bO9F[bI9z])
        }
    };
    a7h.bTE6y = cP0x.bTE6y = function(bG9x, e8e) {
        var D8v = a7h.kZ2x(bG9x);
        if (!D8v) return null;
        if (!N8F.VO2x(D8v, N8F.Ng8Y)) {
            e8e = e8e || {};
            var i8a = !e8e.clazz ? a7h.db0x(D8v) : a7h.F8x(D8v, e8e.clazz);
            e8e.pbtn = i8a.shift();
            e8e.nbtn = i8a.pop();
            e8e.list = i8a;
            delete e8e.clazz
        }
        return N8F.VO2x(D8v, N8F.Ng8Y, e8e || Z9Q)
    };
    cP0x.isChange = !0
})(); (function() {
    var c8g = NEJ.P,
    Z9Q = NEJ.O,
    fj0x = NEJ.R,
    a7h = c8g("nej.e"),
    k8c = c8g("nej.u"),
    H8z = c8g("nej.ut"),
    N8F = c8g("nej.ui"),
    b8h,
    K8C,
    gt1x;
    if ( !! N8F.Nc8U) return;
    N8F.Nc8U = NEJ.C();
    b8h = N8F.Nc8U.O8G(N8F.bjK7D);
    K8C = N8F.Nc8U.cl9c;
    b8h.bj9a = function(e8e) {
        e8e.number = parseInt(e8e.number) || 9;
        this.bk9b(e8e);
        this.kE2x = H8z.Ng8Y.A8s(this.fG1x)
    };
    b8h.fI1x = function(d8f) {
        if ( !! this.Xc3x.noend) {
            var bIu2x = d8f.ext || Z9Q,
            i8a = bIu2x.list || fj0x;
            if (bIu2x.last) {
                a7h.Y9P(i8a[i8a.length - 1], "display", "none")
            }
        }
        K8C.fI1x.apply(this, arguments)
    }
})(); (function() {
    var c8g = NEJ.P,
    Z9Q = NEJ.O,
    bn9e = NEJ.F,
    a7h = c8g("nej.e"),
    h8b = c8g("nej.v"),
    k8c = c8g("nej.u"),
    ba9R = c8g("nej.ui"),
    N8F = c8g("nej.ut"),
    b8h;
    if ( !! N8F.XX3x) return;
    N8F.XX3x = NEJ.C();
    b8h = N8F.XX3x.O8G(N8F.cD0x);
    b8h.bj9a = function(e8e) {
        this.iO2x = {};
        this.bk9b(e8e);
        this.iE2x = a7h.B8t(e8e.parent);
        this.fb0x = {
            parent: this.iE2x
        };
        this.oC3x = parseInt(e8e.limit) || 10;
        this.yB7u = parseInt(e8e.first) || this.oC3x;
        this.bTv6p(e8e.item);
        this.bTs6m(e8e.cache || Z9Q);
        this.bTl6f(e8e.pager || Z9Q);
        this.ge1x()
    };
    b8h.bA9r = function() {
        this.z8r("onbeforerecycle");
        this.MN8F();
        this.bF9w();
        if (this.iO2x.clear) {
            this.R8J.uk5p(this.iO2x.key)
        }
        this.R8J.S8K();
        if ( !! this.iU2x) {
            this.iU2x.S8K();
            delete this.iU2x
        }
        delete this.bIa2x;
        delete this.fG1x;
        delete this.Yl3x;
        delete this.R8J;
        delete this.iE2x;
        delete this.MG8y;
        delete this.fb0x;
        delete this.iO2x
    };
    b8h.bHZ2x = function() {
        var cZ0x = /\{(.*?)\}/gi,
        bTa6U = function(pT4X, j8b) {
            return (pT4X || "{id}{seed}").replace(cZ0x,
            function($1, $2) {
                var C8u = j8b[$2];
                return C8u == null ? $1: C8u
            })
        };
        return function(D8v) {
            var J8B = bTa6U(this.fb0x.jstIdTempalte, {
                id: D8v,
                seed: a7h.JO7H()
            });
            if (!this.fb0x.jstIdType) {
                return a7h.B8t(J8B)
            } else if (this.fb0x.jstIdType == 1) {
                return (a7h.F8x(this.iE2x, J8B) || [])[0]
            }
        }
    } ();
    b8h.zo7h = function(bI9z, be9V, gn1x, bm9d) {
        var o8g = {
            index: 1,
            total: 1
        };
        if (be9V >= bI9z) {
            o8g.index = Math.floor((be9V - bI9z) / gn1x) + 2
        }
        if (bm9d > bI9z) {
            o8g.total = Math.ceil((bm9d - bI9z) / gn1x) + 1
        }
        return o8g
    };
    b8h.bHY2x = function(J8B) {
        delete this.MG8y;
        this.GY0x = J8B;
        this.bT9K([[this.iE2x, "click", this.bSX6R.g8c(this)]])
    };
    b8h.bTv6p = function(p8h) {
        if (k8c.fw1x(p8h)) {
            this.bHY2x(p8h);
            return
        }
        NEJ.X(this.fb0x, p8h);
        var dT0x = this.fb0x.klass;
        delete this.fb0x.klass;
        if (k8c.fw1x(dT0x)) {
            this.bHY2x(dT0x);
            return
        }
        delete this.GY0x;
        this.MG8y = dT0x;
        this.fb0x.ondelete = this.z8r.g8c(this, "ondelete");
        this.fb0x.onupdate = this.z8r.g8c(this, "onupdate")
    };
    b8h.bTs6m = function(Q8I) {
        var dT0x = Q8I.klass,
        jL2x = NEJ.X({},
        Q8I);
        this.iO2x.key = jL2x.lkey;
        this.iO2x.data = jL2x.data || {};
        this.iO2x.clear = !!jL2x.clear;
        this.fb0x.pkey = jL2x.key || "id";
        jL2x.onlistload = this.bjo7h.g8c(this);
        jL2x.onpullrefresh = this.bSV6P.g8c(this);
        if ( !! dT0x && "onlistchange" in dT0x) {
            this.bT9K([[dT0x, "listchange", this.bjj7c.g8c(this)]])
        } else {
            jL2x.onitemadd = this.Yy3x.g8c(this);
            jL2x.onitemdelete = this.YA3x.g8c(this);
            jL2x.onitemupdate = this.bHA2x.g8c(this)
        }
        this.R8J = (dT0x || N8F.On0x).A8s(jL2x);
        if (Q8I.total != null) {
            this.R8J.Oe0x(this.iO2x.key, Q8I.total)
        }
        if ( !! Q8I.list) {
            this.R8J.ui5n(this.iO2x.key, Q8I.list)
        }
    };
    b8h.bTl6f = function(sT5Y) {
        this.bIa2x = sT5Y.klass || ba9R.Nc8U;
        this.fG1x = NEJ.X({},
        sT5Y);
        if (k8c.eC0x(sT5Y.parent)) {
            this.fG1x.parent = sT5Y.parent[0];
            this.LQ8I = sT5Y.parent.slice(1);
            if (!this.LQ8I || !this.LQ8I.length) {
                delete this.LQ8I
            }
        }
        delete this.fG1x.klass
    };
    b8h.MN8F = function() {
        var go1x = /^(?:table|tr|tbody|ul|ol|select)$/i;
        return function() {
            this.z8r("onbeforelistclear", {
                parent: this.iE2x
            });
            if ( !! this.fy1x && this.fy1x.length > 0) {
                this.fy1x = this.MG8y.S8K(this.fy1x);
                delete this.fy1x
            }
            if (go1x.test(this.iE2x.tagName)) {
                a7h.bPN4R(this.iE2x)
            } else {
                this.iE2x.innerHTML = ""
            }
        }
    } ();
    b8h.bjh7a = function(YH3x) {
        if ( !! this.fG1x.fixed) return;
        a7h.Y9P(this.fG1x.parent, "display", YH3x);
        k8c.bb9S(this.LQ8I,
        function(bG9x) {
            a7h.Y9P(bG9x, "display", YH3x)
        },
        this)
    };
    b8h.bjg7Z = function() {
        var r8j = this.fG1x.index || 1;
        delete this.fG1x.index;
        if ( !! this.iU2x) {
            r8j = this.iU2x.sQ5V()
        }
        this.zb7U({
            last: r8j,
            index: r8j
        })
    };
    b8h.zb7U = function(d8f) {
        this.z8r("onpagechange", d8f)
    };
    b8h.bHt2x = function(be9V) {
        this.iO2x.offset = be9V;
        this.WY3x()
    };
    b8h.bHs2x = function(e8e) {
        return e8e
    };
    b8h.WY3x = function() {
        this.LB8t();
        var j8b = this.iO2x.data;
        j8b.offset = this.iO2x.offset;
        var px4B = j8b.offset == 0;
        j8b.total = px4B;
        this.iO2x.limit = px4B ? this.yB7u: this.oC3x;
        j8b.limit = this.iO2x.limit;
        this.R8J.la2x(this.bHs2x(NEJ.X({},
        this.iO2x)))
    };
    b8h.bjo7h = function(e8e) {
        if (e8e.key != this.iO2x.key || e8e.offset != this.iO2x.offset) return;
        this.YR3x();
        var i8a = this.R8J.hi1x(e8e.key);
        if (!i8a || !i8a.length) {
            this.bjf7Y();
            return
        }
        var gn1x = e8e.limit,
        be9V = e8e.offset;
        if (this.bje7X(i8a, be9V, gn1x)) return;
        this.z8r("onbeforelistrender", {
            list: i8a,
            offset: be9V,
            parent: this.iE2x
        });
        if ( !! this.GY0x) {
            this.fb0x.xlist = i8a;
            this.fb0x.beg = be9V;
            this.fb0x.end = Math.min(i8a.length, be9V + gn1x) - 1;
            this.fb0x.act = "list";
            var dL0x = a7h.bX9O(this.GY0x, this.fb0x);
            this.Lv8n(dL0x)
        } else {
            this.fb0x.limit = gn1x;
            this.fb0x.offset = be9V;
            var gO1x = a7h.zn7g(i8a, this.MG8y, this.fb0x);
            this.Lt8l(gO1x)
        }
        this.z8r("onafterlistrender", {
            list: i8a,
            offset: be9V,
            parent: this.iE2x
        })
    };
    b8h.bSV6P = function(e8e) {
        if (!this.Yl3x) return;
        delete this.Yl3x;
        this.YR3x("onafterpullrefresh");
        this.ge1x()
    };
    b8h.bHf2x = function(r8j, cu9l) {
        if ( !! this.iU2x) {
            var Am7f = this.iU2x.sQ5V(),
            cxJ2x = this.iU2x.jn2x();
            if (Am7f > cu9l || cu9l != cxJ2x) {
                this.iU2x.S8K();
                delete this.iU2x;
                this.zb7U({
                    last: Am7f,
                    index: Math.min(r8j, cu9l)
                });
                return ! 0
            }
        } else {
            this.fG1x.index = r8j;
            this.fG1x.total = cu9l;
            this.iU2x = this.bIa2x.A8s(this.fG1x);
            this.iU2x.vF6z("onchange", this.zb7U.g8c(this));
            k8c.bb9S(this.LQ8I,
            function(bG9x) {
                this.iU2x.g8c(bG9x)
            },
            this)
        }
    };
    b8h.YZ3x = function() {
        var gq1x = +(new Date);
        return function(j8b) {
            var D8v = j8b[this.fb0x.pkey];
            if (!D8v) {
                j8b["dirty-data"] = !0;
                j8b[this.fb0x.pkey] = "dirty-" + gq1x++
            }
            return j8b
        }
    } ();
    b8h.Zb3x = function(j8b) {
        var D8v = j8b[this.fb0x.pkey];
        if ( !! j8b["dirty-data"]) {
            delete j8b["dirty-data"];
            delete j8b[this.fb0x.pkey]
        }
        return D8v
    };
    b8h.Zc3x = function() {
        var cxD2x = function(kf2x, mb3x) {
            this.iE2x.insertAdjacentElement(kf2x, mb3x)
        };
        return function(kf2x, j8b) {
            var JK7D = [j8b];
            if ( !! this.GY0x) {
                this.fb0x.xlist = JK7D;
                this.fb0x.beg = 0;
                this.fb0x.end = 0;
                this.fb0x.act = "add";
                this.Lv8n(a7h.bX9O(this.GY0x, this.fb0x), kf2x)
            } else {
                this.fb0x.limit = 1;
                this.fb0x.offset = 0;
                this.fb0x.parent = cxD2x.g8c(this, kf2x);
                var gO1x = a7h.zn7g(JK7D, this.MG8y, this.fb0x);
                this.fb0x.parent = this.iE2x;
                this.Lt8l(gO1x)
            }
        }
    } ();
    b8h.LB8t = bn9e;
    b8h.YR3x = function(T8L) {
        var d8f = {
            parent: this.iE2x
        };
        this.z8r(T8L || "onafterlistload", d8f);
        if (!d8f.stopped) {
            a7h.mK3x(this.cp9g)
        }
    };
    b8h.bje7X = bn9e;
    b8h.Zf3x = function(bE9v, kf2x) {
        if (k8c.fw1x(bE9v)) {
            if (!this.cp9g) this.cp9g = a7h.cY0x("div");
            this.cp9g.innerHTML = bE9v
        } else {
            this.cp9g = bE9v
        }
        this.iE2x.insertAdjacentElement(kf2x || "beforeEnd", this.cp9g)
    };
    b8h.yq7j = function(T8L, kT2x, kf2x) {
        var d8f = {
            parent: this.iE2x
        };
        this.z8r(T8L, d8f);
        if (!d8f.stopped) {
            this.Zf3x(d8f.value || kT2x, kf2x)
        }
    };
    b8h.bjf7Y = bn9e;
    b8h.Lv8n = bn9e;
    b8h.Lt8l = bn9e;
    b8h.bSX6R = function() {
        var go1x = /^(?:delete|update)$/;
        return function(d8f) {
            var f8d = h8b.U8M(d8f, "d:action");
            if (!f8d) return;
            var W8O = a7h.u8m(f8d, "action");
            if (!go1x.test(W8O)) return;
            var D8v = a7h.u8m(f8d, "id");
            if (!D8v) return;
            var p8h = this.R8J.ex0x(D8v);
            if (!p8h) return;
            h8b.bf9W(d8f);
            this.z8r("on" + W8O, {
                data: p8h,
                id: p8h[this.fb0x.pkey],
                body: a7h.B8t(this.bHZ2x(D8v))
            })
        }
    } ();
    b8h.Yy3x = bn9e;
    b8h.Xd3x = function(d8f) {
        var j8b = d8f.data || {},
        e8e = {
            data: j8b,
            key: this.iO2x.key,
            id: j8b[this.fb0x.pkey]
        };
        this.z8r("onbeforedelete", e8e);
        this.R8J.IT7M(e8e)
    };
    b8h.YA3x = bn9e;
    b8h.Xe3x = function(d8f) {
        var j8b = d8f.data || {},
        e8e = {
            data: j8b,
            key: this.iO2x.key
        };
        this.z8r("onbeforeupdate", e8e);
        this.R8J.WS3x(e8e)
    };
    b8h.bHA2x = function(d8f) {
        this.Lk8c(d8f, "onafterupdate");
        if (d8f.stopped) return;
        var D8v = d8f.data[this.fb0x.pkey];
        if ( !! this.fy1x) {
            var p8h = a7h.bKl3x(D8v);
            if ( !! p8h) p8h.ge1x(d8f.data)
        } else {
            var f8d = a7h.B8t(D8v + "" + a7h.JO7H());
            if (!f8d) return;
            var i8a = this.R8J.hi1x(d8f.key),
            r8j = k8c.dd0x(i8a, d8f.data);
            if (r8j < 0) return;
            this.fb0x.list = i8a;
            this.fb0x.beg = r8j;
            this.fb0x.end = r8j;
            this.fb0x.act = "update";
            var dL0x = a7h.bX9O(this.GY0x, this.fb0x);
            f8d.insertAdjacentHTML("afterEnd", dL0x);
            a7h.cz9q(f8d)
        }
    };
    b8h.Lk8c = function(d8f, T8L) {
        var p8h = d8f.data;
        if (!p8h || p8h[this.fb0x.pkey] == null) {
            this.z8r("onerror", d8f);
            d8f.stopped = !0
        }
        if (!d8f.stopped) {
            this.z8r(T8L, d8f)
        }
    };
    b8h.bja7T = bn9e;
    b8h.biZ7S = bn9e;
    b8h.bjj7c = function(d8f) {
        if (d8f.key != this.iO2x.key) return;
        switch (d8f.action) {
        case "add":
            this.Yy3x(d8f);
            break;
        case "delete":
            this.YA3x(d8f);
            break;
        case "update":
            this.bHA2x(d8f);
            break;
        case "refresh":
            this.ge1x();
            break;
        case "unshift":
            this.biZ7S(d8f.offset, d8f.limit);
            break;
        case "append":
            this.bja7T(d8f.offset, d8f.limit);
            break
        }
    };
    b8h.oY4c = function(p8h) {
        this.Xe3x({
            data: p8h
        })
    };
    b8h.ma3x = function(p8h) {
        this.Xd3x({
            data: p8h
        })
    };
    b8h.sk5p = function(p8h) {
        this.R8J.iY2x({
            data: p8h,
            key: this.iO2x.key
        })
    };
    b8h.sj5o = function() {
        return this.R8J
    };
    b8h.biY7R = function(j8b) {
        this.Zc3x("afterBegin", this.YZ3x(j8b));
        return this.Zb3x(j8b)
    };
    b8h.bGF2x = function(j8b) {
        this.Zc3x("beforeEnd", this.YZ3x(j8b));
        return this.Zb3x(j8b)
    };
    b8h.ge1x = function() {
        this.MN8F();
        this.bjg7Z()
    };
    b8h.cBz3x = function() {
        this.R8J.uk5p(this.iO2x.key);
        this.ge1x()
    };
    b8h.bpS8K = function() {
        if ( !! this.Yl3x) return;
        this.Yl3x = !0;
        this.yq7j("onbeforepullrefresh", "列表刷新中...", "afterBegin");
        this.R8J.bpS8K({
            key: this.iO2x.key,
            data: this.iO2x.data
        })
    };
    b8h.jn2x = function() {
        return this.R8J.jn2x(this.iO2x.key)
    };
    b8h.bGx2x = function() {
        return this.iU2x
    };
    b8h.VS2x = function() {
        return this.R8J.VS2x(this.iO2x.key)
    };
    b8h.cwq2x = function() {
        return this.fy1x
    }
})(); (function() {
    var c8g = NEJ.P,
    Z9Q = NEJ.O,
    fj0x = NEJ.R,
    k8c = c8g("nej.u"),
    a7h = c8g("nej.e"),
    N8F = c8g("nej.ut"),
    b8h,
    K8C;
    if ( !! N8F.iP2x) return;
    N8F.iP2x = NEJ.C();
    b8h = N8F.iP2x.O8G(N8F.XX3x);
    K8C = N8F.iP2x.cl9c;
    b8h.zo7h = function(be9V, bm9d) {
        return K8C.zo7h.call(this, this.yB7u, be9V, this.oC3x, bm9d)
    };
    b8h.biX7Q = function(r8j) {
        var be9V = 0;
        if (r8j > 1) be9V = this.yB7u + (r8j - 2) * this.oC3x;
        return be9V
    };
    b8h.zb7U = function(d8f) {
        K8C.zb7U.apply(this, arguments);
        if (!d8f.stopped) {
            this.bHt2x(this.biX7Q(d8f.index))
        }
    };
    b8h.LB8t = function() {
        this.MN8F();
        this.yq7j("onbeforelistload", "列表加载中...")
    };
    b8h.YR3x = function() {
        K8C.YR3x.apply(this, arguments);
        this.MN8F()
    };
    b8h.bje7X = function(i8a, be9V, gn1x) {
        var bu9l = this.zo7h(be9V, i8a.length);
        if (this.bHf2x(bu9l.index, bu9l.total)) return ! 0;
        this.bjh7a(bu9l.total > 1 ? "": "none")
    };
    b8h.bjf7Y = function() {
        this.yq7j("onemptylist", "没有列表数据！")
    };
    b8h.Zf3x = function(bE9v, kf2x) {
        if (!kf2x && k8c.fw1x(bE9v)) {
            this.iE2x.innerHTML = bE9v;
            return
        }
        K8C.Zf3x.apply(this, arguments)
    };
    b8h.Lv8n = function(dL0x) {
        this.iE2x.innerHTML = dL0x
    };
    b8h.Lt8l = function(gO1x) {
        this.fy1x = gO1x
    };
    b8h.Yy3x = function(d8f) {
        this.Lk8c(d8f, "onafteradd");
        if (!d8f.stopped) this.ge1x()
    };
    b8h.YA3x = function(d8f) {
        this.Lk8c(d8f, "onafterdelete");
        if (!d8f.stopped) this.ge1x()
    };
    b8h.bja7T = function(be9V, gn1x) {
        var r8j = 1;
        if ( !! this.iU2x) {
            r8j = this.iU2x.sQ5V()
        }
        var jB2x = this.biX7Q(r8j),
        gs1x = jB2x + (r8j > 1 ? this.oC3x: this.yB7u);
        if (be9V >= gs1x && !!this.iU2x) {
            var bu9l = this.zo7h(0, this.jn2x());
            this.iU2x.bjA7t(bu9l.total);
            this.bjh7a(bu9l.total > 1 ? "": "none")
        } else {
            this.ge1x()
        }
    };
    b8h.biZ7S = function(be9V, gn1x) {
        var r8j = 1;
        if ( !! this.iU2x) {
            r8j = this.iU2x.sQ5V()
        }
        var jB2x = this.biX7Q(r8j),
        bu9l = this.zo7h(jB2x, this.jn2x());
        this.zb7U({
            last: r8j,
            index: bu9l.index
        })
    }
})(); (function() {
    var c8g = NEJ.P,
    Z9Q = NEJ.O,
    bn9e = NEJ.F,
    a7h = c8g("nej.e"),
    h8b = c8g("nej.v"),
    H8z = c8g("nej.ut"),
    k8c = c8g("nej.u"),
    l8d = c8g("nm.x"),
    q8i = c8g("nm.d"),
    y8q = c8g("nm.w"),
    fc0x = 40,
    b8h,
    K8C;
    y8q.Zy4C = NEJ.C();
    b8h = y8q.Zy4C.O8G(H8z.cD0x);
    K8C = y8q.Zy4C.cl9c;
    b8h.cs9j = function() {
        this.cx9o()
    };
    b8h.bj9a = function(e8e) {
        this.bk9b(e8e);
        this.Sb1x = e8e.inputer;
        this.biW7P = e8e.tipper;
        this.bT9K([[this.Sb1x, "input", this.fC1x.g8c(this)]])
    };
    b8h.bA9r = function() {
        this.bF9w();
        this.GP0x(null, null)
    };
    b8h.fC1x = function(d8f) {
        if (d8f && d8f.type == "keyup" && (d8f.keyCode != 8 || d8f.keyCode != 68)) return;
        var T8L = this.Sb1x.value,
        cBA3x;
        if (l8d.Lu8m(T8L) > fc0x) {
            this.Sb1x.value = l8d.Bt8l(T8L, fc0x);
            this.GP0x("歌单名不能超过20个汉字或40个英文字符！", arguments.callee.g8c(this))
        } else if (T8L.indexOf("#") >= 0 || T8L.indexOf("@") >= 0) {
            this.GP0x("歌单名不能包含字符“@”和“#”！")
        } else {
            this.GP0x(null, null);
            this.z8r("onchange", {
                value: T8L
            })
        }
    };
    b8h.cvM2x = function() {
        this.fC1x()
    };
    b8h.GP0x = function() {
        var D8v = 0;
        return function(dA0x, bGq2x) {
            if ( !! D8v) window.clearTimeout(D8v);
            if (!dA0x) {
                a7h.w8o(this.biW7P, "f-vhide");
                this.bGo2x = !1;
                return
            }
            this.biW7P.innerHTML = '<i class="u-icn u-icn-25"></i>' + dA0x;
            a7h.v8n(this.biW7P, "f-vhide");
            this.bGo2x = !0;
            if (k8c.gr1x(bGq2x)) D8v = window.setTimeout(function() {
                this.GP0x(null, null);
                bGq2x()
            }.g8c(this), 1e3)
        }
    } ();
    b8h.bGn2x = function() {
        if (this.bGo2x) return ! 1;
        if (l8d.jy2x(this.Sb1x.value)) {
            this.GP0x("歌单名不能为空");
            return ! 1
        }
        return ! 0
    };
    b8h.fJ1x = function() {
        return this.Sb1x.value
    }
})(); (function() {
    var c8g = NEJ.P,
    Z9Q = NEJ.O,
    h8b = c8g("nej.v"),
    a7h = c8g("nej.e"),
    x8p = c8g("nej.j"),
    n8f = c8g("nm.l"),
    y8q = c8g("nm.w"),
    bC9t = c8g("nej.ui"),
    q8i = c8g("nm.d"),
    l8d = c8g("nm.x"),
    b8h,
    K8C;
    n8f.ZL4P = NEJ.C();
    b8h = n8f.ZL4P.O8G(n8f.ei0x);
    K8C = n8f.ZL4P.cl9c;
    b8h.cs9j = function() {
        this.cx9o()
    };
    b8h.bS9J = function() {
        this.cc9T();
        var i8a = a7h.F8x(this.m8e, "j-flag");
        this.ZM4Q = {
            inputer: i8a[0],
            tipper: i8a[1]
        };
        this.ij1x = {
            onerror: this.bGc2x.g8c(this),
            onitemadd: this.bGc2x.g8c(this)
        };
        this.ld2x = i8a[2];
        h8b.s8k(i8a[2], "click", this.Dr8j.g8c(this));
        h8b.s8k(i8a[3], "click", this.zQ7J.g8c(this));
        h8b.s8k(this.m8e, "keypress", this.bGa2x.g8c(this))
    };
    b8h.ca9R = function() {
        this.cd9U = "m-wgt-create"
    };
    b8h.bj9a = function(e8e) {
        e8e.clazz = " m-layer-w2";
        e8e.parent = e8e.parent || document.body;
        e8e.title = "新建歌单";
        e8e.draggable = !0;
        e8e.destroyalbe = !0;
        e8e.mask = true;
        this.bk9b(e8e);
        this.ZM4Q.inputer.value = e8e.name || "";
        this.uJ5O = y8q.Zy4C.A8s(this.ZM4Q);
        this.uJ5O.cvM2x();
        this.R8J = q8i.hw1x.A8s(this.ij1x);
        setTimeout(function() {
            this.ZM4Q.inputer.focus()
        }.g8c(this), 0)
    };
    b8h.bA9r = function() {
        this.bF9w();
        if (this.uJ5O) {
            this.uJ5O.S8K();
            delete this.uJ5O
        }
        this.rM5R(!1);
        this.ZM4Q.inputer.value = ""
    };
    b8h.rM5R = function(Rx1x) {
        this.ob3x = Rx1x;
        if (Rx1x) {
            this.ld2x.innerHTML = "<i>新建中...</i>";
            a7h.w8o(this.ld2x, "u-btn2-dis")
        } else {
            this.ld2x.innerHTML = "<i>新 建</i>";
            a7h.v8n(this.ld2x, "u-btn2-dis")
        }
    };
    b8h.Dr8j = function() {
        if (this.ob3x || !this.uJ5O.bGn2x()) return;
        var co9f = {
            key: "playlist_new-" + GUser.userId,
            data: {
                name: this.uJ5O.fJ1x()
            },
            offset: 1
        };
        this.R8J.iY2x(co9f);
        this.rM5R(!0)
    };
    b8h.bGc2x = function(d8f) {
        var cg9X = (d8f.result || Z9Q).code;
        if (!cg9X) {
            this.z8r("onsuccess", d8f.data)
        } else {
            this.z8r("onerror", d8f)
        }
        this.br9i()
    };
    b8h.zQ7J = function() {
        this.br9i()
    };
    b8h.bGa2x = function(d8f) {
        if (d8f.keyCode == 13) this.Dr8j()
    }
})(); (function() {
    var c8g = NEJ.P,
    Z9Q = NEJ.O,
    bn9e = NEJ.F,
    a7h = c8g("nej.e"),
    h8b = c8g("nej.v"),
    k8c = c8g("nej.u"),
    H8z = c8g("nej.ut"),
    x8p = c8g("nej.j"),
    l8d = c8g("nm.x"),
    q8i = c8g("nm.d"),
    n8f = c8g("nm.l"),
    b8h,
    K8C;
    n8f.biR7K = NEJ.C();
    b8h = n8f.biR7K.O8G(n8f.ei0x);
    K8C = n8f.biR7K.cl9c;
    b8h.cs9j = function() {
        this.cx9o()
    };
    b8h.bS9J = function() {
        this.cc9T();
        var i8a = a7h.F8x(this.m8e, "j-flag");
        this.ii1x = {
            limit: 301,
            parent: i8a[1],
            cache: {
                klass: q8i.hw1x,
                lkey: "playlist_new-" + GUser.userId,
                onlisterror: this.biQ7J.g8c(this)
            },
            item: {
                klass: "m-wgt-subscribe-item",
                cutStr: l8d.Bv8n,
                escape: k8c.dQ0x
            }
        };
        this.ij1x = {
            onsuccess: this.bae4i.g8c(this),
            onerror: this.ew0x.g8c(this)
        };
        h8b.s8k(i8a[0], "click", this.Dr8j.g8c(this));
        h8b.s8k(i8a[1], "click", this.mq3x.g8c(this))
    };
    b8h.ca9R = function() {
        this.cd9U = "m-wgt-subscribe"
    };
    b8h.bj9a = function(e8e) {
        e8e.parent = e8e.parent || document.body;
        e8e.clazz = " m-layer-w2";
        e8e.title = "添加到歌单";
        e8e.draggable = !0;
        e8e.mask = !0;
        this.bk9b(e8e);
        this.bai4m = (e8e.tracks || []).reverse();
        this.ii1x.item.size = this.bai4m.length;
        this.ij1x.name = e8e.name || "";
        this.bFU2x = q8i.vw6q.A8s({
            onaddsuccess: this.zG7z.g8c(this)
        });
        this.sw5B = q8i.hw1x.A8s({
            onlistload: this.ctX1x.g8c(this)
        });
        this.sw5B.bDv1x();
        k8c.bb9S(this.bai4m,
        function(p8h, r8j, i8a) {
            if (!k8c.lg2x(p8h)) {
                i8a[r8j] = this.bFU2x.ex0x(p8h) || p8h
            }
        },
        this)
    };
    b8h.ctX1x = function() {
        if (this.dC0x) this.dC0x.S8K();
        this.dC0x = H8z.iP2x.A8s(this.ii1x)
    };
    b8h.Dr8j = function() {
        this.br9i();
        if (this.DF8x) this.DF8x.S8K();
        this.DF8x = n8f.ZL4P.A8s(this.ij1x);
        this.DF8x.L8D()
    };
    b8h.mq3x = function() {
        var ctW1x = function(f8d) {
            while (f8d && f8d != document) {
                if (f8d.tagName.toLowerCase() == "li") {
                    return f8d
                }
                f8d = f8d.parentNode
            }
        };
        return function(d8f) {
            h8b.cm9d(d8f);
            var G8y = h8b.U8M(d8f),
            biP7I = ctW1x(G8y);
            if ( !! biP7I && !a7h.by9p(biP7I, "dis")) {
                this.bae4i({
                    id: a7h.u8m(biP7I, "id")
                })
            }
        }
    } ();
    b8h.bae4i = function(d8f) {
        var D8v = d8f.id;
        if (!D8v || !this.bai4m.length) return;
        this.bFU2x.iY2x({
            key: "track_playlist-" + D8v,
            data: {
                tracks: this.bai4m,
                pid: D8v
            }
        });
        this.br9i()
    };
    b8h.zG7z = function() {
        this.z8r("onsuccess");
        n8f.X8P.L8D({
            tip: "收藏成功"
        })
    };
    b8h.ew0x = function(d8f) {
        this.br9i();
        this.z8r("onerror", d8f);
        var cI0x = "收藏失败";
        switch (d8f.code) {
        case 405:
            cI0x = "操作过于频繁，先休息一下再试吧";
            break;
        case 507:
            cI0x = "歌单数量超过限制";
            break;
        case 502:
            cI0x = "歌曲已经存在"
        }
        n8f.X8P.L8D({
            tip: cI0x,
            type: 2
        })
    };
    b8h.biQ7J = function() {
        this.br9i();
        n8f.X8P.L8D({
            tip: "列表下载失败，请稍后再试",
            type: 2
        })
    };
    l8d.mi3x = function(e8e) {
        if (!GUser || !GUser.userId || GUser.userId <= 0) {
            top.login();
            return
        }
        n8f.biR7K.L8D(e8e)
    }
})(); (function() {
    var c8g = NEJ.P,
    Z9Q = NEJ.O,
    bn9e = NEJ.F,
    dn0x = c8g("nej.p"),
    a7h = c8g("nej.e"),
    h8b = c8g("nej.v"),
    x8p = c8g("nej.j"),
    k8c = c8g("nej.u"),
    l8d = c8g("nm.x");
    var biO7H, nP3x, V8N = decodeURIComponent(location.href),
    jq2x = /.+(https?:\/\/.+\/proxy.html)/.test(V8N) ? RegExp.$1: "";
    if ( !! jq2x) {
        x8p.vZ6T("mail_proxy_url", jq2x)
    } else {
        jq2x = x8p.tb5g("mail_proxy_url") || "about:blank"
    }
    biO7H = a7h.Xb3x({
        src: jq2x,
        onload: function() {
            nP3x = true
        }
    });
    var bFJ2x = function() {
        x8p.gZ1x("USER_TRIGGER", {
            value: true,
            expire: 1 / (24 * 60),
            path: "/"
        })
    };
    var ctd1x = function() {
        if (dn0x.dj0x.browser == "ie" && parseInt(dn0x.dj0x.version) < 9) {
            l8d.fh0x({
                clazz: "m-layer-w2",
                message: "当前浏览器版本过低，暂时无法使用，请升级后再试。"
            });
            return false
        }
        return true
    };
    l8d.GN9E = function(t8l, D8v, W8O) {
        if (!ctd1x()) return;
        bFJ2x();
        if (W8O == "stop") {
            if (!nP3x) throw "proxy not loaded";
            bFJ2x();
            biO7H.contentWindow.location.replace(jq2x + "#" + k8c.dh0x({
                to: "ifrmMusic",
                message: JSON.stringify({
                    s: +(new Date),
                    action: "stop"
                })
            }))
        } else {
            biO7H.contentWindow.location.replace(jq2x + "#" + k8c.dh0x({
                to: "ifrmMusic",
                message: JSON.stringify({
                    type: t8l,
                    id: D8v,
                    s: +(new Date),
                    action: W8O
                })
            }))
        }
    }
})(); (function() {
    var c8g = NEJ.P,
    Z9Q = NEJ.O,
    bn9e = NEJ.F,
    a7h = c8g("nej.e"),
    h8b = c8g("nej.v"),
    x8p = c8g("nej.j"),
    k8c = c8g("nej.u"),
    l8d = c8g("nm.x"),
    n8f = c8g("nm.l"),
    q8i = c8g("nm.d");
    var kU2x = q8i.hM1x.A8s();
    var op3x = q8i.vw6q.A8s({
        onlistload: csS1x,
        onitemload: csI1x,
        onerror: ew0x
    });
    var DN9E = q8i.qj4n.A8s({
        onlistload: csv1x,
        onitemload: cst1x,
        onerror: ew0x
    });
    var bFE2x = {};
    function wa6U(d8f) {
        var f8d = h8b.U8M(d8f, "d:resAction"),
        W8O = a7h.u8m(f8d, "resAction");
        if (f8d && (W8O == "play" || W8O == "addto")) {
            var t8l = parseInt(a7h.u8m(f8d, "resType"));
            bFz2x({
                action: W8O,
                type: t8l,
                id: a7h.u8m(f8d, "resId"),
                from: a7h.u8m(f8d, "resFrom"),
                data: a7h.u8m(f8d, "resData"),
                order: a7h.u8m(f8d, "resOrder"),
                node: f8d
            });
            if (t8l != 13) bFy2x(f8d)
        }
    }
    function bFz2x(bQ9H) {
        var W8O = bQ9H.action,
        t8l = bQ9H.type,
        D8v = bQ9H.id,
        dY0x = bQ9H.from,
        j8b = bQ9H.data,
        sD5I = bQ9H.order,
        e8e = {
            limit: 1e3,
            offset: 0,
            data: {
                id: D8v
            },
            ext: {
                id: D8v,
                action: W8O,
                type: t8l,
                from: dY0x,
                data: j8b,
                node: bQ9H.node
            }
        };
        if (W8O != "play" && W8O != "addto" || !t8l) return;
        if (window.GRef && GRef == "mail") {
            l8d.GN9E(t8l, D8v, W8O);
            return
        }
        switch (t8l) {
        case 13:
            e8e.key = "track_playlist-" + D8v;
            op3x.la2x(e8e);
            break;
        case 17:
            e8e.key = "program";
            e8e.id = D8v;
            DN9E.WE2x(e8e);
            if (W8O == "play") {
                x8p.bp9g("/api/dj/program/listen", {
                    query: {
                        id: D8v
                    }
                })
            }
            break;
        case 18:
            e8e.key = "track";
            e8e.id = D8v;
            op3x.WE2x(e8e);
            break;
        case 19:
            e8e.key = "track_album-" + D8v;
            op3x.la2x(e8e);
            break;
        case 24:
            e8e.key = "track_day";
            op3x.la2x(e8e);
            break;
        case 2:
            e8e.key = "track_artist_top-" + D8v;
            op3x.la2x(e8e);
            break;
        case 70:
            e8e.key = "program_djradio-" + D8v + "-" + sD5I;
            e8e.data.radioId = D8v;
            e8e.data.asc = sD5I == 2;
            DN9E.la2x(e8e);
            break
        }
    }
    function bFt2x(i8a) {
        var o8g = [];
        k8c.bb9S(i8a,
        function(p8h) {
            if (p8h.mainSong) {
                p8h.mainSong.program = p8h;
                o8g.push(p8h.mainSong);
                p8h.localupdatetime = +(new Date);
                op3x.cam7f(p8h.mainSong);
                p8h.mainTrackId = p8h.mainSong.id;
                delete p8h.mainSong
            } else {
                var bFf2x = op3x.ex0x(p8h.mainTrackId);
                bFf2x && o8g.push(bFf2x)
            }
        });
        return o8g
    }
    function baR4V(i8a, e8e) {
        var qR4V = e8e.action == "play" && e8e.type != 17 && e8e.type != 18,
        fM1x = e8e.action == "play";
        if (!i8a.length) return;
        if (e8e.type == 19) {
            i8a = l8d.IH7A(i8a, true, {
                play: true
            },
            {
                source: "album",
                sourceid: e8e.id
            })
        } else {
            i8a = l8d.IH7A(i8a, true, {
                play: true
            })
        }
        k8c.bb9S(i8a,
        function(p8h) {
            p8h.source = l8d.bnI8A({
                fid: e8e.from,
                fdata: e8e.data,
                type: e8e.type,
                rid: e8e.id
            },
            p8h.id)
        });
        top.player.addTo(i8a, qR4V, fM1x);
        kU2x.NC9t({
            rid: e8e.id,
            type: e8e.type,
            hash: l8d.Ig6a(),
            play: fM1x,
            source: e8e.from,
            sourceid: e8e.data
        })
    }
    function csS1x(d8f) {
        var eJ0x = d8f.ext || {};
        i8a = op3x.hi1x(d8f.key);
        baR4V(i8a, eJ0x);
        if (eJ0x.type == 13 && eJ0x.action == "play" && i8a && i8a.length > 0) {
            bFy2x(eJ0x.node);
            x8p.bp9g("/api/playlist/update/playcount", {
                query: {
                    id: eJ0x.id
                }
            })
        }
    }
    function csI1x(d8f) {
        var i8a = [op3x.ex0x(d8f.id)],
        bg9X = i8a[0],
        qa4e = l8d.oU4Y(bg9X),
        sc5h = bg9X.privilege || {};
        if (qa4e == 10) {
            l8d.tY5d(sc5h.fee || bg9X.fee, bg9X.id, "song", null, sc5h)
        } else if (qa4e == 100) {
            l8d.ic1x(null, null, null, true, bg9X)
        } else if (qa4e == 11) {
            l8d.bEP2x(bg9X.id, 18)
        } else {
            baR4V(i8a, d8f.ext)
        }
    }
    function csv1x(d8f) {
        var i8a = bFt2x(DN9E.hi1x(d8f.key));
        baR4V(i8a, d8f.ext)
    }
    function cst1x(d8f) {
        var i8a = bFt2x([DN9E.ex0x(d8f.id)]);
        baR4V(i8a, d8f.ext)
    }
    function ew0x() {
        top.player.tipPlay("无法播放，音乐已下线")
    }
    function bFy2x(f8d) {
        var t8l = a7h.u8m(f8d, "resType"),
        D8v = a7h.u8m(f8d, "resId"),
        J8B = t8l + "-" + D8v;
        if (bFE2x[J8B]) return;
        var bFe2x = a7h.B8t("play-count"),
        biJ7C = a7h.F8x(f8d.parentNode, "nb"),
        PY0x = null;
        if (bFe2x) {
            PY0x = bFe2x
        } else {
            PY0x = !!biJ7C && !!biJ7C[0] ? biJ7C[0] : null
        }
        if (PY0x) {
            var cA9r = PY0x.innerHTML;
            if (/^\d+$/.test(cA9r)) {
                PY0x.innerText = +cA9r + 1
            }
            bFE2x[J8B] = true
        }
    }
    l8d.cqX1x = function(f8d) {
        h8b.s8k(f8d || document.body, "click", wa6U.g8c(this))
    };
    l8d.cqV1x = function(W8O, t8l, D8v) {
        bFz2x({
            action: W8O,
            type: t8l,
            id: D8v
        })
    }
})(); (function() {
    var c8g = NEJ.P,
    Z9Q = NEJ.O,
    bn9e = NEJ.F,
    h8b = c8g("nej.v"),
    k8c = c8g("nej.u"),
    x8p = c8g("nej.j"),
    H8z = c8g("nej.ut"),
    q8i = c8g("nm.d"),
    b8h,
    K8C;
    q8i.ff0x({
        "share-all": {
            url: "/api/share/friends/resource",
            format: function(o8g, e8e) {
                this.cqC0x(o8g, e8e)
            },
            onerror: "onshareerror"
        },
        "share-sns": {
            url: "/api/share/resource/sns",
            format: function(o8g, e8e) {
                this.z8r("onshareall", e8e.result)
            },
            onerror: function(o8g, e8e) {
                this.z8r("onshareall", e8e.result)
            }
        },
        "share-private": {
            url: "/api/msg/private/send",
            onload: "onshareprivate",
            onerror: "onshareerror"
        },
        share_img_compound: {
            url: "/upload/event/img/compound",
            type: "POST",
            format: function(o8g, e8e) {
                e8e.options.picUrl = o8g.picUrl;
                this.bEH2x(e8e.options, e8e.result)
            },
            onerror: function(o8g, e8e) {
                this.z8r("onshareall", e8e.result)
            }
        },
        "vid-get": {
            url: "/api/video/coversvid/get",
            format: function(P8H, e8e) {
                this.pu4y("vid_info-" + e8e.data.nosKey, P8H);
                return P8H
            }
        },
        "video-submit": {
            url: "/api/cloudvideo/video/event/submit",
            filter: function(e8e) {},
            format: function(o8g, e8e) {
                e8e.data = e8e.data2;
                this.cn9e("share-all", e8e)
            },
            onerror: "onshareerror"
        }
    });
    q8i.biG7z = NEJ.C();
    b8h = q8i.biG7z.O8G(q8i.hn1x);
    b8h.cpH0x = function() {
        var tg5l = function(P8H, e8e) {
            e8e.times++;
            if (e8e.times > 10) {
                this.z8r("onvinfoerror", e8e.key, P8H)
            } else {
                setTimeout(eF0x.g8c(this, e8e), e8e.times * 1e3)
            }
        };
        var xw6q = function(P8H, e8e) {
            this.z8r("onvinfo", e8e.key, P8H)
        };
        var eF0x = function(e8e) {
            var V8N = e8e.url;
            x8p.bp9g(V8N + "?vinfo", {
                method: "GET",
                type: "json",
                mode: 1,
                onload: xw6q.en0x(this, e8e),
                onerror: tg5l.en0x(this, e8e)
            })
        };
        return function(e8e) {
            e8e.times = 0;
            eF0x.call(this, e8e)
        }
    } ();
    b8h.cBE3x = function() {
        var PB0x;
        var tg5l = function(P8H, e8e) {
            if (P8H.code > 0) {
                clearInterval(this.Ej9a);
                this.z8r("onviderror", e8e.data.nosKey)
            }
        };
        var xw6q = function(J8B, P8H) {
            if (P8H.vid && P8H.covers) {
                clearInterval(this.Ej9a);
                this.z8r("onvid", J8B, P8H)
            }
        };
        var eF0x = function(e8e) {
            if ( + (new Date) - PB0x > 60 * 60 * 1e3) {
                clearInterval(this.Ej9a);
                this.z8r("onviderror", e8e.data.nosKey);
                return
            }
            e8e.onload = xw6q.g8c(this, e8e.data.nosKey);
            e8e.onerror = tg5l.g8c(this);
            this.cn9e("vid-get", e8e)
        };
        return function(e8e) {
            if (!e8e || !e8e.data) return;
            PB0x = +(new Date);
            this.Ej9a = clearInterval(this.Ej9a);
            this.Ej9a = setInterval(eF0x.g8c(this, e8e), 1e4);
            eF0x.apply(this, arguments)
        }
    } ();
    b8h.cps0x = function() {
        this.Ej9a = clearInterval(this.Ej9a)
    };
    b8h.cqC0x = function(o8g, np3x) {
        if (o8g.event && np3x.snsTypes) {
            if (np3x.pics) {
                var bEu1x = [];
                for (var i = 0,
                len = np3x.pics.length; i < len; i++) {
                    bEu1x[i] = np3x.pics[i].originId
                }
                this.cn9e("share_img_compound", {
                    data: {
                        picIds: bEu1x.join(",")
                    },
                    options: np3x,
                    result: o8g
                })
            } else {
                np3x.picUrl = np3x.picUrl;
                this.bEH2x(np3x, o8g)
            }
        } else {
            this.z8r("onshareall", o8g)
        }
        var tL5Q = q8i.hM1x.A8s();
        tL5Q.fu1x(np3x.isPub ? "pubevent": "shareevent", {
            id: o8g.id
        })
    };
    b8h.bEH2x = function(np3x, o8g) {
        var co9f = {};
        co9f.eventid = o8g.event.id;
        co9f.eventtype = o8g.event.type;
        np3x.picUrl && (co9f.picUrl = np3x.picUrl);
        co9f.snsTypes = np3x.snsTypes;
        co9f.msg = np3x.data.msg || "";
        co9f.type = np3x.data.type;
        np3x.data.id && (co9f.id = np3x.data.id);
        this.cn9e("share-sns", {
            data: co9f,
            result: o8g
        })
    };
    b8h.cpm0x = function(e8e) {
        var j8b = {
            type: "",
            id: 0,
            threadId: "",
            msg: "",
            actId: 0,
            pics: "",
            uuid: "publish-" + +(new Date) + k8c.ns3x(5)
        };
        j8b = NEJ.EX(j8b, e8e);
        if (! (j8b.id > 0)) {
            delete j8b.id;
            j8b.type = "noresource"
        }
        if (!j8b.threadId) {
            delete j8b.threadId
        }
        if (!j8b.actId) {
            delete j8b.actId
        }
        if (!j8b.pics) {
            delete j8b.pics
        } else {
            j8b.pics = JSON.stringify(j8b.pics)
        }
        this.cn9e("share-all", {
            data: j8b,
            snsTypes: e8e.snsTypes,
            picUrl: e8e.picUrl,
            pics: e8e.pics,
            isPub: e8e.isPub
        })
    };
    b8h.coX0x = function(e8e) {
        this.cn9e("share-private", e8e)
    };
    b8h.coB0x = function(e8e) {
        this.cn9e("video-submit", e8e)
    }
})(); (function() {
    var c8g = NEJ.P,
    Z9Q = NEJ.O,
    bn9e = NEJ.F,
    h8b = c8g("nej.v"),
    k8c = c8g("nej.u"),
    H8z = c8g("nej.ut"),
    q8i = c8g("nm.d"),
    l8d = c8g("nm.x"),
    b8h,
    K8C;
    var cow0x = {
        40 : !0
    };
    q8i.ff0x({
        "event-list": {
            url: "/api/v1/event/get",
            filter: function(e8e) {
                e8e.data.getcounts = true;
                e8e.data.pagesize = e8e.data.limit;
                if (e8e.data.offset == 0) {
                    e8e.data.lasttime = -1
                }
                delete e8e.data.offset
            },
            format: function(P8H, e8e) {
                P8H.event = l8d.YK3x(P8H.event,
                function(p8h, r8j) {
                    return ! cow0x[p8h.type]
                });
                this.cov0x(P8H.event);
                e8e.data.lasttime = P8H.lasttime;
                if (P8H.event.length) {
                    P8H.event.length = e8e.limit
                }
                return {
                    list: P8H.event,
                    total: P8H.size
                }
            }
        },
        "event_latest-list": {
            url: "/api/act/event/getnews",
            format: function(P8H, e8e) {
                return {
                    list: P8H.events,
                    total: P8H.count
                }
            }
        },
        "event-pull": {
            url: "/api/event/getnews",
            filter: function(e8e) {
                e8e.data.pagesize = 20
            },
            format: function(P8H, e8e) {
                return P8H.event
            }
        },
        "ievent-get": {
            type: "GET",
            url: "/api/event/get",
            onload: "oneventload",
            onerror: "oneventloaderror"
        },
        "ievent-new-get": {
            type: "GET",
            url: "/api/event/getnews",
            onload: "oneventnewload"
        },
        "ievent_user-list": {
            type: "GET",
            url: "/api/event/get/{userId}",
            filter: function(e8e) {
                e8e.data.time = -1;
                e8e.data.getcounts = true
            },
            format: function(P8H, e8e) {
                P8H.events.length = e8e.limit;
                return {
                    list: P8H.events,
                    total: P8H.size
                }
            }
        },
        "ievent-res-get": {
            url: "/api/res/status",
            format: function(o8g, e8e) {
                o8g.conf = e8e.conf;
                return o8g
            }
        },
        "ievent-like": {
            url: "/api/resource/like",
            onload: "oneventlike",
            filter: function(e8e, bd9U) {
                if (e8e.like) {
                    if (e8e.comment) {
                        bd9U.url = "/api/v1/comment/like"
                    } else {
                        bd9U.url = "/api/resource/like"
                    }
                    bd9U.onload = "oneventlike";
                    bd9U.onerror = "oneventlikeerr"
                } else {
                    if (e8e.comment) {
                        bd9U.url = "/api/v1/comment/unlike"
                    } else {
                        bd9U.url = "/api/resource/unlike"
                    }
                    bd9U.onload = "oneventunlike";
                    bd9U.onerror = "oneventunlikeerr"
                }
            },
            format: function(o8g, e8e) {
                o8g.eid = e8e.eid;
                o8g.origin = e8e.origin;
                o8g.ext = e8e.ext;
                return o8g
            }
        },
        "ievent_user-del": {
            url: "/api/event/delete",
            format: function(o8g, e8e) {
                o8g.id = e8e.data.id;
                return o8g
            }
        },
        "event-del": {
            url: "/api/event/delete",
            filter: function(e8e, bd9U) {
                if (e8e.data.type == "nointer") {
                    bd9U.url = "/api/event/rcmd/reject"
                } else if (e8e.data.transcoding) {
                    bd9U.url = "/api/event/video/transcoding/delete"
                } else {
                    bd9U.url = "/api/event/delete"
                }
            },
            format: function(o8g, e8e) {
                o8g.id = e8e.data.id;
                return o8g
            }
        },
        "event_activity-del": {
            url: "/api/event/delete",
            format: function(o8g, e8e) {
                o8g.id = e8e.data.id;
                return o8g
            }
        },
        "event_activity-list": {
            url: "/api/act/event",
            filter: function(e8e) {
                e8e.data.lasttime = e8e.data.lasttime || -1;
                e8e.data.pagesize = e8e.data.limit;
                e8e.data.getcounts = true;
                delete e8e.data.offset
            },
            format: function(P8H, e8e) {
                e8e.data.lasttime = P8H.lasttime;
                var i8a = P8H.events;
                if (P8H.more) i8a = this.com0x(i8a, e8e.data.pagesize);
                return {
                    list: i8a,
                    total: P8H.size
                }
            },
            onerror: "onlisterror"
        }
    });
    q8i.xl6f = NEJ.C();
    b8h = q8i.xl6f.O8G(q8i.hn1x);
    b8h.cs9j = function() {
        this.cx9o()
    };
    b8h.biA7t = function(t8l, cU0x) {
        return t8l + "-" + cU0x
    };
    b8h.cBF3x = function(e8e) {
        this.cn9e("ievent-get", e8e)
    };
    b8h.cBG3x = function(e8e) {
        this.cn9e("ievent-new-get", e8e)
    };
    b8h.cBH3x = function(e8e) {
        this.cn9e("ievent-user-get", e8e)
    };
    b8h.cBI3x = function(t8l, cU0x) {
        return this.rF4J(this.biA7t(t8l, cU0x))
    };
    b8h.cBJ3x = function(GI9z, e8e) {
        if (!GI9z || !GI9z.length) return;
        e8e = e8e || {};
        var bv9m = {
            song: 2,
            album: 4,
            playlist: 1,
            mv: 3,
            program: 5
        };
        for (var i = 0,
        DL8D = [], bDz1x = [], j8b; i < GI9z.length; ++i) {
            j8b = GI9z[i];
            j8b = this.rF4J(this.biA7t(j8b.type, j8b.id));
            if (!j8b) {
                DL8D.push(GI9z[i].id);
                bDz1x.push(bv9m[GI9z[i].type] || 0)
            }
        }
        if (!DL8D.length) {
            this.z8r("oneventresload", e8e.conf);
            return
        }
        e8e.data = {
            ids: JSON.stringify(DL8D),
            types: JSON.stringify(bDz1x)
        };
        e8e.onload = this.cmA0x.g8c(this);
        this.cn9e("ievent-res-get", e8e)
    };
    b8h.cmA0x = function(o8g) {
        if (o8g.code != 200) {
            this.z8r("oneventreserror", o8g.code);
            return
        }
        var bv9m = {
            1 : "playlist",
            2 : "song",
            3 : "mv",
            4 : "album",
            5 : "program"
        };
        for (var i = 0,
        i8a = o8g.results; i < i8a.length; ++i) {
            this.pu4y(this.biA7t(bv9m[i8a[i].type], i8a[i].id), i8a[i])
        }
        this.z8r("oneventresload", o8g.conf)
    };
    b8h.bDj1x = function(j8b) {
        var J8B = "event-list";
        this.bpV8N(J8B, j8b);
        this.z8r("onitemadd", {
            key: J8B,
            action: "add",
            data: j8b,
            flag: -1
        })
    };
    b8h.vy6s = function(e8e) {
        this.cn9e("ievent-like", e8e)
    };
    b8h.ma3x = function(e8e) {
        this.cn9e("ievent-delete", e8e)
    };
    b8h.com0x = function(i8a, gn1x) {
        for (var i = i8a.length; i < gn1x; i++) i8a.push(null);
        return i8a
    };
    b8h.cov0x = function(i8a) {
        var o8g = [];
        if (!i8a || !i8a.length) return;
        k8c.bb9S(i8a,
        function(d8f) {
            d8f.biData = this.bDh1x(d8f)
        },
        this)
    };
    b8h.bDh1x = function() {
        var bbq5v = {
            32 : "comment",
            33 : "activity",
            34 : "recomment_artist"
        },
        clx9o = [13, 17, 18, 19, 20, 21, 22, 28, 31];
        return function(d8f) {
            var P8H = {
                id: d8f.id,
                sourceid: d8f.user.userId,
                alg: d8f.rcmdInfo ? d8f.rcmdInfo.alg: null,
                contentType: bbq5v[d8f.type] || (k8c.dd0x(clx9o, d8f.type) != -1 ? "user_event": "other")
            };
            return P8H
        }
    } ();
    b8h.EB9s = function(ckR9I, d8f) {
        var P8H = this.bDh1x(d8f);
        P8H.actionType = ckR9I;
        if (window.log) log("eventclick", P8H)
    };
    b8h.cBL3x = function(e8e) {
        this.cn9e("event_latest-list", e8e)
    }
})(); (function(factory) {
    window.SparkMD5 = factory()
})(function(undefined) {
    "use strict";
    var add32 = function(a, b) {
        return a + b & 4294967295
    },
    hex_chr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
    function cmn(q, a, b, x, s, t) {
        a = add32(add32(a, q), add32(x, t));
        return add32(a << s | a >>> 32 - s, b)
    }
    function md5cycle(x, k) {
        var a = x[0],
        b = x[1],
        c = x[2],
        d = x[3];
        a += (b & c | ~b & d) + k[0] - 680876936 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[1] - 389564586 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[2] + 606105819 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[3] - 1044525330 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[4] - 176418897 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[5] + 1200080426 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[6] - 1473231341 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[7] - 45705983 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[8] + 1770035416 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[9] - 1958414417 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[10] - 42063 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[11] - 1990404162 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[12] + 1804603682 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[13] - 40341101 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[14] - 1502002290 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[15] + 1236535329 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & d | c & ~d) + k[1] - 165796510 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[6] - 1069501632 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[11] + 643717713 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[0] - 373897302 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[5] - 701558691 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[10] + 38016083 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[15] - 660478335 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[4] - 405537848 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[9] + 568446438 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[14] - 1019803690 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[3] - 187363961 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[8] + 1163531501 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[13] - 1444681467 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[2] - 51403784 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[7] + 1735328473 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[12] - 1926607734 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b ^ c ^ d) + k[5] - 378558 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[8] - 2022574463 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[11] + 1839030562 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[14] - 35309556 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[1] - 1530992060 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[4] + 1272893353 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[7] - 155497632 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[10] - 1094730640 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[13] + 681279174 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[0] - 358537222 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[3] - 722521979 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[6] + 76029189 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[9] - 640364487 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[12] - 421815835 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[15] + 530742520 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[2] - 995338651 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (c ^ (b | ~d)) + k[0] - 198630844 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[7] + 1126891415 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[14] - 1416354905 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[5] - 57434055 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[12] + 1700485571 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[3] - 1894986606 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[10] - 1051523 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[1] - 2054922799 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[8] + 1873313359 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[15] - 30611744 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[6] - 1560198380 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[13] + 1309151649 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[4] - 145523070 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[11] - 1120210379 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[2] + 718787259 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[9] - 343485551 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        x[0] = a + x[0] | 0;
        x[1] = b + x[1] | 0;
        x[2] = c + x[2] | 0;
        x[3] = d + x[3] | 0
    }
    function md5blk(s) {
        var md5blks = [],
        i;
        for (i = 0; i < 64; i += 4) {
            md5blks[i >> 2] = s.charCodeAt(i) + (s.charCodeAt(i + 1) << 8) + (s.charCodeAt(i + 2) << 16) + (s.charCodeAt(i + 3) << 24)
        }
        return md5blks
    }
    function md5blk_array(a) {
        var md5blks = [],
        i;
        for (i = 0; i < 64; i += 4) {
            md5blks[i >> 2] = a[i] + (a[i + 1] << 8) + (a[i + 2] << 16) + (a[i + 3] << 24)
        }
        return md5blks
    }
    function md51(s) {
        var n = s.length,
        state = [1732584193, -271733879, -1732584194, 271733878],
        i,
        length,
        tail,
        tmp,
        lo,
        hi;
        for (i = 64; i <= n; i += 64) {
            md5cycle(state, md5blk(s.substring(i - 64, i)))
        }
        s = s.substring(i - 64);
        length = s.length;
        tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        for (i = 0; i < length; i += 1) {
            tail[i >> 2] |= s.charCodeAt(i) << (i % 4 << 3)
        }
        tail[i >> 2] |= 128 << (i % 4 << 3);
        if (i > 55) {
            md5cycle(state, tail);
            for (i = 0; i < 16; i += 1) {
                tail[i] = 0
            }
        }
        tmp = n * 8;
        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
        lo = parseInt(tmp[2], 16);
        hi = parseInt(tmp[1], 16) || 0;
        tail[14] = lo;
        tail[15] = hi;
        md5cycle(state, tail);
        return state
    }
    function md51_array(a) {
        var n = a.length,
        state = [1732584193, -271733879, -1732584194, 271733878],
        i,
        length,
        tail,
        tmp,
        lo,
        hi;
        for (i = 64; i <= n; i += 64) {
            md5cycle(state, md5blk_array(a.subarray(i - 64, i)))
        }
        a = i - 64 < n ? a.subarray(i - 64) : new Uint8Array(0);
        length = a.length;
        tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        for (i = 0; i < length; i += 1) {
            tail[i >> 2] |= a[i] << (i % 4 << 3)
        }
        tail[i >> 2] |= 128 << (i % 4 << 3);
        if (i > 55) {
            md5cycle(state, tail);
            for (i = 0; i < 16; i += 1) {
                tail[i] = 0
            }
        }
        tmp = n * 8;
        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
        lo = parseInt(tmp[2], 16);
        hi = parseInt(tmp[1], 16) || 0;
        tail[14] = lo;
        tail[15] = hi;
        md5cycle(state, tail);
        return state
    }
    function rhex(n) {
        var s = "",
        j;
        for (j = 0; j < 4; j += 1) {
            s += hex_chr[n >> j * 8 + 4 & 15] + hex_chr[n >> j * 8 & 15]
        }
        return s
    }
    function hex(x) {
        var i;
        for (i = 0; i < x.length; i += 1) {
            x[i] = rhex(x[i])
        }
        return x.join("")
    }
    if (hex(md51("hello")) !== "5d41402abc4b2a76b9719d911017c592") {
        add32 = function(x, y) {
            var lsw = (x & 65535) + (y & 65535),
            msw = (x >> 16) + (y >> 16) + (lsw >> 16);
            return msw << 16 | lsw & 65535
        }
    }
    if (typeof ArrayBuffer !== "undefined" && !ArrayBuffer.prototype.slice) { (function() {
            function clamp(val, length) {
                val = val | 0 || 0;
                if (val < 0) {
                    return Math.max(val + length, 0)
                }
                return Math.min(val, length)
            }
            ArrayBuffer.prototype.slice = function(from, to) {
                var length = this.byteLength,
                begin = clamp(from, length),
                end = length,
                num,
                target,
                targetArray,
                sourceArray;
                if (to !== undefined) {
                    end = clamp(to, length)
                }
                if (begin > end) {
                    return new ArrayBuffer(0)
                }
                num = end - begin;
                target = new ArrayBuffer(num);
                targetArray = new Uint8Array(target);
                sourceArray = new Uint8Array(this, begin, num);
                targetArray.set(sourceArray);
                return target
            }
        })()
    }
    function toUtf8(str) {
        if (/[\u0080-\uFFFF]/.test(str)) {
            str = unescape(encodeURIComponent(str))
        }
        return str
    }
    function utf8Str2ArrayBuffer(str, returnUInt8Array) {
        var length = str.length,
        buff = new ArrayBuffer(length),
        arr = new Uint8Array(buff),
        i;
        for (i = 0; i < length; i += 1) {
            arr[i] = str.charCodeAt(i)
        }
        return returnUInt8Array ? arr: buff
    }
    function arrayBuffer2Utf8Str(buff) {
        return String.fromCharCode.apply(null, new Uint8Array(buff))
    }
    function concatenateArrayBuffers(first, second, returnUInt8Array) {
        var result = new Uint8Array(first.byteLength + second.byteLength);
        result.set(new Uint8Array(first));
        result.set(new Uint8Array(second), first.byteLength);
        return returnUInt8Array ? result: result.buffer
    }
    function hexToBinaryString(hex) {
        var bytes = [],
        length = hex.length,
        x;
        for (x = 0; x < length - 1; x += 2) {
            bytes.push(parseInt(hex.substr(x, 2), 16))
        }
        return String.fromCharCode.apply(String, bytes)
    }
    function SparkMD5() {
        this.reset()
    }
    SparkMD5.prototype.append = function(str) {
        this.appendBinary(toUtf8(str));
        return this
    };
    SparkMD5.prototype.appendBinary = function(contents) {
        this.qI4M += contents;
        this.bm9d += contents.length;
        var length = this.qI4M.length,
        i;
        for (i = 64; i <= length; i += 64) {
            md5cycle(this.dW0x, md5blk(this.qI4M.substring(i - 64, i)))
        }
        this.qI4M = this.qI4M.substring(i - 64);
        return this
    };
    SparkMD5.prototype.end = function(raw) {
        var buff = this.qI4M,
        length = buff.length,
        i, tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ret;
        for (i = 0; i < length; i += 1) {
            tail[i >> 2] |= buff.charCodeAt(i) << (i % 4 << 3)
        }
        this.od3x(tail, length);
        ret = hex(this.dW0x);
        if (raw) {
            ret = hexToBinaryString(ret)
        }
        this.reset();
        return ret
    };
    SparkMD5.prototype.reset = function() {
        this.qI4M = "";
        this.bm9d = 0;
        this.dW0x = [1732584193, -271733879, -1732584194, 271733878];
        return this
    };
    SparkMD5.prototype.getState = function() {
        return {
            buff: this.qI4M,
            length: this.bm9d,
            hash: this.dW0x
        }
    };
    SparkMD5.prototype.setState = function(state) {
        this.qI4M = state.buff;
        this.bm9d = state.length;
        this.dW0x = state.hash;
        return this
    };
    SparkMD5.prototype.destroy = function() {
        delete this.dW0x;
        delete this.qI4M;
        delete this.bm9d
    };
    SparkMD5.prototype.od3x = function(tail, length) {
        var i = length,
        tmp, lo, hi;
        tail[i >> 2] |= 128 << (i % 4 << 3);
        if (i > 55) {
            md5cycle(this.dW0x, tail);
            for (i = 0; i < 16; i += 1) {
                tail[i] = 0
            }
        }
        tmp = this.bm9d * 8;
        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
        lo = parseInt(tmp[2], 16);
        hi = parseInt(tmp[1], 16) || 0;
        tail[14] = lo;
        tail[15] = hi;
        md5cycle(this.dW0x, tail)
    };
    SparkMD5.hash = function(str, raw) {
        return SparkMD5.hashBinary(toUtf8(str), raw)
    };
    SparkMD5.hashBinary = function(content, raw) {
        var hash = md51(content),
        ret = hex(hash);
        return raw ? hexToBinaryString(ret) : ret
    };
    SparkMD5.ArrayBuffer = function() {
        this.reset()
    };
    SparkMD5.ArrayBuffer.prototype.append = function(arr) {
        var buff = concatenateArrayBuffers(this.qI4M.buffer, arr, true),
        length = buff.length,
        i;
        this.bm9d += arr.byteLength;
        for (i = 64; i <= length; i += 64) {
            md5cycle(this.dW0x, md5blk_array(buff.subarray(i - 64, i)))
        }
        this.qI4M = i - 64 < length ? new Uint8Array(buff.buffer.slice(i - 64)) : new Uint8Array(0);
        return this
    };
    SparkMD5.ArrayBuffer.prototype.end = function(raw) {
        var buff = this.qI4M,
        length = buff.length,
        tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        i,
        ret;
        for (i = 0; i < length; i += 1) {
            tail[i >> 2] |= buff[i] << (i % 4 << 3)
        }
        this.od3x(tail, length);
        ret = hex(this.dW0x);
        if (raw) {
            ret = hexToBinaryString(ret)
        }
        this.reset();
        return ret
    };
    SparkMD5.ArrayBuffer.prototype.reset = function() {
        this.qI4M = new Uint8Array(0);
        this.bm9d = 0;
        this.dW0x = [1732584193, -271733879, -1732584194, 271733878];
        return this
    };
    SparkMD5.ArrayBuffer.prototype.getState = function() {
        var state = SparkMD5.prototype.getState.call(this);
        state.buff = arrayBuffer2Utf8Str(state.buff);
        return state
    };
    SparkMD5.ArrayBuffer.prototype.setState = function(state) {
        state.buff = utf8Str2ArrayBuffer(state.buff, true);
        return SparkMD5.prototype.setState.call(this, state)
    };
    SparkMD5.ArrayBuffer.prototype.destroy = SparkMD5.prototype.destroy;
    SparkMD5.ArrayBuffer.prototype.od3x = SparkMD5.prototype.od3x;
    SparkMD5.ArrayBuffer.hash = function(arr, raw) {
        var hash = md51_array(new Uint8Array(arr)),
        ret = hex(hash);
        return raw ? hexToBinaryString(ret) : ret
    };
    return SparkMD5
}); (function() {
    var c8g = NEJ.P,
    Z9Q = NEJ.O,
    bn9e = NEJ.F,
    a7h = c8g("nej.e"),
    h8b = c8g("nej.v"),
    x8p = c8g("nej.j"),
    eb0x = c8g("nej.g"),
    k8c = c8g("nej.u"),
    fA1x = c8g("nej.n"),
    H8z = c8g("nej.ut"),
    l8d = c8g("nm.x"),
    q8i = c8g("nm.d"),
    iZ2x = c8g("nm.x.nos"),
    y8q = c8g("nm.w");
    var ckv9m = 1024 * 256,
    ckr9i = 1024 * 1024 * 2,
    qp4t = {
        TOKEN_ERROR: -100,
        DNS_ERROR: -101
    },
    bCq1x = typeof File !== "undefined" ? File.prototype.slice || File.prototype.mozSlice || File.prototype.webkitSlice: bn9e,
    qq4u = {
        MD5_DONE: .2,
        TOKEN_GET: .22,
        DNS_GET: .24,
        UPLOADED: 1
    },
    je2x = {
        AUDIO: "audio",
        IMAGE: "image",
        TXT: "txt",
        RAR: "rar",
        OTHER: "other",
        VIDEO: "video"
    };
    var nt3x = {};
    var tL5Q = q8i.hM1x.A8s();
    iZ2x.cBM3x = function() {
        return je2x
    };
    var cjR9I = function() {
        return k8c.ns3x(6) + +(new Date)
    };
    var GG9x = function(ia1x, e8e) {
        if (!nt3x[e8e.taskId]) {
            return
        } (e8e.onuploading || bn9e).call(this, ia1x)
    };
    var bij7c = function(Q8I) {
        var cjr9i = Q8I.md5,
        cM0x = Q8I.file,
        cjl9c = cjr9i + cM0x.size;
        return "nos_file_hash_" + cjl9c
    };
    var cji9Z = function(Q8I) {
        var J8B = bij7c(Q8I),
        j8b = x8p.bGS2x(J8B, "{}");
        try {
            j8b = JSON.parse(j8b)
        } catch(e) {
            j8b = {}
        }
        return j8b
    };
    var ciW9N = function(Q8I, e8e) {
        if (!Q8I.md5) {
            return
        }
        var J8B = bij7c(Q8I),
        j8b = x8p.bGS2x(J8B, "{}");
        try {
            j8b = JSON.parse(j8b)
        } catch(e) {
            j8b = {}
        }
        NEJ.X(j8b, e8e);
        x8p.vZ6T(J8B, JSON.stringify(j8b))
    };
    var ciE9v = function(Q8I) {
        var J8B = bij7c(Q8I);
        x8p.Ov0x(J8B)
    };
    var ciy9p = function(Q8I, fx1x) {
        var V8N = Q8I.urls[Math.min(Q8I.urlIndex, Q8I.urls.length - 1)],
        cM0x = Q8I.file,
        kL2x = Q8I.bucket,
        me3x = Q8I.objectKey,
        eB0x = Q8I.token,
        bN9E = Q8I.context,
        ol3x = {},
        Nd8V = bCq1x.call(cM0x, Q8I.beg, Q8I.end),
        bx9o = {
            offset: Q8I.beg,
            complete: Q8I.lastChunk || false,
            version: "1.0"
        };
        if (bN9E) {
            bx9o.context = bN9E
        }
        ol3x["x-nos-token"] = eB0x;
        ol3x[eb0x.yj7c] = cM0x.type;
        Q8I.reqId = x8p.bp9g(V8N + "/" + kL2x + "/" + me3x, {
            type: "json",
            method: "POST",
            headers: ol3x,
            query: bx9o,
            data: Nd8V,
            onload: fx1x.onload,
            onerror: fx1x.onerror
        })
    };
    var ciu9l = function(o8g, Q8I, e8e) {
        o8g = {
            code: 200,
            fileName: e8e.file.name,
            size: e8e.file.size,
            type: e8e.file.type,
            bucket: Q8I.bucket,
            docId: Q8I.docId,
            objectKey: Q8I.objectKey,
            url: "//nos.netease.com/" + Q8I.bucket + "/" + Q8I.objectKey
        };
        ciE9v(Q8I);
        if (!nt3x[e8e.taskId]) {
            return
        }
        delete nt3x[e8e.taskId];
        tL5Q.fu1x("sysaction", {
            type: "nosuploadsuccess",
            location: location.href,
            result: JSON.stringify(o8g)
        }); (e8e.onsuccess || bn9e).call(this, o8g)
    };
    var cis9j = function(o8g, e8e) { (e8e.onerror || bn9e).call(this, o8g)
    };
    var cie9V = function(o8g, Q8I, e8e) {
        Q8I.context = o8g.context;
        Q8I.beg = o8g.offset;
        var ia1x = Q8I.beg / Q8I.file.size;
        ciW9N(Q8I, {
            bucket: Q8I.bucket,
            objectKey: Q8I.objectKey,
            token: Q8I.token,
            context: Q8I.context,
            beg: Q8I.beg,
            updateTime: +(new Date)
        });
        ia1x = qq4u.DNS_GET + (qq4u.UPLOADED - qq4u.DNS_GET) * ia1x;
        GG9x(ia1x, e8e);
        if (Q8I.lastChunk) {
            ciu9l(o8g, Q8I, e8e)
        } else {
            TK2x(Q8I, e8e)
        }
    };
    var cid9U = function(o8g, Q8I, e8e) {
        tL5Q.fu1x("sysaction", {
            type: "noschunkuploaderror",
            location: location.href,
            code: o8g.data,
            body: o8g.extData,
            ext: JSON.stringify(Q8I),
            timging: +(new Date) - Q8I.chuckUploadStartTime
        });
        if (Q8I.urlIndex < Math.max(Q8I.urls.length - 1, 5)) {
            Q8I.urlIndex++;
            TK2x(Q8I, e8e)
        } else {
            cis9j(o8g, e8e)
        }
    };
    var TK2x = function(Q8I, e8e) {
        if (!Q8I || Q8I.step == -1) {
            return
        }
        Q8I.end = Q8I.beg + ckv9m;
        if (Q8I.end >= Q8I.file.size) {
            Q8I.end = Q8I.file.size;
            Q8I.lastChunk = true
        }
        Q8I.chuckUploadStartTime = +(new Date);
        ciy9p(Q8I, {
            onload: cie9V.en0x(this, Q8I, e8e),
            onerror: cid9U.en0x(this, Q8I, e8e)
        })
    };
    var cic9T = function(o8g, Q8I, e8e) {
        Q8I.beg = o8g.offset;
        var ia1x = Q8I.beg / Q8I.file.size;
        ia1x = qq4u.DNS_GET + (qq4u.UPLOADED - qq4u.DNS_GET) * ia1x;
        GG9x(ia1x, e8e);
        TK2x(Q8I, e8e)
    };
    var chZ9Q = function(o8g, Q8I, e8e) {
        Q8I.beg = 0;
        delete Q8I.context;
        bif7Y(Q8I, e8e)
    };
    var bAW1x = function(MC8u, Q8I, e8e) {
        Q8I.lastChunk = false;
        Q8I.urls = MC8u;
        Q8I.urlIndex = 0;
        GG9x(qq4u.DNS_GET, e8e);
        if (Q8I.fromExist) {
            delete Q8I.fromExist;
            var V8N = Q8I.urls[Math.min(Q8I.urlIndex, Q8I.urls.length - 1)],
            kL2x = Q8I.bucket,
            me3x = Q8I.objectKey,
            eB0x = Q8I.token,
            bN9E = Q8I.context,
            ol3x = {},
            bx9o = {
                context: bN9E,
                version: "1.0"
            };
            ol3x["x-nos-token"] = eB0x;
            Q8I.reqId = x8p.bp9g(V8N + "/" + kL2x + "/" + me3x + "?uploadContext", {
                type: "json",
                method: "GET",
                headers: ol3x,
                query: bx9o,
                onload: cic9T.en0x(this, Q8I, e8e),
                onerror: chZ9Q.en0x(this, Q8I, e8e)
            })
        } else {
            Q8I.beg = 0;
            TK2x(Q8I, e8e)
        }
    };
    var chq9h = function(o8g, Q8I, e8e) {
        o8g.code = qp4t.DNS_ERROR; (e8e.onerror || bn9e).call(this, o8g)
    };
    var bAP1x = function(j8b, e8e) {
        var o8g = j8b.result || {},
        kL2x = o8g.bucket,
        me3x = o8g.objectKey,
        eB0x = o8g.token,
        Q8I = nt3x[e8e.taskId];
        if (!kL2x || !me3x || !eB0x || !Q8I) {
            o8g.code = qp4t.TOKEN_ERROR; (e8e.onerror || bn9e).call(this, o8g);
            return
        }
        Q8I.bucket = kL2x;
        Q8I.objectKey = me3x;
        Q8I.docId = o8g.docId;
        Q8I.token = eB0x;
        GG9x(qq4u.TOKEN_GET, e8e);
        if (location.protocol == "https:") {
            bAW1x(["//nosup-hz1.127.net"], Q8I, e8e)
        } else {
            Q8I.reqId = iZ2x.cgY9P({
                bucket: kL2x,
                onload: bAW1x.en0x(this, Q8I, e8e),
                onerror: chq9h.en0x(this, Q8I, e8e)
            })
        }
        Q8I.step = 1
    };
    var cgz8r = function(o8g, e8e) {
        o8g.code = qp4t.TOKEN_ERROR; (e8e.onerror || bn9e).call(this, o8g)
    };
    var bif7Y = function(Q8I, e8e) {
        var cM0x = e8e.file,
        fd0x = cM0x.name || "",
        eJ0x = fd0x.split(".").pop();
        iZ2x.Ua2x(NEJ.X({
            filename: fd0x,
            ext: eJ0x,
            onload: bAP1x.en0x(this, e8e),
            onerror: cgz8r.en0x(this, e8e)
        },
        e8e,
        function(p8h) {
            return k8c.gr1x(p8h) || k8c.lg2x(p8h)
        }))
    };
    var cgt8l = function(Q8I, e8e) {
        if (!Q8I || Q8I.step == -1) {
            return
        }
        Q8I.md5 = Q8I.spark.end();
        var GC9t = cji9Z(Q8I) || {},
        kL2x = GC9t.bucket,
        me3x = GC9t.objectKey,
        eB0x = GC9t.token;
        if (!kL2x || !me3x || !eB0x) {
            bif7Y(Q8I, e8e)
        } else {
            Q8I.context = GC9t.context;
            Q8I.beg = GC9t.beg;
            Q8I.fromExist = true;
            bAP1x({
                result: GC9t
            },
            e8e)
        }
    };
    var cgs8k = function(Fo9f, Q8I, e8e) {
        if (!Q8I || Q8I.step == -1) {
            return
        }
        Q8I.beg = Q8I.end;
        var ia1x = Q8I.beg / Q8I.file.size;
        ia1x = 0 + qq4u.MD5_DONE * ia1x;
        GG9x(ia1x, e8e);
        Q8I.spark.append(Fo9f.result);
        if (Q8I.lastChunk) {
            cgt8l(Q8I, e8e)
        } else {
            bAJ1x(Q8I, e8e)
        }
    };
    var cfY8Q = function(o8g, Q8I, e8e) {
        Q8I.md5 = "";
        bif7Y(Q8I, e8e)
    };
    var bAJ1x = function(Q8I, e8e) {
        if (!Q8I || Q8I.step == -1) {
            return
        }
        Q8I.end = Q8I.beg + ckr9i;
        if (Q8I.end >= Q8I.file.size) {
            Q8I.end = Q8I.file.size;
            Q8I.lastChunk = true
        }
        var Fo9f = new FileReader;
        Fo9f.onload = cgs8k.g8c(this, Fo9f, Q8I, e8e);
        Fo9f.onerror = cfY8Q.g8c(this, Fo9f, Q8I, e8e);
        Fo9f.readAsArrayBuffer(bCq1x.call(Q8I.file, Q8I.beg, Q8I.end))
    };
    iZ2x.gC1x = function(e8e) {
        var cM0x = e8e.file,
        fd0x = cM0x.name || "",
        eJ0x = fd0x.split(".").pop(),
        Fr9i = cjR9I();
        e8e.taskId = Fr9i;
        nt3x[Fr9i] = {
            step: 0
        };
        GG9x(0, e8e);
        var Q8I = nt3x[Fr9i];
        Q8I.id = Fr9i;
        Q8I.file = cM0x;
        Q8I.beg = 0;
        Q8I.lastChunk = false;
        Q8I.spark = new SparkMD5.ArrayBuffer;
        var cfm8e = e8e.onerror || bn9e;
        e8e.onerror = function() {
            if (!nt3x[Fr9i]) {
                return
            }
            delete nt3x[Fr9i];
            cfm8e.apply(this, arguments)
        };
        tL5Q.fu1x("sysaction", {
            type: "nosuploadstart",
            location: location.href
        });
        bAJ1x(Q8I, e8e);
        return Fr9i
    };
    iZ2x.jI2x = function(D8v) {
        var Q8I = nt3x[D8v];
        if (Q8I) {
            if (Q8I.step == 0) {
                delete nt3x[D8v]
            } else {
                Q8I.step = -1;
                if (Q8I.reqId) {
                    x8p.jI2x(Q8I.reqId)
                }
                delete nt3x[D8v]
            }
        }
    };
    iZ2x.Ua2x = function() {
        var yD7w = function(o8g, e8e) { (e8e.onload || bn9e).call(this, o8g)
        };
        var zy7r = function(o8g, e8e) { (e8e.onerror || bn9e).call(this, o8g)
        };
        var bAp1x = JSON.stringify({
            code: 200,
            size: "$(ObjectSize)"
        });
        return function(e8e) {
            var Um2x = e8e.returnBody || bAp1x;
            if (k8c.lg2x(Um2x)) {
                try {
                    JSON.stringify(Um2x)
                } catch(e) {
                    Um2x = bAp1x
                }
            }
            return x8p.bp9g("/api/nos/token/alloc", {
                method: "POST",
                type: "json",
                query: {
                    filename: e8e.filename || "",
                    ext: e8e.ext || "",
                    type: e8e.type || je2x.OTHER,
                    bucket: e8e.bucket || "",
                    local: e8e.local || false,
                    nos_product: e8e.nosProduct || 0,
                    return_body: Um2x
                },
                onload: yD7w.en0x(this, e8e),
                onerror: zy7r.en0x(this, e8e)
            })
        }
    } ();
    iZ2x.cgY9P = function() {
        var ceP8H = "//wanproxy.127.net/lbs";
        var yD7w = function(o8g, e8e) {
            if (o8g.lbs) {}
            var MC8u = o8g.upload;
            if (!MC8u || !MC8u.length) {
                zy7r(o8g, e8e)
            } (e8e.onload || bn9e).call(this, MC8u)
        };
        var zy7r = function(o8g, e8e) { (e8e.onerror || bn9e).call(this, o8g)
        };
        return function(e8e) {
            var kL2x = e8e.bucket;
            return x8p.bp9g(ceP8H, {
                method: "GET",
                type: "json",
                query: {
                    version: "1.0",
                    bucketname: kL2x
                },
                onload: yD7w.en0x(this, e8e),
                onerror: zy7r.en0x(this, e8e)
            })
        }
    } ();
    iZ2x.Up2x = function() {
        return typeof File !== "undefined" && typeof Blob !== "undefined" && typeof FileList !== "undefined" && ( !! Blob.prototype.webkitSlice || !!Blob.prototype.mozSlice || !!Blob.prototype.slice || false)
    }
})(); (function() {
    var c8g = NEJ.P,
    a7h = c8g("nej.e"),
    h8b = c8g("nej.v"),
    k8c = c8g("nej.u"),
    x8p = c8g("nej.j"),
    bZ9Q = c8g("nej.ut"),
    bC9t = c8g("nej.ui"),
    q8i = c8g("nm.d"),
    l8d = c8g("nm.x"),
    iZ2x = c8g("nm.x.nos"),
    E8w = c8g("nm.m"),
    n8f = c8g("nm.l"),
    y8q = c8g("nm.w"),
    b8h,
    K8C;
    var gt1x = a7h.in1x('<form action="" method="post" enctype="multipart/form-data"><input name="Object" type="hidden" value=""><input name="x-nos-token" type="hidden" value=""><input name="x-nos-entity-type" type="hidden" value="json" /><input name="Content-Type" type="hidden" value="" /><input class="j-file" type="file" name="file" /></form>');
    y8q.bAi1x = NEJ.C();
    b8h = y8q.bAi1x.O8G(bC9t.ee0x);
    b8h.ca9R = function() {
        this.cd9U = gt1x
    };
    b8h.bS9J = function() {
        this.cc9T();
        this.bz9q = this.m8e;
        this.hf1x = a7h.F8x(this.m8e, "j-file")[0];
        h8b.s8k(this.hf1x, "change", this.qT4X.g8c(this))
    };
    b8h.bj9a = function(e8e) {
        e8e = e8e || {};
        this.bk9b(e8e);
        this.hf1x.accept = e8e.accept || "*";
        this.vk6e = e8e
    };
    b8h.Uy2x = function() {
        return a7h.kZ2x(this.hf1x)
    };
    b8h.qT4X = function(d8f) {
        if (this.hf1x.value == "") return;
        var kj2x = this.hf1x.value.split("\\"),
        fd0x = kj2x.length > 0 ? kj2x[kj2x.length - 1] : kj2x[0],
        nM3x = (this.hf1x.files || [{}])[0];
        var gd1x = {
            files: this.hf1x.files,
            filename: fd0x,
            size: nM3x.size,
            cancelUpload: false
        };
        this.z8r("onchange", gd1x);
        if (gd1x.cancelUpload) {
            this.hf1x.value = "";
            return
        }
        if (gd1x.stopped) {
            return
        }
        this.Rk1x()
    };
    b8h.Rk1x = function() {
        if (this.hf1x.value == "") return;
        var kj2x = this.hf1x.value.split("\\"),
        fd0x = kj2x.length > 0 ? kj2x[kj2x.length - 1] : kj2x[0],
        eJ0x = (fd0x.split(".") || []).pop(),
        nM3x = (this.hf1x.files || [{}])[0],
        FE9v = (nM3x.type || "").split("/").shift();
        if (nM3x.size > 100 * 1024 * 1024) {
            return this.mB3x("onerror", {
                code: -200
            })
        }
        this.z8r("onuploading", 0);
        this.bAb0x = iZ2x.Ua2x(NEJ.X({
            onload: this.Px0x.en0x(this, fd0x),
            onerror: this.mB3x.g8c(this)
        },
        this.vk6e,
        function(p8h) {
            return k8c.gr1x(p8h) || k8c.lg2x(p8h)
        }))
    };
    b8h.Px0x = function(bR9I, fd0x) {
        var o8g = bR9I.result || {},
        kL2x = o8g.bucket,
        me3x = o8g.objectKey,
        eB0x = o8g.token;
        if (!kL2x || !me3x || !eB0x) {
            bR9I.code = -100;
            this.mB3x.call(this, bR9I);
            return
        }
        var nM3x = (this.hf1x.files || [{}])[0];
        var jk2x = a7h.db0x(this.bz9q);
        jk2x[0].value = me3x;
        jk2x[1].value = eB0x;
        if (nM3x.type && nM3x.type.indexOf("audio") == 0) {
            jk2x[3].value = "audio/mpeg"
        } else {
            jk2x[3].value = nM3x.type || ""
        }
        this.bz9q.action = "//nos.netease.com/" + kL2x;
        this.FJ9A = o8g;
        this.pA4E = fd0x;
        this.z8r("onuploading", .2);
        this.gC1x()
    };
    b8h.gC1x = function() {
        this.bAb0x = x8p.gC1x(this.bz9q, {
            type: "json",
            onload: this.tv5A.g8c(this),
            onerror: this.mB3x.g8c(this),
            onuploading: this.UN2x.g8c(this)
        })
    };
    b8h.jI2x = function() {
        x8p.jI2x(this.bAb0x);
        this.bz9q.reset()
    };
    b8h.tv5A = function(bR9I) {
        var eB0x = this.FJ9A,
        fd0x = this.pA4E,
        nM3x = (this.hf1x.files || [{}])[0],
        kT2x = {
            code: 200,
            fileName: fd0x,
            size: nM3x.size,
            bucket: eB0x.bucket,
            docId: eB0x.docId,
            objectKey: eB0x.objectKey,
            url: "//nos.netease.com/" + eB0x.bucket + "/" + eB0x.objectKey
        };
        if (!bR9I) {
            bR9I = kT2x
        }
        if (!bR9I.code || bR9I.code == 200) {
            this.z8r("onsuccess", NEJ.X(kT2x, bR9I))
        } else {
            this.z8r("onerror", bR9I)
        }
        this.bz9q.reset()
    };
    b8h.mB3x = function(bR9I) {
        this.z8r("onerror", bR9I);
        this.bz9q.reset()
    };
    b8h.UN2x = function(ia1x) {
        this.z8r("onuploading", .2 + ia1x.loaded / ia1x.total * .8)
    }
})(); (function() {
    var c8g = NEJ.P,
    a7h = c8g("nej.e"),
    h8b = c8g("nej.v"),
    k8c = c8g("nej.u"),
    x8p = c8g("nej.j"),
    bZ9Q = c8g("nej.ut"),
    bC9t = c8g("nej.ui"),
    q8i = c8g("nm.d"),
    l8d = c8g("nm.x"),
    iZ2x = c8g("nm.x.nos"),
    E8w = c8g("nm.m"),
    n8f = c8g("nm.l"),
    y8q = c8g("nm.w"),
    b8h,
    K8C;
    y8q.OS0x = NEJ.C();
    b8h = y8q.OS0x.O8G(bZ9Q.cD0x);
    b8h.bj9a = function(e8e) {
        e8e = e8e || {};
        this.bk9b(e8e);
        this.UQ2x = y8q.bAi1x.A8s(NEJ.X({
            parent: e8e.parent,
            onchange: this.qT4X.g8c(this),
            onuploading: this.z8r.g8c(this, "onuploading"),
            onsuccess: this.z8r.g8c(this, "onsuccess"),
            onerror: this.z8r.g8c(this, "onerror")
        },
        e8e,
        function(p8h) {
            return k8c.gr1x(p8h) || k8c.lg2x(p8h)
        }));
        if (e8e.multiple && iZ2x.Up2x()) {
            a7h.ga1x(this.UQ2x.Uy2x(), "multiple", true)
        }
        this.vk6e = e8e
    };
    b8h.qT4X = function(e8e) {
        var fd0x = e8e.filename,
        eJ0x = (fd0x.split(".") || []).pop();
        this.bzR0x = (e8e.files || [{}])[0];
        this.z8r("onchange", e8e);
        if (iZ2x.Up2x() && !e8e.stopped && !e8e.cancelUpload) {
            this.Rk1x(true);
            e8e.stopped = true
        }
    };
    b8h.Uy2x = function() {
        return this.UQ2x.Uy2x()
    };
    b8h.cdL8D = function() {
        return this.bzR0x
    };
    b8h.Rk1x = function(eO0x, cM0x) {
        cM0x = cM0x || this.bzR0x;
        if (iZ2x.Up2x()) {
            this.bzJ0x = iZ2x.gC1x(NEJ.X({
                file: cM0x,
                local: this.vk6e.bucket && this.vk6e.bucket.length,
                onuploading: this.z8r.g8c(this, "onuploading"),
                onsuccess: this.z8r.g8c(this, "onsuccess"),
                onerror: this.z8r.g8c(this, "onerror")
            },
            this.vk6e,
            function(p8h) {
                return k8c.gr1x(p8h) || k8c.lg2x(p8h)
            }));
            return this.bzJ0x
        } else if (!eO0x) {
            this.UQ2x.Rk1x()
        }
    };
    b8h.jI2x = function(D8v) {
        D8v = D8v || this.bzJ0x;
        if (D8v) {
            iZ2x.jI2x(D8v)
        }
        this.UQ2x.jI2x()
    }
})(); (function() {
    var c8g = NEJ.P,
    a7h = c8g("nej.e"),
    eb0x = c8g("nej.g"),
    h8b = c8g("nej.v"),
    k8c = c8g("nej.u"),
    x8p = c8g("nej.j"),
    fA1x = c8g("nej.n"),
    H8z = c8g("nej.ut"),
    ba9R = c8g("nej.ui"),
    y8q = c8g("nm.w"),
    n8f = c8g("nm.l"),
    q8i = c8g("nm.d"),
    l8d = c8g("nm.x"),
    M8E = c8g("nm.x.f"),
    iZ2x = c8g("nm.x.nos"),
    b8h,
    K8C,
    bhT6N = {
        0 : "",
        "-1": "不能添加重复图片",
        "-10": "最多只能添加9张",
        "-3": "请选择不超过5M的图片"
    },
    bhS6M = 5 * 1024 * 1024,
    cBR3x = 80,
    bzc0x = /\.(bmp|jpg|jpeg|png|gif)$/i;
    y8q.byW0x = NEJ.C();
    b8h = y8q.byW0x.O8G(H8z.tE5J);
    b8h.brz9q = function() {
        return {
            x: this.yY7R.clientWidth - this.m8e.offsetWidth,
            y: this.yY7R.clientHeight - this.m8e.offsetHeight
        }
    };
    y8q.bhM6G = NEJ.C();
    b8h = y8q.bhM6G.O8G(ba9R.ee0x);
    b8h.ca9R = function() {
        this.cd9U = "m-xwgt-share-upload"
    };
    b8h.bS9J = function() {
        this.cc9T();
        var i8a = a7h.F8x(this.m8e, "j-flag");
        this.Vb2x = i8a.shift();
        this.Gw9n = i8a.shift();
        this.Mv8n = i8a.shift();
        this.byU0x = {
            onchange: this.byS0x.en0x(this, 0),
            onerror: this.ew0x.g8c(this),
            onsuccess: this.tw5B.g8c(this),
            multiple: true,
            parent: this.Gw9n,
            accept: "image/bmp,image/jpg,image/jpeg,image/png,image/gif"
        };
        this.bhK6E = {
            onchange: this.byS0x.en0x(this, 1),
            onerror: this.ew0x.g8c(this),
            onsuccess: this.tw5B.g8c(this),
            multiple: true,
            accept: "image/bmp,image/jpg,image/jpeg,image/png,image/gif"
        };
        this.ccg8Y = y8q.OS0x.A8s(this.byU0x)
    };
    b8h.bj9a = function(e8e) {
        this.bk9b(e8e);
        this.bhK6E.parent = e8e.button;
        this.IL7E && this.IL7E.S8K();
        this.IL7E = y8q.OS0x.A8s(this.bhK6E);
        this.m8e.style.display = "none";
        if ( !! this.eP0x) {
            for (var i = this.eP0x.length - 1; i >= 0; i--) {
                a7h.cz9q(this.eP0x[i].element, false);
                if (this.eP0x[i].dragger) this.eP0x[i].dragger.S8K()
            }
        }
        this.eP0x = [];
        if (this.BJ8B) {
            clearTimeout(this.BJ8B)
        }
        this.Vm2x(0);
        this.Rp1x = 0;
        this.bT9K([[this.byU0x.parent, "click", this.byJ0x.g8c(this)], [this.bhK6E.parent, "click", this.byJ0x.g8c(this)]])
    };
    b8h.bA9r = function() {
        h8b.gG1x(this.sv5A, "click");
        if ( !! this.eP0x) {
            for (var i = this.eP0x.length - 1; i >= 0; i--) {
                a7h.cz9q(this.eP0x[i].element, false);
                if (this.eP0x[i].dragger) this.eP0x[i].dragger.S8K()
            }
        }
        this.eP0x = [];
        if (this.BJ8B) {
            clearTimeout(this.BJ8B)
        }
        this.BJ8B = 0;
        this.IL7E && this.IL7E.S8K();
        delete this.IL7E;
        this.bF9w()
    };
    b8h.byJ0x = function(d8f) {
        if (!iZ2x.Up2x() && this.eP0x.doing) {
            h8b.bf9W(d8f)
        }
    };
    b8h.byS0x = function(e8e, r8j) {
        var mN3x = e8e.files,
        ib1x;
        e8e.stopped = true;
        if (!mN3x) {
            if (e8e.filename) {
                mN3x = [{
                    name: e8e.filename,
                    isIE: true
                }]
            }
        }
        for (var i = 0,
        len = mN3x.length; i < len; i++) {
            if (!bzc0x.test(mN3x[i].name)) {
                this.bhJ6D({
                    path: mN3x[i].name,
                    index: r8j,
                    status: -4,
                    fail: "这不是<br>图片"
                })
            } else if (mN3x[i].size > bhS6M) {
                this.bhI6C( - 3);
                this.bhJ6D({
                    path: mN3x[i].name,
                    index: r8j,
                    status: -3,
                    fail: "上传<br>失败"
                })
            } else {
                this.bhJ6D({
                    path: mN3x[i].name,
                    file: mN3x[i],
                    index: r8j,
                    status: 0
                })
            }
        }
    };
    b8h.bhJ6D = function(sF5K) {
        if (this.eP0x.length >= 9) {
            this.bhI6C( - 10, 3e3, this.byD0x.g8c(this));
            return
        }
        this.cbr7k(sF5K);
        this.eP0x.push(sF5K);
        if ( !! this.eP0x.length) {
            this.m8e.style.display = ""
        }
        if (this.eP0x.length >= 9) {
            this.Gw9n.style.display = "none"
        } else {
            this.Gw9n.style.display = ""
        }
        this.Iw7p()
    };
    b8h.Iw7p = function() {
        var bhF6z = -1,
        byv0x = 0;
        for (var i = 0,
        l = this.eP0x.length; i < l; i++) {
            if (this.eP0x[i].status == 1) {
                return
            }
            if (this.eP0x[i].status == 0 && bhF6z < 0) {
                bhF6z = i
            }
            if (this.eP0x[i].status == 2 || this.eP0x[i].status < 0) {
                byv0x++
            }
        }
        var p8h = this.eP0x[bhF6z];
        if (p8h) { (p8h.index == 0 ? this.ccg8Y: this.IL7E).Rk1x(false, p8h.file);
            p8h.status = 1;
            this.eP0x.doing = p8h;
            this.z8r("onstartupload", {})
        } else if (byv0x == this.eP0x.length) {
            this.z8r("onfinishupload", {})
        }
    };
    b8h.bhE6y = function() {
        return this.eP0x.doing || {}
    };
    b8h.ew0x = function(d8f) {
        var sF5K = this.bhE6y();
        sF5K.status = -4;
        sF5K.fail = "上传<br>失败";
        this.bys0x(sF5K);
        this.eP0x.doing = null;
        this.Iw7p()
    };
    b8h.tw5B = function(d8f) {
        var sF5K = this.bhE6y(),
        fn1x = d8f.fileName.match(bzc0x);
        sF5K.picUrl = d8f.url;
        x8p.bp9g("/upload/event/img/v1", {
            query: {
                imgid: d8f.docId,
                format: fn1x[1]
            },
            type: "json",
            onload: this.byq0x.g8c(this),
            onerror: this.byq0x.g8c(this)
        })
    };
    b8h.byq0x = function(d8f) {
        if (d8f && d8f.code == 200 && d8f.picInfo) {
            var sF5K = this.bhE6y();
            sF5K.status = 2;
            var bu9l = NEJ.X({},
            d8f.picInfo);
            bu9l.originId = bu9l.originIdStr;
            bu9l.squareId = bu9l.squareIdStr;
            bu9l.rectangleId = bu9l.rectangleIdStr;
            bu9l.pcSquareId = bu9l.pcSquareIdStr;
            bu9l.pcRectangleId = bu9l.pcRectangleIdStr;
            bu9l.originJpgId = bu9l.originJpgIdStr || bu9l.originJpgId;
            sF5K.picInfo = bu9l;
            this.bys0x(sF5K);
            this.eP0x.doing = null;
            this.Iw7p()
        } else {
            this.ew0x(d8f)
        }
    };
    b8h.bhI6C = function(r8j, kk2x, fx1x) {
        if (this.Rp1x < r8j) {
            return
        }
        if (this.BJ8B) {
            clearTimeout(this.BJ8B);
            this.BJ8B = 0
        }
        if (kk2x) {
            this.Mv8n.innerText = bhT6N[r8j * 1];
            this.Rp1x = r8j;
            this.BJ8B = setTimeout(this.Vm2x.g8c(this, r8j, fx1x), kk2x)
        } else {
            this.Mv8n.innerText = bhT6N[r8j];
            this.Rp1x = r8j
        }
        this.Mv8n.style.display = ""
    };
    b8h.Vm2x = function(r8j, fx1x) {
        if (r8j && this.Rp1x !== r8j) {
            return
        }
        this.Rp1x = 0;
        this.Mv8n.innerText = bhT6N[0];
        this.Mv8n.style.display = "none";
        fx1x && fx1x()
    };
    b8h.cbr7k = function(cM0x) {
        var j8b = {};
        if (cM0x.fail) {
            j8b.fail = cM0x.fail
        }
        var dL0x = a7h.bX9O("m-xwgt-share-upload-preview", j8b);
        cM0x.element = a7h.no3x(dL0x);
        h8b.s8k(a7h.F8x(cM0x.element, "del")[0], "mousedown", this.cba7T.g8c(this, cM0x), false);
        this.Vb2x.insertBefore(cM0x.element, this.Vb2x.lastElementChild);
        cM0x.dragger = y8q.byW0x.A8s({
            view: this.Vb2x.parentNode,
            body: cM0x.element,
            overflow: false,
            direction: 0,
            isRelative: 1,
            ondragstart: this.Pq0x.g8c(this, cM0x),
            onchange: this.caZ7S.g8c(this, cM0x),
            ondragend: this.brE9v.g8c(this, cM0x)
        })
    };
    b8h.bys0x = function(cM0x) {
        if (!cM0x || !cM0x.element) {
            return false
        }
        var j8b = {};
        if (cM0x.fail) {
            j8b.fail = cM0x.fail
        } else {
            j8b.url = cM0x.picUrl
        }
        a7h.w8o(cM0x.element, "z-fail");
        cM0x.element.firstChild.outerHTML = a7h.bX9O("m-xwgt-share-upload-preview-img", j8b)
    };
    b8h.Pq0x = function(p8h, kf2x) {
        a7h.w8o(p8h.element, "z-sel")
    };
    b8h.caZ7S = function(p8h, kf2x) {
        var cBS3x, gS1x = this.eP0x.length - 1,
        nd3x;
        for (var i = gS1x; i >= 0; i--) {
            a7h.v8n(this.eP0x[i].element, "z-jump");
            if (this.eP0x[i] == p8h) {
                nd3x = i
            } else {
                a7h.eT0x(this.eP0x[i].element, {
                    left: "",
                    top: ""
                })
            }
        }
        var LD8v = {
            x: 46 + 92 * (nd3x % 5) + kf2x.left,
            y: 46 + 92 * (nd3x / 5 >> 0) + kf2x.top
        };
        var bhC6w = LD8v.x / 92 >> 0,
        bhA6u = LD8v.y / 92 >> 0,
        wN6H = Math.max(0, Math.min(gS1x, bhA6u * 5 + bhC6w));
        if (wN6H == nd3x) {
            return
        }
        var bZY7R = wN6H < nd3x;
        for (var i = Math.min(wN6H, nd3x); i <= Math.max(wN6H, nd3x); i++) {
            if (i !== nd3x) {
                var bxS0x = i % 5;
                if (bZY7R) {
                    if (bxS0x == 4) {
                        a7h.eT0x(this.eP0x[i].element, {
                            left: "-368px",
                            top: "92px"
                        })
                    } else {
                        a7h.eT0x(this.eP0x[i].element, {
                            left: "92px",
                            top: ""
                        })
                    }
                } else {
                    if (bxS0x == 0) {
                        a7h.eT0x(this.eP0x[i].element, {
                            left: "368px",
                            top: "-92px"
                        })
                    } else {
                        a7h.eT0x(this.eP0x[i].element, {
                            left: "-92px",
                            top: ""
                        })
                    }
                }
            }
        }
    };
    b8h.brE9v = function(p8h, kf2x) {
        var cBT3x, gS1x = this.eP0x.length - 1,
        nd3x;
        for (var i = gS1x; i >= 0; i--) {
            a7h.eT0x(this.eP0x[i].element, {
                left: "",
                top: ""
            });
            if (this.eP0x[i] == p8h) {
                nd3x = i
            }
        }
        a7h.v8n(p8h.element, "z-sel");
        var LD8v = {
            x: 46 + 92 * (nd3x % 5) + kf2x.left,
            y: 46 + 92 * (nd3x / 5 >> 0) + kf2x.top
        };
        var bhC6w = LD8v.x / 92 >> 0,
        bhA6u = LD8v.y / 92 >> 0,
        wN6H = Math.max(0, Math.min(gS1x, bhA6u * 5 + bhC6w));
        if (wN6H == nd3x) {
            return
        }
        this.Vb2x.insertBefore(p8h.element, (this.eP0x[wN6H + (wN6H > nd3x ? 1 : 0)] || {}).element || this.Gw9n);
        this.eP0x.splice(nd3x, 1);
        this.eP0x.splice(wN6H, 0, p8h)
    };
    b8h.cba7T = function(p8h, d8f) {
        a7h.cz9q(p8h.element, false);
        if (p8h.dragger) p8h.dragger.S8K();
        delete p8h.dragger;
        var r8j = -1;
        for (var i = this.eP0x.length - 1; i >= 0; i--) {
            if (this.eP0x[i] == p8h) {
                r8j = i;
                break
            }
        }
        this.eP0x.splice(r8j, r8j >= 0 ? 1 : 0);
        delete p8h;
        if (this.eP0x.length >= 9) {
            this.Gw9n.style.display = "none"
        } else {
            this.Gw9n.style.display = ""
        }
        if (!this.eP0x.length) {
            this.m8e.style.display = "none";
            this.Vm2x(0)
        } else {
            this.byD0x()
        }
        if (this.eP0x.doing == p8h) {
            this.eP0x.doing = null
        }
        this.Iw7p()
    };
    b8h.byD0x = function() {
        var bxQ0x = false;
        for (var i = 0,
        len = this.eP0x.length; i < len; i++) {
            if (this.eP0x[i].status == -3) {
                bxQ0x = true
            }
        }
        if (bxQ0x) {
            this.bhI6C( - 3)
        } else {
            this.Vm2x( - 3)
        }
    };
    b8h.Lf8X = function() {
        var ej0x = [];
        for (var i = this.eP0x.length - 1; i >= 0; i--) {
            if (this.eP0x[i].status == 2) {
                ej0x.unshift(this.eP0x[i].picInfo)
            }
        }
        return ej0x
    };
    H8z.fE1x.A8s({
        element: y8q.bhM6G,
        event: ["onstartupload", "onfinishupload"]
    })
})(); (function() {
    var c8g = NEJ.P,
    Z9Q = NEJ.O,
    fj0x = NEJ.R,
    a7h = c8g("nej.e"),
    h8b = c8g("nej.v"),
    k8c = c8g("nej.u"),
    ba9R = c8g("nej.ui"),
    N8F = c8g("nej.ut"),
    b8h,
    K8C;
    if ( !! N8F.ne3x) return;
    N8F.ne3x = NEJ.C();
    b8h = N8F.ne3x.O8G(N8F.XX3x);
    K8C = N8F.ne3x.cl9c;
    b8h.bj9a = function(e8e) {
        this.bZp7i(e8e.more);
        this.VV2x = a7h.B8t(e8e.sbody);
        this.bT9K([[this.VV2x, "scroll", this.bZg7Z.g8c(this)]]);
        var dl0x = e8e.delta;
        if (dl0x == null) dl0x = 30;
        this.MA8s = Math.max(0, dl0x);
        var cA9r = parseInt(e8e.count) || 0;
        this.jg2x = Math.max(0, cA9r);
        var gB1x = parseInt(e8e.number) || 0;
        if (gB1x > 1 && gB1x <= cA9r) {
            this.zB7u = gB1x
        }
        this.bk9b(e8e)
    };
    b8h.bA9r = function() {
        this.bF9w();
        delete this.Bz8r;
        delete this.VV2x;
        delete this.rT5Y;
        delete this.Wc2x
    };
    b8h.zo7h = function(be9V, bm9d) {
        var bI9z = this.yB7u + (this.jg2x - 1) * this.oC3x,
        gn1x = this.jg2x * this.oC3x;
        return K8C.zo7h.call(this, bI9z, be9V, gn1x, bm9d)
    };
    b8h.bZp7i = function(Wd2x) {
        this.Bz8r = a7h.B8t(Wd2x);
        this.bT9K([[this.Bz8r, "click", this.nS3x.g8c(this)]])
    };
    b8h.bhr6l = function(G8y) {
        G8y = G8y || {};
        if (this.rT5Y || !G8y) return;
        if (!G8y.scrollHeight) G8y = a7h.oQ4U();
        var be9V = a7h.hL1x(this.iE2x),
        dl0x = be9V.y + this.iE2x.offsetHeight - G8y.scrollTop - G8y.clientHeight,
        bhq6k = G8y.scrollHeight <= G8y.clientHeight;
        if (dl0x <= this.MA8s || bhq6k && !this.rT5Y) {
            this.nS3x()
        }
    };
    b8h.bZg7Z = function(d8f) {
        if (this.rT5Y) return;
        this.bhr6l(h8b.U8M(d8f))
    };
    b8h.zb7U = function(d8f) {
        K8C.zb7U.apply(this, arguments);
        if (!d8f.stopped) {
            this.MN8F();
            var be9V = 0;
            if (d8f.index > 1) {
                be9V = this.yB7u + ((d8f.index - 1) * this.jg2x - 1) * this.oC3x
            }
            this.hp1x = be9V;
            this.nS3x()
        }
    };
    b8h.bHs2x = function(e8e) {
        if ( !! this.zB7u) {
            var dl0x = e8e.offset > 0 ? this.oC3x: this.yB7u,
            gn1x = dl0x + this.oC3x * (this.zB7u - 1);
            this.hp1x = e8e.offset + gn1x;
            e8e.data.limit = gn1x;
            e8e.limit = gn1x;
            delete this.zB7u
        }
        return e8e
    };
    b8h.bjo7h = function(e8e) {
        delete this.Wc2x;
        K8C.bjo7h.apply(this, arguments);
        this.bxv0x()
    };
    b8h.bjj7c = function(d8f) {
        if (d8f.key != this.iO2x.key) return;
        switch (d8f.action) {
        case "refresh":
        case "append":
            delete this.Wc2x;
            break
        }
        K8C.bjj7c.apply(this, arguments)
    };
    b8h.LB8t = function() {
        this.yq7j("onbeforelistload", "列表加载中...");
        a7h.Y9P(this.Bz8r, "display", "none")
    };
    b8h.bje7X = function(i8a, be9V, gn1x) {
        var bm9d = i8a.length,
        bhl6f = i8a.loaded ? be9V + gn1x >= bm9d: be9V + gn1x > bm9d;
        this.hp1x = Math.min(this.hp1x, bm9d);
        a7h.Y9P(this.Bz8r, "display", bhl6f ? "none": "");
        if (bhl6f) this.rT5Y = !0;
        if (this.jg2x > 0) {
            var bu9l = this.zo7h(be9V, i8a.length);
            if (this.bHf2x(bu9l.index, bu9l.total)) return ! 0;
            var dl0x = this.yB7u - this.oC3x,
            gB1x = this.jg2x * this.oC3x;
            this.rT5Y = (be9V + gn1x - dl0x) % gB1x == 0 || bhl6f;
            a7h.Y9P(this.Bz8r, "display", this.rT5Y ? "none": "");
            this.bjh7a(this.rT5Y && bu9l.total > 1 ? "": "none")
        }
    };
    b8h.bjf7Y = function() {
        this.hp1x = 0;
        this.rT5Y = !0;
        this.yq7j("onemptylist", "没有列表数据！")
    };
    b8h.Lv8n = function(dL0x, kf2x) {
        this.iE2x.insertAdjacentHTML(kf2x || "beforeEnd", dL0x)
    };
    b8h.Lt8l = function(gO1x) {
        this.fy1x = this.fy1x || [];
        if (k8c.eC0x(gO1x)) {
            fj0x.push.apply(this.fy1x, gO1x)
        } else {
            this.fy1x.push(gO1x)
        }
    };
    b8h.Yy3x = function(d8f) {
        a7h.mK3x(this.cp9g);
        this.Lk8c(d8f, "onafteradd");
        var eO0x = d8f.flag;
        if (d8f.stopped || !eO0x) return;
        if (this.jg2x > 0) {
            this.bjg7Z();
            return
        }
        this.hp1x += 1;
        eO0x == -1 ? this.biY7R(d8f.data) : this.bGF2x(d8f.data)
    };
    b8h.YA3x = function(d8f) {
        this.Lk8c(d8f, "onafterdelete");
        if (d8f.stopped) return;
        if (this.jg2x > 0) {
            this.bjg7Z();
            return
        }
        var D8v = d8f.data[this.fb0x.pkey];
        if ( !! this.fy1x) {
            var p8h = a7h.bKl3x(D8v),
            r8j = k8c.dd0x(this.fy1x, p8h);
            if (r8j >= 0) {
                this.fy1x.splice(r8j, 1);
                this.hp1x -= 1
            }
            if ( !! p8h) p8h.S8K()
        } else {
            var f8d = a7h.B8t(this.bHZ2x(D8v));
            if ( !! f8d) this.hp1x -= 1;
            a7h.cz9q(f8d)
        }
        if (this.hp1x <= 0) this.nS3x()
    };
    b8h.bja7T = function(be9V, gn1x) {
        if (be9V != this.hp1x) return;
        if (this.VS2x()) {
            this.rT5Y = !1;
            this.bxv0x()
        }
    };
    b8h.biZ7S = function(be9V, gn1x) {
        if (be9V != 0) return;
        var JK7D = this.R8J.hi1x(this.iO2x.key);
        for (var i = gn1x - 1; i >= 0; i--) {
            this.biY7R(JK7D[i])
        }
    };
    b8h.bxv0x = function() {
        var G8y = this.VV2x;
        if (!G8y || this.rT5Y) return;
        this.bhr6l(this.VV2x)
    };
    b8h.ge1x = function() {
        delete this.rT5Y;
        K8C.ge1x.apply(this, arguments)
    };
    b8h.nS3x = function() {
        if ( !! this.Wc2x) return;
        this.Wc2x = !0;
        var be9V = this.hp1x;
        this.hp1x += be9V == 0 ? this.yB7u: this.oC3x;
        this.bHt2x(be9V)
    }
})(); (function() {
    var c8g = NEJ.P,
    Z9Q = NEJ.O,
    a7h = c8g("nej.e"),
    k8c = c8g("nej.u"),
    h8b = c8g("nej.v"),
    cP0x = c8g("nej.x"),
    N8F = c8g("nej.ut"),
    b8h;
    if ( !! N8F.FG9x) return;
    N8F.FG9x = NEJ.C();
    b8h = N8F.FG9x.O8G(N8F.cD0x);
    b8h.bj9a = function(e8e) {
        this.bk9b(e8e);
        this.iG2x = e8e.event || "click";
        this.ki2x = e8e.selected || "js-selected";
        this.nD3x = e8e.disabled || "js-disabled";
        this.bxn0x = !!e8e.inverse;
        this.bYw7p(e8e.list);
        this.RS1x(e8e.index || 0)
    };
    b8h.bA9r = function() {
        var bYq7j = function(f8d) {
            this.bhj6d(f8d, !1)
        };
        return function() {
            this.bF9w();
            k8c.bb9S(this.bO9F, bYq7j, this);
            delete this.bO9F;
            delete this.iG2x;
            delete this.cq9h;
            delete this.nD3x;
            delete this.ki2x;
            delete this.bxn0x
        }
    } ();
    b8h.bYw7p = function() {
        var bjy7r = function(p8h) {
            if (!p8h) return;
            this.bO9F.push(p8h);
            var r8j = this.bO9F.length - 1,
            dp0x = this.bhh6b[r8j];
            if (!dp0x) {
                dp0x = this.RS1x.g8c(this, r8j);
                this.bhh6b[r8j] = dp0x
            }
            this.bT9K([[p8h, this.iG2x, dp0x]])
        };
        return function(i8a) {
            this.bO9F = [];
            if (!this.bhh6b) this.bhh6b = [];
            k8c.bb9S(i8a, bjy7r, this)
        }
    } ();
    b8h.bhj6d = function(G8y, bYa7T) { !! bYa7T && !this.bxn0x ? a7h.w8o(G8y, this.ki2x) : a7h.v8n(G8y, this.ki2x)
    };
    b8h.RS1x = function(r8j, Ld8V, j8b) {
        var G8y = this.bO9F[r8j];
        if (Ld8V != !0 && (r8j == this.cq9h || !G8y || a7h.by9p(G8y, this.nD3x))) {
            h8b.cm9d(arguments[1]);
            return this
        }
        var d8f = {
            index: r8j,
            last: this.cq9h,
            list: this.la2x(),
            data: j8b || a7h.u8m(G8y, "value")
        };
        this.cq9h = r8j;
        G8y = this.bO9F[d8f.last];
        if ( !! G8y) this.bhj6d(G8y, !1);
        G8y = this.bO9F[this.cq9h];
        this.bhj6d(G8y, !0);
        this.z8r("onchange", d8f);
        if (!d8f.nostop) h8b.cm9d(arguments[1]);
        return this
    };
    b8h.sQ5V = function() {
        return this.cq9h
    };
    b8h.la2x = function() {
        return this.bO9F
    };
    a7h.bXW7P = cP0x.bXW7P = function(bG9x, e8e) {
        var D8v = a7h.kZ2x(bG9x);
        if (!D8v) return null;
        if (!N8F.VO2x(D8v, N8F.FG9x)) {
            e8e = e8e || {};
            e8e.list = !e8e.clazz ? a7h.db0x(D8v) : a7h.F8x(D8v, e8e.clazz);
            delete e8e.clazz
        }
        return N8F.VO2x(D8v, N8F.FG9x, e8e || Z9Q)
    };
    cP0x.isChange = !0
})(); (function() {
    var c8g = NEJ.P,
    Z9Q = NEJ.O,
    k8c = c8g("nej.u"),
    x8p = c8g("nej.j"),
    l8d = c8g("nm.x");
    var SETTING_KEY = "player-setting";
    var mU3x = {
        mode: 4,
        volume: .8,
        autoPlay: false,
        index: 0,
        lock: false
    };
    mU3x = x8p.tb5g(SETTING_KEY) || mU3x;
    l8d.bhf6Z = function() {
        return mU3x
    };
    l8d.Fh9Y = function(Fg9X) {
        if (Fg9X) {
            mU3x = Fg9X;
            x8p.vZ6T(SETTING_KEY, Fg9X)
        }
    }
})(); (function() {
    var c8g = NEJ.P,
    Z9Q = NEJ.O,
    a7h = c8g("nej.e"),
    h8b = c8g("nej.v"),
    k8c = c8g("nej.u"),
    H8z = c8g("nej.ut"),
    l8d = c8g("nm.x"),
    q8i = c8g("nm.d"),
    hh1x = c8g("nm.w.player.log");
    var kU2x = q8i.hM1x.A8s();
    var LogLevel = {
        ERROR: 10,
        INFO: 6,
        DEBUG: 2
    };
    var kH2x = function(t8l, bE9v, qa4e) {
        var cJ0x = l8d.ff0x("{0} {1} {2}", k8c.hJ1x(new Date, "yyyy-MM-dd HH:mm:ss"), t8l, bE9v);
        if (qa4e == LogLevel.ERROR) {
            kU2x.fu1x("playerror", {
                message: bE9v
            })
        }
        if (qa4e >= LogLevel.INFO) {
            kU2x.bZC7v(cJ0x)
        }
        if (location.hostname.indexOf("igame.163.com") != -1) {
            console.log(cJ0x)
        }
    };
    hh1x.bY9P = function() {
        kH2x("PLAY_ERROR", l8d.ff0x.apply(null, arguments), LogLevel.ERROR)
    };
    hh1x.pz4D = function() {
        kH2x("PLAY_INFO", l8d.ff0x.apply(null, arguments), LogLevel.INFO)
    };
    hh1x.cBW3x = function() {
        kH2x("PLAY_DEBUG", l8d.ff0x.apply(null, arguments), LogLevel.DEBUG)
    }
})(); (function() {
    var c8g = NEJ.P,
    a7h = c8g("nej.e"),
    h8b = c8g("nej.v"),
    H8z = c8g("nej.ut"),
    k8c = c8g("nej.u"),
    y8q = c8g("nm.w"),
    fx1x = c8g("flash.cb");
    var dU0x = ["loadedmetadata", "play", "pause", "ended", "waiting", "playing", "timeupdate", "progress", "stalled", "error"];
    var EQ9H, WG2x, tT5Y;
    y8q.bXI7B = function(t8l, dE0x) {
        if (t8l != "flash") {
            if (!EQ9H) {
                EQ9H = a7h.cY0x("audio");
                k8c.bb9S(dU0x,
                function(t8l) {
                    h8b.s8k(EQ9H, t8l, onMediaCallBack)
                })
            }
            if (EQ9H && EQ9H.canPlayType && EQ9H.canPlayType("audio/mpeg")) {
                dE0x(new MediaWrap("audio"));
                return
            }
        }
        if (!WG2x) {
            a7h.pW4a({
                src: "/style/swf/music/music.swf?v=20151204",
                hidden: true,
                params: {
                    allowscriptaccess: "always"
                },
                onready: function(ho1x) {
                    WG2x = ho1x;
                    k8c.bb9S(dU0x,
                    function(t8l) {
                        fx1x[t8l] = onMediaCallBack;
                        WG2x.addCallback(t8l, "flash.cb." + t8l)
                    });
                    dE0x(new MediaWrap("flash"))
                }.g8c(this)
            })
        } else {
            dE0x(new MediaWrap("flash"))
        }
    };
    function MediaWrap(EC9t) {
        var lY3x;
        H8z.fE1x.A8s({
            element: this,
            event: dU0x.concat(["interrupt", "recover"])
        });
        lY3x = EC9t == "audio" ? EQ9H: WG2x;
        this.type = EC9t;
        this.destroy = function() {};
        this.setSrc = function(V8N) {
            if (tT5Y != this) {
                var gS1x = tT5Y;
                if (gS1x) {
                    gS1x.interrupt()
                }
                tT5Y = this
            }
            if (EC9t == "flash") {
                lY3x.setSrc(V8N)
            } else {
                lY3x.src = V8N
            }
        };
        this.play = function() {
            if (tT5Y != this) {
                var gS1x = tT5Y;
                if (gS1x) {
                    gS1x.interrupt();
                    tT5Y = this;
                    this.recover()
                } else {
                    tT5Y = this
                }
            }
            if (EC9t == "flash") {
                lY3x.as_play()
            } else {
                lY3x.play()
            }
        };
        this.pause = function() {
            if (tT5Y != this) return;
            if (EC9t == "flash") {
                lY3x.as_pause()
            } else {
                lY3x.pause()
            }
        };
        this.load = function() {
            if (tT5Y != this) return;
            if (EC9t == "flash") {
                lY3x.as_load()
            } else {
                lY3x.load()
            }
        };
        this.interrupt = function() {
            onMediaCallBack({
                type: "interrupt"
            })
        };
        this.recover = function() {
            onMediaCallBack({
                type: "recover"
            })
        };
        this.getMedia = function() {
            return lY3x
        };
        var ok3x = ["Src", "Duration", "CurrentTime", "Paused", "Ended", "ReadyState", "Volume", "Error", "Buffered", "NetworkState"];
        k8c.bb9S(ok3x,
        function(T8L) {
            var Oy0x = "get" + T8L,
            OH0x = "set" + T8L;
            if (EC9t == "flash") {
                if (!this[Oy0x]) {
                    this[Oy0x] = function() {
                        return lY3x[Oy0x]()
                    }
                }
                if (!this[OH0x]) {
                    this[OH0x] = function(value) {
                        lY3x[OH0x](value)
                    }
                }
            } else {
                var bwC0x = T8L.slice(0, 1).toLowerCase() + T8L.slice(1);
                if (!this[Oy0x]) {
                    this[Oy0x] = function() {
                        return lY3x[bwC0x]
                    }
                }
                if (!this[OH0x]) {
                    this[OH0x] = function(value) {
                        lY3x[bwC0x] = value
                    }
                }
            }
        },
        this)
    }
    function onMediaCallBack(d8f) {
        if (tT5Y) {
            h8b.z8r(tT5Y, d8f.type, d8f)
        }
    }
})(); (function() {
    var c8g = NEJ.P,
    h8b = c8g("nej.v"),
    x8p = c8g("nej.j"),
    H8z = c8g("nej.ut"),
    dn0x = c8g("nej.p"),
    y8q = c8g("nm.w"),
    l8d = c8g("nm.x"),
    hh1x = c8g("nm.w.player.log"),
    b8h;
    var DEFAULT_BR = 128e3;
    var CDN_HOST_REG = /(m\d+\.music\.126\.net)/;
    var MAX_STALLED_RETRY = 2;
    var MediaError = {
        MEDIA_ERR_ABORTED: 1,
        MEDIA_ERR_NETWORK: 2,
        MEDIA_ERR_DECODE: 3,
        MEDIA_ERR_SRC_NOT_SUPPORTED: 4
    };
    var ErrorType = {
        INFO_GET_ERR: 1,
        NET_ERR: 2,
        UNKNOWN_ERR: 10
    };
    var LoadState = {
        LOAD_START: 1,
        LOADED_META: 2,
        IN_RELOAD: 3,
        IN_RE_GET_URL: 4,
        IN_SWITCH_CDN: 5,
        IN_SWITCH_MEDIA: 6
    };
    var RetryLevel = {
        NONE: 0,
        GET_URL: 1,
        RELOAD: 2,
        SWITCH_CDN: 3
    };
    var bwx0x = false;
    y8q.fB1x = NEJ.C();
    b8h = y8q.fB1x.O8G(H8z.cD0x);
    b8h.bj9a = function(e8e) {
        this.bk9b(e8e);
        this.cB9s = {};
        this.WT3x(e8e.media);
        x8p.bp9g("/api/cdns", {
            type: "json",
            onload: function(d8f) {
                if (d8f.code) {
                    this.pO4S = d8f.data
                }
            }.g8c(this)
        })
    };
    b8h.bA9r = function() {
        this.bF9w();
        delete this.cB9s
    };
    b8h.WV3x = function(bg9X) {
        if (!bg9X) return;
        var Al7e = this.cB9s.volume;
        if (this.dI0x) {
            this.dI0x.pause()
        }
        this.cB9s = {
            time: 0,
            id: bg9X.id,
            duration: bg9X.duration / 1e3,
            play: this.cB9s.play,
            stalledRetryCount: 0
        };
        if (Al7e != null) {
            this.cB9s.volume = Al7e
        }
        this.cB9s.loadState = LoadState.LOAD_START;
        this.bwt0x(bg9X.id);
        hh1x.pz4D("play song id: {0}", bg9X.id)
    };
    b8h.eu0x = function() {
        if (this.cB9s.error) {
            this.cB9s.error = null;
            if (this.cB9s.error == ErrorType.INFO_GET_ERR || this.bws0x()) {
                this.bwr0x()
            } else {
                this.PW0x()
            }
        } else {
            if (this.dI0x) {
                this.dI0x.play()
            }
        }
        this.cB9s.play = true;
        this.pc4g("play")
    };
    b8h.fH1x = function() {
        if (this.dI0x) {
            this.dI0x.pause()
        }
        this.cB9s.play = false;
        this.pc4g("pause")
    };
    b8h.oB3x = function(bw9n) {
        if (this.dI0x) {
            this.dI0x.setCurrentTime(bw9n)
        }
        this.cB9s.time = bw9n;
        hh1x.pz4D("seek to: {0}", bw9n)
    };
    b8h.bhb6V = function() {
        return this.cB9s.duration || 0
    };
    b8h.vU6O = function() {
        return !! this.cB9s.play
    };
    b8h.lV3x = function(Ri1x) {
        this.cB9s.volume = Ri1x;
        if (this.dI0x) {
            this.dI0x.setVolume(Ri1x)
        }
    };
    b8h.bha6U = function() {
        return this.cB9s.time
    };
    b8h.WT3x = function(t8l) {
        y8q.bXI7B(t8l,
        function(lY3x) {
            this.dI0x = lY3x;
            hh1x.pz4D("media loaded: {0}", lY3x.type);
            this.bT9K([[this.dI0x, "loadedmetadata", this.bWM6G.g8c(this)], [this.dI0x, "ended", this.bWK6E.g8c(this)], [this.dI0x, "waiting", this.yA7t.g8c(this)], [this.dI0x, "play", this.uf5k.g8c(this)], [this.dI0x, "pause", this.bgZ6T.g8c(this)], [this.dI0x, "playing", this.RE1x.g8c(this)], [this.dI0x, "timeupdate", this.bWz6t.g8c(this)], [this.dI0x, "progress", this.sd5i.g8c(this)], [this.dI0x, "stalled", this.bgX6R.g8c(this)], [this.dI0x, "interrupt", this.fH1x.g8c(this)], [this.dI0x, "recover", this.bWl6f.g8c(this)], [this.dI0x, "error", this.ew0x.g8c(this)]]);
            if (this.cB9s) {
                if (this.cB9s.loadState == LoadState.LOAD_START || this.cB9s.loadState == LoadState.IN_SWITCH_MEDIA) {
                    this.bgW6Q();
                    if (this.cB9s.volume != null) {
                        this.dI0x.setVolume(this.cB9s.volume)
                    }
                }
            }
        }.g8c(this))
    };
    b8h.bWd6X = function(t8l) {
        this.Ke7X();
        this.dI0x.destroy();
        this.cB9s.loadState = LoadState.IN_SWITCH_MEDIA;
        this.yA7t();
        this.WT3x(t8l);
        hh1x.pz4D("switch media")
    };
    b8h.cBZ3x = function() {
        return this.dI0x
    };
    b8h.bwt0x = function() {
        this.yA7t();
        x8p.bp9g("/api/song/enhance/player/url", {
            type: "json",
            query: {
                ids: JSON.stringify([this.cB9s.id]),
                br: DEFAULT_BR
            },
            onload: this.bvS0x.g8c(this),
            onerror: this.bvS0x.g8c(this)
        })
    };
    b8h.bvS0x = function(d8f) {
        if (d8f.code == 200 && d8f.data && d8f.data.length) {
            var bu9l = d8f.data[0];
            if (!bu9l.url) {
                this.cB9s.error = ErrorType.INFO_GET_ERR;
                this.pc4g("error", {
                    code: this.cB9s.error
                });
                return
            }
            this.cB9s.playUrl = bu9l.url;
            this.cB9s.expireTime = (new Date).getTime() + bu9l.expi * 1e3;
            this.bgW6Q()
        } else {
            this.cB9s.error = ErrorType.INFO_GET_ERR;
            this.pc4g("error", {
                code: this.cB9s.error
            });
            hh1x.bY9P("info load error")
        }
    };
    b8h.bgW6Q = function() {
        if (this.dI0x) {
            var V8N = this.cB9s.playUrl;
            if (this.cB9s.time > 0 && (this.cB9s.loadState == LoadState.IN_RE_GET_URL || this.cB9s.loadState == LoadState.IN_RE_GET_URL)) {
                V8N += "#t=" + this.cB9s.time
            }
            this.dI0x.setSrc(V8N);
            hh1x.pz4D("load mp3: {0},loadState: {1}.", V8N, this.cB9s.loadState)
        }
    };
    b8h.bvQ0x = function() {
        if (/#t=(\d+)$/.test(this.dI0x.getSrc())) {
            return parseInt(RegExp.$1) || 0
        } else {
            return 0
        }
    };
    b8h.PW0x = function() {
        var bw9n = parseInt(this.cB9s.time) || 0,
        bVA6u = this.bvQ0x();
        if (bw9n === bVA6u) {
            this.dI0x.load()
        } else {
            this.dI0x.setSrc(this.cB9s.playUrl + "#t=" + bw9n)
        }
        this.cB9s.loadState = LoadState.IN_RELOAD;
        this.yA7t();
        hh1x.pz4D("reload from: {0}", bw9n)
    };
    b8h.bwr0x = function() {
        this.cB9s.loadState = LoadState.IN_RE_GET_URL;
        this.bwt0x()
    };
    b8h.bvO0x = function() {
        var sB5G = getHost(this.cB9s.playUrl);
        if (sB5G) {
            for (var i = 0; i < this.pO4S.length; i++) {
                var hK1x = this.pO4S[i] || [],
                r8j = hK1x.indexOf(sB5G);
                if (r8j >= 0 && hK1x.length > 1) {
                    return hK1x[(r8j + 1) % hK1x.length]
                }
            }
        }
        function getHost(V8N) {
            if (CDN_HOST_REG.test(V8N)) return RegExp.$1
        }
    };
    b8h.bVp6j = function() {
        this.cB9s.playUrl = this.cB9s.playUrl.replace(CDN_HOST_REG, this.bvO0x());
        this.cB9s.loadState = LoadState.IN_SWITCH_CDN;
        this.bgW6Q();
        this.yA7t()
    };
    b8h.bWM6G = function() {
        if (this.cB9s.loadState == LoadState.LOAD_START) {
            this.cB9s.loadState = LoadState.LOADED_META;
            if (this.dI0x.type == "audio") {
                this.cB9s.duration = this.dI0x.getDuration()
            }
            this.pc4g("loadedmeta", {
                duration: this.cB9s.duration
            })
        } else {
            this.cB9s.loadState = LoadState.LOADED_META
        }
        if (this.cB9s.play) {
            this.dI0x.play()
        } else {
            this.dI0x.pause()
        }
        if (this.cB9s.time && parseInt(this.cB9s.time) != this.bvQ0x()) {
            this.dI0x.setCurrentTime(this.cB9s.time)
        }
        this.GS0x();
        this.RE1x();
        bwx0x = true;
        hh1x.pz4D("loaded meta")
    };
    b8h.bWK6E = function() {
        this.cB9s.ended = true;
        this.pc4g("ended")
    };
    b8h.yA7t = function() {
        if (!this.cB9s.waiting) {
            this.cB9s.waiting = true;
            this.cB9s.waitTimestamp = +(new Date);
            this.pc4g("waiting")
        }
    };
    b8h.RE1x = function() {
        this.cB9s.waiting = false;
        this.cB9s.waitTimestamp = 0;
        this.pc4g("playing")
    };
    b8h.uf5k = function() {
        this.pc4g("play")
    };
    b8h.bgZ6T = function() {
        this.pc4g("pause")
    };
    b8h.bWz6t = function() {
        if (this.cB9s.loadState != LoadState.LOADED_META) return;
        var bw9n = this.dI0x.getCurrentTime();
        if (this.cB9s.waiting && bw9n > this.cB9s.time) {
            this.RE1x()
        }
        this.cB9s.time = bw9n;
        this.pc4g("timeupdate", {
            time: this.cB9s.time,
            duration: this.cB9s.duration
        })
    };
    b8h.sd5i = function(d8f) {
        if (this.cB9s.loadState != LoadState.LOADED_META) return;
        var o8g = {};
        if (d8f.data) {
            o8g.total = d8f.data.total;
            o8g.loaded = d8f.data.loaded
        } else {
            var yO7H = this.dI0x.getBuffered(),
            bw9n = this.dI0x.getCurrentTime(),
            nP3x = 0;
            for (var i = 0; i < yO7H.length; i++) {
                if (bw9n > yO7H.start(i) && bw9n < yO7H.end(i)) {
                    nP3x = yO7H.end(i);
                    break
                }
            }
            o8g.total = this.cB9s.duration;
            o8g.loaded = Math.min(nP3x, o8g.total)
        }
        this.pc4g("progress", o8g)
    };
    b8h.GS0x = function() {
        if (this.cB9s.retry) {
            clearTimeout(this.cB9s.retry.tid);
            this.cB9s.retry = null
        }
    };
    b8h.ew0x = function() {
        var bV9M = this.dI0x.getError();
        hh1x.bY9P("media error code: {0}, netState: {1}", bV9M.code, this.dI0x.getNetworkState());
        if (bV9M.code == MediaError.MEDIA_ERR_NETWORK || bV9M.code == MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED) {
            var Fg9X = l8d.bhf6Z();
            if (!this.cB9s.retry) {
                this.cB9s.retry = {
                    level: RetryLevel.NONE
                }
            } else {
                window.clearTimeout(this.cB9s.retry.tid)
            }
            if (this.cB9s.retry.level == RetryLevel.NONE) {
                if (this.bws0x()) {
                    this.cB9s.retry.level = RetryLevel.GET_URL;
                    this.bwr0x();
                    hh1x.pz4D("Url expired, get url.")
                } else {
                    this.cB9s.retry.level = RetryLevel.RELOAD;
                    this.cB9s.retry.tid = setTimeout(this.PW0x.g8c(this), 3e3);
                    hh1x.pz4D("Reload mp3 3s later.")
                }
            } else if (this.cB9s.retry.level == RetryLevel.GET_URL) {
                this.cB9s.retry.level = RetryLevel.RELOAD;
                this.cB9s.retry.tid = setTimeout(this.PW0x.g8c(this), 3e3);
                hh1x.pz4D("Reload mp3 3s later.")
            } else if (this.cB9s.retry.level == RetryLevel.RELOAD) {
                this.cB9s.retry.level = RetryLevel.SWITCH_CDN;
                if (this.bvO0x()) {
                    this.cB9s.retry.tid = setTimeout(this.bVp6j.g8c(this), 5e3);
                    hh1x.pz4D("Switch CDN 5s later.")
                } else {
                    this.cB9s.retry.tid = setTimeout(this.PW0x.g8c(this), 5e3);
                    hh1x.pz4D("Reload mp3 5s later.")
                }
            } else if (!bwx0x && this.dI0x.type == "audio" && !Fg9X.useFlash && !dn0x.KX7Q.mac && l8d.bnD8v().supported) {
                Fg9X.useFlash = true;
                l8d.Fh9Y(Fg9X);
                this.bWd6X("flash")
            } else {
                this.GS0x();
                this.fH1x();
                this.cB9s.error = ErrorType.NET_ERR;
                this.pc4g("error", {
                    code: this.cB9s.error
                });
                hh1x.bY9P("error can not retry.")
            }
        } else {
            this.GS0x();
            this.fH1x();
            this.cB9s.error = ErrorType.UNKNOWN_ERR;
            this.pc4g("error", {
                code: this.cB9s.error
            });
            hh1x.bY9P("error can not retry.")
        }
    };
    b8h.bgX6R = function() {
        var hs1x = 0,
        bvH0x = 5e3;
        return function() {
            this.yA7t();
            clearTimeout(hs1x);
            setTimeout(function() {
                var fe0x = +(new Date);
                if (this.cB9s.waiting && fe0x - this.cB9s.waitTimestamp >= bvH0x && this.cB9s.stalledRetryCount < MAX_STALLED_RETRY) {
                    hh1x.pz4D("stalled too long retry.");
                    this.cB9s.stalledRetryCount++;
                    this.PW0x()
                }
            }.g8c(this), bvH0x);
            hh1x.pz4D("stalled")
        }
    } ();
    b8h.bws0x = function() {
        var fe0x = +(new Date);
        return fe0x > this.cB9s.expireTime
    };
    b8h.bWl6f = function() {
        var bw9n = parseInt(this.cB9s.time) || 0;
        this.dI0x.setSrc(this.cB9s.playUrl + "#t=" + bw9n);
        this.cB9s.loadState = LoadState.IN_RELOAD;
        this.yA7t();
        hh1x.pz4D("recover from: {0}", bw9n)
    };
    b8h.pc4g = function(W8O, j8b) {
        h8b.z8r(y8q.fB1x, "playaction", {
            action: W8O,
            data: j8b || {}
        })
    };
    H8z.fE1x.A8s({
        element: y8q.fB1x,
        event: ["playaction"]
    })
})(); (function() {
    if (! (window == top)) {
        return
    }
    var c8g = NEJ.P,
    h8b = c8g("nej.v"),
    H8z = c8g("nej.ut"),
    y8q = c8g("nm.w"),
    b8h;
    y8q.CW8O = NEJ.C();
    b8h = y8q.CW8O.O8G(y8q.fB1x);
    K8C = y8q.CW8O.cl9c;
    b8h.cs9j = function() {
        this.cx9o()
    };
    b8h.bVi6c = function(bJ9A) {
        this.WV3x(bJ9A);
        this.eu0x()
    };
    b8h.bgO6I = function() {
        this.fH1x()
    };
    b8h.wa6U = function(d8f) {
        if (d8f.action == "play") {
            this.fH1x()
        }
    };
    b8h.pc4g = function(W8O, j8b) {
        h8b.z8r(y8q.CW8O, "tmpplayaction", {
            action: W8O,
            data: j8b || {},
            tmp: true
        })
    };
    b8h.sn5s = function() {
        return this.cB9s
    };
    H8z.fE1x.A8s({
        element: y8q.CW8O,
        event: ["tmpplayaction"]
    })
})(); (function() {
    var c8g = NEJ.P,
    Z9Q = NEJ.O,
    a7h = c8g("nej.e"),
    h8b = c8g("nej.v"),
    k8c = c8g("nej.u"),
    fA1x = c8g("nej.n"),
    x8p = c8g("nej.j"),
    H8z = c8g("nej.ut"),
    ba9R = c8g("nej.ui"),
    y8q = c8g("nm.w"),
    n8f = c8g("nm.l"),
    ko2x = c8g("nm.c"),
    q8i = c8g("nm.d"),
    l8d = c8g("nm.x"),
    b8h,
    K8C,
    XL3x = [{
        item: "m-publish-search-single",
        type: 1
    },
    {
        item: "m-publish-search-artist",
        type: 100
    },
    {
        item: "m-publish-search-album",
        type: 10
    },
    {
        item: "m-publish-search-mv",
        type: 1004
    },
    {
        item: "m-publish-search-playlist",
        type: 1e3
    },
    {
        item: "m-publish-search-djRadio",
        type: 1009
    }];
    var bgM6G = {
        song: 0,
        artist: 1,
        album: 2,
        mv: 3,
        playlist: 4,
        djradio: 5
    };
    y8q.bgK6E = NEJ.C();
    b8h = y8q.bgK6E.O8G(ba9R.ee0x);
    b8h.cs9j = function(e8e) {
        this.cx9o(e8e);
        var i8a = a7h.F8x(this.m8e, "j-flag");
        this.cCa3x = i8a.shift();
        this.bUq6k = i8a.shift();
        this.GW0x = i8a.shift();
        this.bgJ6D = i8a.shift();
        this.bgI6C = [i8a.shift(), i8a.shift(), i8a.shift(), i8a.shift(), i8a.shift(), i8a.shift()];
        this.XU3x = i8a.shift();
        this.buZ9Q = i8a.shift();
        this.rw4A = {
            list: this.bgI6C,
            selected: "z-curr",
            onchange: this.buU9L.g8c(this)
        };
        h8b.s8k(this.GW0x, "input", this.XY3x.g8c(this));
        h8b.s8k(this.GW0x, "propertychange", this.XY3x.g8c(this));
        h8b.s8k(this.GW0x, "keyup", this.XY3x.g8c(this));
        h8b.s8k(this.bUq6k, "click", this.XY3x.g8c(this));
        h8b.s8k(this.XU3x, "click", this.cG0x.g8c(this));
        h8b.s8k(this.buZ9Q, "click",
        function() {
            this.z8r("oncancel", {})
        }.g8c(this));
        this.R8J = q8i.CK8C.gh1x();
        this.LX8P = top.nm.w.CW8O.gh1x();
        H8z.fE1x.A8s({
            element: top.nm.w.CW8O,
            event: ["tmpplayaction"]
        });
        this.rs4w = {
            limit: 100,
            offset: 0,
            parent: this.XU3x,
            onbeforelistload: this.pY4c.g8c(this)
        };
        q8i.sk = "fuck" + a7h.u8m(this.bgJ6D, "xname") + "458";
        h8b.s8k(top.nm.w.CW8O, "tmpplayaction", this.wa6U.g8c(this))
    };
    b8h.ca9R = function() {
        this.cd9U = "m-xwgt-publish-search"
    };
    b8h.bj9a = function(e8e) {
        this.bk9b(e8e);
        if ( !! this.zk7d) {
            this.zk7d.S8K();
            delete this.zk7d
        }
        this.rw4A.index = bgM6G[e8e.type || "song"];
        this.zk7d = H8z.FG9x.A8s(this.rw4A);
        this.GW0x.value = "";
        this.GW0x.focus();
        this.tU5Z = "";
        this.cCb3x = 0;
        if (e8e.showMV == true) {
            this.bgI6C[bgM6G["mv"]].parentNode.style.display = "";
            a7h.w8o(this.bgJ6D, "srchtab-1")
        } else {
            this.bgI6C[bgM6G["mv"]].parentNode.style.display = "none";
            a7h.v8n(this.bgJ6D, "srchtab-1")
        }
        if ( !! this.dC0x) {
            this.dC0x = this.dC0x.S8K()
        }
        if (e8e.hideBack) {
            a7h.w8o(this.buZ9Q.parentNode, "f-hide")
        }
    };
    b8h.bA9r = function() {
        this.LX8P.bgO6I();
        this.bF9w()
    };
    b8h.XY3x = function() {
        var value = this.GW0x.value.trim();
        if (value && value.length) {
            if (value != this.tU5Z) {
                this.tU5Z = value;
                this.buU9L({
                    index: this.zk7d.sQ5V()
                })
            }
        } else {
            if (this.dC0x) {
                this.dC0x = this.dC0x.S8K()
            }
        }
        this.tU5Z = value
    };
    b8h.cG0x = function() {
        var bTL6F = function(G8y) {
            return a7h.by9p(G8y, "sitm") || a7h.by9p(G8y, "itm") || a7h.by9p(G8y, "mv-item")
        },
        bTK6E = function(G8y) {
            return a7h.by9p(G8y, "ply")
        },
        bQT5Y = function() {
            n8f.X8P.L8D({
                type: 2,
                tip: "因合作方要求，该资源需付费使用"
            })
        },
        bTf6Z = function() {
            n8f.X8P.L8D({
                type: 2,
                tip: "因合作方要求，该资源需下载后播放"
            })
        },
        bgE6y = function(bg9X) {
            if (bg9X && bg9X.privilege && bg9X.privilege.toast) {
                x8p.bp9g("/api/song/toast", {
                    query: {
                        id: bg9X.id
                    },
                    type: "json",
                    onload: Nw9n.g8c(this),
                    onerror: Nw9n.g8c(this)
                })
            } else {
                Nx9o()
            }
        },
        Nw9n = function(P8H) {
            Nx9o((P8H || Z9Q).toast)
        },
        Nx9o = function(bE9v) {
            n8f.X8P.L8D({
                type: 2,
                tip: bE9v || "因合作方要求，该资源暂时下架>_<"
            })
        };
        return function(d8f) {
            var Ct8l = h8b.U8M(d8f, bTK6E),
            i8a = h8b.U8M(d8f, bTL6F),
            eh0x = this.LX8P.sn5s();
            if ( !! i8a) {
                h8b.bf9W(d8f);
                this.MP8H = a7h.u8m(i8a, "id");
                this.MX8P = a7h.u8m(i8a, "type");
                if (this.MX8P == 18) {
                    var bJ9A = this.R8J.ex0x(this.MP8H),
                    qa4e = l8d.oU4Y(bJ9A);
                    if (!Ct8l) {
                        if (qa4e == 10) {
                            bQT5Y();
                            return
                        } else if (qa4e == 100) {
                            bgE6y(bJ9A);
                            return
                        }
                    } else {
                        if (qa4e == 10) {
                            bQT5Y();
                            return
                        } else if (qa4e == 100) {
                            bgE6y(bJ9A);
                            return
                        } else if (qa4e == 11) {
                            bTf6Z();
                            return
                        } else {
                            a7h.v8n(this.zz7s, "z-pause z-loading");
                            if (Ct8l == this.zz7s && eh0x.play && !eh0x.ended) {
                                this.LX8P.bgO6I()
                            } else {
                                this.zz7s = Ct8l;
                                this.LX8P.bVi6c(bJ9A)
                            }
                            return
                        }
                    }
                } else if (this.MX8P == 70) {
                    if (a7h.by9p(i8a, "z-noprogram")) {
                        n8f.X8P.L8D({
                            type: 2,
                            tip: "不能分享没有节目的电台"
                        });
                        return
                    }
                }
                this.bTb6V()
            }
        }
    } ();
    b8h.bTb6V = function() {
        var hz1x = this.R8J.ex0x(this.MP8H),
        sK5P = l8d.bxL0x(this.MX8P, hz1x);
        sK5P.title = sK5P.title || "";
        sK5P.author = sK5P.author || "";
        sK5P.picUrl = sK5P.picUrl || "";
        sK5P.authors = sK5P.authors || "";
        if (this.MX8P == 70) {
            this.MP8H = this.MP8H.slice(0, -4)
        }
        this.z8r("onfinish", {
            id: this.MP8H,
            type: this.MX8P,
            data: sK5P
        })
    };
    b8h.wa6U = function(d8f) {
        var j8b = d8f.data;
        if (!this.zz7s) {
            return
        }
        switch (d8f.action) {
        case "play":
            a7h.eR0x(this.zz7s, "z-pause z-play", "z-loading");
            break;
        case "pause":
        case "ended":
            a7h.v8n(this.zz7s, "z-pause z-loading");
            break;
        case "error":
            n8f.X8P.L8D({
                type:
                2,
                tip: "试听遇到问题，播放失败"
            });
            a7h.v8n(this.zz7s, "z-pause z-loading");
            break;
        case "playing":
            a7h.eR0x(this.zz7s, "z-loading", "z-pause");
            break;
        case "waiting":
            a7h.eR0x(this.zz7s, "z-pause", "z-loading");
            break
        }
    };
    b8h.bSY6S = function(d8f) {
        if (d8f.result.code == 407) {
            this.XU3x.innerHTML = '<div class="n-norlt s-fc1">根据相关法律法规和政策，搜索结果未予显示</div>';
            return
        }
        this.XU3x.innerHTML = '<div class="n-norlt s-fc1">页面出错，请稍后再试！</div>'
    };
    b8h.buU9L = function(d8f) {
        if (!this.tU5Z || d8f.index < 0 || d8f.index > 5) {
            return
        }
        this.LX8P.bgO6I();
        var bd9U = XL3x[d8f.index],
        e8e = NEJ.X({},
        this.rs4w);
        e8e.cache = {
            klass: q8i.CK8C,
            clear: true,
            onerror: this.bSY6S.g8c(this)
        };
        e8e.cache.lkey = "search-publish-" + bd9U.type + "-" + this.tU5Z;
        e8e.item = {
            klass: bd9U.item,
            getRestrictLevel: l8d.oU4Y,
            dur2time: l8d.kX2x
        };
        if (!e8e.cache.data) {
            e8e.cache.data = {}
        }
        e8e.cache.data.s = this.tU5Z;
        e8e.cache.data.type = bd9U.type;
        e8e.cache.data.isPub = true;
        if (bd9U.type == 1) {
            e8e.cache.data.hlpretag = '<span class="s-fc7">';
            e8e.cache.data.hlposttag = "</span>"
        }
        e8e.onemptylist = this.bSN6H.g8c(this, this.tU5Z);
        if ( !! this.Cf8X) this.R8J.uk5p(this.Cf8X);
        if ( !! this.dC0x) {
            this.dC0x = this.dC0x.S8K()
        }
        this.dC0x = H8z.ne3x.A8s(e8e);
        this.Cf8X = e8e.cache.lkey
    };
    b8h.pY4c = function(d8f) {
        d8f.value = a7h.ih1x("m-publish-search-loading")
    };
    b8h.bSN6H = function(J8B, d8f) {
        a7h.dH0x(d8f.parent, "m-publish-emtpy-message", {
            key: J8B
        });
        d8f.stopped = true
    }
})(); (function() {
    var c8g = NEJ.P,
    a7h = c8g("nej.e"),
    h8b = c8g("nej.v"),
    dn0x = c8g("nej.p"),
    x8p = c8g("nej.j"),
    bZ9Q = c8g("nej.ut"),
    bC9t = c8g("nej.ui"),
    y8q = c8g("nm.w"),
    b8h,
    K8C;
    var bSL6F = ".j-item.j-selected a{background:#eee;text-decoration:none;color:#333;}";
    y8q.Cb8T = NEJ.C();
    b8h = y8q.Cb8T.O8G(bC9t.ee0x);
    var gt1x = a7h.et0x("m-wgt-receiverInput");
    var bSI6C = a7h.et0x("m-wgt-receiverList");
    var io1x = a7h.sp5u(bSL6F);
    var bSF6z = a7h.et0x('<div data-id=${userId} class="blk s-fc3 j-receiver">${username}<a href="#" class="cls" title="删除">&times;</a></div>');
    b8h.cs9j = function(e8e) {
        this.bi9Z = [];
        this.wf6Z = e8e.receiver || null;
        this.bSC6w = e8e.unique || false;
        this.nb3x = e8e.err;
        this.bPU4Y(this.bPQ4U, e8e.uid);
        this.cx9o(e8e)
    };
    b8h.bj9a = function(e8e) {
        this.bk9b(e8e);
        this.NF9w();
        this.NH9y();
        this.YI3x();
        if (e8e.receiver) this.bgz6t(e8e.receiver.nickname, e8e.receiver.userId);
        a7h.Y9P(this.zt7m, "display", "block");
        a7h.Y9P(this.bgy6s, "cursor", "text");
        a7h.Y9P(this.zt7m, "cursor", "text")
    };
    b8h.ca9R = function() {
        var j8b = this.bOi4m();
        this.cd9U = a7h.in1x(a7h.bX9O(gt1x, {
            receiver: this.wf6Z,
            users: j8b
        }));
        this.lw2x = io1x
    };
    b8h.bS9J = function() {
        this.cc9T();
        var bM9D = a7h.F8x(this.m8e, "j-flag");
        var gO1x = a7h.F8x(this.m8e, "j-item");
        this.bgy6s = bM9D[0];
        this.bOe4i = bM9D[1];
        this.dV0x = bM9D[2];
        this.zt7m = bM9D[3];
        this.YQ3x = bM9D[4];
        this.bgx6r = bM9D[5];
        this.fy1x = gO1x;
        a7h.w8o(this.fy1x[0], "j-selected");
        h8b.s8k(this.dV0x, "keyup", this.bgw6q.g8c(this));
        h8b.s8k(this.dV0x, "keydown", this.NX9O.g8c(this));
        h8b.s8k(this.dV0x, "focus", this.kC2x.g8c(this));
        h8b.s8k(this.YQ3x, "click", this.cxL2x.g8c(this));
        h8b.s8k(this.bgy6s, "click", this.cxG2x.g8c(this));
        h8b.s8k(document.body, "click", this.nX3x.g8c(this));
        h8b.s8k(this.dV0x, "input", this.fC1x.g8c(this));
        h8b.s8k(this.dV0x, "blur", this.oX4b.g8c(this))
    };
    b8h.bA9r = function(e8e) {
        h8b.mx3x(document.body, "click", this.nX3x.g8c(this));
        this.bF9w();
        this.YI3x();
        this.cxv2x();
        this.nX3x()
    };
    b8h.bgw6q = function(d8f) {
        h8b.bf9W(d8f);
        var jw2x = d8f.keyCode || d8f.which;
        var bl9c = this.dV0x.value;
        var bm9d = this.fy1x.length;
        var ri4m = a7h.F8x(this.m8e, "j-selected")[0];
        switch (jw2x) {
        case 13:
            var kz2x = a7h.ga1x(ri4m, "data-username");
            var hN1x = a7h.ga1x(ri4m, "data-userId");
            this.bgz6t(kz2x, hN1x);
            this.nX3x();
            this.dV0x.value = "";
            break;
        case 38:
            var r8j = a7h.ga1x(ri4m, "data-index") - 1 < 0 ? bm9d - 1 : a7h.ga1x(ri4m, "data-index") - 1;
            a7h.v8n(ri4m, "j-selected");
            a7h.w8o(this.fy1x[r8j], "j-selected");
            break;
        case 40:
            var r8j = parseInt(a7h.ga1x(ri4m, "data-index")) + 1 >= bm9d ? 0 : parseInt(a7h.ga1x(ri4m, "data-index")) + 1;
            a7h.v8n(ri4m, "j-selected");
            a7h.w8o(this.fy1x[r8j], "j-selected");
            break;
        default:
            this.vD6x()
        }
    };
    b8h.NX9O = function(d8f) {
        var jw2x = d8f.keyCode || d8f.which;
        var bl9c = this.dV0x.value;
        var r8j = a7h.F8x(this.m8e, "j-receiver").length - 1;
        if (jw2x === 8 && bl9c === "") this.cwG2x(r8j)
    };
    b8h.fC1x = function(d8f) {
        var bl9c = this.dV0x.value;
        if (bl9c.length > 10) {
            this.dV0x.value = bl9c.substring(0, 10);
            return
        }
        dn0x.dj0x.browser == "ie" && dn0x.dj0x.version < "7.0" ? setTimeout(this.bgt6n.g8c(this), 0) : this.bgt6n();
        this.NH9y()
    };
    b8h.kC2x = function() {
        if (this.bi9Z[0]) this.vD6x();
        else this.bPU4Y(this.cvu1x);
        a7h.Y9P(this.zt7m, "display", "none")
    };
    b8h.oX4b = function() {
        var bm9d = a7h.F8x(this.m8e, "j-receiver").length;
        if (this.dV0x.value.trim() == "" && bm9d <= 0) a7h.Y9P(this.zt7m, "display", "block")
    };
    b8h.bgz6t = function(kz2x, hN1x) {
        var Hn0x = this.OV0x();
        if (Hn0x.length >= 10) {
            this.dG0x();
            return
        }
        var ba9R;
        for (ba9R = 0; ba9R < Hn0x.length; ba9R++) {
            if (Hn0x[ba9R] == hN1x) {
                this.nX3x();
                return
            }
        }
        if (!kz2x || !hN1x) return;
        var f8d = a7h.dr0x(a7h.in1x(a7h.bX9O(bSF6z, {
            username: kz2x,
            userId: hN1x
        })));
        var bG9x = this.bOe4i.parentNode;
        if (this.bSC6w) {
            this.YI3x()
        }
        bG9x.insertBefore(f8d, this.bOe4i);
        this.dV0x.value = "";
        var bm9d = a7h.F8x(this.m8e, "j-receiver").length;
        if (bm9d > 1) a7h.Y9P(this.zt7m, "display", "none");
        this.bgt6n();
        this.NH9y()
    };
    b8h.YI3x = function() {
        var Pa0x = a7h.F8x(this.m8e, "j-receiver");
        var ba9R;
        if (Pa0x.length > 0) {
            for (ba9R = 0; ba9R < Pa0x.length; ba9R++) {
                a7h.cz9q(Pa0x[ba9R], false)
            }
        }
    };
    b8h.cxv2x = function() {
        this.dV0x.value = ""
    };
    b8h.cwG2x = function(r8j) {
        this.dG0x(!0);
        var Pa0x = a7h.F8x(this.m8e, "j-receiver");
        a7h.cz9q(Pa0x[r8j], false);
        this.NH9y()
    };
    b8h.vD6x = function() {
        var bl9c = this.dV0x.value;
        var bx9o = bl9c.trim().toLowerCase();
        var j8b;
        bx9o = bx9o.replace(/\[/g, "\\[");
        bx9o = bx9o.replace(/\]/g, "\\]");
        j8b = this.bOi4m(bx9o);
        this.cvo1x(j8b)
    };
    b8h.nX3x = function(d8f) {
        a7h.Y9P(this.YQ3x, "display", "none")
    };
    b8h.dG0x = function(gM1x) {
        if (gM1x && this.nb3x) {
            a7h.Y9P(this.nb3x, "display", "none");
            return
        }
        if (this.nb3x) a7h.Y9P(this.nb3x, "display", "block")
    };
    b8h.cxL2x = function(d8f) {
        h8b.cm9d(d8f);
        var dg0x = d8f.target || d8f.srcElement;
        if (a7h.by9p(dg0x, "j-flag")) return;
        var bG9x = dg0x.nodeName.toLowerCase() == "a" ? dg0x.parentNode: dg0x.parentNode.parentNode;
        var kz2x = a7h.ga1x(bG9x, "data-username");
        var hN1x = a7h.ga1x(bG9x, "data-userId");
        this.bgz6t(kz2x, hN1x);
        this.nX3x();
        a7h.Y9P(this.zt7m, "display", "none")
    };
    b8h.cxG2x = function(d8f) {
        h8b.bf9W(d8f);
        var dg0x = d8f.target || d8f.srcElement;
        if (a7h.by9p(dg0x.parentNode, "j-receiver")) {
            a7h.cz9q(dg0x.parentNode, false);
            this.dG0x(!0);
            this.NH9y()
        } else this.dV0x.focus()
    };
    b8h.bgt6n = function() {
        this.bgx6r.innerHTML = this.dV0x.value;
        var cy9p = this.bgx6r.offsetWidth + 2;
        a7h.Y9P(this.dV0x, "width", cy9p + "px")
    };
    b8h.NH9y = function() {
        var Zr4v = a7h.hL1x(this.dV0x, this.m8e).y;
        var bME3x = Math.floor((Zr4v - 8) / 27);
        if (bME3x < 0) return;
        a7h.Y9P(this.bgy6s, "height", 19 + bME3x * 29 + "px")
    };
    b8h.NF9w = function() {
        var oF3x = ["height", "paddingLeft", "paddingTop", "paddingRight", "paddingBottom", "fontSize", "fontFamily", "lineHeight"];
        for (var i = 0; i < oF3x.length; i++) {
            a7h.Y9P(this.bgx6r, oF3x[i], a7h.cV0x(this.dV0x, oF3x[i]))
        }
    };
    b8h.bPU4Y = function(dE0x, D8v) {
        var de0x = D8v ? D8v: window.GUser.userId;
        var V8N = "/api/user/getfollows/" + de0x;
        var fP1x = x8p.bp9g(V8N, {
            sync: false,
            method: "get",
            query: "offset = 0&limit=1000&order=true",
            onload: dE0x.g8c(this),
            onerror: function(j8b) {
                this.bi9Z = []
            },
            onbeforerequest: function(j8b) {}
        })
    };
    b8h.bPQ4U = function(j8b) {
        this.bi9Z = JSON.parse(j8b).follow || [];
        var D8v = GUser.userId;
        for (var i = 0; i < this.bi9Z.length; i++) {
            if (this.bi9Z[i].userId == D8v) {
                this.bi9Z.splice(i, 1);
                continue
            }
            this.bi9Z[i].avatarUrl = this.bi9Z[i].avatarUrl + "?param=30y30"
        }
    };
    b8h.cvu1x = function(j8b) {
        if (this.bi9Z[0]) return;
        this.bPQ4U(j8b);
        this.vD6x()
    };
    b8h.bOi4m = function(bx9o) {
        var bx9o = bx9o ? bx9o: "";
        this.bi9Z = this.bi9Z[0] ? this.bi9Z: [];
        var bm9d = this.bi9Z.length;
        var Pm0x = this.OV0x();
        var sr5w = [];
        var Po0x, Pr0x, bgq6k;
        if (!this.bi9Z[0]) return sr5w;
        for (var ba9R = 0; ba9R < bm9d; ba9R++) {
            bgq6k = false;
            for (var x8p = 0; x8p < Pm0x.length; x8p++) {
                if (this.bi9Z[ba9R].userId == Pm0x[x8p]) {
                    bgq6k = true;
                    break
                }
            }
            if (bgq6k) continue;
            Po0x = this.bi9Z[ba9R].nickname.toLowerCase().search(bx9o);
            Pr0x = this.bi9Z[ba9R].py ? this.bi9Z[ba9R].py.toLowerCase().search(bx9o) : -1;
            if (Po0x !== -1 || Pr0x != -1) sr5w.push(this.bi9Z[ba9R])
        }
        return sr5w
    };
    b8h.cvo1x = function(j8b) {
        a7h.dH0x(this.YQ3x, bSI6C, {
            users: j8b
        });
        a7h.w8o(a7h.F8x(this.m8e, "j-item")[0], "j-selected");
        this.fy1x = a7h.F8x(this.m8e, "j-item");
        a7h.Y9P(this.YQ3x, "display", "block")
    };
    b8h.OV0x = function() {
        var sr5w = a7h.F8x(this.m8e, "j-receiver") || [];
        var hN1x = [];
        for (var i = 0; i < sr5w.length; i++) {
            hN1x.push(a7h.ga1x(sr5w[i], "data-id"))
        }
        return hN1x
    };
    b8h.cCg3x = function() {
        var hN1x = this.OV0x();
        var sr5w = [];
        for (var i = 0; i < hN1x.length; i++) {
            for (var j = 0; j < this.bi9Z.length; j++) {
                if (hN1x[i] == this.bi9Z[j].userId) sr5w.push(this.bi9Z[j])
            }
        }
        return sr5w
    };
    b8h.cuz1x = function() {
        this.YI3x()
    };
    y8q.Cb8T.L8D = function(e8e) {
        if (!GUser || !GUser.userId || GUser.userId <= 0) {
            n8f.ox3x.L8D({
                title: "登录"
            });
            return
        }
        e8e = e8e || {};
        if (e8e.parent === undefined) e8e.parent = document.body; !! this.eX0x && this.eX0x.S8K();
        this.eX0x = this.A8s(e8e)
    };
    y8q.Cb8T.br9i = function() { !! this.eX0x && this.eX0x.S8K()
    };
    y8q.Cb8T.Em9d = function() {
        return this.nX3x()
    };
    y8q.Cb8T.cCk3x = function() {
        return this.vD6x()
    }
})(); (function() {
    var c8g = NEJ.P,
    a7h = c8g("nej.e"),
    k8c = c8g("nej.u"),
    h8b = c8g("nej.v"),
    l8d = c8g("nm.x"),
    n8f = c8g("nm.l"),
    b8h,
    K8C;
    n8f.Ht0x = NEJ.C();
    b8h = n8f.Ht0x.O8G(n8f.boE8w);
    K8C = n8f.Ht0x.cl9c;
    b8h.bj9a = function() {
        var Ek9b;
        var ctU1x = function(C8u, J8B) {
            Ek9b = Ek9b || [];
            if (J8B != "18") Ek9b.push({
                key: J8B,
                value: C8u
            })
        };
        return function(e8e) {
            this.bk9b(e8e);
            if (e8e.upwards) {
                a7h.w8o(this.m8e, "m-emts-up")
            } else {
                a7h.v8n(this.m8e, "m-emts-up")
            }
            if (e8e.rightwards) {
                a7h.w8o(this.m8e, "m-emts-right")
            } else {
                a7h.v8n(this.m8e, "m-emts-right")
            }
            if (!Ek9b) {
                var bv9m = l8d.bRS5X();
                k8c.ey0x(bv9m, ctU1x)
            }
            var bm9d = Ek9b.length;
            Ek9b.splice(bm9d - 2, 0, {
                key: "18",
                value: "186"
            });
            this.ZJ4N = Ek9b;
            this.cth1x = !!e8e.autoHide
        }
    } ();
    b8h.ca9R = function() {
        this.cd9U = "ntp-portrait"
    };
    b8h.bS9J = function() {
        this.cc9T();
        var i8a = a7h.F8x(this.m8e, "j-flag");
        this.bK9B = i8a[0];
        this.ctc1x = i8a[1];
        this.csM1x = i8a[2];
        this.crr1x = i8a[3];
        h8b.s8k(this.bK9B, "click", this.yn7g.g8c(this));
        h8b.s8k(this.ctc1x, "click", this.Dp8h.g8c(this, 1));
        h8b.s8k(this.crr1x, "click", this.Dp8h.g8c(this, 2))
    };
    b8h.bgj6d = function(r8j) {
        this.ZT4X = r8j;
        var be9V = (r8j - 1) * 50;
        var i8a = this.ZJ4N.slice(be9V, Math.min(be9V + 50, this.ZJ4N.length));
        this.bK9B.innerHTML = a7h.bX9O("jst-portrait", {
            plist: i8a
        },
        {
            purl: l8d.bAv1x
        });
        this.csM1x.innerText = r8j + "/" + Math.ceil(this.ZJ4N.length / 50)
    };
    b8h.Dp8h = function(r8j) {
        var cqE0x = Math.ceil(this.ZJ4N.length / 50);
        if (r8j == 1 && this.ZT4X == 1 || r8j == 2 && this.ZT4X == cqE0x) return;
        r8j == 1 ? this.bgj6d(this.ZT4X - 1) : this.bgj6d(this.ZT4X + 1)
    };
    b8h.yn7g = function(d8f) {
        var G8y = h8b.U8M(d8f, "d:text");
        if (!G8y) return;
        var d8f = {
            url: a7h.u8m(G8y, "url"),
            text: a7h.u8m(G8y, "text")
        };
        this.z8r("onselect", d8f);
        if (this.cth1x && !d8f.stopped) {
            this.br9i()
        }
    };
    b8h.L8D = function() {
        K8C.L8D.call(this);
        this.bgj6d(1)
    }
})(); (function() {
    var c8g = NEJ.P,
    h8b = c8g("nej.v"),
    k8c = c8g("nej.u"),
    dn0x = c8g("nej.p"),
    bc9T = c8g("nej.h"),
    H8z = c8g("nej.ut"),
    jD2x = /^[#?]+/,
    EE9v = /#(.*?)$/,
    ya7T = window,
    bgg6a = !history.pushState || dn0x.KX7Q.android || !history.auto;
    var ZX4b = function(V8N, bgf6Z) {
        ya7T.history[!bgf6Z ? "pushState": "replaceState"](null, document.title, V8N)
    };
    var ZZ4d = function() {
        return location.parse(ya7T.location.href)
    };
    ZX4b = ZX4b.er0x(function(d8f) {
        if (!bgg6a) return;
        var bh9Y = d8f.args;
        d8f.stopped = !0;
        V8N = bh9Y[0].replace(jD2x, ""); ! bh9Y[1] ? ya7T.location.hash = V8N: ya7T.location.replace("#" + V8N)
    });
    ZZ4d = ZZ4d.er0x(function(d8f) {
        if (!bgg6a) return;
        d8f.stopped = !0;
        var dW0x = EE9v.test(ya7T.location.href) ? RegExp.$1: "";
        d8f.value = location.parse(dW0x.replace(jD2x, ""))
    });
    location.redirect = function(V8N, bgf6Z) {
        ZX4b(V8N, bgf6Z);
        return this
    };
    location.active = function() {
        var eE0x, V8N, jd2x, cQ0x, Lg8Y;
        var bge6Y = function(hy1x) {
            if ( !! cQ0x) {
                cQ0x = !1;
                return
            }
            var d8f = {
                oldValue: jd2x,
                newValue: ZZ4d()
            };
            if ( !! location.ignored) {
                location.ignored = !1
            } else {
                h8b.z8r(location, "beforeurlchange", d8f);
                if (d8f.stopped) {
                    if ( !! jd2x) {
                        cQ0x = !0;
                        ZX4b(jd2x.href, !0)
                    }
                    return
                }
            }
            V8N = ya7T.location.href;
            jd2x = d8f.newValue;
            h8b.z8r(location, "urlchange", jd2x);
            bc9T.bqm8e(jd2x.href)
        };
        var bKa3x = function() {
            if (V8N != ya7T.location.href) bge6Y();
            eE0x = requestAnimationFrame(bKa3x)
        };
        return function(bN9E) {
            if ( !! Lg8Y) return this;
            Lg8Y = !0;
            ya7T = bN9E || window;
            if (bgg6a && "onhashchange" in window && dn0x.mF3x.trident2) {
                h8b.s8k(ya7T, "hashchange", bge6Y);
                bge6Y()
            } else if (!eE0x) {
                eE0x = requestAnimationFrame(bKa3x)
            }
            return this
        }
    } ();
    location.parse = function() {
        var go1x = /^https?:\/\/.*?\//i,
        jD2x = /[?#]/;
        return function(V8N) {
            var o8g = {
                href: V8N
            };
            V8N = (V8N || "").replace(go1x, "/").split(jD2x);
            var cA9r = 1;
            if (V8N[0] == "/" && (V8N[1] || "").indexOf("/") == 0) cA9r = 2;
            o8g.path = V8N.splice(0, cA9r).join("?");
            o8g.query = k8c.hD1x(V8N.join("&"));
            return o8g
        }
    } ();
    location.same = function(V8N) {
        return ZZ4d().href == V8N
    };
    H8z.fE1x.A8s({
        element: location,
        event: ["beforeurlchange", "urlchange"]
    })
})(); (function() {
    var c8g = NEJ.P,
    a7h = c8g("nej.e"),
    h8b = c8g("nej.v"),
    gc1x = c8g("nm.ut");
    gc1x.td5i = function(eg0x) {
        var gF1x = {
            text: "",
            start: 0,
            end: 0
        };
        if (eg0x.setSelectionRange) {
            gF1x.start = eg0x.selectionStart;
            gF1x.end = eg0x.selectionEnd;
            gF1x.text = gF1x.start != gF1x.end ? eg0x.value.substring(gF1x.start, gF1x.end) : ""
        } else if (document.selection) {
            var i, baf4j = document.selection.createRange(),
            xn6h = document.body.createTextRange();
            xn6h.moveToElementText(eg0x);
            gF1x.text = baf4j.text;
            gF1x.bookmark = baf4j.getBookmark();
            for (i = 0; xn6h.compareEndPoints("StartToStart", baf4j) < 0 && baf4j.moveStart("character", -1) !== 0; i++) {
                if (eg0x.value.charAt(i) == "\n") {
                    i++
                }
            }
            gF1x.start = i;
            gF1x.end = gF1x.text.length + gF1x.start
        }
        return gF1x
    };
    gc1x.bah4l = function(eg0x, gF1x) {
        var xn6h;
        if (!gF1x) {
            gF1x = {
                text: "",
                start: 0,
                end: 0
            }
        }
        eg0x.focus();
        if (eg0x.setSelectionRange) {
            eg0x.setSelectionRange(gF1x.start, gF1x.end)
        } else if (eg0x.createTextRange) {
            xn6h = eg0x.createTextRange();
            if (eg0x.value.length === gF1x.start) {
                xn6h.collapse(false);
                xn6h.select()
            } else {
                xn6h.moveToBookmark(gF1x.bookmark);
                xn6h.select()
            }
        }
    };
    gc1x.Hz0x = function(eg0x, gF1x, cJ0x) {
        var gF1x = gF1x || {
            text: "",
            start: 0,
            end: 0
        };
        var bgd6X, bJM3x, xn6h, Rd1x, bJJ3x, bJB3x, CD8v;
        this.bah4l(eg0x, gF1x);
        if (eg0x.setSelectionRange) {
            bgd6X = eg0x.value;
            bJM3x = bgd6X.substring(0, gF1x.start) + cJ0x + bgd6X.substring(gF1x.end);
            bJJ3x = bJB3x = gF1x.start + cJ0x.length;
            CD8v = eg0x.scrollTop;
            eg0x.value = bJM3x;
            if (eg0x.scrollTop != CD8v) {
                eg0x.scrollTop = CD8v
            }
            eg0x.setSelectionRange(bJJ3x, bJB3x)
        } else if (eg0x.createTextRange) {
            Rd1x = document.selection.createRange();
            Rd1x.text = cJ0x;
            Rd1x.setEndPoint("StartToEnd", Rd1x);
            Rd1x.select()
        }
        h8b.z8r(eg0x, "keyup")
    }
})(); (function() {
    var c8g = NEJ.P,
    a7h = c8g("nej.e"),
    h8b = c8g("nej.v"),
    dn0x = c8g("nej.p"),
    k8c = c8g("nej.u"),
    bZ9Q = c8g("nej.ut"),
    y8q = c8g("nm.w"),
    gc1x = c8g("nm.ut"),
    b8h;
    y8q.bJA3x = NEJ.C();
    b8h = y8q.bJA3x.O8G(bZ9Q.cD0x);
    b8h.cs9j = function(e8e) {
        this.cx9o(e8e)
    };
    b8h.bj9a = function(e8e) {
        this.bk9b(e8e);
        this.fZ1x = e8e.txt;
        this.Cw8o = e8e.sgtsContainer;
        this.bJy3x = e8e.sgtsList[0];
        this.bau4y = e8e.sgtsItem;
        this.oa3x = e8e.rangeData;
        this.HE6y = e8e.atIndex;
        a7h.w8o(this.bau4y[0], "selected-item");
        this.Rw1x()
    };
    b8h.bA9r = function() {
        this.bF9w();
        h8b.mx3x(document.body, "keyup", this.bIX2x.g8c(this));
        h8b.mx3x(document.body, "click", this.bIV2x.g8c(this))
    };
    b8h.Rw1x = function() {
        this.bT9K([[document.body, "keyup", this.bIX2x.g8c(this)], [document.body, "click", this.bIV2x.g8c(this)], [this.fZ1x, "keydown", this.bIv2x.g8c(this)], [this.fZ1x, "keypress", this.bIv2x.g8c(this)], [this.bJy3x, "click", this.bHX2x.g8c(this)], [this.bJy3x, "mouseover", this.Cr8j.g8c(this)]])
    };
    b8h.Cr8j = function(d8f) {
        var dg0x = h8b.U8M(d8f);
        var p8h = a7h.F8x(this.Cw8o, "selected-item");
        if (a7h.by9p(dg0x, "j-sgt")) {
            a7h.v8n(p8h[0], "selected-item");
            a7h.w8o(dg0x, "selected-item")
        }
    };
    b8h.bIX2x = function(d8f) {
        var p8h = a7h.F8x(this.Cw8o, "selected-item");
        var bm9d = this.bau4y.length;
        var jw2x = d8f.keyCode || d8f.which;
        var r8j, j8b;
        switch (jw2x) {
        case 38:
            r8j = a7h.ga1x(p8h[0], "data-index") - 1 < 0 ? bm9d - 1 : a7h.ga1x(p8h[0], "data-index") - 1;
            a7h.v8n(p8h[0], "selected-item");
            a7h.w8o(this.bau4y[r8j], "selected-item");
            break;
        case 40:
            r8j = parseInt(a7h.ga1x(p8h[0], "data-index")) + 1 >= bm9d ? 0 : parseInt(a7h.ga1x(p8h[0], "data-index")) + 1;
            a7h.v8n(p8h[0], "selected-item");
            a7h.w8o(this.bau4y[r8j], "selected-item");
            break;
        case 13:
            this.bHX2x(d8f);
            break;
        case 27:
            this.nX3x();
            break;
        case 32:
            var bl9c = this.fZ1x.value;
            var r8j = gc1x.td5i(this.fZ1x);
            if (bl9c.charAt(r8j.start - 1) !== " ") return;
            this.nX3x();
            break
        }
    };
    b8h.bIv2x = function(d8f) {
        var jw2x = d8f.keyCode || d8f.which;
        if (jw2x === 13 || jw2x === 38 || jw2x === 40) {
            h8b.cm9d(d8f);
            d8f.keyCode = 0;
            d8f.which = 0;
            d8f.returnvalue = false
        }
    };
    b8h.bIV2x = function(d8f) {
        var dg0x = d8f.target || d8f.srcElement;
        if (dg0x === this.fZ1x) return;
        this.nX3x()
    };
    b8h.bHX2x = function(d8f) {
        h8b.bf9W(d8f);
        var p8h = a7h.F8x(this.Cw8o, "selected-item")[0];
        var ri4m = d8f.target || d8f.srcElement;
        var t8l = d8f.type;
        if (a7h.by9p(ri4m, "lst")) return;
        if (t8l == "click") {
            a7h.v8n(p8h, "selected-item");
            a7h.w8o(ri4m, "selected-item")
        } else ri4m = p8h;
        var j8b = ri4m.innerHTML + " ";
        this.nX3x();
        var gF1x = this.oa3x;
        gF1x.start = this.HE6y + 1;
        if (dn0x.dj0x.browser == "ie" && dn0x.dj0x.version < "9.0") {
            this.fZ1x.value = this.fZ1x.value.substring(0, gF1x.start) + this.fZ1x.value.substring(gF1x.end, this.fZ1x.value.length);
            gF1x.end = gF1x.start
        }
        gc1x.Hz0x(this.fZ1x, gF1x, j8b);
        h8b.z8r(this.fZ1x, "keyup")
    };
    b8h.nX3x = function(d8f) {
        if ( !! this.Cw8o) a7h.Y9P(this.Cw8o, "display", "none");
        this.S8K()
    };
    b8h.vD6x = function(d8f) {
        if ( !! this.Cw8o) a7h.Y9P(this.Cw8o, "display", "block")
    }
})(); (function() {
    var c8g = NEJ.P,
    a7h = c8g("nej.e"),
    h8b = c8g("nej.v"),
    k8c = c8g("nej.u"),
    x8p = c8g("nej.j"),
    y8q = c8g("nm.w"),
    bZ9Q = c8g("nej.ut"),
    bC9t = c8g("nej.ui"),
    b8h;
    var cny0x = ".u-atlist{position: absolute;z-index: 10000;}.f-thide.selected-item{background-color: #eee;}";
    var cnd0x = a7h.et0x("m-wgt-atlist");
    var io1x = a7h.sp5u(cny0x);
    y8q.bHI2x = NEJ.C();
    b8h = y8q.bHI2x.O8G(bC9t.ee0x);
    b8h.cs9j = function(e8e) {
        this.fG1x = {};
        this.cx9o()
    };
    b8h.bj9a = function(e8e) {
        this.fG1x.txt = a7h.B8t(e8e.target);
        this.fG1x.data = e8e.data;
        this.fG1x.offset = e8e.offset;
        this.fG1x.rangeData = e8e.rangeData;
        this.fG1x.atIndex = e8e.atIndex;
        this.ckC9t(e8e);
        this.bk9b(e8e);
        this.fG1x.sgtsContainer = this.m8e;
        this.fG1x.sgtsList = a7h.F8x(this.m8e, "lst");
        this.fG1x.sgtsItem = a7h.F8x(this.m8e, "f-thide");
        this.Jf7Y(e8e);
        this.cjw9n = y8q.bJA3x.A8s(this.fG1x)
    };
    b8h.bA9r = function(e8e) {
        this.bF9w();
        this.cjw9n.S8K()
    };
    b8h.ca9R = function() {
        this.lw2x = io1x
    };
    b8h.bS9J = function() {
        this.cc9T()
    };
    b8h.ckC9t = function(e8e) {
        this.m8e = a7h.dr0x(a7h.in1x(a7h.bX9O(cnd0x, e8e.data)))
    };
    b8h.Jf7Y = function(e8e) {
        var bGU2x = a7h.F8x(this.m8e, "selected-item")[0];
        if (bGU2x) a7h.v8n(bGU2x, "selected-item");
        var cP0x = e8e.offset.x + "px";
        var gU1x = e8e.offset.y + "px";
        a7h.Y9P(this.m8e, "left", cP0x);
        a7h.Y9P(this.m8e, "top", gU1x)
    }
})(); (function() {
    var c8g = NEJ.P,
    x8p = c8g("nej.j"),
    gc1x = c8g("nm.ut");
    gc1x.bGK2x = function(bl9c) {
        if (!GUser || !GUser.userId || GUser.userId <= 0) return;
        var cZ0x = /@([a-zA-Z0-9_\-\u4E00-\u9FA5]+)/g;
        var HM6G = bl9c.match(cZ0x) || [];
        for (var ba9R = 0; ba9R < HM6G.length; ba9R++) {
            HM6G[ba9R] = HM6G[ba9R].split("@")[1]
        }
        HM6G = HM6G.reverse();
        var hN1x = GUser.userId;
        var ciO9F = x8p.tb5g("mentioners" + hN1x) || [];
        var jo2x = HM6G.concat(ciO9F);
        if (jo2x.length > 10) jo2x = jo2x.slice(0, 10);
        x8p.vZ6T("mentioners" + hN1x, jo2x)
    };
    gc1x.chM9D = function() {
        if (!GUser || !GUser.userId || GUser.userId <= 0) return;
        var hN1x = GUser.userId;
        return x8p.tb5g("mentioners" + hN1x) || []
    }
})(); (function() {
    var c8g = NEJ.P,
    a7h = c8g("nej.e"),
    h8b = c8g("nej.v"),
    dn0x = c8g("nej.p"),
    x8p = c8g("nej.j"),
    k8c = c8g("nej.u"),
    bZ9Q = c8g("nej.ut"),
    y8q = c8g("nm.w"),
    gc1x = c8g("nm.ut"),
    b8h;
    y8q.bGt2x = NEJ.C();
    b8h = y8q.bGt2x.O8G(bZ9Q.cD0x);
    b8h.cs9j = function(e8e) {
        this.cx9o(e8e);
        this.bGr2x()
    };
    b8h.bj9a = function(e8e) {
        this.bk9b(e8e);
        this.fZ1x = e8e.txt;
        this.m8e = e8e.body;
        this.bFZ2x = e8e.before;
        this.NB9s = e8e.flag;
        this.cgJ8B = e8e.after;
        this.qk4o = [];
        if (dn0x.dj0x.browser != "ie") {
            setTimeout(function() {
                this.lA3x()
            }.g8c(this), 0)
        }
        this.Rw1x()
    };
    b8h.bA9r = function() {
        this.bF9w();
        if (this.uG5L) this.uG5L.S8K();
        delete this.uG5L
    };
    b8h.Rw1x = function() {
        this.bT9K([[this.fZ1x, "keyup", this.bFY2x.g8c(this, this.fZ1x)], [this.fZ1x, "click", this.bFY2x.g8c(this, this.fZ1x)], [this.fZ1x, "focus", this.lA3x.g8c(this)]])
    };
    b8h.lA3x = function(d8f) {
        this.oa3x = gc1x.td5i(this.fZ1x)
    };
    b8h.bGr2x = function() {
        if (!GUser || !GUser.userId || GUser.userId <= 0) {
            window.GFollowers = [];
            return
        }
        var de0x = window.GUser.userId;
        var V8N = "/api/user/getfollows/" + de0x;
        var fP1x = x8p.bp9g(V8N, {
            sync: false,
            method: "get",
            query: "offset = 0&limit=1000&order=true",
            onload: function(j8b) {
                window.GFollowers = JSON.parse(j8b).follow
            }.g8c(this),
            onerror: function(j8b) {},
            onbeforerequest: function(j8b) {}
        })
    };
    b8h.bFO2x = function(index) {
        var C8u = this.fZ1x.value,
        be9V, bfP6J, bfO6I, Sp1x;
        this.bFZ2x.innerHTML = k8c.dQ0x(C8u.substr(0, index)).replace(/\n/g, "<br/>").replace(/\s/g, '<span class="j-test" style="display:inline-block;white-space: pre-wrap; font-family:Arial, Helvetica, sans-serif;"></span>');
        var oy3x = a7h.F8x(this.bFZ2x, "j-test");
        for (var ba9R = 0; ba9R < oy3x.length; ba9R++) {
            oy3x[ba9R].innerText = " "
        }
        this.NB9s.innerHTML = C8u.charAt(index);
        this.cgJ8B.innerHTML = k8c.dQ0x(C8u.substr(index + 1, C8u.length));
        Sp1x = parseInt(a7h.cV0x(this.fZ1x, "lineHeight"));
        a7h.Y9P(this.m8e, "display", "block");
        bfP6J = a7h.hL1x(this.NB9s, this.m8e);
        bfO6I = a7h.hL1x(this.fZ1x);
        a7h.Y9P(this.m8e, "display", "none");
        var cP0x = bfP6J.x + bfO6I.x;
        var gU1x = bfP6J.y + bfO6I.y + Sp1x;
        be9V = {
            x: cP0x,
            y: gU1x
        };
        this.ceM8E(be9V)
    };
    b8h.bFY2x = function(eg0x, d8f) {
        h8b.cm9d(d8f);
        var eg0x = eg0x;
        var C8u = eg0x.value;
        var bm9d = C8u.length;
        var r8j = gc1x.td5i(eg0x).start;
        var bEZ2x = 0;
        var jw2x = d8f.keyCode || d8f.which;
        var jo2x;
        this.oa3x = gc1x.td5i(eg0x);
        var bEO2x = false;
        for (var i = 1; i < 20; i++) {
            jo2x = r8j - i;
            if (C8u.charAt(jo2x) === " ") break;
            if (C8u.charAt(jo2x) === "@") {
                bEO2x = true;
                this.HE6y = bEZ2x = jo2x;
                break
            }
        }
        if (bEO2x && d8f.shiftKey === false && jw2x !== 38 && jw2x !== 40) {
            if (jw2x !== 27 && jw2x !== 13) {
                this.uG5L ? this.uG5L.S8K() : null;
                this.bFO2x(bEZ2x)
            }
        } else if (jw2x !== 38 && jw2x !== 40 && d8f.keyCode !== 32) {
            this.uG5L ? this.uG5L.S8K() : null
        }
    };
    b8h.ceM8E = function(be9V) {
        var be9V = be9V;
        var j8b = this.uN6H();
        var e8e = {
            parent: document.body,
            offset: be9V,
            data: j8b,
            target: this.fZ1x,
            rangeData: this.oa3x,
            atIndex: this.HE6y
        };
        this.uG5L ? this.uG5L.S8K() : null;
        this.uG5L = y8q.bHI2x.A8s(e8e)
    };
    b8h.uN6H = function() {
        var ceA8s = gc1x.td5i(this.fZ1x).start;
        var ceo8g = this.HE6y + 1;
        var bEv1x = gc1x.chM9D() || [];
        var bEl1x = [];
        var bx9o = this.fZ1x.value.substring(ceo8g, ceA8s).toLowerCase();
        bx9o = bx9o.replace(/\[/g, "\\[");
        bx9o = bx9o.replace(/\]/g, "\\]");
        if (window.GFollowers) {
            this.qk4o = window.GFollowers[0] ? window.GFollowers: []
        } else this.qk4o = [];
        if (!this.qk4o[0]) this.bGr2x();
        for (var ba9R = 0; ba9R < bEv1x.length; ba9R++) {
            for (var x8p = 0; x8p < this.qk4o.length; x8p++) {
                if (this.qk4o[x8p].nickname == bEv1x[ba9R]) bEl1x.push(this.qk4o[x8p])
            }
        }
        this.qk4o = k8c.csO1x(this.qk4o, bEl1x, {
            union: true,
            begin: true
        });
        var cdK8C = this.qk4o.length;
        var bbr5w = [];
        var Po0x, Pr0x;
        if (!this.qk4o[0]) return {
            suggests: bbr5w
        };
        for (var i = 0; i < cdK8C; i++) {
            Po0x = this.qk4o[i].nickname.toLowerCase().search(bx9o);
            Pr0x = this.qk4o[i].py ? this.qk4o[i].py.toLowerCase().search(bx9o) : -1;
            if (Po0x !== -1 || Pr0x != -1) bbr5w.push(this.qk4o[i]);
            if (bbr5w.length === 10) break
        }
        return {
            suggests: bbr5w
        }
    };
    b8h.SK1x = function() {
        var gF1x = this.oa3x || {
            text: "",
            start: 0,
            end: 0
        };
        h8b.z8r(this.fZ1x, "focus");
        gc1x.Hz0x(this.fZ1x, gF1x, "@");
        this.oa3x = gc1x.td5i(this.fZ1x);
        this.HE6y = gF1x.start;
        this.bFO2x(this.HE6y)
    };
    b8h.Em9d = function() {
        if (this.uG5L) this.uG5L.S8K()
    }
})(); (function() {
    var c8g = NEJ.P,
    a7h = c8g("nej.e"),
    h8b = c8g("nej.v"),
    k8c = c8g("nej.u"),
    x8p = c8g("nej.j"),
    y8q = c8g("nm.w"),
    bZ9Q = c8g("nej.ut"),
    bC9t = c8g("nej.ui"),
    b8h;
    var cdH8z = "#shadow-box{position: absolute;display: block;left: 450px;top: 1020px;border: 1px solid black;word-wrap: break-word;display:none;opacity: 0;filter: Alpha(opacity=0);z-index: -1000;}";
    var cdE8w = '<div id="shadow-box" style="word-wrap:break-word"><span  class="node-before"></span><span>@</span><span  class="node-after"></span></div>';
    var gt1x = a7h.in1x(cdE8w);
    var io1x = a7h.sp5u(cdH8z);
    y8q.SO1x = NEJ.C();
    b8h = y8q.SO1x.O8G(bC9t.ee0x);
    b8h.cs9j = function(e8e) {
        this.fG1x = {};
        this.cx9o()
    };
    b8h.bj9a = function(e8e) {
        this.bk9b(e8e);
        this.fG1x.txt = a7h.B8t(e8e.target);
        this.NF9w();
        this.SP1x = y8q.bGt2x.A8s(this.fG1x)
    };
    b8h.bA9r = function(e8e) {
        this.bF9w();
        this.SP1x.S8K()
    };
    b8h.ca9R = function() {
        this.cd9U = gt1x;
        this.lw2x = io1x
    };
    b8h.bS9J = function() {
        this.cc9T();
        var i8a = a7h.db0x(a7h.B8t(this.m8e));
        this.fG1x.body = this.m8e;
        this.fG1x.before = i8a[0];
        this.fG1x.flag = i8a[1];
        this.fG1x.after = i8a[2]
    };
    b8h.NF9w = function() {
        var oF3x = ["width", "borderWidth", "border-style", "outline", "marginLeft", "marginTop", "marginRight", "marginBottom", "height", "paddingLeft", "paddingTop", "fontSize", "wordWrap", "fontFamily", "lineHeight", "overflowX", "overflowY"];
        for (var i = 0; i < oF3x.length; i++) {
            if (oF3x[i] === "width" && a7h.cV0x(this.fG1x.txt, oF3x[i]) == "100%") {
                var cdi8a = this.fG1x.txt.offsetWidth;
                if (!cdi8a) {
                    setTimeout(function() {
                        a7h.Y9P(this.m8e, oF3x[i], this.fG1x.txt.offsetWidth + "px")
                    }.g8c(this), 300)
                } else {
                    a7h.Y9P(this.m8e, oF3x[i], this.fG1x.txt.offsetWidth + "px")
                }
                continue
            }
            a7h.Y9P(this.m8e, oF3x[i], a7h.cV0x(this.fG1x.txt, oF3x[i]))
        }
    };
    b8h.SK1x = function() {
        this.SP1x.SK1x()
    };
    b8h.Em9d = function() {
        this.SP1x.Em9d()
    }
})(); (function() {
    var c8g = NEJ.P,
    Z9Q = NEJ.O,
    bn9e = NEJ.F,
    fj0x = NEJ.R,
    a7h = c8g("nej.e"),
    h8b = c8g("nej.v"),
    k8c = c8g("nej.u"),
    H8z = c8g("nej.ut"),
    ko2x = c8g("nm.c"),
    Q8I = {},
    b8h;
    if ( !! ko2x.bfK6E) return;
    ko2x.bfK6E = NEJ.C();
    b8h = ko2x.bfK6E.O8G(H8z.cD0x);
    b8h.cs9j = function() {
        this.cx9o()
    };
    b8h.bj9a = function(e8e) {
        this.bk9b(e8e)
    };
    b8h.bA9r = function() {
        this.bF9w()
    };
    b8h.EX9O = function(eU0x, dE0x, bbA5F) {
        if (Q8I[eU0x]) {
            this.gK1x("register commonJST[" + eU0x + "] duplicate");
            return
        }
        if (!k8c.gr1x(dE0x)) {
            dE0x = ctl.comJST.ccZ8R(eU0x, dE0x, bbA5F)
        }
        Q8I[eU0x] = dE0x
    };
    b8h.ccQ8I = function(bbE5J) {
        if (k8c.eC0x(bbE5J)) {
            k8c.bb9S(bbE5J,
            function(p8h) {
                ctl.comJST.EX9O.apply(this, p8h)
            },
            this)
        } else if (k8c.lg2x(bbE5J)) {
            k8c.ey0x(bbE5J,
            function(eG0x, J8B) {
                ctl.comJST.EX9O(J8B, eG0x)
            })
        }
    };
    b8h.ccZ8R = function(eU0x, ub5g, bbA5F) {
        ub5g = ub5g || {};
        NEJ.X(ub5g, {
            comJST: this.mT3x
        });
        if (ub5g.resetDataName && !k8c.eC0x(ub5g.resetDataName)) {
            ub5g.resetDataName = [ub5g.resetDataName]
        }
        return function() {
            var j8b = arguments[0],
            js2x = arguments[1];
            if (ub5g.resetDataName) {
                var jo2x = {};
                for (var i = 0,
                ii = ub5g.resetDataName.length; i < ii; i++) {
                    jo2x[ub5g.resetDataName[i]] = arguments[i]
                }
                j8b = jo2x;
                js2x = arguments[ii]
            }
            NEJ.X(j8b, ub5g, dP0x);
            if (bbA5F) {
                js2x = js2x || {};
                NEJ.X(js2x, bbA5F)
            }
            return a7h.bX9O(eU0x, j8b, js2x)
        }
    };
    b8h.mT3x = function(eU0x) {
        if (!Q8I[eU0x]) {
            this.gK1x("commonJST[" + eU0x + "] is unregister");
            return ""
        } else {
            return Q8I[eU0x].apply(null, fj0x.slice.call(arguments, 1))
        }
    };
    b8h.dump = function() {
        return Q8I
    };
    b8h.gK1x = function(ccO8G) {
        if (console && console.log) {
            console.log(ccO8G)
        }
    };
    var dP0x = function(eG0x, J8B) {
        return J8B == "resetDataName"
    };
    c8g("ctl").comJST = ko2x.bfK6E.gh1x();
    a7h.coO0x({
        comJST: c8g("ctl").comJST.mT3x
    })
})(); (function() {
    var c8g = NEJ.P,
    Z9Q = NEJ.O,
    bn9e = NEJ.F,
    fj0x = NEJ.R,
    a7h = c8g("nej.e"),
    h8b = c8g("nej.v"),
    k8c = c8g("nej.u"),
    H8z = c8g("nej.ut"),
    ko2x = c8g("nm.c"),
    l8d = c8g("nm.x"),
    Q8I = {},
    b8h;
    if ( !! ko2x.bfG6A) return;
    ko2x.bfG6A = NEJ.C();
    b8h = ko2x.bfG6A.O8G(H8z.cD0x);
    b8h.cs9j = function() {
        this.cx9o();
        var e8e = {
            "com-mv-artists": function(fF1x, dS0x, Dn8f, bfF6z) {
                return a7h.bX9O("com-mv-artists", {
                    artists: fF1x,
                    clazz: dS0x,
                    boxClazz: bfF6z,
                    mark: Dn8f ||
                    function(cF0x) {
                        return cF0x
                    },
                    escape: k8c.dQ0x,
                    comJST: ctl.comJST.mT3x
                })
            },
            "com-album-artists": function(fF1x, dS0x, Dn8f, bfF6z) {
                return a7h.bX9O("com-album-artists", {
                    artists: fF1x,
                    clazz: dS0x,
                    boxClazz: bfF6z,
                    mark: Dn8f ||
                    function(cF0x) {
                        return cF0x
                    },
                    escape: k8c.dQ0x,
                    comJST: ctl.comJST.mT3x
                })
            },
            "com-artists-title": {
                resetDataName: ["artists"],
                escape: k8c.dQ0x
            },
            "com-user-type": function(df0x, dS0x, le2x, Tz2x, bDy1x) {
                return a7h.bX9O("com-user-type", {
                    x: df0x,
                    clazz: dS0x || "",
                    clazz2: typeof bDy1x == "undefined" ? "icn": bDy1x,
                    before: le2x || "",
                    after: Tz2x || "",
                    isEmptyObject: l8d.byI0x
                })
            }
        };
        for (var D8v in e8e) {
            ctl.comJST.EX9O(D8v, e8e[D8v])
        }
    };
    b8h.bj9a = function(e8e) {
        this.bk9b(e8e)
    };
    b8h.bA9r = function() {
        this.bF9w()
    };
    c8g("ctl").comJSTUtil = ko2x.bfG6A.gh1x()
})(); (function() {
    var c8g = NEJ.P,
    Z9Q = NEJ.O,
    a7h = c8g("nej.e"),
    dn0x = c8g("nej.p"),
    h8b = c8g("nej.v"),
    k8c = c8g("nej.u"),
    H8z = c8g("nej.ut"),
    x8p = c8g("nej.j"),
    y8q = c8g("nm.w"),
    gc1x = c8g("nm.ut"),
    q8i = c8g("nm.d"),
    l8d = c8g("nm.x"),
    n8f = c8g("nm.l"),
    bfE6y = [2, 3],
    dT0x = ["sn", "db"],
    b8h,
    K8C,
    cbn7g = {
        13 : "playlist",
        17 : "djprogram",
        18 : "song",
        19 : "album",
        20 : "artist",
        21 : "mv",
        24 : "topic",
        25 : "activity",
        70 : "djradio",
        38 : "concert",
        39 : "video"
    },
    bbO5T = {
        djprogram: "节目",
        album: "专辑",
        playlist: "歌单",
        song: "单曲",
        yunsong: "单曲",
        artist: "歌手",
        mv: "MV",
        topic: "音乐专栏",
        djradio: "电台",
        concert: "演出",
        video: "视频"
    },
    bDl1x = {
        djprogram: " - ",
        album: " - ",
        playlist: " by ",
        song: " - ",
        yunsong: " - ",
        artist: "",
        mv: " - ",
        djradio: " by "
    },
    cbe7X = {
        0 : 13,
        1 : 17,
        3 : 19,
        4 : 18,
        5 : 21,
        6 : 24,
        14 : 70,
        17 : 20
    },
    Ee9V = {
        pubEventWithPics: false,
        pubEventWithoutResource: false,
        pubEventWithPictureForbiddenNotice: "等级达到Lv.4，即可添加图片"
    };
    n8f.yN7G = NEJ.C();
    b8h = n8f.yN7G.O8G(n8f.ei0x);
    K8C = n8f.yN7G.cl9c;
    b8h.bj9a = function(e8e) {
        if (e8e.onclose === undefined) {
            e8e.onclose = this.bDf1x.g8c(this)
        }
        this.bk9b(e8e);
        this.BK8C = e8e.isPub;
        this.jh2x = e8e.rid || -1;
        this.ez0x = e8e.type || -1;
        this.bfD6x = e8e.purl;
        this.Lh8Z = e8e.name || "";
        this.Li8a = e8e.author || "";
        this.bfB6v = e8e.authors || "";
        this.bcb5g = e8e.actId;
        this.bcc5h = e8e.actName;
        this.bCr1x = e8e.title;
        this.bce5j = {};
        this.cax7q = e8e.mesg || "";
        this.cap7i = e8e.placeholder || "说点什么吧";
        this.bfA6u = e8e.hideTip;
        this.bZS7L = e8e.videoJumpUrl;
        var i8a, fe0x = +(new Date);
        try {
            i8a = top.localCache.B8t("user") || {}
        } catch(e) {
            i8a = {}
        }
        for (var i = 0,
        i8a = i8a.bindings || [], eB0x; i < i8a.length; ++i) {
            eB0x = !i8a[i].tokenJsonStr ? null: JSON.parse(i8a[i].tokenJsonStr);
            if (!eB0x || eB0x.expires_in === undefined) continue;
            var bcj5o = parseInt(eB0x.expires_in),
            bck5p = parseInt(i8a[i].refreshTime),
            bZK7D = (bcj5o + bck5p) * 1e3 - 5 * 60 * 1e3;
            if (bZK7D > fe0x) this.bce5j[i8a[i].type] = !0
        }
        this.wf6Z = y8q.Cb8T.A8s({
            parent: this.bcn5s,
            err: this.bAX1x
        });
        if (this.hb1x) {
            this.hb1x.S8K()
        }
        this.hb1x = y8q.SO1x.A8s({
            parent: document.body,
            target: this.ek0x
        });
        if (this.ez0x == 24 || this.ez0x == 21 || this.Dm8e()) {
            this.xr6l.style.display = "none"
        } else {
            this.xr6l.style.display = "";
            this.oD3x = y8q.bhM6G.A8s({
                parent: this.bfv6p,
                button: this.xr6l,
                onstartupload: this.bzQ0x.g8c(this, true),
                onfinishupload: this.bzQ0x.g8c(this, false)
            })
        }
        if (this.Dm8e()) {
            this.oR4V.innerText = "";
            a7h.w8o(this.oR4V, "info-video");
            a7h.w8o(this.bft6n, "f-hide")
        } else {
            a7h.v8n(this.bft6n, "f-hide")
        }
    };
    b8h.bA9r = function() {
        this.bF9w();
        if (this.wf6Z) {
            this.wf6Z.S8K();
            delete this.wf6Z
        }
        if (this.hb1x) {
            this.hb1x.S8K();
            delete this.hb1x
        }
        if (this.oD3x) {
            this.oD3x.S8K();
            delete this.oD3x
        }
        if (this.mf3x) {
            this.mf3x.S8K();
            delete this.mf3x
        }
    };
    b8h.ca9R = function() {
        this.cd9U = "m-wgt-sharewin"
    };
    b8h.bS9J = function() {
        this.cc9T();
        this.bzF0x = a7h.db0x(this.m8e)[0];
        var bq9h = a7h.F8x(this.m8e, "j-flag");
        this.pV4Z = bq9h.shift();
        this.bAX1x = bq9h.shift();
        this.bcn5s = bq9h.shift();
        this.ek0x = bq9h.shift();
        this.oR4V = bq9h.shift();
        this.bfr6l = bq9h.shift();
        this.bXl7e = bq9h.shift();
        this.xr6l = bq9h.shift();
        this.cp9g = bq9h.shift();
        this.bfv6p = bq9h.shift();
        this.Br8j = bq9h.shift();
        this.cCs3x = bq9h.shift();
        this.bft6n = bq9h.shift();
        this.dZ0x = bq9h.shift();
        this.bcM5R = a7h.F8x(this.bft6n, "j-t");
        this.zk7d = H8z.FG9x.A8s({
            list: a7h.db0x(this.pV4Z),
            selected: "z-slt",
            onchange: this.bfm6g.g8c(this)
        });
        if (dn0x.dj0x.browser == "ie" && dn0x.dj0x.version < "8.0") {
            a7h.Y9P(this.bcn5s, "position", "relative");
            a7h.Y9P(this.bcn5s, "zIndex", "10")
        }
        h8b.s8k(window, "snsbind", this.LF8x.g8c(this));
        h8b.s8k(this.ek0x, "input", this.fC1x.g8c(this));
        h8b.s8k(this.ek0x, "keyup", this.tm5r.g8c(this));
        h8b.s8k(this.m8e, "click", this.cG0x.g8c(this));
        this.R8J = q8i.biG7z.A8s();
        this.R8J.s8k("onshareall", this.bcP5U.g8c(this, 0));
        this.R8J.s8k("onshareerror", this.ix2x.g8c(this));
        this.R8J.s8k("onshareprivate", this.bcP5U.g8c(this, 1));
        this.bcQ5V = q8i.xl6f.A8s();
        this.gK1x = q8i.hM1x.A8s();
        try {
            this.LG8y = top.api.sharePermission
        } catch(e) {}
        if (!this.LG8y) {
            this.LG8y = Ee9V;
            x8p.bp9g("/api/event/user/permission", {
                type: "json",
                onload: function(d8f) {
                    if (d8f.code == 200) {
                        this.LG8y = NEJ.EX(Ee9V, d8f)
                    }
                }.g8c(this)
            })
        }
    };
    b8h.bfm6g = function(d8f) {
        d8f.index == 0 ? a7h.v8n(this.bzF0x, "m-plshare") : a7h.w8o(this.bzF0x, "m-plshare");
        this.bcn5s.style.display = d8f.index == 0 ? "none": "";
        this.bXl7e.style.display = d8f.index == 0 ? "": "none";
        this.xr6l.style.display = d8f.index == 0 ? "": "none";
        if (this.ez0x == 24 || this.ez0x == 21) {
            this.xr6l.style.display = "none"
        }
        this.bAX1x.style.display = "none";
        this.ek0x.value = "";
        this.bY9P();
        this.Ci8a();
        if (d8f.index == 0) {
            var cy9p = a7h.cV0x(this.ek0x, "width");
            if (cy9p == "auto" || !cy9p) {
                return
            } else {
                if (this.hb1x) {
                    this.hb1x.S8K()
                }
                this.hb1x = y8q.SO1x.A8s({
                    parent: document.body,
                    target: this.ek0x
                })
            }
            this.bfv6p.style.display = ""
        } else {
            if (this.hb1x) {
                this.hb1x.S8K();
                delete this.hb1x
            }
            this.bfv6p.style.display = "none"
        }
    };
    b8h.cG0x = function(d8f) {
        var f8d = h8b.U8M(d8f, "d:action");
        if (!f8d) return;
        if (a7h.u8m(f8d, "action") == "search") {
            h8b.cm9d(d8f)
        } else if (a7h.u8m(f8d, "default") === undefined) {
            h8b.cm9d(d8f)
        }
        switch (a7h.u8m(f8d, "action")) {
        case "txt":
            this.lA3x();
            break;
        case "search":
            if (this.Dm8e()) {
                top.location.href = this.bZS7L
            } else if (this.BK8C && this.ez0x != 24) {
                if (this.mf3x) {
                    this.mf3x.S8K()
                }
                this.mf3x = y8q.bgK6E.A8s({
                    parent: this.m8e.parentNode,
                    onfinish: this.bfl6f.g8c(this),
                    oncancel: this.bWA6u.g8c(this)
                });
                this.bfk6e = true;
                this.m8e.style.display = "none";
                this.Ga9R(this.jh2x < 0 ? "添加音乐": "更换音乐")
            }
            break;
        case "at":
            h8b.si5n(d8f); !! this.gQ1x && this.gQ1x.br9i();
            this.hb1x.SK1x();
            this.fN1x();
            break;
        case "emot":
            h8b.si5n(d8f); !! this.hb1x && this.hb1x.Em9d();
            if (!this.gQ1x) {
                this.gQ1x = n8f.Ht0x.A8s({
                    parent: this.bfr6l
                });
                this.gQ1x.s8k("onselect", this.yn7g.g8c(this))
            }
            this.gQ1x.L8D();
            break;
        case "upload":
            break;
        case "sns":
            h8b.bf9W(d8f);
            var bfj6d, bx9o, t8l = a7h.u8m(f8d, "type");
            if (!this.bce5j[t8l]) {
                bfj6d = f8d.href.split("?");
                bx9o = k8c.hD1x(bfj6d[1]);
                bx9o["csrf_token"] = x8p.gZ1x("__csrf");
                top.open(bfj6d[0] + "?" + k8c.dh0x(bx9o));
                return
            }
            var bv9m = {
                2 : "sn",
                3 : "db",
                4 : "rr"
            };
            l8d.Bc8U(f8d, "u-slg-" + bv9m[t8l] + "-gray");
            break;
        case "close":
            !!this.gQ1x && this.gQ1x.br9i();
            this.bDf1x();
            break;
        case "share":
            h8b.bf9W(d8f);
            if (this.Dm8e()) {
                if (!a7h.by9p(f8d, "u-btn2-2-dis")) {
                    this.bVK6E()
                }
            } else if (a7h.by9p(f8d, "u-btn2-2-dis")) {
                if (!this.LG8y.pubEventWithoutResource && this.jh2x < 0) {
                    this.bVC6w()
                } else {}
            } else if (this.jh2x < 0 && !this.ek0x.value && this.oD3x && this.oD3x.Lf8X().length == 0) {
                n8f.X8P.L8D({
                    type: 2,
                    tip: "请输入内容"
                })
            } else {
                this.bVa6U()
            }
            break
        }
    };
    b8h.bVC6w = function() {
        var so5t = 0,
        bfg6a = function() {
            if (so5t % 2) {
                a7h.v8n(this.oR4V, "z-show")
            } else {
                a7h.w8o(this.oR4V, "z-show")
            }
            so5t++;
            if (so5t > 5) {
                clearInterval(eE0x)
            }
        },
        eE0x;
        return function() {
            so5t = 0;
            clearInterval(eE0x);
            eE0x = setInterval(bfg6a.g8c(this), 200)
        }
    } ();
    b8h.LF8x = function(o8g) {
        o8g = o8g.result;
        this.bce5j[o8g.type] = !0;
        var r8j = k8c.dd0x(bfE6y, o8g.type),
        cb9S = "u-slg-" + dT0x[r8j] + "-gray";
        a7h.v8n(this.bcM5R[r8j], cb9S)
    };
    b8h.bfl6f = function(bu9l) {
        var j8b = bu9l.data;
        this.jh2x = bu9l.id;
        this.ez0x = bu9l.type;
        this.m8e.style.display = "";
        this.Ga9R(this.bCr1x);
        this.mf3x && this.mf3x.S8K();
        this.bfk6e = false;
        this.bfD6x = j8b.picUrl;
        this.Lh8Z = j8b.title || "";
        this.Li8a = j8b.author || "";
        this.bfB6v = j8b.authors || "";
        this.bUa6U();
        this.TX2x()
    };
    b8h.bWA6u = function() {
        this.mf3x && this.mf3x.S8K();
        this.m8e.style.display = "";
        this.Ga9R(this.bCr1x);
        this.bfk6e = false;
        this.TX2x()
    };
    b8h.yn7g = function(d8f) {
        var bl9c = "[" + d8f.text + "]";
        gc1x.Hz0x(this.ek0x, this.oa3x, bl9c);
        this.fN1x()
    };
    b8h.fC1x = function(d8f) {
        dn0x.dj0x.browser == "ie" && dn0x.dj0x.version < "7.0" ? setTimeout(this.fN1x.g8c(this), 0) : this.fN1x()
    };
    b8h.tm5r = function(d8f) {
        this.lA3x();
        if (d8f.keyCode == 8) this.fN1x()
    };
    b8h.fN1x = function() {
        this.lA3x();
        this.Ci8a()
    };
    b8h.Ci8a = function() {
        var bm9d = Math.ceil(k8c.fp1x(this.ek0x.value.trim()) / 2);
        this.cp9g.innerText = 140 - bm9d;
        bm9d > 140 ? a7h.eR0x(this.cp9g, "s-fc4", "s-fc6") : a7h.eR0x(this.cp9g, "s-fc6", "s-fc4")
    };
    b8h.bVa6U = function() {
        if (this.cC9t()) return;
        if (k8c.fp1x(this.ek0x.value.trim()) > 280) {
            this.bY9P("字数超过140个字符");
            return
        }
        var t8l = this.zk7d.sQ5V(),
        j8b;
        if (t8l == 0) {
            for (var i = 0,
            Ii6c = []; i < this.bcM5R.length; ++i) {
                if (!a7h.by9p(this.bcM5R[i], "u-slg-" + dT0x[i] + "-gray")) Ii6c.push(bfE6y[i])
            }
            this.cC9t(!0);
            j8b = {
                id: this.jh2x,
                msg: this.ek0x.value.trim(),
                type: this.TZ2x(this.ez0x),
                picUrl: this.bfD6x,
                snsTypes: Ii6c.join(","),
                isPub: this.BK8C
            };
            if (this.bcb5g > 0) {
                j8b.actId = this.bcb5g;
                if (this.bcc5h) {
                    j8b.msg = "#" + this.bcc5h + "#" + j8b.msg
                }
            }
            var nH3x = this.oD3x && this.oD3x.Lf8X();
            if (nH3x && nH3x.length) {
                j8b.pics = nH3x
            }
            this.R8J.cpm0x(j8b)
        } else {
            var sr5w = this.wf6Z.OV0x();
            if (sr5w.length <= 0) {
                this.bY9P("请至少选择一位好友");
                return
            }
            this.R8J.coX0x({
                data: {
                    id: this.jh2x,
                    msg: this.ek0x.value.trim(),
                    type: this.TZ2x(this.ez0x),
                    userIds: "[" + sr5w.join(",") + "]"
                }
            })
        }
    };
    b8h.bVK6E = function() {
        if (this.cC9t()) {
            return
        }
        this.gK1x.fu1x("click", {
            target: "share",
            targetid: "button",
            page: "sharevideo"
        });
        if (k8c.fp1x(this.ek0x.value.trim()) > 280) {
            this.bY9P("字数超过140个字符");
            return
        }
        this.cC9t(!0);
        var j8b = {
            msg: this.ek0x.value.trim() || "",
            type: "video"
        },
        bTZ6T = {
            videoId: this.jh2x
        };
        if (this.bcb5g > 0) {
            j8b.actId = this.bcb5g;
            if (this.bcc5h) {
                j8b.msg = "#" + this.bcc5h + "#" + j8b.msg
            }
        }
        j8b.videoinfo = JSON.stringify(bTZ6T);
        this.R8J.coB0x({
            data: {
                videoId: this.jh2x,
                commit: true
            },
            data2: j8b,
            snsTypes: ""
        })
    };
    b8h.bcP5U = function(t8l, o8g) {
        this.cC9t(!1);
        this.br9i();
        if (!this.bfA6u) {
            if (this.Dm8e()) {
                n8f.X8P.L8D({
                    tip: "视频将在转码完成后自动发出",
                    autoclose: true
                })
            } else {
                n8f.X8P.L8D({
                    tip: "分享成功" + (o8g.point > 0 ? ' 获得<em class="s-fc6">' + o8g.point + "积分</em>": ""),
                    autoclose: true
                })
            }
        }
        h8b.z8r(n8f.yN7G, "sharesuccess", {
            isPrivate: t8l,
            rid: this.jh2x,
            rtype: this.ez0x,
            data: o8g.event
        });
        this.z8r("onshare")
    };
    b8h.ix2x = function(o8g) {
        this.cC9t(!1);
        var bE9v = "分享失败";
        if (o8g.code) {
            switch (o8g.code) {
            case 404:
                bE9v = "分享的资源不存在";
                break;
            case 407:
                bE9v = "输入内容包含有关键字";
                break;
            case 408:
                bE9v = "分享太快了，过会再分享吧";
                break;
            case 315:
                bE9v = o8g.message || "根据对方设置，你没有该操作权限";
                break;
            case 329:
                return l8d.fh0x({
                    clazz:
                    "m-layer-w2",
                    btntxt: "知道了",
                    message: "当前账号存在较多未完成发布的视频<br>请稍后再试"
                })
            }
        }
        this.bY9P(bE9v)
    };
    b8h.lA3x = function() {
        this.oa3x = gc1x.td5i(this.ek0x)
    };
    b8h.bY9P = function(bE9v) {
        this.dG0x(this.dZ0x, bE9v)
    };
    b8h.cC9t = function(cQ0x) {
        return this.dO0x(this.Br8j, cQ0x, "分享", "分享中...")
    };
    b8h.TZ2x = function(jQ2x) {
        return cbn7g[jQ2x] || ""
    };
    b8h.bTY6S = function() {
        var eg0x, tB5G = this.TZ2x(this.ez0x);
        this.oR4V.style.display = "";
        if (this.jh2x < 0) {
            this.oR4V.innerHTML = '<i class="highlight"></i><div class="text f-thide f-fl f-fs1"><i class="logo f-fl u-icn2 u-icn2-quaver"></i><span class="f-fs1 f-fl">给动态配上音乐</span></div><i class="f-fr icn u-icn2 u-icn2-plus"></i>'
        } else {
            if (!this.Lh8Z) {
                this.oR4V.style.display = "none";
                return
            }
            var Ue2x = this.BK8C && this.ez0x != 24;
            eg0x = (bbO5T[tB5G] ? bbO5T[tB5G] + "：": "") + this.Lh8Z + (bDl1x[tB5G] || " ") + (tB5G == "mv" || tB5G == "album" ? this.bfB6v || this.Li8a: this.Li8a);
            a7h.dH0x(this.oR4V, "m-xwgt-share-infobar", {
                canChange: Ue2x,
                info: eg0x
            });
            if (Ue2x) {
                a7h.v8n(this.oR4V, "z-dis")
            } else {
                a7h.w8o(this.oR4V, "z-dis")
            }
        }
        a7h.v8n(this.oR4V, "info-video")
    };
    b8h.bUa6U = function() {
        var tB5G = this.TZ2x(this.ez0x),
        eg0x = (bbO5T[tB5G] ? bbO5T[tB5G] + "：": "") + this.Lh8Z + (bDl1x[tB5G] || " ") + (tB5G == "mv" || tB5G == "album" ? this.bfB6v || this.Li8a: this.Li8a);
        Ue2x = this.BK8C && this.ez0x != 24;
        if (this.Dm8e()) {} else {
            a7h.v8n(this.oR4V, "info-video");
            a7h.dH0x(this.oR4V, "m-xwgt-share-infobar", {
                canChange: Ue2x,
                isPub: this.BK8C,
                info: eg0x
            })
        }
    };
    b8h.bTW6Q = function() {
        var Ik6e = this.ek0x.value;
        if (this.BK8C) {
            if ( !! this.bfk6e) {
                return !! Ik6e && !!Ik6e.length || !!this.oD3x && this.oD3x.Lf8X().length > 0
            } else {
                return ! (this.jh2x < 0) || !!Ik6e && !!Ik6e.length || !!this.oD3x && this.oD3x.Lf8X().length > 0
            }
        } else {
            return !! Ik6e && !!Ik6e.length || !!this.oD3x && this.oD3x.Lf8X().length > 0
        }
    };
    b8h.TX2x = function() {
        var bxP0x = false;
        if (!this.BK8C || this.LG8y.pubEventWithoutResource || !(this.jh2x < 0)) {
            bxP0x = true
        }
        if (bxP0x) {
            a7h.v8n(this.Br8j, "u-btn2-2-dis")
        } else {
            a7h.w8o(this.Br8j, "u-btn2-2-dis")
        }
    };
    b8h.bzQ0x = function(bfc6W) {
        if (bfc6W) {
            a7h.w8o(this.Br8j, "u-btn2-2-dis")
        } else {
            this.TX2x()
        }
    };
    b8h.bDf1x = function(d8f) {
        if (d8f) {
            d8f.stopped = true
        }
        if (this.bTW6Q()) {
            l8d.gD1x({
                title: "提示",
                message: "是否退出本次编辑？",
                btnok: "退出",
                action: function(W8O) {
                    if (W8O == "ok") {
                        this.z8r("forceclose", {});
                        this.br9i()
                    }
                }.g8c(this)
            })
        } else {
            this.z8r("forceclose", {});
            this.br9i()
        }
    };
    b8h.Ga9R = function(ec0x, dL0x) {
        this.om3x.yW7P(ec0x, dL0x)
    };
    b8h.Uj2x = function(t8l) {
        this.gK1x.fu1x("page", {
            type: t8l
        })
    };
    b8h.Dm8e = function() {
        return this.ez0x == 39
    };
    b8h.L8D = function() {
        var bTy6s = function(p8h, r8j) {
            var cb9S = "u-slg-" + dT0x[r8j] + "-gray"; ! this.bce5j[bfE6y[r8j]] ? a7h.w8o(p8h, cb9S) : a7h.v8n(p8h, cb9S)
        };
        return function() {
            K8C.L8D.call(this);
            this.m8e.style.display = "";
            this.bY9P();
            this.cC9t(!1);
            this.zk7d.RS1x(0);
            this.ek0x.focus();
            this.ek0x.value = this.cax7q || "";
            this.ek0x.placeholder = this.cap7i || "";
            if (!this.Dm8e()) {
                this.bTY6S()
            } else {
                a7h.w8o(this.oR4V, "info-video");
                a7h.dH0x(this.oR4V, "m-xwgt-share-videobar", {
                    title: this.Lh8Z,
                    picUrl: this.bfD6x
                })
            }
            this.fN1x();
            this.wf6Z.cuz1x();
            k8c.bb9S(this.bcM5R, bTy6s, this);
            this.lA3x();
            if (this.BK8C) {
                this.pV4Z.style.display = "none"
            } else {
                this.pV4Z.style.display = ""
            }
            this.TX2x()
        }
    } ();
    b8h.br9i = function(d8f) {
        K8C.br9i.call(this); !! this.gQ1x && this.gQ1x.br9i();
        if (this.wf6Z) {
            this.wf6Z.S8K();
            delete this.wf6Z
        }
        if (this.hb1x) {
            this.hb1x.S8K();
            delete this.hb1x
        }
        if (this.oD3x) {
            this.oD3x.S8K();
            delete this.oD3x
        }
        if (this.bxG0x) {
            this.bxG0x = this.bxG0x.S8K()
        }
        if (this.mf3x) {
            this.mf3x.S8K();
            delete this.mf3x
        }
    };
    l8d.mr3x = function(e8e) {
        if (!GUser || !GUser.userId || GUser.userId <= 0) {
            top.login();
            return
        }
        if (e8e.title === undefined) {
            e8e.title = "分享"
        }
        if (e8e.actId && e8e.type != 39) {
            var t8l = cbe7X[e8e.resourceType],
            ck9b = e8e.resourceJson,
            hz1x;
            if (k8c.fw1x(ck9b)) {
                try {
                    ck9b = JSON.parse(ck9b)
                } catch(e) {}
            }
            if (t8l) {
                hz1x = l8d.bxL0x(t8l, ck9b);
                e8e.name = hz1x.title;
                e8e.author = hz1x.author;
                e8e.picUrl = hz1x.picUrl;
                e8e.type = t8l;
                e8e.rid = (ck9b || []).id
            }
        }
        n8f.yN7G.L8D(e8e)
    };
    H8z.fE1x.A8s({
        element: n8f.yN7G,
        event: ["sharesuccess"]
    })
})(); (function() {
    var c8g = NEJ.P,
    Z9Q = NEJ.O,
    h8b = c8g("nej.v"),
    a7h = c8g("nej.e"),
    x8p = c8g("nej.j"),
    n8f = c8g("nm.l"),
    y8q = c8g("nm.w"),
    bC9t = c8g("nej.ui"),
    q8i = c8g("nm.d"),
    l8d = c8g("nm.x"),
    b8h,
    K8C;
    n8f.Un2x = NEJ.C();
    b8h = n8f.Un2x.O8G(n8f.ei0x);
    K8C = n8f.Un2x.cl9c;
    b8h.cs9j = function() {
        this.cx9o()
    };
    b8h.bS9J = function() {
        this.cc9T();
        var i8a = a7h.F8x(this.m8e, "j-flag");
        h8b.s8k(i8a[0], "click", this.Ep9g.g8c(this))
    };
    b8h.ca9R = function() {
        this.cd9U = "m-import-ok"
    };
    b8h.bj9a = function(e8e) {
        e8e.parent = e8e.parent || document.body;
        e8e.title = "歌曲同步完成";
        this.bk9b(e8e)
    };
    b8h.bA9r = function() {
        this.bF9w()
    };
    b8h.Ep9g = function(d8f) {
        this.br9i();
        if (location.pathname.indexOf("my") >= 0) {
            location.reload()
        } else {
            location.dispatch2("/my/")
        }
    };
    b8h.zQ7J = function() {
        this.br9i()
    };
    b8h.bGa2x = function(d8f) {
        if (d8f.keyCode == 13) this.Dr8j()
    }
})(); (function() {
    var c8g = NEJ.P,
    Z9Q = NEJ.O,
    h8b = c8g("nej.v"),
    a7h = c8g("nej.e"),
    x8p = c8g("nej.j"),
    N8F = c8g("nej.p"),
    k8c = c8g("nej.u"),
    n8f = c8g("nm.l"),
    y8q = c8g("nm.w"),
    bC9t = c8g("nej.ui"),
    q8i = c8g("nm.d"),
    l8d = c8g("nm.x"),
    b8h,
    K8C;
    n8f.bxF0x = NEJ.C();
    b8h = n8f.bxF0x.O8G(n8f.ei0x);
    b8h.ca9R = function() {
        this.cd9U = "m-programtips-layer"
    };
    b8h.bS9J = function() {
        this.cc9T();
        this.bO9F = a7h.F8x(this.m8e, "j-flag")
    };
    b8h.bj9a = function(e8e) {
        e8e.clazz = " m-layer-programtips";
        e8e.parent = e8e.parent || document.body;
        e8e.title = "付费内容提示";
        e8e.draggable = !0;
        e8e.destroyalbe = !0;
        e8e.mask = true;
        this.bk9b(e8e);
        this.gL1x = e8e.id;
        this.bTr6l = e8e.radiotype;
        this.lk2x = location.protocol + "//" + (this.bfa6U() || "music.163.com") + "/m/" + this.bTr6l + "?id=" + this.gL1x;
        this.bSW6Q()
    };
    b8h.bA9r = function() {
        this.bF9w()
    };
    b8h.zQ7J = function() {
        this.br9i()
    };
    b8h.Ep9g = function(d8f) {
        this.z8r("onok", C8u);
        this.br9i()
    };
    l8d.bxD0x = function(e8e) {
        n8f.bxF0x.A8s(e8e).L8D()
    };
    b8h.bSW6Q = function() {
        x8p.bp9g("/api/web/qrcode/get", {
            method: "POST",
            type: "json",
            data: k8c.dh0x({
                url: this.lk2x,
                size: 180
            }),
            onload: function(j8b) {
                if (j8b.code == 200) {
                    this.bSK6E(j8b.qrcodeImageUrl)
                } else {
                    alert("二维码获取失败")
                }
            }.g8c(this)
        })
    };
    b8h.bfa6U = function() {
        var SQ1x = location.host;
        if (SQ1x.indexOf("music") >= 0) {
            return "music.163.com"
        } else {
            return "igame.163.com"
        }
    };
    b8h.bSK6E = function(jx2x) {
        this.bO9F[0].style.backgroundImage = "url(" + jx2x + ")"
    }
})(); (function() {
    var c8g = NEJ.P,
    a7h = c8g("nej.e"),
    dn0x = c8g("nej.p"),
    h8b = c8g("nej.v"),
    k8c = c8g("nej.u"),
    H8z = c8g("nej.ut"),
    x8p = c8g("nej.j"),
    q8i = c8g("nm.d"),
    l8d = c8g("nm.x"),
    E8w = c8g("nm.m"),
    n8f = c8g("nm.l"),
    M8E = c8g("nm.m.f"),
    b8h,
    K8C;
    E8w.cX0x = NEJ.C();
    b8h = E8w.cX0x.O8G(H8z.do0x);
    b8h.bH9y = function() {
        var pF4J = !1;
        return function() {
            if (pF4J) return;
            pF4J = !0;
            this.bL9C();
            if (top == self) {
                return
            }
            this.sh5m = a7h.B8t("g_backtop");
            if (window.GRef != "mail") {} else {
                this.bxA0x()
            }
            H8z.fE1x.A8s({
                element: window,
                event: ["share", "playchange", "snsbind", "playstatechange"]
            });
            this.bT9K([[window, "scroll", this.AS8K.g8c(this)], [document, "keyup", this.bSz6t.g8c(this)], [document.body, "click", this.rI5N.g8c(this)], [document, "mouseup", this.bSy6s.g8c(this)], [this.sh5m, "click", this.Mo8g.g8c(this)], [q8i.rJ5O, "message", this.ul5q.g8c(this)]]);
            l8d.cqX1x(document.body);
            this.AS8K();
            if (this.AR8J !== false && typeof GUser !== "undefined" && GUser.userId > 0) q8i.rJ5O.gh1x().th5m();
            try {
                top.GUser = NEJ.X(top.GUser, GUser);
                top.api.refreshUserInfo();
                if (dn0x.dj0x.browser == "ie" && parseInt(dn0x.dj0x.version) < 9 && /#(.*?)$/.test(top.document.title)) {
                    top.document.title = "网易云音乐"
                } else {
                    var gI1x = top.player.getPlaying();
                    if (gI1x && gI1x.track && gI1x.playing) {
                        top.document.title = decodeURIComponent("%E2%96%B6%20") + gI1x.track.name
                    } else {
                        top.document.title = document.title
                    }
                }
            } catch(e) {}
            window.share = this.wx6r.g8c(this);
            this.kD2x = q8i.hM1x.A8s();
            window.log = this.kH2x.g8c(this);
            var rU5Z = location.search;
            if (rU5Z) {
                var bx9o = rU5Z.substr(rU5Z.indexOf("?") + 1),
                gb1x = k8c.hD1x(bx9o);
                if (gb1x && gb1x["_hash"]) location.hash = gb1x["_hash"]
            }
        }
    } ();
    b8h.bSz6t = function(d8f) {
        var f8d = h8b.U8M(d8f);
        try {
            if (d8f.keyCode == 80 && l8d.byL0x() || ["textarea", "input"].indexOf(f8d.tagName.toLowerCase()) >= 0) return;
            h8b.z8r(top.document, "keyup", {
                ctrlKey: d8f.ctrlKey,
                keyCode: d8f.keyCode
            })
        } catch(e) {}
    };
    b8h.rI5N = function(d8f) {
        var f8d = h8b.U8M(d8f);
        if (f8d && f8d.tagName == "INPUT") return;
        var f8d = h8b.U8M(d8f, "d:pid");
        if (f8d) {
            h8b.cm9d(d8f);
            var oH4L = a7h.u8m(f8d, "pid"),
            AQ8I = a7h.u8m(f8d, "ptype"),
            W8O = a7h.u8m(f8d, "action") || "play";
            switch (W8O) {
            case "subscribe":
                l8d.mi3x({
                    tracks:
                    [oH4L]
                });
                break
            }
        }
        f8d = h8b.U8M(d8f, "d:resAction");
        if (f8d && f8d.className.indexOf("-dis") == -1) {
            var cU0x = a7h.u8m(f8d, "resId"),
            t8l = a7h.u8m(f8d, "resType"),
            beZ6T = a7h.u8m(f8d, "resRadiotype"),
            beY6S = a7h.u8m(f8d, "resRadioid"),
            dY0x = a7h.u8m(f8d, "resFrom"),
            j8b = a7h.u8m(f8d, "resData"),
            W8O = a7h.u8m(f8d, "resAction"),
            bgE6y = a7h.u8m(f8d, "resCopyright"),
            UH2x = a7h.u8m(f8d, "resAuditstatus");
            if (W8O != "log" && W8O != "bilog") h8b.cm9d(d8f);
            switch (W8O) {
            case "log":
                j8b = (j8b || "").split("|");
                if ( !! j8b[0]) {
                    var bd9U = {
                        id: cU0x,
                        alg: j8b[2] || "itembased",
                        scene: j8b[3],
                        position: j8b[1] || 0
                    };
                    if ( !! j8b[4]) bd9U.srcid = j8b[4];
                    window.log(j8b[0], bd9U)
                }
                break;
            case "bilog":
                var bkj7c = a7h.u8m(f8d, "logAction"),
                bkh7a = a7h.u8m(f8d, "logJson");
                window.log(bkj7c, bkh7a);
                break;
            case "share":
                if (UH2x && UH2x == 1) {
                    l8d.ic1x("由于版权问题，该节目暂时无法分享。")
                } else {
                    share(cU0x, t8l, a7h.u8m(f8d, "resPic"), a7h.u8m(f8d, "resName"), a7h.u8m(f8d, "resAuthor"), a7h.u8m(f8d, "resAuthors"))
                }
                break;
            case "fav":
            case "subscribe":
                if (t8l == 18) {
                    var qa4e = a7h.u8m(f8d, "resLevel"),
                    rr4v = a7h.u8m(f8d, "resFee");
                    if (qa4e == 10) {
                        l8d.tY5d(rr4v, cU0x, "song");
                        break
                    }
                    l8d.mi3x({
                        tracks: [cU0x]
                    })
                }
                break;
            case "download":
                l8d.Jc7V({
                    id:
                    cU0x,
                    type: t8l
                });
                break;
            case "programtips":
                if (UH2x && UH2x == 1) {
                    l8d.ic1x("由于版权问题，该节目暂时无法分享。")
                } else {
                    l8d.bxD0x({
                        id: beY6S,
                        radiotype: beZ6T
                    })
                }
                break
            }
        }
        if (top == self) return;
        try {
            top.onIframeClick(d8f)
        } catch(e) {}
    };
    b8h.bSy6s = function(d8f) {
        try {
            h8b.z8r(top.document, "mouseup")
        } catch(e) {}
    };
    b8h.AS8K = function() {
        var bSh5m = function() {
            var ch9Y = window.innerHeight;
            if (!k8c.vl6f(ch9Y)) ch9Y = (document.documentElement || document.body).clientHeight;
            return ch9Y
        };
        return function(d8f) {
            if (!this.sh5m) return;
            var UJ2x = bSh5m(),
            fS1x = document.documentElement.scrollTop || document.body.scrollTop;
            a7h.Y9P(this.sh5m, "display", fS1x > 0 ? "": "none");
            if (dn0x.dj0x.browser == "ie" && dn0x.dj0x.version < "7.0") {
                var gi1x = Math.min(document.body.clientHeight, UJ2x + fS1x) - 204;
                a7h.Y9P(this.sh5m, "top", gi1x + "px")
            }
        }
    } ();
    b8h.Mo8g = function(d8f) {
        h8b.cm9d(d8f);
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0
    };
    b8h.wx6r = function() {
        var beX6R = function(d8f) {
            h8b.z8r(window, "share", d8f)
        };
        return function(cU0x, t8l, EO9F, T8L, Mx8p, My8q) {
            l8d.mr3x({
                rid: cU0x,
                type: t8l,
                purl: EO9F,
                name: T8L,
                author: Mx8p,
                authors: My8q,
                onshare: beX6R.g8c(this)
            })
        }
    } ();
    b8h.kH2x = function(W8O, bd9U) {
        try {
            top.log(W8O, bd9U)
        } catch(e) {
            switch (W8O) {
            case "play":
                this.kD2x.eu0x(bd9U);
                break;
            case "search":
                this.kD2x.bFk2x(bd9U);
                break;
            default:
                this.kD2x.fu1x(W8O, bd9U)
            }
        }
    };
    b8h.bxA0x = function() {
        var UO2x, beW6Q = false,
        bs9j = [45, 60];
        var bSa5f = function(bE9v) {
            if (bE9v.title != "MailBoxImport") return;
            var P8H = JSON.parse(bE9v.content || "null") || Z9Q;
            if (P8H.status == 10) {
                n8f.Un2x.A8s().L8D();
                window.clearTimeout(UO2x)
            }
        };
        var tc5h = function(d8f) {
            if (d8f.code == 200) {
                if (d8f.status == 1) {
                    h8b.s8k(q8i.Ah7a, "message", bSa5f.g8c(this));
                    q8i.Ah7a.A8s().bjQ7J();
                    beW6Q = true
                } else {
                    if (beW6Q) {
                        if (d8f.status == 10) {
                            n8f.Un2x.A8s().L8D();
                            h8b.gG1x(q8i.Ah7a, "message");
                            window.clearTimeout(UO2x);
                            beW6Q = false
                        }
                    } else {
                        window.clearTimeout(UO2x)
                    }
                }
            }
        };
        return function() {
            var rR5W = bs9j.shift() * 1e3;
            x8p.bp9g("/api/musicbox/mail/status", {
                type: "json",
                method: "get",
                onload: tc5h.g8c(this)
            });
            if (rR5W) {
                UO2x = window.setTimeout(arguments.callee, rR5W)
            }
        }
    } ();
    b8h.ul5q = function(d8f) {
        try {
            top.polling(d8f)
        } catch(e) {}
    }
})()
