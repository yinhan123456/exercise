import PubSub from '../lib/pubsub.js'

class Store {
  constructor (params) {
    this.state = {}
    this.actions = {}
    this.mutations = {}

    this.status = 'resting'

    this.dep = new PUbSub()

    if (params.hasOwnProperty('actions')) {
      this.actions = params.actions
    }
    if (params.hasOwnProperty('mutations')) {
      this.mutations = params.mutations
    }

    this.state = new Proxy((params.state || {}), {
      set(state, key, value) {
        state[key] = value

        console.log('stateChange' + key + value)

        this.dep.publish('stateChange')
      }
    })
  }
}
