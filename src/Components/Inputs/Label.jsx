
  export const Label= ({id, children}) => {
    if (!id) {
      return (
        <div className="block text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
          {children}
        </div>
      );
    }
    return (
      <label
        htmlFor={id}
        className="block text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
        {children}
      </label>
    );
  };
  