export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-slate-900 text-white">
      <h1 className="text-xl font-bold">TastyBite Kitchen</h1>
      <div className="space-x-6">
        <a href="#menu" className="hover:underline">Menu</a>
        <a href="#contact" className="hover:underline">Contact</a>
      </div>
    </nav>
  );
}
