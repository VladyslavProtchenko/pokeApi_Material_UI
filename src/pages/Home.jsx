import { Container, IconButton, ImageList, ImageListItem, ImageListItemBar, ListSubheader } from "@mui/material";
import { NavLink } from "react-router-dom";



const Home = () => {
    
    return (
        <Container className={box}>
            
            <ImageList className="mt-4">

                <ImageListItem key="Subheader" cols={2}>
                    <ListSubheader component="div">Welcome to pokemon world</ListSubheader>
                </ImageListItem>

                {itemData.map((item) => (
                    <NavLink to='pokemons'>
                        <ImageListItem key={item.img}>
                                {console.log(item)}
                            <img
                                src={item.img}
                                alt={item.title}
                                loading="lazy"
                            />

                            <ImageListItemBar
                                    title={item.title}
                                    subtitle={item.author}
                                    actionIcon={
                                <IconButton
                                    sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                                    aria-label={`info about ${item.title}`}
                                >
                                </IconButton>
                                }
                            />

                        </ImageListItem>  
                    </NavLink>
                ))}
            </ImageList>
        </Container>
    );
};

export default Home;

//style
const box ='flex grow'
const itemData = [
    {
        img: 'https://media.pokemoncentral.it/wiki/thumb/d/d6/Pikachu_di_Ash.png/1200px-Pikachu_di_Ash.png',
        title: 'Pikachu',
        author: '@vladyk25cm',
    },
    {
        img: 'https://sportshub.cbsistatic.com/i/2021/03/16/20a153a1-39c4-472d-b430-a9945376471d/squirtle-squad-1003226.jpg',
        title: 'squirtle',
        author: '@vladyk25cm',
    },
    {
        img: 'https://cdna.artstation.com/p/assets/images/images/028/482/912/large/joshua-dunlop-charmander-2-watermarked.jpg?1594626211',
        title: 'Charmander',
        author: '@vladyk25cm',
    },
    {
        img: 'https://archives.bulbagarden.net/media/upload/thumb/7/73/Misty_Psyduck.png/1200px-Misty_Psyduck.png',
        title: 'Psyduck',
        author: '@vladyk25cm',
    },
    {
        img: 'https://www.theclick.gg/wp-content/uploads/2021/11/Pokemon-Anime-Golduck.webp',
        title: 'Golduck',
        author: '@vladyk25cm',
    },
    {
        img: 'https://cdn.vox-cdn.com/thumbor/osQ-EchVP5I1xQlgtouC48YqzNc=/0x0:1750x941/1200x800/filters:focal(735x331:1015x611)/cdn.vox-cdn.com/uploads/chorus_image/image/53111667/Mewtwo_M01.0.0.png',
        title: 'Mewtwo',
        author: '@vladyk25cm',
    },
    {
        img: 'data:image/jpeg;base64,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',
        title: 'Moltres',
        author: '@vladyk25cm',
    },
    {
        img: 'https://thenerdstash.com/wp-content/uploads/2022/01/snorlax.jpg',
        title: 'Snorlax',
        author: '@vladyk25cm',
    },
    {
        img: 'https://www.denofgeek.com/wp-content/uploads/2021/07/Meowth.jpg?fit=1424%2C800',
        title: 'Meowth',
        author: '@vladyk25cm',
    },
    {
        img: 'https://i.kym-cdn.com/entries/icons/original/000/021/009/0b58b7125c6305d17f6447c519cb9e63.jpg',
        title: 'Exeggutor',
        author: '@vladyk25cm',
    },
];