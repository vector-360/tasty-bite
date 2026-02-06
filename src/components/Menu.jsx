export default function Menu() {
  return (
    <section id="menu" className="px-8 py-16 bg-white">
      <h3 className="text-2xl font-bold mb-6 text-slate-900">
        Popular Dishes
      </h3>

      <div className="space-y-4 max-w-md">
        <div className="border p-4">
          Jollof Rice & Chicken — ₦2,500
        </div>

        <div className="border p-4">
          Fried Rice & Beef — ₦2,800
        </div>

        <div className="border p-4">
          Ofada Rice & Sauce — ₦3,000
        </div>
      </div>
    </section>
  );
}
