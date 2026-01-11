import { motion } from "framer-motion"

interface Props {
  sections: { id: string; label: string }[]
  activeId: string
}

export default function SideNav({ sections, activeId }: Props) {
  return (
    <nav className="fixed left-8 top-1/2 -translate-y-1/2 z-50 hidden md:block">
      <ul className="space-y-6">
        {sections.map((s, index) => (
          <motion.li
            key={s.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative"
          >
            <a
              href={`#${s.id}`}
              className="flex items-center gap-3"
            >
              {/* Dot */}
              <motion.div
                whileHover={{ scale: 1.3 }}
                className={`h-3 w-3 rounded-full transition-all duration-300 ${
                  activeId === s.id
                    ? "bg-blue-500 scale-125 shadow-lg shadow-blue-500/50"
                    : "bg-gray-500 hover:bg-gray-400"
                }`}
              />

              {/* Label - показва се при hover */}
              <span
                className={`absolute left-6 whitespace-nowrap px-3 py-1.5 rounded-lg font-medium transition-all duration-300 ${
                  activeId === s.id
                    ? "bg-blue-500 text-white opacity-100 translate-x-0"
                    : "bg-gray-800 text-gray-300 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0"
                } shadow-lg`}
              >
                {s.label}
              </span>
            </a>
          </motion.li>
        ))}
      </ul>
    </nav>
  )
}