import Head from 'next/head';
import NavDesktop from "../nav/nav-desktop/nav-desktop";
import NavMobile from "../nav/nav-mobile/nav-mobile";
import useResponsiveWindow from '../../hooks/responsiveWindow';
const Header=()=>{
  const { isDesktop } = useResponsiveWindow();
  return (
    <div>
      <Head>
        <title>Notificaciones Válidas</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link href={"https://fonts.googleapis.com/css2?family=Cormorant+Infant:wght@300&family=Montserrat:wght@200;400&display=swap"} rel="stylesheet"/>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href={"https://fonts.googleapis.com/css2?family=Cormorant+Infant:wght@300&family=Montserrat:wght@200;400&display=swap"} rel="stylesheet"/>
      </Head>
      { isDesktop ? <NavDesktop/> : <NavMobile/> }
    </div>
  )
}

export default Header