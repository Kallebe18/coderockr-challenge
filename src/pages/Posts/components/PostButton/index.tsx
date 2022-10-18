import styled from "styled-components";

const PostButtonContainer = styled.button`
  background: none;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: none;
  margin-left: auto;
  margin-top: auto;
`;

type PostButtonProps = {
  onClick: () => void;
};

export function PostButton({ onClick }: PostButtonProps) {
  return (
    <PostButtonContainer onClick={onClick}>
      <svg
        width="20"
        height="12"
        viewBox="0 0 24 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.024 0H16.039L24 8L16.039 16H10.024L17.985 8L10.024 0ZM0 16H6.015L13.976 8L6.015 0H0L7.961 8L0 16H0Z"
          fill="#032937"
        />
      </svg>
    </PostButtonContainer>
  );
}
