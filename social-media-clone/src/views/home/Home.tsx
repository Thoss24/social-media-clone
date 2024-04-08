import axiosClient from "../axios_client";
import { useEffect } from "react";

const Home = () => {
  // useEffect(() => {
  //   axiosClient
  //     .get("/user")
  //     .then((response) => {
  //       console.log(response)
  //     })
  //     .catch((error) => {
  //       console.log(error)
  //     });
  // }, []);

  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};

export default Home;
