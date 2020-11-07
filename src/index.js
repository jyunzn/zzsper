import { onCreated } from './onCreated'
import { onBeforeDomBeAssyAtResetDom } from './onBeforeDomBeAssyAtResetDom'


export const zzsper = {}

zzsper.install = (zz) => {
  zz.mixin({
    onCreated,
    onBeforeDomBeAssyAtResetDom
  })
}