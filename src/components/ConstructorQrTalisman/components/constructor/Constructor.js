import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import {useLocation, useParams} from 'react-router-dom';
import {useDropzone} from 'react-dropzone';
import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
  WrapPhoneEmail
} from "./constructor-style";
import t from './t.png';
import fon from './fon.png';
import ramka from './ramka.png';
import result from './result.png';
import plus from './plus.png';
import {BounceAnimation} from "../../../../animation/BounceAnimation";
import {ConfettiAnimation} from "../../../../animation/Confetti";


const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
export const ConstructorTalisman = (props) => {
  const { pathname } = useLocation();
  const value = props.value;
  const { id } = useParams();
  const [checked, setChecked] = useState(false);
    const [sendData, setSendData] = useState(false);
    const [files, setFiles] = useState([]);
    const [message, setMessage] = useState("");
    const [phone, setPhone] = useState("");
    const [authorEmail, setAuthorEmail] = useState("");
  const onDrop = useCallback(acceptedFiles => {

   const newFiles = acceptedFiles.map(file => Object.assign(file, {
      preview: URL.createObjectURL(file)
    }))

    const totalfiles = files.length + newFiles.length;

    if (totalfiles >= 11) return;

    setFiles([...files, ...newFiles]);

  }, [files])

    const {getRootProps, getInputProps} = useDropzone({
      accept: 'image/*',
      maxFiles: 10,
      maxSize: 31457280,
      onDrop,
    });

    const thumbs = files.map(file => (
      <Thumb key={file.name}>
        <ThumbInner>
          <Img
            src={file.preview}
          />
        </ThumbInner>
      </Thumb>
    ));

  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks
    const cleanup = async () => {
      await sleep(100)
      files.forEach((file) => URL.revokeObjectURL(file.preview))
      console.log("revoked");
    }
    cleanup()
  }, [files])
  const handleChangeMessage = (e) => {
    if (e.target.value.length <= 400) {
      setMessage(e.target.value)
    }
  };

  const handleChangePhone = (e) => {
    if (e.target.value.length <= 15) {
      setPhone(e.target.value)
    }
  };

  const handleChangeAuthorEmail = (e) => {
    if (e.target.value.length <= 30) {
      setAuthorEmail(e.target.value)
    }
  };

  const handleSubmit = async () => {

    if (message === "") return alert('Пожалустаа введите послание');

    if (files.length === 0) return alert('Пожалустаа загрузитее фото');

    if (!checked) return alert('Пожалустаа поставьте галочку на согласие: Политикой в отношении обработки персональных данных');

    if (authorEmail === "" && !authorEmail.includes('@')) return alert('Пожалуста корректный адресс почты');

    const formData = new FormData();

    const rest = {
      msg: message,
      author: "",
      status: "completed",
      email: authorEmail,
      phone: phone,
      sendEmail: true,
      shortId: id,
    }

    files.forEach(file => formData.append('img', file));

    Object.entries(rest).forEach(([key, value]) => {
      formData.append(key, value);
    });

    try {
      setSendData(true);
      await axios.patch(`https://admin.jewelcocktail.com/v1/qrcodes/${id}`, formData).then(() => {
        setTimeout(() => {
          window.location.reload();
        }, 100);
      });
    } catch (error) {
      console.log('something goes wroong, error: ', error);
    } finally {
      console.log('finaly')
    }

  };

  const [hide, setHide] = useState(true);

  useEffect(() => {
    setTimeout(() => {setHide(false)}, 3500);
  },[]);

  if (sendData) {
    return  <BounceAnimation />
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  if (value?.status === 'pending') {
    return null;
  }

  const images = value?.status === 'completed' ? value.img : files;

  const messageBr = value.msg?.split("<br/>").join("\n");

  if (pathname.indexOf("/qrt/") > -1) {
    document.body.style.background = "#000";
  }

  if (pathname.indexOf("/qrt/") > -1) {
    document.body.style.background = "#000";
  }
  return (
    <Wrapper>
        <h2 className={value?.status === 'completed' ? "completed": "notcompleted"}>Конструктор послания</h2>
      {value?.status === 'completed' && hide &&  (
        <ConfettiAnimation/>
      )}
        <WrapConstructorArea>
          <SideArea className={value?.status === 'completed' ? "completed": "notcompleted"}>

            <TextMessage>
              <img src={t} alt="JewelCocktail"/>
              <div>Текст послания</div>
              <span>Заполните текст послания до 400 символов</span>
            </TextMessage>

            <Fon>
              <img src={fon} alt="JewelCocktail"/>
              <div>Фон</div>
              <span>Добавьте до 3 фото или 1 видео для фона </span>
            </Fon>

            <Ramka>
              <img src={ramka} alt="JewelCocktail"/>
              <div>Рамка</div>
              <span>Выберите одну из предложенных рамок</span>
            </Ramka>

            <ResultPrewiev>
              <img src={result} alt="JewelCocktail"/>
              <div>Предварительный результат</div>
              <span>Вид послания, которое увидит ваш адресат</span>
            </ResultPrewiev>

          </SideArea>

          <ConstructorArea className={value?.status === 'completed' ? "noMarging": "notcompleted"}>
            <TextMessageMob className={value?.status === 'completed' ? "completed": "notcompleted"}>
              <img src={t} alt="JewelCocktail"/>
              <div>Текст послания</div>
            </TextMessageMob>
            <p className={value?.status === 'completed' ? "completed": "notcompleted"}>Заполните текст послания до 400 символов</p>
            <textarea value={message} name="message" cols="30" rows="5" onChange={handleChangeMessage} className={value?.status === 'completed' ? "completed": "notcompleted"} />

            <WrapPhotoUpload className={value?.status === 'completed' ? "completed": "notcompleted"}>
              <FonMobile>
                <img src={fon} alt="JewelCocktail"/>
                <div>Фон</div>
              </FonMobile>
              <p>Добавьте до 3 фото или 1 видео для фона</p>
              <InnerPhoto>
                <section className="container">
                  <ThumbsContainer>
                    {thumbs}
                  </ThumbsContainer>
                  <div {...getRootProps({className: 'dropzone'})}>
                    <input {...getInputProps()} />
                    <img src={plus} alt="JewelCocktail"/>
                  </div>
                </section>
              </InnerPhoto>
            </WrapPhotoUpload>

            <WrapPreviewResult>
              <InnerPreviewResult>
                <ResultPrewievMob className={value?.status === 'completed' ? "completed": "notcompleted"}>
                  <img src={result} alt="JewelCocktail"/>
                  <div>Предварительный результат</div>
                </ResultPrewievMob>
                <p className={value?.status === 'completed' ? "completed": "notcompleted"}>Вид послания, которое увидит ваш адресат</p>
                <MessageView className={value?.status === 'completed' ? "morePadding": "notcompleted messageInit"}>{value?.status === 'completed' ? messageBr.split('\n').map((item, i) => <p className="poezi" key={i}>{item}</p>) : message.split('\n').map((item, i) => <p className="poezi" key={i}>{item}</p>)}</MessageView>
                <div className={value?.status === 'completed' ? "emptyHeightCompl": "emptyHeight"}>
                  <WrapSlider>
                    <WrapBorderView>
                      <InnerWrapSlider className={value?.status === 'completed' ? "iscompeletedSl colorSl_"+value?.border : "colorSl_"+10}>
                        <Slider {...settings}>
                          {images?.length > 0 && images.map((item) => {
                            return (
                              <div>
                                <div
                                  className="imageInnerSlider"
                                  style={{
                                    backgroundImage: value?.status === 'completed' ?  `url(https://admin.jewelcocktail.com/media/${item.file})` : `url(${item.preview})`,
                                    backgroundPosition: 'center',
                                    backgroundSize: 'contain',
                                    backgroundRepeat: 'no-repeat'
                                  }}
                                />
                              </div>
                              )
                          })}
                        </Slider>
                      </InnerWrapSlider>
                    </WrapBorderView>
                  </WrapSlider>

                </div>

                  {value?.status === 'default' && (
                    <>
                      <WrapPhoneEmail style={{marginTop: "50px"}}>
                        {!(pathname.includes('/letter') || pathname.includes('/qr/')) && (
                          <div className="numberPhone"><div>Номер Телефона:</div> <input value={phone} type="tel" name="phone" onChange={handleChangePhone} /></div>
                        )}
                        <div className="emailUser"><div>Email:</div> <input value={authorEmail} type="email" name="authorEmail" onChange={handleChangeAuthorEmail} /></div>
                      </WrapPhoneEmail>
                      <WrapInputCheckBox>
                        <input name="checked" type="checkbox" checked={checked}
                               onChange={e => setChecked(!checked)} className="checkbox-round" />
                        <span>Подтверждая вы соглавшаетесь с <a href="/privacy" target="_blank"> политикой в отношении обработки персональных данных</a></span>
                      </WrapInputCheckBox>
                      <ButtonSubmit onClick={handleSubmit} className={value?.status === 'completed' ? "completed": "notcompleted"}>
                      Создать послание
                      </ButtonSubmit>
                    </>
                  )}
              </InnerPreviewResult>
            </WrapPreviewResult>

          </ConstructorArea>
        </WrapConstructorArea>

    </Wrapper>
  );
};
