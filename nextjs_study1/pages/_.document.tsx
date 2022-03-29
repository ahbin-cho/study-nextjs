import Document, { DocumentContext, DocumentInitialProps } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document{
    //★ Next.js에서 styled-component를 사용하면 CSS 로딩이 늦게 되어 깜빡이는 현상 발생 → HTML은 SSR로 미리 렌더링 시키지만 styled-component의 스타일들은 사용자가 접속 시 변환되기 때문

    // 따라서 _document.tsx 파일에 css를 미리 적용시켜야 한다.

    // SSR 에서도 styled-component를 사용하도록 설정
    // _document.tsx는 pages 폴더 내부에 존재하는 모든 페이지에 global한 설정 값을 줄 수 있는 파일이다.
    
    static async getInitialProps( ctx : DocumentContext ){
        // 스타일 구성 요소의 ServerStyleSheet 클래스를 인스턴스화 한다
        const sheet = new ServerStyleSheet();
        const originalRenderPage = ctx.renderPage;

        try{
            // renderPage : 이 메서드에 연결하여 초기 페이지 로드 시 서버 측 자식 구성 요소의 스타일 분석
            // renderPage를 커스텀 하는 이유는 서버 측 렌더링에서 제대로 작동하기 위해 애플리케이션을 래핑해야 하는 css-in-js 라이브러리와 함께 사용하기 위한 것
            ctx.renderPage = () => 
                originalRenderPage({ enhanceApp: App => props => sheet.collectStyles( <App {...props} /> ), });

            const initialProps = await Document.getInitialProps( ctx );
            return {
                ...initialProps,
                styles : (
                    <>
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                    </>
                ),
            };
        }finally{
            sheet.seal();
        }
    }
}