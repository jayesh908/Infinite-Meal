import React, { useEffect, useState } from "react";
import Restrocard from "./Restrocard";
import Shimmer from "./Shimmer";
const Body = () => {
  const [localstate, setlocalstate] = useState([]);
  const [fliteredrestro, setfilterrestro] = useState([])
  const [searcttext, setseachtext] = useState("");

  useEffect(() => {
    fetchdata();

    return(()=>{
      console.log("unmount")
    })
  }, []);
  const fetchdata = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65420&lng=77.23730&is-seo-homepage-enabled=true&page_type=DESKTOP_W"
      );
      const fdata = await data.json();
      setlocalstate(
        fdata?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setfilterrestro
        (
          fdata?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants
        );

      
    }
    catch (error) {
      console.log(error.message)
    }
  };
  return (
    <div className="body">
      <div className="flex">
        <div >
          <input
           className=" m-4 p-2 border border-blue-500"
            type="search"
            placeholder="Search your Food"
            value={searcttext}
            onChange={(e) => {  
              setseachtext(e.target.value);

            }}
            onKeyUp={() => {
              let filterdata = localstate.filter((res) =>
                res.info.name.toLowerCase().includes(searcttext.toLowerCase())
              );
              setfilterrestro(filterdata);
            }}
          ></input>
      
        </div>
        <div className=" m-4 p-2 bg-gray-600  text-white hover:bg-gray-500 rounded-md">
          <button
            onClick={() => {
              let rate = localstate.filter((ele) => ele?.info?.avgRating > 4);
              setfilterrestro(rate)
            }}
          >
            Top Rated Restaurant
          </button>
        </div>
      </div>

      <div className="flex flex-wrap ">
        {localstate.length === 0 ? (
          <Shimmer />
        ) : (
          <Restrocard resList={fliteredrestro} />
        )}
      </div>
    </div>
  );
};

export default Body;
