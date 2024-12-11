import { kebabCase, kebabArray } from "@/utils/utils";
import { Project } from "types";

const projects: Project[] = [
  {
    id: 0,
    title: "Gempad.App",
    desc: "A Multi-chain decentralized launchpad and crowdfunding platform.",
    img: "/static/projects/gempad1.png",
    link: "https://gempad.app/",
    tags: ["Solidity", "EVM", "Hardhat", "React", "NextJS", "TailwindCSS", "Express", "MongoDB"],
  },
  {
    id: 1,
    title: "Defilaunch.App",
    desc: "Your All-in-One Platform for Meme Coins, Portfolio Tracking, and Staking Pools.",
    img: "/static/projects/defilaunch2.png",
    link: "https://defilaunch.app/",
    tags: ["Solidity", "EVM", "Hardhat", "React", "NextJS", "MUI", "Express", "Socket.io", "Firebase"],
  },
  {
    id: 2,
    title: "RoyalJapan.Asia",
    desc: "Drug Ecommerce. Paypal payment gateway integration.",
    img: "/static/projects/royal1.png",
    link: "https://royaljapan.asia/",
    tags: ["React", "Django", "MySQL", "Paypal"],
  },
  {
    id: 3,
    title: "Solsale.App",
    desc: "Decentralized Solana Launchpad without limits! Publish your project or invest in the best Solana projects early, before they get listed on exchanges.",
    img: "/static/projects/solsale1.png",
    tags: ["Rust", "Anchor", "Solana", "React", "NextJS", "Web3"],
  },
  {
    id: 4,
    title: "Waxdeer.Com",
    desc: "WAX Deer Jungle Club Breed, burn, stake, tokens, farming, and explore a myriad of unique opportunities in the NFT ecosystem.",
    img: "/static/projects/waxdeer.png",
    tags: ["EOSIO", "WAX", "React", "C++", "IPFS", "Docker"],
  },
  {
    id: 5,
    title: "PumpFun",
    desc: "Pump.fun fork! Solana memecoin platform.",
    img: "/static/projects/pump_fun.png",
    github: "https://github.com/TopEagle36/solana-pump-fun",
    tags: ["Rust", "Anchor", "Spl-token", "Solana", "React", "Render", "IPFS"],
  },
  {
    id: 6,
    title: "Compump",
    desc: "Memecoin launchpad on commune AI.",
    img: "/static/projects/compump2.png",
    github: "https://github.com/TopEagle36/pineapple-fastapi-pr",
    tags: ["React", "COMMUNE-EVM", "Fastapi", "Python", "Chat-gpt api"],
  },
  {
    id: 7,
    title: "Pump.fun Sniper",
    desc: "Sniping tokens from pump.fun, reading & writing to pump.fun smart contract without using API",
    img: "/static/projects/pump_fun_sniper.png",
    github: "https://github.com/TopEagle36/Pump-fun-sniper-bot/",
    tags: ["Solana", "Web3", "Anchor", "Javascript"],
  },
];

export const allTags = []

projects.forEach((project) => {
  project.tags.forEach((tag) => !allTags.includes(tag) && allTags.push(tag))
});

export const allKebabTags = allTags.map(tag => (
  kebabCase(tag)
))

export default projects
