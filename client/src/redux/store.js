import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension/logOnlyInProduction";

const middleware = [thunk];

const enhancer = composeWithDevTools(applyMiddleware(...middleware));

export const store = createStore(state => state, enhancer);

// 1. пишем конфиг персиста кусков стейта
// 2. оборачивает редюсеры в персист с конфигами
// 3. оборачиваем стор в персистор
// 4. ставим гейт
// 5. пишем логику рефреша юзвера
