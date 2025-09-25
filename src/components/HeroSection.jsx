import React from 'react';
import data from "../../data";

function HeroSection({ lang }) {

  const heroData = data[lang].heroSection;

  return (
    <section className="flex flex-col min-h-1 justify-between p-8">

      <div className="flex flex-col md:flex-row items-center md:justify-center">
        <div className="md:w-1/2 flex flex-col items-start gap-12">

          <h3 className="text-xl font-normal">{heroData.greeting} 👋</h3>
          <div className='text-left'>
            <p className="font-semibold text-2xl -mt-8 ">
              {heroData.intro}
              
              {lang === "en" ?
                " I'm a full-stack developer. I can craft solid and scalable frontend products. Let's meet!" :
                " Bir full-stack geliştiriciyim. Sağlam ve ölçeklenebilir Frontend ürünler oluşturabilirim. Hadi tanışalım!"
              }
            </p>
            <div className='w-[75px] h-4 bg-pink-500 rounded-sm -mt-19 -mr-2'></div>
          </div>
          <div className="flex gap-4 mt-20">
            {heroData.socials.map((social, index) => (
              <a key={index} href={social.link} target="_blank" rel="noopener noreferrer">
                <img src={social.logo} alt={social.alt_text} className="w-10 h-10" />
              </a>
            ))}
          </div>
        </div>

        <div className="relative w-full md:w-1/2 mt-8 md:mt-0 flex justify-center">
          <img
            src={heroData.profileImage}
            alt="Profile"
            className="w-72 h-72 rounded-[32px] object-cover relative z-10"
          />
        </div>
      </div>
      <div className='text-left mt-5'>
        <p className='text-[12px] self-center'>Currently <span className='text-pink-500 font  '> Freelancing</span> for <span className='text-pink-500 '> UX, UI & Web Desing </span> Project.</p>
        <p className='text-[12px] self-center'>Invite me to join your team → <span className='text-pink-500 '>  aytkinn21@gmail.com</span></p>
      </div>
      <div className="relative w-0 h-0 overflow-hidden">
        <div className="absolute left-[170px] top-[50%] -translate-y-[66px] w-16 h-16 border-8 border-pink-500 rounded-full" aria-hidden></div>
      </div>


    </section>
  );
}

export default HeroSection;