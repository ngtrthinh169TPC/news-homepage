import { NavLink } from "@remix-run/react";

const navLinks = [
  {
    to: "/",
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
          className={({ isActive }) =>
            "hover:text-soft-orange" + (isActive ? " text-soft-red" : "")
          }>
          {item.display}
        </NavLink>
      ))}
    </nav>
  );
}

export function MobileToggleNavbar(props: { closeOverlay: () => void }) {
  return (
    <div className='fixed h-screen w-screen top-0 left-0 bg-black bg-opacity-60'>
      <div className='fixed h-screen w-3/4 top-0 right-0 bg-off-white pt-10 pr-6 pl-8'>
        <div className='flex justify-end'>
          <button className='' onClick={props.closeOverlay}>
            <img
              src='images/icon-menu-close.svg'
              alt='menu'
              className='h-8 w-8 object-fit xl:hidden'
            />
          </button>
        </div>
        <nav className='font-inter font-medium text-xl text-dark-grayish-blue mt-20 flex flex-col leading-loose'>
          {navLinks.map((item) => (
            <NavLink
              key={`navlink-mobile-${item.to}`}
              to={item.to}
              className={({ isActive }) => (isActive ? "text-soft-red" : "")}>
              {item.display}
            </NavLink>
          ))}
        </nav>
      </div>
    </div>
  );
}
