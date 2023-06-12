

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="p-6 bg-white text-black">
      <p className="py-3 border-b mb-3">Dashboard Layout</p> 
      {children}
    </div>
  )
}
