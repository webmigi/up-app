(window.webpackJsonp = window.webpackJsonp || []).push([
  [7],
  {
    386: function(t, e, n) {
      var content = n(436);
      'string' == typeof content && (content = [[t.i, content, '']]),
        content.locals && (t.exports = content.locals);
      (0, n(9).default)('bff76daa', content, !0, { sourceMap: !1 });
    },
    387: function(t, e, n) {
      var content = n(438);
      'string' == typeof content && (content = [[t.i, content, '']]),
        content.locals && (t.exports = content.locals);
      (0, n(9).default)('12d3db51', content, !0, { sourceMap: !1 });
    },
    400: function(t, e, n) {
      'use strict';
      n.r(e);
      var o = n(16),
        c = n(11);
      function r(object, t) {
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
            ? r(Object(source), !0).forEach(function(e) {
                Object(o.a)(t, e, source[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(
                t,
                Object.getOwnPropertyDescriptors(source),
              )
            : r(Object(source)).forEach(function(e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(source, e),
                );
              });
        }
        return t;
      }
      var l = {
          name: 'Item_Project_Content',
          props: ['project'],
          components: { Image_Scale_Block: n(351).default },
          computed: m({}, Object(c.c)('app', ['APP_WINDOW_SIZE'])),
          methods: m(
            m({}, Object(c.b)('app', ['setModalImgIsActive'])),
            {},
            {
              getUrl: function(t) {
                return 'https://strapi-up.verodigital.site'.concat(t);
              },
            },
          ),
        },
        d = (n(435), n(10)),
        component = Object(d.a)(
          l,
          function() {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n(
              'div',
              {
                class: [
                  'project-content',
                  {
                    'project-content-4':
                      'project-style-type.style-4' === t.project.__component,
                  },
                ],
              },
              [
                'project-style-type.style-1' === t.project.__component
                  ? n('div', { staticClass: 'content-type-1' }, [
                      n(
                        'div',
                        {
                          staticClass:
                            'content-type-1_img-wrap\n     item-project_img-wrap_height',
                          on: { click: t.setModalImgIsActive },
                        },
                        [
                          n(
                            'ScrollAnimation',
                            { attrs: { opacity: !1, cover: '' } },
                            [
                              n('img', {
                                attrs: {
                                  src: t.getUrl(t.project.image.url),
                                  alt: '',
                                },
                              }),
                            ],
                          ),
                        ],
                        1,
                      ),
                      t._v(' '),
                      void 0 !== t.project.description
                        ? n(
                            'p',
                            {
                              staticClass:
                                'item-project_img-description_width\n       item-project_img-description_margin-top\n       content-p',
                            },
                            [
                              t._v(
                                '\n      ' +
                                  t._s(t.project.description) +
                                  '\n    ',
                              ),
                            ],
                          )
                        : t._e(),
                    ])
                  : t._e(),
                t._v(' '),
                'project-style-type.style-2' === t.project.__component
                  ? n('div', { staticClass: 'content-type-2' }, [
                      n(
                        'div',
                        {
                          staticClass:
                            'content-type-2_img-wrap\n               item-project_img-wrap_height',
                        },
                        [
                          n(
                            'ScrollAnimation',
                            { attrs: { opacity: !1, cover: '' } },
                            [
                              n('img', {
                                attrs: {
                                  src: t.getUrl(t.project.image.url),
                                  alt: '',
                                },
                              }),
                            ],
                          ),
                        ],
                        1,
                      ),
                      t._v(' '),
                      void 0 !== t.project.description
                        ? n(
                            'p',
                            {
                              staticClass:
                                'item-project_img-description_width\n       item-project_img-description_margin-top\n       content-p',
                            },
                            [
                              t._v(
                                '\n      ' +
                                  t._s(t.project.description) +
                                  '\n    ',
                              ),
                            ],
                          )
                        : t._e(),
                    ])
                  : t._e(),
                t._v(' '),
                'project-style-type.style-3' === t.project.__component
                  ? n('div', { staticClass: 'content-type-3' }, [
                      n('div', { staticClass: 'span-1' }, [
                        n('div', { staticClass: 'content-type-3_column-1' }, [
                          n(
                            'div',
                            {
                              class: [
                                'content-type-3_img-wrap-1',
                                {
                                  'item-project_img-wrap_height':
                                    t.APP_WINDOW_SIZE.width <= 1280,
                                },
                              ],
                            },
                            [
                              n(
                                'ScrollAnimation',
                                { attrs: { opacity: !1, cover: '' } },
                                [
                                  n('img', {
                                    attrs: {
                                      src: t.getUrl(t.project.image_1.url),
                                      alt: '',
                                    },
                                  }),
                                ],
                              ),
                            ],
                            1,
                          ),
                          t._v(' '),
                          void 0 !== t.project.description
                            ? n(
                                'p',
                                {
                                  staticClass:
                                    'item-project_img-description_margin-top\n       content-p',
                                },
                                [
                                  t._v(
                                    '\n          ' +
                                      t._s(t.project.description) +
                                      '\n        ',
                                  ),
                                ],
                              )
                            : t._e(),
                        ]),
                        t._v(' '),
                        n('div', { staticClass: 'content-type-3_column-2' }, [
                          n(
                            'div',
                            {
                              class: [
                                'content-type-3_img-wrap-2',
                                {
                                  'item-project_img-wrap_height':
                                    t.APP_WINDOW_SIZE.width <= 1280,
                                },
                              ],
                            },
                            [
                              n(
                                'ScrollAnimation',
                                { attrs: { opacity: !1, cover: '' } },
                                [
                                  n('img', {
                                    attrs: {
                                      src: t.getUrl(t.project.image_2.url),
                                      alt: '',
                                    },
                                  }),
                                ],
                              ),
                            ],
                            1,
                          ),
                        ]),
                      ]),
                      t._v(' '),
                      n('div', { staticClass: 'span-2' }, [
                        n(
                          'div',
                          {
                            class: [
                              'content-type-3_img-wrap-3',
                              {
                                'item-project_img-wrap_height':
                                  t.APP_WINDOW_SIZE.width <= 1280,
                              },
                            ],
                          },
                          [
                            n(
                              'ScrollAnimation',
                              { attrs: { opacity: !1, cover: '' } },
                              [
                                n('img', {
                                  attrs: {
                                    src: t.getUrl(t.project.image_3.url),
                                    alt: '',
                                  },
                                }),
                              ],
                            ),
                          ],
                          1,
                        ),
                      ]),
                    ])
                  : t._e(),
                t._v(' '),
                'project-style-type.style-4' === t.project.__component
                  ? n('div', { staticClass: 'content-type-4' }, [
                      n(
                        'div',
                        {
                          class: [
                            'content-type-4_img-wrap',
                            {
                              'item-project_img-wrap_height':
                                t.APP_WINDOW_SIZE.width <= 1280,
                            },
                          ],
                        },
                        [
                          n('div', {
                            staticClass: 'background-fixed',
                            style:
                              'background-image: url(' +
                              t.getUrl(t.project.image.url) +
                              ')',
                          }),
                        ],
                      ),
                    ])
                  : t._e(),
                t._v(' '),
                'project-style-type.style-5' === t.project.__component
                  ? n('div', { staticClass: 'content-type-5' }, [
                      n(
                        'div',
                        {
                          class: [
                            'content-type-5_img-wrap',
                            {
                              'item-project_img-wrap_height':
                                t.APP_WINDOW_SIZE.width <= 1280,
                            },
                          ],
                        },
                        [
                          n(
                            'ScrollAnimation',
                            { attrs: { opacity: !1, cover: '' } },
                            [
                              n('img', {
                                attrs: {
                                  src: t.getUrl(t.project.image.url),
                                  alt: '',
                                },
                              }),
                            ],
                          ),
                        ],
                        1,
                      ),
                      t._v(' '),
                      void 0 !== t.project.description
                        ? n(
                            'p',
                            {
                              staticClass:
                                'item-project_img-description_margin-top\n       item-project_img-description_width\n       content-p',
                            },
                            [
                              t._v(
                                '\n      ' +
                                  t._s(t.project.description) +
                                  '\n    ',
                              ),
                            ],
                          )
                        : t._e(),
                    ])
                  : t._e(),
                t._v(' '),
                'project-style-type.style-6' === t.project.__component
                  ? n('div', { staticClass: 'content-type-6' }, [
                      n(
                        'div',
                        {
                          class: [
                            'content-type-6_img-wrap',
                            {
                              'item-project_img-wrap_height':
                                t.APP_WINDOW_SIZE.width <= 1280,
                            },
                          ],
                        },
                        [
                          n(
                            'ScrollAnimation',
                            { attrs: { opacity: !1, cover: '' } },
                            [
                              n('img', {
                                attrs: {
                                  src: t.getUrl(t.project.image.url),
                                  alt: '',
                                },
                              }),
                            ],
                          ),
                        ],
                        1,
                      ),
                      t._v(' '),
                      void 0 !== t.project.description
                        ? n(
                            'p',
                            {
                              staticClass:
                                'item-project_img-description_width\n       item-project_img-description_margin-top\n       content-p',
                            },
                            [
                              t._v(
                                '\n      ' +
                                  t._s(t.project.description) +
                                  '\n    ',
                              ),
                            ],
                          )
                        : t._e(),
                    ])
                  : t._e(),
              ],
            );
          },
          [],
          !1,
          null,
          null,
          null,
        );
      e.default = component.exports;
      installComponents(component, { ScrollAnimation: n(347).default });
    },
    435: function(t, e, n) {
      'use strict';
      n(386);
    },
    436: function(t, e, n) {
      (e = n(8)(!1)).push([
        t.i,
        '.project-content{display:flex;flex-direction:column;width:100%;overflow:hidden;background-color:#fff}.project-content.project-content-4{background-color:transparent;position:relative;height:100vh}.project-content .content-type-1{width:100%;margin-right:var(--main-mini-margin);display:flex;flex-direction:column;margin-bottom:144px}.project-content .content-type-1 .content-type-1_img-wrap{width:calc(100% - var(--main-mini-margin))}.project-content .content-type-1 .content-p{margin-left:var(--main-big-margin)}.project-content .content-type-2{width:70%;display:flex;flex-direction:column;align-self:flex-end;margin-bottom:167px}.project-content .content-type-2 .content-type-2_img-wrap{width:100%}.project-content .content-type-2 .content-p{align-self:flex-end;margin-right:var(--main-mini-margin)}.project-content .content-type-3{width:100%;display:flex;flex-direction:column;margin-bottom:280px}.project-content .content-type-3 .span-1{width:100%;display:flex}.project-content .content-type-3 .span-1 .content-type-3_column-1{width:calc(50% + 30px);display:flex;flex-direction:column}.project-content .content-type-3 .span-1 .content-type-3_column-1 .content-type-3_img-wrap-1{width:calc(100% - var(--main-mini-margin) - 100px);height:983px;margin-left:var(--main-mini-margin);margin-right:100px}.project-content .content-type-3 .span-1 .content-type-3_column-1 .content-p{margin-left:var(--main-big-margin);margin-right:100px;align-self:flex-end}.project-content .content-type-3 .span-1 .content-type-3_column-2{display:flex;width:calc(50% - 30px);margin-bottom:100px}.project-content .content-type-3 .span-1 .content-type-3_column-2 .content-type-3_img-wrap-2{width:100%;height:620px;margin-top:673px}.project-content .content-type-3 .span-2{width:100%;display:flex}.project-content .content-type-3 .span-2 .content-type-3_img-wrap-3{width:70%;height:840px}.project-content .content-type-4{width:100%;margin-bottom:280px;position:fixed;left:0;top:0;right:0;bottom:0;z-index:-1}.project-content .content-type-4 .content-type-4_img-wrap{width:100%;height:var(--winHeight)}.project-content .content-type-4 .content-type-4_img-wrap .background-fixed{width:100%;height:100%;background-attachment:fixed;background-size:cover}.project-content .content-type-5{width:65%;display:flex;flex-direction:column;align-self:flex-end;margin-right:var(--main-mini-margin);margin-bottom:280px;margin-top:100px}.project-content .content-type-5 .content-type-5_img-wrap{width:100%;height:970px}.project-content .content-type-5 .content-p,.project-content .content-type-6{margin-left:var(--main-mini-margin)}.project-content .content-type-6{width:calc(100% - var(--main-mini-margin));display:flex;flex-direction:column;align-self:flex-end;margin-bottom:125px}.project-content .content-type-6 .content-type-6_img-wrap{width:100%;height:970px}.project-content .content-type-6 .content-p{align-self:center}@media screen and (max-width:1280px){.project-content .content-type-1{margin-right:0;margin-bottom:57px}.project-content .content-type-1 .content-type-1_img-wrap{width:100%}.project-content .content-type-2{margin-bottom:57px}.project-content .content-type-3{margin-bottom:100px}.project-content .content-type-3 .span-1 .content-type-3_column-1{width:calc(50% - var(--main-very-mini-margin)/2 + var(--main-very-mini-margin))}.project-content .content-type-3 .span-1 .content-type-3_column-1 .content-type-3_img-wrap-1{width:calc(100% - var(--main-mini-margin) - var(--main-very-mini-margin));margin-right:var(--main-very-mini-margin)}.project-content .content-type-3 .span-1 .content-type-3_column-1 .content-p{margin-right:var(--main-very-mini-margin)}.project-content .content-type-3 .span-1 .content-type-3_column-2{width:calc(50% - var(--main-very-mini-margin)/2)}.project-content .content-type-3 .span-1 .content-type-3_column-2 .content-type-3_img-wrap-2{margin-top:380px}.project-content .content-type-4{margin-bottom:100px}.project-content .content-type-5{margin-right:0;width:70%;margin-bottom:57px}.project-content .content-type-5 .content-p{margin-left:0}.project-content .content-type-6{margin-bottom:187px}.project-content .content-type-6 .content-p{align-self:flex-end;margin-right:var(--main-mini-margin)}}@media screen and (max-width:1024px){.project-content .content-type-1{margin-bottom:90px}.project-content .content-type-2{width:73%;margin-bottom:90px}.project-content .content-type-3,.project-content .content-type-3 .span-1 .content-type-3_column-2{margin-bottom:90px}.project-content .content-type-3 .span-1 .content-type-3_column-2 .content-type-3_img-wrap-2{margin-top:295px}.project-content .content-type-3 .span-2 .content-type-3_img-wrap-3{width:73%}.project-content .content-type-4{margin-bottom:90px}.project-content .content-type-5{width:73%;margin-bottom:90px}.project-content .content-type-6{margin-bottom:195px}.project-content .content-type-6 .content-p{align-self:flex-start;margin-left:var(--main-big-margin)}}@media screen and (max-width:768px){.project-content .content-type-1{margin-bottom:60px}.project-content .content-type-1 .content-p{align-self:flex-end;margin-right:var(--main-mini-margin)}.project-content .content-type-2{width:72%;margin-bottom:60px}.project-content .content-type-3 .span-2 .content-type-3_img-wrap-3{width:72%}.project-content .content-type-5{width:72%;margin-bottom:60px}.project-content .content-type-6{margin-bottom:155px}.project-content .content-type-6 .content-p{margin-left:calc(var(--main-big-margin) - var(--main-mini-margin));margin-right:var(--main-mini-margin);max-width:unset!important}}@media screen and (max-width:428px){.project-content .content-type-1{margin-bottom:50px}.project-content .content-type-2{width:100%;margin-bottom:50px}.project-content .content-type-2 .content-p{margin-left:var(--main-big-margin)}.project-content .content-type-3{margin-bottom:50px}.project-content .content-type-3 .span-1{flex-direction:column}.project-content .content-type-3 .span-1 .content-type-3_column-1{width:100%;margin-bottom:50px}.project-content .content-type-3 .span-1 .content-type-3_column-1 .content-type-3_img-wrap-1{width:unset;margin-right:0;margin-left:0}.project-content .content-type-3 .span-1 .content-type-3_column-1 .content-p{margin-right:var(--main-mini-margin)}.project-content .content-type-3 .span-1 .content-type-3_column-2{width:unset;margin-bottom:50px}.project-content .content-type-3 .span-1 .content-type-3_column-2 .content-type-3_img-wrap-2{margin-top:0}.project-content .content-type-3 .span-2 .content-type-3_img-wrap-3{width:100%}.project-content .content-type-4{margin-bottom:50px}.project-content .content-type-5{width:unset;margin-bottom:50px}.project-content .content-type-5 .content-p{margin-left:var(--main-big-margin);margin-right:var(--main-mini-margin)}.project-content .content-type-6{margin-bottom:162px;margin-left:0;width:unset}.project-content .content-type-6 .content-p{margin-left:var(--main-big-margin);margin-right:var(--main-mini-margin)}}',
        '',
      ]),
        (t.exports = e);
    },
    437: function(t, e, n) {
      'use strict';
      n(387);
    },
    438: function(t, e, n) {
      (e = n(8)(!1)).push([
        t.i,
        '.item-project[data-v-12f5d1ae]{width:100%;display:flex;flex-direction:column}.item-project .title-img-wrap[data-v-12f5d1ae]{position:relative;width:100%;height:var(--winHeight);display:flex;align-items:center;transition:height .3s}.item-project .title-img-wrap .project-title[data-v-12f5d1ae]{margin-right:var(--main-mini-margin);margin-left:var(--main-mini-margin);position:absolute;z-index:1}.item-project .description-block[data-v-12f5d1ae]{width:100%;display:flex;justify-content:space-between;padding-top:133px;padding-bottom:47px;background-color:#fff}.item-project .description-block .description-text-wrap[data-v-12f5d1ae]{display:flex;flex-direction:column;width:calc(50% - var(--main-very-mini-margin)/2)}.item-project .description-block .description-text-wrap .content-p[data-v-12f5d1ae]{white-space:pre-line}.item-project .project-values-wrap[data-v-12f5d1ae]{width:calc(50% - var(--main-very-mini-margin)/2);display:flex;flex-direction:column}.item-project .project-values-wrap .values-block[data-v-12f5d1ae]{width:100%;display:flex;flex-wrap:wrap}.item-project .project-values-wrap .values-block .value[data-v-12f5d1ae]{width:100%}.item-project .project-values-wrap .values-block .value.group[data-v-12f5d1ae]{width:50%}.item-project .paginator[data-v-12f5d1ae]{display:flex;align-items:center;justify-content:center;padding-bottom:180px;background-color:#fff}@media screen and (max-width:1280px){.item-project .description-block[data-v-12f5d1ae]{padding-top:103px;padding-bottom:67px}.paginator[data-v-12f5d1ae]{padding-bottom:100px!important}}@media screen and (max-width:1024px){.item-project .description-block[data-v-12f5d1ae]{padding-bottom:117px}}@media screen and (max-width:768px){.item-project .description-block[data-v-12f5d1ae]{padding-top:53px;padding-bottom:53px}}@media screen and (max-width:428px){.item-project .description-block[data-v-12f5d1ae]{padding-top:103px;flex-direction:column;padding-bottom:179px}.item-project .description-block .project-values-wrap[data-v-12f5d1ae]{width:unset;order:1;margin-left:var(--main-big-margin)}.item-project .description-block .description-text-wrap[data-v-12f5d1ae]{width:unset;order:2}.item-project .description-block .description-text-wrap .content-p[data-v-12f5d1ae]{margin-right:var(--main-mini-margin)}}',
        '',
      ]),
        (t.exports = e);
    },
    458: function(t, e, n) {
      'use strict';
      n.r(e);
      var o = n(16),
        c = (n(39), n(7)),
        r = n(11),
        m = n(349),
        l = n(400),
        d = n(111),
        j = n(168);
      function y(object, t) {
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
      var v = {
          name: 'single-project',
          components: {
            News: m.default,
            Item_Project_Content: l.default,
            Arrow_Btn: d.a,
          },
          asyncData: function(t) {
            return Object(c.a)(
              regeneratorRuntime.mark(function e() {
                var n, o, c, r;
                return regeneratorRuntime.wrap(
                  function(e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (n = t.error),
                            (o = t.params),
                            (e.prev = 1),
                            (e.next = 4),
                            j.a.getPage('projects-lists/' + o.id)
                          );
                        case 4:
                          return (
                            (c = e.sent),
                            (e.next = 7),
                            j.a.getPage('projects-lists/count')
                          );
                        case 7:
                          return (
                            (r = e.sent),
                            e.abrupt('return', {
                              project: c.data,
                              count: r.data,
                            })
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
            return { project: {}, count: {} };
          },
          methods: {
            getUrl: function(t) {
              return 'https://strapi-up.verodigital.site'.concat(t);
            },
          },
          computed: (function(t) {
            for (var i = 1; i < arguments.length; i++) {
              var source = null != arguments[i] ? arguments[i] : {};
              i % 2
                ? y(Object(source), !0).forEach(function(e) {
                    Object(o.a)(t, e, source[e]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    t,
                    Object.getOwnPropertyDescriptors(source),
                  )
                : y(Object(source)).forEach(function(e) {
                    Object.defineProperty(
                      t,
                      e,
                      Object.getOwnPropertyDescriptor(source, e),
                    );
                  });
            }
            return t;
          })({}, Object(r.c)('app', ['APP_WINDOW_SIZE'])),
        },
        _ = (n(437), n(10)),
        component = Object(_.a)(
          v,
          function() {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n(
              'div',
              { staticClass: 'item-project' },
              [
                n(
                  'div',
                  { staticClass: 'title-img-wrap' },
                  [
                    n(
                      'span',
                      { staticClass: 'project-title main-page_start-text' },
                      [t._v(t._s(t.project.title))],
                    ),
                    t._v(' '),
                    n(
                      'scroll-animation',
                      { attrs: { opacity: !1, cover: '' } },
                      [
                        n('img', {
                          attrs: {
                            src: t.getUrl(t.project.background_image.url),
                            alt: '',
                          },
                        }),
                      ],
                    ),
                  ],
                  1,
                ),
                t._v(' '),
                n('div', { staticClass: 'description-block' }, [
                  n('div', { staticClass: 'description-text-wrap' }, [
                    n(
                      'p',
                      {
                        staticClass: 'content-p pages-content-margin-left-big',
                      },
                      [
                        t._v(
                          '\n        ' +
                            t._s(t.project.description) +
                            '\n      ',
                        ),
                      ],
                    ),
                  ]),
                  t._v(' '),
                  n('div', { staticClass: 'project-values-wrap' }, [
                    n(
                      'div',
                      { staticClass: 'values-block' },
                      [
                        t._l(t.project.tags.tag, function(e, o) {
                          return n(
                            'div',
                            { class: ['value', { group: 1 === o || 2 === o }] },
                            [
                              n('span', { staticClass: 'text-very-small' }, [
                                t._v(t._s(e.title)),
                              ]),
                              t._v(' '),
                              n(
                                'span',
                                {
                                  staticClass: 'item-project_description_value',
                                },
                                [t._v(t._s(e.description))],
                              ),
                            ],
                          );
                        }),
                        t._v(' '),
                        t.APP_WINDOW_SIZE.width > 500
                          ? n('div', { staticClass: 'value' }, [
                              n(
                                'span',
                                { staticClass: 'item-project_pres-view' },
                                [t._v('presentation view')],
                              ),
                            ])
                          : t._e(),
                      ],
                      2,
                    ),
                  ]),
                ]),
                t._v(' '),
                t._l(t.project.project_content, function(t, e) {
                  return n('Item_Project_Content', {
                    key: e,
                    attrs: { project: t },
                  });
                }),
                t._v(' '),
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
                              '/project/' +
                              (1 === t.project.id ? t.count : t.project.id - 1),
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
                              (t.project.id === t.count ? 1 : t.project.id + 1),
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
                t._v(' '),
                n('News'),
              ],
              2,
            );
          },
          [],
          !1,
          null,
          '12f5d1ae',
          null,
        );
      e.default = component.exports;
      installComponents(component, {
        ScrollAnimation: n(347).default,
        Item_Project_Content: n(400).default,
        News: n(349).default,
      });
    },
  },
]);
