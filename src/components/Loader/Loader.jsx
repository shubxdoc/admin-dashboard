const Loader = () => {
  return (
    <div className="flex items-center justify-center h-[90vh] w-full">
      <div
        className="animate-spin inline-block size-10 border-[5px] border-current border-t-transparent text-stone-400 rounded-full"
        role="status"
        aria-label="loading"
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default Loader;
