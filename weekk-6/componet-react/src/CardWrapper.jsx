function CardWrapper({ innerComponent }) {
  return <div style={{ border: "2px solid black" }}>{innerComponent}</div>;
}

function TextComponent() {
  return <div>hi there</div>;
}
module.exports = { CardWrapper, TextComponent };
// export default { CardWrapper, TextComponent };
