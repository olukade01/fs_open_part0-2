const Notification = ({ message }) => {
  const styles = {
    background: 'lightgrey',
    border: '3px solid green',
    height: 40,
    borderRadius: 5,
    marginBottom: 10,
    color: "green",
    display: "flex",
    alignItems: 'center'
  }
  const errorStyles = {
    background: 'lightgrey',
    border: '3px solid red',
    height: 40,
    borderRadius: 5,
    marginBottom: 10,
    color: "red",
    display: "flex",
    alignItems: 'center'
  }
  return (
    <div style={message.includes('minimum') || message.includes('required') || message.includes('valid') ? errorStyles : styles}>
      {message}
    </div>
  )
}

export default Notification
