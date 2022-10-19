import styled from "styled-components";
import { Header } from "../../components/Header";
import { headerHeight } from "../../components/Header/styles";

type DefaultLayoutProps = {
  children: JSX.Element | any[];
};

const ContentContainer = styled.div`
  padding-top: ${headerHeight}px;
  position: relative;
`;

export function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <>
      <Header />
      <ContentContainer>{children}</ContentContainer>
    </>
  );
}
