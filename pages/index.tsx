import Head from "next/head";

import Hero from "../components/Hero";
import Container from "../components/UI/Container";

export default function Home() {
  return (
    <>
      <Head>
        <title>Rowse</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <Hero />
      </Container>
    </>
  );
}
