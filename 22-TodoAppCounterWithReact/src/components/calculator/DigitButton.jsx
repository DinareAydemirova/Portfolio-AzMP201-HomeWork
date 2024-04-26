import { actions } from "./Index"

export default function DigitButton({dispatch,digit}){
return <button onClick={()=> dispatch({type:actions.add_digit, payload:{digit} })}
>
    {digit}
    </button>
}