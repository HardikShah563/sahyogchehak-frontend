import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactUs from "../components/ContactUs";

export default function Home() {
    return (
        <>
            <Navbar />
            <div>
                <h1>Home Page</h1>
                <ContactUs />
            </div>
            <Footer />
        </>
    );
}