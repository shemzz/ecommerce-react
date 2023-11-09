/* eslint-disable react/forbid-prop-types */
import { useField } from 'formik';
import PropType from 'prop-types';
import React from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css'

const CustomMobileInput = (props) => {
  console.log('props', props)
  const [field, meta, helpers] = useField(props);
  const { label, placeholder } = props;
  const defaultValue = props?.defaultValue;
  const { touched, error } = meta;
  const { setValue } = helpers;
  console.log('valuee', defaultValue)

  const handleChange = (value, data) => {
    const mob = {
      dialCode: data.dialCode,
      countryCode: data.countryCode,
      country: data.name,
      value
    };

    setValue(mob);
  };

  return (
    <div className="input-group">
      {touched && error ? (
        <span className="label-input label-error">{error?.dialCode}</span>
      ) : (
        <label className="label-input" htmlFor={field.name}>{label}</label>
      )}
      {/* <PhoneInput
        name={field.name}
        country={'us'}
        inputClass="input-form d-block"
        style={{
          border: touched && error ? '1px solid red' : '1px solid #cacaca'
        }}
        inputProps={{ required: true }}
        onChange={handleChange}
        placeholder={placeholder}
        value={defaultValue.value}
      /> */}
    

<PhoneInput
  country={'us'}
  value={defaultValue.value}
  onChange={handleChange}
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
