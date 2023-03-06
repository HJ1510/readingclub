import "assets/css/component/meeting/Meeting.css";

function MeetingModal(props) {
  return (
    <div className="meeting_modal">
      <div className="meeting_modal_body">
        <p>{props.message}</p>
        <button onClick={props.onClose}>확인</button>
      </div>
    </div>
  );
}

export default MeetingModal;
