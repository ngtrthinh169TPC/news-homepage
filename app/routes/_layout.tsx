import { Outlet } from "@remix-run/react";
import Header from "~/components/Header";

export default function Layout() {
  return (
    <div className='bg-off-white min-h-screen px-6 pt-10 pb-4 xl:px-[12%] xl:pt-16 font-inter z-10'>
      <Header />
      <div className='mt-12'>
        <Outlet />
      </div>
    </div>
  );
}
