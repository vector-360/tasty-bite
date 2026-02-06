export default function WhatsAppButton() {
  const phoneNumber = "2348012345678"; // replace with restaurant WhatsApp
  const message = "Hello, I’d like to place an order.";

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 text-white px-5 py-3 rounded-full shadow-lg font-semibold hover:bg-green-600"
    >
      Order Now
    </a>
  );
}
