import { ADD, DELETE, FINISH } from "./actionTypes"
const data = {
    todos: [
        { id: 0, action: "Going for a walk with my girlfriend", stat:false},
        { id: 1, action: "Buy groceries for next week", stat: false },
        { id: 2, action: "Renew car insurance", stat: false },
        { id: 3, action: "Sign up for online course", stat: false },
        { id: 4, action: "Internet, water, light and gas expenses", stat:false},
        { id: 5, action: "Visit relatives", stat:false},
        { id: 6, action: "Buy new clothes", stat:false}
    ]
}
export const reducer = (state = data, { type, payload }) => {
    switch (type) {
        case ADD:
            console.log(payload);
            return {
                ...state, todos: [...state.todos, payload]
            };
        case DELETE:
            return {
                ...state, todos: state.todos.filter(el => el.id !== payload.id)
            };
        case FINISH:
            return {
                ...state, todos: state.todos.map(el => el.id === payload.id ? { ...el, stat: !el.stat } : el)
            }
        default:
            return state
    }
}