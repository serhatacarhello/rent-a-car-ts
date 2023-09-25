import { ICarProps } from "../../types";
import calculateDailyRentalPrice from "../../utils/calculateRentalPrice";
import generateImage from "../../utils/generateImage";
import CarCardFooter from "./car-card-footer";
import { motion } from "framer-motion";

interface ICarCardProps {
  car: ICarProps;
}

export default function CarCard(props: ICarCardProps) {
  const { car } = props;
  // console.log("🚀 ~ file: index.tsx:9 ~ CarCard ~ car:", car);
  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0.9 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="car-card group"
    >
      <div className="car-card__content">
        <div>
          <h2 className="car-card__content-title ">{car.make}</h2>
          <h4 className="car-card__content-subtitle ">{car.model}</h4>
        </div>

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
    </motion.div>
  );
}
