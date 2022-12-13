import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { inputProduct } from "../../store/features/productSlice";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function AddProduct() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
      <Button className="btn-color" onClick={handleShow}>
        <BsFillPlusCircleFill />
        <span> Add </span>
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title> Add Product</Modal.Title>
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
      </Modal>
    </>
  );
}

export default AddProduct;
