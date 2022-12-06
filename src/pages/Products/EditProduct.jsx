import React, { useState} from "react";
import {MdEdit} from "react-icons/md"
// import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";


function EditProduct() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);




  return (
    <>
       {/* <Link
                      // to={${locate.pathname}/detail/${id}}
                      to={`editproduct/${id}`}
                      // className="btn btn-sm btn-info"
                    >
              </Link> */}
      <MdEdit variant="secondary" onClick={handleShow}>Edit
      </MdEdit>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title> Edit Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="row">
            <div className="col-md-12 m-3">
              <div className="row">
                <div className="mx-auto col-md-6">
                  <form>
                  <div className="form-group">
                      <label>Category : </label>
                      <select className="form-select" name="kategori">
                        <option value="">--Select Category--</option>
                        <option value="Pulsa">Pulsa</option>
                        <option value="Paket Data">Paket Data</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label>Serial Number</label>
                      <span></span>
                      <input
                        className="form-control"
                        type="number"
                        name="serialNumber"
                      ></input>
                    </div>
                    <div className="form-group">
                      <label>Product Name</label>
                      <span></span>
                      <input
                        className="form-control"
                        type="text"
                        name="name"
                      ></input>
                    </div>
                    <div className="form-group">
                    <label>Description : </label>
                    <textarea
                      className="form-control"
                      name="description"
                      rows="5"
                    ></textarea>
                    </div>
                    <div className="form-group">
                      <label>Price</label>
                      <span></span>
                      <input
                        className="form-control"
                        type="number"
                        name="price"
                      ></input>
                    </div>
                    <div className="form-group">
                      <label>Points</label>
                      <span></span>
                      <input
                        className="form-control"
                        type="number"
                        name="point"
                      ></input>
                    </div>
                    <div className="form-group">
                      <label>Stock</label>
                      <span></span>
                      <input
                        className="form-control"
                        type="number"
                        name="stock"
                      ></input>
                    </div>
                    <div className="form-group">
                      <label>Image</label>
                      <span></span>
                      <input
                        className="form-control"
                        type="text"
                        name="image"
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
      </Modal>
    </>
  );
}

export default EditProduct;
