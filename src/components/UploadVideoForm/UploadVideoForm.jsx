import { useNavigate } from "react-router-dom";
import "./UploadVideoForm.scss";
import { toast } from "react-toastify";

const UploadVideoForm = () => {

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        toast.success("Upload successful!", {
            onClose: () => navigate('/') 
        });
    }
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
                  placeholder="Add a title to your video"
                  className="upload-video__input"
                  required
                />
              </label>

              <label htmlFor="description" className="upload-video__label">
                Add a video description
                <input
                  type="text"
                  name="description"
                  id="description"
                  placeholder="Add a description to your video"
                  required
                  className="upload-video__input upload-video__input--description"
                />
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
