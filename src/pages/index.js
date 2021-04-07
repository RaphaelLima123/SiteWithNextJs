import React from 'react';
import Head from 'next/head';
import Banner from '../components/Banner';
import BannerService from '../components/BannerService';
import BannerContact from '../components/BannerContact';
import Header from '../components/Header';
import Footer from '../components/Footer';
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
        <BannerService/>
        <BannerContact/>
        <Footer/>
      </main>
    </div>
  )
}
