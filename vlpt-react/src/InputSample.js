import { useState } from "react";

export default function InputSample() {
  const [inputs, setInputs] = useState({
    name: "",
    nickName: "",
  });

  const { name, nickName } = inputs;

  const onChange = ({ target }) => {
    const { value, name } = target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onReset = () => {
    setInputs({
      name: "",
      nickName: "",
    });
  };

  return (
    <div>
      <input name="name" placeholder="이름" value={name} onChange={onChange} />
      <input
        name="nickName"
        placeholder="닉네임"
        value={nickName}
        onChange={onChange}
      />
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값: </b>
        이름 (닉네임)
      </div>
    </div>
  );
}
