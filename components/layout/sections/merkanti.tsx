"use client";
import React from "react";
import { InstagramEmbed } from "react-social-media-embed";

export default function Merkanti() {
  return (
    <div className='w-full container flex flex-col items-center justify-center'>
      <h2 className='mb-10 text-2xl text-primary '>
        Notre Formateur Sur instagram
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
