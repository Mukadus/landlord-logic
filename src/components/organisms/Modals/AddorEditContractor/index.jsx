import DropDown from "@/components/molecules/DropDown/DropDown";
import Input from "@/components/atoms/Input/Input";
import { useFormik } from "formik";
import ModalSkeleton from "@/components/organisms/Modals/ModalSkeleton";
import classes from "./AddorEditContractorModal.module.css";
import Button from "@/components/atoms/Button";
import { contractorFormValues } from "@/formik/initialValues";
import { ContractorSchema } from "@/formik/schema";
import { categoryOptions,  statusOptions } from "@/developmentContext/dropDownOption";
import { MdOutlineEmail } from "react-icons/md";

export default function AddorEditContractorModal({ show, setShow, loading, handleSubmit }) {
  const contractorForm = useFormik({
    initialValues: contractorFormValues,
    validationSchema: ContractorSchema,
    onSubmit: (values) => {
      handleSubmit(values);
      contractorForm.resetForm();
      
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
            loading={loading}
          />
          <Button
            label="Create"
            variant="primary"
            onClick={() => contractorForm.handleSubmit()}
            disabled={loading}
            className={classes.createButton}
            loading={loading}
          />
        </div>
      }
    >
      <div className={classes.modalBody}>
        <div className={classes.formGroup}>
          <Input
            label="Contractor Name"
            name="contractorName"
            placeholder="Contractor Name"
            value={contractorForm.values.contractorName}
            setValue={(value) => contractorForm.setFieldValue("contractorName", value)}
            error={
              contractorForm.touched.contractorName &&
              contractorForm.errors.contractorName
            }
            disabled={loading}
            loading={loading}
            required={true}
          />
        </div>

        <div className={classes.formGroup}>
          <Input
            label="Contractor Email"
            name="contractorEmail"
            placeholder="Submit email to create account"
            type="email"
            value={contractorForm.values.contractorEmail}
            setValue={(value) => contractorForm.setFieldValue("contractorEmail", value)}
            error={
              contractorForm.touched.contractorEmail &&
              contractorForm.errors.contractorEmail
            }
            disabled={loading}
            loading={loading}
            rightIcon={<MdOutlineEmail size={20} />}
            required={true}
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
            error={
              contractorForm.touched.contractorCategory &&
              contractorForm.errors.contractorCategory
            }
            disabled={loading}
            loading={loading}
          />
        </div>
        <div className={classes.formGroup}>
          <DropDown
            label="Status"
            name="status"
            isMulti={false}
            placeholder="Status"
            value={
              statusOptions.find((option) => option?.value === contractorForm.values?.status) || null
            }
            setValue={(option) => {
              contractorForm.setFieldValue("status", option?.value || statusOptions[0]?.value || "");
            }}
            options={statusOptions}
            errorText={
              contractorForm.touched.status &&
              contractorForm.errors.status
            }
            disabled={loading}
            loading={loading}
          />
        </div>
      </div>
    </ModalSkeleton>
  );
}
