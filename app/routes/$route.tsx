import { Link, useParams } from "@remix-run/react";

export default function Route() {
  const { route } = useParams();
  return (
    <div className='h-screen w-screen flex flex-col justify-center items-center'>
      <h2>Navigated to:</h2>
      <p className='text-2xl font-bold'>{route ? route : "untitled"}</p>
      <Link to='/'>
        <button className='bg-soft-red text-off-white rounded px-5 py-1.5 mt-2 hover:bg-dark-grayish-blue'>
          Go back to homepage
        </button>
      </Link>
    </div>
  );
}
