import { connect } from "react-redux"
import Home from "./Home"
import { follow, getUsers } from "../../store/reducers/homeReducer"

const mapStateToProps = (state) => {
    return {
        users: state.home.users
    }
}
/* const mapDispatchToProps = (dispatch) => {
    return {
        follow(id, followed){
            dispatch(follow(id, followed))
        }
    }
} */
export default connect(mapStateToProps, { follow, getUsers })(Home)
//export default connect(mapStateToProps, mapDispatchToProps)(Home)