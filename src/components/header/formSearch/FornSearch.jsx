import { useForm } from "react-hook-form"
import search from "../../../img/search.png"
const FormSearch = () => {
    const { register, handleSubmit } = useForm()
    function onSubmit(data) {
        console.log(data)
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="formSearch">
            <input type="search" placeholder="Введите поисковый запрос"{...register("search")} />
            <input type="image" src={search} />
        </form>
    )
}
export default FormSearch