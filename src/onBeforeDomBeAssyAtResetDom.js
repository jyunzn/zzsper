import { addClass, removeClass } from './utils'

function handlebeMoveDoms(datas, zzsp) {
  const { cls: { cls_selected }, selectDate } = zzsp
  if (selectDate.cur === null) return false
  
  const { 
    contentDs, 
    diffM: {
      beforeYM: { year: bY, month: bM }, 
      nextYM: { year: nY, month: nM } 
    }
  } = datas
  const { year: sY, month: sM, date: sD } = selectDate.cur

  const dD = contentDs.dDs[sD - 1]

  if (sY === bY && sM === bM && dD) {
    removeClass(dD, cls_selected)
  }

  if (sY === nY && sM === nM && dD) {
    addClass(dD, cls_selected)
  }
}

export function onBeforeDomBeAssyAtResetDom(datas) {
  const zzsp = datas.opts.zzsp
  if (zzsp) {
    handlebeMoveDoms(datas, zzsp)
  }
}