const Dots = () => {
  return (
    <div className="flex items-center gap-4">
      <div className="w-2.5 h-2.5 rounded-full border border-white" />

      <div className="w-5 h-5 rounded-r-full border-r border-white flex items-center justify-center">
        <div className="w-2.5 h-2.5 rounded-full bg-white" />
      </div>

      <div className="w-2.5 h-2.5 rounded-full border border-white" />
    </div>
  );
};

export default Dots;
