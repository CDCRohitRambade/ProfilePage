import { Suspense, lazy } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Loader from "./Components/common/Loader";
import { SignUpTwo } from "./Pages/SignUp-Page";

const Header = lazy(() => import("./Components/common/Header"));
const Home = lazy(() => import("./Pages/Home-Page"));
const Footer = lazy(() => import("./Components/common/Footer"));
const Mentors = lazy(() => import("./Pages/Mentors-Page"));
const Profile = lazy(() => import("./Pages/Profile-Page"));
const PrivateRoute = lazy(() => import("./Components/common/PrivateRoute"));
const Events = lazy(() => import("./Pages/Events-Page"));

import PropTypes from "prop-types";
import { SignInTwo } from "./Pages/SignIn-Page";
import ContactUs from "./Pages/ContactUs-Page";
import Section5 from "./Components/pages/Home-Page/Section5";
import EditAbout from "./Components/pages/Profile-Page/EditAbout";
import EditSection from "./Components/pages/Profile-Page/EditSection";


const CommonLayout = ({ children }) => (
	<div>
		{/* Common Navbar component */}
		<Header />

		{/* Render the child components */}
		{children}

		{/* Common Footer component */}
		<Footer />
	</div>
);

CommonLayout.propTypes = {
	children: PropTypes.node.isRequired,
};
function App() {
	return (
		<div className="App">
			<Suspense fallback={<Loader />}>
				<Routes>
					<Route
						path="/"
						element={
							<CommonLayout>
								<Home />
							</CommonLayout>
						}
					/>

					<Route path="/sign-up" element={<SignUpTwo />} />
					<Route path="/sign-in" element={<SignInTwo />} />
					<Route
						path="/find-mentors"
						element={
							<CommonLayout>
								<Mentors />
							</CommonLayout>
						}
					/>
					<Route
						path="/events"
						element={
							<CommonLayout>
								<Events />
							</CommonLayout>
						}
					/>

					<Route
						path="/contact-us"
						element={
							<CommonLayout>
								<ContactUs />
							</CommonLayout>
						}
					/>

					<Route
						path="/features"
						element={
							<CommonLayout>
								<Section5 />
							</CommonLayout>
						}
					/>
					{/* <Route element={<PrivateRoute />}>
						<Route path="/profile" element={<Profile />} />
					</Route> */}
					<Route path="/profile" element={<Profile/>}>
					<Route path="edit" element={<EditSection />} />
					</Route>
				</Routes>
			</Suspense>
		</div>
	);
}

export default App;
