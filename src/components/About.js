import React from "react";
// import { useEffect } from 'react'
import { Carousel } from "flowbite-react";
import Navbar from "./navbar";
import Footer from "./Footer";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
        <Carousel>
          <img
            src="https://img.freepik.com/free-vector/black-friday-sale-banner-with-limited-time-offer-details_1017-28051.jpg?w=2000"
            alt="..."
          />
          <img
            src="https://image.shutterstock.com/shutterstock/photos/1408869659/display_1500/stock-vector-promo-merdeka-banner-design-vector-1408869659.jpg"
            alt="..."
          />
        </Carousel>
      </div>
      <div className="containerTable">
        <div className="container mx-auto mt-10">
          <h1 className="text-xl font-bold text-center">Tentang Kami</h1>
          <h1 className="text-center text-s">
            TiketApaSaja adalah sebuah portal pembelian tiket berbasis digital yang
            dapat memberikan manfaat kepada orang banyak khususnya para pencari
            tiket konser ataupun event agar bisa mendapatkan tiket dengan harga
            terjangkau.
          </h1>
          <br />
          <br />
          <h1 className="text-xl font-bold text-center">Kontak Kami</h1>
          <h1 className="text-center text-s">+62 816-961-728</h1>
          <h1 className="text-center text-s">
            Jl. Godean KM. 4 No.66, Kwarasan, Nogotirto, Gamping, Sleman
            Regency, Special Region of Yogyakarta 55293, Indonesia
          </h1>
          <h1 className="text-center text-s">info@tiketapasaja.co.id</h1>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
