import FilledButton from '../utils/buttons/FilledButton';
import OutlinedButton from '../utils/buttons/OutlinedButton';
function ReviewModal(props) {
  const { isOpen, toggleOpen } = props;
  const hidden = isOpen ? '' : 'hidden';
  const handleClose = (event) => {
    event.stopPropagation();
    if (event.target?.id === 'top-div') {
      toggleOpen(false);
    }
  };
  return (
    <div
      className={`${hidden} fixed inset-0 bg-primary bg-opacity-50 overflow-y-auto h-screen w-screen flex justify-center`}
      onClick={handleClose}
      id="top-div">
      <div className="text-tertiary bg-primary border shadow-lg mt-28 h-max p-8">
        <div className="flex flex-col">
          <textarea />
          <span className="text-center">How was your experience?</span>
          <ul>
            <li>
              <input type="radio" name="rating" value="1" />
            </li>
            <li>
              <input type="radio" name="rating" value="2" />
            </li>
            <li>
              <input type="radio" name="rating" value="3" />
            </li>
            <li>
              <input type="radio" name="rating" value="4" />
            </li>
            <li>
              <input type="radio" name="rating" value="5" />
            </li>
          </ul>
          {/* <button type="button" title="Rate 1 stars" aria-label="Rate 1 stars">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-10 h-10 dark:text-yellow-500">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
            </button> */}
        </div>
      </div>
    </div>
    // </div>
  );
}

export default ReviewModal;
