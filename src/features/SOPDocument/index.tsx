import { Box, Flex, Icon } from '@chakra-ui/react';
import { Layout } from './components';
import { AIBox, AIButton, AIText } from '@/ui-kit';
import { ArrowIcon, ExcelIcon, LockIcon, PdfIcon } from '@/icons';
import { DotNew } from '@/components';
import { useTranslation } from 'next-i18next';

const Documents = [
  {
    title: 'Business Requirement Document',
    des: 'Formal document that outlines the detailed requirements and expectations of a project or system from a business perspective.',
    icon: PdfIcon,
    status: 'new',
  },
  {
    title: 'WBS',
    des: 'Formal document that outlines the detailed requirements and expectations of a project or system from a business perspective.',
    icon: ExcelIcon,
    status: 'closed',
  },
  {
    title: 'Proposal',
    des: 'Formal document that outlines the detailed requirements and expectations of a project or system from a business perspective.',
    icon: PdfIcon,
    status: 'closed',
  },
  {
    title: 'Software Requirement Specification',
    des: 'Formal document that outlines the detailed requirements and expectations of a project or system from a business perspective.',
    icon: ExcelIcon,
    status: 'closed',
  },
  {
    title: 'User Flow',
    des: 'Formal document that outlines the detailed requirements and expectations of a project or system from a business perspective.',
    icon: PdfIcon,
    status: 'closed',
  },
  {
    title: 'Design UI/UX',
    des: 'Formal document that outlines the detailed requirements and expectations of a project or system from a business perspective.',
    icon: ExcelIcon,
    status: 'closed',
  },
  {
    title: 'Project Timeline',
    des: 'Formal document that outlines the detailed requirements and expectations of a project or system from a business perspective.',
    icon: PdfIcon,
    status: 'closed',
  },
  {
    title: 'Test Case',
    des: 'Formal document that outlines the detailed requirements and expectations of a project or system from a business perspective.',
    icon: ExcelIcon,
    status: 'closed',
  },
  {
    title: 'User Guide',
    des: 'Formal document that outlines the detailed requirements and expectations of a project or system from a business perspective.',
    icon: PdfIcon,
    status: 'closed',
  },
  {
    title: 'Release & Close project',
    des: 'Formal document that outlines the detailed requirements and expectations of a project or system from a business perspective.',
    icon: PdfIcon,
    status: 'closed',
  },
];

export const SOPDocument = () => {
  const { t } = useTranslation();
  return (
    <Layout>
      <Flex flexWrap="wrap" gap="14px">
        {Documents.map((document, idx) => (
          <AIBox
            backdropFilter="blur(5px)"
            maxW="220px"
            h="232px"
            position="relative"
            p="12px"
            key={idx}
            spacing={0}
          >
            {document.status === 'new' && (
              <Flex position="absolute" right="5px" top="13px">
                <DotNew />
              </Flex>
            )}

            {document.status === 'closed' && (
              <Flex
                position="absolute"
                w="100%"
                h="100%"
                zIndex="docked"
                top="0"
                right="0"
                left="0"
                bg="rgba(33, 32, 40, 0.6)"
                backdropFilter="blur(2px)"
              >
                <Flex
                  w="36px"
                  h="36px"
                  borderRadius="full"
                  bg="text.400"
                  justify="center"
                  align="center"
                  position="absolute"
                  top="8px"
                  right="8px"
                >
                  <Icon as={LockIcon} w="20px" h="20px" />
                </Flex>
              </Flex>
            )}

            <Flex align="center" justify="space-between">
              <Flex
                borderRadius="6"
                w="48px"
                h="48px"
                justify="center"
                align="center"
                backdropFilter="blur(10px)"
                bg="url(document-box-wrapper.png) top no-repeat"
                bgSize="cover"
              >
                <Icon as={document.icon} w="28px" h="28px" />
              </Flex>
            </Flex>

            <Box mt="12px !important">
              <AIText fontWeight="bold">{document.title}</AIText>

              <AIText
                color="text.300"
                fontSize="xs"
                style={{
                  width: '100%',
                  overflow: 'hidden',
                  display: '-webkit-box',
                  WebkitLineClamp: '3',
                  WebkitBoxOrient: 'vertical',
                }}
              >
                {document.des}
              </AIText>
            </Box>

            <Flex w="100%" justify="flex-end" flex="1" align="flex-end">
              <AIButton
                variant="primary-transparent"
                maxW="110px"
                rightIcon={<Icon as={ArrowIcon} w="18px" h="18px" />}
              >
                {t('view_detail')}
              </AIButton>
            </Flex>
          </AIBox>
        ))}
      </Flex>
    </Layout>
  );
};
