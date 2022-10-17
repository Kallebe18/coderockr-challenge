import { useNavigate } from "react-router-dom";

import {
  HeaderContainer,
  HeaderOption,
  HeaderOptionsContainer,
  HeaderTitle,
} from "./styles";

export function Header() {
  const navigate = useNavigate();

  return (
    <HeaderContainer>
      <HeaderTitle>Rockr Blog</HeaderTitle>
      <HeaderOptionsContainer>
        <HeaderOption
          href="#"
          onClick={(e) => {
            e.preventDefault();
            navigate("/");
          }}
        >
          Posts
        </HeaderOption>
        <HeaderOption
          href="#"
          onClick={(e) => {
            e.preventDefault();
            navigate("/contact");
          }}
        >
          Contact
        </HeaderOption>
      </HeaderOptionsContainer>
    </HeaderContainer>
  );
}
