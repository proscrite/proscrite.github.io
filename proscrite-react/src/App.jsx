import { Chrono } from "react-chrono";
import "./App.css";

function App() {
  const items = [
    {
      title: "2022",
      cardTitle: "Started ProScrite",
      cardDetailedText: "Initial design and concept launched."
    },
    {
      title: "2023",
      cardTitle: "Added NLP backend",
      cardDetailedText: "Included language models and sentence generation."
    },
    {
      title: "2024",
      cardTitle: "Interactive Features",
      cardDetailedText: "Videos, timeline, and more added."
    }
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1>Pablo Herrero Gomez, personal website</h1>

      <h2>📺 Intro Video</h2>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/4kHX6_VbOJY"
        title="YouTube Video"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>

      <h2 style={{ marginTop: "50px" }}>📜 Timeline</h2>
      <div style={{ height: "500px" }}>
        <Chrono items={items} mode="VERTICAL" />
      </div>
    </div>
  );
}

export default App;
