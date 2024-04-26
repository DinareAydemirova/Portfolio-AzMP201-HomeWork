import { actions } from "./Index"

export default function OperationButton({dispatch,operation}){
return <button onClick={()=> dispatch({type:actions.choose_oparation, payload:{operation} })}
>
    {operation}
    </button>
}