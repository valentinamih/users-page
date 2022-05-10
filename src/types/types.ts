export type UserType = {
    address: AddressType
    company: CompanyType
    email: string
    id: number | undefined
    name: string
    phone: string
    username: string
    website: string
}

export type AddressType = {
    city: string
    geo: GeoType
    street: string
    suite: string
    zipcode: string
}
export type GeoType = {
    lat: string
    lng: string
}
export type CompanyType = {
    bs: string
    catchPhrase: string
    name: string
}