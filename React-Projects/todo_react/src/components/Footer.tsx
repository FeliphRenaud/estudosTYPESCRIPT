import React from 'react'
import styles from './Footer.module.css'
const Footer = () => {
  return (
    <div className={styles.containerFooter }>
      <h1>Footer</h1>
      <div className={styles.footerContent}>
        <div className={styles.sobreNos }>
          <h4>Sobre nós</h4>
          <a href="">Contato</a>
          <a href="">quem somos</a>
          <a href="">trabalhe conosco</a>
        </div>
        <div className={styles.contato}>
          <h4>Entre em contato</h4>
          <a href="https://wa.me/5548996154533">WhatsApp <i className='bi bi-whatsapp'></i></a>
          <a href="">email</a>
          <p>telefone <a href="">55 48 99615-4533 </a> </p>
        </div>
        <div className={ styles.redes}>
          <h4>Nossas redes</h4>
          <a href="https://www.instagram.com/feliphrenaud/">Instagram <i className='bi bi-instagram'></i></a> 
          <a href="https://www.linkedin.com/in/feliph-renaud-5297b0240/">Linkedin <i className='bi bi-linkedin'></i> </a> 
          <a href="https://github.com/FeliphRenaud">GitHub <i className='bi bi-github'></i></a> 
          <span>React + TS todo </span> @ 2024

        </div>


      </div>
      
    </div>
  )
}

export default Footer