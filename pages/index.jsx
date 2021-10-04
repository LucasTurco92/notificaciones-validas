import Header from "../src/components/header/header";

import SectionFirst from "../src/components/section-first/section-first.jsx";
import SectionPropose from "../src/components/section-propose/section-propose.jsx";
import SectionHowItWork from "../src/components/section-how-it-work/section-how-it-work.jsx";
import SectionVantages from "../src/components/section-vantages/section-vantages.jsx";
import SectionFooter from "../src/components/section-footer/section-footer.jsx";
import SectionMission from "../src/components/section-mission/section-mission.jsx";
import styles from './home/home.module.scss';
export default function Home() {

  return (
    <div className={styles.container}>
      <Header/>
      <SectionFirst/>
      <SectionPropose/>
      <SectionVantages/>
      <SectionHowItWork/>
      <SectionMission/>
      <SectionFooter/>
    </div>
  )
}
