export interface CurrentUser {
	tienePermiso: boolean;
	mensaje: string | null;
	token: string;
	rolId: number;
};
