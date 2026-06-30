const ChartsHeader = ({ category, title }) => {
  return (
    <div className="mb-10">
      <p className="text-gray-400">{category}</p>
      <p className="text-3xl font-extrabold text-slate-900 dark:text-gray-200">{title}</p>
    </div>
  );
};

export default ChartsHeader;
