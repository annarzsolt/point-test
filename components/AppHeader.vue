<template>
  <div class="header">
    <NuxtLink to="/login" class="header-link">
      Login
    </NuxtLink>
    <select v-model="currentLanguage" @change="setDefaultLanguage">
      <option v-for="(language, key) in languages" :key="key" :value="key">
        {{ language }}
      </option>
    </select>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import definedLanguages from '../assets/languages.json'

export default {
  name: 'AppHeader',
  data () {
    return {
      languages: {},
      currentLanguage: 'hu'
    }
  },
  computed: {
    ...mapState('variants', {
      variantPackageCounts: state => state.variantPackageCounts
    })
  },
  created () {
    this.languages = definedLanguages
  },
  methods: {
    setDefaultLanguage () {
      this.$store.commit('setCurrentLanguage', this.currentLanguage)
    }
  }
}
</script>

<style scoped>
.header {
  padding: 20px;
  border-bottom: 1px solid #ebebeb;
}

.header-link {
  margin-right: 15px;
}
</style>
