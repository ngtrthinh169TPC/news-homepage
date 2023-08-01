import { Link } from "@remix-run/react";
import type { Article } from "~/types/types";

export default function HeroHighlightArticle(props: { article: Article }) {
  return (
    <>
      <h3 className='text-4xl xl:text-6xl font-extrabold row-start-2 xl:row-start-auto'>
        {props.article.title}
      </h3>
      <div className='flex flex-col justify-between row-start-3 xl:row-start-auto'>
        <p className='text-dark-grayish-blue'>{props.article.brief}</p>
        <Link to={`article/${props.article.title}`}>
          <button className='bg-soft-red hover:bg-very-dark-blue text-off-white mt-8 px-8 py-4 w-fit text-sm font-semibold tracking-[0.5em]'>
            READ MORE
          </button>
        </Link>
      </div>
    </>
  );
}
