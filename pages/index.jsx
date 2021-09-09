import Header from "../src/components/header/header";

import SectionFirst from "../src/components/section-first/section-first.jsx";
import SectionSecond from "../src/components/section-second/section-second.jsx";
import SectionThird from "../src/components/section-third/section-third.jsx";
import SectionVantages from "../src/components/section-vantages/section-vantages.jsx";
import SectionFooter from "../src/components/section-footer/section-footer.jsx";
import SectionMission from "../src/components/section-mission/section-mission.jsx";
import styles from './home/home.module.scss';
export default function Home() {

  return (
    <div className={styles.container}>
      <Header/>
      <SectionFirst/>
      <SectionSecond/>
      <SectionVantages/>
      <SectionThird/>
      <SectionMission/>
      <SectionFooter/>
    </div>
  )
}
