import { useMemo } from "react";
import { ICarProps } from "../../../../types";

type PropTypes = {
  isOpen: boolean;
  closeModal: () => void;
  car: ICarProps;
};
export default function Modal(props: PropTypes) {
  const { isOpen, closeModal, car } = props;
  // console.log("🚀 ~ file: index.tsx:10 ~ Modal ~ car:", car);

  const car_object_entries = Object.entries(car);
  console.log(
    "🚀 ~ file: index.tsx:18 ~ Modal ~ car_object_entries:",
    car_object_entries
  );

  const carElements = useMemo(() => {
    return car_object_entries.map(([key, value]) => (
      <div
        key={key}
        className="
      car-elements flex flex-1  justify-between  bg-cyan-100 p-1 rounded"
      >
        <h4 className="capitalize">{key.split("_").join(" ")}</h4>
        <p className="capitalize">
          {key.toLocaleLowerCase() === "transmission"
            ? value === "m"
              ? "Manuel"
              : "Otomatik"
            : value}
        </p>
      </div>
    ));
  }, [car_object_entries]);

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-25 z-20 flex items-center justify-center">
          <div className="car-details__dialog-panel">
            {/* close button */}
            <button className="car-details__close-btn" onClick={closeModal}>
              <img src="/close.svg" alt="close button image" />
            </button>
            {/* images */}
            <div className="car-details__images-container ">
              <div className="car-details__main-image">
                <img
                  className=" car-details_dialog-img"
                  src="/hero.png"
                  alt=""
                />
              </div>
              {/* angle images */}
              <div className="flex">
                <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg-100">
                  <img
                    src="/hero.png"
                    className="car-details_dialog-img"
                    alt=""
                  />
                </div>
                <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg-100">
                  <img
                    src="/hero.png"
                    className="car-details_dialog-img"
                    alt=""
                  />
                </div>
                <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg-100">
                  <img
                    src="/hero.png"
                    className="car-details_dialog-img"
                    alt=""
                  />
                </div>
              </div>
            </div>
            {/* detail info */}
            {carElements}
          </div>
        </div>
      )}
    </>
  );
}
