import React from "react";

// need to change this

const Section3 = () => {
	return (
		<div className="sm:container px-3 mx-auto bg-[#FEFEFA] ">
			<h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">
				Join Us In Just 3 Phases
			</h1>
			<div className="flex  flex-col mt-[40px] md:mt-[64px] md:flex-row  no-scrollbar justify-center md:justify-start ">
				<p className="md:p-[32px] flex flex-col justify-between gap-4 p-5 w-full border-[#C6C6C8] border-[1px] rounded-[18px] md:mr-4 mb-4 md:mb-0 font-poppins">
					<div className="space-y-4">
						<p className="w-fit text-[14px] border-[2px] border-[#8800ff] rounded-lg px-4 py-1 text-black font-poppins font-medium">
							Phase 1
						</p>
						<p className="text-lg font-medium text-left">
							Shortlist a mentor for yourself according to your preferences.
						</p>
					</div>
					<div className="flex items-center justify-end border-b h-fit border-white group-hover:border-black duration-200">
						<a>
							<p className="text-base font-medium underline hover:text-[#8800ff]">
								Shortlist Mentor
							</p>
						</a>
						<svg
							width="32"
							height="32"
							fill="none"
							className="scale-[0.6] rotate-[135deg]">
							<path d="M27 16H5M14 7l-9 9 9 9" stroke="currentColor"></path>
						</svg>
					</div>
				</p>
				<p className="md:p-[32px] flex flex-col justify-between gap-4 p-5 w-full border-[#C6C6C8] border-[1px] rounded-[18px] md:mr-4 mb-4 md:mb-0 relative font-poppins">
					<svg
						width="100"
						height="100"
						fill="none"
						className="scale-[.8] absolute left-[-17%] top-[14%] md:block hidden">
						<path
							d="M88.086 48.865c-.129-.478-.605-.83-1.214-.725a1 1 0 0 0-.725 1.214c.557 2.208.803 3.081 1.292 4.41-9.452-5.623-26.598-11.447-44.178-11.447-10.596 0-21.344 2.114-30.665 7.662a1.001 1.001 0 0 0 1.023 1.72c24.07-14.33 58.05-5.013 72.771 3.77-1.744.166-4.519.804-4.519.804a1 1 0 0 0 .428 1.954s3.526-.772 7.226-.97c.32-.017.657-.16.83-.43.175-.27.15-.596.048-.931 0 0-1.627-4.484-2.317-7.031Z"
							fill="#8800ff"></path>
					</svg>
					<div className="space-y-4">
						<p className="w-fit text-[14px] border-[2px] border-[#8800ff] rounded-lg px-4 py-1 text-black font-poppins font-medium">
							Phase 2
						</p>
						<p className="text-lg font-medium text-left">
							Book a free trial session to see how the mentor can help you.
						</p>
					</div>
					<div className="flex items-center justify-end border-b h-fit border-white group-hover:border-black duration-200">
						<a>
							<p className="text-base font-medium underline hover:text-[#8800ff]">
								Book Free Trial
							</p>
						</a>
						<svg
							width="32"
							height="32"
							fill="none"
							className="scale-[0.6] rotate-[135deg]">
							<path d="M27 16H5M14 7l-9 9 9 9" stroke="currentColor"></path>
						</svg>
					</div>
				</p>
				<p className="md:p-[32px] flex flex-col justify-between gap-4 p-5 w-full border-[#C6C6C8] border-[1px] rounded-[18px] md:mr-4 mb-4 md:mb-0 relative font-poppins">
					<svg
						width="100"
						height="100"
						fill="none"
						className="scale-[.8] absolute left-[-17%] top-[14%] md:block hidden">
						<path
							d="M88.086 48.865c-.129-.478-.605-.83-1.214-.725a1 1 0 0 0-.725 1.214c.557 2.208.803 3.081 1.292 4.41-9.452-5.623-26.598-11.447-44.178-11.447-10.596 0-21.344 2.114-30.665 7.662a1.001 1.001 0 0 0 1.023 1.72c24.07-14.33 58.05-5.013 72.771 3.77-1.744.166-4.519.804-4.519.804a1 1 0 0 0 .428 1.954s3.526-.772 7.226-.97c.32-.017.657-.16.83-.43.175-.27.15-.596.048-.931 0 0-1.627-4.484-2.317-7.031Z"
							fill="#8800ff"></path>
					</svg>
					<div className="space-y-4">
						<p className="w-fit text-[14px] border-[2px] border-[#8800ff] rounded-lg px-4 py-1 text-black font-poppins font-medium">
							Phase 3
						</p>
						<p className="text-lg font-medium text-left">
							Start preparing via 1 on 1 long term mentorship with your mentor
						</p>
					</div>
					<div className="flex items-center justify-end border-b h-fit border-white group-hover:border-black duration-200">
						<a>
							<p className="text-base font-medium underline hover:text-[#8800ff]">
								Start Preparing
							</p>
						</a>
						<svg
							width="32"
							height="32"
							fill="none"
							className="scale-[0.6] rotate-[135deg]">
							<path d="M27 16H5M14 7l-9 9 9 9" stroke="currentColor"></path>
						</svg>
					</div>
				</p>
			</div>
		</div>
	);
};
export default Section3;
