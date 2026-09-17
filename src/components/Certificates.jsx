import { Award, Calendar, ExternalLink, ShieldCheck } from 'lucide-react';
import { useState } from 'react';
import certificateImage from '../assets/certificate.png';

const Certificates = () => {
    const [expandedCertificates, setExpandedCertificates] = useState([]);
    const descriptionLimit = 110;
    const certificates = [
        {
            id: 1,
            title: 'Intro to Data Analytics',
            issuer: 'RevoU Mini Course',
            date: '23 May 2025',
            link: certificateImage,
            desc: 'This certificate was earned upon completing the Revou Mini Course Intro to Data Analytics.Throughout this program, I learned the core concepts of data analysis for business needs, data visualization techniques, and successfully completed a final project that directly tested my analytical skills.'
        },
        /*
        {
            id: 2,
            title: 'Lorem ipsum dolor sit',
            issuer: 'Coursera / Meta',
            date: 'Dec 2024',
            link: '#',
            desc: 'Deleniti, consectetur?'
        },
        {
            id: 3,
            title: 'Lorem ipsum dolor sit',
            issuer: 'Coursera / Meta',
            date: 'Dec 2024',
            link: '#',
            desc: 'Deleniti, consectetur?'
        },
        */
    ];

    return (
        <section className="text-white py-20" id="certificates">
            <div className="max-w-7xl mx-auto px-6 lg:px-16">

                <div className="mb-16">
                    <p className="text-primary text-sm uppercase tracking-widest mb-2 font-semibold">
                        Achievements
                    </p>

                    <h2 className="text-4xl md:text-5xl font-extrabold text-white">
                        Certifications.
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                    {certificates.map((cert) => {
                        const isExpanded = expandedCertificates.includes(cert.id);
                        const hasLongDescription = cert.desc.length > descriptionLimit;
                        const description = isExpanded || !hasLongDescription
                            ? cert.desc
                            : `${cert.desc.slice(0, descriptionLimit)}...`;

                        return (
                        <div
                            key={cert.id}
                            data-aos="zoom-in"
                            className="group relative bg-[#111a3e] border border-[#1f1641] p-6 rounded-2xl transition-all duration-300 hover:border-primary/50"
                        >

                            <div className="absolute -top-4 -right-4 bg-primary p-3 rounded-xl shadow-lg transform group-hover:rotate-12 transition-transform">
                                <Award
                                    className="text-white"
                                    size={24}
                                />
                            </div>

                            <div className="flex items-center gap-4 mb-4 text-xs text-gray-400">

                                <span className="flex items-center gap-1">
                                    <ShieldCheck
                                        size={14}
                                        className="text-primary"
                                    />
                                    {cert.issuer}
                                </span>

                                <span className="flex items-center gap-1">
                                    <Calendar size={14} />
                                    {cert.date}
                                </span>

                            </div>

                            <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                                {cert.title}
                            </h3>

                            <div className="mb-6">
                                <p className="text-gray-400 text-sm">
                                    {description}
                                </p>

                                {hasLongDescription && (
                                    <button
                                        type="button"
                                        onClick={() => setExpandedCertificates((current) => (
                                            current.includes(cert.id)
                                                ? current.filter((id) => id !== cert.id)
                                                : [...current, cert.id]
                                        ))}
                                        className="mt-2 text-sm font-medium text-primary hover:text-white transition-colors"
                                    >
                                        {isExpanded ? 'Tampilkan lebih sedikit' : 'Baca selengkapnya'}
                                    </button>
                                )}
                            </div>

                            <a
                                href={cert.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-white transition-colors"
                            >
                                View Certificate
                                <ExternalLink size={14} />
                            </a>

                        </div>
                        );
                    })}

                </div>
            </div>
        </section>
    );
};

export default Certificates;

