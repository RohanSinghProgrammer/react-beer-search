import { useEffect, useState } from "react";
import Card from "./components/Card";

export default function App() {
  const [data, setData] = useState([]);
  const [initialData, setInitialData] = useState([]);
  const [search, setSearch] = useState("");
  const getData = async () => {
    let d = await fetch("https://api.punkapi.com/v2/beers");
    let json = await d.json();
    setInitialData(json);
  };
  useEffect(() => {
    setData(
      initialData.filter((item) => item.name.toLowerCase().includes(search))
    );
  }, [search, initialData]);

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="pb-8">
      {/* ------------------------------ HEADER ------------------------------ */}
      <div className="w-full flex items-center justify-between px-4 md:px-16 py-4 mb-4 sticky top-0 bg-gray-100">
        <h2 className="text-3xl tracking-wider font-bold text-gray-500 mr-4">
          Beers
        </h2>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          type="search"
          placeholder="Search"
          className="px-6 py-3 border rounded-md border-gray-700 w-56 md:w-96 focus:outline-none"
        />
      </div>
      {/* ------------------------------ BODY ------------------------------ */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 px-16">
        {data.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}
