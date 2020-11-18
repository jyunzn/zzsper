import { isNaN } from './common'

export const dateStrToDateObj = dateStr => {
  if (typeof dateStr !== 'string' || !dateStr.includes('-')) {
    return null
  }

  const dateStrArr = dateStr.split('-').map(str => str * 1)
  dateStrArr[1] -= 1
  const dObj = new Date(...dateStrArr)

  if (isNaN(dObj.getTime())) {
    return null
  }
  return dObj
}

export const getDateInfo = dObj => {
  const year = dObj.getFullYear()
  const month = dObj.getMonth() + 1
  const date = dObj.getDate()
  return { year, month, date }
}
