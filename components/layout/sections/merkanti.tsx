"use client";
import React from "react";
import { InstagramEmbed } from "react-social-media-embed";

export default function Merkanti() {
  return (
    <div className='w-full container flex flex-col items-center justify-center'>
      <h2
        dir='rtl'
        className='mb-10 text-3xl text-primary w-11/12 border-2 text-center py-6 rounded border-white '
      >
        بعض من فيديوات الـExpert
      </h2>
      <div className='flex justify-center lg:flex-row flex-col '>
        <InstagramEmbed
          url='https://www.instagram.com/reel/Ct1sXgkohkh/'
          width={328}
        />
        <InstagramEmbed
          url='https://www.instagram.com/reel/C9-aRAII2zk/'
          width={328}
        />

        <InstagramEmbed
          url='https://www.instagram.com/reel/Cvh65pcoda6/'
          width={328}
        />
      </div>
    </div>
  );
}
