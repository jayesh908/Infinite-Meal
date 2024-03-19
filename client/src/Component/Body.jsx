import React, { useEffect, useState } from "react";
import Restrocard, { Promotedcard } from "./Restrocard";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../Utilities/useOnlineStatus";
const Body = () => {
  const [localstate, setlocalstate] = useState([]);
  const [fliteredrestro, setfilterrestro] = useState([])
  const [searcttext, setseachtext] = useState("");

  useEffect(() => {
    fetchdata();
    return (() => {
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
  const onlinestatus = useOnlineStatus()
  if (onlinestatus === false) {
    return (<h1 className="text-4xl flex justify-center text-center items-center">Looks Like You Internet COnnection is Slow Please Check it</h1>)
  }

  const Promotedcard2 = Promotedcard(Restrocard)

  return (
    <>
      {localstate.length === 0 ? (
        <Shimmer />) : (
        <div className="body">
          <div className="flex justify-between">
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
            <div>{onlinestatus === true ? (<h2 className="text-xl">Online:<span className="animate-pulse">🟢</span></h2>) : (<h3 className="text-xl">Offline:🔴</h3>)}</div>
          </div>

          <div className="flex flex-wrap ">
            {
              fliteredrestro.map((rest) => (
                rest.info.isOpen ? (<Promotedcard2 resList={rest} />) : (<Restrocard resList={rest} />)
              )
              )
            }
          </div>
        </div>
      )
      }
    </>

  );
};

export default Body;
