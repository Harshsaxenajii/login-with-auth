import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";
import img from "../Logos/Main_logo.png";

const Home = () => {
  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="flex justify-center flex-col items-center mt-10">
      <img className="w-40" src={img} alt="" />
      <div className="p-4 box mt-3 text-center">
        Hello Welcome <br />
        {user && user.email}

      </div>
      <div className="d-grid gap-2">
        <Button variant="primary" className="w-52" onClick={handleLogout}>
          Log out
        </Button>
      </div>
    </div>
  );
};

export default Home;
