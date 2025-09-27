import React from 'react';
import data from "../../data";

function HeroSection({ lang }) {

  const heroData = data[lang].heroSection;

  return (
    <section className="relative flex flex-col justify-between p-8 overflow-hidden ml-[60px] md:ml-0">

      <div className="flex flex-col md:flex-row items-center md:justify-center">
        <div className="md:w-1/2 flex flex-col items-start gap-12">

          <h3 className="text-xl font-normal">{heroData.greeting} 👋</h3>
          <div className='text-left font-semibold'>
            <p className=" text-4xl font-medium leading-[50px]">
              {heroData.intro}
              
              {lang === "en" ?
                " I'm a full-stack developer. I can craft solid and scalable frontend products. Let's meet!" :
                " Bir full-stack geliştiriciyim. Sağlam ve ölçeklenebilir Frontend ürünler oluşturabilirim. Hadi tanışalım!"
              }
            </p>
            <div className=' w-[95px] h-4 bg-pink-500 rounded-sm -mt-[120px] -mr-2 z-0'></div>
          </div>
          <div className="flex gap-4 mt-40">
            {heroData.socials.map((social, index) => (
              <a key={index} href={social.link} target="_blank" rel="noopener noreferrer">
                <img src={social.logo} alt={social.alt_text} className="w-10 h-10" />
              </a>
            ))}
          </div>
        </div>

        <div className="relative w-full md:w-1/2 mt-8 md:mt-0 flex justify-center">
        <div className="absolute top-[-15px] left-[170px] w-96 h-96 bg-pink-600 rounded-[32px] z-0"></div>
          <img
            src={heroData.profileImage}
            alt="Profile"
            className="w-96 h-96 translate-x-[35px] rounded-[32px] object-cover relative z-10"
          />
        </div>
      </div>
      <div className='text-left mt-5 font-2xl'>
        <p className='text-[24px] self-center'>Currently <span className='text-pink-500 font  '> Freelancing</span> for <span className='text-pink-500 '> UX, UI & Web Desing </span> Project.</p>
        <p className='text-[24px] self-center'>Invite me to join your team → <span className='text-pink-500 '>  aytkinn21@gmail.com</span></p>
      </div>
      <div className='w-[145px] h-12 bg-pink-500/80 rounded-3xl -translate-y-[60px] mx-[1100px] '></div>


    </section>
  );
}

export default HeroSection;

