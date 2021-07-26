import React, { useState } from 'react';
import api from '../../api';

import BackImg from '../../assets/8b75dba2224ce2b91e0269f699d0d22f.jpg';
import Trophy from '../../assets/winner.png';
import EXPicon from '../../assets/exp.png';

import Swal from 'sweetalert2';

import townhall_1 from '../../assets/Town_Hall1.png'
import townhall_2 from '../../assets/Town_Hall2.png'
import townhall_3 from '../../assets/Town_Hall3.png'
import townhall_4 from '../../assets/Town_Hall4.png'
import townhall_5 from '../../assets/Town_Hall5.png'
import townhall_6 from '../../assets/Town_Hall6.png'
import townhall_7 from '../../assets/Town_Hall7.png'
import townhall_8 from '../../assets/Town_Hall8.png'
import townhall_9 from '../../assets/Town_Hall9.png'
import townhall_10 from '../../assets/Town_Hall10.png'
import townhall_11 from '../../assets/Town_Hall11.png'
import townhall_12 from '../../assets/Town_Hall12-1.png'
import townhall_13 from '../../assets/Town_Hall13-1.png'
import townhall_14 from '../../assets/Town_Hall14-1.png'

import builderTownhall_1 from '../../assets/builderTownHall1.png'
import builderTownhall_2 from '../../assets/builderTownHall2.png'
import builderTownhall_3 from '../../assets/builderTownHall3.png'
import builderTownhall_4 from '../../assets/builderTownHall4.png'
import builderTownhall_5 from '../../assets/builderTownHall5.png'
import builderTownhall_6 from '../../assets/builderTownHall6.png'
import builderTownhall_7 from '../../assets/builderTownHall7.png'
import builderTownhall_8 from '../../assets/builderTownHall8.png'
import builderTownhall_9 from '../../assets/builderTownHall9.png'

import { TextField, createTheme, ThemeProvider, LinearProgress, makeStyles } from '@material-ui/core';
import { FiSearch, FiTag, FiArrowUp, FiArrowDown } from 'react-icons/fi';
import { FaStar } from 'react-icons/fa';

const FormSearchUser = () => {

    const [userTag, setUserTag] = useState({ userTag: '' });
    const [userData, setUserData] = useState(false);
    const [loadbar, setLoadBar] = useState(false);

    function handleFormChange(e) {
        const { name, value } = e.target;
        setUserTag({ ...userTag, [name]: value });
    }

    function userNotFound() {
        setLoadBar(false)
        Swal.fire({
            icon: 'error',
            title: 'Erro!',
            text: 'Usuário inválido',
        })
    }

    function handleSubmitForm(e) {
        e.preventDefault()
        setLoadBar(true)

        var hash = encodeURIComponent(userTag.userTag.trim());

        api.get('/searchUser', {
            headers: {
                hash
            }
        }).then(res => {
            if (res.data) {

                setUserData(res.data)
                var userContainer = document.getElementById("userDataContainer");
                setTimeout(() => {
                    userContainer.scrollIntoView();
                }, 350);

            } else {
                userNotFound()
            }
        })
    }

    const colorInputs = createTheme({
        palette: {
            primary: {
                main: '#FFF',
            },
        },
    });

    const useStyles = makeStyles((theme) => ({
        root: {
            width: '100%',
            '& > * + *': {
                marginTop: theme.spacing(2),
            },
        },
    }));

    const classes = useStyles();

    const LoadLine = () => {

        if (userData) {
            return <></>
        }

        do {
            return <div className={classes.root} style={{ marginTop: 20 }}>
                <LinearProgress color="secondary" />
            </div>
        } while (!userData)
    }

    function switchTownHall() {
        switch (userData.townHallLevel) {
            case 1:
                return <img src={townhall_1} alt="TownHall1" height="35" />
            case 2:
                return <img src={townhall_2} alt="TownHall2" height="35" />
            case 3:
                return <img src={townhall_3} alt="TownHall3" height="35" />
            case 4:
                return <img src={townhall_4} alt="TownHall4" height="35" />
            case 5:
                return <img src={townhall_5} alt="TownHall5" height="35" />
            case 6:
                return <img src={townhall_6} alt="TownHall6" height="35" />
            case 7:
                return <img src={townhall_7} alt="TownHall7" height="35" />
            case 8:
                return <img src={townhall_8} alt="TownHall8" height="35" />
            case 9:
                return <img src={townhall_9} alt="TownHall9" height="35" />
            case 10:
                return <img src={townhall_10} alt="TownHall10" height="35" />
            case 11:
                return <img src={townhall_11} alt="TownHall11" height="35" />
            case 12:
                return <img src={townhall_12} alt="TownHall12" height="35" />
            case 13:
                return <img src={townhall_13} alt="TownHall13" height="35" />
            case 14:
                return <img src={townhall_14} alt="TownHall14" height="35" />
            default:
                break;
        }
    }

    function switchBuilderTownHall() {
        switch (userData.builderHallLevel) {
            case 1:
                return <img src={builderTownhall_1} alt="BuilderTownHall1" height="35" />
            case 2:
                return <img src={builderTownhall_2} alt="BuilderTownHall2" height="35" />
            case 3:
                return <img src={builderTownhall_3} alt="BuilderTownHall3" height="35" />
            case 4:
                return <img src={builderTownhall_4} alt="BuilderTownHall4" height="35" />
            case 5:
                return <img src={builderTownhall_5} alt="BuilderTownHall5" height="35" />
            case 6:
                return <img src={builderTownhall_6} alt="BuilderTownHall6" height="35" />
            case 7:
                return <img src={builderTownhall_7} alt="BuilderTownHall7" height="35" />
            case 8:
                return <img src={builderTownhall_8} alt="BuilderTownHall8" height="35" />
            case 9:
                return <img src={builderTownhall_9} alt="BuilderTownHall9" height="35" />
            default:
                break;
        }
    }

    const userDataContainer = () => {
        return <div id="userDataContainer">
            <div className="containerUser">
                <section>
                    <div className="d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center justify-content-center">

                            <div id="trophiesContainer" className="d-flex flex-column align-items-center" style={{ marginRight: 10 }}>
                                <img src={userData.league.iconUrls.small} alt="LeagueIcon" height='80' width='80' />
                                <div className="d-flex align-items-center justify-content-between">
                                    <strong>{userData.trophies}</strong>
                                </div>
                            </div>

                            <div className="d-flex flex-column justify-content-center">
                                <h1>{userData.name}</h1>

                                <span style={{ marginBottom: 15, fontStyle: 'italic' }}>{userData.tag}</span>

                                <div className="d-flex align-items-center justify-content-between">
                                    <div className="d-flex align-items-center justify-content-between">
                                        <img src={Trophy} alt="LeagueIcon" height='30' />
                                        <small>{userData.versusTrophies}</small>
                                    </div>
                                    <p id="expLvl" className="d-flex align-items-center">
                                        <img src={EXPicon} alt="EXPIcon" height="25" width="20" style={{ marginRight: 5 }} />
                                        {userData.expLevel}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="d-flex flex-wrap justify-content-end">
                            <div className="item--user d-flex justify-content-center align-items-center" style={{ width: 135 }}>
                                <span>CV {userData.townHallLevel}</span>
                                {switchTownHall()}
                            </div>
                            <div className="item--user d-flex justify-content-center align-items-center" style={{ width: 135 }}>
                                <span>BH {userData.builderHallLevel}</span>
                                {switchBuilderTownHall()}
                            </div>
                            <div className="item--user d-flex justify-content-center align-items-center">
                                <img src={userData.clan.badgeUrls.large} alt="UserClan" height="35" style={{ marginRight: 5 }} />
                                <span>{userData.clan.name}</span>
                            </div>
                            <div className="item--user d-flex justify-content-center align-items-center" style={{ width: 135 }}>
                                <FaStar color="#efc501" size={30} style={{ marginRight: 5 }} />
                                <span>{userData.warStars}</span>
                            </div>
                            <div className="item--user d-flex justify-content-center align-items-center">
                                <FiArrowUp color="green" size={30} style={{ marginRight: 5 }} />
                                <span>{userData.donations}</span>
                            </div>
                            <div className="item--user d-flex justify-content-center align-items-center">
                                <FiArrowDown color="red" size={30} style={{ marginRight: 5 }} />
                                <span>{userData.donationsReceived}</span>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    }

    return (
        <div>
            <img src={BackImg} alt="Background" id="backgroundForm" />
            <ThemeProvider theme={colorInputs}>
                <div className="centered">
                    <form onSubmit={handleSubmitForm} className="d-flex flex-column align-items-center" id="searchUserForm">

                        <h1 className="d-flex align-items-center text-left w-100">
                            <FiSearch size={40} style={{ marginRight: 5 }} />
                            Pesquisar jogador
                        </h1>

                        <TextField
                            autoComplete="off"
                            color="primary"
                            required
                            placeholder="Digite aqui..."
                            margin="normal"
                            label={(<div><FiTag style={{ marginRight: 5 }} />Tag de jogador</div>
                            )}
                            fullWidth
                            type="text"
                            name="userTag"
                            value={userTag.userTag}
                            onChange={handleFormChange}
                        />
                        <span className="text-left w-100">Ex.: #9Q9CUP9RJ</span>

                        <button type="submit" className="d-flex align-items-center justify-content-center">
                            Search
                        </button>

                        {loadbar ? LoadLine() : <></>}
                    </form>
                </div>

                {userData ? userDataContainer() : <></>}

            </ThemeProvider>
        </div>
    )
}

export default FormSearchUser;