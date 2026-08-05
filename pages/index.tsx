import type { NextPage } from "next";
import Head from "next/head";
import About from "../components/About";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Projects from "../components/Projects";
import { withBasePath } from "../components/basePath";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Jerrold Kyekye | Electrical Engineer</title>
        <link rel="icon" href={withBasePath("/favicon.ico")} />
        <meta name="author" content="Jerrold Kyekye" />
        <meta charSet="UTF-8" />
        <meta name="theme-color" content="#0f172a" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Electrical engineering portfolio for Jerrold Kyekye, focused on circuits, systems, and future project work."
        />
        <meta property="og:site_name" content="Jerrold Kyekye" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={withBasePath("/images/partners/jerrold.jpeg")} />
      </Head>

      <Header />

      <main>
        <About />
        <Projects />
      </main>

      <Footer />
    </>
  )
}

export default Home;
