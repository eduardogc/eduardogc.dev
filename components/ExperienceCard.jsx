import { motion } from 'motion/react';

export function ExperienceCard({ role, company, period, description, tech = [], index }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="card flex flex-col gap-4"
        >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                <div>
                    <h3 className="text-xl font-bold text-white">{role}</h3>
                    <p className="text-accent-purple font-medium text-lg gradient-text">{company}</p>
                </div>
                <span className="text-sm text-gray-400 bg-white/5 px-3 py-1 rounded-full whitespace-nowrap w-fit">
                    {period}
                </span>
            </div>

            <p className="text-gray-300 leading-relaxed text-sm">
                {description}
            </p>

            {tech.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-auto pt-4">
                    {tech.map((item) => (
                        <span
                            key={item}
                            className="text-xs font-medium px-2 py-1 rounded bg-white/5 text-gray-400 border border-white/5"
                        >
                            {item}
                        </span>
                    ))}
                </div>
            )}
        </motion.div>
    );
}
