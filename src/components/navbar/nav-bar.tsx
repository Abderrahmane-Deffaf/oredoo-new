import ButtomNavBar from "./buttom-navbar";
import TopNavBar from "./top-navbar";

export default function NavBar() {
  return (
    <section className="relative z-20">
      <nav className="wrapper py-4 flex flex-col gap-4">
        <TopNavBar />
        <ButtomNavBar />
      </nav>
    </section>
  );
}
