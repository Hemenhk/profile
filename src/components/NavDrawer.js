import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  useDisclosure,
  Button,
  Text,
} from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";

const NavDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <Button
        ref={btnRef}
        backgroundColor={"transparent"}
        onClick={onOpen}
        _hover={{ backgroundColor: "transparent" }}
      >
        <FiMenu size={30} />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader
            fontFamily={"inter"}
            fontSize={"1rem"}
            fontWeight={"400"}
            textTransform={"uppercase"}
            borderBottomWidth={1}
          >
            Navigation
          </DrawerHeader>

          <DrawerBody paddingTop={"5rem"}>
            <Flex
              flexDirection={"column"}
              alignItems={"flex-start"}
              justifyContent={"space-between"}
              gap={10}
              marginLeft={"1rem"}
            >
              <a href="#home">
                <Text
                  fontFamily={"roboto"}
                  fontSize={"1rem"}
                  textTransform={"uppercase"}
                  borderBottomWidth={1}
                  pb={2}
                  w={100}
                >
                  Home
                </Text>
              </a>
              <a href="#about">
                <Text
                  fontFamily={"roboto"}
                  fontSize={"1rem"}
                  textTransform={"uppercase"}
                  borderBottomWidth={1}
                  pb={2}
                  w={100}
                >
                  About
                </Text>
              </a>
              <a href="#portfolio">
                <Text
                  fontFamily={"roboto"}
                  fontSize={"1rem"}
                  textTransform={"uppercase"}
                  borderBottomWidth={1}
                  pb={2}
                  w={100}
                >
                  Portfolio
                </Text>
              </a>
              <a href="#skills">
                <Text
                  fontFamily={"roboto"}
                  fontSize={"1rem"}
                  textTransform={"uppercase"}
                  borderBottomWidth={1}
                  pb={2}
                  w={100}
                >
                  Skills
                </Text>
              </a>
              <a href="#contact">
                <Text
                  fontFamily={"roboto"}
                  fontSize={"1rem"}
                  textTransform={"uppercase"}
                  borderBottomWidth={1}
                  pb={2}
                  w={100}
                >
                  Contact
                </Text>
              </a>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default NavDrawer;
