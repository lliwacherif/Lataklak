"use client";
import { ArrowLeft, ChevronsDown, Menu } from "lucide-react";
import React, { useEffect, useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Separator } from "../ui/separator";
import { NavigationMenu } from "../ui/navigation-menu";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";
import RegisterButton from "../ui/register";

export const Navbar = () => {
  // Set the initial countdown time (12 hours = 12 * 60 * 60 seconds)
  const initialTime = 12 * 60 * 60;
  const [timeLeft, setTimeLeft] = useState(initialTime);

  const [isOpen, setIsOpen] = React.useState(false);

  const scrollToContact = () => {
    const contactElement = document.getElementById("contact");
    if (contactElement) {
      window.scrollTo({
        top: contactElement.offsetTop,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    // Update the countdown every second
    const timer = setInterval(() => {
      setTimeLeft((prevTime: any) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(timer);
  }, []);

  // Function to format the time into HH:MM:SS
  const formatTime = (seconds: number) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hrs.toString().padStart(2, "0")}:${mins
      .toString()
      .padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <header className='shadow-inner bg-opacity-15 w-[90%] md:w-[70%] lg:w-[75%] lg:max-w-screen-xl top-5 mx-auto sticky border border-secondary z-40 rounded-2xl flex justify-between items-center p-2 bg-card'>
      <Link href='/' className='font-bold text-lg flex items-center'>
        <Image
          src='/logo.jpg'
          alt='Xposure'
          width={"34"}
          height={"34"}
          className='rounded-lg w-9 h-9 mr-2 border'
          // className='bg-gradient-to-tr border-secondary from-primary via-primary/70 to-primary rounded-lg w-9 h-9 ml-2 border text-white'
        />
        Xposure
      </Link>
      {/* <!-- Mobile --> */}
      <div className='flex flex-col items-center w-4/12 lg:hidden'>
        <h2 className='text-2xl text-red-500'> {formatTime(timeLeft)}</h2>
        <h2>Promotion</h2>
      </div>

      {/* <!-- Desktop --> */}
      {!window.location.href.includes("thanks") && (
        <>
          <NavigationMenu className='hidden  relative left-20 lg:block mx-auto'>
            <h2 className='text-2xl text-red-600'>
              <span className='text-white'>Fin De La Promotion</span>
              {formatTime(timeLeft)}
            </h2>
          </NavigationMenu>

          <div className='hidden justify-end w-3/12 lg:flex'>
            <Button
              className='w-full md:w-2/4 font-bold group/arrow '
              onClick={scrollToContact}
            >
              <ArrowLeft className='size-5 mr-2 group-hover/arrow:translate-x-1 transition-transform' />
              اشترك معنا
            </Button>
          </div>
        </>
      )}
    </header>
  );
};
