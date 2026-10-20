export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4 w-screen">
      <div className="text-lg font-semibold">
        {" "}
        <a href="/">InvMan</a>
      </div>
      <ul className="flex space-x-6">
        <li>
          <a href="#"> Home </a>
        </li>
        <li>
          <a href="#"> About </a>
        </li>
        <li>
          <a href="#"> Contact </a>
        </li>
      </ul>
    </nav>
  );
}
