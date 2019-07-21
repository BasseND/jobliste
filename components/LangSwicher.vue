<template>
  <div class="langSwitcherMenu">

    <div>
      <button @click="changeLanguage('en')">EN</button>
      <button @click="changeLanguage('fr')">FR</button>
    </div>
  </div>

</template>

<script>
export default {
  name: "LanguageSwitcher",
  data() {
    return {
      lang: "en",
      languages: [
        { name: "fr", title: "Français", avatar: "/static/france.png" },
        { name: "en", title: "Anglais", avatar: "/static/united-kingdom.png" }
      ]
    };
  },
  methods: {
    changeLanguage(lang) {
      this.$i18n.locale = lang;
      this.$router.push({
        path: `${this.$router.currentRoute.path}?lang=${lang}`
      });
    }
  },

  computed: {}
};
</script>

<style scoped>
.langSwitcherMenu {
  margin-right: 15px;
}
</style>

