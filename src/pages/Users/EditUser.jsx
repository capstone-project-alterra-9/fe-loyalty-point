import React, { useState} from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import {MdEdit} from "react-icons/md"
function EditUser() {
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
          <Modal.Title> Edit User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-md-12 m-3">
              <div className="row">
                <div className="mx-auto col-md-6">
                  <form>
                    <div className="form-group">
                      <label>Username : </label>
                      <span></span>
                      <input
                        className="form-control"
                        type="text"
                        name="username"
                      ></input>
                    </div>
                    <div className="form-group">
                      <label>Password </label>
                      <span></span>
                      <input
                        className="form-control"
                        type="text"
                        name="password"
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

export default EditUser;
