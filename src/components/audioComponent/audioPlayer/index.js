import React, { useState, useEffect, useRef } from "react";

function AudioPlayer({ audioData, baseUrl }) {
  const [audioURL, setAudioURL] = useState(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioData && audioData.file) {
      const sourceURL = `https://admin.jewelcocktail.com/media/${audioData.file}`;

      fetch(sourceURL)
        .then((response) => response.arrayBuffer())
        .then((buffer) => {
          // Hypothetical decode and convert process.
          // This is where you would use web-audio-api and audio-decode to process the buffer.
          // Once you get the resultant buffer in the desired format, you can generate a blob URL.

          const audioBlob = new Blob([buffer], { type: "audio/wav" });
          const blobURL = URL.createObjectURL(audioBlob);

          setAudioURL(blobURL);
        })
        .catch((error) => {
          console.error("Error fetching or processing audio:", error);
        });
    }
  }, [audioData]);

  if (!audioURL) {
    return <div>No audio data available</div>;
  }

  const togglePlayback = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  if (!audioURL) {
    return <div>No audio data available</div>;
  }
  const PlayIcon = (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M8 5V19L19 12L8 5Z" fill="white" />
    </svg>
  );

  const PauseIcon = (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M6 19H10V5H6V19ZM14 5V19H18V5H14Z" fill="white" />
    </svg>
  );
  return (
    <div
      style={{
        marginTop: "30px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <audio ref={audioRef} src={audioURL} type="audio/wav" />

      <button
        onClick={togglePlayback}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          background: "linear-gradient(45deg, #ffc1a1, #ff847c)",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          marginTop: "10px",
          transition: "all 0.3s ease",
          animation: !isPlaying ? "bounce 0.6s infinite" : "none",
        }}
        onMouseOver={(e) =>
          (e.target.style.background =
            "linear-gradient(45deg, #ff9b87, #ff6b6b)")
        }
        onMouseOut={(e) =>
          (e.target.style.background =
            "linear-gradient(45deg, #ffc1a1, #ff847c)")
        }
      >
        {isPlaying ? PauseIcon : PlayIcon}
      </button>
      <style jsx>{`
        @keyframes bounce {
          0%,
          20%,
          50%,
          80%,
          100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-5px);
          }
          60% {
            transform: translateY(-3px);
          }
        }
      `}</style>
    </div>
  );
}

export default AudioPlayer;
