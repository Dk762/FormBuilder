import React, { Fragment } from "react";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function FormBuilder() {
  let copyCount = 0;

  function copy() {
    let data = () => {
      <div className={"copy_" + copyCount}>
        <div className="border">
          <input typp="text" name="que_1" placeholder="Question 1" />
          <br /><br />
          
          <input type="radio" name="ques_1" value="Setting 1" /> Setting 1<br />
          <input type="radio" name="ques_1" value="Setting 2" /> Setting 2<br />
          <input type="radio" name="ques_1" value="Setting 3" /> Setting 3<br />
          <br />

          <Button variant="dark">Duplicate</Button>{" "}
          <Button variant="dark" onClick={remove("copy_"+copyCount)}>Remove</Button>
          
          <label class="switch">
            <input type="checkbox" />
            <span class="slider round"></span>
          </label>{" "}
          
          <Button variant="dark">Required</Button>{" "}
        </div>
      </div>
    };

    console.log(data)
    document.getElementsByClassName('copy').innerHTML = data;
  }

    function remove(name) {
        document.getElementsByClassName(name).innerHTML = "";
    }

  return (
    <Fragment>
      <div className="border">
        <input typp="text" name="name" placeholder="Form Title" />
        <br /><br />

        <input type="text" name="desc" placeholder="Form Description (Optional)" />
        <br /><br />
      </div><br />

      <div className="border">
        <input typp="text" name="que_1" placeholder="Question 1" />
        <br /><br />
        
        <input type="radio" name="ques_1" value="Setting 1" /> Setting 1<br />
        <input type="radio" name="ques_1" value="Setting 2" /> Setting 2<br />
        <input type="radio" name="ques_1" value="Setting 3" /> Setting 3<br />
        <br />
        
        <Button variant="dark" onClick={copy}>Duplicate</Button> {" "}
        <Button variant="dark">Remove</Button> {" "}
        
        <label className="switch">
          <input type="checkbox" />
          <span className="slider round"></span>
        </label>{" "}

        <Button variant="dark">Required</Button>{" "}
      </div>

      <div className="copy"></div>
    </Fragment>
  );
}

export default FormBuilder;
