import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import RegisterButton from "@/components/ui/register";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "شكون باش يقريني ؟",
    answer: `ريان دغار هو من أكبر المسوقين في تونس و خبير في مجال الsponsoring بعد سنوات خبرة بين خدمة مع علامات تجارية محترمين في تونس والي وصل معاهم لنتائج مبهرة 
وبعد سنوات من دراسة الفورماسيونات الأجنبية الي تحتوي على معلومات تعتبر مجهولة في تونس
وبعد جهد كبير من محاولة توظيف المعلومات هذي بش تناسب السوق التونسية
ريان دغار يوصل للتوليفة المثالية بش يحقق أقوى نتائج ممكنة. يقدمهالكم اليوم في شكل مجموعة فيديوات تقراهم انولاين وقت ما انت تحب. 
`,
    value: "item-1",
  },
  {
    question: "علاش فيديوهات مسجلة ؟",
    answer:
      "على خاطر وقتك ثمين تنجم تقرى الدورة متاعنا فين متحب ووقت متحب و تعاودها قد متحب",
    value: "item-2",
  },
  {
    question: "قداش مدة الدورة ؟",
    answer:
      "تدوم أكثر من 8 ساعات و أغلب تلامذتنا يكملوها في 3 أسابيع و يبقى عندك access مدى الحياة",
    value: "item-3",
  },
  {
    question: "كيفاش طريقة الخلاص ؟",
    answer:
      "تسجل معانا، نكلموك نتأكدو معاك ثم نبعثولك وصل الخلاص و معاهم ورقة فيها معلومات الوصول للمنصة متاعنا و تخلص من دارك cash",
    value: "item-4",
  },
  {
    question: "نجم نخلص online ؟",
    answer:
      "أي تنجم تخلص من دارك فقط وقت نكلموك على التأكيد إختار خاصية الخلاص online و نحنا نتكفلو بالبقية",
    value: "item-5",
  },
];

export const FAQSection = () => {
  return (
    <section id='faq' className='container md:w-[700px] py-24 sm:py-32'>
      <div className='text-center mb-8'>
        <h2 className='text-lg text-primary text-center mb-2 tracking-wider'>
          FAQS
        </h2>

        <h2 className='text-3xl md:text-4xl text-center font-bold'>
          الأسئلة اللي ديما تطرحوها
        </h2>
      </div>

      <Accordion type='single' collapsible className='AccordionRoot'>
        {FAQList.map(({ question, answer, value }) => (
          <AccordionItem dir='rtl' key={value} value={value}>
            <AccordionTrigger className='text-left'>
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      <div className='w-full flex items-center justify-center'>
        <RegisterButton />
      </div>
    </section>
  );
};
