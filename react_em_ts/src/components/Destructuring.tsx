import React from 'react'

type Props = {
  title: string
  content: string
  commentsQty: number
  tags: string[]
  // ENUM
  category:Category
}

export enum Category{
  JS = " JavaScript",
  TS = " TypeScript",
  P= " Python"
}

const Destructuring = ({
  title,
  content,
  commentsQty,
  tags,
  category}: Props) => {
  return (
    <div>
      <h1>Destructuring</h1>
      <h2>{title}</h2>
      <h3>{content}</h3>
      <h3>Quantidade de comentarios: {commentsQty}</h3>
      <h4>{tags.map(tag => (
        <span>#{ tag}</span>
      ))}</h4>
      <h4>Category{ category }</h4>
    </div>
  )
}

export default Destructuring