export default function NewsletterForm({ darkBg = false }) {
  return (
    <div className={`text-center ${darkBg ? "text-white" : "text-gray-800"}`}>
      {!darkBg && (
        <h2
          className={`text-sm font-semibold ${
            darkBg ? "text-green-400" : "text-green-500"
          }`}
        >
          Newsletter
        </h2>
      )}

      <h3 className="text-2xl font-bold mt-2 mb-4">
        Subscribe to get latest updates
      </h3>
      <form className="flex lg:w-3/5 mx-auto">
        <input
          type="email"
          placeholder="Your Email"
          className="flex-grow px-4 py-4 text-xl rounded-l-md focus:outline-none focus:ring-2 focus:ring-green-500"
          required
        />
        <button
          type="submit"
          className="bg-green-500 text-white px-6 py-2 rounded-r-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
}
