import Form from "react-bootstrap/Form";
import "../../assets/css/component/meeting/Meeting.css";

function Category() {
  const categorys = ["건강/취미", "경제경영", "공무원수험서", "과학", "달력"];

  return (
    <div>
      <Form>
        {["checkbox"].map((type) => (
          <div key={type} className="mb-3">
            {categorys.map(function (category) {
              return <Form.Check inline label={category} key={category} />;
            })}
          </div>
        ))}
      </Form>
      
    </div>
  );
}

export default Category;
