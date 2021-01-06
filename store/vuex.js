

export const state = () => ({
    drawer: false
   })

   
   
   export const actions = {
    toggleSideMenu ({ commit }){
        commit('toggleSideMenu')
    }
   }
   
   export const mutations = {
    toggleSideMenu (state) {
        state.drawer = !state.drawer
    }
   }

