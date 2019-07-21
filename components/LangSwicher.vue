<template>
  <div class="langSwitcherMenu">
    <el-dropdown split-button>
      <span
        class="el-dropdown-link"
        style='cursor: pointer;'
      >
        Langue
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>English</el-dropdown-item>
        <el-dropdown-item>Français</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>

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
    changeLang(lang) {
      //mutate 'locale' in store
      this.$store.commit("application/locale", lang);
      //re-route to the current page but with the selected language in a query string
      this.$router.push({
        path: `${this.$router.currentRoute.path}?lang=${lang}`
      });
    },
    changeLanguage(lang) {
      this.$i18n.locale = lang;
      this.$router.push({
        path: `${this.$router.currentRoute.path}?lang=${lang}`
      });
    }
  },
  watch: {
    lang: function(value, oldvalue) {
      this.$i18n.locale = value;
      this.$store.commit("application/locale", value);
    }
  },
  computed: {}
};
</script>
