(window.webpackJsonp = window.webpackJsonp || []).push([
  [6],
  {
    379: function(t, n, o) {
      var content = o(422);
      'string' == typeof content && (content = [[t.i, content, '']]),
        content.locals && (t.exports = content.locals);
      (0, o(9).default)('10d91d66', content, !0, { sourceMap: !1 });
    },
    380: function(t, n, o) {
      var content = o(424);
      'string' == typeof content && (content = [[t.i, content, '']]),
        content.locals && (t.exports = content.locals);
      (0, o(9).default)('71c8dea4', content, !0, { sourceMap: !1 });
    },
    381: function(t, n, o) {
      var content = o(426);
      'string' == typeof content && (content = [[t.i, content, '']]),
        content.locals && (t.exports = content.locals);
      (0, o(9).default)('cfd12a60', content, !0, { sourceMap: !1 });
    },
    382: function(t, n, o) {
      var content = o(428);
      'string' == typeof content && (content = [[t.i, content, '']]),
        content.locals && (t.exports = content.locals);
      (0, o(9).default)('134881f0', content, !0, { sourceMap: !1 });
    },
    383: function(t, n, o) {
      var content = o(430);
      'string' == typeof content && (content = [[t.i, content, '']]),
        content.locals && (t.exports = content.locals);
      (0, o(9).default)('0405dfef', content, !0, { sourceMap: !1 });
    },
    396: function(t, n, o) {
      'use strict';
      o.r(n);
      var e = {
          name: 'Philosophy',
          props: { data: { type: Object, default: {} } },
          methods: {
            getUrl: function(t) {
              return 'https://strapi-up.verodigital.site'.concat(t);
            },
          },
        },
        c = (o(421), o(10)),
        component = Object(c.a)(
          e,
          function() {
            var t = this,
              n = t.$createElement,
              o = t._self._c || n;
            return o('div', { staticClass: 'philosophy' }, [
              o(
                'span',
                {
                  staticClass: 'main-page__content-title-position block-title',
                },
                [t._v('philosophy')],
              ),
              t._v(' '),
              o(
                'span',
                { staticClass: 'content-title process_content-title_margin' },
                [t._v(t._s(t.data.title))],
              ),
              t._v(' '),
              o('div', { staticClass: 'content-block' }, [
                o('div', { staticClass: 'content-column-1' }, [
                  o('p', { staticClass: 'content-p' }, [
                    t._v('\n        ' + t._s(t.data.description) + '\n      '),
                  ]),
                ]),
                t._v(' '),
                o('div', { staticClass: 'content-column-2' }, [
                  o(
                    'div',
                    { staticClass: 'img-wrap process_img-wrap_height' },
                    [
                      o('scroll-animation', { attrs: { opacity: !1 } }, [
                        o('img', {
                          attrs: { src: t.getUrl(t.data.image.url), alt: '' },
                        }),
                      ]),
                    ],
                    1,
                  ),
                  t._v(' '),
                  o(
                    'p',
                    {
                      staticClass:
                        'content-p process_img-description_margin-top',
                    },
                    [
                      t._v(
                        '\n        ' +
                          t._s(t.data.description_image) +
                          '\n      ',
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
          '1519b6e0',
          null,
        );
      n.default = component.exports;
      installComponents(component, { ScrollAnimation: o(347).default });
    },
    397: function(t, n, o) {
      'use strict';
      o.r(n);
      var e = o(16),
        c = o(11);
      function r(object, t) {
        var n = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(object);
          t &&
            (o = o.filter(function(t) {
              return Object.getOwnPropertyDescriptor(object, t).enumerable;
            })),
            n.push.apply(n, o);
        }
        return n;
      }
      var l = {
          name: 'Method',
          props: { data: { type: Object, default: {} } },
          methods: {
            getUrl: function(t) {
              return 'https://strapi-up.verodigital.site'.concat(t);
            },
          },
          computed: (function(t) {
            for (var i = 1; i < arguments.length; i++) {
              var source = null != arguments[i] ? arguments[i] : {};
              i % 2
                ? r(Object(source), !0).forEach(function(n) {
                    Object(e.a)(t, n, source[n]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    t,
                    Object.getOwnPropertyDescriptors(source),
                  )
                : r(Object(source)).forEach(function(n) {
                    Object.defineProperty(
                      t,
                      n,
                      Object.getOwnPropertyDescriptor(source, n),
                    );
                  });
            }
            return t;
          })({}, Object(c.c)('app', ['APP_WINDOW_SIZE'])),
        },
        m = (o(423), o(10)),
        component = Object(m.a)(
          l,
          function() {
            var t = this,
              n = t.$createElement,
              o = t._self._c || n;
            return o('div', { staticClass: 'method' }, [
              o('span', { staticClass: 'block-title' }, [
                t._v('design method'),
              ]),
              t._v(' '),
              o(
                'span',
                { staticClass: 'content-title process_content-title_margin' },
                [t._v(t._s(t.data.title))],
              ),
              t._v(' '),
              o('div', { staticClass: 'content-block-span-1' }, [
                o('div', { staticClass: 'content-column-1' }, [
                  o('p', { staticClass: 'content-p' }, [
                    t._v(t._s(t.data.text_image[0].description)),
                  ]),
                ]),
                t._v(' '),
                o(
                  'div',
                  { staticClass: 'img-wrap process_img-wrap_height' },
                  [
                    o('scroll-animation', { attrs: { opacity: !1 } }, [
                      o('img', {
                        attrs: {
                          src: t.getUrl(t.data.text_image[0].image.url),
                          alt: '',
                        },
                      }),
                    ]),
                  ],
                  1,
                ),
              ]),
              t._v(' '),
              o('div', { staticClass: 'content-block-span-2' }, [
                o('div', { staticClass: 'content-block-span-2__column-1' }, [
                  o(
                    'div',
                    {
                      class: [
                        'img-wrap-2',
                        {
                          'process_img-wrap_height':
                            t.APP_WINDOW_SIZE.width <= 1280,
                        },
                      ],
                    },
                    [
                      o('scroll-animation', { attrs: { opacity: !1 } }, [
                        o('img', {
                          attrs: {
                            src: t.getUrl(t.data.text_image[1].image.url),
                            alt: '',
                          },
                        }),
                      ]),
                    ],
                    1,
                  ),
                  t._v(' '),
                  o(
                    'p',
                    {
                      staticClass:
                        'content-p process_img-description_margin-top',
                    },
                    [
                      t._v(
                        '\n        ' +
                          t._s(t.data.text_image[1].description) +
                          '\n      ',
                      ),
                    ],
                  ),
                ]),
                t._v(' '),
                o('div', { staticClass: 'content-block-span-2__column-2' }, [
                  o('p', { staticClass: 'content-p' }, [
                    t._v(t._s(t.data.text_image[2].description)),
                  ]),
                  t._v(' '),
                  o(
                    'div',
                    {
                      class: [
                        'img-wrap-3',
                        {
                          'process_img-wrap_height':
                            t.APP_WINDOW_SIZE.width <= 1280,
                        },
                      ],
                    },
                    [
                      o('scroll-animation', { attrs: { opacity: !1 } }, [
                        o('img', {
                          attrs: {
                            src: t.getUrl(t.data.text_image[2].image.url),
                            alt: '',
                          },
                        }),
                      ]),
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
          '2499867a',
          null,
        );
      n.default = component.exports;
      installComponents(component, { ScrollAnimation: o(347).default });
    },
    398: function(t, n, o) {
      'use strict';
      o.r(n);
      var e = {
          name: 'Collaboration',
          props: { data: { type: Object, default: {} } },
          methods: {
            getUrl: function(t) {
              return 'https://strapi-up.verodigital.site'.concat(t);
            },
          },
        },
        c = (o(425), o(10)),
        component = Object(c.a)(
          e,
          function() {
            var t = this,
              n = t.$createElement,
              o = t._self._c || n;
            return o('div', { staticClass: 'collaboration' }, [
              o('span', { staticClass: 'block-title' }, [
                t._v('collaboration'),
              ]),
              t._v(' '),
              o(
                'span',
                { staticClass: 'content-title process_content-title_margin' },
                [t._v(t._s(t.data.title))],
              ),
              t._v(' '),
              o('div', { staticClass: 'content-block' }, [
                o('div', { staticClass: 'content-column-1' }, [
                  o('p', { staticClass: 'content-p' }, [
                    t._v('\n        ' + t._s(t.data.description) + '\n      '),
                  ]),
                ]),
                t._v(' '),
                o('div', { staticClass: 'content-column-2' }, [
                  o(
                    'div',
                    { staticClass: 'img-wrap process_img-wrap_height' },
                    [
                      o('scroll-animation', { attrs: { opacity: !1 } }, [
                        o('img', {
                          attrs: { src: t.getUrl(t.data.image.url), alt: '' },
                        }),
                      ]),
                    ],
                    1,
                  ),
                  t._v(' '),
                  o(
                    'p',
                    {
                      staticClass:
                        'content-p process_img-description_margin-top process_img-description_width',
                    },
                    [
                      t._v(
                        '\n        ' +
                          t._s(t.data.description_image) +
                          '\n      ',
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
          '5eba4bfa',
          null,
        );
      n.default = component.exports;
      installComponents(component, { ScrollAnimation: o(347).default });
    },
    399: function(t, n, o) {
      'use strict';
      o.r(n);
      var e = o(16),
        c = o(11);
      function r(object, t) {
        var n = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(object);
          t &&
            (o = o.filter(function(t) {
              return Object.getOwnPropertyDescriptor(object, t).enumerable;
            })),
            n.push.apply(n, o);
        }
        return n;
      }
      var l = {
          name: 'Sustain',
          components: { Image_Scale_Block: o(351).default },
          props: { data: { type: Object, default: {} } },
          methods: {
            getUrl: function(t) {
              return 'https://strapi-up.verodigital.site'.concat(t);
            },
          },
          computed: (function(t) {
            for (var i = 1; i < arguments.length; i++) {
              var source = null != arguments[i] ? arguments[i] : {};
              i % 2
                ? r(Object(source), !0).forEach(function(n) {
                    Object(e.a)(t, n, source[n]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    t,
                    Object.getOwnPropertyDescriptors(source),
                  )
                : r(Object(source)).forEach(function(n) {
                    Object.defineProperty(
                      t,
                      n,
                      Object.getOwnPropertyDescriptor(source, n),
                    );
                  });
            }
            return t;
          })({}, Object(c.c)('app', ['APP_WINDOW_SIZE'])),
        },
        m = (o(427), o(10)),
        component = Object(m.a)(
          l,
          function() {
            var t = this,
              n = t.$createElement,
              o = t._self._c || n;
            return o('div', { staticClass: 'sustain' }, [
              o('span', { staticClass: 'block-title' }, [
                t._v('sustain ability'),
              ]),
              t._v(' '),
              o(
                'span',
                { staticClass: 'content-title process_content-title_margin' },
                [t._v(t._s(t.data.title))],
              ),
              t._v(' '),
              o('div', { staticClass: 'content-block' }, [
                o('div', { staticClass: 'span-1' }, [
                  o('div', { staticClass: 'content-column-1' }, [
                    o('p', { staticClass: 'content-p' }, [
                      t._v(
                        '\n          ' +
                          t._s(t.data.text_image[0].description) +
                          '\n        ',
                      ),
                    ]),
                  ]),
                  t._v(' '),
                  o(
                    'div',
                    {
                      class: [
                        'img-wrap',
                        {
                          'process_img-wrap_height':
                            t.APP_WINDOW_SIZE.width <= 1280,
                        },
                      ],
                    },
                    [
                      o('scroll-animation', { attrs: { opacity: !1 } }, [
                        o('img', {
                          attrs: {
                            src: t.getUrl(t.data.text_image[0].image.url),
                            alt: '',
                          },
                        }),
                      ]),
                    ],
                    1,
                  ),
                ]),
                t._v(' '),
                o(
                  'div',
                  {
                    class: [
                      'img-wrap-2',
                      {
                        'process_img-wrap_height':
                          t.APP_WINDOW_SIZE.width <= 1280,
                      },
                    ],
                  },
                  [
                    o('scroll-animation', { attrs: { opacity: !1 } }, [
                      o('img', {
                        attrs: {
                          src: t.getUrl(t.data.text_image[1].image.url),
                          alt: '',
                        },
                      }),
                    ]),
                  ],
                  1,
                ),
              ]),
            ]);
          },
          [],
          !1,
          null,
          '521fb2b8',
          null,
        );
      n.default = component.exports;
      installComponents(component, { ScrollAnimation: o(347).default });
    },
    421: function(t, n, o) {
      'use strict';
      o(379);
    },
    422: function(t, n, o) {
      (n = o(8)(!1)).push([
        t.i,
        '.philosophy[data-v-1519b6e0]{display:flex;flex-direction:column;margin-bottom:382px}.philosophy .content-block[data-v-1519b6e0]{display:flex;width:100%}.philosophy .content-block .content-column-1[data-v-1519b6e0]{display:flex;flex-direction:column;width:calc(50% + var(--main-very-mini-margin)/2)}.philosophy .content-block .content-column-1 .content-p[data-v-1519b6e0]{margin-left:var(--main-big-margin);margin-right:var(--main-very-mini-margin);white-space:pre-line}.philosophy .content-block .content-column-2[data-v-1519b6e0]{display:flex;flex-direction:column;width:calc(50% - var(--main-very-mini-margin)/2)}.philosophy .content-block .content-column-2 .img-wrap[data-v-1519b6e0]{width:100%}.philosophy .content-block .content-column-2 .content-p[data-v-1519b6e0]{margin-right:var(--main-mini-margin)}@media screen and (max-width:1280px){.philosophy[data-v-1519b6e0]{margin-bottom:165px}}@media screen and (max-width:1024px){.philosophy[data-v-1519b6e0]{margin-bottom:128px}.philosophy .content-title[data-v-1519b6e0]{margin-bottom:69px}}@media screen and (max-width:768px){.philosophy[data-v-1519b6e0]{margin-bottom:120px}}@media screen and (max-width:428px){.philosophy[data-v-1519b6e0]{margin-bottom:119px}.philosophy .content-block[data-v-1519b6e0]{flex-direction:column}.philosophy .content-block .content-column-1[data-v-1519b6e0]{width:unset;margin-bottom:50px}.philosophy .content-block .content-column-2[data-v-1519b6e0]{width:unset}.philosophy .content-block .content-column-2 .content-p[data-v-1519b6e0]{margin-left:var(--main-big-margin)}}',
        '',
      ]),
        (t.exports = n);
    },
    423: function(t, n, o) {
      'use strict';
      o(380);
    },
    424: function(t, n, o) {
      (n = o(8)(!1)).push([
        t.i,
        '.method[data-v-2499867a]{display:flex;flex-direction:column;margin-bottom:251px}.method .scale-wrapper[data-v-2499867a],.method img[data-v-2499867a]{width:100%;height:100%}.method img[data-v-2499867a]{-o-object-fit:cover;object-fit:cover}.method .block-title[data-v-2499867a]{margin-left:var(--main-big-margin)}.method .content-block-span-1[data-v-2499867a]{display:flex;width:100%;margin-bottom:100px}.method .content-block-span-1 .content-column-1[data-v-2499867a]{display:flex;flex-direction:column;width:calc(275px + var(--main-big-margin) + var(--main-very-mini-margin))}.method .content-block-span-1 .content-column-1 .content-p[data-v-2499867a]{display:flex;width:275px;margin-left:var(--main-big-margin);margin-right:var(--main-very-mini-margin)}.method .content-block-span-1 .img-wrap[data-v-2499867a]{width:calc(100% - 275px - var(--main-big-margin) - var(--main-very-mini-margin))}.method .content-block-span-2[data-v-2499867a]{display:flex;width:100%}.method .content-block-span-2 .content-block-span-2__column-1[data-v-2499867a]{width:calc(50% + var(--main-very-mini-margin)/2);display:flex;flex-direction:column}.method .content-block-span-2 .content-block-span-2__column-1 .img-wrap-2[data-v-2499867a]{width:calc(100% - var(--main-mini-margin) - var(--main-very-mini-margin));margin-left:var(--main-mini-margin);margin-right:var(--main-very-mini-margin);height:983px}.method .content-block-span-2 .content-block-span-2__column-1 .content-p[data-v-2499867a]{margin-left:var(--main-big-margin);max-width:calc(100% - var(--main-big-margin) - var(--main-very-mini-margin))}.method .content-block-span-2 .content-block-span-2__column-2[data-v-2499867a]{width:calc(50% - var(--main-very-mini-margin)/2);display:flex;flex-direction:column}.method .content-block-span-2 .content-block-span-2__column-2 .content-p[data-v-2499867a]{margin-right:var(--main-mini-margin)}.method .content-block-span-2 .content-block-span-2__column-2 .img-wrap-3[data-v-2499867a]{width:100%;height:620px;margin-top:123px}@media screen and (max-width:1280px){.method[data-v-2499867a]{margin-bottom:158px}.method .content-title[data-v-2499867a]{margin-bottom:83px}.method .content-block-span-1 .content-column-1[data-v-2499867a]{width:calc(50% + var(--main-very-mini-margin)/2)}.method .content-block-span-1 .content-column-1 .content-p[data-v-2499867a]{margin-left:var(--main-big-margin);margin-right:var(--main-very-mini-margin);width:unset}.method .content-block-span-1 .img-wrap[data-v-2499867a]{width:calc(50% - var(--main-very-mini-margin)/2)}}@media screen and (max-width:1024px){.method[data-v-2499867a]{margin-bottom:108px}.method .content-title[data-v-2499867a]{margin-bottom:120px}.method .content-block-span-2 .content-block-span-2__column-2 .img-wrap-3[data-v-2499867a]{margin-top:78px}}@media screen and (max-width:768px){.method .content-title[data-v-2499867a]{margin-top:40px;margin-bottom:18px}.method .content-block-span-1[data-v-2499867a]{margin-bottom:40px}.method .content-block-span-2 .content-block-span-2__column-1 .img-wrap-2[data-v-2499867a]{width:calc(100% - var(--main-very-mini-margin));margin-left:0}}@media screen and (max-width:428px){.method .content-title[data-v-2499867a]{margin-top:83px;margin-bottom:50px}.method .content-block-span-1[data-v-2499867a]{flex-direction:column;margin-bottom:50px}.method .content-block-span-1 .content-column-1[data-v-2499867a]{width:unset;margin-bottom:50px}.method .content-block-span-1 .img-wrap[data-v-2499867a]{width:unset}.method .content-block-span-2[data-v-2499867a]{flex-direction:column}.method .content-block-span-2 .content-block-span-2__column-2[data-v-2499867a]{order:1;width:unset}.method .content-block-span-2 .content-block-span-2__column-2 .content-p[data-v-2499867a]{margin-left:var(--main-big-margin)}.method .content-block-span-2 .content-block-span-2__column-2 .img-wrap-3[data-v-2499867a]{margin-top:50px}.method .content-block-span-2 .content-block-span-2__column-1[data-v-2499867a]{width:unset;order:2}.method .content-block-span-2 .content-block-span-2__column-1 .content-p[data-v-2499867a]{order:1;max-width:unset;margin-right:var(--main-mini-margin);margin-bottom:50px}.method .content-block-span-2 .content-block-span-2__column-1 .img-wrap-2[data-v-2499867a]{order:2;width:unset;margin-right:0}}',
        '',
      ]),
        (t.exports = n);
    },
    425: function(t, n, o) {
      'use strict';
      o(381);
    },
    426: function(t, n, o) {
      (n = o(8)(!1)).push([
        t.i,
        '.collaboration[data-v-5eba4bfa]{display:flex;flex-direction:column;margin-bottom:425px}.collaboration .block-title[data-v-5eba4bfa]{margin-left:var(--main-big-margin)}.collaboration .content-block[data-v-5eba4bfa]{display:flex;width:100%}.collaboration .content-block .content-column-1[data-v-5eba4bfa]{display:flex;flex-direction:column;width:calc(270px + var(--main-big-margin) + var(--main-very-mini-margin))}.collaboration .content-block .content-column-1 .content-p[data-v-5eba4bfa]{display:flex;width:270px;margin-left:var(--main-big-margin);margin-right:var(--main-very-mini-margin)}.collaboration .content-block .content-column-2[data-v-5eba4bfa]{width:calc(100% - 270px - var(--main-big-margin) - var(--main-very-mini-margin));display:flex;flex-direction:column}.collaboration .content-block .content-column-2 .img-wrap[data-v-5eba4bfa]{width:100%}.collaboration .content-block .content-column-2 .content-p[data-v-5eba4bfa]{width:calc(100% - var(--main-mini-margin));align-self:flex-end;margin-right:var(--main-mini-margin);margin-left:0}@media screen and (max-width:1280px){.collaboration[data-v-5eba4bfa]{margin-bottom:182px}.collaboration .content-block[data-v-5eba4bfa]{display:flex;width:100%}.collaboration .content-block .content-column-1[data-v-5eba4bfa]{width:calc(50% + var(--main-very-mini-margin)/2)}.collaboration .content-block .content-column-1 .content-p[data-v-5eba4bfa]{margin-left:var(--main-big-margin);margin-right:var(--main-very-mini-margin);width:unset}.collaboration .content-block .content-column-2[data-v-5eba4bfa]{width:calc(50% - var(--main-very-mini-margin)/2)}}@media screen and (max-width:1024px){.collaboration[data-v-5eba4bfa]{margin-bottom:114px}.collaboration .content-title[data-v-5eba4bfa]{margin-bottom:72px}}@media screen and (max-width:768px){.collaboration[data-v-5eba4bfa]{margin-bottom:104px}.collaboration .content-title[data-v-5eba4bfa]{margin-top:40px;margin-bottom:18px}}@media screen and (max-width:428px){.collaboration[data-v-5eba4bfa]{margin-bottom:117px}.collaboration .content-title[data-v-5eba4bfa]{margin-top:83px;margin-bottom:50px}.collaboration .content-block[data-v-5eba4bfa]{flex-direction:column}.collaboration .content-block .content-column-1[data-v-5eba4bfa]{width:unset;margin-bottom:50px}.collaboration .content-block .content-column-2[data-v-5eba4bfa]{width:unset}.collaboration .content-block .content-column-2 .content-p[data-v-5eba4bfa]{width:unset;margin-left:var(--main-big-margin)}}',
        '',
      ]),
        (t.exports = n);
    },
    427: function(t, n, o) {
      'use strict';
      o(382);
    },
    428: function(t, n, o) {
      (n = o(8)(!1)).push([
        t.i,
        '.sustain[data-v-521fb2b8]{display:flex;flex-direction:column;margin-bottom:200px}.sustain .block-title[data-v-521fb2b8]{margin-left:var(--main-big-margin)}.sustain .content-block[data-v-521fb2b8]{display:flex;width:100%;flex-direction:column}.sustain .content-block .span-1[data-v-521fb2b8]{display:flex;width:100%;margin-bottom:100px}.sustain .content-block .span-1 .content-column-1[data-v-521fb2b8]{width:calc(50% + var(--main-very-mini-margin)/2);display:flex;flex-direction:column}.sustain .content-block .span-1 .content-column-1 .content-p[data-v-521fb2b8]{box-sizing:content-box;width:calc(100% - var(--main-big-margin) - var(--main-very-mini-margin));margin-left:var(--main-big-margin);margin-right:var(--main-very-mini-margin);white-space:pre-line}.sustain .content-block .span-1 .img-wrap[data-v-521fb2b8]{width:calc(50% - var(--main-very-mini-margin)/2);height:620px}.sustain .content-block .img-wrap-2[data-v-521fb2b8]{width:71%;height:840px}@media screen and (max-width:1280px){.sustain[data-v-521fb2b8]{margin-bottom:250px}.sustain .content-title[data-v-521fb2b8]{margin-bottom:75px}.sustain .content-block .span-1[data-v-521fb2b8]{margin-bottom:67px}}@media screen and (max-width:1024px){.sustain[data-v-521fb2b8]{margin-bottom:100px}.sustain .content-title[data-v-521fb2b8]{margin-bottom:112px}}@media screen and (max-width:768px){.sustain .content-title[data-v-521fb2b8]{margin-top:40px;margin-bottom:18px}.sustain .content-block .span-1[data-v-521fb2b8]{margin-bottom:50px}.sustain .content-block .img-wrap-2[data-v-521fb2b8]{width:100%}}@media screen and (max-width:428px){.sustain .content-title[data-v-521fb2b8]{margin-top:83px;margin-bottom:50px}.sustain .content-block .span-1[data-v-521fb2b8]{flex-direction:column}.sustain .content-block .span-1 .content-column-1[data-v-521fb2b8]{width:unset;margin-bottom:50px}.sustain .content-block .span-1 .img-wrap[data-v-521fb2b8]{width:unset}}',
        '',
      ]),
        (t.exports = n);
    },
    429: function(t, n, o) {
      'use strict';
      o(383);
    },
    430: function(t, n, o) {
      (n = o(8)(!1)).push([
        t.i,
        '.process[data-v-46283fdb]{width:100%;display:flex;flex-direction:column}.process .title-img-wrap[data-v-46283fdb]{position:relative;width:100%;height:var(--winHeight);display:flex;align-items:center;transition:height .3s}.process .title-img-wrap .people-title[data-v-46283fdb]{position:absolute;z-index:1}',
        '',
      ]),
        (t.exports = n);
    },
    455: function(t, n, o) {
      'use strict';
      o.r(n);
      o(39);
      var e = o(7),
        c = o(349),
        r = o(396),
        l = o(397),
        m = o(398),
        d = o(399),
        v = o(168),
        h = {
          name: 'Process',
          components: {
            News: c.default,
            Philosophy: r.default,
            Method: l.default,
            Collaboration: m.default,
            Sustain: d.default,
          },
          asyncData: function(t) {
            return Object(e.a)(
              regeneratorRuntime.mark(function n() {
                var o, e;
                return regeneratorRuntime.wrap(
                  function(n) {
                    for (;;)
                      switch ((n.prev = n.next)) {
                        case 0:
                          return (
                            (o = t.error),
                            t.params,
                            (n.prev = 1),
                            (n.next = 4),
                            v.a.getPage('process')
                          );
                        case 4:
                          return (
                            (e = n.sent),
                            n.abrupt('return', { process: e.data })
                          );
                        case 8:
                          (n.prev = 8),
                            (n.t0 = n.catch(1)),
                            o({
                              statusCode: 503,
                              message: 'Unable to fetch blogs at this time',
                            });
                        case 11:
                        case 'end':
                          return n.stop();
                      }
                  },
                  n,
                  null,
                  [[1, 8]],
                );
              }),
            )();
          },
          data: function() {
            return { process: {} };
          },
          methods: {
            getUrl: function(t) {
              return 'https://strapi-up.verodigital.site'.concat(t);
            },
          },
        },
        f = (o(429), o(10)),
        component = Object(f.a)(
          h,
          function() {
            var t = this,
              n = t.$createElement,
              o = t._self._c || n;
            return o(
              'div',
              { staticClass: 'process' },
              [
                o(
                  'div',
                  { staticClass: 'title-img-wrap' },
                  [
                    o(
                      'span',
                      {
                        staticClass:
                          'people-title main-content-margin-left-right main-page_start-text',
                      },
                      [t._v(t._s(t.process.title))],
                    ),
                    t._v(' '),
                    o('ScrollAnimation', { attrs: { cover: '' } }, [
                      o('img', {
                        attrs: {
                          src: t.getUrl(t.process.background_image.url),
                          alt: '',
                        },
                      }),
                    ]),
                  ],
                  1,
                ),
                t._v(' '),
                o('Philosophy', { attrs: { data: t.process.philosophy } }),
                t._v(' '),
                o('Method', { attrs: { data: t.process.desing_method } }),
                t._v(' '),
                o('Collaboration', {
                  attrs: { data: t.process.collaboration },
                }),
                t._v(' '),
                o('Sustain', { attrs: { data: t.process.susutain_ability } }),
                t._v(' '),
                o('News'),
              ],
              1,
            );
          },
          [],
          !1,
          null,
          '46283fdb',
          null,
        );
      n.default = component.exports;
      installComponents(component, {
        ScrollAnimation: o(347).default,
        Philosophy: o(396).default,
        Method: o(397).default,
        Collaboration: o(398).default,
        Sustain: o(399).default,
        News: o(349).default,
      });
    },
  },
]);
