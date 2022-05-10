export type ValidatorType = (value: string) => string | undefined

export const required: ValidatorType = (value) => {
    if (value) return undefined;
    return 'require'
}
