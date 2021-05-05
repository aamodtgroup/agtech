import React from "react";
import { connect, Global, css, styled, Head } from "frontity";
import favicon from "../images/favicon.png";
import Switch from "@frontity/components/switch";
import Footer from "./footer/footer";
import List from "./list";
import Post from "./pages/post";
import Page from "./pages/page";
import HomePage from "./pages/homepage";
import Loading from "./pages/loading";
import PageError from "./pages/page-error";
import FontFace from "./styles/font-face";
import DarkMode from "./styles/dakmode";
import gutenbergStyle from "./styles/gutenberg/style.css";
import gutenbergTheme from "./styles/gutenberg/theme.css";
import BootstrapCss from "./styles/bootstrap.css";
import customStyle from "./styles/style";
import Header from "./header/header";

/**
 * Theme is the root React component of our theme. The one we will export
 * in roots.
 */
const Theme = ({ state }) => {
  // Get information about the current URL.
  const data = state.source.get(state.router.link);

  return (
    <>
      {/* Add some global styles for the whole site, like body or a's. 
      Not classes here because we use CSS-in-JS. Only global HTML tags. */}
      <Global styles={css(BootstrapCss)} />
      <Global styles={css(gutenbergStyle)} />
      <Global styles={css(gutenbergTheme)} />
      <Global styles={customStyle} />
      <Global styles={globalStyles} />

      {/* Loads fonts. */}
      <FontFace />

      {/* Loads darkmode. */}
      <DarkMode />
      
      {/* Add some metatags to the <head> of the HTML. */}
      <Head>
        <link rel="preconnect" href={state.source.url} />
        <html lang="en" />
        <link rel="shortcut icon" type="image/jpg" href={favicon} />
      </Head>

      {/* Add the header of the site. */}
      <HeadContainer>
        <Header />
      </HeadContainer>

      {/* Add the main section. It renders a different component depending
      on the type of URL we are in. */}
      <Main>
        <Switch>
          <Loading when={data.isFetching} />
          <List when={data.isArchive} />
          <HomePage when={data.isHome} />
          <Page when={data.isPage} />
          <Post when={data.isPostType} />
          <PageError when={data.isError} />
        </Switch>
      </Main>

      {/* Add the footer of the site. */}
      <FooterContainer>
        <Footer />
      </FooterContainer>
    </>
  );
};

export default connect(Theme);

const globalStyles = css`
  * {
    transition: color var(--transition);
    transition: background-color var(--transition);
  }
  html {
    box-sizing: border-box;
  }
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
  body {
    margin: 0;
    font-family: "Roboto", sans-serif;
    background-color: var(--background);
    color: var(--text);
  }
  p {
    font-family: "Roboto", sans-serif;
    font-size: var(--textsize);
    color: var(--text);
    line-height: 1.7;
    transition: font-size var(--transition) !important;
  }
  ul {
    font-size: var(--textsize);
    transition: font-size var(--transition) !important;
  }
  li {
    margin: 1rem auto !important;
    font-size: var(--textsize);
    transition: font-size var(--transition) !important;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Poppins", sans-serif;
    font-weight: 600;
    color: var(--text);
    transition: font-size var(--transition) !important;
  }
  h1 {
    font-size: var(--h1size);
  }
  h2 {
    font-size: var(--h2size);
  }
  h3 {
    font-size: var(--h3size);
  }
  h4 {
    font-size: var(--h4size);
  }
  h5 {
    font-size: var(--h5size);
  }
  h6 {
    font-size: var(--h6size);
  }
  a {
    color: var(--link);
    font-size: var(--asize);
    transition: font-size var(--transition) !important;
  }
  #root {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  .container {
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    position: relative;
    padding-right: 15px;
    padding-left: 15px;
  }
  .section {
    padding: 34px 0;
    @media (min-width: 992px) {
      padding: 50px 0;
    }
  }
`;

const HeadContainer = styled.div`
  height: 81px;
`;

const FooterContainer = styled.div`
  display: flex;
  width: 100%;
  // margin-top: auto;
`;

const Main = styled.div`
  display: flex;
  justify-content: center;
`;
