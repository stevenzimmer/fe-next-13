

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="p-6 bg-teal-500 text-white">
      <p className="py-3 border-b mb-3">Dashboard Todos Layout</p> 
      {children}
    </div>
  )
}
