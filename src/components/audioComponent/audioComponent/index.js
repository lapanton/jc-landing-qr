import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { trimAudio } from "../helpers/trimAuio";
import microphone from "./microphone.svg";
import RecordRTC from "recordrtc";

// Styled Components
const Container = styled.div`
  //font-family: Arial, sans-serif;
  max-width: 400px;
  margin: 40px auto;
  padding: 20px 0;
  //border: 1px solid #e1e1e1;
  border-radius: 8px;
  //box-shadow: 0 0 10px rgba(0,0,0,0.1);
  text-align: center;
  font-family: Inter, sans-serif;
  font-weight: 500;
`;

const Title = styled.div`
  text-align: center;
  position: relative;
  display: none;
  background: #673e37;
  color: #fff;
  padding: 18px 22px 21px 22px;
  border-radius: 10px 10px 0 0;
  margin-bottom: 40px;
  @media screen and (max-width: 768px) {
    .iconBorder {
      width: inherit;
      height: inherit;
    }
    background: #673e37;
    display: flex;
    div {
      padding-left: 7px;
      padding-top: 6px;
      font-family: "Inter", sans-serif;
      font-weight: 500;
    }
  }
  img {
    width: 21px;
  }
  .new-label-icon {
    position: absolute;
    top: 50%;
    right: 5px;
    background: red;
    color: #fff;
    border-radius: 8px;
    border: 1px solid white;
    text-transform: uppercase;
    padding: 5px 10px;
    transform: translateY(-52%);
    font-size: 12px;
    font-weight: bold;
    letter-spacing: 1px;
  }
`;

const Button = styled.button`
  background: linear-gradient(45deg, #ffc1a1, #ff847c);
  color: #000;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s;
  margin: 5px;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 1px;
  &:hover {
    background: linear-gradient(45deg, #ffc1a1, #ff847c);
  }
`;

const FileInputLabel = styled.label`
  display: block;
  padding: 10px 15px;
  background: linear-gradient(45deg, #ffc1a1, #ff847c);
  color: #000;
  border-radius: 5px;
  cursor: pointer;
  text-align: center;
  margin: 10px 20px;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 1px;
  font-size: 14px;
  font-weight: 500;
`;

const FileInput = styled.input`
  display: none;
`;

const FileInfo = styled.div`
  margin-top: 10px;
  color: rgb(107 15 3);
`;

const Timer = styled.div`
  font-size: 20px;
  margin-top: 10px;
  color: rgb(107 15 3);
`;

function AudioPlayerRecorder(props) {
  const { audioBlob, setAudioBlob, setAudioData } = props;
  const [isRecording, setIsRecording] = useState(false);
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [time, setTime] = useState(60);
  const [chosenFileName, setChosenFileName] = useState("");
  const [tempAudioBlob, setTempAudioBlob] = useState(null);

  useEffect(() => {
    if (isRecording && time > 0) {
      const timer = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
      return () => clearTimeout(timer);
    }
    if (time === 0) {
      stopRecording();
    }
  }, [isRecording, time]);

  const startRecording = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });

    let recorder = RecordRTC(stream, {
      type: "audio",
      mimeType: "audio/wav",
      numberOfAudioChannels: 1,
    });

    recorder.startRecording();

    setIsRecording(true);
    setMediaRecorder(recorder);
  };

  const stopRecording = () => {
    if (mediaRecorder) {
      mediaRecorder.stopRecording(() => {
        const blob = mediaRecorder.getBlob();

        const audioUrl = URL.createObjectURL(blob);
        setAudioData(blob);
        setAudioBlob(audioUrl);
      });

      setIsRecording(false);
      setTime(60);
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setChosenFileName(file.name);
      trimAudio(file, (trimmedBlob) => {
        const audioUrl = URL.createObjectURL(trimmedBlob);
        setAudioData(trimmedBlob);
        setTempAudioBlob(audioUrl);
      });
    }
  };

  const acceptAudio = () => {
    setAudioBlob(tempAudioBlob);
    setTempAudioBlob(null);
  };

  const rejectAudio = () => {
    setTempAudioBlob(null);
    setChosenFileName("");
  };

  return (
    <Container>
      <Title>
        <img src={microphone} alt="JewelCocktail" />
        <div className="new-label-icon">новинка!</div>
        <div>Запись аудио</div>
      </Title>
      {!audioBlob && !tempAudioBlob ? (
        <div>
          {isRecording ? (
            <Button onClick={stopRecording}>Остановить запись</Button>
          ) : (
            <Button onClick={startRecording}>Начать запись</Button>
          )}
          <Timer>{time} секунд</Timer>
          <FileInputLabel>
            Выбрать файл
            <FileInput
              type="file"
              accept="audio/*,audio/wav,.mp3,audio/mp3,.wav"
              onChange={handleFileChange}
            />
          </FileInputLabel>
          <FileInfo>{chosenFileName || "Файл не выбран"}</FileInfo>
        </div>
      ) : tempAudioBlob ? (
        <div>
          <audio controls src={tempAudioBlob}></audio>
          <Button onClick={acceptAudio}>Принять</Button>
          <Button onClick={rejectAudio}>Отклонить</Button>
        </div>
      ) : (
        <div>
          <audio controls src={audioBlob}></audio>
          <Button onClick={() => setAudioBlob(null)}>Перезаписать</Button>
        </div>
      )}
    </Container>
  );
}

export default AudioPlayerRecorder;
