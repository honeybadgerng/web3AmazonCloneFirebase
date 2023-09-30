import Head from "next/head";
import styles from "/styles/Home.module.css";

import Header from "../components/header";
import SubHeader from "../components/subHeader";
import ProductComp from "../components/productComp";

export default function Product() {
  return (
    <section className={styles.container}>
      <Head>
        <title>Xclusive Crypto Mart</title>
      </Head>
      <main>
        <Header />
        <SubHeader />
        <ProductComp />
      </main>
    </section>
  );
}
