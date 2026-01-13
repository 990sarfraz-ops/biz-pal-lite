// Asr-e-Iqbal
// Simple Course Script Generator (Step 1)

function generateCourseScript(topic, level, language) {
  if (!topic) {
    return "Topic is required";
  }

  let intro = "";
  let body = "";
  let outro = "";

  if (language === "urdu") {
    intro = `آج ہم سیکھیں گے: ${topic}\n\n`;
    body = `یہ کورس ${level} لیول کے لیے تیار کیا گیا ہے۔ 
ہم اس موضوع کو آسان الفاظ میں، قدم بہ قدم سمجھیں گے۔\n\n`;
    outro = "آخر میں آپ اس موضوع کو خود استعمال کرنے کے قابل ہو جائیں گے۔";
  } else {
    intro = `Today we will learn: ${topic}\n\n`;
    body = `This course is designed for ${level} level learners.
We will explain everything step by step in simple words.\n\n`;
    outro = "By the end, you will be able to use this skill practically.";
  }

  return intro + body + outro;
}

// Example test (temporary)
console.log(
  generateCourseScript(
    "E-commerce for Beginners",
    "Beginner",
    "urdu"
  )
);
