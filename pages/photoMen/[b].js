import { useRouter } from 'next/router'
import React from 'react'
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
function b() {
  const router = useRouter();
  const current = router.query.i
  console.log(current)
  const a = api.find(el => el.name === current)
  return (
    <div>
      this is{a.name}
    </div>
  )
}

export default b