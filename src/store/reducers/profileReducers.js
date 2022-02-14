const GET_POSTS = "get posts"
const ADD_POST = "add post"
const UPDATE_NEWPOSTTEXT = "update new post text"
const DELETE_POST = "delete post"
const UPDATE_USER_NAME = "update user name"
const initialState = {
    userName: "",
    posts: [],
    newPostText: "",
    myName: "Anton"
}
const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_POSTS:
            return { ...state, posts: [...state.posts, ...action.posts] }
        case ADD_POST:
            if (state.newPostText !== "") {
                return { ...state, posts: [...state.posts, action.post], newPostText: "" }
            }
            return state
        case UPDATE_NEWPOSTTEXT:
            return { ...state, newPostText: action.newPostText }
        case DELETE_POST:
            return { ...state, posts: state.posts.filter((post) => post.id !== action.id) }
        case UPDATE_USER_NAME:
            return { ...state, userName: action.userName }
        default:
            return state
    }
}
/* export const getPost=()=>{
    return{

    }
} */
export const getPosts = (posts) => ({ type: GET_POSTS, posts })
export const addPost = (post) => ({ type: ADD_POST, post })
export const updateNewPostText = (newPostText) => ({ type: UPDATE_NEWPOSTTEXT, newPostText })
export const deletePost = (id) => ({ type: DELETE_POST, id })
export const updateUserName = (userName) => ({ type: UPDATE_USER_NAME, userName })
export default profileReducer