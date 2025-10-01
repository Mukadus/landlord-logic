import DropDown from "@/components/molecules/DropDown/DropDown";
import Input from "@/components/atoms/Input/Input";
import { useFormik } from "formik";
import ModalSkeleton from "@/components/organisms/Modals/ModalSkeleton";
import classes from "./AddorEditContractorModal.module.css";
import Button from "@/components/atoms/Button";
import { contractorFormValues } from "@/formik/initialValues";
import { ContractorSchema } from "@/formik/schema";
import { categoryOptions } from "@/developmentContext/dropDownOption";

export default function AddorEditContractorModal({ show, setShow, loading }) {
  const contractorForm = useFormik({
    initialValues: contractorFormValues,
    validationSchema: ContractorSchema,
    onSubmit: (values) => {
      console.log("Contractor form submitted:", values);
      // Handle form submission here
    },
  });

  return (
    <ModalSkeleton
      show={show}
      setShow={setShow}
      heading="Good Standing Confirmation"
      variant="secondary"
      showCloseIcon={true}
      modalBodyClass={classes.modalBody}
      footerData={
        <div className={classes.footer}>
          <Button
            label="Cancel"
            variant="outlined"
            onClick={() => setShow(false)}
            disabled={loading}
            className={classes.cancelButton}
          />
          <Button
            label="Create"
            variant="primary"
            onClick={() => contractorForm.handleSubmit()}
            disabled={loading}
            className={classes.createButton}
          />
        </div>
      }
    >
      <div className={classes.modalBody}>
        <div className={classes.formGroup}>
          <Input
            label="Contractor Name *"
            name="contractorName"
            placeholder="Contractor Name"
            value={contractorForm.values.contractorName}
            onChange={contractorForm.handleChange}
            onBlur={contractorForm.handleBlur}
            errorText={
              contractorForm.touched.contractorName &&
              contractorForm.errors.contractorName
            }
            disabled={loading}
          />
        </div>

        <div className={classes.formGroup}>
          <Input
            label="Contractor Email *"
            name="contractorEmail"
            placeholder="Submit email to create account"
            type="email"
            value={contractorForm.values.contractorEmail}
            onChange={contractorForm.handleChange}
            onBlur={contractorForm.handleBlur}
            errorText={
              contractorForm.touched.contractorEmail &&
              contractorForm.errors.contractorEmail
            }
            disabled={loading}
          />
        </div>

        <div className={classes.formGroup}>
          <DropDown
            label="Contractor Category"
            name="contractorCategory"
            isMulti={true}
            placeholder="Category of service he will provide"
            value={contractorForm.values.contractorCategory}
            setValue={(value) => {
              contractorForm.setFieldValue("contractorCategory", value);
            }}
            options={categoryOptions}
            errorText={
              contractorForm.touched.contractorCategory &&
              contractorForm.errors.contractorCategory
            }
            disabled={loading}
          />
        </div>
      </div>
    </ModalSkeleton>
  );
}
