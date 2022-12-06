import React, { useState} from "react";
import "../../assets/styles/Users.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import {BsFillPlusCircleFill} from "react-icons/bs"

function AddUser() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button className="btn-color" onClick={handleShow}>
        <BsFillPlusCircleFill/>
        <span> Add </span>
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title> Add User</Modal.Title>
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
                      <label>Email : </label>
                      <span></span>
                      <input
                        className="form-control"
                        type="email"
                        name="email"
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
                    <div className="form-group">
                      <label>Points </label>
                      <span></span>
                      <input
                        className="form-control"
                        type="number"
                        name="points"
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

export default AddUser;
