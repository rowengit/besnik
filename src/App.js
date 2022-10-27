import { Header } from "./components/header";
import { Customer } from "./components/customer";
import { Guide } from "./components/guide";
import { Featured } from "./components/featured";
import { Statistics } from "./components/statistics";
import { Bottom } from "./components/bottom";
import { Footer } from "./components/footer";

function App() {
	return (
		<>
			<Header />
			<Customer />
			<Guide />
			<Featured />
			<Statistics />
			<Bottom />
			<Footer />
		</>
	);
}

export default App;
