import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [Jokes, setJokes] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    axios
      .get("/api/jokes")
      .then((response) => {
        setJokes(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleNextJoke = () => {
    if (Jokes.length > 0) {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % Jokes.length);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">😂 Jokes App</h1>
      <p className="text-gray-700 mb-6">Total Jokes: {Jokes.length}</p>

      {Jokes.length > 0 ? (
        <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-md text-center">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            {Jokes[currentIndex].content}
          </h3>
          <p className="text-gray-600">{Jokes[currentIndex].Description}</p>
        </div>
      ) : (
        <p className="text-gray-500">Loading jokes...</p>
      )}

      <button
        onClick={handleNextJoke}
        className="mt-6 px-6 py-2 bg-blue-500 text-white font-medium rounded-xl shadow-md hover:bg-blue-600 transition"
      >
        Next Joke
      </button>
    </div>
  );
}

export default App;
