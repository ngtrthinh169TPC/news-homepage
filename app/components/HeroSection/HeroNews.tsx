import React from "react";
import type { Article } from "~/types/Hero.types";

export default function HeroNews(props: { data: Article[] }) {
  return (
    <div className='bg-very-dark-blue h-fit flex flex-col row-span-2 p-8 mt-12 xl:mt-0'>
      <h2 className='text-soft-orange font-bold text-4xl mb-2'>New articles</h2>
      {props.data.map((article, index) => {
        return (
          <React.Fragment key={`new-article-${index}`}>
            {index > 0 ? <hr className='border-grayish-blue' /> : null}
            <div className='my-6'>
              <h3 className='text-off-white hover:text-soft-orange font-bold text-xl mb-2.5'>
                {article.title}
              </h3>
              <p className='text-grayish-blue'>{article.brief}</p>
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
}
