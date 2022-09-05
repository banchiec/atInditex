import './styles/loader.css' 

const Loader = () => {
	return(
		<div className="progress_bar animate-loader">
			<div className="progress_bar__content">
				<div className="progress_bar__wrapper">
					<div className="progress_bar__viewer">
						<div className="progress_bar__shimmer"></div>
					</div>
				</div>
				<div className="progress_bar__state" data-start="Sending Request" data-middle="Validating" data-end="Almost there!"></div>
			</div>
		</div>
	)
}
export default Loader