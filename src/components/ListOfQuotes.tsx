import React from "react";
import {
  Box,
  SlideFade,
  Tag,
  Stack,
  Text,
  Icon,
  HStack,
  Container,
} from "@chakra-ui/react";
import { Variants, motion } from "framer-motion";
import { Quotes } from "../types/quotesType";
import { FaThumbsUp, FaThumbsDown, FaStar } from "react-icons/fa";

type QuotesProps = {
  quotes: Quotes;
};

function ListOfQuotes({ quotes }: QuotesProps) {
  const cardVariants: Variants = {
    offscreen: {
      y: 300,
    },
    onscreen: {
      y: 50,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };
  return (
    <Container maxW="container.md">
      <Stack direction="column" my={5} spacing={5}>
        {quotes.quotes.map((quote, index) => (
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
            key={index}
          >
            <motion.div variants={cardVariants}>
              <Box
                py={7}
                px={12}
                bg="gray.50"
                borderRadius="base"
                key={quote.id}
              >
                <Stack direction="column" spacing={7}>
                  <Text as="q" fontStyle="italic" fontSize="2xl">
                    {quote.body}
                  </Text>
                  <Text as="cite" alignSelf="end" color="tomato" fontSize="xl">
                    {quote.author}
                  </Text>
                  <HStack spacing={5} alignItems="center">
                    <Text as="span">
                      <Icon as={FaThumbsUp} mr={2} color="green.400" />
                      {quote.upvotes_count}
                    </Text>
                    <Text as="span">
                      <Icon as={FaThumbsDown} mr={2} color="red.400" />
                      {quote.downvotes_count}
                    </Text>
                    <Text as="span">
                      <Icon as={FaStar} mr={2} color="yellow.400" />
                      {quote.favorites_count}
                    </Text>
                  </HStack>
                  <HStack>
                    {quote.tags.map((tag, index) => (
                      <Tag variant="solid" key={index}>
                        {tag}
                      </Tag>
                    ))}
                  </HStack>
                </Stack>
              </Box>
            </motion.div>
          </motion.div>
        ))}
      </Stack>
    </Container>
  );
}

export default ListOfQuotes;
