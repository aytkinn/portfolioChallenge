import React from 'react';
import data from '../data.js';
import { useSelector } from 'react-redux';

function Projects() {
    const currentLang = useSelector(state => state.language.currentLang) || 'en';
    const isDarkMode = useSelector(state => state.theme.isDarkMode);
    const projectsData = data[currentLang].projects;
    if (!data || !data[currentLang] || !data[currentLang].projects) {
        console.error('Projects data yüklenemedi!', { data, currentLang });
        return <div>Projects data yükleniyor...</div>;
    }
    
    
        return (
            <section className='projects-section p-8 border py-5 space-y-[110px]' style={{backgroundColor: isDarkMode ? '#484148' : '#ffffff', color: isDarkMode ? '#ffffff' : '#000000', borderColor: isDarkMode ? '#3A343B' : '#ffffff'}}>
                <h1 className="text-center text-6xl font-medium mb-[75px] mt-[30px]" style={{color: isDarkMode ? '#ffffff' : '#000000'}}>{data[currentLang].projects[0].titleh1}</h1>

            <div className='flex flex-col md:flex-row justify-center gap-5 '>
                {projectsData.map((project, index) => {
                    
                    const bgColor = index % 2 === 0
                        ? (isDarkMode ? '#2D3235' : '#DDEEFE')
                        : (isDarkMode ? '#495351' : '#D9F6F1');
                        
                        

                    return (

                            <div
                                key={index}
                                className="projects-card md:w-3/4 lg:w-2/3 border rounded-2xl p-8 shadow-md"
                                style={{backgroundColor: bgColor, borderColor: isDarkMode ? '#3A343B' : '#d1d5db'}}
                            >
                            <div className='mb-4' style={{color: isDarkMode ? '#ffffff' : '#000000'}}>
                                <h2 className='font-medium text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-2' style={{color: isDarkMode ? '#ffffff' : '#000000'}}>{project.title}</h2>
                                <p className='text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-semibold mt-10' style={{color: isDarkMode ? '#ffffff' : '#000000'}}>{project.description}</p>
                            </div>

                            <div className='flex flex-wrap gap-2 pt-2 mt-20'>
                                {project.tags.map((tag, tagIndex) => (
                                    <p key={tagIndex} className='rounded-full px-2 py-1 text-xs sm:text-sm md:text-base lg:text-lg font-medium' style={{backgroundColor: isDarkMode ? '#3A343B' : '#ffffff', color: isDarkMode ? '#ffffff' : '#000000'}}>
                                        {tag}
                                    </p>
                                ))}
                            </div>
                            <div className='flex flex-col sm:flex-row justify-between gap-2 sm:gap-6 mt-20'>
                                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className='inline-flex items-center hover:underline text-xs sm:text-sm md:text-base' style={{color: isDarkMode ? '#ffffff' : '#000000'}}>
                                    {project.text1 ?? (currentLang === 'tr' ? "Github'da görüntüleyin" : 'View on GitHub')}
                                </a>
                                {project.liveUrl && (
                                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className='inline-flex items-center hover:underline text-xs sm:text-sm md:text-base' style={{color: isDarkMode ? '#ffffff' : '#000000'}}>
                                        →   {project.text2 ?? (currentLang === 'tr' ? "App'e git" : 'Go to App')}
                                    </a>
                                )}
                            </div>

                            <div className="relative w-full h-auto mt-8">
                                <img
                                    src={project.computerUrl}
                                    alt="Laptop Çerçevesi"
                                    className="relative z-10 w-full h-auto"
                                />
                                <img
                                    src={project.imageUrl}
                                    alt={`Ekran görüntüsü: ${project.title}`}
                                    className="absolute top-[7%] left-[14%] w-[72%] h-[72%] object-cover z-0 rounded-sm"
                                />
                            </div>

                        </div>
                    );
                })}
            </div>

            <div className='mb-16 mt-16 flex flex-row justify-around'>
                <div className='md:max-w-[60%] mx-auto md:mx-0 font-medium text-[50px] md:text-[50px]'>
                    <h2 className=' leading-[150%] tracking-[1%] text-center'>
                        {data[currentLang].projectsFooter.titleLine1}
                    </h2>
                    <div className='w-[305px] h-[20px] bg-[#82BBFF] rounded-sm -mt-[30px] ml-[160px]'></div>
                    <h2 className='mt-3 leading-[150%] tracking-[1%] text-center'>
                        {data[currentLang].projectsFooter.titleLine2}
                    </h2>
                </div>

                <ul className='space-y-1 text-center md:text-left'>
                    {data[currentLang].projectsFooter.links.map((link, index) => {
                        const colorClass =
                            index % 4 === 0
                                ? '!text-blue-600'
                                : index % 4 === 1
                                    ? 'dark:!text-black'
                                    : index % 4 === 2
                                        ? '!text-cyan-500'
                                        : '!text-red-600';

                        return (
                            <li key={index}>
                                <a
                                    href={link.url}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className={`${colorClass} hover:underline text-3xl font-semibold`}
                                >
                                    {link.label}
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </section>
    );
}

export default Projects;