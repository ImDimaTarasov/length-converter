import img from "./change_circle.svg";
const ChangeBtn = ({ click }) => {
	return (
		<>
			<img
				onClick={click}
				style={{ cursor: "pointer" }}
				src={img}
				alt="change"
			/>
		</>
	);
};
export default ChangeBtn;
