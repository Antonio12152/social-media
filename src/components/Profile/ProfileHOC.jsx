import { connect } from "react-redux"
import { getPosts, addPost, updateNewPostText, deletePost, updateUserName } from "../../store/reducers/profileReducers"
import Profile from "./Profile"

const mapStateToProps = (state) => {
    return {
        userName: state.profile.userName,
        posts: state.profile.posts,
        newPostText: state.profile.newPostText,
        myName: state.profile.myName,
    }
}
export default connect(mapStateToProps, { getPosts, addPost, updateNewPostText, deletePost, updateUserName })(Profile)