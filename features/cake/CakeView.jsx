import {useSelector,useDispatch} from "react-redux"
import { ordered } from "./cakeSlice"
import { restocked } from "./cakeSlice"

function CakeView() {
    const numberOfCakes = useSelector((state)=>state.cake.numberOfCakes)
    const dispatch = useDispatch()
    return (
        <div>
            <h1>Number Of Cakes - {numberOfCakes}</h1>
            <button onClick={()=>dispatch(ordered())}>Order Cake</button>
            <button onClick={()=>dispatch(restocked(2))}>Restock Cakes</button>
        </div>
    )
}

export default CakeView