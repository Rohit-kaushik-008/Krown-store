const FilterBarFooter = () => {
  return (
    <div className="sticky bottom-0 left-0 border w-full px-3 py-3 bg-bg-dark rounded-xl flex justify-between items-center gap-4">

      <div className="w-full rounded-sm text-center">
        <h1 className="text-2xl font-bold font-special-2">143</h1>
        <p className="text-sm">Total Products</p>
      </div>
      <button className="w-full rounded-sm px-4 py-4 text-lg cursor-pointer bg-theme-dark active:bg-theme-light transition-all duration-200 ease-out flex gap-2 items-center justify-center font-semibold font-heading-1">
        <img className="invert" src="/icons/reset.svg" alt="" />
        Reset All
      </button>
    </div>
  )
}

export default FilterBarFooter
