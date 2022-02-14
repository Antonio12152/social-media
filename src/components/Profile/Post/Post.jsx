import classes from "../Profile.module.scss"
const Post = (props) => {
    return (
        <div className={classes.post}>
            <p>{props.body}</p>
            <button onClick={()=>props.deletePost(props.id)}> Delete </button>
        </div>
    )
}
export default Post