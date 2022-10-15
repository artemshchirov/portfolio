const ToggleDark = ({ toggleDark, isDarkMode }) => {
  return (
    <button
      type="button"
      aria-label="toggle theme"
      className="button button_type_icon"
      onClick={() => {
        toggleDark();
      }}
    >
      <i
        aria-hidden="true"
        id="btn-theme"
        className={`fas ${isDarkMode ? 'fa-sun' : 'fa-moon'}`}
      ></i>
    </button>
  );
};

export default ToggleDark;
