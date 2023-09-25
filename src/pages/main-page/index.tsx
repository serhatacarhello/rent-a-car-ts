import { useSearchParams } from "react-router-dom";
import Hero from "../../components/Hero";
import CarCard from "../../components/car-card";
import CustomFilters from "../../components/filter/CustomFilters";
import SearchBar from "../../components/searc-bar";
import useApi from "../../utils/useApi";
import { fuels, transmissions, years } from "../../constants";
import ShowMore from "../../components/show-more";

const defaultParams = {
  make: "Toyota",
  model: "",
  year: "",
  fuel_type: "",
  limit: "5",
  transmission: "",
};

export default function MainPage() {
  const [searchParams, setSearchParams] = useSearchParams();

  const paramsObj = Object.fromEntries(searchParams);
  console.log("🚀 ~ file: index.tsx:11 ~ MainPage ~ paramsObj:", paramsObj);

  const actualParams = {
    ...defaultParams,
    ...paramsObj,
  };

  const { make, model, fuel_type, year, limit, transmission } = actualParams;

  const queryString = `make=${make}&model=${model}&fuel_type=${fuel_type}&year=${year}&limit=${limit}&transmission=${transmission}`;

  const { isLoading, data } = useApi(`cars?${queryString}`);

  if (!isLoading) console.log("mainpage fetch cars data", data);

  // check for data is array or is  empty or is null
  const isDataEmpty: boolean = !Array.isArray(data) || data.length < 1 || !data;
  console.log("🚀 ~ file: index.tsx:11 ~ MainPage ~ isDataEmpty:", isDataEmpty);

  return (
    <div>
      <Hero />
      <div
        className="catalogue mt-12  padding-x padding-y max-width"
        id="catalogue"
      >
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Araba Katalogu</h1>
          <p>Beğenebileceğin arabaları keşfet</p>
        </div>
        <div className="home__filters">
          {/* search bar */}
          <SearchBar
            searchParams={searchParams}
            setSearchParams={setSearchParams}
          />
          <div className="home__filter-container">
            <CustomFilters
              title={"Yakıt tipi"}
              options={fuels}
              searchParams={searchParams}
              setSearchParams={setSearchParams}
            />

            <CustomFilters
              title={"Üretim yılı"}
              options={years}
              searchParams={searchParams}
              setSearchParams={setSearchParams}
            />
            <CustomFilters
              title={"Vites tipi"}
              options={transmissions}
              searchParams={searchParams}
              setSearchParams={setSearchParams}
            />
          </div>
        </div>

        {/* cars filter result field */}
        <div className="cars-field">
          {isDataEmpty ? (
            <div className="home__error-container">
              <h2>Üzgünüz! Herhangi bir sonuç bulunamadı.</h2>
            </div>
          ) : (
            <>
              <section>
                <div className="home__cars-wrapper">
                  {data.map((car, i) => (
                    <CarCard key={i} car={car} />
                  ))}
                </div>
                <ShowMore limit={limit} isNext={Number(limit) < 30} />
              </section>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
