import Link from 'next/link'

const Nav = () => (
  <nav className="mt-2 md:mt-0">
    <ul className="flex justify-between">
      <li className="nav-item mr-10 ">
        <Link href="/first-attempt">
          <a>First Attempt</a>
        </Link>
      </li>

      <li className="nav-item mr-10 ">
        <Link href="/">
          <a>Nav Item</a>
        </Link>
      </li>

      <li className="nav-item">
        <Link href="/">
          <a>Nav Item</a>
        </Link>
      </li>
    </ul>
  </nav>
);

export default Nav;
