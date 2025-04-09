import Footer from "../Footer";
import Header from "../Header";
import OptionsMenu from "../OptionsMenu";

export default function Layout(props) {
  return (
    <main id="bg">
      <div id="page" className="site">
        {/* <Preloader /> */}
        <OptionsMenu />
        <Header />
        {props.children}
        <Footer />
      </div>
    </main>
  );
}
