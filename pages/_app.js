import "../styles/globals.css";
import Navbar from "../componenets/navbar";
import Head from "next/head";

const app = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Ankit Jha Portfolio</title>
        {/* <!-- bootstrap CSS only --> */}
        {/* <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx"
          crossorigin="anonymous"
        ></link> */}
        {/* <!-- JavaScript Bundle with Popper --> */}
        {/* <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa"
          crossorigin="anonymous"
        ></script> */}
      </Head>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
};

export default app;
