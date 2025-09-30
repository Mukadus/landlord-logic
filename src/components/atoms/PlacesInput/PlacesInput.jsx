import React from "react";
import Autocomplete from "react-google-autocomplete";
import styles from "./PlacesInput.module.css";
import config from "@/config";
import { mergeClass } from "@/resources/utils/helper";


const PlacesInput = ({
  label = "",
  placeholder = "Search for a location",
  value = "",
  onChange = () => {},
  onPlaceSelected = () => {},
  error = "",
  containerClass = "",
  inputStyles = {},
  inputClass = "",
  disabled = false,
  apiKey = config.GOOGLE_MAP_KEY_API || "", // Google Maps API key
  options = {}, // Additional options for Autocomplete
  leftIcon = null,
  rightIcon = null,
  ...props
}) => {
  // Triggers when a place is selected from the autocomplete suggestions
  const handlePlaceSelected = (place) => {
    if (onPlaceSelected && place) {
      onPlaceSelected(place);
    }
  };

  return (
    <div className={mergeClass(styles.container, containerClass)}>
      {label && <label className={styles.label}>{label}</label>}

      <div className={styles.inputContainer}>
        {leftIcon && <div className={styles.leftIconBox}>{leftIcon}</div>}
        <Autocomplete
          apiKey={apiKey}
          onPlaceSelected={handlePlaceSelected}
          onChange={onChange}
          value={value}
          options={{
            types: ["address"],
            ...options,
          }}
          style={inputStyles}
          className={mergeClass(
            styles.inputClass,
            leftIcon && styles.withLeftIcon,
            rightIcon && styles.withRightIcon,
            inputClass
          )}
          placeholder={placeholder}
          disabled={disabled}
          {...props}
        />

        {rightIcon && <div className={styles.rightIconBox}>{rightIcon}</div>}
      </div>

      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};

export default PlacesInput;
