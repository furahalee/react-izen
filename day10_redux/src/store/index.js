import { combineReducers } from 'redux';
import color from './modules/color'
import counter from './modules/counter'
import changecolor from './modules/changecolor'

export default combineReducers({
    colorA:color,
    count : counter,
    changecolor
})