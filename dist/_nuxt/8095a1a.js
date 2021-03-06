(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    347: function(t, e, r) {
      'use strict';
      r.r(e);
      r(352), r(362);
      var n = r(16),
        o = r(11);
      function c(object, t) {
        var e = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(object);
          t &&
            (r = r.filter(function(t) {
              return Object.getOwnPropertyDescriptor(object, t).enumerable;
            })),
            e.push.apply(e, r);
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
            getPercent: function(t, e, r) {
              var n =
                  arguments.length > 3 && void 0 !== arguments[3]
                    ? arguments[3]
                    : 0,
                o = this.$refs.wrapper.getBoundingClientRect(),
                a =
                  'windowHeight' === r
                    ? o.height + this.APP_WINDOW_SIZE.height
                    : o.height,
                b =
                  'windowHeight' === r
                    ? o.top + o.height
                    : o.bottom - this.APP_WINDOW_SIZE.height,
                c = a * (n / 100),
                l = e + t - (b * (t - e) - (a - c) * t) / -(a - c);
              return l > e ? (l = e) : l < t ? (l = t) : l;
            },
          },
          computed: (function(t) {
            for (var i = 1; i < arguments.length; i++) {
              var source = null != arguments[i] ? arguments[i] : {};
              i % 2
                ? c(Object(source), !0).forEach(function(e) {
                    Object(n.a)(t, e, source[e]);
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
          })({}, Object(o.c)('app', ['APP_SCROLL_VALUE', 'APP_WINDOW_SIZE'])),
        },
        f = (r(364), r(10)),
        component = Object(f.a)(
          l,
          function() {
            var t = this,
              e = t.$createElement,
              r = t._self._c || e;
            return r(
              'div',
              { ref: 'wrapper', class: ['scale-wrapper', { cover: t.cover }] },
              [
                r(
                  'client-only',
                  [
                    r(
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
                        r(
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
    349: function(t, e, r) {
      'use strict';
      r.r(e);
      var n = { name: 'News', components: { Gallery: r(401).default } },
        o = (r(407), r(10)),
        component = Object(o.a)(
          n,
          function() {
            var t = this.$createElement,
              e = this._self._c || t;
            return e('client-only', [
              e(
                'div',
                {
                  class: [
                    'news-block',
                    { 'people__news-block': '/people' === this.$route.path },
                  ],
                },
                [
                  e(
                    'span',
                    {
                      staticClass:
                        'main-page__content-title-position block-title title',
                    },
                    [this._v('\n      news\n    ')],
                  ),
                  this._v(' '),
                  '/people' === this.$route.path
                    ? e('div', { staticClass: 'content-title' }, [
                        this._v('\n      Publications\n    '),
                      ])
                    : this._e(),
                  this._v(' '),
                  e('div', { staticClass: 'wrap' }, [e('Gallery')], 1),
                ],
              ),
            ]);
          },
          [],
          !1,
          null,
          '67a45b10',
          null,
        );
      e.default = component.exports;
      installComponents(component, { Gallery: r(401).default });
    },
    351: function(t, e, r) {
      'use strict';
      r.r(e);
      var n = r(16),
        o = r(11);
      function c(object, t) {
        var e = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(object);
          t &&
            (r = r.filter(function(t) {
              return Object.getOwnPropertyDescriptor(object, t).enumerable;
            })),
            e.push.apply(e, r);
        }
        return e;
      }
      function l(t) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {};
          i % 2
            ? c(Object(source), !0).forEach(function(e) {
                Object(n.a)(t, e, source[e]);
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
          name: 'Image_Scale_Block',
          props: {
            img: String,
            opacity: { type: [Object, Boolean], default: !1 },
            appointment: {
              validator: function(t) {
                return ['project', 'news', 'people', 'process', 'spinner'];
              },
            },
          },
          data: function() {
            return { scaleStartScroll: 0, scaleStartScrollActive: !1 };
          },
          computed: l(
            l({}, Object(o.c)('app', ['APP_SCROLL_VALUE', 'APP_WINDOW_SIZE'])),
            {},
            {
              imgScale: function() {
                var t = this.scaleStartScroll;
                return this.APP_SCROLL_VALUE > t && this.scaleStartScrollActive
                  ? this.APP_SCROLL_VALUE >
                    t +
                      this.APP_WINDOW_SIZE.height +
                      this.$refs.imageScaleElement.offsetHeight
                    ? 1.2
                    : 1 +
                      ((this.APP_SCROLL_VALUE - t) /
                        ((this.APP_WINDOW_SIZE.height +
                          this.$refs.imageScaleElement.offsetHeight) /
                          100)) *
                        0.002
                  : 1;
              },
              imgOpacity: function() {
                if (this.opacity) {
                  var t,
                    e = this.scaleStartScroll,
                    r =
                      null !== (t = this.opacity.offset) && void 0 !== t
                        ? t
                        : 0;
                  return this.APP_SCROLL_VALUE > e + r &&
                    this.scaleStartScrollActive
                    ? this.APP_SCROLL_VALUE >
                      e + r + this.$refs.imageScaleElement.offsetHeight
                      ? 1
                      : (this.APP_SCROLL_VALUE - (e + r)) /
                        this.$refs.imageScaleElement.offsetHeight
                    : 0;
                }
                return 1;
              },
              imageScaleImgClasses: function() {
                return [
                  'image-scale-img',
                  {
                    'image-scale-img-width-hover':
                      'project' === this.appointment ||
                      'news' === this.appointment ||
                      'people' === this.appointment ||
                      'process' === this.appointment,
                  },
                  {
                    'image-scale-img-width-hover-no-cursor':
                      'news' === this.appointment,
                  },
                ];
              },
            },
          ),
        },
        d = (r(411), r(10)),
        component = Object(d.a)(
          f,
          function() {
            var t = this,
              e = t.$createElement,
              r = t._self._c || e;
            return r(
              'div',
              {
                ref: 'imageScaleElement',
                staticClass: 'image-scale-block_wrap',
              },
              [
                r(
                  'client-only',
                  [
                    r(
                      'intersect',
                      {
                        on: {
                          '~enter': function(e) {
                            (t.scaleStartScroll = t.APP_SCROLL_VALUE),
                              (t.scaleStartScrollActive = !0);
                          },
                          '~leave': function(e) {
                            (t.scaleStartScroll = t.APP_SCROLL_VALUE),
                              (t.scaleStartScrollActive = !1);
                          },
                        },
                      },
                      [
                        r('div', {
                          class: t.imageScaleImgClasses,
                          style:
                            'transform: scale(' +
                            this.imgScale +
                            '); opacity: ' +
                            this.imgOpacity +
                            '; background-image: url(' +
                            t.img +
                            ')',
                        }),
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
    352: function(t, e, r) {
      'use strict';
      var n = r(17),
        o = r(4),
        c = r(71),
        l = r(20),
        f = r(18),
        d = r(33),
        h = r(170),
        m = r(70),
        v = r(5),
        w = r(72),
        _ = r(109).f,
        y = r(40).f,
        x = r(23).f,
        O = r(360).trim,
        S = o.Number,
        P = S.prototype,
        j = 'Number' == d(w(P)),
        E = function(t) {
          var e,
            r,
            n,
            o,
            c,
            l,
            f,
            code,
            d = m(t, !1);
          if ('string' == typeof d && d.length > 2)
            if (43 === (e = (d = O(d)).charCodeAt(0)) || 45 === e) {
              if (88 === (r = d.charCodeAt(2)) || 120 === r) return NaN;
            } else if (48 === e) {
              switch (d.charCodeAt(1)) {
                case 66:
                case 98:
                  (n = 2), (o = 49);
                  break;
                case 79:
                case 111:
                  (n = 8), (o = 55);
                  break;
                default:
                  return +d;
              }
              for (l = (c = d.slice(2)).length, f = 0; f < l; f++)
                if ((code = c.charCodeAt(f)) < 48 || code > o) return NaN;
              return parseInt(c, n);
            }
          return +d;
        };
      if (c('Number', !S(' 0o1') || !S('0b1') || S('+0x1'))) {
        for (
          var k,
            A = function(t) {
              var e = arguments.length < 1 ? 0 : t,
                r = this;
              return r instanceof A &&
                (j
                  ? v(function() {
                      P.valueOf.call(r);
                    })
                  : 'Number' != d(r))
                ? h(new S(E(e)), r, A)
                : E(e);
            },
            I = n
              ? _(S)
              : 'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range'.split(
                  ',',
                ),
            L = 0;
          I.length > L;
          L++
        )
          f(S, (k = I[L])) && !f(A, k) && x(A, k, y(S, k));
        (A.prototype = P), (P.constructor = A), l(o, 'Number', A);
      }
    },
    353: function(t, e, r) {
      var content = r(365);
      'string' == typeof content && (content = [[t.i, content, '']]),
        content.locals && (t.exports = content.locals);
      (0, r(9).default)('4d5ea671', content, !0, { sourceMap: !1 });
    },
    360: function(t, e, r) {
      var n = r(19),
        o = '[' + r(361) + ']',
        c = RegExp('^' + o + o + '*'),
        l = RegExp(o + o + '*$'),
        f = function(t) {
          return function(e) {
            var r = String(n(e));
            return (
              1 & t && (r = r.replace(c, '')),
              2 & t && (r = r.replace(l, '')),
              r
            );
          };
        };
      t.exports = { start: f(1), end: f(2), trim: f(3) };
    },
    361: function(t, e) {
      t.exports = '\t\n\v\f\r                　\u2028\u2029\ufeff';
    },
    362: function(t, e, r) {
      'use strict';
      var n = r(2),
        o = r(34),
        c = r(363),
        l = r(171),
        f = r(5),
        d = (1).toFixed,
        h = Math.floor,
        m = function(t, e, r) {
          return 0 === e
            ? r
            : e % 2 == 1
            ? m(t, e - 1, r * t)
            : m(t * t, e / 2, r);
        };
      n(
        {
          target: 'Number',
          proto: !0,
          forced:
            (d &&
              ('0.000' !== (8e-5).toFixed(3) ||
                '1' !== (0.9).toFixed(0) ||
                '1.25' !== (1.255).toFixed(2) ||
                '1000000000000000128' !== (0xde0b6b3a7640080).toFixed(0))) ||
            !f(function() {
              d.call({});
            }),
        },
        {
          toFixed: function(t) {
            var e,
              r,
              n,
              f,
              d = c(this),
              v = o(t),
              data = [0, 0, 0, 0, 0, 0],
              w = '',
              _ = '0',
              y = function(t, e) {
                for (var r = -1, n = e; ++r < 6; )
                  (n += t * data[r]), (data[r] = n % 1e7), (n = h(n / 1e7));
              },
              x = function(t) {
                for (var e = 6, r = 0; --e >= 0; )
                  (r += data[e]), (data[e] = h(r / t)), (r = (r % t) * 1e7);
              },
              O = function() {
                for (var t = 6, s = ''; --t >= 0; )
                  if ('' !== s || 0 === t || 0 !== data[t]) {
                    var e = String(data[t]);
                    s = '' === s ? e : s + l.call('0', 7 - e.length) + e;
                  }
                return s;
              };
            if (v < 0 || v > 20) throw RangeError('Incorrect fraction digits');
            if (d != d) return 'NaN';
            if (d <= -1e21 || d >= 1e21) return String(d);
            if ((d < 0 && ((w = '-'), (d = -d)), d > 1e-21))
              if (
                ((r =
                  (e =
                    (function(t) {
                      for (var e = 0, r = t; r >= 4096; )
                        (e += 12), (r /= 4096);
                      for (; r >= 2; ) (e += 1), (r /= 2);
                      return e;
                    })(d * m(2, 69, 1)) - 69) < 0
                    ? d * m(2, -e, 1)
                    : d / m(2, e, 1)),
                (r *= 4503599627370496),
                (e = 52 - e) > 0)
              ) {
                for (y(0, r), n = v; n >= 7; ) y(1e7, 0), (n -= 7);
                for (y(m(10, n, 1), 0), n = e - 1; n >= 23; )
                  x(1 << 23), (n -= 23);
                x(1 << n), y(1, 1), x(2), (_ = O());
              } else y(0, r), y(1 << -e, 0), (_ = O() + l.call('0', v));
            return (_ =
              v > 0
                ? w +
                  ((f = _.length) <= v
                    ? '0.' + l.call('0', v - f) + _
                    : _.slice(0, f - v) + '.' + _.slice(f - v))
                : w + _);
          },
        },
      );
    },
    363: function(t, e, r) {
      var n = r(33);
      t.exports = function(t) {
        if ('number' != typeof t && 'Number' != n(t))
          throw TypeError('Incorrect invocation');
        return +t;
      };
    },
    364: function(t, e, r) {
      'use strict';
      r(353);
    },
    365: function(t, e, r) {
      (e = r(8)(!1)).push([
        t.i,
        '.scale-wrapper{overflow:hidden}.scale-wrapper.cover,.scale-wrapper.cover .scale-content{width:100%;height:100%}.scale-wrapper.cover img{width:100%;height:100%;-o-object-fit:cover;object-fit:cover}',
        '',
      ]),
        (t.exports = e);
    },
    370: function(t, e, r) {
      var content = r(404);
      'string' == typeof content && (content = [[t.i, content, '']]),
        content.locals && (t.exports = content.locals);
      (0, r(9).default)('0689dfda', content, !0, { sourceMap: !1 });
    },
    371: function(t, e, r) {
      var content = r(406);
      'string' == typeof content && (content = [[t.i, content, '']]),
        content.locals && (t.exports = content.locals);
      (0, r(9).default)('902d4238', content, !0, { sourceMap: !1 });
    },
    372: function(t, e, r) {
      var content = r(408);
      'string' == typeof content && (content = [[t.i, content, '']]),
        content.locals && (t.exports = content.locals);
      (0, r(9).default)('7641aa84', content, !0, { sourceMap: !1 });
    },
    374: function(t, e, r) {
      var content = r(412);
      'string' == typeof content && (content = [[t.i, content, '']]),
        content.locals && (t.exports = content.locals);
      (0, r(9).default)('0bcd62c7', content, !0, { sourceMap: !1 });
    },
    401: function(t, e, r) {
      'use strict';
      r.r(e);
      r(21), r(69), r(52), r(39);
      var n = r(7),
        o = {
          name: 'Gallery',
          components: { Gallery_item: r(402).default },
          fetch: (function(t) {
            function e() {
              return t.apply(this, arguments);
            }
            return (
              (e.toString = function() {
                return t.toString();
              }),
              e
            );
          })(function() {
            var t = this;
            return Object(n.a)(
              regeneratorRuntime.mark(function e() {
                return regeneratorRuntime.wrap(function(e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.next = 2),
                          fetch(
                            'https://strapi-up.verodigital.site/news-lists',
                          ).then(function(t) {
                            return t.json();
                          })
                        );
                      case 2:
                        t.news = e.sent;
                      case 3:
                      case 'end':
                        return e.stop();
                    }
                }, e);
              }),
            )();
          }),
          data: function() {
            return {
              news: {},
              swiperOption: {
                slidesPerView: 'auto',
                spaceBetween: 30,
                loop: !0,
                loopedSlides: 5,
                freeMode: !0,
                centeredSlides: !0,
              },
            };
          },
          methods: {
            onSwiperRedied: function(t) {
              setTimeout(function() {
                t.slideReset();
              }, 500);
            },
          },
        },
        c = (r(405), r(10)),
        component = Object(c.a)(
          o,
          function() {
            var t = this.$createElement,
              e = this._self._c || t;
            return e(
              'div',
              {
                staticClass: 'carousel-wrapper',
                attrs: { id: 'spinnerBlock' },
              },
              [
                e(
                  'client-only',
                  [
                    e(
                      'swiper',
                      {
                        staticClass: 'swiper',
                        attrs: { options: this.swiperOption },
                        on: { ready: this.onSwiperRedied },
                      },
                      this._l(this.news, function(t, r) {
                        return e(
                          'swiper-slide',
                          { key: r, staticClass: 'slider-item d-project-item' },
                          [
                            e('Gallery_item', {
                              attrs: {
                                id: t.id,
                                img: t.background_image.url,
                                title: t.short_title,
                                date: t.published_at,
                                tags: t.tags_news,
                              },
                            }),
                          ],
                          1,
                        );
                      }),
                      1,
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
          '30c991c4',
          null,
        );
      e.default = component.exports;
      installComponents(component, { Gallery_item: r(402).default });
    },
    402: function(t, e, r) {
      'use strict';
      r.r(e);
      r(53), r(110);
      var n = {
          name: 'Gallery_item',
          props: ['id', 'img', 'title', 'date', 'tags'],
          methods: {
            getUrl: function(t) {
              return 'https://strapi-up.verodigital.site'.concat(t);
            },
            getDate: function(t) {
              var e = new Date(t).getFullYear(),
                r = ('0' + (new Date(t).getMonth() + 1)).slice(-2),
                n = ('0' + new Date(t).getDate()).slice(-2);
              return ''
                .concat(n, '.')
                .concat(r, '.')
                .concat(e);
            },
          },
        },
        o = (r(403), r(10)),
        component = Object(o.a)(
          n,
          function() {
            var t = this,
              e = t.$createElement,
              r = t._self._c || e;
            return r(
              'nuxt-link',
              { staticClass: 'gallery-item', attrs: { to: 'news/' + t.id } },
              [
                r('div', { staticClass: 'gallery-item-img-wrap' }, [
                  r('img', { attrs: { src: t.getUrl(t.img), alt: '' } }),
                ]),
                t._v(' '),
                r('span', { staticClass: 'date-text' }, [
                  t._v(t._s(t.getDate(t.date))),
                ]),
                t._v(' '),
                r('span', { staticClass: 'title' }, [t._v(t._s(t.title))]),
                t._v(' '),
                r(
                  'div',
                  { staticClass: 'teg-container' },
                  t._l(t.tags, function(e) {
                    return r('span', { staticClass: 'text-very-small' }, [
                      t._v(t._s(e.title)),
                    ]);
                  }),
                  0,
                ),
              ],
            );
          },
          [],
          !1,
          null,
          '91cfdc8a',
          null,
        );
      e.default = component.exports;
    },
    403: function(t, e, r) {
      'use strict';
      r(370);
    },
    404: function(t, e, r) {
      (e = r(8)(!1)).push([
        t.i,
        '.gallery-item[data-v-91cfdc8a]{position:relative;width:375px;height:440px;display:flex;flex-direction:column;cursor:pointer}.gallery-item .gallery-item-img-wrap[data-v-91cfdc8a]{width:100%;height:340px;overflow:hidden}.gallery-item .gallery-item-img-wrap:hover img[data-v-91cfdc8a]{transform:scale(1.2)}.gallery-item .gallery-item-img-wrap img[data-v-91cfdc8a]{width:100%;height:100%;-o-object-fit:cover;object-fit:cover;transition:.3s}.gallery-item a[data-v-91cfdc8a]{cursor:pointer}.gallery-item .title[data-v-91cfdc8a]{font-family:Garamond;font-style:normal;font-weight:700;font-size:24px;line-height:141%;letter-spacing:-.04em;color:#000;margin-top:14px}.gallery-item .teg-container[data-v-91cfdc8a]{max-width:280px;display:flex;margin-top:2px;justify-content:space-between}.classNoMargin[data-v-91cfdc8a]{margin-right:0}@media screen and (max-width:1280px){.gallery-item[data-v-91cfdc8a]{width:300px;height:340px}.gallery-item .gallery-item-img-wrap[data-v-91cfdc8a]{height:240px}}@media screen and (max-width:1024px){.gallery-item[data-v-91cfdc8a]{width:290px;height:330px}.gallery-item .gallery-item-img-wrap[data-v-91cfdc8a]{height:230px}}',
        '',
      ]),
        (t.exports = e);
    },
    405: function(t, e, r) {
      'use strict';
      r(371);
    },
    406: function(t, e, r) {
      (e = r(8)(!1)).push([
        t.i,
        '.carousel-wrapper[data-v-30c991c4]{width:100%;overflow:hidden;cursor:none}.img-wrapper[data-v-30c991c4]{min-height:300px;outline:0}.img-wrapper img[data-v-30c991c4]{pointer-events:none}.slider-item[data-v-30c991c4]{width:auto}',
        '',
      ]),
        (t.exports = e);
    },
    407: function(t, e, r) {
      'use strict';
      r(372);
    },
    408: function(t, e, r) {
      (e = r(8)(!1)).push([
        t.i,
        '.cursor-change-enter-active[data-v-67a45b10],.cursor-change-leave-active[data-v-67a45b10]{transition:.2s}.cursor-change-enter[data-v-67a45b10],.cursor-change-leave-to[data-v-67a45b10]{transform:scale(0)}.news-block[data-v-67a45b10]{background:#e8e8e8;padding-bottom:103px}.news-block .custom-cursor[data-v-67a45b10]{position:absolute;top:0;left:0;width:200px;height:200px;pointer-events:none;z-index:1500;opacity:1}.news-block .custom-cursor svg[data-v-67a45b10]{position:relative;left:-50%;top:-50%;width:100%;height:100%}.news-block .title[data-v-67a45b10]{margin-bottom:102px;margin-top:78px;display:block}.people__news-block[data-v-67a45b10]{margin-top:323px;background:#fff}.people__news-block .title[data-v-67a45b10]{margin-bottom:83px}.people__news-block .content-title[data-v-67a45b10]{margin-left:var(--main-big-margin);margin-bottom:32px}@media screen and (max-width:1280px){.news-block[data-v-67a45b10]{padding-bottom:56px}.news-block .title[data-v-67a45b10]{margin-bottom:52px;margin-top:32px}.people__news-block[data-v-67a45b10]{margin-top:158px}}@media screen and (max-width:1024px){.news-block[data-v-67a45b10]{padding-bottom:70px}.news-block .title[data-v-67a45b10]{margin-bottom:66px;margin-top:18px}.people__news-block[data-v-67a45b10]{margin-top:90px}}@media screen and (max-width:768px){.people__news-block[data-v-67a45b10]{margin-top:108px}.people__news-block .content-title[data-v-67a45b10]{margin-bottom:44px}}@media screen and (max-width:428px){.news-block[data-v-67a45b10]{padding-bottom:77px}}',
        '',
      ]),
        (t.exports = e);
    },
    411: function(t, e, r) {
      'use strict';
      r(374);
    },
    412: function(t, e, r) {
      (e = r(8)(!1)).push([
        t.i,
        '.image-scale-block_wrap{position:relative;width:100%;height:100%;overflow:hidden}.image-scale-block_wrap .image-scale-img{position:absolute;top:0;left:0;width:100%;height:100%;background-size:cover;background-position:50%}.image-scale-block_wrap .image-scale-img img{width:100%;height:100%;-o-object-fit:cover;object-fit:cover;transition:transform 1s;pointer-events:none}.image-scale-block_wrap .image-scale-img-width-hover img:hover{transform:scale(1.2);cursor:pointer}.image-scale-block_wrap .image-scale-img-width-hover-no-cursor:hover{cursor:none}',
        '',
      ]),
        (t.exports = e);
    },
  },
]);
