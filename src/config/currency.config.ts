import { InjectionToken } from "@angular/core";

export type ICurrency = {
    id: string;
    name: string;
    flag: string;
    symbol: string;
}

export const currencyConfig: ICurrency[] = [
    {
        id: "EUR", 
        name: "euro",
        flag: "🇪🇺",
        symbol: "€"
    },
    {
        id: "USD",
        name: "dollar",
        flag: "🇺🇸",
        symbol: "$"
    },
    {
        id: "GBP",
        name: "pound",
        flag: "🇬🇧",
        symbol: "£"
    }, 
    {
        id: "JPY",
        name: "yen",
        flag: "🇯🇵",
        symbol: "¥"
    },
    {
        id: "CNY",
        name: "yuan",
        flag: "🇨🇳",
        symbol: "¥"
    },
    {
        id: "INR",
        name: "rupee",
        flag: "🇮🇳",
        symbol: "₹"
    },
    {
        id: "AUD",
        name: "dollar",
        flag: "🇦🇺",
        symbol: "$"
    },
    {
        id: "CAD",
        name: "dollar",
        flag: "🇨🇦",
        symbol: "$"
    },
    {
        id: "CHF",
        name: "franc",
        flag: "🇨🇭",
        symbol: "Fr"
    },
    {
        id: "SEK",
        name: "krona",
        flag: "🇸🇪",
        symbol: "kr"
    },
    {
        id: "NZD",
        name: "dollar",
        flag: "🇳🇿",
        symbol: "$"
    },
    {
        id: "KRW",
        name: "won",
        flag: "🇰🇷",
        symbol: "₩"
    },
    {
        id: "SGD",
        name: "dollar",
        flag: "🇸🇬",
        symbol: "$"
    },
    {
        id: "NOK",
        name: "krone",
        flag: "🇳🇴",
        symbol: "kr"
    },
    {
        id: "MXN",
        name: "peso",
        flag: "🇲🇽",
        symbol: "$"
    },
    {
        id: "HKD",
        name: "dollar",
        flag: "🇭🇰",
        symbol: "$"
    },
    {
        id: "TRY",
        name: "lira",
        flag: "🇹🇷",
        symbol: "₺"
    },
    {
        id: "RUB",
        name: "ruble",
        flag: "🇷🇺",
        symbol: "₽"
    },
    {
        id: "ZAR",
        name: "rand",
        flag: "🇿🇦",
        symbol: "R"
    },
    {
        id: "BRL",
        name: "real",
        flag: "🇧🇷",
        symbol: "R$"
    }
]

export const CURRENCY_URL = new InjectionToken<string>('CURRENCY_URL')