const FilterSection = () => {
    return (
        <div className="mt-8 md:mt-12 mx-auto container">
        <div >
            <h1 className="font-bold text-4xl text-gray-800 pb-1.5">Find your favorite one</h1>
            <p className="text-gray-600">Top most perfect and mind-blowing suspense thriller movies is here.</p>
        </div>
       <div className="flex justify-between mt-10">
         {/* search  */}
            <div>
                     <label className="input">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <circle cx="11" cy="11" r="8"></circle>
      <path d="m21 21-4.3-4.3"></path>
    </g>
  </svg>
  <input type="search" required placeholder="Search" />
</label>
            </div>
            {/* sort  */}
            <div>
                <div className="dropdown">
  <div tabIndex={0} role="button" className="btn m-1">Movie sorting</div>
  <ul tabIndex={-1} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li><a>Top IMDB</a></li>
    <li><a>Lower IMDB</a></li>
  </ul>
</div>
            </div>
        {/* tab */}
        <div className="space-x-2">
            <button className="btn hover:bg-gray-200 hover:text-black rounded-md text-white shadow-md  btn-neutral">All</button>
            <button className="btn hover:bg-gray-200 hover:text-black rounded-md text-white shadow-md btn-neutral"> Suspense</button>
            <button className="btn hover:bg-gray-200 hover:text-black rounded-md text-white shadow-md btn-neutral">Mestery</button>
            <button className="btn hover:bg-gray-200 hover:text-black rounded-md text-white shadow-md btn-neutral">Phucological</button>
        </div>
       </div>
        </div>
    );
};

export default FilterSection;