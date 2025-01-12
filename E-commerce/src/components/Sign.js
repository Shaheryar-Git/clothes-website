import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Sign = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");

  const navigate = useNavigate();
  const [loaders, setLoaders] = useState(false);

  useEffect(() => {
    setLoaders(true);
    setTimeout(() => {
      setLoaders(false);
    }, 1000);
  }, []);

  if (loaders) {
    return (
      <ClipLoader
        color={"#ef0e0e"}
        loading={loaders}
        size={100}
        aria-label="Loading Spinner"
        data-testid="loader"
        className="mt-5"
      />
    );
  }

  const SUBMIT = async (e) => {
    e.preventDefault();

    if (!name || !email || !password || !address) {
      alert("ALL INFORMATION ARE REQUIRED");
      return;
    }

    console.log("User Details:", { name, email, password, address });

    try {
      let result = await fetch("http://localhost:4000/signIn", {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
          address,
        }),
      });

      if (result.ok) {
        toast.success("Thanks for ordering!", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          className: "text-center fw-bolder",
        });

        navigate("/");
        window.location.reload();
      }

      result = await result.json();
      console.log("Server Response:", result);
    } catch (error) {
      console.error("Error:", error);
      toast.error("Sign-in failed. Please try again later.", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        className: "text-center fw-bolder",
      });
    }
  };

  return (
    <div
      className="container-fluid d-flex align-items-center justify-content-center vh-100"
      style={{
       backgroundColor:"bisque",
        backgroundPosition: "center",
      }}
    >
      <div className="row w-100">
        {/* Left Column - Image */}
        <div className="col-md-6 d-none d-md-block">
          <img
            src="/Assets/WhatsApp Image 2025-01-11 at 11.37.57_9b8704ce.jpg"
            alt="Shoe Envy"
            className="img-fluid rounded"
            style={{
              height: "100%",
              objectFit: "cover",
              width: "100%",
            }}
          />
        </div>

        {/* Right Column - Form */}
        <div className="col-md-6 d-flex justify-content-center align-items-center">
        <form
  className="p-4 rounded shadow w-100"
  style={{
    maxWidth: "400px",
    background: "linear-gradient(to right, #ffffff, #f8f9fa)",
    borderRadius: "10px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  }}
>
  <h1
    className="text-center fw-bold mb-4"
    style={{
      fontSize: "1.5rem",
      color: "#333",
    }}
  >
    <i>IshqBunai Form</i>
  </h1>

  {/* Name Input */}
  <div className="mb-3">
    <label htmlFor="name" className="form-label" style={{ color: "#333" }}>
      Name
    </label>
    <input
      type="text"
      className="form-control"
      id="name"
      placeholder="Enter your name"
      value={name}
      onChange={(e) => setName(e.target.value)}
      required
      style={{
        border: "1px solid #ddd",
        borderRadius: "5px",
        padding: "10px",
      }}
    />
  </div>

  {/* Email Input */}
  <div className="mb-3">
    <label htmlFor="email" className="form-label" style={{ color: "#333" }}>
      Email
    </label>
    <input
      type="email"
      className="form-control"
      id="email"
      placeholder="Enter your email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      required
      style={{
        border: "1px solid #ddd",
        borderRadius: "5px",
        padding: "10px",
      }}
    />
  </div>

  {/* Password Input */}
  <div className="mb-3">
    <label htmlFor="password" className="form-label" style={{ color: "#333" }}>
      Password
    </label>
    <input
      type="password"
      className="form-control"
      id="password"
      placeholder="Enter your password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      required
      style={{
        border: "1px solid #ddd",
        borderRadius: "5px",
        padding: "10px",
      }}
    />
  </div>

  {/* Address Input */}
  <div className="mb-3">
    <label htmlFor="address" className="form-label" style={{ color: "#333" }}>
      Address
    </label>
    <input
      type="text"
      className="form-control"
      id="address"
      placeholder="Enter your address"
      value={address}
      onChange={(e) => setAddress(e.target.value)}
      required
      style={{
        border: "1px solid #ddd",
        borderRadius: "5px",
        padding: "10px",
      }}
    />
  </div>

  {/* Submit Button */}
  <button
    type="button"
    className="btn w-100"
    onClick={SUBMIT}
    style={{
      backgroundColor: "#007bff",
      color: "#fff",
      padding: "10px",
      fontWeight: "bold",
      borderRadius: "5px",
      border: "none",
      cursor: "pointer",
    }}
  >
    Submit
  </button>
</form>

        </div>
      </div>
    </div>
  );
};

export default Sign;
