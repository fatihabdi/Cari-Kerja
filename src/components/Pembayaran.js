import React from "react";
import Navbar from "./navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";

export default function Pembayaran() {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col py-[100px] items-center mt-[24px]">
        <h1 className="text-[24px] text-dark font-bold mt-[40px]">
          Pembayaran
        </h1>
        <h1 className="text-[16px] text-[#5D6B77] mt-2 w-[624px]">
          Semua pembayaran dilakukan dengan cara transfer virtual account maupun
          transfer antar bank.
        </h1>
        <div>
          <h1 className="text-[18px] font-semibold mt-[28px] text-start text-[#253849]">
            Detail Harga
          </h1>
          <div className="w-[624px] h-[172px] bg-white rounded mt-[16px] py-[24px] px-[20px] shadow-[0px_0px_4px_rgba(0,0,0,0.2)]">
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
                  Total Tagihan
                </h1>
                <h1>:</h1>
              </div>
              <h1 className="ml-[12px] text-end text-dark font-bold text-[24px]">
                Rp. 321.000
              </h1>
            </div>
          </div>
          <h1 className="text-[18px] font-semibold mt-[28px] text-[#253849] text-start">
            Tujuan Pembayaran
          </h1>
          <div className="w-[624px] h-[96px] bg-white rounded gap-[24px] flex items-center mt-[16px] py-[24px] px-[20px] shadow-[0px_0px_4px_rgba(0,0,0,0.2)]">
            <div className="w-[178px]">
              <h1 className="text-[14px] text-start text-[#495966]">Bank</h1>
              <h1 className="text-dark font-semibold text-start text-[16px]">
                BCA
              </h1>
            </div>
            <div className="w-[178px]">
              <h1 className="text-[14px] text-start text-[#495966]">
                Atas Nama
              </h1>
              <h1 className="text-dark font-semibold text-start text-[16px]">
                tiketapasaja
              </h1>
            </div>
            <div className="w-[178px]">
              <h1 className="text-[14px] text-start text-[#495966]">
                Nomor Rekening
              </h1>
              <h1 className="text-dark font-semibold text-start text-[16px]">
                12345678910231212
              </h1>
            </div>
          </div>
          <h1 className="mt-[28px] text-start text-[20px] text-[#253849] font-semibold">
            Cara Pembayaran
          </h1>
          <ol className="mt-2 ml-5 list-decimal text-start" type="1">
            <li className="text-[#5D6B77] text-[16px]">
              Buka BCA mobile, pilih menu “m-Transfer”
            </li>
            <li className="text-[#5D6B77] text-[16px]">
              Pilih menu “BCA Virtual Account”
            </li>
            <li className="text-[#5D6B77] text-[16px]">
              Masukkan nomor BCA Virtual Account dan klik “Send”
            </li>
            <li className="text-[#5D6B77] text-[16px]">
              Cek nominal yang muncul.
            </li>
            <li className="text-[#5D6B77] text-[16px]">Masukkan PIN m-BCA.</li>
            <li className="text-[#5D6B77] text-[16px]">Transaksi Berhasil.</li>
          </ol>
          <Link to="/print-ticket">
            <button className="h-10 mt-5 font-semibold text-white bg-blue-500 rounded w-28">
              Bayar
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
