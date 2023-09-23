import Hero from "../../components/Hero";
import CarCard from "../../components/car-card";
import CustomFilters from "../../components/filter/CustomFilters";
import SearchBar from "../../components/searc-bar";
import useApi from "../../utils/useApi";

export default function MainPage() {
  const { isLoading, data } = useApi(`cars?model=corolla`);

  if (!isLoading) console.log("mainpage data", data);

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
          <p>Beğenebilecegin arabaları keşfet</p>
        </div>
        <div className="home__filters">
          {/* search bar */}
          <SearchBar />

          <div className="home__filter-container">
            <CustomFilters />
            <CustomFilters />
          </div>
        </div>

        {/* cars field */}
        <div className="filter-field">filter field</div>
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
              </section>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
