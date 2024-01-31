import {useSelector,useDispatch} from "react-redux"
import { ordered } from "./iceCreamSlice"
import { restocked } from "./iceCreamSlice"

function IceCreamView() {
    const numberOfIceCreams = useSelector((state)=>state.iceCream.numberOfIceCreams)
    const dispatch = useDispatch()
    return (
        <div>
            <h1>Number Of Ice Creams - {numberOfIceCreams}</h1>
            <button onClick={()=>dispatch(ordered())}>Order IceCream</button>
            <button onClick={()=>dispatch(restocked(2))}>Restock IceCreams</button>
        </div>
    )
}

export default IceCreamView