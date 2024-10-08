const Hero = () => {
	return (
		<section>
			<div className="mx-auto max-w-screen-xl my-auto px-4 h-[90vh] flex justify-center items-center">
				<div className="mx-auto max-w-3xl text-center">
					<h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
						Upload, Save & Share your files easily on one place.
					</h1>
					<p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
						Drag & drop your file directly onto our storage, and share it with
						your friends by protecting it with a password before sending it via
						email.
					</p>
					<div className="mt-8 flex flex-wrap justify-center gap-4">
						<a
							className="block w-full rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-indigo-700 hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
							href="/login">
							Get Started
						</a>
						<a
							className="block w-full rounded border border-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-indigo-600 focus:outline-none focus:ring active:bg-indigo-500 sm:w-auto"
							href="/about">
							Learn More
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
