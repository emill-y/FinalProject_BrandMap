
export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-purple-600 via-indigo-700 to-indigo-800 text-white py-32 px-6 text-center min-h-screen flex items-center justify-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-5xl sm:text-6xl font-extrabold leading-tight mb-6">
          Organize your ideas<br />like never before.
        </h2>
        <p className="text-xl text-indigo-100 mb-10">
          With BrandMap, transform brainstorming into beautiful, interactive mind maps. 
          Collaborate. Inspire. Create.
        </p>
        <div className="space-x-4">
          <button className="px-8 py-3 bg-yellow-400 text-black rounded-full hover:bg-yellow-300 transition text-lg font-semibold">
            Start Mapping
          </button>
          <button className="px-8 py-3 border-2 border-white text-white rounded-full hover:bg-white hover:text-indigo-800 transition text-lg font-semibold">
            Watch Demo
          </button>
        </div>
      </div>
    </section>
  );
}
