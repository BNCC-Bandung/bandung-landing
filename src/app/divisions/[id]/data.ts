export class DivisionData {
    static divisions = {
        pr: {
            image: "/our-divisions/1.svg",
            title: "Public Relations",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
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
        },
        eeo: {
            image: "/our-divisions/2.svg",
            title: "External Event Organizer",
            description: "Nullam sed lectus eget augue vehicula volutpat...",
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
        },
        lnt: {
            image: "/our-divisions/2.svg",
            title: "Learning and Training",
            description: "Aenean id enim dictum, euismod magna quis...",
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
        },
        rnd: {
            image: "/our-divisions/2.svg",
            title: "Research and Development",
            description: "Phasellus sed ullamcorper ex. Suspendisse potenti...",
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
        },
        hrd: {
            image: "/our-divisions/2.svg",
            title: "Human Resources Development",
            description: "Ut egestas eros odio, ut accumsan est porta at...",
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
        },
    };

    static get(id: keyof typeof this.divisions) {
        return this.divisions[id] || null;
    }
}

export type DivisionKeys = keyof typeof DivisionData.divisions;
