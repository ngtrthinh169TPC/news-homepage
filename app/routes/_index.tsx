import { type V2_MetaFunction } from "@remix-run/node";
import Header from "~/components/Header";
import {
  highlightedArticle,
  newArticles,
  popularArticles,
} from "~/constants/mockData";
import HeroHighlightArticle from "~/components/HeroSection/HeroHighlightArticle";
import HeroNewsSection from "~/components/HeroSection/HeroNewsSection";
import HeroPopularSection from "~/components/HeroSection/HeroPopularSection";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className='bg-off-white min-h-screen px-6 pt-10 pb-4 xl:px-[12%] xl:pt-16 font-inter'>
      <Header />
      <div className='mt-12 xl:mt-16 grid xl:grid-cols-3 gap-6 xl:gap-8'>
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
        <HeroNewsSection data={newArticles} />
        <HeroHighlightArticle article={highlightedArticle} />
        <HeroPopularSection data={popularArticles} />
      </div>
    </div>
  );
}
