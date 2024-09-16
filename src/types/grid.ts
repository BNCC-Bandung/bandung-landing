
export interface StructureProps {
    id: number;
    imageSrc: string;
    alt: string;
    className: string;
    name: string;
    position: string;
}

interface DivisionEvent {
    name: string;
    year: string;
    image: string;
    description: string;
}

interface Division {
    image: string;
    title: string;
    description: string;
    card_image: string[];
    events: DivisionEvent[];
    structure: StructureProps[];
}

export interface Divisions {
    pr: Division;
    eeo: Division;
    lnt: Division;
    rnd: Division;
    hrd: Division;
}
