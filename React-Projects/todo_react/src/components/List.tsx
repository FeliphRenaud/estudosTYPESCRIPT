import React from 'react'
import styles from './List.module.css'
import { Itask } from '../interfaces/Itask'

interface Props{
  taskList: Itask[];
  handleDelete(id: number): void
  handleEdit(task:Itask):void
}
const List = ({ taskList, handleDelete, handleEdit }: Props) => {
  return (
    <>
      {taskList.length > 0 ?
        (taskList.map((task) => (
          <div key={task.id} className={styles.task}>
            <div className={ styles.details}>
              <h4>{task.title}</h4>
              <p>Dificuldade de 0 a 10 : { task.difficultly}</p>
            </div>

            <div className={ styles.actions }>
              <i className=' bi bi-pencil' onClick={()=> handleEdit(task)}></i>
              <i className='bi bi-trash'
                onClick={() => {
                  handleDelete(task.id)
              }}></i>
            </div>
          </div>
        ))) :
        (<p> Não há tarefas cadastradas </p>)
      }
    </>
  )
}


export default List