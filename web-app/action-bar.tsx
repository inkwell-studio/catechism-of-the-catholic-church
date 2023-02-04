import Search from '../islands/search.tsx';
import Menu from '../islands/menu.tsx';
import TrailHierarchical from '../islands/trail-hierarchical.tsx';
import TrailHistorical from '../islands/trail-historical.tsx';

export function ActionBar() {
    return (
        <div class='bg-red-300'>
            <TrailHierarchical></TrailHierarchical>
            <TrailHistorical></TrailHistorical>
            <Menu></Menu>
            <Search></Search>
        </div>
    );
}
