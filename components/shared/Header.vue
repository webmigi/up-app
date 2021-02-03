<template>
  <div class="header" ref="header_component">
    <div :class="['header-logo', {'header-logo-on-nav-menu':MODAL_IS_ACTIVE || (APP_SCROLL_VALUE > (APP_WINDOW_SIZE.height * 4 + 4 * 1000 - HEADER_COMPONENT_HEIGHT / 3))}]"
         ref="headerLogo"
         :style="'transform: translate('+this.logoTranslateX+'px, '+this.logoTranslateY+'px); width: '+this.logoWidth+'px;'">
      <svg viewBox="0 0 110 78" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M14.5828 1.21322V34.4251C14.5828 37.5593 14.949 39.9183 15.6815 41.5023C16.9799 44.2994 19.5269 45.698 23.3224 45.698C28.1834 45.698 31.5128 43.7097 33.3106 39.733C34.2429 37.5762 34.709 34.7285 34.709 31.1899V1.21322H49.1419V56.3137H35.3083V48.5288C35.1751 48.6973 34.8422 49.2029 34.3095 50.0454C33.7767 50.8879 33.1442 51.6293 32.4117 52.2696C30.181 54.2916 28.0169 55.6734 25.9194 56.4148C23.8551 57.1562 21.4247 57.5269 18.628 57.5269C10.5708 57.5269 5.14392 54.5949 2.34723 48.731C0.782409 45.4958 0 40.7272 0 34.4251V1.21322H14.5828Z"/>
        <path
          d="M95.3174 28.7634C95.3174 24.5172 94.3518 20.7596 92.4208 17.4906C90.523 14.2216 87.4267 12.5872 83.1318 12.5872C77.9712 12.5872 74.4254 15.0642 72.4943 20.0181C71.4955 22.6468 70.9961 25.9832 70.9961 30.0272C70.9961 36.4303 72.6774 40.9294 76.0401 43.5243C78.0378 45.0408 80.4016 45.7991 83.1318 45.7991C87.0937 45.7991 90.1068 44.2489 92.1711 41.1484C94.2686 38.048 95.3174 33.9196 95.3174 28.7634ZM87.2269 0C93.5861 0 98.963 2.37589 103.358 7.12767C107.786 11.8795 110 18.8555 110 28.0557C110 37.7615 107.836 45.1588 103.508 50.2476C99.2127 55.3364 93.6693 57.8808 86.8773 57.8808C82.5491 57.8808 78.9534 56.7855 76.0901 54.5949C74.5253 53.3817 72.9937 51.6124 71.4955 49.2871V78H57.4121V1.21322H71.046V9.35191C72.5776 6.95917 74.209 5.07194 75.9402 3.69021C79.1032 1.23007 82.8654 0 87.2269 0Z"/>
      </svg>
    </div>

    <button :class="['header-burger-btn', {'header-burger-btn-on-nav-menu': MODAL_IS_ACTIVE || (APP_SCROLL_VALUE > (APP_WINDOW_SIZE.height * 4 + 4 * 1000 - HEADER_COMPONENT_HEIGHT / 3))}]"
            @click="burgerBtnAction">
      <svg v-if="!burgerActive"
           viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 30L45 30" stroke-width="4"/>
        <path d="M15 40L45 40" stroke-width="4"/>
        <path d="M15 20L45 20" stroke-width="4"/>
      </svg>

      <svg v-if="burgerActive"
           viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 15L45 45M45 15L15 45" stroke-width="4"/>
      </svg>

    </button>
  </div>
</template>

<script>
    import {mapGetters, mapActions} from "vuex";

    export default {
        name: 'Header',
        data() {
            return {
                burgerActive: false
            }
        },
        mounted() {
            this.setLogoStartHeight(this.$refs.headerLogo.offsetHeight)
            this.setHeaderComponenttHeight(this.$refs.header_component.offsetHeight)
        },
        computed: {
            ...mapGetters("app", ["APP_SCROLL_VALUE", "APP_WINDOW_SIZE", "LOGO_START_HEIGHT", "MODAL_IS_ACTIVE", "HEADER_COMPONENT_HEIGHT"]),

            logoStartScroll() {
                return (this.APP_WINDOW_SIZE.height / 2) + 1000
            },
            logoFinishScroll() {
                return (this.APP_WINDOW_SIZE.height + 1000)
            },

            logoTranslateX() {
                let startPositionX = 50;
                return (this.APP_SCROLL_VALUE > this.logoStartScroll) ?
                    (this.APP_SCROLL_VALUE > this.logoFinishScroll ?
                        0
                        :
                        startPositionX - ((startPositionX / 100) * ((this.APP_SCROLL_VALUE - this.logoStartScroll) / ((this.logoFinishScroll - this.logoStartScroll) / 100))))
                    :
                    startPositionX
            },

            logoTranslateY() {
                let startPositionY = this.APP_WINDOW_SIZE.height / 2 - (60 + (this.LOGO_START_HEIGHT / 2));
                return (this.APP_SCROLL_VALUE > this.logoStartScroll) ?
                    (this.APP_SCROLL_VALUE > this.logoFinishScroll ?
                        0
                        :
                        startPositionY - ((startPositionY / 100) * ((this.APP_SCROLL_VALUE - this.logoStartScroll) / ((this.logoFinishScroll - this.logoStartScroll) / 100))))
                    :
                    startPositionY
            },
            logoWidth() {
                let startWidth = 338;
                let finishWidth = 110;
                let wayWidth = startWidth - finishWidth
                return (this.APP_SCROLL_VALUE > this.logoStartScroll) ?
                    (this.APP_SCROLL_VALUE > this.logoFinishScroll ?
                        finishWidth
                        :
                        startWidth - ((wayWidth / 100) * ((this.APP_SCROLL_VALUE - this.logoStartScroll) / ((this.logoFinishScroll - this.logoStartScroll) / 100))))
                    :
                    startWidth
            },
        },
        methods: {
            ...mapActions('app', ['setLogoStartHeight', 'setModalIsActive', 'setHeaderComponenttHeight']),
            setBurgerActive() {
                this.burgerActive = !this.burgerActive
            },
            burgerBtnAction() {
                this.setModalIsActive(),
                    this.setBurgerActive()
            }
        }
    }
</script>

<style lang="scss" scoped>
  .header {
    width: 100%;
    /*max-width: 1920px;*/
    display: flex;
    justify-content: space-between;
    align-self: center;
    align-items: center;
    padding: 60px 70px 0 70px;

    .header-logo {
      width: 110px;

      svg {
        width: 100%;
        height: 100%;

        path {
          fill: #FFFFFF;
          /*transition: fill 0.3s;*/
        }
      }
    }

    .header-logo-on-nav-menu {
      transform: (translate(0) !important);
      width: (110px !important);

      svg {
        path {
          fill: #000000;
        }
      }
    }

    .header-burger-btn {
      margin-top: 9px;
      align-self: flex-start;
      position: relative;
      width: max-content;
      height: max-content;

      svg {
        width: 60px;
        height: 60px;

        path {
          stroke: #FFFFFF;
          transition: fill 0.3s;
        }
      }
    }

    .header-burger-btn-on-nav-menu {
      svg {
        path {
          stroke: #000000;
        }
      }
    }
  }
</style>
