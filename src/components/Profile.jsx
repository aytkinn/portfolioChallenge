import React from 'react';
import data from '../../data';
function Profile({lang}){
    const profileData = data[lang].profile;
    return(
        <section className='relative p-8 overflow-y-hidden '>
          {/*<div
        className="absolute md:left-[60%] mt-[-72px] ml-[420px]  w-24 h-24 border-12 border-pink-500 rounded-full"></div>*/}
        
        <h3 className="text-center text-6xl font-medium mb-8">{profileData.titleh1}</h3>
       <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2 border border-white bg-white px-4 p-8 rounded-2xl shadow-[8px_8px_0_0_rgba(0,0,0,0.2)]">
          <h3 className="text-medium font-medium mb-8 text-pink-400 text-left">{profileData.title}</h3>
          <ul className="text-lg">

            {Object.entries(profileData.basicInfo).map(([key, value]) => (
              <li key={key} className="flex justify-between py-2">
                <span className="font-semibold">{profileData.labels[key]}:</span>
                <span>{value}</span>
              </li>
            ))}
          </ul>
        </div>


        <div className="md:w-1/2 p-8 text-left ">
          <h3 className="playfair-display mb-8 text-2xl font-semibold ">{profileData.about.title}</h3>
          <div className='w-[85px] h-4 bg-[#82BBFF] rounded-sm -mt-11 -ml-2'></div>
          <div className='text-xl/8'>
           <p>{profileData.about.description1} </p>
          </div>
        </div>

      </div>
        </section>
    )
}
export default Profile;