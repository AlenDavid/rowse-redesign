import MetaTags from "react-meta-tags";

import Hero from "../components/Hero";
import Container from "../components/UI/Container";

export default function Home() {
  return (
    <>
      <MetaTags>
        <title>Rowse</title>
        <meta name="description" content="Rowse's e-commerce" />
        <link rel="icon" href="/favicon.ico" />
      </MetaTags>
      <Container>
        <Hero />
      </Container>
    </>
  );
}
