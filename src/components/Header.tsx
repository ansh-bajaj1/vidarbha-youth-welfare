const Header = () => {
  return (
    <header className="bg-white py-4 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex items-center">
        <div className="flex-shrink-0 mr-6">
          <img
            src="/lovable-uploads/3c1915c9-a272-42af-8518-60c1ce1003e3.png"
            alt="Vidarbha Youth Welfare Society Logo"
            className="h-20 w-auto"
          />
        </div>
        <div className="flex flex-col">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Vidarbha Youth Welfare society, Amravati
          </h1>
          <p className="text-sm sm:text-base text-vyws-text-gray mt-1">
            Since 1965
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;