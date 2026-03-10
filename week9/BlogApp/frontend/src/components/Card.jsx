import React from 'react'
import { articleCardClass, articleExcerpt, articleTitle, ghostBtn, primaryBtn, secondaryBtn } from '../styles/common'
import { useNavigate } from 'react-router'

const Card = ({articleObj}) => {
    // console.log(articleObj.author.firstName)
    const navigate = useNavigate();
    const readArticle = ()=>{
        navigate(`${articleObj._id}`,{state:{article:articleObj}})
    }
  return (
    <div className={articleCardClass}>
        <h1 className={articleTitle}>{articleObj.title}</h1>
        <p className={articleExcerpt}>{articleObj.content.substring(0,20)}...</p>
        <p className={articleTitle}>{articleObj.category}</p>
        <button onClick={readArticle} className={ghostBtn}>Read Article</button>
        <p> Updated at: {new Date(articleObj.updatedAt).toLocaleString()}</p>
    </div>
  )
}

export default Card
