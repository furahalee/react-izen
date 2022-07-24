import React, { useReducer } from 'react';

//초기값
const initialState = 0;
//함수
const reducer = (state, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state+1
        case 'DECREMENT':
            return state-1
        case 'RESET':
            return 0
        default:
            return state
    }
}

const Test9 = () => {
    const [count, dispatch] = useReducer(reducer, initialState);
    return (
        <div>
            <h2>숫자: {count}</h2>
            <p>
                <button onClick={() => dispatch({type: 'INCREMENT'})}>증가: INCREMENT</button>
                <button onClick={() => dispatch({type: 'DECREMENT'})}>감소: DECREMENT</button>
                <button onClick={() => dispatch({type: 'RESET'})}>초기화: RESET</button>
            </p>
        </div>
    );
};

export default Test9;
/**
 * 9회차.. 이어서..
 * useState의 대체 함수입니다. (state, action) => newState의 형태로 
 * reducer를 받고 dispatch 메서드와 짝의 형태로 현재 state를 반환합니다. 
 * (Redux에 익숙하다면 이것이 어떻게 동작하는지 여러분은 이미 알고 있을 것입니다.)
 * 
 * Redux의 기존 방식은 useReducer가 필수이다.
 * 다수의 하윗값을 포함하는 복잡한 정적 로직을 만드는 경우나 
 * 다음 state가 이전 state에 의존적인 경우에 보통 useState보다 useReducer를 선호합니다. 
 * 또한 useReducer는 자세한 업데이트를 트리거 하는 컴포넌트의 성능을 최적화할 수 있게 하는데, 
 * 이것은 콜백 대신 dispatch를 전달 할 수 있기 때문입니다.
 * 
 * const [state, dispatch] = useReducer(reducer, initialArg, init);
 * state: 상태데이터(이름은 사용자 정의 ex:count, num등등)
 * dispatch: 액션을 발생시키는 함수(액션 전달자)
 * reducer: 사용자 정의함수
 * 
 * dispatch({type: 필수})} type은 영문,한글가능. 주로 영문대문자 사용
 */