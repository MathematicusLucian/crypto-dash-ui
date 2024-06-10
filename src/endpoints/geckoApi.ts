import useAxios from "@/composables/useAxios";
const { get } = useAxios();
const createQueryString = (params: any) => Object.entries(params).map(([key, value]) => `${key}=${value}`).join('&');

export const apis = {
    getCoinsList: ({ selectedCurrency = "usd" } = {}) => get(`coins/markets?selectedCurrency=${selectedCurrency}`),
    getCoinsListByName: ({
        order = "market_cap_desc",
        selectedCurrency = "gbp",
        per_page = 100,
        page = 1,
        sparkline = false,
        names = null
    }) => {
        const query = createQueryString({
            selectedCurrency,
            ids: names,
            order,
            per_page,
            page,
            sparkline,
            locale: 'en'
        });
        return get(`coins/markets?${query}`);
    },
    getCoinsListBySymbol: ({
        order = "market_cap_desc",
        selectedCurrency = "gbp",
        per_page = 100,
        page = 1,
        sparkline = false,
    }) => {
        const query = createQueryString({
            selectedCurrency,
            order,
            per_page,
            page,
            sparkline,
            locale: 'en'
        });
        return get(`coins/markets?${query}`);
    },
    getChart: async ({ coinID = "", days = "", selectedCurrency = "gbp" }) => {
        const query = createQueryString({ selectedCurrency, days })
        // await get(`coins/${coinID}/market_chart?selectedCurrency=${selectedCurrency}&days=${options.days}`)
        return await get(`coins/${coinID}/market_chart?${query}`)
    },
    getCoinDetail: async (coinID: string) => await get(`coins/${coinID}`)

}