import express from "express";
import * as dotenv from "dotenv";
import fetch from "node-fetch"; // You might need to install 'node-fetch' if not already available

dotenv.config();

const router = express.Router();

// Get the new Stability AI API Key
const STABILITY_API_KEY = process.env.STABILITY_API_KEY; 

if (!STABILITY_API_KEY) {
  throw new Error("Missing STABILITY_API_KEY in .env file");
}

router.route("/").get((req, res) => {
  res.send("Hello from Stability AI (SDXL)!");
});

router.route("/").post(async (req, res) => {
  try {
    const { prompt } = req.body;
    
    // 1. Define the API endpoint and model
    const engineId = 'stable-diffusion-xl-1024-v1-0'; // Common SDXL model
    const apiHost = 'https://api.stability.ai';

    // 2. Call the Stability AI API
    const response = await fetch(
      `${apiHost}/v1/generation/${engineId}/text-to-image`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json', // We expect JSON back
          'Authorization': `Bearer ${STABILITY_API_KEY}`,
        },
        body: JSON.stringify({
          text_prompts: [
            {
              text: prompt,
            },
          ],
          cfg_scale: 7, // Configuration scale
          height: 1024,
          width: 1024,
          samples: 1, // Number of images to generate (must be 1 for your current frontend logic)
          steps: 30, // Number of diffusion steps
        }),
      }
    );

    // Check for non-200 status codes from the API
    if (!response.ok) {
        const errorData = await response.json();
        // Log the actual error from Stability AI for debugging
        console.error("Stability AI API Error:", errorData); 
        return res.status(response.status).json(errorData);
    }
    
    // 3. Parse the JSON response
    const data = await response.json();

    // 4. Extract the base64 image data
    // Stability AI returns an array of artifacts, each with a base64 string
    const imageBase64 = data.artifacts[0]?.base64; 

    if (!imageBase64) {
      throw new Error("Stability AI did not return a valid image.");
    }

    // 5. Send the photo back to the frontend in the expected format
    res.status(200).json({ photo: imageBase64 });

  } catch (error) {
    console.error(error);
    // Send a JSON error response that the frontend can parse
    res.status(500).json({ 
        message: 'Something went wrong with the Stability AI API call.', 
        details: error.message || 'Unknown server error.' 
    });
  }
});

export default router;