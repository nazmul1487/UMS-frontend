import axios from "axios";

export const get_users = async () => {
    try {
      const res = await fetch("http://localhost:8082/users", {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        redirect: 'manual',
      });
  
  
      const data = await res.json();
    //   console.log("ddddddd", data);
      return data;
    } catch (error) {
      console.error("ERROR TO GET DATA", error);
      throw error; // Rethrow the error to handle it in the calling code
    }
  };