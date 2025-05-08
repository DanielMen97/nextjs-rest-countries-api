import Image from "next/image";
import styles from "./page.module.scss";
import loupe from "../../public/loupe.svg";
import moon from "../../public/moon.svg";

export default function Home() {
  return (
    <>
      <header className={`${styles.header} center-between`}>
        <h1 className={styles.title}>Where in the world?</h1>
        <button className={`${styles.toogleDarkMode} center`}>
          <Image src={moon} alt="moon icon" width={20} height={20} />
          Dark Mode
        </button>
      </header>
      <main className={styles.main}>
        <form className={`${styles.form} center-between`}>
          <label htmlFor="search" className={styles.label}>
            <Image
              src={loupe}
              alt="search icon"
              width={20}
              height={20}
              className={styles.searchIcon}
            />
          <input
            type="text"
            className={styles.input}
            placeholder="Search for a country..."
          />
          </label>
          <select className={styles.select}>
            <option value="africa">Africa</option>
          </select>
        </form>
        <section className={styles.countries}>
          <article className={styles.country}>
            <Image
              src="https://flagcdn.com/af.svg"
              alt="country flag"
              width={300}
              height={200}
            />
            <h2 className={styles.countryName}>Afghanistan</h2>
            <p className={styles.countryInfo}>Population: 38,928,346</p>
            <p className={styles.countryInfo}>Region: Asia</p>
            <p className={styles.countryInfo}>Capital: Kabul</p>
          </article>
          {/* Add more country cards here */}
        </section>
      </main>
    </>
  );
}
