import Image from "next/image";
import styles from "./page.module.scss";
import loupe from "../../public/loupe.svg";
import moon from "../../public/moon.svg";

export default async function Home() {
  const res = await fetch("https://restcountries.com/v3.1/all");
  if (!res.ok) {
    throw new Error("Failed to fetch data");    
  }

  const countries = await res.json();

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
          <label htmlFor="search" className={`${styles.label} center`}>
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
            <option value="africa">Filter by Region</option>
          </select>
        </form>
        <section className={styles.countries}>

          {/* Map through the countries data and display each country */}
          {countries.map((country: any) => (
            <article key={country.name.common} className={styles.country}>
              <Image
                src={country.flags.svg}
                alt="country flag"
                className={styles.flag}
                width={300}
                height={200}
              />
              <h2 className={styles.name}>{country.name.common}</h2>
              <p className={styles.info}>
                Population: {country.population.toLocaleString()}
              </p>
              <p className={styles.info}>Region: {country.region}</p>
              <p className={styles.info}>Capital: {country.capital}</p>
            </article>
          ))}
        </section>
      </main>
    </>
  );
}
