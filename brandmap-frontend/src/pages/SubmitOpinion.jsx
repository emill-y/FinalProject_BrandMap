

import { useState } from "react";

export default function SubmitOpinion() {
  const [brand, setBrand] = useState('');
  const [opinion, setOpinion] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('http://localhost:8080/api/opinions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ brand, opinion }),
    });

    if (res.ok) {
      setSuccess(true);
      setBrand('');
      setOpinion('');
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 bg-white p-8 shadow-xl rounded-xl">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Submit Your Opinion</h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        <input
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          placeholder="Brand Name"
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
          required
        />
        <textarea
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          placeholder="What do you think about the brand?"
          value={opinion}
          onChange={(e) => setOpinion(e.target.value)}
          required
        />
        <button className="bg-indigo-600 text-white px-5 py-3 rounded-lg hover:bg-indigo-700 transition shadow-md">
          Submit
        </button>
        {success && <p className="text-green-600 font-medium">Opinion submitted!</p>}
      </form>
    </div>
  );
}

