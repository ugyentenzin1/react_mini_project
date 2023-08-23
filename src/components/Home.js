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

    const [name, setName] = useState({
        name: 'Sonam Dorji',
        address: 'Chorten',
        contact: 17443788,
        occupation: 'Engineer',
        message: 'It gives very nice service'
    });

    function handleName(e) {
        setName({
            ...name,
            name: e.target.value,
        })
    }

    function handleAddress(e) {
        setName({
            ...name,
            address: e.target.value,
        })
    }

    function handleContact(e) {
        setName({
            ...name,
            contact: e.target.value,
        })
    }

    function handleOccupation(e) {
        setName({
            ...name,
            occupation: e.target.value
        })
    }

    function handleMessage(e) {
        setName({
            ...name, message: e.target.value
        })
    }
    function handleSubmit(event) {
       event.preventDefault();
       setTimeout(()=> {
           alert(`This is ${name.name} in living ${name.address} working as ${name.occupation}, ${name.contact}`)
       }, 1000)

    }


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
            <form onSubmit={handleSubmit} style={{display: 'flex', flexDirection:'column', alignItems: "end", marginTop: '16px', gap: '16px'}}>

                <h3>Feed Back</h3>
                <span> Name:  <input type="name" value={name.name} onChange={handleName}/></span>
                <span> Address: <input value={name.address} onChange={handleAddress}/></span>
                <span> Contact Number:  <input type="text" value={name.contact} onChange={handleContact}/></span>
                <span> Occupation:  <input type="text" value={name.occupation} onChange={handleOccupation}/></span>
                <span> Message : <textarea rows="4" value={name.message} onChange={handleMessage}/></span>
                <button type="submit" style={{width: '200px', padding: '8px 0'}}>Submit</button>
            </form>
        </motion.div>
    )
}

export default Home;
