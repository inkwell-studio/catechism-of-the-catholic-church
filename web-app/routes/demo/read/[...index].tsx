import Content from '../../../islands/content.tsx';
import { ActionBar } from '../../../components/action-bar.tsx';

export default function Home() {
    return (
        <div class='h-screen flex flex-col'>
            <div class='overflow-y-scroll flex justify-center bg-gray-300'>
                <div class='relative max-w-xl h-[min-content] pl-4 pr-8 bg-gray-200'>
                    <Content></Content>
                </div>
            </div>
            <div class='bg-green-500'>
                <ActionBar></ActionBar>
            </div>
        </div>
    );
}
