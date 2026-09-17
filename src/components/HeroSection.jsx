import { Download } from 'lucide-react';
import hero from '../assets/hero.png';
import resume from '../assets/resume.pdf';

const HeroSection = () => {
    return (
        <section className="relative w-full">

            <div className="absolute top-0 inset-x-0 h-64 flex items-start">

                <div className="h-24 w-2/3 bg-gradient-to-br from-[#0c7fac] blur-2xl invisible opacity-40" />

                <div className="h-20 w-3/4 bg-gradient-to-r from-[#289eff] opacity-40 blur-2xl" />

            </div>

            <div className="w-full px-5 sm:px-8 md:px-12 lg:px-8 max-w-5xl lg:max-w-7xl mx-auto relative">

                <div className="grid lg:grid-cols-2 gap-10 xl:gap-14 relative pt-24 lg:max-w-none max-w-2xl md:max-w-3xl mx-auto">

                    <div className="lg:py-6 hero-content-enter">

                        <div className="text-center lg:text-left">

                            <h1 className="pt-4 text-white font-bold text-4xl md:text-5xl lg:text-6xl">
                                Hi, I'm {''}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-200">
                                    Kangleem{''}
                                </span>
                                <span>👋</span>
                            </h1>

                        </div>

                        <p className="text-gray-300 pt-8 text-center lg:text-left mx-auto max-w-xl">
                            Fresh Graduate Information Technology
                            <br/>
                            Programmer | Software Engineer
                        </p>

                        <div className="flex items-center gap-3 pt-9 flex-col sm:flex-row sm:w-max lg:mx-0">

                            <a
                                href="#contact"
                                className="px-6 md:px-7 py-3 rounded-full relative group w-full sm:w-max flex justify-center"
                            >

                                <span className="absolute inset-0 rounded-3xl group-hover:scale-105 origin-center transition-all ease-in-out bg-primary border-2 border-transparent" />

                                <span className="relative flex items-center justify-center text-white">
                                    Hire Me
                                </span>

                            </a>

                            <a
                                href={resume}
                                download="Kangleem-Resume.pdf"
                                className="border border-cyan-400 px-6 md:px-7 py-3 rounded-full relative group w-full sm:w-max flex justify-center"
                            >

                                <span className="hover:scale-105 transition-all ease-in-out flex justify-center items-center relative">

                                    <Download
                                        size={18}
                                        className="text-primary"
                                    />

                                    <span className="pl-2 text-primary">
                                        Download resume
                                    </span>

                                </span>

                            </a>

                        </div>

                    </div>

                    <div className="lg:h-full md:flex hero-image-enter">

                        <div className="flex w-full h-96 min-h-96 lg:min-h-0 lg:w-full lg:h-full items-center relative">

                            <div className="absolute z-0 top-1/2 -translate-y-1/2 w-5/6 right-0 h-[calc(80%+20px)] bg-gradient-to-r opacity-25 from-[#0c64ac] to-primary blur-2xl" />

                            <div className="absolute z-10 p-2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 sm:left-auto sm:translate-x-0 sm:right-16 md:right-40 lg:right-3 rounded-[30%_70%_70%_30%_/_30%_30%_70%_70%] shadow-lg border border-cyan-500 w-64 h-64 md:w-80 md:h-80">

                                <img
                                    src={hero}
                                    alt="Hero"
                                    width="500"
                                    height="500"
                                    className="w-full h-full rounded-[30%_70%_70%_30%_/_30%_30%_70%_70%] transition-transform duration-500 hover:scale-105 object-cover "
                                />

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
};

export default HeroSection;
