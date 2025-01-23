import { useState, useEffect } from "react";
import { Link } from "react-router";
import Shimmer from "./Shimmer.js";
import Cards,{TrendingCards} from "./Cards";
import useOnlineStatus from "../utils/useOnlineStatus.js";
import Offline from "./Offline.js";

const Body = () => {
  const [DATA_ARRAY, setDATA_ARRAY] = useState([]);
  const [FILTERED_ARRAY, setFILTERED_ARRAY] = useState([]);
  const [FILTER_BUTTON_TEXT, setFILTER_BUTTON_TEXT] = useState(
    "Show Top Rated Dishes only"
  );
  const [FILTER_BUTTON_USED, setFILTER_BUTTON_USED] = useState(false);
  const [SEARCH_TEXT, setSEARCH_TEXT] = useState("");

  useEffect(() => {
    fetchfun();
  }, []);

  const toprated = () => {
    if (FILTER_BUTTON_USED) {
      setFILTER_BUTTON_TEXT("Show Top Rated Dishes only");
      setFILTERED_ARRAY(DATA_ARRAY);
      setFILTER_BUTTON_USED(false);
    } else {
      setFILTER_BUTTON_TEXT("Show All Dishes");
      const newArr = DATA_ARRAY.filter((obj) => obj.rating > 4.7);
      setFILTERED_ARRAY(newArr);
      setFILTER_BUTTON_USED(true);
    }
  };

  const fetchfun = async () => {
    try {
      const dataPromise = await fetch("https://dummyjson.co/recipes?limit=0", {
        method: "GET",
      });
      const jsonObj = await dataPromise.json();
      setDATA_ARRAY(jsonObj?.recipes);
      setFILTERED_ARRAY(jsonObj?.recipes);
    } catch (error) {
      console.log(error);
    }
  };

  const SearchFilter = () => {
    const newArr = DATA_ARRAY.filter((obj) =>
      obj.name.toLowerCase().includes(SEARCH_TEXT.toLowerCase())
    );
    setFILTERED_ARRAY(newArr);
  };


  const Trending = TrendingCards(Cards);


  if (useOnlineStatus()==false) {
    return <Offline/>
  }
  
  return DATA_ARRAY.length == 0 ? (
    <Shimmer />
  ) : (
    <div id="budy">
      <div id="top_bar">
        <div id="filter">
          <button onClick={toprated} id="Top_Rated">
            {FILTER_BUTTON_TEXT}
          </button>
        </div>
        <div id="search">
          <input
            id="Search_input"
            type="text"
            placeholder="Search here"
            value={SEARCH_TEXT}
            onChange={(e) => {
              setSEARCH_TEXT(e.target.value);
            }}
          />
          <button onClick={SearchFilter} id="Search_button">
            Search
          </button>
        </div>
      </div>

      <div id="shops">
        {FILTERED_ARRAY.map((obj) => (
          <Link
            className="links"
            to={{ pathname: `/dishes/${obj.id}` }}
            key={obj.id}
          >
            {(obj.id%4==1)?<Trending objaa={obj}/>: <Cards objaa={obj} />}
          </Link>

        ))}
      </div>
    </div>
  );
};

export default Body;
