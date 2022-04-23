function Hello({ name, color }) {
  return <div style={{ color }}>안녕하세요, {name}!</div>;
}

Hello.defaultProps = {
  name: "이름을 지정하지 않으셨습니다",
};

export default Hello;
