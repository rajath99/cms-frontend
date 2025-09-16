// This file is CommonJS. It MUST use 'require'.
const express = require('express');
const router = express.Router();

// This is the "Bridge".
// It is an async function that uses the special `import()` to load the ESM controller.
const aiControllerWrapper = async (req, res, next) => {
  try {
    // Dynamically import the ES Module controller.
    const aiController = await import('../controller/ai.controller.js');
    
    // Call the named 'generateContent' function from the imported module.
    aiController.generateContent(req, res, next);
  } catch (error) {
    console.error("Error in AI controller bridge:", error);
    res.status(500).json({ message: "Internal server error in AI module." });
  }
};

// The route uses the async wrapper.
router.post('/generate', aiControllerWrapper);

// This file is CommonJS. It MUST use 'module.exports'.
module.exports = router;