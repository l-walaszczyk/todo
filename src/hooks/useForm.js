import { useEffect, useState } from "react";

function createInitialObject(schema, val) {
  return Object.keys(schema).reduce((acc, cur) => ({ ...acc, [cur]: val }), {});
}

function useForm(stateSchema, submitFormCallback) {
  const [values, setValues] = useState(createInitialObject(stateSchema, ""));
  const [errors, setErrors] = useState(createInitialObject(stateSchema, ""));
  const [dirty, setDirty] = useState(false);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    setIsReady(() => {
      for (const key in stateSchema) {
        if (stateSchema[key].getErrorMsg(values[key])) {
          return false;
        }
      }
      return true;
    });
  }, [values, stateSchema, errors]);

  const handleOnChange = (event) => {
    setDirty(true);

    const { name, value } = event.target;
    const { getErrorMsg } = stateSchema[name];
    const errorMsg = getErrorMsg(value);

    setErrors((prevState) => ({
      ...prevState,
      [name]: errorMsg || "",
    }));

    setValues((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    setDirty(true);

    if (isReady) {
      submitFormCallback(values);
      setValues(createInitialObject(stateSchema, ""));
      setErrors(createInitialObject(stateSchema, ""));
      setDirty(false);
      setIsReady(false);
    } else {
      setErrors((prevErrors) => {
        const newErrors = { ...prevErrors };
        for (const key in newErrors) {
          newErrors[key] = stateSchema[key].getErrorMsg(values[key]);
        }
        return newErrors;
      });
    }
  };

  return {
    values,
    errors,
    dirty,
    isReady,
    handleOnChange,
    handleOnSubmit,
  };
}

export default useForm;
