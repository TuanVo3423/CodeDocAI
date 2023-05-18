import { useGetDocument } from '@/api/selection';
import { BackTo, LoadMore } from '@/components';
import { movePage } from '@/motion';
import { useGlobalLoading } from '@/store';
import { AIButton, AIText } from '@/ui-kit';
import { Box, Flex, useToast } from '@chakra-ui/react';
import ChakraUIRenderer from 'chakra-ui-markdown-renderer';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';

interface IStepStepDocumentProps {}

const DocumentWatch = ({}: IStepStepDocumentProps) => {
  const toast = useToast();
  const toggleLoading = useGlobalLoading((state) => state.toggleLoading);
  const closeLoading = useGlobalLoading((state) => state.closeLoading);

  const router = useRouter();
  const selectionId = Number(router.query.documentId);

  const { data: document, refetch: refetchGetDocument } =
    useGetDocument(selectionId);

  //   const handleGenerateDocument = useCallback(async () => {
  //     toggleLoading('Generating document for your project...');
  //     try {
  //       await generateDocument(selectionId).then((res) => console.log(res));
  //     } catch (error: any) {
  //       toast({
  //         description: error?.message,
  //         status: 'error',
  //       });
  //     } finally {
  //       closeLoading();
  //     }
  //   }, [closeLoading, selectionId, toast, toggleLoading]);

  //   useEffect(() => {
  //     if (selectionId) {
  //       handleGenerateDocument();
  //     }
  //   }, [selectionId]);

  //   useEffect(() => {
  //     if (selectionId) {
  //       if (document?.data) {
  //         setValue('document', document.data);
  //         return;
  //       }
  //       const timer = setInterval(() => refetchGetDocument(), 30 * 1000); // call again 2 minutes

  //       return () => {
  //         clearInterval(timer);
  //       };
  //     }
  //   }, [document?.data, refetchGetDocument, selectionId]);

  useEffect(() => {
    console.log({ selectionId });
  }, [selectionId]);
  console.log('document: ', document);

  return (
    <Box bg="text.0" w="100%" minH="100vh" as={motion.div} {...movePage}>
      <Header />

      <Flex w="100%" h="100%">
        {/* <Left form={form} /> */}

        <EditorDocument document={document?.data} />
      </Flex>
    </Box>
  );
};

export default DocumentWatch;

export const Header = () => {
  const router = useRouter();

  return (
    <Flex p="10px 16px" borderBottom="1px solid" borderColor="text.100">
      <Flex gap="24px">
        <BackTo
          action={() => {
            router.back();
          }}
          w="fit-content"
          sx={{ svg: { color: 'text.900' } }}
        />

        <AIText fontSize="2xl" color="text.900" fontWeight="bold">
          {/* {t('business_requirement_document')} */}
          Software Requirement Document
        </AIText>
      </Flex>
    </Flex>
  );
};

const testDocument = `
# Ne veniat urbs sole

## Ruunt et supplice vixque

Lorem markdownum vehit. E non palmas Neptune vel noscere sequenti sociis antris
nocebant coepit. Indoluit luridus percussit nocet tabellis in, a clamore fronti
gnato armandique erat: habebat ad fallunt. Piscem mea amissos, infames litore
novissima deorum?

    table_igp = 4 * expansionMcaMca + zeroShell +
            ping_system_risc.socket_scareware_memory.pQbeWizard(
            sequence_row_interface.serviceTypeBox(joystickTruncateTtl,
            jreExportBit, 1), backup_surface * spoolingKerning);
    var fiber_copy = refresh_ppga_primary.server_open(header_fifo, 19) /
            bitmap_base;
    file.friendly = cluster_application - backboneConfigurationNetworking(ppp +
            joystickChecksumMms);
    var carrierVertical = hexadecimal_dimm(2, transfer_camera_terabyte) -
            winsock;

## Erit inani habebat penset Danais relictum trabem

Pars solidissima loca; et ardua, paludes tamen perfringit unda ac specto,
gradibus. Dapibus canenti datum poenae contegat quoque an cognitus operum magno
Augustis scitetur crescit Terram voveas. Unda corporibus summo Cumaea cuius
Themis, illic curae nomina tamen.

> Fessa nemo per corpore, cum exi; super innuba me tamquam perque: non. Certe
> absentem me ales virgo bracchia et portare in et vittam, vestigia ius pulsi
> pulvis. Omne dolentem Pyreneus, trifida innectite posse: [ubi
> opus](http://anni.net/vires) ex rector.

## Enixa copia tempora perfringit habet Lucifero equorum

Sua narret pestis quoniam, sed illos quam insequitur *huius*, iram emicat et
ilia celebrandaque. Longo silva refugam curvae hoc nec territus iubae deorum, tu
tempto, ense penetrale quae poenam!

1. Illic Ixione sata cum opem sacrorum resolvo
2. Cernunt leones quam
3. Caecaque is praedam protinus noctes suarum videndi
4. Columba sceptra potui

## Festisque novem tumulavit

Tenuisset plangebat si sacra, est et, sua sollertius noviens laterique. Mandata
quaerit Aeacide facta; dat tantum Olympus quaeris torpetis, rapi duro.

## Sine candentibus acti aurea dedit ferox Dolopum

Non corpore licet movit videtur molli. [Monitis
sim](http://www.colla.com/arbor.html) ecce urnisque super lectusque nemorum,
finemque sume, Silenum! Alis nulla, est sensus adhibent, ad, salutifer ab quas
mole animam quaedam. Igne torquere paucis fortis coniugis ferebat de laqueos
stupuit circuit prohibent.

Libet via recenti vocat, via quae loquor eum videri ensem quaeque sacerdos
victor in *de* enim ora. Paterque est frigida; hanc et tenuit ambo; caeli
vocesque dilapsa inlita. Gratantibus ego aera dixerit timetur funestaque in
abripit, genetrix parvo. Quam mens fatorum, et huic, Pelion, est greges.
Cecropidis tu fatur, tum neci nunc vix [iacebant tollens](http://www.tum.io/):
insilit ferunt!
`;

interface IEditorDocument {
  document: string;
}

const EditorDocument = ({ document }: IEditorDocument) => {
  const router = useRouter();

  return (
    <Box w="100%" h="100%">
      {/* <Editor
        apiKey="a5fqv7dvq9lzeg6egfnfgcq0x3tfieeqlj6cqc9cndny0i0a"
        //@ts-ignore
        onInit={(evt, editor) => (editorRef.current = editor)}
        initialValue={document}
        init={init}
      /> */}

      <Box color={'black'} overflow={'auto'} px={6}>
        <ReactMarkdown components={ChakraUIRenderer()} skipHtml>
          {document}
        </ReactMarkdown>
      </Box>

      <Flex
        flexDir="column"
        p="10px 16px"
        align="center"
        justify="space-between"
        borderTop="2px solid"
        borderColor="text.100"
        position={'fixed'}
        bottom="0"
        left="0"
        right="0"
        background={'white'}
      >
        {/* <Flex gap="10px">
          <Flex align="center" gap="8px">
            <AIImage url="/coin.svg" alt="coin" w="30px" h="30px" />
            <AIText
              fontSize="md"
              color="text.900"
              fontWeight="bold"
              minW="60px"
            >
              {t('coins', { number: 3 })}
            </AIText>

            <TooltipWhatIsCoin />
          </Flex>
          <AIButton maxW="90px" variant="dark-fill" h="30px">
            {t('subscribe')}
          </AIButton>
        </Flex> */}

        {!document && (
          <Box w="100%">
            <LoadMore title="document_creation_in_progress" />
          </Box>
        )}

        <Flex gap="10px">
          <AIButton
            w="180px"
            variant="primary-fill-while"
            onClick={() => {
              // profile ? router.push('/') : router.push('/auth/sign-up');
              // LocalStorage.set('isNewDocument', true);
              router.push('/result');
            }}
            // isDisabled={!document}
          >
            Go to Dashboard
          </AIButton>

          <AIButton
            w="180px"
            variant="dark-fill"
            onClick={() => {
              // profile ? router.push('/') : router.push('/auth/sign-up');
              // LocalStorage.set('isNewDocument', true);
              // router.push('/result');
            }}
            // isDisabled={!document}
          >
            Edit Document
          </AIButton>
        </Flex>
      </Flex>
    </Box>
  );
};
