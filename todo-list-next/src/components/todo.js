import Image from "next/image";
import styles from '../styles/todo.module.css'

export default function ToDo(props){
    const {todo, onChange, onDelete} = props;
    return (
        <div className={styles.toDoRow} key={todo.id}>
            <input className={styles.toDoCheckbox} name="completed" type="checkbox" checked={todo.completed}
                   value={todo.completed} onChange={(e) => onChange(e, todo.id)}/>
            <input className={styles.todoInput} name="name" type="text"
                   value={todo.name} onChange={(e) => onChange(e, todo.id)}/>
            <button className={styles.deleteBtn} onClick={()=> onDelete(todo.id)}><Image alt="Delete Icon" src="delete.svg" width={24} height={24}/>Delete
            </button>

        </div>
    )
}