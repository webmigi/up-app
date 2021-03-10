<template>
  <div class="jobs">
    <span class="main-page__content-title-position block-title">careers</span>
    <span class="content-title">{{ data.title }}</span>
    <!--    <Item_vacancy-->
    <!--      v-for="(vacancy, index) in data.questions"-->
    <!--      :key="index"-->
    <!--      :vacancy="vacancy"-->
    <!--      @clicked="$emit('clicked')"-->
    <!--    />-->
    <p class="team__text_p content-p">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur esse,
      est harum inventore mollitia odit officiis quis tenetur vel voluptatum.
      Dolor explicabo id magnam nobis ullam! Ab ad amet at autem, beatae dicta
      dignissimos dolorem doloribus enim eos et eveniet fugiat harum ipsum iste
      laborum libero magni minus neque nesciunt optio quia quis ratione repellat
      sint tempora tenetur voluptatem. Adipisci alias aut consequuntur corporis
      deleniti exercitationem iure, molestias, mollitia non nostrum nulla
      possimus quasi reiciendis sequi veniam veritatis voluptatibus? Alias
      commodi distinctio eius id incidunt ipsam laborum minus obcaecati odit
      repellat. Accusamus ad alias asperiores at delectus dolore dolores ducimus
      earum enim ex excepturi expedita harum inventore iure iusto magni
      quibusdam quidem quo saepe sit sunt tempora tempore tenetur, totam velit
      veniam voluptatibus? A ab accusamus accusantium aliquam animi blanditiis
      commodi corporis cumque debitis est ex excepturi facere fuga iusto minus
      neque non odio pariatur possimus quas, quidem reprehenderit similique
      tempore temporibus ullam vitae, voluptates? Ab aliquid animi asperiores
      assumenda, at commodi consectetur debitis dolore ea eos excepturi facere
      fugit impedit ipsa iusto minima minus neque, obcaecati quasi quod repellat
      similique sint sit unde ut vero vitae? Aperiam, commodi corporis deserunt
      dicta labore nobis perspiciatis possimus quia ratione vero voluptate.
    </p>
  </div>
</template>

<script>
  import Item_vacancy from './Item_vacancy';

  export default {
    name: 'Jobs',
    components: { Item_vacancy },
    props: {
      data: {
        type: Object,
        default: {},
      },
    },
    data() {
      return {};
    },
  };
</script>

<style lang="scss" scoped>
  .jobs {
    display: flex;
    flex-direction: column;
    margin-top: 218px;
    margin-left: var(--main-big-margin);
    margin-right: var(--main-mini-margin);

    .main-page__content-title-position {
      margin-left: 0;
      margin-top: 0;
      margin-bottom: 83px;
    }

    p {
      max-width: 65%;
      margin-top: 35px;
    }
  }

  @media screen and (max-width: 1280px) {
    .jobs {
      margin-top: 120px;
    }
  }
  @media screen and (max-width: 1024px) {
    .jobs {
      margin-top: 97px;
      .content-title {
        margin-bottom: 69px;
      }
    }
  }
  @media screen and (max-width: 768px) {
    .jobs {
      margin-top: 104px;
    }
  }
</style>
