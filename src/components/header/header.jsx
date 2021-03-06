import Head from 'next/head';
import NavMobile from "../nav/nav-bar/nav-bar";
const Header=()=>{
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
      <NavMobile/>
    </div>
  )
}

export default Header