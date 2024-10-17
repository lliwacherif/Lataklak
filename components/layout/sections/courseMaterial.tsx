import RegisterButton from "@/components/ui/register";
import React from "react";

export default function CourseMaterial() {
  const chapters = [
    {
      name: "Analyse des clients",
      description: `Ce chapitre t'aide à identifier tes clients idéaux et à comprendre leurs besoins pour mieux cibler tes publicités.`,
    },
    {
      name: "Analyse de marché",
      description: `Tu apprends à analyser la concurrence et le marché pour adapter tes publicités à ton secteur.`,
    },
    {
      name: "Création de compte Facebook Ads",
      description: `Ce chapitre t'accompagne dans la création de ton compte publicitaire et la configuration de base.`,
    },
    {
      name: "Lancer sa 1ère annonce",
      description: `Découvre comment créer et diffuser ta première publicité sur Facebook.`,
    },
    {
      name: "Les audiences Facebook",
      description: `Tu apprends à cibler précisément les bonnes audiences pour maximiser l'impact de tes publicités.`,
    },
    {
      name: "Les techniques de testing",
      description: `Tu maîtrises les tests A/B pour optimiser tes campagnes publicitaires.`,
    },
    {
      name: "Tunnel de vente Messenger",
      description: `Ce chapitre t'enseigne à utiliser Messenger pour convertir tes prospects en clients.`,
    },
    {
      name: "Ad Copy",
      description: `Tu apprends à rédiger des textes publicitaires efficaces qui attirent l'attention et incitent à l'action.`,
    },
    {
      name: "Le Scaling",
      description: `Découvre comment augmenter progressivement tes dépenses publicitaires pour maximiser les résultats.`,
    },
    {
      name: "Tunnel de vente site web",
      description: `Tu mets en place un tunnel de vente optimisé pour convertir les visiteurs de ton site en clients.`,
    },
    {
      name: "Analyse des métriques",
      description: `Tu apprends à analyser les performances de tes campagnes grâce aux données fournies par Facebook.`,
    },
  ];
  return (
    <>
      <section
        id='chapters'
        className='relative min-h-screen flex flex-col justify-center overflow-hidden'
      >
        <div className='w-full max-w-6xl mx-auto px-4 md:px-6 py-24'>
          <h2 className='text-5xl text-white mb-2 tracking-wider'>
            Nos Chapitres
          </h2>
          <div className='flex flex-col justify-center divide-y divide-slate-200 [&>*]:py-16'>
            <div className='w-full max-w-3xl mx-auto'>
              {/* <!-- Vertical Timeline #1 --> */}
              {chapters.map((chapter, index) => (
                <div className='-my-6' key={index}>
                  {/* <!-- Item #1 --> */}
                  <div className='relative pl-8 sm:pl-32 py-6 group'>
                    {/* <!-- Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) --> */}
                    <div className='flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-primary after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5'>
                      {/* <time className='sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full'></time> */}
                      <div className='text-xl  font-bold text-primary'>
                        {chapter.name}
                      </div>
                    </div>
                    {/* <!-- Content --> */}
                    <div className='text-white-300'>{chapter.description}</div>
                  </div>
                </div>
              ))}
              {/* <!-- End: Vertical Timeline #1 --> */}
            </div>
          </div>
          <h2 className='text-2xl text-center text-white mb-2 tracking-wider'>
            Et bien d{"'"}autres chapitres que tu découvriras en nous rejoignant
          </h2>
          <div className='w-full mt-5 flex items-center justify-center'>
            <RegisterButton />
          </div>
        </div>
      </section>
    </>
  );
}

const stuff = () => (
  <>
    {" "}
    {/* <!-- Item #2 --> */}
    <div className='relative pl-8 sm:pl-32 py-6 group'>
      {/* <!-- Purple label --> */}
      <div className='font-medium text-indigo-500 mb-1 sm:mb-0'>
        The milestone
      </div>
      {/* <!-- Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) --> */}
      <div className='flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5'>
        <time className='sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full'>
          May, 2021
        </time>
        <div className='text-xl font-bold text-slate-900'>
          Reached 5K customers
        </div>
      </div>
      {/* <!-- Content --> */}
      <div className='text-slate-500'>
        Pretium lectus quam id leo. Urna et pharetra pharetra massa massa.
        Adipiscing enim eu neque aliquam vestibulum morbi blandit cursus risus.
      </div>
    </div>
    {/* <!-- Item #3 --> */}
    <div className='relative pl-8 sm:pl-32 py-6 group'>
      {/* <!-- Purple label --> */}
      <div className='font-medium text-indigo-500 mb-1 sm:mb-0'>
        The acquisitions
      </div>
      {/* <!-- Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) --> */}
      <div className='flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5'>
        <time className='sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full'>
          May, 2022
        </time>
        <div className='text-xl font-bold text-slate-900'>
          Acquired various companies, inluding Technology Inc.
        </div>
      </div>
      {/* <!-- Content --> */}
      <div className='text-slate-500'>
        Pretium lectus quam id leo. Urna et pharetra pharetra massa massa.
        Adipiscing enim eu neque aliquam vestibulum morbi blandit cursus risus.
      </div>
    </div>
    {/*                     
                      <!-- Item #4 --> */}
    <div className='relative pl-8 sm:pl-32 py-6 group'>
      {/* <!-- Purple label --> */}
      <div className='font-medium text-indigo-500 mb-1 sm:mb-0'>The IPO</div>
      {/* <!-- Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) --> */}
      <div className='flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5'>
        <time className='sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full'>
          May, 2023
        </time>
        <div className='text-xl font-bold text-slate-900'>
          Acme went public at the New York Stock Exchange
        </div>
      </div>
      {/* <!-- Content --> */}
      <div className='text-slate-500'>
        Pretium lectus quam id leo. Urna et pharetra pharetra massa massa.
        Adipiscing enim eu neque aliquam vestibulum morbi blandit cursus risus.
      </div>
    </div>
  </>
);
