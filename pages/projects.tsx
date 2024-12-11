import Heading from "components/projects/Heading";
import More from "components/projects/More";
import Page from "components/utility/Page";
import Projects from "components/projects/Projects";
import React from "react";

function projects() {
  return (
    <Page
      currentPage="Projects"
      meta={{ title: "Projects", desc: "I love Defis using Solidity, Rust, Anchor, C++ on EVM, Solana, EOSIO, TRON, TON" }}
    >
      <Heading />
      <Projects />
      {/* <More /> */}
    </Page>
  );
}

export default projects;
