import Link from "next/link";

export default function Header() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-10 h-auto md:h-12 bg-slate-400 p-4 md:px-10" 
         style={{ marginBottom: '100px' }}>
      {/* Logo/Name */}
      <h1 className="text-lg font-bold">FARIA USMAN</h1>
      
      {/* Navigation Links */}
      <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
        <div>
          <Link href="/">Home</Link>
        </div>
        <div>
          <Link href="contact-us">Contact Us</Link>
        </div>
        <div>
          <Link href="about">About</Link>
        </div>
      </div>
    </div>
  );
}