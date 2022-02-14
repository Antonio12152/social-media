import axios from "axios"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import avatar from "../../img/profile.jpg"
import { updateUserName } from "../../store/reducers/profileReducers"
import Post from "./Post/Post"
import classes from "./Profile.module.scss"
const UserProfile = (props) => {
    let params = useParams()
    useEffect(() => {
        if (props.posts.length === 0) {
            axios.get("https://jsonplaceholder.typicode.com/posts")
                .then(response => props.getPosts(response.data))
        }
        getUser()
    }, [])
    const newPostChange = (e) => {
        let text = e.target.value
        props.updateNewPostText(text)
    }
    const addPost = () => {
        axios.post('https://jsonplaceholder.typicode.com/posts', {
            body: JSON.stringify({
                body: props.newPostText,
                id: props.posts[props.posts.length - 1].id + 1,
                title: props.newPostText,
                userId: 1
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => JSON.parse(response.data.body))
            .then((json) => props.addPost(json));
    }
    const deletePost = (id) => {
        axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(() => props.deletePost(id));
    }
    function getUser() {
        let id = params.id
        if (id) {
            axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
                .then((response) => props.updateUserName(response.data.name))
        } else {
            props.updateUserName(props.myName)
        }
    }
    const posts = props.posts.map((post) => <Post body={post.body} key={post.id} id={post.id} deletePost={deletePost} />)
        .reverse()
    return (
        <div>
            <div className={classes.profile}>
                <div className={classes.profile__ava}>
                    <img src={avatar} alt="" />
                </div>
                <div className={classes.prifile__n}>
                    <span className={classes.profile__name}>{props.userName}</span>
                    <br />
                    <span className={classes.profile__status}>Статус </span>
                </div>
            </div>
            <div className={classes.profile__addPost}>
                <textarea name="post" value={props.newPostText} onChange={newPostChange}></textarea>
                <button type="button" onClick={addPost}>Add post</button>
            </div>
            <div>
                {posts}
            </div>
        </div>
    )
}
export default UserProfile