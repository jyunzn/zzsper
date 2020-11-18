import { onCreated } from './onCreated'
import { onBeforeDomBeAssyAtResetDom } from './onBeforeDomBeAssyAtResetDom'

const zzsper = {}

zzsper.install = (zz) => {
  zz.mixin({
    onCreated,
    onBeforeDomBeAssyAtResetDom
  })
}

export default zzsper
