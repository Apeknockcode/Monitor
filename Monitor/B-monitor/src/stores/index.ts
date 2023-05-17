import { defineStore } from "pinia";
interface ICounterStoreState {
  counter: number;
}
// 第一个参数必须是全局唯一
export const useStore = defineStore("main", {
  state: (): ICounterStoreState => ({
    counter: 0,
  }),
  getters: {},
  actions: {},
});
