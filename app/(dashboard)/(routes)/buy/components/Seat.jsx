
const Seat = ({ i, step, columnStart, maxColumns, rowStart, maxRows, seatsTaken }) => {
    return (
        <div
            className={`${seatsTaken.find(seat => Number(seat) == i + step) ? "flex justify-center items-center bg-[#22406db3] w-[35px] h-[35px] border rounded-full text-xs cursor-pointer transition-all ease-linear " :  "flex justify-center items-center bg-[#1e90ff] w-[35px] h-[35px] border rounded-full text-xs cursor-pointer transition-all ease-linear "} z-50 `}
            style={{
                gridColumn: `${((i % maxColumns) + 1) + columnStart}`,
                gridRow: `${Math.ceil(((i + 1) / maxRows)) + rowStart}`
            }}
        >
            {i + step}
        </div>
    );
}

export default Seat;