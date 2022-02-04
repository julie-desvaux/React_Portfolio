import React, { useRef } from "react";

import data from "../../data";

const Card = ({ project }) => {
	const imgGitHub = useRef(null);

	const changeBg = () => {
		const urlImgGH = imgGitHub.current.src;
		const imgGH = urlImgGH.split("/").slice(-2).join("/");
		if (imgGH === "images/github_black.png") {
			imgGitHub.current.src = "/images/github_white.png";
		} else {
			imgGitHub.current.src = "/images/github_black.png";
		}
	};

	return (
		<div className="bg-lightBlue max-w-sm rounded overflow-hidden shadow-lg mx-2 md:mx-5 mb-16">
			<img className="w-full" src={project.img} alt={project.title} />
			<div className="px-6 py-4">
				<div className="font-bold text-xl mb-2 text-navyBlue">{project.title}</div>
				<p
					className="text-gray-700 text-base text-left"
					dangerouslySetInnerHTML={{ __html: project.description }}
				></p>
			</div>
			<div className="px-6 pt-4 pb-2">
				{project.technos.map((techno, index) => (
					<span
						key={index}
						className={`inline-block rounded-full px-3 py-1 text-sm shadow-md font-semibold mr-2 mb-3  text-gray-700 bg-gray-300`}
					>
						#{techno.techno}
					</span>
				))}
			</div>
			<div className="px-6 pt-4 pb-2 flex justify-around">
				{project.link && (
					<a
						className="bg-navyBlue hover:bg-gray-300 text-gray-200 hover:text-navyBlue font-semibold py-2 px-4 border border-gray-400 rounded shadow"
						href={project.link}
						target="_blank"
					>
						Voir le site
					</a>
				)}
				{project.repo && (
					<a
						className=" flex justify-center items-center bg-navyBlue hover:bg-gray-300 text-gray-200 hover:text-navyBlue font-semibold py-2 px-4 border border-gray-400 rounded shadow"
						href={project.repo}
						target="_blank"
						onMouseEnter={changeBg}
						onMouseLeave={changeBg}
					>
						Voir le code
						<img ref={imgGitHub} className="pl-2" src="/images/github_white.png" />
					</a>
				)}
			</div>
		</div>
	);
};

function Portfolio() {
	return (
		<section id="portfolio" className="bg-blue pt-16 h-full">
			<div className="w-full md:w-9/12 m-auto">
				<div className="white-divider w-24 h-1 bg-gray-200 mx-auto"></div>
				<h2 className="my-2 uppercase text-gray-200 text-center">Portfolio</h2>
				<div className="mt-16">
					<div className="flex flex-col md:flex-row justify-center items-center md:items-start flex-wrap">
						{data.projects.map((project, index) => (
							<Card key={index} project={project} />
						))}
					</div>
				</div>
			</div>
		</section>
	);
}

export default Portfolio;
