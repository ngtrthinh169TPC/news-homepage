import { Link } from "@remix-run/react";
import type { Article } from "~/types/types";

export default function HeroPopularSection(props: { data: Article[] }) {
  return (
    <div className='mt-12 xl:col-span-3 grid xl:grid-cols-3'>
      {props.data.map((article, index) => {
        return (
          <div key={`popular-article-${index}`} className='flex mb-12'>
            <img
              src={article.imgUrl}
              alt={`article-illust-${article.title}`}
              className='h-full w-28 xl:w-32 object-cover'
            />
            <div className='ml-8'>
              <h2 className='text-6xl font-bold text-grayish-blue mb-4'>
                {article.index}
              </h2>
              <Link to={`article/${article.title}`}>
                <h3 className='font-bold text-xl mb-2 hover:text-soft-red'>
                  {article.title}
                </h3>
              </Link>
              <p>{article.brief}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
