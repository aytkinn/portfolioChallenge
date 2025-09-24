import React from 'react';
import data from "../../data";

function HeroSection({lang}) {

  const heroData = data[lang].heroSection;

  return (
    <section className="flex flex-col min-h-1 justify-between p-8">
      
      <div className="flex flex-col md:flex-row items-center md:justify-center">
        <div className="md:w-1/2 flex flex-col items-start gap-12">
        
        <h3 className="text-xl font-normal">{heroData.greeting} 👋</h3>
        <p className="font-semibold text-2xl -mt-8">
          {heroData.intro}
          {lang === "en" ? 
            " I'm a full-stack developer. I can craft solid and scalable frontend products. Let's meet!" : 
            " Bir full-stack geliştiriciyim. Sağlam ve ölçeklenebilir Frontend ürünler oluşturabilirim. Hadi tanışalım!"
          }
        </p>

        <div className="flex gap-4 mt-8">
          {heroData.socials.map((social, index) => (
            <a key={index} href={social.link} target="_blank" rel="noopener noreferrer">
              <img src={social.logo} alt={social.alt_text} className="w-8 h-8" />
            </a>
          ))}
        </div>
      </div>

      <div className="relative w-full md:w-1/2 mt-8 md:mt-0 flex justify-center">
        <img
          src={heroData.profileImage}
          alt="Profile"
          className="w-64 h-64 rounded-[32px] object-cover relative z-10" 
        />
      </div>
      </div>
      <div className='text-left mt-5'>
        <p className='text-[12px] self-center'>Currently <span className='text-pink-500 font  '> Freelancing</span> for <span className='text-pink-500 '> UX, UI & Web Desing </span> Project.</p>
         <p className='text-[12px] self-center'>Invite me to join your team → <span className='text-pink-500 '>  aytkinn21@gmail.com</span></p>
      </div>
   
      </section>    
  );
}

export default HeroSection;