import { React, useState } from "react";
import CreatePasssword from "./components/CreatePassword";
import ConfirmPasssword from "./components/ConfirmPassword";
import "./styles/general.css";
import Button from "./components/Button";
import Dropdown from "./components/Dropdown";

function App() {
  const purpose = "color";
  const [selectedOption, setSelectedOption] = useState(`Select a ${purpose}`);

  const handleSelect = (value) => {
    setSelectedOption(value);
  };

  const options = [
    { label: "Red", value: "red" },
    { label: "Green", value: "green" },
    { label: "Blue", value: "blue" },
  ];
  return (
    <div className="font-inter">
      {/* <CreatePasssword />
      <ConfirmPasssword />
      <div>
        <Button primary outlined big>
          Create your ABHA account
        </Button>
      </div>
      <div>
        <Button secondary outlined>
          Link your ABHA
        </Button>
      </div>
      <div>
        <Button success outlined>
          Click me
        </Button>
      </div>
      <div>
        <Button warning outlined>
          Click me
        </Button>
      </div>
      <div>
        <Button danger outlined>
          Click me
        </Button>
      </div>
      <Button primary>Hey there!</Button>
  <Button secondary>Aushadam</Button> */}

      <Button primary>Primary btn</Button>
      <Button secondary>Secondary btn</Button>
      <Button success>Success btn</Button>
      <Button warning>Warning btn</Button>
      <Button danger>Danger btn</Button>
      <Button primary outlined>
        Primary outlined btn
      </Button>
      <Button secondary outlined>
        Secondary outlined btn
      </Button>
      <Button success outlined>
        Success outlined btn
      </Button>
      <Button warning outlined>
        Warning outlined btn
      </Button>
      <Button danger outlined>
        Danger outlined btn
      </Button>
      <Button primary big>
        Bit primary btn
      </Button>
      <Button primary outlined big>
        Big primary outlined btn
      </Button>

      <Dropdown
        purpose={purpose}
        options={options}
        handleSelect={handleSelect}
        selectedOption={selectedOption}
      />

      {/* <Dropdown
        purpose="IPL team"
        options={[
          { label: "Mumbai Indians", value: "mi" },
          { label: "Chennai Super Kings", value: "csk" },
          { label: "Royal Challengers Bangalore", value: "rcb" },
          { label: "Gujrat Titans", value: "gt" },
          { label: "Lucknow Super Giants", value: "lsg" },
        ]}
        handleSelect={handleSelect}
        selectedOption={selectedOption}
      /> */}
    </div>
  );
}

export default App;
