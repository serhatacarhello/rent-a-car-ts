import { useEffect, useState } from "react";
import { IOption } from "../../types";
import Select from "react-select";

type PropsTypes = {
  title: string;
  options: IOption[];
  searchParams: URLSearchParams;
  setSearchParams: (nextSearchParams: URLSearchParams) => void;
};
export default function CustomFilters(props: PropsTypes) {
  const { title, options, searchParams, setSearchParams } = props;

  const [selected, setSelected] = useState<IOption | null>();
  console.log(
    "🚀 ~ file: CustomFilters.tsx:13 ~ CustomFilters ~ selected:",
    selected
  );

  useEffect(() => {
    let paramKey = "";
    if (title === "Yakıt tipi") {
      paramKey = "fuel_type";
    } else if (title === "Üretim yılı") {
      paramKey = "year";
    } else if (title === "Vites tipi") {
      paramKey = "transmission";
    }
    // assign param
    if (selected?.value && paramKey !== "") {
      searchParams.set(paramKey, selected.value.toLocaleLowerCase());
      
    } else {
      searchParams.delete(paramKey);
    }
    //update url
    setSearchParams(searchParams);
  }, [selected]);

  return (
    <div className="w-fit min-w-min">
      <Select
        className="text-black min-w-[100px]"
        placeholder={title}
        options={options}
        onChange={(e: IOption | null) => setSelected(e)}
      />
    </div>
  );
}
