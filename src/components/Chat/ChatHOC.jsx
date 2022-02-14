import { connect } from "react-redux"
import Chat from "./Chat"

const mapStateToProps = (state) => {
    return {
        messages:state.chat.chat
    }
}
const mapDispatchToProps = (dispatch) => {
    return {

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Chat)