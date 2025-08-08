export default function ContactPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-blue-700">Contact Us</h1>
      <p className="text-gray-700 max-w-2xl">
        Have questions, ideas, or want to collaborate? Reach out and let&apos;s start the conversation.
      </p>
      <form className="max-w-lg space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-2 border rounded"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-2 border rounded"
        />
        <textarea
          placeholder="Your Message"
          className="w-full p-2 border rounded h-32"
        />
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Send Message
        </button>
      </form>
    </div>
  );
}
