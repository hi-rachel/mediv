const GlobalLoading = () => {
  return (
    <div className="min-h-[800px] flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-16 h-16 border-4 border-secondary border-t-transparent rounded-full animate-spin" />
        <div className="text-xl font-semibold text-primary">Loading...</div>
      </div>
    </div>
  );
};

export default GlobalLoading;
