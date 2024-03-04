import Link from "next/link";

export default function Nav() {
  return (
    <>
      <nav className="navbar navbar-default">
        <div className="container">
          <div className="navbar-header">
            <p className="navbar-brand">DAILY JOURNAL</p>
          </div>
          <ul className="nav navbar-nav navbar-right">
            <li id="home">
              <Link href="/">HOME</Link>
            </li>
            <li id="about">
              <Link href="/compose">COMPOSE</Link>
            </li>
            <li id="contact">
              <Link href="/contact">CONTACT US</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
