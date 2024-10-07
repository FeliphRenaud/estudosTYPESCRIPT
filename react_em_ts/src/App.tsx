import './App.css';

//importasção de componentes 
import Components from './components/firstComponents';

// desestruturando Props
import SecondComponent from './components/secondComponent';
import ShowUser from './components/ShowUser';
import Destructuring, {Category} from './components/Destructuring';

import State from './components/State';
import { createContext } from 'react';
import Context from './components/Context';

  // type 

type textOrNull = string | null

interface IAppContext {
  language: string;
  framework: string;
  projects: number;
}

export const AppContext = createContext<IAppContext | null>(null)

function App() {

  const name: string = "Feliph"
  const age: number = 32
  const isWorking: boolean = true
  function showStatusJob(){
    if (isWorking) {
      return `trabalhando`
    } else {
      return`Disponivel para um novo emprego `
    }
  }
  
  const userGreeting = (name: string): string => {
    return `Ola ${name}, prazer em te conhecer`
  }

  const ocupation: string = "Programador"

  const myText: textOrNull = "tem algum texto aqui"
  
  let secondText: textOrNull = null

  //secondText = "Opa olha o segundo texto aqui "

  // context

  const contextValue = {
    language: "JavaScript",
    framework: "express",
    projects: 5
  };
  
  return (

    <AppContext.Provider value ={contextValue}>
      <div className="App">
        <header className="App-header">
          <h1>React em TS </h1>
          <h2>{ userGreeting(name)}</h2>
          <h2>age: {age}</h2>
          <h2>Status de trabalho:  {showStatusJob()}</h2>
          {isWorking && (<h2> {ocupation}</h2>)}
          <h3>sobre oque se refere a components </h3>
          <p>nesta sessão de estudo este é o meu primeiro
          <Components/>
          </p>
          <SecondComponent name="Primeira Props no Segundo componente " />
          <h1>Usando Propos como ferramenta componentizada de apresentação</h1>
          <ShowUser
            name="Feliph"
            age={32}
            ocupation='Programador'
          />
          <Destructuring
            title='Primeiro Post'
            content='Estudos de TS com REACT'
            commentsQty={10}
            tags={["TS", "JS", "REACT", "LIFE DEV s2"]}
            category={Category.TS}
          />
          <State/>
          { myText && <p>tem texto na variavel</p> }
          {secondText && <p>tem texto nessa variavel</p>}
          <Context/>
          
        </header>
      </div>
      </AppContext.Provider>
  );
}

export default App;
