import { SocialLinks } from './SocialLinks';

export function Footer() {
    return (
        <footer className="py-12 border-t border-white/10 bg-black">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-center md:text-left">
                    <p className="text-gray-500 text-sm">
                        &copy; 2025 Eduardo GC. All rights reserved.
                    </p>
                </div>

                <SocialLinks />
            </div>
        </footer>
    );
}
