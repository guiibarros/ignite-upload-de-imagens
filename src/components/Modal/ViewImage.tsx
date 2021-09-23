import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Image,
  Link,
} from '@chakra-ui/react';

interface ModalViewImageProps {
  isOpen: boolean;
  onClose: () => void;
  imgUrl: string;
}

export function ModalViewImage({
  isOpen,
  onClose,
  imgUrl,
}: ModalViewImageProps): JSX.Element {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent
        bgColor="pGray.800"
        h="100%"
        maxH="600px"
        w="100%"
        maxW="900px"
        m={5}
      >
        <ModalBody px={0} py={0} overflow="hidden">
          <Image src={imgUrl} h="100%" w="100%" objectFit="cover" />
        </ModalBody>
        <ModalFooter py="3" justifyContent="left">
          <Link href={imgUrl} isExternal>
            Abrir original
          </Link>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
