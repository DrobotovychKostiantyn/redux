import { connect } from 'react-redux';
import CartView from './CartView';
import { getCartTable } from '../../modules/selectors';
import { removeFromCart, increment, decrement } from '../../modules/actions';

const mapState = state => ({
  products: getCartTable(state),
});

const mapDispatch = { removeFromCart, increment, decrement };

export default connect(
  mapState,
  mapDispatch,
)(CartView);
