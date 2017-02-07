import { observable, computed } from 'mobx'

class <%= data.name %> {
	@observable data = {
    val: true
  }

  @computed get isTrue() {
    return val
  }
}

const <%= data.name %>Store = new <%= data.name %>()
export default <%= data.name %>Store
