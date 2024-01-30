import React from 'react'
import "./styles.css"

interface Props{
  todo: string  | undefined;
  setTodo: React.Dispatch<React.SetStateAction<string | undefined>>;
}

const InputField:React.FC<Props> = ({todo, setTodo} : Props) => {
  return (
    <form className ='input'>
        <input type="input" placeholder='Enter a task' className="input_box"></input>
        <button className="input_submit" type="submit">Go</button>
    </form>
  )
}

export default InputField;