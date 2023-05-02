import Head from "next/head";
import styles from "@/styles/Home.module.scss";

export default function Home() {
	return (
		<>
			<Head>
				<title>BudWorks</title>
				<meta
					name="description"
					content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className={styles.main}>
				<div className={styles.welcome}></div>
			</main>
		</>
	);
}
