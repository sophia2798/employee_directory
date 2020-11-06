import React from 'react';
import "./Modal.css";

function Modal(props) {
    return (
        <div className="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
            <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLongTitle">{props.title}</h5>
            </div>
            <div className="modal-body">
                <img src={props.imageLg} alt={props.name} style={{height: 200}}/>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
            </div>
        </div>
        </div>
    )
}

export default Modal
