import '../styles/tailwind.css';
import { storyblokInit, apiPlugin } from '@storyblok/react';
import Feature from '../components/Feature';
import Grid from '../components/Grid';
import Page from '../components/Page';
import Teaser from '../components/Teaser';
import Quote from '../components/Quote';

const components = {
  feature: Feature,
  grid: Grid,
  teaser: Teaser,
  page: Page,
  quote: Quote,
};

storyblokInit({
  accessToken: '3RWTWDI7BlPUEeI3gy5d2gtt',
  use: [apiPlugin],
  components,
  apiOptions: {
    region: "us" // region code here
  }
});

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
