import { Link, useParams } from "@remix-run/react";

export default function Route() {
  const { route } = useParams();
  return (
    <div className='flex flex-col'>
      <div className='flex items-center text-lg'>
        <h2>Navigated to:</h2>
        <p className='font-bold ml-2'>{route ? route : "untitled"}</p>
      </div>
      <Link to='/'>
        <button className='bg-soft-red text-off-white rounded px-5 py-1.5 mt-2 hover:bg-dark-grayish-blue'>
          Go back to homepage
        </button>
      </Link>
    </div>
  );
}
