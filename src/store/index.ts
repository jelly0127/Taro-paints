/* eslint-disable import/first */
// store/index.ts
import  {  StoreApi, create, } from 'zustand'
import createAppSlice from './app'
import { persist } from 'zustand/middleware'
import { getStorageSync, setStorageSync, removeStorageSync } from '@tarojs/taro'

// 定义storage操作
const asyncLocalStorage = {
  getItem: getStorageSync,
  setItem: setStorageSync,
  removeItem: removeStorageSync,
}

export type StoreSlice<T extends object, E extends object = T> = (
  set: StoreApi<T>['setState'],
  get: StoreApi<T>['getState']
) => T

const useStore = create(
  persist(
    (set: StoreApi<any>['setState'], get: StoreApi<any>['getState']) => ({
  ...createAppSlice(set, get),
    }),
    {
      name: 'local-storage', // 存储key名称
      partialize: (state) => ({ num: state.num }), // 指定本地化的状态
      getStorage: () => asyncLocalStorage, // 自定义存储事件
    }
  )
)

export default useStore
