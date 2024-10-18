"use client";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Building2, Clock, Mail, Phone } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useRouter } from "next/navigation";

const tunisianGovernorates = [
  "Ariana",
  "Beja",
  "Ben Arous",
  "Bizerte",
  "Gabes",
  "Gafsa",
  "Jendouba",
  "Kairouan",
  "Kasserine",
  "Kef",
  "Mahdia",
  "Manouba",
  "Mednine",
  "Monastir",
  "Nabeul",
  "Sfax",
  "Sidi Bouzid",
  "Siliana",
  "Sousse",
  "Tataouine",
  "Tozeur",
  "Tunis",
  "Zaghouan",
];

const formSchema = z.object({
  name: z.string().min(2).max(255),
  phone: z.string().min(8).max(12),
  email: z.string().email(),
  adress: z.string().min(2).max(255),
  occupation: z.string().min(2).max(255),
  city: z.string().min(2).max(255),
});

const extractReferrer = (url: string): string | null => {
  const regex = /[?&]referer=([^&]+)/;
  const match = url.match(regex);
  return match ? decodeURIComponent(match[1]) : null;
};

export const ContactSection = () => {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      adress: "Tunis Centre Ville",
      occupation: "",
      city: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const { name, phone, email, adress, occupation, city } = values;
    const referrer = extractReferrer(window.location.href);
    console.log(referrer);
    const req = await axios.post(`/api/submit`, { ...values, referrer });

    if (req.status == 200) {
      router.push("/thanks");
    }
  }

  return (
    <section
      id='contact'
      className='container flex items-center justify-center py-24 sm:py-32'
    >
      <section
        // className=''
        className='lg:w-4/6 '
      >
        <div>
          <div className='mb-4'>
            <h2 className='text-lg text-primary mb-2 tracking-wider'>
              Rejoignez nous
            </h2>
            <h2 className='text-3xl text-right md:text-4xl font-bold'>
              سجل معنا
            </h2>
          </div>
        </div>

        <Card className='bg-muted/60 dark:bg-card'>
          <CardHeader className='text-primary text-2xl'> </CardHeader>
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className='grid w-full gap-4'
              >
                <div className='flex flex-col md:!flex-row gap-8'>
                  <FormField
                    control={form.control}
                    name='name'
                    render={({ field }) => (
                      <FormItem className='w-full'>
                        <FormLabel>Nom</FormLabel>
                        <FormControl>
                          <Input placeholder='Foulen Fouleni' {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name='phone'
                    render={({ field }) => (
                      <FormItem className='w-full'>
                        <FormLabel>Numéro De Téléphone</FormLabel>
                        <FormControl>
                          <Input
                            type='number'
                            placeholder='99999999'
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className='flex flex-col gap-1.5'>
                  <FormField
                    control={form.control}
                    name='email'
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            type='email'
                            placeholder='leomirandadev@gmail.com'
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className='flex flex-col gap-1.5'>
                  <FormField
                    control={form.control}
                    name='occupation'
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Occupation</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder='Occupation' />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value='Freelancer'>
                              Freelancer
                            </SelectItem>
                            <SelectItem value='Chef De projet'>
                              Chef De Projet
                            </SelectItem>
                            <SelectItem value='Employé'>Employé</SelectItem>
                            <SelectItem value='Etudiant'>Etudiant</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className='flex flex-col gap-1.5'>
                  <FormField
                    control={form.control}
                    name='city'
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Gouvernerat</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder='Gouvernerat' />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {tunisianGovernorates.map((g) => (
                              <SelectItem key={g} value={g}>
                                {g}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className='flex flex-col gap-1.5'>
                  <FormField
                    control={form.control}
                    name='adress'
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Adresse</FormLabel>
                        <FormControl>
                          <Input
                            type='text'
                            placeholder='Tunis, Centre Ville'
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <Button className='mt-4'>Register</Button>
              </form>
            </Form>
          </CardContent>

          <CardFooter></CardFooter>
        </Card>
      </section>
    </section>
  );
};
