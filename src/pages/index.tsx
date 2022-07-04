import type { NextPage } from 'next';
import React from 'react';
import Head from 'next/head';
import RenderCard from '../components/Content';
import NavBar from '../components/NavBar';


const Home: NextPage = () => {

  return (
    <>
      <Head>
        <title>Wine</title>
        <meta name="description" content="WineShop" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />        
      <RenderCard />
    </>
  );
};

export default Home;
