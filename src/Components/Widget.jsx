const Widget = ({ title, description, right, children }) => {
  return (
    <div className="w-full p-10 mb-4 rounded-lg  bg-gray-400 border-gray-400">
      {(title || description || right) && (
        <div className="flex flex-row items-center justify-between mb-6">
          <div className="flex flex-col">
            <div className="text-sm font-light text-gray-500">{title}</div>

            <div className="text-lg font-bold">{description}</div>
          </div>

          {right}
        </div>
      )}

      {children}
    </div>
  );
};

export default Widget;
