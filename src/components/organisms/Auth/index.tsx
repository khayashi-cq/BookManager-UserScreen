import React from 'react';
import TextField from '../../atoms/TextField/index';
import Button from '../../atoms/Button/index';
import { Icon } from '../../atoms/Icon/index';
import styled from 'styled-components';

type Props = {
    authType: AuthType
};

export type AuthType = 'login' | 'signUp';

const returnAuthType = (authType: AuthType) => {
    switch (authType) {
        case 'login':
            return 'ログイン';
            break;
        case 'signUp':
            return 'サインアップ';
            break;
    }
};

const Container = styled.div`
    display: flex;
    flex-flow: column;
    align-items: center;
    background-color: green;
`;

export default function Auth(props: Props) {
    const { authType } = props;

    const renderComponentByAuthType = (authType: AuthType) => {
        switch (authType) {
            case 'login':
                return (
                    <>
                        <Button useCase={'auth'}>{returnAuthType(authType)}</Button>
                        <Button useCase={'auth'}>{'サインアップへ'}</Button>
                    </>
                );
                break;
            case 'signUp':
                return (
                    <>
                        <TextField inputType='confirmPassword'></TextField>
                        <Button useCase={'auth'}>{returnAuthType(authType)}</Button>
                    </>
                );
        }
    };

    return (
        <Container>
            <Icon></Icon>
            <h2>{returnAuthType(authType)}</h2>
            <TextField inputType={'email'}></TextField>
            <TextField inputType={'password'}></TextField>
            {renderComponentByAuthType(authType)}
        </Container>
    );
}
