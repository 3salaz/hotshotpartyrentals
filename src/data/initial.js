import featuredHeader from '../assets/img/featuredHeader.png';
import cardImg1 from '../assets/img/card1.png';
import cardImg2 from '../assets/img/card2.png';
import cardImg3 from '../assets/img/card3.png';
import cardImg4 from '../assets/img/card4.png';

export let siteConfig = {
    info : {
        socialMedia :{
            instagram: "https://www.instagram.com/hotshotpartyrentals/",
            facebook : "https://www.facebook.com",
            yelp: "https://www.yelp.com",
        }
    },
    home: {
        sections: {
            header: {
                featuredHeaderImg: featuredHeader,
                headerText: 'HotShot PartyRentals',
                headerSubText: 'Thank you for visiting Hot Shot party rentals. We value your interest in our company and hope that we will be able to assist in planning your next event.',
                links: {
                    buttonLink: {
                        text: "Our Packages",
                        link: "/packages"
                    },
                    simpleLink: {
                        text: "Download Waiver",
                        link: "https://form.jotform.com/hotshotpartyrentals/waiver-and-release-of-liability-wai"
                    }  
                },
                clientHighlight: [
                    {
                        name: "uideck",
                        logoImg: "https://cdn.tailgrids.com/2.0/image/assets/images/brands/uideck.svg",
                        id:1
                    },
                    {
                        name: "graygrids",
                        logoImg: "https://cdn.tailgrids.com/2.0/image/assets/images/brands/graygrids.svg",
                        id:2
                    },
                    {
                        name: "ayroui",
                        logoImg: "https://cdn.tailgrids.com/2.0/image/assets/images/brands/ayroui.svg",
                        id:3
                    }
                ]
            },
            imgCarousel: [
                {
                    name: "img-1",
                    link: cardImg1,
                    id: "1"
                },
                {
                    name: "img-2",
                    link: cardImg2,
                    id: "2"
                },
                {
                    name: "img-3",
                    link: cardImg3,
                    id: "3"
                },
                {
                    name: "img-4",
                    link: cardImg4,
                    id: "4"
                },
            ],
            pricing: {
                title: "Check them out below",
                subTitle: "",
                packages: [
                    {
                        id:1,
                        name: "Marksman",
                        price: "$375",
                        options: [ 
                            "Recommended for ages 3 and up",
                            "45 minutes of play time",
                            "Up to 10 participants",
                            "Foam Ball Blasters | Air Pressured",
                            "Safety equipment",
                            "Barriers to hide in and around",
                            "Experienced party host",
                            "Foam Balls"
                        ]  
                    },
                    {
                        id:2,
                        name: "Sharpshooter",
                        price: "$400",
                        options: [
                            "Recommended for ages 8 and up",
                            "1 hour of play time",
                            "Up to 10 participants",
                            "Gel Blaster Pistols",
                            "Safety equipment",
                            "Barriers to hide in and around",
                            "Experienced party host",
                            "Gel Blaster Bullets"
                        ]
                    },
                    {
                        id: 3,
                        name: "Expert",
                        price: "$425",
                        options: [
                            "Recommended for ages 10 and up",
                            "1 hour of play time",
                            "Up to 10 participants",
                            "Gel Blaster Rifles",
                            "Safety equipment",
                            "Barriers to hide in and around",
                            "Experienced party host",
                            "Gel Blaster Bullets"
                        ]
                    }
                ]
            },
            social: {
                card1: {
                    img: "",
                    title: "Leave Us A Yelp Review",
                    text: "some text goes here for yelp reviews",
                    links: {
                        url: "https://www.yelp.com/writeareview/biz/3NG4Bs3L-fa75JOaFrllsA?return_url=%2Fbiz%2F3NG4Bs3L-fa75JOaFrllsA&review_origin=biz-details-war-button",
                        text: "Review"
                    }
                },
                card2: {
                    img: "",
                    title: "Leave Us A Yelp Review",
                    text: "some text goes here for yelp reviews",
                    links: {
                        url: "https://www.yelp.com/writeareview/biz/3NG4Bs3L-fa75JOaFrllsA?return_url=%2Fbiz%2F3NG4Bs3L-fa75JOaFrllsA&review_origin=biz-details-war-button",
                        text: "Review"
                    }
                },
            }

        }
    },
    gallery: {

    },
    faq: {

    },
    packages: {
        
    }
}; 