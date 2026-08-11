// Cover Images (We only need to import these!)
import cagsawaCover from '/src/assets/Pictures/Adventures/Cagsawa/Cagsawa (3).jpg';
import dagatTripCover from '/src/assets/Pictures/Adventures/Dagat Trip/Dagat Trip (4).jpg';
import firstDatesCover from '/src/assets/Pictures/Adventures/First Dates/First Dates (1).jpg';
import farmplateCover from '/src/assets/Pictures/Adventures/Holy Week Farmplate/Farmplate (4).jpg';
import nyAndCmCover from '/src/assets/Pictures/Adventures/New Year & Christmas/NY and CM (6).jpeg';
import surfingCover from '/src/assets/Pictures/Adventures/Surfing/Surfing (11).jpeg';
import friendsAndFamCover from '/src/assets/Pictures/Adventures/With Friends and Fam/FnF (2).jpeg';
import foodDatesCover from '/src/assets/Pictures/Food Dates/Food (2).jpeg';
import selfiesAndShenanigansCover from '/src/assets/Pictures/Shenanigans/SS (156).jpg';

export const albums = [
    {
        id: 'first-dates',
        title: 'First Dates',
        folderName: 'Adventures/First Dates',
        coverImage: firstDatesCover,
        description: 'Where it all began... 💖',
        specialCaptions: {
            'First Dates (1).jpg': 'Our first date and first meet! 😘',
            'First Dates (2).jpg': 'Kakurtihon ko si Noli 😡',
            'First Dates (3).jpg': 'Surprise! Heheheh',
            'First Dates (4).jpg': 'First mot mot!!! 🥰',
        }
    },
    {
        id: 'dagat-trip',
        title: 'Dagat Trip',
        folderName: 'Adventures/Dagat Trip',
        coverImage: dagatTripCover,
        description: 'A trip to the sea 🌊',
        specialCaptions: {
            'Dagat Trip (3).jpg': 'Sato Domingo with speaker ni Nicole hehe',
            'Dagat Trip (10).jpeg': 'Kayaking with my love! 🛶💖',
            'Dagat Trip (6).jpg': 'Rainbow! 🌈',
            'Dagat Trip (13).jpg': 'Bonfire Night 🔥',
            'Dagat Trip (3).jpeg': 'Corals and Seashells hunting 🐚',
            'Dagat Trip (25).jpg': 'Twinning necklaces hihi 😘',
            'Dagat Trip (6).jpeg': 'Cutie baby!!! 🥰',
            'Dagat Trip (18).jpg': 'Happy!!!',
        }
    },
    {
        id: 'farmplate',
        title: 'Holy Week at Farmplate',
        folderName: 'Adventures/Holy Week Farmplate',
        coverImage: farmplateCover,
        description: 'Holy Week getaway to Farmplate 🌾',
        specialCaptions: {
            'Farmplate (5).jpg': 'Meeeh, meeeh 🐐',
        }
    },
    {
        id: 'cagsawa',
        title: 'Cagsawa',
        folderName: 'Adventures/Cagsawa',
        coverImage: cagsawaCover,
        description: 'A trip to the Cagsawa Ruins 🏛️',
        specialCaptions: {
            'Cagsawa (8).jpg': 'Nahulog an bibi sa tamaw hehe',
            'Cagsawa (1).jpg': 'Carabao 🐃',
        }
    },
    {
        id: 'ny-and-cm',
        title: 'New Year and Christmas',
        folderName: 'Adventures/New Year & Christmas',
        coverImage: nyAndCmCover,
        description: 'Celebrating the holidays together 🎄🎉',
        specialCaptions: {
           'NY and CM (9).jpeg': 'New Year 2026 with my LOML! 🥰🎆',
           'NY and CM (1).jpg': 'Christmas with my love! 🥰🎄',
        }
    },
    {
        id: 'friends-and-fam',
        title: 'With Friends and Family',
        folderName: 'Adventures/With Friends and Fam',
        coverImage: friendsAndFamCover,
        description: 'Memories with our closest people 🤗',
        specialCaptions: {
            'FnF (1).jpeg': 'Outing with Ofalsa Fam',
            'FnF (5).jpeg': 'Bday Kambal 🎂',
            'FnF (3).jpeg': 'With Liam Balmes bakla',
            'FnF (13).jpg': 'Double Date!!!',
            'FnF (26).jpg': 'First meet with Ofalsa Fam. (Kulbaan ako hehe)',
            'FnF (31).jpg': 'First meet with Mamay. (Kulbaan ulit ako hehe)',
            'FnF (17).jpg': 'Christmas in Mandirigma 🎄',
            'FnF (27).jpg': 'Karaon with Baban and John 🍲',
            'FnF (32).jpg': 'Sorsogon Date with Kambal',
            'FnF (29).jpg': 'Perya with duwa na pangit',
            'FnF (25).JPG': 'Pa camp with Tito (Kulbaan naman ako hehe)',
            'FnF (8).jpg': 'Uyag sa dagat with Bree 💖',
            'FnF (24).JPG': 'Karaon kira Liam with Matt (Paasunon ako kaka kanta)',
            'FnF (9).jpg': 'Sugba with boboy nan party party sa dance floor after',
        }
    },
    {
        id: 'surfing',
        title: 'Surfing',
        folderName: 'Adventures/Surfing',
        coverImage: surfingCover,
        description: 'Catch the waves together 🏄🏽‍♀️',
        specialCaptions: {
            'Surfing (2).jpeg': 'Sunrise Surf! ☀️',
            'Surfing (14).jpeg': 'Afternoon Surf! 🌅',
        }
    },
    {
        id: 'selfies-&-shenanigans',
        title: 'Shenanigans',
        folderName: 'Shenanigans',
        coverImage: selfiesAndShenanigansCover,
        description: 'Fun moments and silly faces 😄',
        specialCaptions: {
            'SS (3).jpg': 'Sunset in Bulan 🌅',
            'SS (2).jpeg': 'Inuman and Lablab after hihi 🤭',
            'SS (6).jpg': 'Isugon an bibi ko!!! 😘',
            'SS (15).jpg': 'Jogging pa camp and pamahaw after 🏃🏽‍',
            'SS (17).jpg': 'Cuteton an bibi ko!!! 😘',
            'SS (18).jpg': 'More kisses please!!! 🥹',
            'SS (23).jpeg': 'OJT days',
            'SS (24).jpg': 'KACUTE SUON!!! 🥰',
            'SS (25).jpg': 'KACUTE TALAGA SUON!!! 🥰',
            'SS (26).jpg': 'KACUUUUUUUTE!!! 🥰😡',
            'SS (62).jpg': 'Pogi!!! 😎',
            'SS (88).jpeg': 'Kasiraaaaam turuugan ako 🥵🥵🥵',
            'SS (66).jpeg': 'Bday ni bibi ko!!! 🥰🎂',
            'SS (67).jpg': '😘😘😘',
            'SS (79).jpg': 'Isugon yuon!!! 🥰',
            'SS (85).jpg': 'Cuddle and bebe time saiyo hehe 🥰',
            'SS (93).jpeg': 'Zoes Resort with my love! 🥰',
            'SS (94).jpeg': 'Binondo Date ⛩️',
            'SS (102).jpg': 'Kahamot daw suon 🥹🥹🥹',
            'SS (116).jpg': 'Uyunon magpa baby san baby koooo 🥹🥰',
            'SS (117).jpg': 'Pamahaw ice cream 🍦',
            'SS (125).jpg': 'First photobooth pic 🎞️📷',
            'SS (140).jpg': 'Co-worker days hehe 🤭',
            'SS (149).jpg': 'Kinalit sa paskuhan nan nag date sa Daraga hihi 😘',
            'SS (156).jpg': 'Bicoloko 🎪',
            'SS (170).JPG': 'Cuddle time sa apartment 🥰',
            'SS (183).jpg': 'Akay daw nahabol??? 🤔',
            'SS (182).jpg': 'Asikaso an nakahabol 🙄',
            'SS (184).jpg': 'Selfie with nag kagat hehe 😘',
            'SS (37).jpg': 'An ako duwa na baby damulag!!! 🥹',
            'SS (188).jpg': 'Kawawa na bata dire inpansin nan huluson pa 😭',
            'SS (105).jpg': 'An cutie pie ko na mag ina!!! 🥰',
        }
    },
     {
        id: 'food-dates',
        title: 'Food Dates',
        folderName: 'Food Dates',
        coverImage: foodDatesCover,
        description: 'Lamon! 🍽️',
        specialCaptions: {
            'Food (37).jpeg': 'Rawr! 🥩',
            'Food (56).jpg': 'Surprise! Heheheh 🥰',
            'Food (63).jpg': 'Lamon, Movie, and Lablab 🥰',
        }
    }
];