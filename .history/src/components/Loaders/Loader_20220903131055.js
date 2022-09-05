import './styles/loader.css' 

const Loader = () => {
	return(
		<div class="progress_bar animate-loader">
			<div class="progress_bar__content">
				<div class="progress_bar__wrapper">
					<div class="progress_bar__viewer">
						<div class="progress_bar__shimmer"></div>
					</div>
				</div>
				<div class="progress_bar__state" data-start="Sending Request" data-middle="Validating" data-end="Almost there!"></div>
			</div>
		</div>
	)
}
export default Loader