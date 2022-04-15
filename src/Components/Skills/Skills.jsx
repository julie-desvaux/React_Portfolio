import React from "react";

function Skills() {
	return (
		<section id="skills" className="pt-16 text-center section-to-print">
			<div className="w-full md:w-9/12 m-auto">
				<div className="blue-divider w-24 h-1 bg-blue mx-auto"></div>
				<h2 className="my-2 uppercase text-blue">Compétences</h2>
				<div className="mt-16">
					<div className="flex flex-col md:flex-row justify-between items-center">
						<div className="mb-10 md:mb-16 md:mx-10 bg-html5">
							<span className="sr-only">Logo HTML5</span>
						</div>
						<div className="mb-10 md:mb-16 md:mx-10 bg-css">
							<span className="sr-only">Logo CSS3</span>
						</div>
						<div className="mb-10 md:mb-16 md:mx-10 bg-js">
							<span className="sr-only">Logo JavaScript</span>
						</div>
					</div>
					<div className="flex flex-col md:flex-row justify-between items-center">
						<div className="mb-10 md:mb-16 md:mx-10 bg-bootstrap">
							<span className="sr-only">Logo Bootstrap</span>
						</div>
						<div className="mb-10 md:mb-16 md:mx-10 bg-tailwind">
							<span className="sr-only">Logo Tailwind CSS</span>
						</div>
						<div className="mb-10 md:mb-16 md:mx-10 bg-sass">
							<span className="sr-only">Logo Sass</span>
						</div>
					</div>
					<div className="flex flex-col md:flex-row justify-between items-center">
						<div className="mb-10 md:mb-16 md:mx-10 bg-react">
							<span className="sr-only">Logo React</span>
						</div>
						<div className="mb-10 md:mb-16 md:mx-10 bg-redux">
							<span className="sr-only">Logo Redux</span>
						</div>
						<div className="mb-10 md:mb-16 md:mx-10 bg-next">
							<span className="sr-only">Logo Next Js</span>
						</div>
					</div>
					<div className="flex flex-col md:flex-row justify-between items-center">
						<div className="mb-10 md:mb-16 md:mx-10 bg-node">
							<span className="sr-only">Logo Node</span>
						</div>
						<div className="mb-10 md:mb-16 md:mx-10 bg-express">
							<span className="sr-only">Logo Express Js</span>
						</div>
						<div className="mb-10 md:mb-16 md:mx-10 bg-java">
							<div className="skills-logo">
								<span className="sr-only">Logo Java</span>
							</div>
						</div>
					</div>
					<div className="flex flex-col md:flex-row justify-between items-center">
						<div className="mb-10 md:mb-16 md:mx-10 bg-mongo">
							<span className="sr-only">Logo Mongo DB</span>
						</div>
						<div className="mb-10 md:mb-16 md:mx-10 bg-postgresql">
							<span className="sr-only">Logo PostgreSQL</span>
						</div>
						<div className="mb-10 md:mb-16 md:mx-10 bg-my_sql">
							<div className="skills-logo">
								<span className="sr-only">Logo My SQL</span>
							</div>
						</div>
					</div>
					<div className="flex flex-col md:flex-row justify-between items-center">
						<div className="mb-10 md:mb-16 md:mx-10 bg-git">
							<span className="sr-only">Logo Git</span>
						</div>
						<div className="mb-10 md:mb-16 md:mx-10 bg-gitlab">
							<span className="sr-only">Logo Gitlab</span>
						</div>
						<div className="mb-10 md:mb-16 md:mx-10 bg-github">
							<span className="sr-only">Logo Github</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Skills;
