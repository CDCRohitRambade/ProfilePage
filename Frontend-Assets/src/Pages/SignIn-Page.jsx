import { ArrowRight, MailIcon } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setToken } from "../Reducers/auth";
import {
	signInFailure,
	signInStart,
	signInSuccess,
} from "../Reducers/userSlice";
import { AuthModal } from "../Components/core/AuthModal";
import OAuth from "../Components/core/OAuth";

export function SignInTwo() {
	const { isGoogleAuth, token } = useSelector((state) => state.auth);
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [formData, setFormData] = useState({});
	// const [showPassword, setShowPassword] = useState(false);
	const [isMail, setIsMail] = useState(false);
	const handleSetSignIn = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		toast.loading("Loading...");
		try {
			dispatch(signInStart());
			const res = await fetch("/api/signin", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formData),
			});
			const data = await res.json();
			if (!res.ok) {
				// If the response status is not in the 200-299 range, the request failed
				toast.dismiss();
				if (data.errors && Array.isArray(data.errors)) {
					// Display validation errors
					data.errors.forEach((err) => {
						toast.error(err.msg);
					});
				} else {
					// If there's any other kind of error
					toast.error(data.message || "Something went wrong!");
				}
				dispatch(signInFailure(data));
				return;
			} else {
				toast.dismiss();
				toast.success("Logged in successfully");
				dispatch(setToken(data.token));
				dispatch(signInSuccess(data));
				navigate("/");
			}
		} catch (error) {
			toast.dismiss();
			toast.error("Something went wrong!");
			dispatch(signInFailure(error));
		}
	};

	return (
		<section className=" overflow-x-hidden">
			{token === null && isGoogleAuth && <AuthModal />}
			<div className="grid grid-cols-1 lg:grid-cols-2 h-screen">
				<div className="hidden relative h-full md:flex items-end px-4 pb-10 pt-60 sm:px-6 sm:pb-16 md:justify-center lg:px-8 lg:pb-24">
					<div className="absolute inset-0 h-full">
						<img
							className="h-full w-full rounded-md object-cover object-top"
							src="https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c2lnbnVwfGVufDB8fDB8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
							alt=""
							loading="lazy"
						/>
					</div>
					<div className="absolute inset-0 bg-gradient-to-t from-[#1a0a2e] to-transparent"></div>
					<div className="relative">
						<div className="w-full max-w-xl xl:mx-auto xl:w-full xl:max-w-xl xl:pr-24">
							<h3 className="text-4xl font-bold text-white">
								Check In to the world of Inspiration, either to inspire or get
								inspired
							</h3>
							<ul className="mt-10 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
								<li className="flex items-center space-x-3">
									<div className="inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#8800ff]">
										<svg
											className="h-3.5 w-3.5 text-white"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 20 20"
											fill="currentColor">
											<path
												fillRule="evenodd"
												d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
												clipRule="evenodd"></path>
										</svg>
									</div>
									<span className="text-lg font-medium text-white">
										{" "}
										Learning{" "}
									</span>
								</li>
								<li className="flex items-center space-x-3">
									<div className="inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#8800ff]">
										<svg
											className="h-3.5 w-3.5 text-white"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 20 20"
											fill="currentColor">
											<path
												fillRule="evenodd"
												d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
												clipRule="evenodd"></path>
										</svg>
									</div>
									<span className="text-lg font-medium text-white">
										{" "}
										Supporting{" "}
									</span>
								</li>
								<li className="flex items-center space-x-3">
									<div className="inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#8800ff]">
										<svg
											className="h-3.5 w-3.5 text-white"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 20 20"
											fill="currentColor">
											<path
												fillRule="evenodd"
												d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
												clipRule="evenodd"></path>
										</svg>
									</div>
									<span className="text-lg font-medium text-white">
										{" "}
										Growing{" "}
									</span>
								</li>
								<li className="flex items-center space-x-3">
									<div className="inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#8800ff]">
										<svg
											className="h-3.5 w-3.5 text-white"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 20 20"
											fill="currentColor">
											<path
												fillRule="evenodd"
												d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
												clipRule="evenodd"></path>
										</svg>
									</div>
									<span className="text-lg font-medium text-white">
										{" "}
										Earning{" "}
									</span>
								</li>
							</ul>
						</div>
					</div>
				</div>
				{/* Confirm Box */}

				{!isMail ? (
					<div className=" h-full md:w-full w-[95%] mx-auto flex justify-center items-center bg-[#ffffff]">
						<div className="pop-enter my-5 max-h-fit w-[400px] bg-white  py-4 px-4 rounded-lg overflow-hidden">
							<h2 className=" text-4xl font-poppins font-bold mt-3 mb-2">
								Sign In With
							</h2>
							<p className="mt-2 text-base text-gray-600 mb-4">
								Not have an account?{" "}
								<Link
									to="/sign-up"
									title=""
									className="font-medium text-black transition-all duration-200 hover:underline">
									Sign Up
								</Link>
							</p>
							<div className=" my-3">
								<button
									type="button"
									onClick={() => setIsMail(true)}
									className="inline-flex w-full items-center justify-center rounded-md bg-[#8800ff] px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80">
									<div className=" flex w-full h-full hover:scale-90 transition-transform duration-300 justify-center items-center">
										<MailIcon
											size={18}
											className=" font-bold mr-2 inline-block"
										/>
										Continue With E-mail
									</div>
								</button>
							</div>
							<button
								type="button"
								className="relative inline-flex w-full items-center justify-center rounded-md border border-gray-400 bg-[#ffffff] px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-50 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none">
								<OAuth authText={"Sign-in with Google"} />
							</button>
						</div>
					</div>
				) : (
					<div className="pop-enter flex items-center justify-center px-4 py-5 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
						<div className=" xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
							<h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">
								Sign up
							</h2>
							<p className="mt-2 text-base text-gray-600">
								Not signed up Yet?{" "}
								<Link
									to="/sign-up"
									title=""
									className="font-medium text-black transition-all duration-200 hover:underline">
									Sign Up
								</Link>
							</p>
							<form action="#" method="POST" className="mt-8">
								<div className="space-y-3">
									<div>
										<label
											htmlFor="email"
											className="text-base font-medium text-gray-900">
											{" "}
											Email address{" "}
										</label>
										<div className="mt-2">
											<input
												className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
												type="email"
												placeholder="Email"
												name="email"
												onChange={handleSetSignIn}></input>
										</div>
									</div>
									<div>
										<div className="flex items-center justify-between">
											<label
												htmlFor="password"
												className="text-base font-medium text-gray-900">
												{" "}
												Password{" "}
											</label>
										</div>
										<div className="mt-2">
											<input
												className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
												type="password"
												placeholder="Password"
												name="password"
												onChange={(e) => {
													handleSetSignIn(e);
													//   setIsType(true);
												}}></input>
										</div>
									</div>

									<div>
										<button
											type="button"
											onClick={handleSubmit}
											className="inline-flex w-full items-center justify-center rounded-md bg-[#8800ff] px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80">
											Sign In <ArrowRight className="ml-2" size={16} />
										</button>
									</div>
								</div>
							</form>
						</div>
					</div>
				)}
			</div>
		</section>
	);
}
