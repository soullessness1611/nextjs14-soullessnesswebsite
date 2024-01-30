"use client";

import Link from "next/link";
import styles from "./page.module.css";
import Typewriter from "typewriter-effect";
import Image from "next/image";

const Home = () => {
  return (
    <>
      <h1>Home Page</h1>
      <section className={styles.section__header}>
        <div className={styles.max__width}>
          <div className={styles.header__text1}>
            <span>Welcome to ...</span>
          </div>
          <div className={styles.header__text2}>
            <span>SouLLesSNesS.com</span>
          </div>
          <div className={styles.header__text3}>
            <span>
              <Typewriter
                options={{
                  strings: [
                    "This's website for Learning Dhamma (Zen Buddhism Practice)",
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 50,
                }}
              />
            </span>
          </div>
          <div className="topic__links">
            <Link href="#etymplogy" className="btn__link">
              Zen Etymplogy
            </Link>
            <Link href="#practice" className="btn__link">
              Zen Prictice
            </Link>
            <Link href="#doctrine" className="btn__link">
              Zen Doctrine
            </Link>
          </div>
        </div>
      </section>
      <section className={styles.section__columns}>
        <h2 className={styles.topic}>Zen Etymplogy</h2>
        <div className={styles.columns__max__width}>
          <div className={styles.left__column}>
            <Image
              src="https://source.unsplash.com/626x626/?zen,stones"
              width={626}
              height={626}
              alt=""
              className={styles.left__column__image}
            />
          </div>
          <div className={styles.right__column}>
            <p>
              The word Zen is derived from the Japanese pronunciation (kana:
              ぜん) of the Middle Chinese word 禪 (Middle Chinese: [dʑian];
              pinyin: Chán), which in turn is derived from the Sanskrit word
              dhyāna (ध्यान), which can be approximately translated as
              contemplation, absorption, or meditative state. The actual Chinese
              term for the Zen school is 禪宗 (pinyin: Chánzōng), while Chan
              just refers to the practice of meditation itself (Chinese: 習禪;
              pinyin: xíchán) or the study of meditation (Chinese: 禪學; pinyin:
              chánxué) though it is often used as an abbreviated form of
              Chánzong. Zen is traditionally a proper noun as it usually
              describes a particular Buddhist sect. In more recent times, the
              lowercase zen is used when discussing the philosophy and was
              officially added to the Merriam-Webster dictionary in 2018.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.section__cards}>
        <div className={styles.cards__max__width}>
          <div className={styles.cards} style={{display: "grid", gridTemplateColumns:"1fr 1fr 1fr"}}>
            <div className={styles.box}>
              <Image
                src="https://fuelfit.com.sg/wp-content/uploads/2017/06/FuelFit-Tired-and-Wired_Mindfulness-Meditation.jpg"
                width={200}
                height={200}
                alt=""
                className={styles.box__image}
              />
              <div>
                <h3>Dhyāna</h3>
                <ul style={{ marginLeft: "-45px", fontSize: "12px"}}>
                  <li>Buddhist meditation</li>
                  <li>Pointing to the nature of the mind</li>
                  <li>Observing the mind</li>
                  <li>Meditation manuals</li>
                </ul>
              </div>
            </div>
            <div className={styles.box}>Section 2 Home Content Card 2</div>
            <div className={styles.box}>Section 2 Home Content Card 3</div>
          </div>
        </div>
      </section>
      <section className={styles.section__columns}>
        <div className={styles.columns__max__width}>
          <div className={styles.left__column}>
            <p>Section 3 Home Centent column left</p>
          </div>
          <div className={styles.right__column}>
            <p>Section 3 Home Centent column right</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
