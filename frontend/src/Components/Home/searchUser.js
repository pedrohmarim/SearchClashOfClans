import React, { useState } from 'react';
import api from '../../api';

import BackImg from '../../assets/8b75dba2224ce2b91e0269f699d0d22f.jpg';
import Trophy from '../../assets/winner.png';
import EXPicon from '../../assets/exp.png';

import Swal from 'sweetalert2';

import { TextField, createTheme, ThemeProvider, LinearProgress, makeStyles } from '@material-ui/core';
import { FiSearch, FiTag } from 'react-icons/fi';

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
            res.data ? setUserData(res.data) : userNotFound()
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

    const userDataContainer = () => {
        return <div id="userDataContainer">
            <div className="containerUser">
                <h1 className="">
                    <div className="d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center justify-content-center">
                            <img src={userData.league.iconUrls.small} alt="LeagueIcon" height='80' width='80' style={{ marginRight: 5 }} />
                            <div className="d-flex flex-column justify-content-center">
                                {userData.name}
                                <div className="d-flex align-items-center justify-content-between">
                                    <div className="d-flex align-items-center justify-content-between">
                                        <img src={Trophy} alt="LeagueIcon" height='30' />
                                        <small>{userData.trophies}</small>
                                    </div>
                                    <p id="expLvl" className="d-flex aling-items-center">
                                        <img src={EXPicon} alt="EXPIcon" height="25" width="20" style={{ marginRight: 5 }} />
                                        {userData.expLevel}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div>
                            ppppp
                        </div>
                        <div>
                            ppppp
                        </div>
                    </div>
                </h1>
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