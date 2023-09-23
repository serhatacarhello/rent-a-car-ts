import { ICarProps } from "../types";

export default function calculateDailyRentalPrice(car: ICarProps) {
  const basePrice = 500;

  const currentYear = new Date().getFullYear();
  const age = currentYear - car.year;

  let ageDiscount = 0;
  if (age > 15) {
    ageDiscount = 0.2;
  } else if (age > 10) {
    ageDiscount = 0.1;
  } else {
    ageDiscount = 0;
  }

  const mpg = car.combination_mpg;
  let mpgDiscount = 0;
  if (mpg > 35) {
    mpgDiscount = 0.1;
  } else if (mpg > 30) {
    mpgDiscount = 0.05;
  } else {
    mpgDiscount = 0;
  }

  const fuel = car.fuel_type;
  let fuelDiscount = 0;

  if (fuel === "gas") {
    fuelDiscount = 0.2;
  } else if (fuel === "gasoline") {
    fuelDiscount = 0.1;
  } else {
    fuelDiscount = 0;
  }

  let price = basePrice;
  price *= 1 - ageDiscount;
  price *= 1 - mpgDiscount;
  price *= 1 - fuelDiscount;

  return price;
}
