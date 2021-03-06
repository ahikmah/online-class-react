import React from 'react';
import { Modal, Button } from 'react-bootstrap';

function ModalForm(props) {
    return (
        <Modal
            animation={false}
            {...props}
            size='md'
            aria-labelledby='contained-modal-title-vcenter'
            centered
        >
            <Modal.Header
                style={{
                    justifyContent: 'center',
                }}
            >
                <Modal.Title id='contained-modal-title-vcenter'>
                    {props.header}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body
                style={{
                    textAlign: 'center',
                }}
            >
                <p
                    style={{
                        margin: '0',
                    }}
                >
                    {props.msg}
                </p>
            </Modal.Body>
            <Modal.Footer
                style={{
                    justifyContent: 'center',
                    height: 'fit-content',
                    paddingBottom: '0',
                }}
            >
                <Button
                    onClick={props.onHide}
                    variant={props.variant}
                    style={{
                        fontSize: '1rem',
                        height: 'fit-content',
                    }}
                >
                    {props.footermsg}
                </Button>
                {props.onConfirmation ? (
                    <Button
                        onClick={props.onConfirmation}
                        variant={props.variant2}
                        style={{
                            fontSize: '1rem',
                            height: 'fit-content',
                        }}
                    >
                        {props.footermsg2}
                    </Button>
                ) : null}
            </Modal.Footer>
        </Modal>
    );
}
export default ModalForm;
