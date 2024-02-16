import { useState } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Section1 from "../Components/pages/Home-Page/Section1";
import Section2 from "../Components/pages/Home-Page/Section2";
import Section3 from "../Components/pages/Home-Page/Section3";
import Section4 from "../Components/pages/Home-Page/Section4";
import Section5 from "../Components/pages/Home-Page/Section5";
import ContactUs from "./ContactUs-Page";

const Home = () => {
	const [categoriesDropDown, setCategoriesDropdown] = useState(false);

	const handleDropDown = () => {
		setCategoriesDropdown(!categoriesDropDown);
	};

	const [text] = useTypewriter({
		words: ["Technology", "Spirituality", "Health And Fitness", "Business"],
		loop: {},
	});

	return (
		<div>
			<div className="bg-[#FEFEFA] mt-3">
				<div className="flex flex-col items-center px-2 xxs:px-5 py-10 md:px-16 md:py-[2.25rem] gap-16">
					<div className="flex flex-col items-center font-poppins">
						<h1 className="lg:text-[2.8rem] md:text-3xl xxs:text-base text-[18px] mb-3">
							Enrich <span className="font-bold text-[#8800ff]">Curiosity</span>{" "}
							With
						</h1>
						<div className="md:text-[4rem] text-[2rem] font-bold tracking-tighter text-center leading-9 md:leading-[3.5rem] md:mt-5 lg:min-h-fit md:min-h-[188px] sm:min-h-fit xs:min-h-[92px] xxs:min-h-[128px] ">
							{/* <div className="mb-5">Staying consistent and motivated</div> */}
							{/* calling the typing effect */}
							<div className="mb-5 font-poppins">
								<h1>
									Mentorship For&nbsp;
									<span className="text-[#8800ff]">{text}</span>
									<Cursor />
								</h1>
							</div>
						</div>
						<p className="mt-2 text-black text-sm md:text-xl text-center">
							Get started by booking a{" "}
							<span className="md:border-[1px] md:mx-1 rounded-[48px] md:text-sm lg:hover:bg-[#8800ff] lg:hover:border-[#8800ff] lg:hover:text-white font-bold text-[#8800ff] md:px-4 py-2 tracking-[1px] md:bg-gradient-to-r from-[#2563FF33]/5 text-xs">
								{" "}
								FREE TRIAL SESSION{" "}
							</span>
							with the mentor of your choice{" "}
						</p>
					</div>
					<div className="max-w-[865px] flex flex-col items-center gap-6 w-full">
						{/* <input className = 'border-sky-300' placeholder='input' /> */}

						{/* Start - search and filer feature by NAndan G N */}
						<form className="w-full">
							<div className="flex md:flex-row flex-col-reverse relative ">
								<label
									htmlFor="search-dropdown"
									className="mb-2 text-sm font-medium text-gray-900 sr-only">
									Your Email
								</label>
								<button
									onClick={handleDropDown}
									className=" flex-shrink-0 z-10 inline-flex items-center justify-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-50 border border-[#8800ff] rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 "
									type="button">
									All categories{" "}
									<svg
										className="w-2.5 h-2.5 ms-2.5"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 10 6">
										<path
											stroke="currentColor"
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="m1 1 4 4 4-4"
										/>
									</svg>
								</button>
								<div
									className={`${
										categoriesDropDown ? "" : "hidden"
									} absolute md:top-12 top-24 w-full md:max-w-fit  bg-white divide-y divide-gray-100 rounded-lg shadow `}>
									<ul
										className="py-2 text-sm text-black "
										aria-labelledby="dropdown-button">
										<li>
											<button
												type="button"
												className="inline-flex w-full px-4 py-2 hover:bg-gray-100 ">
												Technology
											</button>
										</li>
										<li>
											<button
												type="button"
												className="inline-flex w-full px-4 py-2 hover:bg-gray-100 ">
												Spirituality
											</button>
										</li>
										<li>
											<button
												type="button"
												className="inline-flex w-full px-4 py-2 hover:bg-gray-100">
												Health And Fitness
											</button>
										</li>
										<li>
											<button
												type="button"
												className="inline-flex w-full px-4 py-2 hover:bg-gray-100 ">
												Business{" "}
											</button>
										</li>
									</ul>
								</div>
								<div className=" md:h-0 h-2"></div>
								<div className="relative w-full">
									<input
										type="search"
										id="search-dropdown"
										className="block p-2.5 w-full z-20 text-sm text-gray-900 outline-none border-1 border-[#8800ff] focus:border-1  rounded-e-lg focus:ring-0 focus:outline-none"
										placeholder="Search Here For Mentors"
										required
									/>
									<button
										type="submit"
										className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-[#8800ff] rounded-e-lg border-1 focus:ring-4 focus:outline-none focus:ring-blue-300 ">
										<svg
											className="w-4 h-4"
											aria-hidden="true"
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 20 20">
											<path
												stroke="currentColor"
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="2"
												d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
											/>
										</svg>
										<span className="sr-only">Search</span>
									</button>
								</div>
							</div>
						</form>
						{/* End - search and filer feature by Nandan G N */}

						<div className="hidden md:flex sm:justify-center w-full gap-2 md:gap-4 flex-wrap no-scrollbar">
							<span className="text-black font-poppins font-medium py-2 text-base md:inline hidden">
								Find top mentors in :{" "}
							</span>
							<a
								href="#_"
								className="relative inline-block px-4 py-2 font-medium group">
								<span className="absolute rounded-lg inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-[#8800ff] group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
								<span className="absolute rounded-lg inset-0 w-full h-full bg-white border-2 border-[#8800ff] group-hover:bg-black"></span>
								<span className="relative text-black group-hover:text-white">
									Technology
								</span>
							</a>

							<a
								href="#_"
								className="relative inline-block px-4 py-2 font-medium group">
								<span className="absolute rounded-lg inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-[#8800ff] group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
								<span className="absolute rounded-lg inset-0 w-full h-full bg-white border-2 border-[#8800ff] group-hover:bg-black"></span>
								<span className="relative text-black group-hover:text-white">
									Spirituality
								</span>
							</a>

							<a
								href="#_"
								className="relative inline-block px-4 py-2 font-medium group">
								<span className="absolute rounded-lg inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-[#8800ff] group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
								<span className="absolute rounded-lg inset-0 w-full h-full bg-white border-2 border-[#8800ff] group-hover:bg-black"></span>
								<span className="relative text-black group-hover:text-white">
									Business
								</span>
							</a>

							<a
								href="#_"
								className="relative inline-block px-4 py-2 font-medium group">
								<span className="absolute rounded-lg inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-[#8800ff] group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
								<span className="absolute rounded-lg inset-0 w-full h-full bg-white border-2 border-[#8800ff] group-hover:bg-black"></span>
								<span className="relative text-black group-hover:text-white">
									Health & Fitness
								</span>
							</a>
						</div>
					</div>
				</div>
			</div>
			<Section1 />
			<Section2 />
			<Section3 />
			<Section4 />

			{/* Please uncomment for the development */}
			<Section5 />
			{/* <Section6 />
			<Section7 /> */}

			{/* <ContactUs /> */}
		</div>
	);
};

export default Home;
