import { useState } from "react";

const FormInput = (props) => {
  const [focused, setFocused] = useState(false);
  const {...inputProps} = props;

  const handleFocus = (e) => {
      setFocused(true);
  };

  return (
      <div>
          <input {...inputProps} onBlur={handleFocus}
              onFocus={() =>
                  props.name === "confirmPassword" && setFocused(true)
              }
              focused={focused.toString()}/>
      </div>
  );
}


export default FormInput