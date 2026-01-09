interface Props {
  sections: { id: string; label: string }[]
  activeId: string
}

export default function SideNav({ sections, activeId }: Props) {
  return (
    <nav className="fixed left-6 top-1/2 -translate-y-1/2 z-50">
      <ul className="space-y-3">
        {sections.map((s) => (
          <li key={s.id}>
            <a
              href={`#${s.id}`}
              className={`block h-3 w-3 rounded-full transition ${
                activeId === s.id
                  ? "bg-red-500 scale-125"
                  : "bg-gray-500"
              }`}
            />
          </li>
        ))}
      </ul>
    </nav>
  )
}