import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';


function HomepageHeader() {
  return (
    <header className="hero">
      <div className="container">
        The purpose of this document is to provide a better understanding of the Dajaja domain. We will strive to keep the document updated.
        <br />
        <br />
        <div className="">
          <Link
            className="button button--secondary "
            to="/docs/GettingStart/intro">
            Basic Toturial for start the domjudge!
          </Link>
        </div>
      </div>
    </header >
  );
}

export default function Home() {
  return (
    <Layout
      title={`Hello from`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
