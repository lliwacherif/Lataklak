"use client";
import React from "react";
import { Button } from "./button";
import { ArrowRight, Library } from "lucide-react";
import Link from "next/link";

export default function RegisterButton() {
  const scrollToContact = () => {
    const contactElement = document.getElementById("contact");
    if (contactElement) {
      window.scrollTo({
        top: contactElement.offsetTop,
        behavior: "smooth",
      });
    }
  };
  return (
    <Button
      className='w-5/6 md:w-1/4 font-bold group/arrow'
      onClick={scrollToContact}
    >
      S{"'"}inscrire
      <ArrowRight className='size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform' />
    </Button>
  );
}
