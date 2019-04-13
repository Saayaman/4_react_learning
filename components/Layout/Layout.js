import Head from 'next/head';
import Navbar from '../Navbar/Navbar'

const Layout = (props) => (
  <div>
    <Head>
      <link
        rel="stylesheet"
        href="https://bootswatch.com/4/flatly/bootstrap.min.css"
      />
    </Head>
    <Navbar />
    {props.children}
  </div>
)

export default Layout