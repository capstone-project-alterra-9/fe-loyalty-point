import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { inputProduct } from "../../store/features/productSlice";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { PlusSvg } from "../../assets";

function AddProduct() {
  const [modal, setModal] = useState(false);

  const handleModal = () => {
    setModal(!modal);
  };

  const [category, setCategory] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState();
  const [stock, setStock] = useState();
  const [image, setImage] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const createProduct = async (e) => {
    e.preventDefault();
    try {
      dispatch(
        inputProduct({ category, name, description, price, stock, image })
      );
      Swal.fire("Success Save Your Products");
    } catch (error) {
      console.log("error", error);
    }
    navigate("/admin/products");
  };

  return (
    <>
      <div className="flex flex-row-reverse mb-5 ">
        <button
          type="button"
          className="text-white bg-[#566B55] font-medium rounded-lg text-sm px-6 py-2.5 mr-2 flex shadow-lg hover:bg-[#6F8A6E]"
          onClick={handleModal}
        >
          <img alt="" src={PlusSvg} className="mr-4"></img>
          <p className="pt-0.5">Add</p>
        </button>
      </div>

      {modal && (
        <div
          id="editUserModal"
          tabIndex={-1}
          aria-hidden="true"
          className="
          flex flex-row overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center p-4 w-full md:inset-0 h-modal md:h-full"
        >
          <div className="relative w-full max-w-lg h-full md:h-auto rounded-lg shadow-lg">
            {/* Modal content */}
            <form action="#" className="relative bg-white rounded-lg ">
              {/* Modal header */}
              <div className="flex p-4 rounded-t-xl border-b  bg-[#566B55] justify-center">
                <h3 className="text-xl font-semibold text-white ">
                  Create Product
                </h3>
              </div>
              {/* Modal body */}
              <div className="p-6 px-10">
                <div className="mb-4">
                  <label
                    htmlFor="category"
                    className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
                  >
                    Category
                  </label>
                  <select
                    id="category"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#566B55] focus:border-[#6F8A6E] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option value="" selected hidden>
                      Nothing Selected
                    </option>
                    <option>Credits</option>
                    <option>E-Money</option>
                    <option>Data</option>
                    <option>Cashout</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="base-input"
                    className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
                  >
                    Serial Number
                  </label>
                  <input
                    type="text"
                    id="base-input"
                    placeholder="contoh : P0001"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#566B55] focus:border-[#6F8A6E] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="base-input"
                    className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
                  >
                    Product Name
                  </label>
                  <input
                    type="text"
                    id="base-input"
                    placeholder="contoh : Pulsa 10000"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#566B55] focus:border-[#6F8A6E] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="base-input"
                    className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
                  >
                    Price (IDR)
                  </label>
                  <input
                    type="number"
                    id="base-input"
                    placeholder="contoh : 10000"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#566B55] focus:border-[#6F8A6E] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="base-input"
                    className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
                  >
                    Point
                  </label>
                  <input
                    type="number"
                    id="base-input"
                    placeholder="contoh : 10000"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#566B55] focus:border-[#6F8A6E] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="base-input"
                    className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
                  >
                    Stock
                  </label>
                  <input
                    type="number"
                    id="base-input"
                    placeholder="contoh : 10"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#566B55] focus:border-[#6F8A6E] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
              </div>
              {/* Modal footer */}
              <div className="flex justify-end p-4 pt-2 rounded-b-xl ">
                <button
                  type="submit"
                  onClick={handleModal}
                  className="text-[#566B55] bg-white border-2  hover:border-[#566B55] focus:ring-2 focus:ring-[#566B55] font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="text-white bg-[#566B55] hover:bg-[#6F8A6E] border-2 hover:border-[#6F8A6E] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                >
                  Create
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title> Add Transaction</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-md-12 m-3">
              <div className="row">
                <div className="mx-auto col-md-6">
                  <form onSubmit={createProduct}>
                    <div className="form-group">
                      <label>Category : </label>
                      <select
                        className="form-select"
                        name="category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                      >
                        <option value="">--Select Category--</option>
                        <option value="credits">Pulsa</option>
                        <option value="data-quota">Paket Data</option>
                        <option value="e-money">E-Money</option>
                        <option value="cashout">Cashout</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label>Product Name</label>
                      <span></span>
                      <input
                        className="form-control"
                        type="text"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      ></input>
                    </div>
                    <div className="form-group">
                      <label>Description : </label>
                      <textarea
                        className="form-control"
                        name="description"
                        rows="5"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                      ></textarea>
                    </div>
                    <div className="form-group">
                      <label>Price</label>
                      <span></span>
                      <input
                        className="form-control"
                        type="number"
                        name="price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                      ></input>
                    </div>
                    <div className="form-group">
                      <label>Stock</label>
                      <span></span>
                      <input
                        className="form-control"
                        type="number"
                        name="stock"
                        value={stock}
                        onChange={(e) => setStock(e.target.value)}
                      ></input>
                    </div>
                    <div className="form-group">
                      <label>Image</label>
                      <span></span>
                      <input
                        className="form-control"
                        type="text"
                        name="image"
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                      ></input>
                    </div>
                    <br />
                    <div className="mb-3">
                      <button type="submit" className="btn btn-success">
                        Submit
                      </button>
                      <Button variant="secondary" onClick={handleClose}>
                        Close
                      </Button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal> */}

      {/* <Modal show={false} size="md" popup={true} onHide={handleClose}>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">
              Sign in to our platform
            </h3>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email" value="Your email" />
              </div>
              <TextInput
                id="email"
                placeholder="name@company.com"
                required={true}
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="password" value="Your password" />
              </div>
              <TextInput id="password" type="password" required={true} />
            </div>
            <div className="flex justify-between">
              <div className="flex items-center gap-2">
                <Checkbox id="remember" />
                <Label htmlFor="remember">Remember me</Label>
              </div>
              <a
                href="/modal"
                className="text-sm text-blue-700 hover:underline dark:text-blue-500"
              >
                Lost Password?
              </a>
            </div>
            <div className="w-full">
              <Button>Log in to your account</Button>
            </div>
            <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
              Not registered?{" "}
              <a
                href="/modal"
                className="text-blue-700 hover:underline dark:text-blue-500"
              >
                Create account
              </a>
            </div>
          </div>
        </Modal.Body>
      </Modal> */}
    </>
  );
}

export default AddProduct;
