// import { GoogleGenerativeAI } from "@google/generative-ai";
// import main from "../configs/gemini.js";

// // Initialize the Gemini AI model
// // This uses the API key from your .env file
// const genAI = new GoogleGenerativeAI(process.env.API);

// export const generateContent = async (req, res) => {
//   try {
//     const { prompt } = req.body;
//     const content = await main (prompt + "Generate a response to this prompt ");
//     res.json({ success: true, content });

    
//     } catch (error) {
//         res.json({ success: false, message: error.message });

//     // For text-only input, use the gemini-pro model
//     const model = genAI.getGenerativeModel({ model: "gemini-pro" });

//     const result = await model.generateContent(prompt);
//     const response = await result.response;
//     const text = response.text();

//     res.status(200).json({ success: true, text });

//   } catch (error) {
//     console.error("Error generating content:", error);
//     res.status(500).json({ success: false, message: "Failed to generate content from AI." });
//   }
// };

// export default { generateContent }; 


// import { GoogleGenerativeAI } from "@google/generative-ai";
// // const { GoogleGenerativeAI } = require("@google/generative-ai");

// // The 'main' import is likely redundant if you use the SDK directly.
// // You can probably remove it unless it's used elsewhere.
// // import main from "../configs/gemini.js"; 

// // Initialize the Gemini AI model using the API key from your environment variables
// const genAI = new GoogleGenerativeAI(process.env.API);

// export const generateContent = async (req, res) => {
//   // Use a single, clean try...catch block for the entire operation.
//   try {
//     // 1. Get the prompt from the request body
//     const { prompt } = req.body;

//     // 2. Add validation: Ensure a prompt was actually provided
//     if (!prompt) {
//       return toast.error(400)({ success: false, message: "Prompt is required." });
//     }

//     // 3. For text-only input, get the gemini-pro model
//     const model = genAI.getGenerativeModel({ model: "gemini-pro" });

//     // 4. Generate the content from the prompt
//     const result = await model.generateContent(prompt);
//     const response = await result.response;
//     const text = response.text();

//     // 5. Send the successful response back to the client
//     res.status(200).json({ success: true, text: text });

//   } catch (error) {
//     // This single catch block will handle any errors from the 'try' block
//     console.error("Error generating content:", error);
//     res.status(500).json({ success: false, message: "Failed to generate content from AI." });
//   }
// };

// //module.exports = { generateContent };


const { GoogleGenerativeAI } = require("@google/generative-ai");

// Read the variable from the .env file
const apiKey = process.env.GEMINI_API_KEY;

// Log the status of the API key when the server starts
if (apiKey) {
  console.log(`✅ GEMINI_API_KEY loaded. Starts with: ${apiKey.substring(0, 4)}... and ends with: ...${apiKey.slice(-4)}`);
} else {
  console.error("❌ FATAL ERROR: The GEMINI_API_KEY environment variable was not found. Check your .env file.");
}

// Initialize the client ONLY if the key exists
const genAI = apiKey ? new GoogleGenerativeAI(apiKey) : null;

const generateContent = async (req, res) => {
  // Add a fail-fast check at the beginning of the request
  if (!genAI) {
    console.error("AI request failed because client is not initialized. The API key is likely missing.");
    return res.status(500).json({
      success: false,
      message: "Server-side configuration error: AI service is not initialized.",
    });
  }

  try {
    const { prompt } = req.body;
    if (!prompt) {
      return res.status(400).json({ success: false, message: "Prompt is required." });
    }

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash-latest" });
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    res.status(200).json({ success: true, text: text });
  } catch (error) {
    console.error("Error from Google API:", error); // Log the full error from Google
    res.status(500).json({ success: false, message: "An error occurred while communicating with the AI service." });
  }
};

module.exports = { generateContent };