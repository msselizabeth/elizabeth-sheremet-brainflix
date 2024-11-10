import { useNavigate } from "react-router-dom";
import "./UploadPage.scss";
import { toast } from "react-toastify";
import { useState } from "react";
import { baseUrl } from "../../App";
import axios from "axios";

const UploadPage = ({ getVideos }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState({ title: "", description: "" });
  const navigate = useNavigate();
  const [thumbnail, setThumbnail] = useState(null);

  const handleThumbnailChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setThumbnail(file);
    }
  };

  const validateFields = () => {
    let isValid = true;
    const newErrors = { title: "", description: "", thumbnail: "" };

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
      setErrors((prevErrors) => ({
        ...prevErrors,
        title: "",
      }));
      setTitle(value);
    }
    if (name === "description") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        description: "",
      }));
      setDescription(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newVideo = new FormData();
    newVideo.append("title", title);
    newVideo.append("description", description);
    newVideo.append("thumbnail", thumbnail);

    if (validateFields()) {
      await axios.post(`${baseUrl}/videos`, newVideo);
      toast.success("Upload successful!", {
        onClose: () => navigate("/"),
      });
      getVideos();
      setTitle("");
      setDescription("");
      setThumbnail(null);
    }
  };

  const cancelUpload = () => {
    setErrors({ title: "", description: "" });
    setTitle("");
    setDescription("");
    setThumbnail(null);
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
                src={
                  thumbnail
                    ? URL.createObjectURL(thumbnail)
                    : "../../../src/assets/images/Upload-video-preview.jpg"
                }
                alt="upload video preview"
                className="upload-video__image"
              />
              <input
                type="file"
                accept="image/*"
                onChange={handleThumbnailChange}
                className="upload-video__thumbnail-input"
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
              onClick={() => cancelUpload()}
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

export default UploadPage;
