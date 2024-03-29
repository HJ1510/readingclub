import { useState, useEffect } from 'react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import styles from 'assets/css/component/meeting/Board.module.css';

const INITIAL_VALUES = {
  title: '',
  content: '',
  hashtags: [],
};

function ArticleForm({ initialValues, onSubmit, user }) {
  const [formData, setFormData] = useState(INITIAL_VALUES);

  const handleChange = (name, value) => {
    if (name === 'hashtags') {
      const hashtags = value.split(','); // 입력된 값을 쉼표로 분리하여 배열로 변환
      setFormData((prevValues) => ({ ...prevValues, [name]: hashtags }));
    } else {
      setFormData((prevValues) => ({ ...prevValues, [name]: value }));
    }
  };

  const handleContentChange = (event, editor) => {
    const data = editor.getData();
    setFormData((prevValues) => ({ ...prevValues, content: data }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    handleChange(name, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('title', formData.title);
    data.append('content', formData.content);
    data.append('hashtags', formData.hashtags);
    data.append('creator', user._id);
    // for (let [key, value] of data.entries()) {
    //   console.log(key, value);
    // }
    onSubmit(data);
  };

  useEffect(() => {
    if (initialValues) {
      setFormData(initialValues);
    }
  }, [initialValues]);

  return (
    <div className={styles.Write}>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type='text'
            name='title'
            value={formData.title}
            onChange={handleInputChange}
            id={styles.title_txt}
          />
        </div>
        <div>
          <CKEditor
            editor={ClassicEditor}
            data={formData.content}
            onChange={handleContentChange}
            id='CKEditor'
          />
        </div>
        <div>
          <input
            type='text'
            autoComplete='off'
            name='hashtags'
            value={formData.hashtags}
            placeholder='hashtags'
            onChange={handleInputChange}
          ></input>
        </div>
        <button type='submit'>{initialValues ? '수정' : '작성'}</button>
      </form>
    </div>
  );
}

export default ArticleForm;
