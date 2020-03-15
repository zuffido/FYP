import React from 'react'
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";

const CreditCard = (props) => {
  const fname=props.location.param1
  const lname=props.location.param2
  const emailID=props.location.param3
  //get firstName entered in signup as prop

  return (
    <div>

    <h1> Welcome {fname}, {lname}, {emailID}  Enter your credit card credentials to continue </h1>

    </div>
  )
}
export default CreditCard;
