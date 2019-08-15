import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodoAsync, loadDataAsync } from '../actions';
import styled from 'styled-components';

const TodoForm = styled.form`
    display: grid;
    @media (min-width: 800px) {
        background-color: #e9e9e9;
        grid-template-columns: 2fr 1fr;
    }
`;

const InputContainer = styled.div`
    background-color: #e9e9e9;
    display: grid;
    padding: 2rem;
`;

const Input = styled.input`
    border-radius: 20px;
    border: 1px solid var(--gray);
    font-size: 1rem;
    padding: 1rem;
    text-align: center;
    outline: none;
}
`;

const Button = styled.button`
    background-color: white;
    color: #6c8e00;
    border: 4px dashed var(--badass);
    border-radius: 20px;
    font-size: 1rem;
    padding: 1rem;
    margin: 2rem;
`;

const CustomButton = styled(Button)`
    background-color:black;
`;

const AddTodo = ({dispatch}) => {
    const [inputValue, setInputValue] = useState('');
    const [errors, setErrors] = useState([]);

    const handleChange = e => {
        setInputValue(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
    
        let errors = [];
        if(inputValue === ''){
            errors.push('There is nothing to add!');
        }
        
        if(errors.length === 0){
            setErrors([]);
            setInputValue('');
            dispatch(addTodoAsync(inputValue));
        }else if(errors.length > 0){
            setErrors(errors);
        }
    }

    return (<>
                <TodoForm onSubmit={handleSubmit}>
                    <InputContainer>
                        <Input type="text" name="todo" id="todo" onChange={handleChange} value={inputValue} placeholder="Walk your dog..."/>
                    </InputContainer>
                    <Button type="submit">+ Add New</Button>
                </TodoForm>
                {
                    errors.length > 0 && <ul> 
                                            { 
                                                errors.map((error, index)=><li key={`error-${index}`} >{error}</li>) 
                                            } 
                                        </ul>
                }
            </>);
}

export default connect()(AddTodo);

  