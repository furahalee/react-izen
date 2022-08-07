//1 액션만들기
const CHANGE_COLOR = 'changecolor/CHANGE_COLOR'

//2. 액션 내보내기 
export const changeColor = (color) => ({type:CHANGE_COLOR, color})

//3. 리듀서 초기값 
const initialState = { color:'hotpink'}
//4. 리듀서 만들기 
const reducer  = ( state = initialState, action ) => {
    switch( action.type) {
        case CHANGE_COLOR:
            return {
                color: action.color 
            }
        default:
            return state     
    }
}

export default reducer 
