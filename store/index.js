export const state = () => ({
  activeIndex: 0
})

export const mutations = {
  changeActiveIndex(state, index) {
    state.activeIndex = index
  }
}
