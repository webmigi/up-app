(window.webpackJsonp = window.webpackJsonp || []).push([
  [1],
  [
    ,
    function(t, e, n) {
      'use strict';
      n.d(e, 'k', function() {
        return w;
      }),
        n.d(e, 'm', function() {
          return x;
        }),
        n.d(e, 'l', function() {
          return C;
        }),
        n.d(e, 'e', function() {
          return _;
        }),
        n.d(e, 'b', function() {
          return H;
        }),
        n.d(e, 's', function() {
          return N;
        }),
        n.d(e, 'g', function() {
          return O;
        }),
        n.d(e, 'h', function() {
          return j;
        }),
        n.d(e, 'd', function() {
          return I;
        }),
        n.d(e, 'r', function() {
          return k;
        }),
        n.d(e, 'j', function() {
          return D;
        }),
        n.d(e, 't', function() {
          return $;
        }),
        n.d(e, 'o', function() {
          return L;
        }),
        n.d(e, 'q', function() {
          return A;
        }),
        n.d(e, 'f', function() {
          return M;
        }),
        n.d(e, 'c', function() {
          return T;
        }),
        n.d(e, 'i', function() {
          return P;
        }),
        n.d(e, 'p', function() {
          return R;
        }),
        n.d(e, 'a', function() {
          return F;
        }),
        n.d(e, 'n', function() {
          return Y;
        }),
        n.d(e, 'u', function() {
          return K;
        });
      n(53),
        n(87),
        n(58),
        n(169),
        n(141),
        n(35),
        n(192),
        n(110),
        n(88),
        n(194),
        n(73),
        n(21),
        n(196),
        n(37),
        n(69),
        n(92),
        n(47),
        n(197),
        n(67),
        n(142),
        n(101),
        n(143),
        n(64);
      var r = n(29),
        o = (n(39), n(7)),
        c = n(16),
        l = n(15),
        f = n(0),
        d = n(50);
      function h(object, t) {
        var e = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(object);
          t &&
            (n = n.filter(function(t) {
              return Object.getOwnPropertyDescriptor(object, t).enumerable;
            })),
            e.push.apply(e, n);
        }
        return e;
      }
      function m(t) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {};
          i % 2
            ? h(Object(source), !0).forEach(function(e) {
                Object(c.a)(t, e, source[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(
                t,
                Object.getOwnPropertyDescriptors(source),
              )
            : h(Object(source)).forEach(function(e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(source, e),
                );
              });
        }
        return t;
      }
      function v(t, e) {
        var n;
        if ('undefined' == typeof Symbol || null == t[Symbol.iterator]) {
          if (
            Array.isArray(t) ||
            (n = (function(t, e) {
              if (!t) return;
              if ('string' == typeof t) return y(t, e);
              var n = Object.prototype.toString.call(t).slice(8, -1);
              'Object' === n && t.constructor && (n = t.constructor.name);
              if ('Map' === n || 'Set' === n) return Array.from(t);
              if (
                'Arguments' === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return y(t, e);
            })(t)) ||
            (e && t && 'number' == typeof t.length)
          ) {
            n && (t = n);
            var i = 0,
              r = function() {};
            return {
              s: r,
              n: function() {
                return i >= t.length
                  ? { done: !0 }
                  : { done: !1, value: t[i++] };
              },
              e: function(t) {
                throw t;
              },
              f: r,
            };
          }
          throw new TypeError(
            'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
          );
        }
        var o,
          c = !0,
          l = !1;
        return {
          s: function() {
            n = t[Symbol.iterator]();
          },
          n: function() {
            var t = n.next();
            return (c = t.done), t;
          },
          e: function(t) {
            (l = !0), (o = t);
          },
          f: function() {
            try {
              c || null == n.return || n.return();
            } finally {
              if (l) throw o;
            }
          },
        };
      }
      function y(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
        return n;
      }
      function w(t) {
        f.default.config.errorHandler && f.default.config.errorHandler(t);
      }
      function x(t) {
        return t.then(function(t) {
          return t.default || t;
        });
      }
      function C(t) {
        return (
          t.$options &&
          'function' == typeof t.$options.fetch &&
          !t.$options.fetch.length
        );
      }
      function _(t) {
        var e,
          n =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          r = t.$children || [],
          o = v(r);
        try {
          for (o.s(); !(e = o.n()).done; ) {
            var c = e.value;
            c.$fetch ? n.push(c) : c.$children && _(c, n);
          }
        } catch (t) {
          o.e(t);
        } finally {
          o.f();
        }
        return n;
      }
      function H(t, e) {
        if (e || !t.options.__hasNuxtData) {
          var n =
            t.options._originDataFn ||
            t.options.data ||
            function() {
              return {};
            };
          (t.options._originDataFn = n),
            (t.options.data = function() {
              var data = n.call(this, this);
              return (
                this.$ssrContext && (e = this.$ssrContext.asyncData[t.cid]),
                m(m({}, data), e)
              );
            }),
            (t.options.__hasNuxtData = !0),
            t._Ctor &&
              t._Ctor.options &&
              (t._Ctor.options.data = t.options.data);
        }
      }
      function N(t) {
        return (
          (t.options && t._Ctor === t) ||
            (t.options
              ? ((t._Ctor = t), (t.extendOptions = t.options))
              : ((t = f.default.extend(t))._Ctor = t),
            !t.options.name &&
              t.options.__file &&
              (t.options.name = t.options.__file)),
          t
        );
      }
      function O(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          n =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : 'components';
        return Array.prototype.concat.apply(
          [],
          t.matched.map(function(t, r) {
            return Object.keys(t[n]).map(function(o) {
              return e && e.push(r), t[n][o];
            });
          }),
        );
      }
      function j(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return O(t, e, 'instances');
      }
      function I(t, e) {
        return Array.prototype.concat.apply(
          [],
          t.matched.map(function(t, n) {
            return Object.keys(t.components).reduce(function(r, o) {
              return (
                t.components[o]
                  ? r.push(e(t.components[o], t.instances[o], t, o, n))
                  : delete t.components[o],
                r
              );
            }, []);
          }),
        );
      }
      function k(t, e) {
        return Promise.all(
          I(
            t,
            (function() {
              var t = Object(o.a)(
                regeneratorRuntime.mark(function t(n, r, o, c) {
                  return regeneratorRuntime.wrap(function(t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          if ('function' != typeof n || n.options) {
                            t.next = 4;
                            break;
                          }
                          return (t.next = 3), n();
                        case 3:
                          n = t.sent;
                        case 4:
                          return (
                            (o.components[c] = n = N(n)),
                            t.abrupt(
                              'return',
                              'function' == typeof e ? e(n, r, o, c) : n,
                            )
                          );
                        case 6:
                        case 'end':
                          return t.stop();
                      }
                  }, t);
                }),
              );
              return function(e, n, r, o) {
                return t.apply(this, arguments);
              };
            })(),
          ),
        );
      }
      function D(t) {
        return E.apply(this, arguments);
      }
      function E() {
        return (E = Object(o.a)(
          regeneratorRuntime.mark(function t(e) {
            return regeneratorRuntime.wrap(function(t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    if (e) {
                      t.next = 2;
                      break;
                    }
                    return t.abrupt('return');
                  case 2:
                    return (t.next = 4), k(e);
                  case 4:
                    return t.abrupt(
                      'return',
                      m(
                        m({}, e),
                        {},
                        {
                          meta: O(e).map(function(t, n) {
                            return m(
                              m({}, t.options.meta),
                              (e.matched[n] || {}).meta,
                            );
                          }),
                        },
                      ),
                    );
                  case 5:
                  case 'end':
                    return t.stop();
                }
            }, t);
          }),
        )).apply(this, arguments);
      }
      function $(t, e) {
        return S.apply(this, arguments);
      }
      function S() {
        return (S = Object(o.a)(
          regeneratorRuntime.mark(function t(e, n) {
            var o, c, f, d;
            return regeneratorRuntime.wrap(function(t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (
                      e.context ||
                        ((e.context = {
                          isStatic: !0,
                          isDev: !1,
                          isHMR: !1,
                          app: e,
                          store: e.store,
                          payload: n.payload,
                          error: n.error,
                          base: '/',
                          env: {},
                        }),
                        n.ssrContext && (e.context.ssrContext = n.ssrContext),
                        (e.context.redirect = function(t, path, n) {
                          if (t) {
                            e.context._redirected = !0;
                            var o = Object(r.a)(path);
                            if (
                              ('number' == typeof t ||
                                ('undefined' !== o && 'object' !== o) ||
                                ((n = path || {}),
                                (path = t),
                                (o = Object(r.a)(path)),
                                (t = 302)),
                              'object' === o &&
                                (path = e.router.resolve(path).route.fullPath),
                              !/(^[.]{1,2}\/)|(^\/(?!\/))/.test(path))
                            )
                              throw ((path = W(path, n)),
                              window.location.replace(path),
                              new Error('ERR_REDIRECT'));
                            e.context.next({ path: path, query: n, status: t });
                          }
                        }),
                        (e.context.nuxtState = window.__NUXT__)),
                      (t.next = 3),
                      Promise.all([D(n.route), D(n.from)])
                    );
                  case 3:
                    (o = t.sent),
                      (c = Object(l.a)(o, 2)),
                      (f = c[0]),
                      (d = c[1]),
                      n.route && (e.context.route = f),
                      n.from && (e.context.from = d),
                      (e.context.next = n.next),
                      (e.context._redirected = !1),
                      (e.context._errored = !1),
                      (e.context.isHMR = !1),
                      (e.context.params = e.context.route.params || {}),
                      (e.context.query = e.context.route.query || {});
                  case 15:
                  case 'end':
                    return t.stop();
                }
            }, t);
          }),
        )).apply(this, arguments);
      }
      function L(t, e) {
        return !t.length || e._redirected || e._errored
          ? Promise.resolve()
          : A(t[0], e).then(function() {
              return L(t.slice(1), e);
            });
      }
      function A(t, e) {
        var n;
        return (n =
          2 === t.length
            ? new Promise(function(n) {
                t(e, function(t, data) {
                  t && e.error(t), n((data = data || {}));
                });
              })
            : t(e)) &&
          n instanceof Promise &&
          'function' == typeof n.then
          ? n
          : Promise.resolve(n);
      }
      function M(base, t) {
        if ('hash' === t) return window.location.hash.replace(/^#\//, '');
        base = decodeURI(base).slice(0, -1);
        var path = decodeURI(window.location.pathname);
        base && path.startsWith(base) && (path = path.slice(base.length));
        var e = (path || '/') + window.location.search + window.location.hash;
        return Object(d.b)(e);
      }
      function T(t, e) {
        return (function(t, e) {
          for (var n = new Array(t.length), i = 0; i < t.length; i++)
            'object' === Object(r.a)(t[i]) &&
              (n[i] = new RegExp('^(?:' + t[i].pattern + ')$', Z(e)));
          return function(e, r) {
            for (
              var path = '',
                data = e || {},
                o = (r || {}).pretty ? B : encodeURIComponent,
                c = 0;
              c < t.length;
              c++
            ) {
              var l = t[c];
              if ('string' != typeof l) {
                var f = data[l.name || 'pathMatch'],
                  d = void 0;
                if (null == f) {
                  if (l.optional) {
                    l.partial && (path += l.prefix);
                    continue;
                  }
                  throw new TypeError(
                    'Expected "' + l.name + '" to be defined',
                  );
                }
                if (Array.isArray(f)) {
                  if (!l.repeat)
                    throw new TypeError(
                      'Expected "' +
                        l.name +
                        '" to not repeat, but received `' +
                        JSON.stringify(f) +
                        '`',
                    );
                  if (0 === f.length) {
                    if (l.optional) continue;
                    throw new TypeError(
                      'Expected "' + l.name + '" to not be empty',
                    );
                  }
                  for (var h = 0; h < f.length; h++) {
                    if (((d = o(f[h])), !n[c].test(d)))
                      throw new TypeError(
                        'Expected all "' +
                          l.name +
                          '" to match "' +
                          l.pattern +
                          '", but received `' +
                          JSON.stringify(d) +
                          '`',
                      );
                    path += (0 === h ? l.prefix : l.delimiter) + d;
                  }
                } else {
                  if (((d = l.asterisk ? B(f, !0) : o(f)), !n[c].test(d)))
                    throw new TypeError(
                      'Expected "' +
                        l.name +
                        '" to match "' +
                        l.pattern +
                        '", but received "' +
                        d +
                        '"',
                    );
                  path += l.prefix + d;
                }
              } else path += l;
            }
            return path;
          };
        })(
          (function(t, e) {
            var n,
              r = [],
              o = 0,
              c = 0,
              path = '',
              l = (e && e.delimiter) || '/';
            for (; null != (n = V.exec(t)); ) {
              var f = n[0],
                d = n[1],
                h = n.index;
              if (((path += t.slice(c, h)), (c = h + f.length), d))
                path += d[1];
              else {
                var m = t[c],
                  v = n[2],
                  y = n[3],
                  w = n[4],
                  x = n[5],
                  C = n[6],
                  _ = n[7];
                path && (r.push(path), (path = ''));
                var H = null != v && null != m && m !== v,
                  N = '+' === C || '*' === C,
                  O = '?' === C || '*' === C,
                  j = n[2] || l,
                  pattern = w || x;
                r.push({
                  name: y || o++,
                  prefix: v || '',
                  delimiter: j,
                  optional: O,
                  repeat: N,
                  partial: H,
                  asterisk: Boolean(_),
                  pattern: pattern
                    ? U(pattern)
                    : _
                    ? '.*'
                    : '[^' + z(j) + ']+?',
                });
              }
            }
            c < t.length && (path += t.substr(c));
            path && r.push(path);
            return r;
          })(t, e),
          e,
        );
      }
      function P(t, e) {
        var n = {},
          r = m(m({}, t), e);
        for (var o in r) String(t[o]) !== String(e[o]) && (n[o] = !0);
        return n;
      }
      function R(t) {
        var e;
        if (t.message || 'string' == typeof t) e = t.message || t;
        else
          try {
            e = JSON.stringify(t, null, 2);
          } catch (n) {
            e = '['.concat(t.constructor.name, ']');
          }
        return m(
          m({}, t),
          {},
          {
            message: e,
            statusCode:
              t.statusCode ||
              t.status ||
              (t.response && t.response.status) ||
              500,
          },
        );
      }
      (window.onNuxtReadyCbs = []),
        (window.onNuxtReady = function(t) {
          window.onNuxtReadyCbs.push(t);
        });
      var V = new RegExp(
        [
          '(\\\\.)',
          '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))',
        ].join('|'),
        'g',
      );
      function B(t, e) {
        var n = e ? /[?#]/g : /[/?#]/g;
        return encodeURI(t).replace(n, function(t) {
          return (
            '%' +
            t
              .charCodeAt(0)
              .toString(16)
              .toUpperCase()
          );
        });
      }
      function z(t) {
        return t.replace(/([.+*?=^!:${}()[\]|/\\])/g, '\\$1');
      }
      function U(t) {
        return t.replace(/([=!:$/()])/g, '\\$1');
      }
      function Z(t) {
        return t && t.sensitive ? '' : 'i';
      }
      function W(t, e) {
        var n,
          r = t.indexOf('://');
        -1 !== r
          ? ((n = t.substring(0, r)), (t = t.substring(r + 3)))
          : t.startsWith('//') && (t = t.substring(2));
        var o,
          c = t.split('/'),
          f = (n ? n + '://' : '//') + c.shift(),
          path = c.join('/');
        if (
          ('' === path && 1 === c.length && (f += '/'),
          2 === (c = path.split('#')).length)
        ) {
          var d = c,
            h = Object(l.a)(d, 2);
          (path = h[0]), (o = h[1]);
        }
        return (
          (f += path ? '/' + path : ''),
          e &&
            '{}' !== JSON.stringify(e) &&
            (f +=
              (2 === t.split('?').length ? '&' : '?') +
              (function(t) {
                return Object.keys(t)
                  .sort()
                  .map(function(e) {
                    var n = t[e];
                    return null == n
                      ? ''
                      : Array.isArray(n)
                      ? n
                          .slice()
                          .map(function(t) {
                            return [e, '=', t].join('');
                          })
                          .join('&')
                      : e + '=' + n;
                  })
                  .filter(Boolean)
                  .join('&');
              })(e)),
          (f += o ? '#' + o : '')
        );
      }
      function F(t, e, n) {
        t.$options[e] || (t.$options[e] = []),
          t.$options[e].includes(n) || t.$options[e].push(n);
      }
      function G(path) {
        return path.replace(/\/+$/, '') || '/';
      }
      function Y(t, e) {
        return G(t) === G(e);
      }
      function K(t) {
        try {
          window.history.scrollRestoration = t;
        } catch (t) {}
      }
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function(t, e, n) {
      'use strict';
      n.d(e, 'b', function() {
        return yt;
      }),
        n.d(e, 'a', function() {
          return E;
        });
      n(35), n(88), n(21), n(39);
      var r = n(7),
        o = n(16),
        c = n(0),
        l = n(11),
        f = n(163),
        d = n(108),
        h = n.n(d),
        m = n(38),
        v = n.n(m),
        y = n(51),
        w = n(50),
        x = n(1);
      n(210), n(122);
      'scrollRestoration' in window.history &&
        (Object(x.u)('manual'),
        window.addEventListener('beforeunload', function() {
          Object(x.u)('auto');
        }),
        window.addEventListener('load', function() {
          Object(x.u)('manual');
        }));
      var C = function() {},
        _ = y.a.prototype.push;
      (y.a.prototype.push = function(t) {
        var e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : C,
          n = arguments.length > 2 ? arguments[2] : void 0;
        return _.call(this, t, e, n);
      }),
        c.default.use(y.a);
      var H = {
        mode: 'history',
        base: '/',
        linkActiveClass: 'nuxt-link-active',
        linkExactActiveClass: 'nuxt-link-exact-active',
        scrollBehavior: function(t, e, n) {
          var r = !1,
            o = Object(x.g)(t);
          (o.some(function(t) {
            return t.options.scrollToTop;
          }) ||
            (o.length < 2 &&
              o.every(function(t) {
                return !1 !== t.options.scrollToTop;
              }))) &&
            (r = { x: 0, y: 0 }),
            n && (r = n);
          var c = window.$nuxt;
          return (
            ((t.path === e.path && t.hash !== e.hash) || t === e) &&
              c.$nextTick(function() {
                return c.$emit('triggerScroll');
              }),
            new Promise(function(e) {
              c.$once('triggerScroll', function() {
                if (t.hash) {
                  var n = t.hash;
                  void 0 !== window.CSS &&
                    void 0 !== window.CSS.escape &&
                    (n = '#' + window.CSS.escape(n.substr(1)));
                  try {
                    document.querySelector(n) && (r = { selector: n });
                  } catch (t) {
                    console.warn(
                      'Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).',
                    );
                  }
                }
                e(r);
              });
            })
          );
        },
        routes: [
          {
            path: '/people',
            component: function() {
              return Object(x.m)(
                Promise.all([n.e(0), n.e(5)]).then(n.bind(null, 454)),
              );
            },
            name: 'people',
          },
          {
            path: '/process',
            component: function() {
              return Object(x.m)(
                Promise.all([n.e(0), n.e(6)]).then(n.bind(null, 455)),
              );
            },
            name: 'process',
          },
          {
            path: '/project',
            component: function() {
              return Object(x.m)(
                Promise.all([n.e(0), n.e(8)]).then(n.bind(null, 456)),
              );
            },
            name: 'project',
          },
          {
            path: '/news/:id?',
            component: function() {
              return Object(x.m)(n.e(4).then(n.bind(null, 457)));
            },
            name: 'news-id',
          },
          {
            path: '/project/:id',
            component: function() {
              return Object(x.m)(
                Promise.all([n.e(0), n.e(7)]).then(n.bind(null, 458)),
              );
            },
            name: 'project-id',
          },
          {
            path: '/',
            component: function() {
              return Object(x.m)(
                Promise.all([n.e(0), n.e(3)]).then(n.bind(null, 453)),
              );
            },
            name: 'index',
          },
        ],
        fallback: !1,
      };
      function N() {
        var t = new y.a(H),
          e = t.resolve.bind(t);
        return (
          (t.resolve = function(t, n, r) {
            'string' == typeof t && (t = Object(w.b)(t));
            var o = e(t, n, r);
            return (
              o &&
                o.resolved &&
                o.resolved.query &&
                (function(t) {
                  for (var e in t)
                    'string' == typeof t[e] && (t[e] = Object(w.a)(t[e]));
                })(o.resolved.query),
              o
            );
          }),
          t
        );
      }
      n(57), n(63);
      var O = {
          name: 'NuxtChild',
          functional: !0,
          props: {
            nuxtChildKey: { type: String, default: '' },
            keepAlive: Boolean,
            keepAliveProps: { type: Object, default: void 0 },
          },
          render: function(t, e) {
            var n = e.parent,
              data = e.data,
              r = e.props,
              o = n.$createElement;
            data.nuxtChild = !0;
            for (
              var c = n,
                l = n.$nuxt.nuxt.transitions,
                f = n.$nuxt.nuxt.defaultTransition,
                d = 0;
              n;

            )
              n.$vnode && n.$vnode.data.nuxtChild && d++, (n = n.$parent);
            data.nuxtChildDepth = d;
            var h = l[d] || f,
              m = {};
            j.forEach(function(t) {
              void 0 !== h[t] && (m[t] = h[t]);
            });
            var v = {};
            I.forEach(function(t) {
              'function' == typeof h[t] && (v[t] = h[t].bind(c));
            });
            var y = v.beforeEnter;
            if (
              ((v.beforeEnter = function(t) {
                if (
                  (window.$nuxt.$nextTick(function() {
                    window.$nuxt.$emit('triggerScroll');
                  }),
                  y)
                )
                  return y.call(c, t);
              }),
              !1 === h.css)
            ) {
              var w = v.leave;
              (!w || w.length < 2) &&
                (v.leave = function(t, e) {
                  w && w.call(c, t), c.$nextTick(e);
                });
            }
            var x = o('routerView', data);
            return (
              r.keepAlive &&
                (x = o('keep-alive', { props: r.keepAliveProps }, [x])),
              o('transition', { props: m, on: v }, [x])
            );
          },
        },
        j = [
          'name',
          'mode',
          'appear',
          'css',
          'type',
          'duration',
          'enterClass',
          'leaveClass',
          'appearClass',
          'enterActiveClass',
          'enterActiveClass',
          'leaveActiveClass',
          'appearActiveClass',
          'enterToClass',
          'leaveToClass',
          'appearToClass',
        ],
        I = [
          'beforeEnter',
          'enter',
          'afterEnter',
          'enterCancelled',
          'beforeLeave',
          'leave',
          'afterLeave',
          'leaveCancelled',
          'beforeAppear',
          'appear',
          'afterAppear',
          'appearCancelled',
        ],
        k = { props: ['error'], layout: 'error' },
        D = (n(211), n(10)),
        E = Object(D.a)(
          k,
          function() {
            var t = this.$createElement,
              e = this._self._c || t;
            return e('div', { staticClass: 'page-404' }, [
              e('div', { staticClass: 'left' }, [
                e(
                  'svg',
                  {
                    attrs: {
                      width: '504',
                      height: '314',
                      viewBox: '0 0 504 314',
                      fill: 'none',
                      xmlns: 'http://www.w3.org/2000/svg',
                    },
                  },
                  [
                    e('path', {
                      attrs: {
                        d:
                          'M150.863 212.125H127.8V256H88.5656V212.125H7.84688V177.109L82.8 53.3594H127.8V180.766H150.863V212.125ZM88.5656 180.766V92.7344L37.5188 180.766H88.5656ZM494.044 212.125H470.981V256H431.747V212.125H351.028V177.109L425.981 53.3594H470.981V180.766H494.044V212.125ZM431.747 180.766V92.7344L380.7 180.766H431.747Z',
                        fill: 'black',
                      },
                    }),
                    this._v(' '),
                    e('rect', {
                      attrs: {
                        x: '167',
                        y: '71',
                        width: '170',
                        height: '170',
                        rx: '85',
                        fill: 'white',
                      },
                    }),
                    this._v(' '),
                    e('path', {
                      attrs: {
                        d:
                          'M205.3 143.938V164.469C205.3 166.406 205.529 167.865 205.987 168.844C206.8 170.573 208.394 171.438 210.769 171.438C213.81 171.438 215.894 170.208 217.019 167.75C217.602 166.417 217.894 164.656 217.894 162.469V143.938H226.925V178H218.269V173.188C218.185 173.292 217.977 173.604 217.644 174.125C217.31 174.646 216.915 175.104 216.456 175.5C215.06 176.75 213.706 177.604 212.394 178.062C211.102 178.521 209.581 178.75 207.831 178.75C202.79 178.75 199.394 176.938 197.644 173.312C196.665 171.312 196.175 168.365 196.175 164.469V143.938H205.3ZM255.819 160.969C255.819 158.344 255.215 156.021 254.006 154C252.819 151.979 250.881 150.969 248.194 150.969C244.965 150.969 242.746 152.5 241.537 155.562C240.912 157.188 240.6 159.25 240.6 161.75C240.6 165.708 241.652 168.49 243.756 170.094C245.006 171.031 246.485 171.5 248.194 171.5C250.673 171.5 252.558 170.542 253.85 168.625C255.162 166.708 255.819 164.156 255.819 160.969ZM250.756 143.188C254.735 143.188 258.1 144.656 260.85 147.594C263.621 150.531 265.006 154.844 265.006 160.531C265.006 166.531 263.652 171.104 260.944 174.25C258.256 177.396 254.787 178.969 250.537 178.969C247.829 178.969 245.579 178.292 243.787 176.938C242.808 176.188 241.85 175.094 240.912 173.656V191.406H232.1V143.938H240.631V148.969C241.59 147.49 242.61 146.323 243.694 145.469C245.673 143.948 248.027 143.188 250.756 143.188ZM271.587 167.5C271.754 169.375 272.223 170.812 272.994 171.812C274.41 173.625 276.869 174.531 280.369 174.531C282.452 174.531 284.285 174.083 285.869 173.188C287.452 172.271 288.244 170.865 288.244 168.969C288.244 167.531 287.608 166.438 286.337 165.688C285.525 165.229 283.921 164.698 281.525 164.094L277.056 162.969C274.202 162.26 272.098 161.469 270.744 160.594C268.327 159.073 267.119 156.969 267.119 154.281C267.119 151.115 268.254 148.552 270.525 146.594C272.817 144.635 275.89 143.656 279.744 143.656C284.785 143.656 288.421 145.135 290.65 148.094C292.046 149.969 292.723 151.99 292.681 154.156H287.369C287.265 152.885 286.817 151.729 286.025 150.688C284.733 149.208 282.494 148.469 279.306 148.469C277.181 148.469 275.567 148.875 274.462 149.688C273.379 150.5 272.837 151.573 272.837 152.906C272.837 154.365 273.556 155.531 274.994 156.406C275.827 156.927 277.056 157.385 278.681 157.781L282.4 158.688C286.442 159.667 289.15 160.615 290.525 161.531C292.712 162.969 293.806 165.229 293.806 168.312C293.806 171.292 292.671 173.865 290.4 176.031C288.15 178.198 284.712 179.281 280.087 179.281C275.108 179.281 271.577 178.156 269.494 175.906C267.431 173.635 266.327 170.833 266.181 167.5H271.587ZM300.325 132.094H306.669V147.188L305.137 167.062H301.95L300.325 147.188V132.094ZM300.325 171.5H306.544V178H300.325V171.5Z',
                        fill: 'black',
                      },
                    }),
                    this._v(' '),
                    e('rect', {
                      attrs: {
                        x: '167',
                        y: '71',
                        width: '170',
                        height: '170',
                        rx: '85',
                        stroke: 'black',
                        'stroke-width': '30',
                      },
                    }),
                  ],
                ),
              ]),
              this._v(' '),
              e(
                'div',
                { staticClass: 'right' },
                [
                  e('span', { staticClass: 'content-title' }, [
                    this._v('Not found'),
                  ]),
                  this._v(' '),
                  e(
                    'NuxtLink',
                    { staticClass: 'go-home', attrs: { to: '/' } },
                    [this._v('Go to main page')],
                  ),
                ],
                1,
              ),
            ]);
          },
          [],
          !1,
          null,
          '6966e2ac',
          null,
        ).exports,
        $ = (n(37), n(69), n(67), n(15)),
        S = {
          name: 'Nuxt',
          components: { NuxtChild: O, NuxtError: E },
          props: {
            nuxtChildKey: { type: String, default: void 0 },
            keepAlive: Boolean,
            keepAliveProps: { type: Object, default: void 0 },
            name: { type: String, default: 'default' },
          },
          errorCaptured: function(t) {
            this.displayingNuxtError &&
              ((this.errorFromNuxtError = t), this.$forceUpdate());
          },
          computed: {
            routerViewKey: function() {
              if (
                void 0 !== this.nuxtChildKey ||
                this.$route.matched.length > 1
              )
                return (
                  this.nuxtChildKey ||
                  Object(x.c)(this.$route.matched[0].path)(this.$route.params)
                );
              var t = Object($.a)(this.$route.matched, 1)[0];
              if (!t) return this.$route.path;
              var e = t.components.default;
              if (e && e.options) {
                var n = e.options;
                if (n.key)
                  return 'function' == typeof n.key
                    ? n.key(this.$route)
                    : n.key;
              }
              return /\/$/.test(t.path)
                ? this.$route.path
                : this.$route.path.replace(/\/$/, '');
            },
          },
          beforeCreate: function() {
            c.default.util.defineReactive(
              this,
              'nuxt',
              this.$root.$options.nuxt,
            );
          },
          render: function(t) {
            var e = this;
            return this.nuxt.err
              ? this.errorFromNuxtError
                ? (this.$nextTick(function() {
                    return (e.errorFromNuxtError = !1);
                  }),
                  t('div', {}, [
                    t('h2', 'An error occurred while showing the error page'),
                    t(
                      'p',
                      'Unfortunately an error occurred and while showing the error page another error occurred',
                    ),
                    t(
                      'p',
                      'Error details: '.concat(
                        this.errorFromNuxtError.toString(),
                      ),
                    ),
                    t('nuxt-link', { props: { to: '/' } }, 'Go back to home'),
                  ]))
                : ((this.displayingNuxtError = !0),
                  this.$nextTick(function() {
                    return (e.displayingNuxtError = !1);
                  }),
                  t(E, { props: { error: this.nuxt.err } }))
              : t('NuxtChild', { key: this.routerViewKey, props: this.$props });
          },
        },
        L =
          (n(47),
          n(64),
          n(52),
          {
            name: 'NuxtLoading',
            data: function() {
              return {
                percent: 0,
                show: !1,
                canSucceed: !0,
                reversed: !1,
                skipTimerCount: 0,
                rtl: !1,
                throttle: 200,
                duration: 5e3,
                continuous: !1,
              };
            },
            computed: {
              left: function() {
                return (
                  !(!this.continuous && !this.rtl) &&
                  (this.rtl
                    ? this.reversed
                      ? '0px'
                      : 'auto'
                    : this.reversed
                    ? 'auto'
                    : '0px')
                );
              },
            },
            beforeDestroy: function() {
              this.clear();
            },
            methods: {
              clear: function() {
                clearInterval(this._timer),
                  clearTimeout(this._throttle),
                  (this._timer = null);
              },
              start: function() {
                var t = this;
                return (
                  this.clear(),
                  (this.percent = 0),
                  (this.reversed = !1),
                  (this.skipTimerCount = 0),
                  (this.canSucceed = !0),
                  this.throttle
                    ? (this._throttle = setTimeout(function() {
                        return t.startTimer();
                      }, this.throttle))
                    : this.startTimer(),
                  this
                );
              },
              set: function(t) {
                return (
                  (this.show = !0),
                  (this.canSucceed = !0),
                  (this.percent = Math.min(100, Math.max(0, Math.floor(t)))),
                  this
                );
              },
              get: function() {
                return this.percent;
              },
              increase: function(t) {
                return (
                  (this.percent = Math.min(100, Math.floor(this.percent + t))),
                  this
                );
              },
              decrease: function(t) {
                return (
                  (this.percent = Math.max(0, Math.floor(this.percent - t))),
                  this
                );
              },
              pause: function() {
                return clearInterval(this._timer), this;
              },
              resume: function() {
                return this.startTimer(), this;
              },
              finish: function() {
                return (
                  (this.percent = this.reversed ? 0 : 100), this.hide(), this
                );
              },
              hide: function() {
                var t = this;
                return (
                  this.clear(),
                  setTimeout(function() {
                    (t.show = !1),
                      t.$nextTick(function() {
                        (t.percent = 0), (t.reversed = !1);
                      });
                  }, 500),
                  this
                );
              },
              fail: function(t) {
                return (this.canSucceed = !1), this;
              },
              startTimer: function() {
                var t = this;
                this.show || (this.show = !0),
                  void 0 === this._cut &&
                    (this._cut = 1e4 / Math.floor(this.duration)),
                  (this._timer = setInterval(function() {
                    t.skipTimerCount > 0
                      ? t.skipTimerCount--
                      : (t.reversed ? t.decrease(t._cut) : t.increase(t._cut),
                        t.continuous &&
                          (t.percent >= 100 || t.percent <= 0) &&
                          ((t.skipTimerCount = 1), (t.reversed = !t.reversed)));
                  }, 100));
              },
            },
            render: function(t) {
              var e = t(!1);
              return (
                this.show &&
                  (e = t('div', {
                    staticClass: 'nuxt-progress',
                    class: {
                      'nuxt-progress-notransition': this.skipTimerCount > 0,
                      'nuxt-progress-failed': !this.canSucceed,
                    },
                    style: { width: this.percent + '%', left: this.left },
                  })),
                e
              );
            },
          }),
        A =
          (n(213),
          Object(D.a)(L, void 0, void 0, !1, null, null, null).exports),
        M =
          (n(215),
          n(217),
          n(300),
          n(302),
          n(304),
          n(306),
          n(308),
          n(310),
          n(103)),
        T = n(104),
        P = n(105),
        R = n(106);
      function V(object, t) {
        var e = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(object);
          t &&
            (n = n.filter(function(t) {
              return Object.getOwnPropertyDescriptor(object, t).enumerable;
            })),
            e.push.apply(e, n);
        }
        return e;
      }
      function B(t) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {};
          i % 2
            ? V(Object(source), !0).forEach(function(e) {
                Object(o.a)(t, e, source[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(
                t,
                Object.getOwnPropertyDescriptors(source),
              )
            : V(Object(source)).forEach(function(e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(source, e),
                );
              });
        }
        return t;
      }
      var z = {
          data: function() {
            return { xCursor: 0, yCursor: 0 };
          },
          components: {
            Header: M.default,
            Nav_Menu_Modal: T.default,
            Footer: P.default,
            Img_Modal: R.default,
          },
          created: function() {
            var t = this;
            window.addEventListener('scroll', function() {
              return t.windowScrollSet();
            }),
              window.addEventListener('resize', function() {
                return t.setWindowSizeAction();
              }),
              window.addEventListener('orientationchange', function() {
                return t.setWindowSizeAction();
              }),
              this.windowScrollSet(),
              this.setWindowSizeAction();
          },
          mounted: function() {
            var t = this;
            window.addEventListener('mousemove', function(e) {
              (t.xCursor = e.pageX),
                (t.yCursor = e.pageY),
                t.setCursorValue([t.xCursor, t.yCursor]);
            });
          },
          computed: B(
            B(
              {},
              Object(l.c)('app', [
                'MODAL_IS_ACTIVE',
                'APP_WINDOW_SIZE',
                'MODAL_IMG_IS_ACTIVE',
              ]),
            ),
            {},
            {
              headerWidth: function() {
                return this.APP_WINDOW_SIZE.width > 1920
                  ? (this.APP_WINDOW_SIZE.width - 1920) / 2
                  : 0;
              },
            },
          ),
          methods: B(
            B(
              {},
              Object(l.b)('app', [
                'updateScrollValue',
                'setWindowSize',
                'setCursorValue',
              ]),
            ),
            {},
            {
              windowScrollSet: function() {
                this.updateScrollValue({ value: window.pageYOffset });
              },
              setWindowSizeAction: function() {
                var t = {
                  width: window.innerWidth,
                  height: window.innerHeight,
                };
                document.documentElement.style.setProperty(
                  '--winWidth',
                  ''.concat(t.width, 'px'),
                ),
                  document.documentElement.style.setProperty(
                    '--winHeight',
                    ''.concat(t.height, 'px'),
                  ),
                  this.setWindowSize(t);
              },
            },
          ),
          beforeDestroy: function() {
            var t = this;
            window.removeEventListener('scroll', function() {
              return t.windowScrollSet();
            }),
              window.removeEventListener('resize', function() {
                return t.setWindowSizeAction();
              }),
              window.removeEventListener('orientationchange', function() {
                return t.setWindowSizeAction();
              }),
              window.removeEventListener('mousemove', function(e) {
                (t.xCursor = e.pageX),
                  (t.yCursor = e.pageY),
                  t.setCursorValue([t.xCursor, t.yCursor]);
              });
          },
        },
        U =
          (n(326),
          Object(D.a)(
            z,
            function() {
              var t = this,
                e = t.$createElement,
                n = t._self._c || e;
              return n(
                'div',
                [
                  n('div', { staticClass: 'header-wrap' }, [n('Header')], 1),
                  t._v(' '),
                  n(
                    'transition',
                    { attrs: { name: 'nav-menu-fade', appear: '' } },
                    [t.MODAL_IMG_IS_ACTIVE ? n('Img_Modal') : t._e()],
                    1,
                  ),
                  t._v(' '),
                  t.MODAL_IS_ACTIVE ? n('Nav_Menu_Modal') : t._e(),
                  t._v(' '),
                  n('transition', {
                    attrs: { name: 'nav-menu-fade', appear: '' },
                  }),
                  t._v(' '),
                  n('Nuxt'),
                  t._v(' '),
                  n('Footer'),
                ],
                1,
              );
            },
            [],
            !1,
            null,
            null,
            null,
          )),
        Z = U.exports;
      function W(t, e) {
        var n;
        if ('undefined' == typeof Symbol || null == t[Symbol.iterator]) {
          if (
            Array.isArray(t) ||
            (n = (function(t, e) {
              if (!t) return;
              if ('string' == typeof t) return F(t, e);
              var n = Object.prototype.toString.call(t).slice(8, -1);
              'Object' === n && t.constructor && (n = t.constructor.name);
              if ('Map' === n || 'Set' === n) return Array.from(t);
              if (
                'Arguments' === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return F(t, e);
            })(t)) ||
            (e && t && 'number' == typeof t.length)
          ) {
            n && (t = n);
            var i = 0,
              r = function() {};
            return {
              s: r,
              n: function() {
                return i >= t.length
                  ? { done: !0 }
                  : { done: !1, value: t[i++] };
              },
              e: function(t) {
                throw t;
              },
              f: r,
            };
          }
          throw new TypeError(
            'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
          );
        }
        var o,
          c = !0,
          l = !1;
        return {
          s: function() {
            n = t[Symbol.iterator]();
          },
          n: function() {
            var t = n.next();
            return (c = t.done), t;
          },
          e: function(t) {
            (l = !0), (o = t);
          },
          f: function() {
            try {
              c || null == n.return || n.return();
            } finally {
              if (l) throw o;
            }
          },
        };
      }
      function F(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
        return n;
      }
      installComponents(U, {
        Header: n(103).default,
        Img_Modal: n(106).default,
        Nav_Menu_Modal: n(104).default,
        Footer: n(105).default,
      });
      var G = { _default: Object(x.s)(Z) },
        Y = {
          render: function(t, e) {
            var n = t('NuxtLoading', { ref: 'loading' }),
              r = t(this.layout || 'nuxt'),
              o = t(
                'div',
                { domProps: { id: '__layout' }, key: this.layoutName },
                [r],
              ),
              c = t(
                'transition',
                {
                  props: { name: 'layout', mode: 'out-in' },
                  on: {
                    beforeEnter: function(t) {
                      window.$nuxt.$nextTick(function() {
                        window.$nuxt.$emit('triggerScroll');
                      });
                    },
                  },
                },
                [o],
              );
            return t('div', { domProps: { id: '__nuxt' } }, [n, c]);
          },
          data: function() {
            return {
              isOnline: !0,
              layout: null,
              layoutName: '',
              nbFetching: 0,
            };
          },
          beforeCreate: function() {
            c.default.util.defineReactive(this, 'nuxt', this.$options.nuxt);
          },
          created: function() {
            (this.$root.$options.$nuxt = this),
              (window.$nuxt = this),
              this.refreshOnlineStatus(),
              window.addEventListener('online', this.refreshOnlineStatus),
              window.addEventListener('offline', this.refreshOnlineStatus),
              (this.error = this.nuxt.error),
              (this.context = this.$options.context);
          },
          mounted: function() {
            var t = this;
            return Object(r.a)(
              regeneratorRuntime.mark(function e() {
                return regeneratorRuntime.wrap(function(e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        t.$loading = t.$refs.loading;
                      case 1:
                      case 'end':
                        return e.stop();
                    }
                }, e);
              }),
            )();
          },
          watch: { 'nuxt.err': 'errorChanged' },
          computed: {
            isOffline: function() {
              return !this.isOnline;
            },
            isFetching: function() {
              return this.nbFetching > 0;
            },
            isPreview: function() {
              return Boolean(this.$options.previewData);
            },
          },
          methods: {
            refreshOnlineStatus: function() {
              void 0 === window.navigator.onLine
                ? (this.isOnline = !0)
                : (this.isOnline = window.navigator.onLine);
            },
            refresh: function() {
              var t = this;
              return Object(r.a)(
                regeneratorRuntime.mark(function e() {
                  var n, r;
                  return regeneratorRuntime.wrap(
                    function(e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if ((n = Object(x.h)(t.$route)).length) {
                              e.next = 3;
                              break;
                            }
                            return e.abrupt('return');
                          case 3:
                            return (
                              t.$loading.start(),
                              (r = n.map(function(e) {
                                var p = [];
                                if (
                                  (e.$options.fetch &&
                                    e.$options.fetch.length &&
                                    p.push(
                                      Object(x.q)(e.$options.fetch, t.context),
                                    ),
                                  e.$fetch)
                                )
                                  p.push(e.$fetch());
                                else {
                                  var n,
                                    r = W(
                                      Object(x.e)(e.$vnode.componentInstance),
                                    );
                                  try {
                                    for (r.s(); !(n = r.n()).done; ) {
                                      var component = n.value;
                                      p.push(component.$fetch());
                                    }
                                  } catch (t) {
                                    r.e(t);
                                  } finally {
                                    r.f();
                                  }
                                }
                                return (
                                  e.$options.asyncData &&
                                    p.push(
                                      Object(x.q)(
                                        e.$options.asyncData,
                                        t.context,
                                      ).then(function(t) {
                                        for (var n in t)
                                          c.default.set(e.$data, n, t[n]);
                                      }),
                                    ),
                                  Promise.all(p)
                                );
                              })),
                              (e.prev = 5),
                              (e.next = 8),
                              Promise.all(r)
                            );
                          case 8:
                            e.next = 15;
                            break;
                          case 10:
                            (e.prev = 10),
                              (e.t0 = e.catch(5)),
                              t.$loading.fail(e.t0),
                              Object(x.k)(e.t0),
                              t.error(e.t0);
                          case 15:
                            t.$loading.finish();
                          case 16:
                          case 'end':
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[5, 10]],
                  );
                }),
              )();
            },
            errorChanged: function() {
              if (this.nuxt.err) {
                this.$loading &&
                  (this.$loading.fail && this.$loading.fail(this.nuxt.err),
                  this.$loading.finish && this.$loading.finish());
                var t = (E.options || E).layout;
                'function' == typeof t && (t = t(this.context)),
                  this.setLayout(t);
              }
            },
            setLayout: function(t) {
              return (
                (t && G['_' + t]) || (t = 'default'),
                (this.layoutName = t),
                (this.layout = G['_' + t]),
                this.layout
              );
            },
            loadLayout: function(t) {
              return (
                (t && G['_' + t]) || (t = 'default'),
                Promise.resolve(G['_' + t])
              );
            },
          },
          components: { NuxtLoading: A },
        };
      n(58), n(101);
      function K(t, e) {
        var n;
        if ('undefined' == typeof Symbol || null == t[Symbol.iterator]) {
          if (
            Array.isArray(t) ||
            (n = (function(t, e) {
              if (!t) return;
              if ('string' == typeof t) return X(t, e);
              var n = Object.prototype.toString.call(t).slice(8, -1);
              'Object' === n && t.constructor && (n = t.constructor.name);
              if ('Map' === n || 'Set' === n) return Array.from(t);
              if (
                'Arguments' === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return X(t, e);
            })(t)) ||
            (e && t && 'number' == typeof t.length)
          ) {
            n && (t = n);
            var i = 0,
              r = function() {};
            return {
              s: r,
              n: function() {
                return i >= t.length
                  ? { done: !0 }
                  : { done: !1, value: t[i++] };
              },
              e: function(t) {
                throw t;
              },
              f: r,
            };
          }
          throw new TypeError(
            'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
          );
        }
        var o,
          c = !0,
          l = !1;
        return {
          s: function() {
            n = t[Symbol.iterator]();
          },
          n: function() {
            var t = n.next();
            return (c = t.done), t;
          },
          e: function(t) {
            (l = !0), (o = t);
          },
          f: function() {
            try {
              c || null == n.return || n.return();
            } finally {
              if (l) throw o;
            }
          },
        };
      }
      function X(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
        return n;
      }
      c.default.use(l.a);
      var J = ['state', 'getters', 'actions', 'mutations'],
        Q = {};
      ((Q = (function(t, e) {
        if ((t = t.default || t).commit)
          throw new Error(
            '[nuxt] '.concat(
              e,
              ' should export a method that returns a Vuex instance.',
            ),
          );
        return 'function' != typeof t && (t = Object.assign({}, t)), et(t, e);
      })(n(328), 'store/index.js')).modules = Q.modules || {}),
        (function(t, e) {
          t = t.default || t;
          var n = e.replace(/\.(js|mjs)$/, '').split('/'),
            r = n[n.length - 1],
            o = 'store/'.concat(e);
          if (
            ((t =
              'state' === r
                ? (function(t, e) {
                    if ('function' != typeof t) {
                      console.warn(
                        ''.concat(
                          e,
                          ' should export a method that returns an object',
                        ),
                      );
                      var n = Object.assign({}, t);
                      return function() {
                        return n;
                      };
                    }
                    return et(t, e);
                  })(t, o)
                : et(t, o)),
            J.includes(r))
          ) {
            var c = r;
            ot(nt(Q, n, { isProperty: !0 }), t, c);
          } else {
            'index' === r && (n.pop(), (r = n[n.length - 1]));
            var l,
              f = nt(Q, n),
              d = K(J);
            try {
              for (d.s(); !(l = d.n()).done; ) {
                var h = l.value;
                ot(f, t[h], h);
              }
            } catch (t) {
              d.e(t);
            } finally {
              d.f();
            }
            !1 === t.namespaced && delete f.namespaced;
          }
        })(n(102), 'app/index.js');
      var tt =
        Q instanceof Function
          ? Q
          : function() {
              return new l.a.Store(Object.assign({ strict: !1 }, Q));
            };
      function et(t, e) {
        if (t.state && 'function' != typeof t.state) {
          console.warn(
            "'state' should be a method that returns an object in ".concat(e),
          );
          var n = Object.assign({}, t.state);
          t = Object.assign({}, t, {
            state: function() {
              return n;
            },
          });
        }
        return t;
      }
      function nt(t, e) {
        var n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          r = n.isProperty,
          o = void 0 !== r && r;
        if (!e.length || (o && 1 === e.length)) return t;
        var c = e.shift();
        return (
          (t.modules[c] = t.modules[c] || {}),
          (t.modules[c].namespaced = !0),
          (t.modules[c].modules = t.modules[c].modules || {}),
          nt(t.modules[c], e, { isProperty: o })
        );
      }
      function ot(t, e, n) {
        e &&
          ('state' === n
            ? (t.state = e || t.state)
            : (t[n] = Object.assign({}, t[n], e)));
      }
      var at = {};
      for (var it in at) c.default.component(it, at[it]);
      var st = n(165);
      c.default.component('intersect', st.a);
      var ct = n(166),
        lt = n.n(ct);
      function ft(object, t) {
        var e = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(object);
          t &&
            (n = n.filter(function(t) {
              return Object.getOwnPropertyDescriptor(object, t).enumerable;
            })),
            e.push.apply(e, n);
        }
        return e;
      }
      function ut(t) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {};
          i % 2
            ? ft(Object(source), !0).forEach(function(e) {
                Object(o.a)(t, e, source[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(
                t,
                Object.getOwnPropertyDescriptors(source),
              )
            : ft(Object(source)).forEach(function(e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(source, e),
                );
              });
        }
        return t;
      }
      c.default.use(lt.a),
        c.default.component(h.a.name, h.a),
        c.default.component(
          v.a.name,
          ut(
            ut({}, v.a),
            {},
            {
              render: function(t, e) {
                return (
                  v.a._warned ||
                    ((v.a._warned = !0),
                    console.warn(
                      '<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead',
                    )),
                  v.a.render(t, e)
                );
              },
            },
          ),
        ),
        c.default.component(O.name, O),
        c.default.component('NChild', O),
        c.default.component(S.name, S),
        Object.defineProperty(c.default.prototype, '$nuxt', {
          get: function() {
            return this.$root.$options.$nuxt;
          },
          configurable: !0,
        }),
        c.default.use(f.a, {
          keyName: 'head',
          attribute: 'data-n-head',
          ssrAttribute: 'data-n-head-ssr',
          tagIDKeyName: 'hid',
        });
      var pt = {
          name: 'page',
          mode: 'out-in',
          appear: !1,
          appearClass: 'appear',
          appearActiveClass: 'appear-active',
          appearToClass: 'appear-to',
        },
        ht = l.a.Store.prototype.registerModule,
        mt = { preserveState: !0 };
      function vt(path, t) {
        var e =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        return ht.call(this, path, t, ut(ut({}, mt), e));
      }
      function yt(t) {
        return gt.apply(this, arguments);
      }
      function gt() {
        return (gt = Object(r.a)(
          regeneratorRuntime.mark(function t(e) {
            var n,
              r,
              o,
              l,
              f,
              d,
              path,
              h,
              m = arguments;
            return regeneratorRuntime.wrap(function(t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (
                      (h = function(t, e) {
                        if (!t)
                          throw new Error(
                            'inject(key, value) has no key provided',
                          );
                        if (void 0 === e)
                          throw new Error(
                            "inject('".concat(
                              t,
                              "', value) has no value provided",
                            ),
                          );
                        (l[(t = '$' + t)] = e),
                          l.context[t] || (l.context[t] = e),
                          (o[t] = l[t]);
                        var n = '__nuxt_' + t + '_installed__';
                        c.default[n] ||
                          ((c.default[n] = !0),
                          c.default.use(function() {
                            Object.prototype.hasOwnProperty.call(
                              c.default.prototype,
                              t,
                            ) ||
                              Object.defineProperty(c.default.prototype, t, {
                                get: function() {
                                  return this.$root.$options[t];
                                },
                              });
                          }));
                      }),
                      (n = m.length > 1 && void 0 !== m[1] ? m[1] : {}),
                      (t.next = 4),
                      N()
                    );
                  case 4:
                    return (
                      (r = t.sent),
                      ((o = tt(e)).$router = r),
                      (o.registerModule = vt),
                      (l = ut(
                        {
                          head: {
                            title: 'up-app',
                            meta: [
                              { charset: 'utf-8' },
                              {
                                name: 'viewport',
                                content: 'width=device-width, initial-scale=1',
                              },
                              {
                                hid: 'description',
                                name: 'description',
                                content: '',
                              },
                            ],
                            link: [
                              {
                                rel: 'icon',
                                type: 'image/x-icon',
                                href: '/favicon.ico',
                              },
                            ],
                            style: [],
                            script: [],
                          },
                          store: o,
                          router: r,
                          nuxt: {
                            defaultTransition: pt,
                            transitions: [pt],
                            setTransitions: function(t) {
                              return (
                                Array.isArray(t) || (t = [t]),
                                (t = t.map(function(t) {
                                  return (t = t
                                    ? 'string' == typeof t
                                      ? Object.assign({}, pt, { name: t })
                                      : Object.assign({}, pt, t)
                                    : pt);
                                })),
                                (this.$options.nuxt.transitions = t),
                                t
                              );
                            },
                            err: null,
                            dateErr: null,
                            error: function(t) {
                              (t = t || null),
                                (l.context._errored = Boolean(t)),
                                (t = t ? Object(x.p)(t) : null);
                              var n = l.nuxt;
                              return (
                                this && (n = this.nuxt || this.$options.nuxt),
                                (n.dateErr = Date.now()),
                                (n.err = t),
                                e && (e.nuxt.error = t),
                                t
                              );
                            },
                          },
                        },
                        Y,
                      )),
                      (o.app = l),
                      (f = e
                        ? e.next
                        : function(t) {
                            return l.router.push(t);
                          }),
                      e
                        ? (d = r.resolve(e.url).route)
                        : ((path = Object(x.f)(r.options.base, r.options.mode)),
                          (d = r.resolve(path).route)),
                      (t.next = 14),
                      Object(x.t)(l, {
                        store: o,
                        route: d,
                        next: f,
                        error: l.nuxt.error.bind(l),
                        payload: e ? e.payload : void 0,
                        req: e ? e.req : void 0,
                        res: e ? e.res : void 0,
                        beforeRenderFns: e ? e.beforeRenderFns : void 0,
                        ssrContext: e,
                      })
                    );
                  case 14:
                    h('config', n),
                      window.__NUXT__ &&
                        window.__NUXT__.state &&
                        o.replaceState(window.__NUXT__.state),
                      (l.context.enablePreview = function() {
                        var t =
                          arguments.length > 0 && void 0 !== arguments[0]
                            ? arguments[0]
                            : {};
                        (l.previewData = Object.assign({}, t)), h('preview', t);
                      }),
                      (t.next = 20);
                    break;
                  case 20:
                    t.next = 23;
                    break;
                  case 23:
                    t.next = 26;
                    break;
                  case 26:
                    (l.context.enablePreview = function() {
                      console.warn(
                        'You cannot call enablePreview() outside a plugin.',
                      );
                    }),
                      (t.next = 30);
                    break;
                  case 30:
                    return t.abrupt('return', { store: o, app: l, router: r });
                  case 31:
                  case 'end':
                    return t.stop();
                }
            }, t);
          }),
        )).apply(this, arguments);
      }
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function(t, e, n) {
      'use strict';
      n(87), n(57), n(58), n(35), n(21), n(92), n(63), n(52);
      var r = n(0);
      function o(t, e) {
        var n;
        if ('undefined' == typeof Symbol || null == t[Symbol.iterator]) {
          if (
            Array.isArray(t) ||
            (n = (function(t, e) {
              if (!t) return;
              if ('string' == typeof t) return c(t, e);
              var n = Object.prototype.toString.call(t).slice(8, -1);
              'Object' === n && t.constructor && (n = t.constructor.name);
              if ('Map' === n || 'Set' === n) return Array.from(t);
              if (
                'Arguments' === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return c(t, e);
            })(t)) ||
            (e && t && 'number' == typeof t.length)
          ) {
            n && (t = n);
            var i = 0,
              r = function() {};
            return {
              s: r,
              n: function() {
                return i >= t.length
                  ? { done: !0 }
                  : { done: !1, value: t[i++] };
              },
              e: function(t) {
                throw t;
              },
              f: r,
            };
          }
          throw new TypeError(
            'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
          );
        }
        var o,
          l = !0,
          f = !1;
        return {
          s: function() {
            n = t[Symbol.iterator]();
          },
          n: function() {
            var t = n.next();
            return (l = t.done), t;
          },
          e: function(t) {
            (f = !0), (o = t);
          },
          f: function() {
            try {
              l || null == n.return || n.return();
            } finally {
              if (f) throw o;
            }
          },
        };
      }
      function c(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
        return n;
      }
      var l =
          window.requestIdleCallback ||
          function(t) {
            var e = Date.now();
            return setTimeout(function() {
              t({
                didTimeout: !1,
                timeRemaining: function() {
                  return Math.max(0, 50 - (Date.now() - e));
                },
              });
            }, 1);
          },
        f =
          window.cancelIdleCallback ||
          function(t) {
            clearTimeout(t);
          },
        d =
          window.IntersectionObserver &&
          new window.IntersectionObserver(function(t) {
            t.forEach(function(t) {
              var e = t.intersectionRatio,
                link = t.target;
              e <= 0 || link.__prefetch();
            });
          });
      e.a = {
        name: 'NuxtLink',
        extends: r.default.component('RouterLink'),
        props: {
          prefetch: { type: Boolean, default: !0 },
          noPrefetch: { type: Boolean, default: !1 },
        },
        mounted: function() {
          this.prefetch &&
            !this.noPrefetch &&
            (this.handleId = l(this.observe, { timeout: 2e3 }));
        },
        beforeDestroy: function() {
          f(this.handleId),
            this.__observed &&
              (d.unobserve(this.$el), delete this.$el.__prefetch);
        },
        methods: {
          observe: function() {
            d &&
              this.shouldPrefetch() &&
              ((this.$el.__prefetch = this.prefetchLink.bind(this)),
              d.observe(this.$el),
              (this.__observed = !0));
          },
          shouldPrefetch: function() {
            return this.getPrefetchComponents().length > 0;
          },
          canPrefetch: function() {
            var t = navigator.connection;
            return !(
              this.$nuxt.isOffline ||
              (t && ((t.effectiveType || '').includes('2g') || t.saveData))
            );
          },
          getPrefetchComponents: function() {
            return this.$router
              .resolve(this.to, this.$route, this.append)
              .resolved.matched.map(function(t) {
                return t.components.default;
              })
              .filter(function(t) {
                return 'function' == typeof t && !t.options && !t.__prefetched;
              });
          },
          prefetchLink: function() {
            if (this.canPrefetch()) {
              d.unobserve(this.$el);
              var t,
                e = o(this.getPrefetchComponents());
              try {
                for (e.s(); !(t = e.n()).done; ) {
                  var n = t.value,
                    r = n();
                  r instanceof Promise && r.catch(function() {}),
                    (n.__prefetched = !0);
                }
              } catch (t) {
                e.e(t);
              } finally {
                e.f();
              }
            }
          },
        },
      };
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function(t, e, n) {
      'use strict';
      n.r(e),
        n.d(e, 'state', function() {
          return r;
        }),
        n.d(e, 'getters', function() {
          return o;
        }),
        n.d(e, 'mutations', function() {
          return c;
        }),
        n.d(e, 'actions', function() {
          return l;
        });
      n(74), n(168);
      var r = function() {
          return {
            currentScrollValue: '',
            winSize: { width: null, height: null },
            galleryCursorActive: !1,
            windowCursor: { x: 0, y: 0 },
            logoStartHeight: !1,
            headerComponentHeight: 0,
            modalIsActive: !1,
            modalImgIsActive: !1,
          };
        },
        o = {
          APP_SCROLL_VALUE: function(t) {
            return t.currentScrollValue;
          },
          APP_WINDOW_SIZE: function(t) {
            return t.winSize;
          },
          GALLERY_CURSOR_ACTIVE: function(t) {
            return t.galleryCursorActive;
          },
          WINDOW_CURSOR: function(t) {
            return t.windowCursor;
          },
          LOGO_START_HEIGHT: function(t) {
            return t.logoStartHeight;
          },
          HEADER_COMPONENT_HEIGHT: function(t) {
            return t.headerComponentHeight;
          },
          MODAL_IS_ACTIVE: function(t) {
            return t.modalIsActive;
          },
          MODAL_IMG_IS_ACTIVE: function(t) {
            return t.modalImgIsActive;
          },
        },
        c = {
          SET_APP_SCROLL_VALUE: function(t, e) {
            t.currentScrollValue = e.value;
          },
          SET_APP_WINDOW_SIZE: function(t, e) {
            t.winSize = { width: e.width, height: e.height };
          },
          SET_GALLERY_CURSOR_ACTIVE: function(t, e) {
            t.galleryCursorActive = e;
          },
          SET_CURSOR_VALUE: function(t, e) {
            (t.windowCursor.x = e[0]), (t.windowCursor.y = e[1]);
          },
          SET_LOGO_START_HEIGHT: function(t, e) {
            t.logoStartHeight = e;
          },
          SET_HEADER_COMPONENT_HEIGHT: function(t, e) {
            t.headerComponentHeight = e;
          },
          SET_MODAL_IS_ACTIVE: function(t, e) {
            t.modalIsActive = void 0 === e ? !t.modalIsActive : e;
          },
          SET_MODAL_IMG_IS_ACTIVE: function(t) {
            t.modalImgIsActive = !t.modalImgIsActive;
          },
        },
        l = {
          updateScrollValue: function(t, e) {
            (0, t.commit)('SET_APP_SCROLL_VALUE', e);
          },
          setWindowSize: function(t, e) {
            (0, t.commit)('SET_APP_WINDOW_SIZE', e);
          },
          setGalleryCursorActive: function(t, e) {
            (0, t.commit)('SET_GALLERY_CURSOR_ACTIVE', e);
          },
          setCursorValue: function(t, e) {
            (0, t.commit)('SET_CURSOR_VALUE', e);
          },
          setLogoStartHeight: function(t, e) {
            (0, t.commit)('SET_LOGO_START_HEIGHT', e);
          },
          setHeaderComponentHeight: function(t, e) {
            (0, t.commit)('SET_HEADER_COMPONENT_HEIGHT', e);
          },
          setModalIsActive: function(t, e) {
            (0, t.commit)('SET_MODAL_IS_ACTIVE');
          },
          setModalImgIsActive: function(t) {
            (0, t.commit)('SET_MODAL_IMG_IS_ACTIVE');
          },
        };
      e.default = {
        namespaced: !0,
        state: r,
        getters: o,
        mutations: c,
        actions: l,
      };
    },
    function(t, e, n) {
      'use strict';
      n.r(e);
      var r = {
          name: 'Header',
          computed: {
            animationClass: function() {
              this.$store.getters['app/APP_SCROLL_VALUE'] > 0 &&
                this.$store.dispatch('app/setLogoStartHeight', !1);
            },
          },
        },
        o = (n(312), n(10)),
        component = Object(o.a)(
          r,
          function() {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n(
              'div',
              { ref: 'header_component', staticClass: 'header' },
              [
                n('span', { staticStyle: { display: 'none' } }, [
                  t._v(t._s(t.animationClass)),
                ]),
                t._v(' '),
                '/' !== t.$route.path
                  ? n(
                      'nuxt-link',
                      {
                        attrs: { to: { path: '/' } },
                        nativeOn: {
                          click: function(e) {
                            return t.$store.commit(
                              'app/SET_MODAL_IS_ACTIVE',
                              !1,
                            );
                          },
                        },
                      },
                      [
                        n(
                          'div',
                          {
                            ref: 'headerLogo',
                            class: [
                              'header-logo',
                              {
                                animation:
                                  t.$store.getters['app/LOGO_START_HEIGHT'],
                              },
                              {
                                black:
                                  t.$store.getters['app/MODAL_IS_ACTIVE'] ||
                                  t.$store.getters['app/APP_SCROLL_VALUE'] >
                                    t.$store.getters['app/APP_WINDOW_SIZE']
                                      .height -
                                      120,
                              },
                            ],
                          },
                          [
                            n(
                              'svg',
                              {
                                attrs: {
                                  viewBox: '0 0 110 78',
                                  fill: '#fff',
                                  xmlns: 'http://www.w3.org/2000/svg',
                                },
                              },
                              [
                                n('path', {
                                  attrs: {
                                    d:
                                      'M14.5828 1.21322V34.4251C14.5828 37.5593 14.949 39.9183 15.6815 41.5023C16.9799 44.2994 19.5269 45.698 23.3224 45.698C28.1834 45.698 31.5128 43.7097 33.3106 39.733C34.2429 37.5762 34.709 34.7285 34.709 31.1899V1.21322H49.1419V56.3137H35.3083V48.5288C35.1751 48.6973 34.8422 49.2029 34.3095 50.0454C33.7767 50.8879 33.1442 51.6293 32.4117 52.2696C30.181 54.2916 28.0169 55.6734 25.9194 56.4148C23.8551 57.1562 21.4247 57.5269 18.628 57.5269C10.5708 57.5269 5.14392 54.5949 2.34723 48.731C0.782409 45.4958 0 40.7272 0 34.4251V1.21322H14.5828Z',
                                  },
                                }),
                                t._v(' '),
                                n('path', {
                                  attrs: {
                                    d:
                                      'M95.3174 28.7634C95.3174 24.5172 94.3518 20.7596 92.4208 17.4906C90.523 14.2216 87.4267 12.5872 83.1318 12.5872C77.9712 12.5872 74.4254 15.0642 72.4943 20.0181C71.4955 22.6468 70.9961 25.9832 70.9961 30.0272C70.9961 36.4303 72.6774 40.9294 76.0401 43.5243C78.0378 45.0408 80.4016 45.7991 83.1318 45.7991C87.0937 45.7991 90.1068 44.2489 92.1711 41.1484C94.2686 38.048 95.3174 33.9196 95.3174 28.7634ZM87.2269 0C93.5861 0 98.963 2.37589 103.358 7.12767C107.786 11.8795 110 18.8555 110 28.0557C110 37.7615 107.836 45.1588 103.508 50.2476C99.2127 55.3364 93.6693 57.8808 86.8773 57.8808C82.5491 57.8808 78.9534 56.7855 76.0901 54.5949C74.5253 53.3817 72.9937 51.6124 71.4955 49.2871V78H57.4121V1.21322H71.046V9.35191C72.5776 6.95917 74.209 5.07194 75.9402 3.69021C79.1032 1.23007 82.8654 0 87.2269 0Z',
                                  },
                                }),
                              ],
                            ),
                          ],
                        ),
                      ],
                    )
                  : n(
                      'a',
                      {
                        attrs: { href: '/' },
                        on: {
                          click: function(e) {
                            return t.$store.commit(
                              'app/SET_MODAL_IS_ACTIVE',
                              !1,
                            );
                          },
                        },
                      },
                      [
                        n(
                          'div',
                          {
                            ref: 'headerLogo',
                            class: [
                              'header-logo',
                              {
                                animation:
                                  t.$store.getters['app/LOGO_START_HEIGHT'],
                              },
                              {
                                black:
                                  t.$store.getters['app/MODAL_IS_ACTIVE'] ||
                                  t.$store.getters['app/APP_SCROLL_VALUE'] >
                                    t.$store.getters['app/APP_WINDOW_SIZE']
                                      .height -
                                      120,
                              },
                            ],
                          },
                          [
                            n(
                              'svg',
                              {
                                attrs: {
                                  viewBox: '0 0 110 78',
                                  fill: '#fff',
                                  xmlns: 'http://www.w3.org/2000/svg',
                                },
                              },
                              [
                                n('path', {
                                  attrs: {
                                    d:
                                      'M14.5828 1.21322V34.4251C14.5828 37.5593 14.949 39.9183 15.6815 41.5023C16.9799 44.2994 19.5269 45.698 23.3224 45.698C28.1834 45.698 31.5128 43.7097 33.3106 39.733C34.2429 37.5762 34.709 34.7285 34.709 31.1899V1.21322H49.1419V56.3137H35.3083V48.5288C35.1751 48.6973 34.8422 49.2029 34.3095 50.0454C33.7767 50.8879 33.1442 51.6293 32.4117 52.2696C30.181 54.2916 28.0169 55.6734 25.9194 56.4148C23.8551 57.1562 21.4247 57.5269 18.628 57.5269C10.5708 57.5269 5.14392 54.5949 2.34723 48.731C0.782409 45.4958 0 40.7272 0 34.4251V1.21322H14.5828Z',
                                  },
                                }),
                                t._v(' '),
                                n('path', {
                                  attrs: {
                                    d:
                                      'M95.3174 28.7634C95.3174 24.5172 94.3518 20.7596 92.4208 17.4906C90.523 14.2216 87.4267 12.5872 83.1318 12.5872C77.9712 12.5872 74.4254 15.0642 72.4943 20.0181C71.4955 22.6468 70.9961 25.9832 70.9961 30.0272C70.9961 36.4303 72.6774 40.9294 76.0401 43.5243C78.0378 45.0408 80.4016 45.7991 83.1318 45.7991C87.0937 45.7991 90.1068 44.2489 92.1711 41.1484C94.2686 38.048 95.3174 33.9196 95.3174 28.7634ZM87.2269 0C93.5861 0 98.963 2.37589 103.358 7.12767C107.786 11.8795 110 18.8555 110 28.0557C110 37.7615 107.836 45.1588 103.508 50.2476C99.2127 55.3364 93.6693 57.8808 86.8773 57.8808C82.5491 57.8808 78.9534 56.7855 76.0901 54.5949C74.5253 53.3817 72.9937 51.6124 71.4955 49.2871V78H57.4121V1.21322H71.046V9.35191C72.5776 6.95917 74.209 5.07194 75.9402 3.69021C79.1032 1.23007 82.8654 0 87.2269 0Z',
                                  },
                                }),
                              ],
                            ),
                          ],
                        ),
                      ],
                    ),
                t._v(' '),
                n(
                  'button',
                  {
                    staticClass: 'header-burger-btn',
                    class: [
                      {
                        black:
                          t.$store.getters['app/APP_SCROLL_VALUE'] >
                          t.$store.getters['app/APP_WINDOW_SIZE'].height - 120,
                      },
                    ],
                    on: {
                      click: function(e) {
                        return t.$store.dispatch('app/setModalIsActive');
                      },
                    },
                  },
                  [
                    t.$store.getters['app/MODAL_IS_ACTIVE']
                      ? t._e()
                      : n(
                          'svg',
                          {
                            attrs: {
                              viewBox: '0 0 60 60',
                              stroke: '#fff',
                              xmlns: 'http://www.w3.org/2000/svg',
                            },
                          },
                          [
                            n('path', {
                              attrs: { d: 'M15 30L45 30', 'stroke-width': '4' },
                            }),
                            t._v(' '),
                            n('path', {
                              attrs: { d: 'M15 40L45 40', 'stroke-width': '4' },
                            }),
                            t._v(' '),
                            n('path', {
                              attrs: { d: 'M15 20L45 20', 'stroke-width': '4' },
                            }),
                          ],
                        ),
                    t._v(' '),
                    t.$store.getters['app/MODAL_IS_ACTIVE']
                      ? n(
                          'svg',
                          {
                            attrs: {
                              viewBox: '0 0 60 60',
                              stroke: '#000',
                              xmlns: 'http://www.w3.org/2000/svg',
                            },
                          },
                          [
                            n('path', {
                              attrs: {
                                d: 'M15 15L45 45M45 15L15 45',
                                'stroke-width': '4',
                              },
                            }),
                          ],
                        )
                      : t._e(),
                  ],
                ),
              ],
              1,
            );
          },
          [],
          !1,
          null,
          'c9f54270',
          null,
        );
      e.default = component.exports;
    },
    function(t, e, n) {
      'use strict';
      n.r(e);
      var r = n(16),
        o = n(11);
      function c(object, t) {
        var e = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(object);
          t &&
            (n = n.filter(function(t) {
              return Object.getOwnPropertyDescriptor(object, t).enumerable;
            })),
            e.push.apply(e, n);
        }
        return e;
      }
      var l = {
          name: 'Nav_MenuModal',
          methods: (function(t) {
            for (var i = 1; i < arguments.length; i++) {
              var source = null != arguments[i] ? arguments[i] : {};
              i % 2
                ? c(Object(source), !0).forEach(function(e) {
                    Object(r.a)(t, e, source[e]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    t,
                    Object.getOwnPropertyDescriptors(source),
                  )
                : c(Object(source)).forEach(function(e) {
                    Object.defineProperty(
                      t,
                      e,
                      Object.getOwnPropertyDescriptor(source, e),
                    );
                  });
            }
            return t;
          })({}, Object(o.b)('app', ['setModalIsActive'])),
        },
        f = (n(314), n(10)),
        component = Object(f.a)(
          l,
          function() {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n('div', { staticClass: 'nav-menu-modal' }, [
              n('div', { staticClass: 'content' }, [
                n(
                  'div',
                  { ref: 'nav_menu_hrefs', staticClass: 'hrefs' },
                  [
                    n(
                      'nuxt-link',
                      {
                        staticClass: 'nav-menu-btn nav-menu-btn-text',
                        attrs: { to: '/people' },
                        nativeOn: {
                          click: function(e) {
                            return t.setModalIsActive(e);
                          },
                        },
                      },
                      [t._v('\n        People\n      ')],
                    ),
                    t._v(' '),
                    n(
                      'nuxt-link',
                      {
                        staticClass: 'nav-menu-btn nav-menu-btn-text',
                        attrs: { to: '/project' },
                        nativeOn: {
                          click: function(e) {
                            return t.setModalIsActive(e);
                          },
                        },
                      },
                      [t._v('\n        Project\n      ')],
                    ),
                    t._v(' '),
                    n(
                      'nuxt-link',
                      {
                        staticClass: 'nav-menu-btn nav-menu-btn-text',
                        attrs: { to: '/process' },
                        nativeOn: {
                          click: function(e) {
                            return t.setModalIsActive(e);
                          },
                        },
                      },
                      [t._v('\n        Process\n      ')],
                    ),
                  ],
                  1,
                ),
                t._v(' '),
                n('div', { staticClass: 'social-href' }, [
                  n(
                    'a',
                    {
                      staticClass: 'social-item',
                      attrs: { href: '#', target: '_blank' },
                    },
                    [
                      n(
                        'svg',
                        {
                          attrs: {
                            viewBox: '0 0 20 20',
                            fill: 'none',
                            xmlns: 'http://www.w3.org/2000/svg',
                          },
                        },
                        [
                          n('path', {
                            attrs: {
                              d:
                                'M10 0C4.47656 0 0 4.47656 0 10C0 14.2383 2.63672 17.8555 6.35547 19.3125C6.26953 18.5195 6.1875 17.3086 6.39062 16.4453C6.57422 15.6641 7.5625 11.4766 7.5625 11.4766C7.5625 11.4766 7.26172 10.8789 7.26172 9.99219C7.26172 8.60156 8.06641 7.5625 9.07031 7.5625C9.92187 7.5625 10.3359 8.20312 10.3359 8.97266C10.3359 9.83203 9.78906 11.1133 9.50781 12.3008C9.27344 13.2969 10.0078 14.1094 10.9883 14.1094C12.7656 14.1094 14.1328 12.2344 14.1328 9.53125C14.1328 7.13672 12.4141 5.46094 9.95703 5.46094C7.11328 5.46094 5.44141 7.59375 5.44141 9.80078C5.44141 10.6602 5.77344 11.582 6.1875 12.082C6.26953 12.1797 6.28125 12.2695 6.25781 12.3672C6.18359 12.6836 6.01172 13.3633 5.98047 13.5C5.9375 13.6836 5.83594 13.7227 5.64453 13.6328C4.39453 13.0508 3.61328 11.2266 3.61328 9.75781C3.61328 6.60156 5.90625 3.70703 10.2188 3.70703C13.6875 3.70703 16.3828 6.17969 16.3828 9.48438C16.3828 12.9297 14.2109 15.7031 11.1953 15.7031C10.1836 15.7031 9.23047 15.1758 8.90234 14.5547C8.90234 14.5547 8.40234 16.4648 8.28125 16.9336C8.05469 17.8008 7.44531 18.8906 7.03906 19.5547C7.97656 19.8438 8.96875 20 10 20C15.5234 20 20 15.5234 20 10C20 4.47656 15.5234 0 10 0Z',
                              fill: 'black',
                            },
                          }),
                        ],
                      ),
                    ],
                  ),
                  t._v(' '),
                  n(
                    'a',
                    {
                      staticClass: 'social-item',
                      attrs: { href: '#', target: '_blank' },
                    },
                    [
                      n(
                        'svg',
                        {
                          attrs: {
                            viewBox: '0 0 20 20',
                            fill: 'none',
                            xmlns: 'http://www.w3.org/2000/svg',
                          },
                        },
                        [
                          n('path', {
                            attrs: {
                              d:
                                'M18.5195 0H1.47656C0.660156 0 0 0.644531 0 1.44141V18.5547C0 19.3516 0.660156 20 1.47656 20H18.5195C19.3359 20 20 19.3516 20 18.5586V1.44141C20 0.644531 19.3359 0 18.5195 0ZM5.93359 17.043H2.96484V7.49609H5.93359V17.043ZM4.44922 6.19531C3.49609 6.19531 2.72656 5.42578 2.72656 4.47656C2.72656 3.52734 3.49609 2.75781 4.44922 2.75781C5.39844 2.75781 6.16797 3.52734 6.16797 4.47656C6.16797 5.42188 5.39844 6.19531 4.44922 6.19531ZM17.043 17.043H14.0781V12.4023C14.0781 11.2969 14.0586 9.87109 12.5352 9.87109C10.9922 9.87109 10.7578 11.0781 10.7578 12.3242V17.043H7.79688V7.49609H10.6406V8.80078H10.6797C11.0742 8.05078 12.043 7.25781 13.4844 7.25781C16.4883 7.25781 17.043 9.23438 17.043 11.8047V17.043Z',
                              fill: 'black',
                            },
                          }),
                        ],
                      ),
                    ],
                  ),
                  t._v(' '),
                  n(
                    'a',
                    {
                      staticClass: 'social-item',
                      attrs: { href: '#', target: '_blank' },
                    },
                    [
                      n(
                        'svg',
                        {
                          attrs: {
                            viewBox: '0 0 20 18',
                            fill: 'none',
                            xmlns: 'http://www.w3.org/2000/svg',
                          },
                        },
                        [
                          n('path', {
                            attrs: {
                              d:
                                'M6.2918 17.1251C13.8371 17.1251 17.9652 10.8724 17.9652 5.45167C17.9652 5.27589 17.9613 5.0962 17.9535 4.92042C18.7566 4.33967 19.4496 3.62033 20 2.7962C19.2521 3.12896 18.458 3.34627 17.6449 3.44073C18.5011 2.92755 19.1421 2.12135 19.4492 1.17159C18.6438 1.64892 17.763 1.98563 16.8445 2.1673C16.2257 1.50976 15.4075 1.07439 14.5164 0.928498C13.6253 0.78261 12.711 0.934331 11.9148 1.3602C11.1186 1.78607 10.4848 2.46238 10.1115 3.28455C9.73825 4.10672 9.64619 5.02897 9.84961 5.9087C8.21874 5.82686 6.62328 5.40321 5.16665 4.6652C3.71002 3.9272 2.42474 2.89132 1.39414 1.62472C0.870333 2.52782 0.710047 3.59649 0.945859 4.61353C1.18167 5.63057 1.79589 6.51966 2.66367 7.10011C2.01219 7.07943 1.37498 6.90402 0.804688 6.58839V6.63917C0.804104 7.58691 1.13175 8.50561 1.73192 9.2391C2.3321 9.97258 3.16777 10.4756 4.09687 10.6626C3.49338 10.8277 2.85999 10.8518 2.2457 10.7329C2.50788 11.548 3.01798 12.2609 3.70481 12.7721C4.39164 13.2833 5.22093 13.5673 6.07695 13.5845C4.62369 14.726 2.82848 15.3452 0.980469 15.3423C0.652739 15.3418 0.325333 15.3217 0 15.2821C1.87738 16.4866 4.06128 17.1263 6.2918 17.1251Z',
                              fill: 'black',
                            },
                          }),
                        ],
                      ),
                    ],
                  ),
                  t._v(' '),
                  n(
                    'a',
                    {
                      staticClass: 'social-item',
                      attrs: { href: '#', target: '_blank' },
                    },
                    [
                      n(
                        'svg',
                        {
                          attrs: {
                            viewBox: '0 0 20 20',
                            fill: 'none',
                            xmlns: 'http://www.w3.org/2000/svg',
                          },
                        },
                        [
                          n('path', {
                            attrs: {
                              d:
                                'M10 1.80078C12.6719 1.80078 12.9883 1.8125 14.0391 1.85937C15.0156 1.90234 15.543 2.06641 15.8945 2.20313C16.3594 2.38281 16.6953 2.60156 17.043 2.94922C17.3945 3.30078 17.6094 3.63281 17.7891 4.09766C17.9258 4.44922 18.0898 4.98047 18.1328 5.95312C18.1797 7.00781 18.1914 7.32422 18.1914 9.99219C18.1914 12.6641 18.1797 12.9805 18.1328 14.0313C18.0898 15.0078 17.9258 15.5352 17.7891 15.8867C17.6094 16.3516 17.3906 16.6875 17.043 17.0352C16.6914 17.3867 16.3594 17.6016 15.8945 17.7813C15.543 17.918 15.0117 18.082 14.0391 18.125C12.9844 18.1719 12.668 18.1836 10 18.1836C7.32813 18.1836 7.01172 18.1719 5.96094 18.125C4.98438 18.082 4.45703 17.918 4.10547 17.7813C3.64063 17.6016 3.30469 17.3828 2.95703 17.0352C2.60547 16.6836 2.39063 16.3516 2.21094 15.8867C2.07422 15.5352 1.91016 15.0039 1.86719 14.0313C1.82031 12.9766 1.80859 12.6602 1.80859 9.99219C1.80859 7.32031 1.82031 7.00391 1.86719 5.95312C1.91016 4.97656 2.07422 4.44922 2.21094 4.09766C2.39063 3.63281 2.60938 3.29688 2.95703 2.94922C3.30859 2.59766 3.64063 2.38281 4.10547 2.20313C4.45703 2.06641 4.98828 1.90234 5.96094 1.85937C7.01172 1.8125 7.32813 1.80078 10 1.80078ZM10 0C7.28516 0 6.94531 0.0117187 5.87891 0.0585938C4.81641 0.105469 4.08594 0.277344 3.45313 0.523438C2.79297 0.78125 2.23438 1.12109 1.67969 1.67969C1.12109 2.23438 0.78125 2.79297 0.523438 3.44922C0.277344 4.08594 0.105469 4.8125 0.0585938 5.875C0.0117188 6.94531 0 7.28516 0 10C0 12.7148 0.0117188 13.0547 0.0585938 14.1211C0.105469 15.1836 0.277344 15.9141 0.523438 16.5469C0.78125 17.207 1.12109 17.7656 1.67969 18.3203C2.23438 18.875 2.79297 19.2188 3.44922 19.4727C4.08594 19.7188 4.8125 19.8906 5.875 19.9375C6.94141 19.9844 7.28125 19.9961 9.99609 19.9961C12.7109 19.9961 13.0508 19.9844 14.1172 19.9375C15.1797 19.8906 15.9102 19.7188 16.543 19.4727C17.1992 19.2188 17.7578 18.875 18.3125 18.3203C18.8672 17.7656 19.2109 17.207 19.4648 16.5508C19.7109 15.9141 19.8828 15.1875 19.9297 14.125C19.9766 13.0586 19.9883 12.7188 19.9883 10.0039C19.9883 7.28906 19.9766 6.94922 19.9297 5.88281C19.8828 4.82031 19.7109 4.08984 19.4648 3.45703C19.2188 2.79297 18.8789 2.23438 18.3203 1.67969C17.7656 1.125 17.207 0.78125 16.5508 0.527344C15.9141 0.28125 15.1875 0.109375 14.125 0.0625C13.0547 0.0117188 12.7148 0 10 0Z',
                              fill: 'black',
                            },
                          }),
                          t._v(' '),
                          n('path', {
                            attrs: {
                              d:
                                'M10 4.86328C7.16406 4.86328 4.86328 7.16406 4.86328 10C4.86328 12.8359 7.16406 15.1367 10 15.1367C12.8359 15.1367 15.1367 12.8359 15.1367 10C15.1367 7.16406 12.8359 4.86328 10 4.86328ZM10 13.332C8.16016 13.332 6.66797 11.8398 6.66797 10C6.66797 8.16016 8.16016 6.66797 10 6.66797C11.8398 6.66797 13.332 8.16016 13.332 10C13.332 11.8398 11.8398 13.332 10 13.332Z',
                              fill: 'black',
                            },
                          }),
                          t._v(' '),
                          n('path', {
                            attrs: {
                              d:
                                'M16.5391 4.66016C16.5391 5.32422 16 5.85938 15.3398 5.85938C14.6758 5.85938 14.1406 5.32031 14.1406 4.66016C14.1406 3.99609 14.6797 3.46094 15.3398 3.46094C16 3.46094 16.5391 4 16.5391 4.66016Z',
                              fill: 'black',
                            },
                          }),
                        ],
                      ),
                    ],
                  ),
                ]),
              ]),
            ]);
          },
          [],
          !1,
          null,
          'b5259064',
          null,
        );
      e.default = component.exports;
    },
    function(t, e, n) {
      'use strict';
      n.r(e);
      var r = { name: 'Footer' },
        o = (n(316), n(10)),
        component = Object(o.a)(
          r,
          function() {
            var t = this.$createElement,
              e = this._self._c || t;
            return e('div', { class: ['footer'] }, [
              e(
                'div',
                { staticClass: 'content' },
                [
                  e('nuxt-link', { attrs: { to: '/' } }, [
                    e('div', { staticClass: 'footer-logo' }, [
                      e(
                        'svg',
                        {
                          attrs: {
                            viewBox: '0 0 110 78',
                            fill: 'none',
                            xmlns: 'http://www.w3.org/2000/svg',
                          },
                        },
                        [
                          e('path', {
                            attrs: {
                              d:
                                'M14.5828 1.21322V34.4251C14.5828 37.5593 14.949 39.9183 15.6815 41.5023C16.9799 44.2994 19.5269 45.698 23.3224 45.698C28.1834 45.698 31.5128 43.7097 33.3106 39.733C34.2429 37.5762 34.709 34.7285 34.709 31.1899V1.21322H49.1419V56.3137H35.3083V48.5288C35.1751 48.6973 34.8422 49.2029 34.3095 50.0454C33.7767 50.8879 33.1442 51.6293 32.4117 52.2696C30.181 54.2916 28.0169 55.6734 25.9194 56.4148C23.8551 57.1562 21.4247 57.5269 18.628 57.5269C10.5708 57.5269 5.14392 54.5949 2.34723 48.731C0.782409 45.4958 0 40.7272 0 34.4251V1.21322H14.5828Z',
                            },
                          }),
                          this._v(' '),
                          e('path', {
                            attrs: {
                              d:
                                'M95.3174 28.7634C95.3174 24.5172 94.3518 20.7596 92.4208 17.4906C90.523 14.2216 87.4267 12.5872 83.1318 12.5872C77.9712 12.5872 74.4254 15.0642 72.4943 20.0181C71.4955 22.6468 70.9961 25.9832 70.9961 30.0272C70.9961 36.4303 72.6774 40.9294 76.0401 43.5243C78.0378 45.0408 80.4016 45.7991 83.1318 45.7991C87.0937 45.7991 90.1068 44.2489 92.1711 41.1484C94.2686 38.048 95.3174 33.9196 95.3174 28.7634ZM87.2269 0C93.5861 0 98.963 2.37589 103.358 7.12767C107.786 11.8795 110 18.8555 110 28.0557C110 37.7615 107.836 45.1588 103.508 50.2476C99.2127 55.3364 93.6693 57.8808 86.8773 57.8808C82.5491 57.8808 78.9534 56.7855 76.0901 54.5949C74.5253 53.3817 72.9937 51.6124 71.4955 49.2871V78H57.4121V1.21322H71.046V9.35191C72.5776 6.95917 74.209 5.07194 75.9402 3.69021C79.1032 1.23007 82.8654 0 87.2269 0Z',
                            },
                          }),
                        ],
                      ),
                    ]),
                  ]),
                  this._v(' '),
                  this._m(0),
                ],
                1,
              ),
              this._v(' '),
              e(
                'a',
                { staticClass: 'email footer-contacts', attrs: { href: '' } },
                [this._v('powered by VERO Digital')],
              ),
              this._v(' '),
              e('a', {
                staticClass: 'email footer-contacts',
                attrs: { href: '' },
              }),
            ]);
          },
          [
            function() {
              var t = this.$createElement,
                e = this._self._c || t;
              return e('div', { staticClass: 'contacts' }, [
                e('span', { staticClass: 'footer-contacts' }, [
                  this._v('\n        Overtoom 2a, Castricum\n      '),
                ]),
                this._v(' '),
                e('span', { staticClass: 'footer-contacts' }, [
                  this._v('The Netherlands, 1901 EW '),
                ]),
                this._v(' '),
                e(
                  'a',
                  {
                    staticClass: 'footer-contacts',
                    attrs: { href: 'tel:+31(0)251827610' },
                  },
                  [this._v('T +31 (0)251 82 76 10\n      ')],
                ),
                this._v(' '),
                e(
                  'a',
                  {
                    staticClass: 'footer-contacts email',
                    attrs: { href: 'mailto:studio@uparchitecture.nl' },
                  },
                  [this._v('studio@uparchitecture.nl\n      ')],
                ),
              ]);
            },
          ],
          !1,
          null,
          '40d9efbe',
          null,
        );
      e.default = component.exports;
    },
    function(t, e, n) {
      'use strict';
      n.r(e);
      var r = n(16),
        o = n(11);
      function c(object, t) {
        var e = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(object);
          t &&
            (n = n.filter(function(t) {
              return Object.getOwnPropertyDescriptor(object, t).enumerable;
            })),
            e.push.apply(e, n);
        }
        return e;
      }
      function l(t) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {};
          i % 2
            ? c(Object(source), !0).forEach(function(e) {
                Object(r.a)(t, e, source[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(
                t,
                Object.getOwnPropertyDescriptors(source),
              )
            : c(Object(source)).forEach(function(e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(source, e),
                );
              });
        }
        return t;
      }
      var f = {
          name: 'Img_Modal',
          components: { Arrow_Btn: n(111).a },
          data: function() {
            return { idx: 0 };
          },
          methods: l(
            l({}, Object(o.b)('app', ['setModalImgIsActive'])),
            {},
            {
              idxUp: function() {
                3 !== this.idx ? this.idx++ : (this.idx = 0);
              },
              idxDown: function() {
                0 !== this.idx ? this.idx-- : (this.idx = 3);
              },
            },
          ),
        },
        d = (n(324), n(10)),
        component = Object(d.a)(
          f,
          function() {
            var t = this,
              e = t.$createElement,
              r = t._self._c || e;
            return r('div', { staticClass: 'img-modal' }, [
              r(
                'div',
                { staticClass: 'content' },
                [
                  r('div', { staticClass: 'btn-span' }, [
                    r('button', { on: { click: t.setModalImgIsActive } }, [
                      r(
                        'svg',
                        {
                          attrs: {
                            viewBox: '0 0 34 34',
                            fill: 'none',
                            xmlns: 'http://www.w3.org/2000/svg',
                          },
                        },
                        [
                          r('path', {
                            attrs: {
                              d: 'M2 2L32 32M32 2L2 32',
                              stroke: 'white',
                              'stroke-width': '4',
                            },
                          }),
                        ],
                      ),
                    ]),
                    t._v(' '),
                    r('button', [
                      r(
                        'svg',
                        {
                          attrs: {
                            viewBox: '0 0 44 44',
                            fill: 'none',
                            xmlns: 'http://www.w3.org/2000/svg',
                          },
                        },
                        [
                          r('path', {
                            attrs: {
                              d: 'M22 0.786804V43.2132M43.2132 22H0.786797',
                              stroke: 'white',
                              'stroke-width': '4',
                            },
                          }),
                        ],
                      ),
                    ]),
                  ]),
                  t._v(' '),
                  r(
                    'transition-group',
                    {
                      staticClass: 'image-list',
                      attrs: { name: 'modal-image' },
                    },
                    [
                      0 === t.idx
                        ? r('img', {
                            key: '0',
                            staticClass: 'img-span',
                            attrs: { src: n(318) },
                          })
                        : t._e(),
                      t._v(' '),
                      1 === t.idx
                        ? r('img', {
                            key: '1',
                            staticClass: 'img-span',
                            attrs: { src: n(319) },
                          })
                        : t._e(),
                      t._v(' '),
                      2 === t.idx
                        ? r('img', {
                            key: '2',
                            staticClass: 'img-span',
                            attrs: { src: n(320) },
                          })
                        : t._e(),
                      t._v(' '),
                      3 === t.idx
                        ? r('img', {
                            key: '3',
                            staticClass: 'img-span',
                            attrs: { src: n(321) },
                          })
                        : t._e(),
                    ],
                  ),
                  t._v(' '),
                  r('div', { staticClass: 'paginator' }, [
                    r('div', { staticClass: 'arrow-wrap' }, [
                      r(
                        'button',
                        {
                          staticClass: 'btn-left',
                          on: {
                            click: function(e) {
                              return t.idxDown();
                            },
                          },
                        },
                        [
                          r(
                            'svg',
                            {
                              attrs: {
                                width: '21',
                                height: '16',
                                viewBox: '0 0 21 16',
                                fill: 'none',
                                xmlns: 'http://www.w3.org/2000/svg',
                              },
                            },
                            [
                              r('path', {
                                attrs: {
                                  d:
                                    'M0.292892 7.2929C-0.0976315 7.68342 -0.0976314 8.31658 0.292893 8.70711L6.65686 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928933C7.68054 0.538409 7.04738 0.538409 6.65685 0.928933L0.292892 7.2929ZM21 7L1 7L1 9L21 9L21 7Z',
                                  fill: '#fff',
                                },
                              }),
                            ],
                          ),
                        ],
                      ),
                      t._v(' '),
                      r(
                        'button',
                        {
                          staticClass: 'btn-right',
                          on: {
                            click: function(e) {
                              return t.idxUp();
                            },
                          },
                        },
                        [
                          r(
                            'svg',
                            {
                              attrs: {
                                width: '21',
                                height: '16',
                                viewBox: '0 0 21 16',
                                fill: 'none',
                                xmlns: 'http://www.w3.org/2000/svg',
                              },
                            },
                            [
                              r('path', {
                                attrs: {
                                  d:
                                    'M20.7071 8.70711C21.0976 8.31658 21.0976 7.68342 20.7071 7.2929L14.3431 0.928933C13.9526 0.538409 13.3195 0.538409 12.9289 0.928933C12.5384 1.31946 12.5384 1.95262 12.9289 2.34315L18.5858 8L12.9289 13.6569C12.5384 14.0474 12.5384 14.6805 12.9289 15.0711C13.3195 15.4616 13.9526 15.4616 14.3431 15.0711L20.7071 8.70711ZM-8.74228e-08 9L20 9L20 7L8.74228e-08 7L-8.74228e-08 9Z',
                                  fill: '#fff',
                                },
                              }),
                            ],
                          ),
                        ],
                      ),
                    ]),
                  ]),
                ],
                1,
              ),
            ]);
          },
          [],
          !1,
          null,
          '7096adc9',
          null,
        );
      e.default = component.exports;
    },
    function(t, e, n) {
      'use strict';
      e.a = {};
    },
    ,
    ,
    ,
    function(t, e, n) {
      'use strict';
      var r = {
          name: 'Arrow_Btn',
          props: {
            place: {
              validator: function(t) {
                return ['imgModal', 'project'];
              },
            },
          },
        },
        o = (n(322), n(10)),
        component = Object(o.a)(
          r,
          function() {
            var t = this.$createElement,
              e = this._self._c || t;
            return e('div', { staticClass: 'arrow-wrap' }, [
              e('button', { staticClass: 'btn-left' }, [
                e(
                  'svg',
                  {
                    attrs: {
                      viewBox: '0 0 67 24',
                      fill: 'none',
                      xmlns: 'http://www.w3.org/2000/svg',
                    },
                  },
                  [
                    e('path', {
                      class: [
                        { imgModalFill: 'imgModal' === this.place },
                        { projectFill: 'project' === this.place },
                      ],
                      attrs: {
                        d:
                          'M0 12L20 23.547V0.452994L0 12ZM18 14H66.5V10H18V14Z',
                      },
                    }),
                  ],
                ),
              ]),
              this._v(' '),
              e('button', { staticClass: 'btn-right' }, [
                e(
                  'svg',
                  {
                    attrs: {
                      viewBox: '0 0 67 24',
                      fill: 'none',
                      xmlns: 'http://www.w3.org/2000/svg',
                    },
                  },
                  [
                    e('path', {
                      class: [
                        { imgModalFill: 'imgModal' === this.place },
                        { projectFill: 'project' === this.place },
                      ],
                      attrs: {
                        d:
                          'M66.5 12L46.5 0.452996L46.5 23.547L66.5 12ZM48.5 10L-1.74846e-07 10L1.74846e-07 14L48.5 14L48.5 10Z',
                      },
                    }),
                  ],
                ),
              ]),
            ]);
          },
          [],
          !1,
          null,
          null,
          null,
        );
      e.a = component.exports;
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function(t, e, n) {
      var content = n(212);
      'string' == typeof content && (content = [[t.i, content, '']]),
        content.locals && (t.exports = content.locals);
      (0, n(9).default)('b5f4f9e6', content, !0, { sourceMap: !1 });
    },
    function(t, e, n) {
      var content = n(214);
      'string' == typeof content && (content = [[t.i, content, '']]),
        content.locals && (t.exports = content.locals);
      (0, n(9).default)('7e56e4e3', content, !0, { sourceMap: !1 });
    },
    function(t, e, n) {
      var content = n(313);
      'string' == typeof content && (content = [[t.i, content, '']]),
        content.locals && (t.exports = content.locals);
      (0, n(9).default)('55cc57c0', content, !0, { sourceMap: !1 });
    },
    function(t, e, n) {
      var content = n(315);
      'string' == typeof content && (content = [[t.i, content, '']]),
        content.locals && (t.exports = content.locals);
      (0, n(9).default)('1a0ea032', content, !0, { sourceMap: !1 });
    },
    function(t, e, n) {
      var content = n(317);
      'string' == typeof content && (content = [[t.i, content, '']]),
        content.locals && (t.exports = content.locals);
      (0, n(9).default)('380a0299', content, !0, { sourceMap: !1 });
    },
    function(t, e, n) {
      var content = n(323);
      'string' == typeof content && (content = [[t.i, content, '']]),
        content.locals && (t.exports = content.locals);
      (0, n(9).default)('18cc9de3', content, !0, { sourceMap: !1 });
    },
    function(t, e, n) {
      var content = n(325);
      'string' == typeof content && (content = [[t.i, content, '']]),
        content.locals && (t.exports = content.locals);
      (0, n(9).default)('3d1f8ff1', content, !0, { sourceMap: !1 });
    },
    function(t, e, n) {
      var content = n(327);
      'string' == typeof content && (content = [[t.i, content, '']]),
        content.locals && (t.exports = content.locals);
      (0, n(9).default)('56b15182', content, !0, { sourceMap: !1 });
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function(t, e, n) {
      'use strict';
      n(21), n(52), n(39);
      var r = n(7),
        o = n(0),
        c = n(1),
        l = window.__NUXT__;
      function f() {
        if (!this._hydrated) return this.$fetch();
      }
      function d() {
        if (
          (t = this).$vnode &&
          t.$vnode.elm &&
          t.$vnode.elm.dataset &&
          t.$vnode.elm.dataset.fetchKey
        ) {
          var t;
          (this._hydrated = !0),
            (this._fetchKey = +this.$vnode.elm.dataset.fetchKey);
          var data = l.fetch[this._fetchKey];
          if (data && data._error) this.$fetchState.error = data._error;
          else for (var e in data) o.default.set(this.$data, e, data[e]);
        }
      }
      function h() {
        var t = this;
        return (
          this._fetchPromise ||
            (this._fetchPromise = m.call(this).then(function() {
              delete t._fetchPromise;
            })),
          this._fetchPromise
        );
      }
      function m() {
        return v.apply(this, arguments);
      }
      function v() {
        return (v = Object(r.a)(
          regeneratorRuntime.mark(function t() {
            var e,
              n,
              r,
              o = this;
            return regeneratorRuntime.wrap(
              function(t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        this.$nuxt.nbFetching++,
                        (this.$fetchState.pending = !0),
                        (this.$fetchState.error = null),
                        (this._hydrated = !1),
                        (e = null),
                        (n = Date.now()),
                        (t.prev = 6),
                        (t.next = 9),
                        this.$options.fetch.call(this)
                      );
                    case 9:
                      t.next = 15;
                      break;
                    case 11:
                      (t.prev = 11),
                        (t.t0 = t.catch(6)),
                        (e = Object(c.p)(t.t0));
                    case 15:
                      if (!((r = this._fetchDelay - (Date.now() - n)) > 0)) {
                        t.next = 19;
                        break;
                      }
                      return (
                        (t.next = 19),
                        new Promise(function(t) {
                          return setTimeout(t, r);
                        })
                      );
                    case 19:
                      (this.$fetchState.error = e),
                        (this.$fetchState.pending = !1),
                        (this.$fetchState.timestamp = Date.now()),
                        this.$nextTick(function() {
                          return o.$nuxt.nbFetching--;
                        });
                    case 23:
                    case 'end':
                      return t.stop();
                  }
              },
              t,
              this,
              [[6, 11]],
            );
          }),
        )).apply(this, arguments);
      }
      e.a = {
        beforeCreate: function() {
          Object(c.l)(this) &&
            ((this._fetchDelay =
              'number' == typeof this.$options.fetchDelay
                ? this.$options.fetchDelay
                : 200),
            o.default.util.defineReactive(this, '$fetchState', {
              pending: !1,
              error: null,
              timestamp: Date.now(),
            }),
            (this.$fetch = h.bind(this)),
            Object(c.a)(this, 'created', d),
            Object(c.a)(this, 'beforeMount', f));
        },
      };
    },
    function(t, e, n) {
      'use strict';
      n(53);
      var r = n(74),
        o = n
          .n(r)
          .a.create({
            baseURL: 'https://strapi-up.verodigital.site/',
            withCredentials: !1,
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
          });
      e.a = {
        getHome: function(t) {
          return o.get(t);
        },
        getPage: function(t) {
          return o.get(t);
        },
        getPost: function(t, e) {
          return o.get(''.concat(t, '/').concat(e));
        },
        getPosts: function(t) {
          return o.get(t);
        },
      };
    },
    ,
    ,
    ,
    function(t, e, n) {
      n(173), (t.exports = n(174));
    },
    ,
    function(t, e, n) {
      'use strict';
      n.r(e),
        function(t) {
          n(53),
            n(87),
            n(57),
            n(58),
            n(35),
            n(122),
            n(88),
            n(73),
            n(21),
            n(37),
            n(92),
            n(47),
            n(129),
            n(63),
            n(64),
            n(52);
          var e = n(29),
            r = (n(39), n(7)),
            o = (n(98), n(183), n(190), n(191), n(0)),
            c = n(162),
            l = n(107),
            f = n(1),
            d = n(26),
            h = n(167),
            m = n(68);
          function v(t, e) {
            var n;
            if ('undefined' == typeof Symbol || null == t[Symbol.iterator]) {
              if (
                Array.isArray(t) ||
                (n = (function(t, e) {
                  if (!t) return;
                  if ('string' == typeof t) return y(t, e);
                  var n = Object.prototype.toString.call(t).slice(8, -1);
                  'Object' === n && t.constructor && (n = t.constructor.name);
                  if ('Map' === n || 'Set' === n) return Array.from(t);
                  if (
                    'Arguments' === n ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                  )
                    return y(t, e);
                })(t)) ||
                (e && t && 'number' == typeof t.length)
              ) {
                n && (t = n);
                var i = 0,
                  r = function() {};
                return {
                  s: r,
                  n: function() {
                    return i >= t.length
                      ? { done: !0 }
                      : { done: !1, value: t[i++] };
                  },
                  e: function(t) {
                    throw t;
                  },
                  f: r,
                };
              }
              throw new TypeError(
                'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
              );
            }
            var o,
              c = !0,
              l = !1;
            return {
              s: function() {
                n = t[Symbol.iterator]();
              },
              n: function() {
                var t = n.next();
                return (c = t.done), t;
              },
              e: function(t) {
                (l = !0), (o = t);
              },
              f: function() {
                try {
                  c || null == n.return || n.return();
                } finally {
                  if (l) throw o;
                }
              },
            };
          }
          function y(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
            return n;
          }
          o.default.__nuxt__fetch__mixin__ ||
            (o.default.mixin(h.a), (o.default.__nuxt__fetch__mixin__ = !0)),
            o.default.component(m.a.name, m.a),
            o.default.component('NLink', m.a),
            t.fetch || (t.fetch = c.a);
          var w,
            x,
            C = [],
            _ = window.__NUXT__ || {};
          Object.assign(o.default.config, { silent: !0, performance: !1 });
          var H = o.default.config.errorHandler || console.error;
          function N(t, e, n) {
            for (
              var r = function(component) {
                  var t =
                    (function(component, t) {
                      if (
                        !component ||
                        !component.options ||
                        !component.options[t]
                      )
                        return {};
                      var option = component.options[t];
                      if ('function' == typeof option) {
                        for (
                          var e = arguments.length,
                            n = new Array(e > 2 ? e - 2 : 0),
                            r = 2;
                          r < e;
                          r++
                        )
                          n[r - 2] = arguments[r];
                        return option.apply(void 0, n);
                      }
                      return option;
                    })(component, 'transition', e, n) || {};
                  return 'string' == typeof t ? { name: t } : t;
                },
                o = n ? Object(f.g)(n) : [],
                c = Math.max(t.length, o.length),
                l = [],
                d = function(i) {
                  var e = Object.assign({}, r(t[i])),
                    n = Object.assign({}, r(o[i]));
                  Object.keys(e)
                    .filter(function(t) {
                      return (
                        void 0 !== e[t] && !t.toLowerCase().includes('leave')
                      );
                    })
                    .forEach(function(t) {
                      n[t] = e[t];
                    }),
                    l.push(n);
                },
                i = 0;
              i < c;
              i++
            )
              d(i);
            return l;
          }
          function O(t, e, n) {
            return j.apply(this, arguments);
          }
          function j() {
            return (j = Object(r.a)(
              regeneratorRuntime.mark(function t(e, n, r) {
                var o,
                  c,
                  l,
                  d,
                  h = this;
                return regeneratorRuntime.wrap(
                  function(t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          if (
                            ((this._routeChanged =
                              Boolean(w.nuxt.err) || n.name !== e.name),
                            (this._paramChanged =
                              !this._routeChanged && n.path !== e.path),
                            (this._queryChanged =
                              !this._paramChanged && n.fullPath !== e.fullPath),
                            (this._diffQuery = this._queryChanged
                              ? Object(f.i)(e.query, n.query)
                              : []),
                            (this._routeChanged || this._paramChanged) &&
                              this.$loading.start &&
                              !this.$loading.manual &&
                              this.$loading.start(),
                            (t.prev = 5),
                            !this._queryChanged)
                          ) {
                            t.next = 12;
                            break;
                          }
                          return (
                            (t.next = 9),
                            Object(f.r)(e, function(t, e) {
                              return { Component: t, instance: e };
                            })
                          );
                        case 9:
                          (o = t.sent),
                            o.some(function(t) {
                              var r = t.Component,
                                o = t.instance,
                                c = r.options.watchQuery;
                              return (
                                !0 === c ||
                                (Array.isArray(c)
                                  ? c.some(function(t) {
                                      return h._diffQuery[t];
                                    })
                                  : 'function' == typeof c &&
                                    c.apply(o, [e.query, n.query]))
                              );
                            }) &&
                              this.$loading.start &&
                              !this.$loading.manual &&
                              this.$loading.start();
                        case 12:
                          r(), (t.next = 26);
                          break;
                        case 15:
                          if (
                            ((t.prev = 15),
                            (t.t0 = t.catch(5)),
                            (c = t.t0 || {}),
                            (l =
                              c.statusCode ||
                              c.status ||
                              (c.response && c.response.status) ||
                              500),
                            (d = c.message || ''),
                            !/^Loading( CSS)? chunk (\d)+ failed\./.test(d))
                          ) {
                            t.next = 23;
                            break;
                          }
                          return window.location.reload(!0), t.abrupt('return');
                        case 23:
                          this.error({ statusCode: l, message: d }),
                            this.$nuxt.$emit('routeChanged', e, n, c),
                            r();
                        case 26:
                        case 'end':
                          return t.stop();
                      }
                  },
                  t,
                  this,
                  [[5, 15]],
                );
              }),
            )).apply(this, arguments);
          }
          function I(t, e) {
            return _.serverRendered && e && Object(f.b)(t, e), (t._Ctor = t), t;
          }
          function k(t) {
            var path = Object(f.f)(t.options.base, t.options.mode);
            return Object(f.d)(
              t.match(path),
              (function() {
                var t = Object(r.a)(
                  regeneratorRuntime.mark(function t(e, n, r, o, c) {
                    var l;
                    return regeneratorRuntime.wrap(function(t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            if ('function' != typeof e || e.options) {
                              t.next = 4;
                              break;
                            }
                            return (t.next = 3), e();
                          case 3:
                            e = t.sent;
                          case 4:
                            return (
                              (l = I(
                                Object(f.s)(e),
                                _.data ? _.data[c] : null,
                              )),
                              (r.components[o] = l),
                              t.abrupt('return', l)
                            );
                          case 7:
                          case 'end':
                            return t.stop();
                        }
                    }, t);
                  }),
                );
                return function(e, n, r, o, c) {
                  return t.apply(this, arguments);
                };
              })(),
            );
          }
          function D(t, e, n) {
            var r = this,
              o = [],
              c = !1;
            if (
              (void 0 !== n &&
                ((o = []),
                (n = Object(f.s)(n)).options.middleware &&
                  (o = o.concat(n.options.middleware)),
                t.forEach(function(t) {
                  t.options.middleware && (o = o.concat(t.options.middleware));
                })),
              (o = o.map(function(t) {
                return 'function' == typeof t
                  ? t
                  : ('function' != typeof l.a[t] &&
                      ((c = !0),
                      r.error({
                        statusCode: 500,
                        message: 'Unknown middleware ' + t,
                      })),
                    l.a[t]);
              })),
              !c)
            )
              return Object(f.o)(o, e);
          }
          function E(t, e, n) {
            return $.apply(this, arguments);
          }
          function $() {
            return ($ = Object(r.a)(
              regeneratorRuntime.mark(function t(e, n, o) {
                var c,
                  l,
                  h,
                  m,
                  y,
                  x,
                  _,
                  H,
                  O,
                  j,
                  I,
                  k,
                  E,
                  $,
                  S,
                  L = this;
                return regeneratorRuntime.wrap(
                  function(t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          if (
                            !1 !== this._routeChanged ||
                            !1 !== this._paramChanged ||
                            !1 !== this._queryChanged
                          ) {
                            t.next = 2;
                            break;
                          }
                          return t.abrupt('return', o());
                        case 2:
                          return (
                            !1,
                            e === n
                              ? ((C = []), !0)
                              : ((c = []),
                                (C = Object(f.g)(n, c).map(function(t, i) {
                                  return Object(f.c)(n.matched[c[i]].path)(
                                    n.params,
                                  );
                                }))),
                            (l = !1),
                            (h = function(path) {
                              n.path === path.path &&
                                L.$loading.finish &&
                                L.$loading.finish(),
                                n.path !== path.path &&
                                  L.$loading.pause &&
                                  L.$loading.pause(),
                                l || ((l = !0), o(path));
                            }),
                            (t.next = 8),
                            Object(f.t)(w, {
                              route: e,
                              from: n,
                              next: h.bind(this),
                            })
                          );
                        case 8:
                          if (
                            ((this._dateLastError = w.nuxt.dateErr),
                            (this._hadError = Boolean(w.nuxt.err)),
                            (m = []),
                            (y = Object(f.g)(e, m)).length)
                          ) {
                            t.next = 27;
                            break;
                          }
                          return (t.next = 15), D.call(this, y, w.context);
                        case 15:
                          if (!l) {
                            t.next = 17;
                            break;
                          }
                          return t.abrupt('return');
                        case 17:
                          return (
                            (x = (d.a.options || d.a).layout),
                            (t.next = 20),
                            this.loadLayout(
                              'function' == typeof x
                                ? x.call(d.a, w.context)
                                : x,
                            )
                          );
                        case 20:
                          return (
                            (_ = t.sent),
                            (t.next = 23),
                            D.call(this, y, w.context, _)
                          );
                        case 23:
                          if (!l) {
                            t.next = 25;
                            break;
                          }
                          return t.abrupt('return');
                        case 25:
                          return (
                            w.context.error({
                              statusCode: 404,
                              message: 'This page could not be found',
                            }),
                            t.abrupt('return', o())
                          );
                        case 27:
                          return (
                            y.forEach(function(t) {
                              t._Ctor &&
                                t._Ctor.options &&
                                ((t.options.asyncData =
                                  t._Ctor.options.asyncData),
                                (t.options.fetch = t._Ctor.options.fetch));
                            }),
                            this.setTransitions(N(y, e, n)),
                            (t.prev = 29),
                            (t.next = 32),
                            D.call(this, y, w.context)
                          );
                        case 32:
                          if (!l) {
                            t.next = 34;
                            break;
                          }
                          return t.abrupt('return');
                        case 34:
                          if (!w.context._errored) {
                            t.next = 36;
                            break;
                          }
                          return t.abrupt('return', o());
                        case 36:
                          return (
                            'function' == typeof (H = y[0].options.layout) &&
                              (H = H(w.context)),
                            (t.next = 40),
                            this.loadLayout(H)
                          );
                        case 40:
                          return (
                            (H = t.sent),
                            (t.next = 43),
                            D.call(this, y, w.context, H)
                          );
                        case 43:
                          if (!l) {
                            t.next = 45;
                            break;
                          }
                          return t.abrupt('return');
                        case 45:
                          if (!w.context._errored) {
                            t.next = 47;
                            break;
                          }
                          return t.abrupt('return', o());
                        case 47:
                          (O = !0),
                            (t.prev = 48),
                            (j = v(y)),
                            (t.prev = 50),
                            j.s();
                        case 52:
                          if ((I = j.n()).done) {
                            t.next = 63;
                            break;
                          }
                          if (
                            'function' == typeof (k = I.value).options.validate
                          ) {
                            t.next = 56;
                            break;
                          }
                          return t.abrupt('continue', 61);
                        case 56:
                          return (t.next = 58), k.options.validate(w.context);
                        case 58:
                          if ((O = t.sent)) {
                            t.next = 61;
                            break;
                          }
                          return t.abrupt('break', 63);
                        case 61:
                          t.next = 52;
                          break;
                        case 63:
                          t.next = 68;
                          break;
                        case 65:
                          (t.prev = 65), (t.t0 = t.catch(50)), j.e(t.t0);
                        case 68:
                          return (t.prev = 68), j.f(), t.finish(68);
                        case 71:
                          t.next = 77;
                          break;
                        case 73:
                          return (
                            (t.prev = 73),
                            (t.t1 = t.catch(48)),
                            this.error({
                              statusCode: t.t1.statusCode || '500',
                              message: t.t1.message,
                            }),
                            t.abrupt('return', o())
                          );
                        case 77:
                          if (O) {
                            t.next = 80;
                            break;
                          }
                          return (
                            this.error({
                              statusCode: 404,
                              message: 'This page could not be found',
                            }),
                            t.abrupt('return', o())
                          );
                        case 80:
                          return (
                            (t.next = 82),
                            Promise.all(
                              y.map(
                                (function() {
                                  var t = Object(r.a)(
                                    regeneratorRuntime.mark(function t(r, i) {
                                      var o, c, l, d, h, v, y, x, p;
                                      return regeneratorRuntime.wrap(function(
                                        t,
                                      ) {
                                        for (;;)
                                          switch ((t.prev = t.next)) {
                                            case 0:
                                              if (
                                                ((r._path = Object(f.c)(
                                                  e.matched[m[i]].path,
                                                )(e.params)),
                                                (r._dataRefresh = !1),
                                                (o = r._path !== C[i]),
                                                L._routeChanged && o
                                                  ? (r._dataRefresh = !0)
                                                  : L._paramChanged && o
                                                  ? ((c = r.options.watchParam),
                                                    (r._dataRefresh = !1 !== c))
                                                  : L._queryChanged &&
                                                    (!0 ===
                                                    (l = r.options.watchQuery)
                                                      ? (r._dataRefresh = !0)
                                                      : Array.isArray(l)
                                                      ? (r._dataRefresh = l.some(
                                                          function(t) {
                                                            return L._diffQuery[
                                                              t
                                                            ];
                                                          },
                                                        ))
                                                      : 'function' ==
                                                          typeof l &&
                                                        (E ||
                                                          (E = Object(f.h)(e)),
                                                        (r._dataRefresh = l.apply(
                                                          E[i],
                                                          [e.query, n.query],
                                                        )))),
                                                L._hadError ||
                                                  !L._isMounted ||
                                                  r._dataRefresh)
                                              ) {
                                                t.next = 6;
                                                break;
                                              }
                                              return t.abrupt('return');
                                            case 6:
                                              return (
                                                (d = []),
                                                (h =
                                                  r.options.asyncData &&
                                                  'function' ==
                                                    typeof r.options.asyncData),
                                                (v =
                                                  Boolean(r.options.fetch) &&
                                                  r.options.fetch.length),
                                                (y = h && v ? 30 : 45),
                                                h &&
                                                  ((x = Object(f.q)(
                                                    r.options.asyncData,
                                                    w.context,
                                                  )).then(function(t) {
                                                    Object(f.b)(r, t),
                                                      L.$loading.increase &&
                                                        L.$loading.increase(y);
                                                  }),
                                                  d.push(x)),
                                                (L.$loading.manual =
                                                  !1 === r.options.loading),
                                                v &&
                                                  (((p = r.options.fetch(
                                                    w.context,
                                                  )) &&
                                                    (p instanceof Promise ||
                                                      'function' ==
                                                        typeof p.then)) ||
                                                    (p = Promise.resolve(p)),
                                                  p.then(function(t) {
                                                    L.$loading.increase &&
                                                      L.$loading.increase(y);
                                                  }),
                                                  d.push(p)),
                                                t.abrupt(
                                                  'return',
                                                  Promise.all(d),
                                                )
                                              );
                                            case 14:
                                            case 'end':
                                              return t.stop();
                                          }
                                      },
                                      t);
                                    }),
                                  );
                                  return function(e, n) {
                                    return t.apply(this, arguments);
                                  };
                                })(),
                              ),
                            )
                          );
                        case 82:
                          l ||
                            (this.$loading.finish &&
                              !this.$loading.manual &&
                              this.$loading.finish(),
                            o()),
                            (t.next = 99);
                          break;
                        case 85:
                          if (
                            ((t.prev = 85),
                            (t.t2 = t.catch(29)),
                            'ERR_REDIRECT' !== ($ = t.t2 || {}).message)
                          ) {
                            t.next = 90;
                            break;
                          }
                          return t.abrupt(
                            'return',
                            this.$nuxt.$emit('routeChanged', e, n, $),
                          );
                        case 90:
                          return (
                            (C = []),
                            Object(f.k)($),
                            'function' ==
                              typeof (S = (d.a.options || d.a).layout) &&
                              (S = S(w.context)),
                            (t.next = 96),
                            this.loadLayout(S)
                          );
                        case 96:
                          this.error($),
                            this.$nuxt.$emit('routeChanged', e, n, $),
                            o();
                        case 99:
                        case 'end':
                          return t.stop();
                      }
                  },
                  t,
                  this,
                  [
                    [29, 85],
                    [48, 73],
                    [50, 65, 68, 71],
                  ],
                );
              }),
            )).apply(this, arguments);
          }
          function S(t, n) {
            Object(f.d)(t, function(t, n, r, c) {
              return (
                'object' !== Object(e.a)(t) ||
                  t.options ||
                  (((t = o.default.extend(t))._Ctor = t),
                  (r.components[c] = t)),
                t
              );
            });
          }
          function L(t) {
            var e = Boolean(this.$options.nuxt.err);
            this._hadError &&
              this._dateLastError === this.$options.nuxt.dateErr &&
              (e = !1);
            var n = e
              ? (d.a.options || d.a).layout
              : t.matched[0].components.default.options.layout;
            'function' == typeof n && (n = n(w.context)), this.setLayout(n);
          }
          function A(t) {
            t._hadError &&
              t._dateLastError === t.$options.nuxt.dateErr &&
              t.error();
          }
          function M(t, e) {
            var n = this;
            if (
              !1 !== this._routeChanged ||
              !1 !== this._paramChanged ||
              !1 !== this._queryChanged
            ) {
              var r = Object(f.h)(t),
                c = Object(f.g)(t),
                l = !1;
              o.default.nextTick(function() {
                r.forEach(function(t, i) {
                  if (
                    t &&
                    !t._isDestroyed &&
                    t.constructor._dataRefresh &&
                    c[i] === t.constructor &&
                    !0 !== t.$vnode.data.keepAlive &&
                    'function' == typeof t.constructor.options.data
                  ) {
                    var e = t.constructor.options.data.call(t);
                    for (var n in e) o.default.set(t.$data, n, e[n]);
                    l = !0;
                  }
                }),
                  l &&
                    window.$nuxt.$nextTick(function() {
                      window.$nuxt.$emit('triggerScroll');
                    }),
                  A(n);
              });
            }
          }
          function T(t) {
            window.onNuxtReadyCbs.forEach(function(e) {
              'function' == typeof e && e(t);
            }),
              'function' == typeof window._onNuxtLoaded &&
                window._onNuxtLoaded(t),
              x.afterEach(function(e, n) {
                o.default.nextTick(function() {
                  return t.$nuxt.$emit('routeChanged', e, n);
                });
              });
          }
          function P() {
            return (P = Object(r.a)(
              regeneratorRuntime.mark(function t(e) {
                var n, r, c, l, d;
                return regeneratorRuntime.wrap(function(t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          (w = e.app),
                          (x = e.router),
                          e.store,
                          (n = new o.default(w)),
                          (r = _.layout || 'default'),
                          (t.next = 7),
                          n.loadLayout(r)
                        );
                      case 7:
                        return (
                          n.setLayout(r),
                          (c = function() {
                            n.$mount('#__nuxt'),
                              x.afterEach(S),
                              x.afterEach(L.bind(n)),
                              x.afterEach(M.bind(n)),
                              o.default.nextTick(function() {
                                T(n);
                              });
                          }),
                          (t.next = 11),
                          Promise.all(k(x))
                        );
                      case 11:
                        if (
                          ((l = t.sent),
                          (n.setTransitions = n.$options.nuxt.setTransitions.bind(
                            n,
                          )),
                          l.length &&
                            (n.setTransitions(N(l, x.currentRoute)),
                            (C = x.currentRoute.matched.map(function(t) {
                              return Object(f.c)(t.path)(x.currentRoute.params);
                            }))),
                          (n.$loading = {}),
                          _.error && n.error(_.error),
                          x.beforeEach(O.bind(n)),
                          x.beforeEach(E.bind(n)),
                          !_.serverRendered ||
                            !Object(f.n)(_.routePath, n.context.route.path))
                        ) {
                          t.next = 20;
                          break;
                        }
                        return t.abrupt('return', c());
                      case 20:
                        return (
                          (d = function() {
                            S(x.currentRoute, x.currentRoute),
                              L.call(n, x.currentRoute),
                              A(n),
                              c();
                          }),
                          (t.next = 23),
                          new Promise(function(t) {
                            return setTimeout(t, 0);
                          })
                        );
                      case 23:
                        E.call(n, x.currentRoute, x.currentRoute, function(
                          path,
                        ) {
                          if (path) {
                            var t = x.afterEach(function(e, n) {
                              t(), d();
                            });
                            x.push(path, void 0, function(t) {
                              t && H(t);
                            });
                          } else d();
                        });
                      case 24:
                      case 'end':
                        return t.stop();
                    }
                }, t);
              }),
            )).apply(this, arguments);
          }
          Object(d.b)(null, _.config)
            .then(function(t) {
              return P.apply(this, arguments);
            })
            .catch(H);
        }.call(this, n(27));
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function(t, e, n) {
      'use strict';
      n(146);
    },
    function(t, e, n) {
      (e = n(8)(!1)).push([
        t.i,
        '.page-404[data-v-6966e2ac]{width:100%;height:100vh;display:flex;align-items:center;justify-content:center}@media(max-width:680px){.page-404[data-v-6966e2ac]{flex-wrap:wrap;padding:0 50px;box-sizing:border-box;flex-direction:column}}@media(max-width:1280px){svg[data-v-6966e2ac]{max-width:315px;width:100%;height:auto}}.right[data-v-6966e2ac]{display:flex;flex-direction:column;padding-left:20px}@media(max-width:680px){.right[data-v-6966e2ac]{padding-left:0}}@media(max-width:1280px){.content-title[data-v-6966e2ac]{font-size:72px;line-height:110%}}.go-home[data-v-6966e2ac]{position:relative;font-family:Helvetica;font-style:normal;font-weight:400;font-size:24px;line-height:166%;color:#000}.go-home[data-v-6966e2ac]:after{position:absolute;bottom:-4px;left:0;height:4px;width:60px;content:"";background-color:#000}@media(max-width:1280px){.go-home[data-v-6966e2ac]:after{height:3px}}',
        '',
      ]),
        (t.exports = e);
    },
    function(t, e, n) {
      'use strict';
      n(147);
    },
    function(t, e, n) {
      (e = n(8)(!1)).push([
        t.i,
        '.nuxt-progress{position:fixed;top:0;left:0;right:0;height:2px;width:0;opacity:1;transition:width .1s,opacity .4s;background-color:#000;z-index:999999}.nuxt-progress.nuxt-progress-notransition{transition:none}.nuxt-progress-failed{background-color:red}',
        '',
      ]),
        (t.exports = e);
    },
    function(t, e, n) {
      var content = n(216);
      'string' == typeof content && (content = [[t.i, content, '']]),
        content.locals && (t.exports = content.locals);
      (0, n(9).default)('5b6cf074', content, !0, { sourceMap: !1 });
    },
    function(t, e, n) {
      (e = n(8)(!1)).push([
        t.i,
        '@font-face{font-family:"HelveticaNeueCyr";src:url(/assets/fonts/HelveticaNeueCyr/HelveticaNeueCyr-Medium.eot);src:local("HelveticaNeueCyr-Medium"),url(/assets/fonts/HelveticaNeueCyr/HelveticaNeueCyr-Medium.eot?#iefix) format("embedded-opentype"),url(/assets/fonts/HelveticaNeueCyr/HelveticaNeueCyr-Medium.woff) format("woff"),url(/assets/fonts/HelveticaNeueCyr/HelveticaNeueCyr-Medium.ttf) format("truetype");font-weight:500;font-style:normal}@font-face{font-family:"HelveticaNeueCyr";src:url(/assets/fonts/HelveticaNeueCyr/HelveticaNeueCyr-Heavy.eot);src:local("HelveticaNeueCyr-Heavy"),url(/assets/fonts/HelveticaNeueCyr/HelveticaNeueCyr-Heavy.eot?#iefix) format("embedded-opentype"),url(/assets/fonts/HelveticaNeueCyr/HelveticaNeueCyr-Heavy.woff) format("woff"),url(/assets/fonts/HelveticaNeueCyr/HelveticaNeueCyr-Heavy.ttf) format("truetype");font-weight:900;font-style:normal}@font-face{font-family:"HelveticaNeueCyr";src:url(/assets/fonts/HelveticaNeueCyr/HelveticaNeueCyr-HeavyItalic.eot);src:local("HelveticaNeueCyr-HeavyItalic"),url(/assets/fonts/HelveticaNeueCyr/HelveticaNeueCyr-HeavyItalic.eot?#iefix) format("embedded-opentype"),url(/assets/fonts/HelveticaNeueCyr/HelveticaNeueCyr-HeavyItalic.woff) format("woff"),url(/assets/fonts/HelveticaNeueCyr/HelveticaNeueCyr-HeavyItalic.ttf) format("truetype");font-weight:900;font-style:italic}@font-face{font-family:"HelveticaNeueCyr";src:url(/assets/fonts/HelveticaNeueCyr/HelveticaNeueCyr-Black.eot);src:local("HelveticaNeueCyr-Black"),url(/assets/fonts/HelveticaNeueCyr/HelveticaNeueCyr-Black.eot?#iefix) format("embedded-opentype"),url(/assets/fonts/HelveticaNeueCyr/HelveticaNeueCyr-Black.woff) format("woff"),url(/assets/fonts/HelveticaNeueCyr/HelveticaNeueCyr-Black.ttf) format("truetype");font-weight:900;font-style:normal}@font-face{font-family:"HelveticaNeueCyr";src:url(/assets/fonts/HelveticaNeueCyr/HelveticaNeueCyr-UltraLightItalic.eot);src:local("HelveticaNeueCyr-UltraLightItalic"),url(/assets/fonts/HelveticaNeueCyr/HelveticaNeueCyr-UltraLightItalic.eot?#iefix) format("embedded-opentype"),url(/assets/fonts/HelveticaNeueCyr/HelveticaNeueCyr-UltraLightItalic.woff) format("woff"),url(/assets/fonts/HelveticaNeueCyr/HelveticaNeueCyr-UltraLightItalic.ttf) format("truetype");font-weight:200;font-style:italic}@font-face{font-family:"HelveticaNeueCyr";src:url(/assets/fonts/HelveticaNeueCyr/HelveticaNeueCyr-BlackItalic.eot);src:local("HelveticaNeueCyr-BlackItalic"),url(/assets/fonts/HelveticaNeueCyr/HelveticaNeueCyr-BlackItalic.eot?#iefix) format("embedded-opentype"),url(/assets/fonts/HelveticaNeueCyr/HelveticaNeueCyr-BlackItalic.woff) format("woff"),url(/assets/fonts/HelveticaNeueCyr/HelveticaNeueCyr-BlackItalic.ttf) format("truetype");font-weight:900;font-style:italic}@font-face{font-family:"HelveticaNeueCyr";src:url(/assets/fonts/HelveticaNeueCyr/HelveticaNeueCyr-ThinItalic.eot);src:local("HelveticaNeueCyr-ThinItalic"),url(/assets/fonts/HelveticaNeueCyr/HelveticaNeueCyr-ThinItalic.eot?#iefix) format("embedded-opentype"),url(/assets/fonts/HelveticaNeueCyr/HelveticaNeueCyr-ThinItalic.woff) format("woff"),url(/assets/fonts/HelveticaNeueCyr/HelveticaNeueCyr-ThinItalic.ttf) format("truetype");font-weight:100;font-style:italic}@font-face{font-family:"HelveticaNeueCyr";src:url(/assets/fonts/HelveticaNeueCyr/HelveticaNeueCyr-MediumItalic.eot);src:local("HelveticaNeueCyr-MediumItalic"),url(/assets/fonts/HelveticaNeueCyr/HelveticaNeueCyr-MediumItalic.eot?#iefix) format("embedded-opentype"),url(/assets/fonts/HelveticaNeueCyr/HelveticaNeueCyr-MediumItalic.woff) format("woff"),url(/assets/fonts/HelveticaNeueCyr/HelveticaNeueCyr-MediumItalic.ttf) format("truetype");font-weight:500;font-style:italic}@font-face{font-family:"HelveticaNeueCyr";src:url(/assets/fonts/HelveticaNeueCyr/HelveticaNeueCyr-LightItalic.eot);src:local("HelveticaNeueCyr-LightItalic"),url(/assets/fonts/HelveticaNeueCyr/HelveticaNeueCyr-LightItalic.eot?#iefix) format("embedded-opentype"),url(/assets/fonts/HelveticaNeueCyr/HelveticaNeueCyr-LightItalic.woff) format("woff"),url(/assets/fonts/HelveticaNeueCyr/HelveticaNeueCyr-LightItalic.ttf) format("truetype");font-weight:300;font-style:italic}@font-face{font-family:"HelveticaNeueCyr";src:url(/assets/fonts/HelveticaNeueCyr/HelveticaNeueCyr-UltraLight.eot);src:local("HelveticaNeueCyr-UltraLight"),url(/assets/fonts/HelveticaNeueCyr/HelveticaNeueCyr-UltraLight.eot?#iefix) format("embedded-opentype"),url(/assets/fonts/HelveticaNeueCyr/HelveticaNeueCyr-UltraLight.woff) format("woff"),url(/assets/fonts/HelveticaNeueCyr/HelveticaNeueCyr-UltraLight.ttf) format("truetype");font-weight:200;font-style:normal}@font-face{font-family:"HelveticaNeueCyr";src:url(/assets/fonts/HelveticaNeueCyr/HelveticaNeueCyr-BoldItalic.eot);src:local("HelveticaNeueCyr-BoldItalic"),url(/assets/fonts/HelveticaNeueCyr/HelveticaNeueCyr-BoldItalic.eot?#iefix) format("embedded-opentype"),url(/assets/fonts/HelveticaNeueCyr/HelveticaNeueCyr-BoldItalic.woff) format("woff"),url(/assets/fonts/HelveticaNeueCyr/HelveticaNeueCyr-BoldItalic.ttf) format("truetype");font-weight:700;font-style:italic}@font-face{font-family:"HelveticaNeueCyr";src:url(/assets/fonts/HelveticaNeueCyr/HelveticaNeueCyr-Italic.eot);src:local("HelveticaNeueCyr-Italic"),url(/assets/fonts/HelveticaNeueCyr/HelveticaNeueCyr-Italic.eot?#iefix) format("embedded-opentype"),url(/assets/fonts/HelveticaNeueCyr/HelveticaNeueCyr-Italic.woff) format("woff"),url(/assets/fonts/HelveticaNeueCyr/HelveticaNeueCyr-Italic.ttf) format("truetype");font-weight:500;font-style:italic}@font-face{font-family:"HelveticaNeueCyr";src:url(/assets/fonts/HelveticaNeueCyr/HelveticaNeueCyr-Roman.eot);src:local("HelveticaNeueCyr-Roman"),url(/assets/fonts/HelveticaNeueCyr/HelveticaNeueCyr-Roman.eot?#iefix) format("embedded-opentype"),url(/assets/fonts/HelveticaNeueCyr/HelveticaNeueCyr-Roman.woff) format("woff"),url(/assets/fonts/HelveticaNeueCyr/HelveticaNeueCyr-Roman.ttf) format("truetype");font-weight:400;font-style:normal}@font-face{font-family:"HelveticaNeueCyr";src:url(/assets/fonts/HelveticaNeueCyr/HelveticaNeueCyr-Bold.eot);src:local("HelveticaNeueCyr-Bold"),url(/assets/fonts/HelveticaNeueCyr/HelveticaNeueCyr-Bold.eot?#iefix) format("embedded-opentype"),url(/assets/fonts/HelveticaNeueCyr/HelveticaNeueCyr-Bold.woff) format("woff"),url(/assets/fonts/HelveticaNeueCyr/HelveticaNeueCyr-Bold.ttf) format("truetype");font-weight:700;font-style:normal}@font-face{font-family:"HelveticaNeueCyr";src:url(/assets/fonts/HelveticaNeueCyr/HelveticaNeueCyr-Light.eot);src:local("HelveticaNeueCyr-Light"),url(/assets/fonts/HelveticaNeueCyr/HelveticaNeueCyr-Light.eot?#iefix) format("embedded-opentype"),url(/assets/fonts/HelveticaNeueCyr/HelveticaNeueCyr-Light.woff) format("woff"),url(/assets/fonts/HelveticaNeueCyr/HelveticaNeueCyr-Light.ttf) format("truetype");font-weight:300;font-style:normal}@font-face{font-family:"HelveticaNeueCyr";src:url(/assets/fonts/HelveticaNeueCyr/HelveticaNeueCyr-Thin.eot);src:local("HelveticaNeueCyr-Thin"),url(/assets/fonts/HelveticaNeueCyr/HelveticaNeueCyr-Thin.eot?#iefix) format("embedded-opentype"),url(/assets/fonts/HelveticaNeueCyr/HelveticaNeueCyr-Thin.woff) format("woff"),url(/assets/fonts/HelveticaNeueCyr/HelveticaNeueCyr-Thin.ttf) format("truetype");font-weight:100;font-style:normal}',
        '',
      ]),
        (t.exports = e);
    },
    function(t, e, n) {
      var content = n(218);
      'string' == typeof content && (content = [[t.i, content, '']]),
        content.locals && (t.exports = content.locals);
      (0, n(9).default)('5cde8a16', content, !0, { sourceMap: !1 });
    },
    function(t, e, n) {
      var r = n(8),
        o = n(219),
        c = n(220),
        l = n(221),
        f = n(222),
        d = n(223),
        h = n(224),
        m = n(225),
        v = n(226),
        y = n(227),
        w = n(228),
        x = n(229),
        C = n(230),
        _ = n(231),
        H = n(232),
        N = n(233),
        O = n(234),
        j = n(235),
        I = n(236),
        k = n(237),
        D = n(238),
        E = n(239),
        $ = n(240),
        S = n(241),
        L = n(242),
        A = n(243),
        M = n(244),
        T = n(245),
        P = n(246),
        R = n(247),
        V = n(248),
        B = n(249),
        z = n(250),
        U = n(251),
        Z = n(252),
        W = n(253),
        F = n(254),
        G = n(255),
        Y = n(256),
        K = n(257),
        X = n(258),
        J = n(259),
        Q = n(260),
        tt = n(261),
        et = n(262),
        nt = n(263),
        ot = n(264),
        at = n(265),
        it = n(266),
        st = n(267),
        ct = n(268),
        lt = n(269),
        ft = n(270),
        ut = n(271),
        pt = n(272),
        ht = n(273),
        mt = n(274),
        vt = n(275),
        yt = n(276),
        gt = n(277),
        wt = n(278),
        xt = n(279),
        bt = n(280),
        Ct = n(281),
        _t = n(282),
        Ht = n(283),
        Nt = n(284),
        Ot = n(285),
        jt = n(286),
        It = n(287),
        kt = n(288),
        Dt = n(289),
        Et = n(290),
        $t = n(291),
        St = n(292),
        Lt = n(293),
        At = n(294),
        Mt = n(295),
        Tt = n(296),
        Pt = n(297),
        Rt = n(298),
        Vt = n(299);
      e = r(!1);
      var Bt = o(c),
        zt = o(c, { hash: '?#iefix' }),
        Ut = o(l),
        Zt = o(f),
        Wt = o(d),
        qt = o(h),
        Ft = o(h, { hash: '?#iefix' }),
        Gt = o(m),
        Yt = o(v),
        Kt = o(y),
        Xt = o(w),
        Jt = o(w, { hash: '?#iefix' }),
        Qt = o(x),
        te = o(C),
        ee = o(_),
        ne = o(H),
        re = o(H, { hash: '?#iefix' }),
        oe = o(N),
        ae = o(O),
        ie = o(j),
        se = o(I),
        ce = o(I, { hash: '?#iefix' }),
        le = o(k),
        fe = o(D),
        ue = o(E),
        pe = o($),
        de = o($, { hash: '?#iefix' }),
        he = o(S),
        me = o(L),
        ve = o(A),
        ye = o(M),
        ge = o(M, { hash: '?#iefix' }),
        we = o(T),
        xe = o(P),
        be = o(R),
        Ce = o(V),
        _e = o(V, { hash: '?#iefix' }),
        He = o(B),
        Ne = o(z),
        Oe = o(U),
        je = o(Z),
        Ie = o(Z, { hash: '?#iefix' }),
        ke = o(W),
        De = o(F),
        Ee = o(G),
        $e = o(Y),
        Se = o(Y, { hash: '?#iefix' }),
        Le = o(K),
        Ae = o(X),
        Me = o(J),
        Te = o(Q),
        Pe = o(Q, { hash: '?#iefix' }),
        Re = o(tt),
        Ve = o(et),
        Be = o(nt),
        ze = o(ot),
        Ue = o(ot, { hash: '?#iefix' }),
        Ze = o(at),
        We = o(it),
        qe = o(st),
        Fe = o(ct),
        Ge = o(ct, { hash: '?#iefix' }),
        Ye = o(lt),
        Ke = o(ft),
        Xe = o(ut),
        Je = o(pt),
        Qe = o(pt, { hash: '?#iefix' }),
        tn = o(ht),
        en = o(mt),
        nn = o(vt),
        rn = o(yt),
        on = o(yt, { hash: '?#iefix' }),
        an = o(gt),
        sn = o(wt),
        cn = o(xt),
        ln = o(bt),
        fn = o(bt, { hash: '?#iefix' }),
        un = o(Ct),
        pn = o(_t),
        dn = o(Ht),
        hn = o(Nt),
        mn = o(Nt, { hash: '?#iefix' }),
        vn = o(Ot),
        yn = o(jt),
        gn = o(It),
        wn = o(kt),
        xn = o(kt, { hash: '?#iefix' }),
        bn = o(Dt),
        Cn = o(Et),
        _n = o($t),
        Hn = o(St),
        Nn = o(St, { hash: '?#iefix' }),
        On = o(Lt),
        jn = o(At),
        In = o(Mt),
        kn = o(Tt),
        Dn = o(Tt, { hash: '?#iefix' }),
        En = o(Pt),
        $n = o(Rt),
        Sn = o(Vt);
      e.push([
        t.i,
        '@font-face{font-family:"Helvetica Now Display";src:url(' +
          Bt +
          ');src:local("HelveticaNowDisplay-ThinIta"),url(' +
          zt +
          ') format("embedded-opentype"),url(' +
          Ut +
          ') format("woff2"),url(' +
          Zt +
          ') format("woff"),url(' +
          Wt +
          ') format("truetype");font-weight:100;font-style:italic}@font-face{font-family:"Helvetica Now Display";src:url(' +
          qt +
          ');src:local("HelveticaNowDisplay-Light"),url(' +
          Ft +
          ') format("embedded-opentype"),url(' +
          Gt +
          ') format("woff2"),url(' +
          Yt +
          ') format("woff"),url(' +
          Kt +
          ') format("truetype");font-weight:300;font-style:normal}@font-face{font-family:"Helvetica Now Display";src:url(' +
          Xt +
          ');src:local("HelveticaNowDisplay-BoldIta"),url(' +
          Jt +
          ') format("embedded-opentype"),url(' +
          Qt +
          ') format("woff2"),url(' +
          te +
          ') format("woff"),url(' +
          ee +
          ') format("truetype");font-weight:700;font-style:italic}@font-face{font-family:"Helvetica Now Display";src:url(' +
          ne +
          ');src:local("HelveticaNowDisplay-RegIta"),url(' +
          re +
          ') format("embedded-opentype"),url(' +
          oe +
          ') format("woff2"),url(' +
          ae +
          ') format("woff"),url(' +
          ie +
          ') format("truetype");font-weight:400;font-style:italic}@font-face{font-family:"Helvetica Now Display";src:url(' +
          se +
          ');src:local("HelveticaNowDisplay-ExtLtIta"),url(' +
          ce +
          ') format("embedded-opentype"),url(' +
          le +
          ') format("woff2"),url(' +
          fe +
          ') format("woff"),url(' +
          ue +
          ') format("truetype");font-weight:300;font-style:italic}@font-face{font-family:"Helvetica Now Display";src:url(' +
          pe +
          ');src:local("HelveticaNowDisplay-MedIta"),url(' +
          de +
          ') format("embedded-opentype"),url(' +
          he +
          ') format("woff2"),url(' +
          me +
          ') format("woff"),url(' +
          ve +
          ') format("truetype");font-weight:500;font-style:italic}@font-face{font-family:"Helvetica Now Display";src:url(' +
          ye +
          ');src:local("HelveticaNowDisplay-ExtLt"),url(' +
          ge +
          ') format("embedded-opentype"),url(' +
          we +
          ') format("woff2"),url(' +
          xe +
          ') format("woff"),url(' +
          be +
          ') format("truetype");font-weight:300;font-style:normal}@font-face{font-family:"Helvetica Now Display";src:url(' +
          Ce +
          ');src:local("HelveticaNowDisplay-ExtBlk"),url(' +
          _e +
          ') format("embedded-opentype"),url(' +
          He +
          ') format("woff2"),url(' +
          Ne +
          ') format("woff"),url(' +
          Oe +
          ') format("truetype");font-weight:400;font-style:normal}@font-face{font-family:"Helvetica Now Display";src:url(' +
          je +
          ');src:local("HelveticaNowDisplay-Bold"),url(' +
          Ie +
          ') format("embedded-opentype"),url(' +
          ke +
          ') format("woff2"),url(' +
          De +
          ') format("woff"),url(' +
          Ee +
          ') format("truetype");font-weight:700;font-style:normal}@font-face{font-family:"Helvetica Now Display";src:url(' +
          $e +
          ');src:local("HelveticaNowDisplay-ExtBdIta"),url(' +
          Se +
          ') format("embedded-opentype"),url(' +
          Le +
          ') format("woff2"),url(' +
          Ae +
          ') format("woff"),url(' +
          Me +
          ') format("truetype");font-weight:800;font-style:italic}@font-face{font-family:"Helvetica Now Display";src:url(' +
          Te +
          ');src:local("HelveticaNowDisplay-Regular"),url(' +
          Pe +
          ') format("embedded-opentype"),url(' +
          Re +
          ') format("woff2"),url(' +
          Ve +
          ') format("woff"),url(' +
          Be +
          ') format("truetype");font-weight:400;font-style:normal}@font-face{font-family:"Helvetica Now Display";src:url(' +
          ze +
          ');src:local("HelveticaNowDisplay-ExtBlkIta"),url(' +
          Ue +
          ') format("embedded-opentype"),url(' +
          Ze +
          ') format("woff2"),url(' +
          We +
          ') format("woff"),url(' +
          qe +
          ') format("truetype");font-weight:400;font-style:italic}@font-face{font-family:"Helvetica Now Display";src:url(' +
          Fe +
          ');src:local("HelveticaNowDisplay-Thin"),url(' +
          Ge +
          ') format("embedded-opentype"),url(' +
          Ye +
          ') format("woff2"),url(' +
          Ke +
          ') format("woff"),url(' +
          Xe +
          ') format("truetype");font-weight:100;font-style:normal}@font-face{font-family:"Helvetica Now Display";src:url(' +
          Je +
          ');src:local("HelveticaNowDisplay-LightIta"),url(' +
          Qe +
          ') format("embedded-opentype"),url(' +
          tn +
          ') format("woff2"),url(' +
          en +
          ') format("woff"),url(' +
          nn +
          ') format("truetype");font-weight:300;font-style:italic}@font-face{font-family:"Helvetica Now Display";src:url(' +
          rn +
          ');src:local("HelveticaNowDisplay-ExtraBold"),url(' +
          on +
          ') format("embedded-opentype"),url(' +
          an +
          ') format("woff2"),url(' +
          sn +
          ') format("woff"),url(' +
          cn +
          ') format("truetype");font-weight:800;font-style:normal}@font-face{font-family:"Helvetica Now Display";src:url(' +
          ln +
          ');src:local("HelveticaNowDisplay-Medium"),url(' +
          fn +
          ') format("embedded-opentype"),url(' +
          un +
          ') format("woff2"),url(' +
          pn +
          ') format("woff"),url(' +
          dn +
          ') format("truetype");font-weight:500;font-style:normal}@font-face{font-family:"Helvetica Now Display";src:url(' +
          hn +
          ');src:local("HelveticaNowDisplay-HairlineI"),url(' +
          mn +
          ') format("embedded-opentype"),url(' +
          vn +
          ') format("woff2"),url(' +
          yn +
          ') format("woff"),url(' +
          gn +
          ') format("truetype");font-weight:100;font-style:italic}@font-face{font-family:"Helvetica Now Display";src:url(' +
          wn +
          ');src:local("HelveticaNowDisplay-BlackIta"),url(' +
          xn +
          ') format("embedded-opentype"),url(' +
          bn +
          ') format("woff2"),url(' +
          Cn +
          ') format("woff"),url(' +
          _n +
          ') format("truetype");font-weight:900;font-style:italic}@font-face{font-family:"Helvetica Now Display";src:url(' +
          Hn +
          ');src:local("HelveticaNowDisplay-Black"),url(' +
          Nn +
          ') format("embedded-opentype"),url(' +
          On +
          ') format("woff2"),url(' +
          jn +
          ') format("woff"),url(' +
          In +
          ') format("truetype");font-weight:900;font-style:normal}@font-face{font-family:"Helvetica Now Display";src:url(' +
          kn +
          ');src:local("HelveticaNowDisplay-Hairline"),url(' +
          Dn +
          ') format("embedded-opentype"),url(' +
          En +
          ') format("woff2"),url(' +
          $n +
          ') format("woff"),url(' +
          Sn +
          ') format("truetype");font-weight:100;font-style:normal}',
        '',
      ]),
        (t.exports = e);
    },
    ,
    function(t, e, n) {
      t.exports = n.p + 'fonts/HelveticaNowDisplay-ThinIta.bbb1f16.eot';
    },
    function(t, e, n) {
      t.exports = n.p + 'fonts/HelveticaNowDisplay-ThinIta.63b9a54.woff2';
    },
    function(t, e, n) {
      t.exports = n.p + 'fonts/HelveticaNowDisplay-ThinIta.3022e0e.woff';
    },
    function(t, e, n) {
      t.exports = n.p + 'fonts/HelveticaNowDisplay-ThinIta.7f8d691.ttf';
    },
    function(t, e, n) {
      t.exports = n.p + 'fonts/HelveticaNowDisplay-Light.3bd81c6.eot';
    },
    function(t, e, n) {
      t.exports = n.p + 'fonts/HelveticaNowDisplay-Light.29cc8c6.woff2';
    },
    function(t, e, n) {
      t.exports = n.p + 'fonts/HelveticaNowDisplay-Light.819cd4f.woff';
    },
    function(t, e, n) {
      t.exports = n.p + 'fonts/HelveticaNowDisplay-Light.ce18e2a.ttf';
    },
    function(t, e, n) {
      t.exports = n.p + 'fonts/HelveticaNowDisplay-BoldIta.7703c7f.eot';
    },
    function(t, e, n) {
      t.exports = n.p + 'fonts/HelveticaNowDisplay-BoldIta.d98eaf4.woff2';
    },
    function(t, e, n) {
      t.exports = n.p + 'fonts/HelveticaNowDisplay-BoldIta.0c9212d.woff';
    },
    function(t, e, n) {
      t.exports = n.p + 'fonts/HelveticaNowDisplay-BoldIta.a95de8b.ttf';
    },
    function(t, e, n) {
      t.exports = n.p + 'fonts/HelveticaNowDisplay-RegIta.b2f3365.eot';
    },
    function(t, e, n) {
      t.exports = n.p + 'fonts/HelveticaNowDisplay-RegIta.28f8b91.woff2';
    },
    function(t, e, n) {
      t.exports = n.p + 'fonts/HelveticaNowDisplay-RegIta.095361c.woff';
    },
    function(t, e, n) {
      t.exports = n.p + 'fonts/HelveticaNowDisplay-RegIta.83e1526.ttf';
    },
    function(t, e, n) {
      t.exports = n.p + 'fonts/HelveticaNowDisplay-ExtLtIta.8bad932.eot';
    },
    function(t, e, n) {
      t.exports = n.p + 'fonts/HelveticaNowDisplay-ExtLtIta.229812a.woff2';
    },
    function(t, e, n) {
      t.exports = n.p + 'fonts/HelveticaNowDisplay-ExtLtIta.c3b609a.woff';
    },
    function(t, e, n) {
      t.exports = n.p + 'fonts/HelveticaNowDisplay-ExtLtIta.534b113.ttf';
    },
    function(t, e, n) {
      t.exports = n.p + 'fonts/HelveticaNowDisplay-MedIta.a697459.eot';
    },
    function(t, e, n) {
      t.exports = n.p + 'fonts/HelveticaNowDisplay-MedIta.e278e13.woff2';
    },
    function(t, e, n) {
      t.exports = n.p + 'fonts/HelveticaNowDisplay-MedIta.2480c3d.woff';
    },
    function(t, e, n) {
      t.exports = n.p + 'fonts/HelveticaNowDisplay-MedIta.8593d0b.ttf';
    },
    function(t, e, n) {
      t.exports = n.p + 'fonts/HelveticaNowDisplay-ExtLt.911b6d0.eot';
    },
    function(t, e, n) {
      t.exports = n.p + 'fonts/HelveticaNowDisplay-ExtLt.c189201.woff2';
    },
    function(t, e, n) {
      t.exports = n.p + 'fonts/HelveticaNowDisplay-ExtLt.32a2da4.woff';
    },
    function(t, e, n) {
      t.exports = n.p + 'fonts/HelveticaNowDisplay-ExtLt.b356e75.ttf';
    },
    function(t, e, n) {
      t.exports = n.p + 'fonts/HelveticaNowDisplay-ExtBlk.832cfdc.eot';
    },
    function(t, e, n) {
      t.exports = n.p + 'fonts/HelveticaNowDisplay-ExtBlk.0c1d153.woff2';
    },
    function(t, e, n) {
      t.exports = n.p + 'fonts/HelveticaNowDisplay-ExtBlk.9bfe2f4.woff';
    },
    function(t, e, n) {
      t.exports = n.p + 'fonts/HelveticaNowDisplay-ExtBlk.b90f54c.ttf';
    },
    function(t, e, n) {
      t.exports = n.p + 'fonts/HelveticaNowDisplay-Bold.405f928.eot';
    },
    function(t, e, n) {
      t.exports = n.p + 'fonts/HelveticaNowDisplay-Bold.7192af0.woff2';
    },
    function(t, e, n) {
      t.exports = n.p + 'fonts/HelveticaNowDisplay-Bold.fc417ab.woff';
    },
    function(t, e, n) {
      t.exports = n.p + 'fonts/HelveticaNowDisplay-Bold.be1fe31.ttf';
    },
    function(t, e, n) {
      t.exports = n.p + 'fonts/HelveticaNowDisplay-ExtBdIta.25ee98c.eot';
    },
    function(t, e, n) {
      t.exports = n.p + 'fonts/HelveticaNowDisplay-ExtBdIta.2e88641.woff2';
    },
    function(t, e, n) {
      t.exports = n.p + 'fonts/HelveticaNowDisplay-ExtBdIta.0c7270c.woff';
    },
    function(t, e, n) {
      t.exports = n.p + 'fonts/HelveticaNowDisplay-ExtBdIta.a0d004a.ttf';
    },
    function(t, e, n) {
      t.exports = n.p + 'fonts/HelveticaNowDisplay-Regular.35e4b36.eot';
    },
    function(t, e, n) {
      t.exports = n.p + 'fonts/HelveticaNowDisplay-Regular.01db325.woff2';
    },
    function(t, e, n) {
      t.exports = n.p + 'fonts/HelveticaNowDisplay-Regular.05963f1.woff';
    },
    function(t, e, n) {
      t.exports = n.p + 'fonts/HelveticaNowDisplay-Regular.9632144.ttf';
    },
    function(t, e, n) {
      t.exports = n.p + 'fonts/HelveticaNowDisplay-ExtBlkIta.1b3487c.eot';
    },
    function(t, e, n) {
      t.exports = n.p + 'fonts/HelveticaNowDisplay-ExtBlkIta.53481dd.woff2';
    },
    function(t, e, n) {
      t.exports = n.p + 'fonts/HelveticaNowDisplay-ExtBlkIta.99f0ed2.woff';
    },
    function(t, e, n) {
      t.exports = n.p + 'fonts/HelveticaNowDisplay-ExtBlkIta.6626bd7.ttf';
    },
    function(t, e, n) {
      t.exports = n.p + 'fonts/HelveticaNowDisplay-Thin.05cde3f.eot';
    },
    function(t, e, n) {
      t.exports = n.p + 'fonts/HelveticaNowDisplay-Thin.d209e85.woff2';
    },
    function(t, e, n) {
      t.exports = n.p + 'fonts/HelveticaNowDisplay-Thin.d4e91d7.woff';
    },
    function(t, e, n) {
      t.exports = n.p + 'fonts/HelveticaNowDisplay-Thin.2b89604.ttf';
    },
    function(t, e, n) {
      t.exports = n.p + 'fonts/HelveticaNowDisplay-LightIta.182e232.eot';
    },
    function(t, e, n) {
      t.exports = n.p + 'fonts/HelveticaNowDisplay-LightIta.d8d5244.woff2';
    },
    function(t, e, n) {
      t.exports = n.p + 'fonts/HelveticaNowDisplay-LightIta.8fae46f.woff';
    },
    function(t, e, n) {
      t.exports = n.p + 'fonts/HelveticaNowDisplay-LightIta.c0b592c.ttf';
    },
    function(t, e, n) {
      t.exports = n.p + 'fonts/HelveticaNowDisplay-ExtraBold.76a16b3.eot';
    },
    function(t, e, n) {
      t.exports = n.p + 'fonts/HelveticaNowDisplay-ExtraBold.438c8ad.woff2';
    },
    function(t, e, n) {
      t.exports = n.p + 'fonts/HelveticaNowDisplay-ExtraBold.c09052a.woff';
    },
    function(t, e, n) {
      t.exports = n.p + 'fonts/HelveticaNowDisplay-ExtraBold.d62cd57.ttf';
    },
    function(t, e, n) {
      t.exports = n.p + 'fonts/HelveticaNowDisplay-Medium.6627fae.eot';
    },
    function(t, e, n) {
      t.exports = n.p + 'fonts/HelveticaNowDisplay-Medium.87caf42.woff2';
    },
    function(t, e, n) {
      t.exports = n.p + 'fonts/HelveticaNowDisplay-Medium.8f83f39.woff';
    },
    function(t, e, n) {
      t.exports = n.p + 'fonts/HelveticaNowDisplay-Medium.53b5d05.ttf';
    },
    function(t, e, n) {
      t.exports = n.p + 'fonts/HelveticaNowDisplay-HairlineI.b539c8c.eot';
    },
    function(t, e, n) {
      t.exports = n.p + 'fonts/HelveticaNowDisplay-HairlineI.0257ff3.woff2';
    },
    function(t, e, n) {
      t.exports = n.p + 'fonts/HelveticaNowDisplay-HairlineI.c9cd905.woff';
    },
    function(t, e, n) {
      t.exports = n.p + 'fonts/HelveticaNowDisplay-HairlineI.91e42c2.ttf';
    },
    function(t, e, n) {
      t.exports = n.p + 'fonts/HelveticaNowDisplay-BlackIta.857738f.eot';
    },
    function(t, e, n) {
      t.exports = n.p + 'fonts/HelveticaNowDisplay-BlackIta.d1aed04.woff2';
    },
    function(t, e, n) {
      t.exports = n.p + 'fonts/HelveticaNowDisplay-BlackIta.629bef5.woff';
    },
    function(t, e, n) {
      t.exports = n.p + 'fonts/HelveticaNowDisplay-BlackIta.8a3270f.ttf';
    },
    function(t, e, n) {
      t.exports = n.p + 'fonts/HelveticaNowDisplay-Black.0b5997b.eot';
    },
    function(t, e, n) {
      t.exports = n.p + 'fonts/HelveticaNowDisplay-Black.da431e7.woff2';
    },
    function(t, e, n) {
      t.exports = n.p + 'fonts/HelveticaNowDisplay-Black.d47f7a8.woff';
    },
    function(t, e, n) {
      t.exports = n.p + 'fonts/HelveticaNowDisplay-Black.99a7772.ttf';
    },
    function(t, e, n) {
      t.exports = n.p + 'fonts/HelveticaNowDisplay-Hairline.e41abc5.eot';
    },
    function(t, e, n) {
      t.exports = n.p + 'fonts/HelveticaNowDisplay-Hairline.dde6053.woff2';
    },
    function(t, e, n) {
      t.exports = n.p + 'fonts/HelveticaNowDisplay-Hairline.e993bde.woff';
    },
    function(t, e, n) {
      t.exports = n.p + 'fonts/HelveticaNowDisplay-Hairline.b414a1f.ttf';
    },
    function(t, e, n) {
      var content = n(301);
      'string' == typeof content && (content = [[t.i, content, '']]),
        content.locals && (t.exports = content.locals);
      (0, n(9).default)('70b1f7ae', content, !0, { sourceMap: !1 });
    },
    function(t, e, n) {
      (e = n(8)(!1)).push([
        t.i,
        'a,abbr,acronym,address,applet,article,aside,audio,b,big,blockquote,body,canvas,caption,center,cite,code,dd,del,details,dfn,div,dl,dt,em,embed,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,header,hgroup,html,i,iframe,img,input,ins,kbd,label,legend,li,mark,menu,nav,object,ol,option,output,p,pre,q,ruby,s,samp,section,small,span,strike,strong,sub,summary,sup,table,tbody,td,tfoot,th,thead,time,tr,tt,u,ul,var,video{margin:0;padding:0;border:0;font-family:Gotham Pro;text-decoration:none}input,textarea{outline:none}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}ol,ul{list-style:none}blockquote,q{quotes:none}button{font-family:Gotham Pro;border:none;background:none;padding:0}button:active,button:focus{outline:none}blockquote:after,blockquote:before,q:after,q:before{content:none}table{border-collapse:collapse;border-spacing:0}',
        '',
      ]),
        (t.exports = e);
    },
    function(t, e, n) {
      var content = n(303);
      'string' == typeof content && (content = [[t.i, content, '']]),
        content.locals && (t.exports = content.locals);
      (0, n(9).default)('398bac6c', content, !0, { sourceMap: !1 });
    },
    function(t, e, n) {
      (e = n(8)(!1)).push([
        t.i,
        'a{cursor:pointer}.text-color-white{color:#fff!important}.block-title{font-size:19.2px;line-height:156%;text-transform:uppercase}.block-title,.content-title{font-family:Helvetica;font-style:normal;font-weight:400;color:#000}.content-title{font-size:58.59px;line-height:166%}.content-title b{font-family:Helvetica}.content-title-bold{font-weight:700}.content-p{font-family:Garamond}.content-btn-text,.content-p{font-style:normal;font-weight:400;font-size:24px;line-height:166%;color:#000}.content-btn-text{font-family:Helvetica}.main-page_start-text{font-family:Helvetica;font-family:Helvetica Now Display;font-size:73.24px;line-height:109%}.main-page_small-text,.main-page_start-text{font-style:normal;font-weight:700;letter-spacing:-.05em;color:#fff}.main-page_small-text{font-family:Helvetica;font-size:24px;line-height:100%}.text-very-small{font-family:Helvetica;font-style:normal;font-weight:300;font-size:15.36px;line-height:166%;letter-spacing:-.04em;color:#000}.item-project-title-text{font-family:Helvetica Now Display;font-style:normal;font-weight:700;font-size:46.88px;line-height:141%;letter-spacing:-.04em;color:#fff}.item-project_description_value{font-size:30px}.item-project_description_value,.item-project_pres-view{font-family:Helvetica;font-style:normal;font-weight:400;line-height:166%;color:#000}.item-project_pres-view{font-size:18px;-webkit-text-decoration-line:underline;text-decoration-line:underline}.nav-menu-btn-text{font-family:SF Pro Display;font-style:normal;font-size:73.24px;line-height:109%;text-align:center;letter-spacing:-.05em;color:#000}.footer-contacts{font-family:Helvetica;font-style:normal;font-weight:300;font-size:19.2px;line-height:156%;color:#000}.team-img-description-text{font-family:Garamond;font-style:normal;font-weight:700;font-size:37.5px;line-height:107.5%;letter-spacing:-.04em;color:#fff}.date-text{font-family:Helvetica;font-style:normal;font-weight:300;font-size:15.36px;line-height:100%;text-transform:capitalize;color:#000;margin-top:17px}@media screen and (max-width:1280px){.main-page_start-text,.nav-menu-btn-text{font-size:48px}}@media screen and (max-width:1024px){.content-p{font-size:18px}.content-title{font-size:36px}.content-btn-text{font-size:20px}.item-project-title-text{font-size:36px}.footer-contacts{font-size:14px}.item-project_description_value{font-size:24px}}@media screen and (max-width:380px){.item-project_description_value{font-size:18px}}',
        '',
      ]),
        (t.exports = e);
    },
    function(t, e, n) {
      var content = n(305);
      'string' == typeof content && (content = [[t.i, content, '']]),
        content.locals && (t.exports = content.locals);
      (0, n(9).default)('2d79f4b2', content, !0, { sourceMap: !1 });
    },
    function(t, e, n) {
      (e = n(8)(!1)).push([
        t.i,
        'html{scroll-behavior:smooth}.main-page__content-title-position{margin:288px 0 0 var(--main-big-margin)}.main-content-margin-left-right{margin:0 var(--main-mini-margin) 0 var(--main-mini-margin)}.pages-content-margin-left-big{margin-left:var(--main-big-margin)}.value{display:flex;flex-direction:column;margin-bottom:37px;width:50%}@media screen and (max-width:1280px){.main-page__content-title-position{margin:108px 0 0 var(--main-big-margin)}}@media screen and (max-width:768px){.main-page__content-title-position{margin:58px 0 0 var(--main-big-margin)}}@media screen and (max-width:428px){.main-page__content-title-position{margin:108px 0 0 var(--main-big-margin)}.value{width:unset;margin-right:47px}.main-content-margin-left-right{margin:0 var(--main-mini-margin) 0 var(--main-big-margin)}}',
        '',
      ]),
        (t.exports = e);
    },
    function(t, e, n) {
      var content = n(307);
      'string' == typeof content && (content = [[t.i, content, '']]),
        content.locals && (t.exports = content.locals);
      (0, n(9).default)('4c38592e', content, !0, { sourceMap: !1 });
    },
    function(t, e, n) {
      (e = n(8)(!1)).push([
        t.i,
        '.process_content-title_margin{margin-top:83px;margin-bottom:35px;margin-left:var(--main-big-margin)}.process_img-wrap_height{height:800px}.process_img-description_margin-top{margin-top:33px}.process_img-description_width{max-width:810px!important}@media screen and (max-width:1280px){.process_img-wrap_height{height:580px!important}.process_img-description_margin-top{margin-top:43px}}@media screen and (max-width:1024px){.process_img-wrap_height{height:520px!important}.process_img-description_margin-top{margin-top:40px}}@media screen and (max-width:768px){.process_img-wrap_height{height:320px!important}}@media screen and (max-width:428px){.process_img-description_margin-top{margin-top:50px}.process_img-wrap_height{height:520px!important}}',
        '',
      ]),
        (t.exports = e);
    },
    function(t, e, n) {
      var content = n(309);
      'string' == typeof content && (content = [[t.i, content, '']]),
        content.locals && (t.exports = content.locals);
      (0, n(9).default)('5a3f476c', content, !0, { sourceMap: !1 });
    },
    function(t, e, n) {
      (e = n(8)(!1)).push([
        t.i,
        '.item-project_img-description_margin-top{margin-top:33px}.item-project_img-wrap_height{height:800px}.item-project_img-description_width{max-width:810px!important}@media screen and (max-width:1280px){.item-project_img-description_margin-top{margin-top:43px}.item-project_img-wrap_height{height:580px!important}.item-project_img-description_width{max-width:770px!important}}@media screen and (max-width:1024px){.item-project_img-description_margin-top{margin-top:40px}.item-project_img-wrap_height{height:520px!important}}@media screen and (max-width:768px){.item-project_img-description_width{max-width:512px!important}}@media screen and (max-width:768px){.item-project_img-description_margin-top{margin-top:50px}}',
        '',
      ]),
        (t.exports = e);
    },
    ,
    ,
    function(t, e, n) {
      'use strict';
      n(148);
    },
    function(t, e, n) {
      (e = n(8)(!1)).push([
        t.i,
        '.header[data-v-c9f54270]{width:100%;display:flex;justify-content:space-between;align-self:center;align-items:center;padding:60px 70px 0 66px}.header .header-logo[data-v-c9f54270]{width:110px;position:absolute;top:60px;left:66px;transition:1s}@media(max-width:1024px){.header .header-logo[data-v-c9f54270]{top:40px;left:30px}}.header .header-logo.animation[data-v-c9f54270]{transition:0s;top:50vh;left:310px;transform:translateY(-200%) scale(3)}@media(max-width:1024px){.header .header-logo.animation[data-v-c9f54270]{left:170px;transform:translateY(-150%) scale(2)}}@media(max-width:768px){.header .header-logo.animation[data-v-c9f54270]{left:120px}}@media(max-width:428px){.header .header-logo.animation[data-v-c9f54270]{left:100px}}.header .header-logo.black[data-v-c9f54270]{top:60px;left:66px;transition:0s;transform:translateY(0) scale(1)}@media(max-width:1024px){.header .header-logo.black[data-v-c9f54270]{top:40px;left:30px}}@media(max-width:428px){.header .header-logo.black[data-v-c9f54270]{top:30px;left:14px}}.header .header-logo.black svg path[data-v-c9f54270]{fill:#000}.header .header-logo svg[data-v-c9f54270]{width:100%;height:100%}.header .header-logo svg path[data-v-c9f54270]{fill:#fff}.header .header-burger-btn[data-v-c9f54270]{align-self:flex-start;position:relative;width:60px;height:60px;cursor:pointer;display:flex;align-items:center;justify-content:center}.header .header-burger-btn.black svg path[data-v-c9f54270]{stroke:#000}.header .header-burger-btn svg[data-v-c9f54270]{position:absolute;width:100%;height:100%}.header .header-burger-btn svg path[data-v-c9f54270]{transition:fill .3s}@media screen and (max-width:1280px){.header[data-v-c9f54270]{padding:40px 120px 0 90px}.header .header-logo[data-v-c9f54270]{width:70px}.header .header-burger-btn[data-v-c9f54270]{width:50px;height:50px}}@media screen and (max-width:1024px){.header[data-v-c9f54270]{padding:40px 40px 0 30px}}@media screen and (max-width:768px){.header[data-v-c9f54270]{padding:40px 40px 0 14px}}@media screen and (max-width:428px){.header[data-v-c9f54270]{padding:20px 24px 0 14px}.header .header-logo[data-v-c9f54270]{top:30px;left:14px;width:46px}.header .header-burger-btn[data-v-c9f54270]{width:42px;height:42px}}',
        '',
      ]),
        (t.exports = e);
    },
    function(t, e, n) {
      'use strict';
      n(149);
    },
    function(t, e, n) {
      (e = n(8)(!1)).push([
        t.i,
        '.nav-menu-modal[data-v-b5259064]{position:fixed;top:0;left:0;width:100vw;height:var(--winHeight);overflow:hidden;display:flex;flex-direction:column-reverse;background:linear-gradient(180deg,#a5c8db,#5480a3);z-index:900}.nav-menu-modal .content[data-v-b5259064]{display:flex;flex-direction:column;justify-content:space-between;height:calc(var(--winHeight)/2)}.nav-menu-modal .content .hrefs[data-v-b5259064]{max-width:1070px;width:100%;display:flex;align-self:center;align-items:center;justify-content:space-between;transform:translateY(-50%)}.nav-menu-modal .content .hrefs .nav-menu-btn[data-v-b5259064]{position:relative;cursor:pointer;font-family:Helvetica Now Display}.nav-menu-modal .content .hrefs .nav-menu-btn[data-v-b5259064]:after{content:"";position:absolute;top:100%;left:0;width:0;height:4px;background-color:#000;transition:width .3s ease-in-out}.nav-menu-modal .content .hrefs .nav-menu-btn[data-v-b5259064]:hover:after{width:100%}.nav-menu-modal .content .social-href[data-v-b5259064]{width:200px;height:20px;margin-bottom:100px;align-self:center;display:flex;align-items:center;justify-content:space-between}.nav-menu-modal .content .social-href .social-item[data-v-b5259064]{width:20px;height:20px;cursor:pointer}.nav-menu-modal .content .social-href .social-item svg[data-v-b5259064]{width:100%;height:100%}@media screen and (max-width:1280px){.nav-menu-modal .content .hrefs[data-v-b5259064]{width:52%}.nav-menu-modal .content .social-href[data-v-b5259064]{margin-bottom:50px}}@media screen and (max-width:1024px){.nav-menu-modal .content .hrefs[data-v-b5259064]{width:65%}.nav-menu-modal .content .social-href[data-v-b5259064]{margin-bottom:58px}}@media screen and (max-width:650px){.nav-menu-modal .content .hrefs[data-v-b5259064]{width:unset;height:356px;flex-direction:column}}@media screen and (max-width:400px){.nav-menu-modal .content .hrefs[data-v-b5259064]{width:unset;height:250px;flex-direction:column}}',
        '',
      ]),
        (t.exports = e);
    },
    function(t, e, n) {
      'use strict';
      n(150);
    },
    function(t, e, n) {
      (e = n(8)(!1)).push([
        t.i,
        '.footer[data-v-40d9efbe]{background-color:#fff;width:100%;display:flex;justify-content:space-between;align-items:flex-end;z-index:850;padding:200px 120px 70px;box-sizing:border-box;position:relative}.footer.people-footer[data-v-40d9efbe]{align-items:flex-start}.footer .map[data-v-40d9efbe]{width:calc(100% - 480px);height:610px}.footer .map .place-card[data-v-40d9efbe]{display:none}.footer .map iframe[data-v-40d9efbe]{width:100%;height:100%}@media(max-width:1280px){.footer[data-v-40d9efbe]{padding:100px 120px 40px}.footer.people-footer[data-v-40d9efbe]{padding-right:0}.footer .map[data-v-40d9efbe]{width:calc(100% - 300px);height:480px}}@media(max-width:1024px){.footer[data-v-40d9efbe]{padding:100px 40px 40px}.footer.people-footer[data-v-40d9efbe]{padding-right:0;padding-bottom:0}.footer .map[data-v-40d9efbe]{width:calc(100% - 300px);height:480px}}@media(max-width:425px){.footer[data-v-40d9efbe]{padding:50px 24px 40px}.footer.people-footer[data-v-40d9efbe]{padding-right:0;padding-bottom:50px;flex-direction:column}.footer .map[data-v-40d9efbe]{width:calc(100% + 24px);height:400px;margin-left:-24px;margin-top:50px}}.footer .block-title[data-v-40d9efbe]{margin-bottom:110px}.footer .content[data-v-40d9efbe]{display:flex;flex-direction:column}.footer .content .footer-logo[data-v-40d9efbe]{width:110px;cursor:pointer}.footer .content .footer-logo svg[data-v-40d9efbe]{width:100%;height:100%}.footer .content .footer-logo svg path[data-v-40d9efbe]{stroke:#000;fill:#000}.footer .content .contacts[data-v-40d9efbe]{width:100%;min-height:150px;display:flex;flex-direction:column}.footer .email[data-v-40d9efbe]{margin-top:auto;text-decoration:underline}@media screen and (max-width:1280px){.footer .content .footer-logo[data-v-40d9efbe]{width:70px}}@media screen and (max-width:1024px){.footer .content .footer-logo[data-v-40d9efbe]{width:70px}.footer .contacts[data-v-40d9efbe]{min-height:110px!important}}',
        '',
      ]),
        (t.exports = e);
    },
    function(t, e, n) {
      t.exports = n.p + 'img/contentImg1.80fc306.jpg';
    },
    function(t, e, n) {
      t.exports = n.p + 'img/contentImg2.9b51490.jpg';
    },
    function(t, e, n) {
      t.exports = n.p + 'img/contentImg3_2.c3dcba6.jpg';
    },
    function(t, e, n) {
      t.exports = n.p + 'img/contentImg4.406570a.jpg';
    },
    function(t, e, n) {
      'use strict';
      n(151);
    },
    function(t, e, n) {
      (e = n(8)(!1)).push([
        t.i,
        '.arrow-wrap{display:flex;height:100%;align-items:center;justify-content:space-between}.arrow-wrap .btn-left,.arrow-wrap .btn-right{min-width:100px;cursor:pointer}.arrow-wrap .btn-left svg,.arrow-wrap .btn-right svg{transform:translateX(0);transition:transform .3s;width:60px;mxa-height:100%}.arrow-wrap .btn-left svg .imgModalFill,.arrow-wrap .btn-right svg .imgModalFill{fill:#fff}.arrow-wrap .btn-left svg .projectFill,.arrow-wrap .btn-right svg .projectFill{fill:#000}.arrow-wrap .btn-left{text-align:right;margin-right:30px}.arrow-wrap .btn-left:hover svg{transform:translateX(-50%)}.arrow-wrap .btn-right{text-align:left;margin-left:30px}.arrow-wrap .btn-right:hover svg{transform:translateX(50%)}',
        '',
      ]),
        (t.exports = e);
    },
    function(t, e, n) {
      'use strict';
      n(152);
    },
    function(t, e, n) {
      (e = n(8)(!1)).push([
        t.i,
        '.img-modal[data-v-7096adc9]{position:fixed;top:0;left:0;width:100%;height:var(--winHeight);overflow:hidden;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,.7);z-index:1000}.img-modal .content[data-v-7096adc9]{width:80%;position:relative}.img-modal .content .image-list[data-v-7096adc9]{height:calc(var(--winHeight) - 230px);display:flex;align-items:center;justify-content:center;position:relative}.img-modal .content .image-list img[data-v-7096adc9]{max-width:100%;max-height:100%;width:auto;height:auto}.img-modal .content .btn-span[data-v-7096adc9]{display:flex;justify-content:space-between;position:absolute;top:0;left:0;width:100%;transform:translateY(-100%)}.img-modal .content .btn-span button[data-v-7096adc9]{width:60px;height:60px;padding:15px}.img-modal .content .paginator[data-v-7096adc9]{display:flex;padding:0 20px;position:absolute;box-sizing:border-box;bottom:0;left:0;width:100%;transform:translateY(calc(100% + 30px))}.img-modal .content .paginator .arrow-wrap[data-v-7096adc9]{width:100%}.img-modal .content .paginator .arrow-wrap .btn-left[data-v-7096adc9],.img-modal .content .paginator .arrow-wrap .btn-right[data-v-7096adc9]{min-width:60px;width:60px;margin:0}.modal-image-enter-active[data-v-7096adc9],.modal-image-leave-active[data-v-7096adc9]{transition:opacity 1s}.modal-image-enter[data-v-7096adc9],.modal-image-leave-to[data-v-7096adc9]{opacity:0;position:absolute;left:50%;top:50%;transform:translate(-50%,-50%)}',
        '',
      ]),
        (t.exports = e);
    },
    function(t, e, n) {
      'use strict';
      n(153);
    },
    function(t, e, n) {
      (e = n(8)(!1)).push([
        t.i,
        'html{position:relative;display:flex;justify-content:center;font-family:"Source Sans Pro";min-height:100vh;height:-webkit-max-content;height:-moz-max-content;height:max-content;overflow-x:hidden;overflow-y:scroll;--winHeight:100vh;--winWidth:100vw;--main-big-margin:220px;--main-mini-margin:120px;--main-very-mini-margin:40px}body{width:100%}.header-wrap{position:fixed;top:0;left:0;width:100vw;width:var(--winWidth);display:flex;align-items:center;z-index:1000}.nav-menu-fade-enter,.nav-menu-fade-leave-to{opacity:0;transform:scale(0)}.nav-menu-fade-enter-active,.nav-menu-fade-leave-active{transition:transform 1s,opacity 1s}@media screen and (max-width:1280px){html{--main-big-margin:200px;--main-very-mini-margin:40px}}@media screen and (max-width:1024px){html{--main-big-margin:110px;--main-mini-margin:40px;--main-very-mini-margin:20px}}@media screen and (max-width:768px){html{--main-big-margin:88px;--main-very-mini-margin:16px}}@media screen and (max-width:428px){html{--main-big-margin:72px;--main-mini-margin:24px}}',
        '',
      ]),
        (t.exports = e);
    },
    function(t, e, n) {
      'use strict';
      n.r(e);
      var r = n(0),
        o = n(11),
        c = n(102);
      r.default.use(o.a), new o.a.Store({ modules: { app: c.default } });
    },
  ],
  [[172, 9, 2, 10]],
]);
