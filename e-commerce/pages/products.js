import Format from "@/components/format";
import React, { useState } from "react";
import axios from "axios";
import { Gideon_Roman } from "next/font/google";
import Table from "@/components/productTable";

export default function Products() {
  const [showForm, setShowForm] = useState(false);
  const [showButtons, setShowButtons] = useState(true); // Use state to control visibility
  const [successMessage, setSuccessMessage] = useState("");
  const [showTable, setShowTable] = useState(true);

  const inputClass =
    "border-2 border-white-400 rounded-lg px-1 py-1 font-light text-black text-lg m-1";

  const [input, setInput] = useState({
    productName: "",
    description: "",
    price: "",
  });

  const toggleForm = () => {
    setShowForm(!showForm); // Toggles the state to show/hide the form
    setShowButtons(!showButtons); // Toggles the state to show/hide the form
    setShowTable(!showTable);
  };

  function handleChange(e) {
    const { id, value } = e.target;

    setInput((prevInput) => ({
      ...prevInput,
      [id]: value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(input);
    const newProduct = {
      productName: input.productName,
      description: input.description,
      price: input.price,
    };

    await axios
      .post("/api/products", newProduct)
      .then((response) => {
        console.log("Product added successfully:", response.data);
        // Handle success - clear the form

        setInput({
          productName: "",
          description: "",
          price: "",
        });

        toggleForm(); // Hide the form

        // show user a message that the product was added
        setSuccessMessage("Product added successfully."); // Set success message
      })
      .catch((error) => {
        console.error("Error creating product:", error);

        // Handle error - show a message to the user or log the error
      });
  }

  return (
    <Format>
      <div className="flex flex-col h-full gap-4">
        {showButtons && (
          <div className="flex flex-row">
            <button
              className={
                "bg-blue-400 font-light text-white w-30 px-4 py-2 border-gray-50 rounded-lg pd-2 ml-3 mt-3"
              }
              onClick={toggleForm}
            >
              Add Product
            </button>
            <button
              className={
                "bg-red-400 font-light text-white w-30 px-4 py-2 border-gray-50 rounded-lg pd-2 ml-3 mt-3"
              }
            >
              Edit
            </button>
          </div>
        )}

        <div className="flex flex-col items-center justify-center mr-3 h-full ">
          {showForm && (
            <div className="flex flex-col text-white items-center  border-none rounded-lg bg-black border-4 w-3/4 text-3xl  mr-3 mb-10">
              <form className="flex flex-col gap-10 mt-20">
                <div className="flex flex-col">
                  <label className="mx-1 font-light" htmlFor="productName">
                    Product Name:
                  </label>
                  <input
                    className={inputClass}
                    id="productName"
                    type="text"
                    placeholder="Product Name"
                    value={input.productName}
                    onChange={handleChange}
                  />
                </div>
                <div className="flex flex-col">
                  <label className="mx-1 font-light" htmlFor="description">
                    Description:
                  </label>
                  <textarea
                    className={inputClass}
                    id="description"
                    type="text"
                    placeholder="Description"
                    value={input.description}
                    onChange={handleChange}
                    rows="5"
                    cols="80"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="mx-1 font-light" htmlFor="price">
                    Price (USD):
                  </label>
                  <input
                    className={inputClass}
                    id="price"
                    type="number"
                    placeholder="Price"
                    value={input.price}
                    onChange={handleChange}
                  />
                </div>
                {/* Add more form fields as needed */}
              </form>

              <div className="text-orange-400"> {successMessage && <p>{successMessage}</p>} </div>

              <div className="flex mb-3 mt-3">
                <button
                  className=" font-light bg-blue-400 text-white px-4 py-2 rounded-lg m-4"
                  type="submit"
                  onClick={handleSubmit}
                >
                  Submit
                </button>
                <button
                  className="bg-red-400 font-light text-white px-4 py-2 rounded-lg m-4"
                  type="submit"
                  onClick={toggleForm}
                >
                  Cancel
                </button>
              </div>
            </div>
          )}
          {showTable && <Table />}
        </div>
      </div>
    </Format>
  );
}
