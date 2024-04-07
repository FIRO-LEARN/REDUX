import { createStore } from "redux";

const add = document.getElementById('add');
const minus = document.getElementById('minus');
const number = document.querySelector('span');

const countModifier = (state = 0) => {
    console.log(state)
    return state
}

const countStore = createStore(countModifier);

console.log(countStore.getState())