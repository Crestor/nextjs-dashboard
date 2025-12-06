import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import NavLinks from './dashboard/nav-links';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
 
      <body className={`${inter.className} antialiased`}>
 {/* Layout wrapper */}
        <div className="flex min-h-screen">
          {/* Sidebar / navigation */}
          <aside className="w-64 border-r border-gray-200 p-4">
            <nav className="flex flex-col gap-2">
              <NavLinks />
            </nav>
          </aside>

          {/* Main page content */}
          <main className="flex-1 p-6">
            {children}
          </main>
        </div>

      </body>
    </html>
  );
}
