const GlobalLoading = () => {
  const circleCommonClasses =
    "h-4 w-4 bg-current rounded-full bg-secondary-light";

  return (
    <div className="flex items-center justify-center min-h-screen w-full bg-transparent pb-20">
      <div className="flex">
        <div className={`${circleCommonClasses} mr-2 animate-wave`}></div>
        <div className={`${circleCommonClasses} mr-2 animate-wave200`}></div>
        <div className={`${circleCommonClasses} animate-wave400`}></div>
      </div>
    </div>
  );
};

export default GlobalLoading;
