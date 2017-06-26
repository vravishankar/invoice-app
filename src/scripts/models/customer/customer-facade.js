import Model from '../../lib/facade';
import customerSchema from './customer-schema';

class CustomerModel extends Model {}

// module.exports = new CustomerModel(customerSchema)
export default new CustomerModel(customerSchema);