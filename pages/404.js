import Link from 'next/link'
import React from 'react'
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Head from 'next/head';
const t = () => {
	const router = useRouter()
		useEffect(() => {
		setTimeout(() => {
			router.push("/")
		}, 5000);
});
  return (
    <div>
        <Head>
			<title>Pics | Not Found</title>
		</Head>
		<section class="page_404">
	<div class="container">
		<div class="row">	
		<div class="col-sm-12 ">
		<div class="col-sm-10 col-sm-offset-1  text-center">
		<div class="four_zero_four_bg">
			<h1 class="text-center ">404</h1>
		
		
		</div>
		
		<div class="contant_box_404">
		<h3 class="h2">
		Look like you're lost
		</h3>
		
		<p>the page you are looking for not avaible!</p>
		
		<Link class=" link_404" href="/">Go to Home</Link>
	</div>
		</div>
		</div>
		</div>
	</div>
</section>
    </div>
  )
}

export default t