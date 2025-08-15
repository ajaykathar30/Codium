// seed.js
import mongoose from "mongoose";
import Category from "./models/category.js";
import Question from "./models/question.js";
import dotenv from 'dotenv';
dotenv.config();

const MONGO_URI = process.env.MONGO_URI; 
const DATA_URL = "https://test-data-gules.vercel.app/data.json"; 

async function seed() {
  try {
    // Connect
    await mongoose.connect(MONGO_URI);
    console.log("Connected to MongoDB");

    // Clear old data
    await Category.deleteMany({});
    await Question.deleteMany({});
    console.log("🗑 Old data cleared");

    // Fetch JSON
    const res = await fetch(DATA_URL);
    const data = await res.json();

    // Loop categories
    for (const category of data.data) {
      const questionIds = [];

      // Create questions for this category
      for (const q of category.ques) {
        if (!q.title) continue; 

        const newQ = await Question.create({
          title: q.title || "2 sum",
          url: q.p1_link|| q.p2_link|| "https://leetcode.com/problems/two-sum/description/",
          yt: q.yt_link || "https://www.youtube.com/watch?v=UXDSeD9mN-k",
          difficulty: q.difficulty || "medium"
        });

        questionIds.push(newQ._id);
      }

      // Create category with question refs
      await Category.create({
        title: category.title,
        questions: questionIds
      });
    }

    console.log(" Seeding complete!");
    process.exit();
  } catch (err) {
    console.error("Error seeding:", err);
    process.exit(1);
  }
}

seed();
