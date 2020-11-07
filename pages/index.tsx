import MetaTags from "react-meta-tags";

import Hero from "../components/Hero";
import Container from "../components/UI/Container";

export default function Home() {
  return (
    <>
      <MetaTags>
        <title>Rowse</title>
        <meta name="description" content="Rowse's e-commerce" />
        <meta name="og:title" content="Rowse's e-commerce" />
        <meta name="og:owners" content="David Alen" />
        <meta name="og:url" content="https://rowse-redesign.vercel.app/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@davidalen_" />
        <meta
          name="og:image"
          content="https://rowse-redesign.vercel.app/images/hero-background-image.webp"
        ></meta>
        <meta
          name="twitter:image"
          content="https://rowse-redesign.vercel.app/images/hero-background-image.webp"
        ></meta>
        <link rel="icon" href="/favicon.ico" />
      </MetaTags>
      <Container>
        <Hero />
      </Container>
    </>
  );
}
