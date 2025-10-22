import React, { useRef } from "react";
import { IoIosAdd } from "react-icons/io";
import { MdClose, MdModeEdit } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";
import clsx from "clsx";
import classes from "./UploadImageBoxNew.module.css";
import { fallbackImage, imageUrl} from "@/resources/utils/helper";

const UploadImageBoxNew = ({
  disabled = false,
  state,
  setValue,
  label,
  subLabel,
  edit = true,
  onDelete,
  onClose,
  fallBackImage,
  isCloseable,
  hideDeleteIcon = false,
  imgClass,
  uploadImageBox,
  containerClass = "",
  onEdit = () => {},
}) => {
  const inputRef = useRef(null);

  return (
    <>
      {label && (
        <label className={`${classes.label} ${subLabel && "m-0"}`}>
          {label}
        </label>
      )}
      {subLabel && <label className={classes.subLabel}>{subLabel}</label>}

      <div className={`${classes.box} ${containerClass}`}>
        <div className={clsx(classes.uploadImageBox, uploadImageBox)}>
          {/* Close Icon */}
          {isCloseable && (
            <span className={classes.closeIcon} onClick={onClose}>
              <MdClose />
            </span>
          )}
          {state?.name || typeof state == "string" ? (
            <div className={classes.imageUploaded}>
              <img
                src={
                  typeof state == "object"
                    ? URL.createObjectURL(state)
                    : imageUrl(state)
                }
                alt=""
                className={imgClass ? imgClass : ""}
                onError={e=> {
                  e.target.onerror=null;
                  e.target.src = fallbackImage
                }}
              />
              <div className={classes.editAndDelete}>
                {edit && (
                  <>
                    {hideDeleteIcon && (
                      <div className={classes.icon} onClick={onDelete}>
                        <RiDeleteBinLine />
                      </div>
                    )}
                    <div
                      className={classes.icon}
                      onClick={() => {
                        inputRef.current.click();
                        onEdit();
                      }}
                    >
                      <MdModeEdit />
                    </div>
                  </>
                )}
              </div>
            </div>
          ) : (
            <div
              onClick={() => inputRef.current.click()}
              className={classes.uploadBox}
              style={disabled ? { cursor: "default" } : { cursor: "pointer" }}
            >
              {/* <CgImage className={classes.icon} /> */}
              <div
                className={
                  disabled ? classes.uploadIconDisabled : classes.uploadIcon
                }
              >
                {fallBackImage ? (
                  <div className={classes.imgDiv}>
                    <img src={fallBackImage} alt="fallBackImage" />
                  </div>
                ) : (
                  <IoIosAdd size={25} />
                )}
              </div>
            </div>
          )}
        </div>
        {/* Input For Image Upload */}
        <input
          disabled={disabled}
          hidden
          type={"file"}
          ref={inputRef}
          onChange={(e) => setValue(e.target.files[0])}
        />
      </div>
    </>
  );
};

export default UploadImageBoxNew;
