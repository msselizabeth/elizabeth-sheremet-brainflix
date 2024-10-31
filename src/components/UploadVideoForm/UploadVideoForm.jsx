import { useNavigate } from "react-router-dom";
import "./UploadVideoForm.scss";
import { toast } from "react-toastify";
import { useState } from "react";

const UploadVideoForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState({ title: "", description: "" });
  const navigate = useNavigate();

  const validateFields = () => {
    let isValid = true;
    const newErrors = { title: "", description: "" };

    if (!title.trim()) {
      newErrors.title = "Title cannot be empty or just spaces.";
      isValid = false;
    }
    if (!description.trim()) {
      newErrors.description = "Description cannot be empty or just spaces.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

    const handleInputChange = (e) => {

    const { name, value } = e.target;
        if (name === "title") {
            setErrors(prevErrors => ({
                ...prevErrors,
                title: ""
              }));
            setTitle(value)
    };
        if (name === "description") {
            setErrors(prevErrors => ({
                ...prevErrors,
                description: ""
              }));
            setDescription(value)
    };
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateFields()) {
      toast.success("Upload successful!", {
        onClose: () => navigate("/"),
      });
      setTitle("");
      setDescription("");
    }
  };

  return (
    <section className="section">
      <div className="layout">
        <h2 className="upload-video__title">Upload Video</h2>
        <form onSubmit={handleSubmit} className="upload-video__form">
          <div className="upload-video__form-container">
            <div className="upload-video__video-container">
              <label className="upload-video__label-thumbnail">
                Video Thumbnail
              </label>
              <img
                src="../../../src/assets/images/Upload-video-preview.jpg"
                alt="uload video preview"
                className="upload-video__image"
              />
            </div>

            <div className="upload-video__info-container">
              <label htmlFor="title" className="upload-video__label">
                Title your video
                <input
                  type="text"
                  name="title"
                  id="title"
                  value={title}
                  placeholder="Add a title to your video"
                  className={`upload-video__input ${
                    errors.title ? "upload-video__input--error" : ""
                  }`}
                  required
                  onChange={handleInputChange}
                />
                {errors.title && (
                  <p className="upload-video__error">{errors.title}</p>
                )}
              </label>

              <label htmlFor="description" className="upload-video__label">
                Add a video description
                <input
                  type="text"
                  name="description"
                  id="description"
                  value={description}
                  placeholder="Add a description to your video"
                  required
                  className={`upload-video__input upload-video__input--description ${
                    errors.description ? "upload-video__input--error" : ""
                  }`}
                  onChange={handleInputChange}
                />
                {errors.description && (
                  <p className="upload-video__error">{errors.description}</p>
                )}
              </label>
            </div>
          </div>

          <div className="upload-video__buttons">
            <button
              type="submit"
              className="upload-video__button upload-video__button--publish"
            >
              PUBLISH
            </button>
            <button
              type="button"
              className="upload-video__button upload-video__button--cancel"
            >
              CANCEL
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default UploadVideoForm;
