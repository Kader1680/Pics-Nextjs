import Link from 'next/link';
import React from 'react'

import dataPics from "../../dataPics"
export const getServerSideProps = async () => {
    const res = await fetch('https://api.escuelajs.co/api/v1/categories'); 
    const allAlbums = await res.json(); 
  return { 
      props: { 
        allAlbums: allAlbums
      } 
  } 
}   
const  images = ({allAlbums}) => {
  return (
    <div class= "allImages">
            {allAlbums.map((album) => {

              return(
            <Link href={"/images/" + album.id}  key={album.id}>
              <img src={album.image} />
            </Link>
                )
            }) 


            } 
        
    </div>
  )
}

export default images