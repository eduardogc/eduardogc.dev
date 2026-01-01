import { useState, useEffect } from 'react';
import { Icons } from './Icons';

export function Navbar({ lang, setLang, texts }) {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: texts.about, href: '#about' },
        { name: texts.skills, href: '#skills' },
        { name: texts.projects, href: '#projects' },
        { name: texts.contact, href: '#contact' },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass-strong py-4' : 'bg-transparent py-6'
                }`}
        >
            <div className="max-w-[1200px] mx-auto px-10 flex items-center justify-between">
                <a href="#" className="text-xl font-bold tracking-tighter hover:opacity-80 transition-opacity">
                    Eduardo <span className="gradient-text">GC</span>
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    <div className="flex items-center gap-6">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    <div className="h-6 w-px bg-white/10" />

                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => setLang(lang === 'pt' ? 'en' : 'pt')}
                            className="flex items-center gap-2 text-sm font-medium text-gray-300 hover:text-white transition-colors"
                            title={lang === 'pt' ? "Switch to English" : "Mudar para Português"}
                        >
                            <Icons.Globe className="w-4 h-4" />
                            <span>{lang.toUpperCase()}</span>
                        </button>
                        <a
                            href="https://clarionestudios.com.br"
                            target="_blank"
                            rel="noreferrer"
                            className="btn btn-secondary py-2 px-4 text-xs bg-black hover:bg-zinc-900 border-zinc-800"
                        >
                            {texts.clarion}
                        </a>
                        <a
                            href="https://guio.eduardogc.com"
                            target="_blank"
                            rel="noreferrer"
                            className="btn btn-primary py-2 px-4 text-xs bg-black hover:bg-zinc-900 border border-zinc-800"
                        >
                            {texts.guio}
                        </a>
                    </div>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        {mobileMenuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 glass-strong border-t border-white/10 p-6 flex flex-col gap-4 animate-slide-down shadow-2xl">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-lg font-medium text-gray-300 hover:text-white"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            {link.name}
                        </a>
                    ))}
                    <div className="h-px bg-white/10 my-2" />
                    <div className="flex flex-col gap-3 w-full sm:flex-row sm:w-auto items-center justify-between">
                        <button
                            onClick={() => {
                                setLang(lang === 'pt' ? 'en' : 'pt');
                                setMobileMenuOpen(false);
                            }}
                            className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-2 sm:mb-0"
                        >
                            <Icons.Globe className="w-4 h-4" />
                            <span>{lang === 'pt' ? 'Mudar para Inglês' : 'Switch to Portuguese'}</span>
                        </button>
                        <div className="flex items-center gap-3">
                            <a
                                href="https://clarionestudios.com.br"
                                target="_blank"
                                rel="noreferrer"
                                className="btn btn-secondary py-2 px-6 text-sm bg-black hover:bg-zinc-900 border-zinc-800"
                            >
                                {texts.clarion}
                            </a>
                            <a
                                href="https://guio.eduardogc.com"
                                target="_blank"
                                rel="noreferrer"
                                className="btn btn-primary py-2 px-6 text-sm bg-black hover:bg-zinc-900 border border-zinc-800"
                            >
                                {texts.guio}
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}
