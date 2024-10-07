import React from 'react'
import styles from './Header.module.css'
const Header = () => {
  return (
    <header className={ styles.header}>
      <h1>Lista de coisas a fazer </h1>
      <h3>Antes de morrer </h3>
    </header>
  )
}

export default Header