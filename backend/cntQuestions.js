const countQuestions = async (req, res) => {
  try {
    const DATA_URL = "https://test-data-gules.vercel.app/data.json";
    const response = await fetch(DATA_URL);
    const data = await response.json();
    const totalQuestions = data.data.reduce((acc, category) => acc + category.ques.length, 0);
    console.log(`Total questions: ${totalQuestions}`);
  } catch (error) {
    console.error("Error counting questions:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

countQuestions();
