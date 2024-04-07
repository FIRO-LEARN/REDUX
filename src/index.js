import { createStore } from "redux";

const add = document.getElementById('add');
const minus = document.getElementById('minus');
const number = document.querySelector('span');

const countModifier = (state = 0, action) => {
    if(action.type === 'ADD') {
        return state + 1;
    } else if (action.type === 'MINUS') {
        return state - 1;
    } else {
        return state;
    }
}

const countStore = createStore(countModifier);

const onChange = () => {
    number.innerText = countStore.getState();
}

countStore.subscribe(onChange);

add.addEventListener('click', () => {
    countStore.dispatch({type: 'ADD'})
});
minus.addEventListener('click', () => {
    countStore.dispatch({type: 'MINUS'})
});