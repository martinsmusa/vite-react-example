export type WikiError = {
    type: string;
    title: string;
    method: string;
    detail?: string;
    uri?: string;
}

export type WikiResponseError = { data: WikiError }
