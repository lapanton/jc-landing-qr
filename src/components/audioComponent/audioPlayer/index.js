import React from "react";

function AudioPlayer({ audioData, baseUrl }) {
  if (!audioData || !audioData.file) {
    return <div>No audio data available</div>;
  }

  const audioURL = `https://admin.jewelcocktail.com/media/${audioData.file}`;

  return (
    <div style={{ marginTop: "30px" }}>
      <audio controls>
        <source src={audioURL} type="audio/ogg" />
        Your browser does not support the audio tag.
      </audio>
    </div>
  );
}

export default AudioPlayer;
