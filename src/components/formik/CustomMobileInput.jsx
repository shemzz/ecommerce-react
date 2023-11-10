/* eslint-disable react/forbid-prop-types */
import { useField } from 'formik';
import PropType from 'prop-types';
import React from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css'

const CustomMobileInput = (props) => {
  const [field, meta, helpers] = useField(props);
  const { label, placeholder, defaultValue } = props;
  const { touched, error } = meta;
  const { setValue } = helpers;
  console.log('defaultvalues', defaultValue)

  const handleChange = (value, data) => {
    const mob = {
      country: data.name || "United States",
      countryCode: data.countryCode || "us",
      dialCode: data.dialCode || "1",
      value: value || ""
    };

    setValue(mob);
  };

  return (
    <div className="input-group">
      {touched && error ? (
        <span className="label-input label-error">{error?.dialCode}</span>
      ) : (
        <label className="label-input" htmlFor='mobile'>{label}</label>
      )}
      <PhoneInput
        name='mobile'
        country={'us'}
        inputClass="input-form d-block"
        style={{
          border: touched && error ? '1px solid red' : '1px solid #cacaca'
        }}
        inputProps={{ required: true }}
        onChange={handleChange}
        placeholder={placeholder}
        value={defaultValue.value}
      />
    </div>
  );
};

CustomMobileInput.defaultProps = {
  label: 'Mobile Number',
  placeholder: '01254461351'
};

CustomMobileInput.propTypes = {
  label: PropType.string,
  placeholder: PropType.string,
  defaultValue: PropType.shape({
    dialCode: PropType.string,
    countryCode: PropType.string,
    value: PropType.string
  }).isRequired
};


export default CustomMobileInput;
