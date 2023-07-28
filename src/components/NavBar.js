import React from "react";
import { Flex, Heading, Text } from "@chakra-ui/react";

import NavDrawer from "./NavDrawer";
import styles from "../styles/NavBar.module.css";
const NavBar = () => {
  return (
    <Flex
      justifyContent={"space-between"}
      alignItems={"center"}
      margin={"2rem 4rem"}
      className={styles.slideInAbove}
    >
      <Flex ml={"2rem"}>
        <Heading>HHK</Heading>
      </Flex>
      <Flex justifyContent={"space-between"} gap={6} className={styles.mainNav}>
        <a href="#home">
          <Text
            className={styles.links}
            fontFamily={"roboto"}
            fontSize={"1rem"}
            textTransform={"uppercase"}
          >
            Home
          </Text>
        </a>
        <a href="#about">
          <Text
            className={styles.links}
            fontFamily={"roboto"}
            fontSize={"1rem"}
            textTransform={"uppercase"}
          >
            About
          </Text>
        </a>
        <a href="#portfolio">
          <Text
            className={styles.links}
            fontFamily={"roboto"}
            fontSize={"1rem"}
            textTransform={"uppercase"}
          >
            Portfolio
          </Text>
        </a>
        <a href="#skills">
          <Text
            className={styles.links}
            fontFamily={"roboto"}
            fontSize={"1rem"}
            textTransform={"uppercase"}
          >
            Skills
          </Text>
        </a>
        <a href="#contact">
          <Text
            className={styles.links}
            fontFamily={"roboto"}
            fontSize={"1rem"}
            textTransform={"uppercase"}
          >
            Contact
          </Text>
        </a>
      </Flex>
      <Flex className={styles.sideDrawer}>
        <NavDrawer />
      </Flex>
    </Flex>
  );
};

export default NavBar;
