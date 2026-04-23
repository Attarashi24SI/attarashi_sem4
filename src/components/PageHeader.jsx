const PageHeader = ({ title, breadcrumb, children }) => {
  return (
    <div className="flex justify-between items-center mb-6">
      
      {/* LEFT: Title + Breadcrumb */}
      <div>
        <h1 className="text-2xl font-bold">{title}</h1>

        {breadcrumb && (
          <p className="text-gray-400 text-sm">
            {Array.isArray(breadcrumb)
              ? breadcrumb.join(" / ")
              : breadcrumb}
          </p>
        )}
      </div>

      {/* RIGHT: Action (button dll) */}
      <div>
        {children}
      </div>

    </div>
  );
};

export default PageHeader;