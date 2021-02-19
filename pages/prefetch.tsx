import Head from "next/head";
import React from "react";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <nav>
          <ul>
            <li>
              <Link href="/sports">Sports</Link>
            </li>
          </ul>
        </nav>
      </main>
    </div>
  );
}
