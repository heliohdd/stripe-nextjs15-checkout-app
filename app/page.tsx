import Image from "next/image";

export default function Home() {
  return (
    <section>
      <div className="min-h-screen p-8">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h1 className="text-3xl font-bold mb-8 text-center">
              NEUROSCIENCE <br />
              <span>Exploring the Brain</span>
            </h1>
            <div className="flex gap-6 mb-6">
              <div className="w-1/3">
                <Image
                  width={775}
                  height={1000}
                  src="/book-placeholder.jpg"
                  alt="Book Cover"
                  className="w-full rounded-lg shadow"
                />
              </div>
              <div className="w-2/3">
                <p>
                  Master the fundamentals of programming with this comprehensive
                  guide. Perfect for beginners and intermediate developers
                  looking to strengths their core programming concepts.
                </p>
                <div className="m-4">
                  <span className="text-2xl font-bold">$29.99</span>
                </div>
                <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors">
                  Purchase Book
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
