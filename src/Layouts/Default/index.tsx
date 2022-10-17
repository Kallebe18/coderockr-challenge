import { Header } from "../../components/Header";

type DefaultLayoutProps = {
  children: JSX.Element | any[];
};

export function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
