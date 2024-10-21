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
    question: "علاش اخترنا فيديوهات مسجلة؟",
    answer:
      "على خاطر وقتك ثمين تنجم تقرى الدورة متاعنا فين متحب ووقت متحب و تعاودها قد متحب",
    value: "item-2",
  },
  {
    question: "شنو نعمل كان ما نفهمش حاجة في الـformation ؟",
    answer:
      "أي مشترك معانا في الـformation نعطيوه إشتراك مجاني لـgroup في الفيسبوك وين ينجم يستفسر على أي معلومة عندها علاقة بالدرس.",
    value: "item-2.5",
  },
  {
    question: "قداش مدة الدورة ؟",
    answer:
      "تدوم أكثر من 8 ساعات و أغلب تلامذتنا يكملوها في 3 أسابيع و يبقى عندك access مدى الحياة",
    value: "item-3",
  },
  {
    question: "كيفاش طريقة الخلاص ؟",
    answer: "تنجم تخلصنا بالـrib bancaire ولا نوصلولك لباب الدار",
    value: "item-4",
  },
  {
    question: "كيفاش توصلولي لباب الدار؟",
    answer:
      "يجيك livreur لباب الدار يعطيك ورقة فيها معطيات حسابك كل (الـadresse والـmot de passe) وحتى الـlien متاع الـplatform الي بش تقرا فيها.",
    value: "item-5",
  },
];

export const FAQSection = () => {
  return (
    <section id='faq' className='container md:w-[700px] py-24 sm:py-32'>
      <div className='text-center mb-8'>
        {/* <h2 className='text-lg text-primary text-center mb-2 tracking-wider'>
          FAQS
        </h2> */}

        <h2 className='text-3xl md:text-4xl text-center font-bold'>
          الأسئلة اللي ديما تطرحوها
        </h2>
      </div>

      <Accordion type='single' collapsible className='AccordionRoot'>
        {FAQList.map(({ question, answer, value }) => (
          <AccordionItem dir='rtl' key={value} value={value}>
            <AccordionTrigger className='text-right'>
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      <h2 dir='rtl' className='text-center my-2 text-lg'>
        في الحالات الكل تنجم ديما تتصل بينا بش تستفسر 
        <br />
        <span dir='ltr'>25 25 18 08</span>
      </h2>
      <div className='w-full flex items-center justify-center'>
        <RegisterButton />
      </div>
    </section>
  );
};
