<template>
  <div class="team-block">
    <span class="main-page__content-title-position block-title">team</span>
    <div class="team_content-block">
      <div class="team_img-wrap">
        <scroll-animation :opacity="false">
          <img :src="getUrl(data.image.url)" alt="" />
        </scroll-animation>
        <div class="img-description">
          <span class="team-img-description-text" style="margin-bottom: 6px">
            {{ data.link.name }}
          </span>
          <span class="block-title text-color-white">{{ data.link.link }}</span>
        </div>
      </div>
      <div class="team_text-block__wrap">
        <div class="team_text-block">
          <span class="content-title">{{ data.title }}</span>
          <p class="team__text_p content-p">{{ data.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Team',
    props: {
      data: {
        type: Object,
        default: {},
      },
    },
    methods: {
      getUrl(url) {
        return `https://ovz13.dwynn-dev.me2jm.vps.myjino.ru${url}`;
      },
    },
  };
</script>

<style lang="scss" scoped>
  .team-block {
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;

    .team_content-block {
      width: calc(100% - var(--main-big-margin) - var(--main-mini-margin));
      margin-left: var(--main-big-margin);
      margin-right: var(--main-mini-margin);
      margin-top: 82px;
      display: flex;

      .team_img-wrap {
        position: relative;
        display: flex;
        margin-right: var(--main-very-mini-margin);
        img {
          max-width: 100%;
        }

        .img-description {
          position: absolute;
          bottom: 30px;
          left: 30px;
          display: flex;
          flex-direction: column;
        }
      }

      .team_text-block__wrap {
        width: calc((100% - 60px) / 2 + 50px);
        display: flex;
        margin-top: -130px;

        .team_text-block {
          display: flex;
          flex-direction: column;

          .team__text_p {
            margin-top: 35px;
          }
        }
      }
    }
  }

  @media screen and (max-width: 1280px) {
    .team-block {
      .team_content-block {
        .team_text-block__wrap {
          .team_text-block {
            justify-content: space-between;
            .team__text_p {
              margin-top: 0;
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 768px) {
    .team-block {
      .team_content-block {
        width: 100%;
        margin-left: 0;
        margin-right: 0;
        .team_img-wrap {
          width: calc(
            (100% - var(--main-very-mini-margin)) / 2 - var(--main-mini-margin)
          );
          margin-left: var(--main-mini-margin);
          margin-right: var(--main-very-mini-margin);
        }
        .team_text-block__wrap {
          width: calc((100% - var(--main-very-mini-margin)) / 2);
        }
      }
    }
  }

  @media screen and (max-width: 428px) {
    .team-block {
      .team_content-block {
        flex-direction: column;
        .team_text-block__wrap {
          order: 1;
          width: unset;
          margin-left: var(--main-big-margin);
          margin-right: var(--main-mini-margin);
          .team_text-block {
            margin-bottom: 50px;
            .content-title {
              margin-bottom: 35px;
            }
          }
        }
        .team_img-wrap {
          order: 2;
          width: unset;
        }
      }
    }
  }
</style>
