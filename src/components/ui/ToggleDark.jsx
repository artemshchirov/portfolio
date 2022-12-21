import Button from './Button/Button';

function ToggleDark({ toggleDark, isDarkMode }) {
  return (
    <Button
      aria-label="toggle theme"
      className="button_type_icon"
      onClick={() => toggleDark()}
    >
      <i
        aria-hidden="true"
        id="btn-theme"
        className={`fas ${isDarkMode ? 'fa-sun' : 'fa-moon'}`}
      />
    </Button>
  );
}

export default ToggleDark;
