import Head from "next/head";

export default function Home(props) {
  return (
    <>
      <Head>
        <title>"Next"</title>
      </Head>
      <section>
        <h2>Blog</h2>
      </section>
      <section>
        <p className="text-red-500">Hellow world !</p>
      </section>
    </>
  );
}
