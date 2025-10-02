import React, { useState, useEffect } from "react";

export default function App() {
  const [product, setProduct] = useState("");
  const [exercise, setExercise] = useState(null);
  const [answer, setAnswer] = useState("");
  const [feedback, setFeedback] = useState("");
  const [timeLeft, setTimeLeft] = useState(0);

  const exercisesDB = {
    aws: [
      {
        id: 1,
        title: "AWS S3 Bucket",
        description: "Create an S3 bucket with versioning enabled.",
        solution: "aws s3api create-bucket",
        docLink: "https://docs.aws.amazon.com/s3/index.html"
      }
    ],
    // ... autres technologies comme avant
  };

  useEffect(() => {
    if (!exercise) return;
    setTimeLeft(600); // 10 min
    const timer = setInterval(() => setTimeLeft((t) => Math.max(t - 1, 0)), 1000);
    return () => clearInterval(timer);
  }, [exercise]);

  const startExercise = () => {
    if (!product) return;
    const ex = exercisesDB[product][0];
    setExercise(ex);
    setFeedback("");
    setAnswer("");
  };

  const checkAnswer = () => {
    if (answer.trim().toLowerCase().includes(exercise.solution.split(" ")[0])) {
      setFeedback("✅ Correct (contains key command). Check full syntax in docs!");
    } else {
      setFeedback("❌ Incorrect. Try again using the official docs.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-6">Docs as Exam</h1>

      {!exercise ? (
        <div className="bg-white shadow rounded p-6 w-full max-w-lg">
          <h2 className="text-xl mb-4">Choose your technology</h2>
          <select
            className="border rounded p-2 w-full mb-4"
            value={product}
            onChange={(e) => setProduct(e.target.value)}
          >
            <option value="">-- Select --</option>
            <option value="aws">AWS</option>
            <option value="gcp">GCP</option>
            <option value="azure">Azure</option>
            <option value="redhat">Red Hat OpenShift</option>
            <option value="linuxfoundation">Linux Foundation / Kubernetes</option>
            <option value="ibm">IBM Cloud</option>
          </select>
          <button
            onClick={startExercise}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Start Exercise
          </button>
        </div>
      ) : (
        <div className="bg-white shadow rounded p-6 w-full max-w-3xl">
          <h2 className="text-xl font-bold mb-2">{exercise.title}</h2>
          <p className="mb-4">{exercise.description}</p>
          <p className="text-sm text-gray-500 mb-4">⏱️ Time left: {timeLeft}s</p>

          <iframe
            src={exercise.docLink}
            title="Official Documentation"
            className="w-full h-64 border rounded mb-4"
          ></iframe>

          <textarea
            className="border rounded p-2 w-full mb-4"
            rows="3"
            placeholder="Enter your command here..."
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
          ></textarea>

          <button
            onClick={checkAnswer}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Submit Answer
          </button>

          {feedback && <p className="mt-4">{feedback}</p>}
        </div>
      )}
    </div>
  );
}
