export default function Hero() {
  return (
    <section className="px-8 py-20 bg-orange-50">
      <h2 className="text-4xl font-bold mb-4 text-slate-900">
        Delicious Meals, Made Fresh Daily
      </h2>

      <p className="mb-6 text-gray-700 max-w-xl">
        TastyBite Kitchen serves freshly prepared Nigerian dishes at affordable prices.
        Perfect for lunch, dinner, and take-away.
      </p>

      <a
        href="#menu"
        className="inline-block bg-orange-700 text-white px-6 py-3"
      >
        View Menu
      </a>
    </section>
  );
}
