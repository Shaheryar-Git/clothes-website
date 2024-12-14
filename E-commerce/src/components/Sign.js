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
  const [showDropdown, setShowDropdown] = useState(false);

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
      style={{
        backgroundImage: `url('/Assets/baby-sneakers-wooden_1323-281.avif')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="container">
        <div className="row">
          {/* Left Column - Form */}
          <div className="col-md-6 d-flex justify-content-center align-items-center">
            <form
              className="bg-dark text-white p-4 rounded shadow"
              style={{
                maxWidth: "400px",
                width: "100%",
                padding: "20px",
                boxSizing: "border-box",
              }}
            >
              <h1 className="text-center fw-bold mb-4">
                <i>ShoeEnvy Form</i>
              </h1>

              {/* Name Input */}
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
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
                />
              </div>

              {/* Email Input */}
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
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
                />
              </div>

              {/* Password Input */}
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
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
                />
              </div>

              {/* Address Input */}
              <div className="mb-3">
                <label htmlFor="address" className="form-label">
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
                />
              </div>

              {/* Submit Button */}
              <button
                type="button"
                className="btn btn-success w-100"
                onClick={SUBMIT}
              >
                Submit
              </button>
            </form>
          </div>

          {/* Right Column - Payment Method */}
          <div className="col-md-6 d-flex flex-column align-items-center justify-content-center">
            <button
              className="btn btn-primary mb-4"
              onClick={() => setShowDropdown(!showDropdown)}
            >
              Payment Method
            </button>
            {showDropdown && (
              <div className="bg-light p-3 rounded shadow">
                <h3 className="fw-bold">Payment Method:</h3>
                <p>
                  <strong>(BANK TRANSFER)</strong> Habib Bank Limited (HBL)
                </p>
                <p>
                  <strong>Account:</strong> 13497900632703 (Mohd Huzaifa)
                </p>
                <p>
                  <strong>IBAN:</strong> PK60 HABB 0013497900632703
                </p>
                <p>
                  <strong>Amount:</strong> To be decided /-
                </p>
                <p>
                  You can use <strong>EASYPAISA</strong> or <strong>JAZZCASH</strong> app to Transfer this amount in HBL Bank.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sign;
