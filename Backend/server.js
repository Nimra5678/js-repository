import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Server is ready");
});

app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      Title: 1,
      content: "Why do programmers prefer dark mode?",
      Description: "👉 Because light attracts bugs. 🐛",
    },
    {
      Title: 2,
      content: "I told my computer I needed a break…",
      Description: "👉 Now it won’t stop sending me KitKats. 🍫",
    },
    {
      Title: 3,
      content: "Why did the JavaScript developer go broke?",
      Description: "👉 Because he kept using null as his savings.",
    },
    {
      Title: 4,
      content: "Why don’t skeletons fight each other?",
      Description: "👉 They don’t have the guts.",
    },
    {
      Title: 5,
      content: "What’s brown and sticky?",
      Description: "👉 A stick. 🌲",
    },
    {
      Title: 6,
      content: "Parallel lines have so much in common…",
      Description: "👉 It’s a shame they’ll never meet.",
    },
  ];

  res.send(jokes);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`server at http://localhost:${port}`);
});
