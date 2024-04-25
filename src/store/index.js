import { createStore } from "vuex";
import todos from "./modules/todos.js";

const store = createStore({
  modules: {
    a: todos
  },
});

export default store;
