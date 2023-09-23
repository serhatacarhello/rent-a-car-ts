import { useState } from "react";
import { ICarProps } from "../../../types";
import CustomButton from "../../CustomButton";
import CarInfoIcon from "./CarInfoIcon";
import Modal from "./modal";

interface IPropTypes {
  car: ICarProps;
}
export default function CarCardFooter(props: IPropTypes) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const { car } = props;
  return (
    <div className="relative flex w-full mt-2">
      <div className="car-card__icon-container">
        <CarInfoIcon
          title={car.transmission === "a" ? "Otomatik" : "Manuel"}
          icon={"/public/transmission.png"}
          design="w-[20px] h-[20px]"
        />
        <CarInfoIcon
          title={car.drive?.toUpperCase()}
          icon={"/public/steering-wheel.svg"}
        />
        <CarInfoIcon
          title={String(car.city_mpg) + " MPG"}
          icon={"/public/gasoline.png"}
          design="w-[20px] font-bold"
        />
      </div>
      <div className="car-card__btn-container">
        <CustomButton
          text="Daha fazla"
          design="w-full py-[16px] bg-primary-blue text-white hover:bg-blue-800"
          rightIcon="/right-arrow.svg"
          handleClick={() => setIsOpen(true)}
        />
      </div>
      {/* Modal  */}
      <Modal isOpen={isOpen} car={car} closeModal={() => setIsOpen(false)} />
    </div>
  );
}
