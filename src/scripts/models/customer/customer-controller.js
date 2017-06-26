import Controller from '../../lib/controller';
import customerFacade from './customer-facade';

class CustomerController extends Controller {}

//module.exports = new CustomerController(customerFacade)
export default new CustomerController(customerFacade);