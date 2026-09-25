import { Calendar, CheckCircle, GraduationCap } from 'lucide-react';
import React from 'react'

const Education = () => {
    const EducationData = [
        {
            id: 1,
            degree: 'Baclor of Computer Sience',
            institution: "Universitas Muhammadiyah Parepare",
            duration: "2022-2026",
            details: 'Lorem ipsum dolor sit amet consectutetur adipisicing'
        },
        {
            id: 2,
            degree: 'Advanced web Develom',
            institution: "Universitas Muhammadiyah Parepare",
            duration: "2022-2026",
            details: 'Lorem ipsum dolor sit amet consectetur adipisicing'
        },
    ];
    return (
        <section className='text-white py-20 overflow-hidden' id='education'>
            <div className='maw-w-7xl mx-auto px-6 lg:px-16'>
                <div className='mb-16'>
                    <p className='text-primary text-sm uppercase tracking-widest mb-2 font-semibold'>
                        Learning Path
                    </p>
                    <h2 className='text-4xl md:text-5xl font-extrabold text-white'>
                        Education
                    </h2>
                </div>
                <div className='flex flex-col lg:flex-row items-center gap-16'>
                    <div className='w-full lg:w-5/12 flex justify-center lg:justify-start' data-aos='fade-right'>
                    <div className='relative'>
                        <div className='absolute h-full w-full z-0 p-2 translate-x-4 translate-y-4 rounded-2xl shadow-lg border border-cyan-500'>
                        </div>
                        <div className='relative z-10 bg-[#111a3e] rounded-2xl overflow-hidden border border-[#1f1641]'>
                            <img src={educ} alt="Education"
                            className='w-64 h-64 md:w-96 md:h-120 object-cover transform transition-transform duration-500 hover:scale-110'/>
                        </div>
                        <div className='absolute -top-4 -left-4 bg-primary/20 w-16 h-16 rounded-full blur-2xl'>
                        </div>
                    </div>
                    </div>
                    <div className='w-full lg:w-7/12 space-y-6' data-aos='fade-left'>
                        {EducationData.map((edu)=> (
                            <div
                            key={edu.id}
                            className='group realtive p-6 rounded-2xl bg-[#111a3e] border border-[#1f1641] transition-all duration-300 hover:border-primary/50'>
                                <div className='flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4'>
                                    <div className='flex items-center gap-3'>
                                        <div className='p-2 bg-[#050816] rounded-lg border border-primary/20 group-hover:border-primary transition-color'>
                                            <GraduationCap className='text-primary' size={24}/>
                                        </div>
                                            <div>
                                                <h3 className='text-lg font-bold text-white group-hover:text-primary transition-color'>
                                                    {edu.degree}
                                                    <p className='text-gray-400 text-sm'>
                                                        {edu.institution}
                                                    </p>
                                                </h3>
                                            </div>
                                    </div>
                                        <div className='flex items-center gap-2 text-xs font-medium bg-[#050816] px-3 py-1 rounded-full border border-gray-700 w-fit'>
                                            <Calendar sixe={12} className='text-primary'/>
                                            {edu.duration}
                                        </div>
                                </div>
                                    <p className='text-gray-400 text-sm leading mb-4'>
                                        {edu.details}
                                    </p>
                                    <div className='flex items-center gap-2 text-[10px] uppercase-winder text-primary font-bold'>
                                        <CheckCircle size={12}/>

                                    </div>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </section>      
    )
}

export default Education;