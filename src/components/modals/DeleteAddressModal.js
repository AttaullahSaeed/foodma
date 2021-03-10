import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const DeleteAddressModal = (props) => {


	return (
		<Modal
			show={props.show ? props.show : false}
			onHide={props.onHide ? props.onHide : false}
			centered
			size="sm"
		>
			<Modal.Header closeButton={true}>
				<Modal.Title as='h5' id="delete-address">Delete</Modal.Title>
			</Modal.Header>

			<Modal.Body>
				<p className="mb-0 text-black">Are you sure you want to delete this xxxxx?</p>
			</Modal.Body>

			<Modal.Footer>
				<Button type='button' onClick={props.onHide} variant="outline-primary" className="d-flex w-50 text-center justify-content-center">CANCEL</Button>
				<Button type='button' variant="primary" className='d-flex w-50 text-center justify-content-center'>DELETE</Button>
			</Modal.Footer>
		</Modal>
	);
}

export default DeleteAddressModal;