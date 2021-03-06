(window.webpackJsonp = window.webpackJsonp || []).push([
  [8],
  {
    348: function(t, e, o) {
      'use strict';
      o.r(e);
      var n = { name: 'Content-btn', props: ['title', 'place'] },
        c = (o(354), o(10)),
        component = Object(c.a)(
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
    357: function(t, e, o) {
      var content = o(369);
      'string' == typeof content && (content = [[t.i, content, '']]),
        content.locals && (t.exports = content.locals);
      (0, o(9).default)('e8dcd55a', content, !0, { sourceMap: !1 });
    },
    359: function(t, e, o) {
      'use strict';
      o.r(e);
      o(21), o(69), o(39);
      var n = o(7),
        c = o(347),
        r = o(348),
        l =
          (o(74),
          {
            name: 'Projects',
            components: { ScrollAnimation: c.default, Content_btn: r.default },
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
        m = (o(368), o(10)),
        component = Object(m.a)(
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
    384: function(t, e, o) {
      var content = o(432);
      'string' == typeof content && (content = [[t.i, content, '']]),
        content.locals && (t.exports = content.locals);
      (0, o(9).default)('252c7824', content, !0, { sourceMap: !1 });
    },
    431: function(t, e, o) {
      'use strict';
      o(384);
    },
    432: function(t, e, o) {
      (e = o(8)(!1)).push([
        t.i,
        '.project[data-v-579920b6]{width:100%;display:flex;flex-direction:column}.project .title-img-wrap[data-v-579920b6]{position:relative;width:100%;height:var(--winHeight);display:flex;align-items:center;transition:height .3s}.project .title-img-wrap .project-title[data-v-579920b6]{position:absolute;z-index:1}',
        '',
      ]),
        (t.exports = e);
    },
    456: function(t, e, o) {
      'use strict';
      o.r(e);
      o(39);
      var n = o(7),
        c = o(351),
        r = o(359),
        l = o(349),
        m = o(168),
        d = {
          name: 'Project',
          components: {
            Image_Scale_Block: c.default,
            Projects: r.default,
            News: l.default,
          },
          asyncData: function(t) {
            return Object(n.a)(
              regeneratorRuntime.mark(function e() {
                var o, n, c, r;
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
                            m.a.getPage('home')
                          );
                        case 4:
                          return (
                            (n = e.sent),
                            (e.next = 7),
                            m.a.getPage('projects-lists')
                          );
                        case 7:
                          return (
                            (c = e.sent), (e.next = 10), m.a.getPage('project')
                          );
                        case 10:
                          return (
                            (r = e.sent),
                            e.abrupt('return', {
                              home: n.data,
                              projects: c.data,
                              project: r.data,
                            })
                          );
                        case 14:
                          (e.prev = 14),
                            (e.t0 = e.catch(1)),
                            o({
                              statusCode: 503,
                              message: 'Unable to fetch blogs at this time',
                            });
                        case 17:
                        case 'end':
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[1, 14]],
                );
              }),
            )();
          },
          data: function() {
            return { home: {}, projects: {}, project: {} };
          },
          methods: {
            getUrl: function(t) {
              return 'https://strapi-up.verodigital.site'.concat(t);
            },
          },
        },
        h = (o(431), o(10)),
        component = Object(h.a)(
          d,
          function() {
            var t = this,
              e = t.$createElement,
              o = t._self._c || e;
            return o(
              'div',
              { staticClass: 'project' },
              [
                o(
                  'div',
                  { staticClass: 'title-img-wrap' },
                  [
                    o(
                      'span',
                      {
                        staticClass:
                          'project-title main-content-margin-left-right main-page_start-text',
                      },
                      [t._v(t._s(t.project.title))],
                    ),
                    t._v(' '),
                    o('Image_Scale_Block', {
                      attrs: { img: t.getUrl(t.project.background_image.url) },
                    }),
                  ],
                  1,
                ),
                t._v(' '),
                o('Projects', {
                  attrs: {
                    projects: { projects: t.projects, project: t.project },
                  },
                }),
                t._v(' '),
                o('News'),
              ],
              1,
            );
          },
          [],
          !1,
          null,
          '579920b6',
          null,
        );
      e.default = component.exports;
      installComponents(component, {
        Image_Scale_Block: o(351).default,
        Projects: o(359).default,
        News: o(349).default,
      });
    },
  },
]);
