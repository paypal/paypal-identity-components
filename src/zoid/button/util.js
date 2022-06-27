/* @flow */
export function validateScopes(scopes: $ReadOnlyArray<string>) {
  if (scopes === undefined || scopes.length === 0) {
    throw new Error(`Expected props.scopes to be set`);
  }
  if (scopes.includes("")) {
    throw new Error(`Expected props.scopes element to be non-empty`);
  }

  scopes.join(" ");
}
export function validateRedirectUrl(returnurl: string) {
  if (returnurl === undefined || returnurl.length === 0) {
    throw new Error(`Expected returnurl to be set`);
  }
}

export function validateResponseType(responseType: string) {
  const RESPONSE_TYPES: $ReadOnlyArray<string> = ["code", "id_token"];
  if (!responseType) {
    throw new Error(`Expected props.responseType to be set`);
  }
  if (RESPONSE_TYPES.indexOf(responseType) === -1) {
    throw new Error(
      `Invalid value for props.responseType. Allowed values: 'code', 'id_token' `
    );
  }
}

export function validateInputLabel(inputLabel: string) {
  const VALUE_TYPES: $ReadOnlyArray<string> = [
    "connect",
    "login",
    "signup",
    "continue",
  ];
  // if (inputLabel === undefined || inputLabel.length === 0) {
  //     // throw new Error(`Expected props.connectLabel to be set`);
  // }
  if (VALUE_TYPES.indexOf(inputLabel) === -1) {
    throw new Error(`Invalid value for props.label.`);
  }
}
