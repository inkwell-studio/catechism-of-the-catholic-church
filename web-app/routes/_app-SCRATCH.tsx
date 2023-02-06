import { asset, Head } from '$fresh/runtime.ts';
import { AppProps } from '$fresh/server.ts';

export default function App(props: AppProps) {
    return (
        <>
            <Head>
                <link rel='stylesheet' href={asset('/app.css')} />
            </Head>
            <props.Component />
        </>
    );
}
