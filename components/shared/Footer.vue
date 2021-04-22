<template>
  <div :class="['footer']">
    <div class="content">
      <!--      <span v-if="$route.path === '/people'" class="block-title">Contact</span>-->
      <nuxt-link to="/">
        <div class="footer-logo">
          <svg
            viewBox="0 0 110 78"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.5828 1.21322V34.4251C14.5828 37.5593 14.949 39.9183 15.6815 41.5023C16.9799 44.2994 19.5269 45.698 23.3224 45.698C28.1834 45.698 31.5128 43.7097 33.3106 39.733C34.2429 37.5762 34.709 34.7285 34.709 31.1899V1.21322H49.1419V56.3137H35.3083V48.5288C35.1751 48.6973 34.8422 49.2029 34.3095 50.0454C33.7767 50.8879 33.1442 51.6293 32.4117 52.2696C30.181 54.2916 28.0169 55.6734 25.9194 56.4148C23.8551 57.1562 21.4247 57.5269 18.628 57.5269C10.5708 57.5269 5.14392 54.5949 2.34723 48.731C0.782409 45.4958 0 40.7272 0 34.4251V1.21322H14.5828Z"
            />
            <path
              d="M95.3174 28.7634C95.3174 24.5172 94.3518 20.7596 92.4208 17.4906C90.523 14.2216 87.4267 12.5872 83.1318 12.5872C77.9712 12.5872 74.4254 15.0642 72.4943 20.0181C71.4955 22.6468 70.9961 25.9832 70.9961 30.0272C70.9961 36.4303 72.6774 40.9294 76.0401 43.5243C78.0378 45.0408 80.4016 45.7991 83.1318 45.7991C87.0937 45.7991 90.1068 44.2489 92.1711 41.1484C94.2686 38.048 95.3174 33.9196 95.3174 28.7634ZM87.2269 0C93.5861 0 98.963 2.37589 103.358 7.12767C107.786 11.8795 110 18.8555 110 28.0557C110 37.7615 107.836 45.1588 103.508 50.2476C99.2127 55.3364 93.6693 57.8808 86.8773 57.8808C82.5491 57.8808 78.9534 56.7855 76.0901 54.5949C74.5253 53.3817 72.9937 51.6124 71.4955 49.2871V78H57.4121V1.21322H71.046V9.35191C72.5776 6.95917 74.209 5.07194 75.9402 3.69021C79.1032 1.23007 82.8654 0 87.2269 0Z"
            />
          </svg>
        </div>
      </nuxt-link>
      <div class="contacts">
        <span class="footer-contacts">
          Overtoom 2a, Castricum
        </span>
        <span class="footer-contacts">The Netherlands, 1901 EW </span>
        <a href="tel:+31(0)251827610" class="footer-contacts"
          >T +31 (0)251 82 76 10
        </a>
        <a href="mailto:studio@uparchitecture.nl" class="footer-contacts email"
          >studio@uparchitecture.nl
        </a>
      </div>
    </div>
    <a href="" class="email footer-contacts vero">powered by VERO Digital</a>
    <!--    <a href="" class="email footer-contacts"></a>-->
    <!--    <div v-if="$route.path === '/people'" class="map">-->
    <!--      &lt;!&ndash;      <iframe&ndash;&gt;-->
    <!--      &lt;!&ndash;        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2426.283695969157!2d4.660434116009477!3d52.54639307981919!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c5f7402e0d79bf%3A0x4db3af8c73ebe839!2zT3ZlcnRvb20gMkEsIDE5MDEgRVcgQ2FzdHJpY3VtLCDQndC40LTQtdGA0LvQsNC90LTRiw!5e0!3m2!1sru!2sby!4v1613489778321!5m2!1sen!2sby"&ndash;&gt;-->
    <!--      &lt;!&ndash;        frameborder="0"&ndash;&gt;-->
    <!--      &lt;!&ndash;        style="border:0;"&ndash;&gt;-->
    <!--      &lt;!&ndash;        allowfullscreen=""&ndash;&gt;-->
    <!--      &lt;!&ndash;        aria-hidden="false"&ndash;&gt;-->
    <!--      &lt;!&ndash;        tabindex="0"&ndash;&gt;-->
    <!--      &lt;!&ndash;      ></iframe>&ndash;&gt;-->
    <!--    </div>-->
  </div>
</template>

<script>
  export default {
    name: 'Footer',
  };
</script>

<style lang="scss" scoped>
  .footer {
    background-color: #ffffff;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    z-index: 850;
    padding: 200px 120px 70px;
    box-sizing: border-box;
    position: relative;

    &.people-footer {
      align-items: flex-start;
    }

    .map {
      width: calc(100% - 480px);
      height: 610px;

      .place-card {
        display: none;
      }

      iframe {
        width: 100%;
        height: 100%;
      }
    }

    @media (max-width: 1280px) {
      padding: 100px 120px 40px;
      &.people-footer {
        padding-right: 0;
      }

      .map {
        width: calc(100% - 300px);
        height: 480px;
      }
    }
    @media (max-width: 1024px) {
      padding: 100px 40px 40px;
      &.people-footer {
        padding-right: 0;
        padding-bottom: 0;
      }

      .map {
        width: calc(100% - 300px);
        height: 480px;
      }
    }
    @media (max-width: 425px) {
      padding: 50px 24px 40px;
      &.people-footer {
        padding-right: 0;
        padding-bottom: 50px;
        flex-direction: column;
      }

      .map {
        width: calc(100% + 24px);
        height: 400px;
        margin-left: -24px;
        margin-top: 50px;
      }
    }

    .block-title {
      margin-bottom: 110px;
    }

    .content {
      display: flex;
      flex-direction: column;

      .footer-logo {
        width: 110px;
        cursor: pointer;

        svg {
          width: 100%;
          height: 100%;

          path {
            stroke: #000000;
            fill: #000000;
          }
        }
      }

      .contacts {
        width: 100%;
        min-height: 150px;
        display: flex;
        flex-direction: column;
      }
    }

    .email {
      margin-top: auto;
      text-decoration: underline;
    }
  }

  @media screen and (max-width: 1280px) {
    .footer {
      .content {
        .footer-logo {
          width: 70px;
        }
      }
    }
  }

  @media screen and (max-width: 1024px) {
    .footer {
      .content {
        .footer-logo {
          width: 70px;
        }
      }

      .contacts {
        min-height: 110px !important;
      }
    }
  }

  @media screen and (max-width: 428px) {
    .footer {
      flex-direction: column;
      justify-content: unset;
      align-items: unset;
      padding-bottom: 20px;
      .content {
        .footer-logo {
          width: 46px;
        }
      }
      .vero {
        margin-top: 30px;
        align-self: center;
        margin-bottom: 0;
        opacity: 0.7;
      }
    }
  }
</style>
