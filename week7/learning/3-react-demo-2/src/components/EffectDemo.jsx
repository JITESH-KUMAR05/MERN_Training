import React from 'react'
import { useState, useEffect } from "react"

function EffectDemo() {
    const [user, setuser] = useState([]);

    useEffect(() => {

        async function getData() {
            try{

            }
            catch(err){
                console.log(err.message);
            }
        }
    })
  return (
    <div>
      
    </div>
  )
}

export default EffectDemo
