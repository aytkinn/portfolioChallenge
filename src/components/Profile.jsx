import React from 'react';
import data from '../data.js';
import { useSelector } from 'react-redux';
function Profile(){
    const currentLang = useSelector(state => state.language.currentLang) || 'en';
    const isDarkMode = useSelector(state => state.theme.isDarkMode);
    if (!data || !data[currentLang] || !data[currentLang].profile) {
        console.error('Profile data yüklenemedi!', { data, currentLang });
        return <div>Profile data yükleniyor...</div>;
    }
    
    const profileData = data[currentLang].profile;
    return(
        <section className='relative p-8 overflow-y-hidden' style={{backgroundColor: isDarkMode ? '#2A262B' : '#ffffff', color: isDarkMode ? '#ffffff' : '#000000'}}>        
        <h3 className="text-center text-6xl font-medium mb-8" style={{color: isDarkMode ? '#ffffff' : '#000000'}}>{profileData.titleh1}</h3>
       <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2 border px-4 p-8 rounded-2xl shadow-[8px_8px_0_0_rgba(0,0,0,0.2)]" style={{backgroundColor: isDarkMode ? '#484148' : '#ffffff', color: isDarkMode ? '#ffffff' : '#000000', borderColor: isDarkMode ? '#3A343B' : '#ffffff'}}>
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


        <div className="md:w-1/2 p-8 text-left " style={{color: isDarkMode ? '#ffffff' : '#000000'}}>
          <h3 className="playfair-display mb-8 text-2xl font-semibold " style={{color: isDarkMode ? '#ffffff' : '#000000'}}>{profileData.about.title}</h3>
          <div className='w-[85px] h-4 bg-[#82BBFF] rounded-sm -mt-11 -ml-2'></div>
          <div className='text-xl/8'>
           <p style={{color: isDarkMode ? '#ffffff' : '#000000'}}>{profileData.about.description1} </p>
          </div>
        </div>

      </div>
        </section>
    )
}
export default Profile;