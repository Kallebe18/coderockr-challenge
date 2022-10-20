import styled from "styled-components";

const SubmitButtonContainer = styled.button`
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  border: none;
  position: absolute;
  right: 10px;
  top: 10px;
  padding: 8px;
`;

type CloseButtonProps = {
  onClose: () => void;
  ariaLabel: string;
};

export function CloseButton({ onClose, ariaLabel }: CloseButtonProps) {
  return (
    <SubmitButtonContainer onClick={onClose} aria-label={ariaLabel}>
      <svg
        width="18"
        height="18"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z"
          fill="black"
        />
      </svg>
    </SubmitButtonContainer>
  );
}
