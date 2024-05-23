import { environment } from "src/environments/environment";

export const resetPasswordUrl = `${environment.baseUrl}/signin/reset-password`;
export const getAllMisMascotasUrl = `${environment.baseUrl}/misMascotas`;
export const postNewPetUrl = `${environment.baseUrl}/pets/alta`;
export const postulationsControllerUrl = `${environment.baseUrl}/misPostulaciones`;
export const getAllMascotasUrl = `${environment.baseUrl}/pets`;
export const favoritosControllerUrl = `${environment.baseUrl}/favoritos`;
export const userAnswersUrl = `${environment.baseUrl}/user-answers`;
export const isFormAnsweredUrl = `${environment.baseUrl}/signin/isFormAnswered`;