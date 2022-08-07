import { configureStore } from "@reduxjs/toolkit";
import colorReducer from "./modules/color";
import counterReducer from "./modules/counter";
import changecolorReducer from "./modules/changecolor";
import todos from "./modules/todos";

const store = configureStore({
  reducer: {
   colorPage : colorReducer,  
   countA : counterReducer ,
   changecolorReducer:changecolorReducer ,
   todos
  },
});

export default store;