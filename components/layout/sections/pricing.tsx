// Top of your component file
"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

enum PopularPlan {
  NO = 0,
  YES = 1,
}

interface PlanProps {
  title: string;
  popular: PopularPlan;
  price: number;
  description: string;
  buttonText: string;
  benefitList: string[];
}

const plans: PlanProps[] = [
  {
    title: "ثمن الإشتراك",
    popular: 1,
    price: 197,
    description: "",
    buttonText: "اشترك معنا",
    benefitList: [
      "اشتراك مدى الحياة",
      "فيديوات بالتونسي",
      "أكثر من 17 درس",
      "أمثلة تطبيقية",
      "مجموعة خاصة عالـFacebook",
    ],
  },
];

const formatTime = (seconds: number) => {
  const hrs = Math.floor(seconds / 3600);
  const mins = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;
  return `${hrs.toString().padStart(2, "0")}:${mins
    .toString()
    .padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
};

const PricingSection = () => {
  // Set the initial countdown time (12 hours = 12 * 60 * 60 seconds)
  const initialTime = 12 * 60 * 60;
  const [timeLeft, setTimeLeft] = useState(initialTime);

  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    // Update the countdown every second
    const timer = setInterval(() => {
      setTimeLeft((prevTime: any) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className='container text-left py-24 sm:py-32'
      style={{ marginTop: -100 }}
    >
      <h2
        dir='rtl'
        className='text-4xl font-bold text-white text-center mb-2 tracking-wider'
      >
        تخلصنا مرة وحدة!
      </h2>

      <h2 className='text-3xl md:text-4xl text-center  mb-4'>Accès à vie</h2>

      <h3 className='md:w-1/2 mx-auto text-xl text-center text-muted-foreground pb-14'>
        <span>التخفيض يوفى بعد</span>
        <br />
        <h2 className='text-2xl text-red-500'> {formatTime(timeLeft)}</h2>
      </h3>

      <div className='flex items-center justify-center'>
        {plans.map(
          ({ title, popular, price, description, buttonText, benefitList }) => (
            <Card
              key={title}
              className={
                popular === PopularPlan?.YES
                  ? "drop-shadow-xl shadow-black/10 dark:shadow-white/10 border-[1.5px] border-primary lg:scale-[1.1] "
                  : ""
              }
              style={{
                width: width >= 720 ? width / 3.8 : "",
              }}
            >
              <CardHeader>
                <CardTitle className='pb-2 text-right '>{title}</CardTitle>

                <CardDescription className='pb-4 text-right '>
                  {description}
                </CardDescription>

                <div className='text-center' style={{ scale: 1.45 }}>
                  <span className='text-3xl font-bold flex flex-col justify-center '>
                    <span className='text-green-500'>197 TND</span>
                    <del className='text-lg text-red-500'>247 TND</del>
                  </span>
                </div>
              </CardHeader>

              <CardContent dir='rtl' className='flex'>
                <div className='space-y-4'>
                  {benefitList.map((benefit) => (
                    <span key={benefit} className='flex'>
                      <Check className='text-primary ml-2' />
                      <h3>{benefit}</h3>
                    </span>
                  ))}
                </div>
              </CardContent>

              <CardFooter className='flex items-center justify-center'>
                <Button
                  variant={
                    popular === PopularPlan?.YES ? "default" : "secondary"
                  }
                  className='w-full lg:w-1/3'
                >
                  <Link href='#contact'>{buttonText}</Link>
                </Button>
              </CardFooter>
            </Card>
          )
        )}
      </div>
    </section>
  );
};

export default PricingSection;
