import { useNavigate } from "react-router-dom";
import { usePost } from "../../hooks/usePost";
import { ContactForm } from "../ContactForm";
import { useState } from "react";

import {
  HeaderContainer,
  HeaderOption,
  HeaderOptionsContainer,
  HeaderTitle,
} from "./styles";

export function Header() {
  const { setSelectedPost } = usePost();
  const [contactOpen, setContactOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <HeaderContainer>
      <HeaderTitle>Rockr Blog</HeaderTitle>
      <HeaderOptionsContainer>
        <HeaderOption
          href="#"
          onClick={(e) => {
            e.preventDefault();
            setSelectedPost(null);
            navigate("/");
          }}
        >
          Posts
        </HeaderOption>
        <HeaderOption
          href="#"
          onClick={(e) => {
            e.preventDefault();
            setContactOpen(true);
          }}
        >
          Contact
        </HeaderOption>
      </HeaderOptionsContainer>
      <ContactForm
        open={contactOpen}
        onClose={() => {
          setContactOpen(false);
        }}
      />
    </HeaderContainer>
  );
}
