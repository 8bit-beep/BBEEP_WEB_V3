const TableContainer = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="w-full h-full max-w-7xl bg-white rounded-xl overflow-hidden flex flex-col">
            <div className="w-full items-center">{children}</div>
        </div>
    );
};

export default TableContainer;
