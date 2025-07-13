import React, { useState, useEffect } from "react";
import { api } from "./api";

function App() {
  const [feedbacks, setFeedbacks] = useState([]);
  const [form, setForm] = useState({ name: "", message: "" });

  // Load feedback from backend
  useEffect(() => {
    api.get("/feedback").then((res) => {
      setFeedbacks(res.data);
    });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await api.post("/feedback", form);
    setFeedbacks([...feedbacks, res.data]);
    setForm({ name: "", message: "" });
  };

  return (
    <div style={{ maxWidth: "500px", margin: "2rem auto", padding: "1rem" }}>
      <h2>📝 Feedback Form</h2>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Your Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
          style={{ width: "100%", marginBottom: "10px" }}
        />
        <textarea
          placeholder="Your Message"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          required
          style={{ width: "100%", height: "80px", marginBottom: "10px" }}
        />
        <button type="submit">Submit</button>
      </form>

      <hr />

      <ul>
        {feedbacks.map((f) => (
          <li key={f._id}>
            <strong>{f.name}</strong>: {f.message}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;