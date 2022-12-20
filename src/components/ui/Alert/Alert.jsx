import './Alert.scss';

function Alert({ isActiveAlert, messageAlert }) {
  return (
    <div className={isActiveAlert ? 'alert alert_active' : 'alert'}>
      <p className="alert__text">{messageAlert}</p>
    </div>
  );
}

export default Alert;
