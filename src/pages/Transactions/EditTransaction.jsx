import React, { useState} from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import {MdEdit} from "react-icons/md"
function EditTransaction() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <MdEdit variant="secondary" onClick={handleShow}>
        Edit
      </MdEdit>

      <Modal
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
                  <form>
                    <div className="form-group">
                      <label>Order ID </label>
                      <span></span>
                      <input
                        className="form-control"
                        type="text"
                        name="order_id"
                      ></input>
                    </div>
                    <div className="form-group">
                      <label>Tanggal</label>
                      <span></span>
                      <input
                        className="form-control"
                        type="date"
                        name="tanggal"
                      ></input>
                    </div>
                    <div className="form-group">
                      <label>Serial Number</label>
                      <span></span>
                      <input
                        className="form-control"
                        type="text"
                        name="serial_number"
                      ></input>
                    </div>
                    <div className="form-group">
                      <label>Nama Item</label>
                      <span></span>
                      <input
                        className="form-control"
                        type="text"
                        name="nama_item"
                      ></input>
                    </div>
                    <div className="form-group">
                      <label>Kategori : </label>
                      <select className="form-select" name="kategori">
                        <option value="">--Select Category--</option>
                        <option value="Pulsa">Pulsa</option>
                        <option value="Paket Data">Paket Data</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label>Point</label>
                      <span></span>
                      <input
                        className="form-control"
                        type="number"
                        name="point"
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

export default EditTransaction;
