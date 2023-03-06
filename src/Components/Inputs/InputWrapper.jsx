export const InputWrapper = ({ inline = false, outerClassName, children }) => {
  if (inline) {
    return (
      <div className={outerClassName}>
        <div className="flex items-center space-x-2 justify-items-start">
          {children}
        </div>
      </div>
    );
  }
  return (
    <div className={outerClassName}>
      <div className="space-y-1">{children}</div>
    </div>
  );
};

export const InlineInputWrapper = ({ outerClassName, children }) => {
  return (
    <div className={outerClassName}>
      <div className="flex items-center space-x-2 justify-items-start">
        {children}
      </div>
    </div>
  );
};
