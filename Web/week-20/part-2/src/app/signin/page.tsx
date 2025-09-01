
"use client";
import axios from "axios";

export default function Sign() {
  return (
    <div>
      signin in page <br />
      <input type="text" name="" id="" placeholder="username" />
      <input type="text" placeholder="password" />
      <button
        onClick={async () => {
          try {
            const res = await axios.post("http://localhost:3000/api/signin", {
              username: "sad",
              password: "asdfdf",
            });
            localStorage.setItem("token", res.data.token);
          } catch (error) {
            console.error(error);
          }
        }}
      >
        signin
      </button>
    </div>
  );
}


