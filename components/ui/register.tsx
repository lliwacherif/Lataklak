import React from "react";
import { Button } from "./button";
import { ArrowRight } from "lucide-react";

export default function RegisterButton() {
  return (
    <Button className='w-5/6 md:w-1/4 font-bold group/arrow'>
      S{"'"}inscrire
      <ArrowRight className='size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform' />
    </Button>
  );
}
