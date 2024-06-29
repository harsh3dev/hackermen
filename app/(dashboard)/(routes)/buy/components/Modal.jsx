
import React from "react";

const Modal = ({ isOpen, onClose, children }) => {
	if (!isOpen) return null;

	return (
		<div onClick={onClose} className=" fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] z-50 bg-green-800 p-5 rounded-xl " >
			<div className=" w-full h-full flex flex-col items-center justify-between gap-4 bg-red-500 rounded-lg " >
				{children}
			</div>
		</div>
	);
};

export default Modal;
