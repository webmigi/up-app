<template>
  <div class="people">
    <div class="title-img-wrap">
      <span
        class="people-title main-content-margin-left-right main-page_start-text"
      >
        {{ people.title }}
      </span>
      <ScrollAnimation cover :opacity="false">
        <img :src="getUrl(people.backgroun_image.url)" alt="" />
      </ScrollAnimation>
    </div>
    <People_Studio :data="people.explore" />
    <Studio :data="{ about: people.about }" />
    <Team :data="people.team" />
    <Jobs :data="people.careers" @clicked="modalOpen = !modalOpen" />
    <News />
    <div class="modal-send" v-if="modalOpen">
      <div class="close" @click="modalOpen = !modalOpen">
        <svg
          width="60"
          height="60"
          viewBox="0 0 60 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M15 15L45 45M45 15L15 45" stroke="black" stroke-width="4" />
        </svg>
      </div>
      <div class="content">
        <span class="content-title">Send your CV</span>
        <div class="left">
          <span class="content-p"
            >up architecture makes unique projects. Every client, corporate or
            private is unique. It is our ambition to create distinctive design
            that reflect the sould and personal identity of our clients.up
            architecture makes unique projects.
          </span>
        </div>
        <div class="right">
          <div class="sub-left">
            <input class="input" type="text" placeholder="Name" />
            <input class="input" type="email" placeholder="Email address" />

            <div :class="['d-select input', { active: selected !== 'Job' }]">
              <div
                :class="['d-selected', { open: openSelect }]"
                @click="openSelect = !openSelect"
              >
                <p>{{ selected }}</p>
                <svg
                  width="24"
                  height="15"
                  viewBox="0 0 24 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2 2L12 12L22 2" stroke="black" stroke-width="4" />
                </svg>
              </div>
              <div class="d-select-content" v-if="openSelect">
                <label v-for="(item, idx) in list" :key="idx"
                  >{{ item }}
                  <input
                    type="radio"
                    name="select"
                    :value="item"
                    @change="[(selected = item), (openSelect = false)]"
                  />
                </label>
              </div>
            </div>
          </div>
          <div class="sub-right">
            <textarea
              class="input"
              placeholder="Few words about you"
            ></textarea>
          </div>
          <div class="bottom">
            <label class="file">
              <svg
                width="29"
                height="29"
                viewBox="0 0 29 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.29011 11.367C8.08245 9.57159 10.9884 9.57159 12.7808 11.367L17.6487 16.2431C19.4411 18.0385 19.4411 20.9494 17.6487 22.7447C15.8564 24.5401 12.9504 24.5401 11.1581 22.7447L4.3924 15.9675C1.20253 12.7722 1.20253 7.59168 4.3924 4.39644C7.58227 1.20119 12.7541 1.20119 15.9439 4.39644L24.6076 13.0747C27.7975 16.2699 27.7975 21.4505 24.6076 24.6457C23.2242 26.0315 21.468 26.8162 19.6624 27"
                  stroke="black"
                  stroke-width="4"
                />
              </svg>
              <p>Attach CV</p>
              <input type="file" />
            </label>
            <button class="send">Send</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import News from '../components/shared/News';
  import People_Studio from '../components/People/People_Studio';
  import Studio from '../components/shared/Studio';
  import Team from '../components/People/Team';
  import Jobs from '../components/People/Jobs/Jobs';
  import ScrollAnimation from '../components/ScrollAnimation';
  import axiosOption from '~/services/axios';

  export default {
    name: 'People',
    components: {
      ScrollAnimation,
      News,
      People_Studio,
      Studio,
      Team,
      Jobs,
    },
    async asyncData({ error, params }) {
      try {
        const people = await axiosOption.getPage('people');
        return { people: people.data };
      } catch (e) {
        error({
          statusCode: 503,
          message: 'Unable to fetch blogs at this time',
        });
      }
    },
    head() {
      return {
        title: this.people.SEO.seoTitle,
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: this.people.SEO.seoDescription,
          },
          {
            hid: 'fb:app_id',
            property: 'fb:app_id',
            content: 988674798283826,
          },
          {
            hid: 'og:title',
            property: 'og:title',
            content: this.people.SEO.seoTitle,
          },
          {
            hid: 'og:url',
            property: 'og:url',
            content: 'http://localhost:3000',
          },
          {
            hid: 'og:type',
            property: 'og:type',
            content: 'website',
          },
          {
            hid: 'og:description',
            property: 'og:description',
            content: this.people.SEO.seoDescription,
          },
          {
            hid: 'og:site_name',
            property: 'og:site_name',
            content: 'up',
          },
          {
            hid: 'og:image',
            property: 'og:image',
            content:
              'https://strapi-up.verodigital.site/' +
              (this.people.SEO.seoImage
                ? this.people.SEO.seoImage.url
                : '/uploads/28_s5_cam001_211541b7b2.jpg'),
          },
          {
            name: 'twitter:title',
            content: this.people.SEO.seoTitle,
          },
          {
            name: 'twitter:card',
            content: 'summary',
          },
          {
            name: 'twitter:description',
            content: this.people.SEO.seoDescription,
          },
          {
            name: 'twitter:site',
            content: 'website',
          },
          {
            name: 'twitter:image',
            content:
              'https://strapi-up.verodigital.site/' +
              (this.people.SEO.seoImage
                ? this.people.SEO.seoImage.url
                : '/uploads/28_s5_cam001_211541b7b2.jpg'),
          },
        ],
      };
    },
    data() {
      return {
        modalOpen: false,
        selected: 'Job',
        openSelect: false,
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
      getUrl(url) {
        return `https://strapi-up.verodigital.site${url}`;
      },
    },
  };
</script>

<style lang="scss" scoped>
  .modal-send {
    position: fixed;
    z-index: 1000;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-left: 40px;
    box-sizing: border-box;
    @media (max-width: 768px) {
      align-items: flex-start;
    }
    @media (max-width: 580px) {
      padding-left: 70px;
      overflow: auto;
    }
    .close {
      position: absolute;
      top: 60px;
      right: 120px;
      cursor: pointer;
      @media (max-width: 1024px) {
        right: 40px;
      }
      @media (max-width: 580px) {
        right: 20px;
      }
    }

    .content {
      margin-right: 120px;
      max-width: 1580px;
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      margin-bottom: 100px;
      @media (max-width: 1280px) {
        max-width: 960px;
        margin-bottom: 0;
      }
      @media (max-width: 1024px) {
        max-width: 870px;
        margin-right: 40px;
      }
      @media (max-width: 580px) {
        margin-right: 20px;
      }
    }

    .content-title {
      width: 100%;
      margin-bottom: 80px;
      @media (max-width: 1280px) {
        margin-bottom: 10px;
      }
      @media (max-width: 1024px) {
        margin-bottom: 40px;
      }
      @media (max-width: 768px) {
        margin-top: 60px;
      }
    }

    .left {
      width: calc(100% - 870px);
      @media (max-width: 1280px) {
        width: calc(100% - 540px);
      }
      @media (max-width: 1024px) {
        width: calc(100% - 480px);
      }
      @media (max-width: 768px) {
        width: 100%;
        margin-bottom: 140px;
      }
      @media (max-width: 580px) {
        margin-bottom: 40px;
      }
    }

    .right {
      width: 810px;
      margin-left: 60px;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      @media (max-width: 1280px) {
        width: 500px;
        margin-left: 40px;
      }
      @media (max-width: 1024px) {
        width: 460px;
        margin-left: 20px;
      }
      @media (max-width: 768px) {
        width: 100%;
        margin-left: 0;
      }
    }

    .sub-left {
      width: calc(50% - 30px);
      @media (max-width: 1280px) {
        width: calc(50% - 20px);
      }
      @media (max-width: 1024px) {
        width: calc(50% - 10px);
      }
      @media (max-width: 768px) {
        width: calc(50% - 6px);
      }
      @media (max-width: 580px) {
        width: 100%;
      }
    }

    .sub-right {
      width: calc(50% - 30px);
      @media (max-width: 1280px) {
        width: calc(50% - 20px);
      }
      @media (max-width: 1024px) {
        width: calc(50% - 10px);
      }
      @media (max-width: 768px) {
        width: calc(50% - 6px);
      }
      @media (max-width: 580px) {
        width: 100%;
      }
    }

    .bottom {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      width: 100%;
      margin-top: 60px;
      @media (max-width: 1280px) {
        margin-top: 40px;
      }
      @media (max-width: 580px) {
        flex-direction: column;
        align-items: flex-end;
      }
    }

    .input {
      border: none;
      border-bottom: 4px solid #000;
      width: 100%;
      height: 60px;
      font-size: 24px;
      line-height: 166%;
      padding: 0;
      font-family: Helvetica;
      padding-left: 20px;
      padding-top: 10px;
      box-sizing: border-box;
      margin-bottom: 60px;
      color: #000;
      @media (max-width: 1280px) {
        margin-bottom: 40px;
        font-size: 18px;
      }
      &:last-child {
        margin-bottom: 0;
      }
    }

    .file {
      display: flex;
      align-items: center;
      cursor: pointer;
      svg {
        width: 32px;
        height: 32px;
      }
      p {
        font-size: 24px;
        line-height: 166%;
        font-family: Helvetica;
        position: relative;
        margin-left: 10px;
        @media (max-width: 1280px) {
          font-size: 18px;
        }
        &:after {
          position: absolute;
          bottom: -4px;
          left: 0;
          height: 4px;
          width: 60px;
          content: '';
          background-color: #000;
          @media (max-width: 1280px) {
            height: 3px;
          }
        }
      }
      input {
        display: none;
      }
    }

    .send {
      width: 375px;
      height: 60px;
      border: 4px solid #000000;
      font-family: Helvetica;
      font-style: normal;
      font-weight: normal;
      font-size: 24px;
      line-height: 166%;
      margin-left: 60px;
      color: #000000;
      @media (max-width: 1280px) {
        width: 230px;
        margin-left: 40px;
        font-size: 18px;
      }
      @media (max-width: 1024px) {
        width: 220px;
      }
      @media (max-width: 768px) {
        width: 340px;
      }
      @media (max-width: 580px) {
        max-width: 320px;
        margin-top: 40px;
        margin-bottom: 40px;
      }
    }

    textarea.input {
      height: 100%;
      @media (max-width: 580px) {
        height: 160px;
      }
    }

    .d-select {
      position: relative;
      cursor: pointer;
      p,
      label {
        font-family: Helvetica;
      }
      &.active {
        .d-selected p {
          color: #000;
        }
      }
    }

    .d-selected {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-right: 20px;
      cursor: pointer;
      margin-top: 10px;
      p {
        cursor: pointer;
        color: #888888;
      }
      &.open svg {
        transform: rotate(180deg);
      }
      svg {
        width: 20px;
        height: 10px;
      }
    }

    .d-select-content {
      position: absolute;
      left: 0;
      right: 0;
      bottom: -4px;
      transform: translateY(100%);
      background-color: #fff;
      z-index: 10;
      display: flex;
      flex-direction: column;

      label {
        padding: 0 20px;
        height: 60px;
        color: #000;
        display: flex;
        align-items: center;
        input {
          display: none;
        }
        &:hover {
          color: #ffffff;
          background-color: #000;
        }
      }
    }
  }

  .people {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 150px;

    .title-img-wrap {
      position: relative;
      width: 100%;
      height: var(--winHeight);
      display: flex;
      align-items: center;
      transition: height 0.3s;

      .people-title {
        position: absolute;
        z-index: 1;
      }
    }
  }
  @media screen and (max-width: 1280px) {
    .people {
      margin-bottom: 130px;
    }
  }
  @media screen and (max-width: 1024px) {
    .people {
      margin-bottom: 0;
    }
  }
</style>
