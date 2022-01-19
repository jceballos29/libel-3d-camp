import "./App.css";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import GroupCounseling from "./components/ GroupCounseling";
import Results from "./components/Results";
import Trailer from "./components/Trailer";
import PaymentMethod from "./components/PaymentMethod";
import Training from "./components/Training";
import Itinerary from "./components/Itinerary";
import DynamicAwards from "./components/DynamicAwards";
import Categories from "./components/Categories";
import Awards from "./components/Awards";
import TrainingsToDo from "./components/TrainingsToDo";
import Header from "./components/Header";

function App() {
    return (
        <div className="App">
            <Navbar />
            <Header />
            <TrainingsToDo />
            <Trailer />
            <Categories />
            <Awards />
            <DynamicAwards />
            <Itinerary />
            <Training />
            <PaymentMethod />
            <Results />
            <GroupCounseling />
            <FAQ />
            <Footer />
        </div>
    );
}

export default App;
