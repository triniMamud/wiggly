import { Pet } from "./Pet.model";

export interface PetDTOResponse {
  pet: Pet;
  images: any[];
}