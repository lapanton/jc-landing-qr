import React, { useEffect } from "react";
import { Wrapper } from "./pixelart-styled";
import imageSky from "./sky.png";
import pixelit from "./PixelitHelper";

export const PixelArt = () => {
  useEffect(() => {
    window.addEventListener("load", () => {
      // if (window.SlimSelect) {
      const px = new pixelit({ from: document.getElementById("pixelitimg") });
      const blocksize = document.querySelector("#blocksize");
      const greyscale = document.querySelector("#greyscale");
      const clearPalette = document.getElementById("clearcustompalettes");
      console.log("px", px);
      //stuff for webpage functionality
      let paletteList = [
        [
          [7, 5, 5],
          [33, 25, 25],
          [82, 58, 42],
          [138, 107, 62],
          [193, 156, 77],
          [234, 219, 116],
          [160, 179, 53],
          [83, 124, 68],
          [66, 60, 86],
          [89, 111, 175],
          [107, 185, 182],
          [251, 250, 249],
          [184, 170, 176],
          [121, 112, 126],
          [148, 91, 40],
        ],
        [
          [13, 43, 69],
          [32, 60, 86],
          [84, 78, 104],
          [141, 105, 122],
          [208, 129, 89],
          [255, 170, 94],
          [255, 212, 163],
          [255, 236, 214],
        ],
        [
          [43, 15, 84],
          [171, 31, 101],
          [255, 79, 105],
          [255, 247, 248],
          [255, 129, 66],
          [255, 218, 69],
          [51, 104, 220],
          [73, 231, 236],
        ],
        [
          [48, 0, 48],
          [96, 40, 120],
          [248, 144, 32],
          [248, 240, 136],
        ],
        [
          [239, 26, 26],
          [172, 23, 23],
          [243, 216, 216],
          [177, 139, 139],
          [53, 52, 65],
          [27, 26, 29],
        ],
        [
          [26, 28, 44],
          [93, 39, 93],
          [177, 62, 83],
          [239, 125, 87],
          [255, 205, 117],
          [167, 240, 112],
          [56, 183, 100],
          [37, 113, 121],
          [41, 54, 111],
          [59, 93, 201],
          [65, 166, 246],
          [115, 239, 247],
          [244, 244, 244],
          [148, 176, 194],
          [86, 108, 134],
          [51, 60, 87],
        ],
        [
          [44, 33, 55],
          [118, 68, 98],
          [237, 180, 161],
          [169, 104, 104],
        ],

        [
          [171, 97, 135],
          [235, 198, 134],
          [216, 232, 230],
          [101, 219, 115],
          [112, 157, 207],
          [90, 104, 125],
          [33, 30, 51],
        ],
        [
          [140, 143, 174],
          [88, 69, 99],
          [62, 33, 55],
          [154, 99, 72],
          [215, 155, 125],
          [245, 237, 186],
          [192, 199, 65],
          [100, 125, 52],
          [228, 148, 58],
          [157, 48, 59],
          [210, 100, 113],
          [112, 55, 127],
          [126, 196, 193],
          [52, 133, 157],
          [23, 67, 75],
          [31, 14, 28],
        ],
        [
          [94, 96, 110],
          [34, 52, 209],
          [12, 126, 69],
          [68, 170, 204],
          [138, 54, 34],
          [235, 138, 96],
          [0, 0, 0],
          [92, 46, 120],
          [226, 61, 105],
          [170, 92, 61],
          [255, 217, 63],
          [181, 181, 181],
          [255, 255, 255],
        ],
        [
          [49, 31, 95],
          [22, 135, 167],
          [31, 213, 188],
          [237, 255, 177],
        ],
        [
          [21, 25, 26],
          [138, 76, 88],
          [217, 98, 117],
          [230, 184, 193],
          [69, 107, 115],
          [75, 151, 166],
          [165, 189, 194],
          [255, 245, 247],
        ],
      ];
      let currentPalette = 0;
      //let maxPalette = paletteList.length;

      //*** add palette to custom list
      const addPalette = (palette = []) => {
        let data = JSON.parse(localStorage.getItem("customPalettes"));
        if (data == null) data = [];
        data.push(palette);
        localStorage.setItem("customPalettes", JSON.stringify(data));
      };

      //*** update from localstorage
      const pullFromLocalStorage = () => {
        //*** cards
        let data = JSON.parse(localStorage.getItem("customPalettes"));
        if (data == null) data = [];
        return data;
      };
      //*** convert rgb color to int array */
      const rgbToInt = (rgb) => {
        let r = parseInt(rgb.substring(1, 3), 16);
        let g = parseInt(rgb.substring(3, 5), 16);
        let b = parseInt(rgb.substring(5, 7), 16);
        return [r, g, b];
      };
      //*** remove duplicates from array */
      const removeDuplicates = (arr) => {
        let unique_array = [];
        for (let i = 0; i < arr.length; i++) {
          if (unique_array.indexOf(arr[i]) === -1) {
            unique_array.push(arr[i]);
          }
        }
        return unique_array;
      };

      if (document.readyState !== "loading") {
        //load image to canvas
        document.getElementById("pixlInput").onchange = function (e) {
          var img = new Image();
          img.src = URL.createObjectURL(this.files[0]);
          img.onload = () => {
            //create element
            //document.getElementById('teste').src = img.src;
            px.setFromImgSource(img.src);
            pixelit();
            //.pixelate()
            //.convertGrayscale()
            //.convertPalette();
            //.saveImage();
            //console.log(px.getPalette());
          };
        };

        //function to apply effects
        const pixelit = () => {
          document.querySelector(".loader").classList.toggle("active");
          setTimeout(() => {
            document.querySelector(".loader").classList.toggle("active");
          }, 800);
          px.setScale(blocksize.value)
            .setPalette(paletteList[currentPalette])
            .draw()
            .pixelate();

          if (greyscale.checked) {
            px.convertGrayscale();
          }

          if (palette.checked) {
            px.convertPalette();
          }

          if (maxheight.value) {
            px.setMaxHeight(maxheight.value).resizeImage();
          }

          if (maxwidth.value) {
            px.setMaxWidth(maxwidth.value).resizeImage();
          }
        };

        const makePaletteGradient = () => {
          //create palette

          //create palette of colors
          document.querySelector("#palettecolor").innerHTML = "";
          const customPallete = pullFromLocalStorage();
          paletteList = [...paletteList, ...customPallete];
          paletteList.forEach((palette, i) => {
            const option = document.createElement("option");
            option.value = i;
            palette.forEach((elem) => {
              let div = document.createElement("div");
              div.classList = "colorblock";
              div.style.backgroundColor = `rgba(${elem[0]},${elem[1]},${elem[2]},1)`;
              //div.innerHTML = `<div class="colorblock" style="background-color: rgba(${elem[0]},${elem[1]},${elem[2]},1)"></div>`;
              option.appendChild(div);
              //pdivs += `<div class="colorblock" style="background-color: rgba(${elem[0]},${elem[1]},${elem[2]},1)"></div>`;
            });
            document.getElementById("paletteselector").appendChild(option);
          });

          //document.querySelector('#palettecolor').innerHTML = pdivs;
        };

        makePaletteGradient();
        //special select
        // console.log("here", document.getElementById("paletteselector"));
        new window.SlimSelect({
          hideSelectedOption: true,
          showSearch: false,
          select: "#paletteselector",
          onChange: (info) => {
            currentPalette = info.value;
            palette.checked = true;
            pixelit();
            //console.log(info)
          },
        });

        //block size

        blocksize.addEventListener("change", function (e) {
          document.querySelector("#blockvalue").innerText = this.value;
          pixelit();
        });
        //greyscale

        greyscale.addEventListener("change", pixelit);
        //palette
        const palette = document.querySelector("#palette");
        palette.addEventListener("change", pixelit);
        //maxheight
        const maxheight = document.querySelector("#maxheight");
        maxheight.addEventListener("change", pixelit);
        //maxwidth
        const maxwidth = document.querySelector("#maxwidth");
        maxwidth.addEventListener("change", pixelit);
        //change palette deprecated
        /*
                const changePalette = document.querySelector("#changepalette");
                changePalette.addEventListener("click", function (e) {
                  currentPalette > 0 ? currentPalette-- : (currentPalette = maxPalette - 1);
                  makePaletteGradient();
                  palette.checked = true;
                  pixelit();
                });
                */
        //downloadimage options
        const downloadimage = document.querySelector("#downloadimage");

        downloadimage.addEventListener("click", function (e) {
          //download image
          px.saveImage();
        });

        //run on page boot to pixelit default image
        pixelit();
      }
      // }
    });
    return () => {
      window.removeEventListener("load", () => {
        // Cleanup logic here if needed
      });
    };
    //create object
  }, []);

  return (
    <Wrapper>
      <div className="container maxwidth" id="tryit">
        <div className="selectors">
          <label id="uploadimage" htmlFor="pixlInput" style={{ color: "#fff" }}>
            Upload Image
            <input type="file" className="inputbtn" id="pixlInput" />
            <div>
              <img
                src={imageSky}
                id="pixelitimg"
                alt=""
                style={{ maxHeight: "300px" }}
              />
            </div>
          </label>

          <label htmlFor="blocksize" className="inputbtn">
            Block size<span id="blockvalue">7</span>
            <input
              defaultValue="7"
              type="range"
              min="2"
              max="25"
              id="blocksize"
            />
          </label>

          <label htmlFor="greyscale" className="inputbtn">
            Greyscale
            <input type="checkbox" id="greyscale" />
          </label>

          <label htmlFor="palette" className="inputbtn">
            palette
            <input type="checkbox" id="palette" />
          </label>

          <label htmlFor="maxheight" className="inputbtn">
            Max Height
            <input type="input" id="maxheight" placeholder="in px" />
          </label>

          <label htmlFor="maxwidth" className="inputbtn">
            Max Width
            <input type="input" id="maxwidth" placeholder="in px" />
          </label>
        </div>
        <div className="infoselects">
          <div className="colorpalette">
            <div className="text">
              <button className="btn small" id="changepalette">
                Select palette
              </button>
              <select name="paletteselector" id="paletteselector"></select>
            </div>
            <div className="icons" id="palettecolor"></div>
          </div>

          <div className="infoselects">
            {/*<h3>Custom palette</h3>*/}
            {/*<p>Click on the color to change it</p>*/}
            {/*<div className="custompalette" id="custompalette">*/}
            {/*  <input type="color" name="customcolor" id="customcolor" />*/}
            {/*  <button className="btn small" id="addcustomcolor">*/}
            {/*    Add Color*/}
            {/*  </button>*/}
            {/*</div>*/}
            {/*<div id="currentpallete" className="colorpalette"></div>*/}
            {/*<button className="btn small" id="savecustompalette">*/}
            {/*  Save Palette*/}
            {/*</button>*/}
            {/*<p>*/}
            {/*  After clicking save you need to refresh to see the palette added*/}
            {/*</p>*/}
            {/*<button*/}
            {/*  className="btn small"*/}
            {/*  id="clearcustompalettes"*/}
            {/*  onClick={() =>*/}
            {/*    localStorage.setItem("customPalettes", JSON.stringify([]))*/}
            {/*  }*/}
            {/*>*/}
            {/*  Clear Custom Palettes*/}
            {/*</button>*/}
            {/*<p>*/}
            {/*  Click clear to remove all of your custom palettes, this is*/}
            {/*  irreversible. Refresh to see changes.*/}
            {/*</p>*/}
          </div>
          <div className="dothings">
            <button id="downloadimage" className="btn small call">
              Download Image
            </button>
          </div>
        </div>

        <canvas id="pixelitcanvas"></canvas>
      </div>

      <div className="loader">
        <div className="lds-spinner">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </Wrapper>
  );
};
