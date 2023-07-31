import { NavLink } from "@remix-run/react";

const navLinks = [
  {
    to: "/home",
    display: "Home",
  },
  {
    to: "/news",
    display: "News",
  },
  {
    to: "/popular",
    display: "Popular",
  },
  {
    to: "/trendings",
    display: "Trendings",
  },
  {
    to: "/categories",
    display: "Categories",
  },
];

export default function Navbar() {
  return (
    <nav className='font-inter bg-[#fafffa] text-dark-grayish-blue h-8 hidden xl:flex text-center items-center gap-x-12'>
      {navLinks.map((item) => (
        <NavLink
          key={`navlink-${item.to}`}
          to={item.to}
          className='hover:text-soft-orange'>
          {item.display}
        </NavLink>
      ))}
    </nav>
  );
}
