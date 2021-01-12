import "./App.css";
import { Fragment, useState } from "react";
import FormBuilder from "./FormBuilder";
import Preview from "./Preview";
import { Tabs, Tab } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [key, setKey] = useState("home");
  return (
    <Fragment>
      <Tabs id="controlled-tab-example" activeKey={key} onSelect={(k) => setKey(k)}>
        <Tab eventKey="form_builder" title="Form Builder App">
          <FormBuilder />
        </Tab>
        <Tab eventKey="preview" title="Preview">
          <Preview />
        </Tab>
      </Tabs>
    </Fragment>
  );
}

export default App;
