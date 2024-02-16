import Inspiration_APP from "../../assets/inspiration-logo-transparent.png";

const Footer = () => {
	return (
		// <!-- Component: Five Columns Footer with Logo -->
		<footer className="text-start text-slate-500">
			{/* <!-- Main footer --> */}
			<div className="pt-16 pb-12 text-sm border-t border-slate-200 bg-slate-100 font-poppins ">
				<div className="sm:container px-3 mx-auto">
					<div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
						<div
							className="col-span-4 md:col-span-8 lg:col-span-4"
							aria-labelledby="footer-header">
							<a
								id="WindUI-5-logo"
								aria-label="WindUI logo"
								aria-current="page"
								className="flex items-center gap-2 mb-3 text-base font-medium leading-6 whitespace-nowrap focus:outline-none text-black hover:text-[#8800ff]"
								href="#">
								<img
									src={Inspiration_APP}
									className="h-12 sm:h-16 transform hover:rotate-180 transition duration-200 ease-in-out rounded-full"
									alt=""
								/>
								Inspiration APP
							</a>
							<p className="text-left">
								Get Inspired by Mentors through the Inspiration App with
								Curiosity to Inspire the World
							</p>
						</div>
						<nav
							className="col-span-2 md:col-span-4 lg:col-span-2 bg-transparent"
							aria-labelledby="footer-product-5-logo">
							<h3
								className="mb-6 text-base font-medium text-black"
								id="footer-product-5-logo">
								Product
							</h3>
							<ul>
								<li className="mb-2 leading-6">
									<a
										href="#"
										className="transition-colors duration-300 hover:text-[#8800ff] focus:text-[#6F00FF]">
										{" "}
										Features{" "}
									</a>
								</li>
								<li className="mb-2 leading-6">
									<a
										href="#"
										className="transition-colors duration-300 hover:text-[#8800ff] focus:text-[#6F00FF]">
										{" "}
										Customers{" "}
									</a>
								</li>
								<li className="mb-2 leading-6">
									<a
										href="#"
										className="transition-colors duration-300 hover:text-[#8800ff] focus:text-[#6F00FF]">
										{" "}
										Why us?{" "}
									</a>
								</li>
								<li className="mb-2 leading-6">
									<a
										href="#"
										className="transition-colors duration-300 hover:text-[#8800ff] focus:text-[#6F00FF]">
										{" "}
										Pricing{" "}
									</a>
								</li>
							</ul>
						</nav>
						<nav
							className="col-span-2 md:col-span-4 lg:col-span-2"
							aria-labelledby="footer-docs-5-logo">
							<h3
								className="mb-6 text-base font-medium text-black"
								id="footer-docs-5-logo">
								Docs & Help
							</h3>
							<ul>
								<li className="mb-2 leading-6">
									<a
										href="#"
										className="transition-colors duration-300 hover:text-[#8800ff] focus:text-[#6F00FF]">
										{" "}
										Documentation
									</a>
								</li>
								<li className="mb-2 leading-6">
									<a
										href="#"
										className="transition-colors duration-300 hover:text-[#8800ff] focus:text-[#6F00FF]">
										{" "}
										Training{" "}
									</a>
								</li>
								<li className="mb-2 leading-6">
									<a
										href="#"
										className="transition-colors duration-300 hover:text-[#8800ff] focus:text-[#6F00FF]">
										{" "}
										System status{" "}
									</a>
								</li>
								<li className="mb-2 leading-6">
									<a
										href="#"
										className="transition-colors duration-300 hover:text-[#8800ff] focus:text-[#6F00FF]">
										{" "}
										FAQ's{" "}
									</a>
								</li>
								<li className="mb-2 leading-6">
									<a
										href="#"
										className="transition-colors duration-300 hover:text-[#8800ff] focus:text-[#6F00FF]">
										{" "}
										Help Center{" "}
									</a>
								</li>
							</ul>
						</nav>
						<nav
							className="col-span-2 md:col-span-4 lg:col-span-2"
							aria-labelledby="footer-about-5-logo">
							<h3
								className="mb-6 text-base font-medium text-black"
								id="footer-about-5-logo">
								About us
							</h3>
							<ul>
								<li className="mb-2 leading-6">
									<a
										href="#"
										className="transition-colors duration-300 hover:text-[#8800ff] focus:text-[#6F00FF]">
										{" "}
										About us{" "}
									</a>
								</li>
								<li className="mb-2 leading-6">
									<a
										href="#"
										className="transition-colors duration-300 hover:text-[#8800ff] focus:text-[#6F00FF]">
										{" "}
										Careers{" "}
									</a>
								</li>
								<li className="mb-2 leading-6">
									<a
										href="#"
										className="transition-colors duration-300 hover:text-[#8800ff] focus:text-[#6F00FF]">
										{" "}
										Leadership{" "}
									</a>
								</li>
								<li className="mb-2 leading-6">
									<a
										href="#"
										className="transition-colors duration-300 hover:text-[#8800ff] focus:text-[#6F00FF]">
										{" "}
										Blog
									</a>
								</li>
								<li className="mb-2 leading-6">
									<a
										href="#"
										className="transition-colors duration-300 hover:text-[#8800ff] focus:text-[#6F00FF]">
										{" "}
										Events{" "}
									</a>
								</li>
							</ul>
						</nav>
						<nav
							className="col-span-2 md:col-span-4 lg:col-span-2"
							aria-labelledby="footer-get-in-touch-5-logo">
							<h3
								className="mb-6 text-base font-medium text-black"
								id="footer-get-in-touch-5-logo">
								Get in touch
							</h3>
							<ul>
								<li className="mb-2 leading-6">
									<a
										href="#"
										className="transition-colors duration-300 hover:text-[#8800ff] focus:text-[#6F00FF]">
										{" "}
										Contact{" "}
									</a>
								</li>
								<li className="mb-2 leading-6">
									<a
										href="#"
										className="transition-colors duration-300 hover:text-[#8800ff] focus:text-[#6F00FF]">
										{" "}
										Support{" "}
									</a>
								</li>
								<li className="mb-2 leading-6">
									<a
										href="#"
										className="transition-colors duration-300 hover:text-[#8800ff] focus:text-[#6F00FF]">
										{" "}
										Partners{" "}
									</a>
								</li>
								<li className="mb-2 leading-6">
									<a
										href="#"
										className="transition-colors duration-300 hover:text-[#8800ff] focus:text-[#6F00FF]">
										{" "}
										Join research{" "}
									</a>
								</li>
							</ul>
						</nav>
					</div>
				</div>
			</div>
		</footer>
		// <!-- End Five Columns Footer with Logo -->
	);
};

export default Footer;
