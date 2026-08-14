import { useEffect, useState } from "react";

const initialForm = {
  name: "",
  place: "",
  gender: "",
  education: "",
  number: "",
};

function DataForm({ onSave, editingData, onCancel }) {
  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (editingData) {
      setFormData({
        name: editingData.name,
        place: editingData.place,
        gender: editingData.gender,
        education: editingData.education,
        number: editingData.number,
      });
    } else {
      setFormData(initialForm);
    }

    setErrors({});
  }, [editingData]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.place.trim()) {
      newErrors.place = "Place is required";
    }

    if (!formData.gender) {
      newErrors.gender = "Please select gender";
    }

    if (!formData.education) {
      newErrors.education = "Please select education";
    }

    if (!/^[0-9]{10}$/.test(formData.number)) {
      newErrors.number = "Number must contain exactly 10 digits";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    onSave(formData);

    if (!editingData) {
      setFormData(initialForm);
    }

    setErrors({});
  };

  return (
    <div className="card shadow-sm mb-4">
      <div className="card-header bg-dark text-white">
        <h5 className="mb-0">{editingData ? "Update Data" : "Add New Data"}</h5>
      </div>

      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="row g-3">
            {/* Name */}
            <div className="col-md-6">
              <label className="form-label">Name</label>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`form-control ${errors.name ? "is-invalid" : ""}`}
                placeholder="Enter name"
              />

              {errors.name && (
                <div className="invalid-feedback">{errors.name}</div>
              )}
            </div>

            {/* Place */}
            <div className="col-md-6">
              <label className="form-label">Place</label>

              <input
                type="text"
                name="place"
                value={formData.place}
                onChange={handleChange}
                className={`form-control ${errors.place ? "is-invalid" : ""}`}
                placeholder="Enter place"
              />

              {errors.place && (
                <div className="invalid-feedback">{errors.place}</div>
              )}
            </div>

            {/* Gender */}
            <div className="col-md-4">
              <label className="form-label">Gender</label>

              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className={`form-select ${errors.gender ? "is-invalid" : ""}`}
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>

              {errors.gender && (
                <div className="invalid-feedback">{errors.gender}</div>
              )}
            </div>

            {/* Education */}
            <div className="col-md-4">
              <label className="form-label">Education</label>

              <select
                name="education"
                value={formData.education}
                onChange={handleChange}
                className={`form-select ${
                  errors.education ? "is-invalid" : ""
                }`}
              >
                <option value="">Select Education</option>
                <option value="BCA">BCA</option>
                <option value="MCA">MCA</option>
                <option value="B.Tech">B.Tech</option>
                <option value="BBA">BBA</option>
                <option value="MBA">MBA</option>
              </select>

              {errors.education && (
                <div className="invalid-feedback">{errors.education}</div>
              )}
            </div>

            {/* Number */}
            <div className="col-md-4">
              <label className="form-label">Number</label>

              <input
                type="text"
                name="number"
                value={formData.number}
                onChange={handleChange}
                maxLength="10"
                className={`form-control ${errors.number ? "is-invalid" : ""}`}
                placeholder="10 digit number"
              />

              {errors.number && (
                <div className="invalid-feedback">{errors.number}</div>
              )}
            </div>

            {/* Buttons to add the data/send */}
            <div className="col-12">
              <button type="submit" className="btn btn-primary me-2">
                {editingData ? "Update Data" : "Add Data"}
              </button>

              {editingData && (
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={onCancel}
                >
                  Cancel
                </button>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default DataForm;
