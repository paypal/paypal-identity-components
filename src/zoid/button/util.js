/* @flow */
export function validateScopes(scopes : $ReadOnlyArray<string>) {
    if (scopes === undefined || scopes.length === 0) {
        throw new Error(`Expected props.scopes to be set`);
    }
    if (scopes.includes('')) {
        throw new Error(`Expected props.scopes element to be non-empty`);
    }
}


export function validateResponseType(responseType : string) {
    const RESPONSE_TYPES : $ReadOnlyArray<string> = [ 'code', 'code+token', 'code+token+id_token', 'code+id_token' ];
    if (!responseType) {
        throw new Error(`Expected props.responseType to be set`);
    }
    if (RESPONSE_TYPES.indexOf(responseType) === -1) {
        throw new Error(`Invalid value for props.responseType. Allowed values: 'code', 'code+token', 'code+token+id_token', 'code+id_token' `);
    }
}
