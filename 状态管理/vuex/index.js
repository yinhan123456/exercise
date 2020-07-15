import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  /* 在全局Vue实例中添加store Vue({routers, store}) */
  state: { a: 'aa' },
  /* 组件中方位state:
  1. this.$store.state
  2. import {mapState} from 'vuex'
     computed: mapState({a: state => state.a, b: 'a'})
     computed: mapState(['a'])
     computed: {
       ...mapState(['a'])
     }
   */
  getters: {
    upperA(state, getters) {
      return state.a.toUpperCase()
    }
  },
  /*
  访问getters:
  1. this.$store.getters
  2. import store from '--'
     store.getters
  3. import {mapGetters} from 'vuex'
     computed: {
       ...mapGetters(['upperA'])
     }
   */
  mutations: {
    aToB(state, arg1) {
      // console.log(arg1.b)
      state.a = 'bb'
    }
  },
  /*
  通过commit方法调用
  1. store.commit('aToB')
  2. store.commit('aToB', 100)
  3. store.commit({type: 'a, b: 200}) arg1为对象时
  4. import {mapMutations} from 'vuex'
     methods: {
       ...mapMutations(['aToB'])
       ...mapMutations({changeName: 'aToB'})
     }
   */
  actions: {
    // context是和store实例具有相同方法的对象
    asyncFunction(context) {
      // context.state, context.getters, context.commit
    }
  }
  /*
  actions中方法的调用 store.dispatch('asyncFunction')
  store.dispatch('asyncFunction', arg1)
  store.dispatch({type: 'asyncFunction', b: 'b'})

  import {mapActions} from 'vuex'
  methods: {
    ...mapActions([])
    ...mapActions({})
  }
   */
})

export default store

/*
module模块化
const store = new Vuex.Store({
  module: {a: moduleA, b: moduleB}
})
通过store.state.a才能访问模块moduleA中的state
actions中的方法通过context.rootState才能访问根节点的状态
getters中方法的第三个参数变为rootState

namespaced: true能使getters, mutations, actions局域化

 */
