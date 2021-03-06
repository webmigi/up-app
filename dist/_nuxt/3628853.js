(window.webpackJsonp = window.webpackJsonp || []).push([
  [3],
  {
    348: function(t, e, o) {
      'use strict';
      o.r(e);
      var n = { name: 'Content-btn', props: ['title', 'place'] },
        r = (o(354), o(10)),
        component = Object(r.a)(
          n,
          function() {
            var t = this.$createElement;
            return (this._self._c || t)(
              'button',
              {
                class: [
                  'content-btn-text',
                  'content-btn',
                  { 'content-btn-jobs': 'jobs' === this.place },
                  { 'start-bat-span': 'start-span' === this.place },
                ],
              },
              [this._v('\n  ' + this._s(this.title) + '\n')],
            );
          },
          [],
          !1,
          null,
          '74aa8ce6',
          null,
        );
      e.default = component.exports;
    },
    350: function(t, e, o) {
      var content = o(355);
      'string' == typeof content && (content = [[t.i, content, '']]),
        content.locals && (t.exports = content.locals);
      (0, o(9).default)('e4ebdda6', content, !0, { sourceMap: !1 });
    },
    354: function(t, e, o) {
      'use strict';
      o(350);
    },
    355: function(t, e, o) {
      (e = o(8)(!1)).push([
        t.i,
        '.content-btn[data-v-74aa8ce6]{position:relative;width:100%;height:100%;cursor:pointer}.content-btn[data-v-74aa8ce6]:after{content:"";position:absolute;top:100%;left:0;width:0;height:4px;background-color:#000;transition:width .3s}.content-btn[data-v-74aa8ce6]:hover:after{width:100%}@media screen and (max-width:428px){.content-btn-jobs[data-v-74aa8ce6]{font-size:14px}}',
        '',
      ]),
        (t.exports = e);
    },
    356: function(t, e, o) {
      var content = o(367);
      'string' == typeof content && (content = [[t.i, content, '']]),
        content.locals && (t.exports = content.locals);
      (0, o(9).default)('091b23d0', content, !0, { sourceMap: !1 });
    },
    357: function(t, e, o) {
      var content = o(369);
      'string' == typeof content && (content = [[t.i, content, '']]),
        content.locals && (t.exports = content.locals);
      (0, o(9).default)('e8dcd55a', content, !0, { sourceMap: !1 });
    },
    358: function(t, e, o) {
      'use strict';
      o.r(e);
      var n = o(351),
        r = o(348),
        c = o(347),
        l = {
          name: 'Studio',
          components: {
            Image_Scale_Block: n.default,
            Content_btn: r.default,
            ScrollAnimation: c.default,
          },
          props: { data: { default: {}, type: Object } },
          data: function() {
            return {};
          },
          methods: {
            getUrl: function(t) {
              return 'https://strapi-up.verodigital.site'.concat(t);
            },
          },
        },
        d = (o(366), o(10)),
        component = Object(d.a)(
          l,
          function() {
            var t = this,
              e = t.$createElement,
              o = t._self._c || e;
            return o('div', { staticClass: 'studio-block' }, [
              o(
                'span',
                {
                  staticClass: 'main-page__content-title-position block-title',
                },
                [t._v('studio')],
              ),
              t._v(' '),
              o('div', { staticClass: 'studio_content-block' }, [
                o(
                  'div',
                  { staticClass: 'studio_img-wrap' },
                  [
                    o(
                      'ScrollAnimation',
                      { staticClass: 'cover', attrs: { opacity: !1 } },
                      [
                        o('img', {
                          attrs: {
                            src: t.getUrl(t.data.about.image.url),
                            alt: '',
                          },
                        }),
                      ],
                    ),
                  ],
                  1,
                ),
                t._v(' '),
                o('div', { staticClass: 'studio_text-block__wrap' }, [
                  o(
                    'div',
                    {
                      class: [
                        'studio_text-block',
                        {
                          'studio-people_text-block':
                            '/People' === this.$route.path,
                        },
                      ],
                    },
                    [
                      o('span', { staticClass: 'content-title' }, [
                        t._v(t._s(t.data.about.title)),
                      ]),
                      t._v(' '),
                      o('p', { staticClass: 'studio__text_p content-p' }, [
                        t._v(t._s(t.data.about.description)),
                      ]),
                      t._v(' '),
                      '/' === this.$route.path && t.data.about.link
                        ? o(
                            'div',
                            { staticClass: 'studio_btn_wrap' },
                            [
                              o(
                                'nuxt-link',
                                { attrs: { to: t.data.about.link.link } },
                                [
                                  o('Content_btn', {
                                    attrs: { title: t.data.about.link.name },
                                  }),
                                ],
                                1,
                              ),
                            ],
                            1,
                          )
                        : t._e(),
                    ],
                  ),
                ]),
              ]),
            ]);
          },
          [],
          !1,
          null,
          '130cffba',
          null,
        );
      e.default = component.exports;
      installComponents(component, {
        ScrollAnimation: o(347).default,
        Content_btn: o(348).default,
      });
    },
    359: function(t, e, o) {
      'use strict';
      o.r(e);
      o(21), o(69), o(39);
      var n = o(7),
        r = o(347),
        c = o(348),
        l =
          (o(74),
          {
            name: 'Projects',
            components: { ScrollAnimation: r.default, Content_btn: c.default },
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
                              'https://strapi-up.verodigital.site/projects-lists',
                            ).then(function(t) {
                              return t.json();
                            })
                          );
                        case 2:
                          return (
                            (t.projectsList = e.sent),
                            (e.next = 5),
                            fetch(
                              'https://strapi-up.verodigital.site/project',
                            ).then(function(t) {
                              return t.json();
                            })
                          );
                        case 5:
                          t.projectsPage = e.sent;
                        case 6:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              )();
            }),
            data: function() {
              return { projectsList: {}, projectsPage: {} };
            },
            methods: {
              getUrl: function(t) {
                return 'https://strapi-up.verodigital.site'.concat(t);
              },
              bigClass: function(t) {
                return 0 === t || 5 === t;
              },
            },
            computed: {
              title: function() {
                return '/project' === this.$route.path
                  ? 'projects'
                  : 'featured projects';
              },
              checkProjectPage: function() {
                return '/project' === this.$route.path;
              },
              contentBlockClasses: function() {
                return [
                  'content-block',
                  'main-content-margin-left-right',
                  {
                    'content-block-project-page-margin-top': this
                      .checkProjectPage,
                  },
                  {
                    'content-block-project-page-margin-bottom': this
                      .checkProjectPage,
                  },
                ];
              },
            },
          }),
        d = (o(368), o(10)),
        component = Object(d.a)(
          l,
          function() {
            var t = this,
              e = t.$createElement,
              o = t._self._c || e;
            return o(
              'div',
              {
                class: [
                  'projects-block',
                  {
                    'projects-block_projects-page':
                      '/project' === this.$route.path,
                  },
                ],
              },
              [
                o(
                  'span',
                  {
                    staticClass:
                      'main-page__content-title-position block-title',
                  },
                  [t._v(t._s(t.title))],
                ),
                t._v(' '),
                '/project' === this.$route.path
                  ? o(
                      'div',
                      {
                        staticClass:
                          'description pages-content-margin-left-big',
                      },
                      [
                        o('div', { staticClass: 'description-title' }, [
                          o('span', {
                            staticClass: 'content-title',
                            domProps: {
                              innerHTML: t._s(t.projectsPage.title_content),
                            },
                          }),
                        ]),
                        t._v(' '),
                        o('p', {
                          staticClass: 'content-p',
                          domProps: {
                            innerHTML: t._s(t.projectsPage.description),
                          },
                        }),
                      ],
                    )
                  : t._e(),
                t._v(' '),
                o(
                  'div',
                  { class: t.contentBlockClasses },
                  t._l(t.projectsList, function(e, n) {
                    return (t.checkProjectPage
                    ? e
                    : n < 4)
                      ? o(
                          'nuxt-link',
                          {
                            key: n,
                            class: [
                              'content-img-wrap',
                              {
                                'content-img-wrap-big':
                                  t.bigClass(n) && t.checkProjectPage,
                              },
                            ],
                            attrs: { to: '/project/' + e.id },
                          },
                          [
                            o(
                              'ScrollAnimation',
                              {
                                staticClass: 'cover',
                                attrs: { translate: '', opacity: !1 },
                              },
                              [
                                o('img', {
                                  attrs: {
                                    src: t.getUrl(e.preview.url),
                                    alt: '',
                                  },
                                }),
                              ],
                            ),
                            t._v(' '),
                            o(
                              'div',
                              {
                                staticClass:
                                  'item-project-title item-project-title-text',
                              },
                              [
                                t._v(
                                  '\n        ' +
                                    t._s(e.title_card) +
                                    '\n      ',
                                ),
                              ],
                            ),
                          ],
                          1,
                        )
                      : t._e();
                  }),
                  1,
                ),
                t._v(' '),
                '/project' !== this.$route.path
                  ? o(
                      'div',
                      { staticClass: 'project_btn_wrap' },
                      [
                        o(
                          'nuxt-link',
                          { attrs: { to: '/project' } },
                          [
                            o('Content_btn', {
                              attrs: { title: 'Explore all projects' },
                            }),
                          ],
                          1,
                        ),
                      ],
                      1,
                    )
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
      installComponents(component, {
        ScrollAnimation: o(347).default,
        Content_btn: o(348).default,
      });
    },
    366: function(t, e, o) {
      'use strict';
      o(356);
    },
    367: function(t, e, o) {
      (e = o(8)(!1)).push([
        t.i,
        '.studio-block[data-v-130cffba]{position:relative;width:100%;display:flex;flex-direction:column;overflow:hidden}.studio-block .studio_content-block[data-v-130cffba]{width:100%;margin-top:82px;height:660px;display:flex;justify-content:space-between}.studio-block .studio_content-block .studio_img-wrap[data-v-130cffba],.studio-block .studio_content-block .studio_text-block__wrap[data-v-130cffba]{display:flex;width:calc(50% - var(--main-very-mini-margin)/2)}.studio-block .studio_content-block .studio_text-block__wrap .studio_text-block[data-v-130cffba]{max-width:375px;margin-right:var(--main-mini-margin);display:flex;flex-direction:column;margin-top:-130px}@media(max-width:425px){.studio-block .studio_content-block .studio_text-block__wrap .studio_text-block[data-v-130cffba]{margin-top:0}}.studio-block .studio_content-block .studio_text-block__wrap .studio_text-block .studio__text_p[data-v-130cffba]{margin-top:35px}.studio-block .studio_content-block .studio_text-block__wrap .studio_text-block .studio_btn_wrap[data-v-130cffba]{width:123px;height:40px;margin-top:60px}.studio-block .studio_content-block .studio_text-block__wrap .studio-people_text-block[data-v-130cffba]{width:unset;margin-right:var(--main-mini-margin)}@media screen and (max-width:1280px){.studio-block .studio_content-block[data-v-130cffba]{height:580px}.studio-block .studio_content-block .studio_text-block__wrap .studio_text-block[data-v-130cffba]{max-width:unset}}@media screen and (max-width:1024px){.studio-block .studio_content-block[data-v-130cffba]{height:unset}.studio-block .studio_content-block .studio_img-wrap[data-v-130cffba]{height:470px}.studio-block .studio_content-block .studio_text-block__wrap .studio_text-block .studio__text_p[data-v-130cffba]{margin-top:40px}.studio-block .studio_content-block .studio_text-block__wrap .studio_text-block .studio_btn_wrap[data-v-130cffba]{width:103px;height:33px;margin-top:80px}}@media screen and (max-width:768px){.studio-block .studio_content-block[data-v-130cffba]{margin-top:80px}.studio-block .studio_content-block .studio_text-block__wrap .studio_text-block .studio_btn_wrap[data-v-130cffba]{margin-top:40px}}@media screen and (max-width:428px){.studio-block .studio_content-block[data-v-130cffba]{margin-top:80px;flex-direction:column}.studio-block .studio_content-block .studio_text-block__wrap[data-v-130cffba]{order:1;width:unset;margin-left:var(--main-big-margin);margin-right:var(--main-mini-margin)}.studio-block .studio_content-block .studio_text-block__wrap .studio_text-block .studio__text_p[data-v-130cffba],.studio-block .studio_content-block .studio_text-block__wrap .studio_text-block .studio_btn_wrap[data-v-130cffba]{margin-top:30px}.studio-block .studio_content-block .studio_img-wrap[data-v-130cffba]{margin-top:87px;width:unset;order:2}}',
        '',
      ]),
        (t.exports = e);
    },
    368: function(t, e, o) {
      'use strict';
      o(357);
    },
    369: function(t, e, o) {
      (e = o(8)(!1)).push([
        t.i,
        '.projects-block{width:100%;display:flex;flex-direction:column;margin-bottom:210px}.projects-block .description{display:flex;flex-direction:column;margin-right:var(--main-mini-margin)}.projects-block .description .description-title{margin-top:83px;margin-bottom:35px}.projects-block .description .description-title br{display:none}@media(max-width:1440px){.projects-block .description .description-title br{display:block}}.projects-block .description .content-p{white-space:pre-line}.projects-block .content-block{margin-top:82px;margin-bottom:50px;display:flex;justify-content:space-between;flex-wrap:wrap}.projects-block .content-block .content-img-wrap{position:relative;width:calc(50% - var(--main-very-mini-margin)/2);height:840px;margin-bottom:var(--main-very-mini-margin);display:flex}.projects-block .content-block .content-img-wrap img{width:100%;height:100%;-o-object-fit:cover;object-fit:cover}.projects-block .content-block .content-img-wrap .image-scale-block_wrap .image-scale-img{cursor:pointer}.projects-block .content-block .content-img-wrap .item-project-title{position:absolute;bottom:60px;left:60px;align-self:flex-end;cursor:pointer}.projects-block .content-block .content-img-wrap-big{width:100%;margin-bottom:100px;margin-top:40px}.projects-block .content-block .content-img-wrap-big>div{width:inherit}.projects-block .content-block .content-img-wrap-big img{width:100%}.projects-block .content-block-project-page-margin-top{margin-top:42px}.projects-block .content-block-project-page-margin-bottom{margin-bottom:2px}.projects-block .project_btn_wrap{width:-webkit-max-content;width:-moz-max-content;width:max-content;height:-webkit-max-content;height:-moz-max-content;height:max-content;margin-right:var(--main-big-margin);align-self:flex-end}.projects-block_projects-page{margin-bottom:100px}@media screen and (max-width:1280px){.projects-block .description .description-title{flex-direction:column;margin-bottom:19px;white-space:unset}.projects-block .content-block{margin-bottom:0}.projects-block .content-block .content-img-wrap{height:620px}.projects-block .content-block .content-img-wrap-big{width:100%;margin-bottom:100px;margin-top:60px}.content-block-project-page-margin-top{margin-top:40px!important}.projects-block_projects-page{margin-bottom:60px}}@media screen and (max-width:1024px){.projects-block{margin-bottom:111px}.projects-block .description .description-title{margin-bottom:40px}.projects-block .content-block{margin-top:57px}.projects-block .content-block .content-img-wrap{height:560px}.projects-block .content-block .content-img-wrap-big{width:100%;margin-bottom:100px;margin-top:60px;height:526px}.projects-block .content-block-project-page-margin-top{margin-top:40px!important}}@media screen and (max-width:768px){.projects-block{margin-bottom:84px}.projects-block .description .description-title{margin-top:50px}.projects-block .content-block{margin-top:124px}.projects-block .content-block .content-img-wrap{height:440px}.projects-block .content-block .content-img-wrap .item-project-title{bottom:30px;left:48px}.projects-block .content-block .content-img-wrap-big{width:100%;margin-bottom:50px;margin-top:50px}.projects-block .content-block-project-page-margin-top{margin-top:0!important}}@media screen and (max-width:428px){.projects-block{margin-bottom:131px}.projects-block .description .description-title{margin-top:82px;margin-bottom:30px}.projects-block .content-block{margin-top:30px!important;margin-left:0;margin-right:0}.projects-block .content-block .content-img-wrap{width:100%;margin-bottom:50px;height:470px}.projects-block .content-block .content-img-wrap .item-project-title{bottom:60px;left:60px}.projects-block .content-block .content-img-wrap-big{width:100%;margin-bottom:50px;margin-top:0}.projects-block .project_btn_wrap{align-self:flex-start;margin-right:0;margin-left:var(--main-big-margin)}}',
        '',
      ]),
        (t.exports = e);
    },
    388: function(t, e, o) {
      var content = o(443);
      'string' == typeof content && (content = [[t.i, content, '']]),
        content.locals && (t.exports = content.locals);
      (0, o(9).default)('98632ecc', content, !0, { sourceMap: !1 });
    },
    389: function(t, e, o) {
      var content = o(445);
      'string' == typeof content && (content = [[t.i, content, '']]),
        content.locals && (t.exports = content.locals);
      (0, o(9).default)('eae89454', content, !0, { sourceMap: !1 });
    },
    390: function(t, e, o) {
      var content = o(447);
      'string' == typeof content && (content = [[t.i, content, '']]),
        content.locals && (t.exports = content.locals);
      (0, o(9).default)('28f1127f', content, !0, { sourceMap: !1 });
    },
    391: function(t, e, o) {
      var content = o(449);
      'string' == typeof content && (content = [[t.i, content, '']]),
        content.locals && (t.exports = content.locals);
      (0, o(9).default)('24b44c34', content, !0, { sourceMap: !1 });
    },
    392: function(t, e, o) {
      var content = o(451);
      'string' == typeof content && (content = [[t.i, content, '']]),
        content.locals && (t.exports = content.locals);
      (0, o(9).default)('ec463cd4', content, !0, { sourceMap: !1 });
    },
    439: function(t, e, o) {
      'use strict';
      var n = o(2),
        r = o(440);
      n(
        { target: 'String', proto: !0, forced: o(441)('link') },
        {
          link: function(t) {
            return r(this, 'a', 'href', t);
          },
        },
      );
    },
    440: function(t, e, o) {
      var n = o(19),
        r = /"/g;
      t.exports = function(t, e, o, c) {
        var l = String(n(t)),
          d = '<' + e;
        return (
          '' !== o &&
            (d += ' ' + o + '="' + String(c).replace(r, '&quot;') + '"'),
          d + '>' + l + '</' + e + '>'
        );
      };
    },
    441: function(t, e, o) {
      var n = o(5);
      t.exports = function(t) {
        return n(function() {
          var e = ''[t]('"');
          return e !== e.toLowerCase() || e.split('"').length > 3;
        });
      };
    },
    442: function(t, e, o) {
      'use strict';
      o(388);
    },
    443: function(t, e, o) {
      (e = o(8)(!1)).push([
        t.i,
        '.start-span-block[data-v-8b2f7580]{width:100%;display:flex}.start-span-block .btn-wrap[data-v-8b2f7580],.start-span-block .main-page_small-text[data-v-8b2f7580]{margin-top:15px}.start-span-block .btn-wrap[data-v-8b2f7580]:after{content:"";position:absolute;top:calc(100% + 5px);left:0;width:0;height:4px;background-color:#fff;transition:width .3s}.start-span-block .btn-wrap[data-v-8b2f7580]:hover:after{width:100%}.start-span-block .btn-wrap .content-btn-text[data-v-8b2f7580]{color:#fff}@media screen and (max-width:1280px){.start-span-block[data-v-8b2f7580]{min-height:52px}}@media screen and (max-width:400px){.start-span-block[data-v-8b2f7580]{margin-right:var(--main-mini-margin)}}',
        '',
      ]),
        (t.exports = e);
    },
    444: function(t, e, o) {
      'use strict';
      o(389);
    },
    445: function(t, e, o) {
      (e = o(8)(!1)).push([
        t.i,
        '.main-page_title-imgs__container[data-v-3c0b53f6]{position:relative;display:flex;flex-direction:column;z-index:500;height:var(--winHeight)}.main-page_title-imgs__container .block-wrap[data-v-3c0b53f6]:first-child{height:var(--winHeight)}.main-page_title-imgs__container .block-wrap[data-v-3c0b53f6]{position:absolute;left:0;top:0;right:0;height:var(--winHeight);background-color:#fff}.main-page_title-imgs__container .block-wrap.block-wrap-one .block .start-span_with-logo_wrap[data-v-3c0b53f6]{top:50vh}.main-page_title-imgs__container .block-wrap .block[data-v-3c0b53f6]{top:0;left:0;width:100%;height:var(--winHeight);overflow:hidden;display:flex;position:-webkit-sticky;position:sticky;transition:height .3s}.main-page_title-imgs__container .block-wrap .block .title-imgs_img[data-v-3c0b53f6]{position:absolute;height:100%;width:100%;-o-object-fit:cover;object-fit:cover}.main-page_title-imgs__container .block-wrap .block .start-span_with-logo_wrap[data-v-3c0b53f6]{position:absolute;top:40vh;left:200px;display:flex;flex-direction:column;z-index:10}.main-page_title-imgs__container .block-wrap .block .start-span_wrap[data-v-3c0b53f6]{display:flex;flex-direction:column;align-items:flex-start;justify-content:center}.main-page_title-imgs__container .block-wrap .block-fixed[data-v-3c0b53f6]{position:fixed}@media screen and (max-width:1024px){.main-page_title-imgs__container .block-wrap .block .start-span_with-logo_wrap[data-v-3c0b53f6]{left:110px}}@media screen and (max-width:768px){.main-page_title-imgs__container .block-wrap .block .start-span_with-logo_wrap[data-v-3c0b53f6]{left:88px}}@media screen and (max-width:428px){.main-page_title-imgs__container .block-wrap .block .start-span_with-logo_wrap[data-v-3c0b53f6]{left:72px}}.translateY-opacity-enter-active[data-v-3c0b53f6],.translateY-opacity-leave-active[data-v-3c0b53f6]{transition:all 1s}.translateY-opacity-enter[data-v-3c0b53f6],.translateY-opacity-leave-to[data-v-3c0b53f6]{opacity:0;transform:translateY(70px)}.slide-images-enter-active[data-v-3c0b53f6],.slide-images-leave-active[data-v-3c0b53f6]{transition:transform 1s}.slide-images-enter[data-v-3c0b53f6],.slide-images-leave-to[data-v-3c0b53f6]{transform:translateY(100%)}',
        '',
      ]),
        (t.exports = e);
    },
    446: function(t, e, o) {
      'use strict';
      o(390);
    },
    447: function(t, e, o) {
      (e = o(8)(!1)).push([
        t.i,
        '.app{position:relative;width:100%;height:100%}.app .main-page,.app .main-page .main-page_content-wrap{width:100%;display:flex;flex-direction:column}.app .main-page .main-page_content-wrap{background-color:#fff;align-items:center;z-index:800;overflow:hidden}.app .main-page .main-page_content-wrap .main-page_content{width:100%;display:flex;flex-direction:column;background-color:#fff}',
        '',
      ]),
        (t.exports = e);
    },
    448: function(t, e, o) {
      'use strict';
      o(391);
    },
    449: function(t, e, o) {
      (e = o(8)(!1)).push([
        t.i,
        '.start-span-block[data-v-d1194ba8]{width:100%;display:flex}.start-span-block .btn-wrap[data-v-d1194ba8]{margin-top:15px}.start-span-block .btn-wrap[data-v-d1194ba8]:after{content:"";position:absolute;top:calc(100% + 5px);left:0;width:0;height:4px;background-color:#fff;transition:width .3s}.start-span-block .btn-wrap[data-v-d1194ba8]:hover:after{width:100%}.start-span-block .btn-wrap .content-btn-text[data-v-d1194ba8]{color:#fff}@media screen and (max-width:1280px){.start-span-block[data-v-d1194ba8]{min-height:52px}}@media screen and (max-width:400px){.start-span-block[data-v-d1194ba8]{margin-right:var(--main-mini-margin)}}',
        '',
      ]),
        (t.exports = e);
    },
    450: function(t, e, o) {
      'use strict';
      o(392);
    },
    451: function(t, e, o) {
      (e = o(8)(!1)).push([
        t.i,
        '.main-page_title-imgs__container[data-v-26457970]{position:relative;display:flex;flex-direction:column;z-index:500}.main-page_title-imgs__container .block-wrap[data-v-26457970]:first-child{height:var(--winHeight)}.main-page_title-imgs__container .block-wrap[data-v-26457970]{position:relative;height:calc(var(--winHeight) + 1000px);transition:height .3s}.main-page_title-imgs__container .block-wrap .block[data-v-26457970]{top:0;left:0;width:100%;height:var(--winHeight);overflow:hidden;display:flex;align-items:center;position:-webkit-sticky;position:sticky;transition:height .3s}.main-page_title-imgs__container .block-wrap .block .title-imgs_img[data-v-26457970]{position:absolute;height:100%;width:100%;-o-object-fit:cover;object-fit:cover}.main-page_title-imgs__container .block-wrap .block .start-span_with-logo_wrap[data-v-26457970]{position:absolute;left:200px;display:flex;flex-direction:column;z-index:10}.main-page_title-imgs__container .block-wrap .block .start-span_wrap[data-v-26457970]{display:flex;flex-direction:column;align-items:flex-start;justify-content:center}.main-page_title-imgs__container .block-wrap .block-fixed[data-v-26457970]{position:fixed}@media screen and (max-width:1024px){.main-page_title-imgs__container .block-wrap .block .start-span_with-logo_wrap[data-v-26457970]{left:110px}}@media screen and (max-width:768px){.main-page_title-imgs__container .block-wrap .block .start-span_with-logo_wrap[data-v-26457970]{left:88px}}@media screen and (max-width:428px){.main-page_title-imgs__container .block-wrap .block .start-span_with-logo_wrap[data-v-26457970]{left:72px}}.translateY-opacity-enter-active[data-v-26457970],.translateY-opacity-leave-active[data-v-26457970]{transition:all 1s}.translateY-opacity-enter[data-v-26457970],.translateY-opacity-leave-to[data-v-26457970]{opacity:0;position:absolute}.translateY-opacity-leave-to[data-v-26457970]{transform:translateY(-70px)}.translateY-opacity-enter[data-v-26457970]{transform:translateY(70px)}',
        '',
      ]),
        (t.exports = e);
    },
    452: function(t, e, o) {
      'use strict';
      o.r(e);
      o(52);
      var n = o(16),
        r = o(11);
      o(169), o(352);
      function c(object, t) {
        var e = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(object);
          t &&
            (o = o.filter(function(t) {
              return Object.getOwnPropertyDescriptor(object, t).enumerable;
            })),
            e.push.apply(e, o);
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
      var d = {
          name: 'start-span-item',
          components: { Content_btn: o(348).default },
          props: {
            text: String,
            startTransformScroll: Number,
            finishTransformScroll: Number,
            startOpacityZero: Boolean,
            textStyleClass: {
              validator: function(t) {
                return (
                  -1 !== ['start-text', 'start-text', 'small-text'].indexOf(t)
                );
              },
            },
            buttonActive: Boolean,
          },
          computed: l(
            l({}, Object(r.c)('app', ['APP_SCROLL_VALUE', 'APP_WINDOW_SIZE'])),
            {},
            {
              spanTranslate: function() {
                var t = this.startTransformScroll,
                  e = this.finishTransformScroll;
                return this.APP_SCROLL_VALUE > t
                  ? this.APP_SCROLL_VALUE > e
                    ? 0
                    : 100 - (this.APP_SCROLL_VALUE - t) / ((e - t) / 100)
                  : 100;
              },
              spanOpacity: function() {
                return this.startOpacityZero
                  ? 1 - this.spanTranslate / 100
                  : 0 + this.spanTranslate / 100;
              },
            },
          ),
        },
        m = (o(448), o(10)),
        _ = Object(m.a)(
          d,
          function() {
            var t = this,
              e = t.$createElement,
              o = t._self._c || e;
            return o('div', { staticClass: 'start-span-block' }, [
              t.buttonActive
                ? t._e()
                : o(
                    'span',
                    {
                      class: 'main-page_' + t.textStyleClass,
                      style:
                        'transform: translateY(' +
                        this.spanTranslate +
                        '%); opacity: ' +
                        this.spanOpacity +
                        ';',
                    },
                    [t._v(t._s(t.text))],
                  ),
              t._v(' '),
              t.buttonActive
                ? o(
                    'div',
                    {
                      staticClass: 'btn-wrap',
                      style:
                        'transform: translateY(' +
                        this.spanTranslate +
                        '%); opacity: ' +
                        this.spanOpacity +
                        ';',
                    },
                    [
                      o('span', { staticClass: 'main-page_small-text' }, [
                        t._v(t._s(t.text)),
                      ]),
                    ],
                  )
                : t._e(),
            ]);
          },
          [],
          !1,
          null,
          'd1194ba8',
          null,
        ).exports;
      function h(object, t) {
        var e = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(object);
          t &&
            (o = o.filter(function(t) {
              return Object.getOwnPropertyDescriptor(object, t).enumerable;
            })),
            e.push.apply(e, o);
        }
        return e;
      }
      function f(t) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {};
          i % 2
            ? h(Object(source), !0).forEach(function(e) {
                Object(n.a)(t, e, source[e]);
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
      var x = {
          props: { data: { type: Object, default: {} } },
          name: 'Title_imgs',
          data: function() {
            return { startSpanWithLogoWrapHeight: 0, trGroup: 0 };
          },
          components: { start_span_item: _ },
          computed: f(
            f(
              {},
              Object(r.c)('app', [
                'APP_SCROLL_VALUE',
                'APP_WINDOW_SIZE',
                'LOGO_START_HEIGHT',
              ]),
            ),
            {},
            {
              imgScale_1: function() {
                return this.APP_SCROLL_VALUE > 1e3
                  ? 1 +
                      ((this.APP_SCROLL_VALUE - 1e3) /
                        (this.APP_WINDOW_SIZE.height / 100)) *
                        0.002
                  : 1;
              },
              imgScale_2: function() {
                var t = this.APP_WINDOW_SIZE.height + 2e3;
                return this.APP_SCROLL_VALUE > t
                  ? 1 +
                      ((this.APP_SCROLL_VALUE - t) /
                        (this.APP_WINDOW_SIZE.height / 100)) *
                        0.002
                  : 1;
              },
              imgScale_3: function() {
                var t = 2 * this.APP_WINDOW_SIZE.height + 3e3;
                return this.APP_SCROLL_VALUE > t
                  ? 1 +
                      ((this.APP_SCROLL_VALUE - t) /
                        (this.APP_WINDOW_SIZE.height / 100)) *
                        0.002
                  : 1;
              },
              imgScale_4: function() {
                var t = 3 * this.APP_WINDOW_SIZE.height + 4e3;
                return this.APP_SCROLL_VALUE > t
                  ? 1 +
                      ((this.APP_SCROLL_VALUE - t) /
                        (this.APP_WINDOW_SIZE.height / 100)) *
                        0.002
                  : 1;
              },
            },
          ),
          mounted: function() {
            var t = this;
            this.setStartSpanWithLogoWrapHeight(),
              setInterval(function() {
                var e = t.data.one.text_iteration.length;
                t.trGroup++, (t.trGroup = t.trGroup === e ? 0 : t.trGroup);
              }, 3e3);
          },
          methods: {
            getUrl: function(t) {
              return 'https://strapi-up.verodigital.site'.concat(t);
            },
            setStartSpanWithLogoWrapHeight: function() {
              var t = this.$refs.startSpanWithLogoWrap.clientHeight;
              this.startSpanWithLogoWrapHeight = t;
            },
          },
        },
        v =
          (o(450),
          Object(m.a)(
            x,
            function() {
              var t = this,
                e = t.$createElement,
                o = t._self._c || e;
              return o(
                'div',
                { staticClass: 'main-page_title-imgs__container' },
                [
                  o(
                    'div',
                    {
                      staticClass: 'block-wrap',
                      style:
                        'opacity: ' +
                        (t.APP_SCROLL_VALUE > 3 * t.APP_WINDOW_SIZE.height
                          ? 0
                          : 1),
                    },
                    [
                      o('div', { class: 'block block-fixed' }, [
                        o(
                          'div',
                          {
                            ref: 'startSpanWithLogoWrap',
                            staticClass: 'start-span_with-logo_wrap',
                            style:
                              'top: calc((' +
                              (t.APP_WINDOW_SIZE.width > 1024 ? 93 : 95) +
                              '% / 2) + ' +
                              (t.LOGO_START_HEIGHT / 2 -
                                t.startSpanWithLogoWrapHeight / 2) +
                              'px);',
                          },
                          [
                            o(
                              'transitionGroup',
                              {
                                staticClass: 'translateY-group',
                                attrs: {
                                  tag: 'div',
                                  name: 'translateY-opacity',
                                },
                              },
                              t._l(t.data.one.text_iteration, function(e, n) {
                                return t.trGroup === n
                                  ? o('start_span_item', {
                                      key: n,
                                      attrs: {
                                        text: e.text,
                                        textStyleClass: 'start-text',
                                      },
                                    })
                                  : t._e();
                              }),
                              1,
                            ),
                          ],
                          1,
                        ),
                        t._v(' '),
                        o('img', {
                          staticClass: 'title-imgs_img',
                          style: 'transform: scale(' + this.imgScale_1 + ')',
                          attrs: {
                            src: t.getUrl(t.data.one.background_image.url),
                            alt: '',
                          },
                        }),
                      ]),
                    ],
                  ),
                  t._v(' '),
                  o(
                    'div',
                    {
                      directives: [
                        {
                          name: 'show',
                          rawName: 'v-show',
                          value: t.APP_WINDOW_SIZE.width > 1024,
                          expression: 'APP_WINDOW_SIZE.width > 1024',
                        },
                      ],
                      staticClass: 'block-wrap',
                    },
                    [
                      o(
                        'div',
                        {
                          class: [
                            'block',
                            {
                              'block-fixed':
                                this.APP_SCROLL_VALUE >
                                this.APP_WINDOW_SIZE.height,
                            },
                          ],
                        },
                        [
                          o(
                            'div',
                            {
                              staticClass:
                                'start-span_with-logo_wrap start-span_wrap',
                            },
                            [
                              o('start_span_item', {
                                attrs: {
                                  text: t.data.two.text_iteration[0].text,
                                  startTransformScroll: Number(
                                    this.APP_WINDOW_SIZE.height + 200,
                                  ),
                                  finishTransformScroll: Number(
                                    this.APP_WINDOW_SIZE.height + 400,
                                  ),
                                  startOpacityZero: !0,
                                  textStyleClass: 'start-text',
                                },
                              }),
                              t._v(' '),
                              o('start_span_item', {
                                attrs: {
                                  text: t.data.two.text_iteration[1].text,
                                  startTransformScroll: Number(
                                    this.APP_WINDOW_SIZE.height + 400,
                                  ),
                                  finishTransformScroll: Number(
                                    this.APP_WINDOW_SIZE.height + 600,
                                  ),
                                  startOpacityZero: !0,
                                  textStyleClass: 'start-text',
                                },
                              }),
                              t._v(' '),
                              o('start_span_item', {
                                attrs: {
                                  text: t.data.two.text_iteration[2].text,
                                  startTransformScroll: Number(
                                    this.APP_WINDOW_SIZE.height + 600,
                                  ),
                                  finishTransformScroll: Number(
                                    this.APP_WINDOW_SIZE.height + 800,
                                  ),
                                  startOpacityZero: !0,
                                  textStyleClass: 'start-text',
                                },
                              }),
                              t._v(' '),
                              o(
                                'nuxt-link',
                                { attrs: { to: t.data.two.link.link } },
                                [
                                  o('start_span_item', {
                                    attrs: {
                                      text: t.data.two.link.name,
                                      startTransformScroll: Number(
                                        this.APP_WINDOW_SIZE.height + 800,
                                      ),
                                      finishTransformScroll: Number(
                                        this.APP_WINDOW_SIZE.height + 1e3,
                                      ),
                                      startOpacityZero: !0,
                                      'button-active': !0,
                                      textStyleClass: 'small-text',
                                    },
                                  }),
                                ],
                                1,
                              ),
                            ],
                            1,
                          ),
                          t._v(' '),
                          o('img', {
                            staticClass: 'title-imgs_img',
                            style: 'transform: scale(' + this.imgScale_2 + ')',
                            attrs: {
                              src: t.getUrl(t.data.two.background_image.url),
                            },
                          }),
                        ],
                      ),
                    ],
                  ),
                  t._v(' '),
                  o(
                    'div',
                    {
                      directives: [
                        {
                          name: 'show',
                          rawName: 'v-show',
                          value: t.APP_WINDOW_SIZE.width > 1024,
                          expression: 'APP_WINDOW_SIZE.width > 1024',
                        },
                      ],
                      staticClass: 'block-wrap',
                    },
                    [
                      o(
                        'div',
                        {
                          class: [
                            'block',
                            {
                              'block-fixed':
                                this.APP_SCROLL_VALUE >
                                2 * this.APP_WINDOW_SIZE.height + 1e3,
                            },
                          ],
                        },
                        [
                          o(
                            'div',
                            {
                              staticClass:
                                'start-span_with-logo_wrap start-span_wrap',
                            },
                            [
                              o('start_span_item', {
                                attrs: {
                                  text: t.data.three.text_iteration[0].text,
                                  startTransformScroll: Number(
                                    2 * this.APP_WINDOW_SIZE.height +
                                      1e3 +
                                      1e3 / 6,
                                  ),
                                  finishTransformScroll: Number(
                                    2 * this.APP_WINDOW_SIZE.height +
                                      1e3 +
                                      (1e3 / 6) * 2,
                                  ),
                                  startOpacityZero: !0,
                                  textStyleClass: 'start-text',
                                },
                              }),
                              t._v(' '),
                              o('start_span_item', {
                                attrs: {
                                  text: t.data.three.text_iteration[1].text,
                                  startTransformScroll: Number(
                                    2 * this.APP_WINDOW_SIZE.height +
                                      1e3 +
                                      (1e3 / 6) * 2,
                                  ),
                                  finishTransformScroll: Number(
                                    2 * this.APP_WINDOW_SIZE.height + 1e3 + 500,
                                  ),
                                  startOpacityZero: !0,
                                  textStyleClass: 'start-text',
                                },
                              }),
                              t._v(' '),
                              o('start_span_item', {
                                attrs: {
                                  text: t.data.three.text_iteration[2].text,
                                  startTransformScroll: Number(
                                    2 * this.APP_WINDOW_SIZE.height + 1e3 + 500,
                                  ),
                                  finishTransformScroll: Number(
                                    2 * this.APP_WINDOW_SIZE.height +
                                      1e3 +
                                      (1e3 / 6) * 4,
                                  ),
                                  startOpacityZero: !0,
                                  textStyleClass: 'start-text',
                                },
                              }),
                              t._v(' '),
                              o('start_span_item', {
                                attrs: {
                                  text: t.data.three.text_iteration[3].text,
                                  startTransformScroll: Number(
                                    2 * this.APP_WINDOW_SIZE.height +
                                      1e3 +
                                      (1e3 / 6) * 4,
                                  ),
                                  finishTransformScroll: Number(
                                    2 * this.APP_WINDOW_SIZE.height +
                                      1e3 +
                                      (1e3 / 6) * 5,
                                  ),
                                  startOpacityZero: !0,
                                  textStyleClass: 'start-text',
                                },
                              }),
                            ],
                            1,
                          ),
                          t._v(' '),
                          o('img', {
                            staticClass: 'title-imgs_img',
                            style: 'transform: scale(' + this.imgScale_3 + ')',
                            attrs: {
                              src: t.getUrl(t.data.three.background_image.url),
                              alt: '',
                            },
                          }),
                        ],
                      ),
                    ],
                  ),
                  t._v(' '),
                  o(
                    'div',
                    {
                      directives: [
                        {
                          name: 'show',
                          rawName: 'v-show',
                          value: t.APP_WINDOW_SIZE.width > 1024,
                          expression: 'APP_WINDOW_SIZE.width > 1024',
                        },
                      ],
                      staticClass: 'block-wrap',
                    },
                    [
                      o('div', { class: ['block'] }, [
                        o(
                          'div',
                          {
                            staticClass:
                              'start-span_with-logo_wrap start-span_wrap',
                          },
                          [
                            o('start_span_item', {
                              attrs: {
                                text: t.data.four.text_iteration[0].text,
                                startTransformScroll: Number(
                                  3 * this.APP_WINDOW_SIZE.height + 2e3 + 200,
                                ),
                                finishTransformScroll: Number(
                                  3 * this.APP_WINDOW_SIZE.height + 2e3 + 400,
                                ),
                                startOpacityZero: !0,
                                textStyleClass: 'start-text',
                              },
                            }),
                            t._v(' '),
                            o('start_span_item', {
                              attrs: {
                                text: t.data.four.text_iteration[1].text,
                                startTransformScroll: Number(
                                  3 * this.APP_WINDOW_SIZE.height + 2e3 + 400,
                                ),
                                finishTransformScroll: Number(
                                  3 * this.APP_WINDOW_SIZE.height + 2e3 + 600,
                                ),
                                startOpacityZero: !0,
                                textStyleClass: 'start-text',
                              },
                            }),
                            t._v(' '),
                            o('start_span_item', {
                              attrs: {
                                text: t.data.four.text_iteration[2].text,
                                startTransformScroll: Number(
                                  3 * this.APP_WINDOW_SIZE.height + 2e3 + 600,
                                ),
                                finishTransformScroll: Number(
                                  3 * this.APP_WINDOW_SIZE.height + 2e3 + 800,
                                ),
                                startOpacityZero: !0,
                                textStyleClass: 'start-text',
                              },
                            }),
                            t._v(' '),
                            o(
                              'nuxt-link',
                              { attrs: { to: t.data.four.link.link } },
                              [
                                o('start_span_item', {
                                  attrs: {
                                    text: t.data.four.link.name,
                                    startTransformScroll: Number(
                                      3 * this.APP_WINDOW_SIZE.height +
                                        2e3 +
                                        800,
                                    ),
                                    finishTransformScroll: Number(
                                      3 * this.APP_WINDOW_SIZE.height +
                                        2e3 +
                                        1e3,
                                    ),
                                    startOpacityZero: !0,
                                    'button-active': !0,
                                    textStyleClass: 'small-text',
                                  },
                                }),
                              ],
                              1,
                            ),
                          ],
                          1,
                        ),
                        t._v(' '),
                        o('img', {
                          staticClass: 'title-imgs_img',
                          style: 'transform: scale(' + this.imgScale_4 + ')',
                          attrs: {
                            src: t.getUrl(t.data.four.background_image.url),
                            alt: '',
                          },
                        }),
                      ]),
                    ],
                  ),
                ],
              );
            },
            [],
            !1,
            null,
            '26457970',
            null,
          ));
      e.default = v.exports;
    },
    453: function(t, e, o) {
      'use strict';
      o.r(e);
      o(39);
      var n = o(7),
        r = (o(35), o(73), o(439), o(52), o(169), o(352), o(16)),
        c = o(11);
      function l(object, t) {
        var e = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(object);
          t &&
            (o = o.filter(function(t) {
              return Object.getOwnPropertyDescriptor(object, t).enumerable;
            })),
            e.push.apply(e, o);
        }
        return e;
      }
      function d(t) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {};
          i % 2
            ? l(Object(source), !0).forEach(function(e) {
                Object(r.a)(t, e, source[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(
                t,
                Object.getOwnPropertyDescriptors(source),
              )
            : l(Object(source)).forEach(function(e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(source, e),
                );
              });
        }
        return t;
      }
      var m = {
          name: 'start-span-item',
          components: { Content_btn: o(348).default },
          props: {
            text: String,
            startTransformScroll: Number,
            finishTransformScroll: Number,
            startOpacityZero: Boolean,
            textStyleClass: {
              validator: function(t) {
                return (
                  -1 !== ['start-text', 'start-text', 'small-text'].indexOf(t)
                );
              },
            },
            buttonActive: Boolean,
          },
          computed: d(
            d({}, Object(c.c)('app', ['APP_SCROLL_VALUE', 'APP_WINDOW_SIZE'])),
            {},
            {
              spanTranslate: function() {
                var t = this.startTransformScroll,
                  e = this.finishTransformScroll;
                return this.APP_SCROLL_VALUE > t
                  ? this.APP_SCROLL_VALUE > e
                    ? 0
                    : 100 - (this.APP_SCROLL_VALUE - t) / ((e - t) / 100)
                  : 100;
              },
              spanOpacity: function() {
                return this.startOpacityZero
                  ? 1 - this.spanTranslate / 100
                  : 0 + this.spanTranslate / 100;
              },
            },
          ),
        },
        _ = (o(442), o(10)),
        h = Object(_.a)(
          m,
          function() {
            var t = this,
              e = t.$createElement,
              o = t._self._c || e;
            return o('div', { staticClass: 'start-span-block' }, [
              t.buttonActive
                ? t._e()
                : o('span', { class: 'main-page_' + t.textStyleClass }, [
                    t._v(t._s(t.text)),
                  ]),
              t._v(' '),
              t.buttonActive
                ? o(
                    'div',
                    {
                      staticClass: 'btn-wrap',
                      style:
                        'transform: translateY(' +
                        this.spanTranslate +
                        '%); opacity: ' +
                        this.spanOpacity +
                        ';',
                    },
                    [
                      o('span', { staticClass: 'main-page_small-text' }, [
                        t._v(t._s(t.text)),
                      ]),
                    ],
                  )
                : t._e(),
            ]);
          },
          [],
          !1,
          null,
          '8b2f7580',
          null,
        ).exports,
        f = {
          props: { data: { type: Object, default: {} } },
          name: 'Title_imgs',
          data: function() {
            return {
              keyData: Object.keys(this.data),
              slideInt: 0,
              slideIdx: 0,
              slideText: { one: 0, two: 0, three: 0, four: 0 },
            };
          },
          components: { start_span_item: h },
          created: function() {
            this.$store.dispatch('app/setLogoStartHeight', !0);
          },
          mounted: function() {
            var t = this;
            this.keyData.map(function(e, o) {
              var n = t.data[e].text_iteration.length;
              t.data[e].link && n++,
                (t.slideInt += n + 2),
                t.changeSlide(e, t.slideInt, n);
            });
          },
          methods: {
            changeSlide: function(t, e, o) {
              var n = this;
              'one' === t && this.changeSlideText(this.keyData[this.slideIdx]),
                setTimeout(function() {
                  n.slideIdx++,
                    'one' === t &&
                      n.$store.dispatch('app/setLogoStartHeight', !1),
                    'four' !== t && n.changeSlideText(n.keyData[n.slideIdx]);
                }, 1e3 * e);
            },
            changeSlideText: function(t) {
              var e = this,
                o = setInterval(function() {
                  var n = e.data[t].text_iteration.length;
                  e.data[t].link && n++,
                    n === e.slideText[t] ? clearInterval(o) : e.slideText[t]++;
                }, 1e3);
            },
            getUrl: function(t) {
              return 'https://strapi-up.verodigital.site'.concat(t);
            },
          },
        },
        x =
          (o(444),
          Object(_.a)(
            f,
            function() {
              var t = this,
                e = t.$createElement,
                o = t._self._c || e;
              return o(
                'transition-group',
                {
                  staticClass: 'main-page_title-imgs__container',
                  attrs: { tag: 'div', name: 'slide-images' },
                },
                t._l(t.data, function(e, n, r) {
                  return o(
                    'div',
                    {
                      directives: [
                        {
                          name: 'show',
                          rawName: 'v-show',
                          value: t.slideIdx >= r,
                          expression: 'slideIdx >= idx',
                        },
                      ],
                      key: n,
                      class: ['block-wrap', 'block-wrap-' + n],
                    },
                    [
                      o('div', { staticClass: 'block' }, [
                        o(
                          'div',
                          {
                            ref: 'startSpanWithLogoWrap',
                            refInFor: !0,
                            staticClass: 'start-span_with-logo_wrap',
                          },
                          [
                            o(
                              'transitionGroup',
                              {
                                staticClass: 'translateY-group',
                                attrs: {
                                  tag: 'div',
                                  name: 'translateY-opacity',
                                },
                              },
                              [
                                t._l(t.data[n].text_iteration, function(
                                  text,
                                  e,
                                ) {
                                  return t.slideText[n] >= e + 1
                                    ? o('start_span_item', {
                                        key: e,
                                        attrs: {
                                          text: text.text,
                                          textStyleClass: 'start-text',
                                        },
                                      })
                                    : t._e();
                                }),
                                t._v(' '),
                                t.slideText[n] >=
                                t.data[n].text_iteration.length + 1
                                  ? o(
                                      'span',
                                      {
                                        key:
                                          t.data[n].text_iteration.length + 1,
                                        staticStyle: { display: 'block' },
                                      },
                                      [
                                        t.data[n].link
                                          ? o(
                                              'nuxt-link',
                                              {
                                                attrs: {
                                                  to: t.data[n].link.link || '',
                                                },
                                              },
                                              [
                                                o('start_span_item', {
                                                  attrs: {
                                                    text:
                                                      t.data[n].link.name || '',
                                                    textStyleClass:
                                                      'small-text',
                                                  },
                                                }),
                                              ],
                                              1,
                                            )
                                          : t._e(),
                                      ],
                                      1,
                                    )
                                  : t._e(),
                              ],
                              2,
                            ),
                          ],
                          1,
                        ),
                        t._v(' '),
                        o('img', {
                          staticClass: 'title-imgs_img',
                          attrs: {
                            src: t.getUrl(t.data[n].background_image.url),
                            alt: '',
                          },
                        }),
                      ]),
                    ],
                  );
                }),
                0,
              );
            },
            [],
            !1,
            null,
            '3c0b53f6',
            null,
          ).exports),
        v = o(358),
        k = o(359),
        w = o(349),
        P = o(168),
        S = {
          name: 'App',
          components: {
            Title_imgs: x,
            Studio: v.default,
            Projects: k.default,
            News: w.default,
          },
          asyncData: function(t) {
            return Object(n.a)(
              regeneratorRuntime.mark(function e() {
                var o, n;
                return regeneratorRuntime.wrap(
                  function(e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (o = t.error),
                            t.params,
                            (e.prev = 1),
                            (e.next = 4),
                            P.a.getPage('home')
                          );
                        case 4:
                          return (
                            (n = e.sent), e.abrupt('return', { home: n.data })
                          );
                        case 8:
                          (e.prev = 8),
                            (e.t0 = e.catch(1)),
                            o({
                              statusCode: 503,
                              message: 'Unable to fetch blogs at this time',
                            });
                        case 11:
                        case 'end':
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[1, 8]],
                );
              }),
            )();
          },
          data: function() {
            return { home: {} };
          },
        },
        y =
          (o(446),
          Object(_.a)(
            S,
            function() {
              var t = this,
                e = t.$createElement,
                o = t._self._c || e;
              return o('div', { staticClass: 'app' }, [
                o(
                  'div',
                  { staticClass: 'main-page' },
                  [
                    o('Title_imgs', {
                      attrs: {
                        data: {
                          one: t.home.one_screen,
                          two: t.home.two_screen,
                          three: t.home.three_block,
                          four: t.home.four_block,
                        },
                      },
                    }),
                    t._v(' '),
                    o('div', { staticClass: 'main-page_content-wrap' }, [
                      o(
                        'div',
                        { staticClass: 'main-page_content' },
                        [
                          o('Studio', {
                            attrs: {
                              data: { about: t.home.title_text_image_link },
                            },
                          }),
                          t._v(' '),
                          o('Projects'),
                          t._v(' '),
                          o('News'),
                        ],
                        1,
                      ),
                    ]),
                  ],
                  1,
                ),
              ]);
            },
            [],
            !1,
            null,
            null,
            null,
          ));
      e.default = y.exports;
      installComponents(y, {
        Title_imgs: o(452).default,
        Studio: o(358).default,
        Projects: o(359).default,
        News: o(349).default,
      });
    },
  },
]);
