function SearchBar({
  search,
  setSearch,
  genderFilter,
  setGenderFilter,
  educationFilter,
  setEducationFilter,
  placeFilter,
  setPlaceFilter,
  places,
  onClear,
}) {
  return (
    <div className="card shadow-sm mb-4">
      <div className="card-body">
        <div className="row g-3">
          {/* Search */}
          <div className="col-lg-4">
            <label className="form-label fw-bold">Search</label>

            <input
              type="text"
              className="form-control"
              placeholder="Search name, place, education..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          {/* Gender */}
          <div className="col-lg-2">
            <label className="form-label fw-bold">Gender</label>

            <select
              className="form-select"
              value={genderFilter}
              onChange={(e) => setGenderFilter(e.target.value)}
            >
              <option value="All">All</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>

          {/* Education */}
          <div className="col-lg-2">
            <label className="form-label fw-bold">Education</label>

            <select
              className="form-select"
              value={educationFilter}
              onChange={(e) => setEducationFilter(e.target.value)}
            >
              <option value="All">All</option>
              <option value="BCA">BCA</option>
              <option value="MCA">MCA</option>
              <option value="B.Tech">B.Tech</option>
              <option value="BBA">BBA</option>
              <option value="MBA">MBA</option>
            </select>
          </div>

          {/* Place */}
          <div className="col-lg-2">
            <label className="form-label fw-bold">Place</label>

            <select
              className="form-select"
              value={placeFilter}
              onChange={(e) => setPlaceFilter(e.target.value)}
            >
              <option value="All">All</option>

              {places.map((place) => (
                <option key={place} value={place}>
                  {place}
                </option>
              ))}
            </select>
          </div>

          {/* Clear */}
          <div className="col-lg-2 d-flex align-items-end">
            <button className="btn btn-outline-danger w-100" onClick={onClear}>
              Clear Filters
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
