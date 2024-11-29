//@flow

export type RCMDataEntity = Residence[] | Resident[] | Pet[];

// Residence related types
export type Residence = {
  id: string,
  street: string,
  extNumber: string,
  address: string,
};

export type ResidenceType = {
  item: Residence,
};

// Resident related types
export type Resident = {
  id: string,
  firstName: string,
  lastName: string,
  address: string,
  residence: string,
  email: string,
  phoneNumber: string,
};

export type ResidentType = {
  item: Resident,
};

export type ResidentsType = {
  residents: Resident[],
};

// Pet related types
export type Pet = {
  id: string,
  name: string,
  address: string,
  type: string,
};

export type PetType = {
  item: Pet,
};
