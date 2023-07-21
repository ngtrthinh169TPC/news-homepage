import { type V2_MetaFunction } from "@remix-run/node";
import React from "react";
import Header from "~/components/header";
import {
  heroContent,
  heroTitle,
  newArticles,
  popularArticles,
} from "~/constants/mockData";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className='bg-off-white min-h-screen px-6 pt-8 pb-4 xl:px-40 xl:pt-20 font-inter'>
      <Header />
      <div className='mt-8 xl:mt-16 grid xl:grid-cols-3 gap-6 xl:gap-8'>
        <img
          className='hidden xl:flex xl:col-span-2 h-80 w-full object-cover'
          src='images/image-web-3-desktop.jpg'
          alt='web-3-desktop'
        />
        <img
          className='xl:hidden xl:col-span-2 h-64 w-full object-cover'
          src='images/image-web-3-mobile.jpg'
          alt='web-3-mobile'
        />
        <div className='bg-very-dark-blue h-fit flex flex-col row-span-2 p-8 mt-12'>
          <h2 className='text-soft-orange font-bold text-4xl mb-2'>
            New articles
          </h2>
          {newArticles.map((article, index) => {
            return (
              <React.Fragment key={`new-article-${index}`}>
                {index > 0 ? <hr className='border-grayish-blue' /> : null}
                <div className='my-6'>
                  <h3 className='text-off-white font-bold text-xl mb-2.5'>
                    {article.title}
                  </h3>
                  <p className='text-grayish-blue'>{article.brief}</p>
                </div>
              </React.Fragment>
            );
          })}
        </div>
        <h3 className='text-4xl xl:text-6xl font-extrabold row-start-2 xl:row-start-auto'>
          {heroTitle}
        </h3>
        <div className='flex flex-col justify-between row-start-3 xl:row-start-auto'>
          <p className='text-dark-grayish-blue'>{heroContent}</p>
          <button className='bg-soft-red text-off-white mt-8 px-8 py-4 w-fit text-sm font-semibold tracking-[0.5em]'>
            READ MORE
          </button>
        </div>
        <div className='mt-12 xl:col-span-3 grid xl:grid-cols-3'>
          {popularArticles.map((article, index) => {
            return (
              <div key={`popular-article-${index}`} className='flex mb-12'>
                <img
                  src={article.url}
                  alt={`article-illust-${article.title}`}
                  className='h-full w-28 xl:w-32 object-cover'
                />
                <div className='ml-8'>
                  <h2 className='text-6xl font-bold text-grayish-blue mb-4'>
                    {article.index}
                  </h2>
                  <h3 className='font-bold text-xl mb-2'>{article.title}</h3>
                  <p>{article.brief}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
