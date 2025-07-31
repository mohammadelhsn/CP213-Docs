import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
	return {
		base: mode === 'production' ? '/CP213/' : '/', // Use '/CP264/' only in production, '/' in dev
		plugins: [react()],
	};
});
