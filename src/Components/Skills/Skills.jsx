import React from "react";

function Skills() {
	return (
		<section id="skills" className="pt-16 text-center section-to-print">
			<div className="w-full md:w-9/12 m-auto">
				<div className="blue-divider w-24 h-1 bg-blue mx-auto"></div>
				<h2 className="my-2 uppercase text-blue">Compétences</h2>
				<div className="mt-16">
					<div className="flex flex-col md:flex-row justify-between items-center">
						<div className="mb-10 md:mb-16 md:mx-10 bg-html5" loading="lazy">
							<span className="sr-only">Logo HTML5</span>
						</div>
						<div className="mb-10 md:mb-16 md:mx-10 bg-css" loading="lazy">
							<span className="sr-only">Logo CSS3</span>
						</div>
						<div className="mb-10 md:mb-16 md:mx-10 bg-js" loading="lazy">
							<span className="sr-only">Logo JavaScript</span>
						</div>
					</div>
					<div className="flex flex-col md:flex-row justify-between items-center">
						<div className="mb-10 md:mb-16 md:mx-10 bg-bootstrap" loading="lazy">
							<span className="sr-only">Logo Bootstrap</span>
						</div>
						<div className="mb-10 md:mb-16 md:mx-10 bg-tailwind" loading="lazy">
							<span className="sr-only">Logo Tailwind CSS</span>
						</div>
						<div className="mb-10 md:mb-16 md:mx-10 bg-sass" loading="lazy">
							<span className="sr-only">Logo Sass</span>
						</div>
					</div>
					<div className="flex flex-col md:flex-row justify-between items-center">
						<div className="mb-10 md:mb-16 md:mx-10 bg-react" loading="lazy">
							<span className="sr-only">Logo React</span>
						</div>
						<div className="mb-10 md:mb-16 md:mx-10 bg-redux" loading="lazy">
							<span className="sr-only">Logo Redux</span>
						</div>
						<div className="mb-10 md:mb-16 md:mx-10 bg-next" loading="lazy">
							<span className="sr-only">Logo Next Js</span>
						</div>
					</div>
					<div className="flex flex-col md:flex-row justify-between items-center">
						<div className="mb-10 md:mb-16 md:mx-10 bg-node" loading="lazy">
							<span className="sr-only">Logo Node</span>
						</div>
						<div className="mb-10 md:mb-16 md:mx-10 bg-express" loading="lazy">
							<span className="sr-only">Logo Express Js</span>
						</div>
						<div className="mb-10 md:mb-16 md:mx-10 bg-java" loading="lazy">
							<span className="sr-only">Logo Java</span>
						</div>
					</div>
					<div className="flex flex-col md:flex-row justify-between items-center">
						<div className="mb-10 md:mb-16 md:mx-10 bg-mongo" loading="lazy">
							<span className="sr-only">Logo Mongo DB</span>
						</div>
						<div className="mb-10 md:mb-16 md:mx-10 bg-postgresql" loading="lazy">
							<span className="sr-only">Logo PostgreSQL</span>
						</div>
						<div className="mb-10 md:mb-16 md:mx-10 bg-my_sql" loading="lazy">
							<span className="sr-only">Logo My SQL</span>
						</div>
					</div>
					<div className="flex flex-col md:flex-row justify-between items-center">
						<div className="mb-10 md:mb-16 md:mx-10 bg-git" loading="lazy">
							<span className="sr-only">Logo Git</span>
						</div>
						<div className="mb-10 md:mb-16 md:mx-10 bg-gitlab" loading="lazy">
							<span className="sr-only">Logo Gitlab</span>
						</div>
						<div className="mb-10 md:mb-16 md:mx-10 bg-github" loading="lazy">
							<span className="sr-only">Logo Github</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Skills;
