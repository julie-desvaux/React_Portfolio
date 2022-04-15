import React from "react";

import FaBriefcase from "../../Assets/Fontawesome/briefcase.svg";

import data from "../../data";

const CardBenevolat = ({ benevolat, index }) => (
	<li className="text-left">
		<div className="timeline-badge absolute bg-gray-300 w-12 text-xl text-blue text-center leading-loose rounded-full py-1">
			<img src={FaBriefcase} alt="malette" className="w-1/2 mx-auto text-blue my-2" />
		</div>
		<div className={index % 2 === 0 ? "timeline-panel-container" : "timeline-panel-container-inverted"}>
			<div className="timeline-panel relative p-5 border border-gray-300 rounded-md shadow-xl bg-lightBlue text-blue educ-card">
				<div className="mb-5">
					<h3 className="font-medium">{benevolat.enteprise}</h3>
					<h4 className="mt-1.5 font-black">{benevolat.poste}</h4>
					<p className="text-gray-700">
						<small className="fas fa-hourglass-half"></small> {benevolat.date}
					</p>
				</div>
				<div>
					{benevolat.description.map((desc, index) => (
						<p key={index} className="mt-4">
							{desc}
						</p>
					))}
				</div>
			</div>
		</div>
	</li>
);

function Benevolat() {
	return (
		<section id="benevolat" className="pt-16 px-3 text-center pb-6 bg-blue section-to-print">
			<div className="w-full ml:w-9/12 m-auto">
				<div className="white-divider w-24 h-1 bg-white mx-auto"></div>
				<h2 className="my-2 uppercase text-white text-3xl md:text-4xl">Benevolat</h2>
				<ul className="mt-16 py-7 px-2.5 relative timeline">
					{data.benevolats.map((benevolat, index) => (
						<CardBenevolat key={index} benevolat={benevolat} index={index} />
					))}
				</ul>
			</div>
		</section>
	);
}

export default Benevolat;
