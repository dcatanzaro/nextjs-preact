import Document, {Head, Main, NextScript} from 'next/document'
import style from 'styles/index.scss'

export default class MyDocument extends Document {
    static getInitialProps({renderPage}) {
        const {html, head, errorHtml, chunks} = renderPage()
        return {html, head, errorHtml, chunks}
    }

    render() {
        let stylesheet;

        if (process.env.NODE_ENV === 'production') {
            stylesheet = <link rel="stylesheet" type="text/css" href="/static/css/style.min.css"/>;
        } else {
            stylesheet = <style dangerouslySetInnerHTML={{ __html: style }} />;
        }

        return (
            <html>
                <Head>
                    { stylesheet }
                </Head>
                <body>
                    { this.props.customValue }
                    <Main/>
                    <NextScript/>
                </body>
            </html>
        )
    }
}