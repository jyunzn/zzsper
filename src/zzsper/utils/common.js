export const isObj = obj => Object.prototype.toString.call(obj) === '[object Object]'
export const isFunc = func => Object.prototype.toString.call(func) === '[object Function]'
export const isArr = arr => Object.prototype.toString.call(arr) === '[object Array]'
export const isNaN = input => typeof input === 'number' && input !== input

export function deepcopy(target) {
  if (isObj(target)) {
    const obj = {}
    for (let key in target) {
      obj[key] = deepcopy(target[key])
    }
    return obj
  } else if (isArr(target)) {
    const arr = []
    for (let i = 0; i < target.length; i++) {
      const val = target[i]
      arr.push(deepcopy(val))
    }
    return arr
  } else {
    return target
  }
}

export function initCallback(cbObj, cbs, del) {
  for (let key in cbs) {
    const cbArr = cbs[key]
    const cb = cbObj[key]
    if (cb) {
      if (isFunc(cb)) {
        cbArr.push(cb)
      }
      if (del) {
        delete cbObj[key]
      }
    }
  }
}

export function callCallbacks(cbs, self, ...options) {
  for (let i = 0; i < cbs.length; i++) {
    const cb = cbs[i]
    cb.call(self, ...options)
  }
}
