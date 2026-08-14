import { useEffect, useMemo, useState } from "react";

import dummyData from "../data/dummyData";

import DataForm from "../components/DataForm";
import DataTable from "../components/DataTable";
import SearchBar from "../components/SearchBar";
import Pagination from "../components/Pagination";

const STORAGE_KEY = "data_table_records";

function Home() {
  const [data, setData] = useState(() => {
    const savedData = localStorage.getItem(STORAGE_KEY);

    if (savedData) {
      return JSON.parse(savedData);
    }

    return dummyData;
  });

  const [editingData, setEditingData] = useState(null);

  const [search, setSearch] = useState("");

  const [genderFilter, setGenderFilter] = useState("All");

  const [educationFilter, setEducationFilter] = useState("All");

  const [placeFilter, setPlaceFilter] = useState("All");

  const [sortConfig, setSortConfig] = useState({
    key: "id",
    direction: "asc",
  });

  const [currentPage, setCurrentPage] = useState(1);

  const rowsPerPage = 10;

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  }, [data]);

  const places = useMemo(() => {
    return [...new Set(data.map((item) => item.place))].sort();
  }, [data]);

  const handleSave = (formData) => {
    // UPDATE
    if (editingData) {
      setData((prevData) =>
        prevData.map((item) =>
          item.id === editingData.id
            ? {
                ...item,
                ...formData,
              }
            : item,
        ),
      );

      setEditingData(null);

      alert("Data updated successfully!");

      return;
    }

    // CREATE

    const newId =
      data.length > 0 ? Math.max(...data.map((item) => item.id)) + 1 : 1;

    const newData = {
      id: newId,
      ...formData,
    };

    setData((prevData) => [...prevData, newData]);

    setCurrentPage(1);

    alert("Data added successfully!");
  };

  const handleDelete = (id) => {
    setData((prevData) => prevData.filter((item) => item.id !== id));

    // Cancel edit if deleted item was being edited
    if (editingData?.id === id) {
      setEditingData(null);
    }
  };

  const handleEdit = (item) => {
    setEditingData(item);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleCancelEdit = () => {
    setEditingData(null);
  };

  const filteredData = useMemo(() => {
    let result = [...data];

    // SEARCH
    if (search.trim()) {
      const searchValue = search.toLowerCase().trim();

      result = result.filter((item) =>
        Object.values(item).some((value) =>
          String(value).toLowerCase().includes(searchValue),
        ),
      );
    }

    // GENDER FILTER
    if (genderFilter !== "All") {
      result = result.filter((item) => item.gender === genderFilter);
    }

    // EDUCATION FILTER
    if (educationFilter !== "All") {
      result = result.filter((item) => item.education === educationFilter);
    }

    // PLACE FILTER
    if (placeFilter !== "All") {
      result = result.filter((item) => item.place === placeFilter);
    }

    return result;
  }, [data, search, genderFilter, educationFilter, placeFilter]);

  const sortedData = useMemo(() => {
    const result = [...filteredData];

    result.sort((a, b) => {
      const key = sortConfig.key;

      let valueA = a[key];
      let valueB = b[key];

      // ID numeric sorting
      if (key === "id") {
        valueA = Number(valueA);
        valueB = Number(valueB);
      } else {
        valueA = String(valueA).toLowerCase();
        valueB = String(valueB).toLowerCase();
      }

      if (valueA < valueB) {
        return sortConfig.direction === "asc" ? -1 : 1;
      }

      if (valueA > valueB) {
        return sortConfig.direction === "asc" ? 1 : -1;
      }

      return 0;
    });

    return result;
  }, [filteredData, sortConfig]);

  const handleSort = (key) => {
    setSortConfig((previous) => {
      if (previous.key === key) {
        return {
          key,
          direction: previous.direction === "asc" ? "desc" : "asc",
        };
      }

      return {
        key,
        direction: "asc",
      };
    });
  };

  const totalPages = Math.ceil(sortedData.length / rowsPerPage);

  // If filtering causes current page to disappear
  useEffect(() => {
    if (totalPages > 0 && currentPage > totalPages) {
      setCurrentPage(totalPages);
    }

    if (totalPages === 0 && currentPage !== 1) {
      setCurrentPage(1);
    }
  }, [totalPages, currentPage]);

  const startIndex = (currentPage - 1) * rowsPerPage;

  const endIndex = startIndex + rowsPerPage;

  const currentData = sortedData.slice(startIndex, endIndex);

  const clearFilters = () => {
    setSearch("");
    setGenderFilter("All");
    setEducationFilter("All");
    setPlaceFilter("All");
    setCurrentPage(1);
  };

  const resetAllData = () => {
    const confirmReset = window.confirm(
      "This will remove your current data and restore the original 50 records. Continue?",
    );

    if (!confirmReset) {
      return;
    }

    setData(dummyData);
    setEditingData(null);
    setCurrentPage(1);
    clearFilters();
  };

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) {
      return;
    }

    setCurrentPage(page);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const startItem = sortedData.length === 0 ? 0 : startIndex + 1;

  const endItem = Math.min(endIndex, sortedData.length);

  //UI

  return (
    <div className="container-fluid py-4">
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-4 gap-3">
        <div>
          <h1 className="fw-bold mb-1">Data Table Manager</h1>

          <p className="text-muted mb-0">
            Manage your records with CRUD, search, filter and pagination.
          </p>
        </div>

        <div>
          <button className="btn btn-outline-dark" onClick={resetAllData}>
            Reset Data
          </button>
        </div>
      </div>

      <div className="row g-3 mb-4">
        <div className="col-md-4">
          <div className="card shadow-sm border-0">
            <div className="card-body">
              <h6 className="text-muted">Total Records</h6>

              <h2 className="fw-bold mb-0">{data.length}</h2>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow-sm border-0">
            <div className="card-body">
              <h6 className="text-muted">Filtered Records</h6>

              <h2 className="fw-bold mb-0">{sortedData.length}</h2>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow-sm border-0">
            <div className="card-body">
              <h6 className="text-muted">Current Page</h6>

              <h2 className="fw-bold mb-0">
                {totalPages === 0 ? 0 : currentPage}
                {" / "}
                {totalPages}
              </h2>
            </div>
          </div>
        </div>
      </div>

      <DataForm
        onSave={handleSave}
        editingData={editingData}
        onCancel={handleCancelEdit}
      />

      <SearchBar
        search={search}
        setSearch={(value) => {
          setSearch(value);
          setCurrentPage(1);
        }}
        genderFilter={genderFilter}
        setGenderFilter={(value) => {
          setGenderFilter(value);
          setCurrentPage(1);
        }}
        educationFilter={educationFilter}
        setEducationFilter={(value) => {
          setEducationFilter(value);
          setCurrentPage(1);
        }}
        placeFilter={placeFilter}
        setPlaceFilter={(value) => {
          setPlaceFilter(value);
          setCurrentPage(1);
        }}
        places={places}
        onClear={clearFilters}
      />

      <DataTable
        data={currentData}
        onEdit={handleEdit}
        onDelete={handleDelete}
        sortConfig={sortConfig}
        onSort={handleSort}
      />

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
        totalItems={sortedData.length}
        startItem={startItem}
        endItem={endItem}
      />
    </div>
  );
}

export default Home;
