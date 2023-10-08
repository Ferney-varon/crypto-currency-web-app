export type ButtonProps = {
    text: string;
    href: string
}

export type Route = {
    label: string;
    route: string
}

export type Params = {
    id: number;
}

export type LayoutProps = {
    children: React.ReactNode
    params?: Params
}