import { colors } from "../constants";
import { ICarProps } from "../types";
// const exampleUrl =
//   " https://cdn.imagin.studio/getImage?&customer=xxx&make=bmw&modelFamily=x6&modelRange=x6&modelVariant=od&modelYear=2024&powerTrain=hybrid&transmission=0&bodySize=5&trim=eu&paintId=pspc0007&aspectRatio=16:10&angle=23&zoomtype=fullscreen";

export default function generateImage(car: ICarProps, angle?: string) {
  // console.log("car", car);

  angle = angle || "23";

  const url = new URL("https://cdn.imagin.studio/getimage");
  url.searchParams.append("customer", "hrjavascript-mastery");
  url.searchParams.append("make", car.make);
  url.searchParams.append("modelFamily", car.model);
  url.searchParams.append("modelRange", car.model);
  url.searchParams.append("zoomtype", "fullscreen");
  url.searchParams.append("angle", String(angle));

  const i = Math.round(Math.random() * colors.length);
  url.searchParams.append("paintId", colors[i]);

  // console.log("url", url.href);
  return url.href;
}
