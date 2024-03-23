import { StoreApi } from 'zustand';
import { StoreSlice } from './index'

// 定义状态对象的类型
interface INumSlice {
  num: number
  addNum: (num: number) => void
}

// 修改 StoreSlice 类型以包含泛型参数
const createAppSlice: StoreSlice<INumSlice> = (set: StoreApi<INumSlice>['setState'], _get) => ({
  num: 0,
  addNum: (num: number) =>
    set((state) => {
      // 更新状态时，应该返回一个新对象而不是直接修改原始状态对象
      return { ...state, num: state.num + num };
    }),
})

export default createAppSlice
