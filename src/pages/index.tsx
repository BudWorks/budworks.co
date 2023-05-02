import Head from "next/head";
import Image from "next/image";
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
				<div className={styles.welcome}>
					<div className={styles.onboarding}>
						<div className={styles.onboarding__logo}>
							<Image src="/svg/logos/budworks_stack.svg" alt="BudWorks" fill />
						</div>
					</div>
				</div>
			</main>
		</>
	);
}
