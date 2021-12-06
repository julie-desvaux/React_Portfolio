import React from "react";

import data from "../../data";

const CardEducation = ({ education, index }) => (
	<li className="text-left">
		<div className="timeline-badge absolute bg-gray-300 w-12 text-xl text-blue text-center leading-loose rounded-full py-1">
			<span className="fas fa-briefcase"></span>
		</div>
		<div className={index % 2 === 0 ? "timeline-panel-container" : "timeline-panel-container-inverted"}>
			<div className="timeline-panel text-center relative p-5 border border-gray-300 rounded-md shadow-xl bg-lightBlue text-blue educ-card">
				<div className="mb-5 ">
					<h3 className="font-bold" dangerouslySetInnerHTML={{ __html: education.title }}></h3>
					<h4 className="mt-1.5">{education.organism}</h4>
					<p className="text-gray-800">
						<i className="fas fa-user-graduate"></i> {education.date}
					</p>
				</div>
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
							className="
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
	</li>
);

function Education() {
	return (
		<section id="portfolio" className="bg-blue pt-16 px-3 text-center pb-4">
			<div className="w-full md:w-9/12 m-auto">
				<div className="white-divider w-24 h-1 bg-gray-200 mx-auto"></div>
				<h2 className="my-2 uppercase text-gray-200 text-center">Education</h2>
				<ul className="mt-16 py-7 px-2.5 relative timeline">
					{data.educations.map((education, index) => (
						<CardEducation key={index} education={education} index={index} />
					))}
				</ul>
			</div>
		</section>
	);
}

export default Education;
