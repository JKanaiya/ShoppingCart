const Cart = function ({ cartItems }) {
  return (
    <div>
      {cartItems.length == 0 ? (
        <h2>Your Cart is Empty</h2>
      ) : (
        cartItems.map((item) => (
          <div key={item.id}>
            <h2 role="title">{item.title}</h2>
            <p>{item.description}</p>
            <p>{item.price}</p>
          </div>
        ))
      )}
      {cartItems.length != 0 && (
        <h3>
          {
            cartItems.reduce(
              (previous, current) => ({
                count: 1,
                price:
                  previous.count * previous.price +
                  current.count * current.price,
              }),
              {
                count: 1,
                price: 0,
              },
            ).price
          }
        </h3>
      )}
    </div>
  );
};

export default Cart;
