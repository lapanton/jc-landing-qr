import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';
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
  Podpsi,
  ResultPrewiev,
  TextMessageMob,
  WrapPhotoUpload,
  InnerPhoto,
  AddPhoto,
  ThumbsContainer,
  Thumb,
  ThumbInner,
  Img,
  FonMobile,
  WrapBoardSelect,
  InnerBoard,
  RamkaMob,
  WrapSignature,
  InnerSignatture,
  PodpsiMob,
  WrapPreviewResult,
  InnerPreviewResult,
  MessageView,
  ButtonSubmit,
  WrapName,
  WrapSlider,
  ResultPrewievMob,
  WrapBorderView,
  InnerWrapSlider,
  WrapInnerBorder,
  WrapperPending
} from "./constructor-style";
import t from './t.png';
import fon from './fon.png';
import ramka from './ramka.png';
import podpsi from './podpisi.png';
import result from './result.png';
import plus from './plus.png';
import borderone from './border-one.png';
import bordertwo from './border-two.png';
import borderthree from './no-border.png';
import {BounceAnimation} from "../../../../animation/BounceAnimation";


const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
export const Constructor = (props) => {
  const value = props.value;
  const { id } = useParams();
    const [sendData, setSendData] = useState(false);
    const [files, setFiles] = useState([]);
    const [message, setMessage] = useState("");
    const [borderType, setBorderType] = useState(1);
    const [signature, setSignature] = useState("");

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

  const handleChangeSignature = (e) => {
    if (e.target.value.length <= 15) {
      setSignature(e.target.value)
    }
  };

  const handleSubmit = async () => {

    if (message === "") return alert('Пожалустаа введите послание');

    if (signature === "") return alert('Пожалустаа введите Имя');

    if (files.length === 0) return alert('Пожалустаа загрузитее фото');

    const formData = new FormData();

    const rest = {
      msg: message,
      sign: signature,
      border: borderType
    }

    files.forEach(file => formData.append('img', file));

    Object.entries(rest).forEach(([key, value]) => {
      formData.append(key, value);
    });

    try {
      setSendData(true);
      await axios.patch(`https://admin.jewelcocktail.com/v1/qrcodes/${id}`, formData);
      window.location.reload();
    } catch (error) {
      console.log('something goes wroong, error: ', error);
    } finally {
      console.log('finaly')
    }

  };

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

  if (value?.msg?.length > 0 && value?.status !== 'completed') {
    return (
      <WrapperPending>
      <h2>вы успешно сохранили ваше послание! Через некоторое время выше послание будет доступно</h2>
    </WrapperPending>
    );
  }
  const images = value?.status === 'completed' ? value.img : files;
  return (
    <Wrapper>
        <h2 className={value?.status === 'completed' ? "completed": "notcompleted"}>Конструктор послания</h2>

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

            <Podpsi>
              <img src={podpsi} alt="JewelCocktail"/>
              <div>Подпись</div>
              <span>Подпишите ваше послание</span>
            </Podpsi>

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

            <WrapBoardSelect className={value?.status === 'completed' ? "completed": "notcompleted"}>
                <InnerBoard>
                  <RamkaMob>
                    <img src={ramka} alt="JewelCocktail" className='iconBorder'/>
                    <div>Рамка</div>
                  </RamkaMob>
                  <p>Выберите одну из предложенных рамок</p>
                  <img className={borderType === 1 ? "active" : "notactive"} src={borderone} alt="JewelCocktaail" onClick={() => setBorderType(1)} />
                  <img className={borderType === 2 ? "active" : "notactive"} src={bordertwo} alt="JewelCocktaail" onClick={() => setBorderType(2)} />
                  <img className={borderType === 3 ? "active" : "notactive"} src={borderthree} alt="JewelCocktaail" onClick={() => setBorderType(3)} />
                </InnerBoard>
            </WrapBoardSelect>

            <WrapSignature className={value?.status === 'completed' ? "completed": "notcompleted"}>
              <InnerSignatture>
                <PodpsiMob>
                  <img src={podpsi} alt="JewelCocktail"/>
                  <div>Подпись</div>
                </PodpsiMob>
                <p>Подпишите ваше послание</p>
                <input value={signature} type="text" name="signature" onChange={handleChangeSignature} />
              </InnerSignatture>
            </WrapSignature>

            <WrapPreviewResult>
              <InnerPreviewResult>
                <ResultPrewievMob className={value?.status === 'completed' ? "completed": "notcompleted"}>
                  <img src={result} alt="JewelCocktail"/>
                  <div>Предварительный результат</div>
                </ResultPrewievMob>
                <p className={value?.status === 'completed' ? "completed": "notcompleted"}>Вид послания, которое увидит ваш адресат</p>
                <MessageView className={value?.status === 'completed' ? "morePadding": "notcompleted"}>{value?.status === 'completed' ? value.msg : message}</MessageView>
                <div className={value?.status === 'completed' ? "emptyHeightCompl": "emptyHeight"} >
                  <WrapSlider>
                    <WrapBorderView>
                      <WrapInnerBorder>

                        {borderType === 1 && value?.status !== 'completed' && <img src={borderone} alt="JewelCocktail"/>}
                        {borderType === 2  && value?.status !== 'completed' && <img src={bordertwo} alt="JewelCocktail"/>}

                        {value?.status === 'completed' && value?.border === 1 && <img src={borderone} alt="JewelCocktail"/>}
                        {value?.status === 'completed' && value?.border === 2 && <img src={bordertwo} alt="JewelCocktail"/>}
                      </WrapInnerBorder>
                      <InnerWrapSlider>
                        <Slider {...settings}>

                          {images.length > 0 && images.map((item) => {
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
                  <WrapName className={value?.status === 'completed' ? "iscompeleted color_"+borderType : "color_"+borderType}>
                    {value?.status === 'completed' ? value.sign : signature}
                  </WrapName>
                </div>
                <ButtonSubmit onClick={handleSubmit} className={value?.status === 'completed' ? "completed": "notcompleted"}>
                  Создать послание
                </ButtonSubmit>
              </InnerPreviewResult>
            </WrapPreviewResult>

          </ConstructorArea>
        </WrapConstructorArea>

    </Wrapper>
  );
};
