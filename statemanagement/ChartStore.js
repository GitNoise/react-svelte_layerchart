// chartStore.js
import { makeAutoObservable } from "mobx";

class ChartStore {
  data = [
    { year: 1979, value: 2 },
    { year: 1980, value: 3 },
    { year: 1981, value: 5 },
    { year: 1982, value: 8 },
    { year: 1983, value: 18 },
  ];

  caller = "";

  toggle = true;

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  randomizeValues(caller) {
    this.caller = caller;
    this.data = this.data.map((item) => ({
      ...item,
      value: Math.floor(Math.random() * 100) + 1,
    }));
  }

  doToggle() {
    this.toggle = !this.toggle;
  }
}

export default ChartStore;
