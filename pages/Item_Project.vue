<template>
  <div class="item-project">
    <div class="title-img-wrap">
      <span
        class="project-title main-page_start-text">homebase for world wide networko</span>
      <Image_Scale_Block :img="'/images/Home/Title-imgs/title-img-2.jpg'"/>
    </div>
    <div class="description-block">
      <div class="description-text-wrap">
        <p class="content-p pages-content-margin-left-big">{{description}}</p>
      </div>

      <div class="project-values-wrap">
        <div class="values-block">
          <div class="value">
            <span class="text-very-small">location</span>
            <span class="item-project_description_value">{{values.location}}</span>
          </div>
          <div class="value-big">
            <div class="value">
              <span class="text-very-small">timeline</span>
              <span class="item-project_description_value">{{values.timeline}}</span>
            </div>
            <div class="value">
              <span class="text-very-small">status</span>
              <span class="item-project_description_value">{{values.status}}</span>
            </div>
          </div>
          <div class="value">
            <span class="text-very-small">size</span>
            <span class="item-project_description_value">{{values.size}}</span>
          </div>
          <div class="value">
            <span class="text-very-small">client</span>
            <span class="item-project_description_value">{{values.client}}</span>
          </div>
          <div class="value">
            <span class="item-project_pres-view">presentation view</span>
          </div>
        </div>
      </div>
    </div>

    <Item_Project_Content v-for="(item, index) in itemProjectContent" :key="index" :project="item"/>

    <div class="paginator">
      <button>
        <svg viewBox="0 0 67 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 12L20 23.547V0.452994L0 12ZM18 14H66.5V10H18V14Z" fill="black"/>
        </svg>
      </button>
      <button>
        <svg viewBox="0 0 67 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M66.5 12L46.5 0.452996L46.5 23.547L66.5 12ZM48.5 10L-1.74846e-07 10L1.74846e-07 14L48.5 14L48.5 10Z"
                fill="black"/>
        </svg>
      </button>
    </div>
    <News/>
  </div>
</template>

<script>
    import News from "../components/shared/News";
    import Item_Project_Content from "../components/Item_Project/Item_Project_Content";

    export default {
        name: 'Item_Project',
        components: {News, Item_Project_Content},
        data() {
            return {
                itemProjectContent: [
                    {
                        img: ['/images/Item_Project/contentImg1.jpg'],
                        description: 'Founded in 2018 by Anne Boonstra UP works on both architecture and interior projects in the Netherlands as well as international. UP is unique projects.',
                        styleType: 1
                    },
                    {
                        img: ['/images/Item_Project/contentImg2.jpg'],
                        description: 'Founded in 2018 by Anne Boonstra UP works on both architecture and interior projects in the Netherlands as well as international. UP is unique projects.',
                        styleType: 2
                    },
                    {
                        img: ['/images/Item_Project/contentImg3_1.jpg', '/images/Item_Project/contentImg3_2.jpg', '/images/Item_Project/contentImg3_3.jpg'],
                        description: 'Founded in 2018 by Anne Boonstra UP works on both architecture and interior projects in the Netherlands as well as international. UP is unique projects.',
                        styleType: 3
                    },
                    {
                        img: ['/images/Item_Project/contentImg4.jpg'],
                        styleType: 4
                    },
                    {
                        img: ['/images/Item_Project/contentImg5.jpg'],
                        description: 'Founded in 2018 by Anne Boonstra UP works on both architecture and interior projects in the Netherlands as well as international. UP is unique projects.',
                        styleType: 5
                    },
                    {
                        img: ['/images/Item_Project/contentImg6.jpg'],
                        description: 'Founded in 2018 by Anne Boonstra UP works on both architecture and interior projects in the Netherlands as well as international. UP is unique projects.',
                        styleType: 6
                    }
                ],
                description: 'Founded in 2018 by Anne Boonstra UP works on both architecture and interior projects in the Netherlands as well as international. UP is unique projects. Every client, corporate or private, is unique. It is our ambition to create distinctive designs that reflect the soul and personal identity of our clients. Founded in 2018 by Anne Boonstra UP works on both architecture and interior projects in the Netherlands as well as international. UP is unique projects.\n \n Founded in 2018 by Anne Boonstra UP works on both architecture and interior projects in the Netherlands as well as international. UP is unique projects. Every client, corporate or private, is unique. It is our ambition to create distinctive designs that reflect the soul and personal identity of our clients. Founded in 2018 by Anne Boonstra UP works on both architecture and interior projects in the Netherlands as well as international. UP is unique projects.',
                values: {
                    location: 'Utrecht',
                    timeline: '2019',
                    status: 'Build',
                    size: '1800',
                    client: '5CA international b.v.'
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
  .item-project {
    width: 100%;
    display: flex;
    flex-direction: column;

    .title-img-wrap {
      position: relative;
      width: 100%;
      height: var(--winHeight);
      display: flex;
      align-items: center;

      .project-title {
        margin-right: var(--main-mini-margin);
        margin-left: var(--main-mini-margin);
        position: absolute;
        z-index: 1;
      }
    }

    .description-block {
      width: 100%;
      display: flex;
      justify-content: space-between;
      margin-top: 133px;
      margin-bottom: 47px;

      .description-text-wrap {
        display: flex;
        flex-direction: column;
        width: calc((100% - var(--main-very-mini-margin)) / 2);

        .content-p {
          white-space: pre-line;
        }
      }
    }

    .project-values-wrap {
      width: calc((100% - var(--main-very-mini-margin)) / 2);
      display: flex;
      flex-direction: column;

      .values-block {
        width: 100%;
        display: flex;
        flex-direction: column;

        .value-big {
          display: flex;
        }
      }
    }

    .paginator {
      display: flex;
      align-self: center;
      align-items: center;
      justify-content: space-between;
      width: 195px;
      height: 50px;
      margin-bottom: 180px;

      button {
        width: calc((195px - 50px) / 2);

        svg {
          width: 100%;
          height: 100%;
        }
      }
    }
  }

  @media screen and (max-width: 1280px) {
    .item-project {
      .description-block {
        margin-top: 103px;
        margin-bottom: 67px;
      }
    }
    .paginator {
      margin-bottom: 100px !important;

      button {
        width: calc((195px - 60px) / 2) !important;
      }
    }
  }

  @media screen and (max-width: 1024px) {
    .item-project {
      .description-block {
        margin-bottom: 117px;
      }
    }
  }

  @media screen and (max-width: 768px) {
    .item-project {
      .description-block {
        margin-top: 53px;
        margin-bottom: 53px;
      }
    }
  }

  @media screen and (max-width: 414px) {
    .item-project {
      .description-block {
        margin-top: 103px;
        flex-direction: column;
        margin-bottom: 179px;

        .project-values-wrap {
          width: unset;
          order: 1;
          margin-left: var(--main-big-margin);

          .values-block {
            .value-big {
              justify-content: space-between;
            }
          }
        }

        .description-text-wrap {
          width: unset;
          order: 2;

          .content-p {
            margin-right: var(--main-mini-margin);
          }
        }
      }
    }
  }
</style>
