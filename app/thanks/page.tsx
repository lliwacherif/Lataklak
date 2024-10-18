import React from "react";

export default function Thanks() {
  return (
    <div>
      <div className='container w-full mt-20 text-center'>
        <h2 dir='rtl' className='text-5xl'>
          شكرا على ثيقتك فينا !
        </h2>
        <h2 dir='rtl' className='text-3xl mt-16'>
          خلي تاليفونك بحذاك بش نكلموك على confirmation
        </h2>
        <h2 dir='rtl' className='text-3xl mt-4'>
          هذا رابط الـgroup متاعنا الي بش نتعلمو فيه أكثر.
        </h2>
        <h2 dir='rtl' className='text-2xl mt-4'>
          <a
            href='https://www.facebook.com/groups/academy.xposure.tn'
            target='_blank'
          >
            {" "}
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
    </div>
  );
}
