import { connect } from 'react-redux';
import CartIconView from './CartIconView';
import { getCartProductsAmount } from '../../modules/selectors';

const mapState = state => ({
  amount: getCartProductsAmount(state),
});

export default connect(mapState)(CartIconView);
