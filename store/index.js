export const state = () => ({
  currentLanguage: 'hu',
  defaultLanguage: 'hu'
})

export const actions = {

}

export const mutations = {
  setCurrentLanguage (state, payload) {
    state.currentLanguage = payload
  }
}
