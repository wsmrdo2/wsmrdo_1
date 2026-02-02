# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for- **[style.css](file:///e:/workspace/wsmrdo_1/style.css)**: Created a custom design system using CSS variables and utility classes, replicating the premium look of the original Tailwind design. Added missing utility classes like `.hidden-mobile` for better responsive control and specific styles for the **Tetris game**.
- **[tetris.js](file:///e:/workspace/wsmrdo_1/tetris.js)**: [NEW] Implemented a full-featured Tetris game in vanilla JavaScript.
- **[script.js](file:///e:/workspace/wsmrdo_1/script.js)**: Implemented all interactive features using vanilla JavaScript with added safety checks for DOM elements:
    - Fixed navbar background changes on scroll.
    - Mobile menu toggle and overlay with improved error handling.
    - Scroll-reveal animations for sections and elements.
    - Animated progress bars for skills.
    - Smooth scrolling and form submission handling.## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
# 도원석 포트폴리오 (Dowonseok Portfolio)

주식회사 후본 연구소장 도원석의 개인 포트폴리오 웹사이트입니다.

## 🚀 프로젝트 개요
이 웹사이트는 20년 경력의 오디오 연구 개발 전문가인 도원석 연구소장의 경력, 기술 역량, 그리고 주요 프로젝트를 소개하기 위해 제작되었습니다.

## 🛠 기술 스택
- **구조**: HTML5
- **디자인**: Vanilla CSS3 (Custom Design System)
- **로직**: Vanilla JavaScript
- **아이콘**: Lucide Icons (CDN)
- **폰트**: Pretendard (CDN)

## 📌 주요 특징
- **프리미엄 디자인**: 다크 모드 기반의 세련되고 전문적인 인터페이스.
- **반응형 웹**: 데스크톱 및 모바일 환경에 최적화된 레이아웃.
- **성능 최적화**: 프레임워크와 외부 라이브러리 의존도를 최소화하여 빠른 로딩 속도 구현.
- **인터랙티브 요소**: 스크롤 애니메이션, 모바일 메뉴, 폼 인터랙션, 그리고 **테트리스 게임**.

## 🎮 테트리스 게임
홈페이지 내에서 즐길 수 있는 미니 게임입니다.
- **조작**: 방향키(이동, 회전), 스페이스(하드 드롭)
- **특징**: 점수 시스템, 다음 블록 예고, 속도 증가 시스템.
