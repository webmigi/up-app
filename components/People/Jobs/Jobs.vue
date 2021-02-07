<template>
  <div class="jobs">
    <span class="main-page__content-title-position block-title">careers</span>
    <span class="content-title">Jobs + occupations</span>
    <Item_vacancy v-for="(vacancy, index) in vacancy" :key="index" :vacancy="vacancy" :no-margin="setLastVacancy(index)"/>
  </div>
</template>

<script>
  import Item_vacancy from "./Item_vacancy";

    export default {
        name: 'Jobs',
        components:{Item_vacancy},
        data(){
            return{
                vacancy:[
                    {title: 'Architect', description: 'Architects begin designing a project at the planning stage of development. They first meet with the client to determine their requirements for the project. In determining a design plan, architects must consider other items such as the site, environment, culture and history, which may be subject to local and federal regulations, building codes, and local planning and zoning laws. The architect also needs to consider the type of building materials to use that fit the client\'s requirements as well as the budget.\n' +
                            '\n' +
                            'When creating designs, architects use advanced computer programs such as 3D software programs—BIM (Building Information Management and AutoCAD (computer-aided design)—as well as and cloud-based technologies.\n' +
                            '\n' +
                            'As the project progresses, the architect will consult with clients, contractors, engineers, and other key members to ensure that aspects such as heating, ventilation, and air conditioning (HVAC), as well as structural supports are properly incorporated into their designed structures. This may also include making modifications to their design throughout the project life cycle.'
                    },
                    {title: 'Visualizer', description: 'Architects begin designing a project at the planning stage of development. They first meet with the client to determine their requirements for the project. In determining a design plan, architects must consider other items such as the site, environment, culture and history, which may be subject to local and federal regulations, building codes, and local planning and zoning laws. The architect also needs to consider the type of building materials to use that fit the client\'s requirements as well as the budget.\n' +
                            '\n' +
                            'When creating designs, architects use advanced computer programs such as 3D software programs—BIM (Building Information Management and AutoCAD (computer-aided design)—as well as and cloud-based technologies.\n' +
                            '\n' +
                            'As the project progresses, the architect will consult with clients, contractors, engineers, and other key members to ensure that aspects such as heating, ventilation, and air conditioning (HVAC), as well as structural supports are properly incorporated into their designed structures. This may also include making modifications to their design throughout the project life cycle.'
                    },
                    {title: 'Layout designer', description: 'Architects begin designing a project at the planning stage of development. They first meet with the client to determine their requirements for the project. In determining a design plan, architects must consider other items such as the site, environment, culture and history, which may be subject to local and federal regulations, building codes, and local planning and zoning laws. The architect also needs to consider the type of building materials to use that fit the client\'s requirements as well as the budget.\n' +
                            '\n' +
                            'When creating designs, architects use advanced computer programs such as 3D software programs—BIM (Building Information Management and AutoCAD (computer-aided design)—as well as and cloud-based technologies.\n' +
                            '\n' +
                            'As the project progresses, the architect will consult with clients, contractors, engineers, and other key members to ensure that aspects such as heating, ventilation, and air conditioning (HVAC), as well as structural supports are properly incorporated into their designed structures. This may also include making modifications to their design throughout the project life cycle.'
                    },
                    {title: 'UX designer', description: 'Architects begin designing a project at the planning stage of development. They first meet with the client to determine their requirements for the project. In determining a design plan, architects must consider other items such as the site, environment, culture and history, which may be subject to local and federal regulations, building codes, and local planning and zoning laws. The architect also needs to consider the type of building materials to use that fit the client\'s requirements as well as the budget.\n' +
                            '\n' +
                            'When creating designs, architects use advanced computer programs such as 3D software programs—BIM (Building Information Management and AutoCAD (computer-aided design)—as well as and cloud-based technologies.\n' +
                            '\n' +
                            'As the project progresses, the architect will consult with clients, contractors, engineers, and other key members to ensure that aspects such as heating, ventilation, and air conditioning (HVAC), as well as structural supports are properly incorporated into their designed structures. This may also include making modifications to their design throughout the project life cycle.'
                    },

                ]
            }
        },
        methods:{
            setLastVacancy(index){
              return this.vacancy.length - 1 === index ? true : false
            }
        }
    }
</script>

<style lang="scss" scoped>
  .jobs {
    display: flex;
    flex-direction: column;
    margin-top: 218px;
    margin-left: var(--main-big-margin);
    margin-right: var(--main-mini-margin);

    .main-page__content-title-position{
      margin-left: 0;
      margin-top: 0;
      margin-bottom: 83px;
    }

    &:last-child{
      margin-bottom: 0 !important;
    }
  }
</style>
