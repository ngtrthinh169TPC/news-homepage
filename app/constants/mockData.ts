import type { Article } from "~/types/types";

export const highlightedArticle: Article = {
  title: "The Bright Future of Web 3.0?",
  brief:
    "We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?",
};

export const newArticles: Article[] = [
  {
    title: "Hydrogen vs. Electric Cars",
    brief: "Will hydrogen-fueled cars ever catch up to EVs?",
  },
  {
    title: "The downsides of AI Artistry",
    brief:
      "What are the possible adverse effects of on-demand AI image generation?",
  },
  {
    title: "Is VC Funding Drying Up",
    brief:
      "Private funding by VC firms is down 50% YOY. We take a look at what that means?",
  },
];

export const popularArticles: Article[] = [
  {
    index: "01",
    title: "Reviving Retro PCs",
    brief: "What happens when old PCs are given modern upgrades?",
    imgUrl: "images/image-retro-pcs.jpg",
  },
  {
    index: "02",
    title: "Top 10 Laptops of 2022",
    brief: "Our best picks for various needs and budgets.",
    imgUrl: "images/image-top-laptops.jpg",
  },
  {
    index: "03",
    title: "The Growth of Gaming",
    brief: "How the pandemic has sparked fresh opportunities.",
    imgUrl: "images/image-gaming-growth.jpg",
  },
];
