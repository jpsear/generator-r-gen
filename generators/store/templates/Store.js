import { observable, computed } from 'mobx'

class <%= store.name %> {
	@observable data = {
    val: true
  }

  @computed get isTrue() {
    return val
  }
}

const <%= store.name %>Store = new <%= store.name %>()
export default <%= store.name %>Store
