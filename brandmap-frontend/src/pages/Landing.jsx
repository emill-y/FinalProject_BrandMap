
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="text-center py-20 px-4 bg-white rounded-xl shadow-lg max-w-4xl mx-auto mt-10">
      <h2 className="text-5xl font-extrabold text-gray-900 mb-6">See what brands really stand for.</h2>
      <p className="text-gray-600 text-lg mb-8">
        Explore how companies align with your values. Dive into real opinions and trace their social and ethical impact.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <Link to="/map">
          <button className="bg-indigo-600 text-white px-6 py-3 rounded-xl hover:bg-indigo-700 transition font-medium shadow-md">Explore Map</button>
        </Link>
        <Link to="/submit">
          <button className="border border-indigo-600 text-indigo-600 px-6 py-3 rounded-xl hover:bg-indigo-50 transition font-medium shadow-md">Submit Opinion</button>
        </Link>
      </div>
    </div>
  );
}