import React from "react";

import data from "../../data";

const Card = ({ education }) => (
	<div className="bg-lightBlue max-w-sm rounded overflow-hidden shadow-lg mx-2 md:mx-12 mb-16 text-center">
		<div className="px-6 py-5">
			<div className="flex justify-center items-center mb-3">
				<i class="fas fa-user-graduate mr-2"></i>
				<h5>{education.date}</h5>
			</div>
			<div
				className="font-bold text-xl mb-2 text-gray-700"
				dangerouslySetInnerHTML={{ __html: education.title }}
			></div>
			<div className="font-bold text-xl mb-2 text-navyBlue">{education.organism}</div>
			<div className="blue-divider w-24 h-1 bg-blue-200 mx-auto"></div>

			<div className="px-6 pt-4 pb-2">
				{education.technos.map((techno) => (
					<span
						className={`inline-block rounded-full px-3 py-1 text-sm shadow-md font-semibold mr-2 mb-3  text-gray-700 bg-gray-200`}
					>
						#{techno.techno}
					</span>
				))}
			</div>
			<div className="px-6 pt-4 pb-2">
				{education.attestation && (
					<button
						class="
					  text-navyBlue
					  bg-transparent
					  border border-solid border-navyBlue
					  hover:bg-navyBlue hover:text-white
					  active:bg-navyBlue
					  font-bold
					  uppercase
					  text-sm
					  px-6
					  py-3
					  rounded
					  outline-none
					  focus:outline-none
					  mr-1
					  mb-1
					  ease-linear
					  transition-all
					  duration-150
					"
						type="button"
					>
						Voir l'attestation
					</button>
				)}
			</div>
		</div>
	</div>
);

function Education() {
	return (
		<section id="portfolio" className="bg-blue pt-16 h-full">
			<div className="white-divider w-24 h-1 bg-gray-200 mx-auto"></div>
			<h2 className="my-2 uppercase text-gray-200 text-center">Education</h2>
			<div className="mt-16">
				<div className="flex flex-col md:flex-row justify-center items-center md:items-start flex-wrap">
					{data.educations.map((education) => (
						<Card education={education} />
					))}
				</div>
			</div>
		</section>
	);
}

export default Education;
