'use client';

import { useState } from 'react';

import {
	BottomNavigation,
	BottomNavigationAction,
	Box,
	Container,
} from '@mui/material';

import {
	Bookmarks,
	MenuBook,
	Search as SearchIcon,
	Settings,
} from '@mui/icons-material';

import { AppBarWithSearch } from '@/app/ui/index';

// Pixel width of the sidebars
const leftWidth = 225;
const rightWidth = 300;

// Sidebar breakpoints
const leftBP = 'md'; // 900px
const rightBP = 'lg'; // 1200px

// XL breakpoint
const maxWidth = 1536;

export default function Layout({ ...props }) {
	// Highlight icons on bottom nav
	const [value, setValue] = useState(0);

	return (
		<Box className={'flex-col mx-auto'} maxWidth={'xl'}>
			<AppBarWithSearch />

			{/* TODO: these three containers are very similar, put them into a map function and split into new component */}
			<Box className={'flex'}>
				{/* Left sidebar */}
				<Container
					className={'max-h-screen overflow-y-auto'}
					sx={{
						display: { xs: 'none', [`${leftBP}`]: 'block' },
						width: { [`${leftBP}`]: leftWidth },
						flexShrink: { [`${leftBP}`]: 0 },
					}}
				>
					{props.leftCol}
				</Container>

				{/* Body */}
				<Container className={'max-h-screen overflow-y-auto'}>
					{props.main}
				</Container>

				{/* Right sidebar */}
				<Container
					className={'max-h-screen overflow-y-auto'}
					sx={{
						display: { xs: 'none', [`${rightBP}`]: 'block' },
						width: { [`${rightBP}`]: rightWidth },
						flexShrink: { [`${rightBP}`]: 0 },
					}}
				>
					{props.rightCol}
				</Container>

				{/* Bottom avigation */}
				<Container
					sx={{
						display: { sm: 'none' },
						position: 'fixed',
						top: 'auto',
						bottom: 0,
						width: '100%',
						maxWidth: {
							[`${leftBP}`]: `calc(100% - ${leftWidth}px)`,
							[`${rightBP}`]: `calc(100% - ${
								leftWidth + rightWidth
							}px)`,
							xl: `calc(${maxWidth}px - ${
								leftWidth + rightWidth
							}px)`,
						},
						ml: { [`${leftBP}`]: `${leftWidth}px` },
					}}
				>
					<BottomNavigation
						showLabels
						value={value}
						onChange={(_e, newValue) => {
							setValue(newValue);
						}}
					>
						<BottomNavigationAction
							label="Chapters"
							icon={<MenuBook />}
							sx={{ display: { [`${leftBP}`]: 'none' } }}
						/>

						<BottomNavigationAction
							label="Bookmarks"
							icon={<Bookmarks />}
							sx={{ display: { [`${rightBP}`]: 'none' } }}
						/>

						<BottomNavigationAction
							label="Search"
							icon={<SearchIcon />}
						/>

						<BottomNavigationAction
							label="Settings"
							icon={<Settings />}
						/>
					</BottomNavigation>
				</Container>
			</Box>
		</Box>
	);
}

const leftCol = (
	<Box className={'bg-emerald-300'}>
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
		cupiditate adipisci, possimus rem fuga ex iusto dolor, nihil molestias
		vitae hic? Dolores sequi explicabo cum accusantium molestias culpa ipsa
		optio quaerat nesciunt nisi consequatur laboriosam nobis fugit, minima
		numquam, quis voluptatem fuga repudiandae quibusdam eveniet est
		corporis! Tempore ut eveniet ad consequatur sed debitis nobis unde iste
		vero similique, architecto impedit sunt obcaecati a animi adipisci ab
		necessitatibus facilis in deserunt deleniti ratione tenetur omnis.
		Eveniet amet quisquam minus incidunt dolor itaque ipsam possimus dolorem
		perferendis iusto corrupti saepe sequi, at iure dolores quos, error
		vero? Repellat, ea aliquam quidem dolores fuga dolorum, animi optio vel
		temporibus, voluptates consectetur assumenda cum nulla vero hic rerum
		explicabo enim placeat aspernatur quos! Laboriosam ex cum, repellat,
		dolor nesciunt ratione unde voluptas dolores libero explicabo culpa nemo
		enim tenetur adipisci consequatur a vitae inventore fuga, aperiam
		tempore aliquam? Doloribus, nihil. Cumque esse, quidem at dolorum sit
		asperiores quibusdam sunt exercitationem pariatur, cupiditate eos fuga
		reprehenderit consequatur mollitia ut id alias provident hic inventore
		doloremque amet voluptate modi dolorem. Cumque porro ut eveniet enim
		commodi! Ad enim nesciunt nulla asperiores animi praesentium non
		placeat, perspiciatis minima impedit? Nulla nostrum voluptatibus
		asperiores sapiente doloribus ipsam quasi iusto reiciendis ex, sunt modi
		labore dolore similique debitis quis veritatis. Quasi doloribus non
		porro. Tempore, harum facilis ea incidunt praesentium aspernatur
		accusantium maxime officia amet ab optio voluptate autem cum sapiente
		pariatur, ad, exercitationem animi molestiae voluptatibus a sed
		temporibus quisquam ratione minima? Quas ducimus dolorem inventore.
		Voluptatum eaque ipsum velit, corrupti libero cum, odio molestiae
		exercitationem reiciendis aut rem veniam accusamus sit possimus
		doloremque pariatur minima atque totam obcaecati quod? Animi amet
		reprehenderit odit tenetur aspernatur, repellat vel sint corrupti facere
		consequuntur earum quos itaque, veritatis nihil qui provident accusamus
		a quae recusandae neque, ipsa nam! Voluptatibus, perspiciatis
		reprehenderit laudantium illum tenetur sunt quibusdam totam qui labore
		quaerat vero eius beatae, unde doloremque nam ipsa, voluptatem ducimus
		exercitationem recusandae saepe at? Recusandae beatae odio vitae id
		culpa non reiciendis, quia expedita, rerum quod alias aliquam distinctio
		laborum in placeat ex? Cumque quos, dolor minus vel tempore optio
		tempora molestiae? Earum corrupti quia porro quidem, odit quis vel est,
		nobis fugiat culpa dicta. Itaque nisi nihil porro sequi optio.
		Voluptatem corrupti atque quisquam, sint assumenda eaque deserunt
		voluptates quaerat eveniet maiores molestiae quas, eius fugiat obcaecati
		corporis consequatur aperiam aut qui! Sequi qui, sed eum corporis rerum
		porro error! Distinctio quo perferendis, minus, eos itaque sunt odit
		quibusdam provident, quia accusantium autem. Laudantium excepturi unde,
		modi, perspiciatis facere totam quibusdam alias velit molestiae
		voluptatum magni quas quia voluptatem blanditiis sunt in! Sit
		perspiciatis ipsum pariatur, molestias nobis itaque blanditiis veniam,
		aperiam quisquam voluptates iure quaerat vel provident odio nemo sed
		eligendi? Aliquam aut necessitatibus consequuntur, eveniet sed rem
		facilis vel! Expedita, perferendis possimus. Sapiente vel, dignissimos
		natus consequuntur facere eaque! Ad similique ea iste nam perspiciatis
		maxime in fugit aut placeat, quo deleniti eos molestiae perferendis
		ducimus id sapiente ipsum saepe dolores quas excepturi expedita eveniet
		iure unde voluptatibus? Aperiam, unde sapiente! Reiciendis fugiat
		possimus labore unde ut velit dolore officiis nam numquam recusandae
		perferendis, autem ipsa cumque! Aperiam commodi aspernatur unde, quis
		illo nesciunt repellendus, voluptas, eos nisi minus libero cum velit
		labore sunt nostrum inventore. Porro, dolorum cum, magni nulla, nobis
		aspernatur tenetur enim accusamus quia laudantium quo. Explicabo saepe
		veniam labore, quo consectetur fugit error expedita harum iure qui eaque
		commodi, id voluptates non, reprehenderit debitis hic ab ad! Excepturi
		beatae, maxime officiis laborum quod, dolor ullam voluptatum modi, ex
		cumque est molestias quia eum nihil expedita esse eaque distinctio
		impedit libero? Ipsam, culpa vero nisi possimus voluptatem officiis
		aliquid expedita officia optio nihil sequi eveniet ab quos. Odit totam a
		fugit eveniet mollitia dignissimos, dolores blanditiis placeat
		consequuntur ex aut ratione laudantium, qui quibusdam numquam
		exercitationem! Alias ex ab corporis fugiat quam consectetur
		necessitatibus perferendis asperiores earum quibusdam odit aliquid
		reprehenderit saepe beatae inventore esse ipsum magnam dolore quis
		possimus, aliquam consequatur ea! Beatae magni a accusantium corporis
		optio neque dolore ullam, aperiam, dicta, maiores sit! Facere porro
		adipisci sunt! Accusamus vel natus inventore? Nobis laborum, laboriosam
		ipsam at delectus animi perferendis eos! Labore placeat mollitia quo
		recusandae eos odio rerum deserunt sint dolore ipsum est illum esse
		perferendis sequi ut dolorem quod, expedita, consectetur necessitatibus
		quisquam. Quo nesciunt aliquid odit esse tempora facilis dignissimos
		reiciendis quas ullam voluptatum beatae quasi provident, voluptate
		quibusdam harum, libero culpa sit! Distinctio ea quas animi, temporibus
		qui tenetur voluptates debitis consectetur, eius voluptatibus nulla in
		explicabo repellat. Pariatur esse repellat laudantium? At, quae! Dolorem
		ipsum culpa temporibus, voluptates et voluptatem debitis ipsa quod
		animi? Esse qui quas ab enim eius maxime quia repellat tempora nihil
		modi sit fugiat a accusantium iusto illo quos quasi, beatae neque autem
		consectetur nobis officia nesciunt obcaecati natus. Magnam architecto
		quia labore perferendis odio est velit, veritatis ut deleniti, porro
		possimus perspiciatis non id a sequi numquam! Cumque tempore temporibus
		doloribus accusamus ea, vitae repudiandae fugit! Reprehenderit, possimus
		non corporis, accusamus voluptatibus eaque laudantium commodi, fuga est
		odit tenetur repudiandae necessitatibus quidem dolore assumenda
		accusantium nihil odio architecto! Consequuntur, eum odit iure sapiente
		quibusdam porro. Tempora ex aspernatur ullam laudantium obcaecati
		voluptatum sapiente earum quaerat corporis soluta, enim eos aliquam
		eligendi, ut dicta numquam quod. Beatae quae ut repellendus assumenda!
		Omnis sequi, perspiciatis nostrum tempora ipsa beatae, et odio neque
		deserunt reiciendis officiis earum exercitationem sit ex est. Labore
		harum adipisci perspiciatis error explicabo maiores iure in vel minus
		facilis voluptatibus fugit libero id, modi reprehenderit reiciendis
		nesciunt corporis doloribus. Est commodi praesentium eaque aperiam
		repudiandae dolorem dignissimos tenetur aut, cumque, repellat quasi,
		dolores ipsa porro debitis placeat totam mollitia harum itaque
		necessitatibus aliquid esse magni. Commodi assumenda vel id voluptates
		fugiat molestias numquam consequuntur culpa saepe praesentium aut ipsum
		ratione rem in ipsa libero hic fugit quae aliquid, at, sed aperiam
		facilis? Ad provident odit cupiditate esse ab aut, voluptas reiciendis
		debitis similique ex dignissimos sapiente. Temporibus explicabo rem
		modi, ipsa beatae culpa, voluptatem ipsam, dolorum vero illum magni quo
		aperiam!
	</Box>
);

const centerCol = (
	<Box className={'bg-cyan-300'}>
		Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur,
		magnam explicabo beatae possimus quam culpa praesentium fugiat laborum
		et officia, neque veniam nemo illum nobis assumenda, quo maxime
		asperiores. Fugit aut ullam deserunt ipsa, nam fugiat rem earum
		laudantium! Iure deserunt minus possimus eaque vero ex pariatur
		laudantium velit, facilis quia voluptatibus nobis ullam quo itaque
		maxime mollitia. Ducimus ex asperiores, iste dolor dignissimos nostrum
		officia deserunt et! Possimus suscipit laboriosam, libero atque quam
		quia aperiam neque minima reiciendis aliquam ratione dolores similique
		saepe adipisci nulla sequi dignissimos, optio praesentium eum ipsa ut
		doloribus magnam harum. Culpa, debitis ad quae ut dicta est
		necessitatibus quod at dignissimos deleniti quaerat assumenda illo
		facilis. Alias reiciendis laboriosam a optio nisi laudantium
		exercitationem sequi commodi? Ad aut voluptate rem atque, nihil
		consequuntur quidem odit culpa officiis explicabo animi iusto. Cumque
		nostrum eligendi officia in reprehenderit distinctio doloribus inventore
		aliquid libero voluptate fuga porro, ab, quis perferendis commodi vitae
		minima sint dolores ipsa corrupti accusamus! Aut reprehenderit beatae
		sint pariatur tempore odio, sapiente facere corrupti numquam dignissimos
		quos doloribus eveniet laboriosam veritatis deserunt? Exercitationem
		repudiandae quibusdam dolores, maiores delectus voluptas laboriosam
		eligendi eius repellat, consequuntur ducimus praesentium, ullam quasi
		facilis sunt odio numquam optio quos distinctio deleniti illo nihil
		harum! Corrupti ratione ipsam quam possimus. Iure, veniam vitae nisi,
		culpa modi reiciendis corporis consectetur dignissimos nesciunt, quaerat
		aut assumenda delectus harum ratione amet nobis! Aut, libero
		praesentium! Veritatis impedit eum molestiae aspernatur, rerum laborum
		deserunt amet. Laudantium nam alias autem totam, eum reprehenderit quam
		quisquam. Asperiores, recusandae modi. Necessitatibus, voluptatibus
		accusantium recusandae officia impedit provident laboriosam sapiente
		nemo voluptates quas dicta quaerat ea reiciendis fuga numquam assumenda
		commodi! Fuga molestias alias tenetur fugiat consectetur odit recusandae
		eius. Voluptatem assumenda animi ad, corporis aut voluptates delectus
		dolore rerum minima, deleniti impedit iusto deserunt quas perspiciatis
		sint, tenetur ea dolor ex at? Numquam ullam nihil animi ipsa veritatis
		vitae. Dignissimos voluptatibus voluptas praesentium magni culpa fugiat
		amet iure quasi reprehenderit, vel at in repellendus blanditiis saepe
		explicabo ratione, eum vitae? Dolores non rem ea inventore modi, velit
		iusto doloremque provident atque minima veniam commodi voluptate quas, a
		esse voluptatem, beatae corporis repellat explicabo ab officiis? Sed
		delectus inventore dolorem deserunt hic suscipit itaque, alias omnis
		officia natus accusamus perferendis unde nisi quod numquam repellendus
		quis! Dolorum, minima eveniet harum nisi beatae ducimus sunt, excepturi
		hic aperiam nemo quidem itaque deleniti deserunt fugit velit eius? Illum
		tempore veniam fugit totam voluptates cupiditate ipsam dignissimos sit
		vitae. Nulla, voluptates sequi unde facere illo quis quam dolorem eum
		libero eligendi ipsam fugit molestias, inventore, nesciunt harum
		consequuntur. Repellendus, nulla dolore. Voluptates dolorem quas
		deleniti corporis consectetur officia placeat ullam. Quis asperiores
		tempore ad aut eligendi quas dicta vitae eaque. Consequuntur iusto
		doloribus sit aliquid voluptatum, dicta ipsam soluta, provident pariatur
		accusamus maxime consectetur asperiores earum aperiam? Corporis pariatur
		recusandae eveniet dolore, nam aspernatur maiores quasi eos illum
		delectus nesciunt, adipisci deleniti cupiditate sunt labore commodi
		autem atque distinctio iste neque. Illo, facilis temporibus molestiae
		debitis maiores amet totam perferendis voluptatibus ad commodi, alias
		porro harum a obcaecati! Reprehenderit voluptatum sunt laudantium ex
		doloribus tenetur fugit autem repudiandae quidem nesciunt? Magnam
		inventore minima, nobis aspernatur recusandae sapiente ipsum harum
		perspiciatis. Deserunt nemo modi asperiores facilis? Saepe quod nisi
		sunt autem commodi illo sit, esse similique aperiam aliquam aut!
		Blanditiis deserunt optio eius commodi voluptatem, cumque adipisci ipsam
		laboriosam ut harum beatae vero vitae corrupti quam, voluptatum
		recusandae doloremque nam minus! Quod aliquid accusamus nemo repellat
		sit incidunt dicta esse voluptatem voluptatum architecto quisquam eaque
		necessitatibus rem, eum saepe laboriosam numquam vitae neque provident,
		voluptas ipsum aliquam nulla eligendi dolores? Cum eaque fugiat
		voluptatem beatae! Recusandae repellendus repellat cum facere beatae
		pariatur provident enim magnam tenetur officiis tempora cumque ullam,
		corporis animi reiciendis excepturi laudantium. Facilis in expedita
		distinctio, modi eius id libero tempora. Tempora consequuntur numquam
		dicta mollitia officiis minima! Recusandae deleniti aut blanditiis eum
		non delectus similique, maiores reiciendis, maxime eligendi laboriosam
		in voluptatem neque consequatur nihil praesentium voluptas alias natus
		expedita, eius architecto pariatur! Unde adipisci vero culpa repellendus
		suscipit, reiciendis nam omnis neque non atque in dolorum. Totam rem
		fuga, ducimus, veritatis reprehenderit laudantium repellendus earum
		maxime voluptate dolorum doloremque saepe sint consectetur similique
		deserunt ratione repudiandae eos expedita perferendis enim? Doloribus
		debitis delectus pariatur quaerat vitae ipsa libero suscipit soluta
		earum qui natus esse, excepturi molestiae ullam labore culpa sint
		dignissimos dolorem fugit id ex minima ea. Ducimus rerum assumenda cum?
		Non fugit dolores ab eum! Beatae velit ad porro quasi et vel natus autem
		fugit, cupiditate ratione, assumenda earum tenetur? In quaerat ratione
		rerum est reiciendis earum, ipsam, ab, vel ipsa consequatur minus quidem
		velit! Doloremque labore illo dolores, quasi eius voluptas non quos
		tempora alias magnam, ipsam tenetur, aliquid nisi fugit libero ex optio
		nemo. Tempora vero dolor mollitia cupiditate tempore fuga quia
		architecto quidem, autem magni, aut consequatur. Voluptatem voluptas
		consequatur nisi quam perspiciatis fugit eveniet harum, recusandae quis
		consequuntur deserunt dolores esse delectus quo odit necessitatibus
		pariatur eos doloribus enim. Molestiae aspernatur neque, tempore, qui ad
		et saepe magni dolore nihil modi amet distinctio odio exercitationem! Ea
		voluptates voluptatum delectus dolorum ipsa repellat, iure a harum,
		animi assumenda sed consectetur modi. Doloribus, illum dicta quasi
		deleniti suscipit temporibus alias fugiat eius deserunt et repudiandae
		possimus libero labore architecto quo odit reprehenderit porro eos nisi.
		Voluptas doloremque, labore minima ea vero provident, totam incidunt ut
		possimus error velit. Aliquid quisquam nisi velit natus voluptas sed
		officiis possimus ex? Consectetur, adipisci aliquam. Veritatis aperiam
		maiores laboriosam minus exercitationem. Nam incidunt expedita facere
		ipsa, nisi a quaerat sed quod quia illo qui nemo sit earum quibusdam!
		Commodi numquam cumque incidunt minus magnam, consequuntur ipsa magni id
		dolorum nam expedita aut rem porro sapiente quo sed quas alias? Suscipit
		temporibus dolor neque placeat ab itaque praesentium quod? Voluptates
		quos amet aliquid iure, quas laborum ipsam earum ullam excepturi.
		Reprehenderit optio a impedit velit unde rem fugiat exercitationem, ex
		molestias hic totam asperiores cum deleniti repudiandae dolor
		repellendus blanditiis libero enim incidunt odit consequatur reiciendis
		tempora? Blanditiis.
	</Box>
);

const rightCol = (
	<Box className={'bg-orange-300'}>
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta fugit
		saepe ipsum natus quae facere, tempora rem quasi minus earum architecto
		dolor nobis repudiandae adipisci eos facilis veritatis, expedita
		perferendis nostrum voluptas reprehenderit? Dicta ex, voluptates
		nesciunt ipsa pariatur odio vero, culpa incidunt alias, perferendis
		voluptas ratione saepe corporis a nobis quasi cum! Nemo assumenda
		nesciunt nobis quisquam numquam officiis veritatis ut incidunt facilis
		eos explicabo exercitationem, laboriosam aperiam obcaecati reiciendis
		eum nostrum mollitia minus quos vitae, saepe deserunt architecto?
		Distinctio, quae recusandae! Eos doloribus cumque similique asperiores
		qui, dignissimos earum id quis, repudiandae ipsam esse aspernatur et
		quisquam aperiam itaque quos! Et quod voluptates quisquam unde voluptas
		repellat animi officiis, ratione quaerat, nisi incidunt laborum, magni
		numquam perspiciatis accusamus? Dicta, iste molestiae? Similique,
		provident ab laborum quo consequatur enim harum expedita corrupti eum
		debitis deserunt omnis quam vel voluptas dolor minima vitae esse at
		cupiditate ratione fugit quas sed sequi? Pariatur qui iste possimus unde
		quis perferendis inventore eveniet dolorem placeat voluptate, quisquam
		beatae provident odio sequi? Repellat numquam earum quaerat autem nam
		ipsam consequuntur eius. Ipsa porro quibusdam tempore vel, esse quas
		quia, voluptate sed autem doloribus architecto dolorem ipsum ab
		obcaecati aspernatur, voluptates velit quae cupiditate. Minus debitis
		vel perferendis rem quia enim et porro, corrupti dicta! Consequatur
		libero recusandae debitis nulla soluta. Odio sit autem voluptates eum
		totam dolorem obcaecati maiores repudiandae, sapiente possimus, esse
		ipsa fuga eius, ex est saepe! Nisi itaque voluptatum ad iste nesciunt
		asperiores sed laboriosam blanditiis sequi autem saepe alias facere
		nihil consequuntur a architecto aspernatur voluptas quas, accusantium
		perspiciatis. Doloribus, saepe deleniti blanditiis iste molestiae
		reiciendis exercitationem optio quo possimus explicabo repudiandae
		consequatur eius illum enim qui. Labore, consequuntur. Perferendis
		magnam, expedita, harum minus modi earum autem facilis quae qui soluta
		nam architecto a ab natus hic excepturi amet repudiandae? Reprehenderit
		molestias deleniti quae totam, nostrum omnis facere veniam incidunt,
		eaque corrupti magnam fugit quas eligendi veritatis aspernatur
		cupiditate non tempora obcaecati in perferendis. Qui, sapiente minima?
		Quibusdam magnam voluptatum autem at dignissimos dolor nisi nesciunt,
		quo, ratione neque non, laboriosam eum dolorem omnis accusantium
		tempora? Accusamus mollitia nemo perspiciatis. Neque incidunt aperiam
		iste nesciunt ut in doloribus dolorem aliquam asperiores ipsa? Numquam
		natus incidunt cum dolorum adipisci pariatur molestiae quos quidem amet
		veritatis, quia tempora, dolorem ipsum deleniti illo, doloremque
		aliquid. Excepturi quos praesentium exercitationem nostrum quas?
		Sapiente eaque totam quasi sequi, autem dolorem, corrupti quas
		accusantium optio quis distinctio consequatur non sit quia harum illo
		in. Aut perspiciatis corrupti sequi laudantium quis eius enim minima et
		quia! Odit expedita maxime excepturi magnam accusantium tempore quas
		labore laudantium vero. Ab eveniet nesciunt hic odit magni. Sit
		expedita, maiores ipsum perspiciatis neque modi! Fuga eius enim tempore
		aliquid ab aut nihil omnis quod maxime eos deleniti tenetur, cum culpa,
		ad rerum aliquam, animi velit et voluptatibus. Enim, illo, blanditiis in
		tempore soluta aliquam ea dolorum praesentium maiores sint modi
		inventore dolorem eveniet? Veniam id maiores nulla, pariatur sit rem non
		possimus, sint vitae voluptatibus velit nihil culpa cumque voluptatem at
		quia neque accusamus sapiente beatae laborum rerum in laboriosam sunt.
		Architecto voluptatem magnam nemo in eaque sint, cumque necessitatibus
		aspernatur ipsum veniam officiis tempore laudantium illum sequi
		doloremque distinctio maxime. Vero assumenda dolores ipsa molestias
		ratione ut eligendi aliquid maxime dolore fuga corrupti natus quidem
		necessitatibus hic, asperiores quis quos autem sit ipsam porro! Quas, in
		laborum? Inventore ut doloremque accusantium maiores aliquid culpa saepe
		fuga nostrum soluta, ullam vel qui cupiditate necessitatibus ratione
		perspiciatis nobis asperiores ab temporibus libero nihil. Tempora enim
		fuga nobis impedit id ullam cupiditate facere quibusdam rem assumenda,
		vitae minima itaque inventore voluptatum maxime, odit libero officia est
		vel quas sapiente. Velit blanditiis ut at dolor dolore eum quasi amet
		saepe? Consequuntur placeat neque quos iure debitis recusandae illo.
		Quia non facilis tempora consequatur culpa debitis ducimus, delectus
		aliquid laborum aliquam assumenda tempore veritatis mollitia velit
		maiores. Similique architecto quae illo voluptate, aliquid asperiores
		sunt delectus culpa dolores corporis eum autem. Laborum, itaque? Quos
		molestias natus facere provident minima accusamus non porro cum,
		blanditiis odio eum magnam cupiditate. Asperiores, doloribus! Accusamus
		exercitationem laboriosam soluta reiciendis corporis, aperiam, ut neque
		ullam tempora laudantium porro sapiente ducimus nesciunt eum blanditiis
		animi enim eius autem. Repellat suscipit aspernatur expedita rerum,
		itaque porro nulla laboriosam enim aliquid dolorum distinctio quidem
		vero autem nam sit vitae facilis quaerat sequi, dolor debitis adipisci,
		magni deserunt! Laboriosam hic at, delectus repellendus nam obcaecati
		quos tempora iste ipsam neque voluptatum incidunt similique ratione
		labore repellat, fugiat, quisquam dolor magni? Repellat laudantium
		ratione architecto quia nesciunt deserunt excepturi vel nisi ea
		adipisci. Odit veritatis voluptates illo magnam porro asperiores
		expedita, vitae aspernatur veniam quibusdam suscipit id, officiis ab
		nobis esse hic aperiam quasi. Commodi consectetur alias, facilis est
		explicabo eveniet molestiae ipsa delectus corporis repudiandae debitis
		et maiores architecto, neque earum facere dolores, aut saepe. Explicabo,
		consectetur eius? Inventore dignissimos quisquam dolorem ullam
		temporibus iusto provident quos impedit quas fuga? Cum doloremque
		exercitationem debitis commodi perspiciatis, blanditiis autem molestiae
		ratione, ab quod iure asperiores dicta, eos laborum? Sint molestias
		maxime commodi laudantium pariatur porro tempora rerum! Mollitia
		voluptatum ipsam error aut quae facilis nam reiciendis? Ducimus
		voluptatum, et aliquam soluta possimus qui sit quidem hic accusamus
		placeat ipsum, quis esse. Et corporis accusamus aliquid praesentium id,
		reiciendis nisi quidem ex amet incidunt placeat unde ratione illo magnam
		repellendus culpa delectus minima recusandae molestias maxime fuga.
		Veritatis corrupti iusto laudantium nobis amet nemo commodi accusamus ex
		rem adipisci, tenetur similique totam? Sunt vitae ad labore voluptatem!
		Molestiae eligendi ducimus amet ipsa beatae, porro facere qui nostrum
		incidunt. Sit, sunt. Quidem repellat hic modi cupiditate omnis, veniam
		beatae fuga aliquid? Inventore fugit quo adipisci delectus itaque
		consequatur vitae, tenetur aperiam? Magnam officiis delectus, odit neque
		cum omnis fugit nemo! Nam natus aspernatur veritatis ad quos debitis
		ducimus tenetur quisquam, minus sequi soluta eligendi atque vitae
		officia illum obcaecati ab quas asperiores quis temporibus, quia sed
		quidem! Illo, at consequatur minus, voluptate facilis atque fuga, ipsum
		amet alias eum praesentium consectetur! Dolor odit iusto natus quo
		voluptatum.
	</Box>
);
