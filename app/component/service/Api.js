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
      // console.error("ERROR TO GET DATA", error);
      throw error; 
    }
  };

  export const get_user_by_id = async (id) => {
    // console.log("IDD", id);
    try {
      const res = await axios.get(`http://localhost:8082/users/user/${id}`);
      const data = await res.data;
      return data;
    } catch (error) {
      // console.error("ERROR TO GET DATA",error);
      throw error; // Rethrow the error to handle it in the calling code
    }
  }


  export const deleteUserData = async (id) => {
    // console.log("API CALL",id);
    try {
      const deleteUrl = `http://localhost:8082/users/delete/${id}`;
      const response = await axios.delete(deleteUrl);
      // console.log("Done",);
      return response.data; // Assuming the response contains relevant data
    } catch (error) {
      throw error;
    }
  };