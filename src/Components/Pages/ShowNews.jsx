import axios from "axios";
import { format } from "date-fns";
import React, { useState, useEffect } from "react";
export default function ShowNews() {
  const [data, setData] = useState(null);
  const [loading, setloading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await axios.get(
          "https://newsapi.org/v2/top-headlines",
          {
            params: {
              country: "us",
              category: "business",
              apikey: "1171947805bb4329aa61b9bc5a9f2c44",
            },
          }
        );

        setData(response.data.articles);
      } catch (error) {
        setError(error);
      } finally {
        setloading(false);
      }
    };
    fetchdata();
  }, []);
  if (error) {
    return (
      <h1 className="text-center mt-10">
        Error 500 - It's not you, it's us..Please come back after some time..
      </h1>
    );
  }
  if (!data) {
    return <div className="text-white">Loading...</div>; // Handle loading state
  }
  return (
    <div>
      <h1 className="text-white text-center mb-8 mt-10 underline font-mono text-4xl text-">
        {" "}
        Latest News
      </h1>
      <div>
        {data.slice(0, 5).map((ele, index) => (
          <div key={index}>
            <div className="py-4 px-10 m-4 flex bg-yellow-200 elements-center shadow-xl hover:bg-teal-600 focus:outline-none  ">
              <h2 className="text-black p-2 my-2">
                <span>Date & Time: </span>
                {format(ele.publishedAt, "MM/dd/yyyy HH:mm")}
              </h2>
              <h2 className="text-black p-2 my-2 ml-10">{ele.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
