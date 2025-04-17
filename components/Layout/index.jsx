import { useRouter } from "next/router";
import Footer from "../Footer";
import Header from "../Header";
import OptionsMenu from "../OptionsMenu";

export default function Layout(props) {

const route = useRouter()

  return (
    <main id="bg">
      <div id="page" className="site">
        {/* <Preloader /> */}
          {
            route.pathname === '/' && <OptionsMenu/>
          }
        <Header />
        {props.children}
        <Footer />
      </div>
    </main>
  );
}
