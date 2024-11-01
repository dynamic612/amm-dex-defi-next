'use client';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Divider } from "@nextui-org/react";
import SelectTokens from "./selectToken";
import FeeSelection from "./fee";

export default function PoolModal() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    return (
        <>
            <Button onPress={onOpen}
                color="secondary"
            >+ New Position</Button>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange} >
                <ModalContent >
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Add Liquidity</ModalHeader>
                            <Divider />
                            <ModalBody>
                                <p>Select pair</p>
                                <div className="flex flex-row gap-4">
                                    <SelectTokens />
                                    <SelectTokens />
                                </div>

                                <p>
                                    Fee tier
                                </p>
                                <FeeSelection />
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    Close
                                </Button>
                                <Button color="primary" onPress={onClose}>
                                    Action
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}