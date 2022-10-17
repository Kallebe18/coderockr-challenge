import { Header } from "../../components/Header";

type DefaultLayoutProps = {
  children: JSX.Element;
};

export function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
