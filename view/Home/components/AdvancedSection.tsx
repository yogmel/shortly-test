import Image from "next/image";

import advancedSectionSyles from "../styles/AdvancedSection.module.scss";
import layoutStyles from "view/shared/styles/Layout.module.scss";
import { advancedSectionData } from "model/data";

export default function AdvancedSection() {
  return (
    <section className={advancedSectionSyles.section}>
      <div className={layoutStyles.grid}>
        <h2>Advanced Statistics</h2>
        <p className="subtitle">
          Track how your links are performing across the web with our advanced
          statistics dashboard
        </p>

        <div className={advancedSectionSyles.cards}>
          {advancedSectionData.map((data) => (
            <div className={advancedSectionSyles.card}>
              <div className={advancedSectionSyles.cardIcon}>
                <Image src={data.icon.src} alt={data.icon.alt} />
              </div>
              <h3>{data.title}</h3>
              <p className="subtitle">{data.description}</p>
            </div>
          ))}
          <div className={advancedSectionSyles.timeline}></div>
        </div>
      </div>
    </section>
  );
}
