import React, { useState } from "react";
import logo from "../Logos/Main_logo.png";
import back from "../Images/First_back.jpg";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
// import GoogleButton from "react-google-button";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";
import { Alert } from "bootstrap";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const { signUp } = useUserAuth();
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(email, password);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };




  return (
    <div>
      <img className="login_back" src={back} alt="logo" />

      <section className="flex justify-center items-center">
        <div className="login bg-white xl:w-3/5 rounded-2xl shadow-2xl xl:flex">
          <section className="bg-sky-100 xl:w-1/2 h-full flex justify-center rounded-2xl items-center ">
            <div className="">
            <div className="flex flex-col items-center">
                <h3
                  className="text-center text-2xl m-4"
                  style={{ color: "black" }}
                >
                  Nice To See You Again
                </h3>
                <h4
                  className="text-center text-5xl m-2 "
                  style={{ color: "#003314" }}
                >
                  Welcome Back
                </h4>
                <p className="text-center m-4 xl:text-lg xl:mx-20 xl: mt-10">
                  Now, you just need to Signup!
                </p>
                <p className="text-center mt-0 xl:text-lg xl:mx-20 xl:mt-10">
                  We are here to provide the best way of Signup with out any risk
                  that is the firebase authantication
                </p>
              </div>
            </div>
          </section>
          <section className="xl:w-1/2 flex justify-center items-center">
            <div className="flex flex-col items-center">
              <img className="w-52" src={logo} alt="logo" />
              <h4
                className="text-center text-5xl font-extralight my-4"
                style={{ color: "#003314" }}
              >
                Signup Account
              </h4>
              {error && <Alert className="w-full" variant="danger">{error}</Alert>}
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Group>
                <div className="flex">
                  <Form.Group
                    className="m-2 text-base"
                    controlId="formBasicCheckbox"
                  >
                    <Form.Check type="checkbox" label="Keep me signed in" />
                  </Form.Group>
                  <Link to="/">
                    <h3 className="text-base text-blue-600 m-2">
                      Already a member?
                    </h3>
                  </Link>
                
                </div>
                <div className="flex flex-col m-3  items-center">
                  {/* <GoogleButton /> */}

                  <Button
                    variant="primary"
                    className="w-60 m-2 bg-blue-500"
                    type="submit"
                  >
                    Submit
                  </Button>
                </div>
              </Form>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default Signup;
