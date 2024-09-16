import { Divisions, StructureProps } from "@/types/grid";

export class DivisionData {
    static divisions: Divisions = {
        pr: {
            image: "/our-divisions/1.svg",
            title: "Public Relations",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultrices faucibus tellus commodo convallis. Quisque id orci mi. Nam eget pharetra felis. Nullam eget turpis id ante pulvinar malesuada id et nibh. Aliquam et velit bibendum, sagittis ex vel, aliquam nunc. In porttitor mollis arcu id vulputate. Integer eu iaculis risus. Vivamus vestibulum quis quam ut viverra. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam volutpat velit enim, non ullamcorper ex elementum vel. Aliquam erat volutpat. Mauris eu feugiat ante. Vivamus sit amet mollis odio, id euismod enim. Suspendisse imperdiet sit amet enim quis dignissim.",
            card_image: [
                "https://placehold.co/600x400?text=Public+Relations",
                "https://placehold.co/600x400?text=Public+Relations+2"
            ],
            events: [
                {
                    name: "Event 1",
                    year: "2021",
                    image: "https://placehold.co/600x400?text=Public+Relations+Event+1",
                    description: "Lorem ipsum dolor sit amet consectetur. At enim mauris commodo ultricies.",
                },
                {
                    name: "Event 2",
                    year: "2021",
                    image: "https://placehold.co/600x400?text=Public+Relations+Event+2",
                    description: "Lorem ipsum dolor sit amet consectetur. Erat sagittis semper dignissim.",
                },
                {
                    name: "Event 3",
                    year: "2022",
                    image: "https://placehold.co/600x400?text=Public+Relations+Event+3",
                    description: "New event description for Public Relations Event 3.",
                }
            ],
            structure: [
                {
                    id: 1,
                    name: "Natasya Felicia",
                    position: "PR Manager",
                    alt: "Natasya Felicia - PR Manager",
                    imageSrc: "/our-structure/pr.png",
                    className: "col-start-3 row-start-1"
                },
                {
                    id: 2,
                    name: "Puput Novita Indraini",
                    position: "PR Staff",
                    alt: "Puput Novita Indraini - PR Staff",
                    imageSrc: "/our-structure/pr-1.png",
                    className: "col-start-2 row-start-2"
                },
                {
                    id: 3,
                    name: "Callista Althea Hartanto",
                    position: "PR Staff",
                    alt: "Callista Althea Hartanto - PR Staff",
                    imageSrc: "/our-structure/pr-2.png",
                    className: "col-start-3 row-start-2"
                },
                {
                    id: 4,
                    name: "Tannia Aurelle",
                    position: "PR Staff",
                    alt: "Tannia Aurelle - PR Staff",
                    imageSrc: "/our-structure/pr-3.png",
                    className: "col-start-4 row-start-2"
                },
            ]
        },
        eeo: {
            image: "/our-divisions/2.svg",
            title: "External Event Organizer",
            description: "Nullam sed lectus eget augue vehicula volutpat ac sit amet eros. Aenean fringilla enim quis placerat accumsan. Quisque rhoncus sagittis enim id bibendum. Vestibulum dolor massa, faucibus eu semper sit amet, sagittis at risus. Vestibulum a nulla a purus rhoncus molestie quis sit amet odio. Sed ultricies a enim at egestas. Nullam ullamcorper faucibus purus euismod tempus. Proin eu facilisis ante, et elementum risus. Maecenas id tincidunt lectus, non interdum nulla. Morbi pulvinar sem in tellus dictum venenatis. Sed et sem turpis. Nullam imperdiet, ipsum ut tincidunt dapibus, orci purus molestie tellus, eu commodo odio dui nec dolor. Donec mattis lacinia massa, nec tristique odio venenatis eget. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas efficitur augue id lacus lacinia, mollis aliquam erat dapibus.",
            card_image: [
                "https://placehold.co/600x400?text=External+Event+Organizer",
                "https://placehold.co/600x400?text=External+Event+Organizer+2"
            ],
            events: [
                {
                    name: "Event A",
                    year: "2020",
                    image: "https://placehold.co/600x400?text=External+Event+Organizer+Event+A",
                    description: "Amet rutrum lorem ornare eget nulla eleifend nulla mus.",
                },
                {
                    name: "Event B",
                    year: "2020",
                    image: "https://placehold.co/600x400?text=External+Event+Organizer+Event+B",
                    description: "Dis enim quis auctor volutpat volutpat convallis.",
                },
                {
                    name: "Event C",
                    year: "2022",
                    image: "https://placehold.co/600x400?text=External+Event+Organizer+Event+C",
                    description: "New event description for External Event Organizer Event C.",
                }
            ],
            structure: [
                {
                    id: 1,
                    name: "Cynthia Shabrina",
                    position: "EEO Manager",
                    alt: "Cynthia Shabrina - EEO Manager",
                    imageSrc: "/our-structure/eeo.png",
                    className: "col-start-3 row-start-1"
                },
                {
                    id: 2,
                    name: "Florenze Albertine Tatuwey",
                    position: "EEO Staff",
                    alt: "Florenze Albertine Tatuwey - EEO Staff",
                    imageSrc: "/our-structure/eeo-1.png",
                    className: "col-start-2 row-start-2"
                },
                {
                    id: 3,
                    name: "Florenze Albertine Tatuwey",
                    position: "EEO Staff",
                    alt: "Florenze Albertine Tatuwey - EEO Staff",
                    imageSrc: "/our-structure/eeo-2.png",
                    className: "col-start-3 row-start-2"
                },
                {
                    id: 4,
                    name: "Sharon Faye Nathaly",
                    position: "EEO Staff",
                    alt: "Sharon Faye Nathaly - EEO Staff",
                    imageSrc: "/our-structure/eeo-3.png",
                    className: "col-start-4 row-start-2"
                },
            ]
        },
        lnt: {
            image: "/our-divisions/3.svg",
            title: "Learning and Training",
            description: "Aenean id enim dictum, euismod magna quis, tincidunt diam. Integer non eros dui. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque suscipit viverra mi ut condimentum. Sed ac neque tincidunt, placerat est sed, tincidunt mauris. Donec venenatis porta arcu, vitae accumsan neque sollicitudin nec. Vestibulum sit amet mi a elit efficitur viverra. Duis pellentesque justo vitae elit commodo fringilla. Fusce nec tincidunt lacus. Sed blandit convallis sem eget sodales. Aliquam at purus vulputate, auctor est ac, volutpat est. Fusce tempor ac nisi ut malesuada. Morbi lobortis commodo magna, nec eleifend odio fringilla eget. Vivamus luctus nulla orci.",
            card_image: [
                "https://placehold.co/600x400?text=Learning+and+Training",
                "https://placehold.co/600x400?text=Learning+and+Training+2"
            ],
            events: [
                {
                    name: "Event A",
                    year: "2020",
                    image: "https://placehold.co/600x400?text=Learning+and+Training+Event+A",
                    description: "Amet rutrum lorem ornare eget nulla eleifend nulla mus.",
                },
                {
                    name: "Event B",
                    year: "2020",
                    image: "https://placehold.co/600x400?text=Learning+and+Training+Event+B",
                    description: "Dis enim quis auctor volutpat volutpat convallis.",
                },
                {
                    name: "Event C",
                    year: "2022",
                    image: "https://placehold.co/600x400?text=Learning+and+Training+Event+C",
                    description: "New event description for Learning and Training Event C.",
                }
            ],
            structure: [
                {
                    id: 1,
                    name: "Maleo Farrel",
                    position: "Lnt Manager",
                    alt: "Maleo Farrel - Lnt Manager",
                    imageSrc: "/our-structure/lnt.png",
                    className: "col-start-3 row-start-1"
                },
                {
                    id: 2,
                    name: "William Susanto Lukman",
                    position: "Lnt Staff",
                    alt: "William Susanto Lukman - Lnt Staff",
                    imageSrc: "/our-structure/lnt-1.png",
                    className: "col-start-1 row-start-2"
                },
                {
                    id: 3,
                    name: "Richard Arthur Sugihanjoyo",
                    position: "Lnt Staff",
                    alt: "Richard Arthur Sugihanjoyo - Lnt Staff",
                    imageSrc: "/our-structure/lnt-2.png",
                    className: "col-start-2 row-start-2"
                },
                {
                    id: 4,
                    name: "Samuel Benediktus Meliala",
                    position: "Lnt Staff",
                    alt: "Samuel Benediktus Meliala - Lnt Staff",
                    imageSrc: "/our-structure/lnt-3.png",
                    className: "col-start-3 row-start-2"
                },
                {
                    id: 5,
                    name: "Ezra Arya Wijaya",
                    position: "Lnt Staff",
                    alt: "Ezra Arya Wijaya - Lnt Staff",
                    imageSrc: "/our-structure/lnt-4.png",
                    className: "col-start-4 row-start-2"
                },
                {
                    id: 6,
                    name: "Gregorius Cahyadi",
                    position: "Lnt Staff",
                    alt: "Gregorius Cahyadi - Lnt Staff",
                    imageSrc: "/our-structure/lnt-5.png",
                    className: "col-start-5 row-start-2"
                },
            ]
        },
        rnd: {
            image: "/our-divisions/4.svg",
            title: "Research and Development",
            description: "Phasellus sed ullamcorper ex. Suspendisse potenti. Nulla ut metus eget felis lobortis ornare. Proin in velit aliquam, facilisis velit sed, lobortis massa. Vivamus pulvinar est in lectus tincidunt, eu pretium ipsum interdum. Nullam accumsan vulputate urna, non pretium orci pretium ac. Pellentesque et mattis erat. Cras tincidunt pellentesque risus et ultrices. Morbi augue ligula, tempor vitae erat ut, vehicula iaculis orci. Integer est sem, vestibulum nec facilisis id, porttitor efficitur orci. Integer efficitur suscipit imperdiet. Vestibulum ac elit vel ligula efficitur gravida. Phasellus dignissim pulvinar enim, at ultrices lorem vulputate ut. Etiam eget erat nec tortor consectetur iaculis pellentesque eu ligula. Vestibulum vitae nunc eget leo finibus porttitor. Nunc ut sollicitudin lacus.",
            card_image: [
                "https://placehold.co/600x400?text=Research+and+Development",
                "https://placehold.co/600x400?text=Research+and+Development+2"
            ],
            events: [
                {
                    name: "Event A",
                    year: "2020",
                    image: "https://placehold.co/600x400?text=Research+and+Development+Event+A",
                    description: "Amet rutrum lorem ornare eget nulla eleifend nulla mus.",
                },
                {
                    name: "Event B",
                    year: "2020",
                    image: "https://placehold.co/600x400?text=Research+and+Development+Event+B",
                    description: "Dis enim quis auctor volutpat volutpat convallis.",
                },
                {
                    name: "Event C",
                    year: "2022",
                    image: "https://placehold.co/600x400?text=Research+and+Development+Event+C",
                    description: "New event description for Research and Development Event C.",
                }
            ],
            structure: [
                {
                    id: 1,
                    name: "Reynard Hansel",
                    position: "RnD Manager",
                    alt: "Reynard Hansel - RnD Manager",
                    imageSrc: "/our-structure/rnd.png",
                    className: "col-start-3 row-start-1"
                },
                {
                    id: 2,
                    name: "Ihsaan Hardyanto",
                    position: "RnD Staff",
                    alt: "Ihsaan Hardyanto - RnD Staff",
                    imageSrc: "/our-structure/rnd-1.png",
                    className: "col-start-1 row-start-2"
                },
                {
                    id: 3,
                    name: "Reynaldy Marchell Bagas Adji",
                    position: "RnD Staff",
                    alt: "Reynaldy Marchell Bagas Adji - RnD Staff",
                    imageSrc: "/our-structure/rnd-2.png",
                    className: "col-start-2 row-start-2"
                },
                {
                    id: 4,
                    name: "Reynaldo Marchell Bagas Adji",
                    position: "RnD Staff",
                    alt: "Reynaldo Marchell Bagas Adji - RnD Staff",
                    imageSrc: "/our-structure/rnd-3.png",
                    className: "col-start-3 row-start-2"
                },
                {
                    id: 5,
                    name: "Rakha Naufal Azizi",
                    position: "RnD Staff",
                    alt: "Rakha Naufal Azizi - RnD Staff",
                    imageSrc: "/our-structure/rnd-4.png",
                    className: "col-start-4 row-start-2"
                },
                {
                    id: 6,
                    name: "Stanislaus Kanaya Jerry Febriano",
                    position: "RnD Staff",
                    alt: "Stanislaus Kanaya Jerry Febriano - RnD Staff",
                    imageSrc: "/our-structure/rnd-5.png",
                    className: "col-start-5 row-start-2"
                },
            ]
        },
        hrd: {
            image: "/our-divisions/5.svg",
            title: "Human Resources Development",
            description: "Ut egestas eros odio, ut accumsan est porta at. Maecenas sodales, eros mollis aliquam facilisis, quam risus faucibus tellus, sed commodo lacus magna vitae ipsum. Integer porta ornare mauris eu condimentum. Fusce viverra risus eu semper ornare. Donec sodales est sodales diam imperdiet gravida. Vestibulum pellentesque est vitae ante commodo imperdiet. Aenean consectetur odio et ante dictum ultrices. Duis volutpat accumsan odio, at efficitur nisi porta ac. Etiam mattis gravida magna, nec rhoncus augue feugiat ac. Morbi mattis sapien nec nulla vulputate dapibus. Nam augue mi, vehicula sit amet ullamcorper eget, convallis eu nunc. Mauris sed nunc ultricies, sagittis enim vitae, vehicula ex. Phasellus porttitor pretium nisl, id commodo sapien blandit et. Nulla ornare lacus in ultrices sodales.",
            card_image: [
                "https://placehold.co/600x400?text=Human+Resources+Development",
                "https://placehold.co/600x400?text=Human+Resources+Development+2"
            ],
            events: [
                {
                    name: "Event A",
                    year: "2020",
                    image: "https://placehold.co/600x400?text=Human+Resources+Development+Event+A",
                    description: "Amet rutrum lorem ornare eget nulla eleifend nulla mus.",
                },
                {
                    name: "Event B",
                    year: "2020",
                    image: "https://placehold.co/600x400?text=Human+Resources+Development+Event+B",
                    description: "Dis enim quis auctor volutpat volutpat convallis.",
                },
                {
                    name: "Event C",
                    year: "2022",
                    image: "https://placehold.co/600x400?text=Human+Resources+Development+Event+C",
                    description: "New event description for Human Resources Development Event C.",
                }
            ],
            structure: [
                {
                    id: 1,
                    name: "Rafael Marvin Sowarahardja",
                    position: "HRD Manager",
                    alt: "Rafael Marvin Sowarahardja - HRD Manager",
                    imageSrc: "/our-structure/hrd.png",
                    className: "col-start-3 row-start-1"
                },
                {
                    id: 2,
                    name: "Vanessa Audreylia",
                    position: "HRD Staff",
                    alt: "Vanessa Audreylia - HRD Staff",
                    imageSrc: "/our-structure/hrd-1.png",
                    className: "col-start-3 row-start-2"
                },
            ]
        },
    };

    static getStructure() {
        return [
            {
                id: 1,
                imageSrc: "/our-structure/ceo.png",
                alt: "Mission",
                className: "col-start-3 row-start-1 ",
                name: "Theofilus Adhi Septian",
                position: "Chief Executive Officer",
            },
            {
                id: 2,
                imageSrc: "/our-structure/cfo.png",
                alt: "Mission",
                className: "col-start-4 row-start-2",
                name: "Richard Rafelson",
                position: "Chief Financial Officer",
            },
            {
                id: 3,
                imageSrc: "/our-structure/pr.png",
                alt: "Mission",
                className: "col-start-1 row-start-3",
                name: "Natasya Felicia",
                position: "PR Manager",
            },
            {
                id: 4,
                imageSrc: "/our-structure/eeo.png",
                alt: "Mission",
                className: "col-start-2 row-start-3",
                name: "Cynthia Shabrina",
                position: "EEO Manager",
            },
            {
                id: 5,
                imageSrc: "/our-structure/lnt.png",
                alt: "Mission",
                className: "col-start-3 row-start-3",
                name: "Maleo Farrel",
                position: "LnT Manager",
            },
            {
                id: 6,
                imageSrc: "/our-structure/rnd.png",
                alt: "Mission",
                className: "col-start-4 row-start-3",
                name: "Reynard Hansel",
                position: "RnD Manager",
            },
            {
                id: 7,
                imageSrc: "/our-structure/hrd.png",
                alt: "Mission",
                className: "col-start-5 row-start-3",
                name: "Rafael Marvin Sowarahardja",
                position: "HRD Manager",
            },
        ] satisfies StructureProps[];
    }

    static get(id: keyof typeof this.divisions) {
        return this.divisions[id] || null;
    }
}

export type DivisionKeys = keyof typeof DivisionData.divisions;
