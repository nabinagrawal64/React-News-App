import React from "react";

function NewsItem(props) {
	const { sourceName, title, desc, imageURL, newsUrl } = props;

	return (
		<div className="card my-3">
			<img
				src={imageURL}
				className="card-img-top"
				alt="news"
				style={{ height: "200px", objectFit: "cover" }}
			/>
			<div className="card-body">
				<h5 className="card-title">{title}</h5>
				<p className="card-text">{desc}</p>
				<p className="card-text">
					<small className="text-muted">
						Source: {sourceName || "Unknown"}
					</small>
				</p>
				<a
					href={newsUrl}
					target="_blank"
					rel="noopener noreferrer"
					className="btn btn-sm btn-primary"
				>
					Read More
				</a>
			</div>
		</div>
	);
}

export default NewsItem;
