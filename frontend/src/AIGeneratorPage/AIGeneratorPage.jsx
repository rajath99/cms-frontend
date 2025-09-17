import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast'; // Make sure you have react-hot-toast installed
import { marked } from 'marked'; // Use 'marked' instead of 'parse' for clarity
import Quill from 'quill';
import 'quill/dist/quill.snow.css'; // Import Quill's CSS

const AIGeneratorPage = () => {
  // --- State Management ---
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // --- Refs for Quill Editor ---
  const quillEditorRef = useRef(null); // Ref for the container element
  const quillInstanceRef = useRef(null); // Ref to store the Quill instance

  // --- Initialize Quill Editor ---
  // This useEffect runs only once when the component mounts
  useEffect(() => {
    if (quillEditorRef.current && !quillInstanceRef.current) {
      quillInstanceRef.current = new Quill(quillEditorRef.current, {
        theme: 'snow',
        modules: {
          toolbar: [
            [{ 'header': [1, 2, false] }],
            ['bold', 'italic', 'underline'],
            ['list', 'bullet']
          ],
        },
        placeholder: 'AI-generated content will appear here...',
      });
    }
  }, []); // Empty dependency array means it runs once on mount

  // --- API Call and Logic ---
  const handleSubmit = async (e) => {
    // Prevent the default form submission which reloads the page
    e.preventDefault();

    if (!prompt) {
      toast.error('Prompt is required.');
      return; // Stop the function if there's no prompt
    }

    // Set loading and clear previous results
    setLoading(true);
    setError('');
    setResponse(''); // Clear the plain text response state
    if (quillInstanceRef.current) {
      quillInstanceRef.current.setText(''); // Clear the Quill editor
    }

    try {
      // Make a POST request to your backend endpoint
      const result = await axios.post('https://cms-api-sms.onrender.com/api/ai/generate', {
        prompt: prompt,
      });

      if (result.data.success) {
        toast.success('Content generated successfully!');
        const htmlContent = marked(result.data.text); // Convert Markdown to HTML
        
        // Safely set the content in the Quill editor
        if (quillInstanceRef.current) {
          quillInstanceRef.current.clipboard.dangerouslyPasteHTML(htmlContent);
        }
        
        // Also update the plain text state if needed elsewhere
        setResponse(result.data.text);

      } else {
        // Handle errors from the backend API
        const errorMessage = result.data.message || 'An unknown error occurred.';
        toast.error(errorMessage);
        setError(errorMessage);
      }
    } catch (err) {
      // Handle network errors or server crashes
      const errorMessage = err.response?.data?.message || 'Failed to connect to the server. Please try again.';
      toast.error(errorMessage);
      setError(errorMessage);
      console.error("API call failed:", err);
    } finally {
      // This will run whether the API call succeeded or failed
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: 'auto' }}>
      <h1>AI Content Generator</h1>
      <p>Enter a prompt below and let the AI generate a response for you.</p>

      {/* The form now correctly calls handleSubmit on submission */}
      <form onSubmit={handleSubmit}>
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="e.g., Write a short story about a robot who discovers music."
          rows="5"
          style={{ width: '100%', padding: '10px', fontSize: '1rem', marginBottom: '1rem' }}
          required
        />
        <button 
          type="submit" 
          disabled={loading}
          style={{ padding: '10px 20px', fontSize: '1rem', cursor: 'pointer' }}
        >
          {loading ? 'Generating...' : 'Generate Content'}
        </button>
      </form>

      {/* Display Area now includes the Quill editor */}
      <div style={{ marginTop: '2rem' }}>
        <h2>Response Editor:</h2>
        {error && <p style={{ color: 'red' }}>Error: {error}</p>}
        {/* This div is the container where Quill will be mounted */}
        <div ref={quillEditorRef} style={{ minHeight: '200px', border: '1px solid #ccc', background: '#fff' }}></div>
      </div>
    </div>
  );
};

export default AIGeneratorPage;
