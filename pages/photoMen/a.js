import React from 'react'
import dataPhtograph from "../../dataPics"
import Link from 'next/link'
const api  = [
  {
    name :  "turing ", 
    id : 100
  },
  {
    name :  "steve ", 
    id : 200
  },
  {
    name :  "popo ", 
    id : 300
  }
]
const photoMen = () => {
  return (
    <div>

        {
            api.map(i=><p>

                <Link href={"/photoMen/" + i.name}>{i.name}</Link>
            </p>)
        }
    </div>


  )
}

export default photoMen