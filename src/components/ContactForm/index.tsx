import { useRef, useEffect } from "react";
import { CloseButton } from "./CloseButton";
import {
  ContactFormContainer,
  ContactFormModal,
  ContactTitle,
  CustomForm,
  CustomInput,
  CustomInputLabel,
  CustomTextArea,
  LabelContainer,
} from "./styles";
import { SubmitButton } from "./SubmitButton";

type ContactFormProps = {
  open: boolean;
  onClose: () => void;
};

export function ContactForm({ open, onClose }: ContactFormProps) {
  const modalRef = useRef<any>(null);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);

  useEffect(() => {
    function handleClickOutside(event: any) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [modalRef, onClose]);

  if (!open) {
    return <></>;
  }

  return (
    <ContactFormContainer>
      <ContactFormModal ref={modalRef}>
        <CloseButton onClose={onClose} ariaLabel="Close contact form" />
        <ContactTitle>Contact</ContactTitle>
        <CustomForm>
          <LabelContainer>
            <CustomInputLabel>Name</CustomInputLabel>
            <CustomInput placeholder="Fill your full name" />
          </LabelContainer>
          <LabelContainer>
            <CustomInputLabel>E-mail</CustomInputLabel>
            <CustomInput placeholder="Fill a valid e-mail" />
          </LabelContainer>
          <LabelContainer>
            <CustomInputLabel>Phone</CustomInputLabel>
            <CustomInput placeholder="Fill your phone" />
          </LabelContainer>
          <LabelContainer>
            <CustomInputLabel>Post</CustomInputLabel>
            <CustomTextArea placeholder="Hello..." rows={6} />
          </LabelContainer>
          <SubmitButton type="submit" ariaLabel="Submit contact form" />
        </CustomForm>
      </ContactFormModal>
    </ContactFormContainer>
  );
}
