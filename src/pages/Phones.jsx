import { Link, useLoaderData } from "react-router-dom";

const Phones = () => {
  const phones = useLoaderData();
  return (
    <div>
      <p>number of phones: {phones.length}</p>
      <div className="phone-container">
        {
          phones.map((phone) =>            
            <Link
              key={phone.id}
              className="phone-div"
              to={`/phone/${phone.id}`}
            >
              <img src={phone.image} />
              <p>Name: {phone.name}</p>
              <p>Price: {phone.price}</p>

            </Link>
          )}
      </div>
    </div>
  );
};

export default Phones;