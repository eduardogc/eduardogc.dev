import { Icons } from './Icons';

export function SocialLinks({ className = "" }) {
    const links = [
        {
            name: 'GitHub',
            href: 'https://github.com/eduardogc',
            icon: Icons.GitHub,
        },
        {
            name: 'LinkedIn',
            href: 'https://linkedin.com/in/geceduardo',
            icon: Icons.LinkedIn,
        },
        {
            name: 'Instagram',
            href: 'https://instagram.com/eusoueududu',
            icon: Icons.Instagram,
        },
        {
            name: 'YouTube',
            href: 'https://www.youtube.com/channel/UC2-FsOpGAR4_Cumpyo30bTQ/',
            icon: Icons.YouTube,
        },
    ];

    return (
        <div className={`flex items-center gap-4 ${className}`}>
            {links.map((link) => (
                <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full"
                    title={link.name}
                >
                    <link.icon className="w-6 h-6" />
                </a>
            ))}
        </div>
    );
}
