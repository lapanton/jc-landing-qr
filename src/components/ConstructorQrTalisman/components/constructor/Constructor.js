import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import Compress from "browser-image-compression";
import { useLocation, useParams } from "react-router-dom";
import { useDropzone } from "react-dropzone";
import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import removeIcon from "./remove.png";

import {
  Wrapper,
  WrapConstructorArea,
  SideArea,
  ConstructorArea,
  TextMessage,
  Fon,
  Ramka,
  ResultPrewiev,
  TextMessageMob,
  WrapPhotoUpload,
  InnerPhoto,
  ThumbsContainer,
  Thumb,
  ThumbInner,
  Img,
  FonMobile,
  WrapPreviewResult,
  InnerPreviewResult,
  MessageView,
  ButtonSubmit,
  WrapSlider,
  ResultPrewievMob,
  WrapBorderView,
  InnerWrapSlider,
  WrapInputCheckBox,
  WrapPhoneEmail,
} from "./constructor-style";
import t from "./t.png";
import fon from "./fon.png";
import ramka from "./ramka.png";
import result from "./result.png";
import plus from "./plus.png";
import { BounceAnimation } from "../../../../animation/BounceAnimation";
import { NotifyPopup } from "../../../ConstructorQr/components/notify-popup";
import { FormattedMessage } from "react-intl";
// import {ConfettiAnimation} from "../../../../animation/Confetti";
import AudioPlayerRecorder from "../../../audioComponent/audioComponent";
import microphone from "../../../audioComponent/audioComponent/microphone.svg";
import AudioPlayer from "../../../audioComponent/audioPlayer";
import {
  Podpsi,
  WrapSignature,
} from "../../../ConstructorQr/components/constructor/constructor-style";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
export const ConstructorTalisman = (props) => {
  const { pathname } = useLocation();
  const value = props.value;
  const langProps = props.langProps;
  const { id } = useParams();
  const [checked, setChecked] = useState(true);
  const [sendData, setSendData] = useState(false);
  const [files, setFiles] = useState([]);
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");
  const [authorEmail, setAuthorEmail] = useState("");
  const [audioBlob, setAudioBlob] = useState(null);
  const onDrop = useCallback(
    (acceptedFiles, fileRejections) => {
      fileRejections.forEach((file) => {
        file.errors.forEach((err) => {
          if (err.code === "file-too-large") {
            alert(
              langProps.locale === "ru"
                ? "Оптимизируйте пожалуста ваше фото, максимально  допустимый размер фото 10mb"
                : "Please optimize your photo, the maximum allowed size for the photo is 10MB.",
            );
          }

          if (err.code === "file-invalid-type") {
            alert(
              langProps.locale === "ru"
                ? "Неверный тип файла"
                : "Invalid file type.",
            );
          }
        });
      });

      const options = {
        maxSizeMB: 1,
        maxWidthOrHeight: 800,
        useWebWorker: true,
      };

      Compress(acceptedFiles[0], options)
        .then((compressedBlob) => {
          compressedBlob.lastModifiedDate = new Date();
          const convertedBlobFile = new File(
            [compressedBlob],
            acceptedFiles[0].name,
            { type: acceptedFiles[0].type, lastModified: Date.now() },
          );
          Object.assign(convertedBlobFile, {
            preview: URL.createObjectURL(convertedBlobFile),
            path: convertedBlobFile.name,
          });
          setFiles(files.concat([convertedBlobFile]));
          if (files.length >= 4)
            alert(
              langProps.locale === "ru"
                ? "Максимально допустимое количество 3 фото"
                : "The maximum allowed quantity is 3 photos",
            );
        })
        .catch((e) => {
          console.log("Something goes wrong: ", e);
        });
    },
    [files, langProps.locale],
  );

  const remove = (file) => {
    // console.log('file', file, files);
    const newArray = files.filter((val) => val.name !== file.name);
    setFiles(newArray);
  };

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    maxFiles: 3,
    maxSize: 31457280,
    multiple: false,
    onDrop,
    remove,
  });

  const thumbs = files.map((file) => (
    <Thumb key={file.name}>
      <ThumbInner>
        <Img src={file.preview} />
      </ThumbInner>
      <div className="remove-xxxx" onClick={() => remove(file)}>
        <img src={removeIcon} alt="JewelCocktail" />
      </div>
    </Thumb>
  ));

  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks
    const cleanup = async () => {
      await sleep(100);
      files.forEach((file) => URL.revokeObjectURL(file.preview));
      console.log("revoked");
    };
    cleanup();
  }, [files]);
  const handleChangeMessage = (e) => {
    if (e.target.value.length <= 400) {
      setMessage(e.target.value);
    }
  };

  const handleChangePhone = (e) => {
    if (e.target.value.length <= 15) {
      setPhone(e.target.value);
    }
  };

  const handleChangeAuthorEmail = (e) => {
    if (e.target.value.length <= 30) {
      setAuthorEmail(e.target.value);
    }
  };

  const [showVediteText, setShowVediteText] = useState(false);
  const [uplFoto, setUplFoto] = useState(false);
  const [soglasie, setSeoglasie] = useState(false);
  const [mailvalid, setMailValid] = useState(false);
  const [statusAds, setStatusAds] = useState(false);
  const [validAudio, setValidAudio] = useState(false);
  const [audioData, setAudioData] = useState(null);

  const handleSubmit = async () => {
    if (message === "") {
      setShowVediteText(true);
      return setTimeout(() => {
        setShowVediteText(false);
      }, 3000);
    }

    if (files.length === 0) {
      setUplFoto(true);
      return setTimeout(() => {
        setUplFoto(false);
      }, 3000);
    }

    if (authorEmail === "" && !authorEmail.includes("@")) {
      setMailValid(true);
      return setTimeout(() => {
        setMailValid(false);
      }, 3000);
    }

    if (!checked) {
      setSeoglasie(true);
      return setTimeout(() => {
        setSeoglasie(false);
      }, 3000);
    }

    const formData = new FormData();

    const rest = {
      msg: message,
      author: "",
      status: "completed",
      email: authorEmail,
      phone: phone,
      sendEmail: true,
      shortId: id,
      ads: statusAds,
    };

    files.forEach((file) => formData.append("media", file));

    // Convert audioData Blob to binary ArrayBuffer and append to formData
    if (audioData) {
      const fileAudio = new File([audioData], "recording.ogg", {
        type: "audio/ogg",
      });
      formData.append("media", fileAudio);
    }

    Object.entries(rest).forEach(([key, value]) => {
      formData.append(key, value);
    });

    try {
      setSendData(true);
      await axios
        .patch(`https://admin.jewelcocktail.com/v1/qrcodes/${id}`, formData)
        .then(() => {
          setTimeout(() => {
            window.location.reload();
          }, 100);
        });
    } catch (error) {
      console.log("something goes wroong, error: ", error);
    } finally {
      console.log("finaly");
    }
  };

  const [hide, setHide] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setHide(false);
    }, 3500);
  }, []);

  if (sendData) {
    return <BounceAnimation />;
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  if (value?.status === "pending") {
    return null;
  }

  const images = value?.status === "completed" ? value.img : files;

  const messageBr = value.msg?.split("<br/>").join("\n");

  document.body.style.background = "#000";

  // if (pathname.indexOf("/qrt/") > -1) {
  //   document.body.style.background = "#000";
  // }
  return (
    <Wrapper>
      {showVediteText && (
        <NotifyPopup value={<FormattedMessage id="qr.validText" />} />
      )}
      {uplFoto && (
        <NotifyPopup value={<FormattedMessage id="qr.validPhoto" />} />
      )}
      {soglasie && (
        <NotifyPopup value={<FormattedMessage id="qr.soglasie" />} />
      )}
      {mailvalid && (
        <NotifyPopup value={<FormattedMessage id="qr.mailvalid" />} />
      )}
      {validAudio && <NotifyPopup value="Пожалуйста, добавьте аудио" />}
      <h2
        className={value?.status === "completed" ? "completed" : "notcompleted"}
      >
        Конструктор послания
      </h2>
      {/*{value?.status === 'completed' && hide &&  (*/}
      {/*  <ConfettiAnimation/>*/}
      {/*)}*/}
      <WrapConstructorArea>
        <SideArea
          className={
            value?.status === "completed" ? "completed" : "notcompleted"
          }
        >
          <TextMessage>
            <img src={t} alt="JewelCocktail" />
            <div>
              {langProps.locale === "ru" ? "Текст/символы" : "Text/characters"}
            </div>

            <span>
              {langProps.locale === "ru"
                ? "Заполните талисман до 400 символов"
                : "Fill the talisman up to 400 characters"}
            </span>
          </TextMessage>

          <Fon>
            <img src={fon} alt="JewelCocktail" />
            <div>{langProps.locale === "ru" ? "Изображение" : "Images"}</div>
            <span>
              {langProps.locale === "ru"
                ? "Добавьте до 3 изображений"
                : "Add up to 3 images"}
            </span>
            <br />
            <br />
            <br />
            <br />
            <br />
          </Fon>

          <Ramka>
            <img src={ramka} alt="JewelCocktail" />
            <div>Рамка</div>
            <span>Выберите одну из предложенных рамок</span>
          </Ramka>
          <Podpsi style={{ marginTop: "135px" }}>
            <img
              src={microphone}
              alt="JewelCocktail"
              style={{ width: "22px" }}
            />
            <div>
              <FormattedMessage id="audio.recording" />
            </div>
            <span>
              <FormattedMessage id="audio.add" />
            </span>
            <div className="new-label-icon">
              <FormattedMessage id="audio.new" />
            </div>
          </Podpsi>

          <ResultPrewiev>
            <img src={result} alt="JewelCocktail" />
            <div>
              {langProps.locale === "ru"
                ? "Предварительный результат"
                : "Preview"}
            </div>
            <span>
              {langProps.locale === "ru"
                ? "Вид цифрового талисмана"
                : "Look of of a digital talisman"}
            </span>
          </ResultPrewiev>
        </SideArea>

        <ConstructorArea
          className={
            value?.status === "completed" ? "noMarging" : "notcompleted"
          }
        >
          <TextMessageMob
            className={
              value?.status === "completed" ? "completed" : "notcompleted"
            }
          >
            <img src={t} alt="JewelCocktail" />
            <div>
              {langProps.locale === "ru" ? "Текст/символы" : "Text/characters"}
            </div>
          </TextMessageMob>
          <p
            className={
              value?.status === "completed" ? "completed" : "notcompleted"
            }
          >
            {langProps.locale === "ru"
              ? "Заполните талисман до 400 символов"
              : "Fill the talisman up to 400 characters"}
          </p>
          <textarea
            value={message}
            name="message"
            cols="30"
            rows="5"
            onChange={handleChangeMessage}
            className={
              value?.status === "completed" ? "completed" : "notcompleted"
            }
          />

          <WrapPhotoUpload
            className={
              value?.status === "completed" ? "completed" : "notcompleted"
            }
          >
            <FonMobile>
              <img src={fon} alt="JewelCocktail" />
              <div>{langProps.locale === "ru" ? "Изображение" : "Images"}</div>
            </FonMobile>
            <p>
              {langProps.locale === "ru"
                ? "Добавьте до 3 изображений"
                : "Add up to 3 images"}
            </p>
            <InnerPhoto>
              <section className="container">
                <ThumbsContainer>{thumbs}</ThumbsContainer>
                <div
                  {...getRootProps({ className: "dropzone" })}
                  style={
                    files.length >= 3
                      ? { pointerEvents: "none", opacity: 0.4 }
                      : { pointerEvents: "inherit", opacity: 1 }
                  }
                >
                  <input {...getInputProps()} />
                  <img src={plus} alt="JewelCocktail" />
                </div>
              </section>
            </InnerPhoto>
          </WrapPhotoUpload>
          <WrapSignature
            className={
              value?.status === "completed" ? "completed" : "notcompleted"
            }
          >
            <AudioPlayerRecorder
              setAudioBlob={setAudioBlob}
              audioBlob={audioBlob}
              setAudioData={setAudioData}
              isRalisman={true}
            />
          </WrapSignature>

          <WrapPreviewResult>
            <InnerPreviewResult>
              <ResultPrewievMob
                className={
                  value?.status === "completed" ? "completed" : "notcompleted"
                }
              >
                <img src={result} alt="JewelCocktail" />
                <div>
                  {langProps.locale === "ru"
                    ? "Предварительный результат"
                    : "Preview"}
                </div>
              </ResultPrewievMob>
              <p
                className={
                  value?.status === "completed" ? "completed" : "notcompleted"
                }
              >
                {langProps.locale === "ru"
                  ? "Вид цифрового талисмана"
                  : "The look of digital talisman"}
              </p>
              <MessageView
                className={
                  value?.status === "completed"
                    ? "morePadding"
                    : "notcompleted messageInit"
                }
              >
                {value?.status === "completed"
                  ? messageBr.split("\n").map((item, i) => (
                      <p className="poezi" key={i}>
                        {item}
                      </p>
                    ))
                  : message.split("\n").map((item, i) => (
                      <p className="poezi" key={i}>
                        {item}
                      </p>
                    ))}
              </MessageView>
              <div
                className={
                  value?.status === "completed"
                    ? "emptyHeightCompl"
                    : "emptyHeight"
                }
              >
                <WrapSlider>
                  <WrapBorderView>
                    <InnerWrapSlider
                      className={
                        value?.status === "completed"
                          ? "iscompeletedSl colorSl_" + value?.border
                          : "colorSl_" + 10
                      }
                    >
                      <Slider {...settings}>
                        {images?.length > 0 &&
                          images.map((item) => {
                            return (
                              <div>
                                <div
                                  className="imageInnerSlider"
                                  style={{
                                    backgroundImage:
                                      value?.status === "completed"
                                        ? `url(https://admin.jewelcocktail.com/media/${item.file})`
                                        : `url(${item.preview})`,
                                    backgroundPosition: "center",
                                    backgroundSize: "contain",
                                    backgroundRepeat: "no-repeat",
                                  }}
                                />
                              </div>
                            );
                          })}
                      </Slider>
                    </InnerWrapSlider>
                  </WrapBorderView>
                </WrapSlider>
              </div>

              {value?.status === "default" && (
                <>
                  <WrapPhoneEmail style={{ marginTop: "50px" }}>
                    {!(
                      pathname.includes("/letter") || pathname.includes("/qr/")
                    ) && (
                      <div className="numberPhone" style={{ display: "none" }}>
                        <div>
                          {langProps.locale === "ru"
                            ? "Номер Телефона:"
                            : "Phone number:"}
                        </div>{" "}
                        <input
                          value={phone}
                          type="tel"
                          name="phone"
                          onChange={handleChangePhone}
                        />
                      </div>
                    )}
                    <div className="emailUser">
                      <div>Email:</div>{" "}
                      <input
                        value={authorEmail}
                        type="email"
                        name="authorEmail"
                        onChange={handleChangeAuthorEmail}
                      />
                    </div>
                  </WrapPhoneEmail>
                  <WrapInputCheckBox>
                    <input
                      name="checked"
                      type="checkbox"
                      checked={checked}
                      onChange={(e) => setChecked(!checked)}
                      className="checkbox-round"
                    />
                    <span>
                      <FormattedMessage id="qr.podone" />
                      <a href="/privacy" target="_blank">
                        <FormattedMessage id="qr.podtwo" />
                      </a>
                    </span>
                  </WrapInputCheckBox>
                  <WrapInputCheckBox>
                    <input
                      name="checked"
                      type="checkbox"
                      checked={statusAds}
                      onChange={(e) => setStatusAds(!statusAds)}
                      className="checkbox-round"
                    />
                    <span>
                      {langProps.locale === "ru"
                        ? "Разрешаю использовать контент в маркетинговых целях"
                        : "Agree to use my content in ads"}
                    </span>
                  </WrapInputCheckBox>
                  <ButtonSubmit
                    onClick={handleSubmit}
                    className={
                      value?.status === "completed"
                        ? "completed"
                        : "notcompleted"
                    }
                  >
                    {langProps.locale === "ru"
                      ? "Создай свой талисман"
                      : "Create your digital talisman"}
                  </ButtonSubmit>
                </>
              )}
              {value?.status === "completed" && value.audio.length > 0 && (
                <div style={{ marginTop: "30px" }}>
                  {value?.status === "completed" && value.audio.length > 0 && (
                    <AudioPlayer audioData={value?.audio[0]} />
                  )}
                </div>
              )}
            </InnerPreviewResult>
          </WrapPreviewResult>
        </ConstructorArea>
      </WrapConstructorArea>
    </Wrapper>
  );
};
