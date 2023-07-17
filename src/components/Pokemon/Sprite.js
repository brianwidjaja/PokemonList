function importAll(r) {
  let images = {};
  r.keys().forEach((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const images = importAll(
  require.context("../sprites_folder", false, /\.(png|jpe?g|svg)$/)
);

const Sprite = (props) => {
  return (
    <img src={images[`${props.id}.png`]} alt="" height={150} width={150} />
  );
};

export default Sprite;
