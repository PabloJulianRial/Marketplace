export function ItemDetails({ item }) {
  console.log(item);
  const { item_name, description, img_url, price, category_name } = item;
  return (
    <section className="item-details">
      <p>{item_name}</p>
      <p>{category_name}</p>
      <p>£{price / 100}</p>
      <p>{description}</p>
      <img src={img_url}></img>
    </section>
  );
}
