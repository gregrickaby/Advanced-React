import Link from "next/link";
import Nav from "./Nav";

export default function Header() {
  return (
    <header>
      <div className="var">
        <Link href="/">
          <a>Sick fits</a>
        </Link>
      </div>
      <div className="sub-bar">
        <p>search</p>
      </div>
      <Nav />
    </header>
  );
}
