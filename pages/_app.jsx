// import 'antd/dist/antd.less';
import Head from 'next/head';
import InputContext from '../context/InputContext';
import MainLayout from '../layouts/MainLayout';
import Theme from '../styles/StyledComponentsTheme';

const App = ({ Component, pageProps }) => {
  console.log();

  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href="/images/logos/logo-kun-figur.png" />
        <title>Gibbs.no - Søknadsportal</title>
      </Head>
      <Theme>
        <InputContext>
          <MainLayout>
            <Component {...pageProps} />
          </MainLayout>
        </InputContext>
      </Theme>
    </>
  );
};

export default App;
