import zz from '@jyunzn/zz'
import zzsper from '../zzsper'
import '@jyunzn/zz/examples/default.min.css'
import './style/style.scss'

zz.use(zzsper)

zz({
  zzsp: true,
  zzsp_onSelected(...args) {
    console.log(...args)
  }
}).mount('.container')

zz({
  cmz_quan: 12,
  zzsp: true,
  zzsp_cls_selected: 'zzsp-selected test',
  zzsp_cmz_initSelectDate: '2020-11-11',
  zzsp_onSelected(...args) {
    console.log(...args)
  }
}).mount('.container2')
