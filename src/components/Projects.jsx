import React from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import data from '../../data';

function Projects() {
    const [lang] = useLocalStorage('lang', 'en');
    const projectsData = data[lang].projects;

    return (
        <section className='projects-section p-8'>
            <h1 className='text-center font-bold text-4xl mb-8'>Projects</h1>

            <div className='flex flex-col md:flex-row justify-center gap-8'>
                {projectsData.map((project, index) => (
                    <div key={index} className='projects-card md:w-1/2 lg:w-5/12 border border-gray-300 rounded-2xl p-8 shadow-md'>

                        <div className='mb-4'>
                            <h2 className='font-medium text-2xl mb-2'>{project.title}</h2>
                            <p className='text-gray-700'>{project.description}</p>
                        </div>

                        <div className='flex flex-wrap gap-2 pt-2'>
                            {project.tags.map((tag, tagIndex) => (
                                <p key={tagIndex} className='bg-gray-200 text-gray-700 rounded-full px-3 py-1 text-sm font-medium'>
                                    {tag}
                                </p>
                            ))}
                        </div>

                        <div className="relative w-full h-auto mt-8">                            
                            <img
                                src="./src/img/projectsIcon/Rectangle37.png"
                                alt="Laptop Çerçevesi"
                                className="relative z-10 w-full h-auto"
                            />                            
                            <img
                                src={project.imageUrl}
                                alt={`Ekran görüntüsü: ${project.title}`}
                                className="absolute top-[5.5%] left-[12.5%] w-[75%] h-[70%] object-cover z-0 rounded-sm"
                            />
                        </div>

                    </div>
                ))}
            </div>
        </section>
    );
}

export default Projects;