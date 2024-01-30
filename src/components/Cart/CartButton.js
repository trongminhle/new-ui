import { useDispatch, useSelector } from "react-redux";

import classes from "./CartButton.module.css";
import { uiActions } from "../../store/ui-slice";

const CartButton = (props) => {
   const dispatch = useDispatch();
   const toggleCartHandler = () => {
      dispatch(uiActions.toggle());
   };

   const totalItem = useSelector((state) => state.cart.totalQuantity);

   return (
      <button className={classes.button} onClick={toggleCartHandler}>
         <span>My Cart</span>
         <span className={classes.badge}>{totalItem}</span>
      </button>
   );
};

export default CartButton;
