import React from "react";

import data from "../../data";

const CardMooc = ({ mooc }) => (
	<div className="bg-blue max-w-sm rounded overflow-hidden shadow-lg mx-2 md:mx-5 mb-16 w-1/2">
		<div className="px-6 py-4">
			<div className="mb-5 ">
				<h3 className="font-bold text-white" dangerouslySetInnerHTML={{ __html: mooc.title }}></h3>
				<h4 className="mt-1.5 text-lightBlue">{mooc.organism}</h4>
				<p className="text-gray-300">
					<i className="fas fa-user-graduate"></i> {mooc.date}
				</p>
			</div>
			<div className="mb-5">
				<p className="text-gray-300" dangerouslySetInnerHTML={{ __html: mooc.description }}></p>
			</div>
		</div>
		<div className="px-6 pt-4 pb-2">
			{mooc.technos.map((techno, index) => (
				<span
					key={index}
					className={`inline-block rounded-full px-3 py-1 text-sm shadow-md font-semibold mr-2 mb-3  text-gray-700 ${
						techno.class ? techno.class : "bg-gray-200"
					}`}
				>
					#{techno.techno}
				</span>
			))}
		</div>
		<div className="px-6 pt-4 pb-2"></div>
	</div>
);

function Mooc() {
	return (
		<section id="mooc" className="pt-16 px-3 text-center mb-4">
			<div className="w-full md:w-9/12 m-auto">
				<div className="blue-divider w-24 h-1 bg-blue mx-auto"></div>
				<h2 className="my-2 uppercase text-blue text-3xl md:text-4xl">Mooc</h2>
				<div className="mt-16">
					<div className="flex flex-col md:flex-row justify-center items-center md:items-start flex-wrap">
						{data.mooc.map((mooc, index) => (
							<CardMooc key={index} mooc={mooc} index={index} />
						))}
					</div>
				</div>
			</div>
		</section>
	);
}

export default Mooc;
