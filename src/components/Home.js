import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Loader from './Loader';

const buttonVariants = {
    hover: {
        scale: 1.1,
        textShadow: "0px 0px 8px rgb(255,255,255)",
        boxShadow: "0px 0px 8px rgb(255,255,255)",
        transition: {
            duration: 0.3,
            yoyo: 5
        }
    }
}

const containerVariants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: { delay: 1.5, duration: 1.5 }
    },
    exit: {
        x: "-100vh",
        transition: { ease: 'easeInOut' }
    }
};

function CupCount({numberCup}) {
   return(
       <h1>This is the number of number: {numberCup}</h1>
   )
}

const Home = () => {

    const [showMore, setShowMore] = useState(false)

    const poem = {
        lines: [
            'I write, erase, rewrite',
            'Erase again, and then',
            'A poppy blooms.'
        ]
    };

     function handleShowMore() {
        setShowMore(!showMore)
    }

    let cups =[];

    for (let i = 0; i<=10; i++) {
        cups.push(<CupCount key={i} numberCup={i}/>)
    }

    // let outPut = [];
    //
    // poem.lines.forEach((line, i) => {
    //     outPut.push(
    //         <hr key={i + '-separator'} />
    //     );
    //     outPut.push(
    //         <p key={i + '-text'}>
    //             {line}
    //         </p>
    //     );
    // });
    //
    // console.log(outPut.shift())

    const people = [{
        id: 0,
        name: 'Creola Katherine Johnson',
        profession: 'mathematician',
    }, {
        id: 1,
        name: 'Mario José Molina-Pasquel Henríquez',
        profession: 'chemist',
    }, {
        id: 2,
        name: 'Mohammad Abdus Salam',
        profession: 'physicist',
    }, {
        name: 'Percy Lavon Julian',
        profession: 'chemist',
    }, {
        name: 'Subrahmanyan Chandrasekhar',
        profession: 'astrophysicist',
    }];

    const listChemist = people.filter(chemist => chemist.profession = 'chemist');

    return (
        <motion.div className="home container"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
        >
            <h2>Welcome to BHUTANESE DISH MAKER</h2>
            <Link to="/base">
                <motion.button
                    variants={buttonVariants}
                    whileHover="hover"
                >
                    Create Your Own Dish
                </motion.button>
            </Link>
            <Loader />
            {/* eslint-disable-next-line no-useless-concat */}
           {/*<div>{listItem.map(value => <li>{value}</li>)}</div>*/}

            {/*<p>{listChemist.map(value => <div key={value.id} style={{marginTop: '20px'}}>{value.name}</div>)}</p>*/}

            {/*<article style={{marginTop: '20px'}}>*/}
            {/*    {poem.lines.map((line, index) =>*/}
            {/*        <div key={index}>*/}
            {/*            { index > 0 && <hr/>}*/}
            {/*            <p>{line}</p>*/}
            {/*        </div>*/}
            {/*    )}*/}
            {/*</article>*/}
            {/*<button onClick={handleShowMore}>{showMore ? "hide": "show"} Details </button>*/}
            {/*{showMore && <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A amet assumenda beatae est expedita labore laborum libero nemo optio qui.</p>}*/}
        </motion.div>
    )
}

export default Home;
