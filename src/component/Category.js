import Form from "react-bootstrap/Form";

function Category() {
  const categorys = ["건강/취미", "경제경영", "공무원수험서", "과학", "달력"];

  return (
    <div>
      <Form>
        {["checkbox"].map((type) => (
          <div key={`inline-${type}`} className="mb-3">
            {categorys.map(function (category) {
              return (
                <Form.Check
                  inline
                  type={type}
                  id={`inline-${type}`}
                  label={category}
                  key={category}
                />
              );
            })}
          </div>
        ))}
      </Form>
      <input></input>
      <button>검색</button>
    </div>
  );
}

export default Category;
