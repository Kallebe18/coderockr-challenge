import { useRef, useEffect } from "react";
import { ContactFormContainer, ContactFormModal, ContactTitle } from "./styles";
import styled from "styled-components";

const CustomForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const CustomInput = styled.input`
  height: 40px;
  padding: 0px 15px;
  width: 100%;
  border-radius: 4px;
`;

const CustomInputLabel = styled.p`
  font-weight: bold;
  color: #000;
`;

type ContactFormProps = {
  open: boolean;
  onClose: () => void;
};

export function ContactForm({ open, onClose }: ContactFormProps) {
  const modalRef = useRef<any>(null);

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
  }, [modalRef]);

  if (!open) {
    return <></>;
  }

  return (
    <ContactFormContainer>
      <ContactFormModal ref={modalRef}>
        <ContactTitle>Contact</ContactTitle>
        <CustomForm>
          <div>
            <CustomInputLabel>Name</CustomInputLabel>
            <CustomInput placeholder="Fill your full name" />
          </div>
          <div>
            <CustomInputLabel>E-mail</CustomInputLabel>
            <CustomInput placeholder="Fill a valid e-mail" />
          </div>
          <div>
            <CustomInputLabel>Phone</CustomInputLabel>
            <CustomInput placeholder="Fill your phone" />
          </div>
        </CustomForm>
      </ContactFormModal>
    </ContactFormContainer>
  );
}
