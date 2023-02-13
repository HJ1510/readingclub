const styles = {
  wrapper: {
    margin: 8,
    padding: 8,
    display: "flex",
    flexDirection: "row",
    border: "1px solid grey",
    borderRadius: 16,
  },
  imageContainer: {},
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  contextContainer: {
    marginLeft: 8,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  nameText: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
  },
  commentTest: {
    color: "black",
    fontSize: 16,
  },
  button: {
    float: "left",
  },
};

function CommentItem(props) {
  return (
    <div style={styles.wrapper}>
      <div style={styles.imageContainer}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
          style={styles.image}
        />
      </div>
      <div style={styles.contextContainer}>
        <span style={styles.nameText}>{props.title}</span>
        <span style={styles.commentTest}>{props.content}</span>
      </div>
      <div>
        <button style={styles.button}>삭제</button>
      </div>
    </div>
  );
}

export default CommentItem;
