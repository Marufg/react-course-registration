/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import "./Cart.css"

const Cart = ({selectedTitle}) => {
    console.log(selectedTitle);
    return (
        <div>
        <h3>Course Name</h3>
        {selectedTitle.map((title) =>(
                <li>{title.title}</li>
        ))}
        </div>
    );
};

export default Cart;