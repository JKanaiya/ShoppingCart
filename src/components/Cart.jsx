const Cart = function ({ cartItems }) {
  return (
    <div>
      {cartItems.length == 0 ? (
        <h2>Your Cart is Empty</h2>
      ) : (
        cartItems.map((item) => {
          return (
            <div key={item.id}>
              <h2 role="title">{item.title}</h2>
              <p>{item.description}</p>
              <p>{item.price}</p>
            </div>
          );
        })
      )}
    </div>
  );
};

export default Cart;
