import React from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import "./hero.css";

const Hero = () => {
  const { t } = useTranslation();
  return (
    <>
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-text">
            <h1>{t("hero.title")}</h1>
            <Image
              className="hero-img"
              style={{ position: "relative" }}
              src="/images/sprinkler-with-lawn.jpg"
              alt={"Rasen bewässerung"}
              width={400}
              height={400}
            />
            <p className="hero-motto">{t("hero.motto")}</p>
            <p className="hero-motto">{t("hero.subline")}</p>
          </div>
        </div>
      </section>
      <div className="post-hero">{t("postHero")}</div>
      <a
        style={{ marginRight: "5px" }}
        href="mailto:info@gartendienst-wien.at"
        className="cta-button"
      >
        Gratis Besichtigung anfragen
      </a>
      <a
        href="https://wa.me/436608956377"
        target="_blank"
        rel="noopener noreferrer"
        className="cta-button whatsapp-button"
      >
        WhatsApp Nachricht senden
      </a>
    </>
  );
};

export default Hero;
