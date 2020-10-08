import Head from "next/head";
import { useState, useEffect } from "react";
import { getGames } from "../../shared/dataUtil";
import { filterGames } from "../../shared/filterUtils";
import FloatingBox from "../components/FloatingBox";
import GameItem from "../components/GameItem";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [games, setGames] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getGames().then((res) => setGames(res));
  }, []);

  function handleChange(e) {
    setSearch(e.target.value);
  }

  const visibleGames = filterGames(games, search);
  const showWtf = visibleGames.length < 1;

  return (
    <div className={styles.container}>
      <Head>
        <title>Game Overkill | React</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <header className={styles.header}>
          <h1 className={styles.title}>
            These are, like, cool games or whatever
          </h1>
        </header>
        <FloatingBox>
          <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className={styles.fieldLabel} htmlFor="search">
                Search if you want to. Or don't.
              </label>
              <input
                id="search"
                className={styles.input}
                type="text"
                value={search}
                onChange={handleChange}
              />
            </div>
          </form>
        </FloatingBox>

        <div className={styles.content}>
          {visibleGames.length > 0 ? (
            <ol className={styles.list}>
              {visibleGames.map(({ name, platform }) => (
                <GameItem
                  key={`${platform}-${name}`}
                  name={name}
                  platform={platform}
                />
              ))}
            </ol>
          ) : (
            <p className={styles.notFound}>
              "{search}" ain't no game I've ever heard of
            </p>
          )}
        </div>
        {showWtf && <p>Why would you even search for that?!</p>}
      </main>
    </div>
  );
}
