import React from "react";
import Particles from "react-tsparticles";

export const ConfettiAnimation = () => {
  return (
    <div style={{ zIndex: "9999999", position: "relative"}}>
      <Particles options={
        {
          background: { color: { value: "transparent" } },
          fullScreen: {
            enable: true,
            zIndex: -1
          },
          interactivity: { detectsOn: "window" },
          emitters: {
            direction: "none",
            life: {
              count: 0,
              duration: 0.1,
              delay: 0.4
            },
            rate: {
              delay: 0.1,
              quantity: 100
            },
            size: {
              width: 0,
              height: 0
            }
          },
          particles: {
            color: { value: ["#F1B848", '#ff8000'] },
            move: {
              decay: 0.05,
              direction: "top",
              enable: true,
              gravity: {
                enable: true,
                maxSpeed: 150
              },
              outModes: {
                top: "none",
                default: "destroy"
              },
              speed: { min: 25, max: 50 }
            },
            number: { value: 0 },
            opacity: { value: 1 },
            rotate: {
              value: {
                min: 0,
                max: 360
              },
              direction: "random",
              animation: {
                enable: true,
                speed: 30
              }
            },
            tilt: {
              direction: "random",
              enable: true,
              value: {
                min: 0,
                max: 360
              },
              animation: {
                enable: true,
                speed: 30
              }
            },
            size: {
              value: 7,
              random: {
                enable: true,
                minimumValue: 3
              }
            },
            roll: {
              darken: {
                enable: true,
                value: 25
              },
              enable: true,
              speed: {
                min: 5,
                max: 15
              }
            },
            wobble: {
              distance: 30,
              enable: true,
              speed: {
                min: -7,
                max: 7
              }
            },
            shape: {
              type: [
                "circle",
                "square",
              ]
            }
          }
        }
      }
      />
    </div>
  );
};
