import styled from "styled-components";

export const ContactFormContainer = styled.div`
  position: absolute;
  z-index: 99999;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000a;
  height: 100%;
  width: 100%;
  position: fixed;
`;

export const ContactFormModal = styled.div`
  position: relative;
  background-color: #fff;
  height: 650px;
  padding: 30px;
  max-width: 500px;
  width: 100%;
  margin: 0 20px;
`;

export const ContactTitle = styled.h2`
  color: #f1a10a;
  text-align: center;
  font-weight: bold;
`;

export const CustomForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-top: 20px;
  width: 100%;
`;

export const LabelContainer = styled.div`
  max-width: 300px;
  width: 100%;
`;

export const CustomInput = styled.input`
  height: 40px;
  padding: 8px 16px;
  width: 100%;
  border-radius: 4px;
  border: 1px solid #2d2d2d;
`;

export const CustomTextArea = styled.textarea`
  padding: 8px 16px;
  border-radius: 4px;
  border: 1px solid #2d2d2d;
  width: 100%;
  resize: none;
  height: 120px !important;
`;

export const CustomInputLabel = styled.p`
  color: #000;
  font-size: 1rem;
  margin-bottom: 6px;
`;
