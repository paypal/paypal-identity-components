/* @flow */

export const COMPRESSED = `
    max-width: 0%;
    opacity: 0;
    overflow: hidden;
`;

export const EXPANDED = `
    max-width: 100%;
    opacity: 1;
`;

export const HIDDEN = `
    position: absolute;
    visibility: hidden;
`;

export const VISIBLE = `
    position: static;
    visibility: visible;
`;

export const labelStyle = `
    @keyframes show-text {
        0% { ${COMPRESSED} }
        100% { ${EXPANDED} }
    }
`;
