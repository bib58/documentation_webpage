function ContentArea({ path, topics }) {
	if (path.length === 0) return <div className="select-prompt">Select a topic</div>;

	let current = null;
	let children = topics;

	for (let title of path) {
		current = children.find((t) => t.title === title);
		if (!current) break;
		children = current.subtopics || [];
	}

	return (
		<div className="content-area">
		<h1>{current?.title || "Not Found"}</h1>
		<p>{current?.content || "No content available."}</p>
		</div>
	);
}

export default ContentArea;
