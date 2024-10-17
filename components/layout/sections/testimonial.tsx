"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import RegisterButton from "@/components/ui/register";
import { Star } from "lucide-react";
import Image from "next/image";

interface ReviewProps {
  image: string;
  name: string;
  userName: string;
  comment: string;
  rating: number;
}

const reviewList: ReviewProps[] = [
  {
    image: "",
    name: "Sadok B'z",
    userName: `E-commerçant tunisien`,
    comment: `J’ai eu l’honneur de participer à votre formation sur le thème de la publicité facebook
  Cette formation m’a permis de consolider mes connaissances et de confirmer ma passion pour le domaine de publicité
  Merci bcp Rayane Daghar`,
    rating: 4.8,
  },
  {
    image: "/test1.png",
    name: `BK`,
    userName: "E-commerçant tunisien",
    comment: `قعدت 48 ساعة بعد الفورماسيون معطيتش رأيي حبيت نجرب الي تعلمناه
  بعد 24 ساعة فهمت إلى انا نجم نستهلِك ثلث الوقت الي كنت نعديه على الPC قبل و نحقق نتائج خير
  و بعد 48 ساعة استنتجت الي انا كنت نخسر في برشا فلوس على خاطر كنت مش فاهم في نهارين تحسنو النتائج و نتصور نجم نزيد نحسن اكثر
  `,
    rating: 5.0,
  },

  {
    image: "",
    name: "Ghaya Zouèghi",
    userName: `Etudiante`,
    comment: `Je veux remercier Rayane Daghar pour la qualité de sa formation concernant 'la publicité sur Facebook', vraiment la formation a été très solide, et pertinente et complète qui reflète les qualité et les compétences du formateur.
Juste après la formation, en appliquant ce que j'ai appris, j'ai lancé seulement ma propre campagne et j'étais surprise par les performances de la publicité.`,
    rating: 4.8,
  },
  {
    image: "/test4.png",
    name: "Boutheina Tounsi",
    userName: ``,
    comment: ``,
    rating: 4.8,
  },
  // {
  //   image: "/test5.png",
  //   name: "Amal Khlif",
  //   userName: ``,
  //   comment: ``,
  //   rating: 4.8,
  // },
];

export const TestimonialSection = () => {
  return (
    <section id='testimonials' className='container py-24 sm:py-32'>
      <div className='text-center mb-8'>
        <h2 className='text-lg text-primary text-center mb-2 tracking-wider'>
          Témoignages
        </h2>

        <h2 className='text-3xl md:text-4xl text-center font-bold mb-4'>
          les avis de nos étudiants
        </h2>
      </div>

      <Carousel
        opts={{
          align: "start",
        }}
        className='relative w-[80%] sm:w-[90%] lg:max-w-screen-xl mx-auto'
      >
        <CarouselContent>
          {reviewList.map((review) => (
            <CarouselItem
              key={review.name}
              className='md:basis-1/2 lg:basis-1/3'
              dir={"rtl"}
            >
              <Card className='bg-muted/50 dark:bg-card'>
                <CardContent className='pt-6 pb-0'>
                  <div className='flex gap-1 pb-6'>
                    <Star className='size-4 fill-primary text-primary' />
                    <Star className='size-4 fill-primary text-primary' />
                    <Star className='size-4 fill-primary text-primary' />
                    <Star className='size-4 fill-primary text-primary' />
                    <Star className='size-4 fill-primary text-primary' />
                  </div>
                  {review.image.length == 0 ? (
                    <div>{review.comment}</div>
                  ) : (
                    <Image alt='' src={review.image} width={300} height={100} />
                  )}
                </CardContent>

                <CardHeader>
                  <div className='flex flex-row items-center gap-4'>
                    <Avatar>
                      <AvatarImage src='' alt='radix' />
                      <AvatarFallback>{review.name[0]}</AvatarFallback>
                    </Avatar>

                    <div className='flex flex-col'>
                      <CardTitle className='text-lg'>{review.name}</CardTitle>
                      <CardDescription>{review.userName}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className='w-full mt-2 flex items-center justify-center'>
        <RegisterButton />
      </div>
    </section>
  );
};
