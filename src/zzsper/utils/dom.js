import { isArr } from './common'

export const addClass = (dom, cls) => {
  if (!isArr(cls)) return false
  for (let i = 0; i < cls.length; i++) {
    const clsname = cls[i]
    dom.classList.add(clsname)
  }
}

export const removeClass = (dom, cls) => {
  if (!isArr(cls)) return false
  for (let i = 0; i < cls.length; i++) {
    const clsname = cls[i]
    dom.classList.remove(clsname)
  }
}

export function initClass(options, dCls) {
  const clsObj = {}
  for (let clsKey in dCls) {
    let cls = options[clsKey]
    if (cls !== undefined) {
      if (typeof cls !== 'string') {
        cls = dCls[clsKey]
      }
      delete options[clsKey]
    } else {
      cls = dCls[clsKey]
    }
    clsObj[clsKey] = cls ? cls.split(' ') : []
  }
  return clsObj
}

export function findParentNodeByClassList(dD, cls_monthWrap) {
  const p = dD.parentElement || dD.parentNode

  if ([...p.classList].includes(cls_monthWrap[0])) {
    return p
  } else if (p === null) {
    return false
  } else {
    return findParentNodeByClassList(p, cls_monthWrap)
  }
}
