import Head from 'next/head';
    import React from 'react'
    
    
    export const getStaticProps = async ({params}) => {
        const res = await fetch(`https://api.escuelajs.co/api/v1/categories/${params.id}`);
        const data = await res.json();
        // console.log(params)
        // console.log(data)
        return{
            props: {item: data}
        }
    }
    

    export const getStaticPaths = async () =>{
        const res = await fetch('https://api.escuelajs.co/api/v1/categories/');
        const prod = await res.json();
        return{
            paths: prod.map(post => (
                {
                    params:{id: post.id.toString()}
                }
            )),
            fallback: true,
        }
    }
    const product = ({item}) => {
      return (
        <div >
            <Head>
                <title>
                    Pics | Details
                </title>
            </Head>
            <h3>Image Details</h3>
            <div className='d-flex align-items-center'>
                {/* <img src={item.image} width={200} height={200}/> */}
                <div className='ms-3 '>
                        <p>Name : my Imges</p>
                        <p>Created At 2013</p>
                        <p>Updated  At 2023</p>
                        <button type="submit" class="btn  pull-righ mb-3" id="btnContactUs">donwlod</button>

                </div>
            </div>
            
        </div>
      )
    }
    export default product