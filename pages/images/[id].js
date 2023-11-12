import Head from 'next/head';
    import React from 'react'
    
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
    export const getStaticProps = async ({params}) => {
        const res = await fetch(`https://api.escuelajs.co/api/v1/categories/${params.id}`);
        const data = await res.json();
        // console.log(params)
        // console.log(data)
        return{
            props: {item: data}
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
            <h3>Product / Item</h3>
            <div className='d-flex align-items-center'>
                <img src={item.image} width={200} height={200}/>
                <div className='ms-3 '>
                        <p>Name : {item.name}</p>
                        <p>Created At{item.creationAt}</p>
                        <p>Updated  At{item.updatedAt}</p>
                        <button type="submit" class="btn  pull-righ mb-3" id="btnContactUs"><a class="text-white" href= {item.image} download >Download</a></button>

                </div>
            </div>
            
        </div>
      )
    }
    export default product