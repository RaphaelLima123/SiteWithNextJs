import Head from 'next/head';
import Banner from '../components/Banner';
import Header from '../components/Header';
import OurServices from '../components/OurServices';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Innova Bh</title>
      </Head>
      <main>
        <Header/>
        <Banner/>
        <OurServices/>
      </main>
    </div>
  )
}
