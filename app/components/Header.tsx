import Navbar from "./Navbar";

export default function Header() {
  return (
    <div className='flex justify-between items-center'>
      <img src='images/logo.svg' alt='logo' />
      <Navbar />
      <img
        src='images/icon-menu.svg'
        alt='menu'
        className='h-8 w-8 object-fit xl:hidden'
      />
    </div>
  );
}
