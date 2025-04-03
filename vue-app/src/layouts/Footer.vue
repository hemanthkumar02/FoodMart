<template>
  <footer class="py-5">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-3 col-md-6 col-sm-6">
          <div class="footer-menu">
            <Logo :imageAlt="logo.alt" :imageSrc="logo.link" />
            <div class="social-links mt-5">
              <ul class="d-flex list-unstyled gap-2">
                <li v-for="icon in icons" :key="icon.id">
                  <router-link :to="icon.link" class="btn btn-outline-light">
                    <component :is="icon.componentName" />
                  </router-link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <FooterNav :items="columns" />

        <div class="col-lg-3 col-md-6 col-sm-6">
          <div class="footer-menu">
            <NewsLetter
              :newsLetter="newsLetter"
            />
            <form class="d-flex mt-3 gap-0" role="newsletter">
              <TextInput
                :inputType="textInput.type"
                :inputPlaceholder="textInput.placeholder"
                :cssClass="textInput.cssClass"
              />
              <Button
                :buttonText="formButton.buttonText"
                :buttonType="formButton.buttonType"
                :buttonClass="formButton.buttonClass"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import Logo from "../components/header/Logo.vue";
import logoImage from "@/assets/images/logo.png";
import FacebookIcon from "../components/icons/FacebookIcon.vue";
import TwitterIcon from "../components/icons/TwitterIcon.vue";
import YoutubeIcon from "../components/icons/YoutubeIcon.vue";
import InstagramIcon from "../components/icons/InstagramIcon.vue";
import AmazonIcon from "../components/icons/AmazonIcon.vue";
import FooterNav from "../components/Footer/FooterNav.vue";
import NewsLetter from "../components/Footer/NewsLetter.vue";
import TextInput from "../components/common/TextInput.vue";
import Button from "../components/common/Button.vue";

export default {
  name: "Footer",
  components: {
    Logo,
    FacebookIcon,
    TwitterIcon,
    YoutubeIcon,
    InstagramIcon,
    AmazonIcon,
    FooterNav,
    NewsLetter,
    TextInput,
    Button,
  },
  data() {
    return {
      logo: {
        link: logoImage,
        alt: "logo",
      },
      textInput: {
        type: "text",
        placeholder: "Email Address",
        cssClass: "form-control rounded-start rounded-0 bg-light",
      },
      formButton: {
        buttonText: "Subscribe",
        buttonType: "submit",
        buttonClass: "btn btn-dark rounded-end rounded-0",
      },
    };
  },
  mounted() {
    this.fetchIcons()
    this.fetchFooterColumn()
    this.fetchNewsLetter()
  },
  methods: {
    fetchIcons() {
      this.$store.dispatch('footerStore/fetchIcons');
    },

    fetchFooterColumn() {
      this.$store.dispatch("footerStore/fetchFooterColumns")
    },

    fetchNewsLetter() {
      this.$store.dispatch('footerStore/fetchNewsLetter')
    }
  },
  computed: {
    icons() {
      return this.$store.state.footerStore.icons;
    },

    columns() {
      console.log('a',this.$store.state.footerStore.footerColumns)
      return this.$store.state.footerStore.footerColumns;
    },

    newsLetter() {
      console.log('demo', this.$store.state.footerStore.newsLetter);
      
      return this.$store.state.footerStore.newsLetter
    }
  }
};
</script>
