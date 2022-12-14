import React, { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import {
  getProducts,
  editProduct,
  productSelectors,
} from "../../store/features/productSlice";
import { useParams, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

import { MdEdit } from "react-icons/md";
import { EditSvg } from "../../assets";

function EditProduct() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [category, setCategory] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [image, setImage] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const product = useSelector((state) => state.product.data);

  const [modal, setModal] = useState(false);

  const handleModal = () => {
    setModal(!modal);
  };

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  useEffect(() => {
    if (product) {
      setCategory(product.category);
      setName(product.name);
      setDescription(product.description);
      setPrice(product.price);
      setStock(product.stock);
      setImage(product.image);
    }
  }, [product]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    await dispatch(
      editProduct({ id, category, name, description, price, stock, image })
    );
    Swal.fire("Success Edit Your Product");
    navigate("/admin/products");
  };

  return (
    <>
      <div onClick={handleModal}>
        <img src={EditSvg} alt="" className="w-6" />
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
              <div className="flex p-4 rounded-t-lg border-b  bg-[#566B55] justify-center">
                <h3 className="text-xl font-semibold text-white ">
                  Edit Product
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
                  <div>
                    <label
                      htmlFor="message"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Description
                    </label>
                    <textarea
                      id="message"
                      rows={2}
                      className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-[#566B55] focus:border-[#6F8A6E] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      // placeholder="Write your thoughts here..."
                      defaultValue={""}
                    />
                  </div>
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
                    min="0"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#566B55] focus:border-[#6F8A6E] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>

                <div className="mb-4">
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

                <div>
                  <label
                    htmlFor="base-input"
                    className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
                  >
                    Image
                  </label>
                  <input
                    type="string"
                    id="base-input"
                    placeholder="contoh : 10 GB"
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
          <div className="opacity-25 fixed inset-0 -z-10 bg-black"></div>
        </div>
      )}
      {/* <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title> Edit Transaction</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-md-12 m-3">
              <div className="row">
                <div className="mx-auto col-md-6">
                  <form onSubmit={handleUpdate}>
                    <div className="form-group">
                      <label>Category : </label>
                      <select
                        className="form-select"
                        name="kategori"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                      >
                        <option value="">--Select Category--</option>
                        <option value="Pulsa">Pulsa</option>
                        <option value="Paket Data">Paket Data</option>
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
                      <button type="submit" className="btn btn-info">
                        Update
                      </button>
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
    </>
  );
}

export default EditProduct;
