import { useState, useEffect, useCallback } from "react";

const VALUE = "value";
const ERROR = "error";
const REQUIRED_FIELD_ERROR = "This field is required";

function is_object(value) {
  return typeof value === "object" && value !== null;
}

function is_required(value, isRequired) {
  if (!value && isRequired) return REQUIRED_FIELD_ERROR;
  return "";
}

function get_prop_values(stateSchema, prop) {
  return Object.keys(stateSchema).reduce((accumulator, curr) => {
    accumulator[curr] = !prop ? false : stateSchema[curr][prop];

    return accumulator;
  }, {});
}

function useForm(
  stateSchema = {},
  stateValidatorSchema = {},
  submitFormCallback
) {
  const [state, setStateSchema] = useState(stateSchema);

  const [values, setValues] = useState(get_prop_values(state, VALUE));
  const [errors, setErrors] = useState(get_prop_values(state, ERROR));
  const [dirty, setDirty] = useState(get_prop_values(state));

  const [disable, setDisable] = useState(true);
  const [isDirty, setIsDirty] = useState(false);

  // Get a local copy of stateSchema
  useEffect(() => {
    setStateSchema(stateSchema);
    setDisable(true); // Disable button in initial render.
    setInitialErrorState();
  }, []); // eslint-disable-line

  // For every changed in our state this will be fired
  // To be able to disable the button
  useEffect(() => {
    if (isDirty) {
      setDisable(validateErrorState());
    }
  }, [errors, isDirty]); // eslint-disable-line

  // Validate fields in forms
  const validateFormFields = useCallback(
    (name, value) => {
      const validator = stateValidatorSchema;
      // Making sure that stateValidatorSchema name is same in stateSchema
      if (!validator[name]) return;

      const field = validator[name];

      let error = "";
      error = is_required(value, field.required);

      if (is_object(field["validator"]) && error === "") {
        const fieldValidator = field["validator"];

        // Test the function callback if the value meets the criteria
        const testFunc = fieldValidator["func"];
        if (!testFunc(value, values)) {
          error = fieldValidator["error"];
        }
      }

      return error;
    },
    [stateValidatorSchema, values]
  );

  // Set Initial Error State
  // On first render...
  const setInitialErrorState = useCallback(() => {
    Object.keys(errors).map((name) =>
      setErrors((prevState) => ({
        ...prevState,
        [name]: validateFormFields(name, values[name]),
      }))
    );
  }, [errors, values, validateFormFields]);

  // Used to disable submit button if there's a value in errors
  // or the required field in state has no value.
  // Wrapped in useCallback to cached the function to avoid intensive memory leaked
  // in every re-render in component
  const validateErrorState = useCallback(
    () => Object.values(errors).some((error) => error),
    [errors]
  );

  // Event handler for handling changes in input.
  const handleOnChange = useCallback(
    (event) => {
      setIsDirty(true);

      const name = event.target.name;
      const value = event.target.value;

      const error = validateFormFields(name, value);

      setValues((prevState) => ({ ...prevState, [name]: value }));
      setErrors((prevState) => ({ ...prevState, [name]: error }));
      setDirty((prevState) => ({ ...prevState, [name]: true }));
    },
    [validateFormFields]
  );

  const handleOnSubmit = useCallback(
    (event) => {
      event.preventDefault();

      // Making sure that there's no error in the state
      // before calling the submit callback function
      if (!validateErrorState()) {
        submitFormCallback(values);
        setValues(get_prop_values(state, VALUE));
        setErrors(get_prop_values(state, ERROR));
        setDirty(get_prop_values(state));
        setIsDirty(false);
        setDisable(true);
        setInitialErrorState();
      }
    },
    [
      validateErrorState,
      submitFormCallback,
      values,
      state,
      setInitialErrorState,
    ]
  );

  return {
    handleOnChange,
    handleOnSubmit,
    values,
    errors,
    disable,
    setValues,
    setErrors,
    dirty,
  };
}

export default useForm;
