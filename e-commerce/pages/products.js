import Format from "@/components/format";
import React, { useState } from "react";
import axios from "axios";
import Table from "@/components/productTable";
import SearchBar from "@/components/searchBar";
import { useEffect } from "react";

export default function Products() {
  const [showForm, setShowForm] = useState(false);
  const [showButtons, setShowButtons] = useState(true); // Use state to control visibility
  const [successMessage, setSuccessMessage] = useState("");
  const [showTable, setShowTable] = useState(true);
  const [showSearch, setShowSearch] = useState(true);
  const [products, setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [input, setInput] = useState({
    productName: "",
    description: "",
    price: "",
  });

  // Dom manipulation to show/hide the form
  const toggleForm = () => {
    setShowForm(!showForm); // Toggles the state to show/hide the form
    setShowButtons(!showButtons); // Toggles the state to show/hide the form
    setShowTable(!showTable);
    setShowSearch(!showSearch);
  };

  ///// Form functionality and POST/FETCH /////

  //  Update input values when user types in the form
  function handleChange(e) {
    const { id, value } = e.target;

    setInput((prevInput) => ({
      ...prevInput,
      [id]: value,
    }));
  }

  const fetchProducts = async () => {
    axios.get("/api/products").then((response) => {
      setProducts(response.data);
      setAllProducts(response.data);
      console.log("permProducts", products);
    });
  };

  // fetch all product data from the database
  useEffect(() => {
    fetchProducts();
  }, []);

  //  Submit the form and create a new product in the database
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

        fetchProducts();

        // show user a message that the product was added
        setSuccessMessage("Product added successfully"); // Set success message
        setTimeout(() => {
          setSuccessMessage(""); // Clear success message after 3 seconds
        }, 3000);
      })
      .catch((error) => {
        // Handle error - show a message to the user or log the error
        console.error("Error creating product:", error);
      });
  }

  /////// Search functionality ///////

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  // Execute a search accrording to the search query accross all product names and update products
  useEffect(() => {
    // Perform actions whenever searchQuery changes

    let filteredProducts = [];
    setShowTable(true);

    if (searchQuery === "") {
      // If search query is empty, show all products
      setProducts(allProducts);
      console.log("perm products", allProducts);
    } else {
      for (let i = 0; i < allProducts.length; i++) {
        if (allProducts[i].productName.includes(searchQuery)) {
          filteredProducts.push(allProducts[i]);
        }
      }
      if (filteredProducts.length === 0) {
        // If no products are found, show all products
        setShowTable(false);
      }
      setProducts(filteredProducts);
    }
  }, [searchQuery]); // This useEffect will trigger whenever searchQuery changes

  const inputClass =
    "border-2 border-white-400 rounded-lg px-1 py-1 font-light text-black text-lg m-1 ";

  return (
    <Format>
      <div className="flex flex-col h-full gap-4">
        {showButtons && (
          <div className="flex flex-row drop-shadow-2xl">
            <button
              className={
                "font-light text-black w-30 px-4 pt-2 pd-2 ml-3 mt-3 border-gray-500 border-2 transition duration-300 transform hover:bg-customGray hover:text-white hover:scale-105"
              }
              onClick={toggleForm}
            >
              Add Product
            </button>
            <button
              className={
                "font-light text-black w-30 px-4 pt-2 border-gray-500 border-2 pd-2 ml-3 mt-3 transition duration-300 transform hover:bg-customGray hover:text-white hover:scale-105"
              }
            >
              Edit
            </button>{" "}
            <div className="text-green-400 mt-5 ml-3">
              {successMessage && <p>{successMessage}</p>}
            </div>
          </div>
        )}

        <div className="flex flex-col items-center justify-center mt-10">
          {showSearch && <SearchBar onSearch={handleSearch} />}
          {showTable && <Table data={products} />}
        </div>

        <div className="flex flex-col items-center justify-center mr-3 h-full ">
          {showForm && (
            <div className="flex flex-col text-white items-center bg-customGray w-3/4 text-3xl mr-3 mb-10 relative">
              <div className="w-13 text-center absolute top-0 right-0">
                <button
                  className="font-light text-white rounded-lg m-4 transition duration-300 transform hover:scale-125"
                  type="submit"
                  onClick={toggleForm}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-8 h-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

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
              </form>
              <div className="flex mb-3 mt-3">
                <button
                  className=" font-light bg-white text-black px-4 pt-2 pb-1 m-4 transition duration-300 transform hover:scale-105"
                  type="submit"
                  onClick={handleSubmit}
                >
                  Submit
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </Format>
  );
}
