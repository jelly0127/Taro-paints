import { create } from "zustand";

// 定义状态对象的类型
interface INumType {
  num: number;
  addNum: (num: number) => void;
  decNum:(num: number) => void;
}

const useUserStore = create<INumType>((set) => ({
  num: 0,
  addNum: (num) => set((state) => ({ num: state.num + num })),
  decNum: (num) => set((state) => ({ num: state.num - num })),
}));

export default useUserStore;
