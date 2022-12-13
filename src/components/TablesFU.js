import React, { Component } from 'react';
import Table from './Table';
import Form from './Form';
import store from '../store/index';
import Modal from './Modal';
import "../logout.css"


class TablesFU extends Component {
    state = {
        characters: [],
        isOpen: false
    };

    toggleModal = () => {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }

    removeCharacter = index => {
        const { characters } = this.state;
    
        this.setState({
            characters: characters.filter((character, i) => { 
                return i !== index;
            })
        });
    }

    handleSubmit = character => {
        this.setState({characters: [...this.state.characters, character]});
    }

    render() {
        const { characters } = this.state;
        
        return (
            <div className="container">
                <div id='logout'>
                    <button onClick={function(){
                    store.dispatch({type: "logOut"})
                    window.location.href= '/';
                    }}>Logout</button>
                </div>
                <div id='modal'>
                    <button onClick={this.toggleModal}>
                        Open the modal
                    </button>
                    <Modal show={this.state.isOpen}
                        onClose={this.toggleModal}>
                        Example modal dialog
                    </Modal>
                </div>
                <h3>Add new User</h3>
                <Form handleSubmit={this.handleSubmit} />
                <h4>Users</h4>
                <Table
                    characterData={characters}
                    removeCharacter={this.removeCharacter}
                />
            </div>
        );
    }
}

export default TablesFU;