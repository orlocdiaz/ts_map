import { faker } from '@faker-js/faker';
import { Mappable } from './CustomMap';

export class User implements Mappable {
  constructor() {
    this.name = faker.person.firstName();
    this.location = {
      lat: faker.location.latitude(),
      lng: faker.location.longitude(),
    };
  }

  name: string;
  location: {
    lat: number;
    lng: number;
  };
  color: string = 'red';

  markerContent(): string {
    return `
    <div>
      <h1>${this.name}</h1>
    </div>
    `;
  }
}
