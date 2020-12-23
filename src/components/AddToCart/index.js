const AddtoCart = ({ children }) => (
  <>
    <div
      className="cart-button"
      style={{
        width: "80%",
        padding: "10px",
        background: "white",
        /* font-weight: 'bold', */
        marginLeft: "auto",
        marginRight: "auto",
        position: "relative",
        textAlign: "center",
        top: "80%",
        opacity: 0.7,
        cursor: "pointer",
      }}
    >
      {children}
    </div>
  </>
);

export default AddtoCart;
