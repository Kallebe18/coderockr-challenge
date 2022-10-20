import styled from "styled-components";

const SubmitButtonContainer = styled.button`
  background-color: #2d2d2d;
  border-radius: 4px;
  color: #fff;
  padding: 10px 15px;
  width: 115px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  transition: all 0.3s;
  border: none;

  :hover {
    background-color: #2d2d2daa;
  }
`;

type SubmitButtonProps = {
  type: "button" | "submit" | "reset" | undefined;
  ariaLabel: string;
};

export function SubmitButton({ type, ariaLabel }: SubmitButtonProps) {
  return (
    <SubmitButtonContainer type={type} aria-label={ariaLabel}>
      <svg
        width="15"
        height="12"
        viewBox="0 0 21 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 18L21 9L0 0V7L15 9L0 11V18Z" fill="white" />
      </svg>
      Submit
    </SubmitButtonContainer>
  );
}
