import React from "react";

import data from "../../data";

const CardXP = ({ xp, index }) => (
	<li className="text-left">
		<div className="timeline-badge absolute bg-gray-300 w-12 text-xl text-blue text-center leading-loose rounded-full py-1">
			<span className="fas fa-briefcase"></span>
		</div>
		<div className={index % 2 === 0 ? "timeline-panel-container" : "timeline-panel-container-inverted"}>
			<div className="timeline-panel relative p-5 border border-gray-300 rounded-md shadow-xl bg-blue text-white">
				<div className="mb-5">
					<h3 className="mt-1.5">{xp.enteprise}</h3>
					<h4>{xp.poste}</h4>
					<p className="text-gray-400">
						<small className="fas fa-hourglass-half"></small> {xp.date}
					</p>
				</div>
				<div>
					{xp.description && (
						<>
							<h5>Description :</h5>
							{xp.description.map((desc, index) => (
								<p key={index} dangerouslySetInnerHTML={{ __html: desc }}></p>
							))}
						</>
					)}
				</div>
				<div>
					{xp.missions && (
						<>
							<h5>Missions</h5>
							<ul>
								{xp.missions.map((mission, index) => (
									<li key={index}>{mission}</li>
								))}
							</ul>
						</>
					)}
				</div>
				<div>
					{xp.technos && (
						<>
							<h5>Environnement technologique :</h5>
							<ul>
								{xp.technos.map((techno, index) => (
									<li key={index}>{techno}</li>
								))}
							</ul>
						</>
					)}

					{xp.website && (
						<p>
							<a
								className="text-lightBlue hover:text-gray-300"
								href={xp.website}
								target="_blank"
								rel="noreferrer"
							>
								Voir le site
							</a>
						</p>
					)}
				</div>
			</div>
		</div>
	</li>
);

function Experiences() {
	return (
		<section id="xp" className="pt-16 px-3 text-center mb-4">
			<div className="w-full ml:w-9/12 m-auto">
				<div className="blue-divider w-24 h-1 bg-blue mx-auto"></div>
				<h2 className="my-2 uppercase text-blue text-3xl md:text-4xl">Expériences Professionnelles</h2>
				<ul className="mt-16 py-7 px-2.5 relative timeline">
					{data.experiences.map((xp, index) => (
						<CardXP key={index} xp={xp} index={index} />
					))}
				</ul>
			</div>
		</section>
	);
}

export default Experiences;
