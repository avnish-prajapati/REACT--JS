function DataTable({ data, onEdit, onDelete, sortConfig, onSort }) {
  const getSortIcon = (key) => {
    if (sortConfig.key !== key) {
      return "↕";
    }

    return sortConfig.direction === "asc" ? "↑" : "↓";
  };

  const handleDelete = (id, name) => {
    const confirmDelete = window.confirm(
      `Are you sure you want to delete ${name}?`,
    );

    if (confirmDelete) {
      onDelete(id);
    }
  };

  return (
    <div className="card shadow-sm">
      <div className="card-body p-0">
        <div className="table-responsive">
          <table className="table table-hover table-bordered mb-0 align-middle">
            <thead className="table-dark">
              <tr>
                <th onClick={() => onSort("id")} className="sortable">
                  ID {getSortIcon("id")}
                </th>

                <th onClick={() => onSort("name")} className="sortable">
                  Name {getSortIcon("name")}
                </th>

                <th onClick={() => onSort("place")} className="sortable">
                  Place {getSortIcon("place")}
                </th>

                <th onClick={() => onSort("gender")} className="sortable">
                  Gender {getSortIcon("gender")}
                </th>

                <th onClick={() => onSort("education")} className="sortable">
                  Education {getSortIcon("education")}
                </th>

                <th onClick={() => onSort("number")} className="sortable">
                  Number {getSortIcon("number")}
                </th>

                <th className="text-center">Action</th>
              </tr>
            </thead>

            <tbody>
              {data.length === 0 ? (
                <tr>
                  <td colSpan="7" className="text-center py-5">
                    <h5>No data found</h5>
                    <p className="text-muted mb-0">
                      Try changing your search or filters.
                    </p>
                  </td>
                </tr>
              ) : (
                data.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>

                    <td className="fw-semibold">{item.name}</td>

                    <td>{item.place}</td>

                    <td>
                      <span
                        className={`badge ${
                          item.gender === "Male"
                            ? "text-bg-primary"
                            : "text-bg-danger"
                        }`}
                      >
                        {item.gender}
                      </span>
                    </td>

                    <td>{item.education}</td>

                    <td>{item.number}</td>

                    <td>
                      <div className="d-flex justify-content-center gap-2">
                        <button
                          className="btn btn-sm btn-warning"
                          onClick={() => onEdit(item)}
                        >
                          Edit
                        </button>

                        <button
                          className="btn btn-sm btn-danger"
                          onClick={() => handleDelete(item.id, item.name)}
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default DataTable;
