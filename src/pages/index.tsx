import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
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
						<div className={styles.onboarding__button}>
							<Link href="/about">
								<Image src="/svg/buttons/buttontop.svg" alt="About" fill />
							</Link>
						</div>
						<div className={styles.onboarding__button}>
							<Link href="/explore">
								<Image src="/svg/buttons/buttonmiddle.svg" alt="Explore" fill />
							</Link>
						</div>
						<div className={styles.onboarding__button}>
							<Link href="#latest">
								<Image src="/svg/buttons/buttonbottom.svg" alt="News" fill />
							</Link>
						</div>
					</div>
				</div>
			</main>
		</>
	);
}
