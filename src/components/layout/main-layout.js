import Header from "../header/header";
import Footer from "../footer/footer";

export default function MainLayout ({children}) {
  return (
    <>
    <Header />
    { children }
    <Footer />
    </>
  )
}
