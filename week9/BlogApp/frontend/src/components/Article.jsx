import React from 'react'
import { useLocation } from 'react-router'

const Article = () => {
    const {state} = useLocation();
    console.log(state)
  return (
    <div>
      Hello
    </div>
  )
}

export default Article
