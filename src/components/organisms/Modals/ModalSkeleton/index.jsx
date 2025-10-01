import { Modal } from "react-bootstrap";
import { AiOutlineClose } from "react-icons/ai";
import clsx from "clsx";
import classes from "./ModalSkeleton.module.css";

export default function ModalSkeleton({
  size = "lg",
  show,
  setShow,
  heading,
  children,
  modalBodyClass,
  showCloseIcon = true,
  headerClass,
  modalMainClass,
  footerData = null,
}) {
  const handleClose = () => {
    setShow(false);
  };

  return (
    <Modal
      size={size}
      show={show}
      onHide={handleClose}
      centered
      dialogClassName={clsx(classes.modalDialog, modalMainClass)}
      className={clsx(classes.modal, modalMainClass)}
      backdropClassName={classes.backdrop}
    >
      {heading && (
        <div className={clsx(classes.header, headerClass)}>
          <div className={classes.headerContent}>
          <h2 className={classes.title}>
            {heading}
          </h2>
          {showCloseIcon && (
            <button className={classes.closeButton} onClick={handleClose}>
              <AiOutlineClose size={15}  color="var(--black-600)"/>
            </button>
          )}
          </div>
        </div>
      )}
      <Modal.Body className={clsx(classes.body, modalBodyClass)}>
        {children}
      </Modal.Body>
      {footerData && (
        <Modal.Footer className={classes.footer}>{footerData}</Modal.Footer>
      )}
    </Modal>
  );
}
