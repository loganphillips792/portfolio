import Layout from '../components/Layout';
import '../styles/globals.css';
// for code snippets in mdx files
import "prism-theme-night-owl";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp;

