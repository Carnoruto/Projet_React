import Header from "./components/Header";
import Footer from "./components/Footer";
import AppRouter from "./router/AppRouter";
import "./global.css";

export default function App() {
  return (
    <>
      <Header />
      <AppRouter />
      <Footer />
    </>
  );
}
