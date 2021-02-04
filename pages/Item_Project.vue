<template>
  <div class="item-project">
    <div class="title-img-wrap">
      <span
        class="project-title main-content-margin-left-right main-page_start-text">homebase for world wide networko</span>
      <Image_Scale_Block :img="'/images/Home/Title-imgs/title-img-2.jpg'"/>
    </div>


    <div class="description-block">
      <div class="description-text-wrap">
        <p class="content-p pages-content-margin-left-big"
           v-for="(item, index) in description" :key="index">{{item}}</p>
      </div>

      <div class="project-values-wrap">
        <div class="values-block">

          <div class="value">
            <span class="text-very-small">location</span>
            <span class="item-project_description_value">{{values.location}}</span>
          </div>
          <div style="display: flex">
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
        </div>
      </div>
    </div>


    <News/>
  </div>
</template>

<script>
    import News from "../components/Home/News";

    export default {
        name: 'Item_Project',
        components: {News},
        data() {
            return {
                itemProjectContent: [
                    {
                        img: ['/images/ItemProject/contentImg1.jpg'],
                        description: 'Founded in 2018 by Anne Boonstra UP works on both architecture and interior projects in the Netherlands as well as international. UP is unique projects.',
                        styleType: 1
                    },
                    {
                        img: ['/images/ItemProject/contentImg2.jpg'],
                        description: 'Founded in 2018 by Anne Boonstra UP works on both architecture and interior projects in the Netherlands as well as international. UP is unique projects.',
                        styleType: 2
                    },
                    {
                        img: ['/images/ItemProject/contentImg3_1.jpg', '/images/ItemProject/contentImg3_2.jpg'],
                        description: 'Founded in 2018 by Anne Boonstra UP works on both architecture and interior projects in the Netherlands as well as international. UP is unique projects.',
                        styleType: 3
                    },
                    {
                        img: ['/images/ItemProject/contentImg4.jpg'],
                        description: 'Founded in 2018 by Anne Boonstra UP works on both architecture and interior projects in the Netherlands as well as international. UP is unique projects.',
                        styleType: 4
                    },
                    {
                        img: ['/images/ItemProject/contentImg5.jpg'],
                        description: 'Founded in 2018 by Anne Boonstra UP works on both architecture and interior projects in the Netherlands as well as international. UP is unique projects.',
                        styleType: 5
                    },
                    {
                        img: ['/images/ItemProject/contentImg6.jpg'],
                        description: 'Founded in 2018 by Anne Boonstra UP works on both architecture and interior projects in the Netherlands as well as international. UP is unique projects.',
                        styleType: 6
                    },
                    {
                        img: ['/images/ItemProject/contentImg7.jpg'],
                        description: 'Founded in 2018 by Anne Boonstra UP works on both architecture and interior projects in the Netherlands as well as international. UP is unique projects.',
                        styleType: 7
                    }
                ],
                description: ['Founded in 2018 by Anne Boonstra UP works on both architecture and interior projects in the Netherlands as well as international. UP is unique projects. Every client, corporate or private, is unique. It is our ambition to create distinctive designs that reflect the soul and personal identity of our clients. Founded in 2018 by Anne Boonstra UP works on both architecture and interior projects in the Netherlands as well as international. UP is unique projects.',
                    'Founded in 2018 by Anne Boonstra UP works on both architecture and interior projects in the Netherlands as well as international. UP is unique projects. Every client, corporate or private, is unique. It is our ambition to create distinctive designs that reflect the soul and personal identity of our clients. Founded in 2018 by Anne Boonstra UP works on both architecture and interior projects in the Netherlands as well as international. UP is unique projects.'],
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
        position: absolute;
        z-index: 1;
      }
    }

    .description-block {
      width: 100%;
      display: flex;
      justify-content: space-between;

      .description-text-wrap {
        display: flex;
        flex-direction: column;
        width: calc((100% - 60px) / 2);
      }
    }

    .project-values-wrap {
      width: calc((100% - 60px) / 2);
      display: flex;
      flex-direction: column;

      .values-block {
        width: 100%;
        display: flex;
        flex-direction: column;

      }
    }
  }
</style>
