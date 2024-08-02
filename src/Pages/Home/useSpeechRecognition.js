// src/hooks/useSpeechRecognition.js

import { useState, useEffect } from 'react';

const useSpeechRecognition = () => {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');

  useEffect(() => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();

    recognition.continuous = false;
    recognition.interimResults = true;
    recognition.lang = 'en-US';

    recognition.onstart = () => {
      // console.log('Voice recognition started');
      setIsListening(true);
    };

    recognition.onend = () => {
      // console.log('Voice recognition stopped');
      setIsListening(false);
    };

    recognition.onresult = (event) => {
      let finalTranscript = '';
      for (let i = 0; i < event.results.length; i++) {
        const transcriptSegment = event.results[i][0].transcript;
        finalTranscript += transcriptSegment;
      }
      setTranscript(finalTranscript);
    };

    if (isListening) {
      recognition.start();
    } else {
      recognition.stop();
    }

    return () => {
      recognition.stop();
    };
  }, [isListening]);

  return { transcript, setTranscript, isListening, setIsListening };
};

export default useSpeechRecognition;
