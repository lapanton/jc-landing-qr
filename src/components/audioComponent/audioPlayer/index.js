import React, { useState, useEffect } from "react";

function AudioPlayer({ audioData, baseUrl }) {
  const [audioURL, setAudioURL] = useState(null);

  useEffect(() => {
    if (audioData && audioData.file) {
      const sourceURL = `https://admin.jewelcocktail.com/media/${audioData.file}`;

      fetch(sourceURL)
        .then(response => response.arrayBuffer())
        .then(buffer => {
          // Hypothetical decode and convert process.
          // This is where you would use web-audio-api and audio-decode to process the buffer.
          // Once you get the resultant buffer in the desired format, you can generate a blob URL.

          const audioBlob = new Blob([buffer], { type: "audio/wav" });
          const blobURL = URL.createObjectURL(audioBlob);

          setAudioURL(blobURL);
        })
        .catch(error => {
          console.error("Error fetching or processing audio:", error);
        });
    }
  }, [audioData]);

  if (!audioURL) {
    return <div>No audio data available</div>;
  }

  return (
    <div style={{ marginTop: "30px" }}>
      <audio controls>
        <source src={audioURL} type="audio/wav" />
        Your browser does not support the audio tag.
      </audio>
    </div>
  );
}

export default AudioPlayer;
