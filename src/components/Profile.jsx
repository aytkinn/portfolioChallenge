import React from 'react';
import data from '../../data';
function Profile({lang}){
    const profileData = data[lang].profile;
    return(
        <section className='p-8'>
        <h3 className="text-center text-4xl font-medium mb-8">Profile</h3>
       <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2 border border-white px-4 p-8 rounded-2xl shadow-[8px_8px_0_0_rgba(0,0,0,0.2)]">
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


        <div className="md:w-1/2 p-8 ">
          <h3 className="text-medium font-medium mb-8 text-left ">{profileData.about.title}</h3>
          <div className='text-left'>
           <p>{profileData.about.description1} </p>
          </div>
        </div>

      </div>
        </section>
    )
}
export default Profile;