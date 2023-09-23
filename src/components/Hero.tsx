import CustomButton from "./CustomButton";

export default function Hero() {
  const scrollTo = () => {
    alert("aşagi kaydır");
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
        <img
          src="/hero.png"
          alt="hero logo image"
          className="img-fluid object-contain"
        />
      </div>
    </div>
  );
}
