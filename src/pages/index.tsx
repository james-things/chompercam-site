import Head from 'next/head';

import { CamEmbed } from '../components/CamEmbed';
import { Footer } from '../components/Footer';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <div>
      <Head>
          <title>chomper.live - Chomper Cam!</title>
      </Head>
      <Navbar />
      <CamEmbed />
      <Footer />
    </div>
  );
}
