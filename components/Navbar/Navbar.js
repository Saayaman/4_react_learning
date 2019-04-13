import Link from 'next/link';

const Navbar = () => (
  <div>
  <ul>
    <Link href="/"><a>This is home</a></Link>
    <Link href="/about"><a>About</a></Link>
  </ul>
  <style jsx>
    {`
      ul {
        width: 100%;
        background: #333;
        color: #fff;
      }
    `}
  </style>
  </div>
)

export default Navbar