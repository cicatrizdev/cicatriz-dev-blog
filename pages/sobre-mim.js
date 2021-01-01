import Head from "next/head";
import Container from "../components/container";
import Header from "../components/header";
import Layout from "../components/layout";
import PostHeader from "../components/post-header";

const Sobre = () => {
  return (
    <Layout>
      <Container> 
        <Header/>
          <>
            <article className="mb-32">
              <Head>
                <title>
                  Sobre mim | Cicatriz.DEV
                </title>
              </Head>
              <div>
                SOU EU CARAI
              </div>
            </article>
          </>
      </Container>
    </Layout>
  )
}

export default Sobre;
