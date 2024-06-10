import { reactive } from 'vue';

export const errorState = reactive({
    error: null,
    showError(errorMessage: any) {
        this.error = errorMessage;
        setTimeout(() => this.clearError(), 2000);
    },
    clearError() {
        this.error = null;
    }
});

// https://pinia.vuejs.org/cookbook/testing.html