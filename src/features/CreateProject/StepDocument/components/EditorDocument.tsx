import { LoadMore } from '@/components';
import { PROJECT_AUTH_TOKEN } from '@/constants';
import { LocalStorage } from '@/services/localStorage';
import { AIButton } from '@/ui-kit';
import { Box, Flex } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { useRef } from 'react';
import { UseFormReturn, useWatch } from 'react-hook-form';
import ReactMarkdown from 'react-markdown';
import { CSSReset } from '@chakra-ui/react';
import ChakraUIRenderer from 'chakra-ui-markdown-renderer';

const init = {
  height: 'calc(100vh - 121px)',
  menubar: true,
  statusbar: false,
  // promotion: true,
  plugins: [
    'advlist',
    'autolink',
    'lists',
    'link',
    'image',
    'charmap',
    'preview',
    'anchor',
    'searchreplace',
    'visualblocks',
    'code',
    'fullscreen',
    'insertdatetime',
    'media',
    'table',
    'code',
    'help',
    'wordcount',
  ],
  toolbar:
    'undo redo | blocks | ' +
    'bold italic forecolor | alignleft aligncenter ' +
    'alignright alignjustify | bullist numlist outdent indent | ' +
    'link image ' +
    'removeformat | help',
  content_style:
    'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
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

interface IProps {
  form: UseFormReturn<any>;
}

const EditorDocument = ({ form }: IProps) => {
  const { t } = useTranslation();
  const editorRef = useRef(null);
  const router = useRouter();
  const { control } = form;

  const document = useWatch({
    control,
    name: 'document',
  });
  console.log('document: ', document);

  const profile = LocalStorage.get(PROJECT_AUTH_TOKEN);

  // const renderDocument = () => {
  //   return ReactDom.render(<ReactMarkdown children={document} />, document.body);
  // };

  return (
    <Box w="100%" h="100%" paddingBottom="50px">
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
    </Box>
  );
};

export default EditorDocument;
