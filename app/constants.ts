import { Route } from "./types"

export const ROUTES : Route[]= [
    {
        label: 'Home',
        route: '/'
    },
    {
        label: 'Dashboard',
        route: '/dashboard'
    },
];

export const TABLE_HEAD_INFO = {
   rank: 'Rank',
   name: 'Crypto Coin',
   price_usd: 'Price USD',
   percent_change_1h: '1 Hour',
   percent_change_24h: '24 Hour'
};