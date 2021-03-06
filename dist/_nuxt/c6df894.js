(window.webpackJsonp = window.webpackJsonp || []).push([
  [4],
  {
    347: function(t, e, n) {
      'use strict';
      n.r(e);
      n(352), n(362);
      var r = n(16),
        c = n(11);
      function o(object, t) {
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
          name: 'ScrollAnimation',
          props: {
            cover: { type: Boolean },
            offset: { type: Number, default: 0 },
            opacity: {
              type: [Object, Boolean],
              required: !1,
              default: function() {
                return { start: 0, end: 100 };
              },
            },
            scale: {
              type: [Object, Boolean],
              required: !1,
              default: function() {
                return { start: 100, end: 120 };
              },
            },
            translateY: {
              type: [Object, Boolean],
              required: !1,
              default: function() {
                return { start: 0, end: 100 };
              },
            },
            translate: { type: Boolean, required: !1, default: !1 },
          },
          data: function() {
            return {
              start: !1,
              scaleValue: 1,
              opacityValue: 1,
              translateYValue: 0,
            };
          },
          watch: {
            APP_SCROLL_VALUE: function() {
              this.start &&
                ((this.opacityValue = this.getOpacity()),
                (this.scaleValue = this.getScale()),
                (this.translateYValue = this.translate
                  ? this.getTranslateY()
                  : 0));
            },
          },
          methods: {
            getOpacity: function() {
              return +(
                this.getPercent(this.opacity.start, this.opacity.end) / 100
              ).toFixed(2);
            },
            getScale: function() {
              return +(
                this.getPercent(
                  this.scale.start,
                  this.scale.end,
                  'windowHeight',
                ) / 100
              ).toFixed(3);
            },
            getTranslateY: function() {
              var t = +this.getPercent(
                this.translateY.start,
                this.translateY.end,
              ).toFixed(3);
              return 150 - (t < 50 ? (t / 50) * 150 : t > 50 ? 150 : 0);
            },
            getPercent: function(t, e, n) {
              var r =
                  arguments.length > 3 && void 0 !== arguments[3]
                    ? arguments[3]
                    : 0,
                c = this.$refs.wrapper.getBoundingClientRect(),
                a =
                  'windowHeight' === n
                    ? c.height + this.APP_WINDOW_SIZE.height
                    : c.height,
                b =
                  'windowHeight' === n
                    ? c.top + c.height
                    : c.bottom - this.APP_WINDOW_SIZE.height,
                o = a * (r / 100),
                l = e + t - (b * (t - e) - (a - o) * t) / -(a - o);
              return l > e ? (l = e) : l < t ? (l = t) : l;
            },
          },
          computed: (function(t) {
            for (var i = 1; i < arguments.length; i++) {
              var source = null != arguments[i] ? arguments[i] : {};
              i % 2
                ? o(Object(source), !0).forEach(function(e) {
                    Object(r.a)(t, e, source[e]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    t,
                    Object.getOwnPropertyDescriptors(source),
                  )
                : o(Object(source)).forEach(function(e) {
                    Object.defineProperty(
                      t,
                      e,
                      Object.getOwnPropertyDescriptor(source, e),
                    );
                  });
            }
            return t;
          })({}, Object(c.c)('app', ['APP_SCROLL_VALUE', 'APP_WINDOW_SIZE'])),
        },
        d = (n(364), n(10)),
        component = Object(d.a)(
          l,
          function() {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n(
              'div',
              { ref: 'wrapper', class: ['scale-wrapper', { cover: t.cover }] },
              [
                n(
                  'client-only',
                  [
                    n(
                      'intersect',
                      {
                        on: {
                          enter: function(e) {
                            t.start = !0;
                          },
                          leave: function(e) {
                            t.start = !1;
                          },
                        },
                      },
                      [
                        n(
                          'div',
                          {
                            staticClass: 'scale-content',
                            style:
                              'transform: scale(' +
                              t.scaleValue +
                              ') translateY(' +
                              t.translateYValue +
                              'px); opacity: ' +
                              t.opacityValue +
                              ';}',
                          },
                          [t._t('default')],
                          2,
                        ),
                      ],
                    ),
                  ],
                  1,
                ),
              ],
              1,
            );
          },
          [],
          !1,
          null,
          null,
          null,
        );
      e.default = component.exports;
    },
    352: function(t, e, n) {
      'use strict';
      var r = n(17),
        c = n(4),
        o = n(71),
        l = n(20),
        d = n(18),
        f = n(33),
        m = n(170),
        w = n(70),
        h = n(5),
        v = n(72),
        x = n(109).f,
        _ = n(40).f,
        y = n(23).f,
        O = n(360).trim,
        C = c.Number,
        N = C.prototype,
        I = 'Number' == f(v(N)),
        j = function(t) {
          var e,
            n,
            r,
            c,
            o,
            l,
            d,
            code,
            f = w(t, !1);
          if ('string' == typeof f && f.length > 2)
            if (43 === (e = (f = O(f)).charCodeAt(0)) || 45 === e) {
              if (88 === (n = f.charCodeAt(2)) || 120 === n) return NaN;
            } else if (48 === e) {
              switch (f.charCodeAt(1)) {
                case 66:
                case 98:
                  (r = 2), (c = 49);
                  break;
                case 79:
                case 111:
                  (r = 8), (c = 55);
                  break;
                default:
                  return +f;
              }
              for (l = (o = f.slice(2)).length, d = 0; d < l; d++)
                if ((code = o.charCodeAt(d)) < 48 || code > c) return NaN;
              return parseInt(o, r);
            }
          return +f;
        };
      if (o('Number', !C(' 0o1') || !C('0b1') || C('+0x1'))) {
        for (
          var P,
            E = function(t) {
              var e = arguments.length < 1 ? 0 : t,
                n = this;
              return n instanceof E &&
                (I
                  ? h(function() {
                      N.valueOf.call(n);
                    })
                  : 'Number' != f(n))
                ? m(new C(j(e)), n, E)
                : j(e);
            },
            L = r
              ? x(C)
              : 'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range'.split(
                  ',',
                ),
            A = 0;
          L.length > A;
          A++
        )
          d(C, (P = L[A])) && !d(E, P) && y(E, P, _(C, P));
        (E.prototype = N), (N.constructor = E), l(c, 'Number', E);
      }
    },
    353: function(t, e, n) {
      var content = n(365);
      'string' == typeof content && (content = [[t.i, content, '']]),
        content.locals && (t.exports = content.locals);
      (0, n(9).default)('4d5ea671', content, !0, { sourceMap: !1 });
    },
    360: function(t, e, n) {
      var r = n(19),
        c = '[' + n(361) + ']',
        o = RegExp('^' + c + c + '*'),
        l = RegExp(c + c + '*$'),
        d = function(t) {
          return function(e) {
            var n = String(r(e));
            return (
              1 & t && (n = n.replace(o, '')),
              2 & t && (n = n.replace(l, '')),
              n
            );
          };
        };
      t.exports = { start: d(1), end: d(2), trim: d(3) };
    },
    361: function(t, e) {
      t.exports = '\t\n\v\f\r                　\u2028\u2029\ufeff';
    },
    362: function(t, e, n) {
      'use strict';
      var r = n(2),
        c = n(34),
        o = n(363),
        l = n(171),
        d = n(5),
        f = (1).toFixed,
        m = Math.floor,
        w = function(t, e, n) {
          return 0 === e
            ? n
            : e % 2 == 1
            ? w(t, e - 1, n * t)
            : w(t * t, e / 2, n);
        };
      r(
        {
          target: 'Number',
          proto: !0,
          forced:
            (f &&
              ('0.000' !== (8e-5).toFixed(3) ||
                '1' !== (0.9).toFixed(0) ||
                '1.25' !== (1.255).toFixed(2) ||
                '1000000000000000128' !== (0xde0b6b3a7640080).toFixed(0))) ||
            !d(function() {
              f.call({});
            }),
        },
        {
          toFixed: function(t) {
            var e,
              n,
              r,
              d,
              f = o(this),
              h = c(t),
              data = [0, 0, 0, 0, 0, 0],
              v = '',
              x = '0',
              _ = function(t, e) {
                for (var n = -1, r = e; ++n < 6; )
                  (r += t * data[n]), (data[n] = r % 1e7), (r = m(r / 1e7));
              },
              y = function(t) {
                for (var e = 6, n = 0; --e >= 0; )
                  (n += data[e]), (data[e] = m(n / t)), (n = (n % t) * 1e7);
              },
              O = function() {
                for (var t = 6, s = ''; --t >= 0; )
                  if ('' !== s || 0 === t || 0 !== data[t]) {
                    var e = String(data[t]);
                    s = '' === s ? e : s + l.call('0', 7 - e.length) + e;
                  }
                return s;
              };
            if (h < 0 || h > 20) throw RangeError('Incorrect fraction digits');
            if (f != f) return 'NaN';
            if (f <= -1e21 || f >= 1e21) return String(f);
            if ((f < 0 && ((v = '-'), (f = -f)), f > 1e-21))
              if (
                ((n =
                  (e =
                    (function(t) {
                      for (var e = 0, n = t; n >= 4096; )
                        (e += 12), (n /= 4096);
                      for (; n >= 2; ) (e += 1), (n /= 2);
                      return e;
                    })(f * w(2, 69, 1)) - 69) < 0
                    ? f * w(2, -e, 1)
                    : f / w(2, e, 1)),
                (n *= 4503599627370496),
                (e = 52 - e) > 0)
              ) {
                for (_(0, n), r = h; r >= 7; ) _(1e7, 0), (r -= 7);
                for (_(w(10, r, 1), 0), r = e - 1; r >= 23; )
                  y(1 << 23), (r -= 23);
                y(1 << r), _(1, 1), y(2), (x = O());
              } else _(0, n), _(1 << -e, 0), (x = O() + l.call('0', h));
            return (x =
              h > 0
                ? v +
                  ((d = x.length) <= h
                    ? '0.' + l.call('0', h - d) + x
                    : x.slice(0, d - h) + '.' + x.slice(d - h))
                : v + x);
          },
        },
      );
    },
    363: function(t, e, n) {
      var r = n(33);
      t.exports = function(t) {
        if ('number' != typeof t && 'Number' != r(t))
          throw TypeError('Incorrect invocation');
        return +t;
      };
    },
    364: function(t, e, n) {
      'use strict';
      n(353);
    },
    365: function(t, e, n) {
      (e = n(8)(!1)).push([
        t.i,
        '.scale-wrapper{overflow:hidden}.scale-wrapper.cover,.scale-wrapper.cover .scale-content{width:100%;height:100%}.scale-wrapper.cover img{width:100%;height:100%;-o-object-fit:cover;object-fit:cover}',
        '',
      ]),
        (t.exports = e);
    },
    385: function(t, e, n) {
      var content = n(434);
      'string' == typeof content && (content = [[t.i, content, '']]),
        content.locals && (t.exports = content.locals);
      (0, n(9).default)('321bdc6a', content, !0, { sourceMap: !1 });
    },
    433: function(t, e, n) {
      'use strict';
      n(385);
    },
    434: function(t, e, n) {
      (e = n(8)(!1)).push([
        t.i,
        '.item-news[data-v-d13c4c10]{width:100%;display:flex;flex-direction:column}.item-news .title-img-wrap[data-v-d13c4c10]{position:relative;width:100%;height:730px;display:flex;align-items:center;transition:height .3s}.item-news .content[data-v-d13c4c10]{display:flex;flex-direction:column;margin-left:var(--main-big-margin);margin-right:var(--main-mini-margin)}.item-news .content .date-text[data-v-d13c4c10]{margin-top:57px}.item-news .content .item-project-title-text[data-v-d13c4c10]{color:#000;margin-top:11px;margin-bottom:38px}.item-news .content .news-img-wrap[data-v-d13c4c10]{width:100%;height:660px;margin:107px 0 100px}.item-news .paginator-wrap[data-v-d13c4c10]{align-self:center;margin-top:157px}@media screen and (max-width:1024px){.item-news .title-img-wrap[data-v-d13c4c10]{height:520px}.item-news .content .date-text[data-v-d13c4c10]{margin-top:60px}.item-news .content .item-project-title-text[data-v-d13c4c10]{margin-bottom:64px}.item-news .content .news-img-wrap[data-v-d13c4c10]{height:440px;margin:117px 0 100px}.item-news .paginator-wrap[data-v-d13c4c10]{margin-top:160px}}@media screen and (max-width:768px){.item-news .title-img-wrap[data-v-d13c4c10]{height:546px}.item-news .content .date-text[data-v-d13c4c10]{margin-top:40px}.item-news .content .item-project-title-text[data-v-d13c4c10]{margin-bottom:43px}.item-news .content .news-img-wrap[data-v-d13c4c10]{margin:41px 0}.item-news .paginator-wrap[data-v-d13c4c10]{margin-top:90px}}@media screen and (max-width:414px){.item-news .title-img-wrap[data-v-d13c4c10]{height:420px}.item-news .content .date-text[data-v-d13c4c10]{margin-top:60px}.item-news .content .item-project-title-text[data-v-d13c4c10]{margin-bottom:33px}.item-news .content .news-img-wrap[data-v-d13c4c10]{margin:30px 0}.item-news .paginator-wrap[data-v-d13c4c10]{margin-top:100px}}',
        '',
      ]),
        (t.exports = e);
    },
    457: function(t, e, n) {
      'use strict';
      n.r(e);
      n(53), n(110), n(39);
      var r = n(7),
        c = n(347),
        o = n(111),
        l = n(168),
        d = {
          name: 'Item_News',
          components: { ScrollAnimation: c.default, Arrow_Btn: o.a },
          asyncData: function(t) {
            return Object(r.a)(
              regeneratorRuntime.mark(function e() {
                var n, r, c, o;
                return regeneratorRuntime.wrap(
                  function(e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (n = t.error),
                            (r = t.params),
                            (e.prev = 1),
                            (e.next = 4),
                            l.a.getPage('news-lists/' + r.id)
                          );
                        case 4:
                          return (
                            (c = e.sent),
                            (e.next = 7),
                            l.a.getPage('news-lists/count')
                          );
                        case 7:
                          return (
                            (o = e.sent),
                            e.abrupt('return', { news: c.data, count: o.data })
                          );
                        case 11:
                          (e.prev = 11),
                            (e.t0 = e.catch(1)),
                            n({
                              statusCode: 503,
                              message: 'Unable to fetch blogs at this time',
                            });
                        case 14:
                        case 'end':
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[1, 11]],
                );
              }),
            )();
          },
          data: function() {
            return { news: {}, count: {} };
          },
          methods: {
            getUrl: function(t) {
              return 'https://strapi-up.verodigital.site'.concat(t);
            },
            getDate: function(t) {
              var e = new Date(t).getFullYear(),
                n = ('0' + (new Date(t).getMonth() + 1)).slice(-2),
                r = ('0' + new Date(t).getDate()).slice(-2);
              return ''
                .concat(r, '.')
                .concat(n, '.')
                .concat(e);
            },
          },
        },
        f = (n(433), n(10)),
        component = Object(f.a)(
          d,
          function() {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n('div', { staticClass: 'item-news' }, [
              n(
                'div',
                { staticClass: 'title-img-wrap' },
                [
                  n('scroll-animation', { attrs: { opacity: !1, cover: '' } }, [
                    n('img', {
                      attrs: {
                        src: t.getUrl(t.news.background_image.url),
                        alt: '',
                      },
                    }),
                  ]),
                ],
                1,
              ),
              t._v(' '),
              n(
                'div',
                { staticClass: 'content' },
                [
                  n('span', { staticClass: 'date-text' }, [
                    t._v(t._s(t.getDate(t.news.published_at))),
                  ]),
                  t._v(' '),
                  n('span', { staticClass: 'item-project-title-text' }, [
                    t._v(t._s(t.news.title)),
                  ]),
                  t._v(' '),
                  t._l(t.news.news_content, function(e, r) {
                    return [
                      'news-content.text' === e.__component
                        ? n('p', { staticClass: 'content-p' }, [
                            t._v('\n        ' + t._s(e.text) + '\n      '),
                          ])
                        : t._e(),
                      t._v(' '),
                      'news-content.image' === e.__component
                        ? n(
                            'div',
                            { staticClass: 'news-img-wrap' },
                            [
                              n(
                                'scroll-animation',
                                { attrs: { opacity: !1, cover: '' } },
                                [
                                  n('img', {
                                    attrs: {
                                      src: t.getUrl(e.image.url),
                                      alt: '',
                                    },
                                  }),
                                ],
                              ),
                            ],
                            1,
                          )
                        : t._e(),
                    ];
                  }),
                ],
                2,
              ),
              t._v(' '),
              n('div', { staticClass: 'paginator-wrap' }, [
                n('div', { staticClass: 'paginator' }, [
                  n(
                    'div',
                    { staticClass: 'arrow-wrap' },
                    [
                      n(
                        'nuxt-link',
                        {
                          staticClass: 'btn-left',
                          attrs: {
                            to:
                              '/news/' +
                              (1 === t.news.id ? t.count : t.news.id - 1),
                          },
                        },
                        [
                          n(
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
                              n('path', {
                                attrs: {
                                  d:
                                    'M0.292892 7.2929C-0.0976315 7.68342 -0.0976314 8.31658 0.292893 8.70711L6.65686 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928933C7.68054 0.538409 7.04738 0.538409 6.65685 0.928933L0.292892 7.2929ZM21 7L1 7L1 9L21 9L21 7Z',
                                  fill: '#000',
                                },
                              }),
                            ],
                          ),
                        ],
                      ),
                      t._v(' '),
                      n(
                        'nuxt-link',
                        {
                          staticClass: 'btn-right',
                          attrs: {
                            to:
                              '/news/' +
                              (t.news.id === t.count ? 1 : t.news.id + 1),
                          },
                        },
                        [
                          n(
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
                              n('path', {
                                attrs: {
                                  d:
                                    'M20.7071 8.70711C21.0976 8.31658 21.0976 7.68342 20.7071 7.2929L14.3431 0.928933C13.9526 0.538409 13.3195 0.538409 12.9289 0.928933C12.5384 1.31946 12.5384 1.95262 12.9289 2.34315L18.5858 8L12.9289 13.6569C12.5384 14.0474 12.5384 14.6805 12.9289 15.0711C13.3195 15.4616 13.9526 15.4616 14.3431 15.0711L20.7071 8.70711ZM-8.74228e-08 9L20 9L20 7L8.74228e-08 7L-8.74228e-08 9Z',
                                  fill: '#000',
                                },
                              }),
                            ],
                          ),
                        ],
                      ),
                    ],
                    1,
                  ),
                ]),
              ]),
            ]);
          },
          [],
          !1,
          null,
          'd13c4c10',
          null,
        );
      e.default = component.exports;
      installComponents(component, { ScrollAnimation: n(347).default });
    },
  },
]);
