import { useSearchParams } from "react-router-dom";
import CustomButton from "../CustomButton";

type PropsTypes = {
  limit: string;
  isNext: boolean;
};
export default function ShowMore(props: PropsTypes) {
  const [searchParams, setSearchParams] = useSearchParams();
  const { limit, isNext } = props;
  function handleNavigate() {
    const new_limit = +limit + 5;
    console.log(
      "🚀 ~ file: index.tsx:11 ~ handleNavigate ~ new_limit:",
      new_limit
    );
    // if you want to add param to current url , you can use searchParam.set() method
    searchParams.set("limit", String(new_limit));
    // create full new url with added new limit
    setSearchParams(searchParams);
  }
  return (
    <div className="w-full flex-center gap-5 my-10 ">
      {isNext && (
        <CustomButton text="Daha Fazla" handleClick={() => handleNavigate()} />
      )}
    </div>
  );
}
