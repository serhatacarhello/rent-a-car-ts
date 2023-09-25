import { useMemo } from "react";
import { ICarProps } from "../../../../types";
import generateImage from "../../../../utils/generateImage";
import { AnimatePresence, motion } from "framer-motion";

type PropTypes = {
  isOpen: boolean;
  closeModal: () => void;
  car: ICarProps;
};
export default function Modal(props: PropTypes) {
  const { isOpen, closeModal, car } = props;
  // console.log("🚀 ~ file: index.tsx:10 ~ Modal ~ car:", car);

  const car_object_entries = Object.entries(car);

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
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              exit={{ opacity: 0.2, scale: 0.5 }}
              viewport={{ once: true }}
              className="car-details__dialog-panel"
            >
              {/* close button */}
              <button className="car-details__close-btn" onClick={closeModal}>
                <img src="/close.svg" alt="close button image" />
              </button>
              {/* images */}
              <div className="car-details__images-container">
                <div className="car-details__main-image">
                  <img
                    className="car-details_dialog-img"
                    src={generateImage(car, "angle")}
                    alt=""
                  />
                </div>
                {/* angle images */}
                <div className="flex mt-3">
                  <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg ">
                    <img
                      src={generateImage(car, "29")}
                      className="car-details_dialog-img"
                      alt=""
                    />
                  </div>
                  <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg-100">
                    <img
                      src={generateImage(car, "33")}
                      className="car-details_dialog-img mt-4"
                      alt=""
                    />
                  </div>
                  <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg-100">
                    <img
                      src={generateImage(car, "13")}
                      className="car-details_dialog-img"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              {/* detail info */}
              {carElements}
            </motion.div>
          </AnimatePresence>
        </div>
      )}
    </>
  );
}
