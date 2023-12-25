import Format from "@/components/format";
import React, { useState } from "react";

export default function Products() {
  const [showForm, setShowForm] = useState(false);
  const [showButtons, setShowButtons] = useState(true); // Use state to control visibility
  const inputClass = "border-2 border-blue-400 rounded-lg px-1 py-1 font-light text-lg"


  const toggleForm = () => {
    setShowForm(!showForm); // Toggles the state to show/hide the form
    setShowButtons(!showButtons); // Toggles the state to show/hide the form
  };

  return (
    <Format>
      <div className="flex flex-col h-full gap-4">
        {showButtons && (
          <div className="flex flex-row">
            <button
              className={
                "bg-blue-400 text-white w-30 px-4 py-2 border-gray-50 rounded-lg pd-2 ml-3 mt-3"
              }
              onClick={toggleForm}
            >
              Add Product
            </button>
            <button
              className={
                "bg-red-400 text-white w-30 px-4 py-2 border-gray-50 rounded-lg pd-2 ml-3 mt-3"
              }
            >
              Edit
            </button>
          </div>
        )}

        <div className="flex justify-center items-center my-10">
          {showForm && (
            <div className="flex flex-col items-center justify-center w-full border-none rounded-lg bg-green-400 border-4 w-3/5 h-full text-3xl">
              <form className="flex flex-col gap-20 m-10">
                {/* Your form fields go here */}
                <div className="flex flex-col">
                  <label className="mx-1" htmlFor="productName">
                    Product Name:
                  </label>
                  <input
                    className={inputClass}
                    id="productName"
                    type="text"
                    placeholder=""
                  />
                </div>
                <div className="flex flex-col">
                  <label className="mx-1" htmlFor="description">
                    Description:
                  </label>
                  <textarea
                    className={inputClass}
                    rows="5"
                    cols="80"
                    id="description"
                    type="text"
                    placeholder=""
                  />
                </div>
                <div className="flex flex-col">
                  <label className="mx-1" htmlFor="price">
                    Price:
                  </label>
                  <input
                    className={inputClass}
                    id="price"
                    type="number"
                    placeholder=""
                  />
                </div>
                {/* Add more form fields as needed */}
              </form>
              <div className="flex mt-10">
                <button
                  className="bg-blue-400 text-white px-4 py-2 rounded-lg m-4"
                  type="submit"
                >
                  Submit
                </button>
                <button
                  className="bg-red-400 text-white px-4 py-2 rounded-lg m-4"
                  type="submit"
                  onClick={toggleForm}
                >
                  Cancel
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </Format>
  );
}
