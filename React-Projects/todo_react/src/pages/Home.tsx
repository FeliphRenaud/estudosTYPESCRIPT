import React, { useState } from 'react'
import Header from '../components/Header'
import stylesMain from './Home.module.css'
import Footer from '../components/Footer'
import Form from '../components/Form'
import List from '../components/List'
import { Itask } from '../interfaces/Itask'
import Modal from '../components/Modal'
const Home = () => {

  const [taskList, setTaskList] = useState<Itask[]>([])
  const [taskToUpdate, setTaskToUpdate] = useState<Itask | null>(null)

  const deletTask = (id: number) => {
    setTaskList(
      taskList.filter(task => {
        return task.id !== id
      })
    )
  }

  const hideOrShowModal = (display: boolean) => {
    const modal = document.querySelector("#modal")
    if (display) {
      modal!.classList.remove("hide")
    } else {
      modal!.classList.add("hide")
    }
  }

  const editTask = (task:Itask): void => {
    hideOrShowModal(true);
    setTaskToUpdate(task)
  }

  const updateTask = (
    id: number,
    title: string,
    difficultly: number
  ) => {

    const updatedTask: Itask = { id, title, difficultly }
    
    const updatedItens = taskList.map((task) => {
      return task.id === updatedTask.id ? updatedTask : task
    })
  
    setTaskList(updatedItens)

    hideOrShowModal(false)
  }  

  return (
    <div>
      <Modal
        children=
        {<Form
          btnText="Editar Tarefa"
          taskList={taskList}
          task={taskToUpdate}
          handleUpdate={updateTask}
        />}
      />
      <header>
        <Header/>
      </header>

      <main className={stylesMain.main}>
        <div>
          <h2> Coisas para fazer antes de morrer :  </h2>
          <Form
            btnText='Criar Tarefa'
            taskList={taskList}
            setTaskList={setTaskList}
          ></Form>
        </div>
        <div>
          <h2>Suas Tarefas são: </h2>
          <List
            taskList={taskList}
            handleDelete={deletTask}
            handleEdit={editTask}
          />
        </div>
      </main>
      
      <footer>
        <Footer/>
      </footer>
      
    </div>
  )
}

export default Home