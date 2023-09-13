import { PetTypeEnum } from "./PetTypeEnum";
import { BathroomEnum } from "./BathroomEnum";

export interface Pet {
  id?: number;
  name?: String;
  type?: PetTypeEnum;
  age?: number;
  gender?: String;
  size?: String;
  location?: String;
  is_castrated?: boolean;
  vaccines?: String;
  deparasited?: String;
  illnessesAndTreatments?: String;
  medicalInfo?: String;
  generalInfo?: String;
  goodWithPets?: String
  goodWithChildren?: String;
  beOnItsOwn?: boolean;
  bathroomOutside?: BathroomEnum;
}