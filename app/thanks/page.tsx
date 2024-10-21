"use client";
import React, { useEffect, useState } from "react";

const InvoiceComp = () => (
  <div className='container mx-auto p-4 bg-gray-800 mt-10'>
    <h2 className='text-2xl font-bold text-white mb-4'>Facture </h2>

    <table className='min-w-full bg-gray-900 shadow-md rounded'>
      <thead>
        <tr>
          <th className='py-2 px-4 bg-gray-700 text-left text-white font-bold'>
            Item
          </th>
          <th className='py-2 px-4 bg-gray-700 text-left text-white font-bold'>
            Qté
          </th>
          <th className='py-2 px-4 bg-gray-700 text-left text-white font-bold'>
            Prix unitaire
          </th>
          <th className='py-2 px-4 bg-gray-700 text-left text-white font-bold'>
            Total
          </th>
        </tr>
      </thead>
      <tbody>
        <tr className='border-b'>
          <td className='py-2 px-4'>Abonnement Formation Sponsoring</td>
          <td className='py-2 px-4'>1</td>
          <td className='py-2 px-4'>$197</td>
          <td className='py-2 px-4'>$197</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colSpan={3} className='py-2 px-4 text-right text-white font-bold'>
            Grand Total:
          </td>
          <td className='py-2 px-4 text-white font-bold'>$197</td>
        </tr>
      </tfoot>
    </table>
  </div>
);

export default function Thanks() {
  const [showRib, setShowRib] = useState(false);
  useEffect(() => {
    setShowRib(window.location.href.includes("rib"));
  }, []);
  return (
    <div>
      <div className='container w-full mt-20 text-center overflow-visible'>
        <h2 dir='rtl' className='text-5xl'>
          شكرا على ثيقتك فينا !
        </h2>
        <h2 dir='rtl' className='text-3xl mt-16'>
          خلي تاليفونك بحذاك بش نكلموك على confirmation
        </h2>
        <h2 dir='rtl' className='text-3xl mt-4'>
          هذا رابط الـgroup متاعنا الي بش نتعلمو فيه أكثر.
        </h2>
        <h2 dir='rtl' className='text-2xl mt-4 text-wrap'>
          <a
            href='https://www.facebook.com/groups/academy.xposure.tn'
            target='_blank'
            className='text-blue-400 text-center text-wrap'
          >
            https://www.facebook.com/groups/academy.xposure.tn
          </a>
        </h2>
        <h2 dir='rtl' className='text-2xl mt-4'>
          هذا رابط الـgroup متاعنا الي بش نتعلمو فيه أكثر.
        </h2>
        <h2 dir='rtl' className='text-4xl mt-4'>
          مرحبا بيك ونشوفوك في الـmasterclass
        </h2>
      </div>
      {showRib && (
        <h2 className='text-center mt-5 text-2xl text-primary'>
          {" "}
          Notre RIB : 04 094179 0079395810 91
        </h2>
      )}
      <InvoiceComp />
    </div>
  );
}
