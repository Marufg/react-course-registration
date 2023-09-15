/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import "./Cart.css"

const Cart = ({ selectedTitle, remaining, totalCost, }) => {
    console.log(selectedTitle);
    return (
        <div>
            <h3 className="remaining">Credit Hour Remaining: {remaining} hr</h3>
            <hr />
            <h3>Course Name</h3>
            <hr />
           <ol>
           {selectedTitle.map((title) => (
                <li>{title.title}</li>
            ))}
           </ol>
            <h5>Total Credit Hour : {totalCost} </h5>
            <hr />
            <h6>Total Price : 48000 USD</h6>

        </div>
    );
};

export default Cart;