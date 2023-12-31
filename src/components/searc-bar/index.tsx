import { useMemo, useState } from "react";
import { makes } from "../../constants";
import { IOption } from "../../types";
import SearchButton from "./SearchButton";
import Select from "react-select";
import Notification from "../Notification";

type PropsTypes = {
  searchParams: URLSearchParams;
  setSearchParams: (nextSearchParams: URLSearchParams) => void;
};
export default function SearchBar(props: PropsTypes) {
  const { searchParams, setSearchParams } = props;
  const [make, setMake] = useState<string>("");
  const [model, setModel] = useState<string>("");

  const options: IOption[] = useMemo(() => {
    return makes.map((makes) => ({
      label: makes,
      value: makes,
    }));
  }, [makes]);
  console.log("make", make, model);

  // add make and model parameters to URL
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("make, model", make, model);
    if (make !== "" && model === "") {
      searchParams.set("make", make.toLocaleLowerCase());
      // setSearchParams({ make: make.toLocaleLowerCase() });
    } else if (make !== "" && model !== "") {
      searchParams.set("make", make.toLocaleLowerCase());
      searchParams.set("model", model.toLocaleLowerCase());
      // setSearchParams({
      //   make: make.toLocaleLowerCase(),
      //   model: model.toLocaleLowerCase(),
      // });
    } else {
      return (
        <Notification text="Lütfen marka ve model seçiniz." variant="red" />
      );
    }

    setSearchParams(searchParams);
  };

  return (
    <form onSubmit={handleSubmit} className="searchbar gap-3">
      {/* make select field */}
      <div className="searchbar__item text-black">
        <Select
          className="w-full"
          options={options}
          closeMenuOnSelect={false}
          // defaultValue={options[38]}
          placeholder="Toyota"
          // isMulti
          // styles={""}
          onChange={(e: IOption | null) => setMake(e!.value)}
        />
        <SearchButton designs="sm:hidden" />
      </div>
      {/* model select field */}
      <div className="searchbar__item">
        <img
          width={30}
          className="absolute ml-3 pb-1"
          src="/model-icon.png"
          alt="model car image"
        />
        <input
          type="text"
          value={model}
          className="searchbar__input text-black rounded  "
          placeholder="Corolla"
          onChange={(e) => setModel(e.target.value)}
        />
        <SearchButton designs="sm:hidden" />
      </div>
      <SearchButton designs="max-sm:hidden" />
    </form>
  );
}
