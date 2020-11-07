import { addClass, removeClass, findParentNodeByClassList, callCallbacks } from './utils'
import { initOpts } from './initOptions'

// If the user has set the initial date, first find the DOM and set the class
function handleInitSeleted(datas, opts) {
  const { selectDate: { cur }, cls: { cls_selected } } = opts
  const { doms: { ymDs } } = datas
  if (cur === null) return false

  const { year, month, date } = cur
  const dD = ymDs[year] && ymDs[year][month] && ymDs[year][month].dDs[date - 1]
  dD && addClass(dD, cls_selected)
}

// Register the click event for the DOM of each date, 
// here we use the event proxy instead of binding each date dom
function dDsRegistClickEv(datas, opts) {
  const ymDs = datas.doms.ymDs
  const cls_date = datas.opts.cls_date

  for(let y in ymDs) {
    const ms = ymDs[y]
    for (let m in ms) {
      const mDoms = ms[m]
      mDoms.mCD.addEventListener('click', (ev) => {
        const dom = ev.target
        if ([...dom.classList].includes(cls_date[0])) {
          handleSelectDate(dom, datas, opts)
        }
      })
    }
  }
}

function handleSelectDate(dD, datas, opts) {
  const { cls: { cls_selected }, cbs, selectDate } = opts
  const { ymDs } = datas.doms

  const selectedDate = selectDate.cur
  const selectingDate = getSelectingDate(dD, datas)
  
  callCallbacks(cbs.onSelected, null, { selectedDate, selectingDate })
  removeLastSelectedClass(selectedDate, selectingDate, cls_selected, ymDs)

  selectDate.cur = selectingDate
  addClass(dD, cls_selected)
}

// zz Put the month's year and month data in the contant dom of each month
// So as long as you find the content dom of the clicked month, you can get the data of that month
function getSelectingDate(dD, datas) {
  const { cls_monthContent } = datas.opts
  
  const mWD = findParentNodeByClassList(dD, cls_monthContent)
  const ym = mWD.$_ym
  

  const year = ym.year
  const month = ym.month
  const date = dD.textContent * 1
  
  return { year, month, date }
}


function removeLastSelectedClass(edDate, ingDate, cls, ymDs) {
  if (edDate === null) return

  const { year: ingY, month: ingM, date: ingD } = ingDate
  const { year: edY, month: edM, date: edD } = edDate

  if (ingY === edY && ingM === edM && ingD === edD) return
  
  if (ymDs[edY] && ymDs[edY][edM]) {
    const edDom = ymDs[edY][edM].dDs[edD - 1]
    removeClass(edDom, cls)
  }
}

export function onCreated(datas) {
  if (datas.opts.zzsp === true) {
    const opts = initOpts(datas.opts)
    handleInitSeleted(datas, opts)
    dDsRegistClickEv(datas, opts)
  } else if (datas.opts.zzsp !== undefined) {
    delete datas.opts.zzsp
  }
}
