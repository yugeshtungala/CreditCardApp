import { useState } from "react";

interface FormDetails {
  email: string;
  password: string;
}

const CreditCardLogin = () => {
  const [formDetails, setDetails] = useState<FormDetails>({
    email: "",
    password: "",
  });

  const handleSubmit = (e: any) => {
    console.log("submit", formDetails);
  };

  const onButtonClick = (e: any) => {
    console.log("buttonClicked");
  };

  const handleCardClick = (event: any) => {
    console.log("Card clicked");
  };

  const handleButtonClick = (event: any) => {
    event.stopPropagation(); // Prevent bubbling to parent
    console.log("Button clicked");
  };

  return (
    <div onClick={handleCardClick}>
      {" "}
      // parent
      <button onClick={handleButtonClick}>Click Me</button> // child
    </div>
  );
};
export default CreditCardLogin;
