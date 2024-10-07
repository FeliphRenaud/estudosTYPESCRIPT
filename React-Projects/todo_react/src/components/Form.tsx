import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react'
import styles from './Form.module.css'
import { Itask }  from '../interfaces/Itask'


interface Props{
  btnText: string
  taskList: Itask[]
  setTaskList?: React.Dispatch<React.SetStateAction<Itask[]>>
  task?: Itask | null
  handleUpdate?(id: number, title: string, difficultly: number): void
}

const Form = ({
  btnText,
  taskList,
  setTaskList,
  task,
  handleUpdate
}: Props) => {
  
  const [id, setId] = useState<number>(0)
  const [title, setTitle] = useState<string>("")
  const [difficultly, setDifficultly] = useState<number>(0)

  useEffect(() => {
    if (task) {
      setId(task.id)
      setTitle(task.title)
      setDifficultly(task.difficultly)
    } else {
      
    }
  },[task])

  const addTaskHandler = (e: FormEvent<HTMLFormElement>) => { 
    e.preventDefault()

    if (handleUpdate) {

      handleUpdate(id, title, difficultly)

    } else {
      const id = Math.floor(Math.random() * 1000)
    
      const newTask: Itask = { id, title, difficultly }
  
      if (title === ("") || difficultly === (0)) {
        alert("A inserção de todos os dados é obrigatoria ")
      } else {
        setTaskList!([...taskList, newTask]); 
  
        setTitle("");
        setDifficultly(0)
      }
   }
  }
  
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => { 
    if (e.target.name === "title") {
      setTitle(e.target.value)
    } else if (e.target.name ==="difficultly"){
      setDifficultly(Number(e.target.value))
    }

  }


  return (
    <form onSubmit={addTaskHandler} className={ styles.form }>
      <div className={ styles.input_contaniner }>
        <label htmlFor="title">Titulo</label>
        <input
          type="text"
          name='title'
          placeholder='Titulo da tarefa '
          onChange={handleChange}
          value={title}
        />
      </div>
      <div className={ styles.input_contaniner }>
        <label htmlFor="difficulty">Dificuldade</label>
        <input
          type="number"
          name='difficultly'
          placeholder='Dificuldade da tafera '
          onChange={handleChange}
          value={difficultly}
        />
      </div>
      <input
        type="submit"
        value={btnText} />
    </form>
  )
}

export default Form