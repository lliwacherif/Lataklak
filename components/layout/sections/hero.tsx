"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import RegisterButton from "@/components/ui/register";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";

export const HeroSection = () => {
  const { theme } = useTheme();
  return (
    <section className='container w-full'>
      <div className='grid place-items-center lg:max-w-screen-xl gap-8 mx-auto py-20 md:py-32'>
        <div className='text-center space-y-8'>
          <div className='max-w-screen-md mx-auto text-center text-4xl md:text-6xl font-bold'>
            <h1 style={{ direction: "rtl" }}>
              بيع أكثر عالفيسبوك مهما يكون الـمنتوج/الخدمات متاعك
              {/* من الصفر
              <span className='ml-2 text-transparent px-2 bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text'>
                إلى النجاح
              </span>
              اتقن إعلانات Facebook وزد من مبيعاتك */}
            </h1>
          </div>

          <p
            style={{ direction: "rtl" }}
            className='max-w-screen-sm mx-auto text-xl text-muted-foreground'
          >
            {`نقدمولك مجموعة فيديوات يخليوك تتنقل من الـ0 لمستوى متقدم في الـSponsoring `}
          </p>

          <div className='space-y-4 md:space-y-0 md:space-x-4'>
            <RegisterButton />

            <Button
              asChild
              variant='secondary'
              className='w-5/6 md:w-1/4 font-bold'
            >
              <Link href='#'>Plus d'info</Link>
            </Button>
          </div>
        </div>

        <div className='relative group mt-14'>
          <div className='w-full md:w-[1200px] mx-auto rounded-lg relative rouded-lg leading-none flex items-center'>
            <iframe
              height={window.innerWidth > 720 ? "840" : "270"}
              style={{ borderRadius: 25, borderWidth: 0 }}
              className='w-full md:w-[1200px] mx-auto rounded-lg relative rouded-lg leading-none flex items-center border-0'
              src='https://www.youtube.com/embed/xZWq1rmIma4?si=-7l1K5FKNPyabjew'
              title='YouTube video player'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <RegisterButton />
      </div>
    </section>
  );
};
