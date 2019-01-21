import { connect } from 'react-redux';
import ProductsView from './ProductsView';
import * as selectors from '../../modules/selectors';
import * as actions from '../../modules/actions';

const mapState = state => ({
  products: selectors.getProducts(state),
});

const mapDispatch = { addToCart: actions.addToCart };

export default connect(
  mapState,
  mapDispatch,
)(ProductsView);
