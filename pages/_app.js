import "../styles/globals.css";
import { NhostApolloProvider } from "@nhost/react-apollo";
import { NhostProvider, NhostClient } from "@nhost/nextjs";
import Layout from "../components/Layout";

const nhost = new NhostClient({
  subdomain: "uqotmunlyoibwkkwaueg",
  region: "eu-central-1",
});

function MyApp({ Component, pageProps }) {
  return (
    <NhostProvider nhost={nhost} initial={pageProps.nhostSession}>
      <NhostApolloProvider nhost={nhost}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </NhostApolloProvider>
    </NhostProvider>
  );
}

export default MyApp;
