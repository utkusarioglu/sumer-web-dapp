/**
 * Shape of User object retrieved from
 * https://randomuser.me
 */
export interface User {
  gender: "male" | "female";
  name: {
    title: string;
    first: string;
    last: string;
  };
  location: {
    street: {
      number: number;
      name: string;
    };
    city: string;
    state: string;
    country: string;
    postcode: number;
    coordinates: {
      latitude: string; // signed float
      longitude: string; // signed float
    };
    timezone: {
      offset: string; // signed HH:mm
      description: string;
    };
  };
  email: string;
  login: {
    uuid: string;
  };
  dob: string; // iso date
  registered: {
    date: string; // iso date
    age: number;
  };
  phone: string; // american phone number format
  cell: string; // american phone number format
  id: {
    name: string;
    value: string;
  };
  picture: {
    large: string; // url
    medium: string; // url
    thumbnail: string; // url
  };
  nat: string; // iso country code
}
