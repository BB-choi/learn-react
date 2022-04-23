import { useRef, useState } from "react";

export default function InputUseRef() {
  const [inputs, setInputs] = useState({
    name: "",
    nickName: "",
  });
  const nameInput = useRef();

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
    nameInput.current.focus();
  };

  return (
    <div>
      <input
        name="name"
        placeholder="이름"
        value={name}
        onChange={onChange}
        ref={nameInput}
      />
      <input
        name="nickName"
        placeholder="닉네임"
        value={nickName}
        onChange={onChange}
      />
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값: </b>
        {name} ({nickName})
      </div>
    </div>
  );
}
