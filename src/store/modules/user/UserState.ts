export default interface UserState {
    token: string;
    current: object | null;
    instanceUrl: string;
    currentEComStore: object;
    virtualFacilities: object | null;
    currentOrderParking: Array<string>;
}