import { User } from './components/User';
import { Company } from './components/Company';
import { CustomMap } from './components/CustomMap';

const user = new User();
console.log(user);

const company = new Company();
console.log(company);

const customMap = new CustomMap('map');

customMap.addMarker(user);
customMap.addMarker(company);
