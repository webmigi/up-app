(window.webpackJsonp = window.webpackJsonp || []).push([
  [5],
  {
    348: function(t, e, n) {
      'use strict';
      n.r(e);
      var o = { name: 'Content-btn', props: ['title', 'place'] },
        c = (n(354), n(10)),
        component = Object(c.a)(
          o,
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
    350: function(t, e, n) {
      var content = n(355);
      'string' == typeof content && (content = [[t.i, content, '']]),
        content.locals && (t.exports = content.locals);
      (0, n(9).default)('e4ebdda6', content, !0, { sourceMap: !1 });
    },
    354: function(t, e, n) {
      'use strict';
      n(350);
    },
    355: function(t, e, n) {
      (e = n(8)(!1)).push([
        t.i,
        '.content-btn[data-v-74aa8ce6]{position:relative;width:100%;height:100%;cursor:pointer}.content-btn[data-v-74aa8ce6]:after{content:"";position:absolute;top:100%;left:0;width:0;height:4px;background-color:#000;transition:width .3s}.content-btn[data-v-74aa8ce6]:hover:after{width:100%}@media screen and (max-width:428px){.content-btn-jobs[data-v-74aa8ce6]{font-size:14px}}',
        '',
      ]),
        (t.exports = e);
    },
    356: function(t, e, n) {
      var content = n(367);
      'string' == typeof content && (content = [[t.i, content, '']]),
        content.locals && (t.exports = content.locals);
      (0, n(9).default)('091b23d0', content, !0, { sourceMap: !1 });
    },
    358: function(t, e, n) {
      'use strict';
      n.r(e);
      var o = n(351),
        c = n(348),
        d = n(347),
        l = {
          name: 'Studio',
          components: {
            Image_Scale_Block: o.default,
            Content_btn: c.default,
            ScrollAnimation: d.default,
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
        r = (n(366), n(10)),
        component = Object(r.a)(
          l,
          function() {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n('div', { staticClass: 'studio-block' }, [
              n(
                'span',
                {
                  staticClass: 'main-page__content-title-position block-title',
                },
                [t._v('studio')],
              ),
              t._v(' '),
              n('div', { staticClass: 'studio_content-block' }, [
                n(
                  'div',
                  { staticClass: 'studio_img-wrap' },
                  [
                    n(
                      'ScrollAnimation',
                      { staticClass: 'cover', attrs: { opacity: !1 } },
                      [
                        n('img', {
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
                n('div', { staticClass: 'studio_text-block__wrap' }, [
                  n(
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
                      n('span', { staticClass: 'content-title' }, [
                        t._v(t._s(t.data.about.title)),
                      ]),
                      t._v(' '),
                      n('p', { staticClass: 'studio__text_p content-p' }, [
                        t._v(t._s(t.data.about.description)),
                      ]),
                      t._v(' '),
                      '/' === this.$route.path && t.data.about.link
                        ? n(
                            'div',
                            { staticClass: 'studio_btn_wrap' },
                            [
                              n(
                                'nuxt-link',
                                { attrs: { to: t.data.about.link.link } },
                                [
                                  n('Content_btn', {
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
        ScrollAnimation: n(347).default,
        Content_btn: n(348).default,
      });
    },
    366: function(t, e, n) {
      'use strict';
      n(356);
    },
    367: function(t, e, n) {
      (e = n(8)(!1)).push([
        t.i,
        '.studio-block[data-v-130cffba]{position:relative;width:100%;display:flex;flex-direction:column;overflow:hidden}.studio-block .studio_content-block[data-v-130cffba]{width:100%;margin-top:82px;height:660px;display:flex;justify-content:space-between}.studio-block .studio_content-block .studio_img-wrap[data-v-130cffba],.studio-block .studio_content-block .studio_text-block__wrap[data-v-130cffba]{display:flex;width:calc(50% - var(--main-very-mini-margin)/2)}.studio-block .studio_content-block .studio_text-block__wrap .studio_text-block[data-v-130cffba]{max-width:375px;margin-right:var(--main-mini-margin);display:flex;flex-direction:column;margin-top:-130px}@media(max-width:425px){.studio-block .studio_content-block .studio_text-block__wrap .studio_text-block[data-v-130cffba]{margin-top:0}}.studio-block .studio_content-block .studio_text-block__wrap .studio_text-block .studio__text_p[data-v-130cffba]{margin-top:35px}.studio-block .studio_content-block .studio_text-block__wrap .studio_text-block .studio_btn_wrap[data-v-130cffba]{width:123px;height:40px;margin-top:60px}.studio-block .studio_content-block .studio_text-block__wrap .studio-people_text-block[data-v-130cffba]{width:unset;margin-right:var(--main-mini-margin)}@media screen and (max-width:1280px){.studio-block .studio_content-block[data-v-130cffba]{height:580px}.studio-block .studio_content-block .studio_text-block__wrap .studio_text-block[data-v-130cffba]{max-width:unset}}@media screen and (max-width:1024px){.studio-block .studio_content-block[data-v-130cffba]{height:unset}.studio-block .studio_content-block .studio_img-wrap[data-v-130cffba]{height:470px}.studio-block .studio_content-block .studio_text-block__wrap .studio_text-block .studio__text_p[data-v-130cffba]{margin-top:40px}.studio-block .studio_content-block .studio_text-block__wrap .studio_text-block .studio_btn_wrap[data-v-130cffba]{width:103px;height:33px;margin-top:80px}}@media screen and (max-width:768px){.studio-block .studio_content-block[data-v-130cffba]{margin-top:80px}.studio-block .studio_content-block .studio_text-block__wrap .studio_text-block .studio_btn_wrap[data-v-130cffba]{margin-top:40px}}@media screen and (max-width:428px){.studio-block .studio_content-block[data-v-130cffba]{margin-top:80px;flex-direction:column}.studio-block .studio_content-block .studio_text-block__wrap[data-v-130cffba]{order:1;width:unset;margin-left:var(--main-big-margin);margin-right:var(--main-mini-margin)}.studio-block .studio_content-block .studio_text-block__wrap .studio_text-block .studio__text_p[data-v-130cffba],.studio-block .studio_content-block .studio_text-block__wrap .studio_text-block .studio_btn_wrap[data-v-130cffba]{margin-top:30px}.studio-block .studio_content-block .studio_img-wrap[data-v-130cffba]{margin-top:87px;width:unset;order:2}}',
        '',
      ]),
        (t.exports = e);
    },
    373: function(t, e, n) {
      var content = n(410);
      'string' == typeof content && (content = [[t.i, content, '']]),
        content.locals && (t.exports = content.locals);
      (0, n(9).default)('7ecd94d8', content, !0, { sourceMap: !1 });
    },
    375: function(t, e, n) {
      var content = n(414);
      'string' == typeof content && (content = [[t.i, content, '']]),
        content.locals && (t.exports = content.locals);
      (0, n(9).default)('7c3f3fdf', content, !0, { sourceMap: !1 });
    },
    376: function(t, e, n) {
      var content = n(416);
      'string' == typeof content && (content = [[t.i, content, '']]),
        content.locals && (t.exports = content.locals);
      (0, n(9).default)('3478c13d', content, !0, { sourceMap: !1 });
    },
    377: function(t, e, n) {
      var content = n(418);
      'string' == typeof content && (content = [[t.i, content, '']]),
        content.locals && (t.exports = content.locals);
      (0, n(9).default)('34055c18', content, !0, { sourceMap: !1 });
    },
    378: function(t, e, n) {
      var content = n(420);
      'string' == typeof content && (content = [[t.i, content, '']]),
        content.locals && (t.exports = content.locals);
      (0, n(9).default)('29e28bf0', content, !0, { sourceMap: !1 });
    },
    393: function(t, e, n) {
      'use strict';
      n.r(e);
      var o = {
          name: 'Item_vacancy',
          components: { Content_btn: n(348).default },
          props: { vacancy: Object, noMargin: Boolean },
          data: function() {
            return { rollUp: !1, hrefsSpanHeight: null };
          },
          mounted: function() {
            this.setVacancyDescriptionHeight();
          },
          methods: {
            setRollUp: function() {
              this.rollUp = !this.rollUp;
            },
            setVacancyDescriptionHeight: function() {
              var t = this.$refs.vacancy_description.clientHeight;
              this.hrefsSpanHeight = t + 60;
            },
          },
          computed: {
            activeRollDawnHeight: function() {
              return this.rollUp ? this.hrefsSpanHeight : 60;
            },
          },
        },
        c = (n(415), n(10)),
        component = Object(c.a)(
          o,
          function() {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n(
              'div',
              {
                class: [
                  'item-vacancy',
                  { 'item-vacancy-no-margin': t.noMargin },
                ],
                style: 'max-height: ' + t.activeRollDawnHeight + 'px',
                on: { click: t.setRollUp },
              },
              [
                n('div', { staticClass: 'title-span' }, [
                  n('span', { staticClass: 'item-project_description_value' }, [
                    t._v(t._s(t.vacancy.title)),
                  ]),
                  t._v(' '),
                  n('div', { staticClass: 'btns-block' }, [
                    n(
                      'div',
                      {
                        staticClass: 'content-btn-wrap',
                        on: {
                          click: function(e) {
                            return t.$emit('clicked');
                          },
                        },
                      },
                      [
                        n('Content_btn', {
                          attrs: { title: 'Send CV', place: 'jobs' },
                        }),
                      ],
                      1,
                    ),
                    t._v(' '),
                    n('button', { staticClass: 'open-vacancy-btn' }, [
                      n(
                        'svg',
                        {
                          attrs: {
                            viewBox: '0 0 60 60',
                            fill: 'none',
                            xmlns: 'http://www.w3.org/2000/svg',
                          },
                        },
                        [
                          n('rect', {
                            attrs: {
                              x: '10',
                              y: '29',
                              width: '40',
                              height: '2',
                            },
                          }),
                          t._v(' '),
                          t.rollUp
                            ? t._e()
                            : n('rect', {
                                attrs: {
                                  x: '31',
                                  y: '10',
                                  width: '40',
                                  height: '2',
                                  transform: 'rotate(90 31 10)',
                                },
                              }),
                        ],
                      ),
                    ]),
                  ]),
                ]),
                t._v(' '),
                n(
                  'p',
                  { ref: 'vacancy_description', staticClass: 'content-p' },
                  [t._v('\n    ' + t._s(t.vacancy.description) + '\n  ')],
                ),
              ],
            );
          },
          [],
          !1,
          null,
          '04bd285c',
          null,
        ),
        d = component.exports;
      installComponents(component, { Content_btn: n(348).default });
      var l = {
          name: 'Jobs',
          components: { Item_vacancy: d },
          props: { data: { type: Object, default: {} } },
          data: function() {
            return {};
          },
        },
        r =
          (n(417),
          Object(c.a)(
            l,
            function() {
              var t = this,
                e = t.$createElement,
                n = t._self._c || e;
              return n('div', { staticClass: 'jobs' }, [
                n(
                  'span',
                  {
                    staticClass:
                      'main-page__content-title-position block-title',
                  },
                  [t._v('careers')],
                ),
                t._v(' '),
                n('span', { staticClass: 'content-title' }, [
                  t._v(t._s(t.data.title)),
                ]),
                t._v(' '),
                n('p', { staticClass: 'team__text_p content-p' }, [
                  t._v('\n    ' + t._s(t.data.description) + '\n  '),
                ]),
              ]);
            },
            [],
            !1,
            null,
            '1ebc41ba',
            null,
          ));
      e.default = r.exports;
    },
    394: function(t, e, n) {
      'use strict';
      n.r(e);
      var o = {
          name: 'People_Studio',
          components: { scrollAnimation: n(347).default },
          props: { data: { type: Object, default: {} } },
          methods: {
            getUrl: function(t) {
              return 'https://strapi-up.verodigital.site'.concat(t);
            },
          },
        },
        c = (n(409), n(10)),
        component = Object(c.a)(
          o,
          function() {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n('div', { staticClass: 'people-studio' }, [
              n(
                'span',
                {
                  staticClass: 'main-page__content-title-position block-title',
                },
                [t._v('studio')],
              ),
              t._v(' '),
              n('span', { staticClass: 'content-title' }, [
                t._v(t._s(t.data.title)),
              ]),
              t._v(' '),
              n('div', { staticClass: 'content-block' }, [
                n('p', { staticClass: 'content-p' }, [
                  t._v(t._s(t.data.description)),
                ]),
                t._v(' '),
                n('div', { staticClass: 'content-column-2' }, [
                  n(
                    'div',
                    { staticClass: 'img-wrap' },
                    [
                      n('scroll-animation', { attrs: { opacity: !1 } }, [
                        n('img', {
                          attrs: { src: t.getUrl(t.data.image.url), alt: '' },
                        }),
                      ]),
                    ],
                    1,
                  ),
                  t._v(' '),
                  n(
                    'p',
                    {
                      staticClass:
                        'process_img-description_margin-top content-p img-width-description',
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
          'fe54414e',
          null,
        );
      e.default = component.exports;
      installComponents(component, { ScrollAnimation: n(347).default });
    },
    395: function(t, e, n) {
      'use strict';
      n.r(e);
      var o = {
          name: 'Team',
          props: { data: { type: Object, default: {} } },
          methods: {
            getUrl: function(t) {
              return 'https://strapi-up.verodigital.site'.concat(t);
            },
          },
        },
        c = (n(413), n(10)),
        component = Object(c.a)(
          o,
          function() {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n('div', { staticClass: 'team-block' }, [
              n(
                'span',
                {
                  staticClass: 'main-page__content-title-position block-title',
                },
                [t._v('team')],
              ),
              t._v(' '),
              n('div', { staticClass: 'team_content-block' }, [
                n(
                  'div',
                  { staticClass: 'team_img-wrap' },
                  [
                    n('scroll-animation', { attrs: { opacity: !1 } }, [
                      n('img', {
                        attrs: { src: t.getUrl(t.data.image.url), alt: '' },
                      }),
                    ]),
                    t._v(' '),
                    n('div', { staticClass: 'img-description' }, [
                      n(
                        'span',
                        {
                          staticClass: 'team-img-description-text',
                          staticStyle: { 'margin-bottom': '6px' },
                        },
                        [
                          t._v(
                            '\n          ' +
                              t._s(t.data.link.name) +
                              '\n        ',
                          ),
                        ],
                      ),
                      t._v(' '),
                      n(
                        'span',
                        { staticClass: 'block-title text-color-white' },
                        [t._v(t._s(t.data.link.link))],
                      ),
                    ]),
                  ],
                  1,
                ),
                t._v(' '),
                n('div', { staticClass: 'team_text-block__wrap' }, [
                  n('div', { staticClass: 'team_text-block' }, [
                    n('span', { staticClass: 'content-title' }, [
                      t._v(t._s(t.data.title)),
                    ]),
                    t._v(' '),
                    n('p', { staticClass: 'team__text_p content-p' }, [
                      t._v(t._s(t.data.description)),
                    ]),
                  ]),
                ]),
              ]),
            ]);
          },
          [],
          !1,
          null,
          '028a0170',
          null,
        );
      e.default = component.exports;
      installComponents(component, { ScrollAnimation: n(347).default });
    },
    409: function(t, e, n) {
      'use strict';
      n(373);
    },
    410: function(t, e, n) {
      (e = n(8)(!1)).push([
        t.i,
        '.people-studio[data-v-fe54414e]{width:100%;display:flex;flex-direction:column;margin-bottom:94px}.people-studio .content-title[data-v-fe54414e]{margin-top:83px;margin-bottom:35px;margin-left:var(--main-big-margin)}.people-studio .content-block[data-v-fe54414e]{display:flex;width:100%}.people-studio .content-block .content-p[data-v-fe54414e]{width:420px;margin-left:var(--main-big-margin);margin-right:var(--main-very-mini-margin)}.people-studio .content-block .content-column-2[data-v-fe54414e]{width:calc(100% - 700px);display:flex;flex-direction:column}.people-studio .content-block .content-column-2 .img-wrap[data-v-fe54414e]{width:100%;height:800px}.people-studio .content-block .content-column-2 .content-p[data-v-fe54414e]{width:unset;margin-left:100px}@media screen and (max-width:1280px){.people-studio[data-v-fe54414e]{margin-bottom:50px}.people-studio .content-block .content-column-2[data-v-fe54414e]{width:calc(100% - 670px)}.people-studio .content-block .content-column-2 .img-wrap[data-v-fe54414e]{height:580px}.people-studio .content-block .content-column-2 .content-p[data-v-fe54414e]{margin-left:0;max-width:490px}}@media screen and (max-width:1024px){.people-studio[data-v-fe54414e]{margin-bottom:20px}.people-studio .content-title[data-v-fe54414e]{margin-bottom:69px}.people-studio .content-block .content-p[data-v-fe54414e]{width:calc(50% - var(--main-big-margin) - var(--main-very-mini-margin)/2)}.people-studio .content-block .content-column-2[data-v-fe54414e]{width:calc(50% - var(--main-very-mini-margin)/2)}.people-studio .content-block .content-column-2 .img-wrap[data-v-fe54414e]{height:520px}.people-studio .content-block .content-column-2 .content-p[data-v-fe54414e]{width:calc(100% - var(--main-mini-margin))!important;margin-right:0!important}}@media screen and (max-width:1024px){.people-studio[data-v-fe54414e]{margin-bottom:0}}@media screen and (max-width:428px){.people-studio .content-title[data-v-fe54414e]{margin-bottom:72px}.people-studio .content-block[data-v-fe54414e]{flex-direction:column}.people-studio .content-block .content-p[data-v-fe54414e]{width:unset;margin-bottom:100px}.people-studio .content-block .content-column-2[data-v-fe54414e]{width:unset}.people-studio .content-block .content-column-2 .content-p[data-v-fe54414e]{width:unset!important;margin-left:var(--main-big-margin);margin-right:var(--main-mini-margin);margin-bottom:0}}',
        '',
      ]),
        (t.exports = e);
    },
    413: function(t, e, n) {
      'use strict';
      n(375);
    },
    414: function(t, e, n) {
      (e = n(8)(!1)).push([
        t.i,
        '.team-block[data-v-028a0170]{position:relative;width:100%;display:flex;flex-direction:column;overflow:hidden}.team-block .team_content-block[data-v-028a0170]{width:calc(100% - var(--main-big-margin) - var(--main-mini-margin));margin-left:var(--main-big-margin);margin-right:var(--main-mini-margin);margin-top:82px;display:flex}.team-block .team_content-block .team_img-wrap[data-v-028a0170]{position:relative;display:flex;margin-right:var(--main-very-mini-margin)}.team-block .team_content-block .team_img-wrap img[data-v-028a0170]{max-width:100%}.team-block .team_content-block .team_img-wrap .img-description[data-v-028a0170]{position:absolute;bottom:30px;left:30px;display:flex;flex-direction:column}.team-block .team_content-block .team_text-block__wrap[data-v-028a0170]{width:calc(50% + 20px);display:flex;margin-top:-130px}.team-block .team_content-block .team_text-block__wrap .team_text-block[data-v-028a0170]{display:flex;flex-direction:column}.team-block .team_content-block .team_text-block__wrap .team_text-block .team__text_p[data-v-028a0170]{margin-top:35px}@media screen and (max-width:1280px){.team-block .team_content-block .team_text-block__wrap .team_text-block[data-v-028a0170]{justify-content:space-between}.team-block .team_content-block .team_text-block__wrap .team_text-block .team__text_p[data-v-028a0170]{margin-top:0}}@media screen and (max-width:768px){.team-block .team_content-block[data-v-028a0170]{width:100%;margin-left:0;margin-right:0}.team-block .team_content-block .team_img-wrap[data-v-028a0170]{width:calc(50% - var(--main-very-mini-margin)/2 - var(--main-mini-margin));margin-left:var(--main-mini-margin);margin-right:var(--main-very-mini-margin)}.team-block .team_content-block .team_text-block__wrap[data-v-028a0170]{width:calc(50% - var(--main-very-mini-margin)/2)}}@media screen and (max-width:428px){.team-block .team_content-block[data-v-028a0170]{flex-direction:column}.team-block .team_content-block .team_text-block__wrap[data-v-028a0170]{order:1;width:unset;margin-left:var(--main-big-margin);margin-right:var(--main-mini-margin)}.team-block .team_content-block .team_text-block__wrap .team_text-block[data-v-028a0170]{margin-bottom:50px}.team-block .team_content-block .team_text-block__wrap .team_text-block .content-title[data-v-028a0170]{margin-bottom:35px}.team-block .team_content-block .team_img-wrap[data-v-028a0170]{order:2;width:unset}}',
        '',
      ]),
        (t.exports = e);
    },
    415: function(t, e, n) {
      'use strict';
      n(376);
    },
    416: function(t, e, n) {
      (e = n(8)(!1)).push([
        t.i,
        '.item-vacancy[data-v-04bd285c]{display:flex;height:auto;max-height:60px;flex-direction:column;padding:24px 20px 24px 30px;border-radius:0;border-top:1px solid #000;border-bottom:1px solid #000;overflow:hidden;margin-bottom:20px;transition:max-height .3s,background-color .3s}.item-vacancy[data-v-04bd285c]:last-child{margin-bottom:0}.item-vacancy .title-span[data-v-04bd285c]{display:flex;align-items:center;justify-content:space-between}.item-vacancy .title-span .item-project_description_value[data-v-04bd285c]{transition:color .3s}.item-vacancy .title-span .btns-block[data-v-04bd285c]{display:flex;align-items:center}.item-vacancy .title-span .btns-block .content-btn-wrap[data-v-04bd285c]{width:-webkit-max-content;width:-moz-max-content;width:max-content;height:-webkit-max-content;height:-moz-max-content;height:max-content;margin-right:20px;display:flex;align-items:center;justify-content:center}.item-vacancy .title-span .btns-block .open-vacancy-btn[data-v-04bd285c]{padding:10px;display:flex;align-items:center;justify-content:center;width:60px;height:60px}.item-vacancy .title-span .btns-block .open-vacancy-btn svg[data-v-04bd285c]{width:100%;height:100%}.item-vacancy .title-span .btns-block .open-vacancy-btn svg rect[data-v-04bd285c]{fill:#000;transition:fill .3s}.item-vacancy .content-p[data-v-04bd285c]{white-space:pre-line;transition:color .3s}.item-vacancy[data-v-04bd285c]:hover{background-color:#000}.item-vacancy:hover .title-span .item-project_description_value[data-v-04bd285c]{color:#fff}.item-vacancy:hover .title-span .btns-block .content-btn-wrap .content-btn-text[data-v-04bd285c]{color:#fff!important}.item-vacancy:hover .title-span .btns-block .content-btn-wrap .content-btn-text[data-v-04bd285c]:after{background-color:#fff}.item-vacancy:hover .title-span .btns-block .open-vacancy-btn svg rect[data-v-04bd285c]{fill:#fff}.item-vacancy:hover .content-p[data-v-04bd285c]{color:#fff}.item-vacancy-no-margin[data-v-04bd285c]{margin-bottom:0}@media screen and (max-width:428px){.item-vacancy[data-v-04bd285c]{padding:13px 0;margin-bottom:10px}.item-vacancy .title-span .btns-block .content-btn-wrap[data-v-04bd285c]{margin-right:10px}.item-vacancy .title-span .btns-block .open-vacancy-btn[data-v-04bd285c]{width:40px;height:40px;padding:5px}}',
        '',
      ]),
        (t.exports = e);
    },
    417: function(t, e, n) {
      'use strict';
      n(377);
    },
    418: function(t, e, n) {
      (e = n(8)(!1)).push([
        t.i,
        '.jobs[data-v-1ebc41ba]{display:flex;flex-direction:column;margin-top:218px;margin-left:var(--main-big-margin);margin-right:var(--main-mini-margin)}.jobs .main-page__content-title-position[data-v-1ebc41ba]{margin-left:0;margin-top:0;margin-bottom:83px}.jobs p[data-v-1ebc41ba]{max-width:65%;margin-top:35px}@media screen and (max-width:1280px){.jobs[data-v-1ebc41ba]{margin-top:120px}}@media screen and (max-width:1024px){.jobs[data-v-1ebc41ba]{margin-top:97px}.jobs .content-title[data-v-1ebc41ba]{margin-bottom:69px}}@media screen and (max-width:768px){.jobs[data-v-1ebc41ba]{margin-top:104px}}',
        '',
      ]),
        (t.exports = e);
    },
    419: function(t, e, n) {
      'use strict';
      n(378);
    },
    420: function(t, e, n) {
      (e = n(8)(!1)).push([
        t.i,
        '.modal-send[data-v-68f78ca7]{position:fixed;z-index:1000;left:0;top:0;width:100%;height:100%;background-color:#fff;display:flex;align-items:center;justify-content:flex-end;padding-left:40px;box-sizing:border-box}@media(max-width:768px){.modal-send[data-v-68f78ca7]{align-items:flex-start}}@media(max-width:580px){.modal-send[data-v-68f78ca7]{padding-left:70px;overflow:auto}}.modal-send .close[data-v-68f78ca7]{position:absolute;top:60px;right:120px;cursor:pointer}@media(max-width:1024px){.modal-send .close[data-v-68f78ca7]{right:40px}}@media(max-width:580px){.modal-send .close[data-v-68f78ca7]{right:20px}}.modal-send .content[data-v-68f78ca7]{margin-right:120px;max-width:1580px;width:100%;display:flex;flex-wrap:wrap;margin-bottom:100px}@media(max-width:1280px){.modal-send .content[data-v-68f78ca7]{max-width:960px;margin-bottom:0}}@media(max-width:1024px){.modal-send .content[data-v-68f78ca7]{max-width:870px;margin-right:40px}}@media(max-width:580px){.modal-send .content[data-v-68f78ca7]{margin-right:20px}}.modal-send .content-title[data-v-68f78ca7]{width:100%;margin-bottom:80px}@media(max-width:1280px){.modal-send .content-title[data-v-68f78ca7]{margin-bottom:10px}}@media(max-width:1024px){.modal-send .content-title[data-v-68f78ca7]{margin-bottom:40px}}@media(max-width:768px){.modal-send .content-title[data-v-68f78ca7]{margin-top:60px}}.modal-send .left[data-v-68f78ca7]{width:calc(100% - 870px)}@media(max-width:1280px){.modal-send .left[data-v-68f78ca7]{width:calc(100% - 540px)}}@media(max-width:1024px){.modal-send .left[data-v-68f78ca7]{width:calc(100% - 480px)}}@media(max-width:768px){.modal-send .left[data-v-68f78ca7]{width:100%;margin-bottom:140px}}@media(max-width:580px){.modal-send .left[data-v-68f78ca7]{margin-bottom:40px}}.modal-send .right[data-v-68f78ca7]{width:810px;margin-left:60px;display:flex;justify-content:space-between;flex-wrap:wrap}@media(max-width:1280px){.modal-send .right[data-v-68f78ca7]{width:500px;margin-left:40px}}@media(max-width:1024px){.modal-send .right[data-v-68f78ca7]{width:460px;margin-left:20px}}@media(max-width:768px){.modal-send .right[data-v-68f78ca7]{width:100%;margin-left:0}}.modal-send .sub-left[data-v-68f78ca7]{width:calc(50% - 30px)}@media(max-width:1280px){.modal-send .sub-left[data-v-68f78ca7]{width:calc(50% - 20px)}}@media(max-width:1024px){.modal-send .sub-left[data-v-68f78ca7]{width:calc(50% - 10px)}}@media(max-width:768px){.modal-send .sub-left[data-v-68f78ca7]{width:calc(50% - 6px)}}@media(max-width:580px){.modal-send .sub-left[data-v-68f78ca7]{width:100%}}.modal-send .sub-right[data-v-68f78ca7]{width:calc(50% - 30px)}@media(max-width:1280px){.modal-send .sub-right[data-v-68f78ca7]{width:calc(50% - 20px)}}@media(max-width:1024px){.modal-send .sub-right[data-v-68f78ca7]{width:calc(50% - 10px)}}@media(max-width:768px){.modal-send .sub-right[data-v-68f78ca7]{width:calc(50% - 6px)}}@media(max-width:580px){.modal-send .sub-right[data-v-68f78ca7]{width:100%}}.modal-send .bottom[data-v-68f78ca7]{display:flex;align-items:center;justify-content:flex-end;width:100%;margin-top:60px}@media(max-width:1280px){.modal-send .bottom[data-v-68f78ca7]{margin-top:40px}}@media(max-width:580px){.modal-send .bottom[data-v-68f78ca7]{flex-direction:column;align-items:flex-end}}.modal-send .input[data-v-68f78ca7]{border:none;border-bottom:4px solid #000;width:100%;height:60px;font-size:24px;line-height:166%;font-family:Helvetica;padding:10px 0 0 20px;box-sizing:border-box;margin-bottom:60px;color:#000}@media(max-width:1280px){.modal-send .input[data-v-68f78ca7]{margin-bottom:40px;font-size:18px}}.modal-send .input[data-v-68f78ca7]:last-child{margin-bottom:0}.modal-send .file[data-v-68f78ca7]{display:flex;align-items:center;cursor:pointer}.modal-send .file svg[data-v-68f78ca7]{width:32px;height:32px}.modal-send .file p[data-v-68f78ca7]{font-size:24px;line-height:166%;font-family:Helvetica;position:relative;margin-left:10px}@media(max-width:1280px){.modal-send .file p[data-v-68f78ca7]{font-size:18px}}.modal-send .file p[data-v-68f78ca7]:after{position:absolute;bottom:-4px;left:0;height:4px;width:60px;content:"";background-color:#000}@media(max-width:1280px){.modal-send .file p[data-v-68f78ca7]:after{height:3px}}.modal-send .file input[data-v-68f78ca7]{display:none}.modal-send .send[data-v-68f78ca7]{width:375px;height:60px;border:4px solid #000;font-family:Helvetica;font-style:normal;font-weight:400;font-size:24px;line-height:166%;margin-left:60px;color:#000}@media(max-width:1280px){.modal-send .send[data-v-68f78ca7]{width:230px;margin-left:40px;font-size:18px}}@media(max-width:1024px){.modal-send .send[data-v-68f78ca7]{width:220px}}@media(max-width:768px){.modal-send .send[data-v-68f78ca7]{width:340px}}@media(max-width:580px){.modal-send .send[data-v-68f78ca7]{max-width:320px;margin-top:40px;margin-bottom:40px}}.modal-send textarea.input[data-v-68f78ca7]{height:100%}@media(max-width:580px){.modal-send textarea.input[data-v-68f78ca7]{height:160px}}.modal-send .d-select[data-v-68f78ca7]{position:relative;cursor:pointer}.modal-send .d-select label[data-v-68f78ca7],.modal-send .d-select p[data-v-68f78ca7]{font-family:Helvetica}.modal-send .d-select.active .d-selected p[data-v-68f78ca7]{color:#000}.modal-send .d-selected[data-v-68f78ca7]{display:flex;align-items:center;justify-content:space-between;padding-right:20px;cursor:pointer;margin-top:10px}.modal-send .d-selected p[data-v-68f78ca7]{cursor:pointer;color:#888}.modal-send .d-selected.open svg[data-v-68f78ca7]{transform:rotate(180deg)}.modal-send .d-selected svg[data-v-68f78ca7]{width:20px;height:10px}.modal-send .d-select-content[data-v-68f78ca7]{position:absolute;left:0;right:0;bottom:-4px;transform:translateY(100%);background-color:#fff;z-index:10;display:flex;flex-direction:column}.modal-send .d-select-content label[data-v-68f78ca7]{padding:0 20px;height:60px;color:#000;display:flex;align-items:center}.modal-send .d-select-content label input[data-v-68f78ca7]{display:none}.modal-send .d-select-content label[data-v-68f78ca7]:hover{color:#fff;background-color:#000}.people[data-v-68f78ca7]{width:100%;display:flex;flex-direction:column;margin-bottom:150px}.people .title-img-wrap[data-v-68f78ca7]{position:relative;width:100%;height:var(--winHeight);display:flex;align-items:center;transition:height .3s}.people .title-img-wrap .people-title[data-v-68f78ca7]{position:absolute;z-index:1}@media screen and (max-width:1280px){.people[data-v-68f78ca7]{margin-bottom:130px}}@media screen and (max-width:1024px){.people[data-v-68f78ca7]{margin-bottom:0}}',
        '',
      ]),
        (t.exports = e);
    },
    454: function(t, e, n) {
      'use strict';
      n.r(e);
      n(39);
      var o = n(7),
        c = n(349),
        d = n(394),
        l = n(358),
        r = n(395),
        m = n(393),
        f = n(347),
        x = n(168),
        v = {
          name: 'People',
          components: {
            ScrollAnimation: f.default,
            News: c.default,
            People_Studio: d.default,
            Studio: l.default,
            Team: r.default,
            Jobs: m.default,
          },
          asyncData: function(t) {
            return Object(o.a)(
              regeneratorRuntime.mark(function e() {
                var n, o;
                return regeneratorRuntime.wrap(
                  function(e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (n = t.error),
                            t.params,
                            (e.prev = 1),
                            (e.next = 4),
                            x.a.getPage('people')
                          );
                        case 4:
                          return (
                            (o = e.sent), e.abrupt('return', { people: o.data })
                          );
                        case 8:
                          (e.prev = 8),
                            (e.t0 = e.catch(1)),
                            n({
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
            return {
              modalOpen: !1,
              selected: 'Job',
              openSelect: !1,
              list: [
                'Job',
                'Architect',
                'Visualizer',
                'Layout designer',
                'UX designer',
              ],
              people: {},
            };
          },
          methods: {
            getUrl: function(t) {
              return 'https://strapi-up.verodigital.site'.concat(t);
            },
          },
        },
        h = (n(419), n(10)),
        component = Object(h.a)(
          v,
          function() {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n(
              'div',
              { staticClass: 'people' },
              [
                n(
                  'div',
                  { staticClass: 'title-img-wrap' },
                  [
                    n(
                      'span',
                      {
                        staticClass:
                          'people-title main-content-margin-left-right main-page_start-text',
                      },
                      [t._v('\n      ' + t._s(t.people.title) + '\n    ')],
                    ),
                    t._v(' '),
                    n(
                      'ScrollAnimation',
                      { attrs: { cover: '', opacity: !1 } },
                      [
                        n('img', {
                          attrs: {
                            src: t.getUrl(t.people.backgroun_image.url),
                            alt: '',
                          },
                        }),
                      ],
                    ),
                  ],
                  1,
                ),
                t._v(' '),
                n('People_Studio', { attrs: { data: t.people.explore } }),
                t._v(' '),
                n('Studio', { attrs: { data: { about: t.people.about } } }),
                t._v(' '),
                n('Team', { attrs: { data: t.people.team } }),
                t._v(' '),
                n('Jobs', {
                  attrs: { data: t.people.careers },
                  on: {
                    clicked: function(e) {
                      t.modalOpen = !t.modalOpen;
                    },
                  },
                }),
                t._v(' '),
                n('News'),
                t._v(' '),
                t.modalOpen
                  ? n('div', { staticClass: 'modal-send' }, [
                      n(
                        'div',
                        {
                          staticClass: 'close',
                          on: {
                            click: function(e) {
                              t.modalOpen = !t.modalOpen;
                            },
                          },
                        },
                        [
                          n(
                            'svg',
                            {
                              attrs: {
                                width: '60',
                                height: '60',
                                viewBox: '0 0 60 60',
                                fill: 'none',
                                xmlns: 'http://www.w3.org/2000/svg',
                              },
                            },
                            [
                              n('path', {
                                attrs: {
                                  d: 'M15 15L45 45M45 15L15 45',
                                  stroke: 'black',
                                  'stroke-width': '4',
                                },
                              }),
                            ],
                          ),
                        ],
                      ),
                      t._v(' '),
                      n('div', { staticClass: 'content' }, [
                        n('span', { staticClass: 'content-title' }, [
                          t._v('Send your CV'),
                        ]),
                        t._v(' '),
                        t._m(0),
                        t._v(' '),
                        n('div', { staticClass: 'right' }, [
                          n('div', { staticClass: 'sub-left' }, [
                            n('input', {
                              staticClass: 'input',
                              attrs: { type: 'text', placeholder: 'Name' },
                            }),
                            t._v(' '),
                            n('input', {
                              staticClass: 'input',
                              attrs: {
                                type: 'email',
                                placeholder: 'Email address',
                              },
                            }),
                            t._v(' '),
                            n(
                              'div',
                              {
                                class: [
                                  'd-select input',
                                  { active: 'Job' !== t.selected },
                                ],
                              },
                              [
                                n(
                                  'div',
                                  {
                                    class: [
                                      'd-selected',
                                      { open: t.openSelect },
                                    ],
                                    on: {
                                      click: function(e) {
                                        t.openSelect = !t.openSelect;
                                      },
                                    },
                                  },
                                  [
                                    n('p', [t._v(t._s(t.selected))]),
                                    t._v(' '),
                                    n(
                                      'svg',
                                      {
                                        attrs: {
                                          width: '24',
                                          height: '15',
                                          viewBox: '0 0 24 15',
                                          fill: 'none',
                                          xmlns: 'http://www.w3.org/2000/svg',
                                        },
                                      },
                                      [
                                        n('path', {
                                          attrs: {
                                            d: 'M2 2L12 12L22 2',
                                            stroke: 'black',
                                            'stroke-width': '4',
                                          },
                                        }),
                                      ],
                                    ),
                                  ],
                                ),
                                t._v(' '),
                                t.openSelect
                                  ? n(
                                      'div',
                                      { staticClass: 'd-select-content' },
                                      t._l(t.list, function(e, o) {
                                        return n('label', { key: o }, [
                                          t._v(t._s(e) + '\n                '),
                                          n('input', {
                                            attrs: {
                                              type: 'radio',
                                              name: 'select',
                                            },
                                            domProps: { value: e },
                                            on: {
                                              change: function(n) {
                                                (t.selected = e),
                                                  (t.openSelect = !1);
                                              },
                                            },
                                          }),
                                        ]);
                                      }),
                                      0,
                                    )
                                  : t._e(),
                              ],
                            ),
                          ]),
                          t._v(' '),
                          t._m(1),
                          t._v(' '),
                          n('div', { staticClass: 'bottom' }, [
                            n('label', { staticClass: 'file' }, [
                              n(
                                'svg',
                                {
                                  attrs: {
                                    width: '29',
                                    height: '29',
                                    viewBox: '0 0 29 29',
                                    fill: 'none',
                                    xmlns: 'http://www.w3.org/2000/svg',
                                  },
                                },
                                [
                                  n('path', {
                                    attrs: {
                                      d:
                                        'M6.29011 11.367C8.08245 9.57159 10.9884 9.57159 12.7808 11.367L17.6487 16.2431C19.4411 18.0385 19.4411 20.9494 17.6487 22.7447C15.8564 24.5401 12.9504 24.5401 11.1581 22.7447L4.3924 15.9675C1.20253 12.7722 1.20253 7.59168 4.3924 4.39644C7.58227 1.20119 12.7541 1.20119 15.9439 4.39644L24.6076 13.0747C27.7975 16.2699 27.7975 21.4505 24.6076 24.6457C23.2242 26.0315 21.468 26.8162 19.6624 27',
                                      stroke: 'black',
                                      'stroke-width': '4',
                                    },
                                  }),
                                ],
                              ),
                              t._v(' '),
                              n('p', [t._v('Attach CV')]),
                              t._v(' '),
                              n('input', { attrs: { type: 'file' } }),
                            ]),
                            t._v(' '),
                            n('button', { staticClass: 'send' }, [
                              t._v('Send'),
                            ]),
                          ]),
                        ]),
                      ]),
                    ])
                  : t._e(),
              ],
              1,
            );
          },
          [
            function() {
              var t = this.$createElement,
                e = this._self._c || t;
              return e('div', { staticClass: 'left' }, [
                e('span', { staticClass: 'content-p' }, [
                  this._v(
                    'up architecture makes unique projects. Every client, corporate or\n          private is unique. It is our ambition to create distinctive design\n          that reflect the sould and personal identity of our clients.up\n          architecture makes unique projects.\n        ',
                  ),
                ]),
              ]);
            },
            function() {
              var t = this.$createElement,
                e = this._self._c || t;
              return e('div', { staticClass: 'sub-right' }, [
                e('textarea', {
                  staticClass: 'input',
                  attrs: { placeholder: 'Few words about you' },
                }),
              ]);
            },
          ],
          !1,
          null,
          '68f78ca7',
          null,
        );
      e.default = component.exports;
      installComponents(component, {
        ScrollAnimation: n(347).default,
        People_Studio: n(394).default,
        Studio: n(358).default,
        Team: n(395).default,
        Jobs: n(393).default,
        News: n(349).default,
      });
    },
  },
]);
