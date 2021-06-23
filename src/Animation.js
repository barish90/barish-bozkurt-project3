import { useLottie, useLottieInteractivity } from "lottie-react";
import treeanimation from "./newdata.json";

// const style = {
//     height: 300,
//   };
// const Animation = () => {
//   const lottieObj = useLottie(options, style)
//   const Animation = useLottieInteractivity({
//     lottieObj,
//     mode: "scroll",
//     actions: [
//       {
//         visibility: [0, 1],
//         type: "play",
//         frames: [0],
//       },
//     ],
//   });
//   return Animation;
// };
const style = {
    height: 300,
  };
  const Animation = () => {
    const options = {
      animationData: treeanimation,
      loop: false,
      autoplay: true,
    };
    const { View } = useLottie(options, style);
    return View;
};  
export default Animation;