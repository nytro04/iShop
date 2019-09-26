import React from "react";
import ReactDOM from "react-dom";

const Modal = props => {
  return ReactDOM.createPortal(
    <div
      className="modal fade"
      id="cartModal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="iShopcartModal"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-scrollable" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="iShopcartModal">
              iShopCart
            </h5>
            <button
              className="close"
              type="button"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
            <div className="modal-body">
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Consequatur id, voluptatum ut velit nihil necessitatibus dolorem
            </div>
            <div className="modal-footer">
              <button className="btn btn-secondary" data-dismiss="modal">
                Close
              </button>
              <button className="btn btn-primary" data-dismiss="modal">
                Proceed to CheckOut
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.querySelector("#modal")
  );
};

export default Modal;
