// react bootstrap
import { Button,Modal,Form } from 'react-bootstrap'
// react hooks
import {useState} from 'react';

export const Signup = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
    <>
            <Button variant="light m-2 border" onClick={handleShow}>
                Signup
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Signup</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Button variant="danger w-100 mb-2" onClick={handleClose}>
                        <span className="fa fa-google mx-1"></span> Sing in with Google
                    </Button>
                    <Button variant="primary w-100 mb-2" onClick={handleClose}>
                        <span className="fa fa-facebook mx-1"></span> Sing in with facebook    
                    </Button>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicUserName">
                            <Form.Label>User Name</Form.Label>
                            <Form.Control type="text" placeholder="User Name" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button variant="outline-dark w-100" onClick={handleClose} type="submit">
                            Submit
                        </Button>
                    </Form>
                    </Modal.Body>
            </Modal>  
    </>
    )
}
