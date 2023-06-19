"use client";
/* eslint-disable react/no-children-prop */


import dynamic from "next/dynamic";

const Home = dynamic(() => import("../components/pages/HomePage/HomePage"), {
  ssr: false,
});

export default Home;
