import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
    base: '/festival-travel-guide/', // GitHub Pages 배포 시 저장소 이름 포함
    build: {
        outDir: 'dist',
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                business: resolve(__dirname, 'business-analysis.html')
            }
        },
        minify: 'terser',
        terserOptions: {
            compress: {
                drop_console: true, // 프로덕션에서 console.log 제거
                drop_debugger: true
            }
        },
        // 청크 크기 최적화
        chunkSizeWarningLimit: 1000
    },
    server: {
        port: 3008,
        strictPort: false,
        host: 'localhost',
        open: false,
        hmr: {
            // 프록시/포트 포워딩 환경(브라우저 접근 포트가 서버 포트와 다른 경우) 대응
            clientPort: 3008,
            port: 3008,
            host: 'localhost',
            protocol: 'ws'
        }
    }
});
