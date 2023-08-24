import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const containerVariants = {
    hidden: {
        opacity: 0,
        x: '100vw'
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: { type: 'spring', delay: 0.5 }
    },
    exit: {
        x: "-100vh",
        transition: { ease: 'easeInOut' }
    }
};

const nextVariants = {
    hidden: {
        x: '-100vw'
    },
    visible: {
        x: 0,
        transition: { type: 'spring', stiffness: 120 }
    }
}

const buttonVariants = {
    hover: {
        scale: 1.1,
        textShadow: "0px 0px 8px rgb(255,255,255)",
        boxShadow: "0px 0px 8px rgb(255,255,255)",
        transition: {
            duration: 0.3,
            yoyo: Infinity
        }
    }
}

const Base = ({ addBase, pizza }) => {
    const bases = ['Potato Curry', 'Ema Datsi', 'Shakam PA', 'Pork Curry', 'Beef Pa', 'Chicken Curry'];

    const initialState = [
        {id: 1, name: 'Ugyen', age: 24, seen: true},
        {id: 2, name: 'Tenzin', age: 22, seen: false},
        {id: 3, name: 'Dhew Lala ', age: 21, seen: false},
        {id: 4, name: 'Humty dumty', age: 26, seen: true}
    ];

    const [list, getList] = useState(initialState);

    function handleName(e) {
        getList(val => val.map(
            value => value.name = e
        ))
    }

    const dataFilter = list.filter(value => {
        return value.id === 1;
    });

    function handleValueName(e) {

        const updatedList = list.map(item => {
            if (item.id === 1) {
                return { ...item, name: e.target.value };
            }
            return item;
        });
        getList(updatedList)
    }

    return (
        <motion.div className="base container"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
        >
            <h3>Step 1: Choose Your </h3>
            <ul>
                {bases.map(base => {
                    let spanClass = pizza.base === base ? 'active' : '';
                    return (
                        <>
                        <motion.li key={base} onClick={() => addBase(base)}
                                   whileHover={{ scale: 1.3, originX: 0, color: '#f8e112' }}
                                   transition={{ type: 'spring', stiffness: 300 }}
                        >
                            <span className={spanClass}>{ base.toUpperCase() }</span>
                        </motion.li>
                        </>

                    )
                })}
            </ul>

            <p style={{marginTop: "16px"}}>{dataFilter.map(value => value.name)}</p>

            <h3>Own Choice</h3>

            <input placeholder="name" value={dataFilter.map(value => value.name)} onChange={handleValueName}/>

            {pizza.base && (
                <motion.div className="next"
                            variants={nextVariants}
                >
                    <Link to="/toppings">
                        <motion.button
                            variants={buttonVariants}
                            whileHover="hover"
                        >Next
                        </motion.button>
                    </Link>
                </motion.div>
            )}
        </motion.div>
    )
}

export default Base;
