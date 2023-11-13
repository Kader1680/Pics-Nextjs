import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '../components/Navbar'
import {dataPics} from "../dataPics"
import Link from 'next/link'
import FilterBars from '../components/FilterBars'
import React, { useEffect, useState } from 'react'
import Loding from '../components/Loding'
// import styles from '@/styles/Home.module.css'

// const inter = Inter({ subsets: ['latin'] })
export const getServerSideProps = async () => {
  const res = await fetch('https://api.escuelajs.co/api/v1/categories'); 
  const allAlbums = await res.json(); 
return { 
    props: { 
      allAlbums: allAlbums
    } 
} 
} 




export default function Home({allAlbums}) {


  const [pics, setpics] = useState(dataPics);

  // filter with color

  const FilterTap = (color) => {
        const filter = dataPics.filter(item=>

          item.color == color
        )

        setpics(filter)
  }

  // filter with type
  const FilterType = (type) =>{
        const filterType = dataPics.filter(item =>
          item.type == type
        )

        setpics(filterType)
  }

  // filter with price

  const FilterPrice = (price) =>{
    const filterPrice  = dataPics.filter(item => 
    
      item.price == price  
  )
      setpics(filterPrice)

  }

  const [loading, setloading] = useState(true);
  useEffect(() => {
    
    setTimeout(() => {
      setloading(false)
    }, 3000);
  }, []);
  if (loading) {
        
        return <Loding />
  }
  return (
    <>
        <Head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
            <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"></link>
            <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
            <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
            <title>Pics | Home</title>
        </Head>

        <div class="Container">
                  <div className='Home'>
                      <div className='filter mt-4 d-flex'>
                            <nav role="navigation" class="primary-navigation">
                                    {/* <ul onClick = {()=>{setpics(dataPics)}}>
                                      <Image style={{ width:"25px", height:"25px" }} width={50} height={60} src="/all.png" />
                                      all Images
                                    </ul> */}

                                    <ul onClick = {()=>{setpics(dataPics)}}>
                                      <li>
                                      <div class = "d-flex align-items-center">
                                          <div className=' d-flex'>
                                          <Image style={{ width:"25px", height:"25px" }} width={50} height={60} src="/picture.png" />
                                            <p style={{ fontSize:"15px" }}>All Pics</p>
                                          </div>

                                          
                                      </div>
                                      </li>
                                    </ul>
                              </nav>
                              <nav role="navigation" class="primary-navigation">
                                    <ul>
                                      <li>
                                      <div class = "d-flex align-items-center">
                                          <div className=' d-flex'>
                                          <Image style={{ width:"25px", height:"25px" }} width={50} height={60} src="/picture.png" />
                                            <p style={{ fontSize:"15px" }} >color</p>
                                          </div>

                                          <i class="fa-solid fa-angle-down"></i>
                                      </div>
                                                                      
                                        <ul class="dropdown">
                                          <li onClick = {()=> FilterTap("color")} >Color Orignl</li>
                                          <li onClick = {()=> FilterTap("WhiteBlack")}>Black & White</li>
                                          
                                        </ul>
                                      </li>
                                    </ul>
                              </nav>


                              <nav role="navigation" class="primary-navigation">
                                    <ul>
                                      <li>
                                      <div class = "d-flex align-items-center">
                                      <div className=' d-flex'>
                                      <Image style={{ width:"25px", height:"25px" }} width={50} height={60} src="/png-file.png" />
                                        <p style={{ fontSize:"15px" }}>Type</p>
                                      </div>

                                      <i class="fa-solid fa-angle-down"></i>
                                      </div>
                                                                      
                                        <ul class="dropdown">
                                          <li onClick = {()=> FilterType("png")} >png</li>
                                          <li onClick = {()=> FilterType("jpg")} >jpg</li>
                                          <li onClick = {()=> FilterType("gif")} >gif</li>
                                          <li onClick = {()=> FilterType("webp")}>webp</li>
                                          
                                        </ul>
                                      </li>
                                    </ul>
                              </nav>



                              <nav role="navigation" class="primary-navigation">
                                    <ul>
                                      <li>
                                      <div class = "d-flex align-items-center">
                                      <div className=' d-flex'>
                                      <Image style={{ width:"25px", height:"25px" }} width={50} height={60} src="/price-tag.png" />
                                        <p style={{ fontSize:"15px" }} >Price</p>
                                      </div>

                                      <i class="fa-solid fa-angle-down"></i>
                                      </div>
                                                                      
                                        <ul class="dropdown">
                                          <li onClick = {()=> FilterPrice("free")} >Free </li>
                                          <li onClick = {()=> FilterPrice("primuim")}>Primuim</li>
                                          
                                        </ul>
                                      </li>
                                    </ul>
                              </nav>

                      </div>



                      <div class= "allImages">
                      {
                        pics.map(item =>{
                          return(
                            <img src={item.image} />
                          )
                        })
                      }
                    
                      
                      </div>
                      <hr></hr>
                      <h2 className=' text-center'>Images Details</h2>
                      <hr></hr>
                      <div class= "allImages">
                          {
                          allAlbums.map((album, index) => {
                            if (index <= 7) {
                              return(
                                <Link href={"/" + album.id}  key={album.id}>
                                  <img   src={album.image} />
                    
                                </Link>
                                    )
                            }
                          
                          }) 


                          } 
                      
                      </div>


                  </div>
          
    
        </div>
    </>
    
  )
}
