import {useState} from 'react'
// react bootstrap
import { Form } from 'react-bootstrap'


export const Input = () => {

    const [focused, setFocused] = useState(false);

    const [values, setValues] = useState({
      email: "",
      password: "",
    });
  
    const inputs = [
      {
        id: 1,
        name: "email",
        type: "email",
        placeholder: "Email",
        errorMessage: "It should be a valid email address!",
        label: "Email",
        required: true,
      },
      {
        id: 2,
        name: "password",
        type: "text",
        placeholder: "Password",
        errorMessage:
          "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
        label: "Password",
        pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
        required: true,
      },
    ];

    /*const handleSubmit = (e) => {
      e.preventDefault();
    };*/
  
    const onChange = (e) => {
      setValues({ ...values, [e.target.name]: e.target.value });
    };
  
   
    const handleFocus = () => {
        setFocused(true);
      };

    return (
        <>
         {
           inputs.map( input => (
            <Form.Group className="mb-3" controlId="formBasicEmail" key={input.id}>
              <Form.Label>{input.label}</Form.Label>
              <Form.Control 
                onChange={onChange}
                onBlur={handleFocus}
                focused={focused.toString()}
                value={values[input.name]}
              />
              <Form.Text>{input.errorMessage}</Form.Text>
            </Form.Group>
          ))
        }
      </>
    )
}
