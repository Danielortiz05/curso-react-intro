import "./TodoItem.css";
import { AiOutlineCheck, AiOutlineCloseCircle } from "react-icons/ai"

function TodoItem ({text, completed, onComplete, onDelete}) {
    return(
        <li className="todoItem">
            <AiOutlineCheck size="30px" className={` todoItem-span ${completed && "todoItem-check"}`} onClick={onComplete}/>

            <p className={` todoItem-p ${completed && "todoItem-p--check"}`}>{text}</p>
            
            <AiOutlineCloseCircle size = "30px" className="closeTodo" onClick={onDelete}/>
        </li>
    );
};
export {TodoItem};