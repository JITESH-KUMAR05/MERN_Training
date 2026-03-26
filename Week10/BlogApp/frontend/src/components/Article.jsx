import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router'
import { errorClass, loadingClass } from '../styles/common';

const Article = () => {
  const {id} = useParams();
  const locationObj = useLocation();
  // console.log(locationObj)
  const [article,setArticle] = useState(locationObj?.state?.articleObj || null);
  const [loading, setLoading] = useState(!article);
  const [error, setError] = useState(null);

  useEffect(() => {
    // if article is not present then we have to make an api call
    if(!article){
      const fetchArticle = async() => {
        try {
          const resObj = await axios.get(`http://localhost:5000/user-api/article/${id}`);
          const res = resObj.data.payload;
          setArticle(res);

        } catch (err) {
          setError(err);
        }finally{
          setLoading(false);
        }
      }
      fetchArticle();
    }
  },[id,article])

  if(loading){
    return <p className={loadingClass}></p>
  }
  if(error){
    return <p className={errorClass}>{error.message}</p>
  }
  
  return (
    <div className='w-200 p-20'>
      <h1 className='font-extrabold text-4xl'>{article.title}</h1>
      <p className='text-gray-600'>{article.content}</p>
      <p>{new Date(article.updatedAt).toLocaleString()}</p>
    </div>
  )
}

export default Article
