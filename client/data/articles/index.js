import * as SthlmAritcles from './Sthlm';
import * as NyheterAritcles from './Nyheter';
import _ from 'lodash';


const sthlmArray = _.flatMap(SthlmAritcles);
const nyheterArray = _.flatMap(NyheterAritcles);

export default [ ...sthlmArray, ...nyheterArray];