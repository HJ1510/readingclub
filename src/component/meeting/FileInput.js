import { useEffect, useRef, useState } from "react";

function FileInput({ name, value, onChange }) {
  const handleChange = (e) => {
    const nextValue = e.target.files[0];
    onChange({ target: { name, value: nextValue } });
  };

  return (
    <div>
      {/* <img src={preview} width="100" alt="미리보기" /> */}
      <input type="file" onChange={handleChange} />
    </div>
  );
}

export default FileInput;

// function FileInput({ name, value, onChange }) {
//   const [preview, setPreview] = useState();

//   const inputRef = useRef();

//   const handleInputChange = (e) => {
//     const nextValue = e.target.files[0];
//     onChange(name, nextValue);
//   };

//   const handleClearClick = () => {
//     const inputNode = inputRef.current;
//     if (!inputNode) return;

//     inputNode.value = "";
//     onChange(name, null);
//   };

//   useEffect(() => {
//     if (!value) return;

//     // 사이드 이펙트 발생
//     const nextPreview = URL.createObjectURL(value);
//     setPreview(nextPreview);

//     // 사이드 이펙트 정리
//     return () => {
//       setPreview();
//       URL.revokeObjectURL(nextPreview); //createObjectURL 해제
//     };
//   }, [value]);

//   return (
//     <div>
//       <img src={preview} width="100" alt="미리보기" />
//       <input
//         type="file"
//         accept="image/png, image/jpeg"
//         onChange={handleInputChange}
//         ref={inputRef}
//       />
//       {value && <button onClick={handleClearClick}>X</button>}
//     </div>
//   );
// }
