import React, { useState, useEffect } from "react";
import Footer from "./Footer";
import Navbar from "./navbar";
import barcode from "../Asset/barcode.png";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function PrintTicket() {
  const [data, setData] = useState([]);
  const { id } = useParams();
  const url = process.env.REACT_APP_API_URL + `/concerts/${id}`;

  useEffect(() => {
    axios.get(url).then((res) => {
      setData(res.data.data);
      console.log(res.data.data);
    });
  }, []);
  return (
    <div>
      <Navbar />
      <div className="flex flex-col py-[100px] items-center">
        <img src={barcode} alt="logo" className="" />
        <h1 className="text-[32px] text-dark font-bold mt-[40px]">
          {data.name}
        </h1>
        <h1 className="text-[16px] text-[#5D6B77] mt-2">{data.startDate} - {data.endDate}</h1>
        <div className="w-[624px] h-min-content bg-white rounded mt-[30px] py-[24px] px-[20px] shadow-[0px_0px_4px_rgba(0,0,0,0.2)]">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <h1 className="text-[14px] w-[169px] text-start text-[#495966]">
                Kode Tiket
              </h1>
              <h1>:</h1>
            </div>
            <h1 className="ml-[12px] text-dark font-medium text-[16px]">
              {data.serial_number}
            </h1>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <h1 className="text-[14px] w-[169px] text-start text-[#495966]">
                Harga Tiket
              </h1>
              <h1>:</h1>
            </div>
            <h1 className="ml-[12px] text-dark font-medium text-[16px]">
              Rp. 321.000
            </h1>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <h1 className="text-[14px] w-[169px] text-start text-[#495966]">
                Nama
              </h1>
              <h1>:</h1>
            </div>
            <h1 className="ml-[12px] text-dark font-medium text-[16px]">
              Najma Syarifa Rahmah
            </h1>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <h1 className="text-[14px] w-[169px] text-start text-[#495966]">
                Email
              </h1>
              <h1>:</h1>
            </div>
            <h1 className="ml-[12px] text-dark font-medium text-[16px]">
              user@gmail.com
            </h1>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <h1 className="text-[14px] w-[169px] text-start text-[#495966]">
                Tanggal Lahir
              </h1>
              <h1>:</h1>
            </div>
            <h1 className="ml-[12px] text-dark font-medium text-[16px]">
              14-02-2000
            </h1>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <h1 className="text-[14px] w-[169px] text-start text-[#495966]">
                Jenis Kelamin
              </h1>
              <h1>:</h1>
            </div>
            <h1 className="ml-[12px] text-dark font-medium text-[16px]">
              Perempuan
            </h1>
          </div>
          <div className="flex justify-between mt-[12px]">
            <div className="flex items-center">
              <h1 className="text-[14px] w-[169px] text-start text-[#495966]">
                Biaya Admin
              </h1>
              <h1>:</h1>
            </div>
            <h1 className="ml-[12px] text-end text-dark font-medium text-[16px]">
              -
            </h1>
          </div>
          <div className="w-full border-t border-[#C2C8CC] my-[16px] border-dashed"></div>
          <div className="flex justify-between mt-[12px]">
            <div className="flex items-center">
              <h1 className="text-[16px] w-[169px] text-start text-dark font-semibold">
                Total Bayar
              </h1>
              <h1>:</h1>
            </div>
            <h1 className="ml-[12px] text-end text-dark font-bold text-[24px]">
              Rp. {data.price}
            </h1>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
