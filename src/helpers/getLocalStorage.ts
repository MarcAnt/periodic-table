// Use for SessionStorage objects
export const isPersistedState = (stateName: string): any => {
    const sessionState = sessionStorage.getItem(stateName);
    return sessionState && JSON.parse(sessionState);
}

//Use only for localStorage objects
export const isPersistedLocal = (localName: string): any => {
    const localState = localStorage.getItem(localName);
    return localState && JSON.parse(localState);
}

//Use only for single string values
export const getSingleValue = (localName: string): any => {
    const localState = localStorage.getItem(localName);
    return localState;
}