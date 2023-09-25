import CustomButton from "./CustomButton";
import { motion } from "framer-motion";

export default function Hero() {
  const scrollTo = () => {
    const elem = document.getElementById("catalogue");
    elem?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="hero">
      <div className="right-side flex-1 pt-36 padding-x max-h-[ 920px]">
        <h1 className="hero__title">Özgürlüğü Hisset, Yolculağa Başla!</h1>
        <p className="hero__subtitle text-gray-300">
          Altın standartta hizmetle unutulmaz bir yolculuğa hazır mısın? Araç
          kiralama deneyimini Altın Seçenekleri ile taçlandırarak her anını özel
          kılabilirsin.
        </p>
        <CustomButton
          text="Arabaları Keşfet"
          design="bg-primary-blue text-white mt-10"
          handleClick={scrollTo}
        />
      </div>
      <div className="left-side w-100 flex justify-center">
        <motion.img
          // whileHover={{ scale: 1.2 }}
          // whileTap={{ scale: 0.8 }}
          initial={{ opacity: 0.8, translateX: 200 }}
          whileInView={{ opacity: 1, translateX: -20 }}
          transition={{ duration: 0.5 }}
          style={{ x: 100 }}
          src="/hero.png"
          alt="hero logo image"
          className="img-fluid object-contain"
        />
      </div>
    </div>
  );
}
