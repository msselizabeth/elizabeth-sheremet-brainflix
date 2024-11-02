import "./Comments.scss";

const Comments = ({ comments }) => {

  return (
    <div className="comments">
      <h2 className="comments__title">{`${comments.length} Comments`}</h2>
      <form className="form">
        <img
          src="../../../src/assets/images/Mohan-muruge.jpg"
          alt="user avatar image"
          className="form__avatar"
        />
        <div className="form__container">
          <label htmlFor="comment" className="form__label">
            Join the conversation
            <input
              type="text"
              name="comment"
              id="comment"
              required
              className="form__input"
              placeholder="Add a new comment"
            />
          </label>
          <button type="submit" className="form__button">
            Comment
          </button>
        </div>
      </form>

      <ul className="comment__list">
        {comments.length > 0 &&
          comments.map((comment) => (
            <li key={comment.id} className="comment__item">
              <div className="comment__image"></div>
              <div className="comment__item-container">
                <div className="comment__name-date-container">
                  <h3 className="comment__name">{comment.name}</h3>
                  <p className="comment__time">
                    {new Date(comment.timestamp).toLocaleDateString()}
                  </p>
                </div>
                <p className="comment__text">{comment.comment}</p>
              </div>
            </li>
          ))}
        {comments.length === 0 && (
          <p className="no-comments">No comments yet.</p>
        )}
      </ul>
    </div>
  );
};

export default Comments;
