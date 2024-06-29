"use client"
import React from "react";
import Modal from "./Modal";
export default function CallModal() {
	const [open, setOpen] = React.useState(false);

	const handleClose = () => {
		setOpen(false);
	};

	const handleOpen = () => {
		setOpen(true);
	};

	return (
		<div
			style={{
				textAlign: "center",
				display: "block",
				padding: 30,
				margin: "auto",
			}}
		>
			<h1 style={{ color: "green" }}>
				GeeksforGeeks
			</h1>
			<h4>Modal Component in ReactJS?</h4>
			<button type="button" onClick={handleOpen}>
				Click Me to Open Modal
			</button>
			<Modal isOpen={open} onClose={handleClose}>
				<>
					<h1>GFG</h1>
					<h3>A computer science portal!</h3>
				</>
			</Modal>
		</div>
	);
}
