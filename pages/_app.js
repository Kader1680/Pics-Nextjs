import { Layout } from '../components/Layout'
import "../styles/globals.css"


export default function App({ Component, pageProps }) {
  return (
    <Layout>
          <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css" />
          <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
          <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
           <Component {...pageProps} />

    </Layout>


  )
}