import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import Navbar from '../components/Navbar/Navbar'

const Index =  (props) => {
console.log('the props', props.shows);
return(
  <div>
    
    <Link href="/about">
      <a>About Page</a>
    </Link>
    <Link href="/about">
      <button>About Page</button>
    </Link>
    <Navbar />
    </div>
)
};

Index.getInitialProps = async function () {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
  const data = await res.json()

  return {
    shows: data.map(entry => entry.show)
  }
}

  export default Index;