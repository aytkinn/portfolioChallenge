import React from 'react';
import data from '../../data';
function Profile({lang}){
    const profileData = data[lang].profile;
    return(
        <section className='p-8'>
        <h3 className="text-center text-4xl font-bold mb-8">Profile</h3>
       <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2 border border-white p-8 rounded-2xl shadow-xl/20">
          <h3 className="text-2xl font-medium mb-8">Basic Informations</h3>
          <ul className="text-lg">

            {Object.entries(profileData.basicInfo).map(([key, value]) => (
              <li key={key} className="flex justify-between py-2 border-b last:border-b-0">
                <span className="font-semibold">{profileData.labels[key]}:</span>
                <span>{value}</span>
              </li>
            ))}
          </ul>
        </div>


        <div className="md:w-1/2 p-8 ">
          <h3 className="text-2xl font-medium mb-8">{profileData.about.title}</h3>
          <div>
           <p>{profileData.about.description1} </p>
           <p>{profileData.about.description2} </p>
          </div>
        </div>

      </div>
        </section>
    )
}
export default Profile;