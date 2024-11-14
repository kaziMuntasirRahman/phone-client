import { useLoaderData } from "react-router-dom";

const Phone = () => {
  const phone = useLoaderData();
  console.log(phone);

  return (
    <div
      key={phone.id}
      to={`/phone/${phone.id}`}
    >
      <img src={phone.image} />
      <p>Name: {phone.name}</p>
      <p>Price: {phone.price}</p>
      <p>{phone.description}</p>
    </div>
  );
};

export default Phone;