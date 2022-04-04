import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {useNavigate, useParams} from 'react-router-dom';
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
  WrapInnerBorder
} from "./constructor-style";
import t from './t.png';
import fon from './fon.png';
import ramka from './ramka.png';
import podpsi from './podpisi.png';
import result from './result.png';
import plus from './plus.png';
import borderone from './borderone.png';
import bordertwo from './bordertwo.png';
import borderthree from './borderthree.png';
import borderfour from './borderfour.png';

import one from './photo/14.png';
import two from './photo/17.png';
import three from './photo/21.png';



export const Constructor = () => {
  const { id } = useParams();
  const navigate = useNavigate();
    const [files, setFiles] = useState([]);
    const [message, setMessage] = useState("");
    const [borderType, setBorderType] = useState(1);
    const [signature, setSignature] = useState("");

    const {getRootProps, getInputProps} = useDropzone({
      accept: 'image/*',
      onDrop: acceptedFiles => {
        setFiles(acceptedFiles.map(file => Object.assign(file, {
          preview: URL.createObjectURL(file)
        })));
      }
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
      files.forEach(file => URL.revokeObjectURL(file.preview));
    }, [files]);

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
      const rest = {
        msg: message,
        sign: signature
      }
      try {
        await axios.patch(`/v1/qrcodes/${id}`, rest);
        navigate('/qrcode/{id}');
      } catch (error) {
        console.log('something goes wroong, error: ', error);
      } finally {
        console.log('finaly')
      }

  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <Wrapper>
        <h2>Конструктор послания</h2>

        <WrapConstructorArea>
          <SideArea>

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

          <ConstructorArea>
            <TextMessageMob>
              <img src={t} alt="JewelCocktail"/>
              <div>Текст послания</div>
            </TextMessageMob>
            <p>Заполните текст послания до 400 символов</p>
            <textarea value={message} name="message" cols="30" rows="5" onChange={handleChangeMessage} />

            <WrapPhotoUpload>
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

            <WrapBoardSelect>
                <InnerBoard>
                  <RamkaMob>
                    <img src={ramka} alt="JewelCocktail" className='iconBorder'/>
                    <div>Рамка</div>
                  </RamkaMob>
                  <p>Выберите одну из предложенных рамок</p>
                  <img className={borderType === 1 ? "active" : "notactive"} src={borderone} alt="JewelCocktaail" onClick={() => setBorderType(1)} />
                  <img className={borderType === 2 ? "active" : "notactive"} src={bordertwo} alt="JewelCocktaail" onClick={() => setBorderType(2)} />
                  <img className={borderType === 3 ? "active" : "notactive"} src={borderthree} alt="JewelCocktaail" onClick={() => setBorderType(3)} />
                  <img className={borderType === 4 ? "active" : "notactive"} src={borderfour} alt="JewelCocktaail" onClick={() => setBorderType(4)} />
                </InnerBoard>
            </WrapBoardSelect>

            <WrapSignature>
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
                <ResultPrewievMob>
                  <img src={result} alt="JewelCocktail"/>
                  <div>Предварительный результат</div>
                </ResultPrewievMob>
                <p>Вид послания, которое увидит ваш адресат</p>
                <MessageView>{message}</MessageView>
                <div>
                  <WrapSlider>
                    <WrapBorderView>
                      <WrapInnerBorder>
                        {borderType === 1 && <img src={borderone} alt="JewelCocktail"/>}
                        {borderType === 2 && <img src={bordertwo} alt="JewelCocktail"/>}
                        {borderType === 3 && <img src={borderthree} alt="JewelCocktail"/>}
                        {borderType === 4 && <img src={borderfour} alt="JewelCocktail"/>}
                      </WrapInnerBorder>
                      <InnerWrapSlider>
                        <Slider {...settings}>
                          <div>
                            <div
                              className="imageInnerSlider"
                              style={{
                                backgroundImage: `url(${one})`,
                                backgroundPosition: 'center',
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat'
                              }}
                            />
                          </div>
                          <div>
                            <div
                              className="imageInnerSlider"
                              style={{
                                backgroundImage: `url(${two})`,
                                backgroundPosition: 'center',
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat'
                              }}
                            />
                          </div>
                          <div>
                            <div
                              className="imageInnerSlider"
                              style={{
                                backgroundImage: `url(${three})`,
                                backgroundPosition: 'center',
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat'
                              }}
                            />
                          </div>
                        </Slider>
                      </InnerWrapSlider>
                      <WrapName className={"color_"+borderType}>
                        {signature}
                      </WrapName>
                    </WrapBorderView>

                  </WrapSlider>

                </div>
                <ButtonSubmit onClick={handleSubmit}>
                  Создать послание
                </ButtonSubmit>
              </InnerPreviewResult>
            </WrapPreviewResult>

          </ConstructorArea>
        </WrapConstructorArea>

    </Wrapper>
  );
};
