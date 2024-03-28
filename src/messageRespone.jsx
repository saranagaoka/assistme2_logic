import './messageResponse.css';

function User({input}) {
  return (
    <div className="messageResponse">
      <div className='robot_name'>@Super_User</div>
      <div className="message_chat">{input}</div>
     
    </div>
  );
}

export default User;
