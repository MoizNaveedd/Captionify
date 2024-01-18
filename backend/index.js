
const OpenAI = require('openai');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
app.use(cors());
const port = 3000;

// // Replace 'your-api-key' with your actual OpenAI API key
const openai = new OpenAI({ apiKey: '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' });
// const openai = new OpenAI({ apiKey: 'sk-e2ycA55bkI4UVDOzuZjGT3BlbkFJSLiNjHe2OtlAmhuCpO3dsdX' });
const axios = require('axios');
app.use(express.json());

app.post('/generate-text', async (req, res) => {
  console.log("It enters")
  const { url, vibe, language } = req.body;

  try {
    // Fetch data from the URL processing API
    const response = await axios.post('https://daa5-34-86-41-131.ngrok-free.app/process_url', { url });
    const contentFromURL = response.data;
    console.log(contentFromURL)

    // Construct conversation for OpenAI GPT-3.5-turbo
    const conversation = [
      { role: 'user', content: `Make a caption on ${contentFromURL} and have vibe of ${vibe} in ${language} language. and add some hashtags for Instagram posts` },
    ];

    // Generate text using OpenAI API
    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: conversation,
    });

    // Extract generated text from the response
    const generatedText = completion.choices[0].message.content;
    console.log(generatedText)

    // Send the generated text as a response
    res.json({ generatedText });
  } catch (error) {
    console.error('Error generating text:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});




const feedbackRoutes = require('./src/routes/feedback');
let ans = mongoose.connect("mongodb://127.0.0.1:27017/Captionify");

if (ans) {
  console.log("connected to the mongodb server");
}
else{
  console.log("Not connected to the mongodb server");
}
app.use('/api/feedback', feedbackRoutes);



app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
