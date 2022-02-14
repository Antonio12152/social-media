const FOLLOW = "follow"
const GET_USERS = "get users"
const initialState = {
    users: []
}
const homeReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map((user) => {
                    if (user.id === action.id) {
                        return {
                            ...user,
                            followed: action.followed
                        }
                    }
                    return user
                })
            }
        case GET_USERS:
            return {
                ...state, users: [...state.users, ...action.users]
            }
        default:
            return state
    }
}
export const follow = (id, followed) => {
    return {
        type: FOLLOW,
        id,
        followed
    }
}
export const getUsers = (users) => ({ type: GET_USERS, users })
export default homeReducer