import { ArrowUp } from 'lucide-react';

const Footer = () => {
    const navigation = [
        { label: 'About', href: '#about' },
        { label: 'Education', href: '#education' },
        { label: 'Projects', href: '#projects' },
        { label: 'Contact', href: '#contact' },
    ];

    const scrollToSection = (href) => {
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="border-t border-slate-700/70 bg-[#0f172a] text-white">
            <div className="mx-auto max-w-7xl px-6 py-8 md:px-8">
                <div className="flex flex-col gap-7 md:flex-row md:items-center md:justify-between">
                    <button
                        type="button"
                        onClick={scrollToTop}
                        className="w-fit text-2xl font-black tracking-tight transition-colors hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f172a]"
                        aria-label="Back to top"
                    >
                        PORTFOLIO<span className="text-primary">.</span>
                    </button>

                    <nav aria-label="Footer navigation">
                        <ul className="flex flex-wrap items-center gap-x-6 gap-y-3">
                            {navigation.map((item) => (
                                <li key={item.href}>
                                    <button
                                        type="button"
                                        onClick={() => scrollToSection(item.href)}
                                        className="text-sm font-medium text-slate-400 transition-colors hover:text-primary focus:outline-none focus-visible:text-primary"
                                    >
                                        {item.label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <button
                        type="button"
                        onClick={scrollToTop}
                        className="group flex w-fit items-center gap-2 rounded-full border border-slate-700 px-3 py-2 text-sm text-slate-300 transition-colors hover:border-primary hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                    >
                        Back to top
                        <ArrowUp size={16} className="transition-transform group-hover:-translate-y-0.5" aria-hidden="true" />
                    </button>
                </div>

                <div className="mt-7 border-t border-slate-700/70 pt-5">
                    <p className="text-sm text-slate-500">
                        Portfolio.Kangleem Follow my Instagram @kang_leem
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
