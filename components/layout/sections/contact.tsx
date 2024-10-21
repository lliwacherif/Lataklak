"use client";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
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
import { useRouter } from "next/navigation";
import { useState } from "react";

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
  name: z
    .string()
    .min(2, { message: "لازم الاسم يكون فيه أكثر من زوز حروف" })
    .max(255),
  phone: z.string().min(8, {
    message: "لازم الرقم يكون 8 أرقام على الأقل",
  }),
  email: z.string().email({ message: "ثبت من الـemail " }),
  adress: z.string().min(2, { message: "حظ العنوان كامل" }).max(255),
  // occupation: z.string().min(2).max(255),
  city: z.string().min(2, { message: "اختار الولاية" }).max(255),
});

const extractReferrer = (url: string): string | null => {
  const regex = /[?&]referer=([^&]+)/;
  const match = url.match(regex);
  return match ? decodeURIComponent(match[1]) : null;
};

export const ContactSection = () => {
  // State to track which radio option is selected
  const [selectedOption, setSelectedOption] = useState("cod");

  // Handle radio button change
  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };

  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      adress: "",
      city: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const { name, phone, email, adress, city } = values;
    const referrer = extractReferrer(window.location.href);
    console.log(referrer);
    const req = await axios.post(`/api/submit`, {
      ...values,
      occupation: "",
      selectedOption,
      referrer,
    });

    if (req.status == 200) {
      router.push(`/thanks?method=${selectedOption}`);
    }
  }

  return (
    <section
      id='contact'
      className='container flex items-center justify-center py-24 sm:py-32'
    >
      <section
        // className=''
        className='lg:w-4/6 w-full '
      >
        <div>
          <div className='mb-4'>
            {/* <h2 className='text-lg text-primary mb-2 tracking-wider'>
              Rejoignez nous
            </h2> */}
            <h2 className='text-3xl text-center md:text-4xl font-bold'>
              سجل معنا
            </h2>
          </div>
        </div>

        <Card className='bg-muted/60 dark:bg-card w-full'>
          <CardHeader className='text-primary text-2xl'> </CardHeader>
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className='grid w-full gap-4'
                dir='rtl'
              >
                <div className='flex flex-col md:!flex-row gap-8'>
                  <FormField
                    control={form.control}
                    name='name'
                    render={({ field }) => (
                      <FormItem className='w-full'>
                        <FormLabel>الإسم واللقب</FormLabel>
                        <FormControl>
                          <Input placeholder='' {...field} />
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
                        <FormLabel>رقم الهاتف</FormLabel>
                        <FormControl>
                          <Input type='number' placeholder='' {...field} />
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
                        <FormLabel>الـemail</FormLabel>
                        <FormControl>
                          <Input type='email' placeholder='' {...field} />
                        </FormControl>
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
                        <FormLabel>الولاية</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl dir='rtl'>
                            <SelectTrigger>
                              <SelectValue placeholder='الولاية' />
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
                        <FormLabel>العنوان الكامل</FormLabel>
                        <FormControl>
                          <Input type='text' placeholder='' {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div dir='ltr' className='flex w-full '>
                  <div className='flex flex-1 flex-col items-start justify-start py-8 px-4'>
                    <h2 className='text-2xl mb-4'>
                      اختر طريقة الدفع المناسبة لك
                    </h2>

                    {/* Radio buttons */}
                    <div className='flex flex-col gap-4 mb-4'>
                      <label className='flex items-center'>
                        <input
                          type='radio'
                          value='rib'
                          checked={selectedOption === "rib"}
                          onChange={handleOptionChange}
                          className='mr-4'
                        />
                        RIB Bancaire
                      </label>

                      <label className='flex items-center'>
                        <input
                          type='radio'
                          value='cod'
                          checked={selectedOption === "cod"}
                          onChange={handleOptionChange}
                          className='mr-4'
                        />
                        Paiment à la livraison
                      </label>
                    </div>

                    {/* Conditional rendering based on selection */}
                    {selectedOption === "rib" && (
                      <p className='text-lg' dir='rtl'>
                        Notre RIB : 04 094179 0079395810 91
                        <br />
                        <br />
                        بعد تعمير المعطيات و تأكيد الإشتراك قم بحوالة بنكية
                        للحساب الجاري الأتي بإسم محمد علي عمايرة بمبلغ 197
                        دينارا و تواصل معنا على الwhatsapp على الرقم 25251808
                      </p>
                    )}
                    {selectedOption === "cod" && (
                      <p dir='rtl' className='text-md text-white'>
                        {
                          "يجيك livreur لباب الدار يعطيك ورقة فيها معطيات حسابك كل (الـadresse والـmot de passe) وحتى الـlien متاع الـplatform الي بش تقرا فيها."
                        }{" "}
                        فقط عمر المعطيات و أكد الإشتراك{" "}
                      </p>
                    )}
                  </div>
                </div>

                <Button className='mt-4'>تأكيد الإشتراك</Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </section>
    </section>
  );
};
