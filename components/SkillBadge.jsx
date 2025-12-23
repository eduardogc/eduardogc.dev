export function SkillBadge({ name, icon }) {
    return (
        <div className="flex items-center gap-2 px-6 py-3 rounded-full glass hover:bg-white/10 transition-all cursor-default text-sm md:text-base">
            {icon && <span className="text-lg">{icon}</span>}
            <span className="text-gray-200">{name}</span>
        </div>
    );
}
