import { ref } from 'vue';
import axios from 'axios';
import { errorState } from '@/state/errorState';

const BaseUrl = import.meta.env.CRYPTO_PRICES_API_BASEURL;
const getUrl = (url: string) => `${BaseUrl}/${url}`;

export default function useAxios() {
    const data = ref(null);

    async function get(url: string, config = {}) {
        try {
            const response = await axios.get(getUrl(url), config);
            data.value = response.data;
        } catch (e: any) {
            errorState.showError(e.message);
            console.error(e);
        }
        return data.value
    }

    async function post(url: string, payload: object, config = {}) {
        try {
            const response = await axios.post(getUrl(url), payload, config);
            data.value = response.data;
        } catch (e: any) {
            errorState.showError(e.message);
            console.error(e);
        }
        return data.value
    }

    return { get, post };
}