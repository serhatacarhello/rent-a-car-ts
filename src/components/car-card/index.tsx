import { ICarProps } from "../../types";
import calculateDailyRentalPrice from "../../utils/calculateRentalPrice";
import generateImage from "../../utils/generateImage";
import CarCardFooter from "./car-card-footer";

interface ICarCardProps {
  car: ICarProps;
}

export default function CarCard(props: ICarCardProps) {
  const { car } = props;
  // console.log("🚀 ~ file: index.tsx:9 ~ CarCard ~ car:", car);
  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2 className="car-card__content-title flex-nowrap">
          {car.make} {car.model}
        </h2>
        <p className=" car-card__price">
          <sup className="car-card__price-dollar">TL</sup>
          {Math.round(calculateDailyRentalPrice(car))}
          <sub className="car-card__price-day">/gün</sub>
        </p>
      </div>
      <div className="car-card__image">
        <img src={generateImage(car)} alt={`${car.make} ${car.model} image`} />
      </div>
      <CarCardFooter car={car} />
    </div>
  );
}
