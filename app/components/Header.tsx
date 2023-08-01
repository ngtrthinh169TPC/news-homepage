import { useState } from "react";
import Navbar, { MobileToggleNavbar } from "./Navbar";

export default function Header() {
  const [showOverlay, setShowOverlay] = useState<boolean>(false);
  return (
    <div className='flex justify-between items-center'>
      <img src='images/logo.svg' alt='logo' />
      <Navbar />
      <button
        className='xl:hidden'
        onClick={() => {
          setShowOverlay(true);
        }}>
        <img
          src='images/icon-menu.svg'
          alt='menu'
          className='h-8 w-8 object-fit'
        />
      </button>
      {showOverlay ? (
        <MobileToggleNavbar closeOverlay={() => setShowOverlay(false)} />
      ) : null}
    </div>
  );
}
